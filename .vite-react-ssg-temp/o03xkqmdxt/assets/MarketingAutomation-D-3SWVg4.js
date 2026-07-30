import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { useEffect, useState } from "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { useLocation, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { MousePointerClick, FlaskConical, BarChart3, Sparkles, MessageSquare, XCircle, Bot, ArrowUp, Play, ArrowRight, Shield, Inbox, Zap, Monitor, Mail, CreditCard, Share2, CalendarCheck, TrendingUp, ClipboardList, Star, PhoneCall, Users, Layers, Lock, MessagesSquare, Megaphone, PenTool, LayoutTemplate, Heart, Home, Thermometer, Wrench, TreePine, Bug, Paintbrush, ShieldCheck, Stethoscope, Activity, Eye, Dumbbell, Scale, FileText, Car, Briefcase, DollarSign, Calculator } from "lucide-react";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { V as VideoJsonLd } from "./VideoJsonLd-DVN-Oseo.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { F as FeatureCard, P as PricingGrid } from "./PricingCard-B6PzZZbP.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { P as PersonCTA } from "./PersonCTA-B97lddt0.js";
import { a as createServiceContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { I as IntegrationsSection } from "./IntegrationsSection-VF7ajzub.js";
import { B as Button } from "./button-Co-CyCVS.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
const funnels = [
  {
    emoji: "🔧",
    title: "HVAC & Plumbing",
    subtitle: "Marketing Funnel",
    steps: [
      { label: "Lead Capture" },
      { label: "Quote Request" },
      { label: "Scheduling" },
      { label: "Service" },
      { label: "Review" }
    ],
    color: "#4466DD",
    colorLight: "#5577EE"
  },
  {
    emoji: "💆",
    title: "Med Spa",
    subtitle: "Marketing Funnel",
    steps: [
      { label: "Awareness" },
      { label: "Interest" },
      { label: "Booking" },
      { label: "Treatment" },
      { label: "Loyalty" }
    ],
    color: "#D4587A",
    colorLight: "#E06990"
  },
  {
    emoji: "🏡",
    title: "Real Estate",
    subtitle: "Marketing Funnel",
    steps: [
      { label: "Property Search" },
      { label: "Inquiry" },
      { label: "Showing" },
      { label: "Offer" },
      { label: "Closing" }
    ],
    color: "#44B89A",
    colorLight: "#55CCAA"
  }
];
const bottomFeatures = [
  { icon: MousePointerClick, title: "Drag & Drop Builder", subtitle: "No coding required" },
  { icon: FlaskConical, title: "A/B Testing", subtitle: "Optimize conversions" },
  { icon: BarChart3, title: "Analytics Dashboard", subtitle: "Track every metric" }
];
const FunnelCard = ({ funnel }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1a2233] border border-white/10 rounded-2xl p-6 flex flex-col items-center", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-4xl mb-2", children: funnel.emoji }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground", children: funnel.title }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mb-6", children: funnel.subtitle }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-2 w-full max-w-[280px]", children: funnel.steps.map((step, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center w-full", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "w-full py-3 rounded-full text-center text-sm font-semibold text-white",
          style: {
            background: `linear-gradient(135deg, ${funnel.color}, ${funnel.colorLight})`,
            width: `${100 - i * 5}%`
          },
          children: step.label
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
          lineNumber: 78,
          columnNumber: 13
        },
        void 0
      ),
      i < funnel.steps.length - 1 && /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground text-xs my-1", children: "↓" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 88,
        columnNumber: 15
      }, void 0)
    ] }, i, true, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mt-6 pt-4 border-t border-white/10 w-full", children: [
      /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-4 h-4 text-yellow-400" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground", children: "Optimized for high conversion" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, void 0);
};
const FunnelBuilderSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-12 bg-gradient-to-b from-primary/5 to-transparent", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeader,
      {
        subtitle: "FUNNEL BUILDER & UNLIMITED FUNNELS",
        title: "High-Converting Funnels for",
        titleHighlight: "Every Industry",
        description: "Build unlimited sales funnels with our drag-and-drop builder. Pre-designed templates optimized for your specific business niche."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 106,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10", children: funnels.map((funnel, index) => /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up", style: { animationDelay: `${index * 0.15}s` }, children: /* @__PURE__ */ jsxDEV(FunnelCard, { funnel }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 116,
      columnNumber: 15
    }, void 0) }, index, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-8 max-w-4xl mx-auto", children: bottomFeatures.map((feat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center animate-fade-up", style: { animationDelay: `${(i + 3) * 0.1}s` }, children: [
      /* @__PURE__ */ jsxDEV(feat.icon, { className: "w-7 h-7 text-primary mx-auto mb-3" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-foreground text-base", children: feat.title }, void 0, false, {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 125,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: feat.subtitle }, void 0, false, {
        fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
        lineNumber: 126,
        columnNumber: 15
      }, void 0)
    ] }, i, true, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 123,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/sections/FunnelBuilderSection.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, void 0);
};
const AutopilotCTASection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-12 bg-gradient-to-br from-primary/10 via-background to-primary/5", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 text-center max-w-3xl", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up bg-gradient-heading bg-clip-text text-transparent", children: "See How Your Sales Can Run on Autopilot" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-10 animate-fade-up", style: { animationDelay: "0.1s" }, children: "Experience how AI instantly responds to leads, books appointments for you, follows up automatically, and keeps your pipeline moving 24/7." }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.2s" }, children: [
      /* @__PURE__ */ jsxDEV(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "https://lp.growsmallbiz.io/ai-client-growth-system", target: "_blank", rel: "noopener noreferrer", children: "Sign Up" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "https://lp.growsmallbiz.io/ai-client-growth-system-demo", target: "_blank", rel: "noopener noreferrer", children: "Schedule a Demo" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground animate-fade-up", style: { animationDelay: "0.3s" }, children: [
      /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-4 h-4 text-primary" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, void 0),
        "24/7 Live Chat Support"
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(XCircle, { className: "w-4 h-4 text-primary" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, void 0),
        "Cancel anytime"
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/sections/AutopilotCTASection.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, void 0);
};
const heroImage = "/assets/marketing-automation-hero-hLEm8mam.webp";
const whatYouGetSpeed = "/assets/what-you-get-speed-eSfljtYT.svg";
const whatYouGetCalendar = "/assets/what-you-get-calendar-DpIubMhG.svg";
const whatYouGetCalls = "/assets/what-you-get-calls-CUWy4tse.svg";
const whatYouGetSmart = "/assets/what-you-get-smart-DydYAsP7.svg";
const whatYouGetPerformance = "/assets/what-you-get-performance-B9yPIFTW.svg";
const whatYouGetAutopilot = "/assets/what-you-get-autopilot-XBgO8WsW.svg";
const demoVideos = [
  { title: "Universal Inbox", slug: "universal-inbox", icon: Inbox, color: "hsl(195 80% 30%)" },
  { title: "Workflow Automations", slug: "workflow-automations", icon: Zap, color: "hsl(35 90% 45%)" },
  { title: "Website Builder", slug: "website-builder", icon: Monitor, color: "hsl(210 60% 35%)" },
  { title: "Email & SMS Marketing", slug: "email-sms-marketing", icon: Mail, color: "hsl(160 60% 30%)" },
  { title: "Integrated Payments", slug: "integrated-payments", icon: CreditCard, color: "hsl(260 50% 40%)" },
  { title: "Social Media Planner", slug: "social-media-planner", icon: Share2, color: "hsl(330 55% 40%)" },
  { title: "Calendar Scheduling", slug: "calendar-scheduling", icon: CalendarCheck, color: "hsl(180 65% 28%)" },
  { title: "Sales Tracker", slug: "sales-tracker", icon: TrendingUp, color: "hsl(145 55% 32%)" },
  { title: "Forms & Surveys", slug: "forms-surveys", icon: ClipboardList, color: "hsl(220 55% 42%)" },
  { title: "Reviews", slug: "reviews", icon: Star, color: "hsl(40 85% 45%)" },
  { title: "Call Tracking", slug: "call-tracking", icon: PhoneCall, color: "hsl(0 60% 42%)" },
  { title: "CRM", slug: "crm", icon: Users, color: "hsl(200 65% 35%)" },
  { title: "Sales Funnels", slug: "sales-funnels", icon: Layers, color: "hsl(270 45% 38%)" },
  { title: "Memberships", slug: "memberships", icon: Lock, color: "hsl(15 70% 40%)" },
  { title: "Webchat", slug: "webchat", icon: MessagesSquare, color: "hsl(175 60% 30%)" },
  { title: "Generate Leads Live", slug: "generate-leads", icon: Megaphone, color: "hsl(50 75% 40%)" }
];
const sectionNav = [
  { id: "why-choose", label: "Why Choose Us" },
  { id: "what-you-get", label: "What You Get" },
  { id: "ai-features", label: "AI Features" },
  { id: "funnel-builder", label: "Funnels" },
  { id: "industries", label: "Industries" },
  { id: "integrations", label: "Integrations" },
  { id: "demo-videos", label: "Demo Videos" },
  { id: "ready-to-talk", label: "Schedule Demo" },
  { id: "testimonials", label: "Testimonials" },
  { id: "pricing", label: "Pricing" },
  { id: "growth-suite", label: "Growth Suite" },
  { id: "faq", label: "FAQ" }
];
const contactCTA = createServiceContactCTA(
  "Marketing Automation",
  "Let's automate your growth together."
);
const faqs = [
  {
    question: "What Kind Of Support Do You Provide?",
    answer: "Support is at the heart of everything we do. We offer 24/7 email support as well as an easy-to-navigate comprehensive tutorial library for quick answers to your questions."
  },
  {
    question: "How Secure Is My Customer Data?",
    answer: "Data privacy and security is every company's obligation. That's why we ensure compliance with all governing laws and regulations, as well as provide extra protection against security breaches."
  },
  {
    question: "Can I Cancel My Account At Any Time?",
    answer: "You can cancel at any time. No need to worry about obligations or contracts."
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer: "Yes, you can switch between plans whenever you want. Your account gives you full control to upgrade or downgrade as needed."
  },
  {
    question: "Does the platform come with a website and funnel builder?",
    answer: "Yes, it includes both. You can cancel other funnel-building tools and immediately reduce costs. Hosting for your website is also included at no extra charge."
  },
  {
    question: "Does it work with Zapier?",
    answer: "Yes. Once you join, you receive access to our private Zapier integration, allowing you to connect with thousands of other apps."
  },
  {
    question: "How Does Your Automation Work?",
    answer: "We provide comprehensive automation that will execute and automate workflows across your high-value business processes. Our smart campaigns will put SMS, Email, Web Chat, Phone Calls, and Calendar Appointments on autopilot."
  },
  {
    question: "What are data charges and how much should I expect to spend each month?",
    answer: "Data charges apply to calling, texting, and emails. Texts cost about $0.012 per segment, outbound calls cost about $0.021 per minute, and emails cost about $0.0014 each. Most users spend around $20 monthly on data usage. All real-time rates are displayed clearly inside your dashboard."
  },
  {
    question: "Are there setup fees or contracts?",
    answer: "There is a required setup fee which covers one-on-one onboarding, technical setup, domain configuration, list imports, and more. Your first payment includes the setup fee, followed by regular monthly billing. There are no long-term contracts."
  },
  {
    question: "Do I own my data?",
    answer: "Absolutely. Any data you add is fully yours. We do not access, rent, sell, or share your information. Your data remains private and protected at all times."
  },
  {
    question: "Is there a mobile app I can use?",
    answer: "Yes. We have mobile apps for both iOS and Android. Simply search in your app store and log in using your existing account credentials."
  }
];
const pricingPlans = [
  {
    name: "Essentials",
    monthlyPrice: 297,
    annualPrice: 2970,
    description: "Run Your Entire Business in One Place",
    features: [
      "Smart CRM & Unified Inbox",
      "Sales Pipelines",
      "Calendars & Appointment Scheduling",
      "Funnels, Websites & Forms Builder",
      "Email & Social Media Marketing",
      "Memberships & Courses",
      "Invoicing, Proposals & Contracts",
      "Workflow Automations",
      "Reputation Management"
    ],
    cta: "Get Started",
    monthlyCtaLink: "https://lp.growsmallbiz.io/check-out-page---essential",
    annualCtaLink: "https://lp.growsmallbiz.io/check-out-page---essential",
    note: "",
    cardStyle: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)"
  },
  {
    name: "Growth",
    monthlyPrice: 497,
    annualPrice: 4970,
    description: "Scale Conversations with AI",
    features: [
      "Everything in Essentials +",
      "AI Receptionist",
      "Website AI Livechat",
      "Conversational AI across SMS & Social Media Channels"
    ],
    cta: "Get Started",
    monthlyCtaLink: "https://lp.growsmallbiz.io/check-out-page---growth",
    annualCtaLink: "https://lp.growsmallbiz.io/check-out-page---growth",
    popular: true,
    note: "",
    cardStyle: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)"
  }
];
const whyChooseFeatures = [
  {
    icon: Bot,
    title: "AI That Works Like a 24/7 Sales Assistant",
    description: "Instant follow-up, smart lead nurturing, appointment setting, and automated responses — all handled by AI, so you never miss a lead again."
  },
  {
    icon: Layers,
    title: "Everything in One System",
    description: "Run your sales, communication, and follow-up from a single unified platform. No more switching between scattered tools."
  },
  {
    icon: Zap,
    title: "Fast & Easy to Use",
    description: "Launch pages, forms, and campaigns in minutes. Our intuitive interface removes all the clutter so you can focus on strategy, not setup."
  }
];
const benefitFeatures = [
  {
    image: whatYouGetSpeed,
    title: "Double Your Speed To Lead",
    label: "Speed",
    description: "Streamline all your communication in one place so that you can double your speed to lead and fill your pipeline!"
  },
  {
    image: whatYouGetCalendar,
    title: "Instantly Fill Your Calendar",
    label: "Calendar",
    description: "GrowSmallBiz schedules appointments for you automatically so that you can close more deals!"
  },
  {
    image: whatYouGetCalls,
    title: "Drive More Phone Calls",
    label: "Calls",
    description: "Automatically route calls and convert inbound leads to sales opportunities by connecting you directly with leads who want to talk right now!"
  },
  {
    image: whatYouGetSmart,
    title: "Build SMART Nurture Campaigns",
    label: "SMART",
    description: "Get up to an 80% response rate with SMART automation campaigns that interact across multiple channels!"
  },
  {
    image: whatYouGetPerformance,
    title: "Gain Key Insights Into Performance",
    label: "Performance",
    description: "Easily see how well your campaigns and sales team are performing so that you can increase your opportunities and sales!"
  },
  {
    image: whatYouGetAutopilot,
    title: "Autopilot for Your Business",
    description: "Put SMS, Email, Web Chat, Phone Calls, and much more on complete autopilot so you can focus on what matters most.",
    textAbove: true
  }
];
const aiFeatures = [
  {
    icon: Zap,
    title: "AI Workflows & Automation",
    description: "Automate follow-ups and tasks with intelligent, self-optimizing workflows."
  },
  {
    icon: CalendarCheck,
    title: "AI Appointment Booking",
    description: "Smart conversations that guide prospects into your calendar automatically."
  },
  {
    icon: MessageSquare,
    title: "AI Follow-Up",
    description: "Consistent outreach across SMS and email to revive cold leads and boost conversions."
  },
  {
    icon: Bot,
    title: "AI Voice & Chat Assistants",
    description: "Human-like interactions that answer questions, qualify leads, and keep conversations moving."
  },
  {
    icon: PenTool,
    title: "AI Content Generation",
    description: "Auto-create messages, emails, and campaigns in seconds."
  },
  {
    icon: LayoutTemplate,
    title: "AI Funnel Builder",
    description: "Build high-converting funnels instantly with smart, auto-generated layouts."
  }
];
const growthSuiteCategories = [
  {
    title: "Lead Communication",
    icon: MessageSquare,
    services: [
      { name: "Missed-Call Text-Back System", desc: "Automatically text back missed calls so no lead slips away.", tagline: "Never lose a customer because you missed a call again." },
      { name: "Lead Nurture & Follow-Up Automation", desc: "Automatic multi-channel follow-up for all new leads via SMS, email, and voicemail sequences.", tagline: "Every lead gets followed up until they convert — automatically." },
      { name: "Quote Follow-Up System", desc: "Automated follow-up designed to close open quotes and estimates.", tagline: "Close more open quotes without lifting a finger." },
      { name: "No-Show Recovery Automation", desc: "Converts no-shows into rescheduled appointments with automated prompts.", tagline: "Turn no-shows into booked appointments automatically." }
    ]
  },
  {
    title: "Reputation",
    icon: Star,
    services: [
      { name: "Review Request Automation", desc: "Automatic review generation from every new customer.", tagline: "Generate 5-star reviews every week — automatically." },
      { name: "Review Response Service", desc: "Respond to all customer reviews with professional templates.", tagline: "Every review gets a professional response — like clockwork." },
      { name: "Reputation Monitoring & Alerts", desc: "Monitor new reviews and get alerts for negative ratings.", tagline: "Never get blindsided by a bad review again." },
      { name: "Testimonial & Case Study Engine", desc: "Automated system for collecting new testimonials and stories.", tagline: "Collect powerful testimonials automatically." }
    ]
  },
  {
    title: "Scheduling",
    icon: CalendarCheck,
    services: [
      { name: "Appointment Reminder Sequences", desc: "Automated reminders via SMS and email to reduce no-shows dramatically.", tagline: "Cut no-shows with automatic reminders." },
      { name: "Booking Calendar Optimization", desc: "Monthly tuning to keep calendars functioning correctly with buffer optimization.", tagline: "Your calendar will always work the way it should." },
      { name: "VIP Waitlist & Priority Scheduling", desc: "Notify VIPs about early openings or new availability.", tagline: "Keep your best customers coming back first." },
      { name: "Membership & Subscription Billing", desc: "Automates billing reminders, failed payment recovery, and renewals.", tagline: "Never lose revenue to failed membership payments again." }
    ]
  },
  {
    title: "Retention",
    icon: Heart,
    services: [
      { name: "Upsell & Cross-Sell Automation", desc: "Automatically promote higher-value services or products.", tagline: "Increase revenue per customer automatically." },
      { name: "Customer Loyalty Program Engine", desc: "Points, rewards, and incentives delivered automatically.", tagline: "Turn customers into loyal regulars with a simple rewards system." },
      { name: "Birthday & Anniversary Offers", desc: "Special offers sent automatically on important dates.", tagline: "Celebrate customers and drive repeat visits." },
      { name: "Win-Back & Churn Prevention", desc: "Detect and recover at-risk customers with targeted messaging.", tagline: "Stop customers from slipping away." }
    ]
  },
  {
    title: "Content",
    icon: PenTool,
    services: [
      { name: "Auto-Reposting Social Content", desc: "Reposts existing content across social channels automatically.", tagline: "Stay active online without creating new content." },
      { name: "Monthly Content Calendar", desc: "Pre-scheduled 30 days of content posts with auto-posting setup.", tagline: "A full month of content, done for you." },
      { name: "Review-to-Content Engine", desc: "Turn customer reviews into social proof posts.", tagline: "Turn your 5-star reviews into daily social proof." },
      { name: "Customer Newsletter", desc: "Send branded newsletters with helpful content and offers.", tagline: "Build loyalty with a valuable monthly newsletter." }
    ]
  },
  {
    title: "Advertising",
    icon: TrendingUp,
    services: [
      { name: "Monthly Ad Angle Refresh", desc: "New hooks, creative angles, and copy every month.", tagline: "Keep your ads fresh and performing well." },
      { name: "Retargeting Audience Builder", desc: "Build custom audiences from site visitors and leads.", tagline: "Re-engage visitors who didn't convert the first time." },
      { name: "Landing Page Optimization", desc: "Monthly testing and refinement of landing pages.", tagline: "Higher conversions from the same traffic." },
      { name: "Lead Magnet Delivery & Follow-Up", desc: "Automated delivery and nurturing after lead magnet download.", tagline: "Turn downloads into booked calls." }
    ]
  },
  {
    title: "Analytics",
    icon: BarChart3,
    services: [
      { name: "Monthly Performance Report", desc: "Clear monthly breakdown of all campaign performance.", tagline: "Always know what's working and what's not." },
      { name: "Customer Journey Dashboard", desc: "Visualize how leads move through your pipeline.", tagline: "See every touchpoint from lead to customer." },
      { name: "Pipeline Cleanup & Optimization", desc: "Regular cleanup of stale leads and pipeline health.", tagline: "A clean pipeline means better forecasting." },
      { name: "Compliance & Deliverability Monitoring", desc: "Ensure emails and texts reach inboxes reliably.", tagline: "Stay compliant and keep deliverability high." }
    ]
  }
];
const industries = [
  {
    icon: Home,
    name: "Home Service",
    services: [
      { name: "Kitchen Remodeling", icon: Home },
      { name: "AC Repair", icon: Thermometer },
      { name: "Plumbing", icon: Wrench },
      { name: "Landscaping", icon: TreePine },
      { name: "Roofing", icon: Home },
      { name: "Electricians", icon: Zap },
      { name: "Pest Control", icon: Bug },
      { name: "Locksmith", icon: Lock },
      { name: "Painting", icon: Paintbrush },
      { name: "Flooring Installation", icon: Layers },
      { name: "Damage Restoration", icon: ShieldCheck },
      { name: "Garage Door Repair", icon: Wrench }
    ]
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    services: [
      { name: "Dentists", icon: Stethoscope },
      { name: "Chiropractors", icon: Activity },
      { name: "Cosmetic Surgery", icon: Sparkles },
      { name: "Weight Loss Centers", icon: Activity },
      { name: "Eye Doctors", icon: Eye },
      { name: "Day Spas", icon: Sparkles },
      { name: "Veterinarians", icon: Heart },
      { name: "Fitness Centers", icon: Dumbbell }
    ]
  },
  {
    icon: Scale,
    name: "Legal",
    services: [
      { name: "Bankruptcy", icon: FileText },
      { name: "Personal Injury", icon: ShieldCheck },
      { name: "Divorce", icon: Scale },
      { name: "Criminal", icon: Scale },
      { name: "Traffic", icon: Car }
    ]
  },
  {
    icon: Car,
    name: "Automotive",
    services: [
      { name: "Auto Repair Shops", icon: Wrench },
      { name: "Auto Body Shops", icon: Car },
      { name: "Auto Dealers", icon: Car }
    ]
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    services: [
      { name: "Real Estate Brokers", icon: Home },
      { name: "Mortgage Brokers", icon: DollarSign },
      { name: "Insurance Agents", icon: ShieldCheck },
      { name: "CPA/Tax Consultants", icon: Calculator }
    ]
  }
];
const PricingSection = ({ plans }) => {
  const [billing, setBilling] = useState("monthly");
  const mapped = plans.map((p) => {
    const isAnnual = billing === "annual";
    const savings = p.monthlyPrice * 12 - p.annualPrice;
    return {
      name: p.name,
      price: isAnnual ? `$${p.annualPrice.toLocaleString()}` : `$${p.monthlyPrice}`,
      period: isAnnual ? "/year" : "/month",
      description: p.description,
      features: p.features,
      cta: p.cta,
      ctaLink: isAnnual ? p.annualCtaLink : p.monthlyCtaLink,
      popular: p.popular,
      note: isAnnual ? `Save $${savings.toLocaleString()}/year — 2 months free.` : p.note,
      cardStyle: p.cardStyle
    };
  });
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-10", children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        role: "radiogroup",
        "aria-label": "Billing cycle",
        className: "inline-flex items-center gap-1 p-1 rounded-full border border-border bg-card/60 backdrop-blur",
        children: ["monthly", "annual"].map((option) => {
          const selected = billing === option;
          return /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": selected,
              onClick: () => setBilling(option),
              className: `relative px-5 md:px-6 py-2 rounded-full text-sm font-semibold transition-colors ${selected ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                option === "monthly" ? "Monthly" : "Annual",
                option === "annual" && /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: `ml-2 text-[10px] uppercase tracking-wide font-bold ${selected ? "text-primary-foreground/90" : "text-primary"}`,
                    children: "2 mo free"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 548,
                    columnNumber: 19
                  },
                  void 0
                )
              ]
            },
            option,
            true,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 534,
              columnNumber: 15
            },
            void 0
          );
        })
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 526,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 525,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(PricingGrid, { plans: mapped, columns: 2, className: "max-w-4xl mx-auto" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 561,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
    lineNumber: 524,
    columnNumber: 5
  }, void 0);
};
const MarketingAutomation = () => {
  const { hash } = useLocation();
  const { buildUrl } = useUtm();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [hash]);
  useEffect(() => {
    const src = "https://reputationhub.site/reputation/assets/review-widget.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Marketing Automation for Small Business | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 599,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Boost sales with AI powered marketing automation that automates lead follow-up, appointment reminders, review requests, & nurture campaigns." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 600,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "marketing automation, small business marketing, lead generation, AI marketing solutions, customer engagement, email marketing, SMS marketing, sales automation" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 601,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "link",
        {
          rel: "canonical",
          href: "https://growsmallbiz.io/services/marketing-automation-for-small-business/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 602,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Grow With AI-Powered SMB Marketing Automation | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 606,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 598,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Marketing Automation for Small Business",
        serviceType: "Marketing Automation Service",
        description: "AI-powered client growth system that helps small businesses capture, nurture, and close leads on autopilot.",
        url: "/services/marketing-automation-for-small-business/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          {
            name: "Marketing Automation",
            url: "/services/marketing-automation-for-small-business/"
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 608,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/marketing-automation-for-small-business/",
        images: [
          {
            url: heroImage,
            caption: "AI-Powered Marketing Automation for local service businesses",
            description: "Hero illustration for GrowSmallBiz's Marketing Automation service — turning cold leads into sales with AI-driven workflows, instant lead response, multi-channel follow-up, and unified CRM, calendar, and pipeline tools.",
            width: 1920,
            height: 1080
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 622,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      VideoJsonLd,
      {
        name: "GrowSmallBiz Marketing Automation Overview",
        description: "A short overview of how GrowSmallBiz's AI-powered CRM and marketing automation system helps local service businesses attract more leads, follow up instantly, and convert prospects into booked work.",
        thumbnailUrl: "https://i.ytimg.com/vi/IkA8jPWgHxk/maxresdefault.jpg",
        contentUrl: "https://www.youtube.com/watch?v=IkA8jPWgHxk",
        uploadDate: "2024-09-01T00:00:00+00:00"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 635,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/marketing-automation-for-small-business/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 643,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 645,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Bot, text: "START CLOSING MORE DEALS!" },
          title: "AI-Powered Marketing Automation: Turn Cold Leads into Sales",
          titleHighlight: "",
          subtitle: "GrowSmallBiz Digital Marketing helps you capture, nurture, and close leads on autopilot through SMS, Email, Live Chat, Phone Calls, and more!",
          primaryCTA: {
            label: "Schedule a Demo",
            href: buildUrl("https://lp.growsmallbiz.io/ai-client-growth-system-demo", "schedule-demo-hero"),
            external: true
          },
          secondaryCTA: {
            label: "See Pricing",
            href: "#pricing",
            variant: "heroOutline",
            external: true
          },
          backgroundImage: heroImage,
          overlayOpacity: 88,
          stats: [
            { value: "80%", label: "Response Rate" },
            { value: "2x", label: "Speed to Lead" },
            { value: "24/7", label: "AI Assistant" },
            { value: "100+", label: "Integrations" }
          ]
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 648,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("nav", { id: "page-top", className: "sticky top-16 z-40 shadow-lg shadow-black/30 border-b border-primary/20", style: { background: "hsl(210 50% 8%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] uppercase tracking-widest text-accent font-semibold pt-2 pb-0.5", children: "Quick Navigation" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 677,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center gap-1 overflow-x-auto pb-3 scrollbar-hide", children: sectionNav.map((item) => /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: `#${item.id}`,
            className: "whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold text-foreground hover:text-accent hover:bg-accent/10 border border-border/40 hover:border-accent/30 transition-all duration-200 shrink-0",
            children: item.label
          },
          item.id,
          false,
          {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 680,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 678,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 676,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 675,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "why-choose", className: "py-12 lg:py-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxDEV(
            SectionHeader,
            {
              subtitle: "WHY CHOOSE US",
              title: "Your Entire Business — Powered by AI.",
              titleHighlight: "Simplified Into One System.",
              description: "GrowSmallBiz gives small businesses the power to capture more leads, close more deals, and automate their entire customer journey — all in one place."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 695,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-8", children: whyChooseFeatures.map((feature, index) => /* @__PURE__ */ jsxDEV(
            FeatureCard,
            {
              icon: feature.icon,
              title: feature.title,
              description: feature.description,
              variant: "default",
              delay: index * 0.1
            },
            index,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 703,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 701,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 694,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 714,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 714,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 714,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 693,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "what-you-get", className: "py-12 lg:py-16", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxDEV(
            SectionHeader,
            {
              subtitle: "WHAT YOU GET",
              title: "Using GrowSmallBiz Digital Marketing",
              titleHighlight: "You Can",
              description: "Automate your entire customer journey from first touch to loyal repeat customer."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 720,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-12", children: benefitFeatures.map((feature, index) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `text-center animate-fade-up ${feature.textAbove ? "" : ""}`,
              style: { animationDelay: `${index * 0.1}s` },
              children: feature.textAbove ? /* @__PURE__ */ jsxDEV("div", { className: "border-2 border-white rounded-2xl p-6 flex flex-col items-center", style: { backgroundColor: "#2C485B" }, children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-foreground leading-snug", children: [
                  "Autopilot for your",
                  " ",
                  /* @__PURE__ */ jsxDEV("span", { className: "text-primary italic", children: "Business" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 738,
                    columnNumber: 27
                  }, void 0),
                  " through",
                  " ",
                  /* @__PURE__ */ jsxDEV("span", { className: "text-primary italic", children: "SMS, Email, Web Chat, Phone Calls," }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 739,
                    columnNumber: 27
                  }, void 0),
                  " ",
                  "and much more!"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 736,
                  columnNumber: 25
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 735,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: feature.image,
                    alt: feature.title,
                    className: "w-[300px] h-[300px] object-contain"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 743,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                lineNumber: 734,
                columnNumber: 21
              }, void 0) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: feature.image,
                    alt: feature.title,
                    className: "w-[300px] h-[300px] object-contain mx-auto mb-5"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 751,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  feature.label && /* @__PURE__ */ jsxDEV("span", { className: "inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3", children: feature.label }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 758,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-foreground mb-3", children: feature.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 762,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: feature.description }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 765,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 756,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                lineNumber: 750,
                columnNumber: 21
              }, void 0)
            },
            index,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 728,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 726,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 719,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 773,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 773,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 773,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 718,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "ai-features", className: "py-10 lg:py-14", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxDEV(
            SectionHeader,
            {
              subtitle: "AI FEATURES OVERVIEW",
              title: "Work Smarter, Respond Faster,",
              titleHighlight: "Close More Deals",
              description: "Built-in AI tools that handle the heavy lifting so you can focus on growth — not manual tasks."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 779,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: aiFeatures.map((feature, index) => /* @__PURE__ */ jsxDEV(
            FeatureCard,
            {
              icon: feature.icon,
              title: feature.title,
              description: feature.description,
              variant: "teal",
              delay: index * 0.1
            },
            index,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 787,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 785,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 778,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 798,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 798,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 798,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 777,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "funnel-builder", children: [
        /* @__PURE__ */ jsxDEV(FunnelBuilderSection, {}, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 803,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center pb-8", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 804,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 804,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 804,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 802,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "industries", className: "py-10 lg:py-14", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxDEV(
            SectionHeader,
            {
              subtitle: "TAILORED FOR YOUR INDUSTRY",
              title: "Solutions Built To Fit",
              titleHighlight: "Your Business",
              description: "Whether you are scheduling jobs, booking clients, managing leads, or closing deals, the platform adjusts to your industry needs while keeping everything fast, simple, and automated."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 810,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6", children: industries.map((industry, index) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "feature-card-teal animate-fade-up",
              style: { animationDelay: `${index * 0.1}s` },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "bg-primary rounded-xl p-2.5 w-fit mb-4", children: /* @__PURE__ */ jsxDEV(industry.icon, { className: "w-6 h-6 text-white" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 824,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 823,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-foreground mb-3", children: industry.name }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 826,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: industry.services.map((service, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(service.icon, { className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 832,
                    columnNumber: 25
                  }, void 0),
                  service.name
                ] }, i, true, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 831,
                  columnNumber: 23
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 829,
                  columnNumber: 19
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 818,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 816,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 809,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 841,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 841,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 841,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 808,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "integrations", children: [
        /* @__PURE__ */ jsxDEV(IntegrationsSection, {}, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 846,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center pb-8", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 847,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 847,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 847,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 845,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "demo-videos", className: "py-10 lg:py-14", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "QUICK DEMO VIDEOS",
            title: "See Each Feature",
            titleHighlight: "In Action",
            description: "Watch short demos of every major feature to see exactly how GrowSmallBiz powers your business."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 853,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: demoVideos.map((demo, index) => {
          const Icon = demo.icon;
          return /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: `/services/marketing-automation-for-small-business/${demo.slug}/`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group feature-card-teal animate-fade-up flex flex-col items-center text-center",
              style: { animationDelay: `${index * 0.05}s` },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "relative w-full aspect-video rounded-lg overflow-hidden mb-4 border border-border/50 flex items-center justify-center", style: { backgroundColor: demo.color }, children: [
                  /* @__PURE__ */ jsxDEV(Icon, { className: "w-12 h-12 text-white/90" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 872,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Play, { className: "w-4 h-4 text-white ml-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 874,
                    columnNumber: 25
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 873,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 871,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxDEV(Icon, { className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 878,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-foreground group-hover:text-primary transition-colors", children: demo.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 879,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 877,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-primary font-medium", children: "See More →" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 883,
                  columnNumber: 21
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 863,
              columnNumber: 19
            },
            void 0
          );
        }) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 859,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 888,
            columnNumber: 167
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 888,
          columnNumber: 47
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 888,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 852,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 851,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "ready-to-talk", className: "py-8 md:py-12 relative overflow-hidden", style: { backgroundColor: "#2d465c" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10 max-w-4xl", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-3 text-sm", children: "Ready to Talk?" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 896,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "See How Our AI Powered CRM & Marketing Automation Streamlines Your Sales" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 897,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg mb-8 max-w-2xl", children: [
          "Watch a quick overview of how GrowSmallBiz helps local service businesses attract more leads and grow faster. For the bigger picture, browse our ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/services/", className: "text-primary hover:underline", children: "Digital Marketing Services Overview" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 901,
            columnNumber: 162
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 900,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 w-full mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-base md:text-lg font-bold text-foreground mb-3", children: "Platform Overview" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 907,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl overflow-hidden shadow-[0_0_30px_#17a2b850]", style: { border: "2px solid #17a2b8" }, children: /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ jsxDEV(
              "iframe",
              {
                className: "absolute inset-0 w-full h-full",
                src: "https://www.youtube.com/embed/IkA8jPWgHxk",
                title: "GrowSmallBiz Overview",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                lineNumber: 910,
                columnNumber: 23
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 909,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 908,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 906,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-base md:text-lg font-bold text-foreground mb-3", children: "Meet Your AI Employee" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 921,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl overflow-hidden shadow-[0_0_30px_#17a2b850]", style: { border: "2px solid #17a2b8" }, children: /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ jsxDEV(
              "iframe",
              {
                className: "absolute inset-0 w-full h-full",
                src: "https://www.youtube.com/embed/rJ289MZ0ugU",
                title: "AI Employee — GrowSmallBiz",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                lineNumber: 924,
                columnNumber: 23
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 923,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 922,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 920,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 905,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: buildUrl("https://lp.growsmallbiz.io/ai-client-growth-system-demo", "schedule-demo"),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ghl-btn inline-flex items-center gap-3 px-8 py-4 text-lg font-bold",
            children: "Schedule a Demo"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 937,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 895,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 894,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 893,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "testimonials", className: "py-12 lg:py-16", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "CLIENT SUCCESS STORIES",
            title: "Real Stories From",
            titleHighlight: "Real Teams"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 952,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "iframe",
          {
            className: "lc_reviews_widget",
            src: "https://reputationhub.site/reputation/widgets/review_widget/4KL47iKeJZ2Ee05j7FBh",
            frameBorder: 0,
            scrolling: "no",
            title: "Google Reviews",
            style: { minWidth: "100%", width: "100%", minHeight: "480px", border: 0 }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 957,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 965,
            columnNumber: 167
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 965,
          columnNumber: 47
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 965,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 951,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 950,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "pricing", className: "py-12 lg:py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "CHOOSE A PLAN THAT FITS YOUR GROWTH",
            title: "Win More Clients &",
            titleHighlight: "Keep Them For Life",
            description: "Everything You Need To Capture, Nurture, and Close Leads — All In One Place"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 972,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(PricingSection, { plans: pricingPlans }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 978,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10 text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground mb-3", children: "Not ready to sign up yet?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 980,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "pricing-consultation"),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors",
              children: [
                "Schedule a Free Consultation",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 990,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 983,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 979,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-12 max-w-3xl mx-auto animate-fade-up", children: /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl p-8 md:p-10 text-center overflow-hidden", style: { background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--ghl-card-border) / 0.15))", border: "2px solid hsl(var(--primary))", boxShadow: "0 0 40px hsl(var(--primary) / 0.35)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4", children: /* @__PURE__ */ jsxDEV(Shield, { className: "w-9 h-9 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 996,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 995,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "30 Days Money Back Guarantee" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 998,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-foreground leading-relaxed", children: [
            "If you're ",
            /* @__PURE__ */ jsxDEV("strong", { children: "not satisfied for any reason" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 1002,
              columnNumber: 29
            }, void 0),
            " within the first 30 days, we'll refund your money — ",
            /* @__PURE__ */ jsxDEV("strong", { children: "no questions asked." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 1002,
              columnNumber: 127
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 1001,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 994,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 993,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 1006,
            columnNumber: 167
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1006,
          columnNumber: 47
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1006,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 971,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 970,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "growth-suite", className: "py-12 lg:py-16", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxDEV(
            SectionHeader,
            {
              subtitle: "COMPLETE GROWTH SUITE",
              title: "Everything You Need to",
              titleHighlight: "Grow Your Business",
              description: "7 powerful categories of automation services designed to attract leads, build your reputation, and retain customers for life."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 1014,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-12", children: growthSuiteCategories.map((category, index) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "animate-fade-up",
              style: { animationDelay: `${index * 0.08}s` },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-primary rounded-xl p-2.5", children: /* @__PURE__ */ jsxDEV(category.icon, { className: "w-5 h-5 text-white" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 1030,
                    columnNumber: 23
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 1029,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground", children: category.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 1032,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 1028,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: category.services.map((service, i) => /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "feature-card-teal p-5",
                    children: [
                      /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold text-foreground mb-2", children: service.name }, void 0, false, {
                        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                        lineNumber: 1044,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mb-3", children: service.desc }, void 0, false, {
                        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                        lineNumber: 1047,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary italic", children: [
                        '"',
                        service.tagline,
                        '"'
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                        lineNumber: 1050,
                        columnNumber: 25
                      }, void 0)
                    ]
                  },
                  i,
                  true,
                  {
                    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                    lineNumber: 1040,
                    columnNumber: 23
                  },
                  void 0
                )) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
                  lineNumber: 1038,
                  columnNumber: 19
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
              lineNumber: 1022,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 1020,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1013,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 1060,
            columnNumber: 165
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1060,
          columnNumber: 45
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1060,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 1012,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "faq", className: "py-12 lg:py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(FAQSection, { faqs }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1066,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxDEV("a", { href: "#page-top", className: "inline-flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowUp, { className: "w-3 h-3" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
            lineNumber: 1067,
            columnNumber: 167
          }, void 0),
          "Go To Top"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1067,
          columnNumber: 47
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
          lineNumber: 1067,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 1065,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 1064,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(AutopilotCTASection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 1072,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(PersonCTA, { ...contactCTA, buttonText: "Schedule a Demo", buttonHref: buildUrl("https://lp.growsmallbiz.io/ai-client-growth-system-demo", "schedule-demo-footer") }, void 0, false, {
        fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
        lineNumber: 1075,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 646,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
      lineNumber: 1077,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/MarketingAutomation.tsx",
    lineNumber: 597,
    columnNumber: 5
  }, void 0);
};
export {
  MarketingAutomation as default
};
