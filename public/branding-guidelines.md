# GrowSmallBiz — Complete Branding & UX Guidelines

> Use this document to replicate the GrowSmallBiz website design system on any new project.

---

## 1. GLOBAL DESIGN PHILOSOPHY

- **Theme:** Dark-mode-first, professional agency aesthetic
- **Tone:** Confident, authoritative, results-driven — speaks as a marketing agency executing for clients
- **Mood:** Premium tech meets warm approachability — dark navy backgrounds with warm coral/orange accents
- **Layout:** Centered container (max `1400px`), generous vertical padding (`py-24` / `py-32` on sections)
- **Border radius:** Default `0.75rem` (12px), cards use `rounded-2xl` (1rem / 16px)

---

## 2. COLOR PALETTE

### Primary Colors (HSL format for CSS variables)

| Token | HSL Value | Hex (approx) | Usage |
|---|---|---|---|
| `--background` | `210 50% 12%` | `#152233` | Page background — dark navy |
| `--foreground` | `210 20% 98%` | `#F8FAFB` | Primary text — near-white |
| `--card` | `210 45% 16%` | `#1A2D42` | Card/elevated surface |
| `--primary` | `18 85% 60%` | `#E8723A` | Primary action color — warm coral/orange |
| `--primary-foreground` | `210 50% 12%` | `#152233` | Text on primary buttons |
| `--secondary` | `210 40% 20%` | `#1F3347` | Secondary backgrounds |
| `--muted` | `210 35% 22%` | `#243A4F` | Subtle backgrounds |
| `--muted-foreground` | `210 20% 70%` | `#A3B1BF` | Secondary text |
| `--destructive` | `0 84% 60%` | `#EF4444` | Error/negative state |
| `--border` | `210 35% 22%` | `#243A4F` | Default border color |

### Accent & Glow Colors

| Token | Value | Usage |
|---|---|---|
| `--glow-primary` | `18 85% 60%` | Orange glow on hover effects |
| `--glow-accent` | `188 78% 41%` | Teal/cyan glow accent |
| `--ghl-card-border` | `188 78% 41%` | Teal card borders — `#17a2b8` |
| `--ghl-icon` | `16 100% 66%` | Icon container orange — `#FF7F50` |

### Key Hardcoded Colors

| Color | Hex | Usage |
|---|---|---|
| Stat value orange | `#FC8253` | Large stat numbers |
| Teal accent | `#17a2b8` | Card borders, glow effects, feature card borders |
| Teal card bg | `#2d465c` | Feature card & testimonial card backgrounds |
| Dark purple section | `#191321` | Consultation form inner background |
| Form section bg | `#2d465c` | Consultation form outer background |

---

## 3. TYPOGRAPHY

### Font Stack

| Role | Font Family | Weight Range | Tailwind Class |
|---|---|---|---|
| **Body text** | `Poppins` | 300–900 | `font-sans` (default) |
| **Headings / Display** | `Montserrat` | 400–800 | `font-display` |

### Import
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800&display=swap');
```

### Type Scale

| Element | Size | Font | Weight | Notes |
|---|---|---|---|---|
| **H1 (Hero)** | `text-4xl md:text-5xl lg:text-6xl` | Montserrat | 700 (`font-bold`) | `leading-tight`, single per page |
| **H2 (Section)** | `text-3xl md:text-4xl` | Montserrat | 700 | Section titles |
| **H3 (Card)** | `text-xl` or `text-2xl` | Montserrat | 600 (`font-semibold`) | Card/feature titles |
| **Body large** | `text-xl md:text-2xl` | Poppins | 500 (`font-medium`) | Hero subheadline |
| **Body** | `text-lg` | Poppins | 400 | Descriptions |
| **Body small** | `text-sm` | Poppins | 400 | Card descriptions, list items |
| **Label/Meta** | `text-xs` | Poppins | 500 | Badges, timestamps, uppercase labels |
| **Stat values** | `text-4xl md:text-5xl` | Montserrat | 700 | Colored `#FC8253` |

