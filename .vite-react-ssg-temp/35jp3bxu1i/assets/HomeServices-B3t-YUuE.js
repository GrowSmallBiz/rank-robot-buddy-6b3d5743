import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { Wrench, ArrowRight, CheckCircle2, TrendingUp, Flame, Droplets, Plug, Home, Paintbrush, TreePine, Layers, Leaf, Sun, CloudSun, Snowflake, SprayCan } from "lucide-react";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { B as BlogSection, h as hvacBlogPosts } from "./BlogSection-Dl_FpRtJ.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { C as CardCTA } from "./CardCTA-DT9NPaz7.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const homeServicesHeroImage = "/assets/industry-hvac-hero-C48KlvYj.webp";
const trades = [
  { icon: Flame, name: "HVAC", link: "/home-service-contractors/marketing-for-hvac-contractors/" },
  { icon: Droplets, name: "Plumbing" },
  { icon: Plug, name: "Electrical" },
  { icon: Home, name: "Roofing" },
  { icon: Paintbrush, name: "Remodeling" },
  { icon: TreePine, name: "Tree Removal Service and Landscaping Remodeling", link: "/home-service-contractors/tree-lawn-landscaping-marketing/" },
  { icon: Layers, name: "Landscape Construction & Hardscaping", link: "/home-service-contractors/landscape-construction-hardscaping-marketing/" },
  { icon: Paintbrush, name: "Painting" }
];
const services = [
  {
    number: "1",
    title: "Local SEO & Google Map Pack",
    url: "/services/seo-agency/local-seo/",
    description: "Get in front of homeowners searching 'HVAC company near me' or 'emergency plumber [city].' We build your local authority through citation consistency, review velocity, and on-page optimization — so you rank in the Map Pack where 70% of clicks happen.",
    features: ["Google Business Profile optimization and posting", "Service-area landing pages for every city you serve", "Local citation building and consistency audit", "Multi-location and multi-service GBP management"]
  },
  {
    number: "2",
    title: "AI Search Visibility",
    url: "/services/seo-agency/ai-search-optimization/",
    description: "Search is shifting from a list of links to a decision engine. We optimize your business to be cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews — so when homeowners ask AI for the best contractor near them, your business is the one it recommends.",
    features: ["AI Search Optimization across ChatGPT, Gemini, Perplexity, and Google AI Overviews", 'Answer Engine Optimization (AEO) for conversational "best near me" queries', "Structured data and entity optimization so AI engines cite your business", "Brand mention and authority building across the sources AI trusts"]
  },
  {
    number: "3",
    title: "Google Ads & Local Services Ads (LSA)",
    url: "/services/paid-advertising/google-ads/",
    description: "Stop overpaying for clicks on keywords your competitors have bid up. We build tightly structured campaigns by service type and zip code, with negative keyword management and conversion tracking so every dollar is accountable. LSAs carry Google's Guarantee badge and charge per lead — not per click.",
    features: ["Campaign structure by trade and service type", "Zip-code-level bid management", "Google Local Services Ads setup and badge management", "Full conversion tracking to booked calls"]
  },
  {
    number: "4",
    title: "Website Design & Conversion Optimization",
    url: "/services/website-design/",
    description: "Your website is your 24/7 sales rep. We build fast, mobile-first contractor websites designed to convert — click-to-call above the fold, service-area pages, trust signals, and quote forms that turn visitors into calls.",
    features: ["Mobile-first, fast-loading design", "Click-to-call and quote form above the fold", "Trust signals: licenses, reviews, guarantees, badges", "Service-area page architecture for local SEO"]
  },
  {
    number: "5",
    title: "Reputation Management",
    url: "/services/marketing-automation-for-small-business/reviews/",
    description: "Online reviews are your word-of-mouth. We automate review requests after every completed job and monitor your reputation across Google, Yelp, and Nextdoor — so your 4.8-star rating does the selling for you.",
    features: ["Automated post-job review request sequences", "Review monitoring across Google, Yelp, Nextdoor", "Response templates and escalation protocols", "Review velocity strategy for Map Pack ranking"]
  },
  {
    number: "6",
    title: "AI Receptionist & Lead Capture",
    url: "/services/ai-receptionist/",
    description: "Never lose a lead because no one answered the phone. Our AI Receptionist handles after-hours inquiries, qualifies leads, and books appointments directly into your calendar — so you capture jobs even while you're on a job.",
    features: ["24/7 inbound call and web chat handling", "Lead qualification by service type, location, and urgency", "Direct calendar booking with homeowner confirmation", "SMS and email follow-up sequences"]
  },
  {
    number: "7",
    title: "Answer Engine Optimization (AEO)",
    url: "/services/seo-agency/aeo/",
    description: "When homeowners ask Siri, ChatGPT, or Google AI 'who's the best HVAC company in [city]?', we position your business as the answer. AEO is the next frontier of local search — early movers capture the most territory.",
    features: ["FAQ schema markup and structured data", "Conversational content targeting voice queries", "Featured snippet and AI overview optimization", "Brand mention building across authoritative sources"]
  },
  {
    number: "8",
    title: "Social Media Management",
    url: "/services/marketing-automation-for-small-business/reviews/",
    description: "Before/after project photos. Seasonal promotions. Community presence. We manage your social channels so you stay top-of-mind with past customers — your best source of repeat and referral business.",
    features: ["Before/after project content and photography direction", "Seasonal promotion campaigns", "Community engagement and local hashtag strategy", "Paid social for retargeting and lookalike audiences"]
  },
  {
    number: "9",
    title: "CRM & Lead Nurturing Automation",
    url: "/services/marketing-automation-for-small-business/",
    description: "Most contractors lose jobs not because of price — but because they followed up too late. Our CRM automation sends immediate responses, follow-up sequences, and re-engagement campaigns so no lead goes cold.",
    features: ["Immediate lead response automation (under 5 minutes)", "Multi-touch follow-up sequences via SMS, email, and call", "Past customer re-engagement campaigns", "Pipeline reporting: where every lead is in the booking cycle"]
  }
];
const seasonalCards = [
  {
    season: "Spring",
    months: "March–May",
    hook: "AC Tune-Up Season",
    description: "Focus on preventive maintenance campaigns targeting homeowners searching 'AC tune-up near me' before summer heat arrives. Run Google Ads at 60–70% of peak budget — this is the lowest cost-per-lead window of the year.",
    accentColor: "#16A34A",
    icon: Leaf
  },
  {
    season: "Summer",
    months: "June–August",
    hook: "Emergency Cooling Demand",
    description: "Ramp Google Ads to full budget. Emergency keywords convert at 3–5× the rate of informational keywords. Ensure 24/7 call coverage — an AI Receptionist that captures a 10 PM emergency call pays for months of service in one job. If you're not in the Map Pack top 3 when temperatures spike, you're handing calls to competitors.",
    accentColor: "#EA580C",
    icon: Sun
  },
  {
    season: "Fall",
    months: "September–November",
    hook: "Heating System Prep",
    description: "Shift messaging to heating maintenance and furnace inspections. Homeowners who schedule a fall tune-up become loyal repeat customers. Retargeting past customers drives the highest close rates of the year during this window.",
    accentColor: "#D97706",
    icon: CloudSun
  },
  {
    season: "Winter",
    months: "December–February",
    hook: "Emergency Heating and Pipe Calls",
    description: "Emergency heating repair and frozen pipe calls spike during cold snaps. These are your highest-ticket, fastest-close jobs. Response speed wins: contractors who respond within 5 minutes close 80% more leads than those who call back in an hour.",
    accentColor: "#2563EB",
    icon: Snowflake
  }
];
const spokeCards = [
  {
    trade: "HVAC Contractors",
    description: "High-season domination strategy. Seasonal Google Ads ramp-ups timed to weather patterns, Map Pack authority for emergency cooling and heating calls, and Google LSA badge management to own the top position year-round.",
    ctaText: "HVAC Contractor Marketing",
    link: "/home-service-contractors/marketing-for-hvac-contractors/",
    icon: Flame
  },
  {
    trade: "Plumbing Companies",
    description: "Emergency-first, relationship-second approach. Dual campaigns for emergency calls (burst pipe, backed-up drain) and planned jobs (water heater replacement, remodel) — both require different messaging and different bid strategies.",
    ctaText: "Plumbing Company Marketing",
    link: "#",
    icon: Droplets
  },
  {
    trade: "Electrical Contractors",
    description: "Trust and compliance-led strategy. Homeowners want licensed, bonded, and reviewed electricians — and Google factors that into local rankings. For commercial expansion, we build B2B targeting that reaches property managers directly.",
    ctaText: "Electrical Contractor Marketing",
    link: "#",
    icon: Plug
  },
  {
    trade: "Roofing Companies",
    description: "Storm-response and project-volume strategy. Capture storm-damage leads immediately after weather events, build organic authority for planned projects, and maximize close rate with before/after photo campaigns.",
    ctaText: "Roofing Company Marketing",
    link: "#",
    icon: Home
  },
  {
    trade: "Tree Removal Service and Landscaping Remodeling",
    description: "High-ticket campaign structure for emergency tree removal, storm damage, and landscape remodeling projects. Local Map Pack visibility for 'tree service near me' and 'landscape remodeling [city].'",
    ctaText: "Tree Service & Landscape Remodeling Marketing",
    link: "/home-service-contractors/tree-lawn-landscaping-marketing/",
    icon: TreePine
  },
  {
    trade: "Home Remodeling",
    description: "Longer-cycle strategy for kitchen, bathroom, and whole-home remodeling. Leads take 3–6 months to close. We build retargeting campaigns and nurture sequences that keep your business top-of-mind through the full decision window.",
    ctaText: "Home Remodeling Marketing",
    link: "#",
    icon: Paintbrush
  },
  {
    trade: "Cleaning Services",
    description: "Recurring revenue model. A new cleaning client is worth $2,400–$4,800/year in recurring bookings. We build campaigns that attract quality homeowners and CRM sequences that convert first-time bookings into monthly recurring accounts.",
    ctaText: "Cleaning Services Marketing",
    link: "#",
    icon: SprayCan
  }
];
const painPoints = [
  "Losing jobs to competitors who rank higher on Google",
  "Paying too much for leads from HomeAdvisor, Angi, or Thumbtack",
  "Emergency calls going to competitors because they show up first",
  "No system to follow up with leads — they call someone else",
  "Wasting money on ads without tracking which ones actually work"
];
const results = [
  { metric: "312%", label: "Average organic traffic increase" },
  { metric: "47", label: "New reviews per month avg" },
  { metric: "$23", label: "Average cost per lead" },
  { metric: "4.2x", label: "Average ROAS" }
];
const aiReceptionistBullets = [
  "After-hours and weekend emergency calls",
  "Web chat and SMS lead capture",
  "Lead qualification by service type, location, and urgency",
  "Appointment scheduling directly into your calendar",
  "Immediate confirmation texts to the homeowner",
  "Follow-up sequences for leads that don't book on first contact"
];
const faqs = [
  {
    question: "How long does it take to see results from contractor digital marketing?",
    answer: "Google Ads and Local Services Ads typically produce booked calls within 2–4 weeks of launch. Local SEO and Map Pack rankings build over 3–6 months as your domain authority, citation consistency, and review count accumulate. Most clients see measurable improvement in lead quality and cost-per-lead within the first 60 days — even before organic rankings fully develop."
  },
  {
    question: "What is the best marketing strategy for HVAC companies?",
    answer: "HVAC marketing performs best when it layers three channels: Google Local Services Ads for immediate lead volume, seasonal Google Ads campaigns timed to weather patterns, and local SEO for long-term Map Pack authority. Review velocity — maintaining a 4.7+ rating with consistent new reviews — is the single most underrated ranking factor in HVAC local search."
  },
  {
    question: "How do I stop relying on HomeAdvisor and Angi for leads?",
    answer: "The shift from lead aggregators to owned marketing follows a proven sequence: first, optimize your Google Business Profile and build review velocity (8–12 weeks); second, launch Google Local Services Ads targeting emergency and high-intent keywords (weeks 2–4); third, build service-area landing pages that rank organically (months 3–6). Most contractors reduce cost-per-lead by 50–70% within six months and eliminate aggregator dependence within 12 months."
  },
  {
    question: "Are Google Local Services Ads worth it for home service contractors?",
    answer: "Yes — LSAs are the highest-converting paid channel for most trades. They appear above standard Google Ads, carry Google's Guarantee badge which dramatically increases click trust, and charge per lead rather than per click. For HVAC, plumbing, and electrical, LSAs typically deliver a cost-per-lead 30–50% lower than standard Google Ads for the same service keywords."
  },
  {
    question: "Do you work with solo contractors or only larger companies?",
    answer: "We specialize in independent contractors and small service companies with 1–20 employees. Our entire model is built to deliver enterprise-quality marketing without the enterprise price tag. We don't take $50,000/month enterprise accounts — our focus is contractors who want a full lead generation system that's actually affordable."
  },
  {
    question: "Can you help contractors who serve multiple cities or counties?",
    answer: "Yes — multi-area SEO and service-area page strategy is core to what we do. We build individual service-area landing pages for each city you serve, manage your Google Business Profile for multi-area operations, and structure your ad campaigns geographically so budget is concentrated in your highest-margin service areas. We also run campaigns for contractors operating in multiple states."
  }
];
const seoCampaignResults = [
  {
    title: "HVAC & Plumbing Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+1,395.2% Phone Calls",
      "+520% GMB Website Actions",
      "Significant improvement for top service keywords",
      "Core plumbing + location map pack rankings"
    ],
    link: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/"
  },
  {
    title: "Roofing Restoration Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+26% Organic Conversions",
      "+76% GBP Searches",
      "+127% GBP Views",
      "90+ Spot Keyword Gains"
    ],
    link: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/"
  },
  {
    title: "Tree & Lawn SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+25.77% Clicks",
      "+138.54% Impressions",
      "1.1 Average Map Rank",
      "+770% Phone Number Clicks"
    ],
    link: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/"
  },
  {
    title: "Home Remodeling Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+366.67% Goal Completions",
      "+382.11% Website Clicks",
      "+375.10% Impressions",
      "+15% GBP Calls"
    ],
    link: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/"
  },
  {
    title: "Cleaning Service SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+261.20% Clicks",
      "+868.02% Impressions",
      "+114.8% GBP Calls",
      "+119.3% GBP Website Clicks"
    ],
    link: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/"
  }
];
const ppcCampaignResults = [
  {
    title: "HVAC Google PPC Growth",
    subtitle: "Google Ads Lead Generation Campaign",
    metrics: [
      "+50.23% CTR",
      "+83% Conversions",
      "+56.3% Conversion Rate",
      "-41% Cost Per Acquisition"
    ],
    link: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/"
  },
  {
    title: "Roofing Google PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+93.3% Conversions",
      "+123.4% Conversion Rate",
      "-48.9% Cost Per Conversion",
      "+17.7% Clicks"
    ],
    link: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/"
  },
  {
    title: "Tree & Lawn Google PPC Growth",
    subtitle: "Google Ads Lead Generation Campaign",
    metrics: [
      "+169.5% Clicks",
      "+211.5% Conversions",
      "+16.7% Conversion Rate",
      "299 Conversions — Last 90 Days"
    ],
    link: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/"
  }
];
const HomeServices = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "AI Powered Marketing for Home Service Contractors | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 358,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz: Digital marketing for home service contractors. Get more leads with local SEO and AI Optimized Google Ads. Serving the US." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 359,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "home service marketing, local SEO for contractors, Google Ads management, reputation management services, lead generation strategies, digital marketing for home services, AI automation in marketing, contractor marketing solutions" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 360,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 361,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI-Driven Growth for Local Service Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 362,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Home Service Contractor Marketing Agency",
        serviceType: "Digital Marketing for Home Services",
        description: "Local SEO, Google Ads, AI lead capture, and CRM automation for HVAC, plumbing, electrical, roofing, and home service contractors.",
        url: "/home-service-contractors/",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 364,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 374,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "pt-32 pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxDEV("img", { src: homeServicesHeroImage, alt: "Home service contractor at work", className: "w-full h-full object-cover" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 379,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/85" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 380,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 378,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 hero-glow" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 382,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 383,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 384,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV(Wrench, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 388,
            columnNumber: 15
          }, void 0),
          "Home Service Contractor Marketing"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 387,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100 bg-gradient-heading bg-clip-text text-transparent", children: "Stop Renting Leads. Start Owning Your Pipeline" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 391,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto", children: "Replace expensive HomeAdvisor and Angi leads with your own lead generation engine. Local SEO, Google Ads, AI automation, and reputation management built for home service contractors." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 394,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground/70 mb-8 animate-fade-up delay-200", children: "Serving home service contractors across the United States — with deep expertise in the Bay Area, California, and Western markets." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 397,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200", children: trades.map((trade, index) => {
          const pill = /* @__PURE__ */ jsxDEV("span", { className: `inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground ${trade.link ? "hover:border-primary/40 hover:text-foreground transition-colors cursor-pointer" : ""}`, children: [
            /* @__PURE__ */ jsxDEV(trade.icon, { className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 406,
              columnNumber: 21
            }, void 0),
            trade.name
          ] }, index, true, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 405,
            columnNumber: 19
          }, void 0);
          return trade.link ? /* @__PURE__ */ jsxDEV(Link, { to: trade.link, children: pill }, index, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 411,
            columnNumber: 19
          }, void 0) : pill;
        }) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 402,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300", children: [
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
            "Schedule Strategy Call",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 420,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 418,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 417,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/local-seo/", children: "Learn About Local SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 424,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 423,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 416,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary mt-4 animate-fade-up delay-300", children: "No commitment. No pressure. Just a clear path forward for your business." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 429,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 386,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 385,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 377,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "The Biggest Marketing Challenges for Home Service Contractors" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 438,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: "These are the challenges we hear from home service contractors every day." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 441,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 437,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto space-y-4", children: painPoints.map((point, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxDEV("span", { className: "text-destructive text-sm font-bold", children: "✗" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 447,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 446,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground", children: point }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 449,
          columnNumber: 17
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 445,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 443,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-display font-semibold text-primary mb-4", children: "Let's change that." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 454,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: "Get Your Growth Strategy" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 456,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 455,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 453,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 436,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 435,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What Is a Home Services Marketing Agency?" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 466,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "A home services marketing agency specializes in digital lead generation for contractors, tradespeople, and residential service companies. Unlike general marketing firms, a home services marketing agency understands the full booking cycle — from local search intent and Google Local Services Ads to reputation management and CRM follow-up. The goal isn't traffic. It's more booked jobs at a lower cost-per-acquisition." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 469,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "Home service marketing requires a specialist because the buying cycle is different from retail or B2B. A homeowner with a broken AC or a burst pipe doesn't browse and compare — they search, scan the top 3 results, and call. That 90-second window is where your marketing either works or doesn't. GrowSmallBiz builds complete lead generation systems for home service contractors — combining local SEO, paid ads, AI automation, and reputation management into one integrated engine that fills your schedule with the right jobs at the right margins." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 472,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 465,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 464,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 463,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "The Seasonal Marketing Playbook for Home Service Contractors" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 483,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: "Most contractors run the same marketing year-round. The ones who dominate adjust their budget, messaging, and channels to match when homeowners actually need their services. Here's how the calendar works." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 486,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 482,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: seasonalCards.map((card) => /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-1.5", style: { backgroundColor: card.accentColor } }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 493,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxDEV(card.icon, { className: "w-6 h-6", style: { color: card.accentColor } }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 496,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground", children: [
                card.season,
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-normal text-muted-foreground", children: [
                  "(",
                  card.months,
                  ")"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 498,
                  columnNumber: 100
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 498,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold", style: { color: card.accentColor }, children: card.hook }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 499,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 497,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 495,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed", children: card.description }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 502,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 494,
          columnNumber: 17
        }, void 0)
      ] }, card.season, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 492,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 490,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto mt-10 border-l-4 border-accent/50 bg-card/50 rounded-r-xl p-6", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground italic", children: `"We used to go dark on ads every January. GrowSmallBiz showed us that's exactly when our competitors back off — and when emergency heating calls are worth the most per job."` }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 508,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground/70 mt-2", children: "— [Client Name, HVAC Owner] — PLACEHOLDER, replace before launch" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 509,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 507,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 481,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 480,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Our Home Service Marketing Solutions" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 518,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to own your leads — not rent them. We deploy the channels that drive calls, form fills, and booked appointments, not vanity metrics." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 521,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 517,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8", children: services.map((service) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: service.url,
          className: "group block bg-card border border-border rounded-2xl p-8 card-hover hover:border-primary/40 transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 mb-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-bold text-accent", children: [
                service.number,
                "."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 531,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors", children: service.title }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 532,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 530,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6 text-sm", children: service.description }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 534,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: service.features.map((feature, fIndex) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 538,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-foreground text-sm", children: feature }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 539,
                columnNumber: 23
              }, void 0)
            ] }, fIndex, true, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 537,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 535,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-6 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all", children: [
              "Learn More ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 544,
                columnNumber: 30
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
              lineNumber: 543,
              columnNumber: 17
            }, void 0)
          ]
        },
        service.number,
        true,
        {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 525,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 523,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 516,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 515,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20", style: { backgroundColor: "hsl(var(--card))" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Specialized Digital Marketing for Every Trade" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 557,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Home service marketing isn't one-size-fits-all. We've built trade-specific strategies that match how your customers search, compare, and hire." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 560,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 556,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto", children: spokeCards.map((card) => /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxDEV(card.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 566,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground", children: card.trade }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 567,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 565,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm mb-4 leading-relaxed", children: card.description }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 569,
          columnNumber: 17
        }, void 0),
        card.link !== "#" ? /* @__PURE__ */ jsxDEV(Link, { to: card.link, className: "text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline", children: [
          "→ ",
          card.ctaText
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 571,
          columnNumber: 19
        }, void 0) : /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground/50 font-semibold text-sm inline-flex items-center gap-1", children: [
          "→ ",
          card.ctaText,
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs", children: "(Coming Soon)" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 576,
            columnNumber: 38
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 575,
          columnNumber: 19
        }, void 0)
      ] }, card.trade, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 564,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 562,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 555,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 554,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 587,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Real Results for Real Contractors" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 590,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Average results from our home service clients." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 593,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 589,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: results.map((result, index) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: result.metric }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 598,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: result.label }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 599,
            columnNumber: 17
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 597,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 595,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 588,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 586,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-[hsl(213,60%,15%)]", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-white mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Never Lose a Lead Because No One Answered" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 611,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 mb-4 leading-relaxed", children: "Home service contractors lose more jobs to missed calls than to price competition. A homeowner with a burst pipe or a broken AC at 10 PM calls two contractors. The first one to answer gets the job." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 614,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 mb-8 leading-relaxed", children: "Our AI Receptionist handles every inbound call, web chat, and form fill — 24 hours a day, 7 days a week. It qualifies the lead, books the appointment directly into your calendar, and sends the homeowner an immediate confirmation text. By the time you start your morning, the job is already on the schedule." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 617,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-white mb-4", children: "What the AI Receptionist Handles" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 620,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 mb-8", children: aiReceptionistBullets.map((bullet, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 624,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-white/80", children: bullet }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 625,
            columnNumber: 21
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 623,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 621,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { className: "bg-accent hover:bg-accent/90 text-white", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/marketing-automation-for-small-business/", children: [
          "Learn About AI Receptionist",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 632,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 630,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 629,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 610,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 flex items-center", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-accent/90 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-white italic text-lg leading-relaxed mb-4", children: '"They set up the AI Receptionist for our plumbing company and we booked 3 jobs the first weekend from after-hours calls we were missing. That alone paid for six months of service."' }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 638,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 font-semibold text-sm", children: "— [Client Name, Plumbing Company Owner, East Bay]" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 641,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/60 text-xs mt-1", children: "PLACEHOLDER: Replace with verified client name before launch" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 644,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 637,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 636,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 609,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 608,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 607,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "Why Home Service Contractors Choose GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 655,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "We don't work with e-commerce brands, SaaS companies, or enterprise clients. Every client we serve is a local service business — which means our keyword strategies, ad structures, landing page architecture, and automation workflows are all built for how contractors actually get jobs. Not adapted. Built." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 658,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "We're local where it matters. Our team is based in Danville, California, in the heart of the Bay Area. We understand the California contractor market — the density, the competition, the seasonal patterns, and the licensing signals that affect local search rankings. We also run campaigns for contractors across the United States in every major metro." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 661,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "We're accountable to booked jobs, not impressions. Every campaign ties back to phone calls, form fills, and scheduled appointments. You'll see exactly what your marketing investment is generating — in plain language, not agency-speak about reach, engagement, or brand lift." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 664,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "We run the whole system. Local SEO, Google Ads, AI Receptionist, reputation management, and CRM — fully integrated into one lead engine. No juggling four vendors who don't talk to each other. No gaps between your ad spend and your lead follow-up." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 667,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 654,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 653,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 652,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 676,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Home Service Success Stories" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 679,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "See how we've helped contractors build predictable lead pipelines" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 682,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 678,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16", children: results.map((result, index) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: result.metric }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 691,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: result.label }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 692,
            columnNumber: 17
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 690,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 688,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center", children: "Local SEO Campaign Results" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 698,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: seoCampaignResults.map((campaign, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-6", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 708,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: campaign.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 711,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary-foreground/70", children: campaign.subtitle }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 714,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 707,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: campaign.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 722,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground font-medium", children: metric }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 723,
                  columnNumber: 25
                }, void 0)
              ] }, mIndex, true, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 721,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 719,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 718,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: campaign.link,
                  className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                  children: [
                    "View Case Studies",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                      lineNumber: 734,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 729,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 728,
                columnNumber: 17
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 703,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 701,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 mt-16 text-center", children: "Google Ads Campaign Results" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 742,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: ppcCampaignResults.map((campaign, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-6", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 752,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: campaign.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 755,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary-foreground/70", children: campaign.subtitle }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 758,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 751,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: campaign.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 766,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground font-medium", children: metric }, void 0, false, {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 767,
                  columnNumber: 25
                }, void 0)
              ] }, mIndex, true, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 765,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 763,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 762,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: campaign.link,
                  className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                  children: [
                    "View Case Studies",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                      lineNumber: 778,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                  lineNumber: 773,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
                lineNumber: 772,
                columnNumber: 17
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 747,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 745,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
          "Get Results Like These",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
            lineNumber: 789,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 787,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 786,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
          lineNumber: 785,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 677,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 675,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      FAQSection,
      {
        faqs,
        title: "Home Service Marketing FAQs",
        subtitle: "Common questions from home service contractors",
        schemaType: "FAQPage",
        contactCTA: {
          ...baseContactCTA,
          title: "Have more questions about Home Service Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your home service business together."
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 796,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      BlogSection,
      {
        posts: hvacBlogPosts,
        title: "Home Service Marketing Insights",
        subtitle: "Tips and strategies to grow your contracting business"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 809,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      CardCTA,
      {
        title: "Ready to Own Your Lead Pipeline?",
        description: "Get a free strategy session and discover how to replace expensive third-party leads with your own lead generation engine."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
        lineNumber: 815,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 820,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
      lineNumber: 821,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/industries/HomeServices.tsx",
    lineNumber: 356,
    columnNumber: 5
  }, void 0);
};
export {
  HomeServices as default
};
