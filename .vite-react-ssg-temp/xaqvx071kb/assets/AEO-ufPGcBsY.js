import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { S as ServiceHero } from "./ServiceHero-Z03OcfAP.js";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { MessageCircleQuestion, CheckCircle2, Search, Zap, Heart, Home, Scale, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import "react";
import { G as GlowCard } from "./glow-card-DLstjNul.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const aeoHeroBg = "/assets/aeo-hero-bg-BawFX-Wd.webp";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const aeoIncludes = [
  {
    num: "01",
    title: "Service-Specific Question Mapping",
    description: "We identify the real questions your target customers ask about your service category — from basic awareness queries to high-intent comparison and hiring questions. This mapping becomes the foundation for all AEO content produced for your business."
  },
  {
    num: "02",
    title: "Direct-Answer Content Formatting",
    description: "We write content that opens with a clear, concise answer before expanding into supporting detail. This format is the primary signal search engines use to evaluate content for featured snippet eligibility and AI-generated answer inclusion."
  },
  {
    num: "03",
    title: "FAQ Optimization and Placement",
    description: "We build and optimize FAQ sections that target People Also Ask placements and voice-search responses. Questions are selected for commercial relevance, search volume, and the ability to establish your authority on service-specific topics. All FAQ content is marked up with proper schema for maximum search engine readability."
  },
  {
    num: "04",
    title: "Semantic Answer Blocks",
    description: "Beyond FAQs, we embed answer-structured content blocks within service pages, about pages, and blog content — formatted for extraction by answer engines without disrupting the reading flow for human visitors."
  },
  {
    num: "05",
    title: "Intent-Based Answer Creation",
    description: "We map content to the three primary intent categories — informational, comparative, and transactional — and ensure your site has clear, well-structured answers at each stage of the buyer journey. This breadth of coverage increases your eligibility across a wider range of answer placements."
  },
  {
    num: "06",
    title: "Featured Snippet Targeting",
    description: "We identify existing keyword positions where featured snippet opportunities exist and restructure or add content to compete for those placements. Snippet targeting includes paragraph snippets, list snippets, and table snippets depending on the query type."
  },
  {
    num: "07",
    title: "Structured Response Formatting",
    description: "We apply consistent formatting guidelines across all answer content — proper heading hierarchy, concise opening sentences, numbered and bulleted structures where appropriate — to ensure readability by both humans and answer-engine crawlers."
  },
  {
    num: "08",
    title: "Ongoing Question Coverage Expansion",
    description: "Search behavior evolves. New questions emerge as services change, seasons shift, and buyer expectations develop. We continuously expand your question coverage to capture emerging answer opportunities before competitors address them."
  }
];
const searchBehaviorItems = [
  {
    title: "Question-Led Discovery",
    description: 'Searches like "what should I look for in a local SEO company," "how much does med spa treatment cost," or "what questions should I ask before hiring a roofer" often happen near the consideration stage. The business that answers well earns trust before the sales conversation starts.'
  },
  {
    title: "AI-Assisted Discovery",
    description: "Modern search experiences increasingly summarize, extract, and recommend content from pages that are well structured and easy to interpret. If your website is not organized as a credible knowledge source, it is less likely to earn those answer-driven placements."
  },
  {
    title: "Trust Before the Click",
    description: "When your content is surfaced as the answer, it does more than generate visibility. It helps establish credibility before a prospect visits your site, fills out a form, or calls your office."
  },
  {
    title: "Single-Answer Interfaces",
    description: "Voice search, assistant-led search, and many AI-assisted experiences often compress choice. Instead of presenting ten equally visible blue links, they elevate fewer answers. Structured content gives your business a better chance to be one of them."
  },
  {
    title: "Higher Intent, Better Leads",
    description: "Question-led searchers are often closer to action. A person asking how to choose, compare, price, or prepare is usually further along than someone typing a broad service term."
  },
  {
    title: "Opportunity While Many Competitors Stay Generic",
    description: "Many local service businesses still rely on thin service pages and unstructured FAQs. That leaves room for businesses with stronger answer architecture to earn visibility and trust earlier in the buying journey."
  }
];
const aiPlaybookItems = [
  {
    title: "Automated Question Research",
    description: "Our playbook surfaces real question patterns tied to your service category, market, and buyer intent, helping us focus on what prospects are actually asking before they choose a provider."
  },
  {
    title: "Structured Content Frameworks",
    description: "We use AI-assisted drafting and formatting systems built around direct-answer structure, semantic clarity, and search-readability. Human review ensures the final content stays useful, accurate, and aligned with your brand and services."
  },
  {
    title: "Snippet and Answer-Gap Identification",
    description: "We analyze where your site is already close to answer visibility and where stronger structure, clarity, or coverage can improve eligibility for snippets, PAA results, and other answer-driven placements."
  },
  {
    title: "Schema and Search-Readiness Implementation",
    description: "Structured data helps search systems interpret your pages more clearly. We apply the relevant markup and formatting so new content is easier to understand, organize, and surface."
  },
  {
    title: "Coverage Monitoring and Expansion",
    description: "We track which questions your site addresses, where new gaps exist, and how visibility evolves over time. This keeps AEO as an active managed process rather than a one-time content exercise."
  }
];
const useCases = [
  {
    icon: Heart,
    category: "Medical Aesthetics / Med Spa",
    title: "Answering Treatment Questions That Drive Bookings",
    description: 'A med spa with structured FAQ content covering questions like "how long does Botox last," "what is the difference between a chemical peel and a HydraFacial," and "is CoolSculpting painful" becomes the trusted resource that buyers consult before booking. Those answer placements build credibility before the first call.',
    result: "Result: More informed, higher-intent booking inquiries"
  },
  {
    icon: Home,
    category: "Home Services (HVAC, Plumbing, Electrical)",
    title: 'Owning the "How to Choose" Search Moment',
    description: 'Home service buyers routinely search "how to find a trustworthy HVAC company" or "what questions should I ask a plumber before hiring." A business that answers these questions directly — and appears in the featured snippet — has already positioned itself as the credible choice before the buyer visits a single competitor page.',
    result: "Result: Branded trust established at the research stage"
  },
  {
    icon: Scale,
    category: "Professional Services (Legal, Financial, Dental)",
    title: "Earning Credibility Through Answer Authority",
    description: "For professionals where trust is the primary buying criterion, appearing as the source of a clear, expert answer to a legal question, dental concern, or financial query builds authority that a standard listing cannot. AEO positions professional service businesses as educators first, which accelerates buyer trust.",
    result: "Result: Higher-quality consultations, shorter sales cycles"
  },
  {
    icon: Dumbbell,
    category: "Fitness and Wellness",
    title: "Surfacing for Goal-Oriented Question Searches",
    description: 'Fitness and wellness buyers search around goals — "how many sessions does it take to see results," "what should I eat before a personal training session," "is yoga or pilates better for back pain." Content structured to answer these questions captures traffic at the consideration stage and moves buyers toward contact.',
    result: "Result: Search visibility aligned with buyer motivation"
  }
];
const whyGSBItems = [
  {
    title: "Local Service Business Focus",
    description: "Our SEO strategy is built around the way local service buyers actually search, compare, and choose providers. That means question mapping, answer architecture, and content planning shaped by real service-category buying behavior."
  },
  {
    title: "Managed Execution, Not Advice Alone",
    description: "AEO works best when it is maintained, expanded, and refined over time. GrowSmallBiz manages the research, structuring, implementation, and ongoing improvement so your team does not have to turn this into another internal project."
  },
  {
    title: "Integrated SEO, Not a Standalone Tactic",
    description: "AEO performs best when it is connected to strong service pages, technical SEO, authority building, local relevance, and broader content strategy. That is why it sits inside the GrowSmallBiz Managed AI SEO system rather than being sold as an isolated deliverable."
  },
  {
    title: "Agentic AI + Human Oversight",
    description: "We use an Agentic AI SEO Playbook to accelerate research, pattern detection, and structured execution, while human strategy guides judgment, quality control, and alignment with your business goals."
  },
  {
    title: "Business-Focused Reporting",
    description: "You should be able to see not just what content was published, but what questions are being covered, where answer visibility is improving, and how that work supports qualified traffic, inquiries, and pipeline growth."
  },
  {
    title: "Experienced Commercial Perspective",
    description: "GrowSmallBiz brings senior sales, marketing, and digital transformation experience into a local-business context, helping translate SEO activity into practical growth priorities."
  },
  {
    title: "Bay Area Roots, National Reach",
    description: "Based in Danville, California, GrowSmallBiz understands local market dynamics while supporting service businesses across the Bay Area and beyond."
  }
];
const faqs = [
  {
    question: "How is AEO different from traditional SEO?",
    answer: "Traditional SEO focuses on ranking a page for a keyword. AEO goes a step further — it structures content so your business becomes the answer to a question, not just a result on a list. This matters because search behavior has shifted toward question-led queries, and answer engines reward content that is clearly formatted to respond to those questions directly and credibly."
  },
  {
    question: "Why should a local service business care about AEO?",
    answer: 'Local service buyers increasingly search by asking questions — "What is the best plumber near me?", "How much does a med spa facial cost?", "Should I use Botox or fillers?" Businesses whose content directly answers these questions are more likely to be surfaced, trusted, and contacted before competitors who rely on traditional keyword-match pages alone.'
  },
  {
    question: "How does AEO connect to getting more leads?",
    answer: 'When your business appears as the answer to a specific service question, you earn visibility at the highest point of buyer intent. Someone asking "how do I choose a local SEO company" is much closer to making a decision than someone browsing generic results. AEO puts your business in front of those high-intent moments, which increases qualified traffic and consultation requests.'
  },
  {
    question: "Is AEO the same as GEO (Generative Engine Optimization)?",
    answer: "They are related but distinct. AEO focuses specifically on structuring content to win direct-answer placements — featured snippets, People Also Ask, voice results. GEO is broader, focusing on ensuring your business is understood and cited by AI-generated search experiences overall. GrowSmallBiz includes both as separate pillars within its Managed AI SEO system, with each targeting a different layer of modern search visibility."
  }
];
const AEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Answer Engine Optimization (AEO) Services | GrowSmallBiz Managed AI SEO" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz structures your content to become the answer in featured snippets, People Also Ask, and AI-assisted search. AEO services built for local service businesses." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/aeo/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Answer Engine Optimization (AEO)",
        serviceType: "Answer Engine Optimization",
        description: "GrowSmallBiz structures your content to become the answer in featured snippets, People Also Ask, and AI-assisted search. AEO services built for local service businesses.",
        url: "/services/seo-agency/aeo/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Answer Engine Optimization", url: "/services/seo-agency/aeo/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: MessageCircleQuestion, text: "Managed AI SEO — AEO Pillar" },
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "AEO Services That Help Local Service Businesses Become the",
            " "
          ] }),
          titleHighlight: "Answer",
          subtitle: "Search behavior has shifted. Local buyers are asking full questions, and modern search experiences increasingly surface direct answers instead of just lists of links.",
          description: "GrowSmallBiz helps local service businesses build answer-ready content architecture that improves visibility across search ecosystems, strengthens trust early, and turns more search impressions into calls, inquiries, and booked jobs.",
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
          note: "AEO is one pillar of the GrowSmallBiz Managed AI SEO system — a broader SEO strategy built to help local service businesses earn visibility, trust, and qualified demand.",
          backgroundImage: aeoHeroBg,
          overlayOpacity: 82
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "The Shift You Cannot Ignore" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "What Is",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Answer Engine Optimization" }),
            "?"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { children: "Answer Engine Optimization, or AEO, is the practice of structuring your website content so search engines and AI-assisted discovery systems can interpret, extract, and surface your business as a credible answer to specific buyer questions." }),
          /* @__PURE__ */ jsx("p", { children: 'When a homeowner searches "how do I choose a reliable plumber" or "what should I ask before hiring an HVAC company," they are not casually browsing. They are evaluating options. The businesses that answer clearly, directly, and credibly are better positioned to earn prominent visibility, early trust, and stronger consideration.' }),
          /* @__PURE__ */ jsx("p", { children: "That visibility can appear in featured snippets, People Also Ask results, voice responses, and AI-assisted answer summaries. But the real value is not just placement. It is what that placement does for your business: it helps you enter the buyer's decision process earlier and with more authority." }),
          /* @__PURE__ */ jsx("p", { children: "AEO is not a shortcut or a standalone trick. It is disciplined content architecture: clear question targeting, direct-answer formatting, strong topical coverage, and structured signals that help modern search systems understand what your business knows and whom it serves." }),
          /* @__PURE__ */ jsx("p", { children: "In practical terms, AEO helps local service businesses move from being one option in a list to being seen as a trusted source before the prospect ever reaches out." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: "Key Stats" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "~43% of Google SERPs include a People Also Ask box, making question-based content one of the highest-leverage placements in search today." }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/60 italic mt-1", children: "Source: Similarweb SERP Features Study, 2023" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Conversational and question-based searches have grown steadily over the past decade, with Google publicly reporting year-over-year increases in long-form, question-phrased queries as users adopt more natural language search behavior." }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/60 italic mt-1", children: "Source: Google Trends; Google's Year in Search annual reports" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Featured snippets (Position Zero) appear above all organic results — including the #1 ranked page. An independent study found that pages holding a featured snippet capture a measurably higher click-through rate on informational queries compared to the standard #1 position when no snippet is present." }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/60 italic mt-1", children: 'Source: Backlinko, "Featured Snippets: The Definitive Guide," 2022' })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Search Has Changed" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "How Local Service Buyers Research and Choose",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Providers Now" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-up text-center", children: "Local buyers increasingly search the way they think: in questions, comparisons, and problem-based language. They want quick clarity, signs of credibility, and confidence that they are choosing the right business." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-0 max-w-3xl mx-auto", children: searchBehaviorItems.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50",
              style: { animationDelay: `${index * 0.05}s` },
              children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-primary mt-1 shrink-0" }),
                  item.title
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed pl-9", children: item.description })
              ]
            }
          ),
          index < searchBehaviorItems.length - 1 && /* @__PURE__ */ jsx("div", { className: "border-b border-primary/10 mx-8" })
        ] }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "What We Build" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "What GrowSmallBiz Includes in",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "AEO" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Our AEO work is not a checklist or a one-time content drop. It is an ongoing content structuring process built around how your specific buyers search." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: aeoIncludes.map((item, index) => /* @__PURE__ */ jsxs(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-primary mb-3", children: item.num }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Faster. Broader. More Consistent." }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "How GrowSmallBiz Executes AEO with an",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Agentic AI SEO Playbook" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: /* @__PURE__ */ jsx("p", { children: "Effective AEO is not just about producing more FAQ content. It requires disciplined question research, intent mapping, content structuring, schema implementation, editorial judgment, and continuous refinement. GrowSmallBiz uses an Agentic AI SEO Playbook to accelerate research and execution, with human strategy guiding priorities, quality, and business alignment." }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-0 max-w-3xl mx-auto mt-12", children: aiPlaybookItems.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50",
              style: { animationDelay: `${index * 0.05}s` },
              children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-primary mt-1 shrink-0" }),
                  item.title
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed pl-9", children: item.description })
              ]
            }
          ),
          index < aiPlaybookItems.length - 1 && /* @__PURE__ */ jsx("div", { className: "border-b border-primary/10 mx-8" })
        ] }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Real-World Application" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "What AEO Looks Like in",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Real Local Buying Situations" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-up text-center", children: [
          /* @__PURE__ */ jsx("p", { children: "AEO is not theoretical. It affects the exact moments when local buyers are comparing providers, evaluating trust, and deciding whom to contact." }),
          /* @__PURE__ */ jsx("p", { children: 'Answer-ready content can include FAQ sections, service-page answer blocks, "how to choose" guides, pricing or treatment explainers, comparison content, and snippet-ready Q&A modules built around real buyer questions.' }),
          /* @__PURE__ */ jsx("p", { children: "Here is how answer-ready content can support visibility and credibility across common local service categories." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto", children: useCases.map((uc, index) => /* @__PURE__ */ jsxs(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(uc.icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-2", children: uc.category }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: uc.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: uc.description }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground italic", children: uc.result })
            ]
          },
          index
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Why GrowSmallBiz" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Built for Local Service Businesses.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Designed to Improve Visibility Where Buying Decisions Start." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "GrowSmallBiz does not treat AEO as a disconnected tactic. We treat it as one part of a broader managed SEO system built to help local service businesses earn trust, visibility, and qualified inquiries across modern search environments." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.description })
            ] })
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.35s" }, children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Frequently Asked Questions About ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "AEO" })
          ] }),
          faqs,
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about AEO?",
            description: "We're here to help you understand how answer engine optimization fits your business.",
            tagline: "Let's build your answer visibility together."
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "Ready to Become the Answer?" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight", children: [
            "Your Buyers Are Already Asking the Questions.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Make Sure Your Business Is Answer Engine Optimized (AEO)." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-3xl mx-auto", children: "GrowSmallBiz will map the questions your buyers are asking, structure content that positions your business as the authoritative answer, and build the coverage that earns featured placement across modern search environments. Start with a strategy session or let us audit what you have right now." })
        ] }),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Let's Build Your Answer Visibility",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsx("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Free SEO Audit" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto", children: "AEO is one pillar of the GrowSmallBiz Managed AI SEO system. Schedule a session to see how all components work together for your business." }),
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
  AEO as default
};
