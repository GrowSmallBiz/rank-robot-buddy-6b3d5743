import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { G as GoogleColoredText } from "./GoogleColoredText-kBof5TmB.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-Cu7HOm3D.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { MousePointerClick, TrendingUp, ChevronDown } from "lucide-react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { P as PersonCTA } from "./PersonCTA-B97lddt0.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import "react";
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
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const relatedFaqs = [
  {
    question: "How to do Google Ads for HVAC business 2025?",
    answer: "The approach to Google Ads for HVAC businesses in 2025 involves targeting local keywords, optimizing ad copy for conversions, utilizing responsive search ads, and leveraging audience targeting to reach homeowners actively seeking HVAC services."
  },
  {
    question: "What are effective Google Ads strategies for HVAC?",
    answer: "Effective Google Ads strategies for HVAC include targeting local keywords, utilizing ad extensions, optimizing landing pages for conversions, and regularly analyzing campaign performance to refine tactics. These approaches help maximize visibility and lead generation in a competitive market."
  },
  {
    question: "How to optimize Google Ads for HVAC services?",
    answer: "Optimizing Google Ads for HVAC services involves targeting specific keywords related to HVAC solutions, utilizing location-based targeting, creating compelling ad copy, and regularly analyzing performance metrics to adjust bids and improve conversion rates."
  },
  {
    question: "What budget is needed for HVAC Google Ads?",
    answer: "The budget needed for HVAC Google Ads varies based on factors like competition and target audience, but typically ranges from $1,000 to $5,000 per month to achieve effective lead generation and optimal campaign"
  },
  {
    question: "How to target local customers with Google Ads?",
    answer: "Targeting local customers with Google Ads involves using location targeting features to reach users in specific geographic areas. By setting up location extensions and targeting keywords relevant to your local market, you can effectively connect with potential customers nearby."
  },
  {
    question: "What keywords should HVAC companies focus on?",
    answer: 'HVAC companies should focus on local keywords, such as "HVAC services near me," "air conditioning repair [city name]," and "emergency HVAC [city name]," to effectively attract nearby customers and enhance lead generation.'
  },
  {
    question: "How to measure Google Ads success for HVAC?",
    answer: "Measuring Google Ads success for HVAC involves tracking key metrics such as conversion rates, click-through rates (CTR), and return on ad spend (ROAS). Analyzing these metrics helps determine the effectiveness of your campaigns in generating leads and driving business growth."
  },
  {
    question: "What common mistakes to avoid in HVAC ads?",
    answer: "Common mistakes to avoid in HVAC ads include targeting the wrong audience, neglecting local SEO, using vague messaging, and failing to track performance metrics. These errors can hinder lead generation and reduce the effectiveness of your advertising efforts."
  },
  {
    question: "How to create compelling ads for HVAC services?",
    answer: "Creating compelling ads for HVAC services involves highlighting unique selling points, using clear and persuasive language, incorporating strong calls-to-action, and targeting specific local demographics to attract potential customers effectively."
  },
  {
    question: "What are the benefits of Google Ads for HVAC?",
    answer: "The benefits of Google Ads for HVAC are significant, including targeted lead generation, increased visibility in local searches, and measurable results that help contractors optimize their marketing strategies for maximum ROI."
  },
  {
    question: "How to improve click-through rates for HVAC ads?",
    answer: "Improving click-through rates for HVAC ads involves optimizing ad copy with clear, compelling calls-to-action, utilizing relevant keywords, and ensuring that landing pages are user-friendly and aligned with the ad content."
  },
  {
    question: "What ad formats work best for HVAC companies?",
    answer: "The ad formats that work best for HVAC companies include search ads, which target users actively seeking HVAC services, and display ads, which help to build brand awareness. These formats effectively generate leads and drive conversions."
  },
  {
    question: "How to use Google Ads for lead generation?",
    answer: "Using Google Ads for lead generation involves creating targeted ad campaigns that attract potential customers searching for your services. Focus on relevant keywords, compelling ad copy, and optimized landing pages to drive conversions effectively."
  },
  {
    question: "What is the role of landing pages in HVAC ads?",
    answer: "The role of landing pages in HVAC ads is crucial as they serve as dedicated destinations for potential customers, optimizing conversions by providing relevant information and clear calls-to-action tailored to specific ad campaigns."
  },
  {
    question: "How to analyze competitors Google Ads in HVAC?",
    answer: "Analyzing competitors' Google Ads in HVAC involves researching their ad copy, keywords, and landing pages using tools like SEMrush or SpyFu. This helps identify successful strategies and areas for improvement in your own campaigns."
  },
  {
    question: "What metrics to track for HVAC Google Ads?",
    answer: "The metrics to track for HVAC Google Ads include click-through rate (CTR), conversion rate, cost per conversion, and return on ad spend (ROAS). Monitoring these metrics helps optimize campaigns and maximize lead generation."
  },
  {
    question: "How to adjust bids for HVAC Google Ads?",
    answer: "Adjusting bids for HVAC Google Ads involves analyzing performance data and adjusting bids based on factors like location, time of day, and device type. Use automated bidding strategies to optimize for conversions and maximize your ad spend effectively."
  },
  {
    question: "What seasonal trends affect HVAC advertising?",
    answer: "Seasonal trends significantly impact HVAC advertising. Demand typically peaks during extreme weather months, such as summer and winter, prompting targeted campaigns to attract customers seeking heating or cooling solutions. Adjusting strategies to align with these seasonal fluctuations can enhance lead generation."
  },
  {
    question: "How to write effective ad copy for HVAC?",
    answer: "Writing effective ad copy for HVAC involves highlighting key services, using clear and compelling language, addressing customer pain points, and including strong calls to action. Focus on local relevance and seasonal promotions to attract potential clients."
  },
  {
    question: "What is the impact of ad extensions for HVAC?",
    answer: "The impact of ad extensions for HVAC is significant, as they enhance visibility, provide additional information, and improve click-through rates, ultimately leading to more qualified leads and increased conversions for HVAC businesses."
  },
  {
    question: "How to retarget customers with HVAC Google Ads?",
    answer: "Retargeting customers with HVAC Google Ads involves creating remarketing campaigns that display ads to users who have previously visited your website. By utilizing audience lists and tailored ad messaging, you can re-engage potential clients and drive conversions effectively."
  },
  {
    question: "What are the best practices for HVAC ad campaigns?",
    answer: "The best practices for HVAC ad campaigns include targeting local audiences, using relevant keywords, creating compelling ad copy, optimizing landing pages for conversions, and regularly analyzing campaign performance to make data-driven adjustments."
  },
  {
    question: "How to use negative keywords in HVAC ads?",
    answer: "Using negative keywords in HVAC ads helps refine your targeting by excluding irrelevant search terms. Identify terms that don’t align with your services, add them to your campaign, and improve ad relevance, leading to better click-through rates and conversions."
  },
  {
    question: "What tools assist in managing HVAC Google Ads?",
    answer: "Tools that assist in managing HVAC Google Ads include Google Ads Editor for bulk changes, Keyword Planner for keyword research, and Google Analytics for tracking performance metrics, ensuring effective campaign management and optimization."
  },
  {
    question: "How to conduct A/B testing for HVAC ads?",
    answer: "Conducting A/B testing for HVAC ads involves creating two variations of an ad with slight differences, such as headlines or images. Then, run both ads simultaneously to analyze which performs better based on metrics like click-through rates and conversions."
  },
  {
    question: "What are the latest trends in HVAC advertising?",
    answer: "The latest trends in HVAC advertising include leveraging digital platforms, utilizing targeted Google Ads campaigns, and focusing on local SEO strategies to enhance visibility and generate quality leads effectively."
  },
  {
    question: "How to leverage customer reviews in HVAC ads?",
    answer: "Leveraging customer reviews in HVAC ads involves showcasing positive feedback prominently to build trust and credibility. Highlighting testimonials in your ads can"
  },
  {
    question: "What is the importance of mobile optimization for HVAC ads?",
    answer: "The importance of mobile optimization for HVAC ads lies in its ability to enhance user experience and increase engagement. With a significant number of users accessing services via mobile devices, optimized ads ensure better visibility, higher click-through rates, and ultimately, improved lead generation."
  },
  {
    question: "Does Google AdWords work for HVAC?",
    answer: "Google AdWords is effective for HVAC businesses, as it targets local customers actively searching for services. By utilizing tailored ad campaigns, HVAC contractors can significantly increase lead generation and improve conversion rates."
  },
  {
    question: "How to run a Google ad campaign for HVAC company?",
    answer: "Running a Google ad campaign for an HVAC company involves defining your target audience, selecting relevant keywords, creating compelling ad copy, and setting a budget. Monitor performance regularly to optimize your ads for better lead generation."
  }
];
const hvacAdsVisibleFaqs = [
  { question: "Can GrowSmallBiz create a similar Google Ads strategy for my HVAC, plumbing, or electrical business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored paid ads strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
  { question: "Can Google PPC help HVAC businesses generate leads faster?", answer: "Yes. Google PPC enables immediate visibility for high-intent searches, helping generate qualified leads quickly while supporting broader marketing efforts." },
  { question: "How long does it take to see results from Google PPC?", answer: "Google PPC can generate results quickly, though we recommend waiting at least 45 days for the campaign to start performing as Google's algorithm takes time to collect data." },
  { question: "How much do PPC services cost?", answer: "PPC pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
  { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
  { question: "Can you review my current Google Ads performance?", answer: "Yes. You can request a website and SEO audit or book a strategy session to identify improvement opportunities in your paid search campaigns." }
];
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
  lineNumber: 37,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
  lineNumber: 41,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
  lineNumber: 47,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
  lineNumber: 55,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
  lineNumber: 53,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
  lineNumber: 65,
  columnNumber: 3
}, void 0);
const GoogleAdsHvacPlumbingElectrical = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "HVAC Google Ads Case Study: How We Increased Leads & Revenue" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz helps HVAC contractors generate more calls and booked jobs with AI optimized Google PPC and LSA Ads. Schedule Strategy Call." }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "HVAC marketing, Google Ads for HVAC, lead generation HVAC, PPC advertising HVAC, case study HVAC contractors, digital marketing HVAC, GrowSmallBiz, local service marketing" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "How Google Ads Filled the Calendars of HVAC, Plumbing & Electrical Contractors",
        description: "Explore documented Google PPC case study results for HVAC, plumbing, and electrical businesses.",
        url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Google Ads", url: "/home-service-contractors/marketing-for-hvac-contractors/" },
          { name: "HVAC Google Ads Case Study", url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 84,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: MousePointerClick, text: "Case Studies / Google PPC" },
          title: "Google Ads Case Study: HVAC, Plumbing & Electrical Lead Generation",
          subtitle: "Explore documented Google PPC case study results for HVAC, plumbing, and electrical businesses. This page showcases real proof from paid search performance, lead generation, conversion efficiency, and cost-effective growth through Google Ads.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 98,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-6 bg-card/50 border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: [
        "Also see:",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/", className: "text-primary hover:underline font-medium", children: "Local SEO Case Studies for HVAC, Plumbing & Electrical →" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsxDEV(MousePointerClick, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, void 0),
          " PPC Case Studies"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Google PPC Case Studies" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights paid search campaign performance for HVAC, plumbing, and electrical businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center max-w-5xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 145,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: [
                "HVAC ",
                /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                  lineNumber: 149,
                  columnNumber: 26
                }, void 0),
                " PPC Growth"
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 148,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: "Google Ads Lead Generation Campaign" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 151,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Paid Ads Impact" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 154,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                "CTR → +50.23%",
                "Conversions → +83%",
                "Conversion Rate → +56.3%",
                "CPA → -41%"
              ].map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                  lineNumber: 163,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                  lineNumber: 164,
                  columnNumber: 25
                }, void 0)
              ] }, mIndex, true, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 162,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 155,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-5 mb-3", children: "Campaign Outcome" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                "Increased qualified lead volume",
                "Improved conversion efficiency",
                "Reduced cost per acquisition",
                "Stronger campaign performance consistency"
              ].map((outcome, oIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                  lineNumber: 177,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: outcome }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                  lineNumber: 178,
                  columnNumber: 25
                }, void 0)
              ] }, oIndex, true, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 176,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
                lineNumber: 169,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
              lineNumber: 187,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
          "HVAC ",
          /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 199,
            columnNumber: 24
          }, void 0),
          " PPC Case Study"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 198,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Synopsis" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "In the dynamic landscape of HVAC services, an industry player sought to amplify its digital footprint and connect with a broader audience. The objective was clear: leverage Google Ads to strategically position its services, captivate potential clients, and foster meaningful engagements." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 203,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Challenges" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 207,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "The primary objective was to enhance online visibility, attract qualified leads, reduce the average CPC & CPA, and improve conversion rates through the company's website. For any new campaign, we request to wait for 45 days for the campaign to start performing as Google's algorithm takes time to collect data and we get a clear picture of how and what needs to be done for that campaign. For a campaign far lower than the suggested budget can take a bit more time for data collection. This can be applied to an old campaign as well if the campaign needs to be rebuilt or significant changes are needed to be made for that campaign." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 208,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Objective" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 212,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "The overarching goal was to augment brand exposure, cultivate high-quality leads, and ultimately drive conversions for HVAC services." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Strategy" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 217,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Precision" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 219,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Meticulously researched and selected keywords were instrumental in ensuring the ads surfaced during relevant searches, targeting users actively seeking HVAC solutions." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Geographic Focus" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 224,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Tailored campaigns were deployed with a keen focus on areas exhibiting a heightened demand for HVAC services. This approach optimized the campaign for specific regions, maximizing impact within the designated budget." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 225,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Compelling Ad Copy" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Compelling ad copy was crafted to highlight the company's unique value propositions, aiming to capture users' attention and entice them to click through to the website." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 230,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Ad Extensions Integration" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 234,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Implemented diverse ad extensions, such as site-link extensions and callout extensions, to furnish additional information and encourage user interaction." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 235,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Targeted Campaigns" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 239,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "The campaigns were segmented to target specific demographics and interests, ensuring that the ads reached the most relevant audience likely to convert." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 240,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Continuous Refinement through A/B Testing" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 244,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Regular A/B testing facilitated the refinement of ad copies, visuals, and landing pages based on real-time data. This iterative approach ensured that the campaign evolved in response to user preferences." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 245,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Continuous Optimization" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 249,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "The campaign performance was regularly monitored, and adjustments were made based on insights gathered from data analytics. This included refining targeting parameters, testing different ad creatives, and bidding strategy." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 250,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Results" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 254,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Notable Click-Through Rate Increase" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 256,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "The optimized campaign witnessed a substantial boost in the Click-Through Rate (CTR), signifying heightened engagement from users actively interested in HVAC services. CTR was increased by 50.23%." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 257,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Robust Lead Generation" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 261,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "The Google Ads initiative yielded a significant uptick in qualified leads, showcasing a genuine interest from users in exploring the featured HVAC services. Our approach resulted in an 83% increase in total conversions." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 262,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Enhanced Conversion Rates" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 266,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Ongoing refinement through A/B testing contributed to a marked improvement in conversion rates, translating into a higher volume of clients actively seeking HVAC services. The conversion rate was increased by 56.3%." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Cost-Effective Acquisition" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 271,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Strategic targeting and continuous optimization led to a cost-effective outcome, ensuring a positive return on investment for the advertising budget. CPA decreased by 41% from the time frame including both phone calls and form submissions before our thorough account reorganization." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 272,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(SubHead, { children: "Results Obtained For an HVAC Company in Florida" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 276,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "From August 25, 2022, to January 24, 2023:" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 277,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            BulletList,
            {
              items: [
                "Clicks: 546",
                "Conversions: 158",
                "CPA: $36.80",
                "Conversion rate: 28.94%",
                "Avg. CPC: $10.65"
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
              lineNumber: 278,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Conclusion" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 288,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "This Google Ads campaign exemplifies the effectiveness of PPC strategies within the HVAC sector. By strategically navigating the online landscape, the campaign successfully elevated the visibility of HVAC services, fostering engagement, and driving growth in a competitive industry." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 289,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ppc-hvac-case-study.pdf" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 293,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 297,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 296,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 201,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 197,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Google PPC strategy for HVAC, plumbing, and electrical businesses.",
          faqs: hvacAdsVisibleFaqs,
          suppressSchema: true,
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Google Ads?",
            description: "If your HVAC, plumbing, or electrical business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Google PPC improvements can drive better results.",
            tagline: "Get clarity on your ad spend, conversion performance, and growth potential."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 309,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(RelatedQuestionsSection, { title: "Additional FAQs", items: relatedFaqs }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 322,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FaqJsonLd,
        {
          items: [...hvacAdsVisibleFaqs, ...relatedFaqs],
          pageUrl: "https://growsmallbiz.io/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 324,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What This Case Study Shows" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "This case study demonstrates how a structured Google Ads strategy can deliver measurable improvements in click-through rates, conversions, and cost efficiency for HVAC businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 337,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The goal is not just visibility — it is connecting that visibility to real business outcomes through qualified leads and cost-effective acquisition." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
            lineNumber: 340,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 336,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current ad performance, competition, and conversion path." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 345,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 331,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 330,
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
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 353,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 361,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
          lineNumber: 362,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 360,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
        lineNumber: 365,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
      lineNumber: 367,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, void 0);
};
export {
  GoogleAdsHvacPlumbingElectrical as default
};
