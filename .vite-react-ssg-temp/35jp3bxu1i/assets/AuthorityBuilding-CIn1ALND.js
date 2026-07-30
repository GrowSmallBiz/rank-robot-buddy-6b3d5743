import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { RelatedQuestionsSection } from "./RelatedQuestionsSection-CMEEQ5WT.js";
import { F as FaqJsonLd } from "./FaqJsonLd-D-0II6By.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { Shield, CheckCircle2, BrainCircuit, Map, BookOpen, Network, Zap, Layers, Newspaper, Globe, LinkIcon, FileText, Target, Bot, Users } from "lucide-react";
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
const authorityHeroBg = "/assets/authority-building-hero-bg-8a1icOU8.webp";
const relatedFaqs = [
  {
    question: "How to demonstrate authority in articles?",
    answer: "Demonstrating authority in articles involves using credible sources, showcasing expertise through well-researched content, and providing valuable insights that resonate with your audience. Incorporating data, case studies, and expert quotes can further enhance your credibility."
  },
  {
    question: "What makes a source authoritative?",
    answer: "The characteristics that make a source authoritative include its expertise, credibility, trustworthiness, and the quality of its content, as well as recognition from other reputable sources within the industry."
  },
  {
    question: "How can I verify an author's authority?",
    answer: "Verifying an author's authority involves checking their credentials, professional experience, and previous publications in relevant fields. Additionally, assess their presence in reputable industry forums or platforms to gauge their credibility and expertise."
  },
  {
    question: "What are common traits of authoritative writers?",
    answer: "The common traits of authoritative writers include expertise in their subject matter, a clear and engaging writing style, strong research skills, and the ability to convey complex ideas simply, establishing credibility and trust with their audience."
  },
  {
    question: "How to establish trust with your audience?",
    answer: "Establishing trust with your audience involves consistently delivering valuable content, being transparent in your communications, and demonstrating expertise in your field. Engage authentically and respond promptly to inquiries to build lasting relationships."
  },
  {
    question: "What techniques improve perceived authority in writing?",
    answer: "Techniques that improve perceived authority in writing include using credible sources, demonstrating expertise through detailed knowledge, maintaining a confident tone, and employing clear, concise language. Additionally, incorporating testimonials and case studies can further enhance credibility."
  },
  {
    question: "How does audience perception influence authority?",
    answer: "Audience perception significantly influences authority. When potential customers view a business as credible and trustworthy, it enhances the business's perceived authority, leading to improved search visibility and increased customer engagement."
  },
  {
    question: "What is the impact of authority on engagement?",
    answer: "The impact of authority on engagement is significant. Higher authority enhances trust and credibility, leading to increased user interaction, longer time spent on site, and improved conversion rates for businesses."
  },
  {
    question: "How to use citations to build authority?",
    answer: "Using citations effectively builds authority by ensuring your business is listed accurately across reputable directories, which enhances credibility and boosts local SEO rankings. Consistent citations signal trustworthiness to search engines and potential customers alike."
  },
  {
    question: "What are the benefits of being an authority?",
    answer: "The benefits of being an authority include enhanced credibility, increased trust from customers, improved search visibility, and greater competitive advantage, ultimately leading to higher conversion rates and business growth."
  },
  {
    question: "How to maintain authority over time?",
    answer: "Maintaining authority over time requires consistent quality content creation, regular updates to your website active engagement on social media, and ongoing link-"
  },
  {
    question: "What mistakes undermine writing authority?",
    answer: "Mistakes that undermine writing authority include using unreliable sources, lacking clarity and coherence, failing to engage the target audience, and neglecting proper grammar and punctuation. These errors can diminish credibility and trustworthiness in your writing."
  },
  {
    question: "How to leverage social proof for authority?",
    answer: "Leveraging social proof for authority involves showcasing positive customer testimonials, case studies, and user-generated content to build trust. By displaying authentic experiences, businesses can enhance their credibility and influence potential customers' decisions."
  },
  {
    question: "What is the relationship between authority and influence?",
    answer: "The relationship between authority and influence is that authority establishes credibility, while influence leverages that credibility to affect others' perceptions and actions. Together, they enhance a business's ability to build trust and drive engagement."
  },
  {
    question: "How can feedback enhance writing authority?",
    answer: "Feedback enhances writing authority by providing insights that help refine content, ensuring clarity and credibility. Constructive critiques allow writers to identify strengths and weaknesses, ultimately positioning them as knowledgeable and trustworthy sources in their field."
  },
  {
    question: "What role does consistency play in authority?",
    answer: "The role of consistency in authority is crucial. Consistent branding, messaging, and content production help establish trust and credibility, positioning a business as a reliable source in its market, which ultimately enhances its search visibility."
  },
  {
    question: "How to create authoritative content effectively?",
    answer: "Creating authoritative content effectively involves thorough research, using credible sources, and presenting valuable insights tailored to your audience's needs. Focus on clarity, depth, and relevance to establish trust and enhance your online credibility."
  },
  {
    question: "What are the signs of legitimate authority?",
    answer: "The signs of legitimate authority include a strong online presence, positive customer reviews, relevant industry certifications, consistent content creation, and recognition from reputable sources. These factors collectively enhance credibility and trustworthiness in the market."
  },
  {
    question: "How to address challenges to your authority?",
    answer: "Addressing challenges to your authority involves enhancing your credibility through consistent, high-quality content, engaging with your audience, and leveraging testimonials or case studies. Building strong partnerships and maintaining an active online presence also significantly bolster your perceived authority."
  },
  {
    question: "What platforms help establish writing authority?",
    answer: "Platforms that help establish writing authority include Medium, LinkedIn, and personal blogs. These platforms enable writers to showcase their expertise, share valuable content, and engage with their audience, thereby enhancing their credibility and visibility in their respective fields."
  },
  {
    question: "How to use personal experience to build authority?",
    answer: "Using personal experience to build authority involves sharing your unique insights, challenges, and successes in your field. By authentically communicating these experiences, you establish credibility and connect with your audience, enhancing your reputation as a trusted expert."
  },
  {
    question: "What is the importance of authority in SEO?",
    answer: "The importance of authority in SEO lies in its ability to enhance a website's credibility and trustworthiness."
  }
];
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const authorityServices = [
  {
    icon: BrainCircuit,
    title: "DKN-Driven Authority Planning",
    description: "Map the full universe of topics, subtopics, entities, and questions that define your category before any content or off-site work begins."
  },
  {
    icon: Map,
    title: "Topical Maps and Topic Clustering",
    description: "Organize core topics, supporting topics, and subtopics into a coherent framework that guides content creation and reveals authority-building opportunities."
  },
  {
    icon: BookOpen,
    title: "Topical Authority Blog Strategy",
    description: "A strategic content program designed to expand coverage, reinforce entity associations, support core pages, and demonstrate genuine expertise at scale."
  },
  {
    icon: Layers,
    title: "Authority-Supporting Content Ecosystems",
    description: "Build interconnected content assets that reinforce each other and create a cohesive knowledge architecture search engines and AI systems can trust."
  },
  {
    icon: Newspaper,
    title: "Press Release Strategy and Distribution",
    description: "Premium national press release distribution and selective local and regional targeting to strengthen brand presence and digital authority signals."
  },
  {
    icon: Globe,
    title: "Brand Mentions and Digital Authority Signals",
    description: "Strengthen your brand's credibility and entity clarity across the web through strategic mentions, associations, and trust-building references."
  },
  {
    icon: LinkIcon,
    title: "Authority Link Opportunities",
    description: "Selective, legitimate link opportunities through press coverage, expert placements, partner mentions, and editorial citations that reinforce authority."
  }
];
const whyGSBItems = [
  {
    icon: Layers,
    title: "We build systems, not disconnected campaigns.",
    description: "Many authority services are sold as batches of links, press releases, or content. GrowSmallBiz builds a structured authority system designed to strengthen rankings, trust, and long-term visibility over time."
  },
  {
    icon: FileText,
    title: "We start with planning, not random execution.",
    description: "The most common failure in authority building is doing tactics without a strategic foundation. We build the planning layer first so content, mentions, press activity, and authority signals work together instead of creating scattered results."
  },
  {
    icon: Target,
    title: "We understand local business economics.",
    description: "GrowSmallBiz is built for local service businesses, not enterprise marketing departments. That affects how we prioritize, how we execute, and how we build strategies that support real business growth."
  },
  {
    icon: Bot,
    title: "We combine agentic AI efficiency with human judgment.",
    description: "We use AI to accelerate research, mapping, prioritization, and scale. We use human judgment to protect quality, strategy, credibility, and business alignment."
  },
  {
    icon: Users,
    title: "We are managed and done-for-you.",
    description: "You do not need to coordinate vendors, manage an SEO content machine, or learn authority strategy yourself. GrowSmallBiz manages the process for you as part of the broader Managed AI SEO system."
  },
  {
    icon: Shield,
    title: "We keep the work transparent.",
    description: "You should always understand what is being done, why it matters, and how it supports the bigger search strategy."
  }
];
const faqs = [
  {
    question: "What is the difference between Authority Building and link building?",
    answer: "Link building is one tactic within a broader authority strategy. Authority Building, as GrowSmallBiz defines it, is the full coordinated system — topical coverage, entity clarity, brand presence, press releases, digital PR, brand mentions, and selective link acquisition — that collectively signals expertise and trust to search engines. Focusing only on links while ignoring the other dimensions of authority is one of the most common mistakes in local SEO."
  },
  {
    question: "How long does it take to see results from Authority Building?",
    answer: "Authority Building timelines depend on your starting authority, competition, topic depth, existing content ecosystem, and how much supporting trust infrastructure is already in place. Many businesses begin seeing meaningful progress within the first few months, with stronger gains building over time as authority signals, topical coverage, and brand reinforcement compound."
  },
  {
    question: "Do I need a certain size website or business to benefit from Authority Building?",
    answer: "No. In fact, businesses with smaller or thinner digital footprints often see the most dramatic improvements, because they are starting from a lower baseline and the incremental impact of each new signal is higher. Our DKN planning process adapts to your current situation and builds a strategy appropriate to where you are starting from."
  },
  {
    question: "Does Authority Building replace on-page SEO or Local SEO?",
    answer: "No. Authority Building is one pillar of the broader Managed AI SEO system, and it works best in combination with strong on-page optimization and Local SEO. On-page SEO makes your pages relevant. Local SEO makes your presence visible in local results. Authority Building makes your brand credible and trustworthy across the broader search environment. Each pillar supports the others."
  },
  {
    question: "What kinds of press release placements does GrowSmallBiz pursue?",
    answer: "We distribute through premium national press release channels that place your news on high-authority media properties with genuine editorial credibility. For businesses where local visibility is particularly important, we also pursue placement through relevant local and regional channels. Specific outlets are selected based on your industry, geography, and strategic goals."
  },
  {
    question: "Are the links generated through Authority Building safe and sustainable?",
    answer: "Yes. Every link we pursue is earned through legitimate methods — press coverage, expert placements, partner and association mentions, and editorial citations. We do not buy links, participate in link schemes, or use tactics that violate search engine guidelines. Our approach is designed to build sustainable authority that holds its value over time."
  },
  {
    question: "How does the topical authority blog strategy work?",
    answer: "Our topical authority blog strategy is not a generic content calendar. It is a structured execution of the topical map we build for your business. Every article is selected because it fills a specific gap in your topical coverage, supports a specific cluster in your authority architecture, or addresses a specific question your target audience is asking. Each piece is planned, written, reviewed, and published as part of a coherent strategy — not as isolated blog posts."
  },
  {
    question: "What is a DKN and why does it matter for Authority Building?",
    answer: "DKN stands for Domain Knowledge Network — our framework for mapping the full universe of topics, subtopics, entities, questions, and associations relevant to your business and market. Without understanding that full topic territory, it is impossible to know what content to create, what off-site associations to pursue, or where the most impactful authority gaps are. The DKN ensures our strategy is comprehensive and purposeful from day one."
  },
  {
    question: "Can Authority Building help with AI-generated search results and answer engines?",
    answer: "Yes. AI-powered search systems draw from sources that have demonstrated genuine expertise, consistent brand presence, and broad topic coverage. The same signals that build authority with traditional search engines — topical depth, entity clarity, trusted brand mentions, press references — also improve your visibility with AI-generated search experiences. As AI plays a larger role in how prospective customers find and evaluate local businesses, Authority Building becomes more important, not less."
  },
  {
    question: 'What does "done-for-you" mean in practice?',
    answer: "It means GrowSmallBiz handles every aspect of the authority-building process — from strategic planning and DKN development through topical mapping, content creation, press release writing and distribution, digital PR outreach, and off-site placement management. You are kept informed through regular reporting, but you do not need to manage the process, coordinate vendors, or make tactical decisions. We handle the execution so you can focus on running your business."
  }
];
const AuthorityBuilding = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Authority Building for Local Businesses: Enhance Your SEO!" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz builds authority and trust for your local business. Authority blogs, press releases, and brand mentions. Get your Free SEO Audit!" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "authority building, SEO services, local business SEO, search visibility, online credibility, trust signals, content strategy, digital marketing agency" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/authority-building/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "SEO Success with Topical Authority Boost | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Authority Building for Local Service Businesses",
        serviceType: "Authority Building SEO",
        description: "Systematic authority building for local service businesses through DKN-driven planning, topical maps, authority blogs, press releases, brand mentions, and digital trust signals.",
        url: "/services/seo-agency/authority-building/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Authority Building", url: "/services/seo-agency/authority-building/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 177,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/authority-building/",
        images: [
          {
            url: authorityHeroBg,
            caption: "Topical Authority Building for local service businesses",
            description: "Hero illustration for GrowSmallBiz's Authority Building service — building topical depth, expert content clusters, and credible signals that establish a local service business as the expert search engines and AI platforms trust.",
            width: 1376,
            height: 768
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/authority-building/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Shield, text: "Authority Building for Local Service Businesses" },
          title: "Build the Authority That Turns Search Visibility Into",
          titleHighlight: "Market Trust",
          subtitle: '<h2 className="bg-gradient-heading bg-clip-text text-transparent" class="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">\n  Local Service Businesses Have an Authority Problem, Not Keywords problems\n</h2>Your competitors are <strong>NOT</strong> always better — they are simply seen as more established, more credible, and more trustworthy by search engines, AI systems, and prospective customers.<br/><br/>As one strategic pillar of our Managed AI SEO system, Authority Building helps position your business as the trusted local expert across search results, the broader web, and the minds of prospective customers.<br/><br/>This is not about buying links or gaming algorithms. It is about building a credible presence that signals expertise, earns trust, and compounds over time.',
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
          backgroundImage: authorityHeroBg,
          overlayOpacity: 60
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 208,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE FUNDAMENTALS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 236,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What Authority Building Means in Modern SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 235,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Authority in SEO is no longer measured by backlinks alone. While links still matter, modern search authority is built through multiple interconnected signals — and that makes it far more achievable for local service businesses that approach it strategically." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 243,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold", children: "Search systems evaluate authority through:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            { label: "Topical depth", text: "Does your website demonstrate genuine expertise across the services, problems, and questions your audience cares about?" },
            { label: "Entity clarity", text: "Is it clear who you are, what you do, where you operate, and how your business connects to your market?" },
            { label: "Content breadth", text: "Do you cover your topic space with enough depth and range to be viewed as a reliable resource?" },
            { label: "Brand presence", text: "Do reputable sources across the web mention, reference, or connect with your business?" },
            { label: "Trust signals", text: "Are there consistent, credible references to your business across media, associations, press, and community platforms?" },
            { label: "Semantic relevance", text: "Does your overall digital presence send cohesive signals about your expertise, services, locations, and market relevance?" }
          ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 257,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: item.label }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 258,
                columnNumber: 26
              }, void 0),
              " — ",
              item.text
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 258,
              columnNumber: 23
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 256,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 247,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Authority building is not a single tactic. It is a coordinated system that strengthens how your business is understood, trusted, and surfaced across modern search environments. That coordinated system is what GrowSmallBiz builds as part of your broader Managed AI SEO strategy." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 262,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "For a local roofing contractor, HVAC company, plumbing business, med spa, personal injury attorney, or real estate team, authority building is not a single tactic. It is a coordinated system that helps your business cover its topic space more deeply, reinforce brand credibility beyond your website, and build the trust signals that influence both visibility and conversion in competitive local markets." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 265,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 234,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 233,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE STAKES" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 278,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Authority Matters for Rankings, Trust, and Conversion" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 279,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 277,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Local service businesses operate in one of the most competitive search environments that exists. You are not just competing against nearby providers. You are also competing against directories, marketplaces, aggregators, and established brands that already have stronger trust signals across the web." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 285,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "In that environment, the businesses that win are not always the ones with the most optimized pages. They are the ones search systems have more reason to trust." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 288,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-display font-bold text-xl mt-8", children: "Rankings are only part of the story." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 292,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "High authority improves every downstream metric that matters to your business." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 293,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 mt-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold mb-2", children: "Conversion rates improve" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 297,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "because prospective customers who encounter your brand through trusted sources, stronger content coverage, and credible third-party references often arrive with greater confidence before they ever contact you." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 298,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 296,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold mb-2", children: "AI visibility improves" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 301,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "because AI-assisted discovery and answer-generation systems tend to favor businesses with broader, more consistent, and more credible authority signals — not just a single well-optimized page. The stronger your authority footprint, the easier it becomes for your business to be understood, cited, and surfaced across newer search experiences as well as traditional search." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 302,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 300,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold mb-2", children: "Long-term stability improves" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 305,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "because authority creates staying power. It is harder to displace a business with real topical depth, brand presence, and off-site trust than one relying on thin on-page optimization alone." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 306,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 304,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 295,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary mt-4", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold", children: "The opportunity most local businesses are missing" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 311,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "is that many still have only a shallow authority footprint: a website, a few citations, and some basic SEO. The deeper structure of topical coverage, brand reinforcement, and off-site trust is often missing. That is not just a weakness. It is a competitive opportunity for businesses willing to build authority systematically." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 312,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium", children: "GrowSmallBiz exists to close that gap efficiently, intelligently, and sustainably." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 313,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 310,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 284,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 276,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 275,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 274,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR AUTHORITY METHODOLOGY" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What GrowSmallBiz Includes Under Authority Building" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 325,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Authority Building at GrowSmallBiz is a multi-layer service, not a single deliverable. It addresses every major dimension of search authority for local service businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 328,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 323,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: authorityServices.map((service, index) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(service.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 339,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 338,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: service.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 341,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 342,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 333,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 321,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE FOUNDATION" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 354,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "How DKN, Topical Maps, and Topical Authority Blogs Support Authority Growth" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 355,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 353,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-0 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(BrainCircuit, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 364,
                columnNumber: 21
              }, void 0),
              "DKN-Driven Authority Planning"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 363,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed pl-9", children: /* @__PURE__ */ jsxDEV("p", { children: "Every authority strategy begins with GrowSmallBiz's Domain Knowledge Network (DKN) planning process. Before content is created or off-site placements are pursued, we map the full territory of topics, subtopics, entities, and questions that define your category and market. This creates the structural foundation for every authority-building action that follows." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 368,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 367,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 362,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 374,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", style: { animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(Map, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 379,
                columnNumber: 21
              }, void 0),
              "Topical Maps and Topic Clustering"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 378,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed pl-9", children: /* @__PURE__ */ jsxDEV("p", { children: "Once the topic territory is mapped, GrowSmallBiz builds a topical map that organizes core topics, supporting topics, and related subtopics into a coherent framework. This helps guide content creation and reveals the clusters where meaningful authority can be built." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 383,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 382,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 377,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 389,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 394,
                columnNumber: 21
              }, void 0),
              "Topical Authority Blog Strategy"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 393,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed pl-9", children: /* @__PURE__ */ jsxDEV("p", { children: "A topical authority blog is not a generic publishing calendar. It is a strategic content program designed to expand coverage, reinforce entity associations, support core pages through internal linking, and demonstrate genuine expertise at scale. Every article serves a purpose inside the broader authority architecture." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 398,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 397,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 392,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 404,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up p-8", style: { animationDelay: "0.3s" }, children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(Network, { className: "w-6 h-6 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 410,
                columnNumber: 23
              }, void 0),
              "Authority Is Architectural"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 409,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "These three pillars — DKN planning, topical mapping, and authority blogging — form the structural foundation of every authority strategy. Without this architecture, off-site efforts like press releases and brand mentions lack the on-site depth to be fully effective." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 413,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 408,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 407,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 360,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 352,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 351,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 350,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OFF-SITE REINFORCEMENT" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "How Press Releases, Brand Mentions, and Digital Authority Signals Reinforce Authority" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 429,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 427,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Authority is strengthened when your business is referenced, mentioned, and associated with credible sources beyond your own website." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 435,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz manages:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 438,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 434,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          "Press release strategy and distribution through premium national channels",
          "Selective local and regional press targeting where relevant",
          "Expert commentary opportunities",
          "Editorial mentions",
          "Community and association references",
          "Broader digital authority signals that reinforce your brand's credibility and entity clarity across the web"
        ].map((point, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 454,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground/90", children: point }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 455,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 453,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 444,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 443,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10 max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.15s" }, children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 space-y-4 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: "These off-site signals work best when supported by the on-site authority architecture described above. Together, they create a comprehensive trust profile that search engines and AI systems recognize and reward." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 463,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 462,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 461,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 426,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 425,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 424,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR APPROACH" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 477,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "How GrowSmallBiz Uses Agentic AI SEO Playbooks to Accelerate Authority Building" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 478,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 476,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Building real authority at the scale required to move the needle in competitive local markets has historically been slow, fragmented, and resource-intensive. Many providers either charge rates that are difficult for local businesses to justify or cut corners in ways that produce shallow, inconsistent results." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 484,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz solves this by using agentic AI playbooks and AI-assisted workflows — combined with human strategy, editorial judgment, and quality control at every stage." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 487,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold", children: "Here is what that means in practice:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 490,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            { label: "Identify topic gaps faster", text: "Our AI-assisted planning systems help map your topic territory more comprehensively and efficiently than manual research alone, surfacing authority gaps that might otherwise take weeks to uncover." },
            { label: "Build smarter topical maps", text: "AI workflows help us organize and refine topical structures that better support how modern search systems evaluate depth, relevance, and coverage." },
            { label: "Plan authority-supporting content more efficiently", text: "We can align supporting content, authority assets, and topical priorities faster without sacrificing strategy or editorial standards." },
            { label: "Surface entity and reputation gaps", text: "By analyzing competitive positioning and off-site presence at scale, AI-assisted workflows help identify brand, entity, and credibility gaps that manual review can miss." },
            { label: "Accelerate authority-asset planning", text: "Press release angles, digital PR opportunities, mention opportunities, and supporting authority assets can be prioritized faster, helping the program move with greater consistency." },
            { label: "Maintain broader monthly coverage", text: "AI-assisted management helps keep content, press, mentions, and link opportunities aligned so the authority strategy stays coherent as it grows." }
          ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 rounded-xl p-4 bg-background/60 border border-border/50", children: [
            /* @__PURE__ */ jsxDEV(Zap, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 501,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: item.label }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 502,
                columnNumber: 26
              }, void 0),
              " — ",
              item.text
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
              lineNumber: 502,
              columnNumber: 23
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 500,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 491,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The result is an authority-building program that delivers more coverage, more consistency, and more strategic depth than a traditionally resourced program of similar cost — without sacrificing the human judgment and editorial quality that genuine authority requires." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 506,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 483,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 475,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 474,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 473,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Ready to Build Real Search Authority?",
          description: "Schedule a strategy session to learn how Authority Building fits into your growth plan.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 515,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "OUR DIFFERENCE",
            title: "Why",
            titleHighlight: "GrowSmallBiz"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 526,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto mb-12 animate-fade-up", children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed text-center", children: "There is no shortage of agencies offering some version of link building, content marketing, or digital PR. What makes GrowSmallBiz different is that we do not treat authority building as an isolated tactic. We build it as part of a broader Managed AI SEO system designed specifically for local service businesses." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 533,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 532,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up",
            style: { animationDelay: `${i * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 546,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 545,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground mb-1", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                  lineNumber: 549,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                  lineNumber: 550,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
                lineNumber: 548,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 540,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 538,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-8 animate-fade-up", style: { animationDelay: "0.35s" }, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 558,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 557,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 525,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 524,
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
            title: "Have questions about Authority Building?",
            description: "We're here to help you understand how authority building fits your business.",
            tagline: "Let's build your search authority together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 566,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { items: relatedFaqs }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 580,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FaqJsonLd,
        {
          items: [...faqs, ...relatedFaqs],
          pageUrl: "https://growsmallbiz.io/services/seo-agency/authority-building/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 582,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 591,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Build Authority That Lasts. Start Today." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 592,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: "Search engines do not rank businesses they do not trust. AI systems do not recommend brands they cannot verify. Prospective customers do not choose providers they are not confident in." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 595,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Authority is not a luxury. It is the foundation of sustainable search visibility, lead generation, and market credibility. GrowSmallBiz builds that authority for you — systematically, intelligently, and without requiring you to become an SEO expert." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 598,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 590,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Build Your Search Authority",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 603,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Free SEO Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 613,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 612,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 611,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 620,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
            lineNumber: 621,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
          lineNumber: 619,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 589,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 588,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
        lineNumber: 627,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
      lineNumber: 630,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/AuthorityBuilding.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, void 0);
};
export {
  AuthorityBuilding as default
};