### Text Color Classes

- **Primary text:** `text-foreground` (near-white)
- **Secondary text:** `text-muted-foreground` (blue-gray)
- **Accent text:** `text-primary` (coral/orange)
- **Gradient text:** `.text-gradient` class → `linear-gradient(135deg, primary 0%, hsl(199 89% 48%) 100%)`

---

## 4. BUTTONS

### Variants (via `class-variance-authority`)

| Variant | Style | Usage |
|---|---|---|
| `default` | Solid primary bg, dark text | Standard actions |
| `hero` | Gradient `from-primary to-[hsl(199_89%_48%)]`, shadow | Primary CTAs in hero sections |
| `heroOutline` | 2px primary/50 border, transparent bg | Secondary CTAs in hero sections |
| `outline` | 1px border, transparent bg | Tertiary actions, "Learn More" |
| `ghost` | No bg, hover shows secondary | Navigation items |
| `glow` | Solid primary with animated glow pulse | Attention-grabbing actions |

### Sizes

| Size | Height | Padding | Text |
|---|---|---|---|
| `sm` | `h-9` | `px-3` | Default `text-sm` |
| `default` | `h-10` | `px-4` | `text-sm` |
| `lg` | `h-12` | `px-8` | `text-base` |
| `xl` | `h-14` | `px-10` | `text-lg` |

### CTA Button Pattern (CardCTA gradient)
```css
background: linear-gradient(90deg, hsl(25 90% 55%) 0%, hsl(35 85% 60%) 35%, hsl(199 80% 55%) 100%);
box-shadow: 0 12px 35px -8px hsla(25, 90%, 50%, 0.6);
border-radius: 9999px; /* fully rounded */
```

---

## 5. SECTION-BY-SECTION UX SPECIFICATIONS

---

### 5.1 HEADER (Fixed Navigation)

- **Position:** Fixed top, `z-50`
- **Background:** `bg-background/80 backdrop-blur-xl`
- **Border:** `border-b border-border`
- **Height:** `h-20` (80px)
- **Logo:** Image logo, `h-12`
- **Nav links:** `text-sm font-medium text-muted-foreground`, active state: `text-primary`
- **Dropdowns:** `bg-card border border-border rounded-xl shadow-2xl p-2`, appear on hover with fade+slide animation (`opacity-100 translate-y-0`)
- **CTA (desktop):** Phone number button — `bg-primary rounded-lg`, shows "Call Now & Schedule Today" + phone number
- **Mobile:** Hamburger menu, full-width dropdown below header, collapsible accordion sub-menus

---

### 5.2 HERO SECTION

- **Padding:** `pt-32 pb-24` (accounts for fixed header)
- **Background:** Full-bleed background image with `bg-background/85` overlay
- **Decorative:** Two blurred circles (`w-80 h-80 bg-primary/10 rounded-full blur-3xl`) positioned top-right and bottom-left
- **Badge/Pill:** `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium` with icon
- **H1:** `text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight`
- **Highlight span:** `.text-gradient` — gradient text from orange to blue
- **Subheadline:** `text-xl md:text-2xl text-muted-foreground font-medium`
- **Body:** `text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto`
- **CTA group:** `flex flex-col sm:flex-row gap-4 justify-center`
  - Primary: `variant="hero" size="xl"` with arrow icon
  - Secondary: `variant="heroOutline" size="xl"`
- **Animation:** Staggered `animate-fade-up` with `delay-100` through `delay-400`

---

### 5.3 COMPARISON SECTION (Fragmented vs Integrated)

- **Background:** `bg-card/80 border-t border-primary/10`
- **Overlay:** `bg-gradient-to-b from-card/50 to-transparent opacity-50`
- **Decorative:** Two blurred circles (`w-96 h-96 bg-primary/5` and `bg-accent/5`)
- **Header:** Centered, orange subtitle + bold H2
- **Layout:** `grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto`
- **Card style:** `bg-background/80 border border-ghl-icon rounded-2xl p-8`
  - Hover: `shadow-[0_0_60px_rgba(255,127,80,0.3)]`
