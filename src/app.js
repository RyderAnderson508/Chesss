import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.4.0/+esm";

const boardEl = document.querySelector("#board");

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo({ top: 0, left: 0 });
const turnBadge = document.querySelector("#turnBadge");
const gameState = document.querySelector("#gameState");
const moveList = document.querySelector("#moveList");
const moveCount = document.querySelector("#moveCount");
const whiteCaptures = document.querySelector("#whiteCaptures");
const blackCaptures = document.querySelector("#blackCaptures");
const whiteMaterialAdvantage = document.querySelector("#whiteMaterialAdvantage");
const blackMaterialAdvantage = document.querySelector("#blackMaterialAdvantage");
const promotionDialog = document.querySelector("#promotionDialog");
const blackEvalFill = document.querySelector("#blackEvalFill");
const evalScore = document.querySelector("#evalScore");
const bestMoveArrow = document.querySelector("#bestMoveArrow");
const bestMoveLine = document.querySelector("#bestMoveLine");
const boardStage = document.querySelector(".board-stage");
const hintBtn = document.querySelector("#hintBtn");
const soundBtn = document.querySelector("#soundBtn");
const resignBtn = document.querySelector("#resignBtn");
const drawBtn = document.querySelector("#drawBtn");
const moveFeedback = document.querySelector("#moveFeedback");
const modeSelect = document.querySelector("#modeSelect");
const difficultySelect = document.querySelector("#difficultySelect");
const botAvatar = document.querySelector("#botAvatar");
const botName = document.querySelector("#botName");
const botElo = document.querySelector("#botElo");
const botStyle = document.querySelector("#botStyle");
const botChatter = document.querySelector("#botChatter");
const clockSelect = document.querySelector("#clockSelect");
const volumeSelect = document.querySelector("#volumeSelect");
const whiteClock = document.querySelector("#whiteClock");
const blackClock = document.querySelector("#blackClock");
const reviewBtn = document.querySelector("#reviewBtn");
const reviewSection = document.querySelector(".review-section");
const settingsSection = document.querySelector(".settings-section");
const capturedSection = document.querySelector(".captures")?.closest("details");
const movesSection = document.querySelector(".moves-section");
const sidePanel = document.querySelector(".side-panel");
const reviewSummary = document.querySelector("#reviewSummary");
const reviewList = document.querySelector("#reviewList");
const reviewReplay = document.querySelector("#reviewReplay");
const reviewMoveLabel = document.querySelector("#reviewMoveLabel");
const reviewReason = document.querySelector("#reviewReason");
const reviewPrevBtn = document.querySelector("#reviewPrevBtn");
const reviewNextBtn = document.querySelector("#reviewNextBtn");
const reviewTopBar = document.querySelector("#reviewTopBar");
const topReviewMoveLabel = document.querySelector("#topReviewMoveLabel");
const topReviewReason = document.querySelector("#topReviewReason");
const topReviewPrevBtn = document.querySelector("#topReviewPrevBtn");
const topReviewNextBtn = document.querySelector("#topReviewNextBtn");
const boardReviewBar = document.querySelector("#boardReviewBar");
const boardReviewMoveLabel = document.querySelector("#boardReviewMoveLabel");
const boardReviewReason = document.querySelector("#boardReviewReason");
const boardReviewPrevBtn = document.querySelector("#boardReviewPrevBtn");
const boardReviewNextBtn = document.querySelector("#boardReviewNextBtn");
const reviewDock = document.querySelector("#reviewDock");
const dockReviewMoveLabel = document.querySelector("#dockReviewMoveLabel");
const dockReviewReason = document.querySelector("#dockReviewReason");
const dockReviewPrevBtn = document.querySelector("#dockReviewPrevBtn");
const dockReviewNextBtn = document.querySelector("#dockReviewNextBtn");
const moveSlideLayer = document.querySelector("#moveSlideLayer");
const reviewMoveEffect = document.querySelector("#reviewMoveEffect");
const gameOverDialog = document.querySelector("#gameOverDialog");
const gameOverBadge = document.querySelector("#gameOverBadge");
const gameOverTitle = document.querySelector("#gameOverTitle");
const gameOverText = document.querySelector("#gameOverText");
const gameOverNote = document.querySelector("#gameOverNote");
const whiteAccuracy = document.querySelector("#whiteAccuracy");
const blackAccuracy = document.querySelector("#blackAccuracy");
const keyMoment = document.querySelector("#keyMoment");
const bestMoveMoment = document.querySelector("#bestMoveMoment");
const worstMoveMoment = document.querySelector("#worstMoveMoment");
const dialogReviewBtn = document.querySelector("#dialogReviewBtn");
const dialogShareBtn = document.querySelector("#dialogShareBtn");
const dialogNewGameBtn = document.querySelector("#dialogNewGameBtn");
const dialogCloseBtn = document.querySelector("#dialogCloseBtn");

const pieceGlyphs = {
  w: { 
    p: '\u2659', // White Pawn
    n: '\u2658', // White Knight
    b: '\u2657', // White Bishop
    r: '\u2656', // White Rook
    q: '\u2655', // White Queen
    k: '\u2654'  // White King
  },
  b: { 
    p: '\u265F', // Black Pawn
    n: '\u265E', // Black Knight
    b: '\u265D', // Black Bishop
    r: '\u265C', // Black Rook
    q: '\u265B', // Black Queen
    k: '\u265A'  // Black King
  }
};

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const pieceValues = { q: 9, r: 5, b: 3, n: 3, p: 1 };
const settingKeys = {
  clock: "chessClock",
  difficulty: "chessDifficulty",
  flipped: "chessBoardFlipped",
  mode: "chessMode",
  volume: "chessVolume",
};
const difficultySettings = {
  veryEasy: {
    depth: 1,
    moveTime: 220,
    style: "beginner",
    randomChance: 0.72,
    candidateCount: 9,
    botName: "Milo",
    avatar: "M",
    theme: "milo",
    elo: "~300 Elo",
    label: "Milo, New to the Board ~300 Elo",
    persona: "Still learning, a little jumpy, and very beatable.",
    chatter: {
      ready: "Milo is ready when you are.",
      botMove: "Milo: I think that works.",
      botCapture: "Milo: Ooh, I can take that.",
      botCheck: "Milo: Check! I saw that one.",
      humanMove: "Milo is squinting at the board.",
      humanCapture: "Milo: Wait, was that hanging?",
      humanCheck: "Milo: Uh oh. That is check.",
      win: "Milo: I won? Nice!",
      loss: "Milo: I am learning from this one.",
      draw: "Milo: A draw feels fair.",
    },
    thinking: "Milo is checking the obvious moves.",
    ready: "Milo is trying to keep the pieces safe.",
  },
  easy: {
    depth: 3,
    moveTime: 420,
    style: "casual",
    randomChance: 0.45,
    candidateCount: 6,
    botName: "Nora",
    avatar: "N",
    theme: "nora",
    elo: "~800 Elo",
    label: "Nora, Cafe Player ~800 Elo",
    persona: "Plays normal-looking moves, but misses tactics under pressure.",
    chatter: {
      ready: "Nora is settling in at the board.",
      botMove: "Nora: Simple moves first.",
      botCapture: "Nora: Loose pieces add up.",
      botCheck: "Nora: Your king looked a little drafty.",
      humanMove: "Nora is looking for the practical reply.",
      humanCapture: "Nora: Okay, I missed that one.",
      humanCheck: "Nora: That is annoying.",
      win: "Nora: Clean enough for a cafe game.",
      loss: "Nora: You punished the loose pieces.",
      draw: "Nora: Coffeehouse peace treaty.",
    },
    thinking: "Nora is looking for a clean developing move.",
    ready: "Nora likes simple plans and loose pieces.",
  },
  medium: {
    depth: 6,
    moveTime: 750,
    style: "club",
    randomChance: 0.12,
    candidateCount: 3,
    botName: "Cal",
    avatar: "C",
    theme: "cal",
    elo: "~1300 Elo",
    label: "Cal, Club Regular ~1300 Elo",
    persona: "Steady club chess with a little tactical bite.",
    chatter: {
      ready: "Cal is ready when you are.",
      botMove: "Cal: That keeps the position tidy.",
      botCapture: "Cal: I will take the material.",
      botCheck: "Cal: Check. Your king has work to do.",
      humanMove: "Cal is comparing candidate replies.",
      humanCapture: "Cal: Fair shot. I need compensation.",
      humanCheck: "Cal: I should have seen that.",
      win: "Cal: Steady pressure did the job.",
      loss: "Cal: Good game. You found the cracks.",
      draw: "Cal: Balanced enough.",
    },
    thinking: "Cal is comparing candidate moves.",
    ready: "Cal is playing steady club chess.",
  },
  hard: {
    depth: 10,
    moveTime: 1200,
    style: "strong",
    randomChance: 0.04,
    candidateCount: 2,
    botName: "Iris",
    avatar: "I",
    theme: "iris",
    elo: "~1800 Elo",
    label: "Iris, Tactics Hunter ~1800 Elo",
    persona: "Sharp, forcing, and happy to punish loose pieces.",
    chatter: {
      ready: "Iris is hunting for tactics.",
      botMove: "Iris: Pressure first, questions later.",
      botCapture: "Iris: That piece was loose.",
      botCheck: "Iris: Check. That file looked weak.",
      humanMove: "Iris is checking forcing lines.",
      humanCapture: "Iris: Bold. Now prove it.",
      humanCheck: "Iris: Fine, I will calculate.",
      win: "Iris: Tactics decided it.",
      loss: "Iris: You dodged the tactics well.",
      draw: "Iris: Truce, for now.",
    },
    thinking: "Iris is checking tactics before moving.",
    ready: "Iris is watching for tactical shots.",
  },
  expert: {
    depth: 14,
    moveTime: 2000,
    style: "expert",
    randomChance: 0,
    candidateCount: 1,
    botName: "Vega",
    avatar: "V",
    theme: "vega",
    elo: "~2300 Elo",
    label: "Vega, Engine Room ~2300 Elo",
    persona: "Cold calculation with very little mercy.",
    chatter: {
      ready: "Vega is already calculating.",
      botMove: "Vega: Best line found.",
      botCapture: "Vega: Material conversion accepted.",
      botCheck: "Vega: Check is part of the line.",
      humanMove: "Vega is recalculating the tree.",
      humanCapture: "Vega: Compensation will be evaluated.",
      humanCheck: "Vega: Threat registered.",
      win: "Vega: Result confirmed.",
      loss: "Vega: Unexpected. Recalibrating.",
      draw: "Vega: Equality confirmed.",
    },
    thinking: "Vega is calculating deeply.",
    ready: "Vega is playing near-engine chess.",
  },
};
const openingBook = [
  { moves: "e4 e5 Nf3 Nc6 Bb5", name: "Ruy Lopez" },
  { moves: "e4 e5 Nf3 Nc6 Bc4", name: "Italian Game" },
  { moves: "e4 e5 Nf3 Nc6 d4", name: "Scotch Game" },
  { moves: "e4 e5 Nf3 Nf6", name: "Petrov Defense" },
  { moves: "e4 e5 f4", name: "King's Gambit" },
  { moves: "e4 c5", name: "Sicilian Defense" },
  { moves: "e4 c5 Nf3 d6", name: "Sicilian Defense: Open" },
  { moves: "e4 c5 Nf3 Nc6", name: "Sicilian Defense: Old Sicilian" },
  { moves: "e4 e6", name: "French Defense" },
  { moves: "e4 c6", name: "Caro-Kann Defense" },
  { moves: "e4 d6", name: "Pirc Defense" },
  { moves: "e4 d5", name: "Scandinavian Defense" },
  { moves: "d4 d5 c4", name: "Queen's Gambit" },
  { moves: "d4 d5 c4 e6", name: "Queen's Gambit Declined" },
  { moves: "d4 d5 c4 dxc4", name: "Queen's Gambit Accepted" },
  { moves: "d4 Nf6 c4 g6", name: "King's Indian Defense" },
  { moves: "d4 Nf6 c4 e6 Nc3 Bb4", name: "Nimzo-Indian Defense" },
  { moves: "d4 Nf6 c4 e6 Nf3 b6", name: "Queen's Indian Defense" },
  { moves: "d4 Nf6 c4 c5", name: "Benoni Defense" },
  { moves: "d4 f5", name: "Dutch Defense" },
  { moves: "c4", name: "English Opening" },
  { moves: "Nf3", name: "Reti Opening" },
  { moves: "b3", name: "Larsen's Opening" },
  { moves: "g3", name: "King's Fianchetto Opening" },
].sort((a, b) => b.moves.split(" ").length - a.moves.split(" ").length);

