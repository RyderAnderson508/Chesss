# Account Online Mode Plan

The current Netlify version is a static site. Accounts, friends, saved stats, and reliable online games need the separate backend in `server/chess-table-server.mjs`.

## What The Backend Supports

- Username/password sign up: `POST /api/signup`
- Login: `POST /api/login`
- Current profile: `GET /api/me`
- User search: `GET /api/users/search?q=username`
- Friends list: `GET /api/friends`
- Send friend request: `POST /api/friends/requests`
- Accept/decline friend request: `POST /api/friends/requests/:id/accept` or `/decline`
- Remove friend: `POST /api/friends/:id/remove`
- Create room: `POST /api/rooms`
- Create friend room: `POST /api/rooms/friend`
- Pending room invites: `GET /api/rooms/invites`
- Join room: `POST /api/rooms/:code/join`
- Poll room state: `GET /api/rooms/:code`
- Add move: `POST /api/rooms/:code/moves`
- Save puzzle result: `POST /api/puzzle-result`

It stores local development data in `server-data/chess-table.json`.

## Run Locally

```bash
npm run server
```

The API runs on `http://localhost:8787`.

## Deployment Direction

Deploy the static chess app to Netlify, then deploy this backend to a Node host like Render, Railway, Fly.io, or a VPS. After that, the frontend can call the backend URL for real login, saved stats, rooms, and puzzle progress.

This backend is intentionally dependency-free so it can be moved easily, but before real public launch it should get:

- HTTPS-only hosting
- A stronger password hash such as bcrypt/argon2
- Database storage such as Postgres/Supabase
- Rate limits
- Password reset
- Server-side chess move validation
