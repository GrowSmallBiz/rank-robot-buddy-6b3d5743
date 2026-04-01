import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { H as Header } from "../main.mjs";
import { I as IntegrationsSection } from "./IntegrationsSection-De7-oGSZ.js";
import { D as DemoGuarantee } from "./DemoGuarantee-DcmCgOfF.js";
import { D as DemoPageNav } from "./DemoPageNav-BflVjb2C.js";
import { Users, ListFilter, Settings, Workflow } from "lucide-react";
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
function CrmDemo() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "CRM Demo | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "See how GrowSmallBiz CRM keeps all your customers and prospects organized in one place." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/marketing-automation-for-small-business/crm/" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold uppercase tracking-widest mb-4", children: "CRM" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6", children: "All Of Your Customers And Prospects In One Place" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto", children: "When you are focused on turning leads into customers, having a powerful CRM is paramount. Using our CRM, you can truly integrate your business with all of your marketing and follow-up." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]", children: /* @__PURE__ */ jsxs("video", { controls: true, className: "w-full", preload: "metadata", playsInline: true, children: [
        /* @__PURE__ */ jsx("source", { src: "https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681291412876613.mp4", type: "video/mp4" }),
        "Your browser does not support the video tag."
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground text-center mb-12", children: "Manage Contacts, Deals, And Relationships" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [
          { icon: Users, title: "Contact Tracking", description: "Keep customer and prospect information at your fingertips, integrated with all your marketing and follow-up." },
          { icon: ListFilter, title: "Smart Lists", description: "Create filtered lists any way you need — from people in a certain area to those who bought specific products." },
          { icon: Settings, title: "Fully Customizable", description: "Add custom fields to track anything you need. Warranty dates, anniversaries — you name it." },
          { icon: Workflow, title: "Marketing Integration", description: "Seamlessly connect your CRM with email campaigns, SMS sequences, and workflow automations for end-to-end lead management." }
        ].map((feature) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-8", children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
        ] }, feature.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-black text-foreground mb-6", children: "One Unified View Of Every Customer" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "See every interaction, every touchpoint, and every deal in one place. No more switching between tools or losing track of conversations. Your entire customer history, at your fingertips." })
      ] }) }),
      /* @__PURE__ */ jsx(IntegrationsSection, {}),
      /* @__PURE__ */ jsx(DemoGuarantee, {}),
      /* @__PURE__ */ jsx(DemoPageNav, {})
    ] })
  ] });
}
export {
  CrmDemo as default
};
