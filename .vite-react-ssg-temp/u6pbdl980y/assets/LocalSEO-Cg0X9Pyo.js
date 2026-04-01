import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BNvjIkYz.js";
import { u as useUtm, H as Header, b as baseContactCTA, B as Button, F as Footer } from "../main.mjs";
import { S as ServiceHero } from "./ServiceHero-DkZ5LbCF.js";
import { S as SectionHeader } from "./SectionHeader-DI_j2Gcg.js";
import { FAQSection } from "./FAQSection-BO0A5ebo.js";
import { C as ConsultationFormSection } from "./ConsultationFormSection-4DCBAAjl.js";
import { MapPin, CheckCircle2, Globe, FileText, ChevronRight, Zap, ClipboardCheck, Search, Navigation, Shield, Star, MapPinned, Home, Heart, Sparkles, Scale, Building2, Target, Users, Layers, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { C as CardCTA } from "./CardCTA-1MrUd6qk.js";
import "react";
import { G as GlowCard } from "./glow-card-UAwMuLho.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@radix-ui/react-accordion";
const localSeoHeroBg = "/assets/local-seo-hero-bg-BC7zCqYW.jpg";
const localSeoServices = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description: "We optimize your GBP listing with accurate categories, service descriptions, attributes, and visual assets so your business shows up stronger in map pack and local results."
  },
  {
    icon: Globe,
    title: "Citation Building",
    description: "We build consistent, authoritative citations across directories and data aggregators to reinforce your business identity and local relevance across the web."
  },
  {
    icon: ClipboardCheck,
    title: "Citation Cleanup / NAP Consistency",
    description: "We audit and correct inconsistent name, address, and phone data across existing listings to eliminate trust-damaging discrepancies that confuse search engines."
  },
  {
    icon: FileText,
    title: "Local Landing Pages",
    description: "We create location-specific and service-area pages that help search engines connect your services to the exact markets you serve."
  },
  {
    icon: Search,
    title: "Local Relevance Optimization",
    description: "We strengthen the signals that tell search engines your business is genuinely relevant to the locations and service categories you target."
  },
  {
    icon: Navigation,
    title: "Service Area Optimization",
    description: "We optimize your presence for multi-location and service-area targeting so your business is discoverable across every market you serve."
  },
  {
    icon: Shield,
    title: "Local Trust Signals",
    description: "We build and reinforce trust markers — reviews, authority indicators, and credibility signals — that influence how search engines rank local businesses."
  },
  {
    icon: Star,
    title: "Review Signal Support",
    description: "We support review acquisition strategy and optimize how review signals contribute to your local search visibility and credibility."
  },
  {
    icon: MapPinned,
    title: "Map Pack Visibility Support",
    description: "We work to improve your positioning in the Google Map Pack — the most visible and highest-converting placement in local search results."
  }
];
const industryCards = [
  {
    icon: Home,
    title: "Home Services & Contractors",
    description: "Plumbers, electricians, HVAC techs, roofers, and general contractors compete in hyper-local markets. When homeowners search for help, they call the businesses that appear first in the map pack and look credible. Local SEO determines who gets that call."
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    description: "Chiropractors, dentists, physical therapists, and wellness providers need strong local visibility to attract patients searching for care nearby. Reviews, GBP optimization, and local landing pages drive trust and appointment bookings."
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetic Practices",
    description: "Med spas and aesthetic clinics rely on high-intent local searches from clients comparing providers in their area. Visibility in the map pack, strong reviews, and service-specific local pages are critical to converting searchers into bookings."
  },
  {
    icon: Scale,
    title: "Legal & Financial Professionals",
    description: "Attorneys, accountants, and financial advisors serve clients who search locally and evaluate credibility carefully. Strong GBP presence, citation consistency, and local authority signals help establish trust before the first conversation."
  },
  {
    icon: Building2,
    title: "Real Estate Agents & Brokers",
    description: "Real estate professionals compete for visibility in markets defined by geography. Local landing pages, area-specific content, and strong map presence help agents become the first name buyers and sellers encounter in their market."
  }
];
const whyGSBItems = [
  {
    icon: Target,
    title: "Built for local service businesses",
    description: "GrowSmallBiz is designed around the way local service businesses actually compete: defined service areas, high-intent local demand, reputation-sensitive buying decisions, and the need to turn visibility into calls, leads, and booked work."
  },
  {
    icon: Users,
    title: "Managed execution, not software access",
    description: "You are not paying for another dashboard to manage yourself. We handle the research, optimization, content coordination, monitoring, and reporting so your team can stay focused on the business."
  },
  {
    icon: Layers,
    title: "Local SEO inside a broader Managed AI SEO system",
    description: "Local SEO performs better when it is supported by strong technical foundations, better service pages, authority signals, trust content, and conversion-focused website improvements. We manage Local SEO as one important part of that larger system."
  },
  {
    icon: Zap,
    title: "Agentic AI playbooks plus human strategy",
    description: "Our playbooks help us move faster and work more efficiently, but strategy is still directed by experienced humans who understand local search, local competition, and commercial intent."
  },
  {
    icon: BarChart3,
    title: "Reporting tied to local opportunity",
    description: "We focus on metrics that matter to local businesses: visibility in priority areas, map performance, local traffic quality, and the signals that help drive inquiries and booked jobs."
  },
  {
    icon: Shield,
    title: "No long-term lock-in",
    description: "We believe this relationship should be earned through execution quality, communication, and measurable progress — not forced through a long contract."
  }
];
const faqs = [
  {
    question: "What is Local SEO?",
    answer: "Local SEO is the process of improving how visible your business is in location-based search results, including Google Business Profile, the map pack, and local organic listings. It helps local customers find and trust your business when they are actively searching for services in your area."
  },
  {
    question: "Is Google Business Profile part of Local SEO?",
    answer: "Yes. Google Business Profile optimization is one of the most important parts of Local SEO, but it works best when supported by citation consistency, local landing pages, service-area relevance, and strong trust signals."
  },
  {
    question: "Are citations still important?",
    answer: "Yes. Citation consistency helps search engines confirm your business identity and location details across the web. Strong citation hygiene supports credibility, trust, and local relevance."
  },
  {
    question: "How long does Local SEO take to work?",
    answer: "Local SEO timelines depend on your market, competition, current Google Business Profile strength, citation consistency, website quality, and starting visibility. Many businesses begin seeing early movement within the first few months, with stronger gains building over time as local trust signals, content relevance, and location authority improve."
  },
  {
    question: "Do I need local landing pages if I already have a Google Business Profile?",
    answer: "Usually, yes. Your Google Business Profile helps with map-driven visibility, but local landing pages help connect your services to the locations you serve and give search engines more context to rank your business for local-intent searches."
  },
  {
    question: "Does Local SEO only help Google Maps?",
    answer: "No. Local SEO supports visibility across Google Business Profile, the map pack, local organic results, and the broader local discovery process. It helps reinforce your local relevance across the search journey."
  },
  {
    question: "How do I get started?",
    answer: "The first step is a strategy session with GrowSmallBiz. We review your local visibility, identify your biggest Local SEO gaps, and outline a clear plan for improving how your business appears in the markets that matter most."
  }
];
const LocalSEO = () => {
  const { strategySessionUrl: PRIMARY_CTA_URL, freeAuditUrl: SECONDARY_CTA_URL } = useUtm();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Local SEO for Local Service Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz helps local service businesses improve visibility in Google Business Profile, map pack, and local search results through managed Local SEO." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/local-seo/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Local SEO for Local Service Businesses",
        serviceType: "Local Search Engine Optimization",
        description: "Managed Local SEO services for local service businesses. Improve visibility in Google Business Profile, map pack, citations, and local organic results.",
        url: "/services/seo-agency/local-seo/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Local SEO", url: "/services/seo-agency/local-seo/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: MapPin, text: "Local SEO for Local Service Businesses" },
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Local SEO That Makes Your Local Service Business the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "First Call" })
          ] }),
          subtitle: "Show up where local buying decisions happen — and turn more visibility into calls, inquiries, and booked jobs.",
          preCtaContent: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-3 mt-2 mb-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
              " Get Found"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
              " Get Trusted"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
              " Get Chosen"
            ] })
          ] }),
          primaryCTA: {
            label: "Schedule Strategy Session",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true
          },
          secondaryCTA: {
            label: "Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true
          },
          backgroundImage: localSeoHeroBg,
          overlayOpacity: 50
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12 animate-fade-up", children: /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Why Local Visibility Matters Before a Prospect Ever Calls" }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { children: "When people search for a provider in their area, they are often close to taking action. They may search by service and city, compare businesses in map results, or validate who looks most credible before they call." }),
          /* @__PURE__ */ jsx("p", { children: "If your business is not visible in those moments, you do not just lose rankings. You lose calls, quote requests, appointments, and booked jobs to competitors who are easier to find and easier to trust." }),
          /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz manages Local SEO for local service businesses as part of a broader Managed AI SEO system. We strengthen your Google Business Profile, service area signals, citation consistency, local landing pages, reviews, and on-site relevance so your business can compete more effectively across local search, map results, and modern discovery journeys." }),
          /* @__PURE__ */ jsx("p", { children: "This is not a one-time setup or a disconnected checklist. It is an ongoing local visibility system guided by human SEO strategy and accelerated by agentic AI playbooks." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE FUNDAMENTALS" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Why",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Local SEO" }),
            " ",
            "Still Drives Some of the Highest-Intent Opportunities for Local Service Businesses"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { children: "When someone needs a plumber, a landscaper, a dentist, or a cleaning service, they are not browsing social media. They are searching — with intent to hire, often within hours." }),
          /* @__PURE__ */ jsx("p", { children: "That is why Local SEO matters. It helps your business appear when demand already exists. It gives you a better chance to show up when prospects are actively comparing providers, validating service areas, checking reviews, and deciding who to call now." }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "Here is what the data consistently shows:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 list-none pl-0", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "The Google Map Pack captures the majority of clicks for local service queries — more than the organic results below it" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: '"Near me" searches now dominate how people discover local service providers' })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "Appearing in the top three local positions signals authority before anyone clicks through to your website" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "Local search drives high-intent actions: phone calls, direction requests, appointment bookings, and form fills" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "Voice/text search on AI platforms like ChatGPT, Claude, Google Gemini, etc." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "For local service businesses, this is not just about rankings. It is about turning local visibility into real business outcomes: calls, quote requests, consultations, appointments, and booked jobs." }),
          /* @__PURE__ */ jsx("p", { children: "Ranking well in local results does not happen by accident. It requires consistent relevance, trust, accuracy, and visibility across your profile, website, citations, reviews, and supporting local pages. Businesses that win locally usually do not treat this as a one-time task. They treat it as an ongoing growth channel." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "OUR LOCAL SEO SYSTEM" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "What GrowSmallBiz Includes in",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Local SEO" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Local SEO is one of the core pillars inside GrowSmallBiz's Managed AI SEO system. On its own, it improves local visibility. Connected with technical SEO, authority building, service-page strategy, and conversion-focused website improvements, it becomes stronger, more durable, and more commercially useful." }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-3", children: "Within the Local SEO pillar, we manage the assets and signals that help local service businesses become easier to find, easier to trust, and easier to choose in their service area." }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-3 font-semibold", children: "Here is what we manage on your behalf:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: localSeoServices.map((service, index) => /* @__PURE__ */ jsxs(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(service.icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.description })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE STRATEGY" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Why GBP, Citations, and Local Landing Pages",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic whitespace-nowrap", children: "Work Better Together" }),
            " ",
            "as a Connected System"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { children: "One of the biggest reasons Local SEO underperforms is fragmentation. A business may have a partly optimized Google Business Profile, inconsistent citations, a few city pages, and scattered reviews — but the signals do not fully support one another." }),
          /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz treats Local SEO as a connected visibility system. Your GBP, citations, local landing pages, schema markup, reviews, and on-site trust signals should reinforce the same locations, services, and credibility story across the web." }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "Here is why the integration matters:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "GBP without a supporting website" }),
              " limits your ability to rank for service-plus-location queries beyond your primary category. A strong profile needs equally strong web presence behind it."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Citations without NAP consistency" }),
              " send conflicting signals that undermine the authority you are building. Every inconsistency reduces Google's confidence in your business data — and that reduced confidence shows up in your rankings."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Local landing pages without GBP alignment" }),
              " miss the opportunity to reinforce your location signals across both platforms. Your website and your profile should tell the same story, in the same terms, to the same geographic audience."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Reviews without a response strategy" }),
              " leave trust signals on the table and signal to Google that your business is not actively engaged with its customers."
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "When these elements work in concert — when your GBP, citations, local pages, schema markup, and review profile all reinforce the same location and service signals — the effect on local ranking is multiplicative, not additive." }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl p-6 border-l-4 border-primary bg-secondary", children: /* @__PURE__ */ jsxs("p", { className: "text-foreground leading-relaxed", children: [
            "That is the advantage GrowSmallBiz is building: not isolated tasks, but a ",
            /* @__PURE__ */ jsx("strong", { children: "local visibility system that compounds" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          { icon: MapPin, label: "Google Business Profile", desc: "Map pack & local discovery" },
          { icon: Globe, label: "Citation Network", desc: "Trust & identity consistency" },
          { icon: FileText, label: "Local Landing Pages", desc: "Service-area relevance" }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(GlowCard, { className: "text-center p-6 min-w-[200px]", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.label }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: item.desc })
          ] }),
          i < 2 && /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 text-primary shrink-0 hidden sm:block" })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "OUR APPROACH" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "How GrowSmallBiz Uses",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Agentic AI Playbooks" }),
            " ",
            "for Local SEO"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { children: "Local SEO is not static. Listings change, competitors move, opportunities appear, and gaps in your local presence can cost visibility quickly. GrowSmallBiz uses agentic AI playbooks with strategic human oversight to identify those gaps faster, prioritize improvements more intelligently, and maintain stronger local visibility over time." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "This allows us to move faster on profile improvements, citation issues, service-area content opportunities, and ongoing optimization tasks — while still applying ",
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "real business judgment" }),
            " to the decisions that matter most."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Our playbooks allow us to research, draft, and optimize location-specific content at a pace traditional agencies cannot match — while maintaining the quality and specificity search engines and visitors expect." }),
          /* @__PURE__ */ jsx("p", { children: "The result is a Local SEO system that is more consistent, more responsive, and more capable of compounding over time than a slow manual process." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap gap-4 justify-center animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          "GBP Monitoring",
          "Citation Auditing",
          "Content Optimization",
          "Review Tracking",
          "Gap Identification"
        ].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: step })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Ready to Strengthen Your Local Search Visibility?",
          description: "Schedule a strategy session to learn how Local SEO fits into your growth plan.",
          buttonText: "Schedule Strategy Session",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "INDUSTRY RELEVANCE" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "How",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Local SEO" }),
            " ",
            "Impacts"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "section-title -mt-2", children: "Different Types of Service Businesses" }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "The mechanics of Local SEO are similar across industries, but buyer behavior is not. The way someone chooses an HVAC company, med spa, dentist, attorney, or real estate professional can vary significantly based on urgency, trust, price sensitivity, and how much comparison happens before contact." }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-3", children: "That is why GrowSmallBiz approaches Local SEO with a repeatable system, but not a one-size-fits-all message. The goal is always the same: stronger visibility, stronger trust, and stronger conversion in the markets you serve." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-6 max-w-6xl mx-auto", children: industryCards.map((card, index) => /* @__PURE__ */ jsxs(
          GlowCard,
          {
            className: "p-6 animate-fade-up w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(card.icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: card.description })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "OUR DIFFERENCE",
            title: "Why Local Service Businesses Choose GrowSmallBiz for",
            titleHighlight: "Local SEO"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "w-4 h-4 text-primary" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.description })
              ] })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.3s" }, children: "Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth." }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.35s" }, children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          faqs,
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about Local SEO?",
            description: "We're here to help you understand how Local SEO fits your business.",
            tagline: "Let's build your local search visibility together."
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight", children: [
            "Ready to Strengthen Your Local Visibility Where",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Buying Decisions Happen?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-4 max-w-3xl mx-auto", children: "If your business is not consistently showing up for your priority local searches, the problem is usually not one isolated issue. It is the combined effect of profile gaps, weak local pages, inconsistent citations, limited review momentum, or missing trust signals." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mb-4 max-w-3xl mx-auto", children: "GrowSmallBiz's Local SEO service is built to fix that — with a managed, ongoing system that handles your Google Business Profile, citations, local landing pages, trust signals, and map pack performance as part of the broader Managed AI SEO system." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mb-4 max-w-3xl mx-auto", children: "GrowSmallBiz addresses those issues as part of a managed Local SEO system within your broader Managed AI SEO strategy. We help local service businesses improve visibility, strengthen trust, and compete more effectively in the areas that matter most." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "You focus on running the business and serving customers. We focus on helping the right prospects find you and feel confident contacting you." })
        ] }),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Let's Build Your Local Search Visibility",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Session",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsx("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Start with a Free SEO Audit" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-4 max-w-2xl mx-auto text-center", children: "and we'll show you where your local visibility is strong, where opportunity is being lost, and what should be fixed first." }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }),
          /* @__PURE__ */ jsx("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  LocalSEO as default
};
