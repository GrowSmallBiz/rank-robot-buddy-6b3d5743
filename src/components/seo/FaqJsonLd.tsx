import { Head } from "vite-react-ssg";

/**
 * FaqJsonLd — emits a single schema.org FAQPage JSON-LD block for a page.
 *
 * Pattern follows ServiceJsonLd / ArticleJsonLd in this folder.
 *
 * IMPORTANT: When this component is mounted on a page, ensure no other
 * FAQPage schema is being emitted on the same URL (e.g. by passing
 * suppressSchema to FAQSection). Duplicate FAQPage schema on the same
 * page is flagged as an error in Google's Rich Results Test.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  items: FaqItem[];
  /** Absolute page URL (with trailing slash). Used to build the @id. */
  pageUrl: string;
  /** Optional FAQPage description. */
  description?: string;
  /** Optional alternativeHeadline. */
  alternativeHeadline?: string;
}

export const FaqJsonLd = ({
  items,
  pageUrl,
  description = "",
  alternativeHeadline = "The most frequently asked questions",
}: FaqJsonLdProps) => {
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
        text: item.answer,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};
