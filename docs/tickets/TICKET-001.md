# TICKET-001 — Expo Project Scaffold

**Milestone:** M1 — Foundation
**Read first:** ARCHITECTURE.md §2 (Repository Structure), §10 (Key Conventions)

---

## Objective
Create the base Expo React Native project with all dependencies installed, folder structure in place, and TypeScript configured correctly. No screens need to be functional — this is scaffolding only.

---

## Acceptance Criteria
- [ ] Expo project created at `apps/mobile/` using `npx create-expo-app` with TypeScript template
- [ ] Expo Router installed and configured (file-based routing)
- [ ] NativeWind installed and configured for styling
- [ ] Apollo Client installed (`@apollo/client`, `graphql`)
- [ ] graphql-tada installed (`gql.tada`)
- [ ] Zustand installed
- [ ] Supabase JS client installed (`@supabase/supabase-js`)
- [ ] `react-native-toast-message` installed
- [ ] `date-fns` installed
- [ ] Folder structure matches ARCHITECTURE.md §2 exactly
- [ ] `lib/theme.ts` created with brand colours: `YELLOW = '#FDD835'`, `DARK = '#1A1A1A'`
- [ ] `tsconfig.json` has `strict: true`
- [ ] `.env` file created with placeholder keys matching ARCHITECTURE.md §9
- [ ] `npx expo start` runs without errors

---

## Files to Create
```
apps/mobile/
├── app/
│   ├── (auth)/
│   │   └── _layout.tsx       # Auth stack layout (placeholder)
│   ├── (app)/
│   │   └── _layout.tsx       # App stack layout (placeholder)
│   └── _layout.tsx           # Root layout
├── components/.gitkeep
├── graphql/
│   ├── queries/.gitkeep
│   └── mutations/.gitkeep
├── lib/
│   ├── theme.ts
│   ├── apollo.ts             # Placeholder — Apollo setup in TICKET-003
│   └── supabase.ts           # Placeholder — Supabase setup in TICKET-003
├── hooks/.gitkeep
├── .env
└── tsconfig.json
```

---

## Notes
- Use Expo SDK 51+ 
- Do NOT install navigation libraries other than Expo Router
- Do NOT build any screens yet — placeholder `_layout.tsx` files only
