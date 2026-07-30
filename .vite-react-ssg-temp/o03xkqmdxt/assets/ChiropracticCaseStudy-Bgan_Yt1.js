import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-Cu7HOm3D.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const chiroHero = "/assets/case-study-chiro-hero-Dem0YDLc.webp";
const P = ({ children }) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 leading-relaxed", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
  lineNumber: 24,
  columnNumber: 3
}, void 0);
const SubHead = ({ children }) => /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
  lineNumber: 27,
  columnNumber: 3
}, void 0);
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxDEV("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
  lineNumber: 30,
  columnNumber: 3
}, void 0);
const BulletList = ({ items }) => /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, void 0)
] }, i, true, {
  fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
  lineNumber: 35,
  columnNumber: 7
}, void 0)) }, void 0, false, {
  fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
  lineNumber: 33,
  columnNumber: 3
}, void 0);
const PdfBlock = ({ src, title }) => /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: title || "View Full Case Study Report" }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(PdfViewer, { src }, void 0, false, {
    fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
  lineNumber: 43,
  columnNumber: 3
}, void 0);
const seoSummaryCards = [
  { metric: "+138.8%", label: "Users — Organic Search (GA4)" },
  { metric: "+32.99%", label: "Total Clicks (Google Search Console)" },
  { metric: "#1", label: "Emergency Chiropractic Care (Desktop + Mobile)" }
];
const gbpSummaryCards = [
  { metric: "1,694", label: "Total GBP Interactions (Mar–Jun 2023)" },
  { metric: "+1.1%", label: "Profile Interactions YOY" },
  { metric: "+33.4%", label: "GBP Website Visits YOY" }
];
const ChiropracticCaseStudy = () => {
  const [activeSection, setActiveSection] = useState("ai-seo");
  const navRef = useRef(null);
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  useEffect(() => {
    const handleScroll = () => {
      const seoSection = document.getElementById("ai-seo");
      const gbpSection = document.getElementById("gbp-results");
      if (seoSection && gbpSection) {
        const gbpTop = gbpSection.getBoundingClientRect().top;
        setActiveSection(gbpTop <= 120 ? "gbp-results" : "ai-seo");
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
      /* @__PURE__ */ jsxDEV("title", { children: "Chiropractic Marketing Case Study: Real Results for Local Practices" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Chiropractic AI Marketing Case Study: GrowSmallBiz increased organic traffic & rankings for a chiropractic practice. See the results!" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "chiropractic marketing, digital marketing for chiropractors, marketing case study, local service marketing, GrowSmallBiz, AI-powered marketing solutions, organic traffic growth, Google Business Profile optimization" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Boost Local Business Growth with AI-Driven SEO Solutions" }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ArticleJsonLd,
      {
        headline: "Real Results for Chiropractic Practices — Not Projections",
        description: "Documented AI SEO results for a chiropractic practice.",
        url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Chiropractic Marketing", url: "/health-and-wellness-practices/marketing-for-chiropractors/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 98,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + GBP" },
          title: "Real Results for Chiropractic Practices — Not Projections",
          subtitle: "Explore documented AI SEO results for a chiropractic practice across Google Analytics, Google Search Console, and Google Business Profile. 5-month campaign with verified data across all three measurement sources.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: chiroHero,
          overlayOpacity: 85
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 112,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { ref: navRef, className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 py-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("ai-seo"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "ai-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, void 0),
          "AI SEO + GSC Results"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("gbp-results"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "gbp-results" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, void 0),
          "Google Business Profile Results"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "ai-seo", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, void 0),
            "Local SEO Case Studies"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "AI SEO + Search Console Case Studies" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights organic search campaign performance for a chiropractic practice, combining Google Analytics traffic data and Google Search Console click and impression metrics from a 5-month AI SEO campaign." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 140,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto", children: seoSummaryCards.map((card, index) => /* @__PURE__ */ jsxDEV("div", { className: "text-center p-6 bg-card border border-border rounded-2xl card-hover", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: card.metric }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
                lineNumber: 161,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium", children: card.label }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
                lineNumber: 162,
                columnNumber: 21
              }, void 0)
            ] }, index, true, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 158,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Study" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
                lineNumber: 167,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Chiropractic AI SEO — Tracy, CA" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 178,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Campaign Summary" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(P, { children: "Month 1 onboarding: keyword identification and tracking, page title/meta/H1 optimization, Google Business Profile setup, and technical SEO foundation. Months 2–5: ongoing content creation, citation building, GBP posting, and performance monitoring." }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(DetailLabel, { children: "Goals" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Increase organic search visibility and traffic",
              "Improve Google Search Console click and impression performance",
              "Achieve top rankings for high-intent chiropractic searches"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 186,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Analytics Results (5-Month Campaign)" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 192,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Users from organic search: +138.8%",
              "New users from organic search: +136.7%",
              "Sessions from organic search: +120.5%"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 193,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Google Search Console Results" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 199,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Total clicks: +32.99%",
              "Total impressions: +18.2%",
              "Average CTR improvement noted"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 200,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(SubHead, { children: "Keyword Rankings" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 206,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              '"emergency chiropractic care" → #1 (Desktop + Mobile)',
              '"chiropractor near me" — significant improvement',
              '"back pain chiropractor" — first page achieved'
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/AI-SEO-Chiropractic-Case-Study-Tracy-CA.pdf" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 213,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 216,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 215,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 214,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 177,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { id: "gbp-results", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 232,
              columnNumber: 19
            }, void 0),
            "Google Business Profile Results"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 231,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Google Business Profile Performance" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 234,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "GBP performance data from March 2023 – June 2023, compared against March 2022 – June 2022." }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 228,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 246,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto", children: gbpSummaryCards.map((card, index) => /* @__PURE__ */ jsxDEV("div", { className: "text-center p-6 bg-card border border-border rounded-2xl card-hover", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: card.metric }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium", children: card.label }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 252,
              columnNumber: 21
            }, void 0)
          ] }, index, true, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 250,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 248,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "GBP Metrics (March–June 2023 vs March–June 2022)" }, void 0, false, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 264,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV(BulletList, { items: [
              "Business profile interactions: 1,694 total (+1.1% YOY)",
              "GBP website visits: 399 clicks (+33.4% YOY)",
              "Calls from Business Profile: 905 (-1.8% YOY)"
            ] }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 268,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-muted/30 border border-border rounded-xl mt-6", children: /* @__PURE__ */ jsxDEV(P, { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "Note about GBP calls:" }, void 0, false, {
                fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
                lineNumber: 276,
                columnNumber: 25
              }, void 0),
              " The calls metric showed a slight decrease (-1.8% YOY) during this period. The team was actively improving GBP posts, optimizing the listing, and building citations to improve this metric."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 275,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 274,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(PdfBlock, { src: "/case-studies/AI-SEO-Chiropractic-Case-Study-Tracy-CA.pdf", title: "View Full Case Study Report" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 280,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsxDEV("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 283,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 282,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
              lineNumber: 281,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 263,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 262,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 260,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about chiropractic marketing case studies and strategy.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my chiropractic practice?", answer: "Yes. Every practice starts from a different baseline. The same strategic approach behind this case study can be adapted to your chiropractic business. We conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "How long does it take to see results from AI SEO?", answer: "Most chiropractic clients see measurable improvement in Google Business Profile visibility within 60 to 90 days. Significant organic traffic growth typically develops over 4 to 6 months." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow for Your Chiropractic Practice?",
            description: "GrowSmallBiz can help identify where AI SEO and GBP improvements can drive more patient bookings.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 294,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent", children: "Ready to Build Your Chiropractic Practice?" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 313,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: /* @__PURE__ */ jsxDEV("p", { children: "Schedule a strategy call to see how AI SEO, Google Ads, and GBP management can grow your chiropractic patient base." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 317,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 316,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 312,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 310,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        PersonCTA,
        {
          title: "Let's Build Your Growth Engine",
          description: "If you want clearer strategy, stronger visibility, and more patient bookings, start with a free strategy call.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategySessionUrl
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 324,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 332,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
          lineNumber: 333,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
        lineNumber: 336,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
      lineNumber: 338,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/case-studies/ChiropracticCaseStudy.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, void 0);
};
export {
  ChiropracticCaseStudy as default
};
