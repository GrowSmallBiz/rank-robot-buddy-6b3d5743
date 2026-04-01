import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { u as useUtm, P as PageJsonLd, H as Header, B as Button, c as createContactCTA, F as Footer } from "../main.mjs";
import { Search, TrendingUp, ChevronDown } from "lucide-react";
import { P as PdfViewer } from "./PdfViewerWrapper-Cy6RhGQL.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DJSFYMaR.js";
import { useState } from "react";
import { S as ServiceHero } from "./ServiceHero-DkZ5LbCF.js";
import { C as ConsultationFormSection } from "./ConsultationFormSection-4DCBAAjl.js";
import { P as PersonCTA } from "./PersonCTA-Bt3waad_.js";
import { FAQSection } from "./FAQSection-BO0A5ebo.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@radix-ui/react-accordion";
const heroBg = "/assets/case-studies-home-remodeling-hero-bg-DWUDTjur.jpg";
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
const HomeRemodeling = () => {
  const [activeTab, setActiveTab] = useState("home-remodeling-long-term");
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Case Studies for Home Remodeling Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore documented Local SEO case study results for home remodeling and home renovation businesses. Real proof from Google Business Profile visibility, organic search growth, keyword movement, calls, conversions, and conversion-focused lead generation strategy."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/case-studies/home-remodeling/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Case Studies for Home Remodeling Businesses",
        description: "Explore documented Local SEO case study results for home remodeling and home renovation businesses.",
        Rl: "/case-studies/home-remodeling/",
        breadcrumbs: [
          { name: "Case Studies", url: "/case-studies/" },
          { name: "Home Remodeling", url: "/case-studies/home-remodeling/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO" },
          title: "Case Studies for Home Remodeling Businesses",
          subtitle: "Explore documented Local SEO case study results for home remodeling and home renovation businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, calls, conversions, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Book a Strategy Session", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
          "Local SEO Results"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
          "Local SEO ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for home remodeling businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: summaryCards.map((card, index) => /* @__PURE__ */ jsxs(
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
          " Across Home Remodeling Campaigns"
        ] }),
        /* @__PURE__ */ jsx(P, { children: "Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location and service signal improvements, content support, technical SEO enhancements, and geo-relevance improvements designed to strengthen rankings, engagement, and lead generation for high-intent home remodeling searches." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "home-remodeling-long-term",
              className: "flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Home Remodeling"
            }
          ),
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "home-renovation-organic",
              className: "flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Home Renovation"
            }
          ),
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "dallas-home-renovation",
              className: "flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Home Remodeling — Dallas"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "home-remodeling-long-term", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Home Remodeling — Long-Term SEO Campaign" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Enhance Keyword Performance",
                  "Increase Engagement and Visibility",
                  "20-40% increase in conversions / goal completions"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
            /* @__PURE__ */ jsx(
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
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Notable Improvements" }),
            /* @__PURE__ */ jsx(P, { children: "Here are some notable improvements from both the website and Google Business Profile metrics over the year-over-year comparison period:" }),
            /* @__PURE__ */ jsx(
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
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Analytics - KPIs" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Leads and Conversions" }),
            /* @__PURE__ */ jsx(P, { children: "Here is how conversions improved between June 1, 2022 - May 31, 2023 vs. June 1, 2021 - May 31, 2022. Overall goal completions, goal conversion rate, thank you goal, and phone call tracking increased. Goal completion increased by 366.67%, goal conversion rate increased by 304.78%, thank you goal increased by 960%, and phone call tracking increased by 88.89%." }),
            /* @__PURE__ */ jsx(P, { children: "From organic search, the goal conversion rate increased by 161.62%, and goal completions (the number of total conversions) increased by 125%." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Traffic Acquisition" }),
            /* @__PURE__ */ jsx(P, { children: "Here is the traffic acquisition per channel. Total users increased by 15.57%, total new users increased by 16.09%, and total sessions increased by 15.29%. However, there was a decrease in organic search for the number of users, new users, and sessions, and the strategy included follow-up recommendations to improve those metrics." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Page Views" }),
            /* @__PURE__ */ jsx(P, { children: "Page views and unique page views also increased. Page views increased by 9.17%, unique page views increased by 11.38%, average time on website pages increased by 13.66%, and the exit rate improved by 5.60%." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console KPIs" }),
            /* @__PURE__ */ jsx(P, { children: "There was also a major improvement in Google Search Console KPIs. Total clicks increased by 382.11% and total impressions increased by 375.10%." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Google Search Console Queries" }),
            /* @__PURE__ */ jsx(P, { children: "Here are the top 10 queries for the website:" }),
            /* @__PURE__ */ jsx(
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
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Keyword Rankings" }),
            /* @__PURE__ */ jsx(P, { children: "Over the past 12 months, keyword rankings also improved. The average Google position increased by 8 positions, there were 9 keyword movements, and 82 gained positional movement." }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Keyword Movement: The number of keywords that have moved. If a keyword has moved from 8th to 5th, this is counted as one keyword movement up.",
                  "Positional Movement: The number of positions that keywords have moved. If a keyword has moved from 8th to 5th, this is counted as three positions gained."
                ]
              }
            ),
            /* @__PURE__ */ jsx(P, { children: "A number of keywords rank in the top 10 of organic desktop, organic mobile, local pack, and local finder. Top keywords include:" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  '"high end remodeling" ranks 4th in organic desktop, 4th in organic mobile, 1st in local pack and 1st in local finder',
                  '"remodeling design services" ranks 4th in organic desktop, 7th in organic mobile, 1st in local pack, and 1st in local finder',
                  '"renovation design services" ranks 12th in organic desktop, 13th in organic mobile, 1st in local pack, and 1st in local finder',
                  '"design build bathroom remodel" ranks 16th in organic desktop, 17th in organic mobile, 1st in local pack, and 1st in local finder',
                  'Most of the "near me" keywords, like bathroom contractors near me, bathroom remodelers near me, kitchen design near me, and kitchen remodeling near me, are ranking 1st in both local pack and local finder'
                ]
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Business Profile" }),
            /* @__PURE__ */ jsx(P, { children: "Available data is from March 2023 to July 2023. Data is pulled directly from the Google Business Profile listing." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Google Business Profile Calls" }),
            /* @__PURE__ */ jsx(P, { children: "Google Business Profile calls increased by 15% in March - July 2023 compared to March - July 2022." }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/home-remodeling-case-study-1.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "home-renovation-organic", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Home Renovation — Organic Search Contribution Campaign" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Synopsis" }),
            /* @__PURE__ */ jsx(P, { children: "Despite the persistent challenges encountered in the home improvement industry, this campaign produced measurable SEO improvements in traffic contribution, visibility, conversion share, and local pack performance." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Notable Contributions (SEO)" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Organic search contributed to 754 or 27.66% of the total website users",
                  "Organic search contributed 739 or 27.12% of the total new users",
                  "Organic search contributed 952 or 31.69% of the total sessions",
                  "Organic search contributed 33 or 60% of the total thank you page completions",
                  "Most of the keywords tracked dominate the first and second rank in the local pack (map rankings)"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Notable Improvement (SEO)" }),
            /* @__PURE__ */ jsx(
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
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Analytics" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Traffic Acquisition" }),
            /* @__PURE__ */ jsx(P, { children: "Here is how the organic search channel performed in terms of traffic acquisition in December 2022 - July 2023. Organic search contributed to 754 or 27.66% of the total website users, 739 or 27.12% of the total new users, and 952 or 31.69% of the total sessions. Organic search also contributed 33 or 60% of the total thank you page completions." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Behavior" }),
            /* @__PURE__ */ jsx(P, { children: "Total page views of the website is 5720 and unique page views totaled 5,021." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Conversion" }),
            /* @__PURE__ */ jsx(P, { children: "The thank you page goal completions totaled to 55. Of those, 60% or 33 thank you page completions came from organic search." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console" }),
            /* @__PURE__ */ jsx(P, { children: "Total clicks for the whole campaign duration improved by 3.55%, total impressions improved by 7.56%, and the average position improved from 51.2 to 48.6." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Keywords" }),
            /* @__PURE__ */ jsx(P, { children: "There was keyword improvement across both local pack and local finder visibility." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Local Pack" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "bathroom remodeling service increased by 1 rank in the local pack",
                  "home design and remodeling service increased by 1 rank in the local pack",
                  "home renovation increased by 1 rank in the local pack",
                  "home renovation near me increased by 1 rank in the local pack"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Local Finder" }),
            /* @__PURE__ */ jsx(
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
              }
            ),
            /* @__PURE__ */ jsx(P, { children: "Most of the keywords tracked dominate the first and second rank in the local pack (map rankings)." }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/home-remodeling-case-study-2.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "dallas-home-renovation", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Dallas Home Renovation — Local Visibility Campaign" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Strategic Objective" }),
            /* @__PURE__ */ jsx(P, { children: "Increase local visibility and leads for a home renovation company in Dallas, TX." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Initial Insight" }),
            /* @__PURE__ */ jsx(P, { children: "This client needed to increase their presence in their service area across the Dallas-Ft. Worth area in order to increase the quantity of leads coming in." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Direction" }),
            /* @__PURE__ */ jsx(P, { children: "By optimizing the local listing and focusing on the two main services — kitchen remodeling and bathroom remodeling — visibility of the Google My Business listing increased by 96.2%, and clicks to the website increased by 85.2% year over year." }),
            /* @__PURE__ */ jsx(P, { children: "The local optimizations worked in tandem with a strategic content plan, solid foundational research and implementation, and technical SEO efforts." }),
            /* @__PURE__ */ jsx(P, { children: "Geographic markup was manually created and implemented to give Google more information about the location and services, which contributed to stronger ROI and profit impact." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Results" }),
            /* @__PURE__ */ jsx(P, { children: "The campaign produced a 151.8% increase in organic conversions year over year and a 393.3% increase in organic traffic year over year." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Campaign Outcome" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Increased local visibility across the Dallas-Ft. Worth service area",
                  "Stronger Google Business Profile presence",
                  "Higher website click volume from local search",
                  "Improved conversion performance from organic traffic",
                  "Better alignment between service pages, local intent, and geo-signals"
                ]
              }
            ),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/home-remodeling-case-study-3.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx(
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
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: [
          "What These ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" }),
          " Show"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsx("p", { children: "Across home remodeling campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, rankings, and lead flow over time." }),
          /* @__PURE__ */ jsx("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a remodeling business appears, competes, and converts in search environments where homeowners are actively looking for kitchen, bathroom, renovation, and design-build services." }),
          /* @__PURE__ */ jsx("p", { children: "The goal is not just better visibility. It is turning local search visibility into real business outcomes through better rankings, stronger Google Business Profile performance, higher-intent traffic, and clearer conversion paths." })
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
  HomeRemodeling as default
};
