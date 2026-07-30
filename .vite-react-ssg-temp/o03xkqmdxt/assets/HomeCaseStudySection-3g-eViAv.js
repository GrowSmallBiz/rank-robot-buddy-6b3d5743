import { j as jsxDEV } from "../main.mjs";
import { TrendingUp, ArrowRight } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
const healthWellnessCards = [
  {
    title: "Med Spa Local SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+552.7% Users Year Over Year",
      "+75.9% GBP Phone Calls",
      "#1 Rankings — Laser Skin Treatment",
      "Significant local pack visibility gains"
    ],
    link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/"
  },
  {
    title: "Dental Practice Google Ads",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+175.51% Conversions Year Over Year",
      "-64.62% Cost Per Acquisition",
      "+187.04% Conversion Rate",
      "+127.25% Account CTR"
    ],
    link: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/"
  }
];
const HomeCaseStudySection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Real Results Across Industries" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-3xl mx-auto", children: "Home service contractors, health & wellness practices, and more." }, void 0, false, {
          fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: campaigns.map((campaign, index) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-6", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 162,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: campaign.title }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 165,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary-foreground/70", children: campaign.subtitle }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
              lineNumber: 161,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 border-b border-border", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "The Challenge" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 174,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground leading-relaxed", children: campaign.challenge }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 177,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
              campaign.resultGroups.map((group, gIndex) => /* @__PURE__ */ jsxDEV("div", { className: "p-5 border-b border-border", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                    lineNumber: 186,
                    columnNumber: 23
                  }, void 0),
                  group.title
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 185,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5", children: group.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground", children: metric.label }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                    lineNumber: 192,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(
                    "span",
                    {
                      className: `text-sm font-bold px-2.5 py-0.5 rounded-full ${metric.value.startsWith("-") ? "text-emerald-400 bg-emerald-400/10" : "text-primary bg-primary/10"}`,
                      children: metric.value
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                      lineNumber: 193,
                      columnNumber: 27
                    },
                    void 0
                  )
                ] }, mIndex, true, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 191,
                  columnNumber: 25
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 189,
                  columnNumber: 21
                }, void 0)
              ] }, gIndex, true, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 184,
                columnNumber: 19
              }, void 0)),
              /* @__PURE__ */ jsxDEV("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Overall Impact" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 209,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: campaign.overallImpact.map((item, iIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                    lineNumber: 215,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground", children: item.text }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                    lineNumber: 216,
                    columnNumber: 25
                  }, void 0)
                ] }, iIndex, true, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 214,
                  columnNumber: 23
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 212,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 208,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
              lineNumber: 182,
              columnNumber: 15
            }, void 0)
          ]
        },
        index,
        true,
        {
          fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
          lineNumber: 157,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10", children: healthWellnessCards.map((card, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-6", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 234,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 237,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary-foreground/70", children: card.subtitle }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 240,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
              lineNumber: 233,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-5", children: card.metrics.map((metric, mi) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 246,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 247,
                  columnNumber: 23
                }, void 0)
              ] }, mi, true, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 245,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                lineNumber: 243,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: card.link,
                  className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline",
                  children: "View Case Studies →"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
                  lineNumber: 251,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
              lineNumber: 242,
              columnNumber: 15
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
          lineNumber: 229,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "https://lp.growsmallbiz.io/digital-growth-strategy-session", target: "_blank", rel: "noopener noreferrer", children: [
        "Schedule Strategy Call",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
        lineNumber: 264,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
        lineNumber: 263,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/HomeCaseStudySection.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, void 0);
};
export {
  HomeCaseStudySection
};
