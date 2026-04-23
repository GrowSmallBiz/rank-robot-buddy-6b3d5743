import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { G as GoogleColoredText } from "./GoogleColoredText-CAcHXaI3.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-BO4gJY0h.js";
import { MousePointerClick, ChevronDown } from "lucide-react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { S as ServiceHero } from "./ServiceHero-Z03OcfAP.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { P as PersonCTA } from "./PersonCTA-CEFUSvtj.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import "react";
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
const dentalHero = "/assets/case-study-dental-hero-DobVLtnf.webp";
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
const ppcSummaryCards = [
  { metric: "+175.51%", label: "Conversions YOY", subtext: "135 vs 49" },
  { metric: "-64.62%", label: "Cost Per Acquisition", subtext: "$39.81 vs $112.52" },
  { metric: "+187.04%", label: "Conversion Rate", subtext: "26.89% vs 9.37%" }
];
const DentalCaseStudy = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Real Results for Dental Practices — Not Projections | GrowSmallBiz Digital Marketing" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Documented Google Ads results for a dental practice — conversions, cost-per-acquisition, conversion rate, and CTR improvements year-over-year." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" })
    ] }),
    /* @__PURE__ */ jsx(
      ArticleJsonLd,
      {
        headline: "Real Results for Dental Practices — Not Projections",
        description: "Documented Google Ads results for a dental practice — conversions, cost-per-acquisition, conversion rate, and CTR improvements year-over-year.",
        url: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Dental Marketing", url: "/health-and-wellness-practices/marketing-for-dentists/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: MousePointerClick, text: "Case Studies / Google PPC" },
          title: "Real Results for Dental Practices — Not Projections",
          subtitle: "Explore documented Google Ads campaign results for a dental practice. Real campaign data — conversion volume, cost-per-acquisition, conversion rate, and click-through rate performance.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: dentalHero,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 py-3", children: /* @__PURE__ */ jsxs("button", { className: "px-5 py-2.5 rounded-full text-sm font-display font-semibold bg-primary text-primary-foreground shadow-md", children: [
        /* @__PURE__ */ jsx(MousePointerClick, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
        /* @__PURE__ */ jsx(GoogleColoredText, {}),
        " PPC Results"
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsx(MousePointerClick, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx(GoogleColoredText, {}),
          " PPC Case Studies"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
          /* @__PURE__ */ jsx(GoogleColoredText, {}),
          " Ads ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights paid search campaign performance for a dental practice, with a focus on lead generation efficiency, cost-per-acquisition, conversion volume, and year-over-year improvement." })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto", children: ppcSummaryCards.map((card, index) => /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-card border border-border rounded-2xl card-hover", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-2", children: card.metric }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium mb-1", children: card.label }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "(",
              card.subtext,
              ")"
            ] })
          ] }, index)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Study" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-primary" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
          "Dental Practice ",
          /* @__PURE__ */ jsx(GoogleColoredText, {}),
          " Ads — Concord, CA"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx(DetailLabel, { children: "Problem" }),
          /* @__PURE__ */ jsx(P, { children: "This dental practice was heavily investing in Google Ads but not achieving efficient results. The main focus was getting non-branded conversions for general dentistry and attracting high-value patients needing implants (all-in-4 treatment at approximately $17,000 per case)." }),
          /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
          /* @__PURE__ */ jsx(BulletList, { items: [
            "Increase total number of leads",
            "Improve proportion of high-value implant and all-in-4 inquiries",
            "Reduce cost-per-acquisition"
          ] }),
          /* @__PURE__ */ jsx(DetailLabel, { children: "Campaign Strategy" }),
          /* @__PURE__ */ jsx(BulletList, { items: [
            "Full audit of existing Google Ads account — identified ad spend waste and bidding inefficiencies",
            "Rebuilt general dentistry campaign with stronger CTAs for higher CTR",
            "Created call-only campaign to drive direct phone call conversions",
            "Built dedicated implants and all-in-4 campaign for high-value patients",
            "Implemented extensive negative keyword list to eliminate irrelevant clicks",
            "Tested ad extensions to identify highest-performing combinations"
          ] }),
          /* @__PURE__ */ jsx(SubHead, { children: "Q4 Year-Over-Year Results" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-foreground font-semibold", children: "Metric" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-foreground font-semibold", children: "Prior Year Q4" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-foreground font-semibold", children: "Current Q4" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-foreground font-semibold", children: "Change" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "text-foreground/85", children: [
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Conversions" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "49" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "135" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-primary font-semibold", children: "+175.51%" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Cost Per Acquisition" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "$112.52" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "$39.81" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-primary font-semibold", children: "-64.62%" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Conversion Rate" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "9.37%" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "26.89%" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-primary font-semibold", children: "+187.04%" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Account CTR" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "1.68%" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "3.82%" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-primary font-semibold", children: "+127.25%" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Phone Calls" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Baseline" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "194" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-primary font-semibold", children: "+223.33%" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "Total Ad Spend" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "—" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "$5,487.27" }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: "—" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(SubHead, { children: "Verified Key Takeaway" }),
          /* @__PURE__ */ jsx(P, { children: "Campaign restructuring, call-only strategy, and negative keyword management more than doubled conversions while cutting cost-per-acquisition by nearly two-thirds. The implants and all-in-4 campaign created a new high-value lead stream." }),
          /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/Google-PPC-Dental_-Case-Study-Concord-CA.pdf", title: "View Full PPC Case Study Report" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about dental marketing case studies and strategy.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my dental practice?", answer: "Yes. Every dental practice starts from a different baseline. The same strategic approach behind this case study can be adapted to your practice. We conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "How much do Google Ads services cost?", answer: "Pricing depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required. We begin with a complimentary audit to determine the likely cost and ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow for Your Dental Practice?",
            description: "GrowSmallBiz can help identify where Google Ads improvements can drive more patient bookings.",
            tagline: "Get clarity on your conversion performance and ad spend efficiency."
          })
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: [
          "What This ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Study" }),
          " Shows"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: /* @__PURE__ */ jsx("p", { children: "This dental practice case study demonstrates how a structured Google Ads strategy — combining campaign restructuring, call-only campaigns, and negative keyword management — can dramatically improve conversion volume while cutting acquisition costs." }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Ready to Grow Your Dental Practice?",
          description: "Schedule a strategy call to see how Google Ads optimization can drive more patients to your practice.",
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
  DentalCaseStudy as default
};
