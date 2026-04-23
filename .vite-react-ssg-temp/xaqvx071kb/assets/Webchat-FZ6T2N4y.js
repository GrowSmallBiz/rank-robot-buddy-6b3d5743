import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { V as VideoJsonLd } from "./VideoJsonLd-DpNbS7uU.js";
import { H as Header } from "./Header-Dct2bBAe.js";
import { I as IntegrationsSection } from "./IntegrationsSection-BVwvlsSv.js";
import { D as DemoGuarantee } from "./DemoGuarantee-DxtwwQl3.js";
import { D as DemoPageNav } from "./DemoPageNav-CpzJ_toM.js";
import { MessageCircle, Bot, UserPlus, Clock } from "lucide-react";
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
function WebchatDemo() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Webchat Demo for Small Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "See how GrowSmallBiz Webchat converts website visitors into leads with live chat and AI chatbots." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/marketing-automation-for-small-business/webchat/" })
    ] }),
    /* @__PURE__ */ jsx(
      VideoJsonLd,
      {
        name: "Webchat Demo",
        description: "Convert website visitors into leads with live chat and AI chatbots.",
        thumbnailUrl: "https://growsmallbiz.io/images/growsmallbiz-logo.webp",
        contentUrl: "https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4",
        uploadDate: "2025-01-15"
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "py-10 md:py-14", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold uppercase tracking-widest mb-4", children: "WEBCHAT" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6", children: "Engage Website Visitors Instantly With Live Chat And AI-Powered Chatbot Responses" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Convert website visitors into leads with live chat and AI-powered chatbots. Engage visitors immediately and capture their contact information before they leave." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]", children: /* @__PURE__ */ jsxs("video", { controls: true, className: "w-full", preload: "metadata", playsInline: true, children: [
        /* @__PURE__ */ jsx("source", { src: "https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4", type: "video/mp4" }),
        "Your browser does not support the video tag."
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground text-center mb-12", children: "Never Miss A Website Visitor Again" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [
          { icon: MessageCircle, title: "Live Chat", description: "Chat with website visitors in real time from your dashboard or mobile app." },
          { icon: Bot, title: "AI Chatbot", description: "Auto-respond to common questions with AI-powered chatbot responses 24/7." },
          { icon: UserPlus, title: "Lead Capture", description: "Automatically capture visitor information and route them into your CRM and automations." },
          { icon: Clock, title: "24/7 Availability", description: "Even when you're offline, the AI chatbot ensures every visitor gets an immediate response and their details are captured." }
        ].map((feature) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-8", children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
        ] }, feature.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground mb-6", children: "Turn Every Website Visit Into An Opportunity" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "Most website visitors leave without taking action. Webchat engages them at the right moment, answers their questions instantly, and captures their contact info so you never lose a potential customer." })
      ] }) }),
      /* @__PURE__ */ jsx(IntegrationsSection, {}),
      /* @__PURE__ */ jsx(DemoGuarantee, {}),
      /* @__PURE__ */ jsx(DemoPageNav, {})
    ] })
  ] });
}
export {
  WebchatDemo as default
};
