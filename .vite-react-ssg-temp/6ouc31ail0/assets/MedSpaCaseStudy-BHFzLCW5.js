import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { G as GoogleColoredText } from "./GoogleColoredText-CAcHXaI3.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-BO4gJY0h.js";
import { Search, MousePointerClick, TrendingUp, ChevronDown } from "lucide-react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-9cq_VkaS.js";
import { useState, useRef, useEffect } from "react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { S as ServiceHero } from "./ServiceHero-Z03OcfAP.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { P as PersonCTA } from "./PersonCTA-CEFUSvtj.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import "react-router-dom";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const medSpaHero = "/assets/case-study-medspa-hero-SMEIX03d.webp";
const P = ({ children }) => /* @__PURE__ */ jsx("p", { className: "text-foreground/85 leading-relaxed", children });
const SubHead = ({ children }) => /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children });
const DetailLabel = ({ children }) => /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children });
const BulletList = ({ items }) => /* @__PURE__ */ jsx("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }),
  /* @__PURE__ */ jsx("span", { children: item })
] }, i)) });
const PdfBlock = ({ src, title }) => /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: title || "View Full Case Study Report" }),
  /* @__PURE__ */ jsx(PdfViewer, { src })
] });
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Real Results for Med Spa Businesses — Not Projections | GrowSmallBiz Digital Marketing" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Documented AI SEO and Google Ads results for med spa clients — organic traffic growth, keyword rankings, Google Business Profile performance, cost-per-lead, and conversion metrics." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/" })
    ] }),
    /* @__PURE__ */ jsx(
      ArticleJsonLd,
      {
        headline: "Real Results for Med Spa Businesses — Not Projections",
        description: "Documented AI SEO and Google Ads results for med spa clients.",
        url: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Med Spa Marketing", url: "/health-and-wellness-practices/marketing-for-med-spas/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + PPC" },
          title: "Real Results for Med Spa Businesses — Not Projections",
          subtitle: "Explore documented campaign results for med spa clients across AI SEO and Google Ads. This page showcases real proof drawn from Google Analytics, Google Search Console, Google Business Profile data, and Google Ads account performance.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: medSpaHero,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx("div", { ref: navRef, className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 py-3", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => scrollTo("local-seo"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "local-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsx(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
          "Local SEO Results"
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => scrollTo("google-ppc"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "google-ppc" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsx(MousePointerClick, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
          /* @__PURE__ */ jsx(GoogleColoredText, {}),
          " PPC Results"
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            "Local SEO Case Studies"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "Local SEO ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights AI SEO campaign performance for med spa clients, with a focus on Google Business Profile visibility, organic search growth, keyword movement, and lead generation." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: seoSummaryCards.map((card, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: metric })
              ] }, mIndex)) }) })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-primary" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6", children: [
            "Consistent Local SEO ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Methodology" }),
            " Across Med Spa Campaigns"
          ] }),
          /* @__PURE__ */ jsx(P, { children: "Across these campaigns, the work consistently included Google Business Profile optimization, localized content creation, technical SEO improvements, on-page optimization, and citation building — designed to improve rankings, GBP visibility, and engagement for high-intent med spa searches." })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "medspa-socal", className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg", children: "Med Spa AI SEO — Pleasanton, CA" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "medspa-sangabriel", className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg", children: "Med Spa Local SEO — San Gabriel, CA" })
          ] }),
          /* @__PURE__ */ jsx(TabsContent, { value: "medspa-socal", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Med Spa AI SEO — Pleasanton, CA" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
                "Enhance keyword performance",
                "Increase engagement and visibility",
                "20–40% increase in conversions and goal completions"
              ] }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
                "Keyword identification and tracking setup",
                "Page title, meta description, and H1 optimization across top 10 pages",
                "Google Business Profile optimization and GMB posting",
                "Monthly content creation and technical SEO audits",
                "Citation building"
              ] }),
              /* @__PURE__ */ jsx(SubHead, { children: "Performance Highlights" }),
              /* @__PURE__ */ jsx(P, { children: "This med spa client in Pleasanton, CA experienced significant organic search growth over a 9-month AI SEO campaign (January 2023 – September 2023)." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Key Metrics" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
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
              ] }),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/A-SEO-Med-Spa-Case-Study-Pleasanton-CA.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "medspa-sangabriel", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Med Spa Local SEO — San Gabriel, CA" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
                "Increase local foot traffic to high-end med spa",
                "Generate organic leads to the clinic"
              ] }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
                "Local GBP work — posting, optimization, citations",
                "Onsite content production",
                "Technical SEO — product schema, foundational work",
                "Conversion Rate Optimization"
              ] }),
              /* @__PURE__ */ jsx(SubHead, { children: "Performance Highlights" }),
              /* @__PURE__ */ jsx(P, { children: "This high-end med spa in San Gabriel, CA achieved exceptional year-over-year growth after 6–9 months of consistent AI SEO." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Key Metrics" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
                "Users: 6,024 (+552.7% YOY)",
                "Sessions: 6,924 (+584.2% YOY)",
                "Phone calls (GBP): 190 (+75.9% YOY)",
                "Website visits (GBP): 224 (+6.7% YOY)",
                "Direction requests (GBP): 302 (+64.1% YOY)"
              ] }),
              /* @__PURE__ */ jsx(SubHead, { children: "Keyword Rankings (San Gabriel, CA)" }),
              /* @__PURE__ */ jsx(BulletList, { items: [
                "skin laser for acne scars → #1 (started >100)",
                "laser skin treatment → #1 (started >100, SV: 14,800)",
                "skincare treatment for acne scars → #1 (started >100)",
                "hair removal laser for men → #2 (started >100, SV: 9,900)",
                "skin treatment → #3 (started >100, SV: 14,800)",
                "skincare → #8 (started #28, SV: 1,000,000)",
                "hair removal → #6 (started #10, SV: 90,500)"
              ] }),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/AI-SEO-Med-Spa-Case-Study-San-Gabriel-CA.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "google-ppc", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(MousePointerClick, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx(GoogleColoredText, {}),
            " PPC Case Studies"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            /* @__PURE__ */ jsx(GoogleColoredText, {}),
            " PPC ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights Google Ads campaign performance for a med spa client, with a focus on lead generation efficiency, conversion volume, and cost-per-lead optimization." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: ppcSummaryCards.map((card, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: metric })
              ] }, mIndex)) }) })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Study" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-primary" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
            "Med Spa ",
            /* @__PURE__ */ jsx(GoogleColoredText, {}),
            " Ads — San Ramon, CA"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Generate inbound call leads at lowest possible cost",
              "Increase conversion volume and conversion rate",
              "Optimize ad spend efficiency across multiple service lines"
            ] }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Campaign Strategy" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "4 campaigns running: 3 Search + 1 Display",
              "Services: general med spa + hormone/thyroid/weight loss + injectables",
              "Daily budgets: $5–$27 per campaign",
              "All conversions tracked as inbound call leads"
            ] }),
            /* @__PURE__ */ jsx(SubHead, { children: "All-Time Performance" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Total spend: $42,224.51",
              "Total clicks: 16,526",
              "Total conversions: 2,577 (all call leads)",
              "CPA: $16.39",
              "Conversion rate: 15.59%"
            ] }),
            /* @__PURE__ */ jsx(SubHead, { children: "Last 30 Days" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Spend: $2,015.35",
              "Conversions: 119 (+48.8%)",
              "CPA: $16.94 (-31.1%)",
              "CVR: 17.95% (+68.3%)"
            ] }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/PPC_Med_Spa_-_Case_Study-San_Ramon-CA.pdf", title: "View Full PPC Case Study Report" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(
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
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: [
          "What These ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" }),
          " Show"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsx("p", { children: "Across med spa campaigns, the pattern is consistent — practices that invest in structured local visibility and high-intent search strategy see measurable improvements in consultations, calls, and treatment bookings over time." }),
          /* @__PURE__ */ jsx("p", { children: "Whether through AI SEO, Google Ads, or a combination of both, the goal is connecting visibility to real business outcomes — filled treatment rooms and predictable revenue." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Ready to Fill Your Treatment Rooms?",
          description: "Schedule a strategy call to see how AI SEO, Google Ads, and GBP management can grow your med spa patient base.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategySessionUrl
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }),
        /* @__PURE__ */ jsx("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." })
      ] }),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  MedSpaCaseStudy as default
};
