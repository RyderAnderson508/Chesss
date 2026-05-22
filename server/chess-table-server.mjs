import { createHash, randomBytes, randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 8787);
const dataDir = path.resolve("server-data");
const dataPath = path.join(dataDir, "chess-table.json");
const blobStoreName = "chess-table";
const blobDataKey = "data.json";

const defaultData = {
  users: {},
  sessions: {},
  rooms: {},
  friendRequests: {},
};

const blockedTerms = [
  "fuck",
  "shit",
  "bitch",
  "cunt",
  "dick",
  "pussy",
  "cock",
  "whore",
  "slut",
  "bastard",
  "nigger",
  "nigga",
  "faggot",
  "kike",
  "spic",
  "chink",
  "gook",
  "wetback",
  "tranny",
  "coon",
  "nazi",
  "hitler",
];

let blobStorePromise = null;
let data = await loadData();

async function getBlobStore() {
  if (!process.env.NETLIFY) return null;
  if (!blobStorePromise) {
    blobStorePromise = import("@netlify/blobs")
      .then(({ getStore }) => getStore(blobStoreName))
      .catch(() => null);
  }
  return blobStorePromise;
}

function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  const hash = createHash("sha256").update(`${salt}:${password}`).digest("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  if (!stored) return false;
  const [salt] = stored.split(":");
  return hashPassword(password, salt) === stored;
}

function makeRecoveryCode() {
  return randomBytes(4).toString("hex").toUpperCase().replace(/(.{4})/, "$1-");
}

