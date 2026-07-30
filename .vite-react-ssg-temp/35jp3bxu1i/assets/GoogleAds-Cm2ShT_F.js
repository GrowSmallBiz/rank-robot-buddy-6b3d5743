import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { P as PersonCTA } from "./PersonCTA-BBiDGLm3.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { u as useUtm, C as CTA_URLS } from "./use-utm-X_toIThi.js";
import { Target, ArrowRight, Phone, Zap, Eye, MapPin, BarChart3, RefreshCw, Search, LayoutGrid, CheckCircle2, Repeat, Mail, MessageSquare, Home, Wrench, Sparkles, Smile, PersonStanding, Key, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-qwhOlPSV.js";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const heroGoogleAdsRoofing = "/assets/hero-google-ads-roofing-CvMOH6cZ.webp";
const faqs = [
  {
    question: "Are Google Ads worth it for a small business?",
    answer: "For local service businesses, Google Ads delivers high ROI when campaigns are built correctly — industry-wide conversion rates average 7.52% (WordStream by LocaliQ, 2025). The key is strategy: broad targeting without conversion tracking produces waste; precision-targeted campaigns with proper measurement produce positive unit economics. Most local service businesses see clear positive returns within 90 days of optimized management."
  },
  {
    question: "How much should a small business spend on Google Ads?",
    answer: "Most local service businesses budget $2,000–$5,000 per month on Google Ads to generate meaningful lead volume. Gartner's 2025 CMO Spend Survey shows companies allocate 7.7% of revenue to marketing on average — use that as a planning floor when deciding Google Ads budget. Conversion systems need to prove out before scaling, so we always audit your situation before recommending a specific number."
  },
  {
    question: "How long does it take to see results from Google Ads?",
    answer: "Google Ads delivers immediate visibility — campaigns can go live within 2–3 weeks of onboarding, and first leads typically arrive within 30 days. Meaningful CPA improvement compounds over the first 90 days as we gather enough conversion data to refine bids, keywords, and audiences. Unlike SEO, Google Ads does not require months of indexing to start producing leads."
  },
  {
    question: "What is the difference between Google Ads and Google Local Service Ads?",
    // HTML answer — bold emphasis + inline LSA hyperlink. The exact same string
    // is used in the JSON-LD acceptedAnswer text (no stripping).
    answer: `Google Ads and Google Local Service Ads are both Google paid channels, but they work differently. Google Ads lets you bid on any keyword with full control over targeting and messaging — you pay per click. Google Local Service Ads appear above Google Ads with the Google Guaranteed badge — you pay per qualified lead, but only specific service categories qualify. <strong>Google Ads is best when</strong> you want keyword-level control, retargeting, or your service is not LSA-eligible. <strong>LSA is best when</strong> you qualify for the badge and want pay-per-lead pricing on pre-qualified calls. Per The Media Captain's 2025 analysis, 29% of searchers prefer clicking LSA listings vs 11% who prefer Google Ads — most local service businesses run both. Learn more about <a href="/services/paid-advertising/google-local-services-ads/">Google Local Service Ads management</a> to see if your business qualifies.`
  },
  {
    question: "Do I need a new website to run Google Ads?",
    answer: "Not necessarily — but your landing pages matter more than most people realize. Google Ads traffic needs to land on pages that load fast, match the ad intent, and make it easy to call or submit a form. If your current site converts well, we will optimize existing pages. If it does not, we will recommend landing page improvements or purpose-built PPC landing pages before scaling spend."
  },
  {
    question: "Can you manage Google Ads for my business even if I am not in the Bay Area?",
    answer: "Yes — we manage Google Ads campaigns for local service businesses nationally. While GrowSmallBiz is headquartered in Danville, California, our case studies span California, Florida, and the Chicagoland region. Google Ads is a digital channel — what matters is campaign strategy, not our physical location."
  },
  {
    question: "How is GrowSmallBiz different from other PPC agencies?",
    answer: "Three differences: we only work with local service businesses, we build integrated systems (not just ads), and we stand behind our work with a performance guarantee. Specialization means we understand your customer's search behavior and competitive landscape. Integration means Google Ads connects to CRM, call tracking, and lead handling so leads actually convert. The guarantee: if we do not generate leads within the agreed timeframe and scope, we continue management at no additional fee."
  },
  {
    question: "What do I need to get started?",
    answer: "Schedule a free strategy session — no cost, no obligation. We audit your current digital presence, review any existing Google Ads history, identify your biggest opportunities, and show you exactly what a Google Ads campaign would look like for your business. If it is a fit, campaigns can be live within 2–3 weeks."
  }
];
const marketStats = [
  {
    value: "7.52%",
    label: "Average Google Ads conversion rate across industries in 2025"
  },
  {
    value: "$70.11",
    label: "Average Google Ads cost per lead across industries"
  },
  {
    value: "$5.26",
    label: "Average Google Ads cost per click"
  },
  {
    value: "6.66%",
    label: "Average click-through rate — up from 1.35% in 2015"
  }
];
const caseStudyCards = [
  {
    badge: "Dental Practice — Concord, CA",
    title: "Surge in High-Value Patient Leads",
    timeframe: "Q4 year-over-year comparison",
    challenge: "Client needed more non-branded general dentistry leads plus high-value patients for implants and all-on-4 treatments.",
    strategy: "Full account audit, campaign rebuild, call-only campaign for phone leads, dedicated implants/all-on-4 campaign, aggressive negative-keyword list, and extension testing.",
    metrics: [
      { value: "+175.51%", label: "Conversions" },
      { value: "−64.62%", label: "CPA" },
      { value: "+187.04%", label: "Conversion Rate" },
      { value: "+127.25%", label: "CTR" }
    ],
    href: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/"
  },
  {
    badge: "Med Spa — San Ramon, CA",
    title: "Long-Term Growth, Efficient CPA",
    timeframe: "All-time + recent 30 days",
    challenge: "Long-term lead growth at a stable and efficient cost per acquisition, with phone calls as the primary conversion.",
    strategy: "Multi-campaign Google Ads structure across Search and Display, service-line differentiation, tiered daily budgets, and ongoing optimization sustained over 3+ years.",
    metrics: [
      { value: "2,577", label: "Total Conversions" },
      { value: "$16.39", label: "All-Time CPA" },
      { value: "+48.8%", label: "30-Day Conversions" },
      { value: "−31.1%", label: "30-Day CPA" }
    ],
    href: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/"
  },
  {
    badge: "Roofing Contractor — Palm Beach County, FL",
    title: "Multi-Regional Campaign Mastery",
    timeframe: "Live since August 2023 — multi-regional rollout",
    challenge: "Scaling Google Ads across multiple Florida metros (West Palm Beach, Martin/St Lucie, Lakeland) with distinct market dynamics and competitive intensity in each.",
    strategy: "SKAG structure per metro, STAG for broader thematic reach, Performance Max for volume, Smart Campaign for automation — mixed campaign types matched to conversion intent per region.",
    metrics: [
      { value: "1,225", label: "Martin/St Lucie Clicks" },
      { value: "258", label: "Martin/St Lucie Conversions" },
      { value: "$70.13", label: "Martin/St Lucie CPA" },
      { value: "21.06%", label: "Martin/St Lucie Conv. Rate" }
    ],
    href: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/"
  },
  {
    badge: "Tree & Lawn Care — Chicagoland",
    title: "10x Budget Scale, Compounding Returns",
    timeframe: "Live since September 2023",
    challenge: "Starting at a modest $2,500/month budget, the client needed proof that spend could scale without CPA spiraling — and needed both form-submission and call-lead conversions tracked.",
    strategy: "Search + Performance Max dual campaign type, budget scaling based on performance confidence (adjusted from $2,500 → $500 → back to $2,500 → $5,000), and dual-conversion tracking for forms and calls.",
    metrics: [
      { value: "553", label: "Total Conversions" },
      { value: "$53.70", label: "CPA" },
      { value: "+169.5%", label: "90-Day Clicks" },
      { value: "+211.5%", label: "90-Day Conversions" }
    ],
    href: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/"
  }
];
const industryTiles = [
  {
    icon: Home,
    title: "HVAC Contractors",
    description: "Seasonal demand capture for residential and commercial HVAC service calls.",
    href: "/home-service-contractors/marketing-for-hvac-contractors/"
  },
  {
    icon: Wrench,
    title: "Plumbing & Home Services",
    description: "Emergency and scheduled-service campaigns with geo-targeted call extensions.",
    href: "/home-service-contractors/"
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetics",
    description: "High-value treatment inquiries with landing pages tuned to aesthetic buyer intent.",
    href: "/health-and-wellness-practices/marketing-for-med-spas/"
  },
  {
    icon: Smile,
    title: "Dental Practices",
    description: "General dentistry, implants, and high-value procedures with negative-keyword discipline.",
    href: "/health-and-wellness-practices/marketing-for-dentists/"
  },
  {
    icon: PersonStanding,
    title: "Chiropractic Practices",
    description: "Patient-acquisition campaigns built around local search and wellness-curious audiences.",
    href: "/health-and-wellness-practices/marketing-for-chiropractors/"
  },
  {
    icon: Key,
    title: "Realtors & Real Estate",
    description: "Buyer and seller lead generation with multi-touch funnel strategy.",
    href: "/professional-services/marketing-for-realtors/"
  },
  {
    icon: Camera,
    title: "Photographers",
    description: "Bookings campaigns for wedding, portrait, and commercial photography search intent.",
    href: "/professional-services/marketing-for-photographers/"
  }
];
const GoogleAds = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Google Ads Management for Local Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Get more phone calls, fill your calendar, and exceed your revenue goals with AI optimized Google Ads campaigns for local businesses. Contact us." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "Google Ads management, local service advertising, pay-per-click marketing, targeted ad campaigns, advertising optimization, conversion tracking, small business marketing, lead generation strategies" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/paid-advertising/google-ads/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI-Optimized Google Ads For Small Businesses  | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Local service businesses running Google Ads that actually generate leads. Transparent reporting, performance guarantee, and proven case studies across dental, med spa, HVAC, roofing, and landscaping."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 254,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://growsmallbiz.io/services/paid-advertising/google-ads/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Google Ads Management for Small Businesses — GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Local service businesses running Google Ads that actually generate leads. Transparent reporting, performance guarantee, and proven case studies across dental, med spa, HVAC, roofing, and landscaping."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 263,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Google Ads Management for Small Businesses",
        serviceType: "Google Ads Management",
        description: "Google Ads campaigns built and managed specifically for local service businesses. High-intent keyword targeting, conversion tracking, and ongoing optimization.",
        url: "/services/paid-advertising/google-ads/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Paid Advertising", url: "/services/paid-advertising/" },
          { name: "Google Ads", url: "/services/paid-advertising/google-ads/" }
        ],
        useEntityGraph: true,
        pageName: "Google Ads Management for Small Businesses",
        pageDescription: "Google Ads for HVAC, dental, med spa, roofing, and landscape businesses. Precision-targeted PPC with conversion tracking, transparent reporting, and a performance guarantee.",
        hasFaqPage: true,
        offerCatalog: {
          name: "Google Ads Management Services",
          items: [
            {
              name: "Google Search Ads (Pay-Per-Click) Management",
              description: "Managed Google Search campaigns for local service businesses, including high-intent keyword research, ad copywriting, smart bidding, negative keyword management, and ongoing optimization.",
              url: "https://growsmallbiz.io/services/paid-advertising/google-ads/",
              category: "PPC Management",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            },
            {
              name: "Performance Max & Shopping Campaigns",
              description: "Performance Max campaign build and management across Search, Display, YouTube, Gmail, and Maps, including asset group management, audience signal configuration, and creative rotation.",
              url: "https://growsmallbiz.io/services/paid-advertising/google-ads/",
              category: "PPC Management",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            },
            {
              name: "Google Display & Retargeting Ads",
              description: "Display and retargeting campaigns to re-engage prior website visitors and build brand awareness across the Google Display Network, including custom audience creation and cross-device targeting.",
              url: "https://growsmallbiz.io/services/paid-advertising/google-ads/",
              category: "Display Advertising",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            },
            {
              name: "Conversion Tracking & Analytics Setup",
              description: "Google Ads and Google Analytics 4 integration, call tracking and call recording setup, form fill and booking conversion tracking, and monthly performance reporting.",
              url: "https://growsmallbiz.io/services/paid-advertising/google-ads/",
              category: "Marketing Analytics",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            }
          ]
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 268,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/paid-advertising/google-ads/",
        images: [
          {
            url: heroGoogleAdsRoofing,
            caption: "Google Ads management for local service businesses",
            description: "Hero image for GrowSmallBiz's Google Ads management service — featuring a roofing contractor as an example local service business that uses Google Ads (Search, LSA, Performance Max) to generate booked jobs and qualified leads.",
            width: 1376,
            height: 768
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 321,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/paid-advertising/google-ads/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
      lineNumber: 334,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
      lineNumber: 336,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("nav", { "aria-label": "Breadcrumb", className: "container mx-auto px-4 pt-6", children: /* @__PURE__ */ jsxDEV(Breadcrumb, { children: /* @__PURE__ */ jsxDEV(BreadcrumbList, { children: [
        /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: "Home" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 345,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 344,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 343,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(BreadcrumbSeparator, {}, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 348,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/", children: "Services" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 351,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 350,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 349,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(BreadcrumbSeparator, {}, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 354,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/", children: "Paid Advertising" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 357,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 356,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 355,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(BreadcrumbSeparator, {}, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 360,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbPage, { children: "Google Ads" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 362,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 361,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 342,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 341,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 340,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative pt-12 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: heroGoogleAdsRoofing,
              alt: "Couple analyzing Google search results on laptop, focused on local service business leads and advertising strategies.",
              width: 1920,
              height: 1080,
              fetchPriority: "high",
              className: "w-full h-full object-cover"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 371,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/60" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 378,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 370,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 hero-glow" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 380,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up flex justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsxDEV(Target, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 385,
              columnNumber: 17
            }, void 0),
            "Google Ads Management"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 384,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 383,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up bg-gradient-heading bg-clip-text text-transparent", children: "Google Ads Services for Small Businesses That Actually Generate Leads" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 389,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: "Stop paying for clicks that go nowhere. GrowSmallBiz builds and manages Google Ads campaigns exclusively for local service businesses — every dollar targeted, every lead tracked, every campaign tuned to grow your revenue." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 392,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.25s" }, children: [
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Schedule Strategy Session",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 399,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 397,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 396,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 404,
                columnNumber: 19
              }, void 0),
              " Call +1 (925) 886-3724"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 403,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 402,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 395,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              className: "text-base md:text-lg text-muted-foreground text-center mx-auto animate-fade-up",
              style: { maxWidth: "40rem", marginTop: "1.5rem", animationDelay: "0.3s" },
              children: "Managing Google Ads campaigns for local service businesses since 2021 — across the Bay Area, Florida, and the Chicagoland region."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 409,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 382,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 381,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 369,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16", style: { backgroundColor: "#1B2A4E" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Google Ads",
            titleHighlight: "by the Numbers in 2025",
            className: "mb-4 [&_h2]:text-white"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 422,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-white/70 text-center max-w-2xl mx-auto mb-12", children: "Verified benchmarks from WordStream's analysis of 16,000+ U.S. Google Ads campaigns." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 427,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto", children: marketStats.map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-3", children: stat.value }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-white leading-snug mb-3", children: stat.label }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs italic text-white/50", children: "Source: WordStream by LocaliQ 2025 Benchmarks" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 435,
            columnNumber: 17
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 432,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 430,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 421,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 420,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "relative rounded-2xl p-8 md:p-10 border-l-4 border-primary",
          style: { backgroundColor: "hsl(210 50% 12%)" },
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Why Google Ads Matters Now" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 450,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: [
              /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz manages Google Ads for local service businesses in a market where paid visibility matters more than ever. AI Overviews now appear in 25% of Google searches, and organic click-through rates drop 58% on queries affected by them (Conductor 2026; Ahrefs 2026)." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 454,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "For local services, only 7.9% of searches currently trigger an AI Overview (Ahrefs, November 2025) — so high-intent local queries still route through traditional results, where Google Ads claim the top placement. The AI shift is coming for local search, but paid visibility is the surface that protects against it." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 457,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 453,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 446,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 445,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 444,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 443,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Why Most Small Businesses",
            titleHighlight: "Lose Money on Google Ads",
            description: "Running Google Ads without a local-focused strategy is one of the fastest ways to burn through a marketing budget. Here is what we see every day from businesses that come to us after trying it on their own or with a generic agency:"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 470,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 mt-8", children: [
          "Broad targeting that shows your ads to people outside your service area",
          "Generic ad copy that does not speak to what local customers actually care about",
          "No conversion tracking so you can never tell which clicks turned into calls or bookings",
          "Set it and forget it campaign management — no ongoing optimization, no testing",
          "Wasted spend on irrelevant keywords that attract tire-kickers instead of ready-to-buy customers"
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV(Zap, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 484,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground text-sm", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 485,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 483,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 475,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-center mt-8 animate-fade-up", children: "The good news: every one of these problems is fixable with the right local PPC strategy." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 469,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 468,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 467,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "What You Get When Google Ads Are Done Right for",
            titleHighlight: "Your Small Business",
            description: "When your Google Ads campaign is built and managed specifically for your local market, the results speak for themselves."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 500,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12", children: [
          { icon: Eye, title: "Instant Visibility in Your Local Market", desc: 'Unlike SEO, paid search puts you at the top of Google results immediately — right when your ideal customer is searching for the exact service you provide. Whether someone is searching "HVAC repair near me" or "med spa Botox Danville CA," a properly built campaign gets you seen first.' },
          { icon: Target, title: "Leads, Not Just Clicks", desc: "Traffic is meaningless without conversion. We build campaigns with conversion-focused landing pages, optimized calls-to-action, and proper tracking so you attract people who are ready to call, book, or buy — not just browse." },
          { icon: MapPin, title: "Precision Targeting for Your Service Area", desc: "We configure your campaigns to reach customers specifically within your service radius — whether that is a single city, a metro area, or multiple zip codes. No wasted spend on people you can never serve." },
          { icon: BarChart3, title: "Full Transparency on Every Dollar Spent", desc: "You will always know what you are spending, what it is generating, and what your cost-per-lead looks like. No mystery metrics, no vanity reporting — just the numbers that matter to your business." },
          { icon: RefreshCw, title: "Campaigns That Improve Over Time", desc: "We do not set up your ads and walk away. Every campaign is continuously monitored, tested, and refined — adjusting bids, refining audiences, and rotating ad copy to push your cost per acquisition lower every month." }
        ].map((card, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(card.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 515,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 514,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-display font-semibold text-foreground", children: card.title }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 517,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: card.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 518,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 513,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 505,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 499,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 498,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 497,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Our Google Ads Services for",
            titleHighlight: "Small Businesses",
            description: "We offer a complete suite of Google advertising solutions built for local service businesses."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 530,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-8 mt-12", children: [
          {
            icon: Search,
            title: "Google Search Ads (Pay-Per-Click)",
            desc: "The most direct form of local advertising. We build search campaigns targeting high-intent keywords — the terms your customers type when they are ready to hire someone. We handle keyword research, ad copywriting, bid strategy, and ongoing A/B testing to maximize your return.",
            bullets: ["High-intent, locally targeted keyword research", "Compelling ad copy written to drive calls and form fills", "Smart bidding strategies aligned to your revenue goals", "Negative keyword management to eliminate wasted spend", "Continuous performance monitoring and optimization"]
          },
          {
            // PROMPT 5 — LSA card replaced with Performance Max & Shopping
            icon: LayoutGrid,
            title: "Performance Max & Shopping Campaigns",
            desc: "Performance Max extends your Google Ads reach beyond search — running across Search, Display, YouTube, Gmail, and Maps from a single campaign. For local service businesses, PMax is a powerful volume channel when combined with traditional search campaigns.",
            bullets: [
              "Performance Max campaign build and asset group management",
              "Conversion goal alignment — calls, form fills, booked appointments",
              "Audience signal configuration to guide the AI",
              "Creative asset rotation — headlines, descriptions, images, video",
              "Cross-campaign coordination with your search strategy"
            ]
          },
          {
            icon: RefreshCw,
            title: "Google Display and Retargeting Ads",
            desc: "Not every potential customer converts on the first visit. Retargeting campaigns keep your business in front of people who have already shown interest — at a fraction of the cost of acquiring a new click.",
            bullets: ["Custom audience creation based on website visitors and engagement", "Retargeting sequences designed to re-engage and convert", "Display campaigns for brand awareness in your local market", "Cross-device targeting across desktop and mobile"]
          },
          {
            icon: BarChart3,
            title: "Conversion Tracking and Analytics Setup",
            desc: "Every campaign we manage includes proper conversion tracking from day one. We connect your Google Ads account to call tracking, form submissions, and booking confirmations so you have a complete picture of your ad performance.",
            bullets: ["Google Analytics 4 and Google Ads integration", "Call tracking and call recording setup", "Form fill and booking conversion tracking", "Monthly performance reports with actionable insights"]
          }
        ].map((svc, i) => /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal rounded-xl p-6 space-y-4 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(svc.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 567,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 566,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-base font-display font-semibold text-foreground", children: svc.title }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 569,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: svc.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 570,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: svc.bullets.map((b, j) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 574,
              columnNumber: 25
            }, void 0),
            b
          ] }, j, true, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 573,
            columnNumber: 23
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 571,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 565,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 535,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 529,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 528,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 527,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "how-it-works", className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "From Strategy to Leads in",
            titleHighlight: "Days, Not Months"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 590,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12", children: [
          { title: "Discovery and Business Analysis", desc: "We start with a deep-dive consultation to understand your business, your service area, your competitive landscape, and your revenue goals. We audit your existing digital assets — website, current ads if any, Google Business Profile — to identify opportunities and gaps before we build anything." },
          { title: "Strategic Campaign Planning", desc: "Based on our analysis, we develop a tailored Google Ads strategy — selecting campaign types, defining targeting parameters, establishing budget allocation, and mapping out the keyword universe we will go after. You review and approve the plan before any dollar is spent." },
          { title: "Campaign Build and Launch", desc: "Our team builds your campaigns from the ground up — writing ad copy, configuring targeting, setting up conversion tracking, and connecting all reporting. We typically launch Google Ads campaigns within 2–3 weeks of onboarding, once tracking and conversion systems are fully in place." },
          { title: "Optimization and Scaling", desc: "Once live, we monitor performance daily and run systematic optimization cycles — testing ad variations, refining bids, pruning underperforming keywords, and reallocating budget to what is working. You receive monthly performance reviews with full transparency into results and next steps." },
          { title: "Ongoing Partnership", desc: "Your assigned Account Relationship Manager is your dedicated point of contact. We hold monthly strategy meetings to review performance, discuss market changes, and plan for continued growth. As your results compound, we help you scale your investment strategically." }
        ].map((step, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "feature-card-teal rounded-xl p-6 animate-fade-up flex flex-col h-full",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-primary", children: i + 1 }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 608,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 607,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h4", { className: "text-base font-display font-semibold text-foreground mb-2", children: [
                "Step ",
                i + 1,
                " — ",
                step.title
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 610,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.desc }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 613,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 602,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 594,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 589,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 588,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 587,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Google Ads Management for These",
            titleHighlight: "Local Service Industries"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 625,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12", children: industryTiles.map((ind, i) => /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: ind.href,
            className: "feature-card-teal rounded-xl p-5 text-center space-y-3 animate-fade-up flex flex-col items-center min-h-[180px] transition-transform hover:scale-[1.02]",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(ind.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 638,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 637,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-display font-semibold text-foreground", children: ind.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 640,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: ind.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 641,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 631,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 629,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 624,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 623,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 622,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Why Small Businesses Choose GrowSmallBiz Over",
            titleHighlight: "Generic Agencies",
            className: "mb-12"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 653,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          { title: "We Only Work With Local Service Businesses", desc: "We do not manage ads for national brands, SaaS companies, or e-commerce stores. Our entire focus is local service businesses like yours. That specialization means we know your customer's search behavior, your competitive landscape, and what ad strategies actually move the needle for businesses in your category." },
          { title: "An Integrated Marketing Ecosystem — Not Just Ads", desc: "Paid ads work best when they are part of a coordinated system. We connect your Google Ads campaigns with your website, SEO, reputation management, and AI-powered lead handling — so leads do not just arrive, they convert." },
          { title: "A Performance Guarantee", desc: "We stand behind our work. If GrowSmallBiz does not generate leads within a pre-agreed timeframe and scope, we continue managing your campaigns at no additional management fee until results are delivered." },
          { title: "Led by a 30+ Year Marketing Veteran", desc: "GrowSmallBiz was founded by Subrata Guha, a 30+ year veteran of Fortune 500 Sales, Marketing, Supply Chain, and Digital Transformation." },
          { title: "Transparent Reporting — Always", desc: "You will never wonder what your money is doing. Every client gets a multi-channel dashboard with real-time visibility into leads, spend, and performance — and a dedicated Account Manager who walks you through the numbers every month." }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-background border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-base font-display font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 667,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 668,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 666,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 658,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 652,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 651,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 650,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Real Results From Our",
            titleHighlight: "Google Ads Campaigns",
            description: "Measurable outcomes from Google Ads management engagements across dental, med spa, roofing, and landscape services — in the Bay Area, Florida, and the Chicagoland region."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 680,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mt-12", children: caseStudyCards.map((card, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-2xl overflow-hidden flex flex-col animate-fade-up",
            style: { animationDelay: `${i * 0.08}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary px-6 py-4", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold text-primary-foreground/90 uppercase tracking-wider mb-1", children: [
                  "Campaign Results — ",
                  card.badge
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 694,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground", children: card.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 697,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs italic text-primary-foreground/80 mt-1", children: card.timeframe }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 698,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 693,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex-1 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider mb-2", style: { color: "hsl(180 60% 50%)" }, children: "Challenge" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 702,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground leading-relaxed", children: card.challenge }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 705,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 701,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider mb-2", style: { color: "hsl(180 60% 50%)" }, children: "Strategy" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 708,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground leading-relaxed", children: card.strategy }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 711,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 707,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3 pt-2", children: card.metrics.map((m, mi) => /* @__PURE__ */ jsxDEV("div", { className: "bg-background rounded-lg p-3 text-center", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-display font-bold text-primary", children: m.value }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 716,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-1", children: m.label }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 717,
                    columnNumber: 27
                  }, void 0)
                ] }, mi, true, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 715,
                  columnNumber: 25
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 713,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: card.href,
                    className: "inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline mt-auto pt-2",
                    children: [
                      "Read Full Case Study ",
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                        lineNumber: 725,
                        columnNumber: 44
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 721,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                lineNumber: 700,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 687,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 685,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 679,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 678,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 677,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-background-alt", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            title: "Turning Google Ads Traffic",
            titleHighlight: "Into Revenue",
            description: "The best Google Ads campaign still fails if the leads it generates never convert. Paid traffic is only half the system — what happens after the click decides whether ad spend turns into revenue. Here is how we close that gap."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 739,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 mt-12", children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "bg-background border-2 border-primary/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,127,80,0.4)] hover:-translate-y-1 animate-fade-up",
              style: { animationDelay: "0s" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Repeat, { className: "w-6 h-6 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 751,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 750,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground", children: "Retargeting That Closes the Loop" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 753,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "Most clicks do not convert on the first visit. Retargeting keeps your business in front of the people who already showed intent — across Google's display network, YouTube, and social — so the lead you paid for the first time has a second, third, and fourth chance to come back and book." }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 756,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 746,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "bg-background border-2 border-primary/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,127,80,0.4)] hover:-translate-y-1 animate-fade-up",
              style: { animationDelay: "0.08s" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-6 h-6 text-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 768,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 767,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-6 h-6 text-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 771,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                    lineNumber: 770,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 766,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground", children: "Lead Nurture That Converts Inquiries Into Bookings" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 774,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "A lead is not a customer until they book. Automated email and SMS sequences move new prospects from inquiry to appointment with the right message at the right moment. For past customers who went quiet, reactivation campaigns pull them back without new ad spend." }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 777,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 762,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "bg-background border-2 border-primary/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,127,80,0.4)] hover:-translate-y-1 animate-fade-up",
              style: { animationDelay: "0.16s" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Zap, { className: "w-6 h-6 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 788,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 787,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground", children: "Instant Lead Response, 24/7" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 790,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "Most local service leads are lost in the first five minutes because no one picks up the phone. AI-powered call handling and conversational AI respond to every inquiry within seconds — day or night, weekends, holidays — so your Google Ads budget produces booked appointments instead of missed calls." }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
                  lineNumber: 793,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 783,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 744,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 738,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 737,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 736,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        PersonCTA,
        {
          title: "Ready to Turn Google Searches Into Paying Customers?",
          description: "Every day you are not running optimized Google Ads, your competitors are collecting the leads you should be getting. Let us change that. Book your free Google Ads strategy session with GrowSmallBiz. We will audit your current situation, identify your biggest opportunities, and show you exactly what a local PPC campaign would look like for your business — at no cost and no obligation.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategyUrl,
          sectionClassName: "py-24"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 803,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          faqs,
          title: "Frequently Asked Questions About Google Ads for Small Businesses",
          subtitle: "Common questions about our Google Ads management services",
          schemaId: "https://growsmallbiz.io/services/paid-advertising/google-ads/#faqpage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have more questions about Google Ads?",
            description: "We're here to help you build a Google Ads campaign that actually works.",
            tagline: "Let's turn your ad spend into qualified leads."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 812,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent", children: "Your Local Competitors Are Already Running Google Ads. Are You?" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 829,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "Do not let them win the top spot on every search in your market. GrowSmallBiz builds and manages Google Ads campaigns that put local service businesses front and center — exactly when customers are ready to hire." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 832,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: "No contracts. No fluff. Just leads." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 835,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Get Started Today",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 840,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 838,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 837,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
              lineNumber: 845,
              columnNumber: 19
            }, void 0),
            "+1 (925) 886-3724"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 844,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
            lineNumber: 843,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
          lineNumber: 836,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 828,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 827,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 826,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, { utmCampaign: "consultation-form", utmMedium: pageMedium, headingOverride: "Claim Your Free Google Ads Consultation for Local Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
        lineNumber: 854,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
      lineNumber: 338,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
      lineNumber: 856,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/GoogleAds.tsx",
    lineNumber: 245,
    columnNumber: 5
  }, void 0);
};
export {
  GoogleAds as default
};
