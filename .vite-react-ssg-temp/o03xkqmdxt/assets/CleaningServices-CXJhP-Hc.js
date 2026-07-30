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
const heroBg = "/assets/case-studies-cleaning-hero-bg-CkndM0vU.webp";
const summaryCards = [
  {
    title: "Cleaning Service SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+261.20% Clicks",
      "+868.02% Impressions",
      "+114.8% GBP Calls",
      "+119.3% GBP Website Clicks"
    ]
  },
  {
    title: "House Cleaning SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "1,409 Ranking Keywords",
      "366 Organic Traffic",
      "Strong local pack + local finder gains",
      "First 90 Days Impact"
    ]
  }
];
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
  lineNumber: 50,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
  lineNumber: 54,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
  lineNumber: 60,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
  lineNumber: 68,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
  lineNumber: 66,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
  lineNumber: 78,
  columnNumber: 3
}, void 0);
const CleaningServices = () => {
  const [activeTab, setActiveTab] = useState("cleaning-atlanta");
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Cleaning Service Marketing Case Study: Real Results for Local Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Cleaning Services Marketing Case Study: GrowSmallBiz delivers results. See how we improve rankings and generate leads. Schedule Strategy Call." }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "local SEO for cleaning services, cleaning service digital marketing, GrowSmallBiz case study, AI-powered marketing strategies, Google Business Profile optimization, lead generation for cleaning businesses, marketing success stories, cleaning industry marketing solutions" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "Real Results for Cleaning Service Businesses — Not Projections",
        description: "Explore documented local SEO case study results for cleaning service businesses.",
        url: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Cleaning Services", url: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 102,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO" },
          title: "Real Results for Cleaning Service Businesses — Not Projections",
          subtitle: "Explore documented local SEO case study results for cleaning service businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, local pack performance, website clicks, calls, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 115,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 py-3", children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "px-5 py-2.5 rounded-full text-sm font-display font-semibold bg-primary text-primary-foreground shadow-md",
          children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, void 0),
            "Local SEO Results"
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 129,
          columnNumber: 15
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, void 0),
            "Local SEO Results"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for cleaning service businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto", children: summaryCards.map((card, index) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                      lineNumber: 171,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                      lineNumber: 174,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                      lineNumber: 177,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                    lineNumber: 170,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                      lineNumber: 183,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                      lineNumber: 184,
                      columnNumber: 27
                    }, void 0)
                  ] }, mIndex, true, {
                    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                    lineNumber: 182,
                    columnNumber: 25
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                    lineNumber: 180,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                    lineNumber: 179,
                    columnNumber: 19
                  }, void 0)
                ]
              },
              index,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 166,
                columnNumber: 17
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 195,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 196,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 163,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 161,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Consistent Local SEO Methodology Across Cleaning Service Campaigns" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, internal linking improvements, and technical SEO enhancements designed to improve rankings, engagement, and lead generation for high-intent cleaning service businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 202,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "cleaning-atlanta",
                className: "flex-1 min-w-[140px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Cleaning Service — Atlanta"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 221,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "house-cleaners-nyc",
                className: "flex-1 min-w-[140px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "House Cleaners — NYC"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 227,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "cleaning-atlanta", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Cleaning Service — Atlanta" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 242,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                  lineNumber: 243,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 250,
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
                  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                  lineNumber: 251,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(P, { children: "Here is the campaign performance summary for this cleaning service business. Organic search accounted for 560 out of 1,527 users, or 36.67%, and 695 out of 1,813 sessions, or 38.33%, during August through November 2023. Ahrefs also showed an increasing organic traffic trend over the last couple of months." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 263,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 267,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Total clicks in August through November 2023 increased by 261.20% compared to April through July 2023. Impressions also improved by 868.02% over the same comparison period." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 268,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Business Profile" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 272,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "GBP Profile Interactions" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 274,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Google Business Profile interactions increased by 116.0% in August through November 2023 compared to the same period in the previous year." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 275,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "GBP Calls" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 279,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Calls increased by 114.8% in August through November 2023 compared to the previous year's GBP calls." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 280,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "GBP Website Clicks" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 284,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Website clicks increased by 119.3% in August through November 2023 compared to August through November 2022." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 285,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 289,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Tracked Keyword" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 291,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: 'For tracked keywords, "cleaning services Atlanta" improved by 12 positions in organic desktop and 15 positions in organic mobile.' }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 292,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "LSI Keyword" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 296,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "The website also gained a strong set of additional LSI keywords, showing broader topical relevance and improved keyword footprint." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 297,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-cleaning-service-case-study.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 301,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 304,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 303,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 302,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 241,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 237,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 236,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "house-cleaners-nyc", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "House Cleaners — NYC" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 316,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Client" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 320,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This is a home cleaning company in NYC — one of the most competitive cities in America. They were a brand new business struggling to get leads in." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 321,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Niche" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 325,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "House Cleaners" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 326,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "The Solution" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 328,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "We revised the internal linking strategy on the site to push forward rankings for the main pages. We also added technical improvements, including advanced Schema Markup, to capture more real estate on the SERPs and attract high-quality traffic that will convert." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 329,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "The Results" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 333,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Our efforts greatly impacted organic keyword saturation and traffic in the first 90 days. This creates a stronger foundation for better conversions as the campaign moves into the next quarter of optimization." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 334,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Growth Snapshot" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 338,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "By July 8, 2023, Ahrefs showed 1,409 total ranking keywords, including 102 keywords in positions 11–20, 56 keywords in positions 4–10, and 6 keywords in positions 1–3." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 339,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Organic Traffic Snapshot" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 343,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Ahrefs showed organic traffic at 366 by July 18, 2023, reflecting strong upward movement for a new business in a competitive market." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 344,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Local Visibility Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 348,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    '"housemaid services near me" reached Local Finder position 15 with a gain of 35 positions',
                    '"cleaning services near me" reached Local Finder position 4 with a gain of 1 position',
                    '"home cleaning service" reached Local Pack position 3 and Local Finder position 3',
                    '"maid cleaning service" reached Local Finder position 5 with a gain of 1 position',
                    '"move out cleaning" reached Local Pack position 2 and Local Finder position 1 with a gain of 1 position'
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                  lineNumber: 349,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-home-cleaning-company-case-study.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 359,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 362,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 361,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
                lineNumber: 360,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
              lineNumber: 319,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 315,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 314,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 217,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 216,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO strategy for cleaning service businesses.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my cleaning service business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO and paid ads strategies around your goals, your market, the specific opportunities available in your service area and allocated marketing budget.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "Can Local SEO really help cleaning businesses get more calls and quote requests?", answer: "Yes. Local SEO improves visibility in map results, Google Business Profile, and localized search — helping generate high-intent calls and inquiries from customers actively looking for cleaning services." },
            { question: "How long does it take to see results from Local SEO for a cleaning business?", answer: "Local SEO builds momentum over time depending on competition, website quality, and local authority. Most cleaning service businesses begin seeing measurable improvements within 3–6 months." },
            { question: "What is included in your Local SEO strategy for cleaning companies?", answer: "Keyword research, Google Business Profile optimization, citations, onsite optimization, content support, internal linking improvements, technical SEO enhancements, and ongoing performance improvements." },
            { question: "How much do Local SEO services cost?", answer: "SEO pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. You can request a website and SEO audit or book a strategy session to identify improvement opportunities." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your cleaning service business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 377,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What These Case Studies Show" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 400,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Across cleaning service campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, and lead flow over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 404,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for cleaning services." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 407,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Through Local SEO, the goal is not just visibility — it is connecting that visibility to real business outcomes." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
            lineNumber: 410,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 403,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 415,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 399,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 398,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 397,
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
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 423,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 431,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
          lineNumber: 432,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 430,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
        lineNumber: 436,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
      lineNumber: 438,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/CleaningServices.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, void 0);
};
export {
  CleaningServices as default
};
