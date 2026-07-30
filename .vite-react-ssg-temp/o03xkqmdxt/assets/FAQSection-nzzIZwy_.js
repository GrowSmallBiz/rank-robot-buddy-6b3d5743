import { j as jsxDEV } from "../main.mjs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TqW6W-yi.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
const isHtmlAnswer = (s) => /<\/?(strong|em|a|br|b|i|code)\b/i.test(s);
const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  schemaType = "FAQPage",
  contactCTA,
  schemaId,
  suppressSchema = false
}) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    ...schemaId && { "@id": schemaId },
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 relative overflow-hidden bg-faq-gradient", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FAQSection.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/FAQSection.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 animate-fade-up", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "FAQ" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: title }, void 0, false, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, void 0),
        subtitle && /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/FAQSection.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: `${contactCTA ? "grid grid-cols-1 lg:grid-cols-3 gap-12 items-start" : "max-w-4xl mx-auto"}`, children: [
        /* @__PURE__ */ jsxDEV("div", { className: contactCTA ? "lg:col-span-2" : "", children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxDEV(
          AccordionItem,
          {
            value: `item-${index}`,
            className: "bg-black border border-coral rounded-xl px-6 transition-all animate-fade-up hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left text-foreground hover:text-primary font-medium py-5 hover:no-underline", children: faq.question }, void 0, false, {
                fileName: "/dev-server/src/components/sections/FAQSection.tsx",
                lineNumber: 108,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-muted-foreground pb-5 leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80", children: isHtmlAnswer(faq.answer) ? /* @__PURE__ */ jsxDEV("span", { dangerouslySetInnerHTML: { __html: faq.answer } }, void 0, false, {
                fileName: "/dev-server/src/components/sections/FAQSection.tsx",
                lineNumber: 113,
                columnNumber: 23
              }, void 0) : faq.answer }, void 0, false, {
                fileName: "/dev-server/src/components/sections/FAQSection.tsx",
                lineNumber: 111,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 102,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, void 0),
        contactCTA && /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1 animate-fade-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxDEV("div", { className: "sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary", children: contactCTA.image ? /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: contactCTA.image,
              alt: contactCTA.name,
              width: 80,
              height: 80,
              className: "w-full h-full rounded-full object-cover"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/sections/FAQSection.tsx",
              lineNumber: 130,
              columnNumber: 21
            },
            void 0
          ) : /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full rounded-full bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-3xl font-display font-bold text-primary", children: contactCTA.name.charAt(0) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 138,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-4", children: contactCTA.title }, void 0, false, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-4", children: contactCTA.description }, void 0, false, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium mb-6", children: contactCTA.tagline }, void 0, false, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-cursive text-2xl text-foreground italic", children: contactCTA.name }, void 0, false, {
              fileName: "/dev-server/src/components/sections/FAQSection.tsx",
              lineNumber: 159,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: contactCTA.role }, void 0, false, {
              fileName: "/dev-server/src/components/sections/FAQSection.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/FAQSection.tsx",
            lineNumber: 158,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              size: "lg",
              className: "w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300",
              asChild: true,
              children: /* @__PURE__ */ jsxDEV(Link, { to: contactCTA.buttonHref, children: [
                contactCTA.buttonText,
                /* @__PURE__ */ jsxDEV(ArrowUpRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/FAQSection.tsx",
                  lineNumber: 170,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/FAQSection.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/sections/FAQSection.tsx",
              lineNumber: 163,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/FAQSection.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/FAQSection.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/FAQSection.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, void 0),
    !suppressSchema && /* @__PURE__ */ jsxDEV(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/sections/FAQSection.tsx",
        lineNumber: 181,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/FAQSection.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, void 0);
};
export {
  FAQSection
};