restoreSavedSettings();

let chess = new Chess();
let selectedSquare = null;
let legalMoves = [];
let lastMove = null;
let pendingMoveAnimation = null;
let dragState = null;
let dragGhost = null;
let suppressNextClick = false;
let flipped = window.localStorage.getItem(settingKeys.flipped) === "true";
let pendingPromotion = null;
let engine = null;
let engineReady = false;
let engineFailed = false;
let engineThinking = false;
let engineTargetFen = "";
let engineTargetTurn = "w";
let engineMode = "analysis";
let engineEvaluation = null;
let engineBestMove = null;
let displayedEvaluation = { label: "0.0", score: 0 };
let showBestMove = false;
let computerThinking = false;
let computerThinkingStartedAt = 0;
let pendingComputerMoveTimer = null;
let pendingEngineCandidates = null;
let moveReviews = [];
let pendingReviewAnalysis = [];
let activeReviewAnalysis = null;
let evalCache = new Map();
let reviewOpen = false;
let reviewIndex = 0;
let previewIndex = null;
let reviewPlaybackIndex = null;
let reviewPlaybackTimer = null;
let gameOverShown = false;
let selectedComputerColor = null;
let clockConfig = parseClockValue("300+0");
let clockTimes = { w: 300000, b: 300000 };
let clockInterval = null;
let lastClockTick = null;
let timeoutWinner = null;
let resignation = null;
let agreedDraw = false;
let soundEnabled = window.localStorage.getItem("chessSoundEnabled") !== "false";
let audioContext = null;
let masterGain = null;
let audioClips = {
  button: "./assets/sounds/button.wav",
  move: "./assets/sounds/move.wav",
  capture: "./assets/sounds/capture.wav",
  check: "./assets/sounds/check.wav",
  gameOver: "./assets/sounds/game-over.wav",
};
let lastFeedbackKind = "";
const dragThreshold = 6;

function squareName(row, col) {
  const rank = flipped ? row + 1 : 8 - row;
  const file = flipped ? files[7 - col] : files[col];
  return `${file}${rank}`;
}

function renderBoard() {
  boardEl.innerHTML = "";
  const review = getActiveReview();
  const preview = getActivePreview();
  const reviewFen = review ? getReviewDisplayFen(review) : null;
  const boardChess = reviewFen ? new Chess(reviewFen) : preview ? new Chess(preview.afterFen) : chess;
  const board = boardChess.board();
  const checkSquare = getCheckedKingSquare(boardChess);
  boardEl.classList.toggle("in-check", Boolean(checkSquare && !boardChess.isCheckmate()));
  boardEl.classList.toggle("in-checkmate", Boolean(checkSquare && boardChess.isCheckmate()));

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const square = squareName(row, col);
      const boardRow = 8 - Number(square[1]);
      const boardCol = files.indexOf(square[0]);
      const piece = board[boardRow][boardCol];
      const button = document.createElement("button");
      const isLight = (boardRow + boardCol) % 2 === 0;
      const move = legalMoves.find((item) => item.to === square);

      button.type = "button";
      button.className = `square ${isLight ? "light" : "dark"}`;
      button.dataset.square = square;
      button.setAttribute("aria-label", describeSquare(square, piece));

      if (square === selectedSquare) button.classList.add("selected");
      if (move) button.classList.add(move.captured ? "capture" : "legal");
      if (!review && !preview && lastMove?.from === square) button.classList.add("last-from");
      if (!review && !preview && lastMove?.to === square) button.classList.add("last-to");
      if (preview?.from === square) button.classList.add("preview-from");
      if (preview?.to === square) button.classList.add("preview-to");
      if (!review && pendingMoveAnimation?.to === square) button.classList.add("move-animation-target");
      if (dragState?.started && dragState.from === square) button.classList.add("dragging-source");
      if (square === checkSquare) button.classList.add("check");
      if (review?.from === square) button.classList.add("review-from");
      if (review?.to === square) button.classList.add("review-to");

      if (piece) {
        const pieceSpan = document.createElement("span");
        pieceSpan.className = piece.color === "w" ? "piece-white" : "piece-black";
        pieceSpan.textContent = pieceGlyphs[piece.color][piece.type];
        button.append(pieceSpan);
      }

      if ((flipped && (row === 7 || col === 7)) || (!flipped && (row === 7 || col === 0))) {
        const coords = document.createElement("span");
        coords.className = "coords";
        coords.textContent = getCoordinateLabel(row, col, square);
        button.append(coords);
      }

      button.addEventListener("click", () => {
        if (suppressNextClick) {
          suppressNextClick = false;
          return;
        }
        if (!review) handleSquareClick(square);
      });
      boardEl.append(button);
    }
  }

  playPendingMoveAnimation(review);
}

boardEl.addEventListener("pointerdown", handleBoardPointerDown);
window.addEventListener("pointermove", handleBoardPointerMove);
window.addEventListener("pointerup", handleBoardPointerUp);
window.addEventListener("pointercancel", cancelPieceDrag);

function handleBoardPointerDown(event) {
  if (
    event.button !== 0 ||
    getActiveReview() ||
    getActivePreview() ||
    pendingPromotion ||
    isGameFinished() ||
    isComputerTurn()
  ) {
    return;
  }

  const squareEl = event.target.closest(".square");
  const from = squareEl?.dataset.square;
  const piece = from ? chess.get(from) : null;

  if (!piece || piece.color !== chess.turn()) return;

  dragState = {
    from,
    piece,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    started: false,
  };
}

function handleBoardPointerMove(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;

  const distance = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
  if (!dragState.started && distance >= dragThreshold) {
    startPieceDrag(event);
  }

  if (!dragState.started) return;
  event.preventDefault();
  moveDragGhost(event.clientX, event.clientY);
}

function handleBoardPointerUp(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;

  if (!dragState.started) {
    dragState = null;
    return;
  }

  event.preventDefault();
  suppressNextClick = true;

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".square");
  const move = legalMoves.find((item) => item.to === target?.dataset.square);
  cleanupPieceDrag();

  if (move) {
    requestMove(move);
  } else {
    clearSelection();
    render();
  }
}

function startPieceDrag(event) {
  dragState.started = true;
  selectedSquare = dragState.from;
  legalMoves = chess.moves({ square: dragState.from, verbose: true });
  boardEl.classList.add("dragging");
  createDragGhost(dragState.piece);
  renderBoard();
  moveDragGhost(event.clientX, event.clientY);
}

function createDragGhost(piece) {
  removeDragGhost();
  dragGhost = document.createElement("span");
  dragGhost.className = `drag-ghost ${piece.color === "w" ? "piece-white" : "piece-black"}`;
  dragGhost.textContent = pieceGlyphs[piece.color][piece.type];
  document.body.append(dragGhost);
}

function moveDragGhost(x, y) {
  if (!dragGhost) return;
  dragGhost.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
}

function cancelPieceDrag() {
  if (!dragState) return;
  cleanupPieceDrag();
  clearSelection();
  render();
}

function cleanupPieceDrag() {
  dragState = null;
  boardEl.classList.remove("dragging");
  removeDragGhost();
}

function removeDragGhost() {
  dragGhost?.remove();
  dragGhost = null;
}

function describeSquare(square, piece) {
  if (!piece) return `${square}, empty`;
  const color = piece.color === "w" ? "White" : "Black";
  const names = { p: "pawn", n: "knight", b: "bishop", r: "rook", q: "queen", k: "king" };
  return `${square}, ${color} ${names[piece.type]}`;
}

function getCoordinateLabel(row, col, square) {
  const labels = [];
  if ((flipped && row === 7) || (!flipped && row === 7)) labels.push(square[0]);
  if ((flipped && col === 7) || (!flipped && col === 0)) labels.push(square[1]);
  return labels.join("");
}

function handleSquareClick(square) {
  if (getActiveReview() || getActivePreview() || pendingPromotion || isGameFinished() || isComputerTurn()) {
    return;
  }

  const piece = chess.get(square);
  const turn = chess.turn();

  if (selectedSquare) {
    const legalMove = legalMoves.find((move) => move.to === square);
    if (legalMove) {
      requestMove(legalMove);
      return;
    }
  }

  if (piece && piece.color === turn) {
    selectedSquare = square;
    legalMoves = chess.moves({ square, verbose: true });
  } else {
    selectedSquare = null;
    legalMoves = [];
  }

  render();
}

function requestMove(move) {
  if (isPromotionMove(move)) {
    pendingPromotion = move;
    promotionDialog.showModal();
    return;
  }

  makeTrackedMove({ from: move.from, to: move.to });
  afterMovePlayed(move.color);
  setHintVisible(false);
  clearSelection();
  render();
}

function isPromotionMove(move) {
  const piece = chess.get(move.from);
  return piece?.type === "p" && (move.to.endsWith("8") || move.to.endsWith("1"));
}

promotionDialog.addEventListener("click", (event) => {
  const button = event.target.closest("[data-piece]");
  if (!button || !pendingPromotion) return;

  makeTrackedMove({
    from: pendingPromotion.from,
    to: pendingPromotion.to,
    promotion: button.dataset.piece,
  });
  afterMovePlayed(pendingPromotion.color);
  pendingPromotion = null;
  setHintVisible(false);
  promotionDialog.close();
  clearSelection();
  render();
});

document.querySelector("#newGameBtn").addEventListener("click", () => {
  playSound("button");
  startNewGame();
});

