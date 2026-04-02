# TICKET-012 — Share & Post: Audience Selector

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §3 (Account Structure — guest role)
**Depends on:** TICKET-011

---

## Objective
Add the final step before posting: a simple UI that shows who the tale will be shared with, matching the design in the PRD (sharing circle). In v1 all guests see all tales by default — this step is primarily confirmatory, but lays groundwork for per-tale guest selection later.

---

## Acceptance Criteria
- [ ] Sharing step shown between review and post
- [ ] Displays avatar bubbles for all active guests on the account
- [ ] "+" button shown if fewer than 2 guests have been invited (links to guest invite flow — can be a placeholder nav for now)
- [ ] Default state: tale shared with all guests (no per-guest selection needed in v1)
- [ ] "Post Tale" CTA proceeds to TICKET-011 insert logic
- [ ] If no guests yet: show encouraging copy — "Invite family to share your tales with them"

---

## Files to Modify
```
apps/mobile/app/(app)/tale/new.tsx    # Add sharing step before post
```
