import { j as jsxDEV } from "../main.mjs";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { c as chamberWalnutCreek, a as chamberDanville, b as chamberSanRamon, d as chamberConcord } from "./chamber-concord-NuRKgzfU.js";
const CampaignResultsCards = ({ cards }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: cards.map((card, i) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "bg-card border border-border rounded-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }, void 0, false, {
            fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }, void 0, false, {
            fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle }, void 0, false, {
            fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-5", children: card.metrics.map((metric, mi) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
              lineNumber: 36,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/85", children: metric }, void 0, false, {
              fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
              lineNumber: 37,
              columnNumber: 19
            }, void 0)
          ] }, mi, true, {
            fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
            lineNumber: 35,
            columnNumber: 17
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: card.link,
              className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline",
              children: "View Case Studies →"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
              lineNumber: 41,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/components/locations/CampaignResultsCards.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, void 0);
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
  link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/"
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
  link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/"
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
  link: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/"
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
  link: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/"
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
  link: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/"
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
  link: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/"
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
  link: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/"
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
  link: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/"
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
  breadcrumbs,
  nearbyCities,
  rating
}) => {
  const pageUrl = `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`;
  const localBusinessId = `${pageUrl}#localbusiness`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const areaServed = [
    {
      "@type": "City",
      name: `${cityName}, ${stateCode}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude
      }
    },
    ...(nearbyCities ?? []).map((c) => ({
      "@type": "City",
      name: `${c.name}, ${stateCode}`,
      ...c.latitude !== void 0 && c.longitude !== void 0 ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: c.latitude,
          longitude: c.longitude
        }
      } : {}
    }))
  ];
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MarketingAgency", "ProfessionalService"],
    "@id": localBusinessId,
    name: `GrowSmallBiz Digital Marketing — ${cityName}, ${stateCode}`,
    description,
    url: pageUrl,
    image: `${BASE_URL}/images/growsmallbiz-logo.webp`,
    logo: `${BASE_URL}/images/growsmallbiz-logo.webp`,
    telephone: "+1-925-886-3724",
    email: "info@growsmallbiz.io",
    priceRange: "$$",
    // Legal/HQ address — required for LocalBusiness validity
    address: {
      "@type": "PostalAddress",
      streetAddress: "52 Antelope CT",
      addressLocality: "Danville",
      addressRegion: "CA",
      postalCode: "94506",
      addressCountry: "US"
    },
    // Geographic center signal: the city this page targets
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude
    },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    // Cross-reference to the sitewide Organization entity
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
    ...rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount
      }
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
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
  return /* @__PURE__ */ jsxDEV(Head, { children: [
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/LocationJsonLd.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/LocationJsonLd.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/seo/LocationJsonLd.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, void 0);
};
const CHAMBERS = [
  {
    src: chamberWalnutCreek,
    alt: "Walnut Creek Chamber of Commerce",
    href: "https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068"
  },
  {
    src: chamberDanville,
    alt: "Danville Area Chamber of Commerce",
    href: "https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687"
  },
  {
    src: chamberSanRamon,
    alt: "San Ramon Chamber of Commerce",
    href: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986"
  },
  {
    src: chamberConcord,
    alt: "Greater Concord Chamber of Commerce",
    href: "https://www.concordchamber.com/list/member/growsmallbiz-digital-marketing-12991"
  }
];
const ChamberTrustBar = () => /* @__PURE__ */ jsxDEV(
  "section",
  {
    "aria-label": "Proud Chamber of Commerce member",
    className: "bg-white py-6 md:py-8 border-y border-black/5",
    children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5", children: "Proud Member Of" }, void 0, false, {
        fileName: "/dev-server/src/components/locations/ChamberTrustBar.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14", children: CHAMBERS.map((c) => /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: c.href,
          target: "_blank",
          rel: "noopener",
          "aria-label": `${c.alt} — view GrowSmallBiz member profile`,
          className: "inline-block transition-transform duration-300 hover:-translate-y-0.5",
          children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: c.src,
              alt: c.alt,
              loading: "lazy",
              className: "h-12 md:h-16 w-auto object-contain"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/locations/ChamberTrustBar.tsx",
              lineNumber: 54,
              columnNumber: 13
            },
            void 0
          )
        },
        c.alt,
        false,
        {
          fileName: "/dev-server/src/components/locations/ChamberTrustBar.tsx",
          lineNumber: 46,
          columnNumber: 11
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/locations/ChamberTrustBar.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/locations/ChamberTrustBar.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/locations/ChamberTrustBar.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  void 0
);
export {
  ChamberTrustBar as C,
  LocationJsonLd as L,
  CampaignResultsCards as a,
  dublinCards as b,
  concordCards as c,
  danvilleCards as d,
  pleasantHillCards as e,
  livermoreCards as l,
  martinezCards as m,
  pleasantonCards as p,
  sanRamonCards as s,
  tracyCards as t,
  walnutCreekCards as w
};
