# Chess Table Deployment

This app is a static site. It does not need a backend server.

## Local Build

```bash
npm run build
npm run preview
```

Then open:

```text
http://127.0.0.1:4173/
```

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

## Vercel

1. Import the repository in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`

The included `vercel.json` already sets this up.
