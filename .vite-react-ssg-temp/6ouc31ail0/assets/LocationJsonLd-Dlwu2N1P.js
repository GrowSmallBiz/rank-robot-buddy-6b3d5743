import { jsx, jsxs } from "react/jsx-runtime";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
const CampaignResultsCards = ({ cards }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: cards.map((card, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-5", children: card.metrics.map((metric, mi) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: metric })
          ] }, mi)) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: card.link,
              className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline",
              children: "View Case Studies →"
            }
          )
        ] })
      ]
    },
    i
  )) });
};
const medSpaLocalSEO = {
  title: "Med Spa Local SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+552.7% Users Year Over Year",
    "+75.9% GBP Phone Calls",
    "#1 Rankings — Laser Skin Treatment",
    "Significant local pack visibility gains"
  ],
  link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/"
};
const medSpaAISEO = {
  title: "Med Spa AI SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+252% Search Impressions (GSC)",
    "+78% Organic Users",
    "+66.76% Total Clicks (GSC)",
    "Average position improved from 31.8 to 25.5"
  ],
  link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/"
};
const dentalGoogleAds = {
  title: "Dental Practice Google Ads",
  subtitle: "Google Ads Campaign",
  metrics: [
    "+175.51% Conversions Year Over Year",
    "-64.62% Cost Per Acquisition",
    "+187.04% Conversion Rate",
    "+127.25% Account CTR"
  ],
  link: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/"
};
const chiroAISEO = {
  title: "Chiropractic AI SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+138.8% Users — Organic Search",
    "+32.99% Total Clicks (GSC)",
    "#1 Emergency Chiropractic Care",
    "+33.4% GBP Website Visits YOY"
  ],
  link: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/"
};
const roofingSEO = {
  title: "Roofing Restoration Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+26% Organic Conversions",
    "+76% GBP Searches",
    "+127% GBP Views",
    "90+ Spot Keyword Gains"
  ],
  link: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/"
};
const cleaningSEO = {
  title: "Cleaning Service SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+261.20% Clicks",
    "+868.02% Impressions",
    "+114.8% GBP Calls",
    "+119.3% GBP Website Clicks"
  ],
  link: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/"
};
const hvacSEO = {
  title: "HVAC & Plumbing Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+1,395.2% Phone Calls",
    "+520% GMB Website Actions",
    "Significant improvement for top service keywords",
    "Core plumbing + location map pack rankings"
  ],
  link: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/"
};
const homeRemodelingGrowth = {
  title: "Home Remodeling Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+366.67% Goal Completions",
    "+382.11% Website Clicks",
    "+375.10% Impressions",
    "+15% GBP Calls"
  ],
  link: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/"
};
const treeLawnSEO = {
  title: "Tree & Lawn SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+25.77% Clicks",
    "+138.54% Impressions",
    "1.1 Average Map Rank",
    "+770% Phone Number Clicks"
  ],
  link: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/"
};
const danvilleCards = [medSpaLocalSEO, dentalGoogleAds, roofingSEO, cleaningSEO];
const walnutCreekCards = [chiroAISEO, medSpaLocalSEO, hvacSEO, homeRemodelingGrowth];
const sanRamonCards = [dentalGoogleAds, medSpaAISEO, treeLawnSEO, roofingSEO];
const dublinCards = [medSpaLocalSEO, chiroAISEO, cleaningSEO, homeRemodelingGrowth];
const pleasantonCards = [dentalGoogleAds, medSpaAISEO, hvacSEO, treeLawnSEO];
const martinezCards = [chiroAISEO, medSpaLocalSEO, roofingSEO, cleaningSEO];
const livermoreCards = [medSpaAISEO, dentalGoogleAds, homeRemodelingGrowth, treeLawnSEO];
const tracyCards = [chiroAISEO, medSpaLocalSEO, cleaningSEO, hvacSEO];
const concordCards = [dentalGoogleAds, medSpaAISEO, roofingSEO, homeRemodelingGrowth];
const pleasantHillCards = [medSpaLocalSEO, chiroAISEO, treeLawnSEO, cleaningSEO];
const BASE_URL = "https://growsmallbiz.io";
const LocationJsonLd = ({
  cityName,
  stateCode,
  description,
  url,
  latitude,
  longitude,
  breadcrumbs
}) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `GrowSmallBiz Digital Marketing – ${cityName}, ${stateCode}`,
    description,
    url: `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`,
    telephone: "+1-925-886-3724",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: stateCode,
      addressCountry: "US"
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude
      }
    },
    parentOrganization: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.url}${crumb.url.endsWith("/") ? "" : "/"}`
      }))
    ]
  };
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(locationSchema) }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) })
  ] });
};
export {
  CampaignResultsCards as C,
  LocationJsonLd as L,
  dublinCards as a,
  pleasantHillCards as b,
  concordCards as c,
  danvilleCards as d,
  livermoreCards as l,
  martinezCards as m,
  pleasantonCards as p,
  sanRamonCards as s,
  tracyCards as t,
  walnutCreekCards as w
};
