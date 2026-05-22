import { handleRequest } from "../../server/chess-table-server.mjs";

function getRequestPath(event) {
  const rawPath = event.rawUrl ? new URL(event.rawUrl).pathname : event.path || "/";
  if (rawPath.startsWith("/.netlify/functions/api/")) {
    return `/api/${rawPath.slice("/.netlify/functions/api/".length)}`;
  }
  if (rawPath === "/.netlify/functions/api") return "/api";
  return rawPath.startsWith("/api") ? rawPath : `/api${rawPath.startsWith("/") ? rawPath : `/${rawPath}`}`;
}

function makeNodeLikeRequest(event) {
  const body = event.isBase64Encoded
    ? Buffer.from(event.body || "", "base64")
    : Buffer.from(event.body || "", "utf8");
  return {
    headers: Object.fromEntries(
      Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value]),
    ),
    method: event.httpMethod || event.requestContext?.http?.method || "GET",
    url: getRequestPath(event),
    async *[Symbol.asyncIterator]() {
      if (body.length) yield body;
    },
  };
}

function makeNodeLikeResponse(resolve) {
  return {
    statusCode: 200,
    headers: {},
    writeHead(statusCode, headers = {}) {
      this.statusCode = statusCode;
      this.headers = headers;
    },
    end(body = "") {
      resolve({
        body: String(body),
        headers: this.headers,
        statusCode: this.statusCode,
      });
    },
  };
}

export async function handler(event) {
  return new Promise((resolve) => {
    const request = makeNodeLikeRequest(event);
    const response = makeNodeLikeResponse(resolve);
    handleRequest(request, response).catch((error) => {
      resolve({
        body: JSON.stringify({ error: error.message || "Account function crashed." }),
        headers: {
          "Access-Control-Allow-Headers": "authorization, content-type",
          "Access-Control-Allow-Methods": "DELETE, GET, PATCH, POST, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
      });
    });
  });
}
