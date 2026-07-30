## Landscape Page SEO Structure — To-Do

Three approved items, plus the revised heading outline. No code changes until you approve this plan.

### 1. Remove FAQ category tabs
Show all 18 Q&A in one continuous accordion so every answer is visible by default (no `hidden` tab panes). Keep the existing `FAQPage` JSON-LD untouched.

- File: `src/components/niche-page/sections/FaqSection.tsx`
- Drop the Radix `Tabs` wrapper; render categories as labelled groups in a single column.
- Optional: keep the first accordion item open, rest collapsed (accordion content stays in the DOM and visible on expand).

### 2. Fix the duplicate H1
The `<noscript>` fallback in `index.html` outputs a second, sitewide, off-topic H1.

- File: `index.html`
- Demote `GrowSmallBiz Digital Marketing — AI-Powered SEO & Marketing Services` from `<h1>` to `<p>`.
- Result: exactly one H1 per page (the Otto-optimized one).

### 3. Flatten the heading hierarchy
Cut ~26 H2s down to 5–6 topical pillars; everything else becomes H3/H4 or plain text. Visual styling stays identical — only the tag level changes.

Target outline:

```text
H1  High-Ticket Marketing for Landscape Construction & Hardscape Contractors
H2  Why Landscape & Hardscape Contractors Struggle to Scale
    H3  pain points, hero-extended cards, industry stats (stats become <p>)
H2  Services We Market for Landscape & Hardscape Contractors
    H3  the 6 service cards
H2  The Marketing Channels That Drive Six-Figure Projects
    H3  Website Design   H3  SEO   H3  Paid Media
    H3  Retargeting      H3  Social Media
H2  AI Automation & Client Retention
    H3  AI Growth System   H3  Reputation
    H3  AI Voice Receptionist   H3  Website Live AI Chat
H2  How It Works & Who It's For
    H3  process steps   H3  qualification criteria
H2  Frequently Asked Questions
    H3  each question (kept, since tabs are being removed)
H2  Why Choose GrowSmallBiz
```

CTA block headlines (`Ready to…`) drop from H2 to `<p>`/`<strong>` with identical styling.

### Technical notes
- Heading levels are driven by shared niche-page section components, so each section gets an optional `headingLevel` prop (default unchanged) to avoid affecting other verticals (dental, roofing, etc.).
- Files touched: `HeroSection.tsx`, `PainPointsSection.tsx`, `IndustryStatsSection.tsx`, `WebsiteDesignSection.tsx`, `SeoSection.tsx`, `PaidMediaSection.tsx`, `RetargetingSection.tsx`, `SocialMediaSection.tsx`, `AiGrowthSystemSection.tsx`, `ReputationSection.tsx`, `AiVoiceChatSection.tsx`, `HowItWorksSection.tsx`, `WhoThisIsForSection.tsx`, `FaqSection.tsx`, CTA components, plus the landscape `config.ts` for the new grouping headings.
- No design-token, color, or layout changes.
- After the edits: run the prerender verification script and re-check the rendered heading tree.

### Out of scope (flagged separately)
- Shortening the 73-char meta title — needs your call on the new wording, or an Otto title rule.
- The route-delivery check on `growsmallbiz.io` (SPA fallback vs. per-route prerendered HTML) — Cloudflare-side, not a code change.
