import { cp, mkdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const requiredFiles = [
  "index.html",
  "styles.css",
  "src/app.js",
  "src/stockfish-worker.js",
  "assets/sounds/move.wav",
  "assets/sounds/capture.wav",
  "assets/sounds/check.wav",
  "assets/sounds/game-over.wav",
  "assets/sounds/button.wav",
];

for (const file of requiredFiles) {
  try {
    await stat(path.join(root, file));
  } catch {
    throw new Error(`Missing required static asset: ${file}`);
  }
}

const html = await readFile(path.join(root, "index.html"), "utf8");
const appJs = await readFile(path.join(root, "src/app.js"), "utf8");
const requiredReferences = ["./styles.css", "./src/app.js"];
for (const reference of requiredReferences) {
  if (!html.includes(reference)) {
    throw new Error(`index.html does not reference expected asset: ${reference}`);
  }
}

if (!appJs.includes("./assets/sounds/move.wav")) {
  throw new Error("src/app.js does not reference expected sound assets");
}

await rm(dist, { force: true, recursive: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "index.html"), path.join(dist, "index.html"));
await cp(path.join(root, "styles.css"), path.join(dist, "styles.css"));
await cp(path.join(root, "src"), path.join(dist, "src"), { recursive: true });
await cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });

console.log("Built static site in dist/");