- **"Our Solution" card:** `border-2 border-primary/30` + floating badge (`absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground rounded-full`)
- **List items:** Icon + bold title + description pattern
  - Negative: `XCircle` icon in `text-destructive/60`
  - Positive: `CheckCircle2` icon in `text-primary`

---

### 5.4 GROWTH STEPS SECTION (Digital Dominance Method)

- **Background class:** `.section-dark` — triple-gradient: `hsl(210 50% 8%) → hsl(210 50% 12%) → hsl(210 50% 8%)`
- **Header:** Orange subtitle + H2 with `.text-gradient` highlight
- **Grid:** `md:grid-cols-2 lg:grid-cols-4 gap-6`
- **Cards:** `bg-background/80 border border-ghl-icon rounded-xl p-6 text-center space-y-4`
  - Hover: `shadow-[0_0_60px_rgba(255,127,80,0.5)]`
  - Icon container: `w-16 h-16 mx-auto rounded-2xl bg-primary/10` with `text-primary` icon
  - Title: `font-display font-semibold text-foreground text-lg`
  - Description: `text-sm text-muted-foreground`
- **Below cards:** Italic testimonial quote + hero CTA button

---

### 5.5 SERVICES GRID SECTION

- **Background:** `bg-card/80 border-t border-primary/10` with gradient overlay
- **Header:** Orange subtitle + H2 with `.text-gradient` span
- **Grid:** `md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Card style (Teal variant):**
  - Border: `2px solid #17a2b8`
  - Background: `#2d465c`
  - Hover: `shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]`
  - `backdrop-blur-sm rounded-2xl p-6 space-y-4`
- **Icon container:** `w-12 h-12 rounded-xl bg-ghl-icon/20` with `text-ghl-icon` icon
- **Feature list:** `CheckCircle2` icon in `text-ghl-icon` + `text-sm text-muted-foreground`
- **Button:** `variant="outline"` with `border-ghl-icon/50 hover:bg-ghl-icon/10 hover:border-ghl-icon`, full width
- **"Coming Soon" badge:** `absolute -top-3 right-4 px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full`

---

### 5.6 CARD CTA (Mid-page Call-to-Action)

- **Layout:** Full-width section with centered `max-w-5xl` card
- **Card style:**
  - Background: `hsl(215 40% 13%)`
  - Border: `1px solid hsla(25, 90%, 55%, 0.5)`
  - Shadow: `0 0 50px -10px hsla(25, 90%, 55%, 0.25)`
  - `rounded-2xl p-8 md:p-12 lg:p-14`
- **Layout inside:** `flex flex-col md:flex-row items-center gap-10 md:gap-14`
- **Left:** Photo with gray gradient ring (`w-36 h-36 md:w-40 md:h-40 rounded-full`) + name/role below
- **Right:** H2 title (can have gradient accent words) + description + two buttons
  - Primary button: Gradient `orange → gold → blue`, fully rounded, strong shadow
  - Secondary button: Outline with phone icon, fully rounded

---

### 5.7 WHY CHOOSE SECTION

