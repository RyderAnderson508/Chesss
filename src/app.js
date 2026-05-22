import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.4.0/+esm";

const boardEl = document.querySelector("#board");
const appShell = document.querySelector(".app-shell");
const appTabs = [...document.querySelectorAll(".app-tab")];
const tabPanels = [...document.querySelectorAll("[data-tab-panel]")];
const homePlayBtn = document.querySelector("#homePlayBtn");
const homePuzzleBtn = document.querySelector("#homePuzzleBtn");
const homeFriendsBtn = document.querySelector("#homeFriendsBtn");
const homeContinueTitle = document.querySelector("#homeContinueTitle");
const homeContinueText = document.querySelector("#homeContinueText");
const homeContinueMeta = document.querySelector("#homeContinueMeta");
const homeNextMatch = document.querySelector("#homeNextMatch");
const homePuzzleStreak = document.querySelector("#homePuzzleStreak");
const homeFriendStatus = document.querySelector("#homeFriendStatus");
const homeStatsGrid = document.querySelector("#homeStatsGrid");
const puzzlesStartBtn = document.querySelector("#puzzlesStartBtn");
const puzzlesProgress = document.querySelector("#puzzlesProgress");
const puzzleCategoryProgress = document.querySelector("#puzzleCategoryProgress");
const lessonGrid = document.querySelector("#learnTab .lesson-grid");
const friendsOverview = document.querySelector("#friendsOverview");
const friendsRoomStatus = document.querySelector("#friendsRoomStatus");
const friendsRoomText = document.querySelector("#friendsRoomText");
const profileOverview = document.querySelector("#profileOverview");
const settingsOverview = document.querySelector("#settingsOverview");
const authScreen = document.querySelector("#authScreen");
const authStatus = document.querySelector("#authStatus");
const authUsername = document.querySelector("#authUsername");
const authPassword = document.querySelector("#authPassword");
const authRecoveryAnswer = document.querySelector("#authRecoveryAnswer");
const authTogglePassword = document.querySelector("#authTogglePassword");
const authLoginBtn = document.querySelector("#authLoginBtn");
const authSignupBtn = document.querySelector("#authSignupBtn");
const forgotPasswordToggle = document.querySelector("#forgotPasswordToggle");
const forgotPasswordPanel = document.querySelector("#forgotPasswordPanel");
const forgotUsername = document.querySelector("#forgotUsername");
const forgotRecoveryAnswer = document.querySelector("#forgotRecoveryAnswer");
const forgotPassword = document.querySelector("#forgotPassword");
const forgotTogglePassword = document.querySelector("#forgotTogglePassword");
const forgotResetBtn = document.querySelector("#forgotResetBtn");
const startScreen = document.querySelector("#startScreen");
const startModeSelect = document.querySelector("#startModeSelect");
const startBotField = document.querySelector("#startBotField");
const startDifficultySelect = document.querySelector("#startDifficultySelect");
const startClockSelect = document.querySelector("#startClockSelect");
const startThemeSelect = document.querySelector("#startThemeSelect");
const startCoachToggle = document.querySelector("#startCoachToggle");
const startOpeningToggle = document.querySelector("#startOpeningToggle");
const startGameBtn = document.querySelector("#startGameBtn");
const startBotAvatar = document.querySelector("#startBotAvatar");
const startBotName = document.querySelector("#startBotName");
const startBotElo = document.querySelector("#startBotElo");
const startBotStyle = document.querySelector("#startBotStyle");
const startBotCards = document.querySelector("#startBotCards");

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo({ top: 0, left: 0 });
const turnBadge = document.querySelector("#turnBadge");
const gameState = document.querySelector("#gameState");
const playContextStrip = document.querySelector("#playContextStrip");
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
const premoveArrow = document.querySelector("#premoveArrow");
const premoveLine = document.querySelector("#premoveLine");
const boardStage = document.querySelector(".board-stage");
const botCard = document.querySelector("#botCard");
const hintBtn = document.querySelector("#hintBtn");
const soundBtn = document.querySelector("#soundBtn");
const shareAppBtn = document.querySelector("#shareAppBtn");
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
const themeSelect = document.querySelector("#themeSelect");
const pieceStyleSelect = document.querySelector("#pieceStyleSelect");
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
const boardReviewRestartBtn = document.querySelector("#boardReviewRestartBtn");
const boardReviewCloseBtn = document.querySelector("#boardReviewCloseBtn");
const reviewDock = document.querySelector("#reviewDock");
const dockReviewMoveLabel = document.querySelector("#dockReviewMoveLabel");
const dockReviewReason = document.querySelector("#dockReviewReason");
const dockReviewPrevBtn = document.querySelector("#dockReviewPrevBtn");
const dockReviewNextBtn = document.querySelector("#dockReviewNextBtn");
const moveSlideLayer = document.querySelector("#moveSlideLayer");
const reviewMoveEffect = document.querySelector("#reviewMoveEffect");
const boardMaterialBar = document.querySelector("#boardMaterialBar");
const whiteBoardMaterial = document.querySelector("#whiteBoardMaterial");
const blackBoardMaterial = document.querySelector("#blackBoardMaterial");
const openingCardName = document.querySelector("#openingCardName");
const openingCardText = document.querySelector("#openingCardText");
const coachTip = document.querySelector("#coachTip");
const puzzleToolbar = document.querySelector("#puzzleToolbar");
const retryPuzzleBtn = document.querySelector("#retryPuzzleBtn");
const nextPuzzleBtn = document.querySelector("#nextPuzzleBtn");
const reviewPuzzleBtn = document.querySelector("#reviewPuzzleBtn");
const skipPuzzleBtn = document.querySelector("#skipPuzzleBtn");
const statsSummary = document.querySelector("#statsSummary");
const resetStatsBtn = document.querySelector("#resetStatsBtn");
const copyMovesBtn = document.querySelector("#copyMovesBtn");
const accountSection = document.querySelector("#accountSection");
const accountStatus = document.querySelector("#accountStatus");
const accountForm = document.querySelector("#accountForm");
const accountUsername = document.querySelector("#accountUsername");
const accountPassword = document.querySelector("#accountPassword");
const accountRecoveryAnswer = document.querySelector("#accountRecoveryAnswer");
const accountTogglePassword = document.querySelector("#accountTogglePassword");
const loginBtn = document.querySelector("#loginBtn");
const signupBtn = document.querySelector("#signupBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const profilePanel = document.querySelector("#profilePanel");
const recoveryNotice = document.querySelector("#recoveryNotice");
const profileDisplayName = document.querySelector("#profileDisplayName");
const profileUsername = document.querySelector("#profileUsername");
const profileAvatar = document.querySelector("#profileAvatar");
const profilePicture = document.querySelector("#profilePicture");
const profilePictureFile = document.querySelector("#profilePictureFile");
const profilePictureStatus = document.querySelector("#profilePictureStatus");
const profileFavoriteOpening = document.querySelector("#profileFavoriteOpening");
const profileLocation = document.querySelector("#profileLocation");
const profileBio = document.querySelector("#profileBio");
const saveProfileBtn = document.querySelector("#saveProfileBtn");
const newRecoveryCodeBtn = document.querySelector("#newRecoveryCodeBtn");
const profileRecoveryAnswer = document.querySelector("#profileRecoveryAnswer");
const currentPassword = document.querySelector("#currentPassword");
const newPassword = document.querySelector("#newPassword");
const changePasswordBtn = document.querySelector("#changePasswordBtn");
const profileResetStatsBtn = document.querySelector("#profileResetStatsBtn");
const deleteAccountBtn = document.querySelector("#deleteAccountBtn");
const friendsSection = document.querySelector("#friendsSection");
const friendsStatus = document.querySelector("#friendsStatus");
const friendSearchInput = document.querySelector("#friendSearchInput");
const friendSearchBtn = document.querySelector("#friendSearchBtn");
const friendsRefreshBtn = document.querySelector("#friendsRefreshBtn");
const friendSearchResults = document.querySelector("#friendSearchResults");
const friendsList = document.querySelector("#friendsList");
const friendRequestsList = document.querySelector("#friendRequestsList");
const friendInvitesList = document.querySelector("#friendInvitesList");
const onlineSection = document.querySelector("#onlineSection");
const onlineStatus = document.querySelector("#onlineStatus");
const onlineHostBtn = document.querySelector("#onlineHostBtn");
const onlineJoinBtn = document.querySelector("#onlineJoinBtn");
const onlineAcceptBtn = document.querySelector("#onlineAcceptBtn");
const onlineCopyBtn = document.querySelector("#onlineCopyBtn");
const onlineInput = document.querySelector("#onlineInput");
const onlineOutput = document.querySelector("#onlineOutput");
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
const postgameNextSteps = document.querySelector("#postgameNextSteps");
const gameSharePreview = document.querySelector("#gameSharePreview");
const shareVisualResult = document.querySelector("#shareVisualResult");
const shareVisualMeta = document.querySelector("#shareVisualMeta");
const shareVisualWhite = document.querySelector("#shareVisualWhite");
const shareVisualBlack = document.querySelector("#shareVisualBlack");
const shareVisualMoment = document.querySelector("#shareVisualMoment");
const dialogReviewBtn = document.querySelector("#dialogReviewBtn");
const dialogRetryMomentBtn = document.querySelector("#dialogRetryMomentBtn");
const dialogShareBtn = document.querySelector("#dialogShareBtn");
const dialogShareAppBtn = document.querySelector("#dialogShareAppBtn");
const dialogRematchBtn = document.querySelector("#dialogRematchBtn");
const dialogChangeBotBtn = document.querySelector("#dialogChangeBotBtn");
const dialogNewGameBtn = document.querySelector("#dialogNewGameBtn");
const dialogCloseBtn = document.querySelector("#dialogCloseBtn");
const puzzleDialog = document.querySelector("#puzzleDialog");
const puzzleDialogTitle = document.querySelector("#puzzleDialogTitle");
const puzzleDialogText = document.querySelector("#puzzleDialogText");
const puzzleDialogSummary = document.querySelector("#puzzleDialogSummary");
const puzzleNextDialogBtn = document.querySelector("#puzzleNextDialogBtn");
const puzzleRetryDialogBtn = document.querySelector("#puzzleRetryDialogBtn");
const puzzleHomeDialogBtn = document.querySelector("#puzzleHomeDialogBtn");

const pieceGlyphs = {
  w: { 
    p: '\u265F\uFE0E', // White Pawn
    n: '\u265E\uFE0E', // White Knight
    b: '\u265D\uFE0E', // White Bishop
    r: '\u265C\uFE0E', // White Rook
    q: '\u265B\uFE0E', // White Queen
    k: '\u265A\uFE0E'  // White King
  },
  b: { 
    p: '\u265F\uFE0E', // Black Pawn
    n: '\u265E\uFE0E', // Black Knight
    b: '\u265D\uFE0E', // Black Bishop
    r: '\u265C\uFE0E', // Black Rook
    q: '\u265B\uFE0E', // Black Queen
    k: '\u265A\uFE0E'  // Black King
  }
};

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const pieceValues = { q: 9, r: 5, b: 3, n: 3, p: 1 };
const gameOverDialogDelayMs = 2200;
const settingKeys = {
  clock: "chessClock",
  coachEnabled: "chessCoachEnabled",
  difficulty: "chessDifficulty",
  flipped: "chessBoardFlipped",
  mode: "chessMode",
  openingEnabled: "chessOpeningEnabled",
  pieceStyle: "chessPieceStyle",
  stats: "chessStats",
  theme: "chessTheme",
  volume: "chessVolume",
  accountToken: "chessAccountToken",
  accountUser: "chessAccountUser",
  activeTab: "chessActiveTab",
  apiBase: "chessApiBase",
  gameHistory: "chessGameHistory",
  lessonProgress: "chessLessonProgress",
  playMode: "chessPlayMode",
  puzzleProgress: "chessPuzzleProgress",
};
const difficultySettings = {
  veryEasy: {
    depth: 1,
    moveTime: 380,
    style: "beginner",
    randomChance: 0.3,
    candidateCount: 5,
    botName: "Milo",
    avatar: "M",
    theme: "milo",
    elo: "~300 Elo",
    label: "Milo, New to the Board ~300 Elo",
    persona: "Knows captures and central pawns, but still misses danger.",
    weakness: "Hangs pieces after short plans.",
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
  rookie: {
    depth: 2,
    moveTime: 500,
    style: "beginner",
    randomChance: 0.22,
    candidateCount: 5,
    botName: "Pip",
    avatar: "P",
    theme: "pip",
    elo: "~500 Elo",
    label: "Pip, Careful Rookie ~500 Elo",
    persona: "Looks for safe captures and basic development.",
    weakness: "Misses forks and pins.",
    chatter: {
      ready: "Pip is trying to play safely.",
      botMove: "Pip: This looks solid.",
      botCapture: "Pip: I think I can win that.",
      botCheck: "Pip: Check. That should help.",
      humanMove: "Pip is looking for a safe square.",
      humanCapture: "Pip: I should have protected that.",
      humanCheck: "Pip: My king needs attention.",
      win: "Pip: Careful moves worked.",
      loss: "Pip: I missed the tactic.",
      draw: "Pip: I will take the draw.",
    },
    thinking: "Pip is checking for hanging pieces.",
    ready: "Pip wants a tidy, simple game.",
  },
  easy: {
    depth: 4,
    moveTime: 650,
    style: "casual",
    randomChance: 0.16,
    candidateCount: 5,
    botName: "Nora",
    avatar: "N",
    theme: "nora",
    elo: "~800 Elo",
    label: "Nora, Cafe Player ~800 Elo",
    persona: "Plays normal-looking moves, but misses tactics under pressure.",
    weakness: "Gets loose under pressure.",
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
  learner: {
    depth: 6,
    moveTime: 760,
    style: "casual",
    randomChance: 0.1,
    candidateCount: 4,
    botName: "Theo",
    avatar: "T",
    theme: "theo",
    elo: "~1000 Elo",
    label: "Theo, Weekend Player ~1000 Elo",
    persona: "Knows opening basics and usually spots one-move threats.",
    weakness: "Calculates one move too short.",
    chatter: {
      ready: "Theo is setting up a normal game.",
      botMove: "Theo: Develop first.",
      botCapture: "Theo: That pawn counts.",
      botCheck: "Theo: Check. Your king moved into range.",
      humanMove: "Theo is checking the obvious replies.",
      humanCapture: "Theo: Okay, that was loose.",
      humanCheck: "Theo: I need to solve this.",
      win: "Theo: The basics held up.",
      loss: "Theo: You found the sharper plan.",
      draw: "Theo: Balanced game.",
    },
    thinking: "Theo is comparing simple plans.",
    ready: "Theo plays principled weekend chess.",
  },
  medium: {
    depth: 10,
    moveTime: 1050,
    style: "club",
    randomChance: 0.028,
    candidateCount: 3,
    botName: "Cal",
    avatar: "C",
    theme: "cal",
    elo: "~1300 Elo",
    label: "Cal, Club Regular ~1300 Elo",
    persona: "Steady club chess with a little tactical bite.",
    weakness: "Can be outcalculated in sharp positions.",
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
  challenger: {
    depth: 12,
    moveTime: 1450,
    style: "club",
    randomChance: 0.008,
    candidateCount: 1,
    botName: "Rowan",
    avatar: "R",
    theme: "rowan",
    elo: "~1500 Elo",
    label: "Rowan, League Player ~1500 Elo",
    persona: "Solid league-player instincts with fewer free mistakes.",
    weakness: "Sometimes chooses safe over best.",
    chatter: {
      ready: "Rowan is ready for a serious game.",
      botMove: "Rowan: This keeps my structure sound.",
      botCapture: "Rowan: I will bank the material.",
      botCheck: "Rowan: Check. The file opened nicely.",
      humanMove: "Rowan is checking the position twice.",
      humanCapture: "Rowan: That changes the plan.",
      humanCheck: "Rowan: Accurate. I need the best defense.",
      win: "Rowan: Small advantages add up.",
      loss: "Rowan: You converted cleanly.",
      draw: "Rowan: Fair result.",
    },
    thinking: "Rowan is weighing practical continuations.",
    ready: "Rowan plays patient league chess.",
  },
  hard: {
    depth: 14,
    moveTime: 1750,
    style: "strong",
    randomChance: 0.004,
    candidateCount: 2,
    botName: "Iris",
    avatar: "I",
    theme: "iris",
    elo: "~1800 Elo",
    label: "Iris, Tactics Hunter ~1800 Elo",
    persona: "Sharp, forcing, and happy to punish loose pieces.",
    weakness: "Can overpress when the attack slows.",
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
  advanced: {
    depth: 16,
    moveTime: 2100,
    style: "strong",
    randomChance: 0.002,
    candidateCount: 1,
    botName: "Sable",
    avatar: "S",
    theme: "sable",
    elo: "~2000 Elo",
    label: "Sable, Tournament Player ~2000 Elo",
    persona: "Tournament-sharp, patient, and difficult to trick.",
    weakness: "Rarely obvious, but time pressure helps.",
    chatter: {
      ready: "Sable is ready to squeeze small edges.",
      botMove: "Sable: This improves the worst piece.",
      botCapture: "Sable: Material plus activity is enough.",
      botCheck: "Sable: Check. The sequence is forcing.",
      humanMove: "Sable is recalculating the critical line.",
      humanCapture: "Sable: Interesting. Compensation matters now.",
      humanCheck: "Sable: I saw the threat. Now defense.",
      win: "Sable: Conversion was the point.",
      loss: "Sable: Strong game. You kept the initiative.",
      draw: "Sable: Nothing more than equality.",
    },
    thinking: "Sable is calculating tournament lines.",
    ready: "Sable plays serious tournament chess.",
  },
  expert: {
    depth: 18,
    moveTime: 2600,
    style: "expert",
    randomChance: 0,
    candidateCount: 1,
    botName: "Vega",
    avatar: "V",
    theme: "vega",
    elo: "~2300 Elo",
    label: "Vega, Engine Room ~2300 Elo",
    persona: "Cold calculation with very little mercy.",
    weakness: "Only deep tactics usually bother Vega.",
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
  master: {
    depth: 20,
    moveTime: 3200,
    style: "expert",
    randomChance: 0,
    candidateCount: 1,
    botName: "Orion",
    avatar: "O",
    theme: "orion",
    elo: "~2600 Elo",
    label: "Orion, Master Analyst ~2600 Elo",
    persona: "Deep engine-backed calculation with master-level patience.",
    weakness: "Good luck. Make it complicated.",
    chatter: {
      ready: "Orion is mapping the position.",
      botMove: "Orion: Principal variation selected.",
      botCapture: "Orion: The conversion is stable.",
      botCheck: "Orion: Check. The line narrows.",
      humanMove: "Orion is updating the evaluation.",
      humanCapture: "Orion: Material shift noted.",
      humanCheck: "Orion: Defensive resource found.",
      win: "Orion: Advantage converted.",
      loss: "Orion: Impressive resistance.",
      draw: "Orion: Equality held.",
    },
    thinking: "Orion is searching the deepest line.",
    ready: "Orion plays master-level analysis.",
  },
};
const openingBook = [
  { moves: "e4 e5 Nf3 Nc6 Bb5", name: "Ruy Lopez" },
  { moves: "e4 e5 Nf3 Nc6 Bb5 a6", name: "Ruy Lopez: Morphy Defense" },
  { moves: "e4 e5 Nf3 Nc6 Bb5 Nf6", name: "Ruy Lopez: Berlin Defense" },
  { moves: "e4 e5 Nf3 Nc6 Bb5 d6", name: "Ruy Lopez: Steinitz Defense" },
  { moves: "e4 e5 Nf3 Nc6 Bc4", name: "Italian Game" },
  { moves: "e4 e5 Nf3 Nc6 Bc4 Bc5", name: "Italian Game: Giuoco Piano" },
  { moves: "e4 e5 Nf3 Nc6 Bc4 Nf6", name: "Italian Game: Two Knights Defense" },
  { moves: "e4 e5 Nf3 Nc6 d4", name: "Scotch Game" },
  { moves: "e4 e5 Nf3 Nf6", name: "Petrov Defense" },
  { moves: "e4 e5 f4", name: "King's Gambit" },
  { moves: "e4 e5 Nc3", name: "Vienna Game" },
  { moves: "e4 e5 d4", name: "Center Game" },
  { moves: "e4 c5", name: "Sicilian Defense" },
  { moves: "e4 c5 Nf3 d6", name: "Sicilian Defense: Open" },
  { moves: "e4 c5 Nf3 Nc6", name: "Sicilian Defense: Old Sicilian" },
  { moves: "e4 c5 Nf3 e6", name: "Sicilian Defense: French Variation" },
  { moves: "e4 c5 c3", name: "Sicilian Defense: Alapin" },
  { moves: "e4 c5 Nc3", name: "Sicilian Defense: Closed" },
  { moves: "e4 e6", name: "French Defense" },
  { moves: "e4 e6 d4 d5", name: "French Defense" },
  { moves: "e4 e6 d4 d5 Nc3", name: "French Defense: Classical" },
  { moves: "e4 c6", name: "Caro-Kann Defense" },
  { moves: "e4 c6 d4 d5", name: "Caro-Kann Defense" },
  { moves: "e4 d6", name: "Pirc Defense" },
  { moves: "e4 d5", name: "Scandinavian Defense" },
  { moves: "e4 g6", name: "Modern Defense" },
  { moves: "d4 d5 c4", name: "Queen's Gambit" },
  { moves: "d4 d5 c4 e6", name: "Queen's Gambit Declined" },
  { moves: "d4 d5 c4 dxc4", name: "Queen's Gambit Accepted" },
  { moves: "d4 d5 Nf3", name: "Queen's Pawn Game" },
  { moves: "d4 Nf6", name: "Indian Game" },
  { moves: "d4 Nf6 c4 g6", name: "King's Indian Defense" },
  { moves: "d4 Nf6 c4 e6 Nc3 Bb4", name: "Nimzo-Indian Defense" },
  { moves: "d4 Nf6 c4 e6 Nf3 b6", name: "Queen's Indian Defense" },
  { moves: "d4 Nf6 c4 c5", name: "Benoni Defense" },
  { moves: "d4 Nf6 c4 g6 Nc3 d5", name: "Grunfeld Defense" },
  { moves: "d4 f5", name: "Dutch Defense" },
  { moves: "c4", name: "English Opening" },
  { moves: "c4 e5", name: "English Opening: King's English" },
  { moves: "c4 c5", name: "English Opening: Symmetrical" },
  { moves: "Nf3", name: "Reti Opening" },
  { moves: "Nf3 d5 g3", name: "Reti Opening" },
  { moves: "b3", name: "Larsen's Opening" },
  { moves: "g3", name: "King's Fianchetto Opening" },
  { moves: "f4", name: "Bird Opening" },
].sort((a, b) => b.moves.split(" ").length - a.moves.split(" ").length);

const openingLessons = [
  {
    id: "italian",
    label: "King's Pawn",
    title: "Italian Game",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bc4",
    summary: "A direct, classical opening that develops quickly and aims at Black's vulnerable f7 square.",
    whiteIdea: "White builds a fast center, develops naturally, castles early, and often prepares c3 and d4.",
    blackIdea: "Black develops with ...Bc5 or ...Nf6, castles, and challenges the center before White gets a free attack.",
    plans: ["Castle kingside quickly.", "Play c3 and d4 when the center is ready.", "Watch tactical shots on f7."],
    mistakes: ["Moving the same bishop repeatedly.", "Launching an attack before castling.", "Ignoring Black's ...Nf6 pressure on e4."],
    example: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4",
    line: [
      { san: "e4", note: "White takes central space and opens lines for the queen and bishop." },
      { san: "e5", note: "Black mirrors the center and keeps the game classical." },
      { san: "Nf3", note: "The knight attacks e5 and develops toward the center." },
      { san: "Nc6", note: "Black defends e5 and develops a queenside knight naturally." },
      { san: "Bc4", note: "The bishop eyes f7, the softest point in Black's camp." },
      { san: "Bc5", note: "Black develops actively and points back at f2." },
      { san: "c3", note: "White prepares d4, building a stronger central break." },
      { san: "Nf6", note: "Black attacks e4 and develops with tempo." },
      { san: "d3", note: "White keeps the center stable and opens the c1 bishop." },
      { san: "d6", note: "Black supports e5 and gives the c8 bishop room later." },
      { san: "O-O", note: "White castles before starting any serious center action." },
      { san: "O-O", note: "Black also gets the king safe and connects the rooks soon." },
      { san: "Re1", note: "White places the rook behind the e-pawn and supports central play." },
      { san: "a6", note: "Black takes away b5 and prepares queenside space." },
      { san: "Bb3", note: "White tucks the bishop away while keeping pressure on f7." },
      { san: "Ba7", note: "Black preserves the bishop and stays aimed at the center." },
      { san: "h3", note: "White prevents a pin or jump to g4 before expanding." },
      { san: "h6", note: "Black gives the king luft and asks White's pieces to stay honest." },
      { san: "Nbd2", note: "White develops the last minor piece and supports f1/e4 squares." },
      { san: "Be6", note: "Black develops the c8 bishop and challenges White's strong bishop." },
    ],
  },
  {
    id: "ruy-lopez",
    label: "King's Pawn",
    title: "Ruy Lopez",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bb5",
    summary: "A long-term pressure opening where White attacks the knight that defends Black's e5 pawn.",
    whiteIdea: "White develops smoothly, castles, keeps pressure on e5, and often builds with c3 and d4.",
    blackIdea: "Black asks the bishop a question with ...a6, develops pieces, and fights for the center.",
    plans: ["Castle before opening the center.", "Use Re1, c3, and d4 to increase pressure.", "Keep the bishop pair when it matters."],
    mistakes: ["Trading on c6 too early without a reason.", "Forgetting that e4 can become loose.", "Playing d4 before pieces are ready."],
    example: "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7",
    line: [
      { san: "e4", note: "White claims the center and opens the bishop." },
      { san: "e5", note: "Black meets White directly and keeps equal central space." },
      { san: "Nf3", note: "White attacks e5 and develops a key kingside piece." },
      { san: "Nc6", note: "Black defends e5 with a natural developing move." },
      { san: "Bb5", note: "White pressures the knight that protects e5." },
      { san: "a6", note: "Black asks the bishop to decide where it belongs." },
      { san: "Ba4", note: "White keeps the pin idea and preserves the bishop." },
      { san: "Nf6", note: "Black develops and attacks White's e4 pawn." },
      { san: "O-O", note: "White gets the king safe before opening the center." },
      { san: "Be7", note: "Black prepares to castle and finishes kingside development." },
      { san: "Re1", note: "White supports e4 and prepares central pressure." },
      { san: "b5", note: "Black gains queenside space and pushes the bishop back." },
      { san: "Bb3", note: "White keeps the bishop on the active diagonal." },
      { san: "d6", note: "Black strengthens e5 and prepares to castle." },
      { san: "c3", note: "White prepares d4 and gives the bishop an escape square." },
      { san: "O-O", note: "Black castles, completing the main opening safety task." },
      { san: "h3", note: "White prevents ...Bg4 and gives the king a small escape square." },
      { san: "Nb8", note: "Black reroutes the knight toward d7 in a classic Ruy Lopez plan." },
      { san: "d4", note: "White finally challenges the center from a prepared position." },
      { san: "Nbd7", note: "Black develops the rerouted knight and reinforces e5/f6." },
    ],
  },
  {
    id: "sicilian",
    label: "King's Pawn",
    title: "Sicilian Defense",
    moves: "1. e4 c5",
    summary: "Black avoids symmetry and fights for winning chances by attacking White's center from the side.",
    whiteIdea: "White develops quickly, often plays d4, and uses space and piece activity for an attack.",
    blackIdea: "Black trades the c-pawn for White's d-pawn, creates queenside play, and strikes back in the center.",
    plans: ["White: Nf3 and d4 for the Open Sicilian.", "Black: develop, pressure c-file, and time ...d5 or ...e5.", "Both sides must respect tactics."],
    mistakes: ["Playing slow pawn moves while behind in development.", "Ignoring attacks on the c-file.", "Letting the center open with your king stuck."],
    example: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3",
    line: [
      { san: "e4", note: "White starts with space and quick development." },
      { san: "c5", note: "Black fights the center from the side instead of copying e5." },
      { san: "Nf3", note: "White develops and prepares d4." },
      { san: "d6", note: "Black supports the center and prepares flexible development." },
      { san: "d4", note: "White opens the center before Black gets fully settled." },
      { san: "cxd4", note: "Black trades a side pawn for White's central pawn." },
      { san: "Nxd4", note: "White recaptures with a knight and centralizes it." },
      { san: "Nf6", note: "Black attacks e4 and develops with tempo." },
      { san: "Nc3", note: "White defends e4 and adds more central control." },
      { san: "a6", note: "Black prepares queenside play and controls b5." },
      { san: "Be3", note: "White develops and supports queenside castling ideas." },
      { san: "e5", note: "Black claims central space and kicks the knight." },
      { san: "Nb3", note: "White saves the knight and keeps c5/d4 squares in mind." },
      { san: "Be6", note: "Black develops and eyes the b3 knight and queenside." },
      { san: "f3", note: "White reinforces e4 and prepares a solid attacking setup." },
      { san: "Be7", note: "Black prepares to castle while keeping development steady." },
      { san: "Qd2", note: "White connects rooks and lines up queenside castling." },
      { san: "O-O", note: "Black castles before White's attack gets moving." },
      { san: "O-O-O", note: "White castles long, creating opposite-side attacking chances." },
      { san: "Nbd7", note: "Black completes development and prepares queenside counterplay." },
    ],
  },
  {
    id: "french",
    label: "King's Pawn",
    title: "French Defense",
    moves: "1. e4 e6 2. d4 d5",
    summary: "Black builds a solid pawn chain and immediately challenges White's center.",
    whiteIdea: "White gains space and tries to use the center before Black's counterplay arrives.",
    blackIdea: "Black attacks the pawn chain with ...c5 and ...f6 while solving the light-squared bishop.",
    plans: ["White: support e5 or exchange to simplify.", "Black: attack d4 with ...c5.", "Look for breaks before moving pieces twice."],
    mistakes: ["Black trapping the c8 bishop forever.", "White overextending the center.", "Ignoring the ...c5 break."],
    example: "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5",
    line: [
      { san: "e4", note: "White takes central space right away." },
      { san: "e6", note: "Black prepares ...d5 and builds a solid pawn chain." },
      { san: "d4", note: "White supports the center with a second pawn." },
      { san: "d5", note: "Black immediately challenges e4." },
      { san: "Nc3", note: "White defends e4 and develops naturally." },
      { san: "Nf6", note: "Black attacks e4 again and develops." },
      { san: "e5", note: "White gains space and kicks the knight from f6." },
      { san: "Nfd7", note: "Black retreats toward the center and prepares ...c5." },
      { san: "f4", note: "White supports e5 and prepares kingside space." },
      { san: "c5", note: "Black attacks the base of White's pawn chain." },
      { san: "Nf3", note: "White develops and adds support to the center." },
      { san: "Nc6", note: "Black increases pressure on d4 and e5." },
      { san: "Be3", note: "White develops and supports the d4 pawn." },
      { san: "Qb6", note: "Black attacks b2 and d4, creating immediate pressure." },
      { san: "Qd2", note: "White connects rooks and defends the center." },
      { san: "Qxb2", note: "Black grabs the loose b-pawn and tests White's compensation." },
      { san: "Rb1", note: "White attacks the queen and gains time for development." },
      { san: "Qa3", note: "Black keeps the queen active while staying out of danger." },
      { san: "Nb5", note: "White jumps into the position and creates threats." },
      { san: "Qxa2", note: "Black takes another pawn, but must survive White's activity." },
    ],
  },
  {
    id: "caro-kann",
    label: "King's Pawn",
    title: "Caro-Kann Defense",
    moves: "1. e4 c6 2. d4 d5",
    summary: "A sturdy defense where Black supports ...d5 with the c-pawn and aims for a healthy structure.",
    whiteIdea: "White uses space and development to pressure Black before the position becomes too solid.",
    blackIdea: "Black develops safely, often gets the light bishop out, and challenges White's center later.",
    plans: ["Black often plays ...Bf5 before ...e6.", "White can choose Advance, Exchange, or Classical setups.", "Endgames are usually comfortable for Black if equal."],
    mistakes: ["White attacking too early without development.", "Black blocking in the bishop too soon.", "Forgetting about the e5/d4 pawn tension."],
    example: "1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2",
    line: [
      { san: "e4", note: "White claims the center and opens attacking lines." },
      { san: "c6", note: "Black prepares ...d5 with strong support." },
      { san: "d4", note: "White builds the ideal pawn center." },
      { san: "d5", note: "Black challenges the center without weakening too much." },
      { san: "e5", note: "White gains space and chooses the Advance structure." },
      { san: "Bf5", note: "Black develops the light bishop before playing ...e6." },
      { san: "Nf3", note: "White develops and supports the center." },
      { san: "e6", note: "Black reinforces d5 and opens the dark bishop." },
      { san: "Be2", note: "White prepares to castle and keeps the position stable." },
      { san: "c5", note: "Black strikes at d4, the base of White's center." },
      { san: "O-O", note: "White castles before the center opens." },
      { san: "Nc6", note: "Black develops and adds pressure to d4." },
      { san: "c3", note: "White reinforces the pawn chain and keeps the center closed." },
      { san: "Qb6", note: "Black attacks b2 and d4 from an active square." },
      { san: "a3", note: "White takes b4 away and prepares queenside space." },
      { san: "cxd4", note: "Black opens the c-file and challenges White's center." },
      { san: "cxd4", note: "White recaptures and keeps a strong pawn on d4." },
      { san: "Nge7", note: "Black develops the knight toward f5 or g6." },
      { san: "Nc3", note: "White develops the queenside knight and supports d5/e4." },
      { san: "Bg4", note: "Black develops with pressure on the f3 knight." },
    ],
  },
  {
    id: "queens-gambit",
    label: "Queen's Pawn",
    title: "Queen's Gambit",
    moves: "1. d4 d5 2. c4",
    summary: "White offers a wing pawn to pull Black away from the center and build long-term pressure.",
    whiteIdea: "White wants space, central control, and active pieces, often recovering the c-pawn if accepted.",
    blackIdea: "Black either holds a solid center with ...e6 or accepts the pawn and returns it at the right time.",
    plans: ["Develop knights before chasing material.", "White often plays Nc3, Nf3, Bg5, and e3.", "Black fights with ...e6, ...Be7, ...Nf6, and ...c5."],
    mistakes: ["Trying to keep the gambit pawn at all costs.", "Blocking the c-pawn without a plan.", "Letting White get e4 for free."],
    example: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3",
    line: [
      { san: "d4", note: "White takes central space with the queen pawn." },
      { san: "d5", note: "Black claims equal central space." },
      { san: "c4", note: "White attacks d5 and offers a wing pawn for central control." },
      { san: "e6", note: "Black supports d5 and keeps the structure solid." },
      { san: "Nc3", note: "White develops and increases pressure on d5." },
      { san: "Nf6", note: "Black develops and adds control over e4 and d5." },
      { san: "Bg5", note: "White pins the knight and creates pressure." },
      { san: "Be7", note: "Black calmly breaks the pin and prepares to castle." },
      { san: "e3", note: "White opens the bishop and supports d4." },
      { san: "O-O", note: "Black gets the king safe before the center opens." },
      { san: "Nf3", note: "White develops and keeps control of e5 and d4." },
      { san: "h6", note: "Black asks the bishop to decide and gains kingside space." },
      { san: "Bh4", note: "White keeps the pin and stays active." },
      { san: "b6", note: "Black prepares to develop the c8 bishop." },
      { san: "cxd5", note: "White clarifies the center and opens the c-file." },
      { san: "Nxd5", note: "Black recaptures with a piece and challenges the bishop." },
      { san: "Bxe7", note: "White trades the pinning bishop for Black's defender." },
      { san: "Qxe7", note: "Black recaptures and keeps the queen active." },
      { san: "Nxd5", note: "White removes the centralized knight." },
      { san: "exd5", note: "Black restores material and accepts an isolated structure." },
    ],
  },
  {
    id: "london",
    label: "Queen's Pawn",
    title: "London System",
    moves: "1. d4 d5 2. Bf4",
    summary: "A reliable setup opening where White develops the dark bishop early and builds a sturdy structure.",
    whiteIdea: "White uses Bf4, e3, Nf3, c3, and Bd3 to create a simple, repeatable plan.",
    blackIdea: "Black challenges the center, avoids passive development, and looks for ...c5 or ...Qb6 ideas.",
    plans: ["White builds the triangle with pawns on d4, e3, and c3.", "Black should hit d4 before White attacks.", "Kingside attacks often use Ne5 and h-pawn ideas."],
    mistakes: ["Playing the setup automatically against everything.", "Ignoring ...Qb6 pressure.", "Trading the dark bishop without getting something."],
    example: "1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nf3",
    line: [
      { san: "d4", note: "White claims central space and starts the London setup." },
      { san: "d5", note: "Black takes equal space in the center." },
      { san: "Bf4", note: "White develops the dark bishop before locking it in." },
      { san: "Nf6", note: "Black develops and controls e4." },
      { san: "e3", note: "White supports d4 and opens the light bishop." },
      { san: "c5", note: "Black challenges White's center immediately." },
      { san: "c3", note: "White builds the London pawn triangle." },
      { san: "Nc6", note: "Black adds pressure and develops naturally." },
      { san: "Nf3", note: "White develops and prepares to castle." },
      { san: "Qb6", note: "Black attacks b2 and asks White to defend accurately." },
      { san: "Qb3", note: "White offers a queen trade and defends b2." },
      { san: "c4", note: "Black gains space and fixes White's queenside structure." },
      { san: "Qc2", note: "White keeps the queen flexible and eyes h7 ideas." },
      { san: "Bf5", note: "Black develops the bishop actively before playing ...e6." },
      { san: "Qc1", note: "White retreats from pressure and keeps the queen safe." },
      { san: "e6", note: "Black supports the center and opens the f8 bishop." },
      { san: "Nbd2", note: "White finishes development and supports e4/f3." },
      { san: "h6", note: "Black gives the king a square and controls g5." },
      { san: "Be2", note: "White prepares castling and completes kingside development." },
      { san: "Be7", note: "Black gets ready to castle and finish development." },
    ],
  },
  {
    id: "kings-indian",
    label: "Queen's Pawn",
    title: "King's Indian Defense",
    moves: "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7",
    summary: "Black lets White build a center, then attacks it with dynamic pawn breaks and piece pressure.",
    whiteIdea: "White uses central space to expand and may attack on the queenside.",
    blackIdea: "Black castles, plays ...d6, and often strikes with ...e5 or ...c5.",
    plans: ["Black: castle quickly and choose ...e5 or ...c5.", "White: use space before Black's attack starts.", "Both sides often race on opposite wings."],
    mistakes: ["Black waiting too long to strike the center.", "White closing the center without a queenside plan.", "Ignoring kingside attacking chances."],
    example: "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O",
    line: [
      { san: "d4", note: "White starts with a strong central pawn." },
      { san: "Nf6", note: "Black controls e4 and stays flexible." },
      { san: "c4", note: "White builds a broad pawn center." },
      { san: "g6", note: "Black prepares a kingside fianchetto." },
      { san: "Nc3", note: "White supports d5 and e4 ideas." },
      { san: "Bg7", note: "Black places the bishop on the long diagonal." },
      { san: "e4", note: "White takes the full center." },
      { san: "d6", note: "Black supports ...e5 and keeps the center under control." },
      { san: "Nf3", note: "White develops and protects the center." },
      { san: "O-O", note: "Black castles and prepares to strike back." },
      { san: "Be2", note: "White develops calmly and prepares to castle." },
      { san: "e5", note: "Black challenges White's big center." },
      { san: "O-O", note: "White gets the king safe before the center locks." },
      { san: "Nc6", note: "Black develops and increases pressure on d4." },
      { san: "d5", note: "White gains space and closes the center." },
      { san: "Ne7", note: "Black reroutes the knight toward attacking squares." },
      { san: "Ne1", note: "White prepares f3 or Nd3 to support the center." },
      { san: "Nd7", note: "Black coordinates pieces for ...f5 or ...c6 breaks." },
      { san: "Be3", note: "White develops the last bishop and supports queenside play." },
      { san: "f5", note: "Black starts the classic kingside pawn storm." },
    ],
  },
  {
    id: "english",
    label: "Flank",
    title: "English Opening",
    moves: "1. c4",
    summary: "White controls d5 from the side and often steers the game into flexible, strategic positions.",
    whiteIdea: "White delays central commitment, develops naturally, and chooses when to play d4 or e4.",
    blackIdea: "Black can mirror, strike with ...e5, or transpose into queen's pawn defenses.",
    plans: ["White often fianchettoes the bishop with g3 and Bg2.", "Black should claim central space when possible.", "Watch transpositions into Queen's Gambit or King's Indian structures."],
    mistakes: ["Playing too slowly and giving Black the whole center.", "Missing transpositions.", "Forgetting that c4 controls d5, not the whole board."],
    example: "1. c4 e5 2. Nc3 Nf6 3. g3 d5 4. cxd5 Nxd5 5. Bg2",
    line: [
      { san: "c4", note: "White controls d5 from the side and keeps options open." },
      { san: "e5", note: "Black claims central space immediately." },
      { san: "Nc3", note: "White adds more control over d5." },
      { san: "Nf6", note: "Black develops and supports the center." },
      { san: "g3", note: "White prepares to fianchetto the bishop." },
      { san: "d5", note: "Black uses the center before White can clamp it down." },
      { san: "cxd5", note: "White removes the advanced central pawn." },
      { san: "Nxd5", note: "Black recaptures with an active knight." },
      { san: "Bg2", note: "White puts the bishop on the long diagonal." },
      { san: "Nb6", note: "Black repositions the knight and keeps central influence." },
      { san: "Nf3", note: "White develops and prepares to castle." },
      { san: "Nc6", note: "Black develops and supports central pressure." },
      { san: "O-O", note: "White gets the king safe and activates the rook." },
      { san: "Be7", note: "Black prepares to castle and keeps development smooth." },
      { san: "d3", note: "White supports e4 ideas and opens the c1 bishop." },
      { san: "O-O", note: "Black castles before opening more lines." },
      { san: "Be3", note: "White develops and connects the queenside." },
      { san: "Re8", note: "Black places the rook on the central file." },
      { san: "Rc1", note: "White uses the open c-file for queenside pressure." },
      { san: "Bf8", note: "Black repositions the bishop to defend and regroup." },
    ],
  },
];

const puzzles = [
  {
    id: "legal-queen-sacrifice",
    fen: "r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 6",
    title: "Legal's Mate",
    difficulty: "Advanced",
    level: 1,
    category: "Queen sacrifice",
    source: "Inspired by Legal's Mate",
    line: [
      { move: "c4f7", reply: "e8e7", message: "Correct. The bishop check drags the king into the net." },
      { move: "c3d5" },
    ],
    success: "Correct. Nd5# proves the queen sacrifice was sound.",
  },
  {
    id: "blackburne-shilling-mate",
    fen: "r1bqkbnr/pppp1ppp/8/4N3/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    title: "Blackburne Shilling Trap",
    difficulty: "Master",
    level: 2,
    category: "Opening trap",
    source: "Inspired by the Blackburne Shilling trap",
    line: [
      { move: "d8g5", reply: "e5f7", message: "Correct. Black ignores the fork and starts the mate net." },
      { move: "g5g2", reply: "h1f1", message: "Correct. The queen keeps taking with tempo." },
      { move: "g2e4", reply: "c4e2", message: "Correct. The check forces White into the final square." },
      { move: "d4f3" },
    ],
    success: "Correct. Nf3# ends a long forcing trap.",
  },
  {
    id: "englund-corner-mate",
    fen: "r1b1k1nr/pppp1ppp/2n5/4P3/8/2Q2N2/PqP1PPPP/RN2KB1R b KQkq - 0 8",
    title: "Englund Corner Shot",
    difficulty: "Expert",
    level: 3,
    category: "Back-rank net",
    source: "Inspired by the Englund Gambit trap",
    line: [{ move: "b2c1" }],
    success: "Correct. Qc1# is a sharp corner mate.",
  },
  {
    id: "budapest-knight-mate",
    fen: "r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8",
    title: "Budapest Net",
    difficulty: "Expert",
    level: 4,
    category: "Mating net",
    source: "Inspired by Budapest trap patterns",
    line: [{ move: "e5d3" }],
    success: "Correct. Nd3# lands because the king has no square.",
  },
  {
    id: "smothered-legacy",
    fen: "6rk/6pp/7N/8/8/8/5PPP/6K1 w - - 0 1",
    title: "Smothered Knight",
    difficulty: "Advanced",
    level: 5,
    category: "Smothered mate",
    source: "Inspired by Philidor's Legacy",
    line: [{ move: "h6f7" }],
    success: "Correct. Nf7# smothers the king behind its own pieces.",
  },
  {
    id: "corridor-rook-mate",
    fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
    title: "Corridor Rook",
    difficulty: "Intermediate",
    level: 6,
    category: "Back-rank mate",
    source: "Classic back-rank pattern",
    line: [{ move: "e1e8" }],
    success: "Correct. Re8# uses the trapped king and pawn shield.",
  },
  {
    id: "corridor-queen-mate",
    fen: "6k1/5ppp/8/8/8/8/5PPP/3Q2K1 w - - 0 1",
    title: "Queen Corridor",
    difficulty: "Intermediate",
    level: 7,
    category: "Back-rank mate",
    source: "Classic queen corridor pattern",
    line: [{ move: "d1d8" }],
    success: "Correct. Qd8# cuts through the back rank.",
  },
  {
    id: "black-corridor-queen",
    fen: "3q2k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1",
    title: "Black's Corridor",
    difficulty: "Intermediate",
    level: 8,
    category: "Back-rank mate",
    source: "Classic back-rank pattern",
    line: [{ move: "d8d1" }],
    success: "Correct. Qd1# traps the king behind its own pawns.",
  },
  {
    id: "black-corner-queen",
    fen: "q5k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1",
    title: "Corner Corridor",
    difficulty: "Advanced",
    level: 9,
    category: "Corner mate",
    source: "Classic queen corridor pattern",
    line: [{ move: "a8a1" }],
    success: "Correct. Qa1# finishes the cornered king.",
  },
  {
    id: "hook-mate-rook",
    fen: "2b3k1/5ppp/2n4N/3p4/3P4/2N5/5PPP/4R1K1 w - - 0 1",
    title: "Hook Mate",
    difficulty: "Advanced",
    level: 10,
    category: "Hook mate",
    source: "Inspired by hook mate patterns",
    line: [{ move: "e1e8" }],
    success: "Correct. Re8# uses the knight as the hook.",
  },
  {
    id: "decoy-queen-mate",
    fen: "6k1/5ppp/8/8/8/2N2Q2/PPP2PPP/6K1 w - - 0 1",
    title: "Queen Decoy Net",
    difficulty: "Advanced",
    level: 11,
    category: "Decoy mate",
    source: "Classic queen-and-knight net",
    line: [{ move: "f3a8" }],
    success: "Correct. Qa8# uses the queen's long diagonal and the knight's control.",
  },
  {
    id: "ne7-royal-fork",
    fen: "r1q3k1/pp3ppp/2p5/3N4/2B5/2P2N2/PP3PPP/R5K1 w - - 0 1",
    title: "Knight Fork Conversion",
    difficulty: "Advanced",
    level: 12,
    category: "Fork",
    source: "Inspired by royal fork tactics",
    line: [
      { move: "d5e7", reply: "g8f8", message: "Correct. The check forces the king aside." },
      { move: "e7c8" },
    ],
    success: "Correct. Nxc8 wins the queen after the fork.",
  },
  {
    id: "black-knight-fork",
    fen: "r1bq1rk1/ppp2ppp/8/8/3n4/8/PPPPQPPP/RNB2RK1 b - - 0 1",
    title: "Black Finds the Fork",
    difficulty: "Advanced",
    level: 13,
    category: "Fork",
    source: "Inspired by knight fork tactics",
    line: [
      { move: "d4e2", reply: "g1h1", message: "Correct. The knight fork starts with check." },
      { move: "e2c1" },
    ],
    success: "Correct. Nxc1 wins the rook after the fork.",
  },
  {
    id: "promotion-mate-net",
    fen: "6k1/1P3ppp/8/8/8/2N5/5PPP/4R1K1 w - - 0 1",
    title: "Promotion Net",
    difficulty: "Advanced",
    level: 14,
    category: "Promotion tactic",
    source: "Classic promotion mate pattern",
    line: [{ move: "b7b8q" }],
    success: "Correct. b8=Q# promotes with mate.",
  },
  {
    id: "long-diagonal-pickup",
    fen: "r3k2r/ppp2p1p/2n5/8/8/8/PBPP1PPP/R3K2R w KQkq - 0 1",
    title: "Long Diagonal Shot",
    difficulty: "Advanced",
    level: 15,
    category: "Diagonal tactic",
    source: "Inspired by long-diagonal bishop tactics",
    line: [{ move: "b2h8" }],
    success: "Correct. Bxh8 wins the rook across the long diagonal.",
  },
  {
    id: "queen-trap-h4-new",
    fen: "rnb1kbnr/ppp2ppp/8/4p3/3PN2q/5N2/PPP2PPP/R1BQKB1R w KQkq - 1 6",
    title: "Trap the Queen",
    difficulty: "Advanced",
    level: 16,
    category: "Queen trap",
    source: "Inspired by queen-trap miniatures",
    line: [{ move: "f3h4" }],
    success: "Correct. Nxh4 traps the queen with a knight, not the king.",
  },
  {
    id: "rook-pin-on-e6",
    fen: "2r1k2r/ppp3pp/4q3/3p4/2BP4/2N2Q2/PPP2PPP/4R1K1 w k - 0 1",
    title: "Pinned Queen",
    difficulty: "Expert",
    level: 17,
    category: "Pin",
    source: "Classic pin against the king",
    line: [{ move: "e1e6" }],
    success: "Correct. Rxe6+ wins the queen because it is pinned to the king.",
  },
  {
    id: "rook-skewer-on-e7",
    fen: "r5k1/pp2qppp/2r5/3p4/2BP4/2N2Q2/PPP2PPP/4R1K1 w - - 0 1",
    title: "Skewer the Queen",
    difficulty: "Expert",
    level: 18,
    category: "Skewer",
    source: "Classic rook skewer pattern",
    line: [{ move: "e1e7" }],
    success: "Correct. Rxe7 wins the queen without giving Black a clean recapture.",
  },
  {
    id: "arabian-corner-mate",
    fen: "6k1/5ppp/6Q1/8/2B5/8/5PPP/R5K1 w - - 0 1",
    title: "Corner Mating Net",
    difficulty: "Master",
    level: 19,
    category: "Mating net",
    source: "Inspired by Arabian mate patterns",
    line: [{ move: "a1a8" }],
    success: "Correct. Ra8# finishes the corner net.",
  },
  {
    id: "boden-schulder-mate",
    fen: "2k1rb1r/ppp3pp/2n2q2/3B1b2/5P2/2P1BQ2/PP1N1P1P/2KR3R b - - 0 14",
    title: "Boden's Mate",
    difficulty: "Master",
    level: 20,
    category: "Boden's mate",
    source: "Schulder-Boden, London 1853",
    line: [
      { move: "f6c3", reply: "b2c3", message: "Correct. The queen sacrifice opens the diagonals." },
      { move: "f8a3" },
    ],
    success: "Correct. Ba3# completes Boden's famous crisscross mate.",
  },
  {
    id: "morphy-opera-finale",
    fen: "3rkb1r/p2nqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR3R w k - 3 13",
    title: "Opera Game Finale",
    difficulty: "Master",
    level: 21,
    category: "Queen sacrifice",
    source: "Morphy vs Duke Karl/Count Isouard, Paris 1858",
    line: [
      { move: "d1d7", reply: "d8d7", message: "Correct. The first rook sacrifice strips the defense." },
      { move: "h1d1", reply: "e7e6", message: "Correct. Bring the last rook to the open file." },
      { move: "b5d7", reply: "f6d7", message: "Correct. The bishop clears b8 for the queen." },
      { move: "b3b8", reply: "d7b8", message: "Correct. One more sacrifice pulls the knight away." },
      { move: "d1d8" },
    ],
    success: "Correct. Rd8# finishes Morphy's Opera Game.",
  },
  {
    id: "anderssen-kieseritzky-immortal",
    fen: "r1bk3r/p2p1pNp/n2B1n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w - - 0 23",
    title: "Immortal Game Finish",
    difficulty: "Master",
    level: 22,
    category: "King hunt",
    source: "Anderssen-Kieseritzky, London 1851",
    line: [{ move: "d6e7" }],
    success: "Correct. Be7# is the immortal final move.",
  },
  {
    id: "anderssen-dufresne-evergreen",
    fen: "1r2k1r1/pbppnp1p/1b3P2/8/Q7/B1PB1q2/P4PPP/3R2K1 w - - 0 21",
    title: "Evergreen Game Finish",
    difficulty: "Master",
    level: 23,
    category: "King hunt",
    source: "Anderssen-Dufresne, Berlin 1852",
    line: [
      { move: "a4d7", reply: "e8d7", message: "Correct. The queen sacrifice starts the king hunt." },
      { move: "d3f5", reply: "d7e8", message: "Correct. Keep checking with development." },
      { move: "f5d7", reply: "e8f8", message: "Correct. Drive the king into the final net." },
      { move: "a3e7" },
    ],
    success: "Correct. Bxe7# completes the Evergreen combination.",
  },
  {
    id: "philidor-legacy-exam",
    fen: "r5rk/pp4pp/2n4N/3p4/3P4/2N5/PP3PPP/6K1 w - - 0 1",
    title: "Philidor Legacy Exam",
    difficulty: "Expert",
    level: 24,
    category: "Smothered mate",
    source: "Inspired by Philidor's Legacy",
    line: [{ move: "h6f7" }],
    success: "Correct. Nf7# works even with the board still crowded.",
  },
  {
    id: "lolli-h7-mate",
    fen: "r4rk1/ppp2ppp/2n5/3p4/3P3Q/2PB1N2/PP3PPP/R4RK1 w - - 0 1",
    title: "Lolli Mate Pattern",
    difficulty: "Expert",
    level: 25,
    category: "King attack",
    source: "Inspired by Gioachino Greco / Lolli attacking patterns",
    line: [{ move: "h4h7" }],
    success: "Correct. Qxh7# works because the bishop guards the queen.",
  },
  {
    id: "anastasia-file-mate",
    fen: "6rk/ppp2Np1/2n5/8/8/R7/PPP2PPP/6K1 w - - 0 1",
    title: "Anastasia's Mate",
    difficulty: "Expert",
    level: 26,
    category: "File mate",
    source: "Classic Anastasia's mate pattern",
    line: [{ move: "a3h3" }],
    success: "Correct. Rh3# uses the knight and trapped king perfectly.",
  },
  {
    id: "fried-liver-family-fork",
    fen: "r1b1kb1r/ppp2ppp/2n2n2/3Np3/2B1P3/8/PPPP1PPP/R1BQK2R w KQkq - 0 1",
    title: "Fried Liver Fork",
    difficulty: "Expert",
    level: 27,
    category: "Fork",
    source: "Inspired by Fried Liver / Two Knights fork patterns",
    line: [
      { move: "d5c7", reply: "e8d8", message: "Correct. The fork drags the king off the rook." },
      { move: "c7a8" },
    ],
    success: "Correct. Nxa8 wins the rook after the knight fork.",
  },
  {
    id: "epaulette-mate-classic",
    fen: "3rkr2/4pppp/4Q3/2B5/8/8/5PPP/6K1 w - - 0 1",
    title: "Epaulette Mate",
    difficulty: "Master",
    level: 28,
    category: "Epaulette mate",
    source: "Classic epaulette mate pattern",
    line: [{ move: "e6e7" }],
    success: "Correct. Qxe7# works because the king's own pieces box it in.",
  },
  {
    id: "windmill-file-finish",
    fen: "7k/6Rp/5N2/8/8/8/5PPP/6K1 w - - 0 1",
    title: "Windmill File Finish",
    difficulty: "Master",
    level: 29,
    category: "Seventh-rank mate",
    source: "Inspired by windmill and seventh-rank rook patterns",
    line: [{ move: "g7g8" }],
    success: "Correct. Rg8# works because the knight protects the rook.",
  },
  {
    id: "blind-swine-real-finish",
    fen: "7k/5Rpp/1R6/8/8/8/5PPP/6K1 w - - 0 1",
    title: "Blind Swine Finish",
    difficulty: "Master",
    level: 30,
    category: "Rook domination",
    source: "Classic seventh-rank blind swine pattern",
    line: [{ move: "b6b8" }],
    success: "Correct. Rb8# finishes with the doubled rooks.",
  },
];

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
let gameOverDialogTimer = null;
let gameOverShown = false;
let selectedComputerColor = null;
let premoveSelection = null;
let queuedPremove = null;
let onlinePeer = null;
let onlineChannel = null;
let onlineRole = null;
let onlineLocalColor = null;
let onlineConnected = false;
let applyingRemoteMove = false;
let accountToken = window.localStorage.getItem(settingKeys.accountToken) || "";
let currentUser = loadSavedUser();
let latestRecoveryNotice = "";
let friendsState = { friends: [], incoming: [], outgoing: [], invites: [] };
let friendSearchState = [];
let onlineRoomCode = "";
let onlineRoomColor = null;
let onlineRoomLastMoveCount = 0;
let onlinePollTimer = null;
let clockConfig = parseClockValue("300+0");
let clockTimes = { w: 300000, b: 300000 };
let clockInterval = null;
let lastClockTick = null;
let timeoutWinner = null;
let resignation = null;
let agreedDraw = false;
let statsRecordedForGame = false;
let currentPuzzleIndex = 0;
let puzzleSolved = false;
let currentPuzzleStep = 0;
let puzzleMistakeRecorded = false;
let puzzleSolutionAvailable = false;
let puzzleSolutionReviewed = false;
let puzzleRun = createPuzzleRunState();
let activeLessonId = "italian";
let activeLessonPly = 0;
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
  const premoveSelectionMoves = !review && !preview && premoveSelection ? getPremoveSelectionMoves(premoveSelection) : [];
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
      const premoveMove = premoveSelectionMoves.find((item) => item.to === square);

      button.type = "button";
      button.className = `square ${isLight ? "light" : "dark"}`;
      button.dataset.square = square;
      button.setAttribute("aria-label", describeSquare(square, piece));

      if (square === selectedSquare) button.classList.add("selected");
      if (move) button.classList.add(move.captured ? "capture" : "legal");
      if (!move && premoveMove) button.classList.add(premoveMove.captured ? "premove-capture" : "premove-legal");
      if (!review && !preview && lastMove?.from === square) button.classList.add("last-from");
      if (!review && !preview && lastMove?.to === square) button.classList.add("last-to");
      if (preview?.from === square) button.classList.add("preview-from");
      if (preview?.to === square) button.classList.add("preview-to");
      if (!review && !preview && (premoveSelection === square || (!selectedSquare && queuedPremove?.from === square))) {
        button.classList.add("premove-from");
      }
      if (!review && !preview && !selectedSquare && queuedPremove?.to === square) button.classList.add("premove-to");
      if (!review && pendingMoveAnimation?.to === square) button.classList.add("move-animation-target");
      if (dragState?.started && dragState.from === square) button.classList.add("dragging-source");
      if (square === checkSquare) button.classList.add("check");
      if (review?.from === square) button.classList.add("review-from");
      if (review?.to === square) button.classList.add("review-to");

      if (piece) {
        const pieceSpan = document.createElement("span");
        pieceSpan.className = piece.color === "w" ? "piece-white" : "piece-black";
        pieceSpan.textContent = getPieceGlyph(piece);
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
  if (getActiveReview() || getActivePreview() || pendingPromotion || isGameFinished()) {
    return;
  }
  if (isPracticeMode() && puzzleSolved) return;
  if (isOnlineMode() && !onlineConnected) {
    setMoveFeedback("Connect to your friend before moving.", "");
    return;
  }

  const piece = chess.get(square);
  const turn = chess.turn();

  if (modeSelect.value === "human" && premoveSelection && piece?.color === turn) {
    const isPremoveTarget = getPremoveSelectionMoves(premoveSelection).some((move) => move.to === square);
    if (isPremoveTarget) {
      handlePremoveClick(square);
      return;
    }
    clearPremove();
    renderPremoveArrow();
  }

  if (selectedSquare) {
    const legalMove = legalMoves.find((move) => move.to === square);
    if (legalMove) {
      requestMove(legalMove);
      return;
    }

    if (piece && piece.color === turn) {
      selectedSquare = square;
      legalMoves = chess.moves({ square, verbose: true });
      render();
      return;
    }

    selectedSquare = null;
    legalMoves = [];
    render();
    return;
  }

  if (canQueuePremove(square, piece)) {
    handlePremoveClick(square);
    return;
  }

  if (isOnlineRemoteTurn()) {
    setMoveFeedback("Waiting for your friend to move.", "");
    return;
  }

  if (isComputerTurn()) return;

  if (premoveSelection) {
    if (square === premoveSelection) {
      clearPremove();
      clearSelection();
      render();
      return;
    }

    const premoveLegalMove = chess.moves({ square: premoveSelection, verbose: true }).find((move) => move.to === square);
    if (premoveLegalMove) {
      requestMove(premoveLegalMove);
      return;
    }

    clearPremove();
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

  const trackedMove = makeTrackedMove({ from: move.from, to: move.to });
  if (trackedMove && handlePracticeMove(trackedMove)) {
    clearSelection();
    render();
    return;
  }
  sendOnlineMove(trackedMove);
  afterMovePlayed(move.color);
  finishQueuedPremove();
  setHintVisible(false);
  clearSelection();
  render();
}

function canQueuePremove(square, piece = square ? chess.get(square) : null) {
  if (isPracticeMode() || getActiveReview() || getActivePreview() || pendingPromotion || isGameFinished()) return false;
  if (getComputerColor()) return isComputerTurn();
  if (isOnlineMode()) return Boolean(isOnlineRemoteTurn() && (premoveSelection || piece?.color === onlineLocalColor));
  if (modeSelect.value !== "human") return false;
  if (premoveSelection) return true;
  if (piece?.color === chess.turn()) return false;
  return Boolean(piece && piece.color !== chess.turn());
}

function getPremoveColor() {
  const computerColor = getComputerColor();
  if (computerColor) return computerColor === "w" ? "b" : "w";
  if (isOnlineMode()) return onlineLocalColor;
  if (modeSelect.value === "human") return premoveSelection ? chess.get(premoveSelection)?.color : chess.turn() === "w" ? "b" : "w";
  return null;
}

function handlePremoveClick(square) {
  const humanColor = getPremoveColor();
  const piece = chess.get(square);

  if (!premoveSelection) {
    if (piece?.color === humanColor) {
      clearSelection();
      premoveSelection = square;
      queuedPremove = null;
      setMoveFeedback("Premove: pick the landing square.", "good");
      render();
    }
    return;
  }

  if (square === premoveSelection) {
    clearPremove();
    setMoveFeedback("Premove cleared.", "");
    render();
    return;
  }

  if (piece?.color === humanColor) {
    clearSelection();
    premoveSelection = square;
    queuedPremove = null;
    setMoveFeedback("Premove: pick the landing square.", "good");
    render();
    return;
  }

  queuedPremove = {
    from: premoveSelection,
    to: square,
    promotion: getPremovePromotion(premoveSelection, square),
  };
  premoveSelection = null;
  clearSelection();
  setMoveFeedback("Premove queued.", "good");
  render();
}

function getPremovePromotion(from, to) {
  const piece = chess.get(from);
  if (piece?.type !== "p") return undefined;
  if ((piece.color === "w" && to.endsWith("8")) || (piece.color === "b" && to.endsWith("1"))) {
    return "q";
  }
  return undefined;
}

function getPremoveSelectionMoves(square) {
  const humanColor = getPremoveColor();
  if (!humanColor) return [];

  try {
    if (chess.turn() === humanColor) return chess.moves({ square, verbose: true });
    const fenParts = chess.fen().split(" ");
    fenParts[1] = humanColor;
    return new Chess(fenParts.join(" ")).moves({ square, verbose: true });
  } catch {
    return [];
  }
}

function clearPremove() {
  premoveSelection = null;
  queuedPremove = null;
}

function tryPlayQueuedPremove() {
  if (!queuedPremove || isGameFinished()) return false;

  const moveInput = queuedPremove;
  clearPremove();
  renderPremoveArrow();

  const movingPiece = chess.get(moveInput.from);
  if (!movingPiece || movingPiece.color !== chess.turn()) {
    cancelQueuedPremove();
    return false;
  }

  const move = makeTrackedMove(moveInput);
  if (!move) {
    cancelQueuedPremove();
    return false;
  }

  afterMovePlayed(move.color);
  setHintVisible(false);
  clearSelection();
  sendOnlineMove(moveReviews.at(-1));
  setMoveFeedback(`Premove played: ${move.san}`, "good");
  return true;
}

function finishQueuedPremove() {
  if (queuedPremove) return tryPlayQueuedPremove();
  return false;
}

function cancelQueuedPremove() {
  clearSelection();
  setHintVisible(false);
  setMoveFeedback("Premove cancelled.", "");
  renderPremoveArrow();
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
  sendOnlineMove(moveReviews.at(-1));
  afterMovePlayed(pendingPromotion.color);
  finishQueuedPremove();
  pendingPromotion = null;
  setHintVisible(false);
  promotionDialog.close();
  clearSelection();
  render();
  renderHomeDashboard();
});

document.querySelector("#newGameBtn").addEventListener("click", () => {
  playSound("button");
  openStartScreen();
});

document.querySelector("#undoBtn").addEventListener("click", () => {
  if (isGameFinished()) return;
  playSound("button");
  chess.undo();
  moveReviews.pop();
  lastMove = getLastTrackedMove();
  pendingPromotion = null;
  clearPremove();
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
  if (modeSelect.value !== "practice") saveSetting(settingKeys.playMode, modeSelect.value);
  syncStartControlsFromSettings();
  clearPremove();
  if (!isOnlineMode()) closeOnlineConnection();
  setHintVisible(false);
  chooseComputerSide();
  resetEnginePositionState();
  clearSelection();
  render();
});

difficultySelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.difficulty, difficultySelect.value);
  syncStartControlsFromSettings();
  renderBotCard();
  setHintVisible(false);
  resetEnginePositionState();
  render();
  renderHomeDashboard();
});

clockSelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.clock, clockSelect.value);
  syncStartControlsFromSettings();
  resetClockState();
  renderClocks();
  renderHomeDashboard();
});

themeSelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.theme, themeSelect.value);
  syncStartControlsFromSettings();
  applyVisualSettings();
  renderHomeDashboard();
});

pieceStyleSelect.addEventListener("change", () => {
  playSound("button");
  saveSetting(settingKeys.pieceStyle, pieceStyleSelect.value);
  applyVisualSettings();
  renderBoard();
  renderHomeDashboard();
});

volumeSelect.addEventListener("change", () => {
  saveSetting(settingKeys.volume, volumeSelect.value);
  updateMasterVolume();
  playSound("move");
  renderHomeDashboard();
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

dialogRetryMomentBtn?.addEventListener("click", () => {
  playSound("button");
  retryKeyMoment();
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

boardReviewRestartBtn?.addEventListener("click", () => {
  setReviewIndex(0);
});

boardReviewCloseBtn?.addEventListener("click", () => {
  reviewOpen = false;
  reviewPlaybackIndex = null;
  renderReview();
  renderBoard();
});

dockReviewPrevBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex - 1);
});

dockReviewNextBtn.addEventListener("click", () => {
  setReviewIndex(reviewIndex + 1);
});

startGameBtn.addEventListener("click", () => {
  playSound("button");
  applyStartScreenChoices();
});

appTabs.forEach((button) => {
  button.addEventListener("click", () => {
    playSound("button");
    switchAppTab(button.dataset.tab);
  });
});

homePlayBtn?.addEventListener("click", () => {
  playSound("button");
  const preferredMode = modeSelect.value === "practice" ? "white" : modeSelect.value;
  openStartScreenForMode(preferredMode);
});

homePuzzleBtn?.addEventListener("click", () => {
  playSound("button");
  switchAppTab("puzzles");
});

homeFriendsBtn?.addEventListener("click", () => {
  playSound("button");
  switchAppTab("friends");
});

tabPanels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    const replayId = event.target.closest("[data-history-replay]")?.dataset.historyReplay;
    if (replayId) {
      replayHistoryGame(replayId);
      return;
    }

    const botKey = event.target.closest("[data-start-bot]")?.dataset.startBot;
    if (botKey && difficultySettings[botKey]) {
      playSound("button");
      difficultySelect.value = botKey;
      openStartScreenForMode("white");
      startDifficultySelect.value = botKey;
      updateStartBotPreview();
      return;
    }

    if (event.target.closest("[data-start-daily-puzzle]")) {
      playSound("button");
      const daily = getDailyPuzzle();
      currentPuzzleIndex = Math.max(0, puzzles.findIndex((puzzle) => puzzle.id === daily.id));
      startPuzzleRun();
      return;
    }

    const shortcut = event.target.closest("[data-tab-shortcut]")?.dataset.tabShortcut;
    if (!shortcut) return;
    playSound("button");
    if (shortcut === "play") {
      const preferredMode = modeSelect.value === "practice" ? "white" : modeSelect.value;
      openStartScreenForMode(preferredMode);
      return;
    }
    if (shortcut === "puzzles") {
      switchAppTab("puzzles");
      return;
    }
    switchAppTab(shortcut);
  });
});

