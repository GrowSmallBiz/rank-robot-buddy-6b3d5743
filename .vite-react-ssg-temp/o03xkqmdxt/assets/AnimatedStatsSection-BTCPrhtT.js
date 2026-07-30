import { j as jsxDEV } from "../main.mjs";
import { useState, useRef, useEffect } from "react";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
const parseStatValue = (value) => {
  if (value === "24/7") return { number: 24, prefix: "", suffix: "/7" };
  if (value === "2-4x") return { number: 4, prefix: "2-", suffix: "x" };
  const decimalMatch = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (decimalMatch) {
    const num = parseFloat(decimalMatch[2]);
    return {
      prefix: decimalMatch[1] || "",
      number: num,
      suffix: decimalMatch[3] || ""
    };
  }
  return { number: 0, prefix: "", suffix: value };
};
const AnimatedStatCard = ({ stat, index, variant = "default" }) => {
  var _a;
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const { number: endValue, prefix, suffix } = parseStatValue(stat.value);
  const Icon = stat.icon;
  const isDecimal = stat.value.includes(".");
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) setHasStarted(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);
  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2e3;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(isDecimal ? endValue * easeOutQuart : Math.floor(endValue * easeOutQuart));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, endValue, isDecimal]);
  const displayValue = isDecimal ? count.toFixed(1) : count;
  if (variant === "card") {
    const isSourceCitation = (_a = stat.subtext) == null ? void 0 : _a.trim().toLowerCase().startsWith("source:");
    const sourceLabel = isSourceCitation ? stat.subtext.replace(/^\s*source\s*:\s*/i, "") : null;
    const pillBaseClass = "inline-block bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider";
    const pillLinkClass = `${pillBaseClass} hover:bg-primary/15 hover:border-primary/40 hover:text-primary transition-colors cursor-pointer`;
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref,
        className: "bg-background/80 border border-ghl-icon rounded-2xl p-6 text-center animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
        style: { animationDelay: `${index * 0.1}s` },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl md:text-5xl font-display font-bold mb-2", style: { color: "#FC8253" }, children: [
            prefix,
            displayValue,
            suffix
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium mb-3", children: stat.label }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, void 0),
          stat.subtext && (isSourceCitation ? stat.sourceUrl ? /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: stat.sourceUrl,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: pillLinkClass,
              "aria-label": `Verify source: ${sourceLabel} (opens in new tab)`,
              children: [
                sourceLabel,
                " ↗"
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            void 0
          ) : /* @__PURE__ */ jsxDEV("span", { className: pillBaseClass, children: sourceLabel }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, void 0) : /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground", children: stat.subtext }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, void 0))
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      void 0
    );
  }
  if (variant === "minimal") {
    return /* @__PURE__ */ jsxDEV("div", { ref, className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-2xl md:text-3xl font-display font-bold", style: { color: "#FC8253" }, children: [
        prefix,
        displayValue,
        suffix
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: stat.label }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: "text-center animate-fade-up group",
      style: { animationDelay: `${index * 0.1}s` },
      children: [
        Icon && /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FC8253]/15 border border-[#FC8253]/30 mb-5 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(252,130,83,0.4)] group-hover:bg-[#FC8253]/25", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-6 h-6", style: { color: "#FC8253" } }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight", style: { color: "#FC8253" }, children: [
          prefix,
          displayValue,
          suffix
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 140,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: stat.label }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 143,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
      lineNumber: 130,
      columnNumber: 5
    },
    void 0
  );
};
const AnimatedStatsSection = ({
  stats,
  columns = 4,
  variant = "default",
  className = "",
  title,
  subtitle,
  description
}) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ jsxDEV("section", { className: `py-20 relative overflow-hidden ${className}`, style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 right-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      (title || subtitle || description) && /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
        subtitle && /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 181,
          columnNumber: 26
        }, void 0),
        title && /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold text-white mb-4 bg-gradient-heading bg-clip-text text-transparent", children: title }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, void 0),
        description && /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 max-w-2xl mx-auto", children: description }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: `grid ${gridCols[columns]} gap-8 lg:gap-12`, children: stats.map((stat, index) => /* @__PURE__ */ jsxDEV(AnimatedStatCard, { stat, index, variant }, index, false, {
        fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AnimatedStatsSection.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, void 0);
};
export {
  AnimatedStatCard,
  AnimatedStatsSection
};