document.querySelector("#undoBtn").addEventListener("click", () => {
  if (isGameFinished()) return;
  playSound("button");
  chess.undo();
  moveReviews.pop();
  lastMove = getLastTrackedMove();
  pendingPromotion = null;
  setHintVisible(false);
  resetEnginePositionState();
  clearSelection();
  render();
});

document.querySelector("#flipBtn").addEventListener("click", () => {
  playSound("button");
  flipped = !flipped;
  saveSetting(settingKeys.flipped, flipped);
  render();
});

hintBtn.addEventListener("click", () => {
  playSound("button");
  setHintVisible(!showBestMove);
  renderBestMoveArrow();
});

soundBtn.addEventListener("click", async () => {
  soundEnabled = !soundEnabled;
  window.localStorage.setItem("chessSoundEnabled", String(soundEnabled));
  renderSoundButton();
  if (soundEnabled) {
    await ensureAudioContext();
    playBoardTap({ start: 0, pitch: 245, knock: 0.62, texture: 0.66, duration: 0.058 });
    setMoveFeedback("Sound on.", "good");
  } else {
    setMoveFeedback("Sound muted.", "");
  }
});

resignBtn.addEventListener("click", () => {
  playSound("button");
  resignGame();
});

drawBtn.addEventListener("click", () => {
  playSound("button");
  agreeDraw();
});

modeSelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.mode, modeSelect.value);
  setHintVisible(false);
  chooseComputerSide();
  resetEnginePositionState();
  clearSelection();
  render();
});

difficultySelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.difficulty, difficultySelect.value);
  renderBotCard();
  setHintVisible(false);
  resetEnginePositionState();
  render();
});

clockSelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.clock, clockSelect.value);
  resetClockState();
  renderClocks();
});

volumeSelect.addEventListener("change", () => {
  saveSetting(settingKeys.volume, volumeSelect.value);
  updateMasterVolume();
  playSound("move");
});

reviewBtn.addEventListener("click", () => {
  if (reviewOpen) {
    reviewOpen = false;
    reviewPlaybackIndex = null;
    renderReview();
    renderBoard();
    return;
  }

  startReviewMode(0);
});

dialogReviewBtn.addEventListener("click", () => {
  gameOverDialog.close();
  startReviewMode(0);
});

reviewPrevBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex - 1);
});

reviewNextBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex + 1);
});

topReviewPrevBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex - 1);
});

topReviewNextBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex + 1);
});

boardReviewPrevBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex - 1);
});

boardReviewNextBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex + 1);
});

dockReviewPrevBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex - 1);
});

dockReviewNextBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex + 1);
});

dialogShareBtn.addEventListener("click", async () => {
  await shareFinishedGame();
});

dialogNewGameBtn.addEventListener("click", () => {
  gameOverDialog.close();
  startNewGame();
});

dialogCloseBtn.addEventListener("click", () => {
  gameOverDialog.close();
});

function jumpToReviewSection() {
  settingsSection.open = false;
  capturedSection.open = false;
  movesSection.open = false;
  reviewSection.open = true;
  reviewSection.classList.remove("review-section-focus");

  const scrollToReview = () => {
    if (sidePanel) {
      const panelBox = sidePanel.getBoundingClientRect();
      const reviewBox = reviewSection.getBoundingClientRect();
      const targetTop = Math.max(0, sidePanel.scrollTop + reviewBox.top - panelBox.top - 8);
      sidePanel.scrollTo({ top: targetTop, behavior: "auto" });
    } else {
      reviewSection.scrollIntoView({ block: "start", behavior: "auto" });
    }
  };

  window.requestAnimationFrame(() => {
    scrollToReview();
    window.setTimeout(scrollToReview, 80);
    reviewSection.classList.add("review-section-focus");
    window.setTimeout(() => {
      reviewSection.classList.remove("review-section-focus");
    }, 1300);
  });
}

function startReviewMode(index = 0) {
  if (!isGameFinished() || moveReviews.length === 0) {
    renderReview();
    return;
  }

  reviewOpen = true;
  previewIndex = null;
  reviewIndex = Math.max(0, Math.min(moveReviews.length - 1, index));
  clearSelection();
  renderReview();
  jumpToReviewSection();
  replayReviewMove();
}

function clearSelection() {
  selectedSquare = null;
  legalMoves = [];
}

function makeTrackedMove(moveInput) {
  clearPreview();
  const beforeFen = chess.fen();
  const beforeScore = getCachedOrMaterialScore(beforeFen);
  const movingPiece = chess.get(moveInput.from);
  const move = chess.move(moveInput);
  if (!move) return null;

  const afterFen = chess.fen();
  lastMove = { from: move.from, to: move.to };
  if (movingPiece) {
    pendingMoveAnimation = {
      color: movingPiece.color,
      from: move.from,
      piece: movingPiece.type,
      to: move.to,
    };
  }
  moveReviews.push({
    afterFen,
    beforeFen,
    beforeScore,
    bestMove: null,
    bestScore: null,
    bestMoveSan: "",
    color: move.color,
    from: move.from,
    moveNumber: Math.ceil(chess.history().length / 2),
    san: move.san,
    to: move.to,
    uci: `${move.from}${move.to}${move.promotion ?? ""}`,
    quality: "Pending",
    swing: 0,
  });
  classifyReviewsForFen(afterFen);
  handleMoveFeedback(move);
  return move;
}

function getLastTrackedMove() {
  const review = moveReviews.at(-1);
  return review ? { from: review.from, to: review.to } : null;
}

function playPendingMoveAnimation(review) {
  if (review || !pendingMoveAnimation) return;

  const animation = pendingMoveAnimation;
  pendingMoveAnimation = null;
  moveSlideLayer.innerHTML = "";

  const fromPoint = getSquareCenter(animation.from);
  const toPoint = getSquareCenter(animation.to);
  const ghost = document.createElement("span");
  const targetPiece = boardEl.querySelector(`[data-square="${animation.to}"] > span:not(.coords)`);

  ghost.className = `move-slide-piece ${animation.color === "w" ? "piece-white" : "piece-black"}`;
  ghost.textContent = pieceGlyphs[animation.color][animation.piece];
  ghost.style.setProperty("--from-x", `${fromPoint.x}%`);
  ghost.style.setProperty("--from-y", `${fromPoint.y}%`);
  ghost.style.setProperty("--to-x", `${toPoint.x}%`);
  ghost.style.setProperty("--to-y", `${toPoint.y}%`);

  targetPiece?.classList.add("piece-arriving");
  moveSlideLayer.append(ghost);

  window.setTimeout(() => {
    ghost.remove();
    targetPiece?.classList.remove("piece-arriving");
  }, 260);
}

function getCachedOrMaterialScore(fen) {
  return evalCache.get(fen) ?? getMaterialEvaluationForFen(fen);
}

function render() {
  renderBoard();
  renderStatus();
  renderMoves();
  renderCaptures();
  renderEvaluation();
  renderBestMoveArrow();
  renderReview();
  renderClocks();
  renderGameOverDialog();
  runEngineForPosition();
}

function renderStatus() {
  const turnName = chess.turn() === "w" ? "White" : "Black";
  const manualWinner = getManualWinner();
  turnBadge.textContent = agreedDraw
    ? "Draw"
    : manualWinner
      ? `${manualWinner === "w" ? "White" : "Black"} wins`
      : isComputerTurn()
        ? `${getBotName()} thinking`
        : `${turnName} to move`;

  resignBtn.disabled = isGameFinished();
  drawBtn.disabled = isGameFinished();

  const preview = getActivePreview();

  if (preview) {
    gameState.textContent = `Previewing ${preview.moveNumber}${preview.color === "b" ? "..." : "."} ${preview.san}.`;
  } else if (agreedDraw) {
    gameState.textContent = "Draw agreed.";
  } else if (resignation) {
    gameState.textContent = `${resignation.loser === "w" ? "White" : "Black"} resigned.`;
  } else if (timeoutWinner) {
    gameState.textContent = `${timeoutWinner === "w" ? "White" : "Black"} wins on time.`;
  } else if (chess.isCheckmate()) {
    gameState.textContent = `Checkmate. ${turnName === "White" ? "Black" : "White"} wins.`;
  } else if (chess.isStalemate()) {
    gameState.textContent = "Stalemate.";
  } else if (chess.isDraw()) {
    gameState.textContent = "Draw.";
  } else if (chess.isCheck()) {
    gameState.textContent = `${turnName} is in check.`;
  } else if (computerThinking) {
    gameState.textContent = getDifficulty().thinking;
  } else if (getOpeningName()) {
    gameState.textContent = getOpeningName();
  } else if (getComputerColor()) {
    gameState.textContent = getDifficulty().ready;
  } else {
    gameState.textContent = chess.history().length === 0 ? "Opening position" : "Game in progress";
  }
}

function renderMoves() {
  const history = chess.history({ verbose: true });
  moveList.innerHTML = "";
  moveCount.textContent = String(history.length);

  if (previewIndex !== null) {
    const liveItem = document.createElement("li");
    const liveButton = document.createElement("button");
    liveItem.className = "live-preview-row";
    liveButton.type = "button";
    liveButton.textContent = "Back to live";
    liveButton.addEventListener("click", () => setPreviewIndex(null));
    liveItem.append(liveButton);
    moveList.append(liveItem);
  }

  for (let index = 0; index < history.length; index += 2) {
    const item = document.createElement("li");
    const number = document.createElement("span");
    const white = document.createElement("span");
    const black = document.createElement("span");
    const whiteMoveIndex = index;
    const blackMoveIndex = index + 1;

    number.textContent = `${index / 2 + 1}.`;
    white.textContent = history[index]?.san ?? "";
    black.textContent = history[index + 1]?.san ?? "";
    white.className = "move-entry";
    black.className = "move-entry";

    wireMovePreview(white, whiteMoveIndex);
    wireMovePreview(black, blackMoveIndex);
    if (previewIndex === whiteMoveIndex) white.classList.add("active");
    if (previewIndex === blackMoveIndex) black.classList.add("active");
    applyMoveListQuality(white, whiteMoveIndex);
    applyMoveListQuality(black, blackMoveIndex);

    item.append(number, white, black);
    moveList.append(item);
  }

  moveList.scrollTop = moveList.scrollHeight;
}

function wireMovePreview(element, index) {
  if (!moveReviews[index]) return;

  element.tabIndex = 0;
  element.setAttribute("role", "button");
  element.setAttribute("aria-label", `Preview move ${element.textContent}`);
  element.addEventListener("click", () => {
    setPreviewIndex(previewIndex === index ? null : index);
  });
  element.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setPreviewIndex(previewIndex === index ? null : index);
  });
}

function applyMoveListQuality(element, index) {
  const review = moveReviews[index];
  if (!review || !isGameFinished()) return;

  element.classList.add("reviewed");
  element.dataset.quality = review.quality.toLowerCase();
  element.setAttribute("title", `${review.san}: ${review.quality}`);
}