lessonGrid?.addEventListener("click", (event) => {
  const topic = event.target.closest("[data-lesson-id]");
  if (topic) {
    playSound("button");
    activeLessonId = topic.dataset.lessonId;
    activeLessonPly = 0;
    renderLearnTab();
    return;
  }

  const nav = event.target.closest("[data-lesson-nav]")?.dataset.lessonNav;
  if (nav) {
    const lesson = openingLessons.find((item) => item.id === activeLessonId) ?? openingLessons[0];
    playSound("button");
    if (nav === "next") activeLessonPly = Math.min(lesson.line.length, activeLessonPly + 1);
    if (nav === "previous") activeLessonPly = Math.max(0, activeLessonPly - 1);
    if (nav === "restart") activeLessonPly = 0;
    renderLearnTab();
    return;
  }

  const action = event.target.closest("[data-lesson-action]")?.dataset.lessonAction;
  if (!action) return;
  playSound("button");
  openStartScreenForMode("white");
});

puzzlesStartBtn?.addEventListener("click", () => {
  playSound("button");
  startPuzzleRun();
});

startModeSelect.addEventListener("change", () => {
  updateStartFieldsVisibility();
  updateStartBotPreview();
});

startDifficultySelect.addEventListener("change", () => {
  updateStartBotPreview();
});

profilePictureFile?.addEventListener("change", async () => {
  const file = profilePictureFile.files?.[0];
  if (!file) return;
  try {
    setProfilePictureStatus("Checking photo...");
    const dataUrl = await prepareProfilePicture(file);
    if (profilePicture) profilePicture.value = dataUrl;
    setProfilePictureStatus("Photo passed local safety checks. Save your profile to use it.");
  } catch (error) {
    profilePictureFile.value = "";
    setProfilePictureStatus(error.message || "That photo could not be used.");
  }
});

startBotCards?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-bot-option]");
  if (!card) return;
  playSound("button");
  startDifficultySelect.value = card.dataset.botOption;
  updateStartBotPreview();
});

startThemeSelect.addEventListener("change", () => {
  themeSelect.value = startThemeSelect.value;
  applyVisualSettings();
});

startCoachToggle.addEventListener("change", () => {
  saveSetting(settingKeys.coachEnabled, startCoachToggle.checked);
  renderCoachTip();
});

startOpeningToggle.addEventListener("change", () => {
  saveSetting(settingKeys.openingEnabled, startOpeningToggle.checked);
  renderOpeningCard();
});

resetStatsBtn.addEventListener("click", () => {
  playSound("button");
  saveStats({ games: 0, wins: 0, losses: 0, draws: 0, accuracyTotal: 0 });
  renderStats();
  setMoveFeedback("Local stats reset.", "good");
});

authLoginBtn?.addEventListener("click", async () => {
  playSound("button");
  await loginAccount("auth");
});

authSignupBtn?.addEventListener("click", async () => {
  playSound("button");
  await signupAccount("auth");
});

authTogglePassword?.addEventListener("click", () => togglePasswordVisibility(authPassword, authTogglePassword));

forgotTogglePassword?.addEventListener("click", () => togglePasswordVisibility(forgotPassword, forgotTogglePassword));

accountTogglePassword?.addEventListener("click", () => togglePasswordVisibility(accountPassword, accountTogglePassword));

forgotPasswordToggle?.addEventListener("click", () => {
  forgotPasswordPanel.hidden = !forgotPasswordPanel.hidden;
});

forgotResetBtn?.addEventListener("click", async () => {
  playSound("button");
  await resetForgottenPassword();
});

authPassword?.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  await loginAccount("auth");
});

authUsername?.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  authPassword?.focus();
});

loginBtn?.addEventListener("click", async () => {
  playSound("button");
  await loginAccount("panel");
});

signupBtn?.addEventListener("click", async () => {
  playSound("button");
  await signupAccount("panel");
});

logoutBtn?.addEventListener("click", () => {
  playSound("button");
  logoutAccount();
});

saveProfileBtn?.addEventListener("click", async () => {
  playSound("button");
  await saveProfile();
});

newRecoveryCodeBtn?.addEventListener("click", async () => {
  playSound("button");
  await createNewRecoveryCode();
});

changePasswordBtn?.addEventListener("click", async () => {
  playSound("button");
  await changeAccountPassword();
});

profileResetStatsBtn?.addEventListener("click", async () => {
  playSound("button");
  await resetAccountStats();
});

deleteAccountBtn?.addEventListener("click", async () => {
  playSound("button");
  await deleteAccount();
});

friendSearchBtn?.addEventListener("click", async () => {
  playSound("button");
  await searchFriends();
});

friendsRefreshBtn?.addEventListener("click", async () => {
  playSound("button");
  await loadFriends();
});

friendSearchInput?.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  await searchFriends();
});

nextPuzzleBtn?.addEventListener("click", () => {
  playSound("button");
  loadNextPuzzle();
});

retryPuzzleBtn?.addEventListener("click", () => {
  playSound("button");
  loadCurrentPuzzle();
});

