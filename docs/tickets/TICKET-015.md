# TICKET-015 — Feed Filter Bar

**Milestone:** M3 — Home & Feed
**Read first:** ARCHITECTURE.md §5
**Depends on:** TICKET-014

---

## Objective
Add a filter bar below the "Your tales" heading that lets parents filter by child and by tag category.

---

## Acceptance Criteria
- [ ] Horizontal scrollable chip row: "All" + one chip per child (with avatar) + tag filter button
- [ ] Selecting a child chip filters the feed to tales tagged with that child
- [ ] Tag filter opens a bottom sheet with tag taxonomy checkboxes (multi-select)
- [ ] Active filters highlighted in brand yellow
- [ ] Filters applied client-side using Apollo cache + `where` clause variables passed to `GetTalesFeed` query
- [ ] "All" chip clears all filters
- [ ] Filter state stored in component state (not Zustand — filters are screen-local)

---

## Files to Create
```
apps/mobile/components/
├── FeedFilterBar.tsx
└── TagFilterSheet.tsx
```
