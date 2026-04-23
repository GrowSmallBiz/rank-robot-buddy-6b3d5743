import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Camera } from "lucide-react";
import { P as PageJsonLd } from "./PageJsonLd-DPKTdsi3.js";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
const industries = [
  {
    icon: Building,
    title: "Real Estate Agents & Brokers",
    description: "IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation tools built specifically for realtors and brokers.",
    link: "/professional-services/marketing-for-realtors/"
  },
  {
    icon: Camera,
    title: "Photography Marketing",
    description: "Attract engaged couples, families, and commercial clients searching for professional photographers in your area.",
    link: "/professional-services/photography-marketing/"
  }
];
const ProfessionalServices = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Professional Services Marketing | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Digital marketing for realtors, photographers, and professional service providers. Generate more leads, book more clients, and grow your business." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/professional-services/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Professional Services Marketing",
        description: "Digital marketing for realtors, photographers, and professional service providers.",
        url: "/professional-services/",
        breadcrumbs: [
          { name: "Professional Services", url: "/professional-services/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "min-h-screen pt-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10 text-center max-w-4xl", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6", children: "Professional Services Marketing" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight", children: "Stop Being the Best-Kept Secret in Your Market" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto", children: "From real estate agents to photographers — we help professional service providers generate more leads, book more clients, and build a dominant local presence through integrated digital marketing." }),
          /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Schedule Strategy Call ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center text-foreground mb-4", children: "Choose Your Specialty" }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mb-12 max-w-2xl mx-auto", children: "Every professional service has unique marketing needs. Select your specialty to see how we can help." }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: industries.map((industry) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: industry.link,
            className: "group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx(industry.icon, { className: "w-12 h-12 text-primary mb-4" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors", children: industry.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: industry.description }),
              /* @__PURE__ */ jsxs("span", { className: "text-primary font-semibold inline-flex items-center gap-1", children: [
                "Learn More ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ] })
            ]
          },
          industry.title
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ProfessionalServices as default
};
