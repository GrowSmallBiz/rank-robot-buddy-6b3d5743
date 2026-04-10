/* republish */ import { lazy as reactLazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import ScrollToTop from "@/components/ScrollToTop";
import Redirect from "@/components/Redirect";

// Lazy-load toast components — they're rarely needed on initial render
const Toaster = reactLazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = reactLazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

const AppLayout = () => (
  <TooltipProvider>
    <ScrollToTop />
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
    </Suspense>
    <Outlet />
  </TooltipProvider>
);

const lazy = (importFn: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    try {
      const mod = await importFn();
      return { Component: mod.default };
    } catch (err) {
      // Stale chunk after deploy — reload once to fetch fresh assets
      const key = "chunk-reload";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
      throw err;
    }
  };

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, lazy: lazy(() => import("./pages/Index")) },
      { path: "about", lazy: lazy(() => import("./pages/About")) },
      { path: "services", lazy: lazy(() => import("./pages/Services")) },
      { path: "service", lazy: lazy(() => import("./pages/Services")) },
      { path: "services/paid-advertising", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "services/paid-advertising/google-ads", lazy: lazy(() => import("./pages/services/GoogleAds")) },
      { path: "services/paid-advertising/google-local-services-ads", lazy: lazy(() => import("./pages/services/LSA")) },
      { path: "services/paid-advertising/facebook-ads", lazy: lazy(() => import("./pages/services/FacebookAds")) },
      { path: "services/website-design", lazy: lazy(() => import("./pages/services/WebsiteDesign")) },
      { path: "services/seo-agency", lazy: lazy(() => import("./pages/services/ManagedAISEO")) },
      { path: "services/seo-agency/aeo", lazy: lazy(() => import("./pages/services/AEO")) },
      { path: "services/seo-agency/geo", lazy: lazy(() => import("./pages/services/GEO")) },
      { path: "services/seo-agency/local-seo", lazy: lazy(() => import("./pages/services/LocalSEO")) },
      { path: "services/seo-agency/authority-building", lazy: lazy(() => import("./pages/services/AuthorityBuilding")) },
      { path: "services/seo-agency/link-building", lazy: lazy(() => import("./pages/services/LinkBuilding")) },
      { path: "services/seo-agency/technical-seo", lazy: lazy(() => import("./pages/services/TechnicalSEO")) },
      { path: "services/seo-agency/on-page-seo", lazy: lazy(() => import("./pages/services/OnPageSEO")) },
      { path: "services/paid-ads", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "services/marketing-automation-for-small-business", lazy: lazy(() => import("./pages/services/MarketingAutomation")) },
      { path: "services/marketing-automation-for-small-business/universal-inbox", lazy: lazy(() => import("./pages/demos/UniversalInbox")) },
      { path: "services/marketing-automation-for-small-business/workflow-automations", lazy: lazy(() => import("./pages/demos/WorkflowAutomations")) },
      { path: "services/marketing-automation-for-small-business/website-builder", lazy: lazy(() => import("./pages/demos/WebsiteBuilder")) },
      { path: "services/marketing-automation-for-small-business/email-sms-marketing", lazy: lazy(() => import("./pages/demos/EmailSmsMarketing")) },
      { path: "services/marketing-automation-for-small-business/integrated-payments", lazy: lazy(() => import("./pages/demos/IntegratedPayments")) },
      { path: "services/marketing-automation-for-small-business/social-media-planner", lazy: lazy(() => import("./pages/demos/SocialMediaPlanner")) },
      { path: "services/marketing-automation-for-small-business/calendar-scheduling", lazy: lazy(() => import("./pages/demos/CalendarScheduling")) },
      { path: "services/marketing-automation-for-small-business/sales-tracker", lazy: lazy(() => import("./pages/demos/SalesTracker")) },
      { path: "services/marketing-automation-for-small-business/forms-surveys", lazy: lazy(() => import("./pages/demos/FormsSurveys")) },
      { path: "services/marketing-automation-for-small-business/reviews", lazy: lazy(() => import("./pages/demos/Reviews")) },
      { path: "services/marketing-automation-for-small-business/call-tracking", lazy: lazy(() => import("./pages/demos/CallTracking")) },
      { path: "services/marketing-automation-for-small-business/crm", lazy: lazy(() => import("./pages/demos/Crm")) },
      { path: "services/marketing-automation-for-small-business/sales-funnels", lazy: lazy(() => import("./pages/demos/SalesFunnels")) },
      { path: "services/marketing-automation-for-small-business/memberships", lazy: lazy(() => import("./pages/demos/Memberships")) },
      { path: "services/marketing-automation-for-small-business/webchat", lazy: lazy(() => import("./pages/demos/Webchat")) },
      { path: "services/marketing-automation-for-small-business/generate-leads", lazy: lazy(() => import("./pages/demos/GenerateLeads")) },
      
      { path: "locations/locations-we-serve", lazy: lazy(() => import("./pages/locations/LocationsWeServe")) },
      { path: "locations/danville-ca", lazy: lazy(() => import("./pages/locations/DanvilleCA")) },
      { path: "locations/san-ramon-ca", lazy: lazy(() => import("./pages/locations/SanRamonCA")) },
      { path: "locations/walnut-creek-ca", lazy: lazy(() => import("./pages/locations/WalnutCreekCA")) },
      { path: "locations/concord-ca", lazy: lazy(() => import("./pages/locations/ConcordCA")) },
      { path: "locations/dublin-ca", lazy: lazy(() => import("./pages/locations/DublinCA")) },
      { path: "locations/pleasanton-ca", lazy: lazy(() => import("./pages/locations/PleasantonCA")) },
      { path: "locations/livermore-ca", lazy: lazy(() => import("./pages/locations/LivermoreCA")) },
      { path: "locations/tracy-ca", lazy: lazy(() => import("./pages/locations/TracyCA")) },
      { path: "locations/pleasant-hill-ca", lazy: lazy(() => import("./pages/locations/PleasantHillCA")) },
      { path: "locations/martinez-ca", lazy: lazy(() => import("./pages/locations/MartinezCA")) },

      // ── NEW niche page routes ──
      { path: "home-service-contractors", lazy: lazy(() => import("./pages/industries/HomeServices")) },
      { path: "home-service-contractors/marketing-for-hvac-contractors", lazy: lazy(() => import("./pages/industries/hvac-marketing/index")) },

      { path: "health-and-wellness-practices", lazy: lazy(() => import("./pages/industries/HealthAndWellness")) },
      { path: "health-and-wellness-practices/marketing-for-med-spas", lazy: lazy(() => import("./pages/industries/med-spa-marketing/index")) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors", lazy: lazy(() => import("./pages/industries/chiropractic-marketing/index")) },
      { path: "health-and-wellness-practices/marketing-for-dentists", lazy: lazy(() => import("./pages/industries/dental-marketing/index")) },

      { path: "professional-services", lazy: lazy(() => import("./pages/industries/ProfessionalServices")) },
      { path: "professional-services/marketing-for-real-estate-agents-brokers", lazy: lazy(() => import("./pages/industries/Realtors")) },
      { path: "professional-services/marketing-for-realtors", lazy: lazy(() => import("./pages/industries/RealtorMarketing")) },
      { path: "professional-services/marketing-for-realtors-v2", lazy: lazy(() => import("./pages/industries/RealtorMarketingV2")) },
      { path: "professional-services/marketing-for-photographers", lazy: lazy(() => import("./pages/industries/photographers-marketing/index")) },

      // ── NEW case study routes ──
      { path: "home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study", lazy: lazy(() => import("./pages/case-studies/local-seo-service/HvacPlumbingElectrical")) },
      { path: "home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study", lazy: lazy(() => import("./pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical")) },
      { path: "home-service-contractors/marketing-for-roofers/roofing-seo-case-study", lazy: lazy(() => import("./pages/case-studies/Roofers")) },
      { path: "home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study", lazy: lazy(() => import("./pages/case-studies/TreeLawnLandscaping")) },
      { path: "home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study", lazy: lazy(() => import("./pages/case-studies/HomeRemodeling")) },
      { path: "home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study", lazy: lazy(() => import("./pages/case-studies/CleaningServices")) },

      { path: "health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study", lazy: lazy(() => import("./pages/case-studies/MedSpaCaseStudy")) },
      { path: "health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study", lazy: lazy(() => import("./pages/case-studies/DentalCaseStudy")) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study", lazy: lazy(() => import("./pages/case-studies/ChiropracticCaseStudy")) },

      // ── 301 REDIRECTS: old niche pages → new ──
      { path: "home-service-contractors/hvac-marketing", Component: () => <Redirect to="/home-service-contractors/marketing-for-hvac-contractors/" /> },
      { path: "home-service-contractors/roofing-marketing", Component: () => <Redirect to="/home-service-contractors/marketing-for-roofers/" /> },
      { path: "home-service-contractors/landscaping-marketing", Component: () => <Redirect to="/home-service-contractors/marketing-for-landscapers/" /> },
      { path: "home-service-contractors/home-renovation-marketing", Component: () => <Redirect to="/home-service-contractors/marketing-for-home-remodelers/" /> },
      { path: "home-service-contractors/cleaning-service-marketing", Component: () => <Redirect to="/home-service-contractors/marketing-for-cleaning-services/" /> },

      { path: "health-and-wellness-practices/med-spa-marketing", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-med-spas/" /> },
      { path: "health-and-wellness-practices/chiropractic-marketing", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-chiropractors/" /> },
      { path: "health-and-wellness-practices/dental-marketing", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-dentists/" /> },

      { path: "professional-services/realtor-marketing", Component: () => <Redirect to="/professional-services/marketing-for-realtors/" /> },
      { path: "professional-services/real-estate-marketing", Component: () => <Redirect to="/professional-services/marketing-for-real-estate-agents-brokers/" /> },
      { path: "professional-services/photographers-marketing", Component: () => <Redirect to="/professional-services/marketing-for-photographers/" /> },

      // ── 301 REDIRECTS: ghost file-path URLs (SSG pre-renders physical .tsx paths) → canonical ──
      { path: "case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical", Component: () => <Redirect to="/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" /> },
      { path: "case-studies/local-seo-service/hvac-plumbing-electrical", Component: () => <Redirect to="/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" /> },
      { path: "case-studies/local-seo-hvac-plumbing-electrical", Component: () => <Redirect to="/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" /> },
      { path: "case-studies/roofers", Component: () => <Redirect to="/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/" /> },
      { path: "case-studies/tree-lawn-landscaping", Component: () => <Redirect to="/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/" /> },
      { path: "case-studies/home-remodeling", Component: () => <Redirect to="/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/" /> },
      { path: "case-studies/cleaning-services", Component: () => <Redirect to="/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/" /> },
      { path: "case-studies/med-spa-case-study", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/" /> },
      { path: "case-studies/dental-case-study", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" /> },
      { path: "case-studies/chiropractic-case-study", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" /> },

      // ── 301 REDIRECTS: old case study pages → new ──
      { path: "home-service-contractors/hvac-marketing/seo-case-study", Component: () => <Redirect to="/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" /> },
      { path: "home-service-contractors/hvac-marketing/google-ads-case-study", Component: () => <Redirect to="/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" /> },
      { path: "home-service-contractors/roofing-marketing/case-study", Component: () => <Redirect to="/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/" /> },
      { path: "home-service-contractors/landscaping-marketing/case-study", Component: () => <Redirect to="/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/" /> },
      { path: "home-service-contractors/home-renovation-marketing/case-study", Component: () => <Redirect to="/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/" /> },
      { path: "home-service-contractors/cleaning-service-marketing/case-study", Component: () => <Redirect to="/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/" /> },

      { path: "health-and-wellness-practices/med-spa-marketing/case-study", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/" /> },
      { path: "health-and-wellness-practices/dental-marketing/case-study", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" /> },
      { path: "health-and-wellness-practices/chiropractic-marketing/case-study", Component: () => <Redirect to="/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" /> },

      { path: "contact", lazy: lazy(() => import("./pages/Contact")) },
      { path: "privacy-policy", lazy: lazy(() => import("./pages/PrivacyPolicy")) },
      { path: "terms-of-service", lazy: lazy(() => import("./pages/TermsOfService")) },
      { path: "404", lazy: lazy(() => import("./pages/NotFound")) },
      { path: "*", lazy: lazy(() => import("./pages/NotFound")) },
    ],
  },
];

export default AppLayout;