reviewPuzzleBtn?.addEventListener("click", () => {
  playSound("button");
  showPuzzleSolution();
});

skipPuzzleBtn?.addEventListener("click", () => {
  playSound("button");
  skipCurrentPuzzle();
});

puzzleNextDialogBtn.addEventListener("click", () => {
  playSound("button");
  puzzleDialog.close();
  loadNextPuzzle();
});

puzzleRetryDialogBtn.addEventListener("click", () => {
  playSound("button");
  puzzleDialog.close();
  loadCurrentPuzzle();
});

puzzleHomeDialogBtn.addEventListener("click", () => {
  playSound("button");
  puzzleDialog.close();
  openStartScreen();
});

copyMovesBtn?.addEventListener("click", async () => {
  playSound("button");
  try {
    await copyTextToClipboard(getPgnStyleMoveText());
    setMoveFeedback("Move list copied.", "good");
  } catch {
    setMoveFeedback("Could not copy the move list from this browser.", "alert");
  }
});

dialogShareBtn.addEventListener("click", async () => {
  await shareFinishedGame();
});

dialogShareAppBtn.addEventListener("click", async () => {
  await shareApp();
});

dialogRematchBtn.addEventListener("click", () => {
  gameOverDialog.close();
  startNewGame();
});

dialogChangeBotBtn.addEventListener("click", () => {
  gameOverDialog.close();
  openStartScreen();
});

shareAppBtn.addEventListener("click", async () => {
  playSound("button");
  await shareApp();
});

onlineHostBtn?.addEventListener("click", async () => {
  playSound("button");
  await createBackendRoom();
});

onlineJoinBtn?.addEventListener("click", async () => {
  playSound("button");
  await joinBackendRoom();
});

onlineAcceptBtn?.addEventListener("click", async () => {
  playSound("button");
  await pollOnlineRoom();
});

onlineCopyBtn?.addEventListener("click", async () => {
  playSound("button");
  try {
    await copyTextToClipboard(onlineOutput.value);
    setOnlineStatus("Room code copied. Send it to your friend.");
  } catch {
    setOnlineStatus("Copy failed. Select the room code manually.");
  }
});

dialogNewGameBtn.addEventListener("click", () => {
  gameOverDialog.close();
  openStartScreen();
});

dialogCloseBtn.addEventListener("click", () => {
  gameOverDialog.close();
});

gameOverDialog.addEventListener("close", () => {
  document.body.classList.remove("postgame-modal-open");
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

function openStartScreen() {
  if (!currentUser) {
    openAuthScreen();
    return;
  }
  syncStartControlsFromSettings();
  closeAuthScreen();
  startScreen.classList.remove("hidden");
  startGameBtn.focus();
}

function openStartScreenForMode(mode) {
  openStartScreen();
  if (!currentUser || startScreen.classList.contains("hidden")) return;
  if ([...startModeSelect.options].some((option) => option.value === mode)) {
    startModeSelect.value = mode;
  }
  updateStartFieldsVisibility();
  updateStartBotPreview();
}

function closeStartScreen() {
  startScreen.classList.add("hidden");
}

function openAuthScreen(message = "Log in or create an account to continue.") {
  closeStartScreen();
  showLoginStep(message);
  authScreen.classList.remove("hidden");
  authUsername?.focus();
}

function closeAuthScreen() {
  authScreen.classList.add("hidden");
}

function showLoggedInShell(tab = window.localStorage.getItem(settingKeys.activeTab) || "home") {
  closeAuthScreen();
  closeStartScreen();
  switchAppTab(tab || "home", false);
  render();
}

function switchAppTab(tab = "home", persist = true) {
  const nextTab = appTabs.some((button) => button.dataset.tab === tab) ? tab : "home";
  if (!currentUser) {
    openAuthScreen();
    return;
  }

  if (nextTab === "play" && isPracticeMode()) {
    restoreNormalPlayMode();
  }

  if (persist) saveSetting(settingKeys.activeTab, nextTab);
  document.body.dataset.activeTab = nextTab;
  if (appShell) appShell.dataset.activeTab = nextTab;

  appTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === nextTab);
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tabPanel === nextTab);
  });

  if (nextTab === "friends") {
    friendsSection.open = true;
    onlineSection.open = true;
    loadFriends();
  } else if (nextTab === "profile") {
    accountSection.open = true;
    renderAccount();
  } else if (nextTab === "settings") {
    settingsSection.open = true;
  } else if (nextTab === "play") {
    renderBoard();
    renderBestMoveArrow();
    renderPremoveArrow();
  }

  renderHomeDashboard();
}

function getSavedNormalPlayMode() {
  const saved = window.localStorage.getItem(settingKeys.playMode);
  const validModes = new Set(["human", "white", "black", "random", "online"]);
  return validModes.has(saved) && saved !== "online" ? saved : "white";
}

function restoreNormalPlayMode() {
  modeSelect.value = getSavedNormalPlayMode();
  saveSetting(settingKeys.mode, modeSelect.value);
  syncStartControlsFromSettings();
  closeOnlineConnection(true);
  resetReviewState();
  startNewGame();
}

function renderHomeDashboardLegacy() {
  const stats = getSavedStats();
  const difficulty = difficultySettings[difficultySelect.value] ?? difficultySettings.medium;
  const clockLabel = clockSelect.selectedOptions?.[0]?.textContent || "No clock";
  if (homeNextMatch) {
    homeNextMatch.textContent = modeSelect.value === "practice" ? "Puzzle practice" : `${difficulty.botName} · ${clockLabel}`;
  }
  if (homePuzzleStreak) homePuzzleStreak.textContent = String(currentUser?.puzzle?.streak ?? 0);
  if (homeFriendStatus) {
    const friendCount = friendsState.friends.length;
    const requestCount = friendsState.incoming.length + friendsState.invites.length;
    homeFriendStatus.textContent = requestCount
      ? `${requestCount} update${requestCount === 1 ? "" : "s"}`
      : `${friendCount} friend${friendCount === 1 ? "" : "s"}`;
  }
  if (puzzlesProgress) {
    const solved = currentUser?.puzzle?.solved ?? 0;
    const failed = currentUser?.puzzle?.failed ?? 0;
    const attempts = solved + failed;
    const accuracy = attempts ? Math.round((solved / attempts) * 100) : 0;
    puzzlesProgress.textContent = attempts ? `${solved} solved · ${accuracy}%` : "Ready";
  }
  if (homeStatsGrid) {
    homeStatsGrid.innerHTML = `
      <article class="platform-card"><span>Games</span><strong>${stats.games}</strong><p>Total local games played on this device.</p></article>
      <article class="platform-card"><span>Record</span><strong>${stats.wins}-${stats.losses}-${stats.draws}</strong><p>Wins, losses, and draws from your saved games.</p></article>
      <article class="platform-card"><span>Average Accuracy</span><strong>${stats.games ? `${Math.round(stats.accuracyTotal / stats.games)}%` : "--"}</strong><p>Your average post-game review score.</p></article>
      <article class="platform-card"><span>Puzzles</span><strong>${currentUser?.puzzle?.solved ?? 0}</strong><p>Solved tactics saved to your account.</p></article>
      <article class="platform-card"><span>Best Streak</span><strong>${currentUser?.puzzle?.bestStreak ?? 0}</strong><p>Your best puzzle streak so far.</p></article>
      <article class="platform-card"><span>Current Set</span><strong>${puzzles.length}</strong><p>Legal tactics across mates, forks, pins, skewers, and material wins.</p></article>
    `;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function platformCardMarkup(label, value, description) {
  return `<article class="platform-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><p>${escapeHtml(description)}</p></article>`;
}

function getModeLabel(value = modeSelect.value) {
  return (
    {
      human: "Human vs Human",
      white: "White vs Computer",
      black: "Black vs Computer",
      random: "Random Side",
      practice: "Practice Puzzle",
      online: "Online Friend Match",
    }[value] || "Play"
  );
}

function renderStatusChips(container, labels) {
  if (!container) return;
  container.innerHTML = "";
  labels.filter(Boolean).forEach((label) => {
    const chip = document.createElement("span");
    chip.textContent = label;
    container.append(chip);
  });
}

function renderHomeDashboard() {
  const stats = getSavedStats();
  const difficulty = difficultySettings[difficultySelect.value] ?? difficultySettings.medium;
  const clockLabel = clockSelect.selectedOptions?.[0]?.textContent || "No clock";
  const modeLabel = getModeLabel(modeSelect.value);
  const themeLabel = themeSelect.selectedOptions?.[0]?.textContent || "Green";
  const pieceLabel = pieceStyleSelect.selectedOptions?.[0]?.textContent || "Classic";
  const solved = currentUser?.puzzle?.solved ?? 0;
  const failed = currentUser?.puzzle?.failed ?? 0;
  const attempts = solved + failed;
  const puzzleAccuracy = attempts ? Math.round((solved / attempts) * 100) : 0;
  const friendCount = friendsState.friends.length;
  const requestCount = friendsState.incoming.length + friendsState.invites.length;
  const botProgress = getBotProgress(stats);
  const history = getGameHistory();
  const latestGame = history[0];
  const puzzleLevel = getPuzzleLevelInfo();
  const recommendedBot = difficultySettings[getRecommendedBotKey(stats)] ?? difficulty;
  const avgAccuracy = stats.games ? `${Math.round(stats.accuracyTotal / stats.games)}%` : "--";
  const nextAction = isPracticeMode()
    ? "Solve the current run"
    : requestCount
      ? "Check your social queue"
      : stats.games
        ? "Play the next match"
        : "Start your first game";

  if (homeContinueTitle) {
    homeContinueTitle.textContent = isPracticeMode()
      ? `Puzzle ${currentPuzzleIndex + 1} of ${puzzles.length}`
      : isOnlineMode()
        ? onlineRoomCode
          ? `Online room ${onlineRoomCode}`
          : "Set up an online match"
        : `${modeLabel} / ${clockLabel}`;
  }
  if (homeContinueText) {
    homeContinueText.textContent = isPracticeMode()
      ? "Continue the current tactic set or start a fresh puzzle run."
      : isOnlineMode()
        ? onlineRoomCode
          ? onlineConnected
            ? "Your friend is connected. Jump back to the board."
            : "Room created. Waiting for your friend to join."
          : "Invite a friend from Friends, or create a room from the Play tab."
        : `Saved setup: ${difficulty.botName}, ${clockLabel}, ${themeLabel} board.`;
  }
  renderStatusChips(homeContinueMeta, [
    modeLabel,
    clockLabel,
    isPracticeMode() ? `${puzzles.length} puzzles` : difficulty.botName,
    `${themeLabel} board`,
  ]);

  if (homeNextMatch) {
    homeNextMatch.textContent = modeSelect.value === "practice" ? "Puzzle practice" : `${difficulty.botName} / ${clockLabel}`;
  }
  if (homePuzzleStreak) homePuzzleStreak.textContent = String(currentUser?.puzzle?.streak ?? 0);
  if (homeFriendStatus) {
    homeFriendStatus.textContent = requestCount
      ? `${requestCount} update${requestCount === 1 ? "" : "s"}`
      : `${friendCount} friend${friendCount === 1 ? "" : "s"}`;
  }
  if (puzzlesProgress) {
    puzzlesProgress.textContent = isPracticeMode()
      ? `${puzzleRun.solved}/${puzzleRun.goal} run / ${puzzleRun.missed} missed / streak ${puzzleRun.streak}`
      : attempts
        ? `${solved} solved / ${puzzleAccuracy}%`
        : "Ready";
  }

  renderPuzzleCategoryProgress();
  renderFriendsOverview();
  renderProfileOverview(stats);
  renderSettingsOverview({ modeLabel, clockLabel, themeLabel, pieceLabel });
  renderPlayContextStrip({ modeLabel, clockLabel, themeLabel, pieceLabel, difficulty });
  renderFriendRoomSummary();
  renderLearnTab();

  if (homeStatsGrid) {
    homeStatsGrid.innerHTML = `
      <div class="home-stat-head home-command-card">
        <span>Command Center</span>
        <strong>${escapeHtml(nextAction)}</strong>
        <p>${stats.games ? `${avgAccuracy} average accuracy across ${stats.games} game${stats.games === 1 ? "" : "s"}.` : "Build your record with games, puzzles, and opening lessons."}</p>
        <div class="home-action-strip">
          <button type="button" data-tab-shortcut="play">Play</button>
          <button type="button" data-tab-shortcut="puzzles">Puzzles</button>
          <button type="button" data-tab-shortcut="learn">Learn</button>
        </div>
      </div>
      <div class="home-stat-row">
        <span><strong>${stats.games}</strong> Games</span>
        <span><strong>${avgAccuracy}</strong> Accuracy</span>
        <span><strong>${solved}</strong> Puzzles</span>
        <span><strong>${currentUser?.puzzle?.bestStreak ?? 0}</strong> Best streak</span>
      </div>
      <div class="home-next-grid">
        <article>
          <span>Recommended bot</span>
          <strong>${escapeHtml(recommendedBot.botName)} ${escapeHtml(recommendedBot.elo)}</strong>
          <p>${escapeHtml(recommendedBot.persona || "A clean next challenge on the ladder.")}</p>
          <button type="button" data-start-bot="${escapeHtml(getRecommendedBotKey(stats))}">Challenge</button>
        </article>
        <article>
          <span>Puzzle level</span>
          <strong>${escapeHtml(puzzleLevel.name)} / ${puzzleLevel.progress}%</strong>
          <p>${puzzleLevel.nextXp - getPuzzleProgress().xp} XP to the next training tier.</p>
          <button type="button" data-tab-shortcut="puzzles">Train</button>
        </article>
        <article>
          <span>Recent game</span>
          <strong>${escapeHtml(latestGame?.resultBadge || "No games yet")}</strong>
          <p>${escapeHtml(latestGame ? `${latestGame.opponent} / ${latestGame.opening}` : "Finish a game to build history.")}</p>
          ${latestGame ? `<button type="button" data-history-replay="${escapeHtml(latestGame.id)}">Replay</button>` : `<button type="button" data-tab-shortcut="play">Start</button>`}
        </article>
      </div>
      <div class="home-progress-map">
        <span class="home-progress-node unlocked">Play</span>
        <span class="home-progress-node ${solved > 0 ? "unlocked" : ""}">Tactics</span>
        <span class="home-progress-node ${botProgress.count > 0 ? "unlocked" : ""}">Bots</span>
        <span class="home-progress-node ${stats.games >= 10 ? "unlocked" : ""}">Review</span>
      </div>
      <div class="home-stat-footer">
        <span>${requestCount ? `${requestCount} friend update${requestCount === 1 ? "" : "s"}` : `${friendCount} friend${friendCount === 1 ? "" : "s"}`}</span>
        <span>${puzzles.length} puzzle set</span>
        <span>${botProgress.count}/${botProgress.total} bots beaten</span>
      </div>
    `;
  }
}

function getOpeningLessonState(lesson) {
  const safePly = Math.min(Math.max(activeLessonPly, 0), lesson.line.length);
  activeLessonPly = safePly;
  const position = new Chess();
  const playedMoves = [];
  let lastMove = null;

  for (let index = 0; index < safePly; index += 1) {
    const step = lesson.line[index];
    const move = position.move(step.san);
    if (!move) break;
    playedMoves.push({ ...step, move });
    lastMove = move;
  }

  const nextStep = lesson.line[safePly] ?? null;
  let previewMove = null;
  if (nextStep) {
    const previewPosition = new Chess(position.fen());
    previewMove = previewPosition.move(nextStep.san);
  }

  return { lastMove, nextStep, playedMoves, position, previewMove, safePly };
}

function getOpeningMoveNumber(index) {
  return `${Math.floor(index / 2) + 1}${index % 2 === 0 ? "." : "..."}`;
}

function renderOpeningTrainerBoard(position, previewMove, lastMove) {
  const board = position.board();
  return `
    <div class="opening-board" aria-label="Opening lesson board">
      ${board
        .map((row, rowIndex) =>
          row
            .map((piece, colIndex) => {
              const square = `${files[colIndex]}${8 - rowIndex}`;
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const classes = [
                "opening-square",
                isLight ? "light" : "dark",
                previewMove?.from === square ? "preview-from" : "",
                previewMove?.to === square ? "preview-to" : "",
                lastMove?.from === square ? "last-from" : "",
                lastMove?.to === square ? "last-to" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return `<div class="${classes}" data-square="${square}">${
                piece ? `<span class="opening-piece piece-${piece.color === "w" ? "white" : "black"}">${escapeHtml(getPieceGlyph(piece))}</span>` : ""
              }</div>`;
            })
            .join(""),
        )
        .join("")}
    </div>
  `;
}

function renderOpeningLineTrack(lesson, safePly) {
  return lesson.line
    .map((step, index) => {
      const status = index < safePly ? "done" : index === safePly ? "current" : "future";
      return `<span class="opening-line-step ${status}"><b>${getOpeningMoveNumber(index)}</b> ${escapeHtml(step.san)}</span>`;
    })
    .join("");
}

function renderLearnTab() {
  if (!lessonGrid) return;
  const activeLesson = openingLessons.find((lesson) => lesson.id === activeLessonId) ?? openingLessons[0];
  const lessonState = getOpeningLessonState(activeLesson);
  const { lastMove, nextStep, position, previewMove, safePly } = lessonState;
  const colorToMove = position.turn() === "w" ? "White" : "Black";
  const nextMoveLabel = previewMove?.san ?? nextStep?.san ?? "";
  const coachTitle = nextStep ? `${colorToMove} plays ${nextMoveLabel}` : `${activeLesson.title} line complete`;
  const coachText = nextStep
    ? nextStep.note
    : "Nice. You have reached the full 10-move opening line. Restart it, step back through the ideas, or try playing it on the main board.";

  lessonGrid.classList.add("interactive-lessons");
  lessonGrid.innerHTML = `
    <section class="learn-stage-card" aria-label="Opening lesson path">
      <div>
        <span>Guided Openings</span>
        <strong>${escapeHtml(activeLesson.title)}</strong>
        <p>${escapeHtml(activeLesson.whiteIdea)}</p>
      </div>
      <div class="learn-path-art" aria-hidden="true">
        ${activeLesson.line
          .slice(0, 8)
          .map((step, index) => `<span class="${index < safePly ? "done" : index === safePly ? "active" : ""}">${escapeHtml(step.san)}</span>`)
          .join("")}
      </div>
    </section>
    <div class="lesson-list" aria-label="Opening choices">
      ${openingLessons
        .map(
          (lesson) => `
            <button class="lesson-topic ${lesson.id === activeLesson.id ? "active" : ""}" type="button" data-lesson-id="${escapeHtml(lesson.id)}">
              <span>${escapeHtml(lesson.label)}</span>
              <strong>${escapeHtml(lesson.title)}</strong>
              <small>${escapeHtml(lesson.moves)}</small>
            </button>
          `,
        )
        .join("")}
    </div>
    <article class="lesson-detail opening-trainer-detail">
      <span>${escapeHtml(activeLesson.label)}</span>
      <strong>${escapeHtml(activeLesson.title)}</strong>
      <div class="opening-moves">${escapeHtml(activeLesson.moves)}</div>
      <div class="opening-trainer">
        <section class="opening-coach">
          <span class="bot-avatar opening-coach-avatar" aria-hidden="true">
            <span class="avatar-head"></span>
            <span class="avatar-hair"></span>
            <span class="avatar-shirt"></span>
          </span>
          <div>
            <span>Coach</span>
            <strong>${escapeHtml(coachTitle)}</strong>
            <p>${escapeHtml(coachText)}</p>
          </div>
        </section>
        <div class="opening-board-panel">
          ${renderOpeningTrainerBoard(position, previewMove, lastMove)}
        </div>
        <section class="opening-step-card">
          <span>Step ${Math.min(safePly + 1, activeLesson.line.length)} of ${activeLesson.line.length}</span>
          <strong>${nextStep ? `Next move: ${escapeHtml(getOpeningMoveNumber(safePly))} ${escapeHtml(nextMoveLabel)}` : "Line complete"}</strong>
          <p>${safePly ? `Last move: ${escapeHtml(getOpeningMoveNumber(safePly - 1))} ${escapeHtml(lastMove?.san ?? "")}` : "Start from the opening position."}</p>
          <div class="opening-controls">
            <button type="button" data-lesson-nav="previous" ${safePly === 0 ? "disabled" : ""}>Previous</button>
            <button type="button" data-lesson-nav="restart" ${safePly === 0 ? "disabled" : ""}>Restart lesson</button>
            <button type="button" data-lesson-nav="next" ${safePly >= activeLesson.line.length ? "disabled" : ""}>Next</button>
          </div>
          <button class="lesson-action" type="button" data-lesson-action="${escapeHtml(activeLesson.id)}">Play this opening</button>
        </section>
      </div>
      <div class="opening-line-track" aria-label="Opening move line">
        ${renderOpeningLineTrack(activeLesson, safePly)}
      </div>
      <div class="opening-study-grid">
        <section>
          <h3>White's plan</h3>
          <p>${escapeHtml(activeLesson.whiteIdea)}</p>
        </section>
        <section>
          <h3>Black's plan</h3>
          <p>${escapeHtml(activeLesson.blackIdea)}</p>
        </section>
      </div>
      <div class="opening-list-grid">
        <section>
          <h3>Common plans</h3>
          <ul>
            ${activeLesson.plans.map((plan) => `<li>${escapeHtml(plan)}</li>`).join("")}
          </ul>
        </section>
        <section>
          <h3>Mistakes to avoid</h3>
          <ul>
            ${activeLesson.mistakes.map((mistake) => `<li>${escapeHtml(mistake)}</li>`).join("")}
          </ul>
        </section>
      </div>
      <section class="opening-example">
        <h3>Example line</h3>
        <p>${escapeHtml(activeLesson.example)}</p>
      </section>
    </article>
  `;
}

function renderPuzzleCategoryProgress() {
  if (!puzzleCategoryProgress) return;
  const categories = [...new Set(puzzles.map((puzzle) => puzzle.category || "Tactic"))].slice(0, 6);
  const solved = currentUser?.puzzle?.solved ?? 0;
  const failed = currentUser?.puzzle?.failed ?? 0;
  const attempts = solved + failed;
  const accuracy = attempts ? Math.round((solved / attempts) * 100) : 0;
  const localProgress = getPuzzleProgress();
  const level = getPuzzleLevelInfo(localProgress.xp);
  const dailyPuzzle = getDailyPuzzle();
  const runAttempts = getPuzzleRunAttempts();
  puzzleCategoryProgress.innerHTML = categories
    .map((category, index) => {
      const count = puzzles.filter((puzzle) => (puzzle.category || "Tactic") === category).length;
      const unlocked = solved >= index * 2 || index === 0;
      return `<article class="puzzle-path-card ${unlocked ? "unlocked" : ""}">
        <span>Level ${index + 1}</span>
        <strong>${escapeHtml(category)}</strong>
        <p>${count} puzzle${count === 1 ? "" : "s"} / ${unlocked ? "Ready to train" : "Keep solving to unlock"}</p>
      </article>`;
    })
    .join("");
  puzzleCategoryProgress.insertAdjacentHTML(
    "afterbegin",
    `<article class="puzzle-run-card">
      <span>Run Mode</span>
      <strong>${isPracticeMode() ? `${puzzleRun.solved}/${puzzleRun.goal} solved` : "Start a 10-puzzle run"}</strong>
      <p>${attempts ? `${accuracy}% lifetime accuracy / best streak ${currentUser?.puzzle?.bestStreak ?? 0}` : "Solve tactics in a focused streak session."}</p>
    </article>`,
  );
  puzzleCategoryProgress.insertAdjacentHTML(
    "afterbegin",
    `<article class="puzzle-level-card">
      <span>Puzzle XP</span>
      <strong>${escapeHtml(level.name)} / ${localProgress.xp} XP</strong>
      <p>${level.progress}% to the next tier. Current run: ${runAttempts}/${puzzleRun.goal}.</p>
      <div class="progress-meter"><i style="width:${level.progress}%"></i></div>
    </article>
    <article class="puzzle-daily-card">
      <span>Daily Puzzle</span>
      <strong>${escapeHtml(dailyPuzzle.title)}</strong>
      <p>${escapeHtml(dailyPuzzle.category || "Tactic")} / ${escapeHtml(dailyPuzzle.difficulty || "Training")} / streak ${currentUser?.puzzle?.streak ?? 0}</p>
      <button type="button" data-start-daily-puzzle>Start Daily</button>
    </article>`,
  );
}

function renderFriendsOverview() {
  if (!friendsOverview) return;
  const incoming = friendsState.incoming?.length ?? 0;
  const outgoing = friendsState.outgoing?.length ?? 0;
  const invites = friendsState.invites?.length ?? 0;
  friendsOverview.innerHTML = `
    <article class="social-stat-card"><span>Friends</span><strong>${friendsState.friends.length}</strong><p>Players you can challenge straight into a match.</p></article>
    <article class="social-stat-card"><span>Requests</span><strong>${incoming + outgoing}</strong><p>${incoming} incoming / ${outgoing} sent. Refresh to update.</p></article>
    <article class="social-stat-card"><span>Game Invites</span><strong>${invites}</strong><p>${invites ? "You have a friend match waiting." : "No pending game invites."}</p></article>
  `;
}

function renderFriendRoomSummary() {
  if (!friendsRoomStatus || !friendsRoomText) return;
  if (!onlineRoomCode) {
    friendsRoomStatus.textContent = "No active room";
    friendsRoomText.textContent = "Create a room from a friend card or paste a short room code.";
    return;
  }
  friendsRoomStatus.textContent = onlineConnected ? `Room ${onlineRoomCode} connected` : `Room ${onlineRoomCode} waiting`;
  friendsRoomText.textContent = onlineConnected
    ? `You are ${onlineLocalColor === "b" ? "Black" : "White"}. ${chess.turn() === onlineLocalColor ? "Your turn." : "Friend's turn."}`
    : "Send the room code to your friend or wait for them to accept the invite.";
}

function renderProfileOverview(stats = getSavedStats()) {
  if (!profileOverview) return;
  const name = currentUser?.displayName || currentUser?.username || "Guest";
  const games = stats.games ?? 0;
  const winRate = games ? Math.round((stats.wins / games) * 100) : 0;
  const avgAccuracy = games ? `${Math.round(stats.accuracyTotal / games)}%` : "--";
  const solved = currentUser?.puzzle?.solved ?? 0;
  const bestStreak = currentUser?.puzzle?.bestStreak ?? 0;
  const profileTitle = getProfileTitle(stats, solved, bestStreak);
  const favoriteOpening = currentUser?.favoriteOpening || "Choose one";
  const botProgress = getBotProgress(stats);
  const joinedLabel = currentUser ? "Chess Table member" : "Guest profile";
  const picture = currentUser?.picture
    ? `<img class="profile-overview-picture" src="${escapeHtml(currentUser.picture)}" alt="" loading="lazy" />`
    : `<span class="profile-overview-avatar">${getAvatarGlyph(currentUser?.avatar || "king")}</span>`;
  const details = [
    currentUser?.location ? `Location: ${currentUser.location}` : "",
    `Opening: ${favoriteOpening}`,
  ]
    .filter(Boolean)
    .join(" / ");
  profileOverview.innerHTML = `
    <article class="profile-showcase-card">
      <div class="profile-overview-media">${picture}</div>
      <div class="profile-showcase-copy">
        <span>${escapeHtml(profileTitle)}</span>
        <strong>${escapeHtml(name)}</strong>
        <small>${escapeHtml(joinedLabel)}</small>
        <p>${escapeHtml(currentUser?.bio || details || (currentUser ? "Profile changes save to the backend." : "Log in to save your platform data."))}</p>
        <div class="profile-mini-row">
          <span>${escapeHtml(details || "No profile details yet")}</span>
        </div>
      </div>
    </article>
    <article class="profile-stat-card">
      <span>Record</span>
      <strong>${stats.wins}-${stats.losses}-${stats.draws}</strong>
      <p>${games ? `${winRate}% win rate across ${games} game${games === 1 ? "" : "s"}.` : "Play your first finished game."}</p>
    </article>
    <article class="profile-stat-card">
      <span>Accuracy</span>
      <strong>${avgAccuracy}</strong>
      <p>${games ? "Average accuracy from reviewed games." : "Review games to build this stat."}</p>
    </article>
    <article class="profile-stat-card">
      <span>Puzzles</span>
      <strong>${solved}</strong>
      <p>Best streak ${bestStreak}. Current streak ${currentUser?.puzzle?.streak ?? 0}.</p>
    </article>
    <article class="profile-stat-card">
      <span>Favorite Opening</span>
      <strong>${escapeHtml(favoriteOpening)}</strong>
      <p>Shown on your player card and profile summary.</p>
    </article>
    <article class="profile-stat-card">
      <span>Best Bot Beaten</span>
      <strong>${escapeHtml(botProgress.bestLabel)}</strong>
      <p>${botProgress.count}/${botProgress.total} bots defeated.</p>
    </article>
    <article class="profile-achievements-card">
      <span>Achievements</span>
      <div class="achievement-grid">
        ${getProfileAchievements(stats, solved, bestStreak)
          .map(
            (achievement) => `
              <span class="achievement-badge ${achievement.unlocked ? "unlocked" : ""}">
                <strong>${escapeHtml(achievement.title)}</strong>
                <small>${escapeHtml(achievement.detail)}</small>
              </span>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function getBotProgress(stats = getSavedStats()) {
  const entries = Object.entries(difficultySettings);
  const beaten = entries.filter(([key]) => stats.botWins?.[key]);
  const best = beaten.at(-1);
  return {
    bestLabel: best ? `${best[1].botName} ${best[1].elo}` : "None yet",
    count: beaten.length,
    total: entries.length,
  };
}

function getProfileTitle(stats = getSavedStats(), solved = 0, bestStreak = 0) {
  if ((stats.games ?? 0) >= 20 && Math.round((stats.accuracyTotal || 0) / Math.max(1, stats.games)) >= 85) return "Table Tactician";
  if (bestStreak >= 10) return "Puzzle Streaker";
  if ((stats.wins ?? 0) >= 10) return "Match Regular";
  if (solved >= 10) return "Tactics Student";
  return "Chess Table Player";
}

function getProfileAchievements(stats = getSavedStats(), solved = 0, bestStreak = 0) {
  const games = stats.games ?? 0;
  const avgAccuracy = games ? Math.round((stats.accuracyTotal || 0) / games) : 0;
  const favoriteOpening = currentUser?.favoriteOpening;
  const botProgress = getBotProgress(stats);
  return [
    { title: "First Sit-Down", detail: "Finish 1 game", unlocked: games >= 1 },
    { title: "First Win", detail: "Win a game", unlocked: (stats.wins ?? 0) >= 1 },
    { title: "Club Regular", detail: "Finish 10 games", unlocked: games >= 10 },
    { title: "Sharp Review", detail: "Average 80% accuracy", unlocked: avgAccuracy >= 80 && games >= 3 },
    { title: "Tactic Spark", detail: "Solve 5 puzzles", unlocked: solved >= 5 },
    { title: "Puzzle Streak", detail: "Reach a 5 streak", unlocked: bestStreak >= 5 },
    { title: "Opening Student", detail: "Save a favorite opening", unlocked: Boolean(favoriteOpening) },
    { title: "Bot Breakthrough", detail: "Beat any bot", unlocked: botProgress.count >= 1 },
    { title: "Climbed the Ladder", detail: "Beat 5 bots", unlocked: botProgress.count >= 5 },
    { title: "Table Veteran", detail: "Play 25 games", unlocked: games >= 25 },
  ];
}

function getAvatarGlyph(avatar = "king") {
  return {
    bishop: "B",
    king: "K",
    knight: "N",
    queen: "Q",
    rook: "R",
  }[avatar] ?? "K";
}

function renderSettingsOverview({ modeLabel, clockLabel, themeLabel, pieceLabel }) {
  if (!settingsOverview) return;
  settingsOverview.innerHTML = `
    <article class="settings-menu-card"><span>Game Setup</span><strong>${escapeHtml(modeLabel)}</strong><p>${escapeHtml(clockLabel)} / ${escapeHtml(difficultySettings[difficultySelect.value]?.botName ?? "Local players")}.</p></article>
    <article class="settings-menu-card"><span>Board</span><strong>${escapeHtml(themeLabel)}</strong><p>${escapeHtml(pieceLabel)} pieces with saved visual preferences.</p></article>
    <article class="settings-menu-card"><span>Helpers</span><strong>${isCoachEnabled() ? "Coach on" : "Coach off"}</strong><p>${isOpeningEnabled() ? "Opening cards on" : "Opening cards off"} / settings apply immediately.</p></article>
  `;
}

function setProfilePictureStatus(message) {
  if (profilePictureStatus) profilePictureStatus.textContent = message;
}

function hasUnsafeImageFilename(name = "") {
  return /\b(nude|naked|porn|xxx|sex|explicit|nsfw|onlyfans|fetish|gore|blood|kill)\b/i.test(name);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(new Error("Could not read that photo.")));
    reader.readAsDataURL(file);
  });
}

