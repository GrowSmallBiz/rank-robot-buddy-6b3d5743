import { S } from "./ServiceHero-DkZ5LbCF.js";
import { S as S2 } from "./SectionHeader-DI_j2Gcg.js";
import { F, b, P, a, T } from "./PricingCard-CPLjvGl3.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Smartphone, Globe, Facebook, Instagram, MapPin, CheckCircle, ArrowRight, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { P as P2 } from "./PersonCTA-Bt3waad_.js";
import { C } from "./CardCTA-1MrUd6qk.js";
import { b as baseContactCTA, B as Button } from "../main.mjs";
import { useState, useEffect } from "react";
import { S as S3 } from "./StickyCardCTA-BDQDb7-a.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
const StatCard = ({
  value,
  label,
  subtext,
  delay = 0,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `stat-card animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "stat-value", children: value }),
        /* @__PURE__ */ jsx("p", { className: "stat-label", children: label }),
        subtext && /* @__PURE__ */ jsx("p", { className: "stat-subtext", children: subtext })
      ]
    }
  );
};
const StatsGrid = ({
  stats,
  columns = 4,
  className = ""
}) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-6 ${className}`, children: stats.map((stat, index) => /* @__PURE__ */ jsx(
    StatCard,
    {
      value: stat.value,
      label: stat.label,
      subtext: stat.subtext,
      delay: index * 0.1
    },
    index
  )) });
};
const channelConfig = {
  sms: {
    icon: Smartphone,
    bgColor: "#0d2818",
    borderColor: "#22c55e",
    iconColor: "#22c55e"
  },
  web: {
    icon: Globe,
    bgColor: "#0d1f2d",
    borderColor: "#17a2b8",
    iconColor: "#17a2b8"
  },
  facebook: {
    icon: Facebook,
    bgColor: "#0d1a33",
    borderColor: "#1877f2",
    iconColor: "#1877f2"
  },
  instagram: {
    icon: Instagram,
    bgColor: "#2d0d1f",
    borderColor: "#e1306c",
    iconColor: "#e1306c"
  },
  google: {
    icon: MapPin,
    bgColor: "#0f1419",
    borderColor: "",
    iconColor: "#4285f4",
    isGoogle: true
  }
};
const ChannelCard = ({
  channel,
  description,
  type,
  delay = 0,
  className = ""
}) => {
  const config = channelConfig[type];
  const Icon = config.icon;
  if (config.isGoogle) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `channel-card channel-card-google animate-fade-up ${className}`,
        style: { animationDelay: `${delay}s` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "google-border-animated" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
              style: {
                background: "linear-gradient(135deg, rgba(66,133,244,0.3), rgba(234,67,53,0.3), rgba(251,188,5,0.3), rgba(52,168,83,0.3))"
              },
              children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5", style: { color: config.iconColor } })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: channel }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `channel-card animate-fade-up ${className}`,
      style: {
        animationDelay: `${delay}s`,
        background: config.bgColor,
        border: `1px solid ${config.borderColor}`,
        boxShadow: `0 0 20px ${config.borderColor}40`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
            style: { backgroundColor: `${config.iconColor}20` },
            children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5", style: { color: config.iconColor } })
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: channel }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
        ] })
      ]
    }
  );
};
const ChannelsList = ({ channels, className = "" }) => {
  return /* @__PURE__ */ jsx("div", { className: `space-y-4 ${className}`, children: channels.map((channel, index) => /* @__PURE__ */ jsx(
    ChannelCard,
    {
      ...channel,
      delay: index * 0.05
    },
    index
  )) });
};
const ChecklistItem = ({
  text,
  icon: Icon = CheckCircle,
  iconColor = "text-primary",
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `checklist-item ${className}`, children: [
    /* @__PURE__ */ jsx(Icon, { className: `checklist-icon ${iconColor}` }),
    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: text })
  ] });
};
const Checklist = ({
  items,
  icon,
  iconColor,
  className = ""
}) => {
  return /* @__PURE__ */ jsx("div", { className: `space-y-4 ${className}`, children: items.map((item, index) => /* @__PURE__ */ jsx(
    ChecklistItem,
    {
      text: item,
      icon,
      iconColor
    },
    index
  )) });
};
const ActionCard = ({
  icon: Icon,
  label,
  iconColor = "text-primary",
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `action-card ${className}`, children: [
    /* @__PURE__ */ jsx(Icon, { className: `w-5 h-5 ${iconColor}` }),
    /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: label })
  ] });
};
const ActionsGrid = ({
  actions,
  columns = 2,
  iconColor,
  className = ""
}) => {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3"
  };
  return /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-4 ${className}`, children: actions.map((action, index) => /* @__PURE__ */ jsx(
    ActionCard,
    {
      icon: action.icon,
      label: action.label,
      iconColor
    },
    index
  )) });
};
const ComparisonBox = ({
  title,
  variant = "danger",
  className = "",
  children
}) => {
  const boxClass = variant === "danger" ? "math-box" : "math-box-success";
  return /* @__PURE__ */ jsxs("div", { className: `${boxClass} ${className}`, children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-foreground mb-4 text-center", children: title }),
    children
  ] });
};
const ComparisonSplit = ({
  without,
  withFeature,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `grid md:grid-cols-2 gap-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-2", children: /* @__PURE__ */ jsx("strong", { children: without.label }) }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground", children: without.description }),
      /* @__PURE__ */ jsx("p", { className: `font-bold ${without.resultColor || "text-destructive"}`, children: without.result })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-2", children: /* @__PURE__ */ jsx("strong", { children: withFeature.label }) }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground", children: withFeature.description }),
      /* @__PURE__ */ jsx("p", { className: `font-bold ${withFeature.resultColor || "text-primary"}`, children: withFeature.result })
    ] })
  ] });
};
const ServiceCard = ({ title, description, features, href, image, index }) => {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: href,
      className: `group block bg-card border border-border rounded-2xl overflow-hidden card-hover animate-fade-up`,
      style: { animationDelay: `${index * 0.1}s` },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: title,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: features.slice(0, 3).map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
            feature
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all", children: [
            "Learn More",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ]
    }
  );
};
const FloatingCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Session",
  buttonHref = "/contact/",
  showAfterScroll = 400
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= showAfterScroll) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll, isDismissed]);
  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl p-4 md:p-6 shadow-2xl shadow-primary/20", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleDismiss,
          className: "absolute top-2 right-2 md:top-4 md:right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
          "aria-label": "Dismiss",
          children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-4 md:gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 hidden sm:block", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-card", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: baseContactCTA.image,
              alt: baseContactCTA.name,
              className: "w-full h-full object-cover"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex flex-col items-center md:items-start", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: baseContactCTA.name }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: baseContactCTA.role })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl lg:text-2xl font-display font-bold text-foreground mb-1", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 hidden md:block", children: description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0", children: [
          /* @__PURE__ */ jsx(Button, { className: "ghl-btn px-6 py-2.5", asChild: true, children: buttonHref.startsWith("http") ? /* @__PURE__ */ jsxs("a", { href: buttonHref, target: "_blank", rel: "noopener noreferrer", children: [
            buttonText,
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ] }) : /* @__PURE__ */ jsxs(Link, { to: buttonHref, children: [
            buttonText,
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ] }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              className: "border-muted-foreground/30 hover:bg-muted/50 px-6 py-2.5",
              asChild: true,
              children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
                /* @__PURE__ */ jsx(Phone, { className: "mr-2 w-4 h-4" }),
                "Call +1 (925) 886-3724"
              ] })
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      ` })
  ] });
};
export {
  ActionCard,
  ActionsGrid,
  C as CardCTA,
  ChannelCard,
  ChannelsList,
  Checklist,
  ChecklistItem,
  ComparisonBox,
  ComparisonSplit,
  F as FeatureCard,
  FloatingCTA,
  P2 as PersonCTA,
  b as PricingCard,
  P as PricingGrid,
  S2 as SectionHeader,
  ServiceCard,
  S as ServiceHero,
  StatCard,
  StatsGrid,
  S3 as StickyCardCTA,
  a as TestimonialCard,
  T as TestimonialsGrid
};
