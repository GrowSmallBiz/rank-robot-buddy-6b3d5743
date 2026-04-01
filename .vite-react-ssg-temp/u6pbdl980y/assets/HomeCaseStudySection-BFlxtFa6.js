import { jsxs, jsx } from "react/jsx-runtime";
import { TrendingUp, ArrowRight } from "lucide-react";
import { B as Button } from "../main.mjs";
import { Link } from "react-router-dom";
import "vite-react-ssg";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
const campaigns = [
  {
    title: "HVAC Growth",
    subtitle: "PPC + AI SEO Campaign",
    challenge: "Needed more qualified leads, lower acquisition costs, and stronger local visibility.",
    resultGroups: [
      {
        title: "Paid Ads Impact",
        metrics: [
          { label: "CTR", value: "+50.23%", isPositive: true },
          { label: "Conversions", value: "+83%", isPositive: true },
          { label: "CPA", value: "-41%", isPositive: true }
        ]
      },
      {
        title: "AI SEO Impact",
        metrics: [
          { label: "Phone Calls", value: "+1395%", isPositive: true },
          { label: "GBP Website Actions", value: "+520%", isPositive: true },
          { label: "Search Impressions", value: "+91.47%", isPositive: true }
        ]
      }
    ],
    overallImpact: [
      { text: "More qualified inbound leads" },
      { text: "Stronger local search visibility" },
      { text: "Lower acquisition costs" }
    ]
  },
  {
    title: "Roofing Growth",
    subtitle: "PPC + AI SEO Campaign",
    challenge: "Needed stronger lead flow from paid ads and better organic visibility in a competitive home service market.",
    resultGroups: [
      {
        title: "Paid Ads Impact",
        metrics: [
          { label: "Conversions", value: "+93.3%", isPositive: true },
          { label: "Cost Per Conversion", value: "-48.9%", isPositive: true },
          { label: "Conversion Rate", value: "+123.4%", isPositive: true }
        ]
      },
      {
        title: "AI SEO Impact",
        metrics: [
          { label: "Organic Conversions", value: "+26%", isPositive: true },
          { label: "Searches", value: "+76%", isPositive: true },
          { label: "GBP Views", value: "+127%", isPositive: true }
        ]
      }
    ],
    overallImpact: [
      { text: "Increased lead volume" },
      { text: "Improved campaign efficiency" },
      { text: "Better organic visibility" }
    ]
  },
  {
    title: "Home Remodeling Growth",
    subtitle: "SEO + Lead Growth Campaign",
    challenge: "Needed better search visibility, more conversion actions, and stronger local market presence.",
    resultGroups: [
      {
        title: "Paid / Lead Growth Impact",
        metrics: [
          { label: "Total Conversions", value: "+183.33%", isPositive: true },
          { label: "Phone Calls", value: "+29.41%", isPositive: true },
          { label: "Cost Per Lead", value: "-28.07%", isPositive: true }
        ]
      },
      {
        title: "AI SEO Impact",
        metrics: [
          { label: "Goal Completions", value: "+366.67%", isPositive: true },
          { label: "Website Clicks", value: "+382.11%", isPositive: true },
          { label: "Organic Traffic", value: "+393.3%", isPositive: true }
        ]
      }
    ],
    overallImpact: [
      { text: "More qualified inquiries" },
      { text: "Stronger organic engagement" },
      { text: "More conversion opportunities" }
    ]
  }
];
const HomeCaseStudySection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Real Results Across Home Service Campaigns" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-3xl mx-auto", children: "See how paid ads and AI SEO work together to generate more leads, improve local visibility, and lower acquisition costs." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: campaigns.map((campaign, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: campaign.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70", children: campaign.subtitle })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 border-b border-border", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "The Challenge" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed", children: campaign.challenge })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              campaign.resultGroups.map((group, gIndex) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "p-5 border-b border-border",
                  children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5" }),
                      group.title
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: group.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: metric.label }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: `text-sm font-bold px-2.5 py-0.5 rounded-full ${metric.value.startsWith("-") ? "text-emerald-400 bg-emerald-400/10" : "text-primary bg-primary/10"}`,
                          children: metric.value
                        }
                      )
                    ] }, mIndex)) })
                  ]
                },
                gIndex
              )),
              /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Overall Impact" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: campaign.overallImpact.map((item, iIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: item.text })
                ] }, iIndex)) })
              ] })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/contact/", children: [
        "See How We Can Grow Your Business",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
      ] }) }) })
    ] })
  ] });
};
export {
  HomeCaseStudySection
};