- **Background:** `bg-card/80 border-t border-primary/10`
- **Has light variant** with `bg-stone-50/stone-100` for alternate pages
- **Header:** Orange subtitle + bold H2 + description paragraph
- **Grid:** `md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Cards:** `rounded-xl p-6 space-y-4 bg-background/80 border border-ghl-icon`
  - Hover: `shadow-[0_0_60px_rgba(255,127,80,0.5)]`
  - Icon container: `w-12 h-12 rounded-xl bg-primary/10`
  - Title: `font-display font-semibold text-foreground`
  - Description: `text-sm leading-relaxed text-muted-foreground`

---

### 5.8 ANIMATED STATS SECTION

- **Background:** Triple-gradient: `hsl(210 50% 8%) → hsl(210 45% 14%) → hsl(210 50% 8%)`
- **Decorative:** Two blurred circles at top-left and bottom-right
- **Padding:** `py-20`
- **Grid:** `grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12`
- **Animation:** Intersection Observer triggers count-up animation on scroll (2s duration, ease-out-quart easing)
- **Default variant (with icons):**
  - Icon container: `w-14 h-14 rounded-xl bg-[#FC8253]/15 border border-[#FC8253]/30`
  - Hover glow: `shadow-[0_0_25px_rgba(252,130,83,0.4)] bg-[#FC8253]/25`
  - Stat value: `text-4xl md:text-5xl font-display font-bold` in `#FC8253`
  - Label: `text-sm text-slate-400 font-medium`
- **Card variant:** `bg-background/80 border border-ghl-icon rounded-2xl p-6 text-center`, hover orange glow

---

### 5.9 TESTIMONIALS SECTION

- **Background:** Gradient: `hsl(210 45% 16%) → hsl(210 50% 12%) → hsl(210 45% 16%)`
- **Has light variant** with warm stone tones for alternate pages
- **Decorative:** Two offset blurred circles
- **Header:** "Testimonials" label in primary + bold H2
- **Grid:** `md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Card style (Teal):** `border: 2px solid #17a2b8`, bg `#2d465c`, `backdrop-blur-sm rounded-2xl p-8 space-y-6`
  - Hover: `shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]`
- **Content:** Star rating (filled primary stars) → quote text → author name + role/company

---

### 5.10 CASE STUDY SECTION

- **Background:** Default with `.section-glow` overlay (radial gradient)
- **Grid:** `lg:grid-cols-2 gap-8 max-w-6xl mx-auto`
- **Card structure:**
  - Header bar: `.bg-gradient-primary` (orange→blue gradient) with company name, location, industry, timeframe
  - Challenge section: `p-6 border-b border-border`
  - Metrics section: `p-6 bg-muted/30`
    - Before/after with `TrendingDown` (destructive) → `ArrowRight` → `TrendingUp` (primary)
    - Improvement badge: `text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full`
  - Optional quote section
- **CTA button below:** `variant="hero" size="lg"`

---

### 5.11 BLOG SECTION

- **Background:** Default with `.section-glow` overlay
- **Grid:** `md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Card:** `bg-card border border-border rounded-2xl overflow-hidden .card-hover group`
  - Image area: `h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5`
  - Category badge: `px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full` (top-left)
  - Content: `p-6 space-y-4`
  - Title: `text-xl font-display font-semibold`, group-hover → `text-primary`
  - Meta row: Author + Date + Read time with small icons
  - "Read More" link with animated arrow on hover

---

### 5.12 FAQ SECTION

- **Background:** Triple-gradient same as stats section
- **Layout:** 2-column with CTA sidebar (`grid-cols-1 lg:grid-cols-3`) or full-width if no CTA
- **Accordion items:**
  - Container: `bg-black border rounded-xl px-6` with `borderColor: #ff7f50`
  - Hover & open: `shadow-[0_0_60px_rgba(255,127,80,0.5)]`
  - Trigger: `text-foreground hover:text-primary font-medium py-5 hover:no-underline`
  - Content: `text-muted-foreground pb-5 leading-relaxed`
- **Contact CTA sidebar (sticky):**
  - `sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm`
  - Avatar with gradient border ring
  - CTA button: gradient `from-[hsl(199_89%_48%)] to-primary`, fully rounded

---

### 5.13 CONSULTATION FORM SECTION

- **Outer background:** `#2d465c` (teal-navy)
- **Form card:** `rounded-2xl border: 2px solid #17a2b8`, teal glow shadow
- **Inner background:** `#191321` (deep purple-black)
- **Title:** `text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight`
  - Accent word: `text-accent` (coral)
- **Labels:** `text-lg font-bold text-white`, required asterisks in `text-accent`
- **Inputs:** `bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-white/50`
  - Focus: `ring-1 ring-primary border-primary`
- **Submit button:** Full-width, `rounded-full bg-gradient-to-r from-primary to-accent`, `py-6 text-lg font-bold`

---

### 5.14 FOOTER

- **Background:** `bg-card border-t border-border`
- **Layout:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12`
- **Logo block:** Gradient icon square + brand name
- **Link columns:** `text-sm text-muted-foreground hover:text-primary`
- **Bottom bar:** `border-t border-border`, copyright + Privacy/Terms links
- **Padding:** `py-16` for content, `mt-12 pt-8` for bottom bar

---

## 6. ANIMATION SYSTEM

### Entry Animations

| Class | Effect | Duration |
|---|---|---|
| `animate-fade-up` | Fade in + translate Y(30px→0) | 0.6s ease-out |
| `animate-fade-in` | Opacity 0→1 | 0.8s ease-out |
| `animate-slide-in-left` | Fade + translate X(-40px→0) | 0.6s ease-out |
| `animate-slide-in-right` | Fade + translate X(40px→0) | 0.6s ease-out |

### Stagger Delays

Use `delay-100` through `delay-600` (in 100ms increments) or inline `animationDelay` for list items (typically `index * 0.1s`).

### Hover Animations

| Effect | CSS |
|---|---|
| **Card lift** | `hover:-translate-y-2` or `hover:translateY(-8px)` |
| **Orange glow** | `hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]` |
| **Teal glow** | `hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]` |
| **Scale up** | `hover:scale(1.05)` |
| **Glow pulse** | `animate-glow-pulse` — 3s infinite box-shadow pulse |

### Scroll-triggered

- **Count-up stats:** IntersectionObserver at 0.3 threshold triggers 2s number animation with `ease-out-quart` easing

---

## 7. CARD SYSTEM

### Card Variants

| Variant | Border | Background | Hover Effect |
|---|---|---|---|
| **Orange-bordered** | `border border-ghl-icon` (#FF7F50) | `bg-background/80` | Orange glow `60px` |
| **Teal-bordered** | `2px solid #17a2b8` | `#2d465c` | Teal glow `30px + 60px` |
| **Standard** | `border border-border` | `bg-card` | `border-primary/30` + subtle shadow |
| **GlowCard** | `border-2 border-border/50` | `bg-card` | Primary glow + lift |
| **Animated border** | Rotating conic-gradient (orange+teal) | `bg-card` | Teal glow + lift |