function renderCaptures() {
  const capturedByWhite = [];
  const capturedByBlack = [];

  for (const move of chess.history({ verbose: true })) {
    if (!move.captured) continue;
    const bucket = move.color === "w" ? capturedByWhite : capturedByBlack;
    bucket.push(move.captured);
  }

  renderCaptureLine(whiteCaptures, capturedByWhite, "b");
  renderCaptureLine(blackCaptures, capturedByBlack, "w");
  renderMaterialAdvantage(capturedByWhite, capturedByBlack);
}

function renderCaptureLine(container, captures, color) {
  container.innerHTML = "";

  if (captures.length === 0) {
    container.textContent = "None";
    return;
  }

  for (const { piece, count } of groupCaptures(captures)) {
    const item = document.createElement("span");
    item.className = "capture-item";
    item.textContent = pieceGlyphs[color][piece];

    if (count > 1) {
      const countLabel = document.createElement("small");
      countLabel.textContent = `x${count}`;
      item.append(countLabel);
    }

    container.append(item);
  }
}

function renderMaterialAdvantage(capturedByWhite, capturedByBlack) {
  const whiteValue = getCaptureValue(capturedByWhite);
  const blackValue = getCaptureValue(capturedByBlack);
  const whiteAdvantage = whiteValue - blackValue;
  const blackAdvantage = blackValue - whiteValue;

  whiteMaterialAdvantage.textContent = whiteAdvantage > 0 ? `+${whiteAdvantage}` : "Even";
  blackMaterialAdvantage.textContent = blackAdvantage > 0 ? `+${blackAdvantage}` : "Even";
  whiteMaterialAdvantage.classList.toggle("active", whiteAdvantage > 0);
  blackMaterialAdvantage.classList.toggle("active", blackAdvantage > 0);
}

function renderEvaluation() {
  const materialScore = getMaterialEvaluation();
  const activeEngineEvaluation = engineEvaluation && engineEvaluation.fen === chess.fen() ? engineEvaluation : null;
  const cachedScore = evalCache.get(chess.fen());
  const shouldHoldPreviousScore = Boolean(
    !activeEngineEvaluation && cachedScore === undefined && (engineThinking || computerThinking || isComputerTurn()),
  );
  const score = activeEngineEvaluation?.score ?? cachedScore ?? (shouldHoldPreviousScore ? displayedEvaluation.score : materialScore);
  const cappedScore = Math.max(-10, Math.min(10, score));
  const blackShare = Math.round(((10 - cappedScore) / 20) * 100);
  const displayScore =
    activeEngineEvaluation?.label ??
    (cachedScore !== undefined ? formatScore(cachedScore) : shouldHoldPreviousScore ? displayedEvaluation.label : formatScore(score));

  blackEvalFill.style.setProperty("--eval-share", `${blackShare}%`);
  evalScore.textContent = displayScore;
  evalScore.setAttribute("aria-label", `Evaluation ${displayScore}`);
  displayedEvaluation = { label: displayScore, score };
}

function renderReview() {
  const isReviewReady = isGameFinished();
  reviewBtn.disabled = !isReviewReady;
  reviewBtn.textContent = reviewOpen ? "Hide Board Review" : "Show Board Review";
  reviewSection.open = reviewOpen || reviewSection.open;
  const showReviewControls = reviewOpen && moveReviews.length > 0;
  reviewList.classList.toggle("visible", isReviewReady && moveReviews.length > 0);
  reviewReplay.hidden = true;
  reviewTopBar.classList.remove("visible");
  boardStage.classList.toggle("review-mode", showReviewControls);
  reviewDock.classList.remove("visible");
  if (!reviewOpen) reviewMoveEffect.innerHTML = "";

  if (!isReviewReady) {
    reviewOpen = false;
    reviewSummary.textContent = "Finish the game to review your moves.";
    reviewList.innerHTML = "";
    reviewReplay.hidden = true;
    reviewTopBar.classList.remove("visible");
    boardStage.classList.remove("review-mode");
    reviewDock.classList.remove("visible");
    return;
  }

  const counts = getReviewCounts();
  const accuracy = getAccuracySummary();
  reviewSummary.innerHTML = `
    <div class="accuracy-summary">
      <span>White <strong>${accuracy.w}%</strong></span>
      <span>Black <strong>${accuracy.b}%</strong></span>
    </div>
    <div class="review-counts">Book ${counts.Book} · Best ${counts.Best} · Excellent ${counts.Excellent} · Good ${counts.Good} · Inaccuracy ${counts.Inaccuracy} · Mistake ${counts.Mistake} · Blunder ${counts.Blunder}</div>
  `;
  reviewSummary.innerHTML = getReviewSummaryMarkup(counts, accuracy);

  if (!reviewOpen) {
    renderReviewList({ active: false });
    reviewTopBar.classList.remove("visible");
    boardStage.classList.remove("review-mode");
    reviewDock.classList.remove("visible");
    return;
  }

  for (const review of moveReviews) {
    queueReviewAnalysis(review);
  }

  reviewIndex = Math.min(reviewIndex, Math.max(0, moveReviews.length - 1));
  const activeReview = getActiveReview();
  if (activeReview) {
    reviewMoveLabel.textContent = `${activeReview.moveNumber}${activeReview.color === "b" ? "..." : "."} ${activeReview.san} · ${activeReview.quality}`;
    reviewMoveLabel.innerHTML = `
      <span>${activeReview.moveNumber}${activeReview.color === "b" ? "..." : "."} ${activeReview.san}</span>
      <span class="quality-pill quality-${activeReview.quality.toLowerCase()}">${activeReview.quality}</span>
    `;
    reviewReason.textContent = getReviewReason(activeReview);
    reviewPrevBtn.disabled = reviewIndex === 0;
    reviewNextBtn.disabled = reviewIndex >= moveReviews.length - 1;
    topReviewMoveLabel.innerHTML = reviewMoveLabel.innerHTML;
    topReviewReason.textContent = reviewReason.textContent;
    topReviewPrevBtn.disabled = reviewPrevBtn.disabled;
    topReviewNextBtn.disabled = reviewNextBtn.disabled;
    boardReviewMoveLabel.innerHTML = reviewMoveLabel.innerHTML;
    boardReviewReason.textContent = reviewReason.textContent;
    boardReviewPrevBtn.disabled = reviewPrevBtn.disabled;
    boardReviewNextBtn.disabled = reviewNextBtn.disabled;
    dockReviewMoveLabel.innerHTML = reviewMoveLabel.innerHTML;
    dockReviewReason.textContent = reviewReason.textContent;
    dockReviewPrevBtn.disabled = reviewPrevBtn.disabled;
    dockReviewNextBtn.disabled = reviewNextBtn.disabled;
  }

  renderReviewList({ active: true });
}

function renderReviewList({ active }) {
  reviewList.innerHTML = "";
  for (const [index, review] of moveReviews.entries()) {
    const item = document.createElement("li");
    const moveNumber = document.createElement("span");
    const san = document.createElement("span");
    const quality = document.createElement("span");

    if (active && index === reviewIndex) item.classList.add("active");
    moveNumber.textContent = `${review.moveNumber}${review.color === "b" ? "..." : "."}`;
    san.textContent = review.san;
    quality.className = `quality-pill quality-${review.quality.toLowerCase()}`;
    quality.textContent = review.quality;
    quality.textContent = getQualitySymbol(review.quality);
    quality.setAttribute("title", review.quality);

    item.append(moveNumber, san, quality);
    item.addEventListener("click", () => {
      if (!reviewOpen) startReviewMode(index);
      else setReviewIndex(index);
    });
    reviewList.append(item);
  }
}

function renderGameOverDialog() {
  if (!isGameFinished() || gameOverShown) return;

  const result = getGameOverMessage();
  gameOverDialog.dataset.result = result.kind;
  gameOverBadge.textContent = result.badge;
  gameOverTitle.textContent = result.title;
  gameOverText.textContent = result.body;
  renderGameOverStats();
  gameOverNote.textContent = getGameOverNote(result);
  setFinalBotComment();
  gameOverShown = true;
  playSound("gameOver");
  setMoveFeedback(result.body, "alert");
  gameOverDialog.showModal();
}

function getGameOverMessage() {
  const turnName = chess.turn() === "w" ? "White" : "Black";

  if (resignation) {
    const loser = resignation.loser === "w" ? "White" : "Black";
    const winner = resignation.winner === "w" ? "White" : "Black";
    return { badge: `${winner} wins`, kind: "win", title: "Resignation", body: `${loser} resigned. ${winner} wins.` };
  }

  if (agreedDraw) {
    return { badge: "Draw", kind: "draw", title: "Draw", body: "Draw agreed." };
  }

  if (chess.isCheckmate()) {
    const winner = turnName === "White" ? "Black" : "White";
    return { badge: `${winner} wins`, kind: "win", title: "Checkmate", body: `${winner} wins.` };
  }

  if (chess.isStalemate()) {
    return { badge: "Draw", kind: "draw", title: "Stalemate", body: "The game is a draw." };
  }

  if (chess.isDraw()) {
    return { badge: "Draw", kind: "draw", title: "Draw", body: "The game is drawn." };
  }

  if (timeoutWinner) {
    const winner = timeoutWinner === "w" ? "White" : "Black";
    return { badge: `${winner} wins`, kind: "win", title: "Time", body: `${winner} wins on time.` };
  }

  return { badge: "Game Over", kind: "ended", title: "Game Over", body: "The game has ended." };
}

function getGameOverNote(result) {
  const key = getKeyMomentLabel();
  if (result.kind === "draw") return `Balanced game. Key moment: ${key}.`;
  if (key === "Clean game") return "Clean game. Review the moves to see how the result was built.";
  return `Key moment: ${key}. Open review to replay it.`;
}

function renderGameOverStats() {
  const accuracy = getAccuracySummary();
  whiteAccuracy.textContent = `${accuracy.w}%`;
  blackAccuracy.textContent = `${accuracy.b}%`;
  keyMoment.textContent = getKeyMomentLabel();
  bestMoveMoment.textContent = getBestMoveLabel();
  worstMoveMoment.textContent = getWorstMoveLabel();
}

function getReviewSummaryMarkup(counts, accuracy) {
  const totalMoves = moveReviews.length;
  const keyMoment = getKeyMomentLabel();
  const strongerSide =
    accuracy.w === accuracy.b ? "Even accuracy" : accuracy.w > accuracy.b ? "White was cleaner" : "Black was cleaner";
  const categories = ["Book", "Best", "Excellent", "Great", "Good", "Inaccuracy", "Mistake", "Blunder"];
  const chips = categories
    .map(
      (quality) => `
        <span class="review-chip quality-${quality.toLowerCase()}">
          <span>
            <i></i>
            ${quality}
          </span>
          <strong>${counts[quality] ?? 0}</strong>
        </span>
      `,
    )
    .join("");

  return `
    <div class="review-card-head">
      <span>Game Report</span>
      <strong>${strongerSide}</strong>
    </div>
    <div class="review-hero">
      <div>
        <span>White</span>
        <strong>${accuracy.w}%</strong>
        <small>Accuracy</small>
      </div>
      <div>
        <span>Black</span>
        <strong>${accuracy.b}%</strong>
        <small>Accuracy</small>
      </div>
    </div>
    <div class="review-keyline">
      <span>Key Moment</span>
      <strong>${keyMoment}</strong>
    </div>
    <div class="review-countline">
      <span>${totalMoves} reviewed move${totalMoves === 1 ? "" : "s"}</span>
      <span>Click a move below to replay it.</span>
    </div>
    <div class="review-chips">${chips}</div>
  `;
}

