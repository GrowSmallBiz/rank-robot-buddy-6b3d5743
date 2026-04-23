import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { B as Button } from "./Header-Dct2bBAe.js";
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
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const { number: endValue, prefix, suffix } = parseStatValue(value);
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
  return /* @__PURE__ */ jsxs("div", { ref, className: "text-center relative", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary drop-shadow-lg", children: [
      prefix,
      count,
      suffix
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-foreground/90 font-medium mt-2", children: label }),
    showDivider && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent" })
  ] });
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
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      cta.label,
      /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
    ] });
    if (cta.external) {
      const isAnchor = cta.href.startsWith("#");
      return /* @__PURE__ */ jsx(Button, { variant, size: "lg", asChild: true, children: /* @__PURE__ */ jsx(
        "a",
        {
          href: cta.href,
          ...!isAnchor && { target: "_blank", rel: "noopener noreferrer" },
          children: content
        }
      ) });
    }
    return /* @__PURE__ */ jsx(Button, { variant, size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: cta.href, children: content }) });
  };
  return /* @__PURE__ */ jsxs("section", { className: "hero-section", children: [
    backgroundImage && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: { backgroundImage: `url(${backgroundImage})` }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: { backgroundColor: `hsl(var(--background) / ${overlayOpacity / 100})` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "service-badge mb-6 animate-fade-up", children: [
        /* @__PURE__ */ jsx(BadgeIcon, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: badge.text })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight", children: [
        title,
        " ",
        titleHighlight && /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: titleHighlight })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed",
          style: { animationDelay: "0.1s" },
          dangerouslySetInnerHTML: { __html: subtitle }
        }
      ),
      description && /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-lg text-muted-foreground mb-10 animate-fade-up",
          style: { animationDelay: "0.15s" },
          children: description
        }
      ),
      preCtaContent && /* @__PURE__ */ jsx("div", { className: "animate-fade-up", style: { animationDelay: "0.18s" }, children: preCtaContent }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up",
          style: { animationDelay: "0.2s" },
          children: [
            renderCTA(primaryCTA),
            /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
              " Call +1 (925) 886-3724"
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "mt-3 text-sm text-primary font-medium animate-fade-up",
          style: { animationDelay: "0.25s" },
          children: "No commitment. No pressure. Just a clear path forward for your business."
        }
      ),
      note && /* @__PURE__ */ jsx(
        "p",
        {
          className: "mt-6 text-sm text-muted-foreground animate-fade-up",
          style: { animationDelay: "0.25s" },
          dangerouslySetInnerHTML: { __html: note }
        }
      ),
      stats && stats.length > 0 && /* @__PURE__ */ jsx(
        "div",
        {
          className: "mt-12 p-8 rounded-2xl bg-background/20 backdrop-blur-md border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.15)] animate-fade-up",
          style: { animationDelay: "0.3s" },
          children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsx(
            AnimatedStat,
            {
              value: stat.value,
              label: stat.label,
              showDivider: index < stats.length - 1
            },
            index
          )) })
        }
      ),
      children
    ] }) })
  ] });
};
export {
  ServiceHero as S
};
