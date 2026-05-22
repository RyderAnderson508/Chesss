import { createHash, randomBytes, randomUUID } from "node:crypto";

const dataKey = "data.json";
const defaultData = {
  friendRequests: {},
  rooms: {},
  sessions: {},
  users: {},
};
const headers = {
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "DELETE, GET, PATCH, POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
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

let cachedData = null;
let storePromise = null;
const memoryStore = {
  value: null,
  async get() {
    return this.value;
  },
  async set(_key, value) {
    this.value = value;
  },
};

async function getDataStore() {
  if (!storePromise) {
    storePromise = import("@netlify/blobs")
      .then(({ getStore }) => getStore("chess-table"))
      .catch(() => memoryStore);
  }
  return storePromise;
}

function json(statusCode, body) {
  return { body: JSON.stringify(body), headers, statusCode };
}

function getPath(event) {
  const rawPath = event.rawUrl ? new URL(event.rawUrl).pathname : event.path || "/";
  if (rawPath.startsWith("/.netlify/functions/api/")) {
    return `/api/${rawPath.slice("/.netlify/functions/api/".length)}`;
  }
  if (rawPath === "/.netlify/functions/api") return "/api";
  return rawPath.startsWith("/api") ? rawPath : `/api${rawPath.startsWith("/") ? rawPath : `/${rawPath}`}`;
}

function parseBody(event) {
  if (!event.body) return {};
  const text = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;
  return text ? JSON.parse(text) : {};
}

async function loadData() {
  if (cachedData) return cachedData;
  const store = await getDataStore();
  const saved = await store.get(dataKey).catch(() => null);
  cachedData = saved ? { ...defaultData, ...JSON.parse(saved) } : structuredClone(defaultData);
  for (const user of Object.values(cachedData.users)) normalizeUser(user);
  return cachedData;
}

async function saveData(data) {
  cachedData = data;
  const store = await getDataStore();
  await store.set(dataKey, JSON.stringify(data, null, 2));
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

function normalizeUser(user) {
  user.avatar ??= "king";
  user.bio ??= "";
  user.displayName ??= user.username;
  user.favoriteOpening ??= "";
  user.friends ??= [];
  user.location ??= "";
  user.picture ??= "";
  user.recoveryQuestion ??= "Favorite pet name";
  user.stats ??= { accuracyTotal: 0, draws: 0, games: 0, losses: 0, wins: 0 };
  user.puzzle ??= { bestStreak: 0, categories: {}, failed: 0, solved: 0, streak: 0 };
  user.puzzle.categories ??= {};
  return user;
}

function publicUser(user) {
  normalizeUser(user);
  return {
    avatar: user.avatar,
    bio: user.bio,
    displayName: user.displayName,
    favoriteOpening: user.favoriteOpening,
    hasRecoveryAnswer: Boolean(user.recoveryAnswerHash || user.recoveryHash),
    id: user.id,
    location: user.location,
    picture: user.picture,
    puzzle: user.puzzle,
    recoveryQuestion: user.recoveryQuestion,
    stats: user.stats,
    username: user.username,
  };
}

function friendUser(user) {
  const publicData = publicUser(user);
  return {
    avatar: publicData.avatar,
    bio: publicData.bio,
    displayName: publicData.displayName,
    favoriteOpening: publicData.favoriteOpening,
    id: publicData.id,
    location: publicData.location,
    picture: publicData.picture,
    username: publicData.username,
    stats: publicData.stats,
  };
}

function getUserByUsername(data, username) {
  return Object.values(data.users).find(
    (user) => user.username.toLowerCase() === String(username || "").trim().toLowerCase(),
  );
}

function getAuthToken(event) {
  const auth = event.headers?.authorization || event.headers?.Authorization || "";
  return auth.replace(/^Bearer\s+/i, "");
}

function getUser(data, event) {
  const token = getAuthToken(event);
  const userId = token ? data.sessions[token] : null;
  return userId ? data.users[userId] : null;
}

function requireUser(data, event) {
  const user = getUser(data, event);
  return user ? normalizeUser(user) : null;
}

function getFriendPayload(data, user) {
  normalizeUser(user);
  const friends = user.friends.map((id) => data.users[id]).filter(Boolean).map(friendUser);
  const incoming = Object.values(data.friendRequests)
    .filter((request) => request.to === user.id && request.status === "pending")
    .map((request) => ({ createdAt: request.createdAt, from: friendUser(data.users[request.from]), id: request.id }));
  const outgoing = Object.values(data.friendRequests)
    .filter((request) => request.from === user.id && request.status === "pending")
    .map((request) => ({ createdAt: request.createdAt, id: request.id, to: friendUser(data.users[request.to]) }));
  const invites = Object.values(data.rooms)
    .filter((room) => room.invitedUserId === user.id && !room.players.b && room.status === "waiting")
    .map((room) => publicRoom(data, room));
  return { friends, incoming, invites, outgoing };
}

function publicRoom(data, room) {
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

function makeRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let index = 0; index < 6; index += 1) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return code;
}

async function route(event) {
  const method = event.httpMethod || event.requestContext?.http?.method || "GET";
  const path = getPath(event);
  const data = await loadData();

  if (method === "OPTIONS") return json(200, { ok: true });
  if (method === "GET" && path === "/api/health") {
    return json(200, { ok: true, runtime: "netlify", users: Object.keys(data.users).length });
  }

  if (method === "POST" && path === "/api/signup") {
    const { password, recoveryAnswer, username } = parseBody(event);
    const cleanUsername = String(username || "").trim().slice(0, 24);
    const cleanRecoveryAnswer = normalizeRecoveryAnswer(recoveryAnswer);
    if (cleanUsername.length < 3 || String(password || "").length < 6) {
      return json(400, { error: "Use a username with 3+ characters and a password with 6+ characters." });
    }
    if (cleanRecoveryAnswer.length < 2) return json(400, { error: "Add a recovery answer with 2+ characters." });
    const blockedField = blockedFieldName({
      Password: password,
      "Recovery answer": cleanRecoveryAnswer,
      Username: cleanUsername,
    });
    if (blockedField) return json(400, { error: blockedLanguageError(blockedField) });
    if (getUserByUsername(data, cleanUsername)) return json(409, { error: "That username is taken." });

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
      puzzle: { bestStreak: 0, categories: {}, failed: 0, solved: 0, streak: 0 },
      recoveryAnswerHash: hashPassword(cleanRecoveryAnswer),
      recoveryQuestion: "Favorite pet name",
      stats: { accuracyTotal: 0, draws: 0, games: 0, losses: 0, wins: 0 },
      username: cleanUsername,
    };
    const token = randomUUID();
    data.users[user.id] = user;
    data.sessions[token] = user.id;
    await saveData(data);
    return json(201, { token, user: publicUser(user) });
  }

  if (method === "POST" && path === "/api/login") {
    const { password, username } = parseBody(event);
    const user = getUserByUsername(data, username);
    if (!user || !verifyPassword(String(password || ""), user.passwordHash)) {
      return json(401, { error: "Username or password was wrong." });
    }
    const token = randomUUID();
    data.sessions[token] = user.id;
    await saveData(data);
    return json(200, { token, user: publicUser(user) });
  }

  if (method === "POST" && path === "/api/password/reset") {
    const { password, recoveryAnswer, recoveryCode, username } = parseBody(event);
    const user = getUserByUsername(data, username);
    const cleanRecoveryAnswer = normalizeRecoveryAnswer(recoveryAnswer || recoveryCode);
    const legacyRecoveryCode = String(recoveryCode || recoveryAnswer || "").trim().toUpperCase();
    const answerMatches = user
      ? verifyPassword(cleanRecoveryAnswer, user.recoveryAnswerHash) || verifyPassword(legacyRecoveryCode, user.recoveryHash)
      : false;
    if (!user || !answerMatches) return json(401, { error: "Username or recovery answer was wrong." });
    if (String(password || "").length < 6) return json(400, { error: "Use a password with 6+ characters." });
    if (containsBlockedLanguage(password)) return json(400, { error: blockedLanguageError("Password") });
    user.passwordHash = hashPassword(password);
    const token = randomUUID();
    data.sessions[token] = user.id;
    await saveData(data);
    return json(200, { token, user: publicUser(user) });
  }

  const user = requireUser(data, event);
  if (!user) return json(401, { error: "Sign in required." });

  if (method === "GET" && path === "/api/me") return json(200, { user: publicUser(user) });

  if (method === "PATCH" && path === "/api/profile") {
    const { avatar, bio, displayName, favoriteOpening, location, picture, username } = parseBody(event);
    const cleanUsername = String(username || user.username).trim().slice(0, 24);
    const cleanDisplayName = String(displayName || cleanUsername).trim().slice(0, 32);
    const cleanAvatar = String(avatar || user.avatar || "king").trim().slice(0, 24);
    const cleanBio = String(bio || "").trim().slice(0, 160);
    const cleanFavoriteOpening = String(favoriteOpening || "").trim().slice(0, 48);
    const cleanLocation = String(location || "").trim().slice(0, 40);
    const cleanPicture = String(picture || "").trim().slice(0, 1_400_000);
    if (cleanUsername.length < 3) return json(400, { error: "Use a username with 3+ characters." });
    const isPictureUrl = /^https?:\/\/[^\s]+$/i.test(cleanPicture);
    const isPictureDataUrl = /^data:image\/(?:png|jpe?g|webp);base64,[a-z0-9+/=]+$/i.test(cleanPicture);
    if (cleanPicture && !isPictureUrl && !isPictureDataUrl) {
      return json(400, { error: "Use a full image URL or an uploaded JPG, PNG, or WebP profile photo." });
    }
    const blockedField = blockedFieldName({
      Bio: cleanBio,
      "Display name": cleanDisplayName,
      "Favorite opening": cleanFavoriteOpening,
      Location: cleanLocation,
      Username: cleanUsername,
    });
    if (blockedField) return json(400, { error: blockedLanguageError(blockedField) });
    const existing = getUserByUsername(data, cleanUsername);
    if (existing && existing.id !== user.id) return json(409, { error: "That username is taken." });
    Object.assign(user, {
      avatar: cleanAvatar,
      bio: cleanBio,
      displayName: cleanDisplayName,
      favoriteOpening: cleanFavoriteOpening,
      location: cleanLocation,
      picture: cleanPicture,
      username: cleanUsername,
    });
    await saveData(data);
    return json(200, { user: publicUser(user) });
  }

  if (method === "POST" && path === "/api/profile/recovery-answer") {
    const { recoveryAnswer } = parseBody(event);
    const cleanRecoveryAnswer = normalizeRecoveryAnswer(recoveryAnswer);
    if (cleanRecoveryAnswer.length < 2) return json(400, { error: "Add a recovery answer with 2+ characters." });
    if (containsBlockedLanguage(cleanRecoveryAnswer)) return json(400, { error: blockedLanguageError("Recovery answer") });
    user.recoveryAnswerHash = hashPassword(cleanRecoveryAnswer);
    user.recoveryQuestion = "Favorite pet name";
    await saveData(data);
    return json(200, { user: publicUser(user) });
  }

  if (method === "POST" && path === "/api/profile/password") {
    const { currentPassword, password } = parseBody(event);
    if (!verifyPassword(String(currentPassword || ""), user.passwordHash)) {
      return json(401, { error: "Current password was wrong." });
    }
    if (String(password || "").length < 6) return json(400, { error: "Use a password with 6+ characters." });
    if (containsBlockedLanguage(password)) return json(400, { error: blockedLanguageError("Password") });
    user.passwordHash = hashPassword(password);
    await saveData(data);
    return json(200, { user: publicUser(user) });
  }

  if (method === "POST" && path === "/api/profile/recovery-code") {
    const recoveryCode = randomBytes(4).toString("hex").toUpperCase().replace(/(.{4})/, "$1-");
    user.recoveryHash = hashPassword(recoveryCode);
    await saveData(data);
    return json(200, { recoveryCode, user: publicUser(user) });
  }

  if (method === "POST" && path === "/api/profile/stats/reset") {
    user.stats = { accuracyTotal: 0, draws: 0, games: 0, losses: 0, wins: 0 };
    user.puzzle = { bestStreak: 0, categories: {}, failed: 0, solved: 0, streak: 0 };
    await saveData(data);
    return json(200, { user: publicUser(user) });
  }

  if (method === "DELETE" && path === "/api/account") {
    for (const friendId of user.friends) {
      const friend = data.users[friendId];
      if (friend) friend.friends = (friend.friends || []).filter((id) => id !== user.id);
    }
    for (const [token, userId] of Object.entries(data.sessions)) {
      if (userId === user.id) delete data.sessions[token];
    }
    for (const [id, item] of Object.entries(data.friendRequests)) {
      if (item.from === user.id || item.to === user.id) delete data.friendRequests[id];
    }
    delete data.users[user.id];
    await saveData(data);
    return json(200, { ok: true });
  }

  if (method === "GET" && path === "/api/users/search") {
    const q = String((event.queryStringParameters || {}).q || "").trim().toLowerCase();
    const users = q.length < 2
      ? []
      : Object.values(data.users)
          .filter((item) => item.id !== user.id && item.username.toLowerCase().includes(q))
          .slice(0, 8)
          .map(friendUser);
    return json(200, { users });
  }

  if (method === "GET" && path === "/api/friends") return json(200, getFriendPayload(data, user));

  if (method === "POST" && path === "/api/friends/requests") {
    const { username } = parseBody(event);
    const target = getUserByUsername(data, username);
    if (!target || target.id === user.id) return json(404, { error: "That player was not found." });
    normalizeUser(target);
    if (user.friends.includes(target.id)) return json(409, { error: "You are already friends." });
    const existing = Object.values(data.friendRequests).find(
      (item) =>
        item.status === "pending" &&
        ((item.from === user.id && item.to === target.id) || (item.from === target.id && item.to === user.id)),
    );
    if (existing) return json(409, { error: "A friend request already exists." });
    const friendRequest = { createdAt: Date.now(), from: user.id, id: randomUUID(), status: "pending", to: target.id };
    data.friendRequests[friendRequest.id] = friendRequest;
    await saveData(data);
    return json(201, getFriendPayload(data, user));
  }

  const friendRequestMatch = path.match(/^\/api\/friends\/requests\/([^/]+)\/(accept|decline)$/);
  if (method === "POST" && friendRequestMatch) {
    const [, requestId, action] = friendRequestMatch;
    const friendRequest = data.friendRequests[requestId];
    if (!friendRequest || friendRequest.to !== user.id || friendRequest.status !== "pending") {
      return json(404, { error: "Friend request not found." });
    }
    if (action === "accept") {
      const from = data.users[friendRequest.from];
      normalizeUser(from);
      if (!user.friends.includes(from.id)) user.friends.push(from.id);
      if (!from.friends.includes(user.id)) from.friends.push(user.id);
      friendRequest.status = "accepted";
    } else {
      friendRequest.status = "declined";
    }
    await saveData(data);
    return json(200, getFriendPayload(data, user));
  }

  const removeFriendMatch = path.match(/^\/api\/friends\/([^/]+)\/remove$/);
  if (method === "POST" && removeFriendMatch) {
    const friendId = removeFriendMatch[1];
    const friend = data.users[friendId];
    if (!friend) return json(404, { error: "Friend not found." });
    user.friends = user.friends.filter((id) => id !== friendId);
    friend.friends = (friend.friends || []).filter((id) => id !== user.id);
    await saveData(data);
    return json(200, getFriendPayload(data, user));
  }

  if (method === "POST" && path === "/api/rooms") {
    let code = makeRoomCode();
    while (data.rooms[code]) code = makeRoomCode();
    data.rooms[code] = {
      code,
      createdAt: Date.now(),
      fen: "start",
      invitedUserId: null,
      moves: [],
      players: { b: null, w: user.id },
      status: "waiting",
    };
    await saveData(data);
    return json(201, { color: "w", room: publicRoom(data, data.rooms[code]) });
  }

  if (method === "POST" && path === "/api/rooms/friend") {
    const { friendId } = parseBody(event);
    if (!user.friends.includes(friendId) || !data.users[friendId]) {
      return json(403, { error: "Choose someone from your friends list." });
    }
    let code = makeRoomCode();
    while (data.rooms[code]) code = makeRoomCode();
    data.rooms[code] = {
      code,
      createdAt: Date.now(),
      fen: "start",
      invitedUserId: friendId,
      moves: [],
      players: { b: null, w: user.id },
      status: "waiting",
    };
    await saveData(data);
    return json(201, { color: "w", room: publicRoom(data, data.rooms[code]) });
  }

  const joinRoomMatch = path.match(/^\/api\/rooms\/([^/]+)\/join$/);
  if (method === "POST" && joinRoomMatch) {
    const code = joinRoomMatch[1].toUpperCase();
    const room = data.rooms[code];
    if (!room) return json(404, { error: "Room not found." });
    if (room.invitedUserId && room.invitedUserId !== user.id && room.players.w !== user.id) {
      return json(403, { error: "This room was invited to another friend." });
    }
    if (!room.players.b && room.players.w !== user.id) room.players.b = user.id;
    const color = room.players.w === user.id ? "w" : room.players.b === user.id ? "b" : null;
    if (!color) return json(403, { error: "This room is full." });
    room.status = room.players.b ? "playing" : "waiting";
    await saveData(data);
    return json(200, { color, room: publicRoom(data, room) });
  }

  const roomMatch = path.match(/^\/api\/rooms\/([^/]+)$/);
  if (method === "GET" && roomMatch) {
    const room = data.rooms[roomMatch[1].toUpperCase()];
    if (!room) return json(404, { error: "Room not found." });
    return json(200, { room: publicRoom(data, room) });
  }

  const roomMoveMatch = path.match(/^\/api\/rooms\/([^/]+)\/moves$/);
  if (method === "POST" && roomMoveMatch) {
    const room = data.rooms[roomMoveMatch[1].toUpperCase()];
    if (!room || !Object.values(room.players).includes(user.id)) return json(404, { error: "Room not found." });
    const { fen, move } = parseBody(event);
    room.moves.push({ at: Date.now(), fen, id: randomUUID(), move, userId: user.id });
    room.fen = fen || room.fen;
    await saveData(data);
    return json(201, { room: publicRoom(data, room) });
  }

  if (method === "POST" && path === "/api/puzzle-result") {
    const { category = "Mixed", solved } = parseBody(event);
    user.puzzle.categories ??= {};
    user.puzzle.categories[category] ??= { attempts: 0, failed: 0, solved: 0 };
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
    await saveData(data);
    return json(200, { puzzle: user.puzzle });
  }

  return json(404, { error: "Not found." });
}

export async function handler(event) {
  try {
    return await route(event);
  } catch (error) {
    return json(500, {
      error: error.message || "Account function crashed.",
      ok: false,
    });
  }
}
