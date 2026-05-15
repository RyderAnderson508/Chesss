import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";

const rootArg = process.argv[2] ?? ".";
const port = Number(process.argv[3] ?? 4173);
const root = path.resolve(process.cwd(), rootArg);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".wav": "audio/wav",
};

function safeJoin(base, requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return path.join(base, normalized === "/" ? "index.html" : normalized);
}

const server = http.createServer(async (request, response) => {
  let filePath = safeJoin(root, request.url ?? "/");

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) filePath = path.join(filePath, "index.html");
  } catch {
    filePath = path.join(root, "index.html");
  }

  const extension = path.extname(filePath).toLowerCase();
  response.setHeader("Content-Type", mimeTypes[extension] ?? "application/octet-stream");
  createReadStream(filePath)
    .on("error", () => {
      response.statusCode = 404;
      response.end("Not found");
    })
    .pipe(response);
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}/`);
});
