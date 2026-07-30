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
const medSpaHero = "/assets/case-study-medspa-hero-SMEIX03d.webp";
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
  lineNumber: 28,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
  lineNumber: 31,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
  lineNumber: 34,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
  lineNumber: 39,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
  lineNumber: 37,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src, title }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: title || "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
  lineNumber: 47,
  columnNumber: 3
}, void 0);
const seoSummaryCards = [
  {
    title: "Med Spa AI SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: ["+252% Search Impressions (GSC)", "+78% Organic Users", "+66.76% Total Clicks (GSC)"]
  },
  {
    title: "Med Spa Local SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: ["+552.7% Users YOY", "+75.9% Phone Calls (GBP)", "#1 Rankings — Laser Skin Treatment"]
  }
];
const ppcSummaryCards = [
  {
    title: "Med Spa PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: ["$16.39 All-Time Cost Per Lead", "2,577 Total Conversions", "15.59% Conversion Rate"]
  },
  {
    title: "Recent Performance Gains",
    subtitle: "Google Ads Campaign (Last 30 Days)",
    metrics: ["+48.8% Conversions vs Prior Period", "-31.1% CPA vs Prior Period", "+68.3% Conversion Rate vs Prior Period"]
  }
];
const MedSpaCaseStudy = () => {
  const [activeTab, setActiveTab] = useState("medspa-socal");
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
      /* @__PURE__ */ jsxDEV("title", { children: "Med Spa Marketing Case Study: Real Revenue Growth | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz's med spa AI marketing case study: See how we drive organic growth, improve rankings, and generate leads with AI-powered marketing." }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "med spa marketing, SEO for med spas, PPC advertising for med spas, digital marketing agency, lead generation strategies, case studies med spas, organic traffic growth, keyword rankings med spas" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Grow Your Med Spa: Proven SEO & Google Ads Solutions" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "Real Results for Med Spa Businesses — Not Projections",
        description: "Documented AI SEO and Google Ads results for med spa clients.",
        url: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Med Spa Marketing", url: "/health-and-wellness-practices/marketing-for-med-spas/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 117,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + PPC" },
          title: "Real Results for Med Spa Businesses — Not Projections",
          subtitle: "Explore documented campaign results for med spa clients across AI SEO and Google Ads. This page showcases real proof drawn from Google Analytics, Google Search Console, Google Business Profile data, and Google Ads account performance.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: medSpaHero,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 131,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { ref: navRef, className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 py-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("local-seo"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "local-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, void 0),
          "Local SEO Results"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("google-ppc"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "google-ppc" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsxDEV(MousePointerClick, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 149,
            columnNumber: 84
          }, void 0),
          " PPC Results"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 161,
              columnNumber: 19
            }, void 0),
            "Local SEO Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 163,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights AI SEO campaign performance for med spa clients, with a focus on Google Business Profile visibility, organic search growth, keyword movement, and lead generation." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 158,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: seoSummaryCards.map((card, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 182,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 183,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 180,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 189,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 190,
                  columnNumber: 29
                }, void 0)
              ] }, mIndex, true, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 188,
                columnNumber: 27
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 186,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, void 0)
            ] }, index, true, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 177,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 199,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 198,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 176,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Consistent Local SEO Methodology Across Med Spa Campaigns" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(P, { children: "Across these campaigns, the work consistently included Google Business Profile optimization, localized content creation, technical SEO improvements, on-page optimization, and citation building — designed to improve rankings, GBP visibility, and engagement for high-intent med spa searches." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 208,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsxDEV(TabsTrigger, { value: "medspa-socal", className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg", children: "Med Spa AI SEO — Pleasanton, CA" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 225,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(TabsTrigger, { value: "medspa-sangabriel", className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg", children: "Med Spa Local SEO — San Gabriel, CA" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 228,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 224,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "medspa-socal", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Med Spa AI SEO — Pleasanton, CA" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 236,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 240,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "Enhance keyword performance",
                "Increase engagement and visibility",
                "20–40% increase in conversions and goal completions"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 241,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 247,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "Keyword identification and tracking setup",
                "Page title, meta description, and H1 optimization across top 10 pages",
                "Google Business Profile optimization and GMB posting",
                "Monthly content creation and technical SEO audits",
                "Citation building"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 248,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Performance Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 256,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This med spa client in Pleasanton, CA experienced significant organic search growth over a 9-month AI SEO campaign (January 2023 – September 2023)." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 257,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Key Metrics" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 259,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "Organic users increased by 78.06%",
                "Organic new users increased by 79.77%",
                "Organic sessions increased by 63.21%",
                "Total clicks (GSC) improved by 66.76%",
                "Total impressions (GSC) improved by 252%",
                "Average position improved from 31.8 to 25.5",
                "GBP total views: 19,880 (12 months)",
                "GBP interactions: 4,710 (3,200 website clicks | 924 directions | 583 calls)",
                "GBP interactions YOY: +2.7%",
                "Direction requests YOY: +11.7%",
                "Website clicks YOY: +6.6%"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 260,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/A-SEO-Med-Spa-Case-Study-Pleasanton-CA.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 274,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 277,
                columnNumber: 29
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 276,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 275,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 239,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 235,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 234,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "medspa-sangabriel", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Med Spa Local SEO — San Gabriel, CA" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 287,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 291,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "Increase local foot traffic to high-end med spa",
                "Generate organic leads to the clinic"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 292,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Action Plan" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 297,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "Local GBP work — posting, optimization, citations",
                "Onsite content production",
                "Technical SEO — product schema, foundational work",
                "Conversion Rate Optimization"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 298,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Performance Highlights" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 305,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(P, { children: "This high-end med spa in San Gabriel, CA achieved exceptional year-over-year growth after 6–9 months of consistent AI SEO." }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 306,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Key Metrics" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 308,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "Users: 6,024 (+552.7% YOY)",
                "Sessions: 6,924 (+584.2% YOY)",
                "Phone calls (GBP): 190 (+75.9% YOY)",
                "Website visits (GBP): 224 (+6.7% YOY)",
                "Direction requests (GBP): 302 (+64.1% YOY)"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 309,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Rankings (San Gabriel, CA)" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 317,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(BulletList, { items: [
                "skin laser for acne scars → #1 (started >100)",
                "laser skin treatment → #1 (started >100, SV: 14,800)",
                "skincare treatment for acne scars → #1 (started >100)",
                "hair removal laser for men → #2 (started >100, SV: 9,900)",
                "skin treatment → #3 (started >100, SV: 14,800)",
                "skincare → #8 (started #28, SV: 1,000,000)",
                "hair removal → #6 (started #10, SV: 90,500)"
              ] }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 318,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/AI-SEO-Med-Spa-Case-Study-San-Gabriel-CA.pdf" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 328,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 331,
                columnNumber: 29
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 330,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 329,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 290,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 286,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 285,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "google-ppc", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(MousePointerClick, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 349,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 349,
              columnNumber: 60
            }, void 0),
            " PPC Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 348,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Google PPC Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 351,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights Google Ads campaign performance for a med spa client, with a focus on lead generation efficiency, conversion volume, and cost-per-lead optimization." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 354,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 347,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 346,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 345,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 363,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: ppcSummaryCards.map((card, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 369,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 370,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 371,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 368,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 377,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                  fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                  lineNumber: 378,
                  columnNumber: 29
                }, void 0)
              ] }, mIndex, true, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 376,
                columnNumber: 27
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 374,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 373,
                columnNumber: 21
              }, void 0)
            ] }, index, true, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 367,
              columnNumber: 19
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 365,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Study" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 387,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
                lineNumber: 388,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 386,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 364,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 362,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
            "Med Spa ",
            /* @__PURE__ */ jsxDEV(GoogleColoredText, {}, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 399,
              columnNumber: 29
            }, void 0),
            " Ads — San Ramon, CA"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 398,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 402,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Generate inbound call leads at lowest possible cost",
              "Increase conversion volume and conversion rate",
              "Optimize ad spend efficiency across multiple service lines"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 403,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Strategy" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 409,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "4 campaigns running: 3 Search + 1 Display",
              "Services: general med spa + hormone/thyroid/weight loss + injectables",
              "Daily budgets: $5–$27 per campaign",
              "All conversions tracked as inbound call leads"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 410,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "All-Time Performance" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 417,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Total spend: $42,224.51",
              "Total clicks: 16,526",
              "Total conversions: 2,577 (all call leads)",
              "CPA: $16.39",
              "Conversion rate: 15.59%"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 418,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Last 30 Days" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 426,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Spend: $2,015.35",
              "Conversions: 119 (+48.8%)",
              "CPA: $16.94 (-31.1%)",
              "CVR: 17.95% (+68.3%)"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 427,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/PPC_Med_Spa_-_Case_Study-San_Ramon-CA.pdf", title: "View Full PPC Case Study Report" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 434,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 437,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 436,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
              lineNumber: 435,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 401,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 397,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 396,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 395,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 394,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 344,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about med spa marketing case studies and strategy.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my med spa?", answer: "Yes. Every med spa starts from a different baseline, market, and competitive environment. The same strategic approach behind these case studies can be adapted to your practice. We conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "How long does it take to see results from AI SEO?", answer: "Most med spa clients see measurable improvement in Google Business Profile visibility within 60 to 90 days. Significant organic traffic growth typically develops over 4 to 6 months." },
            { question: "How much do SEO and PPC services cost?", answer: "Pricing depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth. We begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow for Your Med Spa?",
            description: "GrowSmallBiz can help identify where AI SEO or Google Ads improvements can drive more consultations and treatment bookings.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 448,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "What These Case Studies Show" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 468,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Across med spa campaigns, the pattern is consistent — practices that invest in structured local visibility and high-intent search strategy see measurable improvements in consultations, calls, and treatment bookings over time." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 472,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Whether through AI SEO, Google Ads, or a combination of both, the goal is connecting visibility to real business outcomes — filled treatment rooms and predictable revenue." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
            lineNumber: 473,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 471,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 467,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 466,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 465,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        PersonCTA,
        {
          title: "Ready to Fill Your Treatment Rooms?",
          description: "Schedule a strategy call to see how AI SEO, Google Ads, and GBP management can grow your med spa patient base.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategySessionUrl
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 480,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 488,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
          lineNumber: 489,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 487,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
        lineNumber: 492,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
      lineNumber: 494,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/MedSpaCaseStudy.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, void 0);
};
export {
  MedSpaCaseStudy as default
};
