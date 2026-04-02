# TICKET-013 — Home Screen Layout + Inspiration Banner

**Milestone:** M3 — Home & Feed
**Read first:** ARCHITECTURE.md §5 (GraphQL Conventions), §10 (Key Conventions)
**Depends on:** TICKET-005

---

## Objective
Build the home screen layout: the inspiration banner at the top and the floating action button. The tales feed is wired in TICKET-014.

---

## Acceptance Criteria
- [ ] `app/(app)/index.tsx` — main home screen
- [ ] Header: app logo/name left, settings icon right (links to account screen — placeholder nav)
- [ ] Greeting: "Hey [parent name]" using name from Zustand `currentUser`
- [ ] Inspiration banner: yellow card with a rotating prompt string and "Capture this moment →" CTA
  - Prompts are a hardcoded array of 20 strings in `lib/inspirationPrompts.ts` for v1
  - A new prompt is selected daily using `new Date().getDate() % prompts.length` as index
  - Tapping the CTA navigates to `/(app)/tale/new`
- [ ] Floating action button (FAB): circular, brand yellow, "+" icon, fixed bottom-right, navigates to `/(app)/tale/new`
- [ ] "Your tales" section heading below the banner
- [ ] Screen is a `FlatList` with the banner and heading as `ListHeaderComponent`

---

## Files to Create
```
apps/mobile/
├── app/(app)/index.tsx
├── components/InspirationBanner.tsx
├── components/FAB.tsx
└── lib/inspirationPrompts.ts
```
