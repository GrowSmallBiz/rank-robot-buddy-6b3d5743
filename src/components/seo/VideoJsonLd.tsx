import { Head } from "vite-react-ssg";

interface VideoJsonLdProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 e.g. "PT2M30S"
}

export const VideoJsonLd = ({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate,
  duration,
}: VideoJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl,
    uploadDate,
    ...(duration && { duration }),
    publisher: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: "https://growsmallbiz.io",
    },
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};
