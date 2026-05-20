# Chess Table Deployment

The chess board is a static site, but accounts, friends, and online games need the Node backend in `server/chess-table-server.mjs`.

## Local Build

```bash
npm run build
npm run preview
```

Then open:

```text
http://127.0.0.1:4173/
```

## Local Backend

Start the account and online-game backend:

```bash
npm run server
```

It runs on `http://localhost:8787`.

## GitHub Pages

1. Create a GitHub repository and push this project.
2. In the repository settings, go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.

The included `.github/workflows/deploy-pages.yml` builds the app and publishes `dist/`.

## Netlify

1. Create a new Netlify site from the repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

The included `netlify.toml` already sets this up.

Netlify hosts the frontend only. Deploy the backend separately on Render or Railway, then update the frontend API base in the browser local storage or wire your production API URL into the app.

## Vercel

1. Import the repository in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`

The included `vercel.json` already sets this up.

## Backend On Render

1. Create a new **Web Service** from this repo.
2. Runtime: Node.
3. Build command: leave blank or use `npm install`.
4. Start command: `npm run server`.
5. Add environment variables:

```text
PORT=8787
```

Render may provide its own `PORT`; if it does, use Render's value and do not hard-code `PORT`.

## Backend On Railway

1. Create a Railway project from this repo.
2. Set the start command to `npm run server`.
3. Add the same environment variables listed above.
4. Use the Railway public backend URL as the app's API base.

Email verification is not required in the current free username/password account flow.
