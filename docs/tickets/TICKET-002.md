# TICKET-002 — Supabase + Postgres Schema + Hasura Setup

**Milestone:** M1 — Foundation
**Read first:** ARCHITECTURE.md §3 (Database Schema), §4 (Auth Model), §7 (File Storage)
**Depends on:** Nothing — this is infrastructure, not code

---

## Objective
Provision the Supabase project, run the full database schema, configure Hasura Cloud to connect to it, and set up Supabase Storage buckets. The result is a fully wired backend with no app code yet.

---

## Acceptance Criteria

### Supabase
- [ ] New Supabase project created (region: ap-southeast-2 Sydney)
- [ ] All tables from ARCHITECTURE.md §3.1 created via SQL migrations
- [ ] `family_tale_counts` view created (§3.2)
- [ ] Row Level Security (RLS) enabled on all tables
- [ ] RLS policies added: users can only read/write rows where `family_account_id` matches their JWT claim
- [ ] Three storage buckets created: `tale-media`, `child-photos`, `audio-temp`
- [ ] `audio-temp` bucket lifecycle rule set: auto-delete objects older than 24 hours
- [ ] Storage buckets set to private (no public access)

### Supabase Auth JWT Hook
- [ ] Postgres function `custom_access_token_hook` created that adds Hasura claims to the JWT:
  ```sql
  -- Returns x-hasura-user-id, x-hasura-family-account-id, x-hasura-default-role, x-hasura-allowed-roles
  ```
- [ ] Hook registered in Supabase Dashboard → Auth → Hooks → Custom Access Token

### Hasura Cloud
- [ ] New Hasura Cloud project created
- [ ] Connected to the Supabase Postgres database via connection string
- [ ] All tables tracked in Hasura
- [ ] All foreign key relationships tracked (array + object relationships)
- [ ] JWT secret configured in Hasura to validate Supabase-issued JWTs
- [ ] `parent` and `guest` roles created with permissions per ARCHITECTURE.md §4

### Hasura Migrations
- [ ] All schema managed via Hasura CLI migrations stored in `hasura/migrations/`
- [ ] `hasura/metadata/` exported and committed

---

## Files to Create
```
hasura/
├── config.yaml
├── migrations/
│   └── 1_init/
│       └── up.sql            # Full schema from ARCHITECTURE.md §3
└── metadata/                 # Exported via `hasura metadata export`
```

---

## Notes
- Do not put real credentials in committed files — use environment variables
- Record all connection strings and API keys in a local `.env.infrastructure` file (gitignored)
- The Hasura admin secret must be stored securely — you will need it for all future Hasura CLI operations
