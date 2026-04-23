import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header } from "./Header-Dct2bBAe.js";
import { I as IntegrationsSection } from "./IntegrationsSection-BVwvlsSv.js";
import { D as DemoGuarantee } from "./DemoGuarantee-DxtwwQl3.js";
import { D as DemoPageNav } from "./DemoPageNav-CpzJ_toM.js";
import { Search, UserCheck, Send, MapPin } from "lucide-react";
import "react-router-dom";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./use-utm-CiJKCMCk.js";
function GenerateLeadsDemo() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Generate Leads Demo for Small Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Attract, capture, and nurture leads automatically — so your pipeline stays full even when you're out on the job." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/marketing-automation-for-small-business/generate-leads/" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "py-10 md:py-14", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold uppercase tracking-widest mb-4", children: "GENERATE LEADS LIVE" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6", children: "Find And Capture Leads In Real Time With Smart Prospecting Tools" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Discover and capture new leads with smart prospecting tools. Find potential customers based on location, industry, and business type — and reach out automatically." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-foreground mb-6", children: "See It In Action" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "Watch how the lead generation engine finds and captures prospects in real time." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://lp.growsmallbiz.io/generate-lead",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity",
            children: "View Live Demo ➡️"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground text-center mb-12", children: "Smart Prospecting Tools At Your Fingertips" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [
          { icon: Search, title: "Lead Discovery", description: "Search for potential customers by location, industry, keywords, and more." },
          { icon: UserCheck, title: "Contact Enrichment", description: "Get phone numbers, emails, and business details for your prospects automatically." },
          { icon: Send, title: "Auto-Outreach", description: "Send personalized outreach sequences to new leads directly from the platform." },
          { icon: MapPin, title: "Location-Based Search", description: "Find businesses and prospects in specific geographic areas to target your ideal local market." }
        ].map((feature) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-8", children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
        ] }, feature.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground mb-6", children: "Fill Your Pipeline With Qualified Leads" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "Stop waiting for leads to come to you. Our prospecting engine actively discovers potential customers in your target market and feeds them directly into your CRM for immediate follow-up." })
      ] }) }),
      /* @__PURE__ */ jsx(IntegrationsSection, {}),
      /* @__PURE__ */ jsx(DemoGuarantee, {}),
      /* @__PURE__ */ jsx(DemoPageNav, {})
    ] })
  ] });
}
export {
  GenerateLeadsDemo as default
};
