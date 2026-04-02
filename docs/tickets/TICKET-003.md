# TICKET-003 — Apollo Client + graphql-tada Setup

**Milestone:** M1 — Foundation
**Read first:** ARCHITECTURE.md §5 (GraphQL Conventions)
**Depends on:** TICKET-001 (project scaffold), TICKET-002 (Hasura endpoint available)

---

## Objective
Configure Apollo Client to communicate with Hasura, wire in graphql-tada for end-to-end type safety, and verify the connection with one working test query.

---

## Acceptance Criteria
- [ ] `lib/supabase.ts` — Supabase client initialised using env vars
- [ ] `lib/apollo.ts` — Apollo Client configured with:
  - Hasura GraphQL endpoint from `EXPO_PUBLIC_HASURA_ENDPOINT`
  - WebSocket endpoint from `EXPO_PUBLIC_HASURA_WS_ENDPOINT` for subscriptions
  - Auth link that reads the Supabase session JWT and sends it as `Authorization: Bearer <token>`
  - Automatic token refresh when Supabase session refreshes
- [ ] graphql-tada configured:
  - `tadaOutputLocation` pointed at `graphql/graphql-env.d.ts`
  - Schema introspected from Hasura endpoint and saved to `graphql/graphql-schema.ts`
  - `lib/tada.ts` exports the `graphql` template tag
- [ ] `ApolloProvider` wrapping the app in `app/_layout.tsx`
- [ ] One smoke-test query written at `graphql/queries/GetCurrentUser.graphql` that fetches `users_by_pk` — confirmed to return typed data
- [ ] `graphql/graphql-env.d.ts` committed (generated, not hand-written)

---

## Files to Create / Modify
```
apps/mobile/
├── lib/
│   ├── supabase.ts           # Supabase client
│   ├── apollo.ts             # Apollo Client with auth link
│   └── tada.ts               # graphql-tada export
├── graphql/
│   ├── graphql-schema.ts     # Generated schema (via tada CLI)
│   ├── graphql-env.d.ts      # Generated types (via tada CLI)
│   └── queries/
│       └── GetCurrentUser.graphql
└── app/
    └── _layout.tsx           # Add ApolloProvider here
```

---

## Notes
- The Apollo auth link must re-read the Supabase session on every request — do not cache the JWT in a variable as it will expire
- For subscriptions use `graphql-ws` (not the legacy `subscriptions-transport-ws`)
- Run `npx gql.tada generate-schema` to pull the schema from Hasura — requires the Hasura endpoint and admin secret in env