function loadImageForCheck(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("That file did not load as an image.")));
    image.src = src;
  });
}

async function prepareProfilePicture(file) {
  const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!allowedTypes.has(file.type)) {
    throw new Error("Use a JPG, PNG, or WebP photo.");
  }
  if (file.size > 1_200_000) {
    throw new Error("Choose a photo under 1.2 MB.");
  }
  if (hasUnsafeImageFilename(file.name)) {
    throw new Error("That filename looks inappropriate. Choose a different photo.");
  }

  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImageForCheck(dataUrl);
  if (image.naturalWidth < 96 || image.naturalHeight < 96) {
    throw new Error("Choose a clearer photo at least 96 x 96.");
  }
  if (image.naturalWidth > 2400 || image.naturalHeight > 2400) {
    throw new Error("Choose a smaller photo under 2400 pixels wide or tall.");
  }
  return dataUrl;
}

function renderPlayContextStrip({ modeLabel, clockLabel, themeLabel, pieceLabel, difficulty }) {
  if (!playContextStrip) return;
  const opponent = isPracticeMode()
    ? getCurrentPuzzle().title
    : isOnlineMode()
      ? onlineRoomCode
        ? `Room ${onlineRoomCode}`
        : "Friend room"
      : getComputerColor()
        ? `${difficulty.botName} ${difficulty.elo}`
        : "Local players";
  playContextStrip.innerHTML = `
    <span><strong>Mode</strong>${escapeHtml(modeLabel)}</span>
    <span><strong>Opponent</strong>${escapeHtml(opponent)}</span>
    <span><strong>Clock</strong>${escapeHtml(clockLabel)}</span>
    <span><strong>Look</strong>${escapeHtml(themeLabel)} / ${escapeHtml(pieceLabel)}</span>
  `;
}

function getAccountCredentials(source = "panel") {
  const usernameInput = source === "auth" ? authUsername : accountUsername;
  const passwordInput = source === "auth" ? authPassword : accountPassword;
  const recoveryInput = source === "auth" ? authRecoveryAnswer : accountRecoveryAnswer;
  return {
    username: usernameInput?.value.trim() ?? "",
    password: passwordInput?.value ?? "",
    recoveryAnswer: recoveryInput?.value.trim() ?? "",
    passwordInput,
    recoveryInput,
  };
}

function setAuthStatus(message) {
  if (authStatus) authStatus.textContent = message;
}

function togglePasswordVisibility(input, button) {
  if (!input || !button) return;
  input.type = input.type === "password" ? "text" : "password";
  button.textContent = input.type === "password" ? "Show" : "Hide";
}

function syncStartControlsFromSettings() {
  startModeSelect.value = modeSelect.value === "practice" ? "white" : modeSelect.value;
  startDifficultySelect.value = difficultySelect.value;
  startClockSelect.value = clockSelect.value;
  startThemeSelect.value = themeSelect.value;
  startCoachToggle.checked = isCoachEnabled();
  startOpeningToggle.checked = isOpeningEnabled();
  updateStartFieldsVisibility();
  updateStartBotPreview();
}

function applyStartScreenChoices() {
  if (!currentUser) {
    openAuthScreen("Please log in before starting a game.");
    return;
  }

  const previousMode = modeSelect.value;
  modeSelect.value = startModeSelect.value;
  difficultySelect.value = startDifficultySelect.value;
  clockSelect.value = startClockSelect.value;
  themeSelect.value = startThemeSelect.value;

  saveSetting(settingKeys.mode, modeSelect.value);
  if (modeSelect.value !== "practice") saveSetting(settingKeys.playMode, modeSelect.value);
  saveSetting(settingKeys.difficulty, difficultySelect.value);
  saveSetting(settingKeys.clock, clockSelect.value);
  saveSetting(settingKeys.theme, themeSelect.value);
  saveSetting(settingKeys.coachEnabled, startCoachToggle.checked);
  saveSetting(settingKeys.openingEnabled, startOpeningToggle.checked);

  if (previousMode !== "online" || modeSelect.value !== "online") {
    closeOnlineConnection(modeSelect.value !== "online");
  }
  if (modeSelect.value === "online") {
    setOnlineStatus("Create an invite as White, or paste a friend's invite and join as Black.");
    onlineSection.open = true;
  }

  applyVisualSettings();
  renderBotCard();
  closeStartScreen();
  startNewGame();
  switchAppTab("play");
}

function startPuzzleRun() {
  if (!currentUser) {
    openAuthScreen("Please log in before starting puzzles.");
    return;
  }

  const previousMode = modeSelect.value;
  if (previousMode !== "practice" && previousMode !== "online") saveSetting(settingKeys.playMode, previousMode);
  modeSelect.value = "practice";
  saveSetting(settingKeys.mode, "practice");
  puzzleRun = createPuzzleRunState();

  if (previousMode === "online") {
    closeOnlineConnection(true);
  }

  closeStartScreen();
  resetReviewState();
  startNewGame();
  switchAppTab("puzzles");
}

function updateStartFieldsVisibility() {
  const shouldHideBot = startModeSelect.value === "human" || startModeSelect.value === "online";
  startBotField.hidden = shouldHideBot;
  if (startBotCards) startBotCards.hidden = shouldHideBot;
}

function updateStartBotPreview() {
  const difficulty = difficultySettings[startDifficultySelect.value] ?? difficultySettings.medium;
  const isHumanGame = startModeSelect.value === "human";
  const isOnline = startModeSelect.value === "online";
  startBotAvatar.dataset.bot = isHumanGame || isOnline ? "human" : difficulty.theme;
  startBotName.textContent = isOnline ? "Online Friend" : isHumanGame ? "Local Players" : difficulty.botName;
  startBotElo.textContent = isOnline ? "Peer match" : isHumanGame ? "No bot" : difficulty.elo;
  startBotStyle.textContent = isHumanGame
    ? "Pass the board back and forth with a friend."
    : isOnline
        ? "Trade an invite code and play from two different devices."
    : difficulty.persona;
  renderStartBotCards();
}

function renderStartBotCards() {
  if (!startBotCards) return;
  startBotCards.innerHTML = Object.entries(difficultySettings)
    .map(([key, bot]) => {
      const active = key === startDifficultySelect.value;
      return `
        <button class="bot-option-card ${active ? "active" : ""}" type="button" data-bot-option="${escapeHtml(key)}">
          <span class="bot-avatar" data-bot="${escapeHtml(bot.theme)}" aria-hidden="true">
            <span class="avatar-head"></span>
            <span class="avatar-hair"></span>
            <span class="avatar-shirt"></span>
          </span>
          <span class="bot-option-copy">
            <strong>${escapeHtml(bot.botName)}</strong>
            <small>${escapeHtml(bot.elo)} / ${escapeHtml(getBotStyleLabel(bot.style))}</small>
            <em>${escapeHtml(bot.persona)}</em>
            <b>Weakness: ${escapeHtml(bot.weakness || "Unknown")}</b>
          </span>
        </button>
      `;
    })
    .join("");
}

function getBotStyleLabel(style) {
  return (
    {
      beginner: "Learner",
      casual: "Casual",
      club: "Club",
      strong: "Tactical",
      expert: "Engine-like",
    }[style] || "Bot"
  );
}

function isOnlineMode() {
  return modeSelect.value === "online";
}

function getApiBase() {
  const saved = window.localStorage.getItem(settingKeys.apiBase);
  const host = window.location.hostname;
  const isLocalHost = host === "localhost" || host === "127.0.0.1" || host === "::1";
  const isPrivateLanHost =
    /^10\./.test(host) ||
    /^192\.168\./.test(host) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
    host.endsWith(".local");
  if (saved !== null) {
    const trimmed = saved.trim();
    const savedIsLocal = /^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(trimmed);
    const savedLocalPort = savedIsLocal ? new URL(trimmed).port : "";
    if (!trimmed && (isLocalHost || isPrivateLanHost)) {
      window.localStorage.removeItem(settingKeys.apiBase);
    } else if ((isLocalHost || isPrivateLanHost) && (trimmed.startsWith("/") || (savedIsLocal && savedLocalPort !== "8787"))) {
      window.localStorage.removeItem(settingKeys.apiBase);
    } else if (!isLocalHost && savedIsLocal) {
      window.localStorage.removeItem(settingKeys.apiBase);
    } else {
      return trimmed;
    }
  }
  if (isPrivateLanHost) return `${window.location.protocol}//${host}:8787`;
  return isLocalHost ? "http://localhost:8787" : "";
}

function getLocalApiFallbackBase() {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "::1") return "http://localhost:8787";
  if (
    /^10\./.test(host) ||
    /^192\.168\./.test(host) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
    host.endsWith(".local")
  ) {
    return `${window.location.protocol}//${host}:8787`;
  }
  return "";
}

function loadSavedUser() {
  try {
    return JSON.parse(window.localStorage.getItem(settingKeys.accountUser) || "null");
  } catch {
    return null;
  }
}

async function validateSavedSession() {
  if (!accountToken || !currentUser) {
    openAuthScreen();
    return;
  }
  try {
    const body = await apiRequest("/api/me");
    saveAccountSession(accountToken, body.user);
    showLoggedInShell();
  } catch (error) {
    clearAccountSession();
    openAuthScreen("Log in to continue.");
  }
}

function saveAccountSession(token, user) {
  accountToken = token;
  currentUser = user;
  window.localStorage.setItem(settingKeys.accountToken, token);
  window.localStorage.setItem(settingKeys.accountUser, JSON.stringify(user));
  renderAccount();
  loadFriends();
}

function updateCurrentUser(user) {
  currentUser = user;
  window.localStorage.setItem(settingKeys.accountUser, JSON.stringify(user));
  renderAccount();
  renderStats();
}

function clearAccountSession() {
  accountToken = "";
  currentUser = null;
  latestRecoveryNotice = "";
  friendsState = { friends: [], incoming: [], outgoing: [], invites: [] };
  friendSearchState = [];
  window.localStorage.removeItem(settingKeys.accountToken);
  window.localStorage.removeItem(settingKeys.accountUser);
  stopOnlinePolling();
  renderAccount();
  renderFriendsPanel();
  renderHomeDashboard();
}

