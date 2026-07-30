import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { B as Button } from "./button-Co-CyCVS.js";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
const parseStatValue = (value) => {
  if (value === "24/7") {
    return { number: 24, prefix: "", suffix: "/7" };
  }
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || "",
      number: parseInt(match[2], 10),
      suffix: match[3] || ""
    };
  }
  return { number: 0, prefix: "", suffix: value };
};
const AnimatedStat = ({ value, label, showDivider = false }) => {
  const { number: endValue, prefix, suffix } = parseStatValue(value);
  const [count, setCount] = useState(endValue);
  const [hasStarted, setHasStarted] = useState(false);
  const hasMounted = useRef(false);
  const ref = useRef(null);
  useEffect(() => {
    hasMounted.current = true;
    setCount(0);
  }, []);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
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
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(endValue * easeOutQuart);
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, endValue]);
  return /* @__PURE__ */ jsxDEV("div", { ref, className: "text-center relative", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary drop-shadow-lg", children: [
      prefix,
      count,
      suffix
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/AnimatedStat.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-foreground/90 font-medium mt-2", children: label }, void 0, false, {
      fileName: "/dev-server/src/components/services/AnimatedStat.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, void 0),
    showDivider && /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent" }, void 0, false, {
      fileName: "/dev-server/src/components/services/AnimatedStat.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/AnimatedStat.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, void 0);
};
const ServiceHero = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  preCtaContent,
  primaryCTA,
  secondaryCTA,
  note,
  backgroundImage,
  overlayOpacity = 85,
  stats,
  children
}) => {
  const BadgeIcon = badge.icon;
  const renderCTA = (cta, isPrimary) => {
    const variant = cta.variant || "hero";
    const content = /* @__PURE__ */ jsxDEV(Fragment, { children: [
      cta.label,
      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 59,
        columnNumber: 23
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/ServiceHero.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, void 0);
    if (cta.external) {
      const isAnchor = cta.href.startsWith("#");
      return /* @__PURE__ */ jsxDEV(Button, { variant, size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: cta.href,
          ...!isAnchor && { target: "_blank", rel: "noopener noreferrer" },
          children: content
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 67,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0);
    }
    return /* @__PURE__ */ jsxDEV(Button, { variant, size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: cta.href, children: content }, void 0, false, {
      fileName: "/dev-server/src/components/services/ServiceHero.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/ServiceHero.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, void 0);
  };
  return /* @__PURE__ */ jsxDEV("section", { className: "hero-section", children: [
    backgroundImage && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: { backgroundImage: `url(${backgroundImage})` }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 87,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0",
        style: { backgroundColor: `hsl(var(--background) / ${overlayOpacity / 100})` }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 92,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-6 animate-fade-up", children: [
        /* @__PURE__ */ jsxDEV(BadgeIcon, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { children: badge.text }, void 0, false, {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent", children: [title, titleHighlight].filter(Boolean).join(" ") }, void 0, false, {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed",
          style: { animationDelay: "0.1s" },
          dangerouslySetInnerHTML: { __html: subtitle }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 108,
          columnNumber: 11
        },
        void 0
      ),
      description && /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: "text-lg text-muted-foreground mb-10 animate-fade-up",
          style: { animationDelay: "0.15s" },
          children: description
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 115,
          columnNumber: 13
        },
        void 0
      ),
      preCtaContent && /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up", style: { animationDelay: "0.18s" }, children: preCtaContent }, void 0, false, {
        fileName: "/dev-server/src/components/services/ServiceHero.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up",
          style: { animationDelay: "0.2s" },
          children: [
            renderCTA(primaryCTA),
            /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/dev-server/src/components/services/ServiceHero.tsx",
                lineNumber: 136,
                columnNumber: 17
              }, void 0),
              " Call +1 (925) 886-3724"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/services/ServiceHero.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/services/ServiceHero.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 129,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: "mt-3 text-sm text-primary font-medium animate-fade-up",
          style: { animationDelay: "0.25s" },
          children: "No commitment. No pressure. Just a clear path forward for your business."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 141,
          columnNumber: 11
        },
        void 0
      ),
      note && /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: "mt-6 text-sm text-muted-foreground animate-fade-up",
          style: { animationDelay: "0.25s" },
          dangerouslySetInnerHTML: { __html: note }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 149,
          columnNumber: 13
        },
        void 0
      ),
      stats && stats.length > 0 && /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "mt-12 p-8 rounded-2xl bg-background/20 backdrop-blur-md border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.15)] animate-fade-up",
          style: { animationDelay: "0.3s" },
          children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxDEV(
            AnimatedStat,
            {
              value: stat.value,
              label: stat.label,
              showDivider: index < stats.length - 1
            },
            index,
            false,
            {
              fileName: "/dev-server/src/components/services/ServiceHero.tsx",
              lineNumber: 163,
              columnNumber: 19
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/components/services/ServiceHero.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/ServiceHero.tsx",
          lineNumber: 157,
          columnNumber: 13
        },
        void 0
      ),
      children
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/ServiceHero.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/ServiceHero.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/ServiceHero.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, void 0);
};
export {
  ServiceHero as S
};
