import type { CampaignCard } from "./CampaignResultsCards";

// ── Reusable card definitions ──

const medSpaLocalSEO: CampaignCard = {
  title: "Med Spa Local SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+552.7% Users Year Over Year",
    "+75.9% GBP Phone Calls",
    "#1 Rankings — Laser Skin Treatment",
    "Significant local pack visibility gains",
  ],
  link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/",
};

const medSpaAISEO: CampaignCard = {
  title: "Med Spa AI SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+252% Search Impressions (GSC)",
    "+78% Organic Users",
    "+66.76% Total Clicks (GSC)",
    "Average position improved from 31.8 to 25.5",
  ],
  link: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/",
};

const dentalGoogleAds: CampaignCard = {
  title: "Dental Practice Google Ads",
  subtitle: "Google Ads Campaign",
  metrics: [
    "+175.51% Conversions Year Over Year",
    "-64.62% Cost Per Acquisition",
    "+187.04% Conversion Rate",
    "+127.25% Account CTR",
  ],
  link: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/",
};

const chiroAISEO: CampaignCard = {
  title: "Chiropractic AI SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+138.8% Users — Organic Search",
    "+32.99% Total Clicks (GSC)",
    "#1 Emergency Chiropractic Care",
    "+33.4% GBP Website Visits YOY",
  ],
  link: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/",
};

const roofingSEO: CampaignCard = {
  title: "Roofing Restoration Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+26% Organic Conversions",
    "+76% GBP Searches",
    "+127% GBP Views",
    "90+ Spot Keyword Gains",
  ],
  link: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/",
};

const cleaningSEO: CampaignCard = {
  title: "Cleaning Service SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+261.20% Clicks",
    "+868.02% Impressions",
    "+114.8% GBP Calls",
    "+119.3% GBP Website Clicks",
  ],
  link: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/",
};

const hvacSEO: CampaignCard = {
  title: "HVAC & Plumbing Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+1,395.2% Phone Calls",
    "+520% GMB Website Actions",
    "Significant improvement for top service keywords",
    "Core plumbing + location map pack rankings",
  ],
  link: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/",
};

const homeRemodelingGrowth: CampaignCard = {
  title: "Home Remodeling Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+366.67% Goal Completions",
    "+382.11% Website Clicks",
    "+375.10% Impressions",
    "+15% GBP Calls",
  ],
  link: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/",
};

const treeLawnSEO: CampaignCard = {
  title: "Tree & Lawn SEO Growth",
  subtitle: "Local SEO Campaign",
  metrics: [
    "+25.77% Clicks",
    "+138.54% Impressions",
    "1.1 Average Map Rank",
    "+770% Phone Number Clicks",
  ],
  link: "/home-service-contractors/marketing-for-landscapers/landscaping-marketing-case-study/",
};

// ── Per-city card sets (2 Health & Wellness + 2 Home Service) ──

export const danvilleCards: CampaignCard[] = [medSpaLocalSEO, dentalGoogleAds, roofingSEO, cleaningSEO];
export const walnutCreekCards: CampaignCard[] = [chiroAISEO, medSpaLocalSEO, hvacSEO, homeRemodelingGrowth];
export const sanRamonCards: CampaignCard[] = [dentalGoogleAds, medSpaAISEO, treeLawnSEO, roofingSEO];
export const dublinCards: CampaignCard[] = [medSpaLocalSEO, chiroAISEO, cleaningSEO, homeRemodelingGrowth];
export const pleasantonCards: CampaignCard[] = [dentalGoogleAds, medSpaAISEO, hvacSEO, treeLawnSEO];
export const martinezCards: CampaignCard[] = [chiroAISEO, medSpaLocalSEO, roofingSEO, cleaningSEO];
export const livermoreCards: CampaignCard[] = [medSpaAISEO, dentalGoogleAds, homeRemodelingGrowth, treeLawnSEO];
export const tracyCards: CampaignCard[] = [chiroAISEO, medSpaLocalSEO, cleaningSEO, hvacSEO];
export const concordCards: CampaignCard[] = [dentalGoogleAds, medSpaAISEO, roofingSEO, homeRemodelingGrowth];
export const pleasantHillCards: CampaignCard[] = [medSpaLocalSEO, chiroAISEO, treeLawnSEO, cleaningSEO];
