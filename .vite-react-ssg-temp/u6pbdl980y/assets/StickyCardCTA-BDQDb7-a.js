import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { b as baseContactCTA, B as Button } from "../main.mjs";
import { X, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";
const StickyCardCTA = ({
  title,
  description,
  buttonText = "Get Your Custom Growth Strategy",
  buttonHref = "/contact/",
  accentWords = [],
  showAfterScroll = 600
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
  const renderTitle = () => {
    if (accentWords.length === 0) return title;
    let result = title;
    const parts = [];
    let lastIndex = 0;
    accentWords.forEach((word) => {
      const index = result.toLowerCase().indexOf(word.toLowerCase());
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(result.substring(lastIndex, index));
        }
        parts.push(
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: result.substring(index, index + word.length) }, word)
        );
        lastIndex = index + word.length;
      }
    });
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }
    return parts.length > 0 ? parts : title;
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 backdrop-blur-xl",
        style: {
          backgroundColor: "hsla(215, 40%, 13%, 0.85)",
          border: "1px solid hsla(18, 85%, 60%, 0.4)",
          boxShadow: "0 -8px 40px -10px hsla(18, 85%, 60%, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        },
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleDismiss,
              className: "absolute top-3 right-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground z-10",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-6 md:gap-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute -inset-1 rounded-full",
                    style: {
                      background: "linear-gradient(135deg, hsl(210 20% 40%) 0%, hsl(210 20% 25%) 100%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: baseContactCTA.image,
                    alt: baseContactCTA.name,
                    className: "w-full h-full object-cover"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "mt-3 text-base font-display font-semibold text-foreground", children: baseContactCTA.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 leading-tight", children: renderTitle() }),
              /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-muted-foreground mb-6 max-w-xl", children: description }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center md:justify-start", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "lg",
                    asChild: true,
                    className: "border-0 px-8 py-5 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl rounded-full",
                    style: {
                      background: "linear-gradient(90deg, hsl(30 80% 65%) 0%, hsl(40 75% 70%) 40%, hsl(185 60% 55%) 100%)",
                      boxShadow: "0 12px 35px -8px hsla(30, 80%, 55%, 0.5)"
                    },
                    children: buttonHref.startsWith("http") ? /* @__PURE__ */ jsxs("a", { href: buttonHref, target: "_blank", rel: "noopener noreferrer", children: [
                      buttonText,
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                    ] }) : /* @__PURE__ */ jsxs(Link, { to: buttonHref, children: [
                      buttonText,
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    asChild: true,
                    className: "border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-6 py-5 rounded-full",
                    children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "mr-2 w-5 h-5" }),
                      "Call +1 (925) 886-3724"
                    ] })
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ) }),
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
  StickyCardCTA as S
};
