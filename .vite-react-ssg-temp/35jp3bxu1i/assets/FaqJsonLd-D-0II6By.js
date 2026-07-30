import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
const FaqJsonLd = ({
  items,
  pageUrl,
  description = "",
  alternativeHeadline = "The most frequently asked questions"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#FAQPage`,
    url: pageUrl,
    description,
    alternativeHeadline,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxDEV(Head, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(schema) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/FaqJsonLd.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/FaqJsonLd.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, void 0);
};
export {
  FaqJsonLd as F
};
