import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { G as GoogleColoredText } from "./GoogleColoredText-kBof5TmB.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-Cu7HOm3D.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { Search, MousePointerClick, TrendingUp, ChevronDown } from "lucide-react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-Cu9NeDbq.js";
import { useState, useRef, useEffect } from "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { P as PersonCTA } from "./PersonCTA-B97lddt0.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { RelatedQuestionsSection } from "./RelatedQuestionsSection-CMEEQ5WT.js";
import { F as FaqJsonLd } from "./FaqJsonLd-D-0II6By.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const relatedFaqs = [
  {
    question: "When does roofing season start?",
    answer: "The roofing season typically starts in late spring and lasts through early fall, depending on the climate. This timeframe allows for optimal weather conditions, ensuring quality installations and repairs for roofing contractors."
  },
  {
    question: "When does roofing season end?",
    answer: "The roofing season typically ends in late fall, around November, depending on the climate and weather conditions. This is when temperatures drop and precipitation increases, making roofing projects less feasible."
  },
  {
    question: "What factors influence roofing season timing?",
    answer: "The factors that influence roofing season timing include weather conditions, temperature fluctuations, and regional climate patterns. Additionally, local demand for roofing services and material availability can also impact when roofing projects are scheduled."
  },
  {
    question: "How does weather affect roofing season?",
    answer: "The impact of weather on roofing season is significant. Adverse conditions such as rain, snow, or extreme temperatures can delay projects, while favorable weather promotes timely installations and repairs, ultimately influencing contractor schedules and client satisfaction."
  },
  {
    question: "What are peak months for roofing work?",
    answer: "The peak months for roofing work typically occur during the warmer seasons, specifically from late spring to early fall, with May through September being the most active months for roofing projects due to favorable weather conditions."
  },
  {
    question: "Are there regional differences in roofing seasons?",
    answer: "Regional differences in roofing seasons exist due to varying climates and weather patterns. For example, warmer regions may have year-round roofing"
  },
  {
    question: "How to prepare for roofing season?",
    answer: "Preparing for roofing season involves ensuring your team is trained, inventory is stocked, and marketing strategies are optimized to attract local customers. Additionally, assess your equipment and establish a strong online presence to generate leads effectively."
  },
  {
    question: "What materials are best for roofing season?",
    answer: "The best materials for roofing season include asphalt shingles, metal roofing, and slate. These options offer durability, weather resistance, and aesthetic appeal, making them ideal for various climates and roofing needs."
  },
  {
    question: "How to schedule roofing projects effectively?",
    answer: "Scheduling roofing projects effectively involves creating a detailed timeline that accounts for weather conditions, material availability, and labor resources. Prioritize communication with your team and clients to ensure smooth project execution and timely completion."
  },
  {
    question: "What are common roofing issues during season?",
    answer: "Common roofing issues during the season include leaks from heavy rain, ice damming in winter, and damage from high winds or hail. Regular inspections can help identify and address these problems before they escalate."
  },
  {
    question: "How to market roofing services in season?",
    answer: "Marketing roofing services in season involves leveraging targeted local SEO strategies, optimizing Google Business Profiles, and running seasonal PPC campaigns to attract homeowners actively seeking roofing solutions. Engaging content and timely promotions can also enhance visibility and lead generation."
  },
  {
    question: "What permits are needed for roofing season?",
    answer: "The permits needed for roofing season typically include a building permit, which ensures compliance with local codes, and possibly a roofing permit specific to your area. Always check with local authorities for specific requirements."
  },
  {
    question: "How to find roofing contractors during season?",
    answer: "Finding roofing contractors during the season can be achieved by searching online directories, checking local listings, and reading customer reviews. Additionally, leveraging social media and asking for referrals from friends or family can help identify reputable contractors."
  },
  {
    question: "What safety measures are essential in roofing season?",
    answer: "Essential safety measures during roofing season include using proper personal protective equipment (PPE), ensuring ladders are stable, securing tools and materials, and conducting regular safety training for all workers to prevent accidents and injuries."
  },
  {
    question: "How to estimate roofing costs for season?",
    answer: "Estimating roofing costs for the season involves assessing material prices, labor rates, and project scope. Consider seasonal demand fluctuations and potential weather impacts to ensure an accurate budget for your roofing project."
  },
  {
    question: "What trends affect roofing season demand?",
    answer: "Trends affecting roofing season demand include weather patterns, economic conditions, and increased awareness of home maintenance. Seasonal spikes often occur in spring and summer, driven by homeowners' desire to address roofing issues before adverse weather conditions arise."
  },
  {
    question: "How to handle roofing emergencies in season?",
    answer: "Handling roofing emergencies in season requires prompt action and a reliable plan. First, assess the damage and secure the area to prevent further issues, then contact a professional roofing contractor for immediate repairs to"
  },
  {
    question: "What are the benefits of off-season roofing?",
    answer: "The benefits of off-season roofing include lower labor costs, reduced material prices, and quicker project timelines due to decreased demand. Additionally, scheduling during off-peak times can lead to better availability of contractors and enhanced attention to detail."
  },
  {
    question: "How to maintain roofs during roofing season?",
    answer: "Maintaining roofs during roofing season involves regular inspections for damage, clearing debris, ensuring proper drainage, and checking for leaks. Promptly addressing any issues can extend the roof's lifespan and prevent costly repairs."
  },
  {
    question: "What tools are essential for roofing season?",
    answer: "The essential tools for roofing season include a sturdy ladder, roofing nail gun, safety harness, roofing shingles, and a reliable measuring tape. These tools ensure efficiency, safety, and precision in roofing projects."
  },
  {
    question: "How to choose roofing styles for season?",
    answer: "Choosing roofing styles for the season involves considering climate, aesthetics, and durability. Opt for materials that withstand seasonal weather changes while complementing your home's design for optimal performance and visual appeal."
  },
  {
    question: "What are the best practices for roofing maintenance?",
    answer: "The best practices for roofing maintenance include regular inspections, clearing debris, checking for leaks, ensuring proper drainage, and maintaining gutters. These steps help prolong the roof's lifespan and prevent costly repairs."
  },
  {
    question: "How to educate clients about roofing season?",
    answer: "Educating clients about roofing season involves informing them about the best times for roof maintenance and installation, emphasizing seasonal weather impacts, and providing tips on scheduling services to maximize efficiency and cost-effectiveness."
  },
  {
    question: "What are the signs of roofing season readiness?",
    answer: "The signs of roofing season readiness include the arrival of warmer weather, longer daylight hours, and the absence of snow or ice. Additionally, increased inquiries from homeowners about roof inspections and repairs indicate that the season is approaching."
  },
  {
    question: "How to optimize roofing operations during season?",
    answer: "Optimizing roofing operations during the season involves streamlining scheduling, enhancing communication with clients, and utilizing technology for project management. Focus on efficient resource allocation to maximize productivity and ensure timely project completion."
  },
  {
    question: "What are the challenges of roofing in winter?",
    answer: "The challenges of roofing in winter include icy conditions, which can make surfaces slippery and dangerous, as well as the risk of frozen materials that hinder proper installation. Additionally, cold temperatures can affect adhesives and sealants, leading to potential long-term issues."
  },
  {
    question: "How to ensure quality in roofing season?",
    answer: "Ensuring quality during roofing season involves implementing thorough inspections, using high-quality materials, and maintaining clear communication with your team and clients. Regular training and adherence to safety standards also play a crucial role in delivering exceptional results."
  },
  {
    question: "What innovations are changing roofing season practices?",
    answer: "Innovations changing roofing season practices include advanced materials like reflective roofing and solar shingles, as well as technology such as drones for inspections and AI-driven project management tools,"
  }
];
const heroBg = "/assets/case-studies-roofers-hero-bg-BueL5_i8.webp";
const roofersVisibleFaqs = [
  { question: "Can GrowSmallBiz create a similar strategy for my roofing business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO and paid ads strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
  { question: "Can Local SEO really help roofing businesses get more calls and estimate requests?", answer: "Yes. Roofing is a high-intent search category. When your company appears more often in Google Business Profile results, localized organic search results, and service-area searches, you improve the chance of earning calls, form submissions, and estimate requests from people already looking for roofing help." },
  { question: "Can PPC help roofing businesses generate leads faster?", answer: "Yes. Google Ads can put a roofing company in front of prospects quickly, especially for urgent searches tied to roof repair, roof replacement, storm damage, leaks, and commercial roofing needs. PPC often works best when paired with strong landing pages and conversion tracking." },
  { question: "How long does it take to see results from Local SEO or PPC?", answer: "PPC can begin generating data and leads quickly once campaigns go live, while Local SEO typically builds over time. The exact timeline depends on market competition, starting visibility, budget, website quality, service-area coverage, and conversion readiness." },
  { question: "What is included in your Local SEO strategy for roofers?", answer: "The strategy may include Google Business Profile optimization, local visibility improvements, onsite optimization, localized content, service page expansion, citation support, keyword tracking, and conversion-focused recommendations tied to how roofing buyers actually search." },
  { question: "How much do SEO and PPC services cost?", answer: "SEO and PPC pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
  { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
  { question: "Can you review my current marketing performance?", answer: "Yes. GrowSmallBiz can review your current Local SEO visibility, Google Ads performance, website conversion path, and competitive positioning to identify where lead generation is being lost and where the biggest opportunities exist." }
];
const seoSummaryCards = [
  {
    title: "Roofing Restoration Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+26% Organic Conversions",
      "+76% GBP Searches",
      "+127% GBP Views",
      "90+ Spot Keyword Gains"
    ]
  },
  {
    title: "Roofing SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+16.45% New Organic Users",
      "+15.38% Users from Organic Search",
      "+200% GBP Messages",
      "+34 Flat Roofing Gain"
    ]
  },
  {
    title: "Roofing Content SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "Roof Replacements Reached #1",
      "Atlanta Roofing +46",
      "Roof Repair Services +41",
      "Roof Installation +34"
    ]
  }
];
const ppcSummaryCards = [
  {
    title: "Roofing Google PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+93.3% Conversions",
      "+123.4% Conversion Rate",
      "-48.9% Cost / Conversion",
      "+17.7% Clicks"
    ],
    supportLine: "Improved conversion efficiency and stronger year-over-year paid search performance"
  },
  {
    title: "Multi-City Roofing Google PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+62.2% Conversions",
      "+45.7% Conversion Rate",
      "-36.1% CPA",
      "+11.4% Clicks"
    ],
    supportLine: "Improved lead volume and cost efficiency across multiple roofing markets"
  }
];
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
  lineNumber: 102,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
  lineNumber: 106,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
  lineNumber: 112,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
    lineNumber: 121,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
    lineNumber: 122,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
  lineNumber: 120,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
  lineNumber: 118,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src, title }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: title || "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
  lineNumber: 130,
  columnNumber: 3
}, void 0);
const Roofers = () => {
  const [activeTab, setActiveTab] = useState("roofing-florida");
  const [activePpcTab, setActivePpcTab] = useState("ppc-roofing-1");
  const [activeSection, setActiveSection] = useState("local-seo");
  const navRef = useRef(null);
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  useEffect(() => {
    const handleScroll = () => {
      const seoSection = document.getElementById("local-seo");
      const ppcSection = document.getElementById("google-ppc");
      if (seoSection && ppcSection) {
        const ppcTop = ppcSection.getBoundingClientRect().top;
        setActiveSection(ppcTop <= 120 ? "google-ppc" : "local-seo");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id) => {
    var _a;
    const el = document.getElementById(id);
    if (el) {
      const offset = ((_a = navRef.current) == null ? void 0 : _a.offsetHeight) || 56;
      const y = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Roofing Marketing Case Study: Real Contractor Results | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz helps roofing contractors get real AI SEO and AI optimized PPC results. See our case studies for real growth. Call us today!" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "roofing SEO, PPC for roofers, digital marketing for roofing contractors, local SEO strategies, lead generation for roofing businesses, AI-powered marketing solutions, case studies for roofers, GrowSmallBiz marketing services" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "Real Results for Roofing Contractors — Not Projections",
        description: "Explore documented case study results for roofing businesses across Local SEO and PPC campaigns.",
        url: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Roofers", url: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 179,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + PPC" },
          title: "Real Results for Roofing Contractors — Not Projections",
          subtitle: "Explore documented case study results for roofing businesses across Local SEO and PPC campaigns. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 192,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          ref: navRef,
          className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg",
          children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 py-3", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => scrollTo("local-seo"),
                className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "local-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                  }, void 0),
                  "Local SEO Results"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 209,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => scrollTo("google-ppc"),
                className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "google-ppc" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(MousePointerClick, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 228,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 229,
                    columnNumber: 17
                  }, void 0),
                  " PPC Results"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 220,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 207,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 203,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, void 0),
            "Local SEO Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for roofing businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 239,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 258,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: seoSummaryCards.map((card, index) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 267,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 270,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 273,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 266,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 279,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 280,
                      columnNumber: 27
                    }, void 0)
                  ] }, mIndex, true, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 278,
                    columnNumber: 25
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 276,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 275,
                    columnNumber: 19
                  }, void 0)
                ]
              },
              index,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 262,
                columnNumber: 17
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 260,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 291,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 292,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 290,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 259,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 257,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Consistent Local SEO Methodology Across Roofing Campaigns" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 301,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Across these campaigns, the work consistently included on-page optimization, localized content creation, service page expansion, homepage optimization, local visibility improvements, and keyword growth efforts designed to improve rankings, engagement, and lead generation for high-intent roofing searches." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 304,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 300,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 298,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "roofing-florida",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Roofing Restoration — Florida"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 317,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "roofing-bellevue",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Roofing SEO Growth — Greater Seattle"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 323,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "roofing-atlanta",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Roofing Content SEO — Atlanta"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 329,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 316,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "roofing-florida", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Roofing Restoration — Florida" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 340,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 344,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Increase organic traffic and leads",
                    "Improve visibility across service areas",
                    "Generate more profitable commercial roofing opportunities"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 345,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 353,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Optimize on-page elements",
                    "Create optimized localized content",
                    "Strengthen local presence in target service areas",
                    "Improve visibility for high-intent roofing and restoration searches"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 354,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Performance Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 363,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This roofing, renovation, and hail restoration company came in with the goal of increasing organic traffic and lead flow. Over a 6 month period, the campaign improved organic conversions by 26% while also producing significant gains in Google Business Profile visibility." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 364,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Organic conversions increased by 26% over 6 months",
                    "Google Business Profile searches increased by 76%",
                    "Google Business Profile views increased by 127%",
                    "Many conversions were tied to larger commercial roofing projects, which aligned with the client's growth goals"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 367,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 376,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "The campaign also produced strong keyword movement, including major jumps for high-intent roofing and restoration searches." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 377,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "High-volume roofing keywords moved up by 90+ positions",
                    '"roofing installation" showed major ranking gains',
                    '"roof tarping" showed major ranking gains',
                    '"hail damage roof" showed major ranking gains',
                    '"siding installation" also improved significantly'
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 380,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-roofing-restoration-case-study.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 390,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 393,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 392,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 391,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 343,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 339,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 338,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "roofing-bellevue", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Roofing SEO Growth — Greater Seattle" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 405,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 409,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Improve search visibility through organic methods",
                    "Increase qualified organic traffic and engagement",
                    "Improve Google Business Profile activity and local keyword movement"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 410,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 418,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Improve organic visibility across roofing service terms",
                    "Support Google Business Profile performance",
                    "Track keyword movement across multiple target locations",
                    "Improve performance for both commercial and residential roofing terms"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 419,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 428,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "The client started the SEO campaign in August 2023. Comparing August–November 2023 against April–July 2023, the campaign showed positive movement in both user acquisition and traffic acquisition from organic search." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 429,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "New users from organic search increased by 16.45%",
                    "Engaged sessions from organic search increased by 6.54%",
                    "Users from organic search increased by 15.38%",
                    "Sessions increased by 7.44%",
                    "Engaged sessions increased by 9.57%",
                    "Events increased by 11.06%"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 432,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 443,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Search Console data also showed gradual improvement in visibility and ranking position." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 444,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Clicks improved by 2.73%",
                    "Average position improved from 48.3 to 44.2"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 447,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Business Profile" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 454,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "The Google Business Profile showed mixed but useful signals, including stronger direction requests and a sharp rise in messages." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 455,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Direction requests increased by 5.4%",
                    "Messages increased by 200%",
                    "Calls decreased by 1.1%, showing that local conversion performance still had room to improve"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 458,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 466,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Tracked keyword improvements were recorded across Bellevue, Kent, and Seattle." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 467,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    'Bellevue: "flat roofing" increased by 30 positions',
                    'Bellevue: "commercial roofing" increased by 26 positions',
                    'Kent: "flat roofing" increased by 34 positions',
                    'Kent: "commercial roofing" increased by 12 positions',
                    'Seattle: "commercial roofing" increased by 26 positions',
                    'Seattle: "commercial roofing contractor" increased by 21 positions',
                    'Seattle: "roofing company" increased by 16 positions',
                    'Seattle: "residential roofing company" increased by 6 positions'
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 470,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-roofing-case-study-3.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 483,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 486,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 485,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 484,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 408,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 404,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 403,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "roofing-atlanta", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Roofing Content SEO — Atlanta" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 498,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 502,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Increase traffic through content and service page expansion",
                    "Improve homepage search performance",
                    "Generate new keyword rankings for high-intent roofing terms"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 503,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 511,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Develop content on the website",
                    "Build out service pages",
                    "Optimize the homepage for search visibility",
                    "Strengthen topic relevance around roofing, repair, and replacement queries"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 512,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Results" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 521,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This campaign focused on content development and service page expansion for a roofing company centered on professional roofing, roof replacement, inspection, and design. The work contributed to stronger traffic trends and new keyword rankings." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 522,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 526,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    '"roof replacements" reached rank #1',
                    '"atlanta roofing" improved by 46 positions',
                    '"roof repair services" improved by 41 positions',
                    '"roof repair services near me" improved by 38 positions',
                    '"roof installation" improved by 34 positions',
                    '"roofing companies in atlanta" improved by 25 positions'
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 527,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-roofing-case-study-2.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 538,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 541,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 540,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 539,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 501,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 497,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 496,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 315,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 314,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 313,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 312,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 236,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "google-ppc", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(MousePointerClick, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 562,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 563,
              columnNumber: 19
            }, void 0),
            " PPC Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 561,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Google PPC Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 565,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights paid search campaign performance for roofing businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 568,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 560,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 559,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 558,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 577,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: ppcSummaryCards.map((card, index) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 586,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title.includes("Google") ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      card.title.split("Google")[0],
                      /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                        lineNumber: 591,
                        columnNumber: 60
                      }, void 0),
                      " ",
                      card.title.split("Google")[1].trimStart()
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 591,
                      columnNumber: 27
                    }, void 0) : card.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 589,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 594,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 585,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                        lineNumber: 600,
                        columnNumber: 29
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                        lineNumber: 601,
                        columnNumber: 29
                      }, void 0)
                    ] }, mIndex, true, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 599,
                      columnNumber: 27
                    }, void 0)) }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 597,
                      columnNumber: 23
                    }, void 0),
                    card.supportLine && /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-4 pt-3 border-t border-border", children: card.supportLine }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                      lineNumber: 606,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 596,
                    columnNumber: 21
                  }, void 0)
                ]
              },
              index,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 581,
                columnNumber: 19
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 579,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 617,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 618,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 616,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 578,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 576,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activePpcTab, onValueChange: setActivePpcTab, className: "w-full", children: [
          /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "ppc-roofing-1",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: [
                  "Roofing ",
                  /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 633,
                    columnNumber: 31
                  }, void 0),
                  " PPC — Efficiency Gains"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 629,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "ppc-roofing-2",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: [
                  "Multi-City Roofing ",
                  /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                    lineNumber: 639,
                    columnNumber: 42
                  }, void 0),
                  " PPC — Florida"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 635,
                columnNumber: 21
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 628,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "ppc-roofing-1", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
              "Roofing ",
              /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 647,
                columnNumber: 33
              }, void 0),
              " PPC Case Study — Monthly + Year-over-Year Efficiency Gains"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 646,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Synopsis" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 650,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This Google Ads case study focused on improving conversion efficiency for a roofing campaign. The reporting compared September 2023 against August 2023, while also reviewing June–September 2023 against the same period in the previous year." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 651,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Challenges" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 655,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Increase conversions without increasing wasted spend",
                    "Improve conversion rate",
                    "Reduce cost per conversion",
                    "Show stronger year-over-year paid search performance"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 656,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Objective" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 665,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Improve lead generation efficiency from Google Ads while creating measurable gains in conversion volume and conversion rate." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 666,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Strategy" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 670,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Manage and optimize Google Ads campaign performance",
                    "Review month-over-month trend data",
                    "Review year-over-year trend data",
                    "Focus optimization on conversion efficiency"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 671,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Results" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 680,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "September vs August 2023: total cost decreased by 1.3%",
                    "September vs August 2023: total conversions increased by 93.3%",
                    "September vs August 2023: cost per conversion decreased by 48.9%",
                    "September vs August 2023: conversion rate increased by 123.4%",
                    "June–September 2023 vs same period last year: clicks increased by 17.7%",
                    "June–September 2023 vs same period last year: conversions increased by 61.7%",
                    "June–September 2023 vs same period last year: conversion rate increased by 37.3%",
                    "June–September 2023 vs same period last year: cost per conversion decreased by 1.5%"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 681,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Conclusion" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 694,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This case study shows how disciplined Google Ads optimization can improve roofing lead generation efficiency, not just volume. The strongest takeaway here is the improvement in conversion rate and cost per conversion while maintaining meaningful paid search activity." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 695,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ppc-roofing-case-study-2.pdf", title: "View Full PPC Case Study Report" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 699,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 702,
                columnNumber: 29
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 701,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 700,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 649,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 645,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 644,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "ppc-roofing-2", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
              "Multi-City Roofing ",
              /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 715,
                columnNumber: 44
              }, void 0),
              " PPC Case Study — Florida Markets"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 714,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Synopsis" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 718,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This roofing Google Ads campaign launched multiple campaign types and market-specific structures to generate leads across several Florida service areas. The account included search campaigns, a smart campaign, and a performance max campaign." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 719,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Challenges" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 723,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Generate leads across multiple service areas",
                    "Improve conversion efficiency across different campaign structures",
                    "Lower CPA while increasing conversions",
                    "Maintain performance across both search and broader campaign formats"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 724,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Objective" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 733,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Drive more roofing leads at stronger conversion rates and lower acquisition cost across multiple targeted markets." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 734,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Strategy" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 738,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Launch four search campaigns",
                    "Run one smart campaign",
                    "Run one performance max campaign",
                    "Use geo-targeted structures including West Palm Beach, Martin / St Lucie, and Lakeland",
                    "Optimize campaign efficiency over time using comparative monthly reporting"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 739,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Results" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 749,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "June 2024 vs May 2024: clicks increased by 11.4%",
                    "June 2024 vs May 2024: conversions increased by 62.2%",
                    "June 2024 vs May 2024: conversion rate increased by 45.7%",
                    "June 2024 vs May 2024: CPA reduced by 36.1%",
                    "May 2024 vs previous month: clicks increased by 12.5%",
                    "May 2024 vs previous month: conversions increased by 36.1%",
                    "May 2024 vs previous month: conversion rate increased by 21.0%",
                    "May 2024 vs previous month: CPA reduced by 17.7%",
                    "All-time performance included 152 conversions in West Palm Beach and 258 conversions in Martin / St Lucie",
                    "Campaign overview showed 2.77K clicks, 445 conversions, $92.76 cost per conversion, and a 16.04% conversion rate"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                  lineNumber: 750,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Conclusion" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 765,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This multi-market roofing PPC campaign demonstrates how a structured Google Ads setup can improve conversion volume and efficiency over time. The reporting also shows the value of location-specific campaign organization when a roofing business is trying to scale lead generation across multiple cities." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 766,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ppc-roofing-case-study.pdf", title: "View Full PPC Case Study Report" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 770,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 773,
                columnNumber: 29
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 772,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
                lineNumber: 771,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
              lineNumber: 717,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 713,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 712,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 627,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 626,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 625,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 624,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 556,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO and PPC strategy for roofing businesses.",
          faqs: roofersVisibleFaqs,
          suppressSchema: true,
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your roofing business depends on calls, form fills, estimate requests, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO or PPC improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 788,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { title: "Additional FAQs", items: relatedFaqs }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 801,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FaqJsonLd,
        {
          items: [...roofersVisibleFaqs, ...relatedFaqs],
          pageUrl: "https://growsmallbiz.io/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 803,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What These Case Studies Show" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 812,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Across roofing campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, rankings, and lead flow over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 816,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "These case studies reflect different markets, service mixes, and competitive environments, but the underlying pattern is the same: stronger visibility, better keyword positioning, and more efficient lead generation can compound into meaningful business growth." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 819,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Whether through Local SEO, PPC, or a combination of both, the goal is not just visibility — it is connecting that visibility to real business outcomes." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
            lineNumber: 822,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 815,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your roofing business, the next step is a focused review of your current visibility, competition, and conversion path." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 827,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 811,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 810,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 809,
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
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 835,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 843,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
          lineNumber: 844,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 842,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
        lineNumber: 848,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
      lineNumber: 850,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/Roofers.tsx",
    lineNumber: 172,
    columnNumber: 5
  }, void 0);
};
export {
  Roofers as default
};
