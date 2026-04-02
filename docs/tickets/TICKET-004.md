# TICKET-004 — Auth Screens (Register & Login)

**Milestone:** M1 — Foundation
**Read first:** ARCHITECTURE.md §4 (Auth Model), §10 (Key Conventions)
**Depends on:** TICKET-001, TICKET-003

---

## Objective
Build the register and login screens. Auth is handled entirely by Supabase. On success, the user is routed to the app. On failure, a clear error is shown.

---

## Acceptance Criteria
- [ ] `app/(auth)/login.tsx` — email + password login screen
- [ ] `app/(auth)/register.tsx` — name + email + password registration screen
- [ ] Both screens use NativeWind for styling, brand colours from `lib/theme.ts`
- [ ] Login calls `supabase.auth.signInWithPassword()`
- [ ] Register calls `supabase.auth.signUp()` — does NOT create the user/family_account record (that is TICKET-005)
- [ ] On successful login → navigate to `/(app)/`
- [ ] On successful register → navigate to `/(app)/` (TICKET-005 will handle the onboarding step)
- [ ] Auth errors displayed as inline messages (not alerts) — e.g. "Invalid email or password"
- [ ] Loading spinner shown on button while request is in flight
- [ ] `app/(auth)/_layout.tsx` — redirect to `/(app)/` if user is already authenticated
- [ ] `app/(app)/_layout.tsx` — redirect to `/(auth)/login` if user is not authenticated
- [ ] Session persistence works across app restarts (Supabase handles this natively)

---

## UI Spec
- Logo / app name centred at top
- Input fields: email, password (and name on register)
- Primary CTA button in brand yellow (`#FDD835`) with dark text
- Link to switch between login/register screens
- Keyboard-aware scroll view so inputs are not hidden by keyboard

---

## Files to Create / Modify
```
apps/mobile/app/
├── (auth)/
│   ├── _layout.tsx           # Auth guard: redirect if already logged in
│   ├── login.tsx
│   └── register.tsx
└── (app)/
    └── _layout.tsx           # Auth guard: redirect if not logged in
```

---

## Notes
- Do not build the full app shell in `(app)/_layout.tsx` — a placeholder screen is fine
- Do not implement password reset in this ticket
- Do not implement Sign in with Apple / Google in this ticket
