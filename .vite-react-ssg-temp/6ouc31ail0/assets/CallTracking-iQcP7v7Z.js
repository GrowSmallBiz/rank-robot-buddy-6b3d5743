import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { V as VideoJsonLd } from "./VideoJsonLd-DpNbS7uU.js";
import { H as Header } from "./Header-Dct2bBAe.js";
import { I as IntegrationsSection } from "./IntegrationsSection-BVwvlsSv.js";
import { D as DemoGuarantee } from "./DemoGuarantee-DxtwwQl3.js";
import { D as DemoPageNav } from "./DemoPageNav-CpzJ_toM.js";
import { Phone, Shield, BarChart3, Activity } from "lucide-react";
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
function CallTrackingDemo() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Call Tracking Demo for Small Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Know which ads and channels are actually driving calls. GrowSmallBiz Call Tracking records every conversation and shows you exactly where your best leads are coming from." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/marketing-automation-for-small-business/call-tracking/" })
    ] }),
    /* @__PURE__ */ jsx(
      VideoJsonLd,
      {
        name: "Call Tracking Demo",
        description: "Know which ads and channels are actually driving calls. Track, record, and analyze every call to optimize your marketing spend.",
        thumbnailUrl: "https://growsmallbiz.io/images/growsmallbiz-logo.webp",
        contentUrl: "https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681295ac4876614.mp4",
        uploadDate: "2025-01-15"
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "py-10 md:py-14", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold uppercase tracking-widest mb-4", children: "CALL TRACKING" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6", children: "Track Every Call, Record Conversations, And Attribute Leads To Their Source" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Know exactly where your phone leads come from. Track, record, and analyze every call to optimize your marketing spend and improve your team's performance." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]", children: /* @__PURE__ */ jsxs("video", { controls: true, className: "w-full", preload: "metadata", playsInline: true, children: [
        /* @__PURE__ */ jsx("source", { src: "https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681295ac4876614.mp4", type: "video/mp4" }),
        "Your browser does not support the video tag."
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground text-center mb-12", children: "Everything You Need To Track & Optimize Calls" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [
          { icon: Phone, title: "Call Attribution", description: "Assign unique tracking numbers to campaigns and know exactly which ads drive calls." },
          { icon: Shield, title: "Call Recording", description: "Record and review calls for quality assurance, training, and dispute resolution." },
          { icon: BarChart3, title: "Real-Time Analytics", description: "Track call volume, duration, missed calls, and source attribution in real time." },
          { icon: Activity, title: "Performance Insights", description: "Get detailed reports on call outcomes, peak hours, and team performance to make data-driven decisions." }
        ].map((feature) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-8", children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
        ] }, feature.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground mb-6", children: "Know Your ROI On Every Marketing Dollar" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "Stop guessing which campaigns drive phone calls. With call tracking, you'll know exactly which marketing channels deliver the highest-quality leads so you can double down on what works." })
      ] }) }),
      /* @__PURE__ */ jsx(IntegrationsSection, {}),
      /* @__PURE__ */ jsx(DemoGuarantee, {}),
      /* @__PURE__ */ jsx(DemoPageNav, {})
    ] })
  ] });
}
export {
  CallTrackingDemo as default
};
