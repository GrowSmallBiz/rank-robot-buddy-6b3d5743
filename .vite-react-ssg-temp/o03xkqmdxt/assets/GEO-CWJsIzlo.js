import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { Globe, AlertTriangle, Shield, FileText, BookOpen, Sparkles, ClipboardCheck, Code2, Eye, Award, Target, Users, Layers, Building2 } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import "react";
import { G as GlowCard } from "./glow-card-2Rtno8B6.js";
import { g as geoHeroBg } from "./geo-hero-bg-oxlsxwjI.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const geoIncludes = [
  {
    icon: Shield,
    title: "Entity Clarity and Business Identity Reinforcement",
    paragraphs: [
      "AI systems need to know exactly who you are. Your business name, location, service categories, and industry context must be consistent and unambiguous across every place your business appears online.",
      "GrowSmallBiz audits and strengthens your entity signals — ensuring that AI discovery tools can confidently associate your business with the right service categories, geographic areas, and credibility markers. This foundational work makes every other element of GEO more effective."
    ]
  },
  {
    icon: FileText,
    title: "Structured Content for AI Discovery",
    paragraphs: [
      "AI systems do not read web pages the way a human does. They scan for well-organized information that clearly answers specific questions about your business, services, service area, and credentials.",
      "GrowSmallBiz structures your service pages, location pages, and supporting content so that AI tools can parse, extract, and reference them accurately. This includes proper heading hierarchy, clear service-to-location mapping, and content that answers the specific questions AI systems are trained to surface."
    ]
  },
  {
    icon: BookOpen,
    title: "Citation-Worthy Content Presentation",
    paragraphs: [
      "AI-generated answers cite sources. For your business to appear in those answers, your content needs to be factual, specific, clearly written, and well-organized — presented to the standard that AI systems treat as citation-worthy.",
      "This is not about keyword-stuffed copy. It is about producing genuinely useful, business-specific content that AI tools can reference with confidence."
    ]
  },
  {
    icon: Sparkles,
    title: "Trust and Authority Signal Development",
    paragraphs: [
      "AI systems evaluate credibility before surfacing a business in a generated answer. They look at citation consistency and volume, review quality and responses, the authority of sites referencing your business, and the overall coherence of your digital presence.",
      "GrowSmallBiz manages the trust signals AI systems use to evaluate credibility — from citation cleanup and review strategy to brand consistency across channels."
    ]
  },
  {
    icon: ClipboardCheck,
    title: "AI-Readiness Audit",
    paragraphs: [
      "Before building your GEO strategy, GrowSmallBiz conducts a structured assessment of your current AI-search visibility — reviewing entity signals, citation consistency, content structure, and technical SEO foundations. The audit identifies the highest-impact gaps and informs a clear, prioritized action plan."
    ]
  },
  {
    icon: Code2,
    title: "Content Formatting for LLM Discovery",
    paragraphs: [
      "Large language models powering tools like Google AI Overviews extract and synthesize information from structured, well-presented sources. GrowSmallBiz applies specific formatting methodologies to your service descriptions, FAQs, and supporting content — improving their suitability for LLM-based discovery without sacrificing readability for the human visitors who land on your pages."
    ]
  }
];
const whyGeoMatters = [
  {
    icon: Eye,
    title: "Get Considered Earlier",
    description: "When search systems can clearly understand your services, locations, and credibility, your business has a better chance of being surfaced earlier in the buying journey."
  },
  {
    icon: Award,
    title: "Build Trust Before the First Click",
    description: "Strong GEO supports the same signals people use to judge credibility: accurate service information, clear answers, consistent citations, strong reviews, and a reliable web presence."
  },
  {
    icon: AlertTriangle,
    title: "Reduce Visibility Gaps",
    description: "Many local businesses do strong work offline but send mixed signals online. GEO helps close that gap so your digital presence better reflects the quality of your business."
  },
  {
    icon: Target,
    title: "Support Calls, Leads, and Booked Jobs",
    description: "The goal is not abstract visibility. The goal is stronger discoverability that contributes to more qualified inquiries and more opportunities to win work."
  }
];
const whyGSBItems = [
  {
    icon: Target,
    title: "We Specialize in Local Service Businesses",
    description: "GEO is not generic. The entity signals, citation environment, and trust markers that matter for a med spa in the Bay Area are different from those that matter for a national e-commerce brand. Our GEO methodology is tuned specifically for the environments where your customers are searching and the signals that AI systems use to evaluate local service relevance."
  },
  {
    icon: Users,
    title: "Done-for-You Managed Execution",
    description: "You are running a business. You should not have to become an expert in generative AI, entity graphs, and content structure methodology.\n\nGrowSmallBiz manages every element of your GEO strategy — audit, planning, implementation, content, citations, monitoring, and refinement — so that you stay visible in AI-driven environments without adding another job to your plate."
  },
  {
    icon: Layers,
    title: "Entity-First Methodology",
    description: "Most SEO work starts with keywords. GrowSmallBiz's methodology starts with entity — the clear, consistent, authoritative representation of your business across the web. When AI systems can confidently identify who you are, what you do, and why you are credible, rankings, citations, and recommendations follow more naturally and hold longer."
  },
  {
    icon: Building2,
    title: "GEO as Part of a Complete AI SEO System",
    description: "GEO is one pillar of GrowSmallBiz's broader Managed AI SEO system. Our system integrates technical SEO, local authority building, AI-powered content strategy, reputation management, and conversion-focused web presence — all working together rather than in isolation.\n\nWhen you work with GrowSmallBiz, GEO is not a standalone tactic. It is part of a cohesive strategy designed to grow your visibility, credibility, and client base across every relevant discovery environment."
  }
];
const faqs = [
  {
    question: "What is GEO?",
    answer: "GEO stands for Generative Engine Optimization. It is the set of practices that make your business easier for AI-powered search tools — like Google AI Overviews, conversational search assistants, and generative discovery engines — to identify, understand, and surface in generated answers.\n\nWhere traditional SEO focuses on ranking in search result pages, GEO focuses on making your business visible and citation-worthy in AI-driven discovery environments where consumers increasingly research and compare local service providers."
  },
  {
    question: "Is GEO the same as SEO?",
    answer: "No, but they work best together. Traditional SEO helps your business rank on search engine results pages. GEO extends that visibility into AI-powered environments where the mechanics of discovery are fundamentally different. At GrowSmallBiz, GEO is one element of a broader Managed AI SEO system — not a replacement for foundational SEO, but an expansion of your presence into the growing portion of search that is now AI-mediated."
  },
  {
    question: "How does GEO help local businesses specifically?",
    answer: "Local service businesses are frequently recommended — or not — by AI-powered tools when consumers search for local providers. AI systems use entity signals, citation consistency, structured content, and trust markers to decide which businesses to surface. GEO strengthens all of those signals for your specific business, service categories, and geographic market — making it more likely that your business is the one AI systems identify and recommend when your ideal customers are searching."
  },
  {
    question: "What does GrowSmallBiz do differently?",
    answer: "GrowSmallBiz brings specialized local focus, managed execution, and an entity-first methodology to GEO. Our approach is built for the specific AI-search signals that matter in local service markets — not adapted from enterprise SEO playbooks. We manage every element of the strategy for you and integrate GEO into a broader AI SEO system so that every pillar of your digital presence reinforces the others."
  },
  {
    question: "How long does it take to see results from GEO?",
    answer: "GEO timelines depend on your starting authority, competitive landscape, content quality, and how clearly your business is already structured for AI-driven discovery. Many businesses begin to see early movement within the first few months, with stronger visibility gains building over six to twelve months as trust signals, entity clarity, and supporting content improve."
  },
  {
    question: "Does GEO replace my current SEO?",
    answer: "No. GEO extends your search visibility — it does not replace foundational SEO. Strong traditional SEO signals — technical health, local authority, quality content, and relevant links — also support AI-search visibility. At GrowSmallBiz, GEO and traditional SEO run in parallel and reinforce each other, giving your business the strongest possible presence across both environments."
  },
  {
    question: "How do I get started?",
    answer: "The first step is a strategy session with the GrowSmallBiz team. We will review your current digital presence, identify your most significant AI-search visibility gaps, and outline a clear plan for how GEO — as part of our Managed AI SEO system — can strengthen your position in the markets that matter most.\n\nNot ready for a full conversation yet? Start with our Free SEO Audit to see where you stand today."
  }
];
const GEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Managed GEO for Local Businesses: Get Found in AI Search | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz's GEO services help local businesses become easier for AI systems to identify, understand, and get found in AI search. Contact us today!" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "AI SEO, Generative Engine Optimization, local business visibility, digital marketing agency, local SEO services, AI-driven search, SEO audits, online presence enhancement" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/geo/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Be the answer AI gives your ideal customer | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Managed GEO services help local service businesses get identified, understood, and surfaced by ChatGPT, Gemini, Perplexity, and Google AI Overviews." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://growsmallbiz.io/services/seo-agency/geo/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:alt", content: "Generative Engine Optimization (GEO) services for local service businesses — GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "Subrata Guha" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/GEO.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Managed GEO Services",
        serviceType: "Generative Engine Optimization",
        description: "Managed GEO services for local service businesses. Become easier for AI systems to identify, understand, and surface through managed GEO built for the new reality of search.",
        url: "/services/seo-agency/geo/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "AI Search Optimization", url: "/services/seo-agency/ai-search-optimization/" },
          { name: "GEO", url: "/services/seo-agency/geo/" }
        ],
        useEntityGraph: true,
        hasFaqPage: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/geo/",
        images: [
          {
            url: geoHeroBg,
            caption: "Generative Engine Optimization for AI-powered search",
            description: "Hero illustration for GrowSmallBiz's Generative Engine Optimization (GEO) service — making local service businesses citable and discoverable inside ChatGPT, Perplexity, Google Gemini, and Claude answers.",
            width: 1920,
            height: 1080
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 204,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/geo/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/GEO.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/GEO.tsx",
      lineNumber: 219,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Globe, text: "Managed AI SEO" },
          title: "Managed GEO Services for Local",
          titleHighlight: "Service Businesses",
          subtitle: "Get Found Where Your Next Customer Is Already Searching",
          description: "Search behavior is shifting. More consumers are turning to AI-powered tools — Google AI Overviews, conversational search assistants, generative discovery engines — to find, compare, and choose local service providers. If your business is not visible in those environments, competitors who are will take the work.",
          note: "GrowSmallBiz helps local service businesses become easier for AI systems to identify, understand, and surface — through a managed methodology built for the new reality of search.",
          primaryCTA: {
            label: "Schedule Strategy Call",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true
          },
          secondaryCTA: {
            label: "Get Your Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true
          },
          backgroundImage: geoHeroBg,
          overlayOpacity: 82
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 223,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE FOUNDATION" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 251,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What Is Generative Engine Optimization — and Why Should You Care?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 252,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Generative Engine Optimization (GEO) is the practice of making your business easier for AI-powered search systems to recognize, interpret, and recommend." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 258,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Traditional search engines rank web pages based on links, keywords, and on-page signals. AI-powered discovery tools work differently. They pull information from across the web, synthesize it, and generate answers — often without sending users to a list of links at all. The businesses that appear in those generated answers are there because their digital presence is structured in a way that AI systems can confidently read and cite." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 261,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "For a local service business, that distinction matters enormously." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 264,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: 'When AI systems answer questions like "Who is the best HVAC company near me?" or "Which plumber in Danville offers same-day service?", they rely on businesses with clear entity signals, consistent citations, structured content, and credible authority markers. If your business lacks those signals, AI tools will simply recommend someone else — often a competitor who is not better, just better structured for AI discovery.' }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 267,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GEO is how GrowSmallBiz closes that gap." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 270,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 249,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE SHIFT" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "The AI Search Shift Is Already Happening — What It Means for Your Business" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 284,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 282,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-8 max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-semibold text-foreground mb-4", children: "From Search Results Pages to AI-Generated Answers" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 291,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxDEV("p", { children: "Showing up in search used to mean ranking on page one of Google. That still matters — but it is no longer the complete picture." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 293,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Google's AI Overviews now appear at the very top of results for millions of queries, delivering synthesized answers drawn from authoritative, well-structured sources. Many users see the AI-generated answer and never scroll to the organic results below it. Conversational search tools and generative discovery engines are being used by real consumers to research local businesses and get recommendations — without visiting a traditional results page at all." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 296,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: 'The question is no longer just "Do you rank on Google?" It is "Do AI systems know who you are, what you do, where you serve, and why you are credible?"' }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 292,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 290,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-semibold text-foreground mb-4", children: "What Happens to Businesses That Are Not Visible to AI" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 306,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxDEV("p", { children: "If your business has unclear entity signals, inconsistent citations, or content that AI systems cannot confidently interpret, the result is predictable:" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 308,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                "Your competitors are mentioned in AI-generated answers. You are not.",
                "AI-assisted searches in your category return other businesses by name. Yours is absent.",
                "Prospective customers using AI discovery tools never encounter your business."
              ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background/60", children: [
                /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GEO.tsx",
                  lineNumber: 318,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/90", children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/GEO.tsx",
                  lineNumber: 319,
                  columnNumber: 27
                }, void 0)
              ] }, i, true, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 317,
                columnNumber: 25
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 311,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Ignoring AI-search visibility is not maintaining the status quo. It is falling behind at a moment when the gap between AI-visible and AI-invisible businesses is widening." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 323,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 305,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-semibold text-foreground mb-4", children: "GEO Is an Opportunity You Can Act on Now" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: [
              "The businesses that build strong GEO foundations today will hold a meaningful advantage as AI-driven discovery grows. GrowSmallBiz has built a managed methodology specifically for local service businesses to capture that advantage — systematically, and without disrupting what is already working in traditional search. Pair GEO with our ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/local-seo/", className: "text-primary hover:underline", children: "Local SEO Services for Businesses" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 332,
                columnNumber: 358
              }, void 0),
              " to dominate both classic and AI-driven discovery."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 329,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 289,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 281,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 280,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 279,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "WHAT WE BUILD" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 344,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What GrowSmallBiz's GEO Optimization Methodology Includes" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 345,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "GEO at GrowSmallBiz is a coordinated set of actions that work together to make your business easier for AI systems to find, understand, and recommend. Every component is managed as part of your ongoing AI SEO engagement." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 348,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 343,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: geoIncludes.map((item, index) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 361,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 360,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 363,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: item.paragraphs.map((p, i) => /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p }, i, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 366,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 364,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 355,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 353,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 341,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE EXECUTION" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 380,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Managed GEO — Expert Strategy Backed by Agentic AI SEO Playbook" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 381,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 379,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GEO is not a one-time setup. It is an ongoing discipline that requires consistent refinement as AI search systems evolve, your competitive landscape shifts, and new signals emerge that affect how AI tools interpret your business." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 387,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz delivers GEO as a fully managed service — so you are not left navigating a complex and rapidly changing discipline on your own." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 390,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Our approach pairs AI-powered research and analysis with experienced human strategic oversight. We use advanced tools to analyze how your business appears across AI-driven environments, identify content gaps, surface citation opportunities, and track entity signal consistency. Our team interprets that intelligence and translates it into a prioritized execution plan specific to your business and local market." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 393,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Every action is informed by data and reviewed by an experienced strategist — not generated by automation and left unreviewed. That human layer matters because AI-search optimization is still an emerging discipline, and the nuances of how different systems interpret and surface local service businesses require judgment alongside tooling." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 396,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz founder Subrata Guha brings more than 30 years of Fortune 500 experience in marketing, sales, and digital transformation to this work — shaping an approach that is strategic, systematic, and grounded in real business outcomes." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 399,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: "What you get is a partner who understands both the technical requirements of AI-search visibility and the practical realities of running a local service business." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 404,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 403,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 386,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 378,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 377,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 376,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Ready to Strengthen Your AI-Search Visibility?",
          description: "Schedule a strategy session to learn how managed GEO fits into your growth plan.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 414,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "WHY IT MATTERS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 426,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why GEO Optimization Matters for Local Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 427,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "For local service businesses, visibility is not just about traffic. It is about being included in the consideration set when someone nearby needs help." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 430,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 425,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: whyGeoMatters.map((item, i) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 443,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 442,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 445,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 446,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 437,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 435,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 424,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 423,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR DIFFERENCE" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 458,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Local Service Businesses Choose GrowSmallBiz for GEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 459,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 457,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "There are general marketing agencies, SEO-focused firms, and AI tools that promise to automate everything. GrowSmallBiz is none of those things." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 465,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "We are a specialized, managed AI SEO agency built exclusively for local service businesses — and that focus matters when it comes to GEO." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/GEO.tsx",
              lineNumber: 468,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 464,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 456,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 482,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 481,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 484,
                columnNumber: 19
              }, void 0),
              item.description.split("\n\n").map((p, idx) => /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0", children: p }, idx, false, {
                fileName: "/dev-server/src/pages/services/GEO.tsx",
                lineNumber: 486,
                columnNumber: 21
              }, void 0))
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 476,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 474,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.3s" }, children: "Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 492,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.35s" }, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 497,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 496,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 454,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions About GEO and AI-Search Visibility",
          faqs: faqs.map((f) => ({
            question: f.question,
            answer: f.answer
          })),
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about GEO?",
            description: "We're here to help you understand how GEO fits your business.",
            tagline: "Let's strengthen your visibility together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 505,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 524,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Your Customers Are Already Using AI to Find Local Businesses. Is AI Recommending Your Business?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 525,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-6 max-w-3xl mx-auto", children: "AI-assisted discovery is not a trend to monitor from a distance. It is happening now, and the businesses building strong GEO foundations today will hold a compounding advantage over those that wait." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 528,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Whether you are just beginning to explore what GEO means for your business or you already know you need to close an AI-visibility gap, the next step is the same: a conversation with a strategist who specializes in local service businesses and knows exactly how to make yours more visible in the AI-driven environments where your next client is searching." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 531,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 523,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Strengthen Your GEO Visibility",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 536,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Get Your Free SEO Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 546,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 545,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 544,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto", children: "Not ready for a full session? Start with a free analysis of your current SEO and AI-search visibility." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 552,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 557,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/GEO.tsx",
            lineNumber: 558,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/GEO.tsx",
          lineNumber: 556,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 522,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 521,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/GEO.tsx",
        lineNumber: 564,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/GEO.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/GEO.tsx",
      lineNumber: 567,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/GEO.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, void 0);
};
export {
  GEO as default
};
