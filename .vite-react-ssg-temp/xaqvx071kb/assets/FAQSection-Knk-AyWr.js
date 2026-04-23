import { jsxs, jsx } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-b6vWRJCV.js";
import { B as Button } from "./Header-Dct2bBAe.js";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "react";
import "@radix-ui/react-accordion";
import "../main.mjs";
import "vite-react-ssg";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const isHtmlAnswer = (s) => /<\/?(strong|em|a|br|b|i|code)\b/i.test(s);
const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  schemaType = "FAQPage",
  contactCTA,
  schemaId
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
  return /* @__PURE__ */ jsxs("section", { className: "py-24 lg:py-32 relative overflow-hidden", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: title }),
        subtitle && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: subtitle })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${contactCTA ? "grid grid-cols-1 lg:grid-cols-3 gap-12 items-start" : "max-w-4xl mx-auto"}`, children: [
        /* @__PURE__ */ jsx("div", { className: contactCTA ? "lg:col-span-2" : "", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: `item-${index}`,
            className: "bg-black border rounded-xl px-6 transition-all animate-fade-up hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
            style: { animationDelay: `${index * 0.05}s`, borderColor: "#ff7f50ff" },
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-foreground hover:text-primary font-medium py-5 hover:no-underline", children: faq.question }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pb-5 leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80", children: isHtmlAnswer(faq.answer) ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: faq.answer } }) : faq.answer })
            ]
          },
          index
        )) }) }),
        contactCTA && /* @__PURE__ */ jsx("div", { className: "lg:col-span-1 animate-fade-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]", children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary", children: contactCTA.image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: contactCTA.image,
              alt: contactCTA.name,
              width: 80,
              height: 80,
              className: "w-full h-full rounded-full object-cover"
            }
          ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full bg-background flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-display font-bold text-primary", children: contactCTA.name.charAt(0) }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-4", children: contactCTA.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: contactCTA.description }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium mb-6", children: contactCTA.tagline }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-cursive text-2xl text-foreground italic", children: contactCTA.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: contactCTA.role })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300",
              asChild: true,
              children: /* @__PURE__ */ jsxs(Link, { to: contactCTA.buttonHref, children: [
                contactCTA.buttonText,
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-5 h-5 ml-2" })
              ] })
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
      }
    )
  ] });
};
export {
  FAQSection
};
