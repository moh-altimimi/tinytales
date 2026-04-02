# TICKET-020 — Guest Feed View

**Milestone:** M4 — Guests & Social
**Read first:** ARCHITECTURE.md §3 (Account Structure — guest role), §4 (Hasura Permissions), §5 (GraphQL Conventions)
**Depends on:** TICKET-019, TICKET-014

---

## Objective
Build the read-only guest view of the tales feed. Guests see the same tales as parents but have no create/edit/delete controls.

---

## Acceptance Criteria
- [ ] `app/guest/index.tsx` — guest home screen
- [ ] Reuses `TaleCard` component from TICKET-014 (no changes needed to that component)
- [ ] Reuses `GetTalesFeed` query — Hasura guest role permissions ensure only the correct family account's tales are returned
- [ ] No FAB, no inspiration banner, no edit/delete controls anywhere in the guest view
- [ ] Header shows family name (e.g. "The Smith Family's Tales") — fetch from `family_accounts` or derive from children's surnames (use parent's name for v1)
- [ ] Tapping a tale card navigates to `app/guest/tale/[id].tsx` — tale detail without edit/delete buttons
- [ ] `app/guest/tale/[id].tsx` — reuses layout from TICKET-016 but with edit/delete buttons hidden (check `currentUser.role === 'parent'` for conditional rendering)
- [ ] Pull-to-refresh supported
- [ ] Empty state: "No tales have been shared yet"
- [ ] Guest cannot navigate to any `(app)` routes — Expo Router layout guard redirects guests to `/guest/` on login

---

## Files to Create
```
apps/mobile/app/guest/
├── _layout.tsx               # Guest layout guard
├── index.tsx                 # Guest feed
└── tale/
    └── [id].tsx              # Guest tale detail
```

---

## Notes
- The role check for showing edit/delete should already be conditional in the tale detail component if built correctly in TICKET-016. Verify this rather than duplicating logic.
- Guests share the same auth flow as parents — Supabase Auth issues a JWT, Hasura enforces the guest role permissions.
