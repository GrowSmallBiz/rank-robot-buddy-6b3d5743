
## Phase 1: Componentize photographers-marketing into config-driven template

### Step 1: Create NicheConfig TypeScript interface
- File: `src/components/niche-page/NicheConfig.ts`
- Defines every PARAM field per the spec (page meta, hero, pain points, system diagram, website design, SEO, paid media, retargeting, social media, AI growth system, reputation, AI voice/chat, why choose us, FAQ, contact, sticky CTA)

### Step 2: Create section components (batch 1 — simpler sections)
- `src/components/niche-page/sections/HeroSection.tsx`
- `src/components/niche-page/sections/PainPointsSection.tsx`
- `src/components/niche-page/sections/SystemDiagramSection.tsx`
- `src/components/niche-page/sections/CtaBlock.tsx`
- `src/components/niche-page/sections/OnThisPageNav.tsx`
- `src/components/niche-page/sections/WebsiteDesignSection.tsx`

### Step 3: Create section components (batch 2 — larger sections)
- `src/components/niche-page/sections/SeoSection.tsx` (~500 lines, FIXED sub-sections + PARAM headlines)
- `src/components/niche-page/sections/PaidMediaSection.tsx`
- `src/components/niche-page/sections/RetargetingSection.tsx`
- `src/components/niche-page/sections/SocialMediaSection.tsx`

### Step 4: Create section components (batch 3 — remaining sections)
- `src/components/niche-page/sections/AiGrowthSystemSection.tsx`
- `src/components/niche-page/sections/ReputationSection.tsx`
- `src/components/niche-page/sections/AiVoiceChatSection.tsx`
- `src/components/niche-page/sections/WhyChooseUsSection.tsx`
- `src/components/niche-page/sections/FaqSection.tsx`

### Step 5: Create master layout + photographers config
- `src/components/niche-page/NichePage.tsx` — assembles all sections, includes Header/Footer, Head meta, ServiceJsonLd, ConsultationFormSection, Back-to-Top, and StickyCardCTA
- `src/pages/industries/photographers-marketing/config.ts` — all photographers-specific content extracted from current file
- `src/pages/industries/photographers-marketing/index.tsx` — imports config + NichePage

### Step 6: Fix persistent popup modal
- Update StickyCardCTA to use sessionStorage for one-time display after 60% scroll
- Dismiss permanently for that session

### Step 7: Remove 3 sections
- Case Studies, Testimonials, Blog sections omitted from NichePage (not rendered)

### Step 8: Update routing
- Update App.tsx route to point to new `photographers-marketing/index.tsx`
- Delete old `PhotographersMarketing.tsx`

## Phase 2: Create blank template
- `src/components/niche-page/NicheConfigTemplate.ts` — full interface + blank config with JSDoc

## Verification
- Ensure page renders at `/professional-services/photographers-marketing/` without errors
- All 19 retained sections render with correct photographers content
- 3 removed sections (Case Studies, Testimonials, Blog) are gone
- Sticky CTA only appears once per session
