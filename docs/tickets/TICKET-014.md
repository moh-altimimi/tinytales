# TICKET-014 — Tales Feed Component + Tale Card

**Milestone:** M3 — Home & Feed
**Read first:** ARCHITECTURE.md §5 (GraphQL Conventions)
**Depends on:** TICKET-011 (tales exist in DB), TICKET-013

---

## Objective
Build the tales feed that populates the home screen FlatList, including the tale card component design.

---

## Acceptance Criteria
- [ ] `components/TaleCard.tsx` — card component showing: child avatar(s), author name ("Told by Mum"), date (relative, e.g. "2 hours ago" using `date-fns`), narrative excerpt (first 150 chars), tags as chips
- [ ] `hooks/useTalesFeed.ts` — custom hook wrapping `useQuery(GET_TALES_FEED)` 
- [ ] `graphql/queries/GetTalesFeed.graphql` — fetches tales for current `family_account_id`, ordered by `created_at desc`, with nested `tale_children`, `tale_tags`, `author`
- [ ] Feed connected to home screen `FlatList` in `app/(app)/index.tsx`
- [ ] Pull-to-refresh supported
- [ ] Empty state: friendly illustration + "No tales yet — record your first one!" with CTA
- [ ] Loading state: 3 skeleton card placeholders
- [ ] Tapping a card navigates to `/(app)/tale/[id]`

---

## Files to Create
```
apps/mobile/
├── components/
│   ├── TaleCard.tsx
│   └── TaleCardSkeleton.tsx
├── hooks/useTalesFeed.ts
└── graphql/queries/GetTalesFeed.graphql
```
