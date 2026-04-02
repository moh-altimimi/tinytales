# TICKET-008 — Cloudflare Worker: AI Pipeline

**Milestone:** M2 — Core Tale Flow
**Read first:** ARCHITECTURE.md §6 (AI Pipeline — full section)
**Depends on:** TICKET-002 (Supabase storage bucket exists)

---

## Objective
Build and deploy the Cloudflare Worker that receives an audio file URL, transcribes it via Whisper, generates a polished narrative via Claude, then returns structured JSON. This is a standalone service — no mobile code in this ticket.

---

## Acceptance Criteria
- [ ] Worker created at `services/ai-pipeline/src/index.ts`
- [ ] `POST /process` endpoint accepts JSON body per ARCHITECTURE.md §6
- [ ] Fetches audio from the Supabase Storage signed URL
- [ ] Sends audio to OpenAI Whisper (`whisper-1`) and gets transcript
- [ ] Sends transcript + child names to Anthropic Claude (`claude-sonnet-4-5`) using system prompt from ARCHITECTURE.md §6
- [ ] Parses Claude response as JSON — retries once if JSON is malformed
- [ ] Deletes the audio file from Supabase Storage after successful processing
- [ ] Returns `{ narrative, title, tags }` — tags must only contain values from the taxonomy in PRD §5.3
- [ ] Returns HTTP 400 with `{ error }` on validation failure
- [ ] Returns HTTP 500 with `{ error }` on processing failure (does not leak API keys or stack traces)
- [ ] Worker deployed to Cloudflare via `wrangler deploy`
- [ ] Environment variables set in Cloudflare dashboard (not committed): `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_URL`
- [ ] Tested end-to-end with a real `.m4a` file — returns valid narrative + tags

---

## Files to Create
```
services/ai-pipeline/
├── src/
│   └── index.ts
├── wrangler.toml
├── package.json
└── .dev.vars                 # Local secrets (gitignored)
```
