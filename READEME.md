# 🐣 Tiny Tales

A mobile app that helps busy parents quickly capture, preserve, and share meaningful moments from their children's lives. Parents record a voice note — Tiny Tales transcribes it, polishes it into a beautifully written story, and stores it in a shared family memory library.

---

## Stack

| Layer | Technology |
|---|---|
| Mobile | React Native + Expo (TypeScript) |
| Routing | Expo Router |
| GraphQL Client | Apollo Client + graphql-tada |
| GraphQL API | Hasura Cloud |
| Database | Supabase Postgres |
| Auth | Supabase Auth → Hasura JWT |
| File Storage | Supabase Storage |
| AI Pipeline | Cloudflare Workers |
| State | Zustand |
| Styling | NativeWind |

---

## Repository Structure

```
tinytales/
├── .cursor/rules/          # Cursor AI agent rules (always read these)
├── apps/
│   └── mobile/             # Expo React Native app
├── services/
│   └── ai-pipeline/        # Cloudflare Worker (transcription + AI)
├── hasura/                 # Hasura metadata + migrations
└── docs/                   # Architecture, milestones, and task tickets
```

---

## Documentation

| Document | Purpose |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Full stack reference — read before any coding task |
| [`docs/MILESTONES.md`](docs/MILESTONES.md) | Build order and milestone goals |
| [`docs/tickets/`](docs/tickets/) | Individual task tickets for coding agents |

---

## Getting Started

### Prerequisites
- Node.js 20+
- Expo CLI (`npm install -g expo-cli`)
- Hasura CLI (`npm install -g hasura-cli`)
- Wrangler CLI (`npm install -g wrangler`)
- A Supabase project (see ARCHITECTURE.md §4)
- A Hasura Cloud project (see ARCHITECTURE.md §4)

### Environment Setup

Copy the example env file and fill in your keys:
```bash
cp apps/mobile/.env.example apps/mobile/.env
```

Required variables:
```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
EXPO_PUBLIC_HASURA_ENDPOINT=
EXPO_PUBLIC_HASURA_WS_ENDPOINT=
```

### Running the App
```bash
cd apps/mobile
npm install
npx expo start
```

### Running the AI Pipeline Worker (local)
```bash
cd services/ai-pipeline
npm install
wrangler dev
```

### Applying Hasura Migrations
```bash
cd hasura
hasura migrate apply
hasura metadata apply
```

---

## How Coding Tasks Work

Each feature is broken into atomic task tickets in `docs/tickets/`. To run a task with a Cursor agent:

1. Open a new Cursor chat
2. Add `docs/ARCHITECTURE.md` to context
3. Add the relevant ticket file (e.g. `docs/tickets/TICKET-001.md`) to context
4. Let the agent work — no other context is needed

Completed tickets are moved to `docs/tickets/archive/`.

---

## Cursor Rules

AI agent rules live in `.cursor/rules/` and are automatically injected by Cursor:

| File | Type | Purpose |
|---|---|---|
| `architecture.mdc` | Always | Stack, schema, conventions |
| `coding-standards.mdc` | Always | TypeScript, styling, error handling |
| `graphql-patterns.mdc` | Auto (`.ts`, `.graphql`) | Query/mutation patterns |
| `component-patterns.mdc` | Auto (`.tsx`) | Component structure |
| `decisions-log.mdc` | Agent requested | Why decisions were made |

---

## Key Decisions

- **Hasura** handles all GraphQL — no custom server needed
- **Audio recordings are discarded** after AI processing — never stored permanently
- **Free tier:** 25 tales, 2 guests — upgrade for unlimited
- **RevenueCat** manages subscriptions (not raw StoreKit/BillingClient)
- **Cloudflare Workers** for all custom server logic (AI, PDF, print orders)

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and `.cursor/rules/decisions-log.mdc` for full reasoning.

---

## Milestones

| # | Milestone | Status |
|---|---|---|
| M1 | Foundation (scaffold, auth, schema) | ⬜ Not started |
| M2 | Core Tale Flow (record → AI → post) | ⬜ Not started |
| M3 | Home & Feed (browse, filter, read) | ⬜ Not started |
| M4 | Guests & Social (invite, react, comment) | ⬜ Not started |
| M5 | Account & Settings | ⬜ Not started |
| M6 | Monetisation (subscription, printed book) | ⬜ Not started |