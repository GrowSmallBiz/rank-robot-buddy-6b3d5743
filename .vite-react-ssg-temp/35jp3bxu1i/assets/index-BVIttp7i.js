import { S } from "./ServiceHero-DKih7SuP.js";
import { S as S2 } from "./SectionHeader-BzL5eqYC.js";
import { F, a, P } from "./PricingCard-B6PzZZbP.js";
import { j as jsxDEV } from "../main.mjs";
import { Quote, Star, Smartphone, Globe, Facebook, Instagram, MapPin, CheckCircle, ArrowRight, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { P as P2 } from "./PersonCTA-BBiDGLm3.js";
import { C } from "./CardCTA-DT9NPaz7.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { useState, useEffect } from "react";
import "./use-utm-X_toIThi.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const StatCard = ({
  value,
  label,
  subtext,
  delay = 0,
  className = ""
}) => {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `stat-card animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s` },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "stat-value", children: value }, void 0, false, {
          fileName: "/dev-server/src/components/services/StatCard.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "stat-label", children: label }, void 0, false, {
          fileName: "/dev-server/src/components/services/StatCard.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, void 0),
        subtext && /* @__PURE__ */ jsxDEV("p", { className: "stat-subtext", children: subtext }, void 0, false, {
          fileName: "/dev-server/src/components/services/StatCard.tsx",
          lineNumber: 23,
          columnNumber: 19
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/StatCard.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    void 0
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
  return /* @__PURE__ */ jsxDEV("div", { className: `grid ${gridCols[columns]} gap-6 ${className}`, children: stats.map((stat, index) => /* @__PURE__ */ jsxDEV(
    StatCard,
    {
      value: stat.value,
      label: stat.label,
      subtext: stat.subtext,
      delay: index * 0.1
    },
    index,
    false,
    {
      fileName: "/dev-server/src/components/services/StatCard.tsx",
      lineNumber: 52,
      columnNumber: 9
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/components/services/StatCard.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `testimonial-card animate-fade-up ${className}`,
      style: { animationDelay: `${delay}s` },
      children: [
        variant === "default" && /* @__PURE__ */ jsxDEV(Quote, { className: "w-8 h-8 text-primary/30 mb-4" }, void 0, false, {
          fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1 mb-4", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxDEV(
          Star,
          {
            className: `w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`
          },
          i,
          false,
          {
            fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("blockquote", { className: "text-foreground mb-4 italic leading-relaxed", children: [
          '"',
          quote,
          '"'
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground", children: author }, void 0, false, {
              fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, void 0),
            (role || company) && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: [
              role,
              role && company && ", ",
              company
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, void 0),
          result && /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full", children: result }, void 0, false, {
            fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    void 0
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
  return /* @__PURE__ */ jsxDEV("div", { className: `grid ${gridCols[columns]} gap-6 ${className}`, children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxDEV(
    TestimonialCard,
    {
      ...testimonial,
      delay: index * 0.1
    },
    index,
    false,
    {
      fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
      lineNumber: 101,
      columnNumber: 9
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/components/services/TestimonialCard.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, void 0);
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
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: `channel-card channel-card-google animate-fade-up ${className}`,
        style: { animationDelay: `${delay}s` },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "google-border-animated" }, void 0, false, {
            fileName: "/dev-server/src/components/services/ChannelCard.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
              style: {
                background: "linear-gradient(135deg, rgba(66,133,244,0.3), rgba(234,67,53,0.3), rgba(251,188,5,0.3), rgba(52,168,83,0.3))"
              },
              children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5", style: { color: config.iconColor } }, void 0, false, {
                fileName: "/dev-server/src/components/services/ChannelCard.tsx",
                lineNumber: 80,
                columnNumber: 11
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/services/ChannelCard.tsx",
              lineNumber: 73,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-medium text-foreground", children: channel }, void 0, false, {
              fileName: "/dev-server/src/components/services/ChannelCard.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: description }, void 0, false, {
              fileName: "/dev-server/src/components/services/ChannelCard.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/ChannelCard.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/services/ChannelCard.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      void 0
    );
  }
  return /* @__PURE__ */ jsxDEV(
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
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
            style: { backgroundColor: `${config.iconColor}20` },
            children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5", style: { color: config.iconColor } }, void 0, false, {
              fileName: "/dev-server/src/components/services/ChannelCard.tsx",
              lineNumber: 104,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/services/ChannelCard.tsx",
            lineNumber: 100,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-medium text-foreground", children: channel }, void 0, false, {
            fileName: "/dev-server/src/components/services/ChannelCard.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: description }, void 0, false, {
            fileName: "/dev-server/src/components/services/ChannelCard.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/ChannelCard.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/ChannelCard.tsx",
      lineNumber: 91,
      columnNumber: 5
    },
    void 0
  );
};
const ChannelsList = ({ channels, className = "" }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: `space-y-4 ${className}`, children: channels.map((channel, index) => /* @__PURE__ */ jsxDEV(
    ChannelCard,
    {
      ...channel,
      delay: index * 0.05
    },
    index,
    false,
    {
      fileName: "/dev-server/src/components/services/ChannelCard.tsx",
      lineNumber: 127,
      columnNumber: 9
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/components/services/ChannelCard.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, void 0);
};
const ChecklistItem = ({
  text,
  icon: Icon = CheckCircle,
  iconColor = "text-primary",
  className = ""
}) => {
  return /* @__PURE__ */ jsxDEV("div", { className: `checklist-item ${className}`, children: [
    /* @__PURE__ */ jsxDEV(Icon, { className: `checklist-icon ${iconColor}` }, void 0, false, {
      fileName: "/dev-server/src/components/services/ChecklistItem.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: text }, void 0, false, {
      fileName: "/dev-server/src/components/services/ChecklistItem.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/ChecklistItem.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, void 0);
};
const Checklist = ({
  items,
  icon,
  iconColor,
  className = ""
}) => {
  return /* @__PURE__ */ jsxDEV("div", { className: `space-y-4 ${className}`, children: items.map((item, index) => /* @__PURE__ */ jsxDEV(
    ChecklistItem,
    {
      text: item,
      icon,
      iconColor
    },
    index,
    false,
    {
      fileName: "/dev-server/src/components/services/ChecklistItem.tsx",
      lineNumber: 40,
      columnNumber: 9
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/components/services/ChecklistItem.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, void 0);
};
const ActionCard = ({
  icon: Icon,
  label,
  iconColor = "text-primary",
  className = ""
}) => {
  return /* @__PURE__ */ jsxDEV("div", { className: `action-card ${className}`, children: [
    /* @__PURE__ */ jsxDEV(Icon, { className: `w-5 h-5 ${iconColor}` }, void 0, false, {
      fileName: "/dev-server/src/components/services/ActionCard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground", children: label }, void 0, false, {
      fileName: "/dev-server/src/components/services/ActionCard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/ActionCard.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("div", { className: `grid ${gridCols[columns]} gap-4 ${className}`, children: actions.map((action, index) => /* @__PURE__ */ jsxDEV(
    ActionCard,
    {
      icon: action.icon,
      label: action.label,
      iconColor
    },
    index,
    false,
    {
      fileName: "/dev-server/src/components/services/ActionCard.tsx",
      lineNumber: 48,
      columnNumber: 9
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/components/services/ActionCard.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, void 0);
};
const ComparisonBox = ({
  title,
  variant = "danger",
  className = "",
  children
}) => {
  const boxClass = variant === "danger" ? "math-box" : "math-box-success";
  return /* @__PURE__ */ jsxDEV("div", { className: `${boxClass} ${className}`, children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-semibold text-foreground mb-4 text-center", children: title }, void 0, false, {
      fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, void 0),
    children
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, void 0);
};
const ComparisonSplit = ({
  without,
  withFeature,
  className = ""
}) => {
  return /* @__PURE__ */ jsxDEV("div", { className: `grid md:grid-cols-2 gap-6 ${className}`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-2", children: /* @__PURE__ */ jsxDEV("strong", { children: without.label }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground", children: without.description }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: `font-bold ${without.resultColor || "text-destructive"}`, children: without.result }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-2", children: /* @__PURE__ */ jsxDEV("strong", { children: withFeature.label }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground", children: withFeature.description }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: `font-bold ${withFeature.resultColor || "text-primary"}`, children: withFeature.result }, void 0, false, {
        fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/ComparisonBox.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, void 0);
};
const ServiceCard = ({ title, description, features, href, image, index }) => {
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      to: href,
      className: `group block bg-card border border-border rounded-2xl overflow-hidden card-hover animate-fade-up`,
      style: { animationDelay: `${index * 0.1}s` },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: image,
              alt: title,
              width: 400,
              height: 300,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/services/ServiceCard.tsx",
              lineNumber: 22,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" }, void 0, false, {
            fileName: "/dev-server/src/components/services/ServiceCard.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/ServiceCard.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors", children: title }, void 0, false, {
            fileName: "/dev-server/src/components/services/ServiceCard.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description }, void 0, false, {
            fileName: "/dev-server/src/components/services/ServiceCard.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: features.slice(0, 3).map((feature, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/components/services/ServiceCard.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, void 0),
            feature
          ] }, i, true, {
            fileName: "/dev-server/src/components/services/ServiceCard.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/components/services/ServiceCard.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all", children: [
            "Learn More",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/services/ServiceCard.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/ServiceCard.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/ServiceCard.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/ServiceCard.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    void 0
  );
};
const FloatingCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Call",
  buttonHref = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
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
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "relative bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl p-4 md:p-6 shadow-2xl shadow-primary/20", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: handleDismiss,
          className: "absolute top-2 right-2 md:top-4 md:right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
          "aria-label": "Dismiss",
          children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center gap-4 md:gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 hidden sm:block", children: /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70" }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-card", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: baseContactCTA.image,
              alt: baseContactCTA.name,
              width: 80,
              height: 80,
              className: "w-full h-full object-cover"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
              lineNumber: 71,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex flex-col items-center md:items-start", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold text-foreground", children: baseContactCTA.name }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground", children: baseContactCTA.role }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center md:text-left", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg md:text-xl lg:text-2xl font-display font-bold text-foreground mb-1", children: title }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground line-clamp-2 hidden md:block", children: description }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0", children: [
          /* @__PURE__ */ jsxDEV(Button, { className: "ghl-btn px-6 py-2.5", asChild: true, children: buttonHref.startsWith("http") ? /* @__PURE__ */ jsxDEV("a", { href: buttonHref, target: "_blank", rel: "noopener noreferrer", children: [
            buttonText,
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, void 0) : /* @__PURE__ */ jsxDEV(Link, { to: buttonHref, children: [
            buttonText,
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
              lineNumber: 108,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              variant: "outline",
              className: "border-muted-foreground/30 hover:bg-muted/50 px-6 py-2.5",
              asChild: true,
              children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
                /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2 w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
                  lineNumber: 118,
                  columnNumber: 19
                }, void 0),
                "Call +1 (925) 886-3724"
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
                lineNumber: 117,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
              lineNumber: 112,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("style", { children: `
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
      ` }, void 0, false, {
      fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/FloatingCTA.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, void 0);
};
const StickyCardCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Call",
  buttonHref = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  accentWords = [],
  showAfterScroll = 600
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("sticky-cta-dismissed") === "1";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    if (isDismissed) return;
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.6) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);
  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    try {
      sessionStorage.setItem("sticky-cta-dismissed", "1");
    } catch {
    }
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto max-w-5xl", children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 backdrop-blur-xl",
        style: {
          backgroundColor: "hsla(215, 40%, 13%, 0.85)",
          border: "1px solid hsla(18, 85%, 60%, 0.4)",
          boxShadow: "0 -8px 40px -10px hsla(18, 85%, 60%, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        },
        children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleDismiss,
              className: "absolute top-3 right-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground z-10",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 104,
                columnNumber: 13
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
              lineNumber: 99,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center gap-6 md:gap-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 text-center", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative inline-block", children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "absolute -inset-1 rounded-full",
                    style: {
                      background: "linear-gradient(135deg, hsl(210 20% 40%) 0%, hsl(210 20% 25%) 100%)"
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: baseContactCTA.image,
                    alt: baseContactCTA.name,
                    width: 112,
                    height: 112,
                    className: "w-full h-full object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                    lineNumber: 120,
                    columnNumber: 19
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                  lineNumber: 119,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 110,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("h4", { className: "mt-3 text-base font-display font-semibold text-foreground", children: baseContactCTA.name }, void 0, false, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 128,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role }, void 0, false, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 129,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center md:text-left", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: title }, void 0, false, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 134,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground mb-6 max-w-xl", children: description }, void 0, false, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 137,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-3 justify-center md:justify-start", children: [
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    size: "lg",
                    asChild: true,
                    className: "border-0 px-8 py-5 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl rounded-full",
                    style: {
                      background: "linear-gradient(90deg, hsl(30 80% 65%) 0%, hsl(40 75% 70%) 40%, hsl(185 60% 55%) 100%)",
                      boxShadow: "0 12px 35px -8px hsla(30, 80%, 55%, 0.5)"
                    },
                    children: buttonHref.startsWith("http") ? /* @__PURE__ */ jsxDEV("a", { href: buttonHref, target: "_blank", rel: "noopener noreferrer", children: [
                      buttonText,
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
                        fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                        lineNumber: 155,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                      lineNumber: 153,
                      columnNumber: 21
                    }, void 0) : /* @__PURE__ */ jsxDEV(Link, { to: buttonHref, children: [
                      buttonText,
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
                        fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                        lineNumber: 160,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                      lineNumber: 158,
                      columnNumber: 21
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    asChild: true,
                    className: "border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-6 py-5 rounded-full",
                    children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
                      /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2 w-5 h-5" }, void 0, false, {
                        fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                        lineNumber: 171,
                        columnNumber: 21
                      }, void 0),
                      "Call +1 (925) 886-3724"
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                      lineNumber: 170,
                      columnNumber: 19
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                    lineNumber: 164,
                    columnNumber: 17
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
                lineNumber: 142,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
              lineNumber: 133,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
            lineNumber: 107,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
        lineNumber: 90,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("style", { children: `
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
      ` }, void 0, false, {
      fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/StickyCardCTA.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, void 0);
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
  a as PricingCard,
  P as PricingGrid,
  S2 as SectionHeader,
  ServiceCard,
  S as ServiceHero,
  StatCard,
  StatsGrid,
  StickyCardCTA,
  TestimonialCard,
  TestimonialsGrid
};
