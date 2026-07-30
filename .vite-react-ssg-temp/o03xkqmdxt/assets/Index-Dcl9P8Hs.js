import { j as jsxDEV } from "../main.mjs";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { l as leakyBucket } from "./leaky-bucket-78FFvP1z.js";
import { F as FaqJsonLd } from "./FaqJsonLd-D-0II6By.js";
import { Zap, ArrowRight, Phone, XCircle, CheckCircle2, Brain, Wrench, TrendingUp, Settings, BarChart3, Award, Layers, LayoutDashboard, Target, Heart, Users, PhoneCall, ClipboardCheck, Rocket } from "lucide-react";
import { Head } from "vite-react-ssg";
import { P as PageJsonLd } from "./PageJsonLd-D6BEuSgJ.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
const connectedBucket = "/assets/connected-bucket-x1Hi78K0.jpg";
const relatedFaqs = [
  {
    question: "How much does a Google ad consultant cost?",
    answer: "The cost of a Google ad consultant varies widely, typically ranging from $50 to $200 per hour, depending on their experience and the complexity of your campaign. Some consultants may also offer flat-rate packages based on your advertising budget."
  },
  {
    question: "How much does it cost to hire an agency for Google ads?",
    answer: "The cost to hire an agency for Google Ads varies widely, typically ranging from $500 to $5,000 per month, depending on the agency's expertise, the complexity of your campaigns, and your advertising budget."
  },
  {
    question: "What factors influence Google ad consultant pricing?",
    answer: "The factors influencing Google ad consultant pricing include the consultant's experience, the complexity of the campaigns, the scope of services offered, and the specific goals of the advertising strategy."
  },
  {
    question: "Are there package deals for Google ad services?",
    answer: "Package deals for Google ad services are available, allowing you to combine various advertising options at a discounted rate. These packages are designed to maximize your advertising budget while enhancing your online visibility and lead generation efforts."
  },
  {
    question: "How do agency fees vary for Google ads?",
    answer: "Agency fees for Google Ads can vary based on factors such as the agency's expertise, the complexity of the campaign, and the budget allocated. Typically, fees may be structured as a percentage of ad spend, a flat monthly rate, or a combination of both."
  },
  {
    question: "What is the average cost for Google ad management?",
    answer: "The average cost for Google ad management typically ranges from $300 to $1,500 per month, depending on factors like the complexity of the campaign and the agency's expertise."
  },
  {
    question: "How can I budget for Google ads effectively?",
    answer: "Budgeting for Google Ads effectively involves setting clear goals, determining your target audience, and allocating a monthly budget based on expected ROl. Regularly monitor performance and adjust bids to maximize your advertising spend."
  },
  {
    question: "What services are included in Google ad agency fees?",
    answer: "Google ad agency fees typically include services such as campaign strategy development, keyword research, ad creation, ongoing optimization, performance tracking, and reporting to ensure effective ad spend and maximum return on investment."
  },
  {
    question: "How do I choose a Google ad consultant?",
    answer: "Choosing a Google ad consultant involves evaluating their experience, client reviews, and success metrics. Look for a consultant who understands your industry and can tailor strategies to meet your specific business goals."
  },
  {
    question: "What should I expect from a Google ad agency?",
    answer: "What to expect from a Google ad agency includes expert campaign management, strategic ad placement, performance tracking, and ongoing optimization to maximize your return on investment and drive qualified leads to your business."
  },
  {
    question: "How can I assess Google ad consultant value?",
    answer: "Assessing the value of a Google ad consultant involves evaluating their track record, understanding their strategies, and analyzing the ROI they deliver through campaigns. Look for case studies, client testimonials, and transparent reporting to gauge effectiveness."
  },
  {
    question: "What are common pricing models for Google ads?",
    answer: "Common pricing models for Google Ads include Cost-Per-Click (CPC), where advertisers pay for each click on their ad, Cost-Per-Thousand Impressions (CPM), which charges based on ad visibility, and Cost-Per-Acquisition (CPA), focusing on conversions."
  },
  {
    question: "How does experience affect Google ad consultant rates?",
    answer: "The impact of experience on Google ad consultant rates is significant. Generally, more experienced consultants command higher rates due to their proven track record, advanced skills, and ability to deliver better results for clients."
  },
  {
    question: "What is the ROI for hiring a Google ad agency?",
    answer: "The ROI for hiring a Google ad agency is significant, as they can optimize your ad spend, increase qualified leads, and improve conversion rates, ultimately leading to higher revenue and a better return on your investment."
  },
  {
    question: "How can I negotiate Google ad consultant fees?",
    answer: "Negotiating Google ad consultant fees involves researching industry standards, understanding the consultant's value, and being clear about your budget. Open communication about your needs can lead to a mutually beneficial agreement."
  },
  {
    question: "What are the benefits of hiring a Google ad agency?",
    answer: "The benefits of hiring a Google ad agency include expert management of your ad campaigns, optimized targeting for qualified leads, and improved ROI through data-driven strategies, allowing you to focus on your business while enhancing online visibility and growth."
  },
  {
    question: "How do Google ad costs compare to other platforms?",
    answer: "Google ad costs generally tend to be higher than those on many other platforms, such as social media, due to its extensive reach and targeting capabilities. However, the return on investment can often justify the expense, depending on your goals."
  },
  {
    question: "What is the minimum budget for Google ads?",
    answer: "The minimum budget for Google Ads typically starts at around $10 per day, but effective campaigns often require a higher investment to generate meaningful results and attract qualified leads."
  },
  {
    question: "How can I maximize my Google ad budget?",
    answer: "Maximizing your Google ad budget involves targeting the right keywords, refining your audience settings, and continuously analyzing performance data to optimize your campaigns. Focus on high-converting ads and adjust bids based on results to ensure effective spending."
  },
  {
    question: "What are the hidden costs of Google ads?",
    answer: "The hidden costs of Google Ads include fees for ad management, costs associated with click fraud, and expenses from ineffective targeting or poorly optimized campaigns that can lead to wasted budget without generating meaningful leads."
  },
  {
    question: "How often should I review Google ad spending?",
    answer: "Regularly reviewing your Google ad spending is essential for optimizing your marketing strategy. Aim to assess your budget at least once a month to ensure your campaigns are performing effectively and to make necessary adjustments."
  },
  {
    question: "What metrics determine Google ad success?",
    answer: "The metrics that determine Google ad success include click-through rate (CTR), conversion rate, cost per acquisition (CPA), and return on ad spend (ROAS). These metrics help evaluate ad performance and optimize campaigns for better results."
  },
  {
    question: "How can I track Google ad consultant performance?",
    answer: "Tracking Google ad consultant performance involves monitoring key metrics such as click-through rates, conversion rates, and return on ad spend. Regular performance reports and analytics tools can provide insights into the effectiveness of their strategies."
  },
  {
    question: "What are the risks of DIY Google ads?",
    answer: "The risks of DIY Google Ads include wasted budget due to improper targeting, ineffective ad copy, and lack of ongoing optimization. Without expertise, businesses may struggle to achieve desired results, leading to missed opportunities and reduced ROI."
  },
  {
    question: "How do seasonal trends affect Google ad costs?",
    answer: "Seasonal trends significantly influence Google ad costs. During peak seasons, competition increases, leading to higher bid prices, while off-peak times may result in lower costs due to decreased demand for ad space."
  },
  {
    question: "What is the process for hiring a Google ad agency?",
    answer: "The process for hiring a Google ad agency involves researching potential agencies, evaluating their expertise and case studies, discussing your goals, and then selecting one that aligns with your needs to create and manage your ad campaigns effectively."
  },
  {
    question: "How can I find reputable Google ad consultants?",
    answer: "Finding reputable Google ad consultants involves researching their credentials, checking client testimonials, and reviewing case studies. Look for professionals with proven success in managing Google Ads campaigns and consider scheduling consultations to assess their expertise and fit for your business."
  },
  {
    question: "What questions should I ask a Google ad agency?",
    answer: "When considering a Google ad agency, ask about their experience with your industry, the strategies they recommend, how they measure success, their approach to budget management, and what kind of reporting you can expect."
  },
  {
    question: "How do I evaluate Google ad consultant proposals?",
    answer: "Evaluating Google ad consultant proposals involves assessing their strategies, past performance, pricing, and alignment with your business goals. Look for clear metrics, case studies, and a tailored approach that demonstrates their understanding of your target audience."
  },
  {
    question: "What are the latest trends in Google ad pricing?",
    answer: "The latest trends in Google ad pricing indicate a shift towards increased competition, leading to higher costs per click (CPC) across various industries. Additionally, the rise of automation and machine learning tools is influencing pricing strategies, making it essential for businesses to adapt their budgets accordingly."
  }
];
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
  return /* @__PURE__ */ jsxDEV(Head, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(schema) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/SiteNavigationJsonLd.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/SiteNavigationJsonLd.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, void 0);
};
const FAQSection = lazy(() => import("./FAQSection-nzzIZwy_.js").then((m) => ({ default: m.FAQSection })));
const RelatedQuestionsSection = lazy(() => import("./RelatedQuestionsSection-CMEEQ5WT.js").then((m) => ({ default: m.RelatedQuestionsSection })));
const AnimatedStatsSection = lazy(() => import("./AnimatedStatsSection-BTCPrhtT.js").then((m) => ({ default: m.AnimatedStatsSection })));
const CardCTA = lazy(() => import("./index-tTRlTe8l.js").then((m) => ({ default: m.CardCTA })));
const WhyChooseSection = lazy(() => import("./WhyChooseSection-CylwFt5k.js").then((m) => ({ default: m.WhyChooseSection })));
const HomeCaseStudySection = lazy(() => import("./HomeCaseStudySection-3g-eViAv.js").then((m) => ({ default: m.HomeCaseStudySection })));
const ConsultationFormSection = lazy(() => import("./ConsultationFormSection-XatlJMLz.js").then((m) => ({ default: m.ConsultationFormSection })));
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
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "AI Powered Digital Marketing for Local Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "AI-powered digital marketing for local businesses. Get more leads with website, AI-SEO, paid ads, and AI marketing automation. Contact us!" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "digital marketing, local SEO, lead generation, website design, CRM automation, paid advertising, marketing solutions, growth system" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses",
        description: "Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up for local service businesses.",
        url: "/",
        breadcrumbs: []
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 180,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SiteNavigationJsonLd, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("picture", { children: [
          /* @__PURE__ */ jsxDEV("source", { media: "(max-width: 768px)", srcSet: "/images/homepage-hero-bg-mobile.webp" }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 193,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("source", { media: "(min-width: 769px)", srcSet: "/images/homepage-hero-bg.webp" }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 194,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: "/images/homepage-hero-bg.webp",
              alt: "Analytics dashboard displaying SEO metrics, CRM automation graphs, and marketing performance statistics, ilustrating GrowSmallBiz's digital marketing solutions for local service businesses.",
              role: "presentation",
              fetchPriority: "high",
              loading: "eager",
              width: 1920,
              height: 1080,
              className: "absolute inset-0 w-full h-full object-cover"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 195,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 192,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/85" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 206,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl hidden md:block" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 209,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl hidden md:block" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 210,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up-safe", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsxDEV(Zap, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 216,
              columnNumber: 17
            }, void 0),
            "AI-Powered Growth System for Local Service Businesses"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 215,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up-safe delay-100 bg-gradient-heading bg-clip-text text-transparent", children: "More Leads. Stronger Visibility. A System That Works While You Work." }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up-safe delay-200", children: "GrowSmallBiz helps local service businesses attract qualified leads, show up in local search, follow up faster, and convert more opportunities with one connected, AI-powered growth system." }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up-safe delay-300", children: "We handle your website, SEO, paid ads, CRM automation, and AI-powered follow-up so you can spend less time managing marketing and more time focusing on your business, your clients, and your family." }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 229,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground/80 italic max-w-3xl mx-auto animate-fade-up-safe", style: { animationDelay: "0.35s" }, children: "When performance needs improvement, we review the data, recalibrate the strategy, and keep optimizing the system." }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 233,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-safe delay-400", children: [
            /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", children: [
              "Schedule Strategy Call",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 241,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 246,
                columnNumber: 19
              }, void 0),
              " Call +1 (925) 886-3724"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 244,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground animate-fade-up-safe", style: { animationDelay: "0.5s" }, children: "Built for home services, healthcare, legal, accounting, and other local service businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 251,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 212,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 191,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 260,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl hidden md:block" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 261,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden md:block" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 262,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "From Fragmented to Focused" }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 266,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Most Local Businesses Are Losing Leads They Never Knew They Had" }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 267,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground", children: "The problem is usually not effort. It is the gap between the tools and tactics you are already using." }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 270,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 265,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-background/80 border border-ghl-icon rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.3)] flex flex-col", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(XCircle, { className: "w-6 h-6 text-destructive" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 280,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 279,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground", children: "The Fragmented Approach" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 282,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 278,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("figure", { className: "mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-xl overflow-hidden border border-destructive/20 bg-background/40", children: /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: leakyBucket,
                    alt: "Leaky bucket illustrating local businesses losing leads through gaps in their marketing",
                    width: 800,
                    height: 800,
                    loading: "lazy",
                    className: "w-full h-72 object-contain"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/Index.tsx",
                    lineNumber: 286,
                    columnNumber: 19
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 285,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("figcaption", { className: "text-xs text-destructive italic text-center mt-2 font-medium", children: "Leads slip through the cracks of disconnected tools." }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 295,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 284,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: [
                "Separate tools and platforms that do not work together.",
                "Leads slipping through the cracks because follow-up is delayed or inconsistent.",
                "Weak local visibility when nearby customers are actively searching.",
                "Unclear tracking that makes it hard to know what is driving revenue.",
                "Feast-or-famine lead flow instead of steady growth."
              ].map((item, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV(XCircle, { className: "w-5 h-5 text-destructive/60 shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 308,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 309,
                  columnNumber: 21
                }, void 0)
              ] }, index, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 307,
                columnNumber: 19
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 299,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 277,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-background/80 border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] flex flex-col", style: { animationDelay: "0.1s" }, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full", children: "Our Solution" }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 317,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-6 h-6 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 322,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 321,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground", children: "A Connected Growth System" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 324,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 320,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("figure", { className: "mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-xl overflow-hidden border border-primary/20 bg-background/40 shadow-[0_0_40px_rgba(255,127,80,0.15)]", children: /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: connectedBucket,
                    alt: "Sealed bucket overflowing with leads, illustrating a connected growth system that captures every opportunity",
                    width: 1024,
                    height: 1024,
                    loading: "lazy",
                    className: "w-full h-72 object-contain"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/Index.tsx",
                    lineNumber: 328,
                    columnNumber: 19
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 327,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("figcaption", { className: "text-xs text-success italic text-center mt-2 font-medium", children: "One connected system captures every lead and overflows with growth." }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 337,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 326,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: [
                "Website, SEO, ads, reviews, and follow-up all support one conversion path.",
                "Faster response times with automation and AI-powered lead handling.",
                "Stronger local visibility and trust before the first conversation happens.",
                "Clearer attribution so you can see what is working.",
                "More predictable growth because the system is working together."
              ].map((item, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-foreground", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 350,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 351,
                  columnNumber: 21
                }, void 0)
              ] }, index, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 349,
                columnNumber: 19
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 341,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 316,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 275,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 264,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 259,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-dark cv-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "How It Works" }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 364,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "A Clear Path from Strategy to Results" }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 365,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground", children: "You do not need everything at once. We focus on the priorities most likely to create meaningful impact first." }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 368,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 363,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: howItWorksSteps.map((step, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "feature-card-teal rounded-xl p-6 text-center space-y-4 animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(step.icon, { className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 381,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 380,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-semibold text-foreground text-lg", children: step.title }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 383,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: step.description }, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 384,
                columnNumber: 17
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 375,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 373,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", className: "animate-fade-up", children: [
          "Schedule Strategy Call",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 393,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 391,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 390,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 389,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 362,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 361,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "services", className: "py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 402,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "Core Services" }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 406,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "A Connected Growth System for Local Service Businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 407,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground", children: "GrowSmallBiz combines AI-powered systems and done-for-you services to help you capture leads, nurture them automatically, convert more of them into booked jobs, and retain more customers — without forcing you to manage a stack of disconnected tools yourself." }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 410,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 405,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: coreServices.map((service, index) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "backdrop-blur-sm rounded-2xl p-6 space-y-4 animate-fade-up relative transition-all hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: `${index * 0.05}s`, border: "2px solid #17a2b8ff", backgroundColor: "#2d465cff" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(service.icon, { className: "w-6 h-6 text-ghl-icon" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 423,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 422,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-semibold text-foreground text-xl", children: service.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 425,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: service.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 426,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-ghl-icon shrink-0 mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Index.tsx",
                    lineNumber: 430,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: feature }, void 0, false, {
                    fileName: "/dev-server/src/pages/Index.tsx",
                    lineNumber: 431,
                    columnNumber: 23
                  }, void 0)
                ] }, featureIndex, true, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 429,
                  columnNumber: 21
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 427,
                  columnNumber: 17
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 417,
              columnNumber: 15
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 415,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", children: [
            "Explore All Services",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 443,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 441,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 440,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 439,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 404,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 401,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Ready to Build a Smarter Growth System?",
            description: "Book a free strategy call to see how our done-for-you, AI-powered growth system can take marketing and follow-up off your plate, so you can focus more on running your business and spending time where it matters most. We also provide a clear dashboard view of performance and continuously recalibrate the strategy when results need improvement.",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategySessionUrl
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 452,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
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
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 460,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(AnimatedStatsSection, { stats: homepageStats, columns: 4 }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 499,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV(HomeCaseStudySection, {}, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 502,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          FAQSection,
          {
            title: "Frequently Asked Questions",
            subtitle: "Answers to common questions local service business owners ask before getting started.",
            faqs: homepageFAQs,
            suppressSchema: true,
            contactCTA: {
              ...baseContactCTA,
              title: "Have more questions?",
              description: "We're here to help. Reach out to us for a personalized consultation.",
              tagline: "Let's grow your business together."
            }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 505,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { items: relatedFaqs }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 519,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          FaqJsonLd,
          {
            items: [...homepageFAQs, ...relatedFaqs],
            pageUrl: "https://growsmallbiz.io/"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 521,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Build Your Growth Engine",
            description: "If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call.",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategySessionUrl
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 527,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(ConsultationFormSection, { utmCampaign: "home-consultation", utmMedium: "home", headingOverride: "Get Your Free Local Growth Strategy Consultation" }, void 0, false, {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 534,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 450,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 539,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Index.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, void 0);
};
export {
  Index as default
};
