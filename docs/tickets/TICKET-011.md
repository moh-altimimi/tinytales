# TICKET-011 — Post Tale Mutation + Success State

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §3.1 (tales, tale_children, tale_tags, tale_media tables), §5, §8 (Free Tier Enforcement)
**Depends on:** TICKET-010

---

## Objective
Wire up the "Post Tale" button to insert the tale and all related records into the database, upload any attached media, and return the user to the home screen.

---

## Acceptance Criteria
- [ ] On "Post Tale" tap:
  1. Upload any attached photos to `tale-media` Supabase Storage bucket, get URLs
  2. Insert `tales` row: `narrative`, `title`, `family_account_id`, `author_id`
  3. Insert `tale_children` rows for each selected child
  4. Insert `tale_tags` rows for each confirmed tag
  5. Insert `tale_media` rows for each uploaded photo URL
- [ ] All inserts wrapped in a single GraphQL mutation (use Hasura nested insert)
- [ ] Loading state on "Post Tale" button during the full operation
- [ ] On success: navigate to `/(app)/` (home) and show success toast: "Your tale has been saved ✨"
- [ ] On failure: show error toast, do not navigate away, allow retry
- [ ] If the family account has reached 25 tales (free tier) and has no active subscription: show upgrade prompt modal instead of posting (see TICKET-028 for full upgrade flow — for now, just block with a message)

---

## Files to Create / Modify
```
apps/mobile/graphql/mutations/
└── InsertTale.graphql        # Nested insert: tale + children + tags + media
```
