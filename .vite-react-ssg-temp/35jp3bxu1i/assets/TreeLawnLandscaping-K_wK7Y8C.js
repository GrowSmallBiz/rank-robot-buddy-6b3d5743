import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { G as GoogleColoredText } from "./GoogleColoredText-kBof5TmB.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-Cu7HOm3D.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { Search, MousePointerClick, TrendingUp, ChevronDown } from "lucide-react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-Cu9NeDbq.js";
import { useState, useRef, useEffect } from "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { P as PersonCTA } from "./PersonCTA-BBiDGLm3.js";
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
const heroBg = "/assets/case-studies-tree-lawn-hero-bg-P_EsWZde.webp";
const summaryCards = [
  {
    title: "Landscape Design-Build Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+45.41% Organic Traffic Users",
      "+46.13% New Users",
      "+45.57% Sessions",
      "Top landscape keywords moved from beyond page one to top positions"
    ]
  },
  {
    title: "Landscaping Local SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+43.14% Impressions",
      "#1 landscape installation ashland ky",
      "#1 landscaping service russel",
      "Strong local rankings despite GBP verification roadblocks"
    ]
  },
  {
    title: "Tree & Lawn SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+25.77% Clicks",
      "+138.54% Impressions",
      "1.1 Average Map Rank",
      "+770% Phone Number Clicks"
    ]
  }
];
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
  lineNumber: 63,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
  lineNumber: 67,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
  lineNumber: 73,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
  lineNumber: 81,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
  lineNumber: 79,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
  lineNumber: 91,
  columnNumber: 3
}, void 0);
const TreeLawnLandscaping = () => {
  const [activeTab, setActiveTab] = useState("landscape-design-build");
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
      /* @__PURE__ */ jsxDEV("title", { children: "Landscaping Marketing Case Study: Real Results for Local Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz delivers results for landscaping companies with SEO and PPC. See our case study and get more clients. Schedule Strategy Call." }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "landscaping marketing, digital marketing for landscapers, AI-powered marketing, local service business marketing, marketing case study, online visibility for landscapers, paid ads management, GrowSmallBiz services" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Boost Local Business Growth with AI-Powered Marketing" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "Real Results for Tree Care, Lawn Care & Landscaping Companies — Not Projections",
        description: "Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns.",
        url: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Tree Care, Lawn Care & Landscaping", url: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + Google PPC" },
          title: "GrowSmallBiz Case Study: SEO & PPC Results for Landscaping Businesses",
          subtitle: "Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 153,
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
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                  }, void 0),
                  "Local SEO Results"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 170,
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
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 190,
                    columnNumber: 17
                  }, void 0),
                  " PPC Results"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 181,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 168,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 164,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 204,
              columnNumber: 17
            }, void 0),
            "Local SEO Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for tree care, lawn care, and landscaping businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 200,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 219,
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
                      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                      lineNumber: 228,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                      lineNumber: 231,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                      lineNumber: 234,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 227,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                      lineNumber: 240,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                      lineNumber: 241,
                      columnNumber: 27
                    }, void 0)
                  ] }, mIndex, true, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 239,
                    columnNumber: 25
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 237,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 236,
                    columnNumber: 19
                  }, void 0)
                ]
              },
              index,
              true,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 223,
                columnNumber: 17
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 221,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 252,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 253,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 251,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 220,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 218,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Proven Local SEO Methodology for Tree, Lawn & Landscaping Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 262,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Across these campaigns, the work consistently included internal linking improvements, advanced schema markup, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation for high-intent service businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 260,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 259,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "landscape-design-build",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Landscape Design-Build — Residential"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 278,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "landscaping-ashland",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Landscaping — Ashland, KY"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 284,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "tree-lawn-chicagoland",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Tree & Lawn Care — Chicagoland"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 290,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 277,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "landscape-design-build", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Landscape Design-Build — Residential" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 301,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Client" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 305,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This is a landscape design company specializing in residential backyard design-build projects." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 306,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Niche" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 310,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Design-Build Landscaping" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 311,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 313,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Push forward rankings for the site's main pages",
                    "Capture more real estate in search results",
                    "Attract higher-quality traffic more likely to convert"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 314,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 322,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Revised the internal linking strategy to strengthen primary service pages",
                    "Added advanced Schema Markup to increase SERP visibility"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 323,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Results" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 330,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Our efforts greatly impacted the organic traffic year over year and helped contribute to new and better keyword rankings." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 331,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Organic Traffic Growth" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 335,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "As shown in the case study report, organic traffic users increased by 45.41%, new users from organic traffic increased by 46.13%, and sessions from organic traffic increased by 45.57%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 336,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Movement" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 340,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "The report also shows major ranking gains, including landscape architecture moving from beyond rank 100 to rank 1, landscape construction from beyond rank 100 to rank 1, landscape maintenance from beyond rank 100 to rank 1, garden management from beyond rank 100 to rank 4, and landscape installation from beyond rank 100 to rank 6." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 341,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-landscaping-case-study-1.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 345,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 348,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 347,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 346,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 304,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 300,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 299,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "landscaping-ashland", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Landscaping — Ashland, KY" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 360,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Summary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 364,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Google Business Profile is an essential tool for optimizing local SEO and maximizing online presence. Even with Google Business Profile waiting to be verified and website/content approvals slowing progress, the campaign still produced meaningful improvements in visibility and keyword rankings." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 365,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Major Roadblocks" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 369,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Approval of blogs and other deliverables",
                    "Access issues and verification of Google Business Profile"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 370,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 377,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "Improve local visibility for landscaping and installation searches",
                    "Strengthen keyword rankings across desktop and mobile",
                    "Increase impressions and improve average search position"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 378,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics - GA4 KPIs" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 386,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "From April to June 2023, the website recorded a total of 260 users and 256 new users." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 387,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Traffic Acquisition — April vs. May" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 391,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "For organic search, engagement time per session increased by 40.63%, events per session increased by 18.56%, and engagement rate increased by 25%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 392,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Traffic Acquisition — May vs. June" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 396,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "For organic search, the number of users increased by 125%, sessions increased by 53.33%, and engaged sessions increased by 30%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 397,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console KPIs" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 401,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "We recorded 7 total clicks and 692 total impressions during the reporting period." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 402,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Impression Growth and Average Position" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 406,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Impressions increased by 73.28% from April to May, then increased again by 43.14% from May to June. Average position improved from 43.9 in April to 39.2 in May, then to 34.4 in June." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 407,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Top Queries" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 411,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "landscaping lawrence county",
                    "summit landscaping",
                    "summit landscapes",
                    "landscaping ashland ky",
                    "summit landscape",
                    "summit landscaping ashland ky",
                    "lawn maintenance ashland",
                    "landscaping in summit",
                    "summit lawn care",
                    "summit outdoor services"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 412,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Rankings" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 427,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "landscape maintenance companies near me — organic desktop rank 3 and organic mobile rank 2",
                    "landscape installation ashland ky — organic desktop rank 1 and organic mobile rank 1",
                    "ashland landscaping — organic desktop rank 2 and organic mobile rank 2",
                    "landscaping service russel — organic desktop rank 1 and organic mobile rank 1"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 428,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-landscaping-case-study-2.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 437,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 440,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 439,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 438,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 363,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 359,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 358,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "tree-lawn-chicagoland", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Tree & Lawn Care — Chicagoland" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 452,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 456,
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
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 457,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 464,
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
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 465,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics — User Acquisition" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 477,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "New users from organic search increased by 2.95%, and engaged sessions from new users increased by 5.3%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 478,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Traffic Acquisition" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 482,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Users from organic search increased by 7.39%, and conversions increased by 7.14%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 483,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Conversions (Website)" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 487,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Contact form conversions increased by 16.67%, and phone number clicks increased by 770%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 488,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Contact Form" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 492,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Organic search contributed to 37.5% of contact form goals. Contact form conversion decreased by 3.45% during the comparison period, providing a clear area for continued optimization." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 493,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Phone Number Clicks" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 497,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Organic search contributed to 6.7% of phone number click conversions, with 5 phone call clicks coming from organic search in October - November 2023." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 498,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 502,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Total clicks increased by 25.77%, and total impressions increased by 138.54%." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 503,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Local Search Grid" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 507,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "Average map rank was 1.1." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 508,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Improvements" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 512,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                BulletList,
                {
                  items: [
                    "tree care company increased 7 positions in organic desktop and 16 positions in organic mobile",
                    "arborist naperville area increased by 4 positions in organic desktop and 7 positions in organic mobile",
                    "tree service naperville increased by 2 positions in organic desktop and 5 positions in organic mobile",
                    "lawn and tree service increased by 15 positions in organic desktop and 4 positions in organic mobile",
                    "tree and lawn care services increased by 5 positions in organic desktop and 4 positions in organic mobile",
                    "lawn and tree care increased by 4 positions in organic desktop, 4 positions in organic mobile, and 3 positions in local finder",
                    "tree care la grange park increased by 2 positions in organic desktop, 4 positions in organic mobile, and 2 positions in local finder",
                    "tree service western springs il increased by 2 positions in organic desktop, 2 positions in organic mobile, and 3 positions in local finder"
                  ]
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 513,
                  columnNumber: 23
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ai-seo-tree-lawn-care-case-study.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 526,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 529,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 528,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 527,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 455,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 451,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 450,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 276,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 275,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 274,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 273,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "google-ppc", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(MousePointerClick, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 551,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 552,
              columnNumber: 19
            }, void 0),
            " PPC Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 550,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Google PPC Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 554,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights paid search campaign performance for tree care, lawn care, and landscaping businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 557,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 549,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 548,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 547,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 566,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center max-w-5xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 571,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: [
                  "Tree & Lawn ",
                  /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 575,
                    columnNumber: 35
                  }, void 0),
                  " PPC Growth"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 574,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: "Google Ads Lead Generation Campaign" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 577,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 570,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Paid Ads Impact" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 580,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                  "Clicks → +169.5%",
                  "Conversions → +211.5%",
                  "Conversion Rate → +16.7%",
                  "Last 90 Days → 299 Conversions"
                ].map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 589,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 590,
                    columnNumber: 27
                  }, void 0)
                ] }, mIndex, true, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 588,
                  columnNumber: 25
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 581,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-5 mb-3", children: "Campaign Outcome" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 594,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                  "Stronger campaign scale",
                  "Higher lead volume from search",
                  "217 call leads in the last 90 days",
                  "82 form leads in the last 90 days"
                ].map((outcome, oIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 603,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: outcome }, void 0, false, {
                    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                    lineNumber: 604,
                    columnNumber: 27
                  }, void 0)
                ] }, oIndex, true, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 602,
                  columnNumber: 25
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                  lineNumber: 595,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 579,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 569,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 568,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 614,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 615,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 613,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 567,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 565,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
            "Tree & Lawn ",
            /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 626,
              columnNumber: 33
            }, void 0),
            " PPC Case Study"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 625,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Synopsis" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 629,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "This Google Ads case study shows how a tree and lawn care business used Search and Performance Max campaigns to generate leads at scale while adjusting budget over time based on business requirements." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 630,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Challenges" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 634,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "The campaign needed to balance lead volume, cost efficiency, and budget changes over time while producing both form fills and call leads." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 635,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Objective" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 639,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Increase qualified leads from Google Ads, improve conversion efficiency, and scale paid search performance as campaign data matured." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 640,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Strategy" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 644,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Campaign Launch" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 646,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "We launched a Search campaign on September 1, 2023, followed by a Performance Max campaign on September 11, 2023." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 647,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Budget Management" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 651,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "The monthly budget started at $2500, was reduced to $500 by the end of November based on client requirements, was increased back to $2500 in March, and then increased to $5000 per month from April onward." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 652,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "All-Time Performance" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 656,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Cost: $29,698.34",
                  "Clicks: 8,102",
                  "Conversions: 553",
                  "CPA: $53.70",
                  "Conversion rate: 6.83%",
                  "Submit Lead Form: 159",
                  "Call Leads: 394"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 657,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Results" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 669,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Last 30 Days" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 671,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Cost: $4,993.52",
                  "Clicks: 579",
                  "Conversions: 111",
                  "CPA: $44.99",
                  "Conversion rate: 7.19%",
                  "Submit Lead Form: 38",
                  "Call Leads: 73"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 672,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Last 30 Days — Performance Gains" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 684,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Clicks increased by 7.8%",
                  "The number of conversions increased by 15.6%",
                  "The CPA decreased by 9.0%"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 685,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Last 90 Days" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 693,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Cost: $14,714.01",
                  "Clicks: 1,854",
                  "Conversions: 299",
                  "CPA: $49.21",
                  "Conversion rate: 7.21%",
                  "Submit Lead Form: 82",
                  "Call Leads: 217"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 694,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Last 90 Days — Performance Gains" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 706,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              BulletList,
              {
                items: [
                  "Clicks increased by 169.5%",
                  "The number of conversions increased by 211.5%",
                  "The conversion rates increased by 16.7%"
                ]
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
                lineNumber: 707,
                columnNumber: 21
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Conclusion" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 715,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "This case study shows how Google Ads can generate both call leads and form leads for tree and lawn care businesses while improving efficiency as campaign data accumulates and optimization continues." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 716,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/ppc-tree-lawn-case-study.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 720,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 725,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 724,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
              lineNumber: 723,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 628,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 624,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 623,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 622,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 621,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 545,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO and Google PPC strategy for tree care, lawn care, and landscaping businesses.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my tree care, lawn care, or landscaping business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO and paid ads strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "Can Local SEO really help tree care, lawn care, and landscaping businesses get more calls?", answer: "Yes. Local SEO helps service businesses improve visibility in Google Business Profile results, local map results, and organic search when homeowners are actively searching for nearby providers. That visibility can translate into more calls, direction requests, website visits, and lead form submissions." },
            { question: "Can Google PPC help tree care and landscaping businesses generate leads faster?", answer: "Yes. Google PPC can generate leads faster because it places your business in front of high-intent searchers immediately. It is especially useful for seasonal demand, competitive markets, and service lines where you want quicker lead flow while SEO builds over time." },
            { question: "How long does it take to see results from Local SEO or Google PPC?", answer: "Google PPC can start producing data and leads much faster, although performance improves as campaigns gather enough data for optimization. Local SEO usually takes longer, but it builds stronger long-term visibility, map presence, and organic lead flow." },
            { question: "What is included in your Local SEO strategy?", answer: "Our Local SEO work can include Google Business Profile optimization, local and niche citations, onsite location signal improvements, internal linking, schema enhancements, content support, keyword tracking, and ongoing efforts to improve rankings, engagement, and lead generation." },
            { question: "How much do SEO and PPC services cost?", answer: "SEO and PPC pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. We can review your current visibility, traffic quality, conversion path, local rankings, and paid campaign performance to identify where stronger SEO, PPC, website improvements, or automation can create better results." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your tree care, lawn care, or landscaping business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO or Google PPC improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 738,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What These Case Studies Show" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 762,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Across tree care, lawn care, and landscaping campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, and lead flow over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 766,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for services." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 769,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Whether through Local SEO, Google PPC, or a combination of both, the goal is not just visibility — it is connecting that visibility to real business outcomes." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
            lineNumber: 772,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 765,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 777,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 761,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 760,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 759,
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
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 785,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 793,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
          lineNumber: 794,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 792,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
        lineNumber: 798,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
      lineNumber: 800,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/TreeLawnLandscaping.tsx",
    lineNumber: 132,
    columnNumber: 5
  }, void 0);
};
export {
  TreeLawnLandscaping as default
};
