import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-BO4gJY0h.js";
import { Search, MapPin, ChevronDown } from "lucide-react";
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
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const chiroHero = "/assets/case-study-chiro-hero-Dem0YDLc.webp";
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Real Results for Chiropractic Practices — Not Projections | GrowSmallBiz Digital Marketing" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Documented AI SEO results for a chiropractic practice — organic traffic growth, keyword rankings, Google Search Console data, and Google Business Profile performance over 5 months." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" })
    ] }),
    /* @__PURE__ */ jsx(
      ArticleJsonLd,
      {
        headline: "Real Results for Chiropractic Practices — Not Projections",
        description: "Documented AI SEO results for a chiropractic practice.",
        url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Chiropractic Marketing", url: "/health-and-wellness-practices/marketing-for-chiropractors/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + GBP" },
          title: "Real Results for Chiropractic Practices — Not Projections",
          subtitle: "Explore documented AI SEO results for a chiropractic practice across Google Analytics, Google Search Console, and Google Business Profile. 5-month campaign with verified data across all three measurement sources.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: chiroHero,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx("div", { ref: navRef, className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 py-3", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => scrollTo("ai-seo"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "ai-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsx(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
          "AI SEO + GSC Results"
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => scrollTo("gbp-results"), className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "gbp-results" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`, children: [
          /* @__PURE__ */ jsx(MapPin, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
          "Google Business Profile Results"
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { id: "ai-seo", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            "Local SEO Case Studies"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "AI SEO + Search Console ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights organic search campaign performance for a chiropractic practice, combining Google Analytics traffic data and Google Search Console click and impression metrics from a 5-month AI SEO campaign." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto", children: seoSummaryCards.map((card, index) => /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-card border border-border rounded-2xl card-hover", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: card.metric }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: card.label })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Study" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-primary" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Chiropractic AI SEO — Tracy, CA" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Campaign Summary" }),
            /* @__PURE__ */ jsx(P, { children: "Month 1 onboarding: keyword identification and tracking, page title/meta/H1 optimization, Google Business Profile setup, and technical SEO foundation. Months 2–5: ongoing content creation, citation building, GBP posting, and performance monitoring." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Increase organic search visibility and traffic",
              "Improve Google Search Console click and impression performance",
              "Achieve top rankings for high-intent chiropractic searches"
            ] }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Analytics Results (5-Month Campaign)" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Users from organic search: +138.8%",
              "New users from organic search: +136.7%",
              "Sessions from organic search: +120.5%"
            ] }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console Results" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Total clicks: +32.99%",
              "Total impressions: +18.2%",
              "Average CTR improvement noted"
            ] }),
            /* @__PURE__ */ jsx(SubHead, { children: "Keyword Rankings" }),
            /* @__PURE__ */ jsx(BulletList, { items: [
              '"emergency chiropractic care" → #1 (Desktop + Mobile)',
              '"chiropractor near me" — significant improvement',
              '"back pain chiropractor" — first page achieved'
            ] }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/AI-SEO-Chiropractic-Case-Study-Tracy-CA.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "gbp-results", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            "Google Business Profile Results"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "Google Business Profile ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Performance" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "GBP performance data from March 2023 – June 2023, compared against March 2022 – June 2022." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto", children: gbpSummaryCards.map((card, index) => /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-card border border-border rounded-2xl card-hover", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: card.metric }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: card.label })
          ] }, index)) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "GBP Metrics (March–June 2023 vs March–June 2022)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(BulletList, { items: [
              "Business profile interactions: 1,694 total (+1.1% YOY)",
              "GBP website visits: 399 clicks (+33.4% YOY)",
              "Calls from Business Profile: 905 (-1.8% YOY)"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/30 border border-border rounded-xl mt-6", children: /* @__PURE__ */ jsxs(P, { children: [
              /* @__PURE__ */ jsx("strong", { children: "Note about GBP calls:" }),
              " The calls metric showed a slight decrease (-1.8% YOY) during this period. The team was actively improving GBP posts, optimizing the listing, and building citations to improve this metric."
            ] }) }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/AI-SEO-Chiropractic-Case-Study-Tracy-CA.pdf", title: "View Full Case Study Report" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(
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
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: [
          "Ready to Build Your ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Chiropractic Practice" }),
          "?"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: /* @__PURE__ */ jsx("p", { children: "Schedule a strategy call to see how AI SEO, Google Ads, and GBP management can grow your chiropractic patient base." }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Let's Build Your Growth Engine",
          description: "If you want clearer strategy, stronger visibility, and more patient bookings, start with a free strategy call.",
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
  ChiropracticCaseStudy as default
};
