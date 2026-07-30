import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { P as PersonCTA } from "./PersonCTA-B97lddt0.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { u as useUtm, C as CTA_URLS } from "./use-utm-X_toIThi.js";
import { Users, ArrowRight, Target, Image, RefreshCw, FileText, CheckCircle2, Sparkles, Camera, Utensils, Building2, Home, Star, Stethoscope, Briefcase, Video, Clock, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { l as leakyBucket } from "./leaky-bucket-78FFvP1z.js";
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
const heroBg = "/assets/hero-bg-Cl38uuq1.jpg";
const faqs = [
  {
    question: "How much should I spend on Facebook Ads as a local business?",
    answer: "The right budget depends on your market, your service, your competition, and your growth goals. As a general benchmark, most local service businesses generating meaningful results are spending between $500 and $2,000 per month in ad spend, separate from management fees. During your strategy session, we'll recommend a realistic budget based on your specific market and goals."
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer: "Most of our clients begin seeing leads within the first two to four weeks of launching a properly structured campaign. The first month is typically a data-gathering and optimization phase where we identify the highest-performing audiences and creatives. Results improve consistently through months two and three as we refine targeting and creative based on real performance data. This is why our performance guarantee exists — if we haven't generated leads within the agreed timeframe, we keep working until we do."
  },
  {
    question: "What's the difference between boosting posts and running Facebook Ads?",
    answer: `Boosting posts is a simplified advertising feature designed for reach and engagement — it prioritizes impressions and likes. Managed Facebook Ad campaigns are built around specific business objectives: lead generation, website conversions, or calls. A boosted post is a shortcut. A properly structured campaign is a lead generation system. Most local businesses who feel like "Facebook Ads don't work" have only ever boosted posts.`
  },
  {
    question: "Do you manage Instagram Ads as well as Facebook Ads?",
    answer: "Yes. Facebook and Instagram advertising are managed through the same Meta Ads Manager platform, and we manage campaigns across both platforms simultaneously. We optimize placement, format, and creative for each platform independently to maximize performance on both."
  },
  {
    question: "What's the difference between Meta Ads and Facebook Ads?",
    answer: '"Meta Ads" is the current brand name covering all advertising across Facebook, Instagram, Messenger, and Meta Audience Network. "Facebook Ads" is the legacy term. They refer to the same advertising platform — now called Meta Ads Manager.'
  },
  {
    question: "Do I need a Facebook Business Page and Meta Business Suite account before we start?",
    answer: "Yes. You'll need an active Facebook Business Page and a Meta Business Manager account. If you don't have these set up, we walk you through the setup process during onboarding. We also configure your Facebook Pixel on your website as part of the initial campaign setup."
  },
  {
    question: "Will I have visibility into my campaign performance?",
    answer: "Yes, completely. You'll receive monthly performance reports with all key metrics explained in plain English. You'll always know exactly how your budget is being spent, what your cost per lead is, how many leads were generated, and what we're doing to improve results."
  },
  {
    question: "How does Meta Ads compare to Google Ads for lead generation?",
    answer: "Meta Ads and Google Ads serve different funnel stages. Meta averages $27.66 CPL (WordStream, 2025) at lower intent — it reaches people who aren't yet searching. Google Search Ads average $70.11 CPL at higher intent — it captures people actively looking. Most of our clients run both; the channel mix depends on vertical and stage of business."
  },
  {
    question: "What ad creative do I need to provide?",
    answer: "We handle all ad copy, headlines, and CTA development. For creative assets (photos, video), we work with what you have, source stock where appropriate, or develop custom creative briefs for your own production. Med spa and photography verticals typically need original visual assets; most other verticals can start with a mix of existing and stock."
  },
  {
    question: "Can you take over campaigns that another agency or I was already running?",
    answer: "Absolutely. We take over underperforming accounts regularly. We start with a full audit of your existing campaign structure, audience settings, creative performance, and conversion tracking configuration. Then we restructure what's broken and build on what's working. Transitioning management to GrowSmallBiz typically results in improved performance within the first 30 to 60 days."
  },
  {
    question: "What's your contract structure?",
    answer: "Month-to-month. No long-term contracts. If we're not delivering, you shouldn't be locked in."
  }
];
const FacebookAds = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Facebook Ads Management for Local Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Facebook & Instagram Ads that generate leads for local service businesses. Expert targeting & conversion strategies. Schedule strategy call." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "Facebook Ads management, Instagram Ads, lead generation strategies, local business advertising, ad campaign optimization, digital marketing agency, effective ad targeting, Facebook advertising services" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/paid-advertising/facebook-ads/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Facebook & Instagram Ads Management for Small Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Done-for-you Meta Ads management for local service businesses. Audience targeting, Meta Pixel, retargeting, creative, and weekly optimization — built for lead generation, not vanity metrics." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://growsmallbiz.io/services/paid-advertising/facebook-ads/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://growsmallbiz.io/og-image.jpg" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:alt", content: "GrowSmallBiz — Facebook and Instagram Ads management for local service businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Facebook & Instagram Ads Management for Small Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: "Done-for-you Meta Ads management for local service businesses. Audience targeting, Meta Pixel, retargeting, creative, and weekly optimization — built for lead generation, not vanity metrics." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://growsmallbiz.io/og-image.jpg" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image:alt", content: "GrowSmallBiz — Facebook and Instagram Ads management for local service businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Facebook & Instagram Ads Management",
        serviceType: "Facebook & Instagram Ads Management",
        description: "Facebook & Instagram Ads management for local service businesses. Precision targeting, conversion-focused creative, full-funnel tracking, and retargeting.",
        url: "/services/paid-advertising/facebook-ads/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Paid Advertising", url: "/services/paid-advertising/" },
          { name: "Facebook & Instagram Ads", url: "/services/paid-advertising/facebook-ads/" }
        ],
        useEntityGraph: true,
        pageName: "Facebook & Instagram Ads Management for Small Businesses | GrowSmallBiz",
        pageDescription: "Done-for-you Meta Ads management for local service businesses. Audience targeting, Meta Pixel, retargeting, creative, and weekly optimization — built for lead generation, not vanity metrics.",
        hasFaqPage: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 129,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/paid-advertising/facebook-ads/",
        images: [
          {
            url: heroBg,
            caption: "Facebook & Instagram Ads management for local service businesses",
            description: "Hero image for GrowSmallBiz's Meta Ads management service — done-for-you Facebook and Instagram lead-generation campaigns built for local service businesses, with audience targeting, creative production, Meta Pixel setup, and weekly optimization.",
            width: 1920,
            height: 1080
          },
          {
            url: leakyBucket,
            caption: "Leaky bucket diagram showing wasted Meta Ads spend without proper follow-up",
            description: "Conceptual diagram illustrating how Meta Ads leads are lost when there is no automated follow-up system in place — visualized as a leaky bucket where ad spend pours in but most leads leak out before becoming booked work.",
            width: 1024,
            height: 1024
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 145,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/paid-advertising/facebook-ads/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("nav", { "aria-label": "Breadcrumb", className: "container mx-auto px-4 pt-28", children: /* @__PURE__ */ jsxDEV(Breadcrumb, { children: /* @__PURE__ */ jsxDEV(BreadcrumbList, { children: [
      /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 175,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(BreadcrumbSeparator, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/", children: "Services" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(BreadcrumbSeparator, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/", children: "Paid Advertising" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 187,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 186,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(BreadcrumbSeparator, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 190,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(BreadcrumbItem, { children: /* @__PURE__ */ jsxDEV(BreadcrumbPage, { children: "Facebook & Instagram Ads" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 172,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative pt-8 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: heroBg,
          alt: "Abstract digital background with colorful geometric shapes and icons representing social media engagement, emphasizing Facebook and Instagram advertising strategies for local businesses by GrowSmallBiz.",
          width: 1920,
          height: 1080,
          fetchPriority: "high",
          "aria-hidden": "true",
          className: "absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 200,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/70" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 hero-glow" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
          /* @__PURE__ */ jsxDEV(Users, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 214,
            columnNumber: 17
          }, void 0),
          "Facebook & Instagram Ads"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 213,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up bg-gradient-heading bg-clip-text text-transparent", children: "Facebook & Instagram Ads That Fill Your Calendar — Not Just Your Feed" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg italic text-muted-foreground/80 max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.05s" }, children: "Facebook & Instagram Ads management for small businesses that need qualified leads, not impressions." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: "Most small businesses waste thousands on Facebook and Instagram Ads chasing likes and impressions. You need leads. We build, manage, and optimize Meta ad campaigns that turn your ad spend into booked appointments, service calls, and paying customers." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.15s" }, children: [
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Schedule Strategy Session",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 231,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "#how-it-works", children: "See How It Works" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 235,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-16 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground text-center mb-8", children: "Trusted by Local Service Businesses Across the Bay Area and Nationwide" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
        { value: "30+", label: "Years Fortune 500 sales & marketing leadership" },
        { value: "5", label: "Local service industries served" },
        { value: "Weekly", label: "Active campaign optimization" },
        { value: "100%", label: "Done-for-you management" }
      ].map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-3xl md:text-4xl font-display font-bold text-primary", children: stat.value }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 256,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: stat.label }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 257,
          columnNumber: 17
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 255,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 246,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Why Most Facebook Ad Campaigns Fail",
          titleHighlight: "Small Businesses",
          description: "Facebook and Instagram have over 3 billion combined monthly active users. The audience is there. The targeting tools are there. So why are so many local businesses still burning through budgets with nothing to show for it?"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 268,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 mt-12", children: [
        { title: "You're paying for the wrong outcomes.", desc: "Boosting posts for likes and reach is not advertising — it's brand awareness spending without brand-awareness budgets. If your campaigns aren't structured around lead generation and conversion goals, you're funding Meta's revenue, not yours." },
        { title: "Your targeting is too broad — or too narrow.", desc: "Generic interest targeting reaches people who will never call you. Hyper-local targeting without the right audience signals means you're guessing. Without a data-driven audience strategy built around your actual customer profile, your budget disappears into impressions that convert to nothing." },
        { title: "You have no retargeting system.", desc: "Most people who see your ad for the first time won't book immediately. Without a structured retargeting funnel — using Meta Pixel data, website visitors, and custom audiences — you're letting warm leads go cold every single day." },
        { title: "Your creative doesn't speak to your customer.", desc: "A blurry stock photo and a generic caption don't stop the scroll. Local service businesses need ad creative that addresses the specific pain points of their ideal customer, with a clear message and a compelling reason to act now." },
        { title: "There's no one watching the numbers.", desc: "Facebook Ads require continuous optimization. Audience fatigue, creative burnout, budget pacing, and bidding strategy all need active management. Set-it-and-forget-it campaigns are money drains." }
      ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 282,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 283,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 281,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 273,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 267,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 266,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto rounded-2xl border-2 border-primary/60 bg-card/50 backdrop-blur-sm p-6 md:p-10 shadow-[0_0_30px_rgba(255,127,80,0.15)] animate-fade-up", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Fixing the leaky bucket:" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 296,
          columnNumber: 15
        }, void 0),
        " where most of your future customers actually live"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 295,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "my-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: leakyBucket,
          alt: "Metal bucket with holes leaking water, symbolizing inefficiency in ad spend for local businesses, relevant to GrowSmallBiz's focus on optimizing Facebook and Instagram Ads.",
          width: 1024,
          height: 1024,
          loading: "lazy",
          className: "w-full max-w-md h-auto rounded-xl shadow-lg"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 299,
          columnNumber: 15
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 298,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "Only a small fraction of people who visit your website take action on their first visit. Most leave without calling, filling out the form, or booking. That isn't a website problem — it's a follow-up problem. It's the leaky bucket every local business has." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 308,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Meta's retargeting capabilities are built to fix exactly that. Your Meta Pixel captures every website visitor. We build custom audiences from those visitors, from people who engaged with your ads, from people who watched your video content but didn't book. Then we run sequential retargeting campaigns that keep your business on top of their mind — until they're ready to take action." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Most of our clients' best-performing campaigns aren't prospecting. They're retargeting. The leads are already in your funnel. Retargeting is how you actually convert them." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 314,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 307,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 294,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 293,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 292,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "FAQs: Your Questions Answered: Facebook & Instagram Ads for Local Businesses",
          description: "We don't just run ads. We build a full-funnel paid social system designed to generate consistent, qualified leads for your local service business — every single month."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 326,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12", children: [
        { icon: Target, title: "Qualified leads, not vanity metrics", desc: "Every campaign is structured around one goal: generating real business outcomes. Phone calls, form fills, booked appointments, and service requests — not likes, shares, or impressions." },
        { icon: Users, title: "Precision audience targeting", desc: "Custom audiences built from your ideal customer profile (location, demographics, behaviors, life events), layered with lookalike audiences built from your existing client list to scale what's already working." },
        { icon: Image, title: "Scroll-stopping ad creative", desc: "Three to four ad creatives per campaign, written for your service, your market, and your customer's pain points. Primary copy, headlines, CTAs, and visual direction — all A/B tested to identify the combinations that drive the lowest cost per lead." },
        { icon: RefreshCw, title: "Full-funnel retargeting", desc: "Meta Pixel setup, retargeting audiences built from website visitors and video viewers, and sequential retargeting campaigns that nurture prospects from first touch to booked appointment." },
        { icon: FileText, title: "Transparent monthly reporting", desc: "No cryptic dashboards, no vanity slides. Clear monthly reports: cost per lead, lead volume, click-through rate, reach, frequency, and ROAS. Plus a summary of optimizations made and the plan for the following month." }
      ].map((card, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(card.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 340,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 339,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-display font-semibold text-foreground", children: card.title }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 342,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: card.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 343,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 338,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 330,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 325,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 324,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "What's Included in Every",
          titleHighlight: "Engagement",
          description: "A structured scope of work — applied consistently across every Meta Ads engagement we manage."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 355,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("ul", { className: "mt-12 space-y-3", children: [
        "Full campaign strategy and account architecture — business goals, service area, competitive landscape, and ideal customer profile",
        "Meta Business Manager and Meta Ads Manager setup and access configuration",
        "Meta Pixel installation and Conversions API integration — server-side event tracking for iOS 14.5+ attribution",
        "Custom audience creation — website visitors, video viewers, customer list uploads, and engagement audiences",
        "Lookalike audience generation — 1%, 3%, and 5% tiers based on best-fit source audiences",
        "Campaign structure design — awareness, consideration, and conversion layering",
        "Ad creative development — three to four ad variants per campaign (primary copy, headline, CTA, visual direction)",
        "Systematic A/B testing — creative, audience, placement, and bidding strategy",
        "Conversion event configuration — form fills, phone calls, and booking completions",
        "Advantage+ campaign deployment where the data supports it",
        "Retargeting funnel architecture — sequential creative tuned by audience temperature",
        "Weekly performance monitoring and active optimization — bid adjustments, creative refreshes, budget pacing",
        "Monthly reporting with plain-English analysis of performance, optimizations made, and next-30-day plan",
        "Lead follow-up integration with your CRM or notification system — speed to lead is one of the biggest drivers of conversion"
      ].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 animate-fade-up", style: { animationDelay: `${i * 0.03}s` }, children: [
        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary flex-shrink-0 mt-0.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 378,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: item }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 379,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 377,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 360,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 354,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 352,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "What Facebook & Instagram Ads Actually Cost for",
          titleHighlight: "Small Businesses"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 391,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mt-6", children: "Meta advertising is generally the lowest cost-per-lead paid channel available to small businesses — substantially cheaper than Google Search Ads. The tradeoff is lead intent: Meta is a demand-generation channel, not a demand-capture channel. Prospects arrive earlier in the buying process." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10", children: [
        { value: "$27.66", label: "Meta Leads CPL — industry avg" },
        { value: "$1.92", label: "Meta Leads CPC — industry avg" },
        { value: "$0.70", label: "Meta traffic CPC — industry avg" },
        { value: "+21%", label: "Meta Leads CPL YoY 2025" }
      ].map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center bg-background border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-primary", children: stat.value }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 406,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: stat.label }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 407,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 405,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 398,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mt-10", children: "Meta's 2025 CPL is roughly 2.5× lower than Google Ads at $70.11. The +21% year-over-year cost increase reflects rising ad competition — which is why campaign strategy, creative quality, and active optimization matter more every year. Paying less per lead requires doing the work the generalists skip." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 411,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs italic text-muted-foreground/70 max-w-3xl mx-auto text-center mt-4", children: "Industry benchmarks: WordStream by LocaliQ 2025 Facebook Ads Benchmarks and 2025 Google Ads Benchmarks (1,000+ campaigns analyzed per report). Your specific CPL depends on your vertical, service area, creative quality, and funnel maturity." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 414,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 390,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 389,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 388,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Meta Ads vs Google Ads for Small Businesses:",
          titleHighlight: "Where Each Channel Wins",
          description: "The two channels aren't substitutes — they work differently and win on different metrics. Most of our clients run both. Here's the honest breakdown."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 425,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-12 overflow-x-auto rounded-xl border border-border", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-sm md:text-base", children: [
        /* @__PURE__ */ jsxDEV("thead", { className: "bg-card", children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { className: "text-left p-4 font-display font-semibold text-foreground border-b border-border", children: "Dimension" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 434,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("th", { className: "text-left p-4 font-display font-semibold text-foreground border-b border-border", children: "Meta Ads (Facebook & Instagram)" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 435,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("th", { className: "text-left p-4 font-display font-semibold text-foreground border-b border-border", children: "Google Search Ads" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 436,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 433,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 432,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("tbody", { className: "text-muted-foreground", children: [
          ["Primary function", "Demand generation", "Demand capture"],
          ["Audience intent", "Low–moderate (scrolling, open to discovery)", "High (actively searching, commercial intent)"],
          ["Avg CPL", "$27.66¹", "$70.11²"],
          ["Avg CPC", "$1.92 leads · $0.70 traffic¹", "$5.26²"],
          ["Best for", "Visual / lifestyle services, retargeting, brand-building", "High-intent local search, urgent-need services"],
          ["Strongest verticals", "Med spa, photography, restaurants, real estate", "HVAC, plumbing, dental, chiropractic, “near me” services"],
          ["Lead quality", "Cheaper, earlier in funnel", "More expensive, further in funnel"],
          ["Complementary role", "Nurtures, retargets, builds brand", "Captures active searchers, drives phone/form leads"]
        ].map((row, i) => /* @__PURE__ */ jsxDEV("tr", { className: i % 2 === 0 ? "bg-card/30" : "bg-transparent", children: [
          /* @__PURE__ */ jsxDEV("td", { className: "p-4 font-medium text-foreground border-b border-border align-top", children: row[0] }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 451,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("td", { className: "p-4 border-b border-border align-top leading-relaxed", children: row[1] }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 452,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("td", { className: "p-4 border-b border-border align-top leading-relaxed", children: row[2] }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 453,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 450,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 439,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 431,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 430,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs italic text-muted-foreground/70 mt-4", children: "¹ WordStream by LocaliQ 2025 Facebook Ads Benchmarks. ² WordStream by LocaliQ 2025 Google Ads Benchmarks." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 459,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-8 max-w-3xl mx-auto rounded-xl border-l-4 border-primary bg-card/50 p-6 animate-fade-up", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: "We manage both." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 463,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: [
          "Most local service businesses get their best ROI by running Meta and",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/google-ads/", className: "text-primary underline hover:text-primary/80", children: "Google" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 466,
            columnNumber: 17
          }, void 0),
          " ",
          "Ads together — Google captures the 'I need a dentist today' searches; Meta reaches the other 10× who haven't started searching yet."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 464,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 462,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 424,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 423,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 422,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "how-it-works", className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "How We Manage Your Meta Ads:",
          titleHighlight: "From Strategy to Results"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 478,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 mt-12", children: [
        { title: "Discovery & Strategy Session", desc: "We start with a deep-dive strategy session to understand your business, your target customer, your service area, and your growth goals. We audit your existing ad account (if you have one), review your competitors' ad activity using Meta Ad Library, and identify the biggest opportunities in your market. This session defines everything that follows." },
        { title: "Audience Build & Campaign Architecture", desc: "Based on your strategy session, we build your core audience segments — custom, interest-based, and lookalike — and structure your campaign architecture around your specific conversion goal. We configure your Meta Business Manager, Meta Pixel, and Conversions API integration at this stage." },
        { title: "Ad Creative Development & A/B Testing Setup", desc: "We develop three to four ad creatives with full copywriting, headlines, and visual direction across image, carousel, and Reels formats. Each creative is built to speak directly to your ideal customer's situation and motivate a specific action. We set up systematic A/B testing so every creative is evaluated on real performance data." },
        { title: "Campaign Launch & Conversion Tracking Verification", desc: "We launch your campaigns and run a full conversion tracking verification to confirm that every lead, form fill, and phone call is being recorded accurately through both the Meta Pixel and Conversions API. No assumptions — we verify the data before scaling any budget." },
        { title: "Weekly Monitoring & Active Optimization", desc: "Every week, we review performance across all active ad sets. We adjust bids, refresh underperforming creative, expand winning audiences, and reallocate budget toward the highest-performing combinations. Your campaign is always improving." },
        { title: "Monthly Reporting & Strategy Review", desc: "At the end of each month, you receive a clear performance report with all key metrics and a plain-English explanation of results. We review what worked, what we're changing, and what the plan is for the next 30 days." }
      ].map((step, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-primary", children: i + 1 }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 494,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 493,
            columnNumber: 21
          }, void 0),
          i < 5 && /* @__PURE__ */ jsxDEV("div", { className: "w-px flex-1 bg-border mt-2" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 496,
            columnNumber: 31
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 492,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground mb-2", children: [
            "Step ",
            i + 1,
            ": ",
            step.title
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 499,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 500,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 498,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 491,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 482,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 477,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 476,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 475,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Facebook Ads Management for",
          titleHighlight: "Local Service Industries"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 513,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-6", children: "Meta Ads don't perform the same way for every vertical. Visual and consideration-stage services benefit most from Meta as a primary channel. Other verticals use Meta as a complementary channel alongside Google Ads. We set your strategy based on what your vertical actually needs." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 517,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-14", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-primary mb-6 text-center md:text-left", children: "Primary Fit — Meta as the lead-generation channel" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 523,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          { icon: Sparkles, title: "Med Spas & Aesthetic Services", desc: "Visual results drive demand. Before/after creative (FDA/FTC-compliant framing: reduce, minimize, improve — never eliminate or guarantee), Instagram-forward Reels, and consultation-focused lead forms. Med spa clients often see Meta deliver more leads than Google at a lower CPL." },
          { icon: Camera, title: "Photographers & Creative Professionals", desc: "Visual-first advertising for a visual-first service. Portfolio-driven Reels, engagement retargeting, and consultation funnels designed to book sessions and weddings." },
          { icon: Utensils, title: "Restaurants", desc: "Local awareness, event promotion, reservation drives, and daily-special campaigns. Meta's local targeting combined with mouth-watering creative moves covers when Google Ads can't reach people who haven't decided where to eat yet." },
          { icon: Building2, title: "Real Estate Brokers & Agents", desc: "Buyer and seller lead generation through video walkthroughs, market update Reels, and neighborhood-targeted lead magnets. Meta captures the 'just starting to look' buyer Google can't reach." }
        ].map((ind, i) => /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(ind.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 536,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 535,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground", children: ind.title }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 538,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 534,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ind.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 540,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 533,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 526,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 522,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-14", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-primary mb-6 text-center md:text-left", children: "Complementary Channel — Meta alongside Google Ads" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 548,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          { icon: Home, title: "HVAC & Home Services", desc: "Google Ads captures 'AC repair near me' urgent-need searches; Meta reaches homeowners during off-season for maintenance agreements, replacement planning, and brand building." },
          { icon: Star, title: "Dental Practices", desc: "Google Ads captures active patient searches; Meta builds practice awareness, retargets website visitors, and promotes cosmetic services (Invisalign, whitening) where the consideration cycle is longer." },
          { icon: Stethoscope, title: "Chiropractic Care", desc: "Google Ads captures 'back pain relief' searches; Meta reaches people earlier — before they've decided chiropractic is the answer — with educational content and patient stories." },
          { icon: Briefcase, title: "Other Local Professional Services", desc: "CPAs, attorneys, financial advisors, consultants. If you serve a local market and need a consistent pipeline of qualified leads, we can build and manage campaigns that deliver them." }
        ].map((ind, i) => /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(ind.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 561,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 560,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground", children: ind.title }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 563,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 559,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ind.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 565,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 558,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 551,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 547,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 512,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 511,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 510,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Instagram Isn't an Add-On.",
          titleHighlight: "It's Half the Opportunity."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 578,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-6", children: "Most agencies run Facebook-first campaigns and auto-place them on Instagram as an afterthought. For visual service businesses, that's backwards. Instagram's format library is different, the audience behavior is different, and the creative requirements are different." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 582,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 mt-12", children: [
        { icon: Video, title: "Reels for awareness", desc: "Short-form vertical video is where discovery happens on Instagram in 2026. Reels campaigns reach audiences outside your existing following and are often the cheapest way to build top-of-funnel awareness for visual verticals." },
        { icon: Clock, title: "Stories for retargeting", desc: "Full-screen, time-limited, high-engagement. Stories placements work best for warm audiences — retargeting website visitors, video viewers, and custom audiences with time-sensitive offers." },
        { icon: LayoutGrid, title: "Feed for consideration", desc: "High-resolution static and carousel formats for before/afters, portfolio work, testimonials (where available), and educational content. The feed is where prospects evaluate you." }
      ].map((card, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(card.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 594,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 593,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground", children: card.title }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 596,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 592,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: card.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 598,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 591,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 585,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-foreground leading-relaxed text-center max-w-3xl mx-auto mt-12", children: "We build creative for all three formats natively — not cropped from Facebook feed ads — and configure campaign structure to optimize each placement on its own performance data." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 602,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 577,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 576,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 575,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Why Small Businesses Choose GrowSmallBiz for",
          titleHighlight: "Meta Ads Management",
          className: "mb-12"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 613,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
        { title: "We specialize in local service businesses — period", desc: "We don't manage ad campaigns for e-commerce brands, SaaS companies, or national retailers. Our entire agency is built around one type of client: local service businesses. That specialization means we understand your customer, your competitive landscape, and your growth levers in a way a generalist agency never will.", featured: false },
        { title: "30+ years of real business experience", desc: "GrowSmallBiz was founded by Subrata Guha — a 30+ year veteran of Fortune 500 sales, marketing, supply chain, and digital transformation. He didn't build this agency to learn on your budget. The strategic thinking, business judgment, and marketing frameworks we apply come from decades of real-world business leadership.", featured: false },
        { title: "Full-funnel, not just ads", desc: "Anyone can run an ad. We build the entire system: audience targeting, ad creative, Meta Pixel setup, Conversions API integration, conversion tracking, retargeting sequences, and lead follow-up integration. Your ads are connected to your business — not just running in isolation.", featured: false },
        { title: "AI-powered campaign management", desc: "We use AI-powered tools to enhance audience analysis, creative optimization, and performance monitoring. That means faster decisions, smarter targeting, and more efficient use of your budget — at every stage of your campaign.", featured: false },
        { title: "Integrated with your broader marketing system", desc: "Your Meta Ads don't operate in a silo. We integrate your paid social campaigns with your SEO strategy, website conversion rate, reputation management, and CRM — so every channel amplifies the others and every lead is captured and nurtured.", featured: false },
        { title: "The Performance Guarantee", desc: "If we don't generate leads within the agreed timeframe and scope, we keep working at no additional management fee — you only cover the ad spend — until we do. Timeframe and lead-volume thresholds are defined during your strategy session and documented in your service agreement.", featured: true }
      ].map((item, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: item.featured ? "bg-card border-l-4 border-primary border-y border-r border-border rounded-xl p-6 animate-fade-up shadow-[0_0_30px_rgba(255,127,80,0.15)]" : "bg-card border border-border rounded-xl p-6 animate-fade-up",
          style: { animationDelay: `${i * 0.05}s` },
          children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 636,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 637,
              columnNumber: 19
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 627,
          columnNumber: 17
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 618,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 612,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 611,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 610,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Real Results From Our",
          titleHighlight: "Meta Ads Campaigns",
          description: "A measurable outcome from a Facebook lead generation campaign we managed — structured around a three-tier funnel with active optimization."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 649,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto mt-12 animate-fade-up", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl overflow-hidden border border-border shadow-[0_0_40px_rgba(255,127,80,0.12)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-primary to-primary/70 p-8", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-2", children: "Campaign Results — Facebook Lead Generation" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 658,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-primary-foreground", children: "3-Tier Funnel Methodology" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 661,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-primary-foreground/70 italic text-sm mt-2", children: "22-day campaign window" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 664,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 657,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-[hsl(210_50%_8%)] p-8 md:p-10 space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(188_78%_55%)] uppercase text-xs font-bold tracking-wider mb-2", children: "Challenge" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                lineNumber: 670,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: "Client needed high-quality leads at efficient CPL, with disciplined budget allocation across awareness, consideration, and conversion stages." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                lineNumber: 673,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 669,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(188_78%_55%)] uppercase text-xs font-bold tracking-wider mb-2", children: "Strategy" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                lineNumber: 679,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: "Three-tiered funnel architecture — TOFU broad-reach awareness, MOFU retargeting of site visitors and ad engagers, BOFU high-intent conversion push. Continuous ad creative testing, dynamic bid and budget adjustments, and audience segmentation across demographics, interests, and behavior." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                lineNumber: 682,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 678,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4 pt-2", children: [
              { value: "$2.67", label: "Final Cost Per Lead" },
              { value: "−30%", label: "CPL Reduction" },
              { value: "50", label: "Qualified Leads" },
              { value: "$191", label: "Total Ad Spend" }
            ].map((m, i) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "bg-[hsl(210_45%_14%)] border border-[hsl(188_78%_41%_/_0.2)] rounded-lg p-5 text-center",
                children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400", children: m.value }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                    lineNumber: 699,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-2", children: m.label }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                    lineNumber: 702,
                    columnNumber: 25
                  }, void 0)
                ]
              },
              i,
              true,
              {
                fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
                lineNumber: 695,
                columnNumber: 23
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
              lineNumber: 688,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 668,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 655,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm italic text-muted-foreground mt-6", children: "Industry benchmark for Meta Leads campaigns in 2025: $27.66 CPL (WordStream by LocaliQ). Our campaign achieved $2.67 — more than 10× below benchmark." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 709,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 654,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 648,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 647,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 646,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeader,
        {
          title: "Ready to Stop Wasting Ad Spend and Start",
          titleHighlight: "Generating Real Leads?"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 721,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed text-center mt-6 mb-8", children: "Your competitors are already running Facebook and Instagram Ads in your market. The question isn't whether to advertise on social media — it's whether your campaigns are built to win. Schedule a free strategy session and we'll show you exactly what a properly structured Facebook Ads campaign looks like for your business." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 725,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-background border border-border rounded-xl p-6 mb-8", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-display font-semibold text-foreground mb-4", children: "What you'll get in the session:" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 729,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
          "A review of your current Facebook Ads account (or a blank-slate plan if you're starting fresh)",
          "An analysis of your top local competitors' ad activity",
          "A recommended campaign structure, targeting approach, and creative direction",
          "A realistic projection of what a properly managed campaign can deliver for your business"
        ].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 738,
            columnNumber: 21
          }, void 0),
          item
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 737,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 730,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 728,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mb-4", children: "No contracts. No pressure. Just strategy." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 745,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
          "Schedule Strategy Session",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 749,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 747,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 746,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 744,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 720,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 719,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 718,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      FAQSection,
      {
        faqs,
        title: "FAQs: Your Questions Answered: Facebook & Instagram Ads for Small Businesses",
        subtitle: "Common questions about our Meta Ads management for local service businesses.",
        schemaId: "https://growsmallbiz.io/services/paid-advertising/facebook-ads/#faqpage",
        contactCTA: {
          ...baseContactCTA,
          title: "Have more questions about Meta Ads?",
          description: "We're here to help you build a Meta Ads campaign that drives real leads.",
          tagline: "Let's turn your social ad spend into booked appointments.",
          buttonText: "Schedule Strategy Session"
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 758,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      PersonCTA,
      {
        sectionClassName: "py-24",
        buttonHref: strategyUrl,
        buttonText: "Schedule Strategy Session",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Your Local Market Is Active on Facebook and Instagram Right Now.",
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Are You Showing Up?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
            lineNumber: 780,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 778,
          columnNumber: 11
        }, void 0),
        description: /* @__PURE__ */ jsxDEV(Fragment, { children: "GrowSmallBiz manages Facebook and Instagram Ads exclusively for local service businesses. We know your customer, we know your market, and we know how to build campaigns that turn ad spend into revenue. Schedule your free strategy session — no obligation, no contract pitch, just a direct conversation about what your Meta Ads should be doing for your business." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
          lineNumber: 784,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
        lineNumber: 773,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(ConsultationFormSection, { utmCampaign: "consultation-form", utmMedium: pageMedium }, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 790,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
      lineNumber: 791,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/FacebookAds.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, void 0);
};
export {
  FacebookAds as default
};