function getAccuracySummary() {
  return {
    w: getAccuracyForColor("w"),
    b: getAccuracyForColor("b"),
  };
}

function getAccuracyForColor(color) {
  const reviews = moveReviews.filter((review) => review.color === color);
  if (reviews.length === 0) return 100;

  const total = reviews.reduce((sum, review) => sum + getQualityScore(review.quality), 0);
  const rawAccuracy = Math.round(total / reviews.length);
  const hasBlunder = reviews.some((review) => review.quality === "Blunder");
  const hasMistake = reviews.some((review) => review.quality === "Mistake");
  const hasMultipleBigMisses = reviews.filter((review) => ["Mistake", "Blunder"].includes(review.quality)).length >= 2;
  const floor = hasBlunder
    ? hasMultipleBigMisses
      ? 28
      : 45
    : hasMistake
      ? 62
      : 78;
  return Math.max(floor, Math.min(100, rawAccuracy));
}

function getQualityScore(quality) {
  const scores = {
    Book: 100,
    Best: 100,
    Brilliant: 100,
    Great: 94,
    Perfect: 96,
    Excellent: 92,
    Good: 88,
    Inaccuracy: 76,
    Mistake: 56,
    Blunder: 28,
    Pending: 82,
  };
  return scores[quality] ?? 75;
}

function getKeyMomentLabel() {
  const priority = { Blunder: 5, Mistake: 4, Inaccuracy: 3, Great: 2, Brilliant: 2 };
  const keyMove = moveReviews
    .filter((review) => priority[review.quality])
    .sort((a, b) => priority[b.quality] - priority[a.quality] || Math.abs(b.swing) - Math.abs(a.swing))[0];

  if (!keyMove) return "Clean game";
  return formatReviewMoment(keyMove);
}

function getBestMoveLabel() {
  const priority = { Brilliant: 6, Best: 5, Perfect: 4, Great: 3, Excellent: 2, Book: 1 };
  const bestMove = moveReviews
    .filter((review) => priority[review.quality] || review.san.includes("#"))
    .sort((a, b) => getBestMovePriority(b, priority) - getBestMovePriority(a, priority) || Math.abs(b.swing) - Math.abs(a.swing))[0];

  return bestMove ? formatReviewMoment(bestMove) : "No standout";
}

function getBestMovePriority(review, priority) {
  if (review.san.includes("#")) return 10;
  if (review.san.includes("+")) return (priority[review.quality] ?? 0) + 0.5;
  return priority[review.quality] ?? 0;
}

function getWorstMoveLabel() {
  const priority = { Blunder: 4, Mistake: 3, Inaccuracy: 2, Good: 1 };
  const worstMove = moveReviews
    .filter((review) => priority[review.quality])
    .sort((a, b) => priority[b.quality] - priority[a.quality] || Math.abs(b.swing) - Math.abs(a.swing))[0];

  return worstMove ? formatReviewMoment(worstMove) : "No big miss";
}

function formatReviewMoment(review) {
  const color = review.color === "w" ? "White" : "Black";
  return `${color} ${review.moveNumber}${review.color === "b" ? "..." : "."} ${review.san}`;
}