### Card Padding

- Standard: `p-6` or `p-8`
- Large CTA cards: `p-8 md:p-12 lg:p-14`

---

## 8. ICON SYSTEM

- **Library:** Lucide React
- **Size in cards:** `w-6 h-6`
- **Size in stat icons:** `w-6 h-6` (inside 14×14 container)
- **Size in growth steps:** `w-8 h-8` (inside 16×16 container)
- **Icon container patterns:**
  - Small: `w-12 h-12 rounded-xl bg-primary/10` → icon in `text-primary`
  - Large: `w-16 h-16 rounded-2xl bg-primary/10` → icon in `text-primary`
  - GHL style: `w-12 h-12 rounded-xl bg-ghl-icon/20` → icon in `text-ghl-icon`
  - Stat: `w-14 h-14 rounded-xl bg-[#FC8253]/15 border border-[#FC8253]/30`

---

## 9. GRADIENT SYSTEM

| Name | CSS | Usage |
|---|---|---|
| **Primary gradient** | `linear-gradient(135deg, primary 0%, hsl(199 89% 48%) 100%)` | Buttons, case study headers |
| **Text gradient** | Same as above, applied via `bg-clip-text text-transparent` | Highlight words in headings |
| **CTA button gradient** | `linear-gradient(90deg, hsl(25 90% 55%) → hsl(35 85% 60%) → hsl(199 80% 55%))` | Primary CTA buttons |
| **Section dark gradient** | `linear-gradient(180deg, hsl(210 50% 8%) → 12% → 8%)` | Dark section backgrounds |
| **Hero glow** | `radial-gradient(ellipse 80% 50%, primary/15, transparent)` | Subtle hero glow |
| **Section glow** | `radial-gradient(ellipse 50% 30%, primary/8, transparent)` | Subtle section glow |

