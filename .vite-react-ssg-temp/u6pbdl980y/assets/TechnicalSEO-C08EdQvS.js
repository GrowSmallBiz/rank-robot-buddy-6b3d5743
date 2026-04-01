import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { u as useUtm, H as Header, b as baseContactCTA, B as Button, F as Footer } from "../main.mjs";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BNvjIkYz.js";
import { S as ServiceHero } from "./ServiceHero-DkZ5LbCF.js";
import { FAQSection } from "./FAQSection-BO0A5ebo.js";
import { C as ConsultationFormSection } from "./ConsultationFormSection-4DCBAAjl.js";
import { Wrench, AlertTriangle, Zap, ScanSearch, FileCheck, Gauge, Code, Network, ArrowRightLeft, Smartphone, Copy, Home, Stethoscope, Sparkles, Scale, Building2, CheckCircle2, Bot, Eye, Target, Shield, Search } from "lucide-react";
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
const techSeoHeroBg = "/assets/technical-seo-hero-bg-CnDIJ13M.jpg";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const technicalServices = [
  {
    icon: ScanSearch,
    title: "Site Health Auditing",
    paragraphs: [
      "We run comprehensive site health audits that surface every technical issue affecting your performance — from critical errors to lower-priority warnings. Issues are categorized, prioritized, and addressed in order of ranking and conversion impact."
    ]
  },
  {
    icon: FileCheck,
    title: "Crawlability and Indexation Management",
    paragraphs: [
      "We ensure that search engines can efficiently crawl every page that matters and are blocked from every page that shouldn't appear in results. This includes managing your robots.txt directives, XML sitemap submissions, and resolving any crawl blocks or index suppression errors that may be preventing your most important pages from ranking."
    ]
  },
  {
    icon: Gauge,
    title: "Page Speed and Core Web Vitals",
    paragraphs: [
      "Slow pages lose rankings and lose visitors. We identify the performance bottlenecks — server response times, render-blocking resources, unoptimized assets — and work with your development team or hosting environment to resolve them. Core Web Vitals compliance is monitored and maintained as a baseline standard."
    ]
  },
  {
    icon: Code,
    title: "Schema Markup Implementation",
    paragraphs: [
      "We implement structured data markup that helps search engines understand exactly what your business does, where you're located, what services you offer, and what kind of results you provide. This improves how your business appears in search results and provides the structured signals that support AI-generated overviews and featured results."
    ]
  },
  {
    icon: Network,
    title: "Internal Site Architecture",
    paragraphs: [
      "How pages link to one another matters. We assess and optimize your internal linking structure to ensure that authority flows properly through your site, that your most important service pages are well-supported, and that navigation makes logical sense for both visitors and search engine crawlers."
    ]
  },
  {
    icon: ArrowRightLeft,
    title: "Technical Issue Cleanup",
    paragraphs: [
      "Broken links, redirect chains, redirect loops, 404 errors, and orphaned pages all create friction in the crawl process and dilute your site's authority. We identify and resolve these systematically, establishing clean redirect logic and eliminating dead ends that waste crawl budget and confuse search engines."
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Usability",
    paragraphs: [
      "The majority of local service searches happen on mobile. We audit your site's mobile experience for usability errors, tap target sizing, viewport configuration, and loading behavior — ensuring that your site meets the standards search engines use to evaluate mobile-first performance."
    ]
  },
  {
    icon: Copy,
    title: "Canonicalization and Duplicate Content Controls",
    paragraphs: [
      "Duplicate content signals dilute your authority by splitting it across multiple versions of the same page. We implement proper canonical tags, manage URL parameter handling, and establish consistent URL structures so that search engines always credit the right version of your content."
    ]
  }
];
const commonProblems = [
  "Pages that aren't indexed — Important service pages exist on the site but have never been submitted to or accepted by Google. They generate zero organic traffic because they are invisible to search engines.",
  "Duplicate versions of the same site — The www and non-www versions both resolve, HTTP and HTTPS both serve content, or trailing-slash and non-trailing-slash URLs all return 200 responses. Each version competes with the others.",
  "Missing or broken schema markup — The site has no structured data, or schema was added incorrectly and returns validation errors. Search engines receive no structured signals about your business, services, or location.",
  "Slow page load times on mobile — Images are uncompressed, JavaScript loads synchronously, and hosting response times are sluggish. Core Web Vitals scores are in the red, which directly affects ranking eligibility.",
  "Redirect chains and broken links — Old pages were redirected to new ones, which were then redirected again. Broken internal links send crawlers into dead ends. Both conditions waste crawl budget and dilute authority flow.",
  "No XML sitemap or an outdated one — Search engines have no clean map of the site's structure and are left to discover pages on their own — which means important pages may never be found or re-crawled after updates.",
  "Thin or orphaned service pages — Service or location pages exist but aren't linked from anywhere meaningful on the site, so they receive no internal authority and are treated as low-priority content by search engines.",
  "Robots.txt misconfigurations — Critical pages have been accidentally blocked from crawling, or no restrictions exist at all, allowing search engines to crawl admin sections, staging content, or parameter-based URLs that dilute the site's signal quality."
];
const processSteps = [
  {
    title: "Full Technical Audit",
    description: "We begin with a comprehensive crawl and technical analysis of your website. Every page, every signal, every error category is assessed. You receive a clear picture of your current site health and the specific issues that are holding your rankings back."
  },
  {
    title: "Issue Prioritization and Action Plan",
    description: `Not all technical issues carry equal weight. We score and prioritize every finding by its potential ranking and conversion impact. You know exactly what we're fixing first and why — no vague "we're working on it" updates.`
  },
  {
    title: "Execution and Implementation",
    description: "We handle the fixes. Whether that means direct implementation, clearly documented instructions for your developer, or coordination with your hosting provider, we manage the execution process from start to resolution. Issues don't sit in a backlog."
  },
  {
    title: "Verification and Monitoring",
    description: "After implementation, we verify that every fix resolved correctly and that no new issues were introduced. Ongoing monitoring ensures your technical health is maintained — not just improved once and left to degrade."
  },
  {
    title: "Continuous Optimization",
    description: "As your site grows — new pages, new content, new features — technical issues naturally re-emerge. Our ongoing managed service means your technical foundation is monitored and maintained continuously, not just treated once."
  }
];
const whoThisIsFor = [
  {
    icon: Home,
    title: "Home Services and Contractors",
    description: "Plumbers, electricians, HVAC companies, roofers, and general contractors compete in highly localized markets where Google is the first call before a job is booked. A technically sound website captures those calls instead of losing them to a competitor whose site loads faster and indexes correctly."
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Wellness Practices",
    description: "Medical offices, physical therapists, chiropractors, and wellness providers need their service and location pages to rank reliably. Patients searching for care in your area need to find you — not a directory that charges you for your own leads."
  },
  {
    icon: Sparkles,
    title: "Med Spas and Aesthetic Practices",
    description: "High-consideration services require a website that conveys trust and professionalism before a prospect ever books a consultation. Technical quality signals authority; a slow, structurally fragmented site signals the opposite."
  },
  {
    icon: Scale,
    title: "Legal and Financial Professionals",
    description: "Attorneys, CPAs, financial advisors, and mortgage professionals operate in competitive local markets where ranking in the top positions for service-intent searches delivers consistent, high-value leads. Technical SEO is the foundation that makes those rankings achievable."
  },
  {
    icon: Building2,
    title: "Real Estate Agents and Brokers",
    description: "Local search is a primary discovery channel for real estate professionals. A technically optimized site — with proper schema, clean indexation, and fast load times — gives your listings and service pages the visibility advantage that separates top-producing agents from everyone else."
  }
];
const whyDifferent = [
  {
    icon: CheckCircle2,
    title: "Done-for-you, not done-with-you.",
    description: "We don't hand you a report and leave implementation to you. We identify the problems, prioritize them, execute the fixes, and verify the results. You get outcomes, not homework."
  },
  {
    icon: Bot,
    title: "AI-powered speed and coverage.",
    description: "Our agentic workflows process more technical signals faster than manual audits allow. Issues surface earlier and are resolved before they compound into larger ranking problems."
  },
  {
    icon: Eye,
    title: "Strategic human oversight on every decision.",
    description: "AI improves efficiency. Experience improves judgment. Every technical recommendation is reviewed and approved by an SEO strategist before it is implemented. Nothing is automated blindly."
  },
  {
    icon: Target,
    title: "Built for local service businesses specifically.",
    description: "We don't apply enterprise SEO frameworks to small business websites. Our methodology is calibrated for the scale, competitive landscape, and conversion goals of local service businesses."
  },
  {
    icon: Shield,
    title: "Part of a complete, integrated system.",
    description: "Technical SEO doesn't exist in isolation. When your technical foundation is strong, every other pillar of your SEO program — content, local presence, authority, and AI-search readiness — delivers better results. We manage all of it."
  },
  {
    icon: Search,
    title: "Transparent, accountable communication.",
    description: "You always know what we're working on and why. No black boxes, no jargon-heavy reports that obscure more than they reveal."
  }
];
const faqs = [
  {
    question: "What exactly is technical SEO, and how is it different from regular SEO?",
    answer: "Technical SEO refers to the foundational configuration of your website — how it is structured, how search engines crawl and index it, how fast it loads, how it communicates its content through structured data, and how it handles duplicate content and URL management. It is distinct from on-page SEO (which focuses on content and keywords) and off-page SEO (which focuses on authority and links). Technical SEO is the infrastructure layer that determines whether all of your other SEO work actually reaches its potential."
  },
  {
    question: "How do I know if my website has technical SEO problems?",
    answer: "In most cases, you don't — until you run a proper audit. Many technical issues are invisible to the naked eye. Your site may look and function normally to a visitor while simultaneously having pages that aren't indexed, duplicate content diluting authority, or structured data that fails validation. The only reliable way to know is a comprehensive technical crawl and audit."
  },
  {
    question: "How long does it take to see results after technical SEO work?",
    answer: "Some improvements — like resolving crawl errors or fixing indexation issues — can produce visible results within a few weeks as search engines recrawl and update their records. Others, like Core Web Vitals improvements and structural changes, may take one to three months to fully reflect in rankings. Technical SEO is not a shortcut; it is a prerequisite. Once the foundation is solid, the rest of your SEO program accelerates."
  },
  {
    question: "Can't I just use a free tool like Google Search Console to handle this myself?",
    answer: "Google Search Console provides useful signals, but it reports only a subset of technical issues and does not prioritize them by impact or provide implementation guidance. A comprehensive technical SEO practice requires multiple specialized tools, expert interpretation of findings, and consistent execution and monitoring. Most business owners don't have the time, tools, or technical background to manage this effectively alongside running their business."
  },
  {
    question: "Does technical SEO need to be done continuously, or is it a one-time fix?",
    answer: "It needs to be ongoing. As your site grows — new pages, new plugins, new hosting changes, platform updates — new technical issues emerge. Search engine standards for performance and structured data also evolve. A one-time audit provides a starting point, but without continuous monitoring and maintenance, a site that is clean today can develop significant issues within months."
  },
  {
    question: "What is schema markup and why does it matter for my business?",
    answer: "Schema markup is structured data added to your website's code that helps search engines understand the specifics of your business — your services, location, hours, reviews, and more. It does not directly cause rankings, but it enables richer search result appearances, improves how your business is represented in AI-generated search overviews, and provides the structured signals that help search engines confidently recommend your business to local searchers."
  },
  {
    question: "Why does Google still matter if people are using AI search tools?",
    answer: "Google still matters because Google's AI experiences are built into Search, not separate from it. The same foundational SEO best practices still apply to AI Overviews and AI Mode, which means crawlability, indexation, internal linking, page experience, textual clarity, and valid structured data still matter directly. In practical terms, if your pages are not technically sound, they are less likely to perform well in either traditional search or newer AI-assisted search experiences. AI-assisted discovery is broader than Google, but Google remains one of the most important technical gateways to visibility."
  },
  {
    question: "Is technical SEO included in GrowSmallBiz's Managed AI SEO program?",
    answer: "Yes. Technical SEO is one core pillar of the GrowSmallBiz Managed AI SEO system. It is not offered as a standalone patch — it is integrated into a complete, ongoing SEO program that addresses every factor affecting your local search visibility. When you work with GrowSmallBiz, your technical foundation is continuously managed alongside your content, local presence, and authority strategy."
  },
  {
    question: "How is GrowSmallBiz's approach different from hiring a one-time SEO consultant?",
    answer: "A consultant typically diagnoses problems and provides recommendations — implementation is usually left to you or your developer. GrowSmallBiz is a fully managed execution partner. We don't just identify what needs to be done; we do it, verify it, and maintain it. For local service business owners who don't have time to manage an SEO project, the done-for-you model is the difference between a plan that sits in a document and one that actually produces results."
  }
];
const TechnicalSEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Technical SEO for Local Service Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz provides managed technical SEO for local service businesses. Crawlability, indexation, schema, site speed, and ongoing monitoring powered by Agentic AI Playbooks." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/technical-seo/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Technical SEO for Local Service Businesses",
        serviceType: "Technical SEO",
        description: "Managed technical SEO services for local service businesses. Crawlability diagnostics, indexation analysis, schema markup, site speed optimization, and ongoing monitoring powered by Agentic AI Playbooks.",
        url: "/services/seo-agency/technical-seo/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Technical SEO", url: "/services/seo-agency/technical-seo/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Wrench, text: "Technical SEO for Local Service Businesses" },
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Technical SEO That Helps You Rank in as Little as",
            " "
          ] }),
          titleHighlight: "3 Months",
          subtitle: "Traditional SEO often slows down because technical issues sit undetected for weeks or months. GrowSmallBiz uses Agentic AI Playbooks - an integrated framework where several specialized AI agents perform technical SEO tasks continuously - to detect issues faster, prioritize what matters, and accelerate implementation. When technical SEO is handled alongside the other core SEO pillars through a systematic strategy, businesses can often gain traction faster than with a slower, manual process.",
          primaryCTA: {
            label: "Schedule Strategy Session",
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
          backgroundImage: techSeoHeroBg,
          overlayOpacity: 82
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE FOUNDATION" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "If Your Foundation Is Broken,",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Nothing Else Works" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          /* @__PURE__ */ jsx("p", { children: "There is a tempting assumption in SEO: that publishing more content or building more links will eventually push rankings up. But when a website has fundamental technical problems, those efforts are working against a ceiling you never see." }),
          /* @__PURE__ */ jsx("p", { children: "Search engines rely on being able to crawl your site efficiently, understand what each page is about, determine which version of a page is authoritative, and trust that the experience you deliver matches what they recommend to users. When any of those signals break down, your rankings stall — even if your content is strong." }),
          /* @__PURE__ */ jsx("p", { children: "For local service businesses, this matters even more. You're competing in geographic and intent-based searches where every ranking position counts. A fractured site structure, pages that aren't indexed, schema that's missing or misconfigured, or a mobile experience that lags — these aren't minor inconveniences. They are suppression mechanisms that quietly hold your business back from the traffic and leads it should be generating." }),
          /* @__PURE__ */ jsx("p", { children: "Technical SEO is not glamorous. It doesn't produce a blog post or a new backlink you can point to. But it is the foundational layer that determines whether every other piece of SEO work — your content, your local presence, your authority — gets the credit it deserves from search engines." }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: "GrowSmallBiz treats technical SEO as the prerequisite to everything else. Before we scale content, before we build authority, we make sure your site is structurally sound, fully readable, and primed to perform." }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE SCOPE" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "A Fully Managed Technical SEO Practice —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Not a One-Time Fix" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Technical SEO is not a checklist you run through once and forget. It is an ongoing practice that requires initial cleanup, systematic monitoring, and continuous refinement as your site grows and as search engine requirements evolve. Here is what GrowSmallBiz manages on your behalf." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto", children: technicalServices.map((item, index) => /* @__PURE__ */ jsxs(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: item.paragraphs.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p }, i)) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE PROBLEMS" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "The Problems Most Local Business Websites Are",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Carrying Right Now" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground font-semibold max-w-3xl mx-auto", children: 'Most business owners assume their website is technically fine. After all, the site loads and pages appear when you type in the URL. But "loading" is not the same as "performing," and the gap between the two is where rankings and leads disappear.' }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "These are the technical problems we find most frequently when auditing local service business websites:" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-3xl mx-auto", children: commonProblems.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/20", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item })
          ] }, index)) }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl p-6 border-l-4 border-primary max-w-3xl mx-auto", style: { backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: "Every one of these problems is common. Every one of them is fixable. And every one of them suppresses performance for businesses that are otherwise doing the right things." }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE EXECUTION" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "How GrowSmallBiz Executes Technical SEO Faster With",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Agentic AI Playbooks" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground font-semibold mt-6", children: "Agentic AI Playbooks. Faster Detection. Smarter Prioritization. Human-Guided Execution." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          /* @__PURE__ */ jsx("p", { children: "Traditional technical SEO relies on a practitioner manually running tools, interpreting reports, and working through a list of issues over weeks or months. The problem is not effort — it is capacity. A human analyst can only review so many signals at once, and the volume of technical data a modern website generates exceeds what manual workflows can keep up with efficiently." }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground font-semibold", children: "GrowSmallBiz uses Agentic AI Playbooks to change that equation." }),
          /* @__PURE__ */ jsx("p", { children: "Instead of relying on one generic automation layer, several specialized AI agents perform distinct technical SEO tasks within an integrated framework. These agents continuously monitor site health, detect emerging issues, evaluate patterns across multiple signal types, prioritize fixes by likely impact, and support faster execution across repeatable technical tasks. This creates a more systematic process than isolated manual audits or disconnected software tools." }),
          /* @__PURE__ */ jsx("p", { children: "Our system continuously monitors your site's technical health across dozens of signal categories simultaneously. Instead of waiting for a scheduled audit, issues are surfaced as they emerge. Instead of manually triaging a list, the playbook framework prioritizes issues by their likely impact on rankings, crawl efficiency, indexation, and user experience — so the most consequential problems are addressed first." }),
          /* @__PURE__ */ jsx("p", { children: "Agentic AI Playbooks reduce audit latency from months to minutes. Instead of waiting for slow, periodic manual reviews, GrowSmallBiz can detect technical issues quickly across title tags, meta descriptions, heading structure, schema markup, crawlability, internal linking, semantic coverage, and trust-related on-page signals. Many approved fixes can then be prioritized and implemented far faster than a traditional manual workflow. That shorter detection-to-resolution cycle can materially accelerate SEO progress." }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: "This is not unsupervised software making blind changes. Every technical finding is reviewed by an experienced strategist who confirms priority, validates the recommended resolution, and oversees implementation. The agentic AI layer provides speed, scale, and pattern detection. The human layer provides judgment, context, and quality control." }) }),
          /* @__PURE__ */ jsx("p", { children: "The result is a technical SEO practice that operates at a pace and monitoring depth that manual-only execution often struggles to match consistently. And when the other core SEO pillars are also being executed systematically, businesses can often reach meaningful traction faster than they would under a fragmented, slower-moving process." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap gap-4 justify-center animate-fade-up", style: { animationDelay: "0.2s" }, children: [
          "Crawl Monitoring",
          "Index Management",
          "Schema Validation",
          "Speed Optimization",
          "Signal Prioritization"
        ].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: step })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Ready to Fix Your Technical Foundation?",
          description: "Schedule a strategy session to learn how technical SEO fits into your growth plan.",
          buttonText: "Schedule Strategy Session",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "THE PROCESS" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Here Is What Happens",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "When You Work With Us" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 animate-fade-up", style: { animationDelay: "0.1s" }, children: processSteps.map((step, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-start gap-6 p-6 rounded-2xl border border-border/50 bg-card/20 hover:border-primary/40 transition-colors",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-lg", children: index + 1 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("p", { className: "text-primary font-semibold mb-1", children: [
                  "Step ",
                  index + 1,
                  " — ",
                  step.title
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: step.description })
              ] })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl p-6 border-l-4 border-primary mt-8 max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.2s", backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: "This process is part of GrowSmallBiz's broader Managed AI SEO system — an 8-pillar approach that integrates technical SEO with on-page optimization, local SEO, content strategy, authority building, and more to create compounding, sustainable search visibility for local service businesses." }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "WHO IT'S FOR" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Built for Local Service Businesses That Are Serious About",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Growth" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Technical SEO delivers its highest return for businesses that are actively competing for local search visibility and where organic rankings translate directly into service inquiries. If you recognize yourself in any of the following, this service was designed for you." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: whoThisIsFor.map((item, i) => /* @__PURE__ */ jsxs(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description })
            ]
          },
          i
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "OUR DIFFERENCE" }),
            /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
              "What Makes",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "GrowSmallBiz Different" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: whyDifferent.map((item, i) => /* @__PURE__ */ jsxs(
            GlowCard,
            {
              className: "p-6 animate-fade-up",
              style: { animationDelay: `${i * 0.05}s` },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description })
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.3s" }, children: "Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth." }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.35s" }, children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Frequently Asked Questions About ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Technical SEO" })
          ] }),
          faqs,
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about Technical SEO?",
            description: "We're here to help you understand how technical SEO fits into your broader strategy.",
            tagline: "Let's strengthen your technical foundation together."
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight", children: [
            "Your Website Foundation Is Either Working For You or",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Against You" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6 max-w-3xl mx-auto", children: "Every day your site runs with unresolved technical SEO issues is another day your competitors have an advantage you are unknowingly giving them. Crawl errors don't fix themselves. Indexation problems don't self-correct. Page speed doesn't improve without intervention." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mb-6 max-w-3xl mx-auto", children: "The local service businesses that consistently dominate search results in their markets are not just the ones publishing content and building links — they are the ones whose websites are structurally sound, technically trusted, and optimized for the way search engines actually work today." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "GrowSmallBiz exists to make that level of execution accessible and manageable for local service businesses. We handle the technical complexity. You focus on running your business." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-8 max-w-3xl mx-auto italic", children: "Start with a strategy conversation or let us audit your site for free — no obligation, no sales pressure." })
        ] }),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Let's Fix Your Technical Foundation",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Session",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsx("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Get Your Free SEO Audit" }) }) }),
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
  TechnicalSEO as default
};