async function shareFinishedGame() {
  const shareText = getShareGameText();
  try {
    await copyTextToClipboard(shareText);
    setShareButtonFeedback("Copied!");
  } catch {
    setShareButtonFeedback("Copy failed");
    setMoveFeedback("Could not copy the game summary from this browser.", "alert");
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the textarea copy path for browsers that block async clipboard.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.left = "-9999px";
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy command failed");
}

function setShareButtonFeedback(text) {
  const original = "Share Game";
  dialogShareBtn.textContent = text;
  window.setTimeout(() => {
    dialogShareBtn.textContent = original;
  }, 1400);
}

function getShareGameText() {
  const result = getGameOverMessage();
  const accuracy = getAccuracySummary();
  const bot = getComputerColor() ? `${getBotName()} ${getDifficulty().elo}` : "Local player";
  const opening = getOpeningName();

  return [
    "Chess Table Game",
    `Result: ${result.body}`,
    `Opponent: ${bot}`,
    opening ? `Opening: ${opening}` : "",
    `Accuracy: White ${accuracy.w}% / Black ${accuracy.b}%`,
    `Key moment: ${getKeyMomentLabel()}`,
    `Best move: ${getBestMoveLabel()}`,
    `Toughest move: ${getWorstMoveLabel()}`,
    "",
    getPgnStyleMoveText(),
  ]
    .filter((line) => line !== "")
    .join("\n");
}

function getPgnStyleMoveText() {
  if (moveReviews.length === 0) return "No moves recorded.";
  const lines = [];
  for (let index = 0; index < moveReviews.length; index += 2) {
    const white = moveReviews[index]?.san ?? "";
    const black = moveReviews[index + 1]?.san ?? "";
    const moveNumber = Math.floor(index / 2) + 1;
    lines.push(`${moveNumber}. ${white}${black ? ` ${black}` : ""}`);
  }
  return lines.join(" ");
}

function getReviewCounts() {
  return moveReviews.reduce(
    (counts, review) => {
      if (counts[review.quality] !== undefined) counts[review.quality] += 1;
      return counts;
    },
    { Book: 0, Best: 0, Excellent: 0, Great: 0, Good: 0, Inaccuracy: 0, Mistake: 0, Blunder: 0 },
  );
}

function getOpeningName() {
  const playedMoves = chess.history();
  if (playedMoves.length === 0) return "";
  const playedLine = playedMoves.join(" ");
  const match = openingBook.find(
    (opening) => playedLine === opening.moves || playedLine.startsWith(`${opening.moves} `),
  );
  return match?.name ?? "";
}

function getOpeningNameForReview(review) {
  const reviewIndex = moveReviews.indexOf(review);
  if (reviewIndex < 0) return "";
  const playedLine = moveReviews
    .slice(0, reviewIndex + 1)
    .map((item) => item.san)
    .join(" ");
  const fullLine = moveReviews.map((item) => item.san).join(" ");
  const fullMatch = openingBook.find(
    (opening) => fullLine === opening.moves || fullLine.startsWith(`${opening.moves} `),
  );
  const partialMatch = openingBook.find(
    (opening) => opening.moves === playedLine || opening.moves.startsWith(`${playedLine} `),
  );
  return fullMatch?.name ?? partialMatch?.name ?? "";
}

function classifyReviewsForFen(fen) {
  const afterScore = getCachedOrMaterialScore(fen);

  for (const [index, review] of moveReviews.entries()) {
    if (review.afterFen !== fen) continue;
    const moverSwing =
      review.color === "w" ? afterScore - review.beforeScore : review.beforeScore - afterScore;
    review.swing = moverSwing;
    if (isBookReviewMove(index)) {
      review.quality = "Book";
    } else if (review.bestMove) {
      applyEngineReviewQuality(review);
    } else {
      review.quality = classifyMoveQuality(moverSwing);
    }
    softenHumanMoveQuality(review, index);
  }
}

function applyEngineReviewQuality(review) {
  if (review.quality === "Book") return;
  if (!review.bestMove) return;

  const isBestMove = normalizeUci(review.uci) === normalizeUci(review.bestMove);
  if (isBestMove) {
    review.quality = "Best";
    return;
  }

  const score = review.bestScore ?? evalCache.get(review.beforeFen);
  const afterScore = evalCache.get(review.afterFen) ?? getMaterialEvaluationForFen(review.afterFen);
  if (typeof score === "number" && typeof afterScore === "number") {
    const moverLoss = review.color === "w" ? score - afterScore : afterScore - score;
    review.swing = -moverLoss;
    review.quality = classifyMoveLoss(moverLoss);
  }
}

function classifyMoveLoss(loss) {
  if (loss <= 0.25) return "Excellent";
  if (loss <= 0.75) return "Good";
  if (loss <= 1.6) return "Inaccuracy";
  if (loss <= 3.2) return "Mistake";
  return "Blunder";
}

function softenHumanMoveQuality(review, index) {
  if (["Book", "Best", "Brilliant", "Great", "Perfect", "Excellent"].includes(review.quality)) return;
  const loss = Math.max(0, -review.swing);
  if (loss <= 0.25) {
    review.quality = improveQuality(review.quality, "Excellent");
    return;
  }
  if (loss <= 0.8) {
    review.quality = improveQuality(review.quality, "Good");
    return;
  }
  if (isNaturalDevelopingMove(review, index) && loss <= 1.35) {
    review.quality = improveQuality(review.quality, "Good");
  }
}

function improveQuality(current, minimum) {
  const order = ["Blunder", "Mistake", "Inaccuracy", "Good", "Excellent", "Perfect", "Great", "Brilliant", "Best", "Book"];
  return order.indexOf(current) < order.indexOf(minimum) ? minimum : current;
}

function isNaturalDevelopingMove(review, index) {
  if (index > 13) return false;
  const piece = new Chess(review.beforeFen).get(review.from);
  if (!piece) return false;
  if (review.san.includes("O-O")) return true;
  if (["n", "b"].includes(piece.type)) return true;
  return piece.type === "p" && ["c", "d", "e", "f"].includes(review.to[0]) && ["4", "5"].includes(review.to[1]);
}

function normalizeUci(uci) {
  return String(uci ?? "").trim().toLowerCase();
}

function getMoveSanForUci(fen, uci) {
  try {
    const position = new Chess(fen);
    const move = position.move({
      from: uci.slice(0, 2),
      to: uci.slice(2, 4),
      promotion: uci[4],
    });
    return move?.san ?? "";
  } catch {
    return "";
  }
}

function isBookReviewMove(index) {
  const playedLine = moveReviews
    .slice(0, index + 1)
    .map((review) => review.san)
    .join(" ");

  return openingBook.some(
    (opening) => opening.moves === playedLine || opening.moves.startsWith(`${playedLine} `),
  );
}

function classifyMoveQuality(swing) {
  if (swing >= 1.8) return "Brilliant";
  if (swing >= 0.35) return "Great";
  if (swing >= -0.2) return "Perfect";
  if (swing >= -0.9) return "Good";
  if (swing >= -1.8) return "Inaccuracy";
  if (swing >= -3.2) return "Mistake";
  return "Blunder";
}

function getReviewReason(review) {
  const change = Math.abs(review.swing).toFixed(1);

  if (review.quality === "Book") {
    const openingName = getOpeningNameForReview(review);
    return openingName
      ? `This is a known book move in the ${openingName}. The review keeps it as theory instead of judging it by short-term material changes.`
      : "This is a known book move. The review keeps it as theory instead of judging it by short-term material changes.";
  }

  if (review.quality === "Best") {
    return "This matched Stockfish's top move for the position.";
  }

  if (review.quality === "Excellent") {
    return review.bestMoveSan
      ? `This was very close to best. Stockfish preferred ${review.bestMoveSan}, but the position stayed healthy.`
      : "This was very close to best and kept the position healthy.";
  }

  if (review.quality === "Inaccuracy") {
    return review.bestMoveSan
      ? `This let the position slip. Stockfish preferred ${review.bestMoveSan}.`
      : "This let the position slip compared with the engine's top choice.";
  }

  if (review.quality === "Brilliant") {
    return `This move swung the evaluation by about ${change} points for the player who moved. It likely found a tactic, won decisive material, or delivered a crushing threat.`;
  }

  if (review.quality === "Great") {
    return `This improved the position by about ${change} points. It was a strong move that gained material, activity, or a serious attacking chance.`;
  }

  if (review.quality === "Perfect") {
    return "This kept the evaluation steady or slightly improved it. It matched the needs of the position without giving anything important away.";
  }

  if (review.quality === "Good") {
    return review.bestMoveSan
      ? `This was playable, though Stockfish preferred ${review.bestMoveSan}.`
      : `This was playable, but it let the evaluation slip by about ${change} points. There was probably a cleaner move available.`;
  }

  if (review.quality === "Mistake") {
    return review.bestMoveSan
      ? `This dropped the position. Stockfish preferred ${review.bestMoveSan}.`
      : `This dropped about ${change} points from the mover's position. It likely missed a tactic, weakened safety, or gave up material.`;
  }

  if (review.quality === "Blunder") {
    return review.bestMoveSan
      ? `This was a major swing against the mover. Stockfish preferred ${review.bestMoveSan}.`
      : `This was a major swing of about ${change} points against the mover. It likely lost material, allowed mate threats, or missed a decisive reply.`;
  }

  return "The engine is still analyzing this move. The category may update once the evaluation arrives.";
}

function getActiveReview() {
  if (!reviewOpen || !isGameFinished() || moveReviews.length === 0) return null;
  return moveReviews[reviewIndex] ?? null;
}

function getReviewDisplayFen(review) {
  return reviewPlaybackIndex === reviewIndex ? review.beforeFen : review.afterFen;
}

function getActivePreview() {
  if (reviewOpen || previewIndex === null || moveReviews.length === 0) return null;
  return moveReviews[previewIndex] ?? null;
}

function setPreviewIndex(index) {
  previewIndex =
    index === null ? null : Math.max(0, Math.min(moveReviews.length - 1, index));
  clearSelection();
  render();
}

function clearPreview() {
  previewIndex = null;
}

function setReviewIndex(index) {
  reviewIndex = Math.max(0, Math.min(moveReviews.length - 1, index));
  renderReview();
  replayReviewMove();
}

function replayReviewMove() {
  const review = getActiveReview();
  if (!review) return;

  if (reviewPlaybackTimer) {
    window.clearTimeout(reviewPlaybackTimer);
    reviewPlaybackTimer = null;
  }

  reviewPlaybackIndex = reviewIndex;
  renderBoard();
  window.requestAnimationFrame(() => {
    playReviewMoveEffect();
    reviewPlaybackTimer = window.setTimeout(() => {
      reviewPlaybackIndex = null;
      reviewPlaybackTimer = null;
      renderBoard();
    }, 720);
  });
}

function playReviewMoveEffect() {
  const review = getActiveReview();
  reviewMoveEffect.innerHTML = "";
  if (!review) return;

  const beforePosition = new Chess(review.beforeFen);
  const piece = beforePosition.get(review.from);
  if (!piece) return;

  const fromPoint = getSquareCenter(review.from);
  const toPoint = getSquareCenter(review.to);
  const ghost = document.createElement("span");
  const symbol = document.createElement("span");

  ghost.className = `review-ghost-piece ${piece.color === "w" ? "piece-white" : "piece-black"}`;
  ghost.dataset.replay = String(Date.now());
  ghost.textContent = pieceGlyphs[piece.color][piece.type];
  symbol.className = "review-symbol";
  symbol.dataset.replay = ghost.dataset.replay;
  symbol.textContent = getQualitySymbol(review.quality);

  for (const element of [ghost, symbol]) {
    element.style.setProperty("--from-x", `${fromPoint.x}%`);
    element.style.setProperty("--from-y", `${fromPoint.y}%`);
    element.style.setProperty("--to-x", `${toPoint.x}%`);
    element.style.setProperty("--to-y", `${toPoint.y}%`);
  }

  reviewMoveEffect.append(ghost, symbol);
}

function getQualitySymbol(quality) {
  const symbols = {
    Book: "B",
    Best: "★",
    Excellent: "!",
    Brilliant: "!!",
    Perfect: "✓",
    Great: "!",
    Good: "+",
    Inaccuracy: "?!",
    Mistake: "?!",
    Blunder: "??",
    Pending: "...",
  };

  return symbols[quality] ?? "?";
}

function getMaterialEvaluation() {
  if (chess.isCheckmate()) {
    return chess.turn() === "w" ? -99 : 99;
  }

  return getMaterialEvaluationForFen(chess.fen());
}

function getMaterialEvaluationForFen(fen) {
  const position = new Chess(fen);

  if (position.isCheckmate()) {
    return position.turn() === "w" ? -99 : 99;
  }

  return position.board().flat().reduce((total, piece) => {
    if (!piece) return total;
    const value = pieceValues[piece.type] ?? 0;
    return piece.color === "w" ? total + value : total - value;
  }, 0);
}

function formatScore(score) {
  if (score === 0) return "0.0";
  const prefix = score > 0 ? "+" : "";
  return `${prefix}${score.toFixed(1)}`;
}

function startStockfish() {
  if (!window.Worker) {
    engineFailed = true;
    renderEvaluation();
    return;
  }

  try {
    engine = new Worker("./src/stockfish-worker.js");
  } catch {
    engineFailed = true;
    renderEvaluation();
    return;
  }

  engine.addEventListener("message", handleEngineMessage);
  engine.addEventListener("error", () => {
    engineFailed = true;
    engineReady = false;
    engineThinking = false;
    renderEvaluation();
  });

  postEngineCommand("uci");
}

function handleEngineMessage(event) {
  const line = String(event.data);

  if (line === "uciok") {
    postEngineCommand("isready");
    return;
  }

  if (line === "readyok") {
    engineReady = true;
    runEngineForPosition();
    renderEvaluation();
    return;
  }

  if (line.startsWith("info ")) {
    const parsed = parseEngineScore(line);
    if (!parsed) return;
    if (engineMode === "review") {
      if (activeReviewAnalysis) {
        activeReviewAnalysis.bestScore = parsed.score;
      }
    } else if (engineMode === "move") {
      pendingEngineCandidates = parsed.candidates ?? pendingEngineCandidates;
    } else {
      engineEvaluation = {
        fen: engineTargetFen,
        label: parsed.label,
        score: parsed.score,
      };
      evalCache.set(engineTargetFen, parsed.score);
      classifyReviewsForFen(engineTargetFen);
    }
    renderEvaluation();
    return;
  }

  if (line.startsWith("bestmove")) {
    engineThinking = false;
    const bestMove = line.match(/^bestmove\s+([a-h][1-8][a-h][1-8][qrbn]?)/)?.[1] ?? null;
    engineBestMove = bestMove
      ? {
          fen: engineTargetFen,
          from: bestMove.slice(0, 2),
          to: bestMove.slice(2, 4),
      }
      : null;

    if (engineMode === "move") {
      if (bestMove) {
        scheduleComputerMove(selectComputerMove(bestMove));
      } else {
        computerThinking = false;
        render();
      }
      return;
    }

    if (engineMode === "review") {
      finishReviewAnalysis(bestMove);
      return;
    }

    renderEvaluation();
    renderBestMoveArrow();
  }
}

function runEngineForPosition() {
  if (!engineReady || engineFailed) return;
  if (pendingReviewAnalysis.length > 0 || activeReviewAnalysis) {
    runNextReviewAnalysis();
    return;
  }
  if (isComputerTurn()) {
    requestComputerMove();
    return;
  }

  analyzeWithStockfish();
}

function queueReviewAnalysis(review) {
  if (!engineReady || engineFailed || isBookReviewMove(moveReviews.indexOf(review))) return;
  if (review.bestMove || pendingReviewAnalysis.includes(review) || activeReviewAnalysis === review) return;
  pendingReviewAnalysis.push(review);
  runNextReviewAnalysis();
}

function runNextReviewAnalysis() {
  if (!engineReady || engineFailed || activeReviewAnalysis || engineMode === "move") return;
  const review = pendingReviewAnalysis.shift();
  if (!review) {
    runEngineForPosition();
    return;
  }

  activeReviewAnalysis = review;
  engineMode = "review";
  engineThinking = true;
  engineTargetTurn = new Chess(review.beforeFen).turn();
  postEngineCommand("stop");
  postEngineCommand(`position fen ${review.beforeFen}`);
  postEngineCommand(`go depth ${Math.max(8, getDifficulty().depth)}`);
}

function finishReviewAnalysis(bestMove) {
  const review = activeReviewAnalysis;
  activeReviewAnalysis = null;
  engineThinking = false;

  if (review) {
    review.bestMove = bestMove;
    review.bestMoveSan = bestMove ? getMoveSanForUci(review.beforeFen, bestMove) : "";
    applyEngineReviewQuality(review);
  }

  renderReview();
  if (pendingReviewAnalysis.length > 0) {
    runNextReviewAnalysis();
  } else {
    engineMode = "analysis";
    engineTargetFen = "";
    runEngineForPosition();
  }
}

function analyzeWithStockfish() {
  if (!engineReady || engineFailed || computerThinking) return;

  const fen = chess.fen();
  if (engineTargetFen === fen && engineThinking) return;
  if (engineEvaluation?.fen === fen) return;

  engineTargetFen = fen;
  engineTargetTurn = chess.turn();
  engineMode = "analysis";
  engineThinking = true;

  postEngineCommand("stop");
  postEngineCommand(`position fen ${fen}`);
  postEngineCommand(`go depth ${getDifficulty().depth}`);
}

function requestComputerMove() {
  if (computerThinking || isGameFinished()) return;

  if (getDifficulty().style === "beginner") {
    makeImperfectComputerMove();
    return;
  }

  const fen = chess.fen();
  engineTargetFen = fen;
  engineTargetTurn = chess.turn();
  engineMode = "move";
  engineThinking = true;
  computerThinking = true;
  computerThinkingStartedAt = performance.now();
  pendingEngineCandidates = null;
  clearSelection();
  setHintVisible(false);

  postEngineCommand("stop");
  postEngineCommand(`position fen ${fen}`);
  postEngineCommand(`go depth ${getDifficulty().depth}`);
  renderStatus();
  renderEvaluation();
}

function scheduleComputerMove(bestMove) {
  const elapsed = performance.now() - computerThinkingStartedAt;
  const delay = Math.max(0, getBotMoveDelay() - elapsed);

  clearPendingComputerMove();
  pendingComputerMoveTimer = window.setTimeout(() => {
    pendingComputerMoveTimer = null;
    if (!isComputerTurn() || isGameFinished()) {
      computerThinking = false;
      render();
      return;
    }
    makeComputerMove(bestMove);
  }, delay);
}

function clearPendingComputerMove() {
  if (!pendingComputerMoveTimer) return;
  window.clearTimeout(pendingComputerMoveTimer);
  pendingComputerMoveTimer = null;
}

function getBotMoveDelay() {
  return Math.max(1100, getDifficulty().moveTime);
}

function makeComputerMove(bestMove) {
  const from = bestMove.slice(0, 2);
  const to = bestMove.slice(2, 4);
  const promotion = bestMove[4];

  const move = makeTrackedMove({ from, to, promotion });
  if (move) afterMovePlayed(move.color);
  computerThinking = false;
  setHintVisible(false);
  resetEnginePositionState();
  render();
}

function selectComputerMove(bestMove) {
  const difficulty = getDifficulty();
  if (difficulty.style === "expert") return bestMove;

  const legalMoves = chess.moves({ verbose: true });
  if (legalMoves.length === 0) return bestMove;

  const legalMoveIds = new Set(
    legalMoves.map((move) => `${move.from}${move.to}${move.promotion ?? ""}`),
  );
  const engineCandidates = [bestMove, ...(pendingEngineCandidates ?? [])]
    .filter((move, index, list) => move && list.indexOf(move) === index)
    .filter((move) => legalMoveIds.has(move));

  if (Math.random() < difficulty.randomChance || engineCandidates.length === 0) {
    return moveToUci(chooseBeginnerMove()) ?? bestMove;
  }

  const heuristicMove = chooseBeginnerMove();
  if (heuristicMove && Math.random() < difficulty.randomChance * 0.8) {
    return moveToUci(heuristicMove);
  }

  const candidatePool = engineCandidates.slice(0, difficulty.candidateCount);
  return candidatePool[Math.floor(Math.random() * candidatePool.length)] ?? bestMove;
}

function moveToUci(move) {
  if (!move) return null;
  return `${move.from}${move.to}${move.promotion ?? ""}`;
}

function makeImperfectComputerMove() {
  computerThinking = true;
  computerThinkingStartedAt = performance.now();
  clearSelection();
  setHintVisible(false);
  renderStatus();
  renderEvaluation();

  clearPendingComputerMove();
  pendingComputerMoveTimer = window.setTimeout(() => {
    pendingComputerMoveTimer = null;
    if (!isComputerTurn() || isGameFinished()) {
      computerThinking = false;
      render();
      return;
    }
    const move = chooseBeginnerMove();
    if (move) {
      makeTrackedMove(move);
      afterMovePlayed(move.color);
    }
    computerThinking = false;
    resetEnginePositionState();
    render();
  }, getBotMoveDelay());
}

function chooseBeginnerMove() {
  const moves = chess.moves({ verbose: true });
  if (moves.length === 0) return null;
  const difficulty = getDifficulty();

  const scoredMoves = moves.map((move) => ({
    move,
    score: scoreBeginnerMove(move, difficulty.style) + Math.random() * getBotNoise(difficulty.style),
  }));

  scoredMoves.sort((a, b) => b.score - a.score);
  const topSlice = scoredMoves.slice(0, Math.min(difficulty.candidateCount, scoredMoves.length));
  const blunderChance = Math.random();

  if (blunderChance < difficulty.randomChance) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  return topSlice[Math.floor(Math.random() * topSlice.length)].move;
}

function scoreBeginnerMove(move, style) {
  let score = 0;
  const caution = { beginner: 1.2, casual: 1.7, club: 2.2, strong: 2.8 }[style] ?? 1.2;
  const captureWeight = { beginner: 1, casual: 1.6, club: 2.2, strong: 2.7 }[style] ?? 1;
  const developmentWeight = { beginner: 0.45, casual: 0.85, club: 1.15, strong: 1.35 }[style] ?? 0.8;

  if (move.captured) score += (pieceValues[move.captured] ?? 0) * captureWeight;
  if (move.promotion) score += 8;
  if (move.san.includes("+")) score += 2;
  if (move.san.includes("#")) score += 100;

  const movedPieceValue = pieceValues[move.piece] ?? 0;
  const targetAttackers = chess.attackers(move.to, chess.turn() === "w" ? "b" : "w");
  if (targetAttackers.length > 0) score -= movedPieceValue * caution;

  if (["e4", "d4", "e5", "d5"].includes(move.to)) score += developmentWeight;
  if (move.piece === "n" || move.piece === "b") score += developmentWeight;
  if (move.piece === "k" && move.san.includes("O-O")) score += 1.4;
  if (move.piece === "q") score -= style === "beginner" ? 0.2 : 1.1;

  return score;
}

function getBotNoise(style) {
  return { beginner: 10, casual: 7, club: 4, strong: 2 }[style] ?? 5;
}

function parseEngineScore(line) {
  const candidates = parsePrincipalVariation(line);
  const mate = line.match(/\bscore mate (-?\d+)/);
  if (mate) {
    const sideToMoveMate = Number(mate[1]);
    const mateForWhite = engineTargetTurn === "w" ? sideToMoveMate : -sideToMoveMate;
    const winningScore = mateForWhite > 0 ? 99 : -99;
    return {
      label: mateForWhite > 0 ? `M${Math.abs(mateForWhite)}` : `-M${Math.abs(mateForWhite)}`,
      score: winningScore,
      candidates,
    };
  }

  const centipawns = line.match(/\bscore cp (-?\d+)/);
  if (!centipawns) return null;

  const sideToMoveScore = Number(centipawns[1]) / 100;
  const whiteScore = engineTargetTurn === "w" ? sideToMoveScore : -sideToMoveScore;

  return {
    label: formatScore(whiteScore),
    score: whiteScore,
    candidates,
  };
}

function parsePrincipalVariation(line) {
  const pvMatch = line.match(/\bpv\s+(.+)$/);
  if (!pvMatch) return null;

  return pvMatch[1]
    .trim()
    .split(/\s+/)
    .filter((move) => /^[a-h][1-8][a-h][1-8][qrbn]?$/.test(move));
}

function postEngineCommand(command) {
  if (!engine || engineFailed) return;
  engine.postMessage(command);
}

function getDifficulty() {
  return difficultySettings[difficultySelect.value] ?? difficultySettings.medium;
}

function getBotName() {
  return getDifficulty().botName;
}

function renderBotCard() {
  const difficulty = getDifficulty();
  botAvatar.dataset.bot = difficulty.theme;
  botName.textContent = difficulty.botName;
  botElo.textContent = difficulty.elo;
  botStyle.textContent = difficulty.persona;
  botChatter.textContent = difficulty.chatter.ready;
}

function setBotChatter(kind) {
  if (!getComputerColor()) return;
  const chatter = getDifficulty().chatter;
  botChatter.textContent = chatter[kind] ?? chatter.ready;
}

function getComputerColor() {
  if (modeSelect.value === "random") return selectedComputerColor;
  if (modeSelect.value === "white") return "b";
  if (modeSelect.value === "black") return "w";
  return null;
}

function getManualWinner() {
  return resignation?.winner ?? timeoutWinner;
}

function isComputerTurn() {
  const computerColor = getComputerColor();
  return Boolean(computerColor && chess.turn() === computerColor && !isGameFinished());
}

function isGameFinished() {
  return Boolean(agreedDraw || resignation || timeoutWinner || chess.isGameOver());
}

function resignGame() {
  if (isGameFinished()) return;

  const loser = chess.turn();
  const computerColor = getComputerColor();
  resignation = {
    loser,
    winner: loser === "w" ? "b" : "w",
  };
  if (computerColor) {
    setBotChatter(loser === computerColor ? "loss" : "win");
  }
  stopClockLoop();
  clearSelection();
  setHintVisible(false);
  resetEnginePositionState();
  render();
}

function agreeDraw() {
  if (isGameFinished()) return;

  agreedDraw = true;
  setBotChatter("draw");
  stopClockLoop();
  clearSelection();
  setHintVisible(false);
  resetEnginePositionState();
  render();
}

function resetEnginePositionState() {
  clearPendingComputerMove();
  engineTargetFen = "";
  engineEvaluation = null;
  engineBestMove = null;
  engineThinking = false;
  computerThinking = false;
  computerThinkingStartedAt = 0;
}

function resetDisplayedEvaluation() {
  displayedEvaluation = { label: "0.0", score: 0 };
}

function resetReviewState() {
  moveReviews = [];
  evalCache = new Map();
  reviewOpen = false;
  gameOverShown = false;
  reviewIndex = 0;
  previewIndex = null;
  reviewPlaybackIndex = null;
  if (reviewPlaybackTimer) {
    window.clearTimeout(reviewPlaybackTimer);
    reviewPlaybackTimer = null;
  }
  reviewMoveEffect.innerHTML = "";
  moveSlideLayer.innerHTML = "";
  pendingMoveAnimation = null;
  resignation = null;
  agreedDraw = false;
}

function startNewGame() {
  chess = new Chess();
  pendingPromotion = null;
  lastMove = null;
  cancelPieceDrag();
  chooseComputerSide();
  resetClockState();
  resetReviewState();
  resetEnginePositionState();
  resetDisplayedEvaluation();
  clearSelection();
  render();
}

function chooseComputerSide() {
  selectedComputerColor = modeSelect.value === "random" ? (Math.random() < 0.5 ? "w" : "b") : null;
}

function parseClockValue(value) {
  if (value === "none") return null;
  const [baseSeconds, incrementSeconds] = value.split("+").map(Number);
  return {
    baseMs: baseSeconds * 1000,
    incrementMs: incrementSeconds * 1000,
  };
}

function resetClockState() {
  stopClockLoop();
  clockConfig = parseClockValue(clockSelect.value);
  const baseMs = clockConfig?.baseMs ?? 0;
  clockTimes = { w: baseMs, b: baseMs };
  lastClockTick = null;
  timeoutWinner = null;
}

function renderClocks() {
  const activeColor = chess.turn();
  renderClockCard(whiteClock, "w", activeColor);
  renderClockCard(blackClock, "b", activeColor);
  updateClockLoop();
}

function renderClockCard(card, color, activeColor) {
  const time = clockConfig ? clockTimes[color] : null;
  const label = card.querySelector("span");
  const computerColor = getComputerColor();

  label.textContent =
    computerColor === color ? `${getBotName()} (${color === "w" ? "White" : "Black"})` : color === "w" ? "White" : "Black";
  card.querySelector("strong").textContent = clockConfig ? formatClockTime(time) : "\u221e";
  card.classList.toggle("active", Boolean(clockConfig && activeColor === color && shouldClockTick()));
  card.classList.toggle("flagged", timeoutWinner && timeoutWinner !== color);
  card.classList.toggle("bot-clock", computerColor === color);
}

function formatClockTime(ms) {
  const safeMs = Math.max(0, ms);
  const totalSeconds = Math.ceil(safeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function shouldClockTick() {
  return Boolean(clockConfig && chess.history().length > 0 && !isGameFinished() && !reviewOpen);
}

function updateClockLoop() {
  if (shouldClockTick() && !clockInterval) {
    lastClockTick = performance.now();
    clockInterval = window.setInterval(tickClock, 250);
  }

  if (!shouldClockTick()) {
    stopClockLoop();
  }
}

function tickClock() {
  if (!shouldClockTick()) {
    stopClockLoop();
    return;
  }

  const now = performance.now();
  const elapsed = now - (lastClockTick ?? now);
  lastClockTick = now;
  const activeColor = chess.turn();
  clockTimes[activeColor] = Math.max(0, clockTimes[activeColor] - elapsed);

  if (clockTimes[activeColor] <= 0) {
    timeoutWinner = activeColor === "w" ? "b" : "w";
    stopClockLoop();
    clearSelection();
    setHintVisible(false);
    playSound("gameOver");
    render();
    return;
  }

  renderClockCard(whiteClock, "w", activeColor);
  renderClockCard(blackClock, "b", activeColor);
}

function stopClockLoop() {
  if (!clockInterval) return;
  window.clearInterval(clockInterval);
  clockInterval = null;
  lastClockTick = null;
}

function afterMovePlayed(color) {
  if (!clockConfig || timeoutWinner) return;
  clockTimes[color] += clockConfig.incrementMs;
  renderClocks();
}

async function ensureAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext = new AudioContextClass();
    masterGain = audioContext.createGain();
    updateMasterVolume();
    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
}

function updateMasterVolume() {
  if (!masterGain) return;
  masterGain.gain.value = getVolumeLevel();
}

async function playSound(type) {
  if (!soundEnabled) return;
  await ensureAudioContext();
  if (!audioContext) return;

  if (type === "button") {
    playBoardTap({ start: 0, pitch: 420, knock: 0.28, texture: 0.32, duration: 0.042 });
  } else if (type === "capture") {
    playBoardTap({ start: 0, pitch: 225, knock: 0.78, texture: 0.82, duration: 0.058 });
    playBoardTap({ start: 0.046, pitch: 155, knock: 0.58, texture: 0.62, duration: 0.052 });
  } else if (type === "check") {
    playBoardTap({ start: 0, pitch: 245, knock: 0.7, texture: 0.72, duration: 0.054 });
    playBrightTick({ start: 0.048, frequency: 1320, gain: 0.18, duration: 0.052 });
  } else if (type === "castle") {
    playBoardTap({ start: 0, pitch: 250, knock: 0.58, texture: 0.62, duration: 0.052 });
    playBoardTap({ start: 0.058, pitch: 215, knock: 0.52, texture: 0.54, duration: 0.05 });
  } else if (type === "promotion") {
    playBoardTap({ start: 0, pitch: 260, knock: 0.66, texture: 0.7, duration: 0.054 });
    playBrightTick({ start: 0.052, frequency: 1560, gain: 0.16, duration: 0.056 });
  } else if (type === "gameOver") {
    playBoardTap({ start: 0, pitch: 225, knock: 0.7, texture: 0.66, duration: 0.06 });
    playBoardTap({ start: 0.11, pitch: 170, knock: 0.54, texture: 0.52, duration: 0.062 });
    playBoardTap({ start: 0.22, pitch: 130, knock: 0.45, texture: 0.42, duration: 0.068 });
  } else {
    playBoardTap({ start: 0, pitch: 245, knock: 0.64, texture: 0.7, duration: 0.052 });
  }
}

function playClip(type) {
  const src = audioClips[type] ?? audioClips.move;
  if (!src) return;

  const audio = new Audio(src);
  audio.volume = getVolumeLevel();
  audio.preload = "auto";
  audio.play().catch(() => {
    setMoveFeedback("Audio playback was blocked by the browser.", "alert");
  });
}

function getVolumeLevel() {
  const level = Number(volumeSelect.value);
  if (!Number.isFinite(level)) return 0.65;
  return Math.max(0, Math.min(1, level));
}

function renderSoundButton() {
  soundBtn.setAttribute("aria-pressed", String(soundEnabled));
  soundBtn.lastChild.textContent = soundEnabled ? " Mute" : " Sound";
}

function playBoardTap({ start, pitch, knock, texture, duration }) {
  playNoiseBurst({ start, duration: duration * 0.58, gain: texture, frequency: 2100, q: 0.9 });
  playNoiseBurst({ start: start + 0.003, duration: duration * 0.82, gain: texture * 0.38, frequency: 620, q: 1.7 });
  playTone({ frequency: pitch, start, duration: duration * 1.18, gain: knock, type: "sine" });
  playTone({
    frequency: pitch * 2.35,
    start: start + 0.004,
    duration: duration * 0.72,
    gain: knock * 0.18,
    type: "triangle",
  });
}

function playBrightTick({ start, frequency, gain, duration }) {
  playTone({ frequency, start, duration, gain, type: "triangle" });
}

function playNoiseBurst({ start, duration, gain, frequency, q = 0.8 }) {
  const sampleRate = audioContext.sampleRate;
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i += 1) {
    const envelope = Math.exp((-6 * i) / data.length);
    data[i] = (Math.random() * 2 - 1) * envelope;
  }

  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gainNode = audioContext.createGain();
  const now = audioContext.currentTime;

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(frequency, now + start);
  filter.Q.setValueAtTime(q, now + start);
  gainNode.gain.setValueAtTime(gain, now + start);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);

  source.buffer = buffer;
  source.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(masterGain ?? audioContext.destination);
  source.start(now + start);
  source.stop(now + start + duration);
}

