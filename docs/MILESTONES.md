# Tiny Tales — Milestone Map

> For your eyes only — agents do not need this document.

---

## Overview

| Milestone | Name | Tickets | Goal |
|---|---|---|---|
| M1 | Foundation | 001–005 | Working app shell with auth and schema |
| M2 | Core Tale Flow | 006–012 | End-to-end: record → AI → post a tale |
| M3 | Home & Feed | 013–017 | Browse, filter, and read tales |
| M4 | Guests & Social | 018–022 | Invite guests, react, comment |
| M5 | Account & Settings | 023–027 | Profile, guest management, data rights |
| M6 | Monetisation | 028–031 | Free cap, subscription, printed book |

Each milestone should be fully working before starting the next.
Agents for M2+ require ARCHITECTURE.md + their ticket only.

---

## M1 — Foundation
**Goal:** A working Expo app that can register, log in, and connect to Hasura. No UI polish needed.

| Ticket | Task |
|---|---|
| TICKET-001 | Expo project scaffold |
| TICKET-002 | Supabase project + Postgres schema + Hasura setup |
| TICKET-003 | graphql-tada + Apollo Client setup |
| TICKET-004 | Auth screens — register & login |
| TICKET-005 | Post-signup: create family account + user record |

**Done when:** A new user can register, a family_account row is created, and a typed GraphQL query returns data from Hasura.

---

## M2 — Core Tale Flow
**Goal:** A parent can record their voice, receive an AI-polished tale, and post it.
**Depends on:** M1 complete.

| Ticket | Task |
|---|---|
| TICKET-006 | Child profile — create & edit screen |
| TICKET-007 | Audio recording screen |
| TICKET-008 | Upload audio to Supabase Storage |
| TICKET-009 | Cloudflare Worker — AI pipeline (Whisper + Claude) |
| TICKET-010 | Hasura Action — wire AI pipeline into GraphQL |
| TICKET-011 | Tale review & edit screen |
| TICKET-012 | Post tale mutation + success state |

**Done when:** A parent can go from record → AI-processed narrative → post, and the tale appears in the database.

---

## M3 — Home & Feed
**Goal:** Parents can browse, read, and filter their tales.
**Depends on:** M2 complete (needs real tales in the DB).

| Ticket | Task |
|---|---|
| TICKET-013 | Home screen layout + inspiration banner |
| TICKET-014 | Tales feed component + tale card |
| TICKET-015 | Feed filter bar (by child, by tag) |
| TICKET-016 | Tale detail view |
| TICKET-017 | Edit & delete tale |

**Done when:** Home screen shows a live feed with working filters, and tales can be read, edited, and deleted.

---

## M4 — Guests & Social
**Goal:** Extended family can be invited, view tales, and react/comment.
**Depends on:** M3 complete.

| Ticket | Task |
|---|---|
| TICKET-018 | Guest invite — generate & share link |
| TICKET-019 | Guest onboarding — accept invite flow |
| TICKET-020 | Guest feed view (read-only) |
| TICKET-021 | Emoji reactions on tales |
| TICKET-022 | Comments on tales |

**Done when:** A parent can invite a guest via link, the guest can view tales, and react/comment.

---

## M5 — Account & Settings
**Goal:** Parents can manage their account, children, guests, and data.
**Depends on:** M4 complete.

| Ticket | Task |
|---|---|
| TICKET-023 | Account screen layout + parent profile edit |
| TICKET-024 | Child profile management screen |
| TICKET-025 | Guest management screen (view, revoke) |
| TICKET-026 | Data export (tales as JSON) |
| TICKET-027 | Account deletion |

**Done when:** All account management flows are functional.

---

## M6 — Monetisation
**Goal:** Free tier cap enforced, subscription available, printed book can be ordered.
**Depends on:** M5 complete.

| Ticket | Task |
|---|---|
| TICKET-028 | Free tier enforcement + upgrade prompt |
| TICKET-029 | In-app subscription (RevenueCat) |
| TICKET-030 | PDF book generation |
| TICKET-031 | Printed book order flow |

**Done when:** Free users hit the 25-tale cap and are prompted to upgrade; paid users can order a printed book.

---

## Dependency Graph

```
M1 (Foundation)
  └── M2 (Core Tale Flow)
        └── M3 (Home & Feed)
              └── M4 (Guests & Social)
                    └── M5 (Account & Settings)
                          └── M6 (Monetisation)
```

M1–M3 are the MVP. M4–M6 complete the full product.
