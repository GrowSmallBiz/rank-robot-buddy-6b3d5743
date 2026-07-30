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
import { P as PersonCTA } from "./PersonCTA-B97lddt0.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
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
const heroBg = "/assets/case-studies-home-remodeling-hero-bg-Dx9qayxl.webp";
const summaryCards = [
  {
    title: "Home Remodeling Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+366.67% Goal Completions",
      "+382.11% Website Clicks",
      "+375.10% Impressions",
      "+15% GBP Calls"
    ]
  },
  {
    title: "Home Renovation SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "27.66% of Total Users from Organic Search",
      "31.69% of Total Sessions from Organic Search",
      "60% of Thank You Completions from Organic Search",
      "Strong First- and Second-Position Local Pack Rankings"
    ]
  },
  {
    title: "Dallas Home Renovation Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+151.8% Organic Conversions YoY",
      "+393.3% Organic Traffic YoY",
      "+96.2% Google Business Profile Visibility",
      "+85.2% Website Clicks YoY"
    ]
  }
];
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
  lineNumber: 60,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
  lineNumber: 64,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
  lineNumber: 70,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
  lineNumber: 78,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
  lineNumber: 76,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
  lineNumber: 88,
  columnNumber: 3
}, void 0);
const HomeRemodeling = () => {
  const [activeTab, setActiveTab] = useState("home-remodeling-long-term");
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Home Remodeling Marketing Case Study: Real Results for Contractors" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Home remodeling contractors: GrowSmallBiz delivers real Local SEO results. See how we boost leads and website clicks. Schedule Strategy Call." }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "local SEO, home remodeling marketing, digital marketing for contractors, marketing case study, lead generation for remodelers, Google Business Profile optimization, home improvement SEO, AI-powered marketing strategies" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "Real Results for Home Remodeling Contractors — Not Projections",
        description: "Explore documented Local SEO case study results for home remodeling and home renovation businesses.",
        url: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Home Remodeling", url: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 112,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO" },
          title: "Real Results for Home Remodeling Contractors — Not Projections",
          subtitle: "Explore documented Local SEO case study results for home remodeling and home renovation businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, calls, conversions, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 125,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, void 0),
          "Local SEO Results"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Case Studies" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for home remodeling businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 155,
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
                    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                    lineNumber: 167,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                    lineNumber: 170,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                  lineNumber: 163,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                    lineNumber: 176,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                    lineNumber: 177,
                    columnNumber: 27
                  }, void 0)
                ] }, mIndex, true, {
                  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                  lineNumber: 175,
                  columnNumber: 25
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                  lineNumber: 173,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                  lineNumber: 172,
                  columnNumber: 19
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 159,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 189,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Consistent Local SEO Methodology Across Home Remodeling Campaigns" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 198,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(P, { children: "Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location and service signal improvements, content support, technical SEO enhancements, and geo-relevance improvements designed to strengthen rankings, engagement, and lead generation for high-intent home remodeling searches." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 201,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 197,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
        /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
          /* @__PURE__ */ jsxDEV(
            TabsTrigger,
            {
              value: "home-remodeling-long-term",
              className: "flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Home Remodeling"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 214,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            TabsTrigger,
            {
              value: "home-renovation-organic",
              className: "flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Home Renovation"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 220,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            TabsTrigger,
            {
              value: "dallas-home-renovation",
              className: "flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Home Remodeling — Dallas"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 226,
              columnNumber: 19
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 213,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "home-remodeling-long-term", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Home Remodeling — Long-Term SEO Campaign" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 237,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 241,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Enhance Keyword Performance",
                  "Increase Engagement and Visibility",
                  "20-40% increase in conversions / goal completions"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 242,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 250,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Extensive keyword research to find relevant keywords, including competitive analysis",
                  "Ongoing Google Business Profile optimization",
                  "Built relevant niche and local citations",
                  "Optimized onsite pages for stronger local and service signals",
                  "Improved engagement and visibility through local SEO execution",
                  "Strengthened conversion paths tied to SEO traffic",
                  "Supported rankings with content and technical improvements",
                  "Continued long-term optimization over a multi-year campaign"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 251,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Notable Improvements" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 264,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are some notable improvements from both the website and Google Business Profile metrics over the year-over-year comparison period:" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 265,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "The total goal completion increased by 366.67%",
                  "The total goal completions from organic search (SEO) increased by 125%",
                  "The total goal conversion rate increased by 304.78%",
                  "The goal conversion rate from organic search (SEO) increased by 161.62%",
                  "The total thank you goal increased by 960%",
                  "Phone calls tracked on the website increased by 88.89%",
                  "Google My Business calls increased by 15% in March - July 2023 vs. March - July 2022",
                  "The total page views increased by 9.17%",
                  "The total unique page views increased by 11.38%",
                  "The average time on website pages increased by 13.66%",
                  "The exit rate improved by 5.60%",
                  "Total website clicks from Google Search Console increased by 382.11%",
                  "The total website impressions from Google Search Console increased by 375.10%",
                  "The average Google position increased by 8 positions",
                  "There were 9 keyword movements",
                  "There were 82 gained positional movement"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 268,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics - KPIs" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 289,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Leads and Conversions" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 291,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here is how conversions improved between June 1, 2022 - May 31, 2023 vs. June 1, 2021 - May 31, 2022. Overall goal completions, goal conversion rate, thank you goal, and phone call tracking increased. Goal completion increased by 366.67%, goal conversion rate increased by 304.78%, thank you goal increased by 960%, and phone call tracking increased by 88.89%." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 292,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "From organic search, the goal conversion rate increased by 161.62%, and goal completions (the number of total conversions) increased by 125%." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 295,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Traffic Acquisition" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 299,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here is the traffic acquisition per channel. Total users increased by 15.57%, total new users increased by 16.09%, and total sessions increased by 15.29%. However, there was a decrease in organic search for the number of users, new users, and sessions, and the strategy included follow-up recommendations to improve those metrics." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 300,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Page Views" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 304,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Page views and unique page views also increased. Page views increased by 9.17%, unique page views increased by 11.38%, average time on website pages increased by 13.66%, and the exit rate improved by 5.60%." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 305,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console KPIs" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 309,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "There was also a major improvement in Google Search Console KPIs. Total clicks increased by 382.11% and total impressions increased by 375.10%." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 310,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Google Search Console Queries" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 314,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here are the top 10 queries for the website:" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 315,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "euro design build",
                  "euro design cabinets",
                  "eurodesign cabinets",
                  "euro design",
                  "high end remodeling",
                  "oil based vs. water based sealer",
                  "kitchen design elements",
                  "remodeling",
                  "custom kitchen cabinets",
                  "kitchen remodel dallas"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 318,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Rankings" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 333,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Over the past 12 months, keyword rankings also improved. The average Google position increased by 8 positions, there were 9 keyword movements, and 82 gained positional movement." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 334,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Keyword Movement: The number of keywords that have moved. If a keyword has moved from 8th to 5th, this is counted as one keyword movement up.",
                  "Positional Movement: The number of positions that keywords have moved. If a keyword has moved from 8th to 5th, this is counted as three positions gained."
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 337,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(P, { children: "A number of keywords rank in the top 10 of organic desktop, organic mobile, local pack, and local finder. Top keywords include:" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 343,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  '"high end remodeling" ranks 4th in organic desktop, 4th in organic mobile, 1st in local pack and 1st in local finder',
                  '"remodeling design services" ranks 4th in organic desktop, 7th in organic mobile, 1st in local pack, and 1st in local finder',
                  '"renovation design services" ranks 12th in organic desktop, 13th in organic mobile, 1st in local pack, and 1st in local finder',
                  '"design build bathroom remodel" ranks 16th in organic desktop, 17th in organic mobile, 1st in local pack, and 1st in local finder',
                  'Most of the "near me" keywords, like bathroom contractors near me, bathroom remodelers near me, kitchen design near me, and kitchen remodeling near me, are ranking 1st in both local pack and local finder'
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 346,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Business Profile" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 356,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Available data is from March 2023 to July 2023. Data is pulled directly from the Google Business Profile listing." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 357,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Google Business Profile Calls" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 361,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Google Business Profile calls increased by 15% in March - July 2023 compared to March - July 2022." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 362,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/home-remodeling-case-study-1.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 366,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 369,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 368,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 367,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 240,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 236,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 235,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "home-renovation-organic", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Home Renovation — Organic Search Contribution Campaign" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 381,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Synopsis" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 385,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Despite the persistent challenges encountered in the home improvement industry, this campaign produced measurable SEO improvements in traffic contribution, visibility, conversion share, and local pack performance." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 386,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Notable Contributions (SEO)" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 390,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Organic search contributed to 754 or 27.66% of the total website users",
                  "Organic search contributed 739 or 27.12% of the total new users",
                  "Organic search contributed 952 or 31.69% of the total sessions",
                  "Organic search contributed 33 or 60% of the total thank you page completions",
                  "Most of the keywords tracked dominate the first and second rank in the local pack (map rankings)"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 391,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Notable Improvement (SEO)" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 401,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Total clicks for the whole duration of the campaign improved by 3.55%",
                  "Total impressions improved by 7.56%",
                  "Average position improved from 51.2 to 48.6",
                  "bathroom remodeling service increased by 1 rank in the local pack",
                  "home design and remodeling service increased by 1 rank in the local pack",
                  "home renovation increased by 1 rank in the local pack",
                  "home renovation near me increased by 1 rank in the local pack",
                  "design and remodeling increased by 2 ranks in the local finder",
                  "home renovation firm increased by 2 ranks in the local finder",
                  "bath remodeling service increased by 1 rank in the local finder",
                  "home design and remodeling increased by 1 rank in the local finder",
                  "home renovation increased by 1 rank in the local finder",
                  "remodeling and design increased by 1 rank in the local finder"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 402,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 420,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Traffic Acquisition" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 422,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Here is how the organic search channel performed in terms of traffic acquisition in December 2022 - July 2023. Organic search contributed to 754 or 27.66% of the total website users, 739 or 27.12% of the total new users, and 952 or 31.69% of the total sessions. Organic search also contributed 33 or 60% of the total thank you page completions." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 423,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Behavior" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 427,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Total page views of the website is 5720 and unique page views totaled 5,021." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 428,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Conversion" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 432,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "The thank you page goal completions totaled to 55. Of those, 60% or 33 thank you page completions came from organic search." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 433,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 437,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Total clicks for the whole campaign duration improved by 3.55%, total impressions improved by 7.56%, and the average position improved from 51.2 to 48.6." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 438,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Keywords" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 442,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "There was keyword improvement across both local pack and local finder visibility." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 443,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Local Pack" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 447,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "bathroom remodeling service increased by 1 rank in the local pack",
                  "home design and remodeling service increased by 1 rank in the local pack",
                  "home renovation increased by 1 rank in the local pack",
                  "home renovation near me increased by 1 rank in the local pack"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 448,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Local Finder" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 457,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "design and remodeling increased by 2 ranks in the local finder",
                  "home renovation firm increased by 2 ranks in the local finder",
                  "bath remodeling service increased by 1 rank in the local finder",
                  "home design and remodeling increased by 1 rank in the local finder",
                  "home renovation increased by 1 rank in the local finder",
                  "remodeling and design increased by 1 rank in the local finder"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 458,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(P, { children: "Most of the keywords tracked dominate the first and second rank in the local pack (map rankings)." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 468,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/home-remodeling-case-study-2.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 472,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 475,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 474,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 473,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 384,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 380,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 379,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "dallas-home-renovation", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Dallas Home Renovation — Local Visibility Campaign" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 487,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Strategic Objective" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 491,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Increase local visibility and leads for a home renovation company in Dallas, TX." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 492,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Initial Insight" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 496,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "This client needed to increase their presence in their service area across the Dallas-Ft. Worth area in order to increase the quantity of leads coming in." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 497,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Direction" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 501,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "By optimizing the local listing and focusing on the two main services — kitchen remodeling and bathroom remodeling — visibility of the Google My Business listing increased by 96.2%, and clicks to the website increased by 85.2% year over year." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 502,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "The local optimizations worked in tandem with a strategic content plan, solid foundational research and implementation, and technical SEO efforts." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 505,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Geographic markup was manually created and implemented to give Google more information about the location and services, which contributed to stronger ROI and profit impact." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 508,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Results" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 512,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "The campaign produced a 151.8% increase in organic conversions year over year and a 393.3% increase in organic traffic year over year." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 513,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Outcome" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 517,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Increased local visibility across the Dallas-Ft. Worth service area",
                  "Stronger Google Business Profile presence",
                  "Higher website click volume from local search",
                  "Improved conversion performance from organic traffic",
                  "Better alignment between service pages, local intent, and geo-signals"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
                lineNumber: 518,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/home-remodeling-case-study-3.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 528,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 531,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 530,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
              lineNumber: 529,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 490,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 486,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 485,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 212,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 211,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO strategy for home remodeling businesses.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my home remodeling business?", answer: "Yes. These case studies show the kind of structured Local SEO work GrowSmallBiz can apply to home remodeling businesses, including Google Business Profile optimization, local relevance improvements, keyword targeting, conversion-focused website support, content strategy, and technical SEO enhancements." },
            { question: "Can Local SEO really help home remodeling businesses get more calls and estimate requests?", answer: "Yes. Home remodeling is a high-intent category. When a business improves map visibility, service-page relevance, local rankings, and conversion paths, Local SEO can contribute to more calls, contact form submissions, and estimate requests from people already searching for remodeling services." },
            { question: "What is included in your Local SEO strategy?", answer: "Our Local SEO work typically includes keyword research, Google Business Profile optimization, local and niche citation work, onsite location and service signal improvements, content support, technical SEO enhancements, and conversion-focused recommendations tied to lead generation." },
            { question: "How long does it take to see results from Local SEO?", answer: "Timelines vary based on competition, location, website quality, Google Business Profile health, and the starting visibility of the business. In many cases, measurable movement begins before the full strategy matures, but Local SEO works best as a consistent effort rather than a one-time fix." },
            { question: "How much do SEO services cost?", answer: "SEO pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. GrowSmallBiz can review your current local visibility, website conversion path, Google Business Profile presence, and overall search positioning to identify where improvement opportunities exist." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your home remodeling business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 545,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What These Case Studies Show" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 568,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Across home remodeling campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, rankings, and lead flow over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 572,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a remodeling business appears, competes, and converts in search environments where homeowners are actively looking for kitchen, bathroom, renovation, and design-build services." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The goal is not just better visibility. It is turning local search visibility into real business outcomes through better rankings, stronger Google Business Profile performance, higher-intent traffic, and clearer conversion paths." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
            lineNumber: 578,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 571,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 583,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 567,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 566,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 565,
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
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 591,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 599,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
          lineNumber: 600,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 598,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
        lineNumber: 604,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
      lineNumber: 606,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/HomeRemodeling.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, void 0);
};
export {
  HomeRemodeling as default
};