function normalizeRecoveryAnswer(answer) {
  return String(answer || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizeModeratedText(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("@", "a")
    .replaceAll("4", "a")
    .replaceAll("0", "o")
    .replaceAll("1", "i")
    .replaceAll("!", "i")
    .replaceAll("3", "e")
    .replaceAll("5", "s")
    .replaceAll("$", "s")
    .replaceAll("7", "t")
    .replace(/[^a-z0-9]/g, "");
}

function containsBlockedLanguage(value) {
  const normalized = normalizeModeratedText(value);
  return blockedTerms.some((term) => normalized.includes(term));
}

function blockedFieldName(fields) {
  return Object.entries(fields).find(([, value]) => containsBlockedLanguage(value))?.[0] ?? null;
}

function blockedLanguageError(field) {
  return `${field} contains blocked language. Choose something clean.`;
}

function removeBlockedAccounts(database) {
  const blockedUserIds = new Set(
    Object.values(database.users)
      .filter(
        (user) =>
          containsBlockedLanguage(user.username) ||
          containsBlockedLanguage(user.displayName) ||
          containsBlockedLanguage(user.bio) ||
          containsBlockedLanguage(user.favoriteOpening) ||
          containsBlockedLanguage(user.location),
      )
      .map((user) => user.id),
  );

  if (!blockedUserIds.size) return false;

  for (const id of blockedUserIds) delete database.users[id];
  for (const [token, userId] of Object.entries(database.sessions)) {
    if (blockedUserIds.has(userId)) delete database.sessions[token];
  }
  for (const [id, request] of Object.entries(database.friendRequests)) {
    if (blockedUserIds.has(request.from) || blockedUserIds.has(request.to)) delete database.friendRequests[id];
  }
  for (const [code, room] of Object.entries(database.rooms)) {
    if (
      blockedUserIds.has(room.invitedUserId) ||
      blockedUserIds.has(room.players?.w) ||
      blockedUserIds.has(room.players?.b)
    ) {
      delete database.rooms[code];
    }
  }
  return true;
}

async function loadData() {
  const store = await getBlobStore();
  if (store) {
    try {
      const saved = await store.get(blobDataKey);
      if (saved) {
        const loaded = { ...defaultData, ...JSON.parse(saved) };
        for (const user of Object.values(loaded.users)) normalizeUser(user);
        if (removeBlockedAccounts(loaded)) await store.set(blobDataKey, JSON.stringify(loaded, null, 2));
        return loaded;
      }
    } catch {
      return structuredClone(defaultData);
    }
  }

  try {
    const loaded = { ...defaultData, ...JSON.parse(await readFile(dataPath, "utf8")) };
    for (const user of Object.values(loaded.users)) normalizeUser(user);
    if (removeBlockedAccounts(loaded)) {
      await mkdir(dataDir, { recursive: true });
      await writeFile(dataPath, JSON.stringify(loaded, null, 2));
    }
    return loaded;
  } catch {
    return structuredClone(defaultData);
  }
}

function normalizeUser(user) {
  user.avatar ??= "king";
  user.bio ??= "";
  user.displayName ??= user.username;
  user.favoriteOpening ??= "";
  user.friends ??= [];
  user.location ??= "";
  user.picture ??= "";
  user.recoveryQuestion ??= "Favorite pet name";
  user.stats ??= { games: 0, wins: 0, losses: 0, draws: 0, accuracyTotal: 0 };
  user.puzzle ??= { solved: 0, failed: 0, streak: 0, bestStreak: 0 };
  user.puzzle.categories ??= {};
  return user;
}

async function saveData() {
  const store = await getBlobStore();
  if (store) {
    await store.set(blobDataKey, JSON.stringify(data, null, 2));
    return;
  }

  await mkdir(dataDir, { recursive: true });
  await writeFile(dataPath, JSON.stringify(data, null, 2));
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Access-Control-Allow-Headers": "authorization, content-type",
    "Access-Control-Allow-Methods": "DELETE, GET, PATCH, POST, OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString("utf8");
  return body ? JSON.parse(body) : {};
}

function getUser(request) {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, "");
  const userId = token ? data.sessions[token] : null;
  return userId ? data.users[userId] : null;
}

function requireUser(request, response) {
  const user = getUser(request);
  if (!user) {
    sendJson(response, 401, { error: "Sign in required." });
    return null;
  }
  normalizeUser(user);
  return user;
}

function publicUser(user) {
  normalizeUser(user);
  return {
    avatar: user.avatar,
    bio: user.bio,
    displayName: user.displayName,
    favoriteOpening: user.favoriteOpening,
    id: user.id,
    location: user.location,
    picture: user.picture,
    puzzle: user.puzzle,
    recoveryQuestion: user.recoveryQuestion,
    hasRecoveryAnswer: Boolean(user.recoveryAnswerHash || user.recoveryHash),
    stats: user.stats,
    username: user.username,
  };
}

function friendUser(user) {
  normalizeUser(user);
  return {
    avatar: user.avatar,
    bio: user.bio,
    displayName: user.displayName,
    favoriteOpening: user.favoriteOpening,
    id: user.id,
    location: user.location,
    picture: user.picture,
    username: user.username,
    stats: user.stats,
  };
}

function getUserByUsername(username) {
  return Object.values(data.users).find(
    (user) => user.username.toLowerCase() === String(username || "").trim().toLowerCase(),
  );
}

function publicRoom(room) {
  return {
    ...room,
    invitedUsername: room.invitedUserId ? data.users[room.invitedUserId]?.username ?? null : null,
    players: {
      ...room.players,
      blackUsername: room.players.b ? data.users[room.players.b]?.username ?? null : null,
      whiteUsername: room.players.w ? data.users[room.players.w]?.username ?? null : null,
    },
  };
}

function getFriendPayload(user) {
  normalizeUser(user);
  const friends = user.friends.map((id) => data.users[id]).filter(Boolean).map(friendUser);
  const incoming = Object.values(data.friendRequests)
    .filter((request) => request.to === user.id && request.status === "pending")
    .map((request) => ({ id: request.id, from: friendUser(data.users[request.from]), createdAt: request.createdAt }));
  const outgoing = Object.values(data.friendRequests)
    .filter((request) => request.from === user.id && request.status === "pending")
    .map((request) => ({ id: request.id, to: friendUser(data.users[request.to]), createdAt: request.createdAt }));
  const invites = Object.values(data.rooms)
    .filter((room) => room.invitedUserId === user.id && !room.players.b && room.status === "waiting")
    .map(publicRoom);
  return { friends, incoming, outgoing, invites };
}

function makeRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i += 1) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return code;
}

