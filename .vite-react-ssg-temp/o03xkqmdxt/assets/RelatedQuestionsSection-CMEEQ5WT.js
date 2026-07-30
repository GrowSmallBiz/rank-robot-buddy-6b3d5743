import { j as jsxDEV, c as cn } from "../main.mjs";
import { useState, useId, useRef, useEffect } from "react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TqW6W-yi.js";
import { ChevronDown } from "lucide-react";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "@radix-ui/react-accordion";
const RelatedQuestionsSection = ({
  title = "Related Questions",
  subtitle,
  items,
  id
}) => {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const toggleRef = useRef(null);
  if (!(items == null ? void 0 : items.length)) return null;
  const baseId = id ?? `related-questions-${reactId.replace(/:/g, "")}`;
  const panelId = `${baseId}-panel`;
  const headingId = `${baseId}-heading`;
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      var _a;
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
        (_a = toggleRef.current) == null ? void 0 : _a.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      id,
      className: "py-16 lg:py-20 relative overflow-hidden bg-faq-gradient",
      "aria-labelledby": headingId,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-1/3 w-72 h-40 bg-primary/5 rounded-full blur-3xl" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              ref: toggleRef,
              type: "button",
              onClick: () => setOpen((v) => !v),
              "aria-expanded": open,
              "aria-controls": panelId,
              className: cn(
                "w-full flex items-center justify-between gap-4 px-6 py-5 rounded-xl bg-black border border-coral text-left transition-all",
                "hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              ),
              children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium text-sm mb-1", children: "More from this topic" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                    lineNumber: 97,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(
                    "h2",
                    {
                      id: headingId,
                      className: "text-xl md:text-2xl font-display font-bold text-foreground",
                      children: [
                        title,
                        " ",
                        /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground font-normal text-base", children: [
                          "(",
                          items.length,
                          ")"
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                          lineNumber: 105,
                          columnNumber: 17
                        }, void 0)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                      lineNumber: 100,
                      columnNumber: 15
                    },
                    void 0
                  ),
                  subtitle && /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm mt-2", children: subtitle }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                  lineNumber: 96,
                  columnNumber: 13
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  ChevronDown,
                  {
                    className: cn(
                      "h-6 w-6 shrink-0 text-primary transition-transform duration-300",
                      open && "rotate-180"
                    ),
                    "aria-hidden": "true"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                    lineNumber: 113,
                    columnNumber: 13
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: open ? "Collapse related questions" : "Expand related questions" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                  lineNumber: 120,
                  columnNumber: 13
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
              lineNumber: 84,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              id: panelId,
              role: "region",
              "aria-labelledby": headingId,
              hidden: !open,
              className: "mt-4",
              children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: items.map((item, index) => /* @__PURE__ */ jsxDEV(
                AccordionItem,
                {
                  value: `related-${index}`,
                  className: "bg-black border border-coral rounded-xl px-6 transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
                  children: [
                    /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left text-foreground hover:text-primary font-medium py-4 hover:no-underline", children: item.question }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                      lineNumber: 146,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-muted-foreground pb-5 leading-relaxed", children: item.answer }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                      lineNumber: 149,
                      columnNumber: 19
                    }, void 0)
                  ]
                },
                index,
                true,
                {
                  fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                  lineNumber: 141,
                  columnNumber: 17
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
              lineNumber: 132,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
          lineNumber: 83,
          columnNumber: 9
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/sections/RelatedQuestionsSection.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    void 0
  );
};
export {
  RelatedQuestionsSection
};