function playTone({ frequency, start, duration, gain, type = "sine" }) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now + start);
  gainNode.gain.setValueAtTime(0.0001, now + start);
  gainNode.gain.exponentialRampToValueAtTime(gain, now + start + 0.004);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);

  oscillator.connect(gainNode);
  gainNode.connect(masterGain ?? audioContext.destination);
  oscillator.start(now + start);
  oscillator.stop(now + start + duration + 0.02);
}

function handleMoveFeedback(move) {
  const color = move.color === "w" ? "White" : "Black";
  const isCheckmate = chess.isCheckmate();
  const isCheck = chess.isCheck();
  const isCastle = move.flags.includes("k") || move.flags.includes("q");
  updateBotChatterForMove(move, { isCheckmate, isCheck });

  if (isCheckmate) {
    playSound("gameOver");
    setMoveFeedback(`${color} played ${move.san}. Checkmate.`, "alert");
  } else if (isCheck) {
    playSound("check");
    setMoveFeedback(`${color} played ${move.san}. Check.`, "alert");
  } else if (move.promotion) {
    playSound("promotion");
    setMoveFeedback(`${color} played ${move.san}. Promotion.`, "good");
  } else if (isCastle) {
    playSound("castle");
    setMoveFeedback(`${color} played ${move.san}. Castle.`, "good");
  } else if (move.captured) {
    playSound("capture");
    setMoveFeedback(`${color} played ${move.san}. Capture.`, "good");
  } else {
    playSound("move");
    setMoveFeedback(`${color} played ${move.san}.`, "");
  }
}

