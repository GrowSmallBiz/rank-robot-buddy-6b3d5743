import { Head } from "vite-react-ssg";

interface SpeakableJsonLdProps {
  /** Page URL the speakable selectors apply to (absolute or root-relative). */
  pageUrl: string;
  /**
   * CSS selectors that target text suitable for voice/AI assistants to read aloud.
   * Defaults to the H1 inside the hero section + the first paragraph in <main>.
   * Only pass selectors that ACTUALLY exist in the rendered DOM — Google ignores
   * Speakable schema whose selectors don't match anything.
   */
  cssSelectors?: string[];
  /** Optional XPath alternatives (rarely needed; CSS selectors are preferred). */
  xpaths?: string[];
}

const BASE_URL = "https://growsmallbiz.io";

const toAbsolute = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return `${BASE_URL}/${url}`;
};

const DEFAULT_SELECTORS = [
  ".hero-section h1",
  ".hero-section p",
  "main h2:first-of-type",
];

/**
 * SpeakableSpecification embedded inside a WebPage entity.
 * Helps Google Assistant / voice search read summary content aloud and signals
 * AEO/GEO answer-engine crawlers (ChatGPT, Perplexity, Gemini) which content
 * to prioritize when generating answers.
 *
 * NOTE: speakable is a beta feature on Google's side, but it is also one of the
 * cleanest signals we can give answer-engine crawlers about TL;DR content.
 */
export const SpeakableJsonLd = ({
  pageUrl,
  cssSelectors = DEFAULT_SELECTORS,
  xpaths,
}: SpeakableJsonLdProps) => {
  const absolutePageUrl = toAbsolute(pageUrl);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absolutePageUrl}#speakable-webpage`,
    url: absolutePageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
      ...(xpaths && xpaths.length > 0 && { xpath: xpaths }),
    },
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};
