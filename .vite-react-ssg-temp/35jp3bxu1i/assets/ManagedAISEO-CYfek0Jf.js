import { j as jsxDEV, c as cn } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { RelatedQuestionsSection } from "./RelatedQuestionsSection-CMEEQ5WT.js";
import { F as FaqJsonLd } from "./FaqJsonLd-D-0II6By.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { X, Bot, ArrowRight, Search, CheckCircle2, Users, Code, FileText, MapPin, BookOpen, Link2, Sparkles, BarChart3, Zap, Layers, RefreshCw, Target, Settings, Home, Heart, Scale, Building, Eye, Puzzle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-DT9NPaz7.js";
import { WhyChooseSection } from "./WhyChooseSection-CylwFt5k.js";
import { G as GlowCard } from "./glow-card-2Rtno8B6.js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
const relatedFaqs = [
  {
    question: "What are the benefits of using an AI SEO service for small businesses?",
    answer: "The benefits of using an AI SEO service for small businesses include enhanced online visibility, improved search rankings, and data-driven insights that optimize marketing strategies, ultimately attracting more customers and driving growth efficiently."
  },
  {
    question: "How can local service businesses improve their online visibility with AI-powered SEO?",
    answer: "Local service businesses can enhance their online visibility through AI-powered SEO by leveraging data-driven insights to optimize their websites, improve local search rankings, and create targeted content that resonates with their audience, ultimately attracting more customers."
  },
  {
    question: "What features should I look for in a managed AI SEO system?",
    answer: "The features to look for in a managed AI SEO system include comprehensive analytics, automated reporting, local SEO optimization, content generation capabilities, and ongoing technical support to ensure your local service business maintains strong online visibility."
  },
  {
    question: "What advantages does AI SEO offer small businesses?",
    answer: "The advantages of AI SEO for small businesses include enhanced efficiency in optimizing online presence, improved targeting of local customers, and data-driven insights that streamline marketing strategies, ultimately leading to increased visibility and customer acquisition."
  },
  {
    question: "How can AI SEO enhance local business visibility?",
    answer: "AI SEO enhances local business visibility by optimizing online content and improving search engine rankings through data-driven strategies. This targeted approach ensures that local service businesses attract more relevant customers, ultimately boosting their online presence and engagement."
  },
  {
    question: "What key features define a managed AI SEO system?",
    answer: "The key features that define a managed AI SEO system include automated keyword analysis, ongoing performance monitoring, adaptive content strategies, and integration of local SEO tactics, all aimed at enhancing visibility and driving customer engagement for local service businesses."
  },
  {
    question: "How does AI improve SEO strategies for small businesses?",
    answer: "AI improves SEO strategies for small businesses by leveraging data analysis and automation to enhance keyword targeting, optimize content, and streamline technical SEO processes, ultimately increasing online visibility and attracting more customers effectively."
  },
  {
    question: "What results can small businesses expect from AI SEO?",
    answer: "The results small businesses can expect from AI SEO include improved search engine rankings, increased online visibility, and enhanced customer engagement, ultimately leading to more traffic and higher conversion rates."
  },
  {
    question: "How can AI SEO services attract more customers?",
    answer: "AI SEO services attract more customers by optimizing online visibility through data-driven strategies, enhancing local search rankings, and improving website performance, ultimately leading to increased traffic and higher conversion rates for local service businesses."
  },
  {
    question: "What metrics measure the success of AI SEO?",
    answer: "The metrics that measure the success of AI SEO include organic traffic growth, keyword rankings, conversion rates, bounce rates, and user engagement metrics. These indicators help assess the effectiveness of AI-driven strategies in enhancing online visibility and attracting customers."
  },
  {
    question: "How does AI SEO adapt to changing algorithms?",
    answer: "AI SEO adapts to changing algorithms by continuously analyzing data and trends, allowing it to identify shifts in search engine criteria. This enables ongoing optimization strategies that align with the latest algorithm updates, ensuring sustained visibility and performance."
  },
  {
    question: "What is the cost-effectiveness of AI SEO for small businesses?",
    answer: "The cost-effectiveness of AI SEO for small businesses lies in its ability to automate and optimize processes, reducing time and labor costs while improving search visibility and customer engagement, ultimately leading to a higher return on investment."
  },
  {
    question: "How can local businesses leverage AI for SEO?",
    answer: "Local businesses can leverage AI for SEO by utilizing advanced algorithms to analyze data, optimize keywords, and enhance content strategies. This enables them to improve search rankings, target local audiences effectively, and ultimately drive more traffic to their websites."
  },
  {
    question: "What are common challenges with AI SEO implementation?",
    answer: "Common challenges with AI SEO implementation include data quality issues, integration with existing systems, understanding AI algorithms, and maintaining ongoing optimization to adapt to changing search engine guidelines. These factors can hinder effective results for local service businesses."
  },
  {
    question: "How does AI SEO compare to traditional SEO methods?",
    answer: "AI SEO offers a more data-driven, efficient approach compared to traditional SEO methods, leveraging algorithms to analyze trends and optimize content, resulting in faster, more accurate adjustments that enhance online visibility for local service businesses."
  },
  {
    question: "What role does content play in AI SEO strategies?",
    answer: "The role of content in AI SEO strategies is crucial, as high-quality, relevant content enhances search engine rankings, engages users, and drives organic traffic, ultimately helping local service businesses to connect with their target audience effectively."
  },
  {
    question: "How can small businesses track AI SEO performance?",
    answer: "Small businesses can track AI SEO performance by utilizing analytics tools, monitoring keyword rankings, and assessing website traffic and conversion rates. Regularly reviewing these metrics helps refine strategies and improve online visibility."
  },
  {
    question: "What industries benefit most from AI SEO services?",
    answer: "The industries that benefit most from AI SEO services include local service businesses such as healthcare, home services, and retail, as they rely heavily on online visibility to attract and engage customers in their communities."
  },
  {
    question: "How often should small businesses update their AI SEO?",
    answer: "Small businesses should update their AI SEO strategies regularly, ideally every 3 to 6 months, to adapt to changing algorithms, market trends, and customer behavior, ensuring optimal online visibility and continued growth."
  },
  {
    question: "What tools are essential for managing AI SEO?",
    answer: "The essential tools for managing AI SEO include keyword research tools, analytics platforms, content optimization software, and local SEO tools. These resources help streamline processes, improve search rankings, and enhance online visibility for local service businesses."
  },
  {
    question: "How can AI SEO improve website user experience?",
    answer: "AI SEO enhances website user experience by optimizing content relevance, improving site speed, and ensuring mobile-friendliness, which collectively lead to easier navigation and increased user engagement."
  },
  {
    question: "What is the timeline for seeing results from AI SEO?",
    answer: "The timeline for seeing results from AI SEO varies, but typically, businesses can expect to notice improvements in their online visibility within three to six months as the strategies take effect and search engines index the changes."
  },
  {
    question: "How can businesses ensure quality in AI SEO services?",
    answer: "To ensure quality in AI SEO services, businesses should choose providers with proven expertise, transparent methodologies, and ongoing support. Regular performance audits and clear communication are also essential to maintain high standards and adapt strategies effectively."
  },
  {
    question: "What are the risks of not using AI SEO?",
    answer: "The risks of not using AI SEO include decreased online visibility, lower search engine rankings, and missed opportunities to attract local customers. Without AI-driven strategies, businesses may struggle to compete effectively in the digital landscape."
  },
  {
    question: "How does AI SEO support local search optimization?",
    answer: "AI SEO supports local search optimization by utilizing advanced algorithms to analyze local search trends, optimize content for relevant keywords, and enhance website structure, ensuring businesses appear prominently in local search results and attract more targeted customers."
  },
  {
    question: "What training is needed for effective AI SEO use?",
    answer: "Effective AI SEO use requires training in data analysis, understanding SEO principles, and familiarity with AI tools. Additionally, ongoing education in algorithm updates and local search strategies is essential for maximizing results in a competitive market."
  },
  {
    question: "How can businesses integrate AI SEO with other marketing strategies?",
    answer: "Integrating AI SEO with other marketing strategies involves aligning SEO efforts with content marketing, social media, and paid advertising to create a cohesive approach that enhances visibility and engagement across all channels."
  },
  {
    question: "What customer feedback is important for AI SEO improvement?",
    answer: "Customer feedback that is important for AI SEO improvement includes insights on user experience, content relevance, and search result satisfaction. This feedback helps refine strategies, ensuring that the SEO approach aligns with customer expectations and enhances online visibility."
  },
  {
    question: "How can AI SEO help in competitive analysis?",
    answer: "AI SEO enhances competitive analysis by leveraging data-driven insights to identify competitors' strengths and weaknesses. This allows businesses to refine their strategies, optimize content, and improve their online presence, ultimately gaining an edge in the market."
  },
  {
    question: "What future trends should businesses watch in AI SEO?",
    answer: "Future trends businesses should watch in AI SEO include the increasing use of natural language processing for content optimization, the rise of voice search, and the integration of AI-driven analytics to enhance user experience and personalize marketing strategies."
  }
];
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  void 0
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPortal, { children: [
  /* @__PURE__ */ jsxDEV(DialogOverlay, {}, void 0, false, {
    fileName: "/dev-server/src/components/ui/dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/ui/dialog.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "/dev-server/src/components/ui/dialog.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ui/dialog.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/components/ui/dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, void 0));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dialog.tsx",
    lineNumber: 68,
    columnNumber: 3
  },
  void 0
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/dialog.tsx",
  lineNumber: 80,
  columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const seoDashboardMetrics = "/assets/seo-dashboard-metrics-CU-wBCdk.webp";
const managedAiSeoHeroBg = "/assets/managed-ai-seo-hero-bg-DYGMfo4j.webp";
const pillarTechnicalSeo = "/assets/pillar-technical-seo-C4ZpDzqi.webp";
const pillarOnPageSeo = "/assets/pillar-on-page-seo-CovDUCkT.webp";
const pillarLocalSeo = "/assets/pillar-local-seo-CW4nYFUA.webp";
const pillarTopicalAuthority = "/assets/pillar-topical-authority-De0hSCNT.webp";
const pillarAeo = "/assets/pillar-aeo-Ddc_lUBT.webp";
const pillarLinkBuilding = "/assets/pillar-link-building-BzlnM5hB.webp";
const pillarReporting = "/assets/pillar-reporting-BAvFP_r7.webp";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const pillarImages = [
  pillarTechnicalSeo,
  pillarOnPageSeo,
  pillarLocalSeo,
  pillarTopicalAuthority,
  pillarLinkBuilding,
  pillarAeo,
  pillarReporting
];
const pillars = [
  {
    icon: Code,
    title: "Technical SEO",
    description: "If your website's foundation is broken, nothing else in your SEO program will perform. Technical SEO is the infrastructure layer — ensuring search engines can properly access, crawl, index, and understand your site. GrowSmallBiz conducts ongoing technical audits using AI-assisted tools to identify and resolve issues before they suppress your rankings.",
    covers: ["Site health audits", "Crawlability", "Indexation", "Page speed / Core Web Vitals", "Schema markup", "Internal site structure", "Technical issue cleanup", "Mobile usability", "Canonicalization and duplicate-content controls"],
    link: "/services/seo-agency/technical-seo/"
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "On-page SEO is how your website communicates relevance to both search engines and real people. GrowSmallBiz optimizes your pages for keyword alignment, search intent, and conversion — improving how they are structured, how they communicate value, and how they guide visitors toward action.",
    covers: ["Title tags", "Meta descriptions", "Header structure", "Keyword-to-page alignment", "Service page optimization", "Internal linking", "Image optimization", "Semantic content improvements", "Conversion-focused page enhancements"],
    link: "/services/seo-agency/on-page-seo/"
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "For local service businesses, local SEO is the most direct path to new customers. GrowSmallBiz manages the full local SEO ecosystem: your Google Business Profile, local citations, service area pages, and the trust signals that establish your business as the credible, established provider in your market.",
    covers: ["Google Business Profile optimization", "Citation building", "Citation cleanup / NAP consistency", "Local landing pages", "Local relevance optimization", "Service area optimization", "Local trust signals", "Review signal support"],
    link: "/services/seo-agency/local-seo/"
  },
  {
    icon: BookOpen,
    title: "Topical Authority",
    description: "Google rewards websites that demonstrate genuine depth and expertise in their subject area. GrowSmallBiz develops and executes a topical authority strategy that positions your website as the definitive local resource in your category.",
    covers: ["Topic cluster planning", "Service topic expansion", "Supporting content strategy", "FAQ content strategy", "Entity/topic coverage", "Blog/topic ecosystem planning", "Content depth and breadth for authority", "Content mapping around buyer intent"]
  },
  {
    icon: Link2,
    title: "Authority Building, Link Building, Press Releases & Brand Mentions",
    description: "Your rankings reflect how the broader internet perceives your authority. GrowSmallBiz builds off-site authority through a deliberate, quality-first approach — earning links and mentions from local sources, niche-relevant directories, industry associations, chambers of commerce, and digital PR.",
    covers: ["Backlink strategy", "Link acquisition", "Local authority links", "Niche-relevant links", "Partner / association / chamber links", "Brand mentions", "Digital PR", "Press release strategy", "Press release distribution support", "Off-site authority signals"],
    link: "/services/seo-agency/authority-building/"
  },
  {
    icon: Sparkles,
    title: "AI Search Optimization",
    description: "ChatGPT, Perplexity, Gemini, and Google's AI Overviews are answering the questions prospects used to type into Google. GrowSmallBiz combines Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) into one program — engineering your content, entity signals, and citation network so your business is surfaced, quoted, and cited across every major AI search environment.",
    covers: ["Answer Engine Optimization (AEO)", "Generative Engine Optimization (GEO)", "AI-search readiness audit", "Structured content for AI discovery", "Entity clarity & brand reinforcement", "Citation-worthy content structure", "Visibility across emerging AI search environments"],
    link: "/services/seo-agency/ai-search-optimization/"
  },
  {
    icon: BarChart3,
    title: "Monthly Optimization & Reporting",
    description: "SEO without visibility into what is actually happening is not a service — it is a black box. Every month, GrowSmallBiz delivers a clear, actionable performance review covering your rankings, local visibility, page-level improvements, and strategic recommendations for the period ahead.",
    covers: ["Monthly performance reviews", "Ranking and visibility tracking", "Local visibility monitoring", "Page-level optimization updates", "Ongoing technical adjustments", "Ongoing content refinement", "Strategic recommendations", "Reporting dashboards / summaries"]
  }
];
const processSteps = [
  { title: "Discovery and Onboarding", text: "A structured strategy session covers your business, service area, competitive landscape, and growth goals. This is a working session, not a sales call — it establishes the foundation for everything that follows." },
  { title: "AI-Assisted SEO Audit", text: "Before any optimization begins, we conduct a comprehensive audit across all seven pillars: technical health, on-page performance, local SEO standing, content gaps, backlink profile, and AI-search readiness. You know exactly where you stand before we start a single task." },
  { title: "Strategy and Roadmap", text: "We develop a prioritized roadmap specific to your business — what we are working on, in what order, and why. Clear focus on the highest-impact activities in your market, sequenced for compounding results." },
  { title: "Execution", text: "We implement — and AI-powered workflows mean we move faster and cover more ground than traditional SEO execution allows. Technical fixes are identified and resolved quickly. Content plans are built and executed. Cross-pillar optimization decisions are made in real time. The result is broader monthly coverage with no pillar left unattended." },
  { title: "Ongoing Optimization", text: "As rankings improve, new opportunities emerge. As search engines update, adjustments are required. GrowSmallBiz monitors your program continuously and makes optimization decisions in real time — so you are never standing still while competitors move." },
  { title: "Monthly Review and Reporting", text: "Each month, you receive a clear performance summary: what moved, what was completed, what is planned next, and where your program stands against its goals. Written for a business owner, not an SEO analyst." }
];
const whyAIPowered = [
  { icon: Zap, title: "Speed of execution", description: "Traditional SEO relies on manual audits, slow content pipelines, and sequential task execution. GrowSmallBiz's AI-powered workflows compress that timeline significantly. Technical issues are identified and resolved in days, not weeks. Content plans are built and validated rapidly. The result: more implementation, more iteration, and faster compounding results." },
  { icon: Layers, title: "Breadth of coverage", description: "All seven SEO pillars are actively maintained every month — not selectively, not one at a time." },
  { icon: RefreshCw, title: "Consistency", description: "AI-assisted workflows eliminate the gap-and-burst pattern that prevents most local SEO programs from compounding over time." },
  { icon: Target, title: "Smarter targeting", description: "AI-driven research surfaces keyword opportunities, competitor gaps, and content angles genuinely relevant to your specific service area and buyer intent." },
  { icon: Settings, title: "Adaptability", description: "Search is evolving across traditional results, answer engines, and AI-driven discovery. This system keeps your program current across all of it." }
];
const industries = [
  { icon: Home, title: "Home Services & Contractors", description: "Homeowners search locally before they call — and your visibility in that moment determines whether the lead goes to you or a competitor. Managed AI SEO ensures you appear in Google's local pack, in Maps, and in organic results for the specific services you offer." },
  { icon: Heart, title: "Healthcare & Wellness", description: "Patients research extensively before booking, and a strong search presence builds credibility before you have spoken to a single prospective patient. Managed AI SEO ensures your practice appears for the conditions, services, and locations you serve." },
  { icon: Sparkles, title: "Med Spas & Aesthetic Practices", description: "The aesthetic market is highly competitive, and local search visibility often determines which practice a new client chooses. Managed AI SEO positions your practice for high-intent local searches while GEO and AEO strategies extend visibility into AI-driven discovery environments." },
  { icon: Scale, title: "Legal & Financial Professionals", description: "Attorneys, financial advisors, and CPAs compete for high-value relationships where credibility is everything. A structured, authoritative SEO program signals expertise to prospective clients before they make first contact." },
  { icon: Building, title: "Real Estate Agents & Brokers", description: "Buyers and sellers research extensively before choosing an agent. Managed AI SEO builds your local search presence across the neighborhoods and transaction types you specialize in — attracting motivated clients already in the market." }
];
const whyGSBItems = [
  { icon: Target, title: "Built for Local Service Businesses", description: "We do not serve e-commerce brands, SaaS companies, or national retailers. Every service and process in our system is designed for local service businesses competing in defined geographic markets." },
  { icon: Layers, title: "A Complete 7-Pillar System", description: "Most agencies lead with what they do well and quietly neglect the rest. GrowSmallBiz manages all seven pillars simultaneously — so nothing goes unaddressed and every component reinforces the others." },
  { icon: Bot, title: "Strategic Execution, Not Just Software", description: "AI-assisted tools allow us to move faster and cover more ground. Experienced strategists make the judgment calls that require local market knowledge and business context. You get efficiency and accountability — not a self-serve dashboard." },
  { icon: Eye, title: "Transparent Reporting, Every Month", description: "You will never wonder what we are working on or whether it is working. Monthly performance reviews give you a clear view of what moved, what was completed, and what is planned — written for a business owner, not an analyst." },
  { icon: Puzzle, title: "Integrated with the Digital Dominance Method", description: "Managed AI SEO works in coordination with your broader marketing channels through the GrowSmallBiz Digital Dominance Method — not in isolation from them." },
  { icon: Shield, title: "Engagement Built on Performance", description: "We earn your business every month. The engagement begins with a 3-month commitment to build a proper foundation, then continues month-to-month — because the relationship should be built on performance and trust, not obligation." }
];
const faqs = [
  { question: "What is Managed AI SEO?", answer: "Managed AI SEO is a fully managed SEO service in which GrowSmallBiz handles your entire program — strategy, implementation, content, technical maintenance, local optimization, authority building, and reporting — using AI-assisted tools and workflows. You do not manage vendors, learn SEO tools, or supervise execution. We own it." },
  { question: "How is this different from traditional SEO?", answer: "Traditional SEO is typically project-based, manual, and focused on a narrow set of tactics. Managed AI SEO is continuous, AI-assisted, and comprehensive — covering all seven pillars simultaneously. The AI layer surfaces and acts on opportunities faster. The managed layer means you have a team running the system, not a consultant sending monthly recommendations." },
  { question: "How long does it take to see results?", answer: "SEO is a long-term channel. Most local service businesses see measurable movement in rankings and local visibility within three to six months, with more substantial results building from six to twelve months onward. The timeline depends on your starting point, competitive landscape, and scope of work. We set realistic expectations from day one." },
  { question: "What is the commitment structure?", answer: "The engagement begins with a 3-month initial commitment. This ensures enough time to complete the foundational audit, build the strategy, and execute the early implementation work that produces lasting results. After the initial 3 months, the engagement continues on a month-to-month basis. Additional details about engagement options are discussed on the strategy call." },
  { question: "Do I need to be involved day-to-day?", answer: "No — that is the point of a managed service. You are involved in the initial onboarding and strategy session, you review your monthly performance summary, and you make decisions about your business direction. The SEO program runs without requiring your ongoing attention." },
  { question: "Can you work with my existing website?", answer: "In most cases, yes. We begin with a thorough audit and work within your current platform where possible. If we identify structural or technical limitations that significantly constrain SEO performance, we will flag them clearly and discuss options. A full rebuild is not a prerequisite for getting started." },
  { question: "How do you report results?", answer: "Each month you receive a performance summary covering keyword rankings, local visibility, traffic trends, the specific work completed, and strategic recommendations for the upcoming period. Reports are written to be understood by a business owner, not an SEO analyst." },
  { question: "Does SEO work with paid advertising?", answer: "Yes — and they work better together. Paid ads deliver immediate visibility while SEO builds sustained organic presence. Over time, strong organic rankings reduce dependence on paid traffic and lower your overall cost per lead." },
  { question: "What makes your approach different from a standard SEO agency?", answer: "Three things: specialization, completeness, and integration. We specialize exclusively in local service businesses. We manage all seven pillars of SEO simultaneously. And the program is integrated with your broader marketing channels through the Digital Dominance Method — so everything works together rather than in silos." },
  { question: "How much does Managed AI SEO cost?", answer: "Managed AI SEO pricing is a flat monthly fee based on two factors: the number of Google Business Profiles we optimize (single-location vs multi-location) and the number of services within the campaign. We do not publish tiered pricing on the website because every business has a different competitive landscape, service mix, and starting baseline. Pricing is presented during a discovery call after we understand your market, current SEO standing, and growth goals — so the scope is defined and the quote matches the work. There are no long-term contracts. The engagement starts with a 3-month foundation commitment, then continues month-to-month." },
  { question: "Do I need a Google Business Profile to work with GrowSmallBiz?", answer: "Yes — a claimed and verified Google Business Profile is foundational. For local service businesses, 60%+ of conversions come through GBP, not the website. If you do not have a GBP or it is not verified, that is the first thing we fix during onboarding. If you have a GBP that is claimed but underoptimized (missing categories, incomplete services, no photos, no posts, inconsistent NAP), that is also standard onboarding work. Businesses without a physical location can use a service-area business (SAB) profile — we work with both." },
  { question: "Will AI search like ChatGPT and Google AI Overviews replace traditional SEO?", answer: "No — they are additive, not replacement. Traditional SEO (ranking pages in Google's blue-link results) still drives the largest share of qualified local traffic. What is changing is that ChatGPT, Perplexity, Gemini, and Google AI Overviews are now surfacing answers before a user even clicks a link. Businesses that are structured for AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) get cited in those AI answers. Businesses that are not, get skipped. Managed AI SEO covers all three — traditional SEO, AEO, and GEO — as one integrated system." }
];
const ManagedAISEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "AI-Powered SEO for Local Service Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "AI-powered SEO agency for local service businesses. GrowSmallBiz drives calls, leads, and growth with a fully managed SEO system. Get free SEO audit." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "managed AI SEO, local SEO services, AI-powered SEO, local service business SEO, managed SEO program, technical SEO, on-page SEO, local SEO, AI search optimization, AEO, GEO, link building, SEO for contractors, SEO for dentists, SEO for HVAC, GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "AI-Powered SEO That Gets Local Service Businesses Found First",
        serviceType: "Managed SEO",
        description: "The complete Managed AI SEO system for local service businesses — covering technical SEO, on-page, local SEO, topical authority, AI search optimization (AEO + GEO), link building, and monthly reporting.",
        url: "/services/seo-agency/",
        breadcrumbs: [
          { name: "Services", url: "/services/" }
        ],
        useEntityGraph: true,
        pageName: "The Complete Managed AI SEO Agency for Local Service Businesses",
        pageDescription: "The complete Managed AI SEO system for local service businesses. GrowSmallBiz runs your entire SEO program — technical, local, content, AI search optimization (AEO + GEO), link building, and reporting — so you can focus on running your business.",
        hasFaqPage: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 191,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/",
        images: [
          {
            url: managedAiSeoHeroBg,
            caption: "Managed AI SEO system for local service businesses",
            description: "Hero illustration for GrowSmallBiz's flagship Managed AI SEO service — a fully managed SEO program combining technical, local, on-page, AI search optimization (AEO + GEO), link building, and reporting into a single growth system.",
            width: 1920,
            height: 1080
          },
          {
            url: seoDashboardMetrics,
            caption: "SEO performance dashboard with traffic and ranking metrics",
            description: "Screenshot of the GrowSmallBiz SEO reporting dashboard showing organic traffic growth, keyword position changes, local pack visibility, and conversion-tied SEO metrics for a managed client.",
            width: 1920,
            height: 992
          },
          {
            url: pillarTechnicalSeo,
            caption: "Technical SEO pillar icon",
            description: "Visual pillar marker representing the Technical SEO component of GrowSmallBiz's Managed AI SEO system — covering crawlability, indexability, Core Web Vitals, and structured data.",
            width: 512,
            height: 512
          },
          {
            url: pillarOnPageSeo,
            caption: "On-Page SEO pillar icon",
            description: "Visual pillar marker representing the On-Page SEO component — title, meta, heading, content, and entity optimization for service pages.",
            width: 512,
            height: 512
          },
          {
            url: pillarLocalSeo,
            caption: "Local SEO pillar icon",
            description: "Visual pillar marker representing the Local SEO component — Google Business Profile, citations, NAP, and map-pack visibility.",
            width: 512,
            height: 512
          },
          {
            url: pillarTopicalAuthority,
            caption: "Topical Authority pillar icon",
            description: "Visual pillar marker representing the Topical Authority component — content clusters and expert depth that establish a service business as the trusted authority in its niche.",
            width: 512,
            height: 512
          },
          {
            url: pillarAeo,
            caption: "AI Search Optimization pillar icon",
            description: "Visual pillar marker representing the AI Search Optimization component — combining AEO and GEO so the business is surfaced and cited across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
            width: 512,
            height: 512
          },
          {
            url: pillarLinkBuilding,
            caption: "Editorial Link Building pillar icon",
            description: "Visual pillar marker representing the Link Building component — earning relevant editorial backlinks that strengthen domain authority.",
            width: 512,
            height: 512
          },
          {
            url: pillarReporting,
            caption: "SEO Reporting pillar icon",
            description: "Visual pillar marker representing the Reporting component — transparent SEO reporting tied to traffic, rankings, and revenue outcomes.",
            width: 512,
            height: 512
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 205,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
      lineNumber: 274,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "min-h-screen bg-background pt-20", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden py-16 lg:py-24", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: { backgroundImage: `url(${managedAiSeoHeroBg})` }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 281,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/85" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 285,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 286,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV(Bot, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: "Managed AI SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 292,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-foreground leading-tight animate-fade-up bg-gradient-heading bg-clip-text text-transparent", children: "Managed AI SEO Agency for Local Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: "Most local service businesses are invisible online — not because they do bad work, but because their SEO is incomplete, inconsistent, or simply not running. Managed AI SEO changes that. GrowSmallBiz runs your entire SEO program for you — from technical site health and local visibility to content authority, answer engine optimization, and link building — using an AI-powered system built specifically for local service businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: PRIMARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: [
              "Schedule Strategy Session",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 307,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 305,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Free SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 311,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 310,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 288,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 280,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "THE SERVICE",
            title: "What Is Managed AI SEO — and Why Does It",
            titleHighlight: "Matter Now?"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 323,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto animate-fade-up", children: /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal p-8 md:p-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-10 lg:gap-16", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Traditional SEO was a project. You hired someone to optimize a few pages, build some links, maybe write some blog posts — and hoped it held. That model no longer works in a search environment that changes faster than any single consultant can manually track." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 333,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Managed AI SEO is a different model: an ongoing, fully managed service in which AI-assisted tools and strategic human oversight work together to continuously audit, optimize, and expand your search presence — across every layer that matters." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 336,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 332,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "For local service businesses, that means your website, Google Business Profile, service pages, content, local citations, and off-site authority are all being monitored and improved on an ongoing basis — not just when something breaks." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 341,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "GrowSmallBiz owns strategy, implementation, optimization, and reporting. You get a clear, consistent picture of what is working and where you are growing — without becoming an SEO expert." }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 344,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 340,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 331,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 pt-8 border-t border-[hsl(188_78%_41%_/_0.3)]", children: /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium text-foreground text-center max-w-3xl mx-auto", children: "The result is a search presence that compounds month over month, building lasting visibility and a reliable flow of qualified local leads." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 350,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 349,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 330,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 329,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 321,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "THE DASHBOARD",
            title: "Your Holistic AI SEO",
            titleHighlight: "Command Center",
            description: "Monitor your complete digital presence in real-time—track domain authority growth, measure your visibility across AI platforms like ChatGPT, Gemini, Perplexity & Claude, and optimize all seven SEO pillars from one powerful dashboard. Make data-driven decisions that drive measurable ROI."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 362,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxDEV(Dialog, { children: [
          /* @__PURE__ */ jsxDEV(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxDEV("div", { className: "relative group cursor-pointer", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 372,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: seoDashboardMetrics,
                alt: "SEO dashboard displaying domain metrics, including organic keywords, traffic statistics, and visibility scores, relevant for photographers seeking marketing services.",
                className: "relative w-full rounded-2xl border border-primary/30 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 373,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 379,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: "Click to expand" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 380,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 378,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 377,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 371,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 370,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(DialogContent, { className: "max-w-[95vw] max-h-[95vh] p-2 bg-background/95 backdrop-blur-xl border-primary/30", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: seoDashboardMetrics,
              alt: "SEO dashboard displaying domain metrics, including organic keywords, traffic statistics, and visibility scores, relevant for photographers seeking marketing services.",
              className: "w-full h-auto rounded-xl"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 386,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 385,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 369,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 368,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 361,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 360,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28 bg-card", id: "pillars", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "THE SYSTEM",
            title: "The 7-Pillar Managed AI SEO",
            titleHighlight: "System",
            description: "Effective SEO for local service businesses is not a single tactic — it is a coordinated system. Most agencies focus on one or two things and neglect the rest. GrowSmallBiz manages all seven pillars simultaneously, ensuring every component reinforces the others."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 399,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-muted-foreground max-w-3xl mx-auto -mt-10 mb-16", children: "Each pillar below links to a dedicated service page where you can go deeper. Together, they form an integrated system built to deliver lasting local search authority and a consistent flow of qualified leads." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 405,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-6xl mx-auto", children: pillars.map((pillar, index) => /* @__PURE__ */ jsxDEV(GlowCard, { className: "border-2 border-border/60 p-0 overflow-hidden animate-fade-up", style: { animationDelay: `${index * 0.05}s` }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-40 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: pillarImages[index],
              alt: pillar.title,
              className: "w-full h-full object-cover",
              loading: "lazy"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 413,
              columnNumber: 21
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 412,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 mb-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-primary/10 shrink-0", children: /* @__PURE__ */ jsxDEV(pillar.icon, { className: "h-6 w-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 423,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 422,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground", children: pillar.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 426,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 425,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 421,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-4 text-sm", children: pillar.description }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 429,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4", children: pillar.covers.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 433,
                columnNumber: 27
              }, void 0),
              item
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 432,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 430,
              columnNumber: 21
            }, void 0),
            pillar.link && /* @__PURE__ */ jsxDEV(Link, { to: pillar.link, className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline", children: [
              "Learn more ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 440,
                columnNumber: 36
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 439,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 420,
            columnNumber: 19
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 411,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 409,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 398,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 397,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "IS IT RIGHT FOR YOU?",
            title: "Is Managed AI SEO Right for",
            titleHighlight: "Your Business?",
            description: "Managed AI SEO is built for local service businesses where each new customer — a booked appointment, a signed contract, a completed project — represents meaningful revenue and justifies a real investment in sustainable growth."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 453,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal p-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 465,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 464,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold font-display text-foreground", children: "Strong Fit" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 467,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 463,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
              "You operate a local service business competing in a defined geographic market",
              "Each new client, patient, case, or project represents significant revenue",
              "You have little to no organic traffic, or your local SEO presence is inconsistent",
              "You have tried SEO before but never experienced a systematic, fully managed approach",
              "You want your marketing running without requiring your daily involvement",
              "You are building a long-term growth channel, not chasing a short-term traffic spike"
            ].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 479,
                columnNumber: 23
              }, void 0),
              item
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 478,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 469,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 462,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal p-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Users, { className: "w-5 h-5 text-muted-foreground" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 490,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 489,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold font-display text-foreground", children: "Not the Right Fit" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 492,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 488,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
              "National e-commerce brands",
              "Startups without an established service area",
              "Businesses seeking one-time consulting only",
              "Businesses where per-transaction margin does not support an ongoing SEO investment"
            ].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0 mt-1.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 502,
                columnNumber: 23
              }, void 0),
              item
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 501,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 494,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 487,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 460,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 452,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 451,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "HOW IT WORKS",
            title: "What Working with GrowSmallBiz on Managed AI SEO",
            titleHighlight: "Actually Looks Like"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 515,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 522,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-16", children: processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return /* @__PURE__ */ jsxDEV("div", { className: "relative animate-fade-up", style: { animationDelay: `${index * 0.1}s` }, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 529,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: `hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-primary/30 ${isLeft ? "right-[calc(50%+0.375rem)] w-[calc(2rem-0.375rem)]" : "left-[calc(50%+0.375rem)] w-[calc(2rem-0.375rem)]"}` }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 530,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: `md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`, children: /* @__PURE__ */ jsxDEV("div", { className: "feature-card-teal p-8", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-primary-foreground", children: index + 1 }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                    lineNumber: 536,
                    columnNumber: 31
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                    lineNumber: 535,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold text-primary", children: [
                    "Step ",
                    index + 1
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                    lineNumber: 538,
                    columnNumber: 29
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                  lineNumber: 534,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground mb-4", children: step.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                  lineNumber: 540,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: step.text }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                  lineNumber: 541,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 533,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 532,
                columnNumber: 23
              }, void 0)
            ] }, index, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 528,
              columnNumber: 21
            }, void 0);
          }) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 524,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 521,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 514,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 513,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-primary font-bold tracking-widest uppercase text-[13px] mb-10", children: "Why Local SEO Matters Now" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 555,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8", children: [
          {
            number: "46%",
            descriptor: "of all Google searches have local intent.",
            sourceName: "BrightLocal Local Consumer Review Survey",
            sourceYear: "2024",
            sourceUrl: "https://www.brightlocal.com/research/local-consumer-review-survey/"
          },
          {
            number: "64%",
            descriptor: "of local searches convert within 24 hours — if your business shows up.",
            sourceName: "Google Consumer Insights",
            sourceYear: "2024",
            sourceUrl: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-statistics/"
          },
          {
            number: "2x",
            descriptor: "faster growth for businesses using AI-assisted SEO vs traditional SEO.",
            sourceName: "Search Engine Land Industry Report",
            sourceYear: "2024",
            sourceUrl: "https://searchengineland.com/"
          }
        ].map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "font-bold leading-none mb-3 text-[36px] md:text-[56px] bg-clip-text text-transparent",
              style: {
                backgroundImage: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))",
                WebkitTextFillColor: "transparent"
              },
              children: stat.number
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 583,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/90 text-[15px] md:text-base font-medium leading-snug mb-2", children: stat.descriptor }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 592,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/50 text-xs italic", children: [
            "—",
            " ",
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: stat.sourceUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "underline hover:text-primary transition-colors",
                children: stat.sourceName
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 597,
                columnNumber: 21
              },
              void 0
            ),
            ", ",
            stat.sourceYear
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 595,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 582,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 558,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 554,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 553,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-2", children: "THE AI ADVANTAGE" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 616,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold font-display mb-4 text-foreground bg-gradient-heading bg-clip-text text-transparent", children: "Why AI-Powered SEO Outperforms Manual SEO for Local Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 617,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground max-w-4xl mx-auto", children: "Manual SEO is slow to implement, difficult to scale, and typically concentrated in one or two areas while the rest goes unaddressed. For local service businesses in competitive markets, that incomplete coverage is a direct liability." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 620,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 615,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: whyAIPowered.map((item, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-background/80 border-2 border-border/60 rounded-xl p-6 space-y-4 animate-fade-up hover:shadow-[0_0_40px_rgba(255,127,80,0.4)] hover:border-primary/50 transition-all duration-300",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 633,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 632,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-semibold text-foreground", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 635,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed text-muted-foreground", children: item.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 636,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 627,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 625,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 614,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 613,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "INDUSTRIES",
            title: "AI-Powered SEO That Gets Local Service Businesses Found First Across",
            titleHighlight: "Key Industries"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 646,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 max-w-4xl mx-auto", children: industries.map((industry, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card/50 border-2 border-border/60 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] hover:border-primary/50 transition-all duration-300 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-primary/10 shrink-0", children: /* @__PURE__ */ jsxDEV(industry.icon, { className: "h-6 w-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 661,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 660,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground mb-3", children: industry.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                  lineNumber: 664,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: industry.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                  lineNumber: 665,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
                lineNumber: 663,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
              lineNumber: 659,
              columnNumber: 19
            }, void 0)
          },
          index,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 654,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 652,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 645,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 644,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        WhyChooseSection,
        {
          title: "Why GrowSmallBiz — and Not a Generalist SEO Agency",
          subtitle: "OUR DIFFERENCE",
          description: "Founded by Subrata Guha — 30+ years leading enterprise business applications across Sales & Marketing and Supply Chain for Fortune 500 organizations. Now bringing that same AI-driven discipline to local service businesses: faster execution, measurable pipeline growth, and the kind of operational accountability most agencies never deliver.",
          items: whyGSBItems
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 676,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          faqs,
          schemaType: "FAQPage",
          schemaId: "https://growsmallbiz.io/services/seo-agency/#faqpage",
          suppressSchema: true,
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about Managed AI SEO?",
            description: "We're here to help. Let's talk about how a managed SEO program fits your business.",
            tagline: "Let's build your search presence together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 684,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { items: relatedFaqs }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 699,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FaqJsonLd,
        {
          items: [...faqs, ...relatedFaqs],
          pageUrl: "https://growsmallbiz.io/services/seo-agency/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 701,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "READY TO GROW?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 710,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Ready to Build a Search Presence That Actually Grows Your Business?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 711,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: "If you depend on a consistent flow of qualified local leads, you need more than a website and hope. You need a managed, AI-powered SEO system that works every month — building visibility, authority, and trust in your market over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 714,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Your strategy session includes a review of your current SEO standing, a look at your local competitive landscape, and a clear picture of what a Managed AI SEO program could produce for your business. No obligation. No pressure. A direct, honest conversation about where you are and what is possible." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 717,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 709,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Build Your SEO Growth Engine",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 722,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Free SEO Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 732,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 731,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 730,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 739,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
            lineNumber: 740,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
          lineNumber: 738,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 708,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 707,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
        lineNumber: 746,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
      lineNumber: 749,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/ManagedAISEO.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, void 0);
};
export {
  ManagedAISEO as default
};