---

## 10. SECTION HEADER PATTERN

Every section follows a consistent header pattern:

```
Subtitle (text-primary font-medium mb-4)  ← Optional
H2 Title (text-3xl md:text-4xl font-display font-bold text-foreground mb-6)
  └── Optional gradient span for highlight words
Description (text-muted-foreground max-w-2xl mx-auto)  ← Optional
```

Container: `max-w-4xl mx-auto text-center mb-16 animate-fade-up`

---

## 11. SPACING & LAYOUT CONVENTIONS

| Element | Spacing |
|---|---|
| **Section vertical padding** | `py-24` or `py-24 lg:py-32` |
| **Container** | `container mx-auto px-4` (centered, max 1400px, 16px horizontal padding) |
| **Section header bottom margin** | `mb-16` |
| **Card grid gap** | `gap-6` or `gap-8` |
| **Inside card spacing** | `space-y-4` or `space-y-6` |
| **List item spacing** | `space-y-2` to `space-y-4` |

---

## 12. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Common Usage |
|---|---|---|
| Default (mobile) | `<768px` | Single column, stacked layout |
| `md` | `768px+` | 2-column grids, side-by-side CTAs |
| `lg` | `1024px+` | 3-4 column grids, desktop nav visible |
| `2xl` | `1400px` | Container max-width |

---

## 13. SEO PATTERNS

- **Helmet:** `react-helmet` for per-page `<title>` and `<meta description>`
- **JSON-LD:** FAQ schema auto-generated from FAQ data, LocalBusiness schema on homepage
- **Heading hierarchy:** Single `<h1>` per page, `<h2>` for sections, `<h3>` for cards
- **Semantic HTML:** `<section>`, `<article>` (blog), `<nav>`, `<header>`, `<footer>`
- **Image alt text:** Descriptive alt on all `<img>` tags

---

## 14. HOMEPAGE SECTION ORDER

1. Header (fixed)
2. Hero Section
3. Comparison Section (Fragmented vs Integrated)
4. Growth Steps (Digital Dominance Method)
5. Services Grid
6. Mid-page CardCTA
7. Why Choose Section
8. Animated Stats
9. Testimonials
10. Case Studies
11. Blog Section
12. FAQ Section
13. Final CardCTA
14. Consultation Form
15. Footer

---

## 15. REPLICATION CHECKLIST

To replicate this design on a new project:

- [ ] Install: `tailwindcss`, `tailwindcss-animate`, `class-variance-authority`, `lucide-react`, `@radix-ui/*`
- [ ] Set up `index.css` with all HSL CSS variables listed above
- [ ] Configure `tailwind.config.ts` with `fontFamily`, extended `colors` mapping to CSS vars, custom `keyframes` and `animation`
- [ ] Import Poppins + Montserrat from Google Fonts
- [ ] Create button component with `hero`, `heroOutline`, `outline`, `glow` variants
- [ ] Build reusable section components: `SectionHeader`, `AnimatedStatsSection`, `FAQSection`, `TestimonialsSection`, `BlogSection`, `CaseStudySection`, `CardCTA`, `ConsultationFormSection`
- [ ] Use dark-mode-first theming (all colors via CSS variables)
- [ ] Apply staggered `animate-fade-up` on all card grids
- [ ] Use teal-bordered cards for service/feature grids, orange-bordered for stat/step cards
- [ ] Implement IntersectionObserver count-up for stat values
