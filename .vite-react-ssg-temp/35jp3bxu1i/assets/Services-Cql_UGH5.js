import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Link } from "react-router-dom";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { P as PersonCTA } from "./PersonCTA-BBiDGLm3.js";
import { Head } from "vite-react-ssg";
import { P as PageJsonLd } from "./PageJsonLd-D6BEuSgJ.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { Layers, ArrowRight, Shield, TrendingUp, Globe, Search, BarChart3, Users, Star, MessageCircle, Phone, Rocket, Bot, Megaphone, Sparkles, Building2, Stethoscope, Briefcase, Zap, Target, Handshake, CheckCircle } from "lucide-react";
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
const servicesHeroBg = "/assets/services-hero-bg-B_LfUZFN.webp";
const heroStats = [
  { number: "3–6 mo", description: "To reach top Google rankings for local service searches" },
  { number: "5 min", description: "AI response speed to every new lead inquiry" },
  { number: "24/7", description: "AI Receptionist coverage for after-hours lead capture" },
  { number: "3", description: "Industries — home services, health & wellness, professional" }
];
const proofMetrics = [
  { metric: "+1,395%", label: "Phone calls from local search", attribution: "HVAC Contractor — AI SEO Campaign" },
  { metric: "-64.6%", label: "Cost per acquisition", attribution: "Dental Practice — Google Ads Campaign" },
  { metric: "+552.7%", label: "Website users year over year", attribution: "Med Spa — Local SEO Campaign" }
];
const conversationalQueries = [
  "What's the best digital marketing agency for local service businesses?",
  "How do I get more leads for my HVAC company without spending more on ads?",
  "What does a local SEO agency actually do for a service business?",
  "How do I set up automated follow-up for leads that don't book right away?",
  "Which marketing services should a local contractor start with?",
  "How do I know if my Google Ads are actually generating booked jobs?",
  "What's the difference between SEO and paid ads for a local service business?"
];
const entityCards = [
  {
    badge: "WHAT IS IT",
    title: "What is GrowSmallBiz?",
    body: "GrowSmallBiz is an AI-powered digital marketing agency that builds complete client acquisition systems for local service businesses. It combines website design, managed AI SEO, paid advertising, CRM automation, and AI-powered lead follow-up into one connected growth system — so local business owners can capture more leads, respond faster, and convert more inquiries into booked jobs without managing a stack of disconnected tools."
  },
  {
    badge: "WHO IT SERVES",
    title: "Who does GrowSmallBiz serve?",
    body: "GrowSmallBiz works exclusively with local service businesses — including home service contractors (HVAC, plumbing, roofing, electrical, landscaping), health and wellness practices (chiropractors, med spas, dental practices), and professional service firms (photographers, real estate agents). The system is designed for business owners who need consistent lead flow but don't have time to manage their own marketing."
  },
  {
    badge: "WHAT WE DO",
    title: "What does GrowSmallBiz do?",
    body: "GrowSmallBiz builds and manages digital marketing systems that attract qualified leads through search, capture and follow up with them automatically, and convert more of them into booked appointments and jobs. Services include conversion-focused website design, AI-powered SEO for Google and AI search platforms, Google and Meta paid advertising, CRM automation, and AI receptionist and chat — all designed to work together as one connected system."
  }
];
const navTiles = [
  { icon: Globe, label: "Core Services", anchor: "#core-services" },
  { icon: Search, label: "How It Works", anchor: "#how-it-works" },
  { icon: BarChart3, label: "Growth Packages", anchor: "#growth-packages" },
  { icon: Users, label: "Who We Serve", anchor: "#who-we-serve" },
  { icon: Shield, label: "Why GrowSmallBiz", anchor: "#why-growsmallbiz" },
  { icon: Star, label: "Client Results", anchor: "#client-results" },
  { icon: MessageCircle, label: "FAQs", anchor: "#faqs" },
  { icon: Phone, label: "Get a Consultation", anchor: "#consultation" },
  { icon: Rocket, label: "Schedule Strategy Call", anchor: "external" }
];
const coreServices = [
  {
    title: "Website Design",
    body: "Your website is not a brochure — it is the hub of your entire marketing system. A well-built site does one job above everything else: turn visitors into leads. GrowSmallBiz designs conversion-focused websites built specifically for local service businesses, with clear calls to action, mobile-first layouts, and trust signals that make it easy for the right people to contact you. Every design decision is made with lead capture in mind, not aesthetics for its own sake.",
    bullets: [
      "Conversion-focused layout built to generate calls and form submissions",
      "Mobile-optimized design that works for customers searching on the go",
      "Trust-building structure that positions your business credibly from the first visit"
    ],
    href: "/services/website-design/",
    icon: Globe
  },
  {
    title: "Managed AI SEO",
    body: "Showing up when someone searches for your service is one of the most valuable things your marketing can do. GrowSmallBiz manages a comprehensive, AI-powered SEO system covering technical health, local visibility, on-page optimization, and authority-building content — all maintained on an ongoing basis so rankings improve over time. The system is also built for emerging AI search formats including AEO and GEO, ensuring your business stays visible as how people search continues to evolve.",
    bullets: [
      "Local SEO that gets your business found in the markets you serve",
      "Ongoing technical and on-page optimization across your full site",
      "Content and authority strategy built for both traditional and AI-powered search"
    ],
    href: "/services/seo-agency/",
    icon: Search
  },
  {
    title: "Paid Ads",
    body: "When you need leads now — not six months from now — paid advertising is the fastest way to put your business in front of people actively looking for what you offer. GrowSmallBiz manages Google Ads campaigns built around high-intent search traffic, with full conversion tracking, landing page alignment, and ongoing optimization to make sure your budget is working as hard as possible. Paid ads do not replace organic growth — they accelerate it while your longer-term systems build momentum.",
    bullets: [
      "High-intent Google Ads campaigns that reach buyers ready to act",
      "Conversion tracking and landing page alignment that turns clicks into leads",
      "Ongoing optimization focused on cost-per-lead and return on ad spend"
    ],
    href: "/services/paid-advertising/",
    icon: BarChart3
  },
  {
    title: "CRM Automation",
    body: "Getting a lead is only half the battle. What happens in the minutes after someone fills out a form or misses a call often determines whether you win or lose that job. GrowSmallBiz builds automated follow-up systems — including instant missed call text-back, lead nurture workflows, and pipeline visibility — so no opportunity goes cold because of slow or inconsistent follow-up. The result is a system that works around the clock to keep leads engaged and move them toward booking.",
    bullets: [
      "Instant automated follow-up so no lead goes unanswered",
      "Missed call text-back and nurture workflows that keep prospects warm",
      "Pipeline visibility and booking automation that streamlines conversion"
    ],
    href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
    icon: Bot
  }
];
const accelerationServices = [
  {
    title: "Social Media Campaigns",
    body: "Consistency is what turns social media from a time drain into a trust-building asset. GrowSmallBiz manages social media campaigns that keep your brand showing up regularly in the channels where your customers and community spend time. The goal is not vanity metrics — it is steady brand presence that supports your overall digital footprint and keeps you top of mind when someone is ready to make a decision.",
    bullets: [
      "Regular, on-brand content that builds visibility without demanding your time",
      "Social presence that reinforces trust across your full digital footprint",
      "Community-facing campaigns designed for the markets you actually serve"
    ],
    href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
    cta: "Learn More",
    icon: Megaphone
  },
  {
    title: "AI Lead Generation",
    body: "Finding new prospects is one of the hardest parts of growing a service business. GrowSmallBiz uses AI-assisted lead discovery to identify new opportunities — surfacing potential clients who match your ideal profile so your outbound efforts start with better data. This service is particularly useful for businesses expanding into new service lines, geographies, or customer segments without adding significant manual prospecting overhead.",
    bullets: [
      "AI-assisted prospect discovery targeted to your ideal client profile",
      "Scalable list-building that fuels outbound and campaign efforts",
      "Designed to create new top-of-funnel volume alongside inbound growth"
    ],
    cta: "Ask About This Service",
    icon: Sparkles
  },
  {
    title: "LinkedIn Outreach Automation",
    body: "For local service businesses that serve other businesses — professional services, consulting, B2B contractors — LinkedIn is one of the most direct paths to decision-makers. GrowSmallBiz builds automated LinkedIn outreach systems that connect with the right people consistently, at scale, without requiring hours of manual engagement each week. The result is a steady stream of new B2B conversations that would otherwise never happen.",
    bullets: [
      "Automated outreach sequences that connect with decision-makers consistently",
      "Personalized messaging built around your offer and target audience",
      "Scalable B2B prospecting without the manual time investment"
    ],
    href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
    cta: "Ask About This Service",
    icon: Users
  }
];
const systemSteps = [
  {
    number: 1,
    title: "Capture",
    tag: "Get Found & Generate Leads",
    items: [
      { name: "Website", desc: "Built to convert visitors into leads" },
      { name: "Managed AI SEO", desc: "Gets you found by the right people at the right moment" },
      { name: "Paid Ads", desc: "Reaches buyers actively searching for your service right now" }
    ]
  },
  {
    number: 2,
    title: "Nurture",
    tag: "Follow Up Automatically",
    items: [
      { name: "CRM Automation", desc: "Follows up instantly, keeps leads warm between touchpoints" },
      { name: "Social Media Campaigns", desc: "Maintains brand visibility and builds trust over time" },
      { name: "LinkedIn Outreach Automation", desc: "Builds B2B relationships at scale without manual effort" }
    ]
  },
  {
    number: 3,
    title: "Convert",
    tag: "Turn Leads Into Booked Jobs",
    items: [
      { name: "CRM Automation", desc: "Automates booking workflows and manages your pipeline" },
      { name: "AI Lead Generation", desc: "Identifies and surfaces new opportunities before competitors do" },
      { name: "Conversion-focused follow-up systems", desc: "Structured sequences that guide prospects to a decision" }
    ]
  }
];
const packages = [
  {
    title: "Starter Growth System",
    bestFor: "Businesses building their digital foundation",
    includes: "Website + CRM Automation",
    body: "A professional, conversion-focused website gives your business a credible home base online — and pairing it with CRM automation means every lead that comes in gets followed up with immediately. This combination is built for businesses that need a solid starting point: show up, capture interest, and respond before the competition does."
  },
  {
    title: "Visibility & Lead Flow",
    bestFor: "Businesses that need to be found and followed up with consistently",
    includes: "Website + Managed AI SEO + CRM Automation",
    body: "This combination connects visibility with capture and follow-up into one working system. Managed AI SEO builds your presence in search over time, your website converts that traffic into leads, and CRM automation makes sure those leads are followed up with immediately and consistently. For local businesses serious about growing through organic search, this is the core stack.",
    popular: true
  },
  {
    title: "Full Client Acquisition System",
    bestFor: "Businesses ready to drive aggressive, consistent lead generation",
    includes: "Website + Managed AI SEO + Paid Ads + CRM Automation",
    body: "This is the complete inbound growth engine. Paid ads drive immediate, high-intent traffic while Managed AI SEO builds long-term visibility — and both feed into a website designed to convert and a CRM system that follows up automatically. Businesses running this full system have a consistent, predictable flow of new leads working across multiple channels at once."
  }
];
const industries = [
  { title: "Home Services", desc: "HVAC, plumbing, roofing, electrical, landscaping, pest control, general contracting", body: "Homeowners searching online for local service providers need to find you fast and trust you quickly. The GrowSmallBiz system is built to make that happen — from search visibility to instant lead follow-up.", icon: Building2 },
  { title: "Healthcare & Wellness", desc: "Dental practices, chiropractic, physical therapy, primary care, wellness clinics", body: "Patients are searching for providers they trust in their local area. A strong website, consistent online presence, and fast follow-up make the difference between a new appointment and a missed opportunity.", icon: Stethoscope },
  { title: "Professional & B2B Services", desc: "Financial advisors, CPAs, consultants, agencies, local professional firms", body: "For businesses that sell expertise and relationships, credibility is everything online. GrowSmallBiz builds the digital presence and outreach systems that support consistent new business development.", icon: Briefcase }
];
const whyCards = [
  { icon: Layers, title: "One connected strategy, not a stack of disconnected vendors.", body: "Every service is designed to work with every other. No gaps, no finger-pointing between vendors, no leads falling through the cracks." },
  { icon: Zap, title: "AI-powered execution at a speed and scale that changes what is possible.", body: "GrowSmallBiz uses AI across visibility, follow-up, lead handling, and conversion — as operational infrastructure, not a marketing claim." },
  { icon: Target, title: "Conversion-first thinking, not just traffic and impressions.", body: "Every service is evaluated by whether it generates leads, bookings, and revenue — not whether it looks busy." },
  { icon: Shield, title: "Built exclusively for local service businesses.", body: "The strategies, messaging, and automation systems are built around how local service businesses actually generate and convert leads." },
  { icon: Handshake, title: "Lead capture and follow-up treated as seriously as lead generation.", body: "Speed of response determines whether you win or lose the lead. The system ensures no inquiry waits more than 5 minutes for a response." },
  { icon: TrendingUp, title: "Practical growth systems, not vanity marketing.", body: "Rankings and impressions matter only because they lead to something. GrowSmallBiz builds systems that generate actual pipeline." }
];
const faqs = [
  { question: "What services does GrowSmallBiz offer?", answer: "GrowSmallBiz offers a complete digital marketing system for local service businesses, organized into two groups. The Core Growth System includes website design, managed AI SEO, paid advertising (Google and Meta), and CRM marketing automation. Growth Acceleration Services include social media campaigns, AI lead generation, and LinkedIn outreach automation for B2B-adjacent service businesses.\n\nEach service is designed to work as part of a connected system — not as a standalone tactic. The website converts the traffic that SEO and ads bring in. CRM automation follows up with every lead the website captures. Every piece feeds the same conversion path.\n\nThe right combination depends on where your business currently stands. A new business with no digital presence starts with a different foundation than an established business that needs more lead flow." },
  { question: "Do I need all services at once?", answer: "No — most businesses start with two or three services and expand as results build. The most common starting combination is Website Design plus Managed AI SEO plus CRM Automation — which connects visibility, conversion, and follow-up in one foundation.\n\nIf you need leads faster than organic SEO allows, adding Paid Ads alongside SEO creates both immediate traffic and long-term organic momentum simultaneously.\n\nThe strategy call is designed to identify which combination creates the most impact for your specific situation — not to sell you more than you need." },
  { question: "What is the difference between Core Growth System and Growth Acceleration Services?", answer: "The Core Growth System is the foundation every local service business needs to get found online, capture leads, and follow up consistently. It includes website design, SEO, paid advertising, and CRM automation — the services that directly generate and convert new business opportunities.\n\nGrowth Acceleration Services layer on top of a working core system to expand reach and create more top-of-funnel volume. Social media campaigns build brand visibility. AI lead generation surfaces new prospecting opportunities. LinkedIn outreach automation is for businesses that sell to other businesses.\n\nThe simplest way to think about it: Core Growth System generates and captures leads. Growth Acceleration Services feed more people into that system." },
  { question: "Which services are best for a new business?", answer: "For a business starting from scratch, the most important first step is a conversion-focused website paired with CRM automation. A professional website establishes credibility and gives every marketing channel a place to send traffic. CRM automation ensures every lead gets followed up with immediately.\n\nOnce the foundation is in place, Managed AI SEO builds organic visibility over 3–6 months. If you need leads before SEO develops momentum, Google Ads or Google Local Services Ads create immediate traffic from day one.\n\nThe Starter Growth System package is designed specifically for this stage: website plus CRM automation as the foundation, with SEO and ads added as the business grows." },
  { question: "Which services are best if I already have a website?", answer: "If your website exists but is not generating consistent leads, the issue is usually one of three things: low traffic, poor conversion, or slow follow-up.\n\nLow traffic means your site is not visible enough in search results — Managed AI SEO or Paid Ads addresses this. Poor conversion means visitors arrive but do not contact you — a conversion audit and website improvements fix this. Slow follow-up means leads come in but go cold — CRM automation with AI receptionist integration addresses this.\n\nMost established businesses with an existing website benefit most from Managed AI SEO plus CRM Automation — building the organic visibility they are missing while ensuring every lead gets an immediate, automated response." },
  { question: "Does GrowSmallBiz work with local service businesses only?", answer: "Yes — GrowSmallBiz focuses exclusively on local service businesses. This means businesses that serve customers in a defined geographic area and rely on phone calls, form submissions, and appointments to generate revenue.\n\nThis includes home service contractors (HVAC, plumbing, electrical, roofing, landscaping, cleaning, remodeling), health and wellness practices (chiropractic, med spa, dental), and professional services (photographers, real estate agents).\n\nThis specialization matters because local service business marketing requires a fundamentally different approach than e-commerce or SaaS. The conversion path, search intent, follow-up cadence, and local visibility requirements are all distinct — and GrowSmallBiz systems are built specifically for that context." },
  { question: "Can GrowSmallBiz help with lead follow-up and CRM automation?", answer: "Yes — CRM and marketing automation is one of the four core services in the GrowSmallBiz system. The automation layer handles immediate lead response, multi-step follow-up sequences across email and SMS, missed-call text-back, appointment scheduling, review request workflows, and reactivation campaigns for lapsed customers.\n\nThe AI Receptionist component handles after-hours inquiries — answering calls, qualifying leads, and booking appointments before your team arrives in the morning.\n\nSpeed of response is the single biggest driver of lead conversion for local service businesses. The automation system ensures no lead waits more than five minutes for a response, regardless of when they reach out." },
  { question: "How does AI SEO differ from regular SEO for local businesses?", answer: `Traditional SEO focuses on Google rankings through keyword optimization, backlinks, and technical improvements. AI SEO is built for the current search landscape, where ChatGPT, Gemini, Perplexity, and other AI platforms are actively recommending local businesses alongside traditional Google results.

For local service businesses, this means optimizing for AI citation eligibility — the structured content, entity definitions, and reputation signals that AI engines use to decide which businesses to recommend when someone asks "what's the best HVAC company near me" or "which chiropractor handles auto accident cases in [city]."

GrowSmallBiz tracks citation share across 6 AI platforms monthly alongside traditional ranking metrics, so visibility across the full search landscape is measured and improved together.` },
  { question: "How long does it take to see results from digital marketing?", answer: "Timeline depends on which services are active. Paid ads — Google PPC, Google LSA, and Meta ads — generate traffic and leads within days of launching, with results improving as campaigns optimize over the first 30–60 days.\n\nManaged AI SEO builds momentum over 3–6 months for local and long-tail search terms. Competitive terms may take 6–12 months to reach top positions. The trade-off is that SEO compounds over time — unlike paid ads, which stop generating traffic the moment the budget stops.\n\nCRM automation delivers impact immediately upon setup. The first missed call that gets texted back within 60 seconds, the first lead that receives a nurture sequence instead of going cold, the first review request that goes out automatically — these often produce the fastest visible revenue impact regardless of channel." },
  { question: "What makes GrowSmallBiz different from other local marketing agencies?", answer: "Three things distinguish GrowSmallBiz. First, it builds systems rather than running campaigns — every service works as part of a connected acquisition engine, not a standalone tactic with no accountability for the full result. Second, it works exclusively with local service businesses, which means strategies and automation are built around how local service businesses actually generate and convert leads — not adapted from enterprise or e-commerce templates. Third, AI is integrated at every stage: AI-powered SEO for both traditional and AI search platforms, AI receptionist for 24/7 lead capture, AI content systems for consistent quality, and AI-assisted lead generation — as operational infrastructure, not a marketing claim.\n\nThe 30+ years of Fortune 500 experience behind the strategy means every engagement is approached with enterprise-level rigor applied specifically to local business scale and budget." }
];
const ServiceCardLarge = ({
  title,
  body,
  bullets,
  href,
  icon: Icon,
  index
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: "rounded-2xl p-8 flex flex-col card-hover animate-fade-up",
    style: { animationDelay: `${index * 0.1}s`, backgroundColor: "#2d465c", border: "2px solid #17a2b8", boxShadow: "0 0 15px rgba(23, 162, 184, 0.3), 0 0 30px rgba(23, 162, 184, 0.15)" },
    children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 287,
          columnNumber: 9
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 286,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground", children: title }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 289,
          columnNumber: 7
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 285,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-6", children: body }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 291,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 mb-8 flex-1", children: bullets.map((b, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, void 0),
        b
      ] }, i, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 294,
        columnNumber: 9
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 292,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "lg", asChild: true, className: "w-fit", children: href.startsWith("http") ? /* @__PURE__ */ jsxDEV("a", { href, target: "_blank", rel: "noopener noreferrer", children: [
        "Learn More ",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 303,
          columnNumber: 22
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 302,
        columnNumber: 9
      }, void 0) : /* @__PURE__ */ jsxDEV(Link, { to: href, children: [
        "Learn More ",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 307,
          columnNumber: 22
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 306,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 300,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/pages/Services.tsx",
    lineNumber: 281,
    columnNumber: 3
  },
  void 0
);
const Services = () => {
  const { strategySessionUrl } = useUtm();
  const handleNavClick = (anchor) => {
    if (anchor === "external") {
      window.open(strategySessionUrl, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Our Services | AI Marketing Solutions | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 329,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz: AI marketing solutions for local service businesses. Get more leads with our AI SEO, paid ads & CRM automation. Contact us now." }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 330,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "digital marketing, local SEO, website design, CRM automation, paid advertising, lead generation, business growth strategies, conversion optimization" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 332,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI-First Solutions For Small Business Growth  | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 328,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Services - GrowSmallBiz",
        description: "AI-Powered Growth System for Local Service Businesses",
        url: "/services/",
        breadcrumbs: [{ name: "Services", url: "/services/" }]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 335,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 342,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "hero-section", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: { backgroundImage: `url(${servicesHeroBg})` }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 346,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: { backgroundColor: "hsl(var(--background) / 0.85)" } }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 350,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-6 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV(Layers, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 354,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Full-Service Growth System" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 355,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 353,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "AI-Powered Digital Marketing Services for Local Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 357,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed", style: { animationDelay: "0.1s" }, children: "One connected system — websites, Managed AI SEO, paid ads, CRM automation, and growth campaigns — built to help local service businesses capture more leads, nurture them automatically, and convert more opportunities into booked jobs." }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 360,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center pt-4 animate-fade-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Schedule Strategy Call ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 366,
              columnNumber: 42
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 365,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 364,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 363,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 animate-fade-up", style: { animationDelay: "0.25s" }, children: heroStats.map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "rounded-xl p-5", style: { backgroundColor: "#0F2545" }, children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl md:text-3xl font-display font-bold text-primary mb-1", children: stat.number }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 375,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground", children: stat.description }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 376,
              columnNumber: 19
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 374,
            columnNumber: 17
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 372,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-sm text-muted-foreground animate-fade-up", style: { animationDelay: "0.3s" }, children: "Built for local service businesses that need more than disconnected tools and one-off tactics." }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 381,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 352,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 351,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 345,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-8", style: { backgroundColor: "#0F2545" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10", children: proofMetrics.map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center py-6 md:py-0 md:px-8", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-3xl md:text-4xl font-display font-bold text-primary mb-1", children: item.metric }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 394,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground mb-1", children: item.label }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 395,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs", style: { color: "#94A3B8" }, children: item.attribution }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 396,
          columnNumber: 17
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 393,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 391,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 390,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 389,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto rounded-xl p-8 md:p-10", style: { backgroundColor: "#0F2545", border: "1px solid rgba(255,255,255,0.1)" }, children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-3", children: "Local Business Owners Are Already Asking AI These Questions" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 407,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground mb-6", children: "Before opening Google, local business owners are typing questions like these into ChatGPT, Gemini, and Perplexity:" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 410,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: conversationalQueries.map((q, i) => /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg py-2.5 px-4 text-sm text-foreground", style: { backgroundColor: "#1B3A5C", borderLeft: "3px solid #F4803A" }, children: q }, i, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 415,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 413,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-base text-foreground mt-6", children: "If GrowSmallBiz isn't showing up as the answer to these questions, you're invisible to a growing segment of local business owners before they ever open Google. We change that." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 420,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 406,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 405,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 404,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "How It's Built",
            title: "One Connected System.",
            titleHighlight: "Not Seven Separate Tools.",
            description: "Most local service businesses end up with a patchwork of vendors — a web developer here, an SEO agency there, a CRM no one really uses. The result: a fragmented digital presence, dropped leads, and no clear picture of what is actually working."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 430,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto mb-16", children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-center leading-relaxed text-lg", children: "GrowSmallBiz is built differently. Every service is designed to work together as part of a single, connected growth system. Services are organized into two groups:" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 438,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 437,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-card border-2 border-primary/40 rounded-2xl p-8 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(Shield, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 446,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 445,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Core Growth System" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 448,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "The foundational services every local business needs to get found online, capture leads, and convert interest into action." }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 449,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 444,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-8 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-6 h-6 text-muted-foreground" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 455,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 454,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Growth Acceleration Services" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 457,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: [
              "Additional visibility, outreach, and campaign services that expand reach and create more opportunities — layered on once the core foundation is solid. See our full suite of ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/", className: "text-primary hover:underline", children: "Paid Advertising Services for Growth" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 459,
                columnNumber: 190
              }, void 0),
              " to accelerate this layer."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 458,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 453,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 443,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6", children: "Everything we build serves one of three stages:" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 465,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-4", children: ["Capture", "Nurture", "Convert"].map((stage) => /* @__PURE__ */ jsxDEV("span", { className: "px-6 py-3 rounded-full bg-secondary border border-border text-foreground font-display font-semibold text-lg", children: stage }, stage, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 468,
            columnNumber: 17
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 466,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 464,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 429,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 428,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "core-services", className: "py-24 lg:py-32 relative", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "Primary Services",
            title: "Core Growth System",
            description: "These are the foundational systems GrowSmallBiz uses to help local businesses generate demand, capture leads, and convert opportunities more consistently. Whether you are starting from scratch or strengthening an existing digital presence, these four services form the backbone of a working growth system."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 480,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: coreServices.map((s, i) => /* @__PURE__ */ jsxDEV(ServiceCardLarge, { ...s, index: i }, s.title, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 487,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 485,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 479,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 478,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto", children: entityCards.map((card, i) => /* @__PURE__ */ jsxDEV("div", { className: "rounded-xl p-6", style: { backgroundColor: "#1B3A5C", border: "1px solid rgba(255,255,255,0.08)" }, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-block px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider text-white mb-3", style: { backgroundColor: "#2BA3A0", fontSize: "11px" }, children: card.badge }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 499,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("h4", { className: "text-base font-display font-semibold text-foreground mb-2", children: card.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 502,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/80 leading-relaxed", children: card.body }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 503,
          columnNumber: 17
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 498,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 496,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 495,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 494,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-2", children: "QUICK NAVIGATION" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 514,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-8", children: "On This Page" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 515,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-3 max-w-3xl mx-auto", children: navTiles.map((tile, i) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => handleNavClick(tile.anchor),
            className: "flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors text-left",
            children: [
              /* @__PURE__ */ jsxDEV(tile.icon, { className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 523,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground font-medium", children: tile.label }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 524,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 518,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 516,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 513,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 512,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 511,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "how-it-works", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "The Framework",
            title: "How the System Works",
            description: "GrowSmallBiz does not sell isolated tactics. Every service is part of a connected system designed to move prospects through the full growth journey."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 535,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto mb-16", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-0 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary via-muted-foreground/30 to-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 543,
            columnNumber: 15
          }, void 0),
          systemSteps.map((step, si) => /* @__PURE__ */ jsxDEV("div", { className: "relative flex flex-col items-center text-center px-6 animate-fade-up", style: { animationDelay: `${si * 0.15}s` }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-4", style: { backgroundColor: "#F4803A" }, children: /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-display font-bold text-white", children: step.number }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 549,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 548,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground mb-2", children: step.title }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 551,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6", style: { backgroundColor: "rgba(244,128,58,0.15)", color: "#F4803A" }, children: step.tag }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 552,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 text-left w-full", children: step.items.map((item, ii) => /* @__PURE__ */ jsxDEV("li", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground text-sm", children: item.name }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 558,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: item.desc }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 559,
                columnNumber: 25
              }, void 0)
            ] }, ii, true, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 557,
              columnNumber: 23
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 555,
              columnNumber: 19
            }, void 0)
          ] }, step.title, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 546,
            columnNumber: 17
          }, void 0))
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 541,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 540,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "The system works better when the pieces are connected. Great Managed AI SEO loses its value if leads land on a page that does not convert. A strong website means nothing if there is no follow-up. When each element is built to work with the others, results compound." }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 569,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Schedule Strategy Call ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 574,
              columnNumber: 40
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 573,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 572,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 568,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 534,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 533,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 relative", style: { background: "linear-gradient(180deg, hsl(210 50% 10%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 10%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "Expand Your Reach",
            title: "Growth Acceleration Services",
            description: "Once the core foundation is in place, these services help expand visibility, build outbound momentum, and create more top-of-funnel opportunities. They are designed to layer on top of the Core Growth System — not replace it."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 584,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: accelerationServices.map((s, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-2xl p-8 flex flex-col animate-fade-up",
            style: { animationDelay: `${i * 0.1}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(s.icon, { className: "w-5 h-5 text-muted-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 598,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 597,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground", children: s.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 600,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 596,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: s.body }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 602,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 mb-8 flex-1", children: s.bullets.map((b, bi) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 606,
                  columnNumber: 23
                }, void 0),
                b
              ] }, bi, true, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 605,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 603,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "default", asChild: true, className: "w-fit", children: s.href ? /* @__PURE__ */ jsxDEV(Link, { to: s.href, children: [
                s.cta,
                " ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 614,
                  columnNumber: 31
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 613,
                columnNumber: 21
              }, void 0) : /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: [
                s.cta,
                " ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 618,
                  columnNumber: 31
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 617,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 611,
                columnNumber: 17
              }, void 0)
            ]
          },
          s.title,
          true,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 591,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 589,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 583,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 582,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "growth-packages", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "Growth Systems",
            title: "Growth Systems Built",
            titleHighlight: "Around Your Business",
            description: "GrowSmallBiz builds growth systems around your business goals — not one-size-fits-all packages. Here is how most local service businesses start and scale."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 631,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8", children: packages.map((pkg, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: `relative bg-card rounded-2xl p-8 flex flex-col animate-fade-up ${pkg.popular ? "border-2 border-primary/50 shadow-[0_0_40px_rgba(255,127,80,0.15)]" : "border border-border"}`,
            style: { animationDelay: `${i * 0.1}s` },
            children: [
              pkg.popular && /* @__PURE__ */ jsxDEV("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full", children: "Most Popular" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 647,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: pkg.title }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 651,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary font-medium uppercase tracking-wide mb-1", children: "Best for:" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 652,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mb-3", children: pkg.bestFor }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 653,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary font-medium uppercase tracking-wide mb-1", children: "Includes:" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 654,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground font-semibold mb-5", children: pkg.includes }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 655,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed mb-8 flex-1", children: pkg.body }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 656,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(Button, { variant: pkg.popular ? "hero" : "outline", size: "lg", asChild: true, className: "w-full", children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: [
                "Schedule Strategy Call ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 659,
                  columnNumber: 44
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 658,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 657,
                columnNumber: 17
              }, void 0)
            ]
          },
          pkg.title,
          true,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 639,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 637,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-muted-foreground max-w-3xl mx-auto", children: "Growth Acceleration Services — social media, AI lead generation, and LinkedIn outreach automation — can be layered on based on your goals, industry, and sales process." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 665,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 630,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 629,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        PersonCTA,
        {
          title: "Ready to See Which Growth System Is Right for Your Business?",
          description: "Book a free strategy call. We'll review your current marketing gaps and identify the highest-impact starting point for your specific business.",
          buttonHref: strategySessionUrl,
          buttonText: "Schedule Strategy Call"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 672,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "who-we-serve", className: "py-24 lg:py-32 relative", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "Who We Serve",
            title: "Built for",
            titleHighlight: "Local Service Businesses",
            description: "GrowSmallBiz works exclusively with local service businesses. If you serve customers in a defined geographic market, this system is built for you."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 682,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: industries.map((ind, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-2xl p-6 animate-fade-up",
            style: { animationDelay: `${i * 0.08}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(ind.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 696,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 695,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground mb-1", children: ind.title }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 698,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary font-medium mb-3", children: ind.desc }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 699,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ind.body }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 700,
                columnNumber: 17
              }, void 0)
            ]
          },
          ind.title,
          true,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 690,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 688,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 681,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 680,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "why-growsmallbiz", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "Why Us",
            title: "Why Businesses Choose",
            titleHighlight: "GrowSmallBiz"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 710,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12", children: whyCards.map((card, i) => /* @__PURE__ */ jsxDEV("div", { className: "rounded-xl p-6 animate-fade-up", style: { backgroundColor: "#1B3A5C", borderRadius: "12px", animationDelay: `${i * 0.08}s` }, children: [
          /* @__PURE__ */ jsxDEV(card.icon, { className: "w-8 h-8 text-primary mb-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 718,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-[15px] font-display font-semibold text-foreground mb-2", children: card.title }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 719,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[13px] text-foreground/80 leading-relaxed", children: card.body }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 720,
            columnNumber: 17
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 717,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 715,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground italic leading-relaxed", children: "GrowSmallBiz was founded by a marketing strategist with a background in Fortune 500 brand building and local service growth. That experience shapes how every engagement is structured — with the kind of strategic rigor and accountability that local service businesses rarely get from typical marketing vendors." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 725,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 724,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 709,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 708,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "faqs", children: /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          faqs,
          contactCTA: {
            ...baseContactCTA,
            title: "Have more questions about growing your local service business?",
            description: "Get a personalized review of your current marketing setup and a clear recommendation for where to start. No obligation.",
            tagline: "— Subrata Guha, Founder, GrowSmallBiz"
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 734,
          columnNumber: 9
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 733,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "consultation", children: /* @__PURE__ */ jsxDEV(ConsultationFormSection, { headingOverride: "Core Growth System: Website Design, SEO, Paid Ads & CRM Automation" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 748,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 747,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 343,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 751,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Services.tsx",
    lineNumber: 327,
    columnNumber: 5
  }, void 0);
};
export {
  Services as default
};
