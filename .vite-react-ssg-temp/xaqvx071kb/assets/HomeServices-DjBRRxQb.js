import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { Link } from "react-router-dom";
import { Wrench, ArrowRight, CheckCircle2, TrendingUp, Flame, Droplets, Plug, Home, Paintbrush, TreePine, Leaf, Sun, CloudSun, Snowflake, SprayCan } from "lucide-react";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { B as BlogSection, h as hvacBlogPosts } from "./BlogSection-2z1DP-xZ.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import "react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const homeServicesHeroImage = "/assets/industry-hvac-hero-C48KlvYj.webp";
const trades = [
  { icon: Flame, name: "HVAC", link: "/home-service-contractors/marketing-for-hvac-contractors/" },
  { icon: Droplets, name: "Plumbing" },
  { icon: Plug, name: "Electrical" },
  { icon: Home, name: "Roofing" },
  { icon: Paintbrush, name: "Remodeling" },
  { icon: TreePine, name: "Tree, Lawn & Landscaping", link: "/home-service-contractors/tree-lawn-landscaping-marketing/" },
  { icon: Paintbrush, name: "Painting" }
];
const services = [
  {
    number: "1",
    title: "Local SEO & Google Map Pack",
    description: "Get in front of homeowners searching 'HVAC company near me' or 'emergency plumber [city].' We build your local authority through citation consistency, review velocity, and on-page optimization — so you rank in the Map Pack where 70% of clicks happen.",
    features: ["Google Business Profile optimization and posting", "Service-area landing pages for every city you serve", "Local citation building and consistency audit", "Multi-location and multi-service GBP management"]
  },
  {
    number: "2",
    title: "Google Ads & Local Services Ads (LSA)",
    description: "Stop overpaying for clicks on keywords your competitors have bid up. We build tightly structured campaigns by service type and zip code, with negative keyword management and conversion tracking so every dollar is accountable. LSAs carry Google's Guarantee badge and charge per lead — not per click.",
    features: ["Campaign structure by trade and service type", "Zip-code-level bid management", "Google Local Services Ads setup and badge management", "Full conversion tracking to booked calls"]
  },
  {
    number: "3",
    title: "Website Design & Conversion Optimization",
    description: "Your website is your 24/7 sales rep. We build fast, mobile-first contractor websites designed to convert — click-to-call above the fold, service-area pages, trust signals, and quote forms that turn visitors into calls.",
    features: ["Mobile-first, fast-loading design", "Click-to-call and quote form above the fold", "Trust signals: licenses, reviews, guarantees, badges", "Service-area page architecture for local SEO"]
  },
  {
    number: "4",
    title: "Reputation Management",
    description: "Online reviews are your word-of-mouth. We automate review requests after every completed job and monitor your reputation across Google, Yelp, and Nextdoor — so your 4.8-star rating does the selling for you.",
    features: ["Automated post-job review request sequences", "Review monitoring across Google, Yelp, Nextdoor", "Response templates and escalation protocols", "Review velocity strategy for Map Pack ranking"]
  },
  {
    number: "5",
    title: "AI Receptionist & Lead Capture",
    description: "Never lose a lead because no one answered the phone. Our AI Receptionist handles after-hours inquiries, qualifies leads, and books appointments directly into your calendar — so you capture jobs even while you're on a job.",
    features: ["24/7 inbound call and web chat handling", "Lead qualification by service type, location, and urgency", "Direct calendar booking with homeowner confirmation", "SMS and email follow-up sequences"]
  },
  {
    number: "6",
    title: "Answer Engine Optimization (AEO)",
    description: "When homeowners ask Siri, ChatGPT, or Google AI 'who's the best HVAC company in [city]?', we position your business as the answer. AEO is the next frontier of local search — early movers capture the most territory.",
    features: ["FAQ schema markup and structured data", "Conversational content targeting voice queries", "Featured snippet and AI overview optimization", "Brand mention building across authoritative sources"]
  },
  {
    number: "7",
    title: "Social Media Management",
    description: "Before/after project photos. Seasonal promotions. Community presence. We manage your social channels so you stay top-of-mind with past customers — your best source of repeat and referral business.",
    features: ["Before/after project content and photography direction", "Seasonal promotion campaigns", "Community engagement and local hashtag strategy", "Paid social for retargeting and lookalike audiences"]
  },
  {
    number: "8",
    title: "CRM & Lead Nurturing Automation",
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
    trade: "Tree Care, Lawn Care & Landscaping",
    description: "Seasonal campaign structure across spring cleanup, summer maintenance, fall leaf removal, and winter storm prep. Local Map Pack visibility for 'tree service near me' and 'lawn care [city].'",
    ctaText: "Tree Care & Landscaping Marketing",
    link: "#",
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
    link: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/"
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
    link: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/"
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
    link: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/"
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
    link: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/"
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
    link: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/"
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
    link: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/"
  }
];
const HomeServices = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Home Service Contractor Marketing Agency | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz builds digital marketing systems for home service contractors — local SEO, Google Ads, AI automation, and reputation management. More booked jobs. Lower cost per lead. Serving contractors across the United States." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Home Service Contractor Marketing Agency",
        serviceType: "Digital Marketing for Home Services",
        description: "Local SEO, Google Ads, AI lead capture, and CRM automation for HVAC, plumbing, electrical, roofing, and home service contractors.",
        url: "/home-service-contractors/",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: homeServicesHeroImage, alt: "Home service contractor at work", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/85" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up", children: [
          /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4" }),
          "Home Service Contractor Marketing"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100", children: [
          "Stop Renting Leads. Start ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Owning Your Pipeline" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto", children: "Replace expensive HomeAdvisor and Angi leads with your own lead generation engine. Local SEO, Google Ads, AI automation, and reputation management built for home service contractors." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground/70 mb-8 animate-fade-up delay-200", children: "Serving home service contractors across the United States — with deep expertise in the Bay Area, California, and Western markets." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200", children: trades.map((trade, index) => {
          const pill = /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground ${trade.link ? "hover:border-primary/40 hover:text-foreground transition-colors cursor-pointer" : ""}`, children: [
            /* @__PURE__ */ jsx(trade.icon, { className: "w-4 h-4 text-primary" }),
            trade.name
          ] }, index);
          return trade.link ? /* @__PURE__ */ jsx(Link, { to: trade.link, children: pill }, index) : pill;
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300", children: [
          /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
            "Schedule Strategy Call",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", children: "Learn About Local SEO" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary mt-4 animate-fade-up delay-300", children: "No commitment. No pressure. Just a clear path forward for your business." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Sound Familiar?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "These are the challenges we hear from home service contractors every day." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-4", children: painPoints.map((point, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-destructive text-sm font-bold", children: "✗" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground", children: point })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-display font-semibold text-primary mb-4", children: "Let's change that." }),
        /* @__PURE__ */ jsx(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsx("a", { href: strategySessionUrl, children: "Get Your Growth Strategy" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: "What Is a Home Services Marketing Agency?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "A home services marketing agency specializes in digital lead generation for contractors, tradespeople, and residential service companies. Unlike general marketing firms, a home services marketing agency understands the full booking cycle — from local search intent and Google Local Services Ads to reputation management and CRM follow-up. The goal isn't traffic. It's more booked jobs at a lower cost-per-acquisition." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Home service marketing requires a specialist because the buying cycle is different from retail or B2B. A homeowner with a broken AC or a burst pipe doesn't browse and compare — they search, scan the top 3 results, and call. That 90-second window is where your marketing either works or doesn't. GrowSmallBiz builds complete lead generation systems for home service contractors — combining local SEO, paid ads, AI automation, and reputation management into one integrated engine that fills your schedule with the right jobs at the right margins." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "The Seasonal Marketing Playbook for Home Service Contractors" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Most contractors run the same marketing year-round. The ones who dominate adjust their budget, messaging, and channels to match when homeowners actually need their services. Here's how the calendar works." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: seasonalCards.map((card) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "h-1.5", style: { backgroundColor: card.accentColor } }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx(card.icon, { className: "w-6 h-6", style: { color: card.accentColor } }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-display font-bold text-foreground", children: [
                card.season,
                " ",
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-normal text-muted-foreground", children: [
                  "(",
                  card.months,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", style: { color: card.accentColor }, children: card.hook })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: card.description })
        ] })
      ] }, card.season)) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mt-10 border-l-4 border-accent/50 bg-card/50 rounded-r-xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground italic", children: `"We used to go dark on ads every January. GrowSmallBiz showed us that's exactly when our competitors back off — and when emergency heating calls are worth the most per job."` }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground/70 mt-2", children: "— [Client Name, HVAC Owner] — PLACEHOLDER, replace before launch" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Our Home Service Marketing Solutions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to own your leads — not rent them. We deploy the channels that drive calls, form fills, and booked appointments, not vanity metrics." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: services.map((service) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 card-hover", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-accent", children: [
            service.number,
            "."
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-semibold text-foreground", children: service.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: service.description }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: service.features.map((feature, fIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: feature })
        ] }, fIndex)) })
      ] }, service.number)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", style: { backgroundColor: "hsl(var(--card))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Specialized Digital Marketing for Every Trade" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Home service marketing isn't one-size-fits-all. We've built trade-specific strategies that match how your customers search, compare, and hire." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto", children: spokeCards.map((card) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx(card.icon, { className: "w-6 h-6 text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground", children: card.trade })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-4 leading-relaxed", children: card.description }),
        card.link !== "#" ? /* @__PURE__ */ jsxs(Link, { to: card.link, className: "text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline", children: [
          "→ ",
          card.ctaText
        ] }) : /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground/50 font-semibold text-sm inline-flex items-center gap-1", children: [
          "→ ",
          card.ctaText,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: "(Coming Soon)" })
        ] })
      ] }, card.trade)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Real Results for Real Contractors" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Average results from our home service clients." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: results.map((result, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: result.metric }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: result.label })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-[hsl(213,60%,15%)]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-white mb-6", children: "Never Lose a Lead Because No One Answered" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-4 leading-relaxed", children: "Home service contractors lose more jobs to missed calls than to price competition. A homeowner with a burst pipe or a broken AC at 10 PM calls two contractors. The first one to answer gets the job." }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-8 leading-relaxed", children: "Our AI Receptionist handles every inbound call, web chat, and form fill — 24 hours a day, 7 days a week. It qualifies the lead, books the appointment directly into your calendar, and sends the homeowner an immediate confirmation text. By the time you start your morning, the job is already on the schedule." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-white mb-4", children: "What the AI Receptionist Handles" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: aiReceptionistBullets.map((bullet, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/80", children: bullet })
        ] }, index)) }),
        /* @__PURE__ */ jsx(Button, { className: "bg-accent hover:bg-accent/90 text-white", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/services/marketing-automation-for-small-business/", children: [
          "Learn About AI Receptionist",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-accent/90 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white italic text-lg leading-relaxed mb-4", children: '"They set up the AI Receptionist for our plumbing company and we booked 3 jobs the first weekend from after-hours calls we were missing. That alone paid for six months of service."' }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 font-semibold text-sm", children: "— [Client Name, Plumbing Company Owner, East Bay]" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-xs mt-1", children: "PLACEHOLDER: Replace with verified client name before launch" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: "Why Home Service Contractors Choose GrowSmallBiz" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "We don't work with e-commerce brands, SaaS companies, or enterprise clients. Every client we serve is a local service business — which means our keyword strategies, ad structures, landing page architecture, and automation workflows are all built for how contractors actually get jobs. Not adapted. Built." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "We're local where it matters. Our team is based in Danville, California, in the heart of the Bay Area. We understand the California contractor market — the density, the competition, the seasonal patterns, and the licensing signals that affect local search rankings. We also run campaigns for contractors across the United States in every major metro." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "We're accountable to booked jobs, not impressions. Every campaign ties back to phone calls, form fills, and scheduled appointments. You'll see exactly what your marketing investment is generating — in plain language, not agency-speak about reach, engagement, or brand lift." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We run the whole system. Local SEO, Google Ads, AI Receptionist, reputation management, and CRM — fully integrated into one lead engine. No juggling four vendors who don't talk to each other. No gaps between your ad spend and your lead follow-up." })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Home Service Success Stories" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "See how we've helped contractors build predictable lead pipelines" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16", children: results.map((result, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: result.metric }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: result.label })
        ] }, index)) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center", children: "Local SEO Campaign Results" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: seoCampaignResults.map((campaign, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: campaign.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70", children: campaign.subtitle })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-6 flex-1", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: campaign.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground font-medium", children: metric })
              ] }, mIndex)) }) }),
              /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: campaign.link,
                  className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                  children: [
                    "View Case Studies",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ) })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 mt-16 text-center", children: "Google Ads Campaign Results" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: ppcCampaignResults.map((campaign, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: campaign.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70", children: campaign.subtitle })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-6 flex-1", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: campaign.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground font-medium", children: metric })
              ] }, mIndex)) }) }),
              /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: campaign.link,
                  className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                  children: [
                    "View Case Studies",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ) })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
          "Get Results Like These",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
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
      }
    ),
    /* @__PURE__ */ jsx(
      BlogSection,
      {
        posts: hvacBlogPosts,
        title: "Home Service Marketing Insights",
        subtitle: "Tips and strategies to grow your contracting business"
      }
    ),
    /* @__PURE__ */ jsx(
      CardCTA,
      {
        title: "Ready to Own Your Lead Pipeline?",
        description: "Get a free strategy session and discover how to replace expensive third-party leads with your own lead generation engine."
      }
    ),
    /* @__PURE__ */ jsx(ConsultationFormSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HomeServices as default
};
