import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { Sparkles, Search, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Layers, Target, Zap, FileText, Bot, Cpu, Megaphone, BarChart3 } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import "react";
import { G as GlowCard } from "./glow-card-2Rtno8B6.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
const heroBg = "/assets/ai-search-optimization-hero-bg-C5d1PyHk.webp";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const fiveSigns = [
  "You rank well on Google but never get mentioned in ChatGPT or Perplexity. That's the most common pattern in 2026 — and it's a signal, not a coincidence. AI engines and Google use different ranking criteria.",
  'Your business name returns vague or wrong answers when typed into AI. Inconsistent citations across the web have left your "entity" unclear to large language models, so they hedge or pull from outdated sources.',
  "Competitors with smaller websites are showing up in AI Overviews where you used to rank. AI surfaces aren't rewarding domain authority the way Google does — they're rewarding clarity, structure, and topical depth.",
  "Your phone calls and form submissions have plateaued, even though impressions are flat or up. You're being seen, but not chosen — because the choice is increasingly being made before the click.",
  "You've never published content structured as direct answers to specific customer questions. Without question-format content and proper schema, AI engines can't extract you as a citation candidate."
];
const comparisonRows = [
  ["Surface", "Google, Bing blue-link results", "ChatGPT, Gemini, Perplexity, AI Overviews"],
  ["Goal", "Rank well in organic results", "Be cited and quoted inside AI answers"],
  ["Primary signals", "Backlinks, on-page content, domain authority", "Entity clarity, content structure, multi-source consensus"],
  ["Content emphasis", "Long-form keyword-aligned pages", "Short direct answers + question-format chunks"],
  ["Authority sources", "Industry publications, link profile", "Reddit, LinkedIn, YouTube, plus traditional sources"],
  ["Measurement", "Rank position, organic traffic", "Citation share, AI mentions, sentiment"],
  ["Relationship", "Foundation — required for AI visibility", "Layer — built on top of traditional SEO"]
];
const shifts = [
  {
    icon: TrendingUp,
    label: "Shift 1",
    title: "Search has decoupled from clicks",
    headline: "The zero-click era is here",
    body: "Approximately 64% of Google searches now end without a click to any website. AI Overviews — Google's generative summaries that pull from multiple sources — appear above the traditional organic results on roughly 26% of all U.S. queries and continue expanding into commercial and local-intent searches. For informational and research queries, the AI summary often satisfies the user before they ever scroll to a blue link."
  },
  {
    icon: Layers,
    label: "Shift 2",
    title: "AI engines reward different signals on top of Google ranking",
    headline: "Strong Google rankings help — but they aren't sufficient on their own",
    body: "Ranking #1 on Google is necessary but not sufficient for AI visibility. Backlinko's analysis of Ahrefs data found that pages at position 1 have a 58% chance of being cited by ChatGPT — a strong correlation that tells you traditional SEO matters more than ever. But the same study confirms 80% of LLM citations don't rank in Google's top 100. AI engines weigh different signals on top of ranking: entity clarity, multi-source consensus across third-party platforms, and content extractability. Search Engine Land's coverage of the 2026 SOCi Local Visibility Index found that fewer than half of brands leading Google local visibility also lead in AI visibility — proof that traditional SEO is the foundation, but a layer of AI-specific optimization is required on top."
  },
  {
    icon: Target,
    label: "Shift 3",
    title: "AI-sourced leads convert at higher rates",
    headline: "When AI recommends you, buyers are already pre-qualified",
    body: "A buyer who arrives via an AI recommendation has already received third-party validation — the AI engine has effectively vouched for you in front of the customer. Backlinko reports that visitors discovered through AI answers are 4.4 times more valuable than visitors from traditional search (Semrush data). HubSpot's own AEO program data shows AI-sourced leads converting at 3 times the rate of traditional search leads. Research published in the Journal of Marketing Research on AI's impact on search optimization and conversion rates documents the same pattern across industries: AI-mediated discovery produces materially higher purchase intent than traditional channels. Gartner's hyper-local SEO research confirms the conversion uplift is most pronounced for local service categories, where AI recommendations function as trusted referrals."
  },
  {
    icon: Zap,
    label: "Shift 4",
    title: "The window is open, and closing",
    headline: "Early movers are setting the defaults",
    body: "Most local service businesses haven't started AI Search Optimization. That is the opportunity. AI engines are still building their reference patterns for many local categories, which means the businesses being cited today are establishing the defaults for tomorrow. MIT Technology Review's research on small business adoption of AI search technologies found that adoption is bimodal: a small minority of forward-looking operators are claiming category positions, while the majority are still treating AI search as a 2027 problem. Gartner's research on the risks of delaying AI adoption documents what happens to the latter group — visibility losses compound, and recovery costs grow exponentially with each quarter of inaction. WordStream's 2026 SEO Trends report adds the practitioner side: 86% of SEO professionals have already integrated AI tools into their workflows."
  }
];
const pillars = [
  {
    icon: Search,
    num: "01",
    title: "AI Search Audit",
    subtitle: "Where you stand today, in plain numbers",
    body: "Every engagement starts with our AI Optimization Audit — a fixed-fee, low-friction starting point that doubles as your standalone first project with us. We run your business name, your services, and your competitor set across ChatGPT, Gemini, Perplexity, and Google AI Overviews. We document mention frequency, citation accuracy, sentiment, and competitive share-of-voice. You receive a baseline that's measurable — not opinions, evidence — along with a 90-day prioritized roadmap of the highest-leverage moves. Many clients start with the audit alone and decide whether to engage the full done-for-you service after they see what's in it."
  },
  {
    icon: FileText,
    num: "02",
    title: "Content framework re-architecture",
    subtitle: "Content that AI can actually extract",
    body: "AI engines extract specific passages, not entire pages. We restructure your service pages, FAQ pages, and blog content using the principles AI engines reward — principles that align with Harvard Business Review's research on generative AI content strategies for business growth, which documents the same content-structure shifts now baked into how LLMs select and synthesize sources:",
    bullets: [
      "<strong>50–70 word direct answers</strong> at the top of every page, written in plain language and structured to be quotable as a complete unit",
      '<strong>Two-to-three-sentence paragraphs</strong> for high "token yield" — the amount of structured information a model can extract from a single chunk',
      "<strong>Question-format headlines</strong> that mirror how customers actually ask AI engines for help",
      "<strong>Original statistics and data</strong> with attribution, because AI engines reward content that adds new information rather than recycling existing material",
      "<strong>Author bios with verifiable credentials</strong> — a critical signal for E-E-A-T evaluation by both Google and AI systems",
      "<strong>Content freshness cycles</strong> that update key pages quarterly, since AI engines downweight content older than 12 months for time-sensitive categories"
    ]
  },
  {
    icon: Bot,
    num: "03",
    title: "Entity optimization",
    subtitle: "Make sure AI knows who you are",
    body: "An entity, in AI search terms, is a real-world thing the model can identify and associate with facts — your business, your founder, each of your services, the cities you serve. We build a deeply nested schema architecture (Organization → Service → Person → Place → Offer → Review) so AI engines can map your business cleanly. We tie your entities to authoritative external references through sameAs declarations where appropriate, and we audit and correct citation inconsistencies across the web that confuse AI models."
  },
  {
    icon: Cpu,
    num: "04",
    title: "Technical AI-readiness",
    subtitle: "Make sure AI can actually read your site",
    body: "AI agents bounce off poorly built pages. According to Search Engine Land's reporting on 2025 ChatGPT crawler behavior, 46% of ChatGPT bot visits begin in plain HTML reading mode — no images, no CSS, no JavaScript — and 63% of those agents leave the page immediately when they encounter slow loads, JavaScript-rendered content, or HTTP errors. Voice-search optimization sits in the same technical layer — Moz's research on voice search and AI SEO trends documents how voice queries (which now route primarily through AI assistants) require the same structural clarity AI extractors demand. We audit and fix:",
    bullets: [
      "<strong>Crawler access</strong> in <code>robots.txt</code> for AI bots: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot",
      "<strong>Server-side rendering</strong> of critical answer content so it appears in initial HTML",
      "<strong>Page speed</strong> and Interaction to Next Paint (<strong>INP</strong>) — the new Core Web Vital that AI agents measure with limited rendering budgets",
      "<strong>Mobile usability</strong> and Core Web Vitals across the site",
      "<strong>Schema deployment</strong> for Organization, LocalBusiness, Service, Person, FAQ, Review, and Offer types",
      "<strong>Voice-search compatibility</strong> through natural-language content patterns that match how prospects actually ask AI assistants for help"
    ]
  },
  {
    icon: Megaphone,
    num: "05",
    title: "Authority & brand mention building",
    subtitle: "AI engines reward multi-source consensus",
    body: "AI engines don't trust a website that only talks about itself. They look for consensus across the web — the pattern of independent sources mentioning your business in connection with your services and your geography. We build that pattern through:",
    bullets: [
      "<strong>Unlinked brand mention placements</strong> on category-relevant publications and industry sites",
      "<strong>Reputation management</strong> on Google Business Profile, Yelp, and industry-specific review platforms — AI engines treat reviews as a trust filter, not a ranking signal",
      "<strong>Strategic presence on Reddit, Quora, YouTube, and LinkedIn</strong> — the four platforms most heavily cited by ChatGPT, Perplexity, and AI Overviews in 2026",
      "<strong>Local PR placements</strong> that establish topical authority for your geography",
      "<strong>Sentiment monitoring</strong> across the web so we catch and respond to issues before they shape AI consensus"
    ]
  },
  {
    icon: BarChart3,
    num: "06",
    title: "Monthly reporting & iteration",
    subtitle: "Citations tracked, score trended, strategy adjusted",
    body: 'You receive monthly reports tracking your AI visibility across each major engine, your citation share-of-voice against competitors, the specific content updates and authority signals deployed in the previous sprint, and the priorities for the next 30 days. No black box, no "trust the process" — every metric is in your dashboard.'
  }
];
const whyItems = [
  {
    title: "Three decades of search strategy, applied to your local market",
    body: "GrowSmallBiz founder Subrata Guha spent 30+ years leading Sales, Marketing, Supply Chain, and digital transformation work for Fortune 500 brands. AI search is the third major shift in search he has navigated — after the rise of Google in the early 2000s and the mobile-first transition in the 2010s. The pattern is consistent every time: early movers compound. He built GrowSmallBiz specifically to bring enterprise-grade search strategy to local service businesses, on terms and at a price that fit how those businesses actually operate."
  },
  {
    title: "Built specifically for local service businesses",
    body: "We are not a generalist agency. Our entire system is built around five customer profiles: home service contractors, health and wellness practices, real estate professionals, restaurants, and photographers. Every framework, audit template, content pattern, and reporting structure is calibrated to how those businesses actually win — not adapted from B2B SaaS playbooks that don't translate."
  },
  {
    title: "One connected system, not a pile of tools",
    body: "AI Search Optimization runs alongside our other SEO Agency disciplines (Local SEO, Technical SEO, Authority Building, On-Page SEO, Link Building) and our broader service lines — Conversion-Focused Website Design, Paid Advertising, Marketing Automation, and our AI Receptionist & Conversational AI suite. One strategist owns your account, and every channel feeds the same lead flow."
  },
  {
    title: "No long-term contracts",
    body: "You're not getting a junior account manager running templates. You're getting enterprise-grade strategy applied directly to your local market, on a month-to-month engagement. We earn the relationship every month."
  }
];
const baselineRows = [
  ["ChatGPT visibility", "0%", 'Business never appeared in "best HVAC near me" prompts'],
  ["Gemini visibility", "12%", "Appeared inconsistently, often with wrong service area"],
  ["Perplexity visibility", "4%", "Cited only once in 25 test prompts"],
  ["Google local 3-pack", "Position 4–6", "Consistent in core service area but missing emergency-intent queries"],
  ["AI-attributed traffic", "Unmeasured", "No tracking infrastructure in place"]
];
const resultRows = [
  ["ChatGPT visibility", "38%", "Strongest on emergency-intent prompts (22% on general HVAC)"],
  ["Gemini visibility", "67%", "Now consistently top-3 in local queries"],
  ["Perplexity visibility", "41%", "Citation accuracy verified at 100%"],
  ["Google local 3-pack", "Position 1–2", "Emergency keywords now ranking in pack"],
  ["AI-attributed lead share", "14%", "Of new lead volume; conversion rate 2.1× organic average"]
];
const faqs = [
  {
    question: "What is AI Search Optimization?",
    answer: `AI Search Optimization is the practice of structuring your website, content, and digital footprint so generative AI engines — ChatGPT, Gemini, Perplexity, and Google's AI Overviews — recommend, cite, and quote your business when prospects ask category questions. It combines two disciplines: <a href="/services/seo-agency/aeo/">Answer Engine Optimization (AEO)</a> and <a href="/services/seo-agency/geo/">Generative Engine Optimization (GEO)</a>.`
  },
  {
    question: "How is AI Search Optimization different from traditional SEO?",
    answer: "Traditional SEO optimizes your website to rank in Google and Bing search results. AI Search Optimization optimizes your business to be cited and quoted inside AI-generated answers — a different surface with different ranking signals. Backlinko reports that 80% of pages cited by ChatGPT, Perplexity, and Copilot don't rank in Google's top 100. The two disciplines complement each other but require distinct optimization."
  },
  {
    question: 'How is AI Search Optimization different from "AI SEO"?',
    answer: `We use "AI SEO" to describe how we deliver search services — using AI agentic playbooks to accelerate execution across every SEO discipline. AI Search Optimization describes what surface we're optimizing for — the AI engines themselves. AI Search Optimization is one service inside our broader AI SEO offering, alongside Local SEO, Technical SEO, Authority Building, On-Page SEO, and Link Building.`
  },
  {
    question: "How long before I see results from AI Search Optimization?",
    answer: 'Most clients see initial citation appearances in ChatGPT and Perplexity within 60 to 90 days, and meaningful share-of-voice growth within 4 to 6 months. <a href="/services/seo-agency/aeo/">AEO</a> results — featured snippets, voice answers, AI Overview citations — tend to appear faster than <a href="/services/seo-agency/geo/">GEO</a> results, because AEO ranking criteria overlap more with traditional SEO signals you may already have working in your favor.'
  },
  {
    question: "Will AI Search Optimization replace my Google SEO efforts?",
    answer: "No — and it shouldn't. Traditional SEO is the foundation AI Search Optimization builds on, not a discipline being replaced. Backlinko's 2026 data shows pages ranking #1 on Google have a 58% chance of being cited by ChatGPT — strong rankings make AI visibility easier, not redundant. WordStream reports traditional search still drives roughly 34 times the traffic of AI search engines. Run AI Search Optimization alongside Local SEO, Technical SEO, and On-Page SEO for full coverage."
  },
  {
    question: "Do I need to write all-new content, or can existing pages be optimized?",
    answer: "Most clients start with a re-architecture of existing pages — restructuring service pages, FAQs, and blog content for AI extractability — and then layer in a steady cadence of new question-format content. According to HubSpot's 2026 small business GEO guide, you don't need a full content overhaul. You need to re-shape what's already working."
  },
  {
    question: "Which AI engines do you optimize for?",
    answer: "ChatGPT (the largest, with over 900 million weekly users as of April 2026), Google AI Overviews and AI Mode, Gemini, Perplexity, and Microsoft Copilot. We track all five in your monthly reporting and adjust optimization weight based on your category — different industries see different platform mixes."
  },
  {
    question: "How do you measure AI Search Optimization results?",
    answer: "We track citation frequency across each major AI engine, sentiment of the mentions, citation share-of-voice against your top three competitors, and AI-attributed referral traffic to your website. You also receive a monthly visibility score so progress is unambiguous. Every metric appears in your dashboard with month-over-month trending."
  },
  {
    question: "Is AI search big enough to bother with for a local service business?",
    answer: "Increasingly, yes. AI Overviews now appear on roughly 26% of U.S. Google searches and continue expanding into commercial and local intent queries. ChatGPT alone serves 900 million weekly users. HubSpot reports that 42% of CRM software buyers use AI search as part of their evaluation process. Local categories are following the same adoption curve, just slightly behind B2B technology."
  },
  {
    question: "Does AI search replace clicks, or generate them?",
    answer: "Both, depending on query type. Informational queries are increasingly resolved on the AI surface itself — meaning fewer raw clicks but the clicks that do happen are higher-intent. Backlinko reports that visitors discovered through AI answers are 4.4 times more valuable than visitors from traditional search, because they arrive pre-qualified by the AI's recommendation."
  },
  {
    question: "How much does AI Search Optimization cost?",
    answer: "Pricing depends on the size of your service area, the competitiveness of your category, and the scope of execution required. Most engagements run between $1,500 and $4,500 per month and operate on month-to-month terms with no long-term contracts. The lowest-friction starting point is the AI Optimization Audit — a fixed-fee project that gives you the data to decide whether to engage the full service."
  },
  {
    question: "Can I start with just an audit?",
    answer: "Yes — and we recommend it. Our AI Optimization Audit is a fixed-fee engagement that surfaces exactly where your business stands across the major AI engines, identifies your highest-leverage gaps, and gives you a 90-day prioritized roadmap. It is the productized entry point for working with us. Most clients start here before deciding whether to engage the full done-for-you service. The audit stands on its own."
  }
];
const AISearchOptimization = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "AI Search Optimization Services for Local Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Get cited in ChatGPT, Gemini, Perplexity & Google AI Overviews. Done-for-you AI Search Optimization (AEO + GEO) for local service businesses. Free audit available."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 250,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "keywords",
          content: "AI search optimization, AI SEO services, AEO and GEO, get cited in ChatGPT, AI search visibility"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 254,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/ai-search-optimization/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI Search Optimization for Local Service Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Be the answer when customers ask AI for the best business in your area. AEO + GEO services delivered by a 30-year Fortune 500 search strategist."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 260,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 264,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://growsmallbiz.io/services/seo-agency/ai-search-optimization/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 265,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:alt", content: "AI Search Optimization services for local service businesses — GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 267,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "Subrata Guha" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "AI Search Optimization",
        serviceType: "AI Search Optimization",
        description: "Done-for-you AI Search Optimization for local service businesses. Combines Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so your business gets cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
        url: "/services/seo-agency/ai-search-optimization/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "AI Search Optimization", url: "/services/seo-agency/ai-search-optimization/" }
        ],
        useEntityGraph: true,
        hasFaqPage: true,
        offerCatalog: {
          name: "AI Search Optimization Services",
          items: [
            {
              name: "Answer Engine Optimization (AEO)",
              description: "Structures your content as direct, extractable answers so AI assistants quote your business when prospects ask category questions.",
              url: "https://growsmallbiz.io/services/seo-agency/aeo/",
              category: "AI Search Optimization"
            },
            {
              name: "Generative Engine Optimization (GEO)",
              description: "Earns citations and brand mentions across the AI ecosystem so ChatGPT and Perplexity use your business as a source when synthesizing answers.",
              url: "https://growsmallbiz.io/services/seo-agency/geo/",
              category: "AI Search Optimization"
            }
          ]
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 271,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/ai-search-optimization/",
        images: [
          {
            url: heroBg,
            caption: "AI Search Optimization for local service businesses",
            description: "Hero illustration for GrowSmallBiz's AI Search Optimization sub-hub — combining Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so local service businesses get cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
            width: 1920,
            height: 1024
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 304,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/ai-search-optimization/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
      lineNumber: 318,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Sparkles, text: "Managed AI SEO — AI Search Optimization" },
          title: "AI Search Optimization for Small Businesses",
          subtitle: "<strong>Be the Local Business AI Recommends When Customers Ask.</strong>",
          description: "AI Search Optimization gets your local service business cited in ChatGPT, Gemini, Perplexity, and Google's AI Overviews — the new front door for high-intent customers. We combine Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) into one done-for-you system, built on a 30-year Fortune 500 search foundation, priced for the way local service businesses actually run.",
          primaryCTA: {
            label: "Get Your AI Optimization Audit",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true
          },
          note: "30+ Years of Fortune 500 Search Strategy • Built for Local Service Businesses • AEO + GEO Under One Strategy • No Long-Term Contracts",
          backgroundImage: heroBg,
          overlayOpacity: 82
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 324,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "Sound Familiar?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 345,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "When Did You Last Ask ChatGPT About Your Business?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 346,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 344,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center animate-fade-up", children: 'If you ran a search right now in ChatGPT, Gemini, or Perplexity for "best [your service] in [your city]" — would your business appear? For most local service businesses, the answer is no. AI search engines are recommending a tiny fraction of available local businesses, and the gap between Google rankings and AI visibility is widening every quarter.' }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center animate-fade-up", children: "Five Signs Your Business Is Invisible to AI Search" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 355,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 max-w-3xl mx-auto", children: fiveSigns.map((sign, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-start gap-4 rounded-2xl p-6 bg-background/60 border border-border/50 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-bold text-lg shrink-0", children: [
                i + 1,
                "."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 366,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: sign }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 367,
                columnNumber: 21
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 361,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 359,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "mt-12 max-w-3xl mx-auto rounded-2xl p-6 border-l-4 border-primary animate-fade-up",
            style: { backgroundColor: "hsl(210 40% 16%)" },
            children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "The Numbers Behind the Pattern" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 376,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "A January 2026 study of nearly 350,000 multi-location business profiles found that ChatGPT recommended just 1.2% of locations, Gemini 11%, and Perplexity 7.4% — compared to Google's local 3-pack inclusion rate of 35.9% (SearchEngineLand reporting on the SOCi 2026 Local Visibility Index). AI visibility is three to thirty times harder to earn than ranking well on Google." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 379,
                columnNumber: 17
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 372,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 343,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 341,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "The Definition" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 392,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What Is AI Search Optimization?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 393,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 391,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 text-center animate-fade-up", children: "AI Search Optimization is the practice of structuring your website, content, and digital footprint so AI engines like ChatGPT, Gemini, Perplexity, and Google's AI Overviews recommend, cite, and quote your business when prospects ask category questions. It combines two disciplines — Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) — built around how generative AI systems interpret user intent and select sources, as documented by Nielsen Norman Group's user-intent research." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 398,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-center mb-8 animate-fade-up", children: "The two pillars inside AI Search Optimization" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 402,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16", children: [
          /* @__PURE__ */ jsxDEV(GlowCard, { className: "p-8 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(Search, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 409,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 408,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Answer Engine Optimization (AEO)" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 411,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "AEO structures your content as direct, extractable answers — so when a customer asks an AI assistant a specific question about your category, the model retrieves and quotes your content. It is the discipline of making your business legible to AI engines." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 414,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 407,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(GlowCard, { className: "p-8 animate-fade-up", style: { animationDelay: "0.05s" }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 421,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 420,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Generative Engine Optimization (GEO)" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 423,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "GEO earns citations and brand mentions across the AI ecosystem — so when ChatGPT and Perplexity synthesize answers, your business is one of the sources the model uses to compose the response. It is the discipline of becoming a trusted reference inside AI-generated answers." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 426,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 419,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 406,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center italic text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up", children: "We'll cover what each discipline includes — and how to choose between them — further down this page." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 432,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-center mb-8 animate-fade-up", children: "How AI Search Optimization works alongside your traditional SEO foundation" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 436,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Traditional SEO is not dead. It is the foundation AI Search Optimization builds on. Strong rankings on Google and Bing remain necessary for two reasons: they continue to drive the majority of traffic for almost every local service business, and they correlate directly with AI visibility. Backlinko's 2026 analysis of Ahrefs data found that pages ranking #1 on Google have a 58% chance of being cited by ChatGPT — 3.5 times higher than pages ranking outside the top 20. Google's AI Overviews show the strongest correlation with traditional rankings of any AI surface." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 441,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The two disciplines complement each other. AI Search Optimization layers on top — addressing the entity clarity, content extractability, and multi-source consensus signals that AI engines weigh in addition to traditional ranking. Research from Nielsen Norman Group on user intent in AI search confirms the same conclusion practitioners are reaching independently: AI engines reward content that has already earned traditional search authority, then re-evaluate it against a new layer of structural and citation signals." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 444,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "This is why we deliver AI Search Optimization as a distinct service inside our broader",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline", children: "SEO Agency umbrella" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 449,
              columnNumber: 19
            }, void 0),
            " ",
            "— alongside (not instead of)",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/local-seo/", className: "text-primary hover:underline", children: "Local SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 453,
              columnNumber: 19
            }, void 0),
            ",",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/technical-seo/", className: "text-primary hover:underline", children: "Technical SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 457,
              columnNumber: 19
            }, void 0),
            ",",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/on-page-seo/", className: "text-primary hover:underline", children: "On-Page SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 461,
              columnNumber: 19
            }, void 0),
            ",",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/authority-building/", className: "text-primary hover:underline", children: "Authority Building" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 465,
              columnNumber: 19
            }, void 0),
            ", and",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/link-building/", className: "text-primary hover:underline", children: "Link Building" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 469,
              columnNumber: 19
            }, void 0),
            ". Most clients run AI Search Optimization in parallel with at least one traditional SEO discipline."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 447,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 440,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-16 max-w-5xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center", children: "How the disciplines complement each other" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 478,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-background/60", children: [
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-4 font-semibold text-foreground", children: "Dimension" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 485,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-4 font-semibold text-foreground", children: "Traditional SEO" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 486,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-4 font-semibold text-primary", children: "AI Search Optimization" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 487,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 484,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 483,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("tbody", { children: comparisonRows.map((row, i) => /* @__PURE__ */ jsxDEV(
              "tr",
              {
                className: i % 2 === 0 ? "bg-background/30" : "bg-background/60",
                children: [
                  /* @__PURE__ */ jsxDEV("td", { className: "p-4 font-medium text-foreground", children: row[0] }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 496,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("td", { className: "p-4 text-muted-foreground", children: row[1] }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 497,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("td", { className: "p-4 text-muted-foreground", children: row[2] }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 498,
                    columnNumber: 27
                  }, void 0)
                ]
              },
              i,
              true,
              {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 492,
                columnNumber: 25
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 490,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 482,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 481,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 477,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 390,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 389,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 388,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "Why This Matters Now" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 514,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why AI Search Optimization Is Non-Negotiable in 2026" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 515,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 513,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center animate-fade-up", children: `AI search has crossed from "emerging trend" to primary discovery channel for an increasing share of category queries. McKinsey Global Institute's research on AI and customer engagement documents the speed of this shift across industries. Three converging forces make AI Search Optimization a 2026 priority for every local service business that wants to protect lead flow over the next 24 months — and a fourth that closes the early-mover window faster than most owners realize.` }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 520,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 max-w-3xl mx-auto", children: shifts.map((shift, i) => {
          const Icon = shift.icon;
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "rounded-2xl p-8 bg-background/60 border border-border/50 animate-fade-up",
              style: { animationDelay: `${i * 0.05}s` },
              children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 535,
                  columnNumber: 27
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 534,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-1", children: shift.label }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 538,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-3", children: shift.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 541,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground mb-3", children: shift.headline }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 544,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: shift.body }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 545,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 537,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 533,
                columnNumber: 23
              }, void 0)
            },
            i,
            false,
            {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 528,
              columnNumber: 21
            },
            void 0
          );
        }) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 524,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "mt-12 max-w-3xl mx-auto rounded-2xl p-6 border-l-4 border-primary animate-fade-up",
            style: { backgroundColor: "hsl(210 40% 16%)" },
            children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "The Historical Parallel" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 557,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: 'AI search in 2026 is where Google search was around 2008. The brands that planted their flag early dominated the next decade of organic traffic. The brands that waited for the channel to "prove itself" spent the next decade paying agencies to win back the ground they could have held for free.' }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 560,
                columnNumber: 17
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 553,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10 text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground mb-4", children: "Find out exactly where you stand in AI search." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 566,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: PRIMARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: [
            "Get your AI Optimization Audit ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 571,
              columnNumber: 52
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 570,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 569,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 565,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 512,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 511,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 510,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "The GrowSmallBiz System" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 584,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What's Included in Our AI Search Optimization Service" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 585,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 583,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 text-center animate-fade-up", children: "Our AI Search Optimization service combines AEO and GEO into a single integrated program built on six operational pillars: AI Search Audit, Content Framework Re-Architecture, Entity Optimization, Technical AI-Readiness, Authority & Brand Mention Building, and Monthly Reporting. We execute every layer for you — from the baseline audit through monthly reporting on citations across ChatGPT, Gemini, Perplexity, and Google AI Overviews." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 590,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 max-w-4xl mx-auto", children: pillars.map((p, i) => {
          const Icon = p.icon;
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "rounded-2xl p-8 bg-background/60 border border-border/50 animate-fade-up",
              style: { animationDelay: `${i * 0.05}s` },
              children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-7 h-7 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 605,
                  columnNumber: 27
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 604,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold text-primary mb-1", children: [
                    "PILLAR ",
                    p.num
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 608,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-1", children: p.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 609,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-foreground/80 italic mb-4", children: p.subtitle }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 612,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-4", children: p.body }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 615,
                    columnNumber: 27
                  }, void 0),
                  p.bullets && /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: p.bullets.map((b, bi) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-primary mt-1 shrink-0" }, void 0, false, {
                      fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                      lineNumber: 620,
                      columnNumber: 35
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(
                      "span",
                      {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        dangerouslySetInnerHTML: { __html: b }
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                        lineNumber: 621,
                        columnNumber: 35
                      },
                      void 0
                    )
                  ] }, bi, true, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 619,
                    columnNumber: 33
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 617,
                    columnNumber: 29
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 607,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 603,
                columnNumber: 23
              }, void 0)
            },
            i,
            false,
            {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 598,
              columnNumber: 21
            },
            void 0
          );
        }) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 594,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 582,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 581,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 580,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "The Two Disciplines" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 643,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "The Two Disciplines Inside AI Search Optimization" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 644,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 642,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(GlowCard, { className: "p-10 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxDEV(Search, { className: "w-7 h-7 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 652,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 651,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground mb-4", children: "Answer Engine Optimization (AEO)" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 654,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "The discipline of structuring your content as direct, extractable answers — so when a customer asks an AI assistant a specific question about your category, the model retrieves and quotes your content. AEO covers question-format content, schema, FAQ optimization, voice search, and content chunking." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 657,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/aeo/", children: [
              "Explore AEO Services ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 662,
                columnNumber: 42
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 661,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 660,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 650,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(GlowCard, { className: "p-10 animate-fade-up", style: { animationDelay: "0.08s" }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-7 h-7 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 669,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 668,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground mb-4", children: "Generative Engine Optimization (GEO)" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 671,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "The discipline of earning citations and brand mentions across the AI ecosystem — so when ChatGPT and Perplexity synthesize answers, your business is one of the sources used to compose the response. GEO covers third-party authority, content gain, multi-platform presence, and citation network building." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 674,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/geo/", children: [
              "Explore GEO Services ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 679,
                columnNumber: 42
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 678,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 677,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 667,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 649,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 641,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 640,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "Real Results" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 692,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What AI Search Optimization Looks Like in Practice" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 693,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 691,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center animate-fade-up", children: "We measure success in three connected dimensions: AI citation share across the major engines, traditional search visibility on Google, and lead-to-call conversion. The case below reflects a current client engagement and aligns with industry benchmarks documented across Search Engine Journal's 2023–2024 case study coverage of AI SEO programs. Client name is withheld per white-label agency agreement; all metrics are from real client data." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 698,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-8 bg-background/60 border border-border/50 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold text-primary uppercase tracking-wider mb-2", children: "Case Study — HVAC Contractor" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 703,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: "Engagement type" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 706,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-8", children: "AI Search Optimization (AEO + GEO) layered on top of an existing local SEO program." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 707,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-bold text-foreground mb-4", children: "Starting baseline (Month 0)" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 711,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-xl border border-border mb-8", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-background/40", children: [
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-3 font-semibold text-foreground", children: "Metric" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 718,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-3 font-semibold text-foreground", children: "Baseline" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 719,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-3 font-semibold text-foreground", children: "Notes" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 720,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 717,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 716,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("tbody", { children: baselineRows.map((r, i) => /* @__PURE__ */ jsxDEV("tr", { className: i % 2 === 0 ? "bg-background/20" : "bg-background/40", children: [
              /* @__PURE__ */ jsxDEV("td", { className: "p-3 font-medium text-foreground", children: r[0] }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 726,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("td", { className: "p-3 text-muted-foreground", children: r[1] }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 727,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("td", { className: "p-3 text-muted-foreground", children: r[2] }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 728,
                columnNumber: 27
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 725,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 723,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 715,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 714,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-bold text-foreground mb-4", children: "After 6 months" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 735,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-xl border border-primary/30", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-primary/10", children: [
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-3 font-semibold text-foreground", children: "Metric" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 740,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-3 font-semibold text-primary", children: "Result" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 741,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("th", { className: "text-left p-3 font-semibold text-foreground", children: "Notes" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 742,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 739,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 738,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("tbody", { children: resultRows.map((r, i) => /* @__PURE__ */ jsxDEV("tr", { className: i % 2 === 0 ? "bg-background/20" : "bg-background/40", children: [
              /* @__PURE__ */ jsxDEV("td", { className: "p-3 font-medium text-foreground", children: r[0] }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 748,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("td", { className: "p-3 font-semibold text-primary", children: r[1] }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 749,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("td", { className: "p-3 text-muted-foreground", children: r[2] }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 750,
                columnNumber: 27
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 747,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 745,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 737,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 736,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-xs text-muted-foreground italic", children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-4 h-4 inline mr-1 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 758,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("strong", { children: "White-label attribution:" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 759,
              columnNumber: 19
            }, void 0),
            " Client name withheld per agency agreement. All metrics are from real client engagement. This is the only case study published on this page; additional case studies live on the AEO and GEO child pages."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 757,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 702,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 690,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 689,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 688,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "Why GrowSmallBiz" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 771,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Local Service Businesses Choose GrowSmallBiz" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 772,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 770,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: whyItems.map((item, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "rounded-2xl p-6 bg-background/60 border border-border/50 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 mb-3", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-1 shrink-0" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 785,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                  lineNumber: 786,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 784,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed pl-8", children: item.body }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 788,
                columnNumber: 21
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 779,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 777,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-10 animate-fade-up", children: /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/services/seo-agency/",
            className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1",
            children: "← Back to Managed AI SEO Overview"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 794,
            columnNumber: 17
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 793,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 769,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 768,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 767,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions About AI Search Optimization",
          faqs,
          schemaType: "FAQPage",
          schemaId: "https://growsmallbiz.io/services/seo-agency/ai-search-optimization/#faqpage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about AI Search Optimization?",
            description: "We're here to help you understand how AEO and GEO work together for your business.",
            tagline: "Let's get your business cited where buyers are now asking."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 806,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "final-cta",
          className: "py-20 lg:py-28",
          style: {
            background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)"
          },
          children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "Ready to Be the Answer?" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 831,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Be the Answer When Customers Ask AI" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 832,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-10 max-w-3xl mx-auto", children: "The businesses being cited in ChatGPT, Gemini, and Perplexity today are setting the defaults for the next decade. The window for early movers is open — but it isn't staying that way. Get your AI Optimization Audit. We'll show you exactly where your business stands in AI search today, what your top three competitors are doing differently, and the 90-day roadmap of the highest-leverage moves you can make." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 835,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 830,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              CardCTA,
              {
                title: "Get Your AI Optimization Audit",
                description: "Schedule your free strategy session to see where you stand in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
                buttonText: "Get Your AI Optimization Audit",
                buttonHref: PRIMARY_CTA_URL,
                sectionClassName: "pt-0 pb-0"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 840,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Free SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 850,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 849,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 848,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto", children: "AI Search Optimization is delivered as part of the GrowSmallBiz Managed AI SEO system, alongside Local SEO, Technical SEO, On-Page SEO, Authority Building, and Link Building." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
              lineNumber: 856,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up",
                style: { animationDelay: "0.3s" },
                children: [
                  /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 864,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                    lineNumber: 868,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
                lineNumber: 860,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
            lineNumber: 829,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
          lineNumber: 821,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
        lineNumber: 874,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
      lineNumber: 877,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/AISearchOptimization.tsx",
    lineNumber: 247,
    columnNumber: 5
  }, void 0);
};
export {
  AISearchOptimization as default
};
