import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { g as geoHeroBg } from "./geo-hero-bg-oxlsxwjI.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { FileText, CheckCircle2, XCircle, Zap, Layers, BarChart3, Users, Type, ListOrdered, Target, Sparkles, Link2, Image, Crosshair, MousePointerClick, Hash, Building2, Shield, Search, Eye } from "lucide-react";
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
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const onPageServices = [
  {
    icon: Type,
    title: "Title Tags and Meta Descriptions",
    description: "Your title tag is the first thing Google reads and often the first thing a searcher sees in results. We craft title tags that include your primary keyword, reflect your service and location naturally, and are written to earn clicks — not just impressions. Meta descriptions are written to reinforce relevance and pull qualified visitors in."
  },
  {
    icon: ListOrdered,
    title: "Header Structure (H1, H2, H3)",
    description: "Heading hierarchy is how both search engines and readers orient themselves on a page. We audit and rewrite your heading structure so your H1 communicates the primary topic with precision, your H2s organize the page logically, and your H3s add depth and semantic variety without diluting focus."
  },
  {
    icon: Target,
    title: "Keyword-to-Page Alignment",
    description: "Every important page on your site should target a specific search intent. We map your priority keywords to the right pages, eliminate keyword cannibalization where multiple pages compete for the same term, and ensure that each page is structurally focused on winning its target search."
  },
  {
    icon: FileText,
    title: "Service Page Optimization",
    description: "Your service pages are your highest-value conversion assets. We optimize them to clearly communicate what the service is, who it is for, how it works, what outcomes clients can expect, and what to do next. This is not filler content. It is structured copy that serves both ranking and conversion."
  },
  {
    icon: Sparkles,
    title: "Semantic Content Improvements",
    description: "Modern search engines understand meaning, not just exact keywords. We identify and incorporate semantically related terms, entity references, and topically relevant language that signals depth of expertise and increases your relevance across a wider range of related searches."
  },
  {
    icon: Link2,
    title: "Internal Linking",
    description: "A well-linked site helps search engines discover and understand your content hierarchy. We build intentional internal link structures that connect related pages, pass ranking authority to your most important pages, and give visitors natural navigation paths that keep them engaged and moving toward conversion."
  },
  {
    icon: Image,
    title: "Image Optimization",
    description: "Images are often overlooked in on-page SEO. We optimize image file names, alt text, and compression to ensure your visuals contribute to relevance signals rather than slowing your page down or wasting crawl budget."
  },
  {
    icon: Crosshair,
    title: "Search Intent Matching",
    description: "Every search query has an intent behind it — informational, navigational, or transactional. We align your page content structure with the dominant intent for each target keyword so that when someone lands on your page, it immediately answers what they came looking for."
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Page Enhancements",
    description: "Rankings mean nothing if visitors do not take action. We review your page-level CTAs, trust elements, social proof placement, and clarity of next steps — and make recommendations that improve the path from visitor to lead."
  },
  {
    icon: Hash,
    title: "Entity Clarity",
    description: "Search engines build understanding around entities — businesses, people, places, and services. We reinforce entity signals on your pages through structured information presentation, consistent NAP references where relevant, and clear business identity signals that help Google understand exactly what your business is."
  }
];
const commonMistakes = [
  'Generic or missing title tags. Pages titled "Home," "Services," or "About Us" tell Google nothing about what the page is for or who it serves.',
  "No clear H1, or an H1 that does not match the page topic. When your main heading does not reflect what the page is actually about, you are sending mixed signals to both users and algorithms.",
  "Service pages that describe the service but do not speak to the customer. Content that lists features without addressing pain points, objections, or desired outcomes fails to convert even when it ranks.",
  'One page trying to rank for too many different services. Lumping "plumbing, electrical, and HVAC" onto a single services page dilutes relevance and prevents any single service from ranking competitively.',
  "Thin content that does not establish topical depth. A three-paragraph service page in a competitive market is rarely enough. Search engines reward depth and comprehensiveness.",
  "No internal linking strategy. Pages that exist in isolation — not linked from or to related pages — lose authority and ranking potential that proper site architecture would pass to them.",
  "Duplicate or auto-generated meta descriptions. When every page has the same generic description, you lose click-through rate and send weak relevance signals.",
  "Images that are large, uncompressed, and have no alt text. These slow your page and miss easy relevance opportunities.",
  "Content that does not match search intent. A page targeting a transactional keyword but written like an educational blog post will not convert — and may not rank either."
];
const processSteps = [
  {
    step: "Step 1",
    title: "Discovery and Baseline Audit",
    description: "We begin with a full audit of your current on-page SEO health: existing title tags, meta descriptions, heading structure, content quality, internal link architecture, image optimization status, and keyword alignment across your priority pages. This gives us a clear baseline and a prioritized list of opportunities."
  },
  {
    step: "Step 2",
    title: "Keyword and Intent Mapping",
    description: "We research and confirm the primary and supporting keywords for each important page on your site. We map search intent to each page target and identify any cannibalization or alignment issues that need to be resolved before optimization begins."
  },
  {
    step: "Step 3",
    title: "Page-Level Optimization Planning",
    description: "For each priority page, we build a specific optimization plan that covers every on-page element — from title tag to body content to CTA structure. Our Agentic AI SEO Playbooks accelerate this analysis and help surface semantic content opportunities your current pages are missing."
  },
  {
    step: "Step 4",
    title: "Optimization Execution",
    description: "We implement the approved changes across your pages. This includes rewriting title tags and meta descriptions, restructuring headings, improving body content for semantic depth and search intent alignment, building internal links, and enhancing conversion elements. Every change is documented."
  },
  {
    step: "Step 5",
    title: "Review and Refinement",
    description: "After implementation, we review the optimized pages against our quality standards and your business goals. We make refinements as needed and prepare the next optimization cycle."
  },
  {
    step: "Step 6",
    title: "Ongoing Monitoring and Iteration",
    description: "On-page SEO is not a one-time project. Rankings shift, competitors adjust, and search algorithms evolve. As part of your managed program, we continuously monitor performance, identify new optimization opportunities, and execute updates that keep your pages competitive."
  }
];
const industries = [
  {
    icon: Building2,
    title: "Home Services and Contractors",
    description: "Plumbers, HVAC companies, roofers, electricians, landscapers, and general contractors who need service and location pages that rank in competitive local markets and convert the visitors who land on them."
  },
  {
    icon: Shield,
    title: "Healthcare and Wellness Providers",
    description: "Chiropractors, physical therapists, dentists, mental health practices, and wellness clinics that need patient-facing pages built around the search terms their ideal patients are actually using — and structured to build trust before the first appointment."
  },
  {
    icon: Sparkles,
    title: "Med Spas and Aesthetic Practices",
    description: "Botox, filler, laser, and body contouring service pages that need to rank against both local competitors and high-authority national directories while converting high-intent visitors who are ready to book."
  },
  {
    icon: BarChart3,
    title: "Legal and Financial Professionals",
    description: "Attorneys, CPAs, financial advisors, and insurance professionals who need service pages that communicate expertise, build immediate credibility, and match the high-intent search behavior of clients making significant decisions."
  },
  {
    icon: Search,
    title: "Real Estate Agents and Brokers",
    description: "Agents and teams who need neighborhood, service, and location pages that rank for buyer and seller search queries and position their expertise ahead of the national portals."
  }
];
const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "We understand how service pages, location relevance, trust signals, and conversion paths work in local markets."
  },
  {
    icon: Zap,
    title: "Agentic AI SEO Playbooks with Human Strategy",
    description: "Our systems help us move faster and cover more ground, while human oversight keeps the work accurate, useful, and aligned with business goals."
  },
  {
    icon: Layers,
    title: "Holistic SEO Thinking",
    description: "On-page SEO is important, but it performs best when it supports a broader system that includes technical SEO, local SEO, authority building, and conversion-focused website strategy."
  },
  {
    icon: Eye,
    title: "Execution with Transparency",
    description: "You should know what is being improved, why it matters, and how the work supports your visibility and lead generation goals."
  }
];
const faqs = [
  {
    question: "What exactly is on-page SEO?",
    answer: "On-page SEO refers to all the optimizations made directly on the pages of your website to improve their relevance, structure, and visibility in search engine results. This includes title tags, meta descriptions, heading structure, content quality, internal linking, image optimization, and keyword alignment — among other elements. It is everything that happens on the page itself, as opposed to off-page factors like backlinks."
  },
  {
    question: "How is on-page SEO different from technical SEO?",
    answer: "Technical SEO focuses on the infrastructure of your site — crawlability, site speed, indexability, schema markup, and server-side issues. On-page SEO focuses on the content and structure of individual pages. Both matter, but they address different layers of your search performance. GrowSmallBiz addresses both as part of a managed program, but on-page and technical SEO are distinct disciplines with distinct deliverables."
  },
  {
    question: "What is an Agentic AI SEO Playbook?",
    answer: 'An Agentic AI SEO Playbook is a structured SEO workflow where specialized AI agents are trained to handle specific parts of the work — such as page analysis, keyword and intent mapping, semantic gap detection, internal linking opportunities, content structure recommendations, and optimization planning.\n\nInstead of relying on one generic AI prompt, the work is broken into defined tasks performed by well-trained agents inside a coordinated system. Each agent is focused on a specific role, which makes the process faster, more consistent, and more thorough across service pages and location pages.\n\nAt GrowSmallBiz, these Agentic AI SEO Playbooks do not operate without oversight. Human strategists review, refine, and approve the recommendations before implementation. That means you get the speed and pattern-recognition benefits of AI, with human judgment still in the loop to protect accuracy, business relevance, brand fit, and conversion quality.\n\nIn practical terms, it is not "AI doing SEO by itself." It is a human-guided SEO execution system that uses trained AI agents to help complete the work more efficiently and more intelligently.'
  },
  {
    question: "How long does it take to see results from on-page SEO?",
    answer: "Results vary depending on your starting baseline, the competitiveness of your market, and how many pages need optimization. In many cases, pages that were poorly optimized or missing basic signals can show meaningful ranking improvements within four to eight weeks after changes are implemented and indexed. A comprehensive on-page program produces compounding improvements over time."
  },
  {
    question: "Do I need to be involved in the optimization process?",
    answer: "Our managed program is designed to require minimal time from you. We conduct the audit, develop the strategy, implement the changes, and report on progress. We will ask for your input on business-specific details — services you offer, markets you serve, unique differentiators — but the SEO work is handled entirely by our team."
  },
  {
    question: "Will you rewrite all my website content?",
    answer: "Not necessarily. On-page SEO often involves targeted improvements to existing content rather than full rewrites. In some cases, particularly with thin or poorly structured service pages, more substantial content development is warranted. We will be transparent with you about what is needed and why before any significant content changes are made."
  },
  {
    question: "Can on-page SEO help with conversions, or is it only about rankings?",
    answer: "Both. On-page SEO improves the signals that help search engines rank your pages, but it also improves page structure, clarity, and persuasive elements that directly impact whether a visitor becomes a lead. Stronger heading structure, cleaner service page copy, better CTA placement, and trust signal alignment all contribute to conversion rate alongside ranking performance."
  },
  {
    question: "What happens if I already had SEO work done on my site before?",
    answer: "Previous SEO work does not disqualify you — it becomes part of our baseline assessment. We audit what was done, evaluate its current effectiveness, identify what is still working, and determine what needs to be updated or corrected. Many businesses we work with have had prior SEO that was either incomplete, outdated, or not aligned with current search standards."
  },
  {
    question: "Is on-page SEO a one-time project or an ongoing service?",
    answer: "For meaningful, sustained results, on-page SEO requires ongoing attention. Search algorithms evolve, competitors optimize their pages, and new services or markets may require new page optimization. As part of GrowSmallBiz's managed program, on-page SEO is a continuous process — not a one-time deliverable that is finished and forgotten."
  }
];
const OnPageSEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "On-Page SEO Services for Local Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 245,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz provides on-page SEO services, optimizing your website for higher rankings and conversions. Start with your free SEO audit today!" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "on-page SEO, SEO services, local SEO, website optimization, search engine rankings, digital marketing agency, conversion rate optimization, SEO audit" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/on-page-seo/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "SEO Success with On-Page SEO Optimization  | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "On-Page SEO",
        serviceType: "On-Page Search Engine Optimization",
        description: "Managed on-page SEO execution for local service businesses. Optimize title tags, headings, content structure, internal linking, and conversion elements across service and location pages.",
        url: "/services/seo-agency/on-page-seo/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "On-Page SEO", url: "/services/seo-agency/on-page-seo/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 252,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/on-page-seo/",
        images: [
          {
            url: geoHeroBg,
            caption: "On-Page SEO service for local service businesses",
            description: "Hero illustration for GrowSmallBiz's On-Page SEO service — optimizing titles, meta descriptions, headings, content depth, internal linking, and entity signals so each service page is fully optimized for both Google and AI answer engines.",
            width: 1920,
            height: 1080
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 264,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/on-page-seo/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
      lineNumber: 279,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: FileText, text: "On-Page SEO for Local Service Businesses" },
          title: "On-Page SEO for Local Service Businesses: Rank Higher & Convert More",
          titleHighlight: "",
          subtitle: "Your website may already have the right services. But if your key pages do not clearly communicate what you do, where you do it, and why a prospect should trust you, they can underperform in search and lose leads after the click.",
          description: "GrowSmallBiz uses Agentic AI SEO Playbooks with expert human oversight to strengthen the on-page signals that influence rankings, improve clarity for potential customers, and build a stronger foundation for both traditional search visibility and AI-assisted discovery. This is managed, ongoing execution for local service businesses — not a one-time audit with recommendations left for you to implement.",
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
          overlayOpacity: 50
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 283,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "WHY IT MATTERS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 310,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why On-Page SEO Is Essential for Ranking and Converting Your Local Service Business Leads" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 311,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 309,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Most local service businesses already have a website. Far fewer have pages that are strategically structured to attract the right search traffic, communicate clear relevance, and turn that traffic into calls, forms, and booked jobs." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 317,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "That gap is on-page SEO." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 320,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: `When someone searches on Google for "emergency HVAC repair in Austin," "plumber near me," or "Botox med spa near me," and when they ask ChatGPT things like "Who offers emergency HVAC repair in Austin?" or "What's the best med spa near me for Botox?" your page needs to send strong, consistent relevance signals.` }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 323,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: "Google evaluates whether your page is giving those signals through:" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 328,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-foreground/90", children: ["Title tags", "Heading structure", "Semantic context", "Internal linking", "Content depth", "Overall page clarity"].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 334,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 335,
                columnNumber: 25
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 333,
              columnNumber: 23
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 327,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Those same signals also help your business content become easier to interpret across broader search systems and AI-assisted discovery experiences." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 341,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "At the same time, the people who land on your pages are making split-second judgments. Is this business credible? Do they serve my area? Do they offer exactly what I need? Is the next step obvious? If the page feels vague, generic, or poorly aligned with the search, the opportunity is lost." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 344,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4", children: "On-page SEO closes both gaps at once. It helps your pages communicate clearly to search engines while also helping real people feel confident enough to contact you. Inside GrowSmallBiz's Managed AI SEO system, that stronger on-page foundation makes every other SEO investment more effective." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 347,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 316,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 308,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 307,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 306,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR ON-PAGE SEO METHODOLOGY" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 359,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Managed On-Page SEO Execution Across Every Important Page" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 360,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "On-page SEO is not just adding a keyword to a title tag and calling it done. It is a systematic, multi-element optimization of the pages that matter most to your growth — your service pages, location pages, and homepage." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 363,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mt-2", children: "Here is what GrowSmallBiz optimizes as part of your managed program." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 364,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 358,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: onPageServices.map((service, index) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(service.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 375,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 374,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: service.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 377,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 378,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 369,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 357,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 356,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "COMMON ISSUES" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 390,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "The On-Page Problems Silently Suppressing Your Search Rankings" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 391,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 389,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Most local business websites have not been touched since they were built. And most were never optimized for search to begin with — they were built to look good, not to rank. These are the on-page issues we see most consistently, and they quietly cost businesses rankings and leads every single month." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 397,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-0", children: commonMistakes.map((mistake, i) => /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 rounded-2xl p-6 bg-background/60 border border-border/50", children: [
              /* @__PURE__ */ jsxDEV(XCircle, { className: "w-5 h-5 text-destructive mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 405,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-foreground/90", children: mistake }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 406,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 404,
              columnNumber: 23
            }, void 0),
            i < commonMistakes.length - 1 && /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 409,
              columnNumber: 25
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 403,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 401,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4", children: "None of these are unusual. They are the default state of most local business websites. The good news is that every one of them is fixable, and fixing them produces measurable results." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 415,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 396,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 388,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 387,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 386,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR APPROACH" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Faster, More Precise Optimization Across Service and Location Pages" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 429,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 427,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Traditional on-page SEO is slow. Manually auditing pages, researching keywords, refining copy, building internal link maps, and tracking implementation across service pages and location pages takes significant time — time most business owners do not have, and time many agencies bill expensively." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 435,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz uses Agentic AI SEO Playbooks to accelerate that work without reducing it to generic automation. Our system helps surface optimization gaps faster, process more page-level signals, and support more consistent execution across the pages that matter most to your business." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 438,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 434,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-0 max-w-3xl mx-auto mt-10", children: [
          {
            icon: Zap,
            title: "Faster analysis and execution cycles.",
            description: "We can identify issues and opportunities more quickly, which helps shorten the time between audit, decision, and implementation."
          },
          {
            icon: Layers,
            title: "Broader optimization coverage.",
            description: "More of your important service pages and location pages get meaningful attention instead of only a few headline pages."
          },
          {
            icon: BarChart3,
            title: "Better-informed recommendations.",
            description: "We use live search data, SERP analysis, and semantic modeling to guide optimization decisions based on what is actually relevant in your market."
          },
          {
            icon: Users,
            title: "Human review before implementation.",
            description: "Agentic AI SEO Playbooks accelerate the research and structuring process. Human strategists review, refine, and approve the work so recommendations stay commercially grounded, brand-appropriate, and aligned with your goals."
          }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", style: { animationDelay: `${i * 0.1}s` }, children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 468,
              columnNumber: 23
            }, void 0),
            item.title
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 467,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed pl-9", children: item.description }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 471,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 466,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 443,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto mt-8 animate-fade-up", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "The result is a stronger on-page SEO workflow: faster than manual-only execution, more consistent than ad hoc freelancer work, and better suited to building durable visibility across both search rankings and modern discovery environments." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 478,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 477,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 476,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 426,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 425,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 424,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Ready to Strengthen Your On-Page SEO?",
          description: "Schedule a strategy session to learn how managed on-page optimization fits into your growth plan.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 488,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE PROCESS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 501,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Your On-Page SEO Execution, Step by Step" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 502,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 500,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-0 max-w-3xl mx-auto", children: processSteps.map((item, i) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", style: { animationDelay: `${i * 0.05}s` }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1", children: item.step }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 512,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 511,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: item.title }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 514,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
              fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
              lineNumber: 515,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 510,
            columnNumber: 21
          }, void 0),
          i < processSteps.length - 1 && /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 518,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 509,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 507,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 499,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 498,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 497,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "INDUSTRY RELEVANCE" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 531,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Built for Local Service Businesses That Need to Win on Search" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 532,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "On-page SEO delivers the greatest impact for businesses where search visibility translates directly to phone calls, form fills, appointment bookings, and revenue. If your customers search for what you offer before they buy, this service is built for you." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 535,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 530,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: industries.map((item, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 548,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 547,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                  lineNumber: 551,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                  lineNumber: 552,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 550,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 542,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 540,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-muted-foreground mt-10 max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.3s" }, children: "If your business fits any of these categories and you are not showing up consistently on the first page for your most valuable service searches, on-page SEO is likely one of the key gaps holding you back." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 558,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 529,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 528,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR DIFFERENCE" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 569,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why GrowSmallBiz for On-Page SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 570,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 568,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Most businesses do not need another SEO report. They need the right pages improved, the right issues fixed, and the work executed consistently over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 576,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "That is how GrowSmallBiz operates. We are a managed SEO partner for local service businesses, not a strategy-only consultant handing over recommendations for someone else to implement." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 579,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 575,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 592,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 591,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                  lineNumber: 595,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                  lineNumber: 596,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
                lineNumber: 594,
                columnNumber: 21
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 586,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 584,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.25s" }, children: "In other words, GrowSmallBiz helps local service businesses turn on-page SEO into a practical growth asset — not just a checklist item." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 602,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.3s" }, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 608,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 607,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 567,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 566,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 565,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "On-Page SEO Questions, Answered",
          faqs,
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about on-page SEO?",
            description: "We're here to help you understand how managed on-page optimization fits your business.",
            tagline: "Let's strengthen your pages together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 617,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 633,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Your Most Important Pages Should Be Driving More Rankings, More Trust, and More Leads" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 634,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: "If your key service pages and location pages are unclear, under-optimized, or poorly aligned with search intent, they can hold back both your rankings and your conversion rate. That means lost visibility, lost clicks, and lost business." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 637,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-4 max-w-3xl mx-auto", children: "On-page SEO helps turn your existing website into a stronger growth asset by improving page clarity, relevance, structure, and conversion readiness. It also strengthens the foundation that supports your broader SEO performance over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 640,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "GrowSmallBiz can audit your current pages, identify the gaps that are limiting performance, and implement a managed on-page optimization plan built around measurable business impact." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 643,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium mb-6", children: "Start with a free audit and see where your most important pages stand now." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 646,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 632,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Strengthen Your On-Page SEO",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 651,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Get Your Free SEO Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 661,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 660,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 659,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 668,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
            lineNumber: 669,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
          lineNumber: 667,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 631,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 630,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
        lineNumber: 675,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
      lineNumber: 678,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/OnPageSEO.tsx",
    lineNumber: 243,
    columnNumber: 5
  }, void 0);
};
export {
  OnPageSEO as default
};