export async function handleRequest(request, response) {
  if (request.method === "OPTIONS") {
    sendJson(response, 200, { ok: true });
    return;
  }

  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "POST" && url.pathname === "/api/signup") {
      const { username, password, recoveryAnswer } = await readJson(request);
      const cleanUsername = String(username || "").trim().slice(0, 24);
      const cleanRecoveryAnswer = normalizeRecoveryAnswer(recoveryAnswer);
      if (cleanUsername.length < 3 || String(password || "").length < 6) {
        sendJson(response, 400, { error: "Use a username with 3+ characters and a password with 6+ characters." });
        return;
      }
      if (cleanRecoveryAnswer.length < 2) {
        sendJson(response, 400, { error: "Add a recovery answer with 2+ characters." });
        return;
      }
      const blockedField = blockedFieldName({
        Username: cleanUsername,
        Password: password,
        "Recovery answer": cleanRecoveryAnswer,
      });
      if (blockedField) {
        sendJson(response, 400, { error: blockedLanguageError(blockedField) });
        return;
      }
      if (getUserByUsername(cleanUsername)) {
        sendJson(response, 409, { error: "That username is taken." });
        return;
      }

      const user = {
        avatar: "king",
        bio: "",
        displayName: cleanUsername,
        favoriteOpening: "",
        friends: [],
        id: randomUUID(),
        location: "",
        passwordHash: hashPassword(password),
        picture: "",
        recoveryQuestion: "Favorite pet name",
        recoveryAnswerHash: hashPassword(cleanRecoveryAnswer),
        stats: { games: 0, wins: 0, losses: 0, draws: 0, accuracyTotal: 0 },
        puzzle: { solved: 0, failed: 0, streak: 0, bestStreak: 0, categories: {} },
        username: cleanUsername,
      };
      const token = randomUUID();
      data.users[user.id] = user;
      data.sessions[token] = user.id;
      await saveData();
      sendJson(response, 201, { token, user: publicUser(user) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/password/reset") {
      const { username, recoveryAnswer, recoveryCode, password } = await readJson(request);
      const user = getUserByUsername(username);
      const cleanRecoveryAnswer = normalizeRecoveryAnswer(recoveryAnswer || recoveryCode);
      const legacyRecoveryCode = String(recoveryCode || recoveryAnswer || "").trim().toUpperCase();
      const answerMatches = user
        ? verifyPassword(cleanRecoveryAnswer, user.recoveryAnswerHash) || verifyPassword(legacyRecoveryCode, user.recoveryHash)
        : false;
      if (!user || !answerMatches) {
        sendJson(response, 401, { error: "Username or recovery answer was wrong." });
        return;
      }
      if (String(password || "").length < 6) {
        sendJson(response, 400, { error: "Use a password with 6+ characters." });
        return;
      }
      const blockedField = blockedFieldName({
        Password: password,
        "Recovery answer": cleanRecoveryAnswer,
      });
      if (blockedField) {
        sendJson(response, 400, { error: blockedLanguageError(blockedField) });
        return;
      }
      user.passwordHash = hashPassword(password);
      const token = randomUUID();
      data.sessions[token] = user.id;
      await saveData();
      sendJson(response, 200, { token, user: publicUser(user) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/login") {
      const { username, password } = await readJson(request);
      const user = getUserByUsername(username);
      if (!user || !verifyPassword(String(password || ""), user.passwordHash)) {
        sendJson(response, 401, { error: "Username or password was wrong." });
        return;
      }
      normalizeUser(user);
      const token = randomUUID();
      data.sessions[token] = user.id;
      await saveData();
      sendJson(response, 200, { token, user: publicUser(user) });
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/me") {
      const user = requireUser(request, response);
      if (!user) return;
      sendJson(response, 200, { user: publicUser(user) });
      return;
    }

    if (request.method === "PATCH" && url.pathname === "/api/profile") {
      const user = requireUser(request, response);
      if (!user) return;
      const { avatar, bio, displayName, favoriteOpening, location, picture, username } = await readJson(request);
      const cleanUsername = String(username || user.username).trim().slice(0, 24);
      const cleanDisplayName = String(displayName || cleanUsername).trim().slice(0, 32);
      const cleanAvatar = String(avatar || user.avatar || "king").trim().slice(0, 24);
      const cleanBio = String(bio || "").trim().slice(0, 160);
      const cleanFavoriteOpening = String(favoriteOpening || "").trim().slice(0, 48);
      const cleanLocation = String(location || "").trim().slice(0, 40);
      const cleanPicture = String(picture || "").trim().slice(0, 1_400_000);
      if (cleanUsername.length < 3) {
        sendJson(response, 400, { error: "Use a username with 3+ characters." });
        return;
      }
      const isPictureUrl = /^https?:\/\/[^\s]+$/i.test(cleanPicture);
      const isPictureDataUrl = /^data:image\/(?:png|jpe?g|webp);base64,[a-z0-9+/=]+$/i.test(cleanPicture);
      if (cleanPicture && !isPictureUrl && !isPictureDataUrl) {
        sendJson(response, 400, { error: "Use a full image URL or an uploaded JPG, PNG, or WebP profile photo." });
        return;
      }
      if (isPictureDataUrl && cleanPicture.length > 1_400_000) {
        sendJson(response, 400, { error: "Choose a smaller profile photo." });
        return;
      }
      const blockedField = blockedFieldName({
        Bio: cleanBio,
        Username: cleanUsername,
        "Display name": cleanDisplayName,
        "Favorite opening": cleanFavoriteOpening,
        Location: cleanLocation,
      });
      if (blockedField) {
        sendJson(response, 400, { error: blockedLanguageError(blockedField) });
        return;
      }
      const existing = getUserByUsername(cleanUsername);
      if (existing && existing.id !== user.id) {
        sendJson(response, 409, { error: "That username is taken." });
        return;
      }
      user.username = cleanUsername;
      user.displayName = cleanDisplayName;
      user.avatar = cleanAvatar;
      user.bio = cleanBio;
      user.favoriteOpening = cleanFavoriteOpening;
      user.location = cleanLocation;
      user.picture = cleanPicture;
      await saveData();
      sendJson(response, 200, { user: publicUser(user) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/profile/password") {
      const user = requireUser(request, response);
      if (!user) return;
      const { currentPassword, password } = await readJson(request);
      if (!verifyPassword(String(currentPassword || ""), user.passwordHash)) {
        sendJson(response, 401, { error: "Current password was wrong." });
        return;
      }
      if (String(password || "").length < 6) {
        sendJson(response, 400, { error: "Use a password with 6+ characters." });
        return;
      }
      if (containsBlockedLanguage(password)) {
        sendJson(response, 400, { error: blockedLanguageError("Password") });
        return;
      }
      user.passwordHash = hashPassword(password);
      await saveData();
      sendJson(response, 200, { user: publicUser(user) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/profile/recovery-answer") {
      const user = requireUser(request, response);
      if (!user) return;
      const { recoveryAnswer } = await readJson(request);
      const cleanRecoveryAnswer = normalizeRecoveryAnswer(recoveryAnswer);
      if (cleanRecoveryAnswer.length < 2) {
        sendJson(response, 400, { error: "Add a recovery answer with 2+ characters." });
        return;
      }
      if (containsBlockedLanguage(cleanRecoveryAnswer)) {
        sendJson(response, 400, { error: blockedLanguageError("Recovery answer") });
        return;
      }
      user.recoveryQuestion = "Favorite pet name";
      user.recoveryAnswerHash = hashPassword(cleanRecoveryAnswer);
      await saveData();
      sendJson(response, 200, { user: publicUser(user) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/profile/recovery-code") {
      const user = requireUser(request, response);
      if (!user) return;
      const recoveryCode = makeRecoveryCode();
      user.recoveryHash = hashPassword(recoveryCode);
      await saveData();
      sendJson(response, 200, { recoveryCode, user: publicUser(user) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/profile/stats/reset") {
      const user = requireUser(request, response);
      if (!user) return;
      user.stats = { games: 0, wins: 0, losses: 0, draws: 0, accuracyTotal: 0 };
      user.puzzle = { solved: 0, failed: 0, streak: 0, bestStreak: 0, categories: {} };
      await saveData();
      sendJson(response, 200, { user: publicUser(user) });
      return;
    }

    if (request.method === "DELETE" && url.pathname === "/api/account") {
      const user = requireUser(request, response);
      if (!user) return;
      for (const friendId of user.friends) {
        const friend = data.users[friendId];
        if (friend) friend.friends = (friend.friends || []).filter((id) => id !== user.id);
      }
      for (const [token, userId] of Object.entries(data.sessions)) {
        if (userId === user.id) delete data.sessions[token];
      }
      for (const [id, requestItem] of Object.entries(data.friendRequests)) {
        if (requestItem.from === user.id || requestItem.to === user.id) delete data.friendRequests[id];
      }
      for (const [code, room] of Object.entries(data.rooms)) {
        if (Object.values(room.players).includes(user.id) || room.invitedUserId === user.id) delete data.rooms[code];
      }
      delete data.users[user.id];
      await saveData();
      sendJson(response, 200, { ok: true });
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/users/search") {
      const user = requireUser(request, response);
      if (!user) return;
      const q = String(url.searchParams.get("q") || "").trim().toLowerCase();
      if (q.length < 2) {
        sendJson(response, 200, { users: [] });
        return;
      }
      const users = Object.values(data.users)
        .filter((item) => item.id !== user.id && item.username.toLowerCase().includes(q))
        .slice(0, 8)
        .map(friendUser);
      sendJson(response, 200, { users });
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/friends") {
      const user = requireUser(request, response);
      if (!user) return;
      sendJson(response, 200, getFriendPayload(user));
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/friends/requests") {
      const user = requireUser(request, response);
      if (!user) return;
      const { username } = await readJson(request);
      const target = getUserByUsername(username);
      if (!target || target.id === user.id) {
        sendJson(response, 404, { error: "That player was not found." });
        return;
      }
      normalizeUser(user);
      normalizeUser(target);
      if (user.friends.includes(target.id)) {
        sendJson(response, 409, { error: "You are already friends." });
        return;
      }
      const existing = Object.values(data.friendRequests).find(
        (item) =>
          item.status === "pending" &&
          ((item.from === user.id && item.to === target.id) || (item.from === target.id && item.to === user.id)),
      );
      if (existing) {
        sendJson(response, 409, { error: "A friend request already exists." });
        return;
      }
      const friendRequest = { id: randomUUID(), from: user.id, to: target.id, status: "pending", createdAt: Date.now() };
      data.friendRequests[friendRequest.id] = friendRequest;
      await saveData();
      sendJson(response, 201, getFriendPayload(user));
      return;
    }

    if (request.method === "POST" && url.pathname.match(/^\/api\/friends\/requests\/[^/]+\/accept$/)) {
      const user = requireUser(request, response);
      if (!user) return;
      const requestId = url.pathname.split("/")[4];
      const friendRequest = data.friendRequests[requestId];
      if (!friendRequest || friendRequest.to !== user.id || friendRequest.status !== "pending") {
        sendJson(response, 404, { error: "Friend request not found." });
        return;
      }
      const from = data.users[friendRequest.from];
      normalizeUser(user);
      normalizeUser(from);
      if (!user.friends.includes(from.id)) user.friends.push(from.id);
      if (!from.friends.includes(user.id)) from.friends.push(user.id);
      friendRequest.status = "accepted";
      await saveData();
      sendJson(response, 200, getFriendPayload(user));
      return;
    }

    if (request.method === "POST" && url.pathname.match(/^\/api\/friends\/requests\/[^/]+\/decline$/)) {
      const user = requireUser(request, response);
      if (!user) return;
      const requestId = url.pathname.split("/")[4];
      const friendRequest = data.friendRequests[requestId];
      if (!friendRequest || friendRequest.to !== user.id || friendRequest.status !== "pending") {
        sendJson(response, 404, { error: "Friend request not found." });
        return;
      }
      friendRequest.status = "declined";
      await saveData();
      sendJson(response, 200, getFriendPayload(user));
      return;
    }

    if (request.method === "POST" && url.pathname.match(/^\/api\/friends\/[^/]+\/remove$/)) {
      const user = requireUser(request, response);
      if (!user) return;
      const friendId = url.pathname.split("/")[3];
      const friend = data.users[friendId];
      if (!friend) {
        sendJson(response, 404, { error: "Friend not found." });
        return;
      }
      normalizeUser(user);
      normalizeUser(friend);
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== user.id);
      await saveData();
      sendJson(response, 200, getFriendPayload(user));
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/rooms/invites") {
      const user = requireUser(request, response);
      if (!user) return;
      sendJson(response, 200, { invites: getFriendPayload(user).invites });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/rooms") {
      const user = requireUser(request, response);
      if (!user) return;
      let code = makeRoomCode();
      while (data.rooms[code]) code = makeRoomCode();
      data.rooms[code] = {
        code,
        createdAt: Date.now(),
        players: { w: user.id, b: null },
        fen: "start",
        invitedUserId: null,
        moves: [],
        status: "waiting",
      };
      await saveData();
      sendJson(response, 201, { room: publicRoom(data.rooms[code]), color: "w" });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/rooms/friend") {
      const user = requireUser(request, response);
      if (!user) return;
      const { friendId } = await readJson(request);
      normalizeUser(user);
      if (!user.friends.includes(friendId) || !data.users[friendId]) {
        sendJson(response, 403, { error: "Choose someone from your friends list." });
        return;
      }
      let code = makeRoomCode();
      while (data.rooms[code]) code = makeRoomCode();
      data.rooms[code] = {
        code,
        createdAt: Date.now(),
        fen: "start",
        invitedUserId: friendId,
        moves: [],
        players: { w: user.id, b: null },
        status: "waiting",
      };
      await saveData();
      sendJson(response, 201, { room: publicRoom(data.rooms[code]), color: "w" });
      return;
    }

    if (request.method === "POST" && url.pathname.match(/^\/api\/rooms\/[^/]+\/join$/)) {
      const user = requireUser(request, response);
      if (!user) return;
      const code = url.pathname.split("/")[3]?.toUpperCase();
      const room = data.rooms[code];
      if (!room) {
        sendJson(response, 404, { error: "Room not found." });
        return;
      }
      if (room.invitedUserId && room.invitedUserId !== user.id && room.players.w !== user.id) {
        sendJson(response, 403, { error: "This room was invited to another friend." });
        return;
      }
      if (!room.players.b && room.players.w !== user.id) room.players.b = user.id;
      const color = room.players.w === user.id ? "w" : room.players.b === user.id ? "b" : null;
      if (!color) {
        sendJson(response, 403, { error: "This room is full." });
        return;
      }
      room.status = room.players.b ? "playing" : "waiting";
      await saveData();
      sendJson(response, 200, { room: publicRoom(room), color });
      return;
    }

    if (request.method === "GET" && url.pathname.match(/^\/api\/rooms\/[^/]+$/)) {
      const user = requireUser(request, response);
      if (!user) return;
      const code = url.pathname.split("/")[3]?.toUpperCase();
      const room = data.rooms[code];
      if (!room) {
        sendJson(response, 404, { error: "Room not found." });
        return;
      }
      sendJson(response, 200, { room: publicRoom(room) });
      return;
    }

    if (request.method === "POST" && url.pathname.match(/^\/api\/rooms\/[^/]+\/moves$/)) {
      const user = requireUser(request, response);
      if (!user) return;
      const code = url.pathname.split("/")[3]?.toUpperCase();
      const room = data.rooms[code];
      if (!room || !Object.values(room.players).includes(user.id)) {
        sendJson(response, 404, { error: "Room not found." });
        return;
      }
      const { move, fen } = await readJson(request);
      room.moves.push({ id: randomUUID(), userId: user.id, move, fen, at: Date.now() });
      room.fen = fen || room.fen;
      await saveData();
      sendJson(response, 201, { room: publicRoom(room) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/puzzle-result") {
      const user = requireUser(request, response);
      if (!user) return;
      const { category = "Mixed", solved } = await readJson(request);
      user.puzzle.categories ??= {};
      user.puzzle.categories[category] ??= { solved: 0, failed: 0, attempts: 0 };
      user.puzzle.categories[category].attempts += 1;
      if (solved) {
        user.puzzle.solved += 1;
        user.puzzle.streak += 1;
        user.puzzle.bestStreak = Math.max(user.puzzle.bestStreak, user.puzzle.streak);
        user.puzzle.categories[category].solved += 1;
      } else {
        user.puzzle.failed += 1;
        user.puzzle.streak = 0;
        user.puzzle.categories[category].failed += 1;
      }
      await saveData();
      sendJson(response, 200, { puzzle: user.puzzle });
      return;
    }

    sendJson(response, 404, { error: "Not found." });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = http.createServer(handleRequest);
  server.listen(port, () => {
    console.log(`Chess Table account server running on http://localhost:${port}`);
  });
}
