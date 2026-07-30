import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-Cu7HOm3D.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { Search, TrendingUp, ChevronDown } from "lucide-react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-Cu9NeDbq.js";
import { useState } from "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { Link } from "react-router-dom";
import { P as PersonCTA } from "./PersonCTA-B97lddt0.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { RelatedQuestionsSection } from "./RelatedQuestionsSection-CMEEQ5WT.js";
import { F as FaqJsonLd } from "./FaqJsonLd-D-0II6By.js";
import { h as heroBg } from "./case-studies-hvac-hero-bg-Co7rID1Y.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const relatedFaqs = [
  {
    question: "What are effective local SEO strategies for HVAC contractors?",
    answer: "Effective local SEO strategies for HVAC contractors include optimizing Google My Business listings, utilizing local keywords, acquiring customer reviews, and ensuring consistent NAP (Name, Address, Phone) information across online directories."
  },
  {
    question: "How can local SEO services benefit plumbing businesses?",
    answer: "Local SEO services can significantly benefit plumbing businesses by improving their online visibility, attracting more local customers, and increasing lead generation through optimized search rankings, targeted keywords, and enhanced Google My Business profiles."
  },
  {
    question: "What insights can be gained from case studies on local SEO for electricians?",
    answer: "Insights gained from case studies on local SEO for electricians include effective strategies for enhancing online visibility, measurable improvements in lead generation, and the impact of targeted keyword optimization on local search rankings."
  },
  {
    question: "What local SEO tactics work best for HVAC?",
    answer: "The best local SEO tactics for HVAC include optimizing Google My Business listings, leveraging local keywords, creating location-specific content, acquiring local backlinks, and encouraging customer reviews to enhance online visibility and attract targeted leads."
  },
  {
    question: "How can plumbers improve their local search rankings?",
    answer: "Plumbers can improve their local search rankings by optimizing their Google My Business profile, using relevant local keywords on their website, gathering positive customer reviews, and ensuring consistent NAP (Name, Address, Phone number) information across online directories."
  },
  {
    question: "What are key metrics for local SEO success?",
    answer: "The key metrics for local SEO success include increased organic traffic, higher keyword rankings, improved click-through rates, and more phone calls or inquiries from potential customers. Tracking these metrics helps assess"
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
const hvacSeoVisibleFaqs = [
  { question: "Can GrowSmallBiz create a similar strategy for my HVAC, plumbing, or electrical business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
  { question: "Can Local SEO really help HVAC, plumbing, and electrical businesses get more calls?", answer: "Yes. Local SEO improves visibility in map results, Google Business Profile, and localized search—helping generate high-intent calls and inquiries." },
  { question: "How long does it take to see results from Local SEO?", answer: "Local SEO builds momentum over time depending on competition, website quality, and local authority. Most businesses start seeing measurable improvements within 3-6 months." },
  { question: "What is included in your Local SEO strategy?", answer: "Keyword research, Google Business Profile optimization, citations, onsite optimization, content support, and ongoing performance improvements." },
  { question: "How much do SEO services cost?", answer: "SEO pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
  { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
  { question: "Can you review my current marketing performance?", answer: "Yes. You can request a website and SEO audit or book a strategy session to identify improvement opportunities." }
];
const summaryCards = [
  {
    title: "HVAC Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+30.23% Clicks",
      "+91.47% Impressions",
      "+58.7% GBP Direction Requests",
      "Strong local finder keyword gains"
    ]
  },
  {
    title: "HVAC & Plumbing Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+1395.2% Phone Calls",
      "+520% GMB Website Actions",
      "Significant improvement for top service keywords",
      "Core plumbing + location map pack rankings"
    ]
  },
  {
    title: "Electrical SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+485.11% New Organic Users",
      "+447.06% Users from Organic Search",
      "+252.69% Sessions from Organic Search",
      "+725% Key Events"
    ]
  }
];
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
  lineNumber: 73,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
  lineNumber: 77,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
  lineNumber: 83,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
    lineNumber: 93,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
  lineNumber: 91,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
  lineNumber: 89,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
  lineNumber: 101,
  columnNumber: 3
}, void 0);
const LocalSEOHvacPlumbingElectrical = () => {
  const [activeTab, setActiveTab] = useState("hvac-sacramento");
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "HVAC SEO Case Study: How GrowSmallBiz Boosts Contractor Visibility" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz's HVAC SEO case study: Boost your contractor visibility with proven local SEO strategies. Get more calls and book jobs. Contact us!" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "local SEO, HVAC marketing, plumbing SEO, electrical contractor SEO, digital marketing for contractors, lead generation strategies, case study, GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "How Local SEO Helped HVAC, Plumbing & Electrical Contractors Own Local Search",
        description: "Explore documented Local SEO case study results for HVAC, plumbing, and electrical businesses.",
        url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Local SEO", url: "/home-service-contractors/marketing-for-hvac-contractors/" },
          { name: "HVAC SEO Case Study", url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 121,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO" },
          title: "How Local SEO Transformed HVAC, Plumbing & Electrical Contractors",
          subtitle: "Explore documented Local SEO case study results for HVAC, plumbing, and electrical businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, calls, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 135,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-6 bg-card/50 border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: [
        "Also see:",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/", className: "text-primary hover:underline font-medium", children: "Google PPC Case Studies for HVAC, Plumbing & Electrical →" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, void 0),
          "Local SEO Case Studies"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Case Studies" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for HVAC, plumbing, and electrical businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: summaryCards.map((card, index) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                    lineNumber: 186,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                    lineNumber: 189,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                    lineNumber: 192,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                  lineNumber: 185,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                    lineNumber: 198,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                    lineNumber: 199,
                    columnNumber: 27
                  }, void 0)
                ] }, mIndex, true, {
                  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                  lineNumber: 197,
                  columnNumber: 25
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                  lineNumber: 195,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                  lineNumber: 194,
                  columnNumber: 19
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 181,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 209,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Consistent Local SEO Methodology Across Trades Campaigns" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(P, { children: "Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation for high-intent service businesses." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
        /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
          /* @__PURE__ */ jsxDEV(
            TabsTrigger,
            {
              value: "hvac-sacramento",
              className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "HVAC — Sacramento"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 235,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            TabsTrigger,
            {
              value: "hvac-plumbing-fairbanks",
              className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "HVAC & Plumbing — Fairbanks"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 241,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            TabsTrigger,
            {
              value: "electrical-oahu",
              className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Electrical — Oahu"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 247,
              columnNumber: 19
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 234,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "hvac-sacramento", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "HVAC — Sacramento" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 258,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 262,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Enhance Keyword Performance",
                  "Increase Engagement and Visibility",
                  "20-40% Lead Generation (combo of both GBP calls + onsite conversions (forms/calls depending on the tracking setup)"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 263,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 271,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Extensive keyword research to find relevant keywords including competitive analysis",
                  "Optimize GMB profile from top to bottom",
                  "Built relevant niche and local citations",
                  "Optimized onsite for location signals",
                  "Post weekly on their GMB profile to increase additional signals",
                  "Evaluate the site's content silo for content strategy",
                  "Create and publish monthly blogs as supplementary content for target keywords"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 272,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(P, { children: "We have used Ahrefs, a trusted third-party tool, to check a website's organic traffic performance. As seen, we have seen an increase in average organic traffic, average organic traffic value, and organic pages in April - July. In August, we saw a decline. This decline can be attributed to the recent August 2023 Core Update. To recover, we encourage updating pages with helpful content to improve the user experience on the website." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 284,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 288,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here is the website's Google Sarch Console metrics. In June - November 2023, total clicks increased by 30.23% and total impressions by 91.47%. The average position also improved from 42.6 to 38.7." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 289,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Business Profile" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 293,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "GBP Profile Interactions" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 295,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "In July - November 2023, Google Business Profile interactions increased by 5.5% as compared to interactions in July - November 2022." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 296,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "GBP Calls" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 300,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "In July - November 2023, Google Business Profile calls increased by 4.8% as compared to calls in July - November 2022." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 301,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "GBP Direction Requests" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 305,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "In July - November 2023, Google Business Profile direction requests increased by 58.7% as compared to direction requests in July - November 2022." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 306,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 310,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Tracked Keyword" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 312,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are the improvements to the keywords we track. As seen, we had the following keyword position increase:" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 313,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "ac maintenance services increased by 21 positions in the local finder",
                  "ac installation service increased by 18 positions in the local finder",
                  "ac maintenance near me increased by 18 positions in local finder",
                  "ac service maintenance increased by 12 positions in local finder",
                  "ac repair services sacramento increased by 1 positions in local finder"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 316,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "LSI Keyword" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 326,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Additionally, here are the LSI keywords the website gained in addition to the ones we track. LSI (latent semantic indexing) keywords are words or phrases that are conceptually related to a target keyword." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 327,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/hvac-sacramento-case-study.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 331,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 334,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 333,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 332,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 261,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 257,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 256,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "hvac-plumbing-fairbanks", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "HVAC & Plumbing — Fairbanks" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 346,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Synopsis" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 350,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "This HVAC & Plumbing company was in dire need of leads when they came to us in May of 2021. In this industry, most leads are coming from GMB phone calls or Google Ads. We were brought on to improve their GMB visibility and lead generation." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 351,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goal" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 355,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Qualified Leads & Conversions" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 356,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 358,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Extensive keyword research to find relevant keywords including competitive analysis",
                  "Optimize GMB profile from top to bottom",
                  "Built relevant niche and local citations",
                  "Optimized onsite for location signals",
                  "Posted weekly on their GMB profile to increase additional signals"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 359,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Outcome" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 369,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Significant improvement for top service keywords",
                  "Core plumbing + location map pack rankings",
                  "1395.2% increase in phone calls",
                  "520% increase in GMB actions to the website"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 370,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/hvac-plumbing-fairbanks-case-study.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 379,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 382,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 381,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 380,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 349,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 345,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 344,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "electrical-oahu", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Electrical — Oahu" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 394,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goal" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 398,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Enhance Keyword Performance",
                  "Increase Engagement and Visibility",
                  "20-40% increase in conversions/goal completions"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 399,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 407,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Extensive keyword research to find relevant keywords including competitive analysis",
                  "Optimize GMB profile from top to bottom",
                  "Built relevant niche and local citations",
                  "Optimized onsite for location signals",
                  "Post weekly on their GMB profile to increase additional signals",
                  "Evaluate the site's content silo for content strategy",
                  "Create and publish monthly blogs as supplementary content for target keywords"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 408,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 420,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "User Acquisition" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 422,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: December 2023–July 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 423,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are the user acquisition metrics for the client's website. As seen, organic search is the channel that brings the highest number of new users to the website. Out of 711 new users, organic search contributed 45.29% of the total new users. 44.02% of new users' engaged sessions also came from organic search." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 424,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "COMPARISON" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 428,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: December 2023–March 2024 vs. April 2024–July 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 429,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "If we compare how our strategy improved, we can see an improvement in user acquisition metrics. Below is a comparison of the first half of the campaign vs. the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, new users from organic search increased by 485.11%, and new users' engaged sessions from organic search increased by 218.97%." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 430,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Traffic Acquisition" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 434,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: December 2023–July 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 435,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are the traffic acquisition metrics for the client's website. Similar to the user acquisition metrics, organic search is the channel that brings the highest number of users and sessions to the website. Out of 711 users and 901 sessions, organic search contributed 46.13% of the total users and 46.84% of the total sessions. Additionally, organic search also contributed to 47.10% of engaged sessions. 43.09% of the total events and 53.62% of the total key events also came from organic search." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 436,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "COMPARISON" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 440,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: December 2023–March 2024 vs. April 2024–July 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 441,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "If we compare how our strategy improved, we can see an improvement in traffic acquisition metrics. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, users from organic search increased by 447.06%, sessions from organic search increased by 252.69%, and engaged sessions from organic search increased by 226.23%. Additionally, event counts improved by 851.94% and key events improved by 725%." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 442,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 446,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Clicks, Impressions, CTR and Position" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 448,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: December 2023–July 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 449,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are the Google Search Console metrics for the client's website. In December 2023–July 2024, the website recorded 240 total clicks, 4.86K total impressions, 4.9% average click-through rates and 23.1 average positions." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 450,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "COMPARISON" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 454,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: December 2023–March 2024 vs. April 2024–July 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 455,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "If we compare how our strategy improved, we can see an improvement in the metrics measured in the Google Search Console. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, total clicks on the website increased by 63.73% from 91 to 149. Impressions of the website also increased by 185.71%, from 1.26K to 3.6K total impressions." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 456,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Keywords" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 460,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here is the average Google position from December 2023–July 2024. We have seen an increase in March." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 461,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Organic Desktop Results (Tracked Keywords)" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 465,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are some recent improvements to the keywords we track. For organic desktop, we saw an increase in the following keywords:" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 466,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "fan installation oahu increased by 5 positions on organic desktop",
                  "house fan installation oahu increased by 4 positions on organic desktop",
                  "light fixture installer oahu increased by 1 position on organic desktop",
                  "electrical service upgrades oahu increased by 1 position on organic desktop",
                  "electrical service upgrade oahu increased by 1 position on organic desktop",
                  "ceiling fan installation oahu increased by 1 position on organic desktop"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 469,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Organic Mobile Results (Tracked Keywords)" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 480,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are some recent improvements to the keywords we track. For organic mobile, we saw an increase in the following keywords:" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 481,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "fan installation oahu increased by 6 positions on organic mobile",
                  "house fan installation oahu increased by 3 positions on organic mobile",
                  "electrical service upgrades oahu increased by 2 positions on organic mobile",
                  "light fixture installer oahu increased by 1 position on organic mobile",
                  "light fixture installation oahu increased by 1 position on organic mobile",
                  "electrical panel replacement oahu increased by 1 position on organic mobile",
                  "electrical service upgrade oahu increased by 1 position on organic mobile",
                  "ceiling fan installation oahu increased by 1 position on organic mobile"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
                lineNumber: 484,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Business Profile" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 497,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Search and Map Views" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 499,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Date Range: March 2024–August 2024" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 500,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are the metrics for the client's Google Business Profile listing. In March 2024–August 2024, the listing had 1.20K total views. Out of these total views, 444 came from desktop search view results, 641 came from mobile search view results, 104 came from desktop map view results, and 14K came from mobile map view results." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 501,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Additionally, the listing had 158 total business profile interactions. There were 124 total website clicks and 34 calls." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 504,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/electrical-oahu-case-study.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 508,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 511,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 510,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
              lineNumber: 509,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 397,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 393,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 392,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 233,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 232,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO strategy for HVAC, plumbing, and electrical businesses.",
          faqs: hvacSeoVisibleFaqs,
          suppressSchema: true,
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your HVAC, plumbing, or electrical business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 525,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { title: "Additional FAQs", items: relatedFaqs }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 538,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FaqJsonLd,
        {
          items: [...hvacSeoVisibleFaqs, ...relatedFaqs],
          pageUrl: "https://growsmallbiz.io/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 540,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What These Case Studies Show" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 549,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Across HVAC, plumbing, and electrical campaigns, one pattern remains consistent — businesses that invest in structured local visibility tend to see measurable improvements in calls, engagement, and lead flow over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 553,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for services." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
            lineNumber: 556,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 552,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 561,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 548,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 547,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 546,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        PersonCTA,
        {
          title: "Let's Build Your Growth Engine",
          description: "If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategySessionUrl
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 569,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 577,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
          lineNumber: 578,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 576,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
        lineNumber: 581,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
      lineNumber: 583,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/local-seo-service/HvacPlumbingElectrical.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, void 0);
};
export {
  LocalSEOHvacPlumbingElectrical as default
};
