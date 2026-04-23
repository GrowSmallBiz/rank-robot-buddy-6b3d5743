import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { A as ArticleJsonLd, P as PdfViewer } from "./PdfViewerWrapper-BO4gJY0h.js";
import { Search, TrendingUp, ChevronDown } from "lucide-react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-9cq_VkaS.js";
import { useState } from "react";
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
const P = ({ children }) => /* @__PURE__ */ jsx("p", { className: "text-foreground/85 leading-relaxed", children });
const SubHead = ({ children }) => /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children });
const DetailLabel = ({ children }) => /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children });
const BulletList = ({ items }) => /* @__PURE__ */ jsx("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }),
  /* @__PURE__ */ jsx("span", { children: item })
] }, i)) });
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }),
  /* @__PURE__ */ jsx(PdfViewer, { src })
] });
const CleaningServices = () => {
  const [activeTab, setActiveTab] = useState("cleaning-atlanta");
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Real Results for Cleaning Service Businesses — Not Projections | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "See how GrowSmallBiz helped cleaning service businesses grow their client base with AI-powered digital marketing. Real results, real businesses." }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore documented local SEO case study results for cleaning service businesses. Real proof from Google Business Profile visibility, organic search growth, keyword movement, local pack performance, website clicks, calls, and conversion-focused lead generation strategy."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/" })
    ] }),
    /* @__PURE__ */ jsx(
      ArticleJsonLd,
      {
        headline: "Real Results for Cleaning Service Businesses — Not Projections",
        description: "Explore documented local SEO case study results for cleaning service businesses.",
        url: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/",
        datePublished: "2025-01-15",
        breadcrumbs: [
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Cleaning Services", url: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO" },
          title: "Real Results for Cleaning Service Businesses — Not Projections",
          subtitle: "Explore documented local SEO case study results for cleaning service businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, local pack performance, website clicks, calls, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Schedule Strategy Call", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 py-3", children: /* @__PURE__ */ jsxs(
        "button",
        {
          className: "px-5 py-2.5 rounded-full text-sm font-display font-semibold bg-primary text-primary-foreground shadow-md",
          children: [
            /* @__PURE__ */ jsx(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
            "Local SEO Results"
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ jsxs("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            "Local SEO Results"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "Local SEO ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for cleaning service businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto", children: summaryCards.map((card, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-5", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: metric })
                  ] }, mIndex)) }) })
                ]
              },
              index
            )) }),
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
            " Across Cleaning Service Campaigns"
          ] }),
          /* @__PURE__ */ jsx(P, { children: "Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, internal linking improvements, and technical SEO enhancements designed to improve rankings, engagement, and lead generation for high-intent cleaning service businesses." })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "cleaning-atlanta",
                className: "flex-1 min-w-[140px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Cleaning Service — Atlanta"
              }
            ),
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "house-cleaners-nyc",
                className: "flex-1 min-w-[140px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "House Cleaners — NYC"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(TabsContent, { value: "cleaning-atlanta", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Cleaning Service — Atlanta" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
              /* @__PURE__ */ jsx(
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
                }
              ),
              /* @__PURE__ */ jsx(P, { children: "Here is the campaign performance summary for this cleaning service business. Organic search accounted for 560 out of 1,527 users, or 36.67%, and 695 out of 1,813 sessions, or 38.33%, during August through November 2023. Ahrefs also showed an increasing organic traffic trend over the last couple of months." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console" }),
              /* @__PURE__ */ jsx(P, { children: "Total clicks in August through November 2023 increased by 261.20% compared to April through July 2023. Impressions also improved by 868.02% over the same comparison period." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Google Business Profile" }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "GBP Profile Interactions" }),
              /* @__PURE__ */ jsx(P, { children: "Google Business Profile interactions increased by 116.0% in August through November 2023 compared to the same period in the previous year." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "GBP Calls" }),
              /* @__PURE__ */ jsx(P, { children: "Calls increased by 114.8% in August through November 2023 compared to the previous year's GBP calls." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "GBP Website Clicks" }),
              /* @__PURE__ */ jsx(P, { children: "Website clicks increased by 119.3% in August through November 2023 compared to August through November 2022." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Keyword" }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Tracked Keyword" }),
              /* @__PURE__ */ jsx(P, { children: 'For tracked keywords, "cleaning services Atlanta" improved by 12 positions in organic desktop and 15 positions in organic mobile.' }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "LSI Keyword" }),
              /* @__PURE__ */ jsx(P, { children: "The website also gained a strong set of additional LSI keywords, showing broader topical relevance and improved keyword footprint." }),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/ai-seo-cleaning-service-case-study.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "house-cleaners-nyc", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "House Cleaners — NYC" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Client" }),
              /* @__PURE__ */ jsx(P, { children: "This is a home cleaning company in NYC — one of the most competitive cities in America. They were a brand new business struggling to get leads in." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Niche" }),
              /* @__PURE__ */ jsx(P, { children: "House Cleaners" }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "The Solution" }),
              /* @__PURE__ */ jsx(P, { children: "We revised the internal linking strategy on the site to push forward rankings for the main pages. We also added technical improvements, including advanced Schema Markup, to capture more real estate on the SERPs and attract high-quality traffic that will convert." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "The Results" }),
              /* @__PURE__ */ jsx(P, { children: "Our efforts greatly impacted organic keyword saturation and traffic in the first 90 days. This creates a stronger foundation for better conversions as the campaign moves into the next quarter of optimization." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Keyword Growth Snapshot" }),
              /* @__PURE__ */ jsx(P, { children: "By July 8, 2023, Ahrefs showed 1,409 total ranking keywords, including 102 keywords in positions 11–20, 56 keywords in positions 4–10, and 6 keywords in positions 1–3." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Organic Traffic Snapshot" }),
              /* @__PURE__ */ jsx(P, { children: "Ahrefs showed organic traffic at 366 by July 18, 2023, reflecting strong upward movement for a new business in a competitive market." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Local Visibility Highlights" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    '"housemaid services near me" reached Local Finder position 15 with a gain of 35 positions',
                    '"cleaning services near me" reached Local Finder position 4 with a gain of 1 position',
                    '"home cleaning service" reached Local Pack position 3 and Local Finder position 3',
                    '"maid cleaning service" reached Local Finder position 5 with a gain of 1 position',
                    '"move out cleaning" reached Local Pack position 2 and Local Finder position 1 with a gain of 1 position'
                  ]
                }
              ),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/ai-seo-home-cleaning-company-case-study.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(
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
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: [
          "What These ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" }),
          " Show"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsx("p", { children: "Across cleaning service campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, and lead flow over time." }),
          /* @__PURE__ */ jsx("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for cleaning services." }),
          /* @__PURE__ */ jsx("p", { children: "Through Local SEO, the goal is not just visibility — it is connecting that visibility to real business outcomes." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path." })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Let's Build Your Growth Engine",
          description: "If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call.",
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
  CleaningServices as default
};
