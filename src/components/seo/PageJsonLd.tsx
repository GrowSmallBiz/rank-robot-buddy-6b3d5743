import { Helmet } from "react-helmet";

const BASE_URL = "https://grow-small-biz.org";

interface PageJsonLdProps {
  pageType: "AboutPage" | "ContactPage" | "Blog" | "WebPage";
  name: string;
  description: string;
  url: string;
  breadcrumbs: { name: string; url: string }[];
}

export const PageJsonLd = ({
  pageType,
  name,
  description,
  url,
  breadcrumbs,
}: PageJsonLdProps) => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    name,
    description,
    url: `${BASE_URL}${url}`,
    publisher: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.url}`,
      })),
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};
