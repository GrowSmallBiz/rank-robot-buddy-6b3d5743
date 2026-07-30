import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
const BASE_URL = "https://growsmallbiz.io";
const toAbsolute = (url) => {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return `${BASE_URL}/${url}`;
};
const DEFAULT_SELECTORS = [
  ".hero-section h1",
  ".hero-section p",
  "main h2:first-of-type"
];
const SpeakableJsonLd = ({
  pageUrl,
  cssSelectors = DEFAULT_SELECTORS,
  xpaths
}) => {
  const absolutePageUrl = toAbsolute(pageUrl);
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absolutePageUrl}#speakable-webpage`,
    url: absolutePageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
      ...xpaths && xpaths.length > 0 && { xpath: xpaths }
    }
  };
  return /* @__PURE__ */ jsxDEV(Head, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(schema) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/SpeakableJsonLd.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/SpeakableJsonLd.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, void 0);
};
export {
  SpeakableJsonLd as S
};
