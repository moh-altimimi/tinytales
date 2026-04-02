# TICKET-005 — Post-Signup: Create Family Account + User Record

**Milestone:** M1 — Foundation
**Read first:** ARCHITECTURE.md §3 (Database Schema), §4 (Auth Model), §5 (GraphQL Conventions)
**Depends on:** TICKET-003, TICKET-004

---

## Objective
After a new user registers, automatically create a `family_accounts` row and a `users` row in Postgres. This must happen once per new user and be idempotent (safe to run twice without creating duplicates).

---

## Acceptance Criteria
- [ ] On first app launch after registration, if no `users` row exists for the current Supabase auth UID, the app creates one
- [ ] Creation flow:
  1. Insert into `family_accounts` (no fields needed beyond `id`)
  2. Insert into `users` with: `id` = Supabase auth UID, `family_account_id` = new account ID, `name` = name from registration, `role = 'parent'`
- [ ] This logic runs in a hook `hooks/useBootstrapUser.ts` called from `app/(app)/_layout.tsx`
- [ ] If the user row already exists, the hook does nothing (idempotent)
- [ ] While bootstrap is running, a loading screen is shown — the user is not dropped into the app mid-setup
- [ ] Zustand store (`lib/store.ts`) has a `currentUser` slice that holds: `id`, `name`, `avatarUrl`, `familyAccountId`, `role`
- [ ] After bootstrap, `currentUser` is populated in the Zustand store
- [ ] `currentUser` is rehydrated from a fresh GraphQL query on every app launch (not only from local storage)

---

## Files to Create / Modify
```
apps/mobile/
├── hooks/
│   └── useBootstrapUser.ts
├── lib/
│   └── store.ts              # Add currentUser slice
└── graphql/
    ├── queries/
    │   └── GetCurrentUser.graphql    # Fetch users_by_pk
    └── mutations/
        ├── CreateFamilyAccount.graphql
        └── CreateUser.graphql
```

---

## Notes
- These mutations require the Hasura JWT to be set correctly (family_account_id claim). Since the JWT is generated at login and the family_account doesn't exist yet at that moment, the initial insert may need to use the Hasura `x-hasura-role: parent` and rely on the user's own UID for the user insert. Coordinate with TICKET-002 to ensure the `users` insert permission allows a parent to insert their own row with any `family_account_id` on first creation only.
- After the family account is created, the JWT will not yet contain the correct `x-hasura-family-account-id` claim. The user must sign out and back in, OR the app must refresh the session. Handle this by calling `supabase.auth.refreshSession()` after bootstrap completes.
