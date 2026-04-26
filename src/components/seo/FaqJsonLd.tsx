import { Head } from "vite-react-ssg";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  /** The FAQ Q&A array (single source of truth shared with the visible FAQ section). */
  items: FaqItem[];
  /** Absolute page URL — used to build the FAQPage @id. */
  pageUrl: string;
  /** Optional FAQPage description. */
  description?: string;
  /** Optional alternativeHeadline. */
  alternativeHeadline?: string;
}

/**
 * Emits a schema.org FAQPage JSON-LD block inside <Head>, serialized into the
 * static HTML by vite-react-ssg so AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
 * etc.) that do not execute JavaScript can index the Q&A.
 *
 * The `items` prop must be the SAME array that drives the visible FAQ section
 * on the page — no duplication of question/answer text.
 */
export const FaqJsonLd = ({
  items,
  pageUrl,
  description = "",
  alternativeHeadline = "The most frequently asked questions",
}: FaqJsonLdProps) => {
  const faqSchema = {
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
        text: item.answer,
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Head>
  );
};
