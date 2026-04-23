import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { P as PersonCTA } from "./PersonCTA-CEFUSvtj.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { u as useUtm, C as CTA_URLS } from "./use-utm-CiJKCMCk.js";
import { Target, ArrowRight, Phone, LayoutTemplate, Zap, BarChart3, Clock, MessageSquare, Megaphone, MousePointerClick, AlertTriangle, MapPin, TrendingUp, Link2, RefreshCw, Award, PenTool, Eye, HardHat, Stethoscope, Camera, RotateCw, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { S as SectionHeader } from "./SectionHeader-m0RetmVk.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-C_ATU6ud.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const faqs = [
  {
    question: "How much should I budget for paid ads?",
    answer: "Most local service businesses see strong results starting at $1,500–$3,000/month in ad spend. Your ideal budget depends on your market, competition, average job value, and growth goals. We help you determine the right starting point during your strategy call and scale from there based on performance data."
  },
  {
    question: "How long before I see results?",
    answer: "Paid ads can generate leads within days of launch. However, campaigns improve significantly over the first 30–60 days as we gather conversion data, refine targeting, and optimize bids. Most clients see their strongest performance after 60–90 days of continuous optimization."
  },
  {
    question: "Do I need a new landing page?",
    answer: "Not always, but often yes. If your current website isn't built for conversion — clear offer, single call-to-action, fast load time, mobile-friendly — we'll recommend a focused landing page. Better post-click experience is one of the fastest ways to improve campaign ROI."
  },
  {
    question: "Can you take over campaigns I'm already running?",
    answer: "Absolutely. We regularly audit and take over existing Google Ads and Meta accounts. We'll review your current setup, identify what's working and what's not, and restructure campaigns for better performance without losing historical data."
  },
  {
    question: "What platforms do you manage?",
    answer: "We manage Google Ads (Search, Display, Performance Max), Google Local Service Ads, Meta Ads (Facebook and Instagram), and retargeting campaigns. We choose the right mix based on your industry, audience, and goals — not a one-size-fits-all template."
  },
  {
    question: "Do you handle ad creative?",
    answer: "Yes. We handle ad copywriting, headline testing, offer development, and creative direction. For Meta campaigns, we also guide or produce image and video creative tailored to local service audiences."
  },
  {
    question: "How is reporting structured?",
    answer: "You receive clear, plain-English reports focused on what matters: leads generated, cost per lead, conversion rates, and campaign recommendations. No vanity metrics. We also provide real-time dashboard access so you can check performance anytime."
  },
  {
    question: "Can I run ads if my reviews are not strong yet?",
    answer: "Yes, but reviews matter — especially for Local Service Ads and local trust signals. We can help you build a review generation strategy alongside your campaigns so your reputation supports your ad visibility."
  },
  {
    question: "How do you reduce junk leads and unqualified inquiries?",
    answer: "We use negative keyword lists, geographic targeting, qualifying ad copy, audience exclusions, and landing page clarity to filter out low-quality traffic before it becomes a lead. Ongoing optimization continuously reduces waste as we learn what converts for your business."
  },
  {
    question: "Is paid advertising the right fit for my business?",
    answer: "Paid ads work best for local service businesses with meaningful customer value — HVAC, roofing, legal, dental, med spa, and similar industries. If you have strong unit economics and want predictable lead flow with clear tracking, paid advertising is likely a strong fit. We'll help you evaluate during a strategy call."
  },
  {
    question: "What's the difference between pay-per-click and pay-per-lead?",
    answer: "Pay-per-click means you pay when someone clicks your ad. This usually gives you more control over keywords, landing pages, messaging, and conversion tracking. Pay-per-lead means you pay when a lead comes through, which is commonly associated with Local Service Ads. The right model depends on your business category, service area, lead quality, and how well your campaigns are being tracked and managed."
  },
  {
    question: "Which ad platform is usually the best fit for my business?",
    answer: "It depends on how your customers search and how quickly they are ready to act. Google Search Ads are usually best for high-intent demand. Local Service Ads can work well for eligible service categories that want direct calls and leads. Meta Ads are useful for awareness, offer promotion, and retargeting. In many cases, the strongest results come from using the right combination rather than relying on one platform alone."
  },
  // Prompt 8 — three new FAQs
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in five verticals for local service businesses: home service contractors (HVAC, plumbing, electrical, roofing, painting, landscaping, cleaning, remodeling), health and wellness practices (med spas, dental, chiropractic, allied health), real estate brokers and agents, restaurants, and photographers. We do not take clients outside these verticals – specialization is how we deliver below-average cost per lead."
  },
  {
    question: "Do you work with businesses outside the San Francisco Bay Area?",
    answer: "Yes. We serve local service businesses nationally across all five verticals. Our Bay Area roots mean we know small-market local advertising economics especially well, and that expertise transfers directly to similar markets anywhere in the United States."
  },
  {
    question: "How do I know if paid advertising is a fit for my business?",
    answer: "Paid ads are a strong fit for local service businesses with meaningful customer value per job and a clear need for qualified, trackable leads. Specifically, paid ads work well when you want more qualified calls and booked appointments, you have tried ads before but lacked clear ROI visibility, you need better tracking and follow-up, and you want campaigns managed by people who understand local service conversion. Paid ads are not the right fit for businesses looking for the cheapest possible ad management without landing page, tracking, or follow-up infrastructure."
  }
];
const adChannelsPrimary = [
  {
    title: "Google PPC Ads Management",
    description: "Capture high-intent demand when people are actively searching for your service.",
    href: "/services/paid-advertising/google-ads/",
    brandLogo: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-7 h-7", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z", fill: "#4285F4" }),
      /* @__PURE__ */ jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
      /* @__PURE__ */ jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z", fill: "#FBBC05" }),
      /* @__PURE__ */ jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
    ] }),
    borderColor: "#4285F4"
  },
  {
    title: "Google Local Service Ads Management",
    description: "Show up in Google's high-visibility local placement with setup, verification, budget guidance, and ongoing optimization.",
    href: "/services/paid-advertising/google-local-services-ads/",
    brandLogo: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-7 h-7", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z", fill: "#34A853", opacity: "0.2" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z", fill: "#34A853" })
    ] }),
    borderColor: "#34A853"
  },
  {
    title: "Facebook & Instagram Ads Management",
    description: "Reach local audiences across Facebook and Instagram for awareness, lead generation, and remarketing.",
    href: "/services/paid-advertising/facebook-ads/",
    brandLogo: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-7 h-7", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z", fill: "#1877F2" }),
      /* @__PURE__ */ jsx("path", { d: "M16.671 15.47L17.203 12h-3.328V9.75c0-.95.465-1.875 1.956-1.875h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.661-4.533 4.668V12H7.078v3.47h3.047v8.385a12.09 12.09 0 0 0 3.75 0V15.47h2.796z", fill: "white" })
    ] }),
    borderColor: "#1877F2"
  }
];
const adChannelsSecondary = [
  {
    title: "Retargeting Campaigns",
    description: "Stay visible to warm prospects who visited but did not contact you the first time.",
    brandLogo: /* @__PURE__ */ jsx(RefreshCw, { className: "w-6 h-6 text-primary" }),
    borderColor: ""
  },
  {
    title: "TikTok Ads Management",
    description: "Tap into short-form video audiences with targeted local campaigns on one of the fastest-growing platforms.",
    comingSoon: true,
    brandLogo: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-7 h-7", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.85 1.56V6.97a4.84 4.84 0 0 1-1.09-.28z", fill: "#000000" }) })
  },
  {
    title: "Bing PPC Ads Management",
    description: "Extend your reach to Microsoft Search audiences with lower competition and cost-per-click opportunities.",
    comingSoon: true,
    brandLogo: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-7 h-7", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M3 3v18l5.5-3.15V6.35L13 8.25v8l-4.5 2.6L3 21", fill: "#00897B" }),
      /* @__PURE__ */ jsx("path", { d: "M8.5 6.35l5 2.4 4.5-1.6v7.7l-4.5 3.3-5-2.9v-8.9", fill: "#00ACC1" }),
      /* @__PURE__ */ jsx("path", { d: "M13 8.25l5-1.4v7.7l-5 3.7V8.25z", fill: "#26C6DA", opacity: "0.7" })
    ] })
  }
];
const conversionSystems = [
  {
    icon: LayoutTemplate,
    title: "Landing Page Strategy",
    description: "Improve the page experience after the click so more visitors turn into leads."
  },
  {
    icon: PenTool,
    title: "Ad Creative & Copywriting",
    description: "Sharper messaging, offer clarity, and creative direction built around local conversion."
  },
  {
    icon: BarChart3,
    title: "Campaign Reporting & Optimization",
    description: "Ongoing testing, budget refinement, and plain-English reporting focused on lead performance."
  },
  {
    icon: Phone,
    title: "Conversion Tracking & Call Tracking",
    description: "Track calls, form fills, and lead actions back to the campaigns that generated them."
  },
  {
    icon: Link2,
    title: "CRM + Follow-Up Automation Integration",
    description: "Connect your campaigns to lead capture, nurture, and response systems so warm leads do not go cold."
  }
];
const processSteps = [
  { label: "Attract", description: "Google Search, LSA, Meta, and retargeting bring the right people into your pipeline.", icon: Eye },
  { label: "Capture", description: "Clicks land on a focused page with one clear action: call, form, or booking.", icon: Target },
  { label: "Track", description: "Calls, forms, and lead actions are tied back to the source that generated them.", icon: BarChart3 },
  { label: "Follow Up", description: "CRM workflows, SMS, and email sequences help warm leads move faster.", icon: Zap },
  { label: "Convert", description: "Better visibility, better response, and better infrastructure produce stronger lead quality.", icon: TrendingUp }
];
const failureReasons = [
  "Broad targeting",
  "Weak or generic landing pages",
  "No clear offer",
  "No call tracking or attribution",
  "No retargeting",
  "Slow or inconsistent lead follow-up"
];
const resultsCards = [
  {
    eyebrow: "HVAC Contractor — Florida",
    title: "Stronger Visibility, Lower CPA",
    timeframe: "5-month campaign (Aug 2022 – Jan 2023)",
    challenge: "Needed stronger visibility, more qualified leads, and lower acquisition costs in a competitive local market.",
    strategy: "Refined keyword targeting, stronger ad copy, geographic focus, ad extensions, and ongoing optimization.",
    stats: [
      { value: "+83%", label: "Conversions" },
      { value: "−41%", label: "CPA" },
      { value: "+50.23%", label: "CTR" },
      { value: "+56.3%", label: "Conversion Rate" }
    ],
    href: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/"
  },
  {
    eyebrow: "Roofing Contractor — Florida",
    title: "Better Estimates, Better Efficiency",
    timeframe: "Month-over-month (Sept 2023 vs Aug 2023)",
    challenge: "Needed stronger estimate flow and better efficiency from existing ad spend.",
    strategy: "Improved campaign structure, tighter optimization, and continuous performance refinement.",
    stats: [
      { value: "+93.3%", label: "Conversions" },
      { value: "−48.9%", label: "Cost/Conversion" },
      { value: "+123.4%", label: "Conversion Rate" }
    ],
    href: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/"
  },
  {
    eyebrow: "Dental Practice — Concord, CA",
    title: "Surge in High-Value Patient Leads",
    timeframe: "Q4 year-over-year comparison",
    challenge: "Client needed more non-branded general dentistry leads plus high-value patients for implants and all-on-4 treatments.",
    strategy: "Full account audit, campaign rebuild, call-only campaign for phone leads, dedicated implants/all-on-4 campaign, aggressive negative-keyword list, and extension testing.",
    stats: [
      { value: "+175.51%", label: "Conversions" },
      { value: "−64.62%", label: "CPA" },
      { value: "+187.04%", label: "Conversion Rate" },
      { value: "+127.25%", label: "CTR" }
    ],
    href: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/"
  },
  {
    eyebrow: "Med Spa — San Ramon, CA",
    title: "Long-Term Growth, Efficient CPA",
    timeframe: "All-time + recent 30 days",
    challenge: "The goal was long-term lead growth at a stable and efficient cost per acquisition.",
    strategy: "Multi-campaign Google Ads structure across Search and Display with ongoing optimization.",
    stats: [
      { value: "2,577", label: "Total Conversions" },
      { value: "$16.39", label: "All-Time CPA" },
      { value: "+48.8%", label: "30-Day Conversions" },
      { value: "−31.1%", label: "30-Day CPA" }
    ],
    href: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/"
  }
];
const channelComparison = [
  ["Pricing model", "Pay per click", "Pay per qualified lead", "Pay per click/impression"],
  ["Buyer intent", "High (active search)", "Highest (local search)", "Medium (interest-based)"],
  ["Setup complexity", "Medium", "Low (Google does most)", "Medium"],
  ["Trust signal", "Ad label only", "Google Guaranteed badge", "Ad label only"],
  ["Best for", "Most service niches", "Home services, some H&W", "Visual services, retargeting"],
  ["Typical time to results", "2–4 weeks", "Days to 1 week", "2–6 weeks"],
  ["Primary KPI", "Cost per lead", "Cost per qualified lead", "Cost per result / ROAS"],
  ["Creative required", "Text + assets", "Minimal (business profile)", "Heavy (image / video)"]
];
const verticalHubs = [
  {
    icon: HardHat,
    title: "For Home Service Contractors",
    body: "HVAC, plumbing, electrical, roofing, painting, landscaping, cleaning, and remodeling. Recommended stack: Google Local Services Ads as primary (pay per qualified lead, Google Guaranteed badge), Google Search Ads for overflow demand, Meta retargeting for longer-consideration jobs.",
    cta: "See Marketing for Contractors",
    href: "/home-service-contractors/"
  },
  {
    icon: Stethoscope,
    title: "For Health & Wellness Practices",
    body: 'Med spas, dental, chiropractic, and allied health. All creative is written FDA- and FTC-compliant. Med spa leans TikTok and Meta. Dental and chiropractic lean Google Search Ads and LSA where eligible. Compliance-first campaigns without generic "permanent" or "guaranteed" language.',
    cta: "See Marketing for Health & Wellness",
    href: "/health-and-wellness-practices/"
  },
  {
    icon: Camera,
    title: "For Professional Services",
    body: "Realtors, photographers, and visual creative professionals. Meta and Instagram Ads for brand and lead generation. Google Search Ads for buyer-intent and branded search protection. Retargeting layered across the full funnel.",
    cta: "See Marketing for Professional Services",
    href: "/professional-services/"
  }
];
const trustRows = [
  { icon: Target, label: "First-touch ads capture active demand" },
  { icon: RotateCw, label: "Retargeting keeps you top-of-mind" },
  { icon: MessageCircle, label: "Ad creative rotation prevents fatigue" },
  { icon: TrendingUp, label: "Multiple touchpoints increase conversion" }
];
const PaidMedia = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Paid Advertising for Local Service Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Stop paying for clicks. Start generating qualified leads with full-funnel paid ad systems for local service businesses. Google Ads, LSA, Meta Ads, retargeting, and conversion tracking." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/paid-advertising/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Paid Advertising",
        serviceType: "Paid Advertising",
        description: "Full-funnel paid ad systems for local service businesses including Google Ads, Local Service Ads, Meta Ads, retargeting, and conversion tracking.",
        url: "/services/paid-advertising/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Paid Advertising", url: "/services/paid-advertising/" }
        ],
        useEntityGraph: true,
        pageName: "Paid Advertising for Local Service Businesses",
        pageDescription: "Stop paying for clicks. Start generating qualified leads with full-funnel paid ad systems for local service businesses. Google Ads, LSA, Meta Ads, retargeting, and conversion tracking.",
        hasFaqPage: true,
        offerCatalog: {
          name: "Paid Advertising Services",
          items: [
            {
              name: "Google Ads Management",
              description: "Managed Google Ads campaigns (Search, Display, Performance Max) for local service businesses, including campaign strategy, keyword research, ad copy, bid management, conversion tracking, and ongoing optimization.",
              url: "https://growsmallbiz.io/services/paid-advertising/",
              category: "PPC Management",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            },
            {
              name: "Google Local Services Ads Management",
              description: "Pay-per-lead advertising through Google's Local Services Ads platform, including Google Guaranteed verification, profile optimization, lead dispute handling, and budget pacing for eligible local service categories.",
              url: "https://growsmallbiz.io/services/paid-advertising/",
              category: "Pay-Per-Lead Advertising",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            },
            {
              name: "Facebook & Instagram Ads Management",
              description: "Managed Meta (Facebook and Instagram) advertising for local service businesses, including campaign strategy, creative production coordination, audience targeting, retargeting, and conversion tracking.",
              url: "https://growsmallbiz.io/services/paid-advertising/",
              category: "Social Advertising",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/InStock"
            },
            {
              name: "TikTok Ads Management",
              description: "Managed TikTok advertising campaigns for local service businesses. Currently in pre-launch availability.",
              url: "https://growsmallbiz.io/services/paid-advertising/",
              category: "Social Advertising",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/PreOrder"
            },
            {
              name: "Microsoft Ads (Bing) Management",
              description: "Managed Microsoft Advertising (Bing) campaigns for local service businesses. Currently in pre-launch availability.",
              url: "https://growsmallbiz.io/services/paid-advertising/",
              category: "PPC Management",
              areaServed: { "@type": "Country", name: "United States" },
              availability: "https://schema.org/PreOrder"
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "container mx-auto px-4 pt-6", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/services/", children: "Services" }) }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Paid Advertising" }) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative pt-12 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
            "Paid Advertising"
          ] }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up", children: [
            "Stop Paying for Clicks.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Start Generating Qualified Leads." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: "We build full-funnel paid ad systems for local service businesses — combining campaign strategy, landing pages, call tracking, CRM follow-up, and retargeting so your ad spend turns into qualified leads you can actually track." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Schedule Strategy Session",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
            ] }) }),
            /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
              "Call +1 (925) 886-3724"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground animate-fade-up", style: { animationDelay: "0.25s" }, children: "Most of our clients combine Paid Ads with Website and SEO — we will map the full picture in your session." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-6 overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-bold text-primary tracking-wide uppercase", children: "Platforms We Manage" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "bg-white py-3", children: /* @__PURE__ */ jsx("div", { className: "flex animate-marquee gap-10 items-center w-max", children: [0, 1].map((dupIdx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-10 items-center flex-shrink-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "w-7 h-7", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z", fill: "#4285F4" }),
                /* @__PURE__ */ jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
                /* @__PURE__ */ jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z", fill: "#FBBC05" }),
                /* @__PURE__ */ jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700 whitespace-nowrap", children: "Google Ads" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "w-7 h-7", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ jsx("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", fill: "#34A853" }),
                /* @__PURE__ */ jsx("path", { d: "M10.5 15.5l-3-3 1.41-1.41L10.5 12.67l4.59-4.58L16.5 9.5l-6 6z", fill: "white" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700 whitespace-nowrap", children: "Google LSA" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-7 h-7", viewBox: "0 0 24 24", fill: "#1877F2", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700 whitespace-nowrap", children: "Facebook Ads" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "w-7 h-7", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: `ig-grad-hero-${dupIdx}`, cx: "30%", cy: "107%", r: "150%", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#fdf497" }),
                  /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#fdf497" }),
                  /* @__PURE__ */ jsx("stop", { offset: "45%", stopColor: "#fd5949" }),
                  /* @__PURE__ */ jsx("stop", { offset: "60%", stopColor: "#d6249f" }),
                  /* @__PURE__ */ jsx("stop", { offset: "90%", stopColor: "#285AEB" })
                ] }) }),
                /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "6", fill: `url(#ig-grad-hero-${dupIdx})` }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4.5", stroke: "white", strokeWidth: "1.5", fill: "none" }),
                /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "6.5", r: "1.2", fill: "white" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700 whitespace-nowrap", children: "Instagram Ads" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "w-7 h-7", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "6", fill: "#010101" }),
                /* @__PURE__ */ jsx("path", { d: "M16.5 4.5c-.2-1-.8-2-2-2.5v6.5c0 2.5-2 4.5-4.5 4.5S5.5 11 5.5 8.5 7.5 4 10 4v2.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V4h2c0 1.7 1.3 3 3 3v2.5c-1.5 0-2.8-.5-3.5-1.5v5c0 3-2.5 5.5-5.5 5.5S2.5 16 2.5 13 5 7.5 8 7.5", fill: "#25F4EE" }),
                /* @__PURE__ */ jsx("path", { d: "M17.5 4.5c-.2-1-.8-2-2-2.5v6.5c0 2.5-2 4.5-4.5 4.5S6.5 11 6.5 8.5 8.5 4 11 4v2.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V4h2c0 1.7 1.3 3 3 3v2.5c-1.5 0-2.8-.5-3.5-1.5v5c0 3-2.5 5.5-5.5 5.5S3.5 16 3.5 13 6 7.5 9 7.5", fill: "#FE2C55" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700 whitespace-nowrap", children: "TikTok Ads" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20", children: "Coming Soon" })
            ] })
          ] }, dupIdx)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12 animate-fade-up", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground leading-tight", children: [
          "Most Local Ad Campaigns Don't Have a Traffic Problem.",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "They Have a System Problem." })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-12 animate-fade-up", style: { animationDelay: "0.05s" }, children: "Paid ads should be one of the fastest ways to generate demand — but many local businesses still end up frustrated. The issue usually is not the platform. It is the missing system behind it." }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          { icon: LayoutTemplate, text: "Weak landing pages" },
          { icon: Phone, text: "No call tracking" },
          { icon: Zap, text: "Poor follow-up" },
          { icon: BarChart3, text: "Limited ROI visibility" }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-xl p-6 text-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: item.text })
        ] }, i)) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mt-8 animate-fade-up", style: { animationDelay: "0.15s" }, children: "GrowSmallBiz builds paid ads as part of a conversion system, not as a standalone traffic tactic." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "Why Local Service Businesses Invest in",
            titleHighlight: "Paid Ads",
            description: "Paid ads are not the only way to grow, but they are often the fastest way to create visibility when timing matters. SEO builds momentum over time. Referrals are valuable, but unpredictable. Organic social can support awareness, but it does not always create immediate demand. Paid ads help local businesses show up when people are actively searching, comparing, or ready to take action."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: [
          { icon: Clock, title: "SEO Builds Over Time", body: "SEO is essential for long-term visibility, but it usually takes time to build rankings, authority, and traffic. Paid ads can help create demand while SEO gains momentum." },
          { icon: MessageSquare, title: "Referrals Are Valuable, But Unpredictable", body: "Word-of-mouth leads can be strong, but they are hard to scale consistently. Paid ads give you more control over timing, targeting, and lead flow." },
          { icon: Megaphone, title: "Organic Social Builds Awareness", body: "Social media helps people notice your brand, but not every local business owner has time to create content consistently. Paid campaigns help put the right offer in front of the right audience faster." },
          { icon: MousePointerClick, title: "Paid Ads Create Faster Market Visibility", body: "When campaigns are built correctly, paid ads help you test offers, target service areas, control budgets, and generate qualified calls or leads with much more predictability." }
        ].map((card, i) => /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(card.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-display font-semibold text-foreground", children: card.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: card.body })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 animate-fade-up", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground mb-3", children: "How Google PPC Works" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Google Search Ads help you appear when people are actively searching for services like yours. You bid on relevant keywords, control where your ads appear, and send traffic to focused pages built to convert. This is usually the strongest fit when demand already exists and you want to capture it quickly." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: "0.05s" }, children: [
            /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground mb-3", children: "How Meta Retargeting Works" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Most visitors do not contact a business the first time they land on a website. Meta retargeting helps you stay visible on Facebook and Instagram after they leave. That repeated exposure builds familiarity, supports trust, and brings warm prospects back when they are ready to act." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground text-center mb-6 animate-fade-up", children: "Pay-Per-Click vs Pay-Per-Lead" }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 animate-fade-up", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-sm font-display font-semibold text-foreground mb-3", children: "Pay-Per-Click" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "With PPC, you pay for the click and control the landing page, targeting, messaging, and conversion path. This usually gives you more flexibility and better optimization potential when the campaign structure is strong." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: "0.05s" }, children: [
              /* @__PURE__ */ jsx("h5", { className: "text-sm font-display font-semibold text-foreground mb-3", children: "Pay-Per-Lead" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "With pay-per-lead, you pay when a lead comes through rather than for every click. This model is most commonly associated with Local Service Ads. For eligible businesses, it can work well when lead quality is strong and the category is a good fit." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center mt-6 max-w-3xl mx-auto animate-fade-up", children: "For many local service businesses, the best approach is not choosing only one model. It is choosing the right mix based on your niche, service area, urgency of demand, and how your leads are tracked and followed up." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "A Complete Paid Advertising System —",
            titleHighlight: "Not Just Ad Setup",
            description: "Every engagement includes both channel management and the performance infrastructure that makes campaigns convert."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-primary mb-6 animate-fade-up", children: "Ad Channels We Manage" }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: adChannelsPrimary.map((card, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-xl p-6 space-y-4 animate-fade-up flex flex-col", style: { animationDelay: `${i * 0.05}s`, borderTopColor: card.borderColor, borderTopWidth: "3px" }, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              card.brandLogo,
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-display font-semibold text-foreground", children: card.title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed flex-1", children: card.description }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", asChild: true, className: "w-fit", children: /* @__PURE__ */ jsxs(Link, { to: card.href, children: [
              "Explore Service ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] }) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: adChannelsSecondary.map((card, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-xl p-6 space-y-4 animate-fade-up flex flex-col relative overflow-hidden", style: { animationDelay: `${(i + 3) * 0.05}s` }, children: [
          "comingSoon" in card && card.comingSoon && /* @__PURE__ */ jsx("span", { className: "absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20", children: "Coming Soon" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            card.brandLogo,
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-display font-semibold text-foreground", children: card.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed flex-1", children: card.description })
        ] }, i)) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-primary mb-6 animate-fade-up", children: "Conversion & Performance Systems" }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: conversionSystems.map((card, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up flex flex-col", style: { animationDelay: `${i * 0.05}s` }, children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(card.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-display font-semibold text-foreground", children: card.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed flex-1", children: card.description })
          ] }, i)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background-alt", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4", children: [
            "The Market You're",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Competing In" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Verified industry data — the paid advertising landscape for small service businesses in 2025 and 2026." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8", children: [
          {
            value: "$70.11",
            label: "Average Google Ads cost per lead across industries in 2025",
            source: "WordStream by LocaliQ 2025 Benchmarks"
          },
          {
            value: "$27.66",
            label: "Average Meta Ads cost per lead — up 21% year over year",
            source: "WordStream by LocaliQ 2025 Facebook Ads Benchmarks"
          },
          {
            value: "25%",
            label: "Of Google searches now include AI Overviews — up from 13% a year ago",
            source: "Conductor 2026 AI Overviews Benchmark"
          },
          {
            value: "7.7%",
            label: "Of company revenue allocated to marketing in 2025",
            source: "Gartner 2025 CMO Spend Survey"
          }
        ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-5xl md:text-6xl font-display font-bold text-primary leading-none", children: stat.value }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground leading-snug", children: stat.label }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs md:text-sm text-muted-foreground", children: [
            "Source: ",
            stat.source
          ] })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 animate-fade-up", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-3", children: [
            "Google Ads vs. Local Services Ads vs. Meta Ads —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Which Do You Need?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "italic text-muted-foreground", children: "Short answer — probably more than one. Here is how they actually differ." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-card animate-fade-up", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-background", children: [
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-display font-bold text-foreground", children: "Factor" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-display font-bold text-foreground", children: "Google Ads (PPC)" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-display font-bold text-foreground", children: "Local Services Ads" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-display font-bold text-foreground", children: "Meta Ads" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: channelComparison.map((row, i) => /* @__PURE__ */ jsxs("tr", { className: `border-t border-border ${i % 2 === 1 ? "bg-background/40" : ""}`, children: [
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4 font-semibold text-foreground", children: row[0] }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4 text-muted-foreground", children: row[1] }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4 text-muted-foreground", children: row[2] }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4 text-muted-foreground", children: row[3] })
          ] }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "italic text-xs text-muted-foreground mt-4 text-center max-w-3xl mx-auto", children: "General framework based on common industry observations. Your specific results will vary by niche, geography, creative quality, and budget." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-foreground mb-2", children: "Not sure which combination fits your business?" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: strategyUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-primary font-semibold hover:underline",
              children: [
                "Schedule Strategy Session ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-3", children: [
            "Paid Ads Built for",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Your Industry" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "italic text-muted-foreground max-w-3xl mx-auto", children: "We don't run the same campaigns for an HVAC contractor that we run for a med spa. Here is how we specialize by vertical." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: verticalHubs.map((hub, i) => {
          const Icon = hub.icon;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(45,200,200,0.15)] animate-fade-up",
              style: { animationDelay: `${i * 0.08}s` },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground", children: hub.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: hub.body }),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: hub.href,
                    className: "inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline",
                    children: [
                      hub.cta,
                      " ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ]
            },
            i
          );
        }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "How Paid Traffic Becomes",
            titleHighlight: "Booked Jobs"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4", children: processSteps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3 animate-fade-up relative", style: { animationDelay: `${i * 0.08}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(step.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-primary uppercase tracking-wider", children: [
            "Step ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground", children: step.label }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: step.description }),
          i < processSteps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-6 -right-2 text-border", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }) })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "It's Not the Budget.",
            titleHighlight: "It's the System.",
            className: "mb-12"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8", children: failureReasons.map((reason, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-background border border-border rounded-xl p-4 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", children: reason })
        ] }, i)) }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground animate-fade-up", children: "Each of these is fixable when campaigns are built with the right structure from day one." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "Real Results Across",
            titleHighlight: "Local Service Campaigns",
            description: "These examples show what happens when paid ads are paired with better structure, sharper targeting, and stronger conversion systems.",
            className: "mb-6"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 mt-12", children: resultsCards.map((card, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl overflow-hidden flex flex-col animate-fade-up",
            style: { animationDelay: `${i * 0.08}s` },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary px-6 py-4", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-xs font-bold text-primary-foreground/90 uppercase tracking-wider mb-1", children: [
                  "Campaign Results — ",
                  card.eyebrow
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-primary-foreground", children: card.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/80 mt-1", children: card.timeframe })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Challenge" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", children: card.challenge })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Strategy" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", children: card.strategy })
                ] }),
                /* @__PURE__ */ jsx("div", { className: `grid ${card.stats.length === 3 ? "grid-cols-3" : "grid-cols-2"} gap-3 pt-2`, children: card.stats.map((m, mi) => /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-lg p-3 text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-display font-bold text-primary", children: m.value }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: m.label })
                ] }, mi)) }),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: card.href,
                    className: "inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline mt-auto pt-2",
                    children: [
                      "Read Full Case Study ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ] })
            ]
          },
          i
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsx(
            SectionHeader,
            {
              title: "Visibility Gets You Seen.",
              titleHighlight: "Trust Gets Them to Convert.",
              centered: false,
              className: "mb-6"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Paid ads create immediate visibility, but most local buyers do not convert on their first visit. Strong paid advertising is not just about getting clicks — it is about staying in front of the right audience long enough for them to trust you, remember you, and choose you." }),
            /* @__PURE__ */ jsx("p", { children: "That is why every GrowSmallBiz paid campaign is built with retargeting, creative rotation, and conversion-tracking baked in from day one. Repeated exposure builds familiarity. Familiarity builds trust. Trust improves conversion. The strongest paid campaigns are not built on traffic alone — they are built on multiple touchpoints working together." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 animate-fade-up", style: { animationDelay: "0.1s" }, children: trustRows.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-background border border-border rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground font-medium", children: item.label })
        ] }, i)) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "Why Local Businesses Choose GrowSmallBiz for",
            titleHighlight: "Paid Ads",
            className: "mb-12"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          { icon: MapPin, title: "Built for local service businesses" },
          { icon: TrendingUp, title: "Full-funnel thinking, not isolated ad buying" },
          { icon: BarChart3, title: "Tracking and transparency from click to lead" },
          { icon: Link2, title: "Campaigns connected to follow-up and CRM systems" },
          { icon: Target, title: "Practical strategy with ongoing optimization" },
          { icon: RefreshCw, title: "Retargeting strategy to recapture warm visitors and increase conversions" }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 bg-card border border-border rounded-xl p-5 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: item.title })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          faqs,
          schemaId: "https://growsmallbiz.io/services/paid-advertising/#faqpage",
          subtitle: "Common questions about our paid advertising services",
          contactCTA: {
            ...baseContactCTA,
            title: "Have more questions about Paid Ads?",
            description: "We're here to help you build a paid advertising system that actually works.",
            tagline: "Let's turn your ad spend into qualified leads.",
            buttonText: "Schedule Strategy Session",
            buttonHref: strategyUrl
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-card border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-xs font-bold text-primary uppercase tracking-wider mb-6", children: "Trusted & Recognized" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-4", children: [
          { name: "Walnut Creek Chamber of Commerce", url: "https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" },
          { name: "Danville Area Chamber of Commerce", url: "https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" },
          { name: "San Ramon Chamber of Commerce", url: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" },
          { name: "Greater Concord Chamber of Commerce", url: "https://www.concordchamber.com/list/member/growsmallbiz-digital-marketing-12991" }
        ].map((chamber) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: chamber.url,
            target: "_blank",
            rel: "noopener",
            className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-primary/70" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: chamber.name })
            ]
          },
          chamber.name
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Ready to Run Ads That Actually Generate Leads?",
          description: "Stop guessing. Stop wasting budget. Schedule a 30-minute strategy session and we will walk through your current marketing, identify the 3–5 highest-leverage moves across Website, SEO, and Paid Ads, and give you a clear roadmap — whether or not you hire us.",
          buttonText: "Schedule Strategy Session",
          buttonHref: strategyUrl,
          sectionClassName: "py-24"
        }
      ),
      /* @__PURE__ */ jsx(ConsultationFormSection, { utmCampaign: "consultation-form", utmMedium: pageMedium })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PaidMedia as default
};
