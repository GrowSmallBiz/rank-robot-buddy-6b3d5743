import { lazy as reactLazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

// Lazy-load toast components — they're rarely needed on initial render
const Toaster = reactLazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = reactLazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

const AppLayout = () => (
  <TooltipProvider>
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
    </Suspense>
    <Outlet />
  </TooltipProvider>
);

const lazy = (importFn: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    const mod = await importFn();
    return { Component: mod.default };
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

      { path: "case-studies/local-seo-service/hvac-plumbing-electrical", lazy: lazy(() => import("./pages/case-studies/local-seo-service/HvacPlumbingElectrical")) },
      { path: "case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical", lazy: lazy(() => import("./pages/case-studies/google-ads-for-small-businesses/HvacPlumbingElectrical")) },
      { path: "case-studies/roofers", lazy: lazy(() => import("./pages/case-studies/Roofers")) },
      { path: "case-studies/tree-lawn-landscaping", lazy: lazy(() => import("./pages/case-studies/TreeLawnLandscaping")) },
      { path: "case-studies/home-remodeling", lazy: lazy(() => import("./pages/case-studies/HomeRemodeling")) },
      { path: "case-studies/cleaning-services", lazy: lazy(() => import("./pages/case-studies/CleaningServices")) },
      { path: "contact", lazy: lazy(() => import("./pages/Contact")) },
      { path: "privacy-policy", lazy: lazy(() => import("./pages/PrivacyPolicy")) },
      { path: "terms-of-service", lazy: lazy(() => import("./pages/TermsOfService")) },
      { path: "404", lazy: lazy(() => import("./pages/NotFound")) },
      { path: "*", lazy: lazy(() => import("./pages/NotFound")) },
    ],
  },
];

export default AppLayout;
