import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { RelatedQuestionsSection } from "./RelatedQuestionsSection-CMEEQ5WT.js";
import { F as FaqJsonLd } from "./FaqJsonLd-D-0II6By.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { MapPin, CheckCircle2, Globe, FileText, ChevronRight, Zap, ClipboardCheck, Search, Navigation, Shield, Star, MapPinned, Home, Heart, Sparkles, Scale, Building2, Target, Users, Layers, BarChart3 } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-DT9NPaz7.js";
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
const localSeoHeroBg = "/assets/local-seo-hero-bg-DDUK7ukb.webp";
const relatedFaqs = [
  {
    question: "What strategies can improve local search visibility?",
    answer: "The strategies to improve local search visibility include optimizing your Google Business Profile, building local citations, creating localized landing pages, and encouraging customer reviews. These tactics enhance your online presence and attract more local customers."
  },
  {
    question: "How can I optimize my Google Business Profile?",
    answer: "Optimizing your Google Business Profile involves ensuring accurate business information, adding high-quality images, utilizing relevant keywords, gathering customer reviews, and regularly updating posts to engage your audience and enhance local visibility."
  },
  {
    question: "What are the benefits of local SEO services?",
    answer: "The benefits of local SEO services include improved visibility in local search results, increased website traffic, and enhanced customer engagement. These services help local businesses attract more customers by optimizing their online presence and ensuring they appear prominently in relevant searches."
  },
  {
    question: "What local SEO tactics drive customer engagement?",
    answer: "Local SEO tactics that drive customer engagement include optimizing Google Business Profiles, encouraging customer reviews, utilizing local keywords, and creating relevant local content that resonates with the community. These strategies enhance visibility and foster meaningful interactions with potential customers."
  },
  {
    question: "How to enhance local search rankings effectively?",
    answer: "Enhancing local search rankings effectively involves optimizing your Google Business Profile, ensuring consistent citations, utilizing local keywords, and creating targeted local landing pages. Regularly updating content and engaging with customer reviews also significantly boosts visibility."
  },
  {
    question: "What role do citations play in local SEO?",
    answer: "Citations play a crucial role in local SEO by enhancing a business's online visibility and credibility. They help search engines verify the accuracy of a business's information, improving local rankings and attracting more potential customers."
  },
  {
    question: "How can reviews impact local search visibility?",
    answer: "Reviews significantly impact local search visibility by influencing search rankings and consumer trust. Positive reviews enhance credibility, attract more customers, and improve your Google Business Profile's prominence, ultimately boosting your local SEO performance."
  },
  {
    question: "What are key elements of a Google Business Profile?",
    answer: "The key elements of a Google Business Profile include accurate business name, address, phone number, website link, business hours, categories, and high-quality images. These components enhance local visibility and attract potential customers effectively."
  },
  {
    question: "How to choose local keywords for optimization?",
    answer: "Choosing local keywords for optimization involves identifying terms that reflect your business's services and location. Use tools like Google Keyword Planner and analyze competitors to find relevant, high-traffic keywords that resonate with your local audience."
  },
  {
    question: "What metrics measure local SEO success?",
    answer: "The metrics that measure local SEO success include local search rankings, organic traffic from local searches, click-through rates on local listings, Google My Business insights, and customer engagement metrics such as reviews and calls."
  },
  {
    question: "How often should I update my Google Business Profile?",
    answer: "Updating your Google Business Profile regularly is essential for maintaining accurate information and enhancing local visibility. Aim to review and update your profile at least once a month or whenever there are changes to your business details, services, or promotions."
  },
  {
    question: "What are common mistakes in local SEO?",
    answer: "Common mistakes in local SEO include neglecting to optimize Google Business Profiles, inconsistent NAP (Name, Address, Phone) information across listings, and failing to gather customer reviews. These errors can significantly hinder local search visibility and customer engagement."
  },
  {
    question: "How can local SEO benefit small businesses?",
    answer: "The benefits of local SEO for small businesses are significant, as it enhances online visibility, drives targeted traffic, and attracts local customers, ultimately leading to increased sales and growth in a competitive market."
  },
  {
    question: "What tools assist in local SEO analysis?",
    answer: "The tools that assist in local SEO analysis include Google My Business, Moz Local, BrightLocal, and SEMrush. These platforms help optimize local listings, track rankings, and analyze competitors, enhancing overall local search visibility for businesses."
  },
  {
    question: "How to create effective local landing pages?",
    answer: "Creating effective local landing pages involves optimizing content for local keywords, including clear calls-to-action, showcasing customer testimonials, and ensuring NAP (Name, Address, Phone number) consistency to enhance search visibility and user engagement."
  },
  {
    question: "What is the importance of NAP consistency?",
    answer: "The importance of NAP consistency lies in its role in enhancing local SEO. Consistent Name, Address, and Phone Number information across online platforms boosts credibility, improves search rankings, and ensures potential customers can easily find and contact your business."
  },
  {
    question: "How can social media enhance local SEO efforts?",
    answer: "Social media can significantly enhance local SEO efforts by increasing brand visibility, driving traffic to your website, and fostering community engagement. Active social media profiles can also improve local search rankings through increased user interactions and local citations."
  },
  {
    question: "What strategies improve local search for service providers?",
    answer: "The strategies that improve local search for service providers include optimizing Google Business Profiles, enhancing local citations, creating localized landing pages, and gathering customer reviews to boost credibility and visibility in local search results."
  },
  {
    question: "How to leverage local backlinks for SEO?",
    answer: "Leveraging local backlinks for SEO involves acquiring links from reputable local websites, directories, and community organizations. These backlinks enhance your site's authority and improve local search rankings, ultimately driving more traffic to your business."
  },
  {
    question: "What content types boost local search visibility?",
    answer: "The content types that boost local search visibility include optimized Google Business Profiles, local landing pages, customer reviews, and relevant blog posts. These elements enhance your online presence and attract more local customers effectively."
  },
  {
    question: "How can I track local SEO performance?",
    answer: "Tracking local SEO performance involves monitoring key metrics such as local search rankings, website traffic, and Google My Business insights. Utilize tools like Google Analytics and local SEO software to analyze these data points and adjust your strategies accordingly."
  },
  {
    question: "What are the costs associated with local SEO services?",
    answer: "The costs associated with local SEO services vary based on the scope of work, ranging from monthly retainers to one-time project fees. Factors influencing pricing include the competitiveness of your industry, the number of locations, and the specific strategies implemented."
  },
  {
    question: "How to optimize images for local search?",
    answer: "Optimizing images for local search involves using relevant file names, adding alt text with local keywords, compressing images for faster loading, and ensuring images are mobile-friendly. These practices enhance visibility and improve user experience on your website."
  },
  {
    question: "What is the impact of mobile optimization on local SEO?",
    answer: "The impact of mobile optimization on local SEO is significant. A mobile-optimized website enhances user experience, leading to higher engagement and improved search rankings, ultimately driving more local traffic and customers to your business."
  },
  {
    question: "How can I engage with local customers online?",
    answer: "Engaging with local customers online involves optimizing your Google Business Profile, creating localized content, and actively participating on social media platforms. These strategies help attract and connect with your target audience effectively."
  },
  {
    question: "What are the benefits of local SEO audits?",
    answer: "The benefits of local SEO audits include identifying areas for improvement in your online presence, enhancing visibility in local search results, and optimizing your Google Business Profile. This leads to increased traffic, higher customer engagement, and ultimately more conversions."
  },
  {
    question: "How to implement schema markup for local SEO?",
    answer: "Implementing schema markup for local SEO involves adding structured data to your website's code, specifically using JSON-LD format. This helps search engines understand your business information better, enhancing local search visibility."
  },
  {
    question: "What is the role of local directories in SEO?",
    answer: "The role of local directories in SEO is crucial as they enhance a business's visibility in local search results. By listing your business in relevant directories, you improve your chances of being found by potential customers in your area."
  },
  {
    question: "How can I improve my local search presence?",
    answer: "Improving your local search presence involves optimizing your Google Business Profile, ensuring consistent citations across directories, and creating targeted local landing pages to enhance visibility and attract more customers."
  },
  {
    question: "What are the latest trends in local SEO?",
    answer: "The latest trends in local SEO include a focus on optimizing Google Business Profiles, leveraging local reviews, and enhancing mobile search experiences. Additionally, voice search optimization and hyper-local content strategies are becoming increasingly important for improving local visibility."
  }
];
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
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Local SEO for Local Service Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Local SEO: GrowSmallBiz helps local businesses get found. Improve your Google ranking and attract more customers today! Get Free SEO Audit." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "local SEO, local search optimization, Google Business Profile, local visibility, SEO strategies, citation building, service business marketing, local landing pages" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/local-seo/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Grow Locally with AI Local SEO Expert | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
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
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 200,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/local-seo/",
        images: [
          {
            url: localSeoHeroBg,
            caption: "Local SEO service for local service businesses",
            description: "Hero illustration for GrowSmallBiz's Local SEO service — Google Business Profile optimization, citation building, NAP consistency, local landing pages, and map-pack visibility for service businesses.",
            width: 1920,
            height: 1080
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 212,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/local-seo/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: MapPin, text: "Local SEO for Local Service Businesses" },
          title: "Local SEO That Makes Your Local Service Business the First Call",
          subtitle: "Show up where local buying decisions happen — and turn more visibility into calls, inquiries, and booked jobs.",
          preCtaContent: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-3 mt-2 mb-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-green-400 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 237,
                columnNumber: 109
              }, void 0),
              " Get Found"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 237,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-green-400 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 238,
                columnNumber: 109
              }, void 0),
              " Get Trusted"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-green-400 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 239,
                columnNumber: 109
              }, void 0),
              " Get Chosen"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 239,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, void 0),
          primaryCTA: {
            label: "Schedule Strategy Call",
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
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 231,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Local Visibility Matters Before a Prospect Ever Calls" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 263,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 262,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "When people search for a provider in their area, they are often close to taking action. They may search by service and city, compare businesses in map results, or validate who looks most credible before they call." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 268,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "If your business is not visible in those moments, you do not just lose rankings. You lose calls, quote requests, appointments, and booked jobs to competitors who are easier to find and easier to trust." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 269,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz manages Local SEO for local service businesses as part of a broader Managed AI SEO system. We strengthen your Google Business Profile, service area signals, citation consistency, local landing pages, reviews, and on-site relevance so your business can compete more effectively across local search, map results, and modern discovery journeys." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 270,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "This is not a one-time setup or a disconnected checklist. It is an ongoing local visibility system guided by human SEO strategy and accelerated by agentic AI playbooks." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 271,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 267,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 261,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE FUNDAMENTALS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 282,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Local SEO Generates Highest-Intent Leads for Local Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 281,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "When someone needs a plumber, a landscaper, a dentist, or a cleaning service, they are not browsing social media. They are searching — with intent to hire, often within hours." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 289,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "That is why Local SEO matters. It helps your business appear when demand already exists. It gives you a better chance to show up when prospects are actively comparing providers, validating service areas, checking reviews, and deciding who to call now." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 292,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground", children: "Here is what the data consistently shows:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 295,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 list-none pl-0", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 297,
                columnNumber: 58
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: "The Google Map Pack captures the majority of clicks for local service queries — more than the organic results below it" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 297,
                columnNumber: 123
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 297,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 298,
                columnNumber: 58
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: '"Near me" searches now dominate how people discover local service providers' }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 298,
                columnNumber: 123
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 298,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 299,
                columnNumber: 58
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: "Appearing in the top three local positions signals authority before anyone clicks through to your website" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 299,
                columnNumber: 123
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 299,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 300,
                columnNumber: 58
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: "Local search drives high-intent actions: phone calls, direction requests, appointment bookings, and form fills" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 300,
                columnNumber: 123
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 300,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 301,
                columnNumber: 58
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: "Voice/text search on AI platforms like ChatGPT, Claude, Google Gemini, etc." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 301,
                columnNumber: 123
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 301,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 296,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "For local service businesses, this is not just about rankings. It is about turning local visibility into real business outcomes: calls, quote requests, consultations, appointments, and booked jobs." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 303,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Ranking well in local results does not happen by accident. It requires consistent relevance, trust, accuracy, and visibility across your profile, website, citations, reviews, and supporting local pages. Businesses that win locally usually do not treat this as a one-time task. They treat it as an ongoing growth channel." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 306,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 288,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 280,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 279,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR LOCAL SEO SYSTEM" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 319,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What GrowSmallBiz Includes in Local SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 320,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Local SEO is one of the core pillars inside GrowSmallBiz's Managed AI SEO system. On its own, it improves local visibility. Connected with technical SEO, authority building, service-page strategy, and conversion-focused website improvements, it becomes stronger, more durable, and more commercially useful." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-3", children: "Within the Local SEO pillar, we manage the assets and signals that help local service businesses become easier to find, easier to trust, and easier to choose in their service area." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-3 font-semibold", children: "Here is what we manage on your behalf:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 325,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 318,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: localSeoServices.map((service, index) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(service.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 336,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 335,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: service.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 338,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 339,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 330,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 316,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE STRATEGY" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 351,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why GBP, Citations, and Local Landing Pages Work Better Together as a Connected System" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 352,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 350,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "One of the biggest reasons Local SEO underperforms is fragmentation. A business may have a partly optimized Google Business Profile, inconsistent citations, a few city pages, and scattered reviews — but the signals do not fully support one another." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 358,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz treats Local SEO as a connected visibility system. Your GBP, citations, local landing pages, schema markup, reviews, and on-site trust signals should reinforce the same locations, services, and credibility story across the web." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 361,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground", children: "Here is why the integration matters:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 364,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "GBP without a supporting website" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 367,
                columnNumber: 21
              }, void 0),
              " limits your ability to rank for service-plus-location queries beyond your primary category. A strong profile needs equally strong web presence behind it."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 366,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "Citations without NAP consistency" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 370,
                columnNumber: 21
              }, void 0),
              " send conflicting signals that undermine the authority you are building. Every inconsistency reduces Google's confidence in your business data — and that reduced confidence shows up in your rankings."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 369,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "Local landing pages without GBP alignment" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 373,
                columnNumber: 21
              }, void 0),
              " miss the opportunity to reinforce your location signals across both platforms. Your website and your profile should tell the same story, in the same terms, to the same geographic audience."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 372,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "Reviews without a response strategy" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 376,
                columnNumber: 21
              }, void 0),
              " leave trust signals on the table and signal to Google that your business is not actively engaged with its customers."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 375,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 365,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "When these elements work in concert — when your GBP, citations, local pages, schema markup, and review profile all reinforce the same location and service signals — the effect on local ranking is multiplicative, not additive." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 379,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 border-l-4 border-primary bg-secondary", children: /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: [
            "That is the advantage GrowSmallBiz is building: not isolated tasks, but a ",
            /* @__PURE__ */ jsxDEV("strong", { children: "local visibility system that compounds" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 384,
              columnNumber: 95
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 383,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 382,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 357,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          { icon: MapPin, label: "Google Business Profile", desc: "Map pack & local discovery" },
          { icon: Globe, label: "Citation Network", desc: "Trust & identity consistency" },
          { icon: FileText, label: "Local Landing Pages", desc: "Service-area relevance" }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(GlowCard, { className: "text-center p-6 min-w-[200px]", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 398,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 397,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.label }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 400,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground", children: item.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 401,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 396,
            columnNumber: 21
          }, void 0),
          i < 2 && /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-5 h-5 text-primary shrink-0 hidden sm:block" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 404,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 395,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 389,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 349,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 348,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR APPROACH" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 418,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "How GrowSmallBiz Uses Agentic AI Playbooks for Local SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 419,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 417,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Local SEO is not static. Listings change, competitors move, opportunities appear, and gaps in your local presence can cost visibility quickly. GrowSmallBiz uses agentic AI playbooks with strategic human oversight to identify those gaps faster, prioritize improvements more intelligently, and maintain stronger local visibility over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 425,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "This allows us to move faster on profile improvements, citation issues, service-area content opportunities, and ongoing optimization tasks — while still applying ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "real business judgment" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
              lineNumber: 429,
              columnNumber: 181
            }, void 0),
            " to the decisions that matter most."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Our playbooks allow us to research, draft, and optimize location-specific content at a pace traditional agencies cannot match — while maintaining the quality and specificity search engines and visitors expect." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 431,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The result is a Local SEO system that is more consistent, more responsive, and more capable of compounding over time than a slow manual process." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 424,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-12 flex flex-wrap gap-4 justify-center animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          "GBP Monitoring",
          "Citation Auditing",
          "Content Optimization",
          "Review Tracking",
          "Gap Identification"
        ].map((step, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2", children: [
          /* @__PURE__ */ jsxDEV(Zap, { className: "w-3.5 h-3.5 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 448,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-foreground", children: step }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 449,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 447,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 439,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 416,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 415,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 414,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Ready to Strengthen Your Local Search Visibility?",
          description: "Schedule a strategy session to learn how Local SEO fits into your growth plan.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 458,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "INDUSTRY RELEVANCE" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 470,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "How Local SEO Impacts" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 471,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title -mt-2 bg-gradient-heading bg-clip-text text-transparent", children: "Different Types of Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 474,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "The mechanics of Local SEO are similar across industries, but buyer behavior is not. The way someone chooses an HVAC company, med spa, dentist, attorney, or real estate professional can vary significantly based on urgency, trust, price sensitivity, and how much comparison happens before contact." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 477,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-3", children: "That is why GrowSmallBiz approaches Local SEO with a repeatable system, but not a one-size-fits-all message. The goal is always the same: stronger visibility, stronger trust, and stronger conversion in the markets you serve." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 478,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 469,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-6 max-w-6xl mx-auto", children: industryCards.map((card, index) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(card.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 489,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 488,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: card.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 491,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: card.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 492,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 483,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 481,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 468,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 467,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "OUR DIFFERENCE",
            title: "Why Local Service Businesses Choose GrowSmallBiz for",
            titleHighlight: "Local SEO"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 502,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 516,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 515,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                  lineNumber: 519,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                  lineNumber: 520,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
                lineNumber: 518,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 510,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 508,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.3s" }, children: "Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 526,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.35s" }, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 532,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 531,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 501,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 500,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          faqs,
          schemaType: "FAQPage",
          suppressSchema: true,
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about Local SEO?",
            description: "We're here to help you understand how Local SEO fits your business.",
            tagline: "Let's build your local search visibility together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 540,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { items: relatedFaqs }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 554,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FaqJsonLd,
        {
          items: [...faqs, ...relatedFaqs],
          pageUrl: "https://growsmallbiz.io/services/seo-agency/local-seo/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 556,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 565,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Ready to Strengthen Your Local Visibility Where Buying Decisions Happen?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 566,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-4 max-w-3xl mx-auto", children: "If your business is not consistently showing up for your priority local searches, the problem is usually not one isolated issue. It is the combined effect of profile gaps, weak local pages, inconsistent citations, limited review momentum, or missing trust signals." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 569,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-4 max-w-3xl mx-auto", children: "GrowSmallBiz's Local SEO service is built to fix that — with a managed, ongoing system that handles your Google Business Profile, citations, local landing pages, trust signals, and map pack performance as part of the broader Managed AI SEO system." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 572,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-4 max-w-3xl mx-auto", children: "GrowSmallBiz addresses those issues as part of a managed Local SEO system within your broader Managed AI SEO strategy. We help local service businesses improve visibility, strengthen trust, and compete more effectively in the areas that matter most." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 575,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "You focus on running the business and serving customers. We focus on helping the right prospects find you and feel confident contacting you." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 578,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 564,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Build Your Local Search Visibility",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 583,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Start with a Free SEO Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 593,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 592,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 591,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mt-4 max-w-2xl mx-auto text-center", children: "and we'll show you where your local visibility is strong, where opportunity is being lost, and what should be fixed first." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 598,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 603,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
            lineNumber: 604,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
          lineNumber: 602,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 563,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 562,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
        lineNumber: 610,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
      lineNumber: 613,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/LocalSEO.tsx",
    lineNumber: 191,
    columnNumber: 5
  }, void 0);
};
export {
  LocalSEO as default
};
