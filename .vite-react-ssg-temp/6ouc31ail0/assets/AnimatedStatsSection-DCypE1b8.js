import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
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
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "bg-background/80 border border-ghl-icon rounded-2xl p-6 text-center animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
        style: { animationDelay: `${index * 0.1}s` },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl font-display font-bold mb-2", style: { color: "#FC8253" }, children: [
            prefix,
            displayValue,
            suffix
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium mb-2", children: stat.label }),
          stat.subtext && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: stat.subtext })
        ]
      }
    );
  }
  if (variant === "minimal") {
    return /* @__PURE__ */ jsxs("div", { ref, className: "text-center", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-2xl md:text-3xl font-display font-bold", style: { color: "#FC8253" }, children: [
        prefix,
        displayValue,
        suffix
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: stat.label })
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "text-center animate-fade-up group",
      style: { animationDelay: `${index * 0.1}s` },
      children: [
        Icon && /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FC8253]/15 border border-[#FC8253]/30 mb-5 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(252,130,83,0.4)] group-hover:bg-[#FC8253]/25", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6", style: { color: "#FC8253" } }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight", style: { color: "#FC8253" }, children: [
          prefix,
          displayValue,
          suffix
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 font-medium", children: stat.label })
      ]
    }
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
  return /* @__PURE__ */ jsxs("section", { className: `py-20 relative overflow-hidden ${className}`, style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      (title || subtitle || description) && /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
        subtitle && /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: subtitle }),
        title && /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-display font-bold text-white mb-4", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "text-slate-400 max-w-2xl mx-auto", children: description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-8 lg:gap-12`, children: stats.map((stat, index) => /* @__PURE__ */ jsx(AnimatedStatCard, { stat, index, variant }, index)) })
    ] })
  ] });
};
export {
  AnimatedStatCard,
  AnimatedStatsSection
};