async function apiRequest(path, options = {}) {
  let response;
  const apiBase = getApiBase();
  const makeRequest = (base) =>
    fetch(`${base}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(accountToken ? { Authorization: `Bearer ${accountToken}` } : {}),
        ...(options.headers ?? {}),
      },
    });
  try {
    response = await makeRequest(apiBase);
  } catch {
    const target = apiBase || "this site's /api function";
    throw new Error(`Account server is not reachable at ${target}. If this is deployed, check the Netlify function or API base URL.`);
  }
  const contentType = response.headers.get("content-type") || "";
  const fallbackBase = getLocalApiFallbackBase();
  if (fallbackBase && apiBase !== fallbackBase && (!contentType.includes("application/json") || response.status === 502)) {
    response = await makeRequest(fallbackBase);
  }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(body.error || `Server request failed (${response.status}).`);
    Object.assign(error, body);
    throw error;
  }
  return body;
}

async function loginAccount(source = "panel") {
  const credentials = getAccountCredentials(source);
  if (!credentials.username || !credentials.password) {
    const message = "Enter a username and password.";
    setAccountStatus(message);
    setAuthStatus(message);
    return;
  }

  try {
    const body = await apiRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({ username: credentials.username, password: credentials.password }),
    });
    latestRecoveryNotice = "";
    saveAccountSession(body.token, body.user);
    if (credentials.passwordInput) credentials.passwordInput.value = "";
    if (authPassword) authPassword.value = "";
    if (accountPassword) accountPassword.value = "";
    closeAuthScreen();
    setOnlineStatus("Signed in. You can create or join an online room.");
    showLoggedInShell("home");
  } catch (error) {
    setAccountStatus(error.message);
    setAuthStatus(error.message);
  }
}

async function signupAccount(source = "panel") {
  const credentials = getAccountCredentials(source);
  if (!credentials.username || !credentials.password || !credentials.recoveryAnswer) {
    const message = "Enter a username, password, and favorite pet name.";
    setAccountStatus(message);
    setAuthStatus(message);
    return;
  }

  try {
    const body = await apiRequest("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
        recoveryAnswer: credentials.recoveryAnswer,
      }),
    });
    latestRecoveryNotice = "Recovery answer saved. Use it if you forget your password.";
    saveAccountSession(body.token, body.user);
    if (credentials.passwordInput) credentials.passwordInput.value = "";
    if (credentials.recoveryInput) credentials.recoveryInput.value = "";
    if (authPassword) authPassword.value = "";
    if (authRecoveryAnswer) authRecoveryAnswer.value = "";
    if (accountPassword) accountPassword.value = "";
    if (accountRecoveryAnswer) accountRecoveryAnswer.value = "";
    closeAuthScreen();
    setOnlineStatus("Account created. You can create or join an online room.");
    showLoggedInShell("home");
  } catch (error) {
    setAccountStatus(error.message);
    setAuthStatus(error.message);
  }
}

async function resetForgottenPassword() {
  const username = forgotUsername?.value.trim();
  const recoveryAnswer = forgotRecoveryAnswer?.value.trim();
  const password = forgotPassword?.value;
  if (!username || !recoveryAnswer || !password) {
    setAuthStatus("Enter username, favorite pet name, and a new password.");
    return;
  }
  try {
    const body = await apiRequest("/api/password/reset", {
      method: "POST",
      body: JSON.stringify({ password, recoveryAnswer, username }),
    });
    saveAccountSession(body.token, body.user);
    forgotRecoveryAnswer.value = "";
    forgotPassword.value = "";
    forgotPasswordPanel.hidden = true;
    closeAuthScreen();
    setOnlineStatus("Password reset. You are signed in.");
    showLoggedInShell("home");
  } catch (error) {
    setAuthStatus(error.message);
  }
}

function showLoginStep(message = "Log in or create an account to continue.") {
  if (authLoginBtn) authLoginBtn.hidden = false;
  if (authSignupBtn) authSignupBtn.hidden = false;
  setAuthStatus(message);
}

function logoutAccount() {
  clearAccountSession();
  setOnlineStatus("Signed out.");
  openAuthScreen("Signed out. Log in to play again.");
}

function setAccountStatus(message) {
  if (accountStatus) accountStatus.textContent = message;
}

function renderAccount() {
  if (!accountSection) return;
  accountForm.hidden = Boolean(currentUser);
  profilePanel.hidden = !currentUser;
  logoutBtn.hidden = !currentUser;
  if (currentUser && !profilePanel.contains(document.activeElement)) {
    profileDisplayName.value = currentUser.displayName || currentUser.username;
    profileUsername.value = currentUser.username || "";
    profileAvatar.value = currentUser.avatar || "king";
    if (profilePicture) profilePicture.value = currentUser.picture || "";
    setProfilePictureStatus("Photos are checked locally for type, size, dimensions, and unsafe filename terms.");
    if (profileFavoriteOpening) profileFavoriteOpening.value = currentUser.favoriteOpening || "";
    if (profileLocation) profileLocation.value = currentUser.location || "";
    if (profileBio) profileBio.value = currentUser.bio || "";
  }
  if (recoveryNotice) {
    recoveryNotice.hidden = !latestRecoveryNotice && currentUser?.hasRecoveryAnswer;
    recoveryNotice.textContent =
      latestRecoveryNotice ||
      (currentUser?.hasRecoveryAnswer
        ? ""
        : "Add a recovery answer now so you can reset your password later without email.");
  }
  setAccountStatus(
    currentUser
      ? `Signed in as ${currentUser.username}. Games: ${currentUser.stats?.games ?? 0}. Puzzle streak: ${currentUser.puzzle?.streak ?? 0}.`
      : "Sign in to save stats and play online.",
  );
  renderFriendsPanel();
}

async function saveProfile() {
  try {
    const body = await apiRequest("/api/profile", {
      method: "PATCH",
      body: JSON.stringify({
        avatar: profileAvatar.value,
        bio: profileBio?.value || "",
        displayName: profileDisplayName.value,
        favoriteOpening: profileFavoriteOpening?.value || "",
        location: profileLocation?.value || "",
        picture: profilePicture?.value || "",
        username: profileUsername.value,
      }),
    });
    updateCurrentUser(body.user);
    setAccountStatus("Profile saved.");
    await loadFriends();
  } catch (error) {
    setAccountStatus(error.message);
  }
}

async function createNewRecoveryCode() {
  const recoveryAnswer = profileRecoveryAnswer?.value.trim();
  if (!recoveryAnswer) {
    setAccountStatus("Enter a favorite pet name to save as your recovery answer.");
    return;
  }
  try {
    const body = await apiRequest("/api/profile/recovery-answer", {
      method: "POST",
      body: JSON.stringify({ recoveryAnswer }),
    });
    latestRecoveryNotice = "Recovery answer updated.";
    if (profileRecoveryAnswer) profileRecoveryAnswer.value = "";
    updateCurrentUser(body.user);
    setAccountStatus("Recovery answer saved.");
  } catch (error) {
    setAccountStatus(error.message);
  }
}

async function changeAccountPassword() {
  try {
    const body = await apiRequest("/api/profile/password", {
      method: "POST",
      body: JSON.stringify({ currentPassword: currentPassword.value, password: newPassword.value }),
    });
    currentPassword.value = "";
    newPassword.value = "";
    updateCurrentUser(body.user);
    setAccountStatus("Password changed.");
  } catch (error) {
    setAccountStatus(error.message);
  }
}

async function resetAccountStats() {
  try {
    const body = await apiRequest("/api/profile/stats/reset", { method: "POST", body: "{}" });
    updateCurrentUser(body.user);
    setAccountStatus("Stats reset.");
  } catch (error) {
    setAccountStatus(error.message);
  }
}

async function deleteAccount() {
  if (!window.confirm("Delete this account and all local online data?")) return;
  try {
    await apiRequest("/api/account", { method: "DELETE" });
    clearAccountSession();
    openAuthScreen("Account deleted. Create a new account to play.");
  } catch (error) {
    setAccountStatus(error.message);
  }
}

function setOnlineStatus(message) {
  if (onlineStatus) onlineStatus.textContent = message;
  renderFriendRoomSummary();
}

function setFriendsStatus(message) {
  if (friendsStatus) friendsStatus.textContent = message;
  renderFriendsOverview();
}

async function loadFriends() {
  if (!currentUser || !friendsSection) {
    renderFriendsPanel();
    return;
  }
  try {
    friendsState = await apiRequest("/api/friends");
    renderFriendsPanel();
  } catch (error) {
    setFriendsStatus(error.message);
  }
}

async function searchFriends() {
  if (!currentUser) {
    setFriendsStatus("Sign in before searching for friends.");
    return;
  }
  const query = friendSearchInput?.value.trim() ?? "";
  if (query.length < 2) {
    setFriendsStatus("Type at least 2 letters.");
    return;
  }
  try {
    const body = await apiRequest(`/api/users/search?q=${encodeURIComponent(query)}`);
    friendSearchState = body.users ?? [];
    setFriendsStatus(friendSearchState.length ? "Choose a player to add." : "No players found.");
    renderFriendsPanel();
  } catch (error) {
    setFriendsStatus(error.message);
  }
}

async function sendFriendRequest(username) {
  try {
    friendsState = await apiRequest("/api/friends/requests", {
      method: "POST",
      body: JSON.stringify({ username }),
    });
    friendSearchState = [];
    setFriendsStatus(`Friend request sent to ${username}.`);
    renderFriendsPanel();
  } catch (error) {
    setFriendsStatus(error.message);
  }
}

async function respondToFriendRequest(id, action) {
  try {
    friendsState = await apiRequest(`/api/friends/requests/${id}/${action}`, { method: "POST", body: "{}" });
    setFriendsStatus(action === "accept" ? "Friend request accepted." : "Friend request declined.");
    renderFriendsPanel();
  } catch (error) {
    setFriendsStatus(error.message);
  }
}

async function removeFriend(id) {
  try {
    friendsState = await apiRequest(`/api/friends/${id}/remove`, { method: "POST", body: "{}" });
    setFriendsStatus("Friend removed.");
    renderFriendsPanel();
  } catch (error) {
    setFriendsStatus(error.message);
  }
}

async function inviteFriendToGame(friendId) {
  if (!currentUser) return;
  modeSelect.value = "online";
  startModeSelect.value = "online";
  saveSetting(settingKeys.mode, "online");
  try {
    const { room, color } = await apiRequest("/api/rooms/friend", {
      method: "POST",
      body: JSON.stringify({ friendId }),
    });
    closeStartScreen();
    startBackendRoom(room, color);
    setOnlineStatus(`Invited ${room.invitedUsername || "your friend"} to room ${room.code}.`);
    friendsSection.open = true;
    onlineSection.open = true;
    await loadFriends();
  } catch (error) {
    setFriendsStatus(error.message);
  }
}

async function joinFriendInvite(code) {
  modeSelect.value = "online";
  startModeSelect.value = "online";
  saveSetting(settingKeys.mode, "online");
  if (onlineInput) onlineInput.value = code;
  closeStartScreen();
  await joinBackendRoom();
  await loadFriends();
}

function renderFriendList(container, items, emptyText, renderItem) {
  if (!container) return;
  container.innerHTML = "";
  if (!items?.length) {
    const empty = document.createElement("p");
    empty.className = "friend-empty";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }
  items.forEach((item) => container.append(renderItem(item)));
}

function makeFriendRow(title, detail, actions = []) {
  const row = document.createElement("div");
  row.className = "friend-row";
  const text = document.createElement("div");
  const name = document.createElement("strong");
  const meta = document.createElement("span");
  name.textContent = title;
  meta.textContent = detail;
  text.append(name, meta);
  const actionWrap = document.createElement("div");
  actionWrap.className = "friend-row-actions";
  actions.forEach(({ label, onClick, secondary }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = secondary ? "secondary" : "";
    button.textContent = label;
    button.addEventListener("click", onClick);
    actionWrap.append(button);
  });
  row.append(text, actionWrap);
  return row;
}

function renderFriendsPanel() {
  if (!friendsSection) return;
  friendsSection.hidden = !currentUser;
  renderFriendList(friendSearchResults, friendSearchState, "Search usernames to add friends.", (user) =>
    makeFriendRow(user.username, "Player", [{ label: "Add", onClick: () => sendFriendRequest(user.username) }]),
  );
  renderFriendList(friendsList, friendsState.friends, "No friends yet.", (friend) =>
    makeFriendRow(friend.username, "Friend", [
      { label: "Invite", onClick: () => inviteFriendToGame(friend.id) },
      { label: "Remove", onClick: () => removeFriend(friend.id), secondary: true },
    ]),
  );
  renderFriendList(
    friendRequestsList,
    [
      ...(friendsState.incoming ?? []).map((request) => ({ ...request, kind: "incoming" })),
      ...(friendsState.outgoing ?? []).map((request) => ({ ...request, kind: "outgoing" })),
    ],
    "No pending requests.",
    (request) =>
      request.kind === "incoming"
        ? makeFriendRow(request.from.username, "Wants to be friends", [
            { label: "Accept", onClick: () => respondToFriendRequest(request.id, "accept") },
            { label: "Decline", onClick: () => respondToFriendRequest(request.id, "decline"), secondary: true },
          ])
        : makeFriendRow(request.to.username, "Request pending", []),
  );
  renderFriendList(friendInvitesList, friendsState.invites, "No game invites.", (room) =>
    makeFriendRow(room.players.whiteUsername || "Friend", `Room ${room.code}`, [
      { label: "Join", onClick: () => joinFriendInvite(room.code) },
    ]),
  );
  renderFriendsOverview();
  renderFriendRoomSummary();
}

async function createBackendRoom() {
  if (!isOnlineMode()) {
    setOnlineStatus("Switch to Online Friend Match first.");
    return;
  }
  if (!currentUser) {
    setOnlineStatus("Sign in before creating an online room.");
    accountSection.open = true;
    return;
  }
  try {
    const { room, color } = await apiRequest("/api/rooms", { method: "POST", body: "{}" });
    startBackendRoom(room, color);
    onlineOutput.value = room.code;
    setOnlineStatus(`Room ${room.code} created. Send that code to your friend.`);
  } catch (error) {
    setOnlineStatus(error.message);
  }
}

async function joinBackendRoom() {
  if (!isOnlineMode()) {
    setOnlineStatus("Switch to Online Friend Match first.");
    return;
  }
  if (!currentUser) {
    setOnlineStatus("Sign in before joining an online room.");
    accountSection.open = true;
    return;
  }
  const code = onlineInput.value.trim().toUpperCase();
  if (!code) {
    setOnlineStatus("Enter the room code your friend sent.");
    return;
  }
  try {
    const { room, color } = await apiRequest(`/api/rooms/${code}/join`, { method: "POST", body: "{}" });
    startBackendRoom(room, color);
    setOnlineStatus(`Joined room ${room.code}. You are ${color === "w" ? "White" : "Black"}.`);
  } catch (error) {
    setOnlineStatus(error.message);
  }
}

function startBackendRoom(room, color) {
  onlineRoomCode = room.code;
  onlineRoomColor = color;
  onlineLocalColor = color;
  onlineConnected = room.status === "playing";
  onlineRole = color === "w" ? "host" : "guest";
  onlineOutput.value = room.code;
  onlineRoomLastMoveCount = 0;
  chess = new Chess();
  resetReviewState();
  resetClockState();
  resetEnginePositionState();
  resetDisplayedEvaluation();
  clearSelection();
  clearPremove();
  applyRoomSnapshot(room);
  startOnlinePolling();
  renderBotCard();
  render();
}

function startOnlinePolling() {
  stopOnlinePolling();
  onlinePollTimer = window.setInterval(pollOnlineRoom, 1200);
}

function stopOnlinePolling() {
  if (!onlinePollTimer) return;
  window.clearInterval(onlinePollTimer);
  onlinePollTimer = null;
}

async function pollOnlineRoom() {
  if (!onlineRoomCode || !currentUser) return;
  try {
    const { room } = await apiRequest(`/api/rooms/${onlineRoomCode}`);
    applyRoomSnapshot(room);
    const turnName = chess.turn() === onlineLocalColor ? "your turn" : "friend's turn";
    setOnlineStatus(
      room.status === "waiting"
        ? `Room ${room.code} is waiting for ${room.invitedUsername || "your friend"}.`
        : `Room ${room.code} connected. You are ${onlineRoomColor === "w" ? "White" : "Black"}; ${turnName}.`,
    );
  } catch (error) {
    setOnlineStatus(error.message);
  }
}

function applyRoomSnapshot(room) {
  onlineConnected = room.status === "playing";
  const moves = room.moves ?? [];
  const newMoves = moves.slice(onlineRoomLastMoveCount);
  for (const entry of newMoves) {
    if (entry.userId === currentUser?.id) continue;
    applyingRemoteMove = true;
    const move = makeTrackedMove(entry.move);
    applyingRemoteMove = false;
    if (move) {
      afterMovePlayed(move.color);
      if (finishQueuedPremove()) render();
      else setMoveFeedback(`Friend played ${move.san}.`, "");
    }
  }
  onlineRoomLastMoveCount = moves.length;
  renderBotCard();
  render();
}

function encodeOnlineCode(value) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(value))));
}

function decodeOnlineCode(value) {
  return JSON.parse(decodeURIComponent(escape(atob(value.trim()))));
}

function createOnlinePeer() {
  closeOnlineConnection(false);
  const peer = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });
  onlinePeer = peer;
  peer.addEventListener("connectionstatechange", () => {
    if (["failed", "closed", "disconnected"].includes(peer.connectionState)) {
      onlineConnected = false;
      setOnlineStatus("Connection closed. Create or join a new invite.");
      renderBotCard();
      render();
    }
  });
  return peer;
}

function setupOnlineChannel(channel) {
  onlineChannel = channel;
  channel.addEventListener("open", () => {
    onlineConnected = true;
    setOnlineStatus(`Connected. You are ${onlineLocalColor === "w" ? "White" : "Black"}.`);
    if (onlineRole === "host") sendOnlineMessage({ type: "sync", fen: chess.fen() });
    renderBotCard();
    render();
  });
  channel.addEventListener("close", () => {
    onlineConnected = false;
    setOnlineStatus("Connection closed.");
    renderBotCard();
    render();
  });
  channel.addEventListener("message", (event) => {
    handleOnlineMessage(event.data);
  });
}

async function waitForIceGathering(peer) {
  if (peer.iceGatheringState === "complete") return;
  await new Promise((resolve) => {
    const done = () => {
      if (peer.iceGatheringState === "complete") {
        peer.removeEventListener("icegatheringstatechange", done);
        resolve();
      }
    };
    peer.addEventListener("icegatheringstatechange", done);
    window.setTimeout(resolve, 1800);
  });
}

async function createOnlineInvite() {
  if (!isOnlineMode()) {
    setOnlineStatus("Switch the mode to Online Friend Match first.");
    return;
  }
  const peer = createOnlinePeer();
  onlineRole = "host";
  onlineLocalColor = "w";
  setupOnlineChannel(peer.createDataChannel("chess-table"));
  await peer.setLocalDescription(await peer.createOffer());
  await waitForIceGathering(peer);
  onlineOutput.value = encodeOnlineCode(peer.localDescription);
  setOnlineStatus("Invite ready. Send this code to your friend, then paste their answer here.");
  render();
}

async function joinOnlineInvite() {
  if (!isOnlineMode()) {
    setOnlineStatus("Switch the mode to Online Friend Match first.");
    return;
  }
  let offer;
  try {
    offer = decodeOnlineCode(onlineInput.value);
  } catch {
    setOnlineStatus("That invite code did not read right.");
    return;
  }

  const peer = createOnlinePeer();
  onlineRole = "guest";
  onlineLocalColor = "b";
  peer.addEventListener("datachannel", (event) => setupOnlineChannel(event.channel));
  await peer.setRemoteDescription(offer);
  await peer.setLocalDescription(await peer.createAnswer());
  await waitForIceGathering(peer);
  onlineOutput.value = encodeOnlineCode(peer.localDescription);
  setOnlineStatus("Answer ready. Send this code back to the host.");
  render();
}

async function acceptOnlineAnswer() {
  if (!onlinePeer || onlineRole !== "host") {
    setOnlineStatus("Create an invite first, then paste your friend's answer.");
    return;
  }
  try {
    await onlinePeer.setRemoteDescription(decodeOnlineCode(onlineInput.value));
    setOnlineStatus("Answer accepted. Waiting for the connection to open.");
  } catch {
    setOnlineStatus("That answer code did not work.");
  }
}

function closeOnlineConnection(clearCodes = true) {
  stopOnlinePolling();
  onlineChannel?.close();
  onlinePeer?.close();
  onlinePeer = null;
  onlineChannel = null;
  onlineRole = null;
  onlineLocalColor = null;
  onlineConnected = false;
  onlineRoomCode = "";
  onlineRoomColor = null;
  onlineRoomLastMoveCount = 0;
  if (clearCodes) {
    if (onlineInput) onlineInput.value = "";
    if (onlineOutput) onlineOutput.value = "";
  }
}

function sendOnlineMessage(message) {
  if (!onlineChannel || onlineChannel.readyState !== "open") return;
  onlineChannel.send(JSON.stringify(message));
}

async function sendOnlineMove(review) {
  if (!isOnlineMode() || applyingRemoteMove || !onlineConnected || !review) return;
  const movePayload = {
    from: review.from,
    promotion: review.uci.length > 4 ? review.uci[4] : undefined,
    to: review.to,
  };
  if (onlineRoomCode) {
    try {
      const { room } = await apiRequest(`/api/rooms/${onlineRoomCode}/moves`, {
        method: "POST",
        body: JSON.stringify({ move: movePayload, fen: chess.fen() }),
      });
      onlineRoomLastMoveCount = room.moves?.length ?? onlineRoomLastMoveCount;
      setOnlineStatus(`Move sent in room ${room.code}.`);
    } catch (error) {
      setOnlineStatus(error.message);
    }
    return;
  }
  sendOnlineMessage({
    type: "move",
    move: movePayload,
  });
}

function handleOnlineMessage(rawMessage) {
  let message;
  try {
    message = JSON.parse(rawMessage);
  } catch {
    return;
  }

  if (message.type === "sync" && message.fen) {
    chess = new Chess(message.fen);
    clearSelection();
    clearPremove();
    setMoveFeedback("Online game synced.", "good");
    render();
    return;
  }

  if (message.type !== "move" || !message.move) return;
  applyingRemoteMove = true;
  const move = makeTrackedMove(message.move);
  applyingRemoteMove = false;
  if (!move) {
    setOnlineStatus("Your friend's move could not be played here.");
    return;
  }
  afterMovePlayed(move.color);
  if (finishQueuedPremove()) {
    render();
    return;
  } else {
    clearSelection();
    clearPremove();
  }
  setMoveFeedback(`Friend played ${move.san}.`, "");
  render();
}

function isOnlineRemoteTurn() {
  return Boolean(isOnlineMode() && onlineConnected && onlineLocalColor && chess.turn() !== onlineLocalColor);
}

function getCurrentPuzzle() {
  return puzzles[currentPuzzleIndex % puzzles.length];
}

function createPuzzleRunState() {
  return {
    bestStreak: 0,
    goal: 10,
    missed: 0,
    solved: 0,
    startedAt: Date.now(),
    streak: 0,
  };
}

function getPuzzleRunAttempts() {
  return puzzleRun.solved + puzzleRun.missed;
}

function getPuzzleRunAccuracy() {
  const attempts = getPuzzleRunAttempts();
  return attempts ? Math.round((puzzleRun.solved / attempts) * 100) : 100;
}

function recordPuzzleRunResult(solved) {
  if (solved) {
    puzzleRun.solved += 1;
    puzzleRun.streak += 1;
    puzzleRun.bestStreak = Math.max(puzzleRun.bestStreak, puzzleRun.streak);
    return;
  }
  puzzleRun.missed += 1;
  puzzleRun.streak = 0;
}

function getPuzzleRunLabel() {
  const attempts = getPuzzleRunAttempts();
  return `Run ${Math.min(attempts + 1, puzzleRun.goal)} of ${puzzleRun.goal} / ${puzzleRun.solved} solved / ${puzzleRun.missed} missed`;
}

function createPuzzlePosition(puzzle) {
  const position = new Chess(puzzle.fen || undefined);
  for (const san of puzzle.setup ?? []) {
    const move = position.move(san);
    if (!move) throw new Error(`Puzzle setup failed for ${puzzle.id}: ${san}`);
  }
  return position;
}

function loadCurrentPuzzle() {
  const puzzle = getCurrentPuzzle();
  chess = createPuzzlePosition(puzzle);
  pendingPromotion = null;
  lastMove = null;
  puzzleSolved = false;
  currentPuzzleStep = 0;
  puzzleMistakeRecorded = false;
  puzzleSolutionAvailable = false;
  puzzleSolutionReviewed = false;
  cancelPieceDrag();
  resetClockState();
  resetReviewState();
  resetEnginePositionState();
  resetDisplayedEvaluation();
  clearSelection();
  renderBotCard();
  setMoveFeedback(`${getPuzzleProgressLabel()}: Find the best move.`, "good");
  render();
}

function loadNextPuzzle() {
  if (getPuzzleRunAttempts() >= puzzleRun.goal) {
    puzzleRun = createPuzzleRunState();
  }
  currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length;
  loadCurrentPuzzle();
}

function skipCurrentPuzzle() {
  if (!isPracticeMode()) return;
  recordPuzzleResult(false, getCurrentPuzzle());
  currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length;
  loadCurrentPuzzle();
  setMoveFeedback("Skipped. New puzzle loaded.", "alert");
}

function handlePracticeMove(move) {
  if (!isPracticeMode()) return false;

  const puzzle = getCurrentPuzzle();
  const step = puzzle.line[currentPuzzleStep];
  const expectedMove = normalizeUci(step?.move);
  const playedMove = moveToUci(move);
  const isFinalPuzzleStep = currentPuzzleStep >= puzzle.line.length - 1;
  const isAcceptedCheckmate = isFinalPuzzleStep && chess.isCheckmate();

  if (playedMove === expectedMove || isAcceptedCheckmate || (step?.acceptMate && chess.isCheckmate())) {
    if (step?.reply) {
      currentPuzzleStep += 1;
      playSound(move.san.includes("+") ? "check" : "move");
      setMoveFeedback(step.message || "Correct. Keep going.", "good");
      renderBotCard();
      window.setTimeout(() => playPuzzleReply(step.reply), 420);
      return true;
    }
    completePuzzle(step?.success || puzzle.success || "Correct. Nice tactic.");
    return true;
  }

  chess.undo();
  moveReviews.pop();
  lastMove = getLastTrackedMove();
  pendingMoveAnimation = null;
  recordPuzzleResult(false, puzzle);
  puzzleSolutionAvailable = true;
  setMoveFeedback("Not quite. The tactic has a forcing move here. Try again or review the line.", "alert");
  renderCoachTip();
  return true;
}

function playPuzzleReply(replyUci) {
  if (!isPracticeMode() || puzzleSolved) return;
  const reply = normalizeUci(replyUci);
  const move = makeTrackedMove({
    from: reply.slice(0, 2),
    to: reply.slice(2, 4),
    promotion: reply[4],
  });
  if (!move) {
    setMoveFeedback("Puzzle line broke here. Try the next puzzle.", "alert");
    return;
  }
  setMoveFeedback("Find the next best move.", "good");
  clearSelection();
  render();
}

function completePuzzle(message) {
  puzzleSolved = true;
  puzzleSolutionAvailable = true;
  puzzleSolutionReviewed = true;
  recordPuzzleResult(true, getCurrentPuzzle());
  playSound(chess.isCheckmate() ? "gameOver" : "check");
  setMoveFeedback(message, "good");
  renderBotCard();
  showPuzzleDialog(message);
}

async function recordPuzzleResult(solved, puzzle) {
  if (!solved && puzzleMistakeRecorded) return;
  if (!solved) puzzleMistakeRecorded = true;
  recordPuzzleRunResult(solved);
  recordLocalPuzzleProgress(solved);
  renderHomeDashboard();
  if (!accountToken) return;
  try {
    const body = await apiRequest("/api/puzzle-result", {
      method: "POST",
      body: JSON.stringify({ category: puzzle.category, puzzleId: puzzle.id, solved }),
    });
    updateCurrentUser({ ...currentUser, puzzle: body.puzzle });
  } catch {
    // Puzzle play should never stop because the stats server is unavailable.
  }
}

function getPuzzleProgressLabel() {
  const puzzle = getCurrentPuzzle();
  const difficulty = puzzle.difficulty ? `${puzzle.difficulty} · ` : "";
  const level = puzzle.level ? `Level ${puzzle.level} · ` : "";
  return `${getPuzzleRunLabel()} · ${difficulty}${level}Puzzle ${currentPuzzleIndex + 1} of ${puzzles.length}`;
}

function getPuzzleSolutionSans(puzzle = getCurrentPuzzle()) {
  const position = createPuzzlePosition(puzzle);
  const sanLine = [];
  for (const step of puzzle.line) {
    const move = position.move({
      from: step.move.slice(0, 2),
      to: step.move.slice(2, 4),
      promotion: step.move[4],
    });
    if (!move) break;
    sanLine.push(move.san);

    if (step.reply) {
      const replyMove = position.move({
        from: step.reply.slice(0, 2),
        to: step.reply.slice(2, 4),
        promotion: step.reply[4],
      });
      if (!replyMove) break;
      sanLine.push(replyMove.san);
    }
  }
  return sanLine;
}

function getPuzzleSummary(puzzle = getCurrentPuzzle()) {
  const movesToSolve = puzzle.line.length;
  const moveLabel = movesToSolve === 1 ? "1 player move" : `${movesToSolve} player moves`;
  const source = puzzle.source ? ` · ${puzzle.source}` : "";
  return `${puzzle.category || "Tactic"} · ${puzzle.difficulty || "Training"} · ${moveLabel}${source}`;
}

function showPuzzleSolution() {
  if (!isPracticeMode()) return;
  puzzleSolutionAvailable = true;
  puzzleSolutionReviewed = true;
  const puzzle = getCurrentPuzzle();
  const solution = getPuzzleSolutionSans(puzzle).join(" ");
  const message = `Solution: ${solution}`;
  setMoveFeedback(message, "good");
  if (coachTip) coachTip.textContent = `${puzzle.title}: ${message}`;
  renderCoachTip();
}

function showPuzzleDialog(message) {
  const runComplete = getPuzzleRunAttempts() >= puzzleRun.goal;
  const runAccuracy = getPuzzleRunAccuracy();
  const elapsedSeconds = Math.max(1, Math.round((Date.now() - puzzleRun.startedAt) / 1000));
  if (puzzleDialogTitle) {
    puzzleDialogTitle.textContent = runComplete ? "Puzzle run complete" : "Puzzle complete";
  }
  puzzleDialogText.textContent = message;
  if (puzzleDialogSummary) {
    const solution = getPuzzleSolutionSans().join(" ");
    puzzleDialogSummary.textContent = runComplete
      ? `Run result: ${puzzleRun.solved}/${puzzleRun.goal} solved · ${runAccuracy}% · best streak ${puzzleRun.bestStreak} · ${elapsedSeconds}s`
      : `${getPuzzleRunLabel()} · ${getPuzzleSummary()} · ${solution}`;
  }
  if (puzzleNextDialogBtn) puzzleNextDialogBtn.textContent = runComplete ? "Start New Run" : "Next Puzzle";
  if (!puzzleDialog.open) puzzleDialog.showModal();
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
  let move = null;
  try {
    move = chess.move(moveInput);
  } catch {
    return null;
  }
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
    captured: move.captured ?? null,
    color: move.color,
    from: move.from,
    piece: move.piece,
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
  renderOpeningCard();
  renderCoachTip();
  renderStats();
  renderAccount();
  renderEvaluation();
  renderBestMoveArrow();
  renderPremoveArrow();
  renderReview();
  renderClocks();
  renderGameOverDialog();
  runEngineForPosition();
}

function renderStatus() {
  document.body.dataset.mode = isPracticeMode() ? "practice" : isOnlineMode() ? "online" : "game";
  updateHintButtonVisibility();
  renderOnlineControls();
  const turnName = chess.turn() === "w" ? "White" : "Black";
  const manualWinner = getManualWinner();
  turnBadge.textContent = isPracticeMode()
    ? puzzleSolved
      ? "Puzzle solved"
      : "Find best move"
    : agreedDraw
    ? "Draw"
    : manualWinner
      ? `${manualWinner === "w" ? "White" : "Black"} wins`
      : isOnlineMode() && !onlineConnected
        ? "Online setup"
      : isOnlineRemoteTurn()
        ? "Friend to move"
      : isOnlineMode()
        ? "Your move"
      : isComputerTurn()
        ? `${getBotName()} thinking`
        : `${turnName} to move`;

  resignBtn.disabled = isPracticeMode() || isGameFinished();
  drawBtn.disabled = isPracticeMode() || isGameFinished();

  const preview = getActivePreview();

  if (preview) {
    gameState.textContent = `Previewing ${preview.moveNumber}${preview.color === "b" ? "..." : "."} ${preview.san}.`;
  } else if (isPracticeMode()) {
    const puzzle = getCurrentPuzzle();
    gameState.textContent = puzzleSolved
      ? "Solved. Try another puzzle."
      : `${getPuzzleProgressLabel()}: ${puzzle.category || "Tactic"}`;
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
  } else if (isOnlineMode() && !onlineConnected) {
    gameState.textContent = "Connect with an invite code to start.";
  } else if (isOnlineRemoteTurn()) {
    gameState.textContent = "Waiting for your friend.";
  } else if (isOnlineMode()) {
    gameState.textContent = `You are ${onlineLocalColor === "b" ? "Black" : "White"}.`;
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

function updateHintButtonVisibility() {
  const shouldHideHint = modeSelect.value === "human" || modeSelect.value === "online";
  hintBtn.hidden = shouldHideHint;
  if (shouldHideHint && showBestMove) setHintVisible(false);
}

function renderOnlineControls() {
  if (!onlineSection) return;
  onlineSection.hidden = !isOnlineMode();
  const needsAccount = !currentUser;
  onlineHostBtn.disabled = !isOnlineMode() || needsAccount || Boolean(onlineRoomCode);
  onlineJoinBtn.disabled = !isOnlineMode() || needsAccount || Boolean(onlineRoomCode);
  onlineAcceptBtn.disabled = !isOnlineMode() || needsAccount || !onlineRoomCode;
  onlineCopyBtn.disabled = !onlineOutput.value;
  if (friendSearchBtn) friendSearchBtn.disabled = needsAccount;
  if (friendsRefreshBtn) friendsRefreshBtn.disabled = needsAccount;
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
  renderBoardMaterial(capturedByWhite, capturedByBlack);
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

function renderBoardMaterial(capturedByWhite, capturedByBlack) {
  const whiteValue = getCaptureValue(capturedByWhite);
  const blackValue = getCaptureValue(capturedByBlack);
  const whiteAdvantage = whiteValue - blackValue;
  const blackAdvantage = blackValue - whiteValue;
  whiteBoardMaterial.textContent = whiteAdvantage > 0 ? `White +${whiteAdvantage}` : "White even";
  blackBoardMaterial.textContent = blackAdvantage > 0 ? `Black +${blackAdvantage}` : "Black even";
  boardMaterialBar.hidden = whiteAdvantage <= 0 && blackAdvantage <= 0;
  boardMaterialBar.classList.toggle("white-better", whiteAdvantage > 0);
  boardMaterialBar.classList.toggle("black-better", blackAdvantage > 0);
}

function renderOpeningCard() {
  const card = openingCardName.closest(".opening-card");
  card.classList.toggle("hidden-helper", !isOpeningEnabled() || isPracticeMode());
  if (!isOpeningEnabled() || isPracticeMode()) return;
  const opening = getOpeningName();
  openingCardName.textContent = opening || "Starting position";
  openingCardText.textContent = opening ? getOpeningDescription(opening) : "Make a move to reveal the opening family.";
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
  reviewBtn.textContent = reviewOpen ? "Exit Review" : "Start Review";
  reviewSection.open = reviewOpen || reviewSection.open;
  const showReviewControls = reviewOpen && moveReviews.length > 0;
  reviewList.classList.toggle("visible", isReviewReady && moveReviews.length > 0);
  reviewReplay.hidden = !showReviewControls;
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
  reviewSummary.innerHTML = getCompactReviewSummaryMarkup(counts, accuracy);

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
    reviewTopBar.classList.remove("visible");
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
    if (boardReviewRestartBtn) boardReviewRestartBtn.disabled = reviewIndex === 0;
    dockReviewMoveLabel.innerHTML = reviewMoveLabel.innerHTML;
    dockReviewReason.textContent = reviewReason.textContent;
    dockReviewPrevBtn.disabled = reviewPrevBtn.disabled;
    dockReviewNextBtn.disabled = reviewNextBtn.disabled;
  }

  renderReviewList({ active: true });
}

function renderCoachTip() {
  if (!coachTip) return;
  const card = coachTip.closest(".coach-card");
  card.classList.toggle("hidden-helper", !isCoachEnabled() && !isPracticeMode());
  if (!isCoachEnabled() && !isPracticeMode()) return;
  if (puzzleToolbar) puzzleToolbar.hidden = !isPracticeMode();
  retryPuzzleBtn.hidden = !isPracticeMode();
  nextPuzzleBtn.hidden = !isPracticeMode();
  if (reviewPuzzleBtn) reviewPuzzleBtn.hidden = !isPracticeMode() || (!puzzleSolutionAvailable && !puzzleSolved);
  if (skipPuzzleBtn) skipPuzzleBtn.hidden = !isPracticeMode();
  nextPuzzleBtn.disabled = isPracticeMode() && !puzzleSolved;
  coachTip.textContent = getCoachTip();
}

function getCoachTip() {
  if (isPracticeMode()) {
    const puzzle = getCurrentPuzzle();
    if (puzzleSolutionReviewed && !puzzleSolved) {
      return `${puzzle.title}: ${getPuzzleSolutionSans(puzzle).join(" ")}`;
    }
    return puzzleSolved ? `${puzzle.success} Try the next puzzle when ready.` : "Find the best move.";
  }
  if (isGameFinished()) return `Game over. Key moment: ${getKeyMomentLabel()}.`;
  if (reviewOpen) return "Use Prev and Next to replay the story of the game.";
  if (isComputerTurn()) return `${getBotName()} is thinking. Watch the last move and look for threats.`;
  if (chess.isCheck()) return "You are in check. First find every legal king safety move.";
  const legalCaptures = chess.moves({ verbose: true }).filter((move) => move.captured);
  if (legalCaptures.length > 0) {
    const bestCapture = legalCaptures.sort((a, b) => (pieceValues[b.captured] ?? 0) - (pieceValues[a.captured] ?? 0))[0];
    return `There is a capture available: ${bestCapture.san}. Check if it wins material.`;
  }
  if (chess.history().length < 8) return "Opening phase: develop knights and bishops before chasing pawns.";
  const score = getMaterialEvaluation();
  if (Math.abs(score) >= 3) return score > 0 ? "White is up material. Trade carefully and simplify." : "Black is up material. Look for activity before trading.";
  if (getOpeningName()) return "The position is still balanced. Improve your worst piece.";
  return "Look for checks, captures, and threats before choosing a quiet move.";
}

function renderReviewList({ active }) {
  reviewList.innerHTML = "";
  for (const [index, review] of moveReviews.entries()) {
    const item = document.createElement("li");
    const moveNumber = document.createElement("span");
    const color = document.createElement("span");
    const san = document.createElement("span");

    if (active && index === reviewIndex) item.classList.add("active");
    item.classList.add("review-move-row");
    moveNumber.textContent = `${review.moveNumber}${review.color === "b" ? "..." : "."}`;
    color.textContent = review.color === "w" ? "White" : "Black";
    san.textContent = review.san;
    item.title = review.quality;
    item.setAttribute("aria-label", `${moveNumber.textContent} ${color.textContent} ${review.san}. Click to replay this move.`);

    item.append(moveNumber, color, san);
    item.addEventListener("click", () => {
      if (!reviewOpen) startReviewMode(index);
      else setReviewIndex(index);
    });
    reviewList.append(item);
  }
}

function getCompactReviewSummaryMarkup(counts, accuracy) {
  const totalMoves = moveReviews.length;
  const strongMoves = (counts.Book ?? 0) + (counts.Best ?? 0) + (counts.Brilliant ?? 0) + (counts.Excellent ?? 0);
  const misses = (counts.Inaccuracy ?? 0) + (counts.Mistake ?? 0) + (counts.Blunder ?? 0);
  return `
    <div class="review-compact-summary">
      <span><strong>${totalMoves}</strong> moves</span>
      <span><strong>${accuracy.w}%</strong> White</span>
      <span><strong>${accuracy.b}%</strong> Black</span>
      <span><strong>${strongMoves}</strong> strong</span>
      <span><strong>${misses}</strong> misses</span>
    </div>
  `;
}

function renderGameOverDialog() {
  if (isPracticeMode()) return;
  if (!isGameFinished() || gameOverShown) return;

  const result = getGameOverMessage();
  recordFinishedGameStats(result);
  queueAllReviewAnalyses();
  gameOverDialog.dataset.result = result.kind;
  gameOverBadge.textContent = result.badge;
  gameOverTitle.textContent = result.title;
  gameOverText.hidden = false;
  gameOverText.textContent = getPostgameSubtitle(result);
  renderGameOverStats();
  updatePostgameActions();
  gameOverNote.hidden = true;
  gameOverNote.textContent = "";
  setFinalBotComment();
  gameOverShown = true;
  playSound("gameOver");
  setMoveFeedback(result.body, "alert");
  gameOverDialogTimer = window.setTimeout(() => {
    gameOverDialogTimer = null;
    if (!isPracticeMode() && isGameFinished() && !gameOverDialog.open) {
      document.body.classList.add("postgame-modal-open");
      gameOverDialog.showModal();
    }
  }, gameOverDialogDelayMs);
}

function refreshPostgameReport() {
  if (!isGameFinished()) return;
  const result = getGameOverMessage();
  gameOverDialog.dataset.result = result.kind;
  gameOverBadge.textContent = result.badge;
  gameOverTitle.textContent = result.title;
  gameOverText.hidden = false;
  gameOverText.textContent = getPostgameSubtitle(result);
  renderGameOverStats();
}

function queueAllReviewAnalyses() {
  if (!isGameFinished() || moveReviews.length === 0) return;
  for (const review of moveReviews) {
    queueReviewAnalysis(review);
  }
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

function getPostgameSubtitle(result = getGameOverMessage()) {
  const moveCount = chess.history().length;
  const opening = getOpeningName();
  const opponent = getComputerColor() ? `${getBotName()} ${getDifficulty().elo}` : isOnlineMode() ? "Online friend match" : "Local match";
  return [
    result.body,
    `${moveCount} move${moveCount === 1 ? "" : "s"} against ${opponent}.`,
    opening ? `Opening: ${opening}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function renderGameOverStats() {
  const accuracy = getAccuracySummary();
  const result = getGameOverMessage();
  const opening = getOpeningName();
  const opponent = getComputerColor() ? `${getBotName()} ${getDifficulty().elo}` : isOnlineMode() ? "Online friend" : "Local player";
  const moveCount = chess.history().length;
  whiteAccuracy.textContent = `${accuracy.w}%`;
  blackAccuracy.textContent = `${accuracy.b}%`;
  keyMoment.textContent = getKeyMomentLabel();
  bestMoveMoment.textContent = getBestMoveLabel();
  worstMoveMoment.textContent = getWorstMoveLabel();
  if (gameSharePreview) gameSharePreview.textContent = getShareGameText({ includeMoves: false });
  if (shareVisualResult) shareVisualResult.textContent = result.body;
  if (shareVisualMeta) {
    shareVisualMeta.textContent = `${moveCount} move${moveCount === 1 ? "" : "s"} vs ${opponent}${opening ? ` / ${opening}` : ""}`;
  }
  if (shareVisualWhite) shareVisualWhite.textContent = `White ${accuracy.w}%`;
  if (shareVisualBlack) shareVisualBlack.textContent = `Black ${accuracy.b}%`;
  if (shareVisualMoment) shareVisualMoment.textContent = getKeyMomentLabel();
  if (postgameNextSteps) {
    const counts = getReviewCounts();
    postgameNextSteps.innerHTML = `
      <div>
        <span>Move Report</span>
        <strong>${counts.Brilliant ?? 0} brilliant / ${counts.Best ?? 0} best / ${counts.Blunder ?? 0} blunder</strong>
      </div>
      <div>
        <span>What to learn next</span>
        <strong>${escapeHtml(getReviewLearningTarget())}</strong>
      </div>
    `;
  }
}

function updatePostgameActions() {
  dialogChangeBotBtn.textContent = getComputerColor() ? "Change Bot" : "Change Setup";
  dialogShareBtn.textContent = "Copy Result";
  if (dialogRetryMomentBtn) dialogRetryMomentBtn.disabled = moveReviews.length === 0;
}

function renderStats() {
  const stats = getSavedStats();
  statsSummary.innerHTML = `
    <span>Games <strong>${stats.games}</strong></span>
    <span>Wins <strong>${stats.wins}</strong></span>
    <span>Losses <strong>${stats.losses}</strong></span>
    <span>Draws <strong>${stats.draws}</strong></span>
    <span>Avg accuracy <strong>${stats.games ? `${Math.round(stats.accuracyTotal / stats.games)}%` : "--"}</strong></span>
  `;
  renderHomeDashboard();
}

function getReviewSummaryMarkup(counts, accuracy) {
  const totalMoves = moveReviews.length;
  const keyMoment = getKeyMomentLabel();
  const strongerSide =
    accuracy.w === accuracy.b ? "Even accuracy" : accuracy.w > accuracy.b ? "White was cleaner" : "Black was cleaner";
  const categories = getReviewCategories();
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
  const hasMistake = reviews.some((review) => ["Mistake", "Miss"].includes(review.quality));
  const hasMultipleBigMisses = reviews.filter((review) => ["Mistake", "Miss", "Blunder"].includes(review.quality)).length >= 2;
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
    Great: 96,
    Excellent: 92,
    Good: 84,
    Inaccuracy: 74,
    Mistake: 58,
    Miss: 52,
    Blunder: 30,
    Pending: 82,
  };
  return scores[quality] ?? 75;
}

function getKeyMomentLabel() {
  const priority = { Blunder: 6, Miss: 5, Mistake: 4, Inaccuracy: 3, Great: 2, Brilliant: 2 };
  const keyMove = moveReviews
    .filter((review) => priority[review.quality])
    .sort((a, b) => priority[b.quality] - priority[a.quality] || Math.abs(b.swing) - Math.abs(a.swing))[0];

  if (!keyMove) return "Clean game";
  return formatReviewMoment(keyMove);
}

function getBestMoveLabel() {
  const priority = { Brilliant: 6, Great: 5, Best: 4, Excellent: 2, Book: 1 };
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
  const priority = { Blunder: 5, Miss: 4, Mistake: 3, Inaccuracy: 2, Good: 1 };
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

function retryKeyMoment() {
  const priority = { Blunder: 6, Miss: 5, Mistake: 4, Inaccuracy: 3, Great: 2, Brilliant: 2 };
  const keyMove = moveReviews
    .filter((review) => priority[review.quality])
    .sort((a, b) => priority[b.quality] - priority[a.quality] || Math.abs(b.swing) - Math.abs(a.swing))[0];
  if (!keyMove) {
    gameOverDialog.close();
    startReviewMode(0);
    return;
  }
  gameOverDialog.close();
  startReviewMode(moveReviews.indexOf(keyMove));
  setMoveFeedback(`Key moment loaded: ${formatReviewMoment(keyMove)}. Try to explain the best idea before moving on.`, "good");
}

async function shareApp() {
  const shareUrl =
    window.location.origin && window.location.origin !== "null"
      ? window.location.origin
      : window.location.href;
  const shareText = `Play Chess Table with me:\n${shareUrl}`;

  try {
    await copyTextToClipboard(shareText);
    setShareAppButtonFeedback("Copied!");
    setMoveFeedback("App link copied. Send it to whoever you want to play.", "success");
  } catch {
    setShareAppButtonFeedback("Copy failed");
    setMoveFeedback("Could not copy the app link. You can copy it from the address bar.", "alert");
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

function setShareAppButtonFeedback(text) {
  const label = shareAppBtn.querySelector("span:last-child");
  label.textContent = text;
  window.setTimeout(() => {
    label.textContent = "Share App";
  }, 1400);
}

function getShareGameText(options = {}) {
  const { includeMoves = true } = options;
  const result = getGameOverMessage();
  const accuracy = getAccuracySummary();
  const bot = getComputerColor() ? `${getBotName()} ${getDifficulty().elo}` : "Local player";
  const opening = getOpeningName();
  const moveCount = chess.history().length;

  const lines = [
    `Chess Table: ${result.body}`,
    `${moveCount} move${moveCount === 1 ? "" : "s"}`,
    `Opponent: ${bot}`,
    opening ? `Opening: ${opening}` : "",
    `Accuracy: White ${accuracy.w}% / Black ${accuracy.b}%`,
    `Key moment: ${getKeyMomentLabel()}`,
    `Best move: ${getBestMoveLabel()}`,
    `Toughest move: ${getWorstMoveLabel()}`,
  ].filter((line) => line !== "");

  if (includeMoves) {
    lines.push("", getPgnStyleMoveText());
  }

  return lines.join("\n");
}

function recordFinishedGameStats(result) {
  if (statsRecordedForGame) return;
  const stats = getSavedStats();
  const computerColor = getComputerColor();
  const accuracy = getAccuracySummary();
  const playerColor = computerColor === "w" ? "b" : "w";
  const winner = getWinnerColor(result);
  const playerAccuracy = accuracy[playerColor] ?? Math.round((accuracy.w + accuracy.b) / 2);

  stats.games += 1;
  stats.accuracyTotal += playerAccuracy;
  if (!winner || result.kind === "draw") stats.draws += 1;
  else if (!computerColor || winner === playerColor) {
    stats.wins += 1;
    if (computerColor) {
      stats.botWins = { ...(stats.botWins ?? {}), [difficultySelect.value]: true };
    }
  } else stats.losses += 1;

  statsRecordedForGame = true;
  saveStats(stats);
  recordGameHistory(result);
  renderHomeDashboard();
}

function getWinnerColor(result) {
  const manualWinner = getManualWinner();
  if (manualWinner) return manualWinner;
  if (result.kind === "draw") return null;
  if (chess.isCheckmate()) return chess.turn() === "w" ? "b" : "w";
  return null;
}

function getSavedStats() {
  const fallback = { games: 0, wins: 0, losses: 0, draws: 0, accuracyTotal: 0, botWins: {} };
  try {
    const saved = JSON.parse(window.localStorage.getItem(settingKeys.stats) || "{}");
    return { ...fallback, ...saved, botWins: { ...fallback.botWins, ...(saved.botWins ?? {}) } };
  } catch {
    return fallback;
  }
}

function saveStats(stats) {
  window.localStorage.setItem(settingKeys.stats, JSON.stringify(stats));
}

function getGameHistory() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(settingKeys.gameHistory) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveGameHistory(history) {
  window.localStorage.setItem(settingKeys.gameHistory, JSON.stringify(history.slice(0, 30)));
}

function createGameHistoryEntry(result = getGameOverMessage()) {
  const accuracy = getAccuracySummary();
  const reviews = moveReviews.map((review) => ({
    afterFen: review.afterFen,
    beforeFen: review.beforeFen,
    bestMoveSan: review.bestMoveSan || "",
    color: review.color,
    from: review.from,
    moveNumber: review.moveNumber,
    quality: review.quality,
    reason: getReviewReason(review),
    san: review.san,
    swing: review.swing || 0,
    to: review.to,
  }));
  return {
    id: `game-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    accuracy,
    bestMove: getBestMoveLabel(),
    clock: clockSelect.selectedOptions?.[0]?.textContent || "No clock",
    date: new Date().toISOString(),
    finalFen: chess.fen(),
    keyMoment: getKeyMomentLabel(),
    mode: getModeLabel(modeSelect.value),
    moveCount: chess.history().length,
    moves: chess.history(),
    opening: getOpeningName() || "Starting position",
    opponent: getComputerColor() ? `${getBotName()} ${getDifficulty().elo}` : isOnlineMode() ? "Online friend" : "Local player",
    result: result.body,
    resultBadge: result.badge,
    reviews,
    toughestMove: getWorstMoveLabel(),
  };
}

function recordGameHistory(result) {
  const entry = createGameHistoryEntry(result);
  const history = getGameHistory().filter((item) => item.finalFen !== entry.finalFen || item.moveCount !== entry.moveCount);
  history.unshift(entry);
  saveGameHistory(history);
  return entry;
}

function replayHistoryGame(historyId) {
  const entry = getGameHistory().find((item) => item.id === historyId);
  if (!entry) return;
  playSound("button");
  chess = new Chess();
  moveReviews = [];
  for (const review of entry.reviews ?? []) {
    try {
      chess.move(review.san);
      moveReviews.push({ ...review, bestMove: "", beforeScore: 0, bestScore: 0 });
    } catch {
      break;
    }
  }
  if (moveReviews.length === 0) {
    for (const san of entry.moves ?? []) {
      const beforeFen = chess.fen();
      const move = chess.move(san);
      if (!move) break;
      moveReviews.push({
        afterFen: chess.fen(),
        beforeFen,
        beforeScore: 0,
        color: move.color,
        from: move.from,
        moveNumber: Math.ceil(chess.history().length / 2),
        quality: "Good",
        reason: "Saved game replay.",
        san: move.san,
        swing: 0,
        to: move.to,
      });
    }
  }
  lastMove = getLastTrackedMove();
  resetReviewState();
  gameOverShown = true;
  switchAppTab("play");
  startReviewMode(0);
  setMoveFeedback(`Replaying ${entry.resultBadge || "saved game"} from history.`, "good");
}

function getPuzzleProgress() {
  const fallback = { xp: 0, dailyDate: "", dailySolved: false, bestDailyStreak: 0, dailyStreak: 0 };
  try {
    return { ...fallback, ...JSON.parse(window.localStorage.getItem(settingKeys.puzzleProgress) || "{}") };
  } catch {
    return fallback;
  }
}

function savePuzzleProgress(progress) {
  window.localStorage.setItem(settingKeys.puzzleProgress, JSON.stringify(progress));
}

function getPuzzleLevelInfo(xp = getPuzzleProgress().xp) {
  const levels = [
    { name: "Beginner", min: 0, next: 150 },
    { name: "Club", min: 150, next: 450 },
    { name: "Advanced", min: 450, next: 900 },
    { name: "Master", min: 900, next: 1400 },
  ];
  const current = levels.findLast((level) => xp >= level.min) ?? levels[0];
  const nextXp = current.next;
  const progress = Math.min(100, Math.round(((xp - current.min) / Math.max(1, nextXp - current.min)) * 100));
  return { ...current, progress, nextXp };
}

function recordLocalPuzzleProgress(solved) {
  const progress = getPuzzleProgress();
  progress.xp += solved ? 25 + Math.min(25, puzzleRun.streak * 2) : 5;
  savePuzzleProgress(progress);
}

function getDailyPuzzle() {
  const start = new Date("2026-01-01T00:00:00Z").getTime();
  const day = Math.floor((Date.now() - start) / 86_400_000);
  return puzzles[Math.abs(day) % puzzles.length];
}

function getLessonProgress() {
  try {
    return JSON.parse(window.localStorage.getItem(settingKeys.lessonProgress) || "{}");
  } catch {
    return {};
  }
}

function saveLessonProgress(progress) {
  window.localStorage.setItem(settingKeys.lessonProgress, JSON.stringify(progress));
}

function markLessonProgress(lessonId, ply) {
  const progress = getLessonProgress();
  progress[lessonId] = Math.max(progress[lessonId] ?? 0, ply);
  saveLessonProgress(progress);
}

function getRecommendedBotKey(stats = getSavedStats()) {
  return Object.keys(difficultySettings).find((key) => !stats.botWins?.[key]) || Object.keys(difficultySettings).at(-1);
}

function getReviewLearningTarget() {
  const opening = getOpeningName();
  const counts = getReviewCounts();
  if ((counts.Blunder ?? 0) + (counts.Miss ?? 0) > 0) return "Retry the key tactic, then solve two puzzle-run positions.";
  if (opening) return `Review the ${opening} plan in Learn and play the first 10 moves again.`;
  if ((counts.Inaccuracy ?? 0) + (counts.Mistake ?? 0) > 1) return "Replay the middlegame and ask why each capture or check matters.";
  return "Save the game, then challenge the next bot on the ladder.";
}

function getOpeningDescription(opening) {
  if (opening.includes("Sicilian")) return "An unbalanced reply to 1.e4 where Black fights for counterplay.";
  if (opening.includes("French")) return "A sturdy structure where Black challenges the center with ...d5.";
  if (opening.includes("Caro-Kann")) return "Solid and clean, often trading space for a reliable position.";
  if (opening.includes("Queen")) return "A classic d-pawn opening built around pressure on the center.";
  if (opening.includes("King's Indian")) return "White takes space while Black builds a kingside counterattack.";
  if (opening.includes("Ruy Lopez")) return "A principled king-pawn opening that pressures Black's center.";
  if (opening.includes("Italian")) return "Fast development with early pressure toward the vulnerable f7 square.";
  if (opening.includes("English")) return "A flexible flank opening that can become many different structures.";
  return "A known opening setup. Keep developing and watch the center.";
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
    Object.fromEntries(getReviewCategories().map((quality) => [quality, 0])),
  );
}

function getReviewCategories() {
  return ["Book", "Best", "Brilliant", "Excellent", "Great", "Good", "Inaccuracy", "Mistake", "Miss", "Blunder"];
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
      review.quality = classifyMoveQuality(review, moverSwing);
    }
    softenHumanMoveQuality(review, index);
  }
}

function applyEngineReviewQuality(review) {
  if (review.quality === "Book") return;
  if (!review.bestMove) return;

  const isBestMove = normalizeUci(review.uci) === normalizeUci(review.bestMove);
  if (isBestMove) {
    if (isBrilliantMove(review)) {
      review.quality = "Brilliant";
    } else if (isGreatMove(review)) {
      review.quality = "Great";
    } else {
      review.quality = "Best";
    }
    return;
  }

  const score = review.bestScore ?? evalCache.get(review.beforeFen);
  const afterScore = evalCache.get(review.afterFen) ?? getMaterialEvaluationForFen(review.afterFen);
  if (typeof score === "number" && typeof afterScore === "number") {
    const moverLoss = review.color === "w" ? score - afterScore : afterScore - score;
    review.swing = -moverLoss;
    review.quality = classifyMoveLoss(moverLoss, review);
  }
}

function classifyMoveLoss(loss, review = null) {
  if (review && isMissedWinningMove(review, loss)) return "Miss";
  if (loss <= 0.12) return "Best";
  if (loss <= 0.32) return "Excellent";
  if (loss <= 0.85) return "Good";
  if (loss <= 1.75) return "Inaccuracy";
  if (loss <= 3.25) return "Mistake";
  return "Blunder";
}

function isMissedWinningMove(review, loss) {
  if (loss < 1.5) return false;
  const bestMoveWasMate = review.bestMoveSan?.includes("#");
  const moverBestScore =
    typeof review.bestScore === "number"
      ? review.color === "w"
        ? review.bestScore
        : -review.bestScore
      : null;
  return Boolean(bestMoveWasMate || (moverBestScore !== null && moverBestScore >= 4.5 && loss >= 2.0));
}

function softenHumanMoveQuality(review, index) {
  if (["Book", "Best", "Brilliant", "Great", "Excellent"].includes(review.quality)) return;
  const loss = Math.max(0, -review.swing);
  if (loss <= 0.35) {
    review.quality = improveQuality(review.quality, "Excellent");
    return;
  }
  if (loss <= 1.05) {
    review.quality = improveQuality(review.quality, "Good");
    return;
  }
  if (isNaturalDevelopingMove(review, index) && loss <= 2.2) {
    review.quality = improveQuality(review.quality, "Good");
    return;
  }
  if (isEarlyOpeningMove(index) && isNaturalDevelopingMove(review, index) && loss <= 3.0) {
    review.quality = improveQuality(review.quality, "Inaccuracy");
  }
}

function improveQuality(current, minimum) {
  const order = ["Blunder", "Mistake", "Inaccuracy", "Good", "Excellent", "Great", "Brilliant", "Best", "Book"];
  return order.indexOf(current) < order.indexOf(minimum) ? minimum : current;
}

function isNaturalDevelopingMove(review, index) {
  if (!isEarlyOpeningMove(index)) return false;
  const piece = new Chess(review.beforeFen).get(review.from);
  if (!piece) return false;
  if (review.san.includes("O-O")) return true;
  if (["n", "b"].includes(piece.type)) return true;
  return piece.type === "p" && ["c", "d", "e", "f"].includes(review.to[0]) && ["3", "4", "5", "6"].includes(review.to[1]);
}

function isEarlyOpeningMove(index) {
  return index <= 15;
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
  ) || isRecognizedOpeningShape(index);
}

function isRecognizedOpeningShape(index) {
  if (index > 9) return false;
  const review = moveReviews[index];
  if (!review || !isNaturalDevelopingMove(review, index)) return false;
  const playedMoves = moveReviews.slice(0, index + 1).map((item) => item.san);
  const firstMove = playedMoves[0];
  if (["e4", "d4", "c4", "Nf3", "g3", "b3", "f4"].includes(firstMove)) return true;
  return index <= 3 && isNaturalDevelopingMove(review, index);
}

function classifyMoveQuality(review, swing) {
  if (swing >= 2.2 && isBrilliantMove(review)) return "Brilliant";
  if (swing >= 0.65 && isGreatMove(review)) return "Great";
  if (swing >= 0.25 && createsClearImprovement(review)) return "Great";
  if (swing >= -0.25) return "Excellent";
  if (swing >= -0.85) return "Good";
  if (swing >= -1.75) return "Inaccuracy";
  if (swing >= -3.25) return "Mistake";
  return "Blunder";
}

function createsClearImprovement(review) {
  const before = getMoverScoreBefore(review);
  const after = getMoverScoreAfter(review);
  return after >= 1.5 && after - before >= 0.65;
}

function isBrilliantMove(review) {
  if (isEarlyOpeningMove(moveReviews.indexOf(review)) && isNaturalDevelopingMove(review, moveReviews.indexOf(review))) return false;
  if (!hasSacrificeShape(review)) return false;
  return review.san.includes("#") || review.swing >= 2.8 || getMoverScoreAfter(review) >= 5;
}

function isGreatMove(review) {
  if (isBrilliantMove(review)) return false;
  if (review.san.includes("#")) return true;
  const beforeScore = getMoverScoreBefore(review);
  const afterScore = getMoverScoreAfter(review);
  const swing = review.swing ?? afterScore - beforeScore;
  if (swing >= 1.35 && afterScore >= 2.5) return true;
  if (beforeScore <= -1.5 && afterScore >= -0.35) return true;
  return Boolean(review.bestMove && normalizeUci(review.uci) === normalizeUci(review.bestMove) && Math.abs(afterScore) >= 4 && swing >= 0.7);
}

function hasSacrificeShape(review) {
  const movedValue = pieceValues[review.piece] ?? 0;
  const capturedValue = pieceValues[review.captured] ?? 0;
  if (movedValue >= 3 && capturedValue < movedValue - 1 && isMovePieceCapturableAfter(review)) return true;
  if (movedValue >= 3 && !review.captured && isMovePieceCapturableAfter(review)) return true;
  return movedValue >= 5 && review.swing >= 3.5 && capturedValue <= 1;
}

function isMovePieceCapturableAfter(review) {
  try {
    const position = new Chess(review.afterFen);
    return position.moves({ verbose: true }).some((move) => move.to === review.to && move.captured === review.piece);
  } catch {
    return false;
  }
}

function getMoverScoreBefore(review) {
  return review.color === "w" ? review.beforeScore : -review.beforeScore;
}

function getMoverScoreAfter(review) {
  const afterScore = evalCache.get(review.afterFen) ?? getMaterialEvaluationForFen(review.afterFen);
  return review.color === "w" ? afterScore : -afterScore;
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

  if (review.quality === "Miss") {
    return review.bestMoveSan
      ? `This missed a major chance. Stockfish wanted ${review.bestMoveSan}, which was much stronger.`
      : "This missed a major tactical or winning chance in the position.";
  }

  if (review.quality === "Brilliant") {
    return "A rare tactical shot: this move appears to offer material, but the payoff is a winning attack, forced mate, or decisive evaluation gain.";
  }

  if (review.quality === "Great") {
    return review.bestMoveSan
      ? `A critical find. ${review.bestMoveSan} was the engine's top idea, and this move kept or created a serious advantage.`
      : `A critical find that changed the position by about ${change} points and kept the game moving in the right direction.`;
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
  refreshPostgameReport();
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
  postEngineCommand(`go depth ${getDifficulty().depth} movetime ${getDifficulty().moveTime}`);
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
  if (move) finishQueuedPremove();
  render();
}

function selectComputerMove(bestMove) {
  const difficulty = getDifficulty();
  if (difficulty.style === "expert") return bestMove;

  const legalMoves = chess.moves({ verbose: true });
  if (legalMoves.length === 0) return bestMove;

  const legalMoveIds = new Set(legalMoves.map((move) => moveToUci(move)));
  const engineCandidates = [bestMove, ...(pendingEngineCandidates ?? [])]
    .filter((move, index, list) => move && list.indexOf(move) === index)
    .filter((move) => legalMoveIds.has(move));
  const bestLegalMove = legalMoves.find((move) => moveToUci(move) === bestMove);

  if (isForcingWinningMove(bestLegalMove)) return bestMove;

  if (engineCandidates.length === 0) {
    return moveToUci(chooseHumanLikeMove({ allowBlunder: difficulty.style === "beginner" })) ?? bestMove;
  }

  if (difficulty.style === "strong" && engineCandidates.length > 0) {
    return engineCandidates[0] ?? bestMove;
  }

  if (difficulty.style === "club" && engineCandidates.length > 0 && Math.random() >= difficulty.randomChance) {
    const candidatePool = engineCandidates.slice(0, Math.max(1, difficulty.candidateCount));
    return candidatePool[Math.floor(Math.random() * candidatePool.length)] ?? bestMove;
  }

  if (Math.random() < difficulty.randomChance) {
    const heuristicMove = chooseHumanLikeMove({
      allowBlunder: difficulty.style === "casual" && Math.random() < 0.28,
      avoidObviousHangs: ["club", "strong"].includes(difficulty.style),
    });
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
    const difficulty = getDifficulty();
    const move = chooseHumanLikeMove({
      allowBlunder: true,
      avoidObviousHangs: difficulty.style !== "beginner" || Math.random() > 0.35,
    });
    if (move) {
      makeTrackedMove(move);
      afterMovePlayed(move.color);
    }
    computerThinking = false;
    resetEnginePositionState();
    if (move) finishQueuedPremove();
    render();
  }, getBotMoveDelay());
}

function chooseHumanLikeMove({ allowBlunder = false, avoidObviousHangs = false } = {}) {
  const moves = chess.moves({ verbose: true });
  if (moves.length === 0) return null;
  const difficulty = getDifficulty();

  const scoredMoves = moves.map((move) => ({
    move,
    score: scoreBeginnerMove(move, difficulty.style) + Math.random() * getBotNoise(difficulty.style),
  }));

  scoredMoves.sort((a, b) => b.score - a.score);
  const topSlice = scoredMoves.slice(0, Math.min(difficulty.candidateCount, scoredMoves.length));

  if (allowBlunder && Math.random() < difficulty.randomChance) {
    const plausibleMistakes = scoredMoves
      .slice(Math.floor(scoredMoves.length * 0.35))
      .filter(({ move }) => !move.san.includes("#") && !allowsOpponentMateInOne(move));
    return (plausibleMistakes.length ? plausibleMistakes : scoredMoves).at(
      Math.floor(Math.random() * (plausibleMistakes.length || scoredMoves.length)),
    )?.move;
  }

  const safeTopSlice = avoidObviousHangs
    ? topSlice.filter(({ move }) => !isMovedPieceHangingAfter(move))
    : topSlice;
  const pool = safeTopSlice.length ? safeTopSlice : topSlice;
  return pool[Math.floor(Math.random() * pool.length)].move;
}

function chooseBeginnerMove() {
  return chooseHumanLikeMove({ allowBlunder: true });
}

function scoreBeginnerMove(move, style) {
  let score = 0;
  const caution = { beginner: 1.8, casual: 2.3, club: 3.0, strong: 4.2 }[style] ?? 1.8;
  const captureWeight = { beginner: 1.8, casual: 2.05, club: 2.7, strong: 3.3 }[style] ?? 1.8;
  const developmentWeight = { beginner: 1.1, casual: 1.2, club: 1.35, strong: 1.55 }[style] ?? 1.1;

  if (move.captured) score += (pieceValues[move.captured] ?? 0) * captureWeight;
  if (move.captured && !isMovedPieceHangingAfter(move)) score += style === "beginner" ? 1.3 : 0.8;
  if (move.promotion) score += 8;
  if (move.san.includes("+")) score += style === "beginner" ? 1.4 : 2.4;
  if (move.san.includes("#")) score += 120;

  const movedPieceValue = pieceValues[move.piece] ?? 0;
  if (isMovedPieceHangingAfter(move)) score -= movedPieceValue * caution;
  if (allowsOpponentMateInOne(move)) score -= style === "beginner" ? 35 : 90;

  if (["e4", "d4", "e5", "d5"].includes(move.to)) score += developmentWeight;
  if (move.piece === "n" || move.piece === "b") score += developmentWeight;
  if (isBookishCandidate(move)) score += style === "beginner" ? 2.2 : 1.2;
  if (isOneMovePieceMoveRepeat(move)) score -= style === "beginner" ? 0.75 : 1.4;
  if (move.piece === "k" && move.san.includes("O-O")) score += 1.4;
  if (move.piece === "q") score -= style === "beginner" ? 0.2 : 1.1;

  return score;
}

function getBotNoise(style) {
  return { beginner: 4.8, casual: 3.2, club: 1.4, strong: 0.45 }[style] ?? 3.2;
}

function isBookishCandidate(move) {
  if (!move || chess.history().length >= 10) return false;
  try {
    const position = new Chess(chess.fen());
    const madeMove = position.move({ from: move.from, to: move.to, promotion: move.promotion });
    if (!madeMove) return false;
    const playedLine = [...chess.history(), madeMove.san].join(" ");
    return openingBook.some((opening) => opening.moves === playedLine || opening.moves.startsWith(`${playedLine} `));
  } catch {
    return false;
  }
}

function isOneMovePieceMoveRepeat(move) {
  if (!move || move.captured || move.promotion) return false;
  const history = chess.history({ verbose: true });
  const lastOwnMove = [...history].reverse().find((item) => item.color === chess.turn());
  return Boolean(lastOwnMove && lastOwnMove.piece === move.piece && lastOwnMove.to === move.from);
}

function isForcingWinningMove(move) {
  return Boolean(move && (move.san.includes("#") || move.promotion || (move.captured && (pieceValues[move.captured] ?? 0) >= 5)));
}

function isMovedPieceHangingAfter(move) {
  if (!move || move.san.includes("#")) return false;
  try {
    const position = new Chess(chess.fen());
    const madeMove = position.move({
      from: move.from,
      to: move.to,
      promotion: move.promotion,
    });
    if (!madeMove) return false;
    const attackers = position.attackers(madeMove.to, position.turn());
    if (attackers.length === 0) return false;
    const movedValue = pieceValues[madeMove.piece] ?? 0;
    const capturedValue = pieceValues[madeMove.captured] ?? 0;
    return movedValue >= 3 && movedValue > capturedValue + 1;
  } catch {
    return false;
  }
}

function allowsOpponentMateInOne(move) {
  try {
    const position = new Chess(chess.fen());
    position.move({ from: move.from, to: move.to, promotion: move.promotion });
    return position.moves({ verbose: true }).some((reply) => reply.san.includes("#"));
  } catch {
    return false;
  }
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
  botCard.classList.toggle("human-match", modeSelect.value === "human" || isOnlineMode());
  botCard.classList.toggle("practice-match", isPracticeMode());
  if (modeSelect.value === "human") {
    botAvatar.hidden = true;
    botName.textContent = "Local Match";
    botElo.textContent = "Pass & Play";
    botStyle.textContent = "Two players, one board, no computer opponent.";
    botChatter.textContent = "White and Black are both controlled here.";
    return;
  }
  if (isOnlineMode()) {
    botAvatar.hidden = true;
    botName.textContent = "Online Friend";
    botElo.textContent = onlineRoomCode
      ? `${onlineRoomCode} · ${onlineLocalColor === "w" ? "White" : "Black"}`
      : "Not connected";
    botStyle.textContent = "Invite a friend from your friends list, or use a short room code.";
    botChatter.textContent = onlineConnected ? "Friend connected. Play it out." : "Waiting for your friend to join.";
    return;
  }
  if (isPracticeMode()) {
    const puzzle = getCurrentPuzzle();
    botAvatar.hidden = true;
    botName.textContent = puzzle.difficulty ? `${puzzle.difficulty} Training` : "Practice Board";
    botElo.textContent = getPuzzleProgressLabel();
    botStyle.textContent = `${puzzle.category || "Tactic"} · ${puzzle.title || "Solve the tactic from the board position."}`;
    if (puzzle.source) botStyle.textContent += ` · ${puzzle.source}`;
    botChatter.textContent = puzzleSolved ? puzzle.success : "Find the best move.";
    return;
  }
  const difficulty = getDifficulty();
  botAvatar.hidden = false;
  botAvatar.dataset.bot = difficulty.theme;
  botName.textContent = difficulty.botName;
  botElo.textContent = difficulty.elo;
  botStyle.textContent = difficulty.persona;
  botChatter.textContent = difficulty.chatter.ready;
}

function setBotChatter(kind) {
  if (!getComputerColor()) return;
  const chatter = getDifficulty().chatter;
  botChatter.textContent = getVariedBotLine(kind, chatter[kind] ?? chatter.ready);
}

function getVariedBotLine(kind, fallback) {
  const name = getBotName();
  const lines = {
    botMove: [`${name}: I like this square.`, `${name} keeps the rhythm steady.`, fallback],
    botCapture: [`${name}: That material counts.`, `${name} pockets the loose piece.`, fallback],
    botCheck: [`${name}: Your king has to answer now.`, fallback],
    humanMove: [`${name} leans in and checks the reply.`, `${name} is looking for the clean answer.`, fallback],
    humanCapture: [`${name}: Yep, that one was loose.`, `${name} needs a little compensation now.`, fallback],
    humanCheck: [`${name}: Okay, now it is concrete.`, fallback],
    win: [`${name}: Good game. I found enough chances.`, fallback],
    loss: [`${name}: You earned that one.`, fallback],
    draw: [`${name}: Fair result. Nobody stole the board.`, fallback],
  }[kind];
  if (!lines) return fallback;
  return lines[Math.floor(Math.random() * lines.length)];
}

function getPieceGlyph(piece) {
  return pieceGlyphs[piece.color][piece.type];
}

function applyVisualSettings() {
  document.body.dataset.theme = themeSelect.value || "green";
  document.body.dataset.pieces = pieceStyleSelect.value || "classic";
}

function isCoachEnabled() {
  return window.localStorage.getItem(settingKeys.coachEnabled) !== "false";
}

function isOpeningEnabled() {
  return window.localStorage.getItem(settingKeys.openingEnabled) !== "false";
}

function getComputerColor() {
  if (isPracticeMode()) return null;
  if (modeSelect.value === "random") return selectedComputerColor;
  if (modeSelect.value === "white") return "b";
  if (modeSelect.value === "black") return "w";
  return null;
}

function isPracticeMode() {
  return modeSelect.value === "practice";
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
  clearPremove();
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
  clearPremove();
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
  if (gameOverDialogTimer) {
    window.clearTimeout(gameOverDialogTimer);
    gameOverDialogTimer = null;
  }
  if (gameOverDialog.open) gameOverDialog.close();
  document.body.classList.remove("postgame-modal-open");
  reviewMoveEffect.innerHTML = "";
  moveSlideLayer.innerHTML = "";
  pendingMoveAnimation = null;
  clearPremove();
  resignation = null;
  agreedDraw = false;
  statsRecordedForGame = false;
  puzzleSolved = false;
}

function startNewGame() {
  if (isPracticeMode()) {
    loadCurrentPuzzle();
    return;
  }
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
  renderBotCard();
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
  setArrowLine(bestMoveLine, fromPoint, toPoint, 4.7);
  bestMoveArrow.classList.add("visible");
}

function renderPremoveArrow() {
  if (!queuedPremove || selectedSquare || getActiveReview() || getActivePreview()) {
    premoveArrow?.classList.remove("visible");
    return;
  }

  const fromPoint = getSquareCenter(queuedPremove.from);
  const toPoint = getSquareCenter(queuedPremove.to);
  setArrowLine(premoveLine, fromPoint, toPoint, 4.2);
  premoveArrow?.classList.add("visible");
}

function setArrowLine(line, fromPoint, toPoint, endInset = 0) {
  const dx = toPoint.x - fromPoint.x;
  const dy = toPoint.y - fromPoint.y;
  const distance = Math.hypot(dx, dy);
  const trim = Math.min(endInset, Math.max(0, distance - 2));
  const endX = distance ? toPoint.x - (dx / distance) * trim : toPoint.x;
  const endY = distance ? toPoint.y - (dy / distance) * trim : toPoint.y;

  line.setAttribute("x1", fromPoint.x);
  line.setAttribute("y1", fromPoint.y);
  line.setAttribute("x2", endX);
  line.setAttribute("y2", endY);
}

function setHintVisible(isVisible) {
  showBestMove = modeSelect.value === "human" ? false : isVisible;
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
  setSelectValue(themeSelect, window.localStorage.getItem(settingKeys.theme));
  setSelectValue(pieceStyleSelect, window.localStorage.getItem(settingKeys.pieceStyle));
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

function getPositionMaterialScore(position) {
  return position
    .board()
    .flat()
    .reduce((total, piece) => {
      if (!piece) return total;
      return total + (piece.color === "w" ? 1 : -1) * (pieceValues[piece.type] ?? 0);
    }, 0);
}

function validatePuzzleLibrary() {
  return puzzles.map((puzzle, index) => {
    const result = { id: puzzle.id, index: index + 1, ok: true, moves: [] };
    try {
      const position = createPuzzlePosition(puzzle);
      const startingTurn = position.turn();
      const startingMaterial = getPositionMaterialScore(position);
      result.startFen = position.fen();
      result.startInCheck = position.isCheck();
      if (result.startInCheck) {
        result.ok = false;
        result.error = "Puzzle starts with the side to move already in check.";
        return result;
      }

      for (const [stepIndex, step] of puzzle.line.entries()) {
        const playerMove = position.move({
          from: step.move.slice(0, 2),
          to: step.move.slice(2, 4),
          promotion: step.move[4],
        });
        if (!playerMove) {
          result.ok = false;
          result.error = `Illegal solution move ${step.move}`;
          break;
        }
        result.moves.push(playerMove.san);
        if (stepIndex === 0 && !position.isCheckmate()) {
          const directCaptures = position.moves({ verbose: true }).filter((reply) => reply.to === playerMove.to);
          result.firstMoveCaptureRefutations = directCaptures.map((reply) => reply.san);
          result.firstMoveCaptureIsLineReply = Boolean(
            step.reply && directCaptures.some((reply) => `${reply.from}${reply.to}${reply.promotion ?? ""}` === step.reply),
          );
          result.strongReplies = position
            .moves({ verbose: true })
            .filter((reply) => reply.captured || reply.san.includes("+") || reply.san.includes("#"))
            .map((reply) => reply.san)
            .slice(0, 8);
          if (directCaptures.length && !result.firstMoveCaptureIsLineReply) {
            result.ok = false;
            result.error = `Opponent can capture the first tactic piece: ${result.firstMoveCaptureRefutations.join(", ")}`;
            break;
          }
        }
        if (step.reply) {
          const replyMove = position.move({
            from: step.reply.slice(0, 2),
            to: step.reply.slice(2, 4),
            promotion: step.reply[4],
          });
          if (!replyMove) {
            result.ok = false;
            result.error = `Illegal reply ${step.reply}`;
            break;
          }
          result.moves.push(replyMove.san);
        }
      }
      result.finalFen = position.fen();
      result.checkmate = position.isCheckmate();
      result.materialGain = (getPositionMaterialScore(position) - startingMaterial) * (startingTurn === "w" ? 1 : -1);
      if (result.ok && !result.checkmate && result.materialGain < 3) {
        result.ok = false;
        result.error = `Puzzle line does not end in mate or meaningful material gain. Gain: ${result.materialGain}`;
      }
    } catch (error) {
      result.ok = false;
      result.error = error.message;
    }
    return result;
  });
}

window.ChessTableDebug = {
  get puzzles() {
    return puzzles;
  },
  validatePuzzleLibrary,
};

renderSoundButton();
renderBotCard();
syncStartControlsFromSettings();
applyVisualSettings();
validateSavedSession();
startStockfish();
render();
