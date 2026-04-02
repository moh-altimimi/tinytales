# TICKET-010 — Tale Review & Edit Screen

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §5 (GraphQL Conventions), §6 (AI Pipeline response shape)
**Depends on:** TICKET-007, TICKET-009

---

## Objective
Build the screen that receives the AI-processed narrative, lets the parent edit it, manage tags, and attach photos before posting.

---

## Acceptance Criteria
- [ ] Screen receives `{ audioUrl, selectedChildIds }` as navigation params
- [ ] On mount: calls `processAudioTale` Hasura Action mutation with the audio URL and child names
- [ ] Loading state shown while AI is processing ("Writing your tale…")
- [ ] On success: displays narrative in an editable `TextInput` (multiline, scrollable)
- [ ] Tags displayed as removable chips — parent can tap X to remove a tag
- [ ] "Add tag" button opens a bottom sheet with the full tag taxonomy for manual selection
- [ ] Media attachment: "Add photos" button opens image picker, allows up to 5 selections
- [ ] Selected photos displayed as a horizontal scrollable thumbnail row with remove option
- [ ] "Post Tale" button at bottom (navigates to TICKET-012 logic)
- [ ] If AI processing fails: show raw "We couldn't process your recording — you can write your tale manually" state with an empty editable field

---

## Files to Create / Modify
```
apps/mobile/
├── app/(app)/tale/
│   └── new.tsx               # Add review step to existing flow
├── components/
│   ├── TagChip.tsx
│   ├── TagPicker.tsx         # Bottom sheet for tag selection
│   └── MediaThumbnailRow.tsx
└── graphql/mutations/
    └── ProcessAudioTale.graphql
```
