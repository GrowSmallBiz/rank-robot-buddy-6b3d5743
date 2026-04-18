import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { baseContactCTA } from "@/config/contactCTA";
import { useUtm } from "@/hooks/use-utm";
import { CTA_URLS } from "@/lib/utm";
import {
  ArrowRight,
  Target,
  Search,
  Eye,
  Zap,
  MapPin,
  TrendingUp,
  BarChart3,
  Phone,
  RefreshCw,
  CheckCircle2,
  LayoutGrid,
  Home,
  Wrench,
  Sparkles,
  Smile,
  PersonStanding,
  Key,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/services/SectionHeader";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// ─────────────────────────────────────────────────────────────────────────────
// PROMPT 9 — FAQ data (8 Q&As). Single source of truth: this array drives BOTH
// the rendered accordion AND the FAQPage JSON-LD inside FAQSection — kept in
// byte-for-byte sync. Q4 contains <strong> + inline anchor that round-trip
// through both surfaces (rendered + acceptedAnswer text).
// ─────────────────────────────────────────────────────────────────────────────
const faqs: FAQItem[] = [
  {
    question: "Are Google Ads worth it for a small business?",
    answer:
      "For local service businesses, Google Ads delivers high ROI when campaigns are built correctly — industry-wide conversion rates average 7.52% (WordStream by LocaliQ, 2025). The key is strategy: broad targeting without conversion tracking produces waste; precision-targeted campaigns with proper measurement produce positive unit economics. Most local service businesses see clear positive returns within 90 days of optimized management.",
  },
  {
    question: "How much should a small business spend on Google Ads?",
    answer:
      "Most local service businesses budget $2,000–$5,000 per month on Google Ads to generate meaningful lead volume. Gartner's 2025 CMO Spend Survey shows companies allocate 7.7% of revenue to marketing on average — use that as a planning floor when deciding Google Ads budget. Conversion systems need to prove out before scaling, so we always audit your situation before recommending a specific number.",
  },
  {
    question: "How long does it take to see results from Google Ads?",
    answer:
      "Google Ads delivers immediate visibility — campaigns can go live within 2–3 weeks of onboarding, and first leads typically arrive within 30 days. Meaningful CPA improvement compounds over the first 90 days as we gather enough conversion data to refine bids, keywords, and audiences. Unlike SEO, Google Ads does not require months of indexing to start producing leads.",
  },
  {
    question: "What is the difference between Google Ads and Google Local Service Ads?",
    // HTML answer — bold emphasis + inline LSA hyperlink. The exact same string
    // is used in the JSON-LD acceptedAnswer text (no stripping).
    answer:
      'Google Ads and Google Local Service Ads are both Google paid channels, but they work differently. Google Ads lets you bid on any keyword with full control over targeting and messaging — you pay per click. Google Local Service Ads appear above Google Ads with the Google Guaranteed badge — you pay per qualified lead, but only specific service categories qualify. <strong>Google Ads is best when</strong> you want keyword-level control, retargeting, or your service is not LSA-eligible. <strong>LSA is best when</strong> you qualify for the badge and want pay-per-lead pricing on pre-qualified calls. Per The Media Captain\'s 2025 analysis, 29% of searchers prefer clicking LSA listings vs 11% who prefer Google Ads — most local service businesses run both. Learn more about <a href="/services/paid-advertising/google-local-services-ads/">Google Local Service Ads management</a> to see if your business qualifies.',
  },
  {
    question: "Do I need a new website to run Google Ads?",
    answer:
      "Not necessarily — but your landing pages matter more than most people realize. Google Ads traffic needs to land on pages that load fast, match the ad intent, and make it easy to call or submit a form. If your current site converts well, we will optimize existing pages. If it does not, we will recommend landing page improvements or purpose-built PPC landing pages before scaling spend.",
  },
  {
    question: "Can you manage Google Ads for my business even if I am not in the Bay Area?",
    answer:
      "Yes — we manage Google Ads campaigns for local service businesses nationally. While GrowSmallBiz is headquartered in Danville, California, our case studies span California, Florida, and the Chicagoland region. Google Ads is a digital channel — what matters is campaign strategy, not our physical location.",
  },
  {
    question: "How is GrowSmallBiz different from other PPC agencies?",
    answer:
      "Three differences: we only work with local service businesses, we build integrated systems (not just ads), and we stand behind our work with a performance guarantee. Specialization means we understand your customer's search behavior and competitive landscape. Integration means Google Ads connects to CRM, call tracking, and lead handling so leads actually convert. The guarantee: if we do not generate leads within the agreed timeframe and scope, we continue management at no additional fee.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Schedule a free strategy session — no cost, no obligation. We audit your current digital presence, review any existing Google Ads history, identify your biggest opportunities, and show you exactly what a Google Ads campaign would look like for your business. If it is a fit, campaigns can be live within 2–3 weeks.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PROMPT 2 — Market Stats Band (WordStream 2025 verified benchmarks)
// ─────────────────────────────────────────────────────────────────────────────
const marketStats = [
  {
    value: "7.52%",
    label: "Average Google Ads conversion rate across industries in 2025",
  },
  {
    value: "$70.11",
    label: "Average Google Ads cost per lead across industries",
  },
  {
    value: "$5.26",
    label: "Average Google Ads cost per click",
  },
  {
    value: "6.66%",
    label: "Average click-through rate — up from 1.35% in 2015",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PROMPT 8 — Real case study cards (4 cards, hub-format)
// ─────────────────────────────────────────────────────────────────────────────
const caseStudyCards = [
  {
    badge: "Dental Practice — Concord, CA",
    title: "Surge in High-Value Patient Leads",
    timeframe: "Q4 year-over-year comparison",
    challenge:
      "Client needed more non-branded general dentistry leads plus high-value patients for implants and all-on-4 treatments.",
    strategy:
      "Full account audit, campaign rebuild, call-only campaign for phone leads, dedicated implants/all-on-4 campaign, aggressive negative-keyword list, and extension testing.",
    metrics: [
      { value: "+175.51%", label: "Conversions" },
      { value: "−64.62%", label: "CPA" },
      { value: "+187.04%", label: "Conversion Rate" },
      { value: "+127.25%", label: "CTR" },
    ],
    href: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/",
  },
  {
    badge: "Med Spa — San Ramon, CA",
    title: "Long-Term Growth, Efficient CPA",
    timeframe: "All-time + recent 30 days",
    challenge:
      "Long-term lead growth at a stable and efficient cost per acquisition, with phone calls as the primary conversion.",
    strategy:
      "Multi-campaign Google Ads structure across Search and Display, service-line differentiation, tiered daily budgets, and ongoing optimization sustained over 3+ years.",
    metrics: [
      { value: "2,577", label: "Total Conversions" },
      { value: "$16.39", label: "All-Time CPA" },
      { value: "+48.8%", label: "30-Day Conversions" },
      { value: "−31.1%", label: "30-Day CPA" },
    ],
    href: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/",
  },
  {
    badge: "Roofing Contractor — Palm Beach County, FL",
    title: "Multi-Regional Campaign Mastery",
    timeframe: "Live since August 2023 — multi-regional rollout",
    challenge:
      "Scaling Google Ads across multiple Florida metros (West Palm Beach, Martin/St Lucie, Lakeland) with distinct market dynamics and competitive intensity in each.",
    strategy:
      "SKAG structure per metro, STAG for broader thematic reach, Performance Max for volume, Smart Campaign for automation — mixed campaign types matched to conversion intent per region.",
    metrics: [
      { value: "1,225", label: "Martin/St Lucie Clicks" },
      { value: "258", label: "Martin/St Lucie Conversions" },
      { value: "$70.13", label: "Martin/St Lucie CPA" },
      { value: "21.06%", label: "Martin/St Lucie Conv. Rate" },
    ],
    href: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/",
  },
  {
    badge: "Tree & Lawn Care — Chicagoland",
    title: "10x Budget Scale, Compounding Returns",
    timeframe: "Live since September 2023",
    challenge:
      "Starting at a modest $2,500/month budget, the client needed proof that spend could scale without CPA spiraling — and needed both form-submission and call-lead conversions tracked.",
    strategy:
      "Search + Performance Max dual campaign type, budget scaling based on performance confidence (adjusted from $2,500 → $500 → back to $2,500 → $5,000), and dual-conversion tracking for forms and calls.",
    metrics: [
      { value: "553", label: "Total Conversions" },
      { value: "$53.70", label: "CPA" },
      { value: "+169.5%", label: "90-Day Clicks" },
      { value: "+211.5%", label: "90-Day Conversions" },
    ],
    href: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PROMPT 7 — Industry tiles (7 tiles, descriptions, real URLs)
// ─────────────────────────────────────────────────────────────────────────────
const industryTiles = [
  {
    icon: Home,
    title: "HVAC Contractors",
    description: "Seasonal demand capture for residential and commercial HVAC service calls.",
    href: "/home-service-contractors/marketing-for-hvac-contractors/",
  },
  {
    icon: Wrench,
    title: "Plumbing & Home Services",
    description: "Emergency and scheduled-service campaigns with geo-targeted call extensions.",
    href: "/home-service-contractors/",
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetics",
    description: "High-value treatment inquiries with landing pages tuned to aesthetic buyer intent.",
    href: "/health-and-wellness-practices/marketing-for-med-spas/",
  },
  {
    icon: Smile,
    title: "Dental Practices",
    description: "General dentistry, implants, and high-value procedures with negative-keyword discipline.",
    href: "/health-and-wellness-practices/marketing-for-dentists/",
  },
  {
    icon: PersonStanding,
    title: "Chiropractic Practices",
    description: "Patient-acquisition campaigns built around local search and wellness-curious audiences.",
    href: "/health-and-wellness-practices/marketing-for-chiropractors/",
  },
  {
    icon: Key,
    title: "Realtors & Real Estate",
    description: "Buyer and seller lead generation with multi-touch funnel strategy.",
    href: "/professional-services/marketing-for-realtors/",
  },
  {
    icon: Camera,
    title: "Photographers",
    description: "Bookings campaigns for wedding, portrait, and commercial photography search intent.",
    href: "/professional-services/marketing-for-photographers/",
  },
];

const GoogleAds = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return (
    <div className="min-h-screen bg-background">
      {/* PROMPT 10 — Meta tags (Path B: Lovable codebase) */}
      <Head>
        <title>Google Ads Management for Small Businesses | GrowSmallBiz</title>
        <meta
          name="description"
          content="Google Ads for HVAC, dental, med spa, roofing, and landscape businesses. Precision-targeted PPC with conversion tracking, transparent reporting, and a performance guarantee. Free strategy session."
        />
        <link rel="canonical" href="https://growsmallbiz.io/services/paid-advertising/google-ads/" />
        {/* Open Graph */}
        <meta property="og:title" content="Google Ads Management for Small Businesses — GrowSmallBiz" />
        <meta
          property="og:description"
          content="Local service businesses running Google Ads that actually generate leads. Transparent reporting, performance guarantee, and proven case studies across dental, med spa, HVAC, roofing, and landscaping."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growsmallbiz.io/services/paid-advertising/google-ads/" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Ads Management for Small Businesses — GrowSmallBiz" />
        <meta
          name="twitter:description"
          content="Local service businesses running Google Ads that actually generate leads. Transparent reporting, performance guarantee, and proven case studies across dental, med spa, HVAC, roofing, and landscaping."
        />
      </Head>
      <ServiceJsonLd
        serviceName="Google Ads Management for Small Businesses"
        serviceType="Google Ads Management"
        description="Google Ads campaigns built and managed specifically for local service businesses. High-intent keyword targeting, conversion tracking, and ongoing optimization."
        url="/services/paid-advertising/google-ads/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Paid Advertising", url: "/services/paid-advertising/" },
          { name: "Google Ads", url: "/services/paid-advertising/google-ads/" },
        ]}
      />
      <Header />

      {/* ─── PROMPT 1: HERO — H1 swap (Local→Small) + credential line ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up">
              Google Ads for Small Businesses That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Actually
              </span>{" "}
              Bring in Customers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Stop paying for clicks that go nowhere. GrowSmallBiz builds and manages Google Ads campaigns exclusively for local service businesses — every dollar targeted, every lead tracked, every campaign tuned to grow your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get Your Free Ad Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#how-it-works">
                  See How It Works
                </a>
              </Button>
            </div>
            {/* PROMPT 1 — Credential line under CTAs */}
            <p
              className="text-base md:text-lg text-muted-foreground text-center mx-auto animate-fade-up"
              style={{ maxWidth: "40rem", marginTop: "1.5rem", animationDelay: "0.3s" }}
            >
              Managing Google Ads campaigns for local service businesses since 2021 — across the Bay Area, Florida, and the Chicagoland region.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 2: MARKET STATS BAND (replaces fabricated stats) ─── */}
      <section className="py-16" style={{ backgroundColor: "#1B2A4E" }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Google Ads"
            titleHighlight="by the Numbers in 2025"
            className="mb-4 [&_h2]:text-white"
          />
          <p className="text-sm md:text-base text-white/70 text-center max-w-2xl mx-auto mb-12">
            Verified benchmarks from WordStream's analysis of 16,000+ U.S. Google Ads campaigns.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {marketStats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">{stat.value}</p>
                <p className="text-sm md:text-base text-white leading-snug mb-3">{stat.label}</p>
                <p className="text-xs italic text-white/50">Source: WordStream by LocaliQ 2025 Benchmarks</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROMPT 3: AEO CONTEXT CALLOUT (NEW) ─── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl p-8 md:p-10 border-l-4 border-primary"
              style={{ backgroundColor: "hsl(210 50% 12%)" }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6">
                Why Google Ads{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">Matters Now</span>
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                <p>
                  GrowSmallBiz manages Google Ads for local service businesses in a market where paid visibility matters more than ever. AI Overviews now appear in 25% of Google searches, and organic click-through rates drop 58% on queries affected by them (Conductor 2026; Ahrefs 2026).
                </p>
                <p>
                  For local services, only 7.9% of searches currently trigger an AI Overview (Ahrefs, November 2025) — so high-intent local queries still route through traditional results, where Google Ads claim the top placement. The AI shift is coming for local search, but paid visibility is the surface that protects against it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 4 (H2 #1): PROBLEM SECTION — 'Local'→'Small' ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Most Small Businesses"
              titleHighlight="Lose Money on Google Ads"
              description="Running Google Ads without a local-focused strategy is one of the fastest ways to burn through a marketing budget. Here is what we see every day from businesses that come to us after trying it on their own or with a generic agency:"
            />
            <div className="space-y-4 mt-8">
              {[
                "Broad targeting that shows your ads to people outside your service area",
                "Generic ad copy that does not speak to what local customers actually care about",
                "No conversion tracking so you can never tell which clicks turned into calls or bookings",
                "Set it and forget it campaign management — no ongoing optimization, no testing",
                "Wasted spend on irrelevant keywords that attract tire-kickers instead of ready-to-buy customers",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 animate-fade-up">
              The good news: every one of these problems is fixable with the right local PPC strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 4 (H2 #2): BENEFITS SECTION — 'Local'→'Small' ─── */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What You Get When Google Ads Are Done Right for"
              titleHighlight="Your Small Business"
              description="When your Google Ads campaign is built and managed specifically for your local market, the results speak for themselves."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Eye, title: "Instant Visibility in Your Local Market", desc: "Unlike SEO, paid search puts you at the top of Google results immediately — right when your ideal customer is searching for the exact service you provide. Whether someone is searching \"HVAC repair near me\" or \"med spa Botox Danville CA,\" a properly built campaign gets you seen first." },
                { icon: Target, title: "Leads, Not Just Clicks", desc: "Traffic is meaningless without conversion. We build campaigns with conversion-focused landing pages, optimized calls-to-action, and proper tracking so you attract people who are ready to call, book, or buy — not just browse." },
                { icon: MapPin, title: "Precision Targeting for Your Service Area", desc: "We configure your campaigns to reach customers specifically within your service radius — whether that is a single city, a metro area, or multiple zip codes. No wasted spend on people you can never serve." },
                { icon: BarChart3, title: "Full Transparency on Every Dollar Spent", desc: "You will always know what you are spending, what it is generating, and what your cost-per-lead looks like. No mystery metrics, no vanity reporting — just the numbers that matter to your business." },
                { icon: RefreshCw, title: "Campaigns That Improve Over Time", desc: "We do not set up your ads and walk away. Every campaign is continuously monitored, tested, and refined — adjusting bids, refining audiences, and rotating ad copy to push your cost per acquisition lower every month." },
              ].map((card, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 5: SERVICES — H2 'Local'→'Small'; remove LSA, add Performance Max ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Our Google Ads Services for"
              titleHighlight="Small Businesses"
              description="We offer a complete suite of Google advertising solutions built for local service businesses."
            />
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: Search, title: "Google Search Ads (Pay-Per-Click)",
                  desc: "The most direct form of local advertising. We build search campaigns targeting high-intent keywords — the terms your customers type when they are ready to hire someone. We handle keyword research, ad copywriting, bid strategy, and ongoing A/B testing to maximize your return.",
                  bullets: ["High-intent, locally targeted keyword research", "Compelling ad copy written to drive calls and form fills", "Smart bidding strategies aligned to your revenue goals", "Negative keyword management to eliminate wasted spend", "Continuous performance monitoring and optimization"],
                },
                {
                  // PROMPT 5 — LSA card replaced with Performance Max & Shopping
                  icon: LayoutGrid, title: "Performance Max & Shopping Campaigns",
                  desc: "Performance Max extends your Google Ads reach beyond search — running across Search, Display, YouTube, Gmail, and Maps from a single campaign. For local service businesses, PMax is a powerful volume channel when combined with traditional search campaigns.",
                  bullets: [
                    "Performance Max campaign build and asset group management",
                    "Conversion goal alignment — calls, form fills, booked appointments",
                    "Audience signal configuration to guide the AI",
                    "Creative asset rotation — headlines, descriptions, images, video",
                    "Cross-campaign coordination with your search strategy",
                  ],
                },
                {
                  icon: RefreshCw, title: "Google Display and Retargeting Ads",
                  desc: "Not every potential customer converts on the first visit. Retargeting campaigns keep your business in front of people who have already shown interest — at a fraction of the cost of acquiring a new click.",
                  bullets: ["Custom audience creation based on website visitors and engagement", "Retargeting sequences designed to re-engage and convert", "Display campaigns for brand awareness in your local market", "Cross-device targeting across desktop and mobile"],
                },
                {
                  icon: BarChart3, title: "Conversion Tracking and Analytics Setup",
                  desc: "Every campaign we manage includes proper conversion tracking from day one. We connect your Google Ads account to call tracking, form submissions, and booking confirmations so you have a complete picture of your ad performance.",
                  bullets: ["Google Analytics 4 and Google Ads integration", "Call tracking and call recording setup", "Form fill and booking conversion tracking", "Monthly performance reports with actionable insights"],
                },
              ].map((svc, i) => (
                <div key={i} className="feature-card-teal rounded-xl p-6 space-y-4 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base font-display font-semibold text-foreground">{svc.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS — PROMPT 6: Step 3 'paid advertising'→'Google Ads' ─── */}
      <section id="how-it-works" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="From Strategy to Leads in"
              titleHighlight="Weeks, Not Months"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "Discovery and Business Analysis", desc: "We start with a deep-dive consultation to understand your business, your service area, your competitive landscape, and your revenue goals. We audit your existing digital assets — website, current ads if any, Google Business Profile — to identify opportunities and gaps before we build anything." },
                { title: "Strategic Campaign Planning", desc: "Based on our analysis, we develop a tailored Google Ads strategy — selecting campaign types, defining targeting parameters, establishing budget allocation, and mapping out the keyword universe we will go after. You review and approve the plan before any dollar is spent." },
                // PROMPT 6 — channel reference: "paid advertising" → "Google Ads"
                { title: "Campaign Build and Launch", desc: "Our team builds your campaigns from the ground up — writing ad copy, configuring targeting, setting up conversion tracking, and connecting all reporting. We typically launch Google Ads campaigns within 2–3 weeks of onboarding, once tracking and conversion systems are fully in place." },
                { title: "Optimization and Scaling", desc: "Once live, we monitor performance daily and run systematic optimization cycles — testing ad variations, refining bids, pruning underperforming keywords, and reallocating budget to what is working. You receive monthly performance reviews with full transparency into results and next steps." },
                { title: "Ongoing Partnership", desc: "Your assigned Account Relationship Manager is your dedicated point of contact. We hold monthly strategy meetings to review performance, discuss market changes, and plan for continued growth. As your results compound, we help you scale your investment strategically." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < 4 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-base font-display font-semibold text-foreground mb-2">Step {i + 1} — {step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 7: INDUSTRY GRID — 7 tiles + descriptions + real URLs ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Google Ads Management for These"
              titleHighlight="Local Service Industries"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {industryTiles.map((ind, i) => (
                <Link
                  key={i}
                  to={ind.href}
                  className="feature-card-teal rounded-xl p-5 text-center space-y-3 animate-fade-up flex flex-col items-center min-h-[180px] transition-transform hover:scale-[1.02]"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-display font-semibold text-foreground">{ind.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ind.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 4 (H2 #3): WHY GROWSMALLBIZ — 'Local'→'Small' ─── */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Small Businesses Choose GrowSmallBiz Over"
              titleHighlight="Generic Agencies"
              className="mb-12"
            />
            <div className="space-y-6">
              {[
                { title: "We Only Work With Local Service Businesses", desc: "We do not manage ads for national brands, SaaS companies, or e-commerce stores. Our entire focus is local service businesses like yours. That specialization means we know your customer's search behavior, your competitive landscape, and what ad strategies actually move the needle for businesses in your category." },
                { title: "An Integrated Marketing Ecosystem — Not Just Ads", desc: "Paid ads work best when they are part of a coordinated system. We connect your Google Ads campaigns with your website, SEO, reputation management, and AI-powered lead handling — so leads do not just arrive, they convert." },
                { title: "A Performance Guarantee", desc: "We stand behind our work. If GrowSmallBiz does not generate leads within a pre-agreed timeframe and scope, we continue managing your campaigns at no additional management fee until results are delivered." },
                { title: "Led by a 30+ Year Marketing Veteran", desc: "GrowSmallBiz was founded by Subrata Guha, a 30+ year veteran of Fortune 500 Sales, Marketing, Supply Chain, and Digital Transformation." },
                { title: "Transparent Reporting — Always", desc: "You will never wonder what your money is doing. Every client gets a multi-channel dashboard with real-time visibility into leads, spend, and performance — and a dedicated Account Manager who walks you through the numbers every month." },
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMPT 8: REAL CASE STUDY CARDS (4 cards, hub format) ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Real Results From Our"
              titleHighlight="Google Ads Campaigns"
              description="Measurable outcomes from Google Ads management engagements across dental, med spa, roofing, and landscape services — in the Bay Area, Florida, and the Chicagoland region."
            />
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {caseStudyCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Orange gradient header badge */}
                  <div className="bg-gradient-primary px-6 py-4">
                    <p className="text-xs font-bold text-primary-foreground/90 uppercase tracking-wider mb-1">
                      Campaign Results — {card.badge}
                    </p>
                    <h3 className="text-lg font-display font-bold text-primary-foreground">{card.title}</h3>
                    <p className="text-xs italic text-primary-foreground/80 mt-1">{card.timeframe}</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(180 60% 50%)" }}>
                        Challenge
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">{card.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(180 60% 50%)" }}>
                        Strategy
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">{card.strategy}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {card.metrics.map((m, mi) => (
                        <div key={mi} className="bg-background rounded-lg p-3 text-center">
                          <p className="text-lg font-display font-bold text-primary">{m.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={card.href}
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline mt-auto pt-2"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PersonCTA
        title="Ready to Turn Google Searches Into Paying Customers?"
        description="Every day you are not running optimized Google Ads, your competitors are collecting the leads you should be getting. Let us change that. Book your free Google Ads strategy session with GrowSmallBiz. We will audit your current situation, identify your biggest opportunities, and show you exactly what a local PPC campaign would look like for your business — at no cost and no obligation."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyUrl}
        sectionClassName="py-24"
      />

      {/* ─── PROMPT 9: FAQ — 8 Q&As + JSON-LD synced via single FAQItem source ─── */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Google Ads for Small Businesses"
        subtitle="Common questions about our Google Ads management services"
        schemaId="https://growsmallbiz.io/services/paid-advertising/google-ads/#faqpage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Google Ads?",
          description: "We're here to help you build a Google Ads campaign that actually works.",
          tagline: "Let's turn your ad spend into qualified leads.",
        }}
      />

      {/* FOOTER CTA — H2 'Local' intentionally retained per Final Validation Checklist */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Local Competitors Are Already Running Google Ads.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Are You?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Do not let them win the top spot on every search in your market. GrowSmallBiz builds and manages Google Ads campaigns that put local service businesses front and center — exactly when customers are ready to hire.
            </p>
            <p className="text-sm text-muted-foreground">No contracts. No fluff. Just leads.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (925) 886-3724
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormSection utmCampaign="consultation-form" utmMedium={pageMedium} />
      <Footer />
    </div>
  );
};

export default GoogleAds;
