import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import { Link } from "react-router-dom";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { S as ServiceHero } from "./ServiceHero-Z03OcfAP.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-C_ATU6ud.js";
import { S as SectionHeader } from "./SectionHeader-m0RetmVk.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { G as GlowCard } from "./glow-card-DLstjNul.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Globe, Clock, TrendingUp, Wrench, Layers, CheckCircle2, AlertTriangle, ArrowDown, Search, MousePointerClick, Link2, FileText, Shield, Eye, ArrowRight, Smartphone, Zap, MessageSquare, Layout, BarChart3, Home, Heart, Sparkles, Scale, Building } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const websiteDesignHeroBg = "/assets/website-design-hero-bg-BSHVfrsb.webp";
const CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const faqs = [
  {
    question: "Do you offer standalone website projects?",
    answer: "No. GrowSmallBiz builds websites as part of a broader digital growth engagement. That may include website strategy, AI SEO, paid search, conversion optimization, and lead capture systems. We do not take on design-only or website-only projects."
  },
  {
    question: "What happens on the free growth strategy call?",
    answer: "We review your current website, look at where leads may be leaking, and talk through how your site, SEO, paid traffic, and conversion strategy work together. The goal is clarity, not pressure."
  },
  {
    question: "Can you redesign my current website instead of building a new one?",
    answer: "Sometimes, yes. If the current platform and structure are workable, a strategic redesign may be the right move. If the foundation is too limited, a rebuild is often the smarter long-term decision."
  },
  {
    question: "Is SEO included when you build a website?",
    answer: "Every website includes SEO-ready architecture and technical best practices. Full SEO execution is handled as part of the broader growth engagement, not as a disconnected add-on."
  },
  {
    question: "How is this different from hiring a typical web design agency?",
    answer: "Most agencies deliver a finished website. We build a conversion foundation tied to lead generation, CRM capture, tracking, SEO support, and paid traffic performance."
  },
  {
    question: "What types of businesses are the best fit?",
    answer: "Local service businesses where leads matter: home services, healthcare and wellness, med spas, legal and financial professionals, and real estate-related businesses."
  },
  {
    question: "Will the website connect with CRM, forms, booking tools, and lead tracking?",
    answer: "Yes. That integration is part of the point. A website should not just look better — it should capture, route, and support follow-up on every lead."
  },
  {
    question: "Why does the website need to be part of a broader growth system?",
    answer: "Because traffic alone doesn't create revenue. SEO, Google Ads, referrals, and visibility only work when the website converts the visit into a real next step."
  }
];
const includedFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "More than 60% of local service business traffic comes from mobile devices. We design for the phone first — meaning your layout, navigation, click-to-call buttons, and contact forms are optimized for a visitor using their thumb, not a mouse. Desktop looks great too. But mobile is where you win or lose most of your leads, and we treat it that way from the first wireframe."
  },
  {
    icon: Zap,
    title: "Fast Load Speed",
    description: "A slow website doesn't just frustrate visitors — it actively loses them. Most mobile users will abandon a page that takes more than three seconds to load. We build for performance: compressed images, clean code, minimal bloat, and hosting infrastructure that supports fast delivery. Speed is not a feature we add — it's a standard we build to."
  },
  {
    icon: MessageSquare,
    title: "Clear Messaging and Service Clarity",
    description: "Within the first few seconds of arriving on your site, a visitor should know exactly what you do, who you serve, and why you're the right choice. We write the copy — or work with your existing messaging — to make that clarity immediate. No guessing. No scrolling for answers. No vague taglines that could apply to any business in your category."
  },
  {
    icon: Layout,
    title: "Conversion-Focused Page Structure",
    description: "Every page on your website has a job to do. We structure each page around a defined conversion path — logical visual hierarchy, strategic placement of calls to action, friction-reducing layout choices, and page flow that guides a visitor toward contacting you without feeling pushy or cluttered."
  },
  {
    icon: Shield,
    title: "Local Trust Signals and Proof Elements",
    description: "Trust is the conversion variable most websites ignore. We build it in deliberately — through real customer reviews presented prominently, verifiable credentials and certifications, licensing and insurance information, years in business, and photography and specifics that signal you're a real, established operation in your local market. A visitor who trusts you calls. A visitor who isn't sure doesn't."
  },
  {
    icon: MousePointerClick,
    title: "Strategic Calls to Action",
    description: "A call to action is not just a button. It's a specific prompt, placed at the right moment in the visitor's experience, written in a way that reduces hesitation and makes the next step feel easy. We place CTAs strategically throughout your site and write them to reduce hesitation — and make the next step feel easy."
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    description: "Your website is the foundation your SEO strategy builds on. We build every site with clean URL structure, proper heading hierarchy, schema markup, fast load speeds, and technical fundamentals that allow search engines to crawl, understand, and rank your content. When SEO is part of your broader growth engagement, this foundation means your SEO investment works from day one — not after months of remediation."
  },
  {
    icon: Link2,
    title: "CRM, Booking, and Lead Capture Integration",
    description: "A lead that doesn't get captured and routed quickly is a lead that goes cold. We integrate your website with your CRM, booking system, and lead notification workflows so that when someone fills out a form or books an appointment, the right person in your business knows immediately — and the lead is logged where your team can follow up. The website generates the lead. The integration makes sure it doesn't fall through the cracks."
  }
];
const processSteps = [
  {
    step: "Step 1",
    icon: Search,
    title: "Strategy and Discovery",
    description: "Before anything is designed or written, we spend time understanding your business, your market, and your goals. We look at who your ideal customer is, what they need to see and hear before they trust you enough to reach out, and what specific actions you need your website to drive. We also look at the broader growth picture — how your website will connect to your SEO, your paid advertising, and your lead generation infrastructure.",
    deliverable: "Deliverable: A clear conversion strategy and sitemap that defines the structure, page hierarchy, and goals for every key page on the site."
  },
  {
    step: "Step 2",
    icon: FileText,
    title: "Structure and Copy",
    description: "We build the wireframes before a single color is chosen or a font is considered. This forces every layout decision to be made on the basis of conversion logic, not visual preference. Alongside the structure, we develop the copy: headlines, service descriptions, trust language, and calls to action, all written to move your specific customer toward contacting you.",
    deliverable: "Deliverable: Wireframes and copy for all primary pages, reviewed and approved before design begins."
  },
  {
    step: "Step 3",
    icon: Layout,
    title: "Design and Build",
    description: "Once strategy, structure, and copy are locked, design begins. Your site is built to reflect your brand with intention — not with generic templates adapted to fit. We build for mobile-first performance, fast load speed, and the technical standards required for clean SEO architecture. Every design decision is made in service of the conversion goal.",
    deliverable: "Deliverable: A fully designed, fully built website — mobile-optimized, fast-loading, and technically sound — ready for final review and launch."
  },
  {
    step: "Step 4",
    icon: Link2,
    title: "Launch and Integration",
    description: "Before we go live, we connect your site to the systems it needs to function as a lead generation asset: your CRM, booking platform, analytics tools, and any campaign-specific integrations tied to your paid or SEO programs. For clients in a full growth engagement, this is also when the SEO and paid traffic strategies go live on top of the new foundation.",
    deliverable: "Deliverable: A live, fully integrated website connected to your lead capture and marketing infrastructure — with conversion tracking in place from day one."
  }
];
const afterLaunchItems = [
  {
    icon: TrendingUp,
    title: "More Consistent Lead Flow",
    description: "When your website is built to convert — not just to exist — you stop depending on luck, referral timing, or ad spend surges to generate inquiries. Visitors who arrive from any channel have a clear, trust-building experience that gives them a reason to reach out. The result is leads that come in more predictably, from more sources, more consistently than a passive site ever produces."
  },
  {
    icon: Eye,
    title: "A Credible First Impression That Closes Faster",
    description: "Your website is often the first detailed interaction a prospect has with your business. When it communicates clearly, looks professionally done, and establishes trust through real proof — reviews, credentials, specifics — the prospect arrives at the conversation already sold on the idea of working with you. That shortens the sales cycle. It also means fewer tire-kickers and more contacts who are ready to move."
  },
  {
    icon: BarChart3,
    title: "Better Returns on Every Other Marketing Channel",
    description: "A stronger website makes every other marketing investment more efficient. Your Google Ads cost per lead drops because the traffic you're paying for actually converts. Your SEO rankings start producing revenue instead of just visits. Your referrals close faster. The same budget, directed at a high-converting website, produces a meaningfully different return."
  },
  {
    icon: Link2,
    title: "Leads That Don't Fall Through the Cracks",
    description: "When your site is integrated with your CRM and lead notification systems, every inquiry is logged, every form submission triggers follow-up, and no lead sits unattended because someone didn't check their email in time. The website generates the opportunity. The integration protects it."
  },
  {
    icon: Layers,
    title: "Visibility Into What's Working",
    description: "With proper analytics and conversion tracking in place from launch day, you stop guessing about what's driving results. You can see which pages are converting, where visitors are dropping off, which traffic sources are producing leads versus just visits, and what's happening to your paid traffic after the click."
  },
  {
    icon: Wrench,
    title: "A Foundation That Supports Real Growth",
    description: "A high-converting website isn't a destination — it's a starting point. Once the conversion foundation is solid, every growth initiative you layer on top — AI-driven SEO, Google Ads, reputation building, market expansion — works better because it has something strong to land on. This is the model behind the Digital Dominance Method: build the foundation right, then build on it."
  }
];
const industries = [
  {
    icon: Home,
    title: "Home Services and Contractors",
    description: "Roofing, HVAC, plumbing, electrical, landscaping, remodeling — businesses where the job ticket is high, the competition is local, and the customer needs to trust you before they hand over access to their home. We build sites that establish credibility fast: licensed and insured signals front and center, real customer reviews from recognizable neighborhoods, clear service areas, and calls to action written for a homeowner who has three contractors open in different tabs and needs a reason to choose you."
  },
  {
    icon: Heart,
    title: "Healthcare and Wellness Practices",
    description: "Primary care, dental, chiropractic, physical therapy, mental health — practices where the decision is personal, trust is everything, and patients are often anxious before they've made the call. We build sites that reduce friction and build reassurance: clear descriptions of what to expect, provider credentials with context, easy appointment booking, and messaging calibrated for a patient who needs to feel confident they're in the right place."
  },
  {
    icon: Sparkles,
    title: "Med Spas and Aesthetic Practices",
    description: "In aesthetics, the website is often the first and most important impression of what the experience will feel like. Prospective patients are evaluating your taste, your expertise, and your results before they ever contact you. We build sites that reflect the quality of the experience you deliver — visually elevated, trust-rich with real results and credentials, and structured around the specific services that drive the most revenue for your practice."
  },
  {
    icon: Scale,
    title: "Legal and Financial Professionals",
    description: "Attorneys, CPAs, financial advisors, and consultants operate in categories where credibility is the entire sale. We build sites that communicate authority without arrogance: clear practice areas or service descriptions, credentials and experience presented substantively, social proof that speaks to outcomes, and consultation requests that feel like a professional process from the first click."
  },
  {
    icon: Building,
    title: "Real Estate Agents & Brokers",
    description: "Real estate professionals compete in one of the most crowded local search categories online — and most agents' websites look nearly identical. We build sites that give buyers and sellers a clear reason to choose you specifically: strong personal branding, neighborhood and market expertise positioned prominently, listings integration where applicable, and lead capture built around the way real estate clients actually search — often on mobile, often late at night, and often comparing multiple agents before making contact."
  }
];
const problemBullets = [
  "It loads slowly — especially on mobile — and visitors leave before seeing anything",
  "It's unclear within the first few seconds what you do, who you serve, or why you're the right choice",
  "There's no natural next step — no strong call to action, no clear path to contact",
  "There's nothing that builds trust: no reviews, no credentials, no tangible proof",
  "It isn't connected to your CRM, booking system, or anything that captures and routes leads",
  "Mobile is an afterthought — and more than 60% of your visitors are on a phone"
];
const WebsiteDesign = () => {
  const { buildUrl } = useUtm();
  const CTA_URL = buildUrl(CTA_BASE, "strategy-session");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Website Design for Local Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "GrowSmallBiz builds conversion-focused websites for local service businesses — designed to turn visitors into calls, bookings, and leads. Schedule a free strategy call."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/website-design/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Website Design for Local Service Businesses",
        serviceType: "Website Design",
        description: "Conversion-focused website design for local service businesses — built to turn visitors into calls, bookings, and leads.",
        url: "/services/website-design/",
        breadcrumbs: [
          { name: "Services", url: "/services/seo-agency/" },
          { name: "Website Design", url: "/services/website-design/" }
        ]
      }
    ),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Globe, text: "WEBSITE THAT CONVERTS" },
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Websites Built to Turn Visitors Into ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Calls, Bookings," }),
            " and ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Leads." })
          ] }),
          subtitle: "Most local service business websites look the part. The problem is they were built to impress — not to convert.<br/><br/>GrowSmallBiz designs and builds websites engineered around a single outcome: turning visitors into calls, bookings, and quote requests.<br/><br/>And for our clients, the website is never the end of the conversation — it's the beginning.",
          primaryCTA: {
            label: "Schedule Strategy Call",
            href: CTA_URL,
            external: true
          },
          backgroundImage: websiteDesignHeroBg,
          overlayOpacity: 88
        }
      ),
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "container mx-auto px-4 pt-6", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", children: "Services" }) }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Website Design" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        { icon: Clock, headline: "8 Seconds to Win or Lose a Local Lead", body: "When a potential customer lands on your site, you have roughly eight seconds before they decide whether to stay or leave. If your phone number isn't obvious, your services aren't immediately clear, and there's no compelling reason to reach out — they're gone. And they're calling someone else." },
        { icon: TrendingUp, headline: "Your Website Is Your Highest-Leverage Small Business Sales Asset", body: "Your website is not a brochure. It's your highest-leverage sales asset. It works around the clock, and within seconds of someone arriving, it either builds confidence or quietly loses them." },
        { icon: Wrench, headline: "Built for Service Businesses — Not Templates, Not Guesswork", body: "At GrowSmallBiz, we build websites specifically for local service businesses — contractors, healthcare practices, med spas, professional services — where every lead represents real revenue. We start with strategy, not templates. Every layout decision, every line of copy, and every call to action is designed to move a visitor toward contacting you." },
        { icon: Layers, headline: "The Conversion Foundation Your Entire Growth Strategy Runs Through", body: "But a high-converting website doesn't operate in isolation. It's the conversion foundation of a broader digital growth system — the hub that makes your SEO investment produce actual leads, your paid traffic convert instead of bounce, and your referrals close faster. That's the conversation we start on our free growth strategy call." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "feature-card-teal text-center animate-fade-up", style: { animationDelay: `${i * 0.1}s` }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-7 h-7 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground mb-2", children: item.headline }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: item.body })
      ] }, i)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "TOPICAL DEPTH",
            title: "What Small Business Website Design Actually Means for a",
            titleHighlight: "Service-Based Company"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { children: "Small business website design is not the same as e-commerce website design or enterprise web development — and the difference matters more than most business owners realize. E-commerce sites are optimized for product browsing, cart conversion, and transaction volume. Enterprise sites are built for brand positioning and investor relations. Small business website design, especially for service-based companies, is built around a completely different objective: generating qualified local leads. That means phone calls, appointment bookings, quote requests, and form submissions from real prospective customers in your market." }),
            /* @__PURE__ */ jsx("p", { children: "Service businesses face a conversion challenge that product businesses don't. A customer buying a product can evaluate it directly — they see it, read reviews, and add it to a cart. A customer hiring a service is buying something they cannot see before they commit: your reliability, your expertise, your professionalism. The entire job of your website is to make that invisible thing feel visible and trustworthy enough to prompt a call. That requires a fundamentally different approach to layout, copy, trust signals, and calls to action than a retail or template-based website will ever produce." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 animate-fade-up", style: { animationDelay: "0.1s" }, children: /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 h-full border-primary/20", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-primary/10 w-fit mb-4", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A well-executed small business website design for a service company does five things consistently: it communicates what you do and who you serve within the first few seconds of arrival; it establishes credibility through real, specific proof — reviews, credentials, licensing, years in business; it guides visitors toward a single clear action through strategic placement of calls to action; it performs as well on a mobile phone at 9pm as it does on a desktop browser at noon; and it is built on a technical foundation that supports your SEO investment from day one. When all five are working together, the website stops being a cost and starts being your most reliable lead generation channel." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "the-problem", className: "py-24 relative bg-slate-800/40 scroll-mt-24", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: [
              "Most Local Business Websites Were Built to Exist —",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Not to Convert" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "There's a difference between a website that looks good and a website that works. Most local businesses have the first kind." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-10 lg:gap-16 mb-12 max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed animate-fade-up", children: [
              /* @__PURE__ */ jsx("p", { children: "Here's how most local business websites get built: a developer creates something visually clean, the owner approves it, and it goes live. Nobody asks whether the page structure guides visitors toward a decision. Nobody asks whether trust is being established quickly enough — or whether a prospect on a mobile phone at 9pm can find a phone number in under three seconds." }),
              /* @__PURE__ */ jsx("p", { children: "The result is a site that sits there — looking fine, doing nothing." }),
              /* @__PURE__ */ jsx("p", { children: "This is not a minor issue. Every visitor who lands on your site and leaves without contacting you is a missed opportunity. And when you're running Google Ads, investing in SEO, or counting on referrals to drive traffic, a website that doesn't convert is quietly draining every dollar you spend on marketing." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 animate-fade-up", style: { animationDelay: "0.1s" }, children: /* @__PURE__ */ jsxs(GlowCard, { className: "p-6 lg:p-8 h-full border-red-500/20 hover:border-red-500/40", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-4 text-lg", children: "Here's what a non-converting website typically looks like:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: problemBullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm leading-relaxed", children: bullet })
              ] }, i)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative py-8", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-primary to-primary/50" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-4", children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-6 h-6 text-white animate-bounce" }) }),
              /* @__PURE__ */ jsx("div", { className: "bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl px-8 py-4 text-center max-w-xl shadow-xl", children: /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-foreground mb-1", children: "A website that doesn't convert isn't a neutral investment. It's an active liability — costing you leads, bookings, and revenue every day it stays the way it is. And it's undermining every other marketing channel you're running at the same time." }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "WHAT WE BUILD",
            title: "We Don't Build Websites. We Build the Conversion Foundation Your Entire Growth Strategy",
            titleHighlight: "Runs On.",
            description: "Every site we deliver is purpose-built around one question: what do you need a visitor to do — and what does it take to make that easy? The answer to that question shapes your website. And your website shapes everything else."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12", children: [
          { icon: Search, title: "Strategy First", body: "Before we touch a design or write a line of copy, we do strategy. We look at your business, your market, your ideal customer, and the specific action you need your website to drive — whether that's a phone call, a form submission, a booking, or a quote request. Every decision after that is made in service of that outcome." },
          { icon: MousePointerClick, title: "Built for Real People", body: "That means your website isn't built around what looks attractive to a designer. It's built around what moves a real person — someone who found you on Google or clicked your ad — to trust you quickly, understand your value clearly, and take the next step without friction." },
          { icon: CheckCircle2, title: "Clarity at Every Level", body: "In practice, that looks like this: your homepage communicates exactly what you do and who you serve within seconds of arrival. Your services are described in terms of outcomes, not just tasks. Your credibility is established through proof — real reviews, verifiable credentials, and specifics that matter to a buyer in your market. Your calls to action are clear, well-placed, and written to reduce hesitation. And your site performs just as well on a phone as it does on a desktop." },
          { icon: Link2, title: "Connected From Day One", body: "Your website is also built from day one to integrate with the rest of your marketing — connecting to your CRM, booking system, and tracking tools. It's the conversion hub of the Digital Dominance Method, designed to work alongside your SEO, paid advertising, and lead generation efforts — not as a standalone project handed off and forgotten." }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "feature-card-teal animate-fade-up", style: { animationDelay: `${i * 0.1}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground mb-3", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: item.body })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto animate-fade-up", children: /* @__PURE__ */ jsx(GlowCard, { className: "p-8 border-primary/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-primary/10 shrink-0", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: "A note on how we work:" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "GrowSmallBiz builds websites as part of a broader digital growth engagement. We don't take on design-only or website-only projects. The reason is straightforward: a high-converting website, built in isolation from your SEO strategy, your paid traffic, and your lead generation infrastructure, is a foundation with nothing built on top of it. Our clients get the website and the growth system it's designed to support. If you're looking for that kind of partnership — not just a new site — the strategy call is the right place to start." })
          ] })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Your Website Should Be Your Best Salesperson",
          description: "If it's not generating leads, that's a solvable problem — and it's usually just the beginning. Let's talk strategy.",
          buttonText: "Schedule Strategy Call",
          buttonHref: CTA_URL,
          accentWords: ["Best Salesperson"],
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "py-24 relative overflow-hidden border-t bg-card/80 border-primary/10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "YOUR GROWTH PARTNER" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-6 text-foreground", children: "Why GrowSmallBiz" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
            { icon: Shield, title: "30+ Years of Growth Experience", description: "GrowSmallBiz was built on over 30 years of hands-on experience in sales, marketing, and digital transformation — including Fortune 500 engagements across supply chain, revenue operations, and go-to-market strategy. That background informs everything about how we approach a local service business website: with the same strategic rigor applied to enterprise growth, scaled and focused on what actually moves the needle for a contractor, a med spa, a dental practice, or a professional services firm." },
            { icon: Eye, title: "We Know Your Industry", description: "We work exclusively with local service businesses — which means we are not learning your industry on your dime. We know what makes a homeowner choose one roofing contractor over another. We know what a patient needs to see before booking an aesthetic treatment. We know what trust signals matter to someone vetting a financial advisor versus a plumber. That specificity is not learned from a course — it is earned from building and optimizing websites, SEO campaigns, and lead generation systems for service businesses across the San Francisco Bay Area and nationally." },
            { icon: Link2, title: "We Stay in the Engagement", description: "Most web design agencies hand you a finished site and move on. We build websites as the foundation of a broader digital growth system — and we stay in the engagement. If you are looking for a partner who understands your market, has built in your verticals, and brings strategic depth alongside technical execution, the strategy call is where that conversation starts." }
          ].map((card, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "feature-card-teal space-y-4 animate-fade-up",
              style: { animationDelay: `${index * 0.1}s` },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(card.icon, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground", children: card.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: card.description })
              ]
            },
            index
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "WHAT'S INCLUDED",
            title: "What's Built Into Every Website",
            titleHighlight: "We Deliver",
            description: `These aren't add-ons or upgrade tiers. Every site we build includes the full conversion architecture — because a website missing any of these elements has a hole in it. And because every site we deliver is designed to function as the foundation of a larger growth system, the bar for what “complete” means is set accordingly.`
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-16 space-y-12 max-w-5xl mx-auto", children: includedFeatures.map((feature, index) => {
          const isEven = index % 2 === 0;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex flex-col md:flex-row items-center gap-8 animate-fade-up ${!isEven ? "md:flex-row-reverse" : ""}`,
              style: { animationDelay: `${index * 0.05}s` },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-primary-foreground" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-primary/20", children: String(index + 1).padStart(2, "0") })
                ] }),
                /* @__PURE__ */ jsxs(GlowCard, { className: "flex-1 p-8", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: feature.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
                ] })
              ]
            },
            index
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-12 animate-fade-up", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: CTA_URL, target: "_blank", rel: "noopener noreferrer", children: [
          "Schedule Strategy Call",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "WHY THIS MATTERS",
            title: "Every Marketing Dollar You Spend Eventually Lands on",
            titleHighlight: "Your Website",
            description: "Google Ads, SEO, referrals, social media — however a prospect finds you, what happens when they arrive on your website determines whether they become a customer."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12", children: [
            /* @__PURE__ */ jsxs(GlowCard, { className: "p-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Think through the path a new customer takes before they contact you. Maybe they searched for a service in your area and found you on Google. Maybe a neighbor mentioned your name. Maybe they clicked your ad. In almost every case, the next thing they do is visit your website. That visit is the moment. And it's almost entirely within your control." }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "If your site communicates clearly — here's who we are, here's what we do, here's why we're the right choice, here's how to reach us — a meaningful percentage of those visitors will contact you. If it doesn't, they'll hesitate. And hesitation almost always ends the same way: a closed tab and a competitor's number getting dialed instead." })
            ] }),
            /* @__PURE__ */ jsxs(GlowCard, { className: "p-8", style: { animationDelay: "0.1s" }, children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "This is why your website isn't just one marketing asset among many — it's the conversion layer that your entire growth strategy runs through. Every channel feeds it. Every dollar you spend on visibility, traffic, and reach either pays off or gets wasted based on what happens when a prospect arrives." }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "A strong website makes your Google Ads more profitable — because the traffic you're paying for actually converts. It makes your SEO investment produce real leads instead of just rankings. It makes your referrals close faster, because the prospect arrives informed and leaves ready to book. It gives your social media a destination worth sending people to." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 lg:p-8", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A weak website does the opposite to all of it. It doesn't just underperform on its own — it degrades every other marketing investment you're making at the same time." }) }),
            /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 lg:p-8", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "This is why, at GrowSmallBiz, the website is always the first piece of the conversation — and why we build it as the foundation of a full growth system, not as a standalone deliverable. When the hub is strong, everything connected to it performs better." }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Let's Talk About Your Website",
          description: "If your website isn't generating leads, that's a solvable problem. Schedule a free strategy call and we'll show you where the gaps are.",
          buttonText: "Schedule Strategy Call",
          buttonHref: CTA_URL,
          accentWords: ["Free", "Strategy Call"],
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-primary border-primary/30 px-4 py-1.5 text-sm", children: "HOW IT WORKS" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-10 animate-fade-up", children: /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
          "From Strategy to Launch: What the Process",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Looks Like" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "section-description text-center mt-4 mb-16 max-w-3xl mx-auto", children: "Every project follows the same four-phase process — because the order matters. Strategy before design. Structure before aesthetics. Launch into a connected system, not into a vacuum." }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 space-y-16 max-w-5xl mx-auto", children: processSteps.map((step, i) => {
          const StepIcon = step.icon;
          const isEven = i % 2 === 0;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex flex-col md:flex-row items-center gap-8 animate-fade-up ${!isEven ? "md:flex-row-reverse" : ""}`,
              style: { animationDelay: `${i * 0.1}s` },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(StepIcon, { className: "w-10 h-10 text-primary-foreground" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-primary/20", children: String(i + 1).padStart(2, "0") })
                ] }),
                /* @__PURE__ */ jsxs(GlowCard, { className: "flex-1 p-8", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: step.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: step.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground font-medium", children: step.deliverable })
                  ] })
                ] })
              ]
            },
            i
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: CTA_URL, target: "_blank", rel: "noopener noreferrer", children: [
            "Schedule Strategy Call",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/#industries", children: "View Industries We Serve" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "AFTER LAUNCH",
            title: "What Changes After Your New Website",
            titleHighlight: "Goes Live",
            description: "A high-converting website doesn't just perform better in isolation. It raises the performance ceiling on every other part of your marketing."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: afterLaunchItems.map((item, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "feature-card-teal space-y-4 animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: item.description })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            subtitle: "WHO THIS IS FOR",
            title: "Built for Local Service Businesses Where Every Lead",
            titleHighlight: "Matters",
            description: "We work exclusively with local service businesses — which means every framework we apply, every trust signal we build in, and every conversion decision we make is based on what actually moves customers in your category. Not generic best practices. Specific, earned knowledge of what works in your market."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: industries.map((industry, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "feature-card-teal space-y-4 animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(industry.icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground", children: industry.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: industry.description })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: "Common Questions About Our Website Strategy",
          subtitle: "These are the questions most business owners ask once they realize the issue is not just design — it is how the website fits into the broader growth system.",
          faqs,
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about website strategy?",
            description: "We're here to help. Let's talk about how a conversion-focused website fits into your growth plan.",
            tagline: "The conversation starts here."
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "READY TO TALK STRATEGY?" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight", children: [
            "If Your Website Isn't Generating Leads, That's a Solvable Problem — and It's Usually Just the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Beginning." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: "Many local businesses have been sitting on underperforming websites for years — not because there's no solution, but because no one showed them what a strategically built site looks like, what it can do, or how it fits into a growth strategy that actually compounds over time." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
          /* @__PURE__ */ jsxs(GlowCard, { className: "p-8", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-foreground mb-4", children: "That's what the free growth strategy call is for." }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "In 30 minutes, we'll look at your current website, identify the specific gaps that are costing you leads, and walk you through what a conversion-focused rebuild would look like for your business. We'll also look at the bigger picture: how your website connects to your SEO, your paid traffic, and your lead generation system — and where the highest-leverage opportunities are in your specific market." })
          ] }),
          /* @__PURE__ */ jsxs(GlowCard, { className: "p-8", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "This isn't a website consultation. It's a growth strategy conversation. The website is almost always where it starts — because without a strong conversion foundation, nothing else performs the way it should. But the call covers the full picture: website, AI SEO, paid search, conversion strategy, and what a complete digital growth system looks like for a business like yours." }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-foreground border-l-4 border-primary pl-4", children: "No pitch deck. No pressure. No obligation. Just clarity on where you are, where you could be, and what it would take to get there." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Let's Build Your Growth Engine",
            description: "If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call.",
            buttonText: "Schedule Strategy Call",
            buttonHref: CTA_URL,
            sectionClassName: "pt-12 pb-0"
          }
        ),
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
  WebsiteDesign as default
};
