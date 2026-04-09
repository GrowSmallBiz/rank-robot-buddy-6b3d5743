import { Head } from "vite-react-ssg";

const BASE_URL = "https://growsmallbiz.io";

const navigationItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
  { name: "SEO Agency", url: "/services/seo-agency/" },
  { name: "Paid Advertising", url: "/services/paid-advertising/" },
  { name: "Website Design", url: "/services/website-design/" },
  { name: "Marketing Automation", url: "/services/marketing-automation-for-small-business/" },
  { name: "Home Service Contractors", url: "/home-service-contractors/" },
  { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
  { name: "Professional Services", url: "/professional-services/" },
  { name: "Locations", url: "/locations/locations-we-serve/" },
  { name: "About", url: "/about/" },
  { name: "Contact", url: "/contact/" },
];

export const SiteNavigationJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: navigationItems.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};
