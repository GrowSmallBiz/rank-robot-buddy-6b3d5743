import { jsx, jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { Zap, ArrowRight, Phone, XCircle, CheckCircle2, Brain, Wrench, TrendingUp, Settings, BarChart3, Award, Layers, LayoutDashboard, Target, Heart, Users, PhoneCall, ClipboardCheck, Rocket } from "lucide-react";
import { Head } from "vite-react-ssg";
import { P as PageJsonLd } from "./PageJsonLd-DPKTdsi3.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
const BASE_URL = "https://growsmallbiz.io";
const navigationItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
  { name: "SEO Agency", url: "/services/seo-agency/" },
  { name: "Paid Advertising", url: "/services/paid-advertising/" },
  { name: "Website Design", url: "/services/website-design/" },
  { name: "Marketing Automation", url: "/services/marketing-automation-for-small-business/" },
  { name: "Home Service Contractors", url: "/home-service-contractors/" },
  { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
  { name: "Professional Services", url: "/professional-services/" },
  { name: "Locations", url: "/locations/locations-we-serve/" },
  { name: "About", url: "/about/" },
  { name: "Contact", url: "/contact/" }
];
const SiteNavigationJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: navigationItems.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: `${BASE_URL}${item.url}`
    }))
  };
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
const FAQSection = lazy(() => import("./FAQSection-Knk-AyWr.js").then((m) => ({ default: m.FAQSection })));
const AnimatedStatsSection = lazy(() => import("./AnimatedStatsSection-DCypE1b8.js").then((m) => ({ default: m.AnimatedStatsSection })));
const CardCTA = lazy(() => import("./index-DMI9i1UE.js").then((m) => ({ default: m.CardCTA })));
const WhyChooseSection = lazy(() => import("./WhyChooseSection-DuLCr5_6.js").then((m) => ({ default: m.WhyChooseSection })));
const HomeCaseStudySection = lazy(() => import("./HomeCaseStudySection-DwoXHktO.js").then((m) => ({ default: m.HomeCaseStudySection })));
const ConsultationFormSection = lazy(() => import("./ConsultationFormSection-DDNhkaf7.js").then((m) => ({ default: m.ConsultationFormSection })));
const homepageStats = [
  { value: "1", label: "Connected System", icon: Layers },
  { value: "AI", label: "Powered at Every Stage", icon: Brain },
  { value: "DFY", label: "Done-for-You Execution", icon: Wrench },
  { value: "1", label: "Multi-Channel Dashboard", icon: LayoutDashboard }
];
const coreServices = [
  {
    title: "Capture",
    description: "Get found, build trust quickly, and turn visitors into inquiries.",
    features: [
      "Website Design",
      "Managed AI SEO",
      "Google & Meta Ads"
    ],
    icon: Target
  },
  {
    title: "Nurture",
    description: "Keep leads engaged with automated follow-up so interest does not go cold.",
    features: [
      "CRM & Marketing Automation",
      "Automated Email & SMS Follow-Up",
      "Missed-Call Capture / AI Follow-Up"
    ],
    icon: Heart
  },
  {
    title: "Convert",
    description: "Move more leads into booked calls, appointments, and sales opportunities.",
    features: [
      "Pipeline Management",
      "Booking / Appointment Flows",
      "AI Lead Handling"
    ],
    icon: TrendingUp
  },
  {
    title: "Retain",
    description: "Strengthen loyalty, trust, and repeat business with better post-conversion systems.",
    features: [
      "Review Request Workflows",
      "Review Response Workflows",
      "Ongoing Customer Follow-Up"
    ],
    icon: Users
  }
];
const homepageFAQs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work primarily with local service businesses, including home services, healthcare, legal, accounting, and other businesses that rely on visibility, trust, and fast lead follow-up."
  },
  {
    question: "Do I need every service at once?",
    answer: "No. We focus first on the areas most likely to create impact, then build from there as your growth system matures."
  },
  {
    question: "How soon can we get started?",
    answer: "We can usually begin with a strategy call and initial review quickly, then prioritize the right next steps based on your goals and current setup."
  },
  {
    question: "How long does it take to see results?",
    answer: "Timelines vary by service. Paid ads and follow-up improvements can create results faster, while SEO and long-term visibility strategies build over time."
  },
  {
    question: "Is this done-for-you or do I have to manage it myself?",
    answer: "GrowSmallBiz is designed as a done-for-you service. We handle the strategy, setup, execution, and optimization so you do not have to juggle the marketing systems yourself."
  },
  {
    question: "How do you use AI in the system?",
    answer: "We use AI-powered systems across the client acquisition process, including search visibility support, follow-up automation, AI lead handling, and faster response workflows."
  },
  {
    question: "Will I be able to see what is working?",
    answer: "Yes. We provide a clear multi-channel performance dashboard so you can track how your visibility, leads, follow-up, and conversion activity are performing."
  },
  {
    question: "Is marketing performance guaranteed?",
    answer: "No marketing channel performs perfectly all the time. That is why we track performance closely, recalibrate strategy when needed, and keep improving the system based on real data."
  },
  {
    question: "Do you offer any kind of performance guarantee?",
    answer: "Yes. If we do not generate leads within a pre-agreed timeframe and scope, we continue working at no additional management fee until results are delivered."
  }
];
const howItWorksSteps = [
  {
    title: "Strategy Call",
    description: "We learn about your goals, marketing gaps, and where better systems can create the biggest impact.",
    icon: PhoneCall
  },
  {
    title: "Review & Analysis",
    description: "We evaluate your website, local visibility, reviews, follow-up systems, and competitive landscape.",
    icon: ClipboardCheck
  },
  {
    title: "Build & Launch",
    description: "We implement the right mix of website improvements, SEO, ads, automation, and AI lead handling.",
    icon: Rocket
  },
  {
    title: "Optimize & Grow",
    description: "As data comes in, we improve what is working and refine what is not.",
    icon: Settings
  }
];
const Index = () => {
  const { strategySessionUrl } = useUtm();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "AI Digital Marketing for Local Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up working together for local service businesses." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses",
        description: "Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up for local service businesses.",
        url: "/",
        breadcrumbs: []
      }
    ),
    /* @__PURE__ */ jsx(SiteNavigationJsonLd, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("picture", { children: [
          /* @__PURE__ */ jsx("source", { media: "(max-width: 768px)", srcSet: "/images/homepage-hero-bg-mobile.webp" }),
          /* @__PURE__ */ jsx("source", { media: "(min-width: 769px)", srcSet: "/images/homepage-hero-bg.webp" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/homepage-hero-bg.webp",
              alt: "",
              role: "presentation",
              fetchPriority: "high",
              loading: "eager",
              width: 1920,
              height: 1080,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/85" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "animate-fade-up-safe", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" }),
            "AI-Powered Growth System for Local Service Businesses"
          ] }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up-safe delay-100", children: [
            "More Leads. Stronger Visibility.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "A System That Works While You Work." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up-safe delay-200", children: "GrowSmallBiz helps local service businesses attract qualified leads, show up in local search, follow up faster, and convert more opportunities with one connected, AI-powered growth system." }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up-safe delay-300", children: "We handle your website, SEO, paid ads, CRM automation, and AI-powered follow-up so you can spend less time managing marketing and more time focusing on your business, your clients, and your family." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground/80 italic max-w-3xl mx-auto animate-fade-up-safe", style: { animationDelay: "0.35s" }, children: "When performance needs improvement, we review the data, recalibrate the strategy, and keep optimizing the system." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-safe delay-400", children: [
            /* @__PURE__ */ jsx("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs(Button, { variant: "hero", size: "xl", children: [
              "Schedule Strategy Call",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
            ] }) }),
            /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
              " Call +1 (925) 886-3724"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground animate-fade-up-safe", style: { animationDelay: "0.5s" }, children: "Built for home services, healthcare, legal, accounting, and other local service businesses." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "From Fragmented to Focused" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: "Most Local Businesses Are Losing Leads They Never Knew They Had" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "The problem is usually not effort. It is the gap between the tools and tactics you are already using." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-background/80 border border-ghl-icon rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.3)]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-destructive" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground", children: "The Fragmented Approach" })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
                "Separate tools and platforms that do not work together.",
                "Leads slipping through the cracks because follow-up is delayed or inconsistent.",
                "Weak local visibility when nearby customers are actively searching.",
                "Unclear tracking that makes it hard to know what is driving revenue.",
                "Feast-or-famine lead flow instead of steady growth."
              ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-destructive/60 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-background/80 border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]", style: { animationDelay: "0.1s" }, children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full", children: "Our Solution" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground", children: "A Connected Growth System" })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
                "Website, SEO, ads, reviews, and follow-up all support one conversion path.",
                "Faster response times with automation and AI-powered lead handling.",
                "Stronger local visibility and trust before the first conversation happens.",
                "Clearer attribution so you can see what is working.",
                "More predictable growth because the system is working together."
              ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, index)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-dark cv-auto", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "How It Works" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
            "A Clear Path from Strategy to",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Results" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "You do not need everything at once. We focus on the priorities most likely to create meaningful impact first." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: howItWorksSteps.map((step, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "feature-card-teal rounded-xl p-6 text-center space-y-4 animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: step.description })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsx("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs(Button, { variant: "hero", size: "lg", className: "animate-fade-up", children: [
          "Schedule Strategy Call",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "services", className: "py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "Core Services" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
              "A Connected Growth System for",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Local Service Businesses" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "GrowSmallBiz combines AI-powered systems and done-for-you services to help you capture leads, nurture them automatically, convert more of them into booked jobs, and retain more customers — without forcing you to manage a stack of disconnected tools yourself." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: coreServices.map((service, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "backdrop-blur-sm rounded-2xl p-6 space-y-4 animate-fade-up relative transition-all hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: `${index * 0.05}s`, border: "2px solid #17a2b8ff", backgroundColor: "#2d465cff" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(service.icon, { className: "w-6 h-6 text-ghl-icon" }) }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground text-xl", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: service.description }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-ghl-icon shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, featureIndex)) })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-12 animate-fade-up", children: /* @__PURE__ */ jsx(Link, { to: "/services/", children: /* @__PURE__ */ jsxs(Button, { variant: "heroOutline", size: "lg", children: [
            "Explore All Services",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Ready to Build a Smarter Growth System?",
            description: "Book a free strategy call to see how our done-for-you, AI-powered growth system can take marketing and follow-up off your plate, so you can focus more on running your business and spending time where it matters most. We also provide a clear dashboard view of performance and continuously recalibrate the strategy when results need improvement.",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategySessionUrl
          }
        ),
        /* @__PURE__ */ jsx(
          WhyChooseSection,
          {
            title: "Why Local Service Businesses Choose GrowSmallBiz",
            subtitle: "Why GrowSmallBiz",
            description: "GrowSmallBiz is built around one idea: local businesses grow faster when AI-powered systems, done-for-you execution, adaptive strategy, and clear reporting all work together as one connected client acquisition engine.",
            items: [
              {
                title: "AI at Every Stage",
                description: "We use AI-powered systems across visibility, follow-up, lead handling, and conversion support.",
                icon: Brain
              },
              {
                title: "Done-for-You Execution",
                description: "We do the heavy lifting so you do not have to manage websites, SEO, ads, and automation yourself.",
                icon: Wrench
              },
              {
                title: "Built for Local Growth",
                description: "The messaging, channels, and conversion flow are designed for local service business growth.",
                icon: TrendingUp
              },
              {
                title: "Adaptive Strategy",
                description: "When a channel or campaign is not performing as expected, we review the data and recalibrate the strategy.",
                icon: Settings
              },
              {
                title: "Multi-Channel Dashboard",
                description: "See lead generation and performance across SEO, ads, follow-up, and conversion activity in one place.",
                icon: BarChart3
              },
              {
                title: "Performance Commitment",
                description: "We stand behind our work with a performance guarantee. If we do not generate leads within a pre-agreed timeframe and scope, we continue working at no additional management fee until results are delivered.",
                icon: Award
              }
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatedStatsSection, { stats: homepageStats, columns: 4 }),
        /* @__PURE__ */ jsx(HomeCaseStudySection, {}),
        /* @__PURE__ */ jsx(
          FAQSection,
          {
            title: "Frequently Asked Questions",
            subtitle: "Answers to common questions local service business owners ask before getting started.",
            faqs: homepageFAQs,
            contactCTA: {
              ...baseContactCTA,
              title: "Have more questions?",
              description: "We're here to help. Reach out to us for a personalized consultation.",
              tagline: "Let's grow your business together."
            }
          }
        ),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Let's Build Your Growth Engine",
            description: "If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call.",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategySessionUrl
          }
        ),
        /* @__PURE__ */ jsx(ConsultationFormSection, { utmCampaign: "home-consultation", utmMedium: "home" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Index as default
};
