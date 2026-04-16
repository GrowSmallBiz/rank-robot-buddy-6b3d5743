import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import seoAgencyHero from "@/assets/seo-agency/seo-agency-hero.jpg";
import {
  ArrowRight,
  Search,
  MapPin,
  Sparkles,
  Phone,
  AlertCircle,
  Target,
  Link as LinkIcon,
  Globe,
  FileText,
  Wrench,
  Heart,
  Home,
  UtensilsCrossed,
  Camera,
  CheckCircle2,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const trustBar = [
  { icon: Search, label: "Managed AI SEO", desc: "Every signal Google uses, every week" },
  { icon: MapPin, label: "Local Pack Dominance", desc: "Rank in the 3-pack where calls happen" },
  { icon: Sparkles, label: "AEO + GEO Ready", desc: "Found in ChatGPT, Perplexity, Gemini" },
  { icon: Phone, label: "Leads, Not Just Traffic", desc: "Pipeline metrics, not vanity stats" },
];

const problemCards = [
  {
    title: "Traffic without conversion infrastructure",
    body: "An SEO agency drives visitors to a site that wasn't built to convert them. The leads leak out and nobody tracks where.",
  },
  {
    title: "Google Business Profile on autopilot",
    body: "The GBP listing is claimed once and forgotten. Meanwhile, 64% of local searches convert through GBP — not the website.",
  },
  {
    title: "Rankings in a vacuum",
    body: "The agency reports on a keyword that ranks #4 — but the keyword has no search volume and no buyer intent. Progress on paper, silence on the phone.",
  },
  {
    title: "No answer engine presence",
    body: "Customers are asking ChatGPT, Perplexity, and Google AI Overviews for recommendations. Traditional SEO never optimized for that — and the business is invisible to AI.",
  },
];

const pillars = [
  {
    icon: Target,
    number: "PILLAR 01",
    title: "Keyword Strategy",
    desc: "Extensive keyword research with full competitive analysis. We find the queries your real buyers type — not the ones agencies chase for bragging rights.",
  },
  {
    icon: MapPin,
    number: "PILLAR 02",
    title: "Google Business Profile",
    desc: "Top-to-bottom GBP optimization, weekly posting, category refinement, photo strategy. This is where 60%+ of local conversions happen.",
  },
  {
    icon: LinkIcon,
    number: "PILLAR 03",
    title: "Local Citations",
    desc: "Niche-relevant and geo-relevant citations built across the directories that actually move the map pack. Consistency at scale.",
  },
  {
    icon: Globe,
    number: "PILLAR 04",
    title: "On-Site Location Signals",
    desc: "Schema markup, location entities, internal linking, service-area landing pages. Every signal Google needs to trust the geography.",
  },
  {
    icon: FileText,
    number: "PILLAR 05",
    title: "Content Engine",
    desc: "Monthly blogs mapped to the content silo, supplementary topic coverage, and ongoing relevance signals. Google rewards sites that ship.",
  },
];

const caseStudies = [
  {
    label: "HOME SERVICE CONTRACTORS",
    attribution: "HVAC & Plumbing — Fairbanks, AK",
    accent: "teal" as const,
    summary:
      "An HVAC and plumbing contractor needed leads fast. Most of their category's calls come from Google Business Profile, so we rebuilt the GBP from the ground up, layered niche and local citations, optimized on-site for location signals, and posted weekly to feed Google fresh engagement data. Within months, the phones didn't stop ringing.",
    stats: [
      { value: "+1,395%", label: "Phone Calls From GBP" },
      { value: "+594%", label: "Website Visits From GBP" },
      { value: "#2", label: "Boiler Installation (from #45)" },
      { value: "#1", label: "Plumbing Fairbanks (from #13)" },
    ],
    wins: [
      "boiler installation climbed 43 positions — from #45 to #2",
      "plumbing fairbanks moved 12 positions into the #1 spot",
      "plumber fairbanks moved 12 positions into the #2 spot",
      "furnace repair fairbanks ak improved 12 positions",
      "heating system repair climbed 8 positions to #5",
    ],
  },
  {
    label: "ROOFING & HOME REMODELING",
    attribution: "Roofing & Hail Restoration — Florida",
    accent: "orange" as const,
    summary:
      "A roofing and hail restoration company wanted to grow their commercial roofing book — their most profitable service line. We optimized on-page elements, produced localized content for every service area, and scaled their local presence. Six months later, the qualified-lead conversion rate climbed sharply and high-volume commercial keywords moved from obscurity to the front page.",
    stats: [
      { value: "+26.79%", label: "Organic Conversions (6 mo.)" },
      { value: "+127%", label: "GBP Views" },
      { value: "+76%", label: "GBP Searches" },
      { value: "+99 pos.", label: "Hail Damage Roof" },
    ],
    wins: [
      "hail damage roof climbed 99 positions (6,600 monthly searches)",
      "roof tarping gained 97 positions (5,400 monthly searches)",
      "siding installation gained 93 positions (6,600 monthly searches)",
      "roof installation gained 90 positions (6,600 monthly searches)",
      "metal roof installation gained 47 positions (12,100 monthly searches)",
    ],
  },
  {
    label: "HEALTH & WELLNESS",
    attribution: "Med Spa — San Gabriel, CA",
    accent: "navy" as const,
    summary:
      "A high-end med spa was struggling to generate organic leads to their clinic. We ran a 6-9 month local campaign combining content production, on-site technical SEO (including product schema), GBP optimization, and conversion rate optimization. The result: traffic multiplied several times over and competitive service keywords landed in the top three.",
    stats: [
      { value: "+553%", label: "Organic Users YoY" },
      { value: "+584%", label: "Organic Sessions YoY" },
      { value: "+76%", label: "Phone Calls From GBP" },
      { value: "#1", label: "Laser Skin Treatment (14.8K/mo)" },
    ],
    wins: [
      "laser skin treatment reached #1 from off-the-map (14,800 monthly searches)",
      "skin laser for acne scars reached #1 from off-the-map",
      "skincare treatment for acne scars reached #1 from off-the-map",
      "hair removal laser for men reached #2 (9,900 monthly searches)",
      "skincare clinic near me moved to #4",
    ],
  },
];

const verticalCards = [
  {
    icon: Wrench,
    title: "Home Service Contractors",
    desc: "HVAC, plumbing, electrical, roofing, tree and lawn care, painting. High-intent emergency and scheduled-service searches.",
  },
  {
    icon: Heart,
    title: "Health & Wellness Practices",
    desc: "Dental, chiropractic, med spas, and wellness clinics. Service-based, geographically bounded, competitive for high-value keywords.",
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Brokers and agents building authority in a local farm area. Niche pages, neighborhood content, and GBP dominance.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    desc: "Independent restaurants fighting for local map pack visibility, reviews, and direct bookings.",
  },
  {
    icon: Camera,
    title: "Photographers",
    desc: "Wedding, portrait, and event photographers competing for high-commercial-intent local queries.",
  },
];

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "Most campaigns show measurable keyword and GBP movement within 60 to 90 days, with meaningful lead volume by month four to six. The timeline depends on three factors: how competitive the geography is, how much technical debt the current site has, and whether the Google Business Profile is already claimed and verified. We report weekly so you see the trajectory long before the leads arrive.",
  },
  {
    question: "What makes Managed AI SEO different from traditional SEO?",
    answer:
      "Managed AI SEO combines traditional ranking work with AEO and GEO so the business is found inside ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — not just on the blue-link results page. Traditional SEO optimizes for a 2015 search experience. Managed AI SEO optimizes for how customers are actually searching in 2026.",
  },
  {
    question: "Do I need a new website to start SEO?",
    answer:
      "Not always, but conversion infrastructure has to be in place or SEO leaks leads. If the current site loads fast, tracks conversions, and has clear calls to action, we start with SEO. If it doesn't, we'll be direct about it — we offer a conversion-focused website rebuild if that's the bottleneck, because driving traffic to a broken site wastes your budget.",
  },
  {
    question: "How much does Managed AI SEO cost?",
    answer:
      "Pricing depends on the competitive difficulty of your market and the number of service areas targeted. We scope after a free audit so you see the specific gap analysis before committing to anything. There are no long-term contracts — we work month-to-month and earn the renewal every time.",
  },
  {
    question: "What is AEO and why does it matter for small businesses?",
    answer:
      "AEO — Answer Engine Optimization — is the practice of structuring content so AI chat assistants like ChatGPT and Perplexity cite your business when users ask for recommendations. It matters because a growing share of buyers now ask an AI before they ask Google, and small businesses without AEO presence are invisible to that entire audience.",
  },
  {
    question: "Will I own my content and Google Business Profile?",
    answer:
      "Yes — you own every asset we create, including blog content, landing pages, and the GBP listing itself. We require admin access during the engagement, but ownership is always yours. If you end the engagement, everything stays with you.",
  },
  {
    question: "How do you report results?",
    answer:
      "You get a monthly report covering rankings, organic traffic, GBP interactions (calls, direction requests, website clicks), form conversions, and phone tracking. We also hold a weekly 20-minute check-in if you want one. We report on pipeline metrics — the ones that tie to revenue — not vanity metrics.",
  },
  {
    question: "What if my vertical isn't a fit for GrowSmallBiz?",
    answer:
      "We'll tell you on the audit call. We specialize in small service businesses with a local footprint — home service contractors, health and wellness practices, real estate, restaurants, and photographers. If your business is national e-commerce, enterprise B2B, or SaaS, we're not the right agency and we'll refer you to someone who is.",
  },
];

