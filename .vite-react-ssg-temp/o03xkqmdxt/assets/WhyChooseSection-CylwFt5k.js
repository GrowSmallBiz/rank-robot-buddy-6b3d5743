import { j as jsxDEV } from "../main.mjs";
import { Users, Eye, Target, PhoneCall, TrendingUp, Puzzle } from "lucide-react";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
const defaultWhyChooseItems = [
  {
    title: "A Whole Team In Your Corner",
    description: "Get a dedicated Strategic Partner who champions your success, backed by a curated network of SEO experts, PPC specialists, web developers, and copywriters working exclusively on your growth.",
    icon: Users
  },
  {
    title: "Full Transparency",
    description: "No black box marketing here. You'll see exactly where every dollar goes and how it's performing – because it's your money and your business.",
    icon: Eye
  },
  {
    title: "Local SMB Marketing Experts",
    description: "We don't chase every industry trend – we focus exclusively on helping local professional service businesses dominate their markets.",
    icon: Target
  },
  {
    title: "Call Tracking + Reporting",
    description: "Our advanced call tracking shows exactly which campaigns are bringing you real customers on the phone – so we can invest more in what works.",
    icon: PhoneCall
  },
  {
    title: "Real Results for Real Businesses",
    description: "Our clients consistently see 2x, 3x, and even 4x growth in their customer base. From accounting firms to law offices to consulting practices.",
    icon: TrendingUp
  },
  {
    title: "Every Piece of the Puzzle",
    description: "Your website, Google presence, reviews, and social media all work as one cohesive system to dominate your local market.",
    icon: Puzzle
  }
];
const WhyChooseSection = ({
  title = "Why Choose GrowSmallBiz",
  subtitle = "Your Growth Marketing Partner",
  description = "Our integrated marketing ecosystem systematically increases your visibility, generates qualified leads, converts prospects into loyal clients, and maximizes customer lifetime value.",
  items = defaultWhyChooseItems,
  variant = "dark"
}) => {
  const isLight = variant === "light";
  return /* @__PURE__ */ jsxDEV("section", { className: `py-24 relative overflow-hidden border-t ${isLight ? "bg-gradient-to-b from-stone-50 to-stone-100/80 border-stone-200/60" : "bg-card/80 border-primary/10"}`, children: [
    !isLight && /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
      lineNumber: 66,
      columnNumber: 20
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: `text-3xl md:text-4xl font-display font-bold mb-6 ${isLight ? "text-slate-800" : "text-foreground"} bg-gradient-heading bg-clip-text text-transparent`, children: title }, void 0, false, {
          fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: `text-lg ${isLight ? "text-slate-600" : "text-muted-foreground"}`, children: description }, void 0, false, {
          fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((item, index) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `rounded-xl p-6 space-y-4 animate-fade-up transition-all ${isLight ? "bg-white/80 border border-stone-200/70 shadow-sm hover:shadow-md" : "bg-background/80 border border-ghl-icon hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"}`,
          style: { animationDelay: `${index * 0.1}s` },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
              lineNumber: 89,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: `font-display font-semibold ${isLight ? "text-slate-800" : "text-foreground"}`, children: item.title }, void 0, false, {
              fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: `text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-muted-foreground"}`, children: item.description }, void 0, false, {
              fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, void 0)
          ]
        },
        index,
        true,
        {
          fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
          lineNumber: 80,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/WhyChooseSection.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, void 0);
};
export {
  WhyChooseSection
};
