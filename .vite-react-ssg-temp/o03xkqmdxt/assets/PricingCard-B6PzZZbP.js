import { j as jsxDEV } from "../main.mjs";
import { CheckCircle } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { u as useUtm } from "./use-utm-X_toIThi.js";
const variantStyles = {
  default: {
    card: "feature-card",
    icon: "icon-container-lg mx-auto mb-6",
    iconColor: "text-primary"
  },
  teal: {
    card: "feature-card-teal",
    icon: "bg-primary rounded-xl p-2.5 w-fit mb-4",
    iconColor: "text-white"
  },
  orange: {
    card: "bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 transition-all hover:shadow-[0_0_30px_rgba(255,127,80,0.5)]",
    icon: "icon-container mb-4",
    iconColor: "text-primary"
  },
  minimal: {
    card: "bg-card border border-border rounded-2xl p-6 transition-all hover:border-primary/30 hover:shadow-lg",
    icon: "icon-container mb-4",
    iconColor: "text-primary"
  }
};
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
  delay = 0,
  className = ""
}) => {
  const styles = variantStyles[variant];
  const isCentered = variant === "default";
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `${styles.card} animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s` },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: styles.icon, children: /* @__PURE__ */ jsxDEV(Icon, { className: `w-${variant === "default" ? "8" : "6"} h-${variant === "default" ? "8" : "6"} ${styles.iconColor}` }, void 0, false, {
          fileName: "/dev-server/src/components/services/FeatureCard.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/services/FeatureCard.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: `text-${variant === "default" ? "2xl" : "xl"} font-semibold text-foreground mb-${variant === "default" ? "4" : "3"} ${isCentered ? "text-center" : ""}`, children: title }, void 0, false, {
          fileName: "/dev-server/src/components/services/FeatureCard.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: `text-muted-foreground ${isCentered ? "text-center" : ""}`, children: description }, void 0, false, {
          fileName: "/dev-server/src/components/services/FeatureCard.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/FeatureCard.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    void 0
  );
};
const PricingCard = ({
  name,
  price,
  period = "/month",
  description,
  features,
  cta,
  ctaLink,
  popular = false,
  note,
  delay = 0,
  className = "",
  cardStyle
}) => {
  const { buildUrl } = useUtm();
  const finalCtaLink = buildUrl(ctaLink, cta.toLowerCase().replace(/\s+/g, "-"));
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `pricing-card ${popular ? "pricing-card-popular" : ""} animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s`, ...cardStyle ? { background: cardStyle } : {} },
      children: [
        popular && /* @__PURE__ */ jsxDEV("span", { className: "pricing-badge", children: "Most Popular" }, void 0, false, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground mb-2", children: name }, void 0, false, {
            fileName: "/dev-server/src/components/services/PricingCard.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, void 0),
          description && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: description }, void 0, false, {
            fileName: "/dev-server/src/components/services/PricingCard.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-4xl md:text-5xl font-display font-bold text-primary", children: price }, void 0, false, {
            fileName: "/dev-server/src/components/services/PricingCard.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: period }, void 0, false, {
            fileName: "/dev-server/src/components/services/PricingCard.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 mb-8", children: features.map((feature, index) => {
          const isHeading = /^everything in/i.test(feature);
          return /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/components/services/PricingCard.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: isHeading ? "text-foreground text-base md:text-lg font-bold" : "text-foreground text-sm",
                children: feature
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/services/PricingCard.tsx",
                lineNumber: 66,
                columnNumber: 15
              },
              void 0
            )
          ] }, index, true, {
            fileName: "/dev-server/src/components/services/PricingCard.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, void 0);
        }) }, void 0, false, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            variant: popular ? "hero" : "outline",
            size: "lg",
            className: "w-full",
            asChild: true,
            children: /* @__PURE__ */ jsxDEV("a", { href: finalCtaLink, target: "_blank", rel: "noopener noreferrer", children: cta }, void 0, false, {
              fileName: "/dev-server/src/components/services/PricingCard.tsx",
              lineNumber: 86,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/services/PricingCard.tsx",
            lineNumber: 80,
            columnNumber: 7
          },
          void 0
        ),
        note && (/^save\b/i.test(note) ? /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-block px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary font-bold text-sm md:text-base text-center", children: note }, void 0, false, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, void 0) : /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-center text-muted-foreground mt-4", children: note }, void 0, false, {
          fileName: "/dev-server/src/components/services/PricingCard.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, void 0))
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/PricingCard.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    void 0
  );
};
const PricingGrid = ({
  plans,
  columns = 3,
  className = ""
}) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ jsxDEV("div", { className: `grid ${gridCols[columns]} gap-8 ${className}`, children: plans.map((plan, index) => /* @__PURE__ */ jsxDEV(PricingCard, { ...plan, delay: index * 0.1 }, index, false, {
    fileName: "/dev-server/src/components/services/PricingCard.tsx",
    lineNumber: 137,
    columnNumber: 9
  }, void 0)) }, void 0, false, {
    fileName: "/dev-server/src/components/services/PricingCard.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, void 0);
};
export {
  FeatureCard as F,
  PricingGrid as P,
  PricingCard as a
};