// Teal accent uses semantic token --ghl-card-border (188 78% 41%)
const TEAL = "hsl(var(--ghl-card-border))";

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------

const ManagedAISEO = () => {
  const { strategySessionUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>AI-Powered SEO That Gets Local Service Businesses Found First | GrowSmallBiz</title>
        <meta
          name="description"
          content="Managed AI SEO for small service businesses. Rank where your customers are already searching — Google, ChatGPT, Perplexity, Gemini — and turn local search into qualified phone calls and form fills."
        />
        <link rel="canonical" href="https://growsmallbiz.io/services/seo-agency/" />
      </Head>

      <ServiceJsonLd
        serviceName="Managed AI SEO for Small Service Businesses"
        serviceType="Managed SEO"
        description="AI-powered SEO for small businesses that turns local search into qualified phone calls, form submissions, and foot traffic — covering technical, on-page, local SEO, AEO, GEO, link building, and reporting."
        url="/services/seo-agency/"
        breadcrumbs={[{ name: "Services", url: "/services/" }]}
      />

      <Header />

      <main id="main-content" className="pt-20">
        {/* =============================================================== */}
        {/* PROMPT 1 — HERO                                                  */}
        {/* =============================================================== */}
        <section className="relative overflow-hidden bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
              {/* Text column (60%) */}
              <div className="lg:col-span-3">
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                  style={{ color: TEAL }}
                >
                  Managed AI SEO
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.05] mb-6">
                  Rank Where Your Customers Are Already Searching.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-2xl">
                  AI-powered SEO for small businesses that turns local search into qualified phone
                  calls, form submissions, and foot traffic — not just rankings.
                </p>

                {/* Trust row */}
                <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground/75 mb-8">
                  <li>6-month campaigns avg +260% organic clicks</li>
                  <li className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TEAL }} />
                  <li>GBP calls climbing 100%+ YoY</li>
                  <li className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TEAL }} />
                  <li>Hero keywords moving 90+ positions</li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                      Book Free SEO Audit
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href="#methodology">See How It Works</a>
                  </Button>
                </div>

                <p className="mt-3 text-sm text-primary font-medium">
                  No commitment. No pressure. Just a clear path forward for your business.
                </p>
              </div>

              {/* Image column (40%) */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-border shadow-2xl">
                  <img
                    src={seoAgencyHero}
                    alt="Small business owner reviewing SEO analytics and incoming calls on laptop and phone"
                    width={1920}
                    height={1080}
                    fetchPriority="high"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 2 — TRUST BAR                                             */}
        {/* =============================================================== */}
        <section className="bg-background-alt py-12 lg:py-14 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {trustBar.map((cell) => {
                const Icon = cell.icon;
                return (
                  <div
                    key={cell.label}
                    className="flex flex-col items-center text-center px-2"
                  >
                    <Icon className="w-7 h-7 mb-3" style={{ color: TEAL }} aria-hidden="true" />
                    <p className="text-base md:text-lg font-display font-semibold text-foreground mb-1">
                      {cell.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-snug">{cell.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 3 — PROBLEM                                               */}
        {/* =============================================================== */}
        <section className="bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: TEAL }}
                >
                  The Problem
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-bold text-foreground leading-tight mb-6">
                  Most Small Businesses Are Paying For SEO That Doesn't Produce Leads.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  You've probably heard the promises. Rankings. Traffic. Authority scores. Every SEO
                  agency hands out a different scorecard — but none of those metrics pay the bills.
                  What pays the bills is a phone that rings, a form that gets filled out, and a
                  customer walking through the door. Most SEO engagements never connect those dots.
                </p>
              </div>

              <div className="lg:col-span-3 space-y-4">
                {problemCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 4 — METHODOLOGY (5 PILLARS)                               */}
        {/* =============================================================== */}
        <section
          id="methodology"
          className="bg-background-alt py-24 lg:py-28 border-y border-border"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: TEAL }}
              >
                How It Works
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-[1.1] mb-5">
                Every Signal Google Uses. Every Week.
              </h2>
              <p className="text-lg md:text-xl text-foreground/80">
                Five pillars working in concert. Miss one and the whole engine stalls.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Connecting line on desktop */}
              <div
                className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px"
                style={{ backgroundColor: TEAL, opacity: 0.3 }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.number} className="text-center">
                      <div
                        className="w-[72px] h-[72px] mx-auto rounded-full flex items-center justify-center mb-4 relative z-10"
                        style={{ backgroundColor: TEAL }}
                      >
                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <p
                        className="text-xs font-semibold tracking-[0.16em] uppercase mb-2"
                        style={{ color: TEAL }}
                      >
                        {pillar.number}
                      </p>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-foreground/75 leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-center italic text-foreground/70 mt-14 max-w-2xl mx-auto">
              All five, every month, reported transparently — with a weekly check-in call if you
              want one.
            </p>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 5 — AEO + GEO                                             */}
        {/* =============================================================== */}
        <section className="bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-primary">
                Built For The AI Search Era
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-5">
                When Customers Ask ChatGPT, Your Business Should Be The Answer.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                AEO and GEO are the two disciplines traditional SEO agencies haven't caught up to.
                We lead with both.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* AEO card */}
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col">
                <span
                  className="inline-block self-start text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-5 text-white"
                  style={{ backgroundColor: TEAL }}
                >
                  AEO
                </span>
                <h3 className="text-2xl md:text-[1.75rem] font-display font-bold text-foreground mb-4">
                  Answer Engine Optimization
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Structured content, schema markup, and conversational query framing so ChatGPT,
                  Perplexity, Claude, and Gemini cite your business when buyers ask for
                  recommendations. Answer-engine traffic is the fastest-growing referral source of
                  2026 — and most small businesses have zero presence there.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "FAQ blocks formatted for answer-engine extraction",
                    "Entity-rich content that AI models can parse",
                    "Schema coverage for LocalBusiness, Service, FAQ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: TEAL }}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/seo-agency/aeo/"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: TEAL }}
                >
                  Learn more about AEO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* GEO card */}
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col">
                <span className="inline-block self-start text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-5 bg-primary text-primary-foreground">
                  GEO
                </span>
                <h3 className="text-2xl md:text-[1.75rem] font-display font-bold text-foreground mb-4">
                  Generative Engine Optimization
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Google AI Overviews and AI Mode are reshaping what the first page looks like. GEO
                  ensures your content is structured to be surfaced, quoted, and cited inside
                  generative results — not buried beneath them.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Content architecture optimized for AI Overview inclusion",
                    "Citation-worthy formatting and authority signals",
                    "Monitoring for AI-result visibility across query clusters",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/seo-agency/geo/"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more about GEO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <p className="text-center italic text-foreground/85 text-lg mt-12 max-w-2xl mx-auto">
              Traditional SEO ranks pages. AEO and GEO rank answers. You need all three.
            </p>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 6 — CASE STUDIES                                          */}
        {/* =============================================================== */}
        <section className="bg-background-alt py-24 lg:py-28 border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: TEAL }}
              >
                Proven Outcomes Across Verticals
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-5">
                SEO That Moves The Needle On Leads. Not Just Rankings.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Rankings are a means, not an end. Every case study below shows what happens when
                Managed AI SEO is paired with a conversion-ready site and a fully claimed Google
                Business Profile. Client names are withheld per our white-label agency agreements.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((cs) => {
                const accentColor =
                  cs.accent === "teal"
                    ? TEAL
                    : cs.accent === "orange"
                      ? "hsl(var(--primary))"
                      : "hsl(var(--foreground))";
                return (
                  <article
                    key={cs.label}
                    className="bg-card border border-border rounded-2xl p-6 md:p-10 relative overflow-hidden"
                  >
                    {/* Vertical bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: accentColor }}
                      aria-hidden="true"
                    />

                    <div className="pl-2">
                      <p
                        className="text-xs font-semibold tracking-[0.16em] uppercase mb-2"
                        style={{ color: accentColor }}
                      >
                        {cs.label}
                      </p>
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-5">
                        {cs.attribution}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                        {cs.summary}
                      </p>

                      {/* Stat grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {cs.stats.map((s) => (
                          <div
                            key={s.label}
                            className="bg-background/60 rounded-xl p-5 text-center"
                          >
                            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1 leading-none">
                              {s.value}
                            </p>
                            <p className="text-[11px] md:text-xs font-semibold tracking-wider uppercase text-foreground/75 leading-tight">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Keyword wins */}
                      <div>
                        <p
                          className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
                          style={{ color: TEAL }}
                        >
                          Keyword Wins
                        </p>
                        <ul className="space-y-2">
                          {cs.wins.map((w) => (
                            <li
                              key={w}
                              className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"
                            >
                              <span
                                className="font-bold mt-0.5 shrink-0"
                                style={{ color: TEAL }}
                                aria-hidden="true"
                              >
                                →
                              </span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 7 — WHO THIS IS FOR                                       */}
        {/* =============================================================== */}
        <section className="bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: TEAL }}
              >
                Ideal Client Fit
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-bold text-foreground leading-tight mb-5">
                Managed AI SEO Is Built For Small Service Businesses.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                If you sell a service in a specific geography and win customers through phone calls,
                form submissions, or foot traffic — you're our sweet spot.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticalCards.map((v, idx) => {
                const Icon = v.icon;
                // Center the last two cards on desktop (3+2 layout)
                const isLastRow = idx >= 3;
                return (
                  <div
                    key={v.title}
                    className={`bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors ${
                      isLastRow && idx === 3 ? "lg:col-start-1 lg:ml-[16.667%]" : ""
                    }`}
                  >
                    <Icon
                      className="w-7 h-7 mb-4"
                      style={{ color: TEAL }}
                      aria-hidden="true"
                    />
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-center italic text-muted-foreground mt-12 max-w-xl mx-auto">
              Not sure if your vertical fits? Book a 20-minute call — if we're not the right agency
              for you, we'll say so.
            </p>
          </div>
        </section>

        {/* =============================================================== */}
        {/* PROMPT 8 — FAQ                                                   */}
        {/* =============================================================== */}
        <FAQSection title="Frequently Asked Questions" faqs={faqs} schemaType="FAQPage" />

        {/* =============================================================== */}
        {/* PROMPT 9 — FINAL CTA                                             */}
        {/* =============================================================== */}
        <section className="bg-background-alt py-24 lg:py-28 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5 text-primary">
                Your Market Is Next
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.05] mb-6">
                Let's Build Your Case Study.
              </h2>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-10 max-w-xl mx-auto">
                Every number on this page started with a strategy call. A free SEO audit reveals
                exactly where your market is leaving leads on the table — and what it will take to
                capture them.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                    Book Free Strategy Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#methodology">See Our Managed AI SEO Service</a>
                </Button>
              </div>

              <p className="mt-6 text-sm text-foreground/65">
                No contracts. Month-to-month. We earn the renewal every time.
              </p>
            </div>
          </div>
        </section>

        {/* CONSULTATION FORM — DO NOT MODIFY (per Prompt 9 constraint) */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default ManagedAISEO;
