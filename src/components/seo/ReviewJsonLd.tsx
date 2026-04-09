import { Head } from "vite-react-ssg";

const BASE_URL = "https://growsmallbiz.io";

interface ReviewItem {
  author: string;
  reviewBody: string;
  ratingValue: number;
}

interface ReviewJsonLdProps {
  reviews: ReviewItem[];
  itemReviewed: {
    name: string;
    url: string;
  };
}

export const ReviewJsonLd = ({ reviews, itemReviewed }: ReviewJsonLdProps) => {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.ratingValue, 0) / reviews.length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: itemReviewed.name,
    url: `${BASE_URL}${itemReviewed.url}${itemReviewed.url.endsWith("/") ? "" : "/"}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: String(reviews.length),
      bestRating: "5",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.ratingValue),
        bestRating: "5",
      },
      reviewBody: r.reviewBody,
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};
