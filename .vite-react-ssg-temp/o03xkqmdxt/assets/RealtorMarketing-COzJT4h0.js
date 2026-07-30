import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { G as GlowCard } from "./glow-card-2Rtno8B6.js";
import { Building, ArrowRight, Phone, XCircle, Zap, CheckCircle2, Globe, Target, MessageSquare, Calendar, Gift, Home, Search, Sparkles, BarChart3, Share2, Calculator, Bot, RefreshCw, Megaphone, Database, DoorOpen, Star, FileBarChart } from "lucide-react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const industryRealtorHero = "/assets/realtor-website-BfWfXpel.webp";
const realtorWebsiteImg = "/assets/realtor-website-BfWfXpel.webp";
const realtorCrmImg = "/assets/realtor-crm-ZP0Ud42b.webp";
const realtorIdxIntegrationImg = "/assets/realtor-idx-integration-g9XOQKuZ.webp";
const realtorLeadGenImg = "/assets/realtor-lead-gen-CBq_mFgF.webp";
const realtorIdxAddonsImg = "/assets/realtor-idx-addons-6rnPY109.webp";
const realtorMarketingImg = "/assets/realtor-marketing-BINSoON3.webp";
const realtorReputationImg = "/assets/realtor-reputation-Dvhwvaja.webp";
const realtorSeoImg = "/assets/realtor-seo-Dcki3NwD.webp";
const realtorPaidAdsImg = "/assets/realtor-paid-ads-D6UwW57U.webp";
const realtorSocialMediaImg = "/assets/realtor-social-media-BmWoHlvh.webp";
const realtorAiReceptionistImg = "/assets/realtor-ai-receptionist-BU7cnu-I.webp";
const realtorConversationalAiImg = "/assets/realtor-conversational-ai-DBG8tefD.webp";
const realtorAiSearchVisibilityImg = "/assets/realtor-ai-search-visibility-BpghoDV8.webp";
const realtorMarketReportsImg = "/assets/realtor-market-reports-BOoSDffW.webp";
const realtorOpenHouseImg = "/assets/realtor-open-house-DGDuu0k2.webp";
const realtorReferralTrackingImg = "/assets/realtor-referral-tracking-DGLmJ_sm.webp";
const subrataHeadshot = "/assets/subrata-guha-headshot-DtmnOd8x.webp";
const attractServices = [
  {
    id: "website",
    icon: Home,
    title: "Real Estate Website",
    description: "Professional IDX-integrated website that showcases listings and captures leads 24/7.",
    features: ["IDX Property Search Integration", "MLS Listing Sync", "Lead Capture Forms", "Mobile-Responsive Design", "Agent/Team Profiles", "Neighborhood Pages"],
    color: "blue",
    image: realtorWebsiteImg
  },
  {
    id: "seo",
    icon: Search,
    title: "AI SEO for Realtors",
    description: "Dominate local search results with AI-powered SEO strategies tailored for real estate.",
    features: ["Local Keyword Optimization", "Google Business Profile Management", "Content Strategy & Blog Posts", "Backlink Building", "Technical SEO Audits", "Competitor Analysis"],
    color: "teal",
    image: realtorSeoImg
  },
  {
    id: "ai-search-visibility",
    icon: Sparkles,
    title: "AI Search Visibility",
    description: "Get recommended when buyers and sellers ask ChatGPT, Google AI, Gemini, or Perplexity for realtor recommendations in your market.",
    features: ["GEO & AEO Optimization", "Brand Mention Tracking", "AI Citation Building", "Review Volume & Consistency Strategy", "Platform Authority Signals", "Competitive AI Positioning"],
    color: "violet",
    image: realtorAiSearchVisibilityImg
  },
  {
    id: "paid-ads",
    icon: BarChart3,
    title: "Paid Ads Management",
    description: "Targeted Google and Meta ads that drive qualified buyer and seller leads to your listings.",
    features: ["Google PPC Campaigns", "Meta (Facebook/Instagram) Ads", "Retargeting Campaigns", "Landing Page A/B Testing", "ROI Tracking & Reporting", "Budget Optimization"],
    color: "orange",
    image: realtorPaidAdsImg
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Organic Social Media Posts",
    description: "Consistent, engaging content that builds your brand and attracts clients organically.",
    features: ["Content Calendar Management", "Property Showcase Posts", "Market Update Graphics", "Community Engagement", "Story & Reel Creation", "Brand Voice Development"],
    color: "indigo",
    image: realtorSocialMediaImg
  }
];
const captureServices = [
  {
    id: "lead-gen",
    icon: Target,
    title: "Lead Generation Tools",
    description: "Capture buyer and seller leads with high-converting funnels and landing pages.",
    features: ["Property Valuation Pages", "Buyer/Seller Lead Funnels", "Seller CMA Reports", "Social Media Ad Integration", "Landing Page Builder", "QR Code Property Flyers", "Open House Sign-in Forms"],
    color: "green",
    image: realtorLeadGenImg
  },
  {
    id: "idx-addons",
    icon: Calculator,
    title: "IDX Add-ons & Enhancements",
    description: "Powerful tools to enhance your property search and keep visitors engaged.",
    features: ["Mortgage Calculator Widget", "School District Maps", "Sold Data Display", "Market Statistics", "Saved Search Alerts", "Zestimate Lookup"],
    color: "amber",
    image: realtorIdxAddonsImg
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call again. AI answers, qualifies leads, and books appointments 24/7.",
    features: ["24/7 Call Answering", "Lead Qualification", "Voice AI for Buyer Property Inquiries", "Appointment Scheduling", "Call Transcription & Summaries", "CRM Integration", "Missed Call Text-Back"],
    color: "violet",
    image: realtorAiReceptionistImg
  },
  {
    id: "conversational-ai",
    icon: Bot,
    title: "Conversational AI",
    description: "Intelligent chatbots that engage visitors, answer property questions, and capture leads.",
    features: ["Website Chat Widget", "Property Q&A Automation", "Lead Capture & Routing", "Multi-language Support", "SMS & Messenger Integration", "Handoff to Human Agent"],
    color: "cyan",
    image: realtorConversationalAiImg
  }
];
const nurtureServices = [
  {
    id: "idx-integration",
    icon: RefreshCw,
    title: "IDX + CRM Integration",
    description: "Seamless data flow from property searches directly into your CRM for intelligent follow-up.",
    features: ["Real-time Lead Sync", "Saved Search Tracking", "White-Label Property Update Emails", "SMS Property Match Alerts", "Property Activity Alerts", "Custom Field Mapping", "Unified Dashboard", "Automated Workflow Triggers"],
    color: "cyan",
    image: realtorIdxIntegrationImg
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Set-and-forget campaigns that nurture leads and keep you top-of-mind.",
    features: ["Drip Email Campaigns", "Birthday/Anniversary Reminders", "Market Update Newsletters", "Listing Alert Notifications", "Review Request Automation", "Social Media Scheduling"],
    color: "pink",
    image: realtorMarketingImg
  },
  {
    id: "crm",
    icon: Database,
    title: "Realtor AI Growth System",
    description: "All-in-one CRM with automated follow-ups, pipeline management, and AI conversations.",
    features: ["Smart Lead Routing", "Automated Follow-ups (SMS, Email, Voicemail)", "Pipeline Management", "Appointment Scheduling", "AI-Powered Conversations", "Missed Call Text-Back"],
    color: "violet",
    image: realtorCrmImg
  }
];
const closeServices = [
  {
    id: "open-house",
    icon: DoorOpen,
    title: "Open House Prospect Capture",
    description: "Digital sign-in routes every open house visitor into your nurture system automatically. No paper sign-in sheets that never get followed up.",
    features: ["Digital Open House Sign-in", "Auto CRM Entry & Tagging", "Instant Follow-up Sequence", "GHL Workflow Integration", "Visitor Analytics Dashboard", "Multi-Property Event Tracking"],
    color: "green",
    image: realtorOpenHouseImg
  },
  {
    id: "reputation",
    icon: Star,
    title: "Reputation & Reviews",
    description: "Systematic review collection after every closing, AI-powered responses to Google reviews, and a reputation that converts browsers into booked consultations.",
    features: ["Google Review Management", "Testimonial Collection", "Review Response Automation", "Rating Widgets for Website"],
    color: "emerald",
    image: realtorReputationImg
  }
];
const retainServices = [
  {
    id: "referral-tracking",
    icon: Gift,
    title: "Referral Tracking & Rewards",
    description: "Track who sends referrals, reward them automatically, and build a referral engine that generates warm pre-sold leads without cold outreach.",
    features: ["Referral Source Tracking", "Automated Reward Triggers", "Past Client Referral Campaigns", "Referral Pipeline Reporting", "Custom Reward Tiers", "Attribution Analytics"],
    color: "orange",
    image: realtorReferralTrackingImg
  },
  {
    id: "market-reports",
    icon: FileBarChart,
    title: "Automated Market Reports",
    description: "Every past client and active lead receives a branded monthly market report automatically — keeping your name in front of your entire database without any manual work.",
    features: ["Branded Monthly Market Reports", "Past Client Re-engagement", "Market Trend & Price Alerts", "Automated Distribution to Full Database", "Neighborhood-Specific Data", "Year-over-Year Comparisons"],
    color: "teal",
    image: realtorMarketReportsImg
  }
];
const stageGroups = [
  { stage: 1, label: "Stage 1 — Attract", services: attractServices, layout: "3+2" },
  { stage: 2, label: "Stage 2 — Capture", services: captureServices, layout: "2x2" },
  { stage: 3, label: "Stage 3 — Nurture", services: nurtureServices, layout: "3" },
  { stage: 4, label: "Stage 4 — Close", services: closeServices, layout: "2" },
  { stage: 5, label: "Stage 5 — Retain & Grow", services: retainServices, layout: "2" }
];
const colorConfig = {
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30" },
  cyan: { bg: "bg-cyan-500", bgLight: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  green: { bg: "bg-green-500", bgLight: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30" },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  teal: { bg: "bg-teal-500", bgLight: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30" },
  orange: { bg: "bg-orange-500", bgLight: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30" },
  indigo: { bg: "bg-indigo-500", bgLight: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30" }
};
const funnelStages = [
  {
    stage: "Attract",
    icon: Globe,
    description: "Drive qualified traffic with IDX-powered website and local SEO",
    tactics: ["Property Search Website", "Local SEO & Google Business", "Social Media Ads", "Open House Marketing"]
  },
  {
    stage: "Capture",
    icon: Target,
    description: "Convert visitors into leads with high-value offers",
    tactics: ["Home Valuation Tool", "Buyer/Seller Funnels", "Lead Capture Forms", "QR Code Flyers"]
  },
  {
    stage: "Nurture",
    icon: MessageSquare,
    description: "Automated follow-up keeps you top-of-mind",
    tactics: ["Drip Email Campaigns", "SMS Follow-ups", "Saved Search Alerts", "Market Updates"]
  },
  {
    stage: "Close",
    icon: Calendar,
    description: "Book appointments and close deals faster",
    tactics: ["AI Appointment Booking", "Pipeline Management", "Contract Automation", "Transaction Coordination"]
  },
  {
    stage: "Retain & Grow",
    icon: Gift,
    description: "Turn every closed deal into the next three",
    tactics: ["Referral Tracking & Rewards System", "Automated Monthly Market Reports to Past Clients", "Past Client Re-engagement Sequences", "Every Closed Deal Becomes a Referral Asset"]
  }
];
const realtorFaqs = [
  {
    question: "What are real estate marketing services and how can they help me as an independent realtor?",
    answer: "Real estate marketing services give you a complete system to attract, capture, nurture, and close leads — without paying Zillow or depending on broker referrals. The goal is to build a pipeline you own permanently, where leads come to you directly and stay in your database regardless of which brokerage you work with."
  },
  {
    question: "Can I actually compete with Zillow using SEO?",
    answer: `Not on broad terms like "homes for sale in Dallas" — Zillow wins those. But there's an entire category of high-intent searches Zillow can never rank for: your name, your neighborhood specialization, hyper-local searches, and trust searches like "top rated realtor in [city] with reviews." Those searches are yours to win — and we build your presence around exactly those terms.`
  },
  {
    question: "How does SEO for realtors compound over time?",
    answer: "Every month your content, reviews, and local citations build on each other. Unlike Zillow where pausing your subscription makes your pipeline disappear overnight, SEO builds equity that belongs to you. Cost per lead drops over time while pipeline strength increases. It's an asset, not a rental."
  },
  {
    question: "Why is an end-to-end system better than using separate vendors?",
    answer: "Separate vendors create gaps — your ads drive traffic but your website doesn't capture it, your CRM doesn't talk to your IDX, your follow-up is manual while competitors respond in seconds. One integrated system means every stage works together: attract, capture, nurture, close, retain. No gaps, no finger-pointing between vendors."
  },
  {
    question: "How does AI follow-up help me close more deals?",
    answer: "Responding within 5 minutes increases conversion by 9x. Our AI responds to every new inquiry instantly — qualifying the prospect and booking the appointment even at 2am on weekends. The meeting is on your calendar before you check your phone."
  }
];
const ServiceCard = ({ service }) => {
  const colors = colorConfig[service.color];
  return /* @__PURE__ */ jsxDEV(GlowCard, { className: `overflow-hidden animate-fade-up group ${colors.border}`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative h-44 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("img", { src: service.image, alt: service.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 315,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: `absolute bottom-4 left-4 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsxDEV(service.icon, { className: "w-6 h-6 text-white" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 316,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: service.title }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 321,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm mb-5", children: service.description }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 322,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: [
        service.features.slice(0, 4).map((feature, j) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: `w-4 h-4 ${colors.text} shrink-0 mt-0.5` }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 326,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: feature }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, void 0)
        ] }, j, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 325,
          columnNumber: 13
        }, void 0)),
        service.features.length > 4 && /* @__PURE__ */ jsxDEV("li", { className: "text-sm text-muted-foreground/70 pl-6", children: [
          "+",
          service.features.length - 4,
          " more features"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
    lineNumber: 312,
    columnNumber: 5
  }, void 0);
};
const RealtorMarketing = () => {
  const { strategySessionUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Real Estate Marketing Solutions for Realtors | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Realtor marketing solutions by GrowSmallBiz: Get an AI-powered CRM, lead generation, and IDX websites. Schedule Strategy Session!" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 346,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "real estate marketing, realtor lead generation, IDX websites, AI-powered CRM, marketing solutions for realtors, client engagement strategies, brand ownership, lead capture tools" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/professional-services/marketing-for-realtors/" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 348,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI-Driven Growth Solutions for Local Service Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 349,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
      lineNumber: 344,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Real Estate Marketing Solutions",
        serviceType: "Digital Marketing for Realtors",
        description: "IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation for realtors.",
        url: "/professional-services/marketing-for-realtors/",
        breadcrumbs: [
          { name: "Professional Services", url: "/professional-services/" },
          { name: "Realtor Marketing", url: "/professional-services/marketing-for-realtors/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 352,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
      lineNumber: 362,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "pt-20", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-24 lg:py-32 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxDEV("img", { src: industryRealtorHero, alt: "Real estate marketing for realtors", className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 368,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/85" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 369,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 367,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "hero-glow absolute inset-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 371,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV(Building, { className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 376,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-primary text-sm font-medium", children: "For Independent Residential Realtors" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 375,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up bg-gradient-heading bg-clip-text text-transparent", style: { animationDelay: "0.1s" }, children: "Real Estate Marketing Services Built for Realtor's Growth — Not Zillow" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 380,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.2s" }, children: "GrowSmallBiz gives independent residential realtors a complete end-to-end marketing system — attract prospects, capture their information, nurture them until they're ready, and close them into clients. Not disconnected tools. One system. Built for you." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 384,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.3s" }, children: [
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
              "Schedule Strategy Call",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 392,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 390,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 389,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 397,
                columnNumber: 21
              }, void 0),
              " Call +1 (925) 886-3724"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 396,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 395,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 388,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary font-medium mt-4 animate-fade-up", style: { animationDelay: "0.3s" }, children: "No long-term contracts. No per-lead fees. No Zillow." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 402,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up", style: { animationDelay: "0.4s" }, children: [
            { value: "100%", label: "Lead Exclusivity" },
            { value: "5-Stage", label: "End-to-End System" },
            { value: "9x", label: "Higher Conversion Within 5 Min Response" },
            { value: "24/7", label: "AI Lead Capture" }
          ].map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-3xl md:text-4xl font-display font-bold text-primary", children: stat.value }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 415,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-muted-foreground mt-1", children: stat.label }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 416,
              columnNumber: 21
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 414,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 374,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 373,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 366,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Fed Up Paying Zillow for Leads That Vanish Overnight?" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 428,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 427,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto space-y-5 mb-12", children: [
          "You're writing a check to Zillow every month for leads shared with four other agents simultaneously",
          "The moment you pause Zillow your pipeline disappears overnight",
          "Your broker keeps the client relationships when you leave",
          "You've spent years building someone else's pipeline — not your own",
          "Buyers are searching for homes on Zillow instead of your website",
          "Sellers check their home value on Zillow before they ever contact you",
          "You miss inquiries after hours because no one is available to respond instantly"
        ].map((point, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV(XCircle, { className: "w-5 h-5 text-destructive shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 444,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: point }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 445,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 443,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 433,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-semibold text-foreground mb-6", children: [
            "None of that is a lead problem. It's a ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-primary", children: "brand ownership problem" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 452,
              columnNumber: 56
            }, void 0),
            ". We fix it."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 451,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
            "Schedule Strategy Call",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 457,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 455,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 454,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 450,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 426,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 425,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto mb-20", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center bg-gradient-heading bg-clip-text text-transparent", children: "The Lead Dependency Trap Is Costing You More Than You Think" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 469,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-muted-foreground space-y-4 text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Most independent realtors get leads one of three ways: broker referrals — pre-filtered, shared, and stripped of commission before they reach you. Zillow and Realtor.com — you pay $500–$1,500/month for leads shared with 4 other agents simultaneously. Cold prospecting — you trade time for every single opportunity." }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 473,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Here's the truth: ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "none of those belong to you." }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 477,
                columnNumber: 37
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 476,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "The moment you stop paying Zillow, the leads stop. The moment you leave your brokerage, the relationships stay behind. At $1,000/month, Zillow leads cost you $12,000/year — shared with multiple agents at once. You're not buying leads. You're renting a spot in a bidding war." }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 472,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 468,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center", children: "Zillow Premier Agent vs. GrowSmallBiz" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 487,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-white/10 rounded-lg overflow-hidden animate-fade-up min-w-[540px]", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 border-b-2 border-teal-400/60", style: { backgroundColor: "#0A1E3D" }, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 495,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4 text-center font-bold text-white border-x border-white/6", style: { backgroundColor: "#0A1E3D" }, children: "Zillow Premier Agent" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 496,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4 text-center font-bold text-teal-400", style: { backgroundColor: "#0A1E3D" }, children: "GrowSmallBiz" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 497,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 494,
              columnNumber: 19
            }, void 0),
            [
              ["Lead exclusivity", "❌ Shared with 3–5 agents", "✅ 100% yours"],
              ["Monthly cost", "❌ $500–$1,500+/mo forever", "✅ Investment that compounds"],
              ["Lead ownership", "❌ Zillow's database", "✅ Your database, always"],
              ["Lead quality", "❌ Unverified, early funnel", "✅ Inbound, high intent"],
              ["Brand on the lead", "❌ Zillow's brand", "✅ Your name, your brand"],
              ["Follow-up speed", "❌ Manual — you vs. 4 others", "✅ AI responds in seconds"],
              ["Automated nurturing", "❌ None", "✅ Market reports + alerts"],
              ["CRM included", "❌ No", "✅ Yes, built in"],
              ["SEO value built", "❌ Zero", "✅ Grows every month"],
              ["If you pause/cancel", "❌ Pipeline disappears instantly", "✅ Your assets stay with you"],
              ["Portability", "❌ Leads stay with Zillow", "✅ Everything goes with you"]
            ].map(([feature, zillow, gsb], i) => /* @__PURE__ */ jsxDEV("div", { className: `grid grid-cols-3 border-b border-white/6 last:border-b-0 hover:transition-colors duration-150`, style: { backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)" }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "rgba(43,163,160,0.08)", onMouseLeave: (e) => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-3.5 text-white font-semibold text-sm", style: { backgroundColor: "rgba(255,255,255,0.04)" }, children: feature }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 514,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-3.5 text-sm text-muted-foreground border-x border-white/6", children: zillow }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 515,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-3.5 text-sm text-foreground", children: gsb }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 516,
                columnNumber: 23
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 513,
              columnNumber: 21
            }, void 0))
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 491,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-center mt-8 text-xl font-bold text-primary", children: "Zillow works for Zillow. GrowSmallBiz works for you." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 522,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 486,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 466,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 465,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center bg-gradient-heading bg-clip-text text-transparent", children: "The Problem With Broker Leads Nobody Talks About" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 533,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 mb-10", children: [
            { bold: "They're not exclusive.", rest: " Same lead, multiple agents. First to call wins — that's not a system, that's a race." },
            { bold: "They're pre-filtered.", rest: " Top producers get first access. You get what's left." },
            { bold: "They arrive cold.", rest: " No context, no qualification. A name and a phone number." },
            { bold: "The relationship belongs to the brokerage.", rest: " When you leave, those clients stay behind." },
            { bold: "Your brand stays invisible.", rest: " Clients know your broker's name first — not yours." }
          ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
            /* @__PURE__ */ jsxDEV(XCircle, { className: "w-5 h-5 text-destructive shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 546,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: item.bold }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 547,
                columnNumber: 58
              }, void 0),
              item.rest
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 547,
              columnNumber: 21
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 545,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 537,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-center text-lg font-bold text-foreground mb-16", children: "The broker lead model was designed to benefit the brokerage. Not the agent." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 552,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 532,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center", children: "Broker Dependency vs. Building With GrowSmallBiz" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 559,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-white/10 rounded-lg overflow-hidden animate-fade-up min-w-[540px]", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 border-b-2 border-teal-400/60", style: { backgroundColor: "#0A1E3D" }, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 566,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4 text-center font-bold text-white border-x border-white/6", style: { backgroundColor: "#0A1E3D" }, children: "Broker Dependency" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 567,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4 text-center font-bold text-teal-400", style: { backgroundColor: "#0A1E3D" }, children: "GrowSmallBiz" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 568,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 565,
              columnNumber: 19
            }, void 0),
            [
              ["Lead quality", "❌ Cold, unqualified, pre-screened", "✅ Inbound, motivated, intent-driven"],
              ["Lead exclusivity", "❌ Distributed across the office", "✅ Direct to you only"],
              ["Brand visibility", "❌ Broker's name first", "✅ Your name, your presence"],
              ["Online identity", "❌ Tied to broker's website", "✅ Your own domain and profile"],
              ["When you change firms", "❌ Start from zero", "✅ Take everything with you"],
              ["Lead nurturing", "❌ Manual, falls through cracks", "✅ Automated 24/7"],
              ["Market reports", "❌ Broker sends those", "✅ Your name on every one"],
              ["Long-term equity", "❌ Built for the brokerage", "✅ Built for you"],
              ["Referrals", "❌ Stay with the brokerage when you leave", "✅ Follow you permanently"]
            ].map(([feature, broker, gsb], i) => /* @__PURE__ */ jsxDEV("div", { className: `grid grid-cols-3 border-b border-white/6 last:border-b-0 hover:transition-colors duration-150`, style: { backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)" }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "rgba(43,163,160,0.08)", onMouseLeave: (e) => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-3.5 text-white font-semibold text-sm", style: { backgroundColor: "rgba(255,255,255,0.04)" }, children: feature }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 582,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-3.5 text-sm text-muted-foreground border-x border-white/6", children: broker }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 583,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-3.5 text-sm text-foreground", children: gsb }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 584,
                columnNumber: 23
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 581,
              columnNumber: 21
            }, void 0))
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 564,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 563,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-center mt-8 text-xl font-bold text-primary", children: "Every lead you close through your broker builds their equity — not yours." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 590,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 558,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 531,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 530,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-10 bg-gradient-heading bg-clip-text text-transparent", children: "Why Most Real Estate Marketing Services Fail" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 601,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-muted-foreground text-lg leading-relaxed space-y-6", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Most marketing agencies sell realtors pieces of a solution. One vendor builds your website. Another manages your ads. A third sends emails. None of them talk to each other. None of them know what happens after the lead clicks." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 606,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-bold text-primary", children: "Traffic is not the goal. Closed deals are the goal." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 609,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "Most marketing stops at the click." }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 613,
              columnNumber: 19
            }, void 0),
            " GrowSmallBiz builds what comes next — ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-teal-400", children: "one connected system, one team, one goal: more closed deals." }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 613,
              columnNumber: 137
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 612,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 605,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 600,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 599,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 598,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "services", className: "py-24 lg:py-32 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4", children: [
            /* @__PURE__ */ jsxDEV(Zap, { className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 625,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-primary text-sm font-medium", children: "Complete Solution" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 626,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 624,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Everything You Need to Dominate Your Real Estate Market" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 628,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 623,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-3xl mx-auto text-center mb-16", children: "Whether you work with buyers, sellers, or both — every stage of this system is built to attract, capture, nurture, close, and grow your real estate business." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 633,
          columnNumber: 13
        }, void 0),
        stageGroups.map((group, idx) => /* @__PURE__ */ jsxDEV("div", { className: "mb-16 last:mb-0", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/30", children: /* @__PURE__ */ jsxDEV("span", { className: "text-teal-400 text-sm font-semibold tracking-wide", children: group.label }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 641,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 640,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 639,
            columnNumber: 17
          }, void 0),
          group.layout === "3+2" ? /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: group.services.slice(0, 3).map((service) => /* @__PURE__ */ jsxDEV(ServiceCard, { service }, service.id, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 648,
              columnNumber: 68
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 647,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]", children: group.services.slice(3).map((service) => /* @__PURE__ */ jsxDEV(ServiceCard, { service }, service.id, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 652,
              columnNumber: 67
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 651,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 650,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 646,
            columnNumber: 19
          }, void 0) : group.layout === "2x2" ? /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]", children: group.services.slice(0, 2).map((service) => /* @__PURE__ */ jsxDEV(ServiceCard, { service }, service.id, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 660,
              columnNumber: 70
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 659,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 658,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]", children: group.services.slice(2).map((service) => /* @__PURE__ */ jsxDEV(ServiceCard, { service }, service.id, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 665,
              columnNumber: 67
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 664,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 663,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 657,
            columnNumber: 19
          }, void 0) : group.layout === "3" ? /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: group.services.map((service) => /* @__PURE__ */ jsxDEV(ServiceCard, { service }, service.id, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 671,
            columnNumber: 54
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 670,
            columnNumber: 19
          }, void 0) : /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]", children: group.services.map((service) => /* @__PURE__ */ jsxDEV(ServiceCard, { service }, service.id, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 676,
            columnNumber: 56
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 675,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 674,
            columnNumber: 19
          }, void 0)
        ] }, idx, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 638,
          columnNumber: 15
        }, void 0))
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 622,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 621,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center bg-gradient-heading bg-clip-text text-transparent", children: "Show Up When Buyers Ask ChatGPT or Google AI" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 691,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12", children: [
          "The next generation of home buyers isn't just Googling — they're asking AI. Here's a search happening right now: ",
          /* @__PURE__ */ jsxDEV("em", { children: '"Who is the best realtor in [city] for first-time home buyers?"' }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 695,
            columnNumber: 130
          }, void 0),
          " — typed not into Google, but into ChatGPT, Gemini, or Perplexity. Most realtors have no idea their AI visibility even exists. Most competing agencies aren't addressing it at all."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 694,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 bg-secondary/50 border-b border-border", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 font-bold text-foreground", children: "AI Platform" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 700,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 font-bold text-foreground border-x border-border", children: "What Buyers Ask" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 701,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 font-bold text-foreground", children: "Who Gets Recommended" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 702,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 699,
            columnNumber: 17
          }, void 0),
          [
            ["ChatGPT", '"Best realtor for first-time buyers in [city]"', "Agents with strong brand presence & authoritative content"],
            ["Google AI Mode", '"Who are the top-rated realtors near me?"', "Agents with optimized GBP, reviews & local signals"],
            ["Perplexity", '"Which realtors specialize in [neighborhood]?"', "Agents with neighborhood-specific content & citations"],
            ["Gemini", '"Trusted realtor in [city] with 5-star reviews"', "Agents with consistent reviews across platforms"]
          ].map(([platform, query, rec], i) => /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 font-semibold text-primary text-sm", children: platform }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 711,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 text-sm text-muted-foreground italic border-x border-border", children: query }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 712,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 text-sm text-foreground", children: rec }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 713,
              columnNumber: 21
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 710,
            columnNumber: 19
          }, void 0))
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 698,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg mt-8 text-center max-w-3xl mx-auto", children: [
          "While your competitors are invisible in AI search, your name appears when motivated buyers and sellers ask AI assistants for realtor recommendations in your market. ",
          /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "The agents who establish AI visibility now will own this channel before it becomes competitive." }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 719,
            columnNumber: 182
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 718,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 690,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 689,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 688,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "how-it-works", className: "py-24 lg:py-32 bg-card/50 scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Your Client Journey, Automated" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 729,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "From first click to closing day, every touchpoint is optimized for conversion" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 732,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 728,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-6", children: funnelStages.map((stage, i) => /* @__PURE__ */ jsxDEV(GlowCard, { className: "relative p-6 animate-fade-up", style: { animationDelay: `${i * 0.12}s` }, children: [
          i < funnelStages.length - 1 && /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 739,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(stage.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 742,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 741,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-primary font-medium mb-2", children: [
            "Stage ",
            i + 1
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 744,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: stage.stage }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 745,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mb-4", children: stage.description }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 746,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: stage.tactics.map((tactic, j) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 750,
              columnNumber: 25
            }, void 0),
            tactic
          ] }, j, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 749,
            columnNumber: 23
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 747,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 737,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 735,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 727,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 726,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center bg-gradient-heading bg-clip-text text-transparent", children: "Can I Actually Compete With Zillow on Google?" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 767,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-4", children: `The honest truth: You cannot beat Zillow on broad search terms. "Homes for sale in Dallas" — Zillow wins. But here's what they can never own:` }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 770,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground text-center mb-8", children: [
          "Searches Zillow ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-primary", children: "Can't Touch" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 774,
            columnNumber: 33
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 773,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 bg-secondary/50 border-b border-border", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 font-bold text-foreground", children: "Search Type" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 779,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 font-bold text-foreground border-x border-border", children: "Example" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 780,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 font-bold text-foreground", children: "Who Wins" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 781,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 778,
            columnNumber: 17
          }, void 0),
          [
            ["Your name", '"Sarah Johnson realtor Austin"', "✅ You — always"],
            ["Neighborhood expert", '"best realtor in Barton Hills Austin"', "✅ You — with the right SEO"],
            ["Hyper-local intent", '"realtor for first-time buyers in [zip]"', "✅ You — Zillow doesn't specialize"],
            ["Niche-specific", '"luxury condo specialist downtown Chicago"', "✅ You — Zillow is generic"],
            ['Local pack "near me"', "Map pack results", "✅ You — via Google Business Profile"],
            ["Trust searches", '"top rated realtor [city] reviews"', "✅ You — with reputation management"],
            ["AI assistant queries", '"best realtor near me" in ChatGPT/Gemini', "✅ You — with AI visibility optimization"]
          ].map(([type, example, winner], i) => /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 text-sm font-medium text-foreground", children: type }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 793,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 text-sm text-muted-foreground italic border-x border-border", children: example }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 794,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 text-sm text-primary font-medium", children: winner }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 795,
              columnNumber: 21
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 792,
            columnNumber: 19
          }, void 0))
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 777,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center mt-8 text-lg font-bold text-foreground", children: "Zillow is a marketplace, not a person. They can't rank for searches that look for a specific agent, neighborhood specialist, or trusted local name." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 800,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 766,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 765,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 764,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center bg-gradient-heading bg-clip-text text-transparent", children: "We Know You've Been Burned Before" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 811,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          { bold: "No vanity metrics.", rest: " Leads, calls, and booked appointments — not impressions." },
          { bold: "No long-term lock-in.", rest: " We earn your business every month." },
          { bold: "No fragmented vendors.", rest: " One system, one team, one accountability." },
          { bold: "Built for solo agents and small teams.", rest: " Not brokerages. Not franchises. You." }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 animate-fade-up", style: { animationDelay: `${i * 0.08}s` }, children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 822,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-foreground", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: item.bold }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 824,
              columnNumber: 23
            }, void 0),
            item.rest
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 823,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 821,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 814,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 810,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 809,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 808,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          faqs: realtorFaqs,
          contactCTA: {
            title: "Have more questions about owning your realtor pipeline?",
            description: "Tell us your market, current lead sources, and goals. We'll build you a custom end-to-end roadmap — free, no obligation.",
            tagline: "Let's build your lead generation machine.",
            name: "Subrata Guha",
            role: "Founder, GrowSmallBiz",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategySessionUrl,
            image: subrataHeadshot
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 834,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 850,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300", children: /* @__PURE__ */ jsxDEV("img", { src: subrataHeadshot, alt: "Subrata Guha", className: "w-full h-full object-cover" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 857,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 856,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "mt-4 text-lg font-display font-semibold text-foreground", children: "Subrata Guha" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 859,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: "Founder, GrowSmallBiz" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 860,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 855,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Ready to Own Your Pipeline?" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 863,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-muted-foreground mb-6", children: "No long-term contracts. No per-lead fees. No Zillow. No fragmented vendors." }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 866,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-muted-foreground mb-8", children: "Tell us your market, your goals, and your current lead sources. We'll build you a custom end-to-end roadmap — free, no obligation." }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 869,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
              "Schedule Strategy Call",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 875,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 873,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 872,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-muted-foreground", children: [
              "Or call us directly:",
              " ",
              /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", className: "text-primary font-medium hover:underline", children: "+1 (925) 886-3724" }, void 0, false, {
                fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
                lineNumber: 880,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
              lineNumber: 878,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
            lineNumber: 862,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 854,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 853,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 852,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
          lineNumber: 851,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 849,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
        lineNumber: 892,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
      lineNumber: 364,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
      lineNumber: 895,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/industries/RealtorMarketing.tsx",
    lineNumber: 343,
    columnNumber: 5
  }, void 0);
};
export {
  RealtorMarketing as default
};
