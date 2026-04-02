# TICKET-007 — Audio Recording Screen

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §6 (AI Pipeline — request shape), §7 (File Storage — audio-temp bucket)
**Depends on:** TICKET-006

---

## Objective
Build the first two steps of the "Tell a Tale" flow: child selection and audio recording. On completion, the audio file is uploaded to Supabase Storage and the screen advances to the AI processing step (TICKET-010).

---

## Acceptance Criteria

### Step 1 — Child Selection
- [ ] Displays all children in the family account as avatar chips
- [ ] Multi-select: tap to select, tap again to deselect
- [ ] At least one child must be selected before recording can start
- [ ] Fetched via GraphQL query: `GetFamilyChildren`

### Step 2 — Recording
- [ ] Uses `expo-av` for audio recording
- [ ] Large circular record button — tap to start, tap to stop
- [ ] Animated waveform or pulsing indicator while recording is active
- [ ] Pause and resume supported
- [ ] Copy beneath button: "Don't worry about pauses — just capture the feeling"
- [ ] On stop: audio file saved locally as `.m4a`

### Upload
- [ ] After recording stops, file is uploaded to `audio-temp` bucket in Supabase Storage
- [ ] Filename: `{familyAccountId}/{timestamp}.m4a`
- [ ] Upload progress indicator shown
- [ ] On upload success: navigate to processing screen (TICKET-010) passing `{ audioUrl, selectedChildIds }`
- [ ] On upload failure: show error toast with retry option

---

## Files to Create
```
apps/mobile/
├── app/(app)/tale/
│   └── new.tsx               # Hosts the multi-step flow (steps live here)
├── components/
│   ├── ChildChip.tsx         # Reusable child avatar chip
│   └── RecordButton.tsx      # Animated record button
└── graphql/queries/
    └── GetFamilyChildren.graphql
```
