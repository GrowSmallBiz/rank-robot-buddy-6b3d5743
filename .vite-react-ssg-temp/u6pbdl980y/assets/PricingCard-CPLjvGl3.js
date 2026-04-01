import { jsxs, jsx } from "react/jsx-runtime";
import { Quote, Star, CheckCircle } from "lucide-react";
import { B as Button } from "../main.mjs";
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${styles.card} animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s` },
      children: [
        /* @__PURE__ */ jsx("div", { className: styles.icon, children: /* @__PURE__ */ jsx(Icon, { className: `w-${variant === "default" ? "8" : "6"} h-${variant === "default" ? "8" : "6"} ${styles.iconColor}` }) }),
        /* @__PURE__ */ jsx("h3", { className: `text-${variant === "default" ? "2xl" : "xl"} font-semibold text-foreground mb-${variant === "default" ? "4" : "3"} ${isCentered ? "text-center" : ""}`, children: title }),
        /* @__PURE__ */ jsx("p", { className: `text-muted-foreground ${isCentered ? "text-center" : ""}`, children: description })
      ]
    }
  );
};
const TestimonialCard = ({
  quote,
  author,
  company,
  role,
  rating = 5,
  result,
  delay = 0,
  variant = "default",
  className = ""
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `testimonial-card animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s` },
      children: [
        variant === "default" && /* @__PURE__ */ jsx(Quote, { className: "w-8 h-8 text-primary/30 mb-4" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
          Star,
          {
            className: `w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("blockquote", { className: "text-foreground mb-4 italic leading-relaxed", children: [
          '"',
          quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: author }),
            (role || company) && /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              role,
              role && company && ", ",
              company
            ] })
          ] }),
          result && /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full", children: result })
        ] })
      ]
    }
  );
};
const TestimonialsGrid = ({
  testimonials,
  columns = 3,
  className = ""
}) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-6 ${className}`, children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(
    TestimonialCard,
    {
      ...testimonial,
      delay: index * 0.1
    },
    index
  )) });
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `pricing-card ${popular ? "pricing-card-popular" : ""} animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s`, ...cardStyle ? { background: cardStyle } : {} },
      children: [
        popular && /* @__PURE__ */ jsx("span", { className: "pricing-badge", children: "Most Popular" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground mb-2", children: name }),
          description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl font-display font-bold text-primary", children: price }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: period })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: feature })
        ] }, index)) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: popular ? "hero" : "outline",
            size: "lg",
            className: "w-full",
            asChild: true,
            children: /* @__PURE__ */ jsx("a", { href: ctaLink, target: "_blank", rel: "noopener noreferrer", children: cta })
          }
        ),
        note && /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground mt-4", children: note })
      ]
    }
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
  return /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-8 ${className}`, children: plans.map((plan, index) => /* @__PURE__ */ jsx(PricingCard, { ...plan, delay: index * 0.1 }, index)) });
};
export {
  FeatureCard as F,
  PricingGrid as P,
  TestimonialsGrid as T,
  TestimonialCard as a,
  PricingCard as b
};
