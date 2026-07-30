import { j as jsxDEV } from "../main.mjs";
import { Link } from "react-router-dom";
import { B as Button } from "./button-Co-CyCVS.js";
import { ArrowRight, Phone } from "lucide-react";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
const CardCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Call",
  buttonHref = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  sectionClassName = "py-24 lg:py-32",
  accentWords = [],
  showPhoneButton = true,
  headingAs: Heading = "h2"
}) => {
  return /* @__PURE__ */ jsxDEV("section", { className: `${sectionClassName} relative overflow-hidden`, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "relative rounded-2xl p-8 md:p-12 lg:p-14 transition-all duration-300 group",
      style: {
        backgroundColor: "hsl(215 40% 13%)",
        border: "1px solid hsla(25, 90%, 55%, 0.5)",
        boxShadow: "0 0 50px -10px hsla(25, 90%, 55%, 0.25)"
      },
      children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center gap-10 md:gap-14", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/services/CardCTA.tsx",
                lineNumber: 93,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: baseContactCTA.image,
                alt: baseContactCTA.name,
                width: 160,
                height: 160,
                loading: "lazy",
                className: "w-full h-full object-cover"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/services/CardCTA.tsx",
                lineNumber: 98,
                columnNumber: 21
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/components/services/CardCTA.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "mt-5 text-lg font-display font-semibold text-foreground", children: baseContactCTA.name }, void 0, false, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role }, void 0, false, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/CardCTA.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center md:text-left", children: [
          /* @__PURE__ */ jsxDEV(Heading, { className: "text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold mb-5 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: title }, void 0, false, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-xl", children: description }, void 0, false, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 items-center md:items-start", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                size: "xl",
                variant: "hero",
                asChild: true,
                className: "border-0 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl rounded-full",
                children: buttonHref.startsWith("http") ? /* @__PURE__ */ jsxDEV("a", { href: buttonHref, target: "_blank", rel: "noopener noreferrer", children: [
                  buttonText,
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/components/services/CardCTA.tsx",
                    lineNumber: 131,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/services/CardCTA.tsx",
                  lineNumber: 129,
                  columnNumber: 23
                }, void 0) : /* @__PURE__ */ jsxDEV(Link, { to: buttonHref, children: [
                  buttonText,
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/components/services/CardCTA.tsx",
                    lineNumber: 136,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/services/CardCTA.tsx",
                  lineNumber: 134,
                  columnNumber: 23
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/services/CardCTA.tsx",
                lineNumber: 122,
                columnNumber: 19
              },
              void 0
            ),
            showPhoneButton && /* @__PURE__ */ jsxDEV(
              Button,
              {
                variant: "outline",
                size: "xl",
                asChild: true,
                className: "border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-6 rounded-full",
                children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
                  /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2 w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/components/services/CardCTA.tsx",
                    lineNumber: 149,
                    columnNumber: 25
                  }, void 0),
                  "Call +1 (925) 886-3724"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/services/CardCTA.tsx",
                  lineNumber: 148,
                  columnNumber: 23
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/services/CardCTA.tsx",
                lineNumber: 142,
                columnNumber: 21
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-sm text-primary font-medium", children: "No commitment. No pressure. Just a clear path forward for your business." }, void 0, false, {
            fileName: "/dev-server/src/components/services/CardCTA.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/services/CardCTA.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/services/CardCTA.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/services/CardCTA.tsx",
      lineNumber: 80,
      columnNumber: 11
    },
    void 0
  ) }, void 0, false, {
    fileName: "/dev-server/src/components/services/CardCTA.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/services/CardCTA.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/services/CardCTA.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, void 0);
};
export {
  CardCTA as C
};
