# TICKET-009 — Hasura Action: Wire AI Pipeline into GraphQL

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §6 (Hasura Action Definition)
**Depends on:** TICKET-002 (Hasura running), TICKET-008 (Worker deployed and URL known)

---

## Objective
Register the AI pipeline Cloudflare Worker as a Hasura Action so the mobile app can trigger AI processing via a single authenticated GraphQL mutation.

---

## Acceptance Criteria
- [ ] Hasura Action `processAudioTale` created with:
  - Input type: `ProcessAudioTaleInput { audio_url: String!, child_ids: [uuid!]!, child_names: [String!]! }`
  - Output type: `ProcessAudioTaleOutput { narrative: String!, title: String!, tags: [String!]! }`
  - Handler URL: deployed Cloudflare Worker `/process` endpoint
  - Request transform per ARCHITECTURE.md §6 (injects `family_account_id` from session variable)
- [ ] Action is only accessible to `parent` role
- [ ] Action definition committed to `hasura/metadata/`
- [ ] Tested from Hasura Console with a real audio URL — returns correct response

---

## Files to Modify
```
hasura/metadata/actions.yaml          # Add processAudioTale action
hasura/metadata/actions.graphql       # Add input/output types
```
