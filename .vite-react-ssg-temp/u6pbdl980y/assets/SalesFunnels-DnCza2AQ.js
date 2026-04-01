import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header } from "../main.mjs";
import { I as IntegrationsSection } from "./IntegrationsSection-De7-oGSZ.js";
import { D as DemoGuarantee } from "./DemoGuarantee-DcmCgOfF.js";
import { D as DemoPageNav } from "./DemoPageNav-BflVjb2C.js";
import { LayoutTemplate, FlaskConical, ShoppingCart, Layers } from "lucide-react";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-slot";
function SalesFunnelsDemo() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sales Funnels Demo | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "See how GrowSmallBiz Sales Funnels help you build high-converting funnels to close more deals." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/marketing-automation-for-small-business/sales-funnels/" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold uppercase tracking-widest mb-4", children: "SALES FUNNELS" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6", children: "Build High-Converting Sales Funnels With Smart, Auto-Generated Layouts" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto", children: "Create multi-step sales funnels that guide prospects from awareness to purchase. Our funnel builder makes it easy to design landing pages, order forms, and upsell sequences." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]", children: /* @__PURE__ */ jsxs("video", { controls: true, className: "w-full", preload: "metadata", playsInline: true, children: [
        /* @__PURE__ */ jsx("source", { src: "https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4", type: "video/mp4" }),
        "Your browser does not support the video tag."
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground text-center mb-12", children: "Everything You Need To Build Funnels That Convert" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [
          { icon: LayoutTemplate, title: "Funnel Templates", description: "Start with proven templates for lead gen, webinars, product launches, and more." },
          { icon: FlaskConical, title: "A/B Testing", description: "Test different headlines, images, and offers to maximize your conversion rates." },
          { icon: ShoppingCart, title: "Order Forms & Upsells", description: "Add order forms, one-click upsells, and downsells to maximize revenue per customer." },
          { icon: Layers, title: "Multi-Step Funnels", description: "Guide prospects through a tailored journey from first click to final purchase with multi-step funnel flows." }
        ].map((feature) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-8", children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
        ] }, feature.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground mb-6", children: "Turn Clicks Into Customers" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "Stop losing leads to clunky checkout flows. Our sales funnels are designed to reduce friction, increase conversions, and maximize the value of every visitor to your site." })
      ] }) }),
      /* @__PURE__ */ jsx(IntegrationsSection, {}),
      /* @__PURE__ */ jsx(DemoGuarantee, {}),
      /* @__PURE__ */ jsx(DemoPageNav, {})
    ] })
  ] });
}
export {
  SalesFunnelsDemo as default
};
