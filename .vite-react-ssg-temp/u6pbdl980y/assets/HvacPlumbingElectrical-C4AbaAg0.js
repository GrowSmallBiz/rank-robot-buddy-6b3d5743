import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { u as useUtm, P as PageJsonLd, H as Header, B as Button, c as createContactCTA, F as Footer } from "../main.mjs";
import { Search, TrendingUp, ChevronDown } from "lucide-react";
import { P as PdfViewer } from "./PdfViewerWrapper-Cy6RhGQL.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DJSFYMaR.js";
import { useState } from "react";
import { S as ServiceHero } from "./ServiceHero-DkZ5LbCF.js";
import { C as ConsultationFormSection } from "./ConsultationFormSection-4DCBAAjl.js";
import { Link } from "react-router-dom";
import { P as PersonCTA } from "./PersonCTA-Bt3waad_.js";
import { FAQSection } from "./FAQSection-BO0A5ebo.js";
import { h as heroBg } from "./case-studies-hvac-hero-bg-Y8Mosd5X.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@radix-ui/react-accordion";
const summaryCards = [
  {
    title: "HVAC Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+30.23% Clicks",
      "+91.47% Impressions",
      "+58.7% GBP Direction Requests",
      "Strong local finder keyword gains"
    ]
  },
  {
    title: "HVAC & Plumbing Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+1395.2% Phone Calls",
      "+520% GMB Website Actions",
      "Significant improvement for top service keywords",
      "Core plumbing + location map pack rankings"
    ]
  },
  {
    title: "Electrical SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+485.11% New Organic Users",
      "+447.06% Users from Organic Search",
      "+252.69% Sessions from Organic Search",
      "+725% Key Events"
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
const LocalSEOHvacPlumbingElectrical = () => {
  const [activeTab, setActiveTab] = useState("hvac-sacramento");
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Local SEO Case Studies for HVAC, Plumbing & Electrical Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore documented Local SEO case study results for HVAC, plumbing, and electrical businesses. Real proof from Google Business Profile visibility, organic search growth, keyword movement, calls, and conversion-focused lead generation."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/case-studies/local-seo-service/hvac-plumbing-electrical/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Local SEO Case Studies for HVAC, Plumbing & Electrical Businesses",
        description: "Explore documented Local SEO case study results for HVAC, plumbing, and electrical businesses.",
        Rl: "/case-studies/local-seo-service/hvac-plumbing-electrical/",
        breadcrumbs: [
          { name: "Case Studies", url: "/case-studies/" },
          { name: "Local SEO", url: "/case-studies/local-seo-service/" },
          { name: "HVAC, Plumbing & Electrical", url: "/case-studies/local-seo-service/hvac-plumbing-electrical/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO" },
          title: "Local SEO Case Studies for HVAC, Plumbing & Electrical Businesses",
          subtitle: "Explore documented Local SEO case study results for HVAC, plumbing, and electrical businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, calls, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Book a Strategy Session", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-6 bg-card/50 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
        "Also see:",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical/", className: "text-primary hover:underline font-medium", children: "Google PPC Case Studies for HVAC, Plumbing & Electrical →" })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
          "Local SEO Case Studies"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
          "Local SEO ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for HVAC, plumbing, and electrical businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." })
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
          " Across Trades Campaigns"
        ] }),
        /* @__PURE__ */ jsx(P, { children: "Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation for high-intent service businesses." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "hvac-sacramento",
              className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "HVAC — Sacramento"
            }
          ),
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "hvac-plumbing-fairbanks",
              className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "HVAC & Plumbing — Fairbanks"
            }
          ),
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "electrical-oahu",
              className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
              children: "Electrical — Oahu"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "hvac-sacramento", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "HVAC — Sacramento" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Enhance Keyword Performance",
                  "Increase Engagement and Visibility",
                  "20-40% Lead Generation (combo of both GBP calls + onsite conversions (forms/calls depending on the tracking setup)"
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
            /* @__PURE__ */ jsx(P, { children: "We have used Ahrefs, a trusted third-party tool, to check a website's organic traffic performance. As seen, we have seen an increase in average organic traffic, average organic traffic value, and organic pages in April - July. In August, we saw a decline. This decline can be attributed to the recent August 2023 Core Update. To recover, we encourage updating pages with helpful content to improve the user experience on the website." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console" }),
            /* @__PURE__ */ jsx(P, { children: "Here is the website's Google Sarch Console metrics. In June - November 2023, total clicks increased by 30.23% and total impressions by 91.47%. The average position also improved from 42.6 to 38.7." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Business Profile" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "GBP Profile Interactions" }),
            /* @__PURE__ */ jsx(P, { children: "In July - November 2023, Google Business Profile interactions increased by 5.5% as compared to interactions in July - November 2022." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "GBP Calls" }),
            /* @__PURE__ */ jsx(P, { children: "In July - November 2023, Google Business Profile calls increased by 4.8% as compared to calls in July - November 2022." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "GBP Direction Requests" }),
            /* @__PURE__ */ jsx(P, { children: "In July - November 2023, Google Business Profile direction requests increased by 58.7% as compared to direction requests in July - November 2022." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Keyword" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Tracked Keyword" }),
            /* @__PURE__ */ jsx(P, { children: "Here are the improvements to the keywords we track. As seen, we had the following keyword position increase:" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "ac maintenance services increased by 21 positions in the local finder",
                  "ac installation service increased by 18 positions in the local finder",
                  "ac maintenance near me increased by 18 positions in local finder",
                  "ac service maintenance increased by 12 positions in local finder",
                  "ac repair services sacramento increased by 1 positions in local finder"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "LSI Keyword" }),
            /* @__PURE__ */ jsx(P, { children: "Additionally, here are the LSI keywords the website gained in addition to the ones we track. LSI (latent semantic indexing) keywords are words or phrases that are conceptually related to a target keyword." }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/hvac-sacramento-case-study.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "hvac-plumbing-fairbanks", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "HVAC & Plumbing — Fairbanks" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Synopsis" }),
            /* @__PURE__ */ jsx(P, { children: "This HVAC & Plumbing company was in dire need of leads when they came to us in May of 2021. In this industry, most leads are coming from GMB phone calls or Google Ads. We were brought on to improve their GMB visibility and lead generation." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Goal" }),
            /* @__PURE__ */ jsx(P, { children: "Qualified Leads & Conversions" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Extensive keyword research to find relevant keywords including competitive analysis",
                  "Optimize GMB profile from top to bottom",
                  "Built relevant niche and local citations",
                  "Optimized onsite for location signals",
                  "Posted weekly on their GMB profile to increase additional signals"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Outcome" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Significant improvement for top service keywords",
                  "Core plumbing + location map pack rankings",
                  "1395.2% increase in phone calls",
                  "520% increase in GMB actions to the website"
                ]
              }
            ),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/hvac-plumbing-fairbanks-case-study.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "electrical-oahu", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Electrical — Oahu" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Goal" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Enhance Keyword Performance",
                  "Increase Engagement and Visibility",
                  "20-40% increase in conversions/goal completions"
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
            /* @__PURE__ */ jsx(SubHead, { children: "Google Analytics" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "User Acquisition" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: December 2023–July 2024" }),
            /* @__PURE__ */ jsx(P, { children: "Here are the user acquisition metrics for the client's website. As seen, organic search is the channel that brings the highest number of new users to the website. Out of 711 new users, organic search contributed 45.29% of the total new users. 44.02% of new users' engaged sessions also came from organic search." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "COMPARISON" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: December 2023–March 2024 vs. April 2024–July 2024" }),
            /* @__PURE__ */ jsx(P, { children: "If we compare how our strategy improved, we can see an improvement in user acquisition metrics. Below is a comparison of the first half of the campaign vs. the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, new users from organic search increased by 485.11%, and new users' engaged sessions from organic search increased by 218.97%." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Traffic Acquisition" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: December 2023–July 2024" }),
            /* @__PURE__ */ jsx(P, { children: "Here are the traffic acquisition metrics for the client's website. Similar to the user acquisition metrics, organic search is the channel that brings the highest number of users and sessions to the website. Out of 711 users and 901 sessions, organic search contributed 46.13% of the total users and 46.84% of the total sessions. Additionally, organic search also contributed to 47.10% of engaged sessions. 43.09% of the total events and 53.62% of the total key events also came from organic search." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "COMPARISON" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: December 2023–March 2024 vs. April 2024–July 2024" }),
            /* @__PURE__ */ jsx(P, { children: "If we compare how our strategy improved, we can see an improvement in traffic acquisition metrics. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, users from organic search increased by 447.06%, sessions from organic search increased by 252.69%, and engaged sessions from organic search increased by 226.23%. Additionally, event counts improved by 851.94% and key events improved by 725%." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Clicks, Impressions, CTR and Position" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: December 2023–July 2024" }),
            /* @__PURE__ */ jsx(P, { children: "Here are the Google Search Console metrics for the client's website. In December 2023–July 2024, the website recorded 240 total clicks, 4.86K total impressions, 4.9% average click-through rates and 23.1 average positions." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "COMPARISON" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: December 2023–March 2024 vs. April 2024–July 2024" }),
            /* @__PURE__ */ jsx(P, { children: "If we compare how our strategy improved, we can see an improvement in the metrics measured in the Google Search Console. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, total clicks on the website increased by 63.73% from 91 to 149. Impressions of the website also increased by 185.71%, from 1.26K to 3.6K total impressions." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Keywords" }),
            /* @__PURE__ */ jsx(P, { children: "Here is the average Google position from December 2023–July 2024. We have seen an increase in March." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Organic Desktop Results (Tracked Keywords)" }),
            /* @__PURE__ */ jsx(P, { children: "Here are some recent improvements to the keywords we track. For organic desktop, we saw an increase in the following keywords:" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "fan installation oahu increased by 5 positions on organic desktop",
                  "house fan installation oahu increased by 4 positions on organic desktop",
                  "light fixture installer oahu increased by 1 position on organic desktop",
                  "electrical service upgrades oahu increased by 1 position on organic desktop",
                  "electrical service upgrade oahu increased by 1 position on organic desktop",
                  "ceiling fan installation oahu increased by 1 position on organic desktop"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Organic Mobile Results (Tracked Keywords)" }),
            /* @__PURE__ */ jsx(P, { children: "Here are some recent improvements to the keywords we track. For organic mobile, we saw an increase in the following keywords:" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "fan installation oahu increased by 6 positions on organic mobile",
                  "house fan installation oahu increased by 3 positions on organic mobile",
                  "electrical service upgrades oahu increased by 2 positions on organic mobile",
                  "light fixture installer oahu increased by 1 position on organic mobile",
                  "light fixture installation oahu increased by 1 position on organic mobile",
                  "electrical panel replacement oahu increased by 1 position on organic mobile",
                  "electrical service upgrade oahu increased by 1 position on organic mobile",
                  "ceiling fan installation oahu increased by 1 position on organic mobile"
                ]
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Google Business Profile" }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Search and Map Views" }),
            /* @__PURE__ */ jsx(P, { children: "Date Range: March 2024–August 2024" }),
            /* @__PURE__ */ jsx(P, { children: "Here are the metrics for the client's Google Business Profile listing. In March 2024–August 2024, the listing had 1.20K total views. Out of these total views, 444 came from desktop search view results, 641 came from mobile search view results, 104 came from desktop map view results, and 14K came from mobile map view results." }),
            /* @__PURE__ */ jsx(P, { children: "Additionally, the listing had 158 total business profile interactions. There were 124 total website clicks and 34 calls." }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/electrical-oahu-case-study.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO strategy for HVAC, plumbing, and electrical businesses.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my HVAC, plumbing, or electrical business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "Can Local SEO really help HVAC, plumbing, and electrical businesses get more calls?", answer: "Yes. Local SEO improves visibility in map results, Google Business Profile, and localized search—helping generate high-intent calls and inquiries." },
            { question: "How long does it take to see results from Local SEO?", answer: "Local SEO builds momentum over time depending on competition, website quality, and local authority. Most businesses start seeing measurable improvements within 3-6 months." },
            { question: "What is included in your Local SEO strategy?", answer: "Keyword research, Google Business Profile optimization, citations, onsite optimization, content support, and ongoing performance improvements." },
            { question: "How much do SEO services cost?", answer: "SEO pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. You can request a website and SEO audit or book a strategy session to identify improvement opportunities." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your HVAC, plumbing, or electrical business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO improvements can drive better results.",
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
          /* @__PURE__ */ jsx("p", { children: "Across HVAC, plumbing, and electrical campaigns, one pattern remains consistent — businesses that invest in structured local visibility tend to see measurable improvements in calls, engagement, and lead flow over time." }),
          /* @__PURE__ */ jsx("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for services." })
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
  LocalSEOHvacPlumbingElectrical as default
};
