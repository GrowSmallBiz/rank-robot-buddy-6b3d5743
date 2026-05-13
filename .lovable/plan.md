# Redesign: "AI Livechat" Section → "While You're With a Client, AI Handles the Rest"

## Goal
Replace the current single-chat demo with a split, parallel-scenario visual that shows:
- **Center stage**: A massage therapist actively in a session (calm, "do not disturb" framing).
- **Left panel**: Voice AI answering an incoming call and booking an appointment.
- **Right panel**: Website Live Chat answering a visitor question and booking an appointment.

Both AI panels animate in parallel so the user sees two leads being captured **at the same moment** the therapist can't pick up.

## Scope
Only the section currently at `src/pages/MothersDayCohort.tsx` lines 937–954 (the `<AiLivechatDemo />` block) and the `AiLivechatDemo` component. Nothing else on the page changes.

## New copy

- Eyebrow: `AI That Works While You Work`
- Headline: `While You're With a Client, AI Answers Every Call and Chat`
- Subhead: `You can't pause a massage to grab the phone or reply to a website visitor. Your Voice AI and Website Live Chat handle both — answering questions, qualifying leads, and booking appointments — so no opportunity slips by while you're in session.`

## Layout (desktop)

```text
┌────────────────────────────────────────────────────────────────┐
│  [Eyebrow] [Headline] [Subhead]                                │
├──────────────┬───────────────────────────┬─────────────────────┤
│  VOICE AI    │   THERAPIST IN SESSION    │   WEBSITE CHAT      │
│  (call UI)   │   (image + status badge)  │   (chat UI)         │
│              │   "In session • Do not    │                     │
│  Incoming    │    disturb"               │   Visitor typing    │
│  call → AI   │   Soft pulse ring         │   → AI replies      │
│  picks up    │                           │                     │
│  → books     │                           │   → books           │
│  appointment │                           │   appointment       │
│              │                           │                     │
│  ✓ Booked    │                           │   ✓ Booked          │
└──────────────┴───────────────────────────┴─────────────────────┘
        ↑ both panels animate in parallel, looping
```

Mobile: stacks vertically — Voice AI → Therapist image → Website Chat.

## Animation behavior

Single shared timeline driven by `IntersectionObserver`, respects `prefers-reduced-motion`:

1. Both panels reset.
2. Therapist card shows "In session" pulse from t=0.
3. **Left (Voice AI)** plays a 4-line transcript with typing dots:
   - Caller: "Hi, do you have anything Saturday?"
   - AI: "Yes — I have 1pm and 3pm open. May I get your name and number?"
   - Caller: "Maya — 925-555-0118"
   - AI: "Booked for 1pm Saturday. Confirmation text sent."
   - Ends with badge: `✓ Appointment booked` + `✓ Added to CRM`.
4. **Right (Website Chat)** plays a 4-line transcript in parallel (offset ~600ms):
   - Visitor: "Do you offer prenatal massage?"
   - AI: "Yes! 60 and 90-minute prenatal sessions available. Want me to book one?"
   - Visitor: "Saturday afternoon if possible"
   - AI: "Booking link sent. 2pm Saturday is open — tap to confirm."
   - Ends with badge: `✓ Lead captured` + `✓ Booking link sent`.
5. Hold ~3s, loop.

Reduced motion: render final state (both transcripts complete, both badges visible) with no animation.

## Visuals

- **Voice AI panel**: phone-call card UI — avatar with `Phone` icon, "Incoming call" → "On call 0:24" timer, transcript bubbles styled distinctly from chat (caller bubbles right-aligned, AI left-aligned, slightly different tint to read as "voice transcript" vs chat).
- **Therapist center card**: existing massage/spa imagery if available in `src/assets`; otherwise generate a warm, on-brand image (`src/assets/cohort/therapist-in-session.webp`) — soft lighting, hands on shoulder, no faces required, premium spa aesthetic. Overlay a small status chip: `● In session — Do not disturb`.
- **Website Chat panel**: reuses current chat aesthetic from `AiLivechatDemo` (kept as the right column treatment).
- All cards: `rounded-3xl`, `border-border`, soft warm shadow consistent with existing section.

## Technical implementation

- Rename/replace `src/components/sections/AiLivechatDemo.tsx` with a new `AiBusyMomDemo.tsx` (keep old file deleted) exporting `AiBusyMomDemo`. Update the import + usage in `MothersDayCohort.tsx`.
- Internally, factor two small subcomponents: `<VoiceCallPanel script={...} />` and `<ChatPanel script={...} />`, plus `<TherapistCard />`. Single parent owns the timeline so both panels stay in sync.
- Generate one new image asset: `src/assets/cohort/therapist-in-session.webp` (premium quality, transparent_background false, ~1024×1024). Imported as ES6.
- Use semantic Tailwind tokens only (`bg-card`, `text-foreground`, `text-primary`, `border-border`, `text-muted-foreground`). No hardcoded colors except the existing brand gradient already used in eyebrow/headline.
- Section copy update inline in `MothersDayCohort.tsx` (eyebrow / h2 / subhead text only).

## Out of scope
- Pricing section, nav, other sections.
- No new data, routes, or backend.
- No CTA changes.