function updateBotChatterForMove(move, { isCheckmate, isCheck }) {
  const computerColor = getComputerColor();
  if (!computerColor) return;

  const botMoved = move.color === computerColor;
  if (isCheckmate) {
    setBotChatter(botMoved ? "win" : "loss");
  } else if (isCheck) {
    setBotChatter(botMoved ? "botCheck" : "humanCheck");
  } else if (move.captured) {
    setBotChatter(botMoved ? "botCapture" : "humanCapture");
  } else {
    setBotChatter(botMoved ? "botMove" : "humanMove");
  }
}

function setFinalBotComment() {
  const computerColor = getComputerColor();
  if (!computerColor) return;

  if (agreedDraw || chess.isDraw() || chess.isStalemate()) {
    setBotChatter("draw");
    return;
  }

  const manualWinner = getManualWinner();
  const winner =
    manualWinner ??
    (chess.isCheckmate() ? (chess.turn() === "w" ? "b" : "w") : null);

  if (winner) setBotChatter(winner === computerColor ? "win" : "loss");
}

function setMoveFeedback(message, kind) {
  moveFeedback.textContent = message;
  if (lastFeedbackKind) moveFeedback.classList.remove(lastFeedbackKind);
  if (kind) moveFeedback.classList.add(kind);
  lastFeedbackKind = kind;
}

function renderBestMoveArrow() {
  if (getActivePreview() || !showBestMove || !engineBestMove || engineBestMove.fen !== chess.fen()) {
    bestMoveArrow.classList.remove("visible");
    return;
  }

  const fromPoint = getSquareCenter(engineBestMove.from);
  const toPoint = getSquareCenter(engineBestMove.to);
  bestMoveLine.setAttribute("x1", fromPoint.x);
  bestMoveLine.setAttribute("y1", fromPoint.y);
  bestMoveLine.setAttribute("x2", toPoint.x);
  bestMoveLine.setAttribute("y2", toPoint.y);
  bestMoveArrow.classList.add("visible");
}

function setHintVisible(isVisible) {
  showBestMove = isVisible;
  hintBtn.setAttribute("aria-pressed", String(showBestMove));
}

function getSquareCenter(square) {
  const fileIndex = files.indexOf(square[0]);
  const rankIndex = 8 - Number(square[1]);
  const visualCol = flipped ? 7 - fileIndex : fileIndex;
  const visualRow = flipped ? 7 - rankIndex : rankIndex;

  return {
    x: visualCol * 12.5 + 6.25,
    y: visualRow * 12.5 + 6.25,
  };
}

function groupCaptures(captures) {
  const counts = new Map();
  for (const piece of captures) {
    counts.set(piece, (counts.get(piece) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort(([pieceA], [pieceB]) => pieceValues[pieceB] - pieceValues[pieceA])
    .map(([piece, count]) => ({ piece, count }));
}

function getCaptureValue(captures) {
  return captures.reduce((total, piece) => total + (pieceValues[piece] ?? 0), 0);
}

function restoreSavedSettings() {
  setSelectValue(modeSelect, window.localStorage.getItem(settingKeys.mode));
  setSelectValue(difficultySelect, window.localStorage.getItem(settingKeys.difficulty));
  setSelectValue(clockSelect, window.localStorage.getItem(settingKeys.clock));
  setSelectValue(volumeSelect, window.localStorage.getItem(settingKeys.volume));
}

function setSelectValue(select, value) {
  if (!value) return;
  const hasOption = [...select.options].some((option) => option.value === value);
  if (hasOption) select.value = value;
}

function saveSetting(key, value) {
  window.localStorage.setItem(key, String(value));
}

function getCheckedKingSquare(position = chess) {
  if (!position.isCheck()) return null;
  const board = position.board();
  const kingColor = position.turn();

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      if (piece?.type === "k" && piece.color === kingColor) {
        return `${files[col]}${8 - row}`;
      }
    }
  }

  return null;
}

renderSoundButton();
renderBotCard();
startStockfish();
render();
