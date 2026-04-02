# TICKET-006 — Child Profile: Create & Edit Screen

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §3.1 (`children` table), §5 (GraphQL Conventions), §7 (File Storage)
**Depends on:** TICKET-005

---

## Objective
Build the screen where a parent adds their first child (shown during onboarding) and can subsequently edit child profiles. This screen is reached from the Account screen and also triggered automatically after signup if no children exist.

---

## Acceptance Criteria
- [ ] `app/(app)/child/new.tsx` — create child screen
- [ ] `app/(app)/child/[id].tsx` — edit child screen (pre-fills fields)
- [ ] Fields: first name (required), date of birth (date picker), gender (segmented control), profile photo (optional)
- [ ] Profile photo: opens image picker (Expo ImagePicker), uploads to `child-photos` Supabase Storage bucket, stores URL on the child record
- [ ] On save: inserts/updates `children` table via GraphQL mutation
- [ ] After first child is created during onboarding → navigate to `/(app)/` (home)
- [ ] Validation: name is required, shows inline error if blank on submit
- [ ] Loading state on save button

---

## Files to Create
```
apps/mobile/
├── app/(app)/child/
│   ├── new.tsx
│   └── [id].tsx
└── graphql/mutations/
    ├── InsertChild.graphql
    └── UpdateChild.graphql
```
