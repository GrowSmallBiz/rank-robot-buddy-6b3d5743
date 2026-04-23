import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { B as Button } from "./Header-Dct2bBAe.js";
import { ArrowRight, Phone } from "lucide-react";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
const CardCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Call",
  buttonHref = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  sectionClassName = "py-24 lg:py-32",
  accentWords = []
}) => {
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
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "bg-clip-text text-transparent",
              style: {
                backgroundImage: "linear-gradient(90deg, hsl(199 89% 48%) 0%, hsl(18 85% 60%) 100%)"
              },
              children: result.substring(index, index + word.length)
            },
            word
          )
        );
        lastIndex = index + word.length;
      }
    });
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }
    return parts.length > 0 ? parts : title;
  };
  return /* @__PURE__ */ jsx("section", { className: `${sectionClassName} relative overflow-hidden`, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative rounded-2xl p-8 md:p-12 lg:p-14 transition-all duration-300 group",
      style: {
        backgroundColor: "hsl(215 40% 13%)",
        border: "1px solid hsla(25, 90%, 55%, 0.5)",
        boxShadow: "0 0 50px -10px hsla(25, 90%, 55%, 0.25)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-10 md:gap-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: baseContactCTA.image,
                alt: baseContactCTA.name,
                width: 160,
                height: 160,
                loading: "lazy",
                className: "w-full h-full object-cover"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "mt-5 text-lg font-display font-semibold text-foreground", children: baseContactCTA.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mb-5 leading-tight", children: renderTitle() }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-xl", children: description }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center md:items-start", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "xl",
                variant: "hero",
                asChild: true,
                className: "border-0 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl rounded-full",
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
                size: "xl",
                asChild: true,
                className: "border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-6 rounded-full",
                children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "mr-2 w-5 h-5" }),
                  "Call +1 (925) 886-3724"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-primary font-medium", children: "No commitment. No pressure. Just a clear path forward for your business." })
        ] })
      ] })
    }
  ) }) }) });
};
export {
  CardCTA as C
};
