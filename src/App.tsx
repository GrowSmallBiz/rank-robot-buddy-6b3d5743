import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import Index from "./pages/Index";

const AppLayout = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
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
      { index: true, Component: Index },
      { path: "about", lazy: lazy(() => import("./pages/About")) },
      { path: "services", lazy: lazy(() => import("./pages/Services")) },
      { path: "service", lazy: lazy(() => import("./pages/Services")) },
      { path: "paid-advertising-services", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "services/website-design", lazy: lazy(() => import("./pages/services/WebsiteDesign")) },
      { path: "local-seo-services", lazy: lazy(() => import("./pages/services/ManagedAISEO")) },
      { path: "local-seo-services/aeo", lazy: lazy(() => import("./pages/services/AEO")) },
      { path: "local-seo-services/geo", lazy: lazy(() => import("./pages/services/GEO")) },
      { path: "local-seo-services/local-seo", lazy: lazy(() => import("./pages/services/LocalSEO")) },
      { path: "local-seo-services/authority-building", lazy: lazy(() => import("./pages/services/AuthorityBuilding")) },
      { path: "local-seo-services/link-building", lazy: lazy(() => import("./pages/services/LinkBuilding")) },
      { path: "local-seo-services/technical-seo", lazy: lazy(() => import("./pages/services/TechnicalSEO")) },
      { path: "local-seo-services/on-page-seo", lazy: lazy(() => import("./pages/services/OnPageSEO")) },
      { path: "services/paid-ads", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "services/marketing-automation-for-small-business", lazy: lazy(() => import("./pages/services/MarketingAutomation")) },
      { path: "services/marketing-automation-for-small-business/demo/universal-inbox", lazy: lazy(() => import("./pages/demos/UniversalInbox")) },
      { path: "services/marketing-automation-for-small-business/demo/workflow-automations", lazy: lazy(() => import("./pages/demos/WorkflowAutomations")) },
      { path: "services/marketing-automation-for-small-business/demo/website-builder", lazy: lazy(() => import("./pages/demos/WebsiteBuilder")) },
      { path: "services/marketing-automation-for-small-business/demo/email-sms-marketing", lazy: lazy(() => import("./pages/demos/EmailSmsMarketing")) },
      { path: "services/marketing-automation-for-small-business/demo/integrated-payments", lazy: lazy(() => import("./pages/demos/IntegratedPayments")) },
      { path: "services/marketing-automation-for-small-business/demo/social-media-planner", lazy: lazy(() => import("./pages/demos/SocialMediaPlanner")) },
      { path: "services/marketing-automation-for-small-business/demo/calendar-scheduling", lazy: lazy(() => import("./pages/demos/CalendarScheduling")) },
      { path: "services/marketing-automation-for-small-business/demo/sales-tracker", lazy: lazy(() => import("./pages/demos/SalesTracker")) },
      { path: "services/marketing-automation-for-small-business/demo/forms-surveys", lazy: lazy(() => import("./pages/demos/FormsSurveys")) },
      { path: "services/marketing-automation-for-small-business/demo/reviews", lazy: lazy(() => import("./pages/demos/Reviews")) },
      { path: "services/marketing-automation-for-small-business/demo/call-tracking", lazy: lazy(() => import("./pages/demos/CallTracking")) },
      { path: "services/marketing-automation-for-small-business/demo/crm", lazy: lazy(() => import("./pages/demos/Crm")) },
      { path: "services/marketing-automation-for-small-business/demo/sales-funnels", lazy: lazy(() => import("./pages/demos/SalesFunnels")) },
      { path: "services/marketing-automation-for-small-business/demo/memberships", lazy: lazy(() => import("./pages/demos/Memberships")) },
      { path: "services/marketing-automation-for-small-business/demo/webchat", lazy: lazy(() => import("./pages/demos/Webchat")) },
      { path: "services/marketing-automation-for-small-business/demo/generate-leads", lazy: lazy(() => import("./pages/demos/GenerateLeads")) },
      { path: "website-design", lazy: lazy(() => import("./pages/services/WebsiteDesign")) },
      { path: "local-seo-services", lazy: lazy(() => import("./pages/services/ManagedAISEO")) },
      
      
      { path: "case-studies/local-seo-service/hvac-plumbing-electrical", lazy: lazy(() => import("./pages/case-studies/local-seo-service/HvacPlumbingElectrical")) },
      { path: "case-studies/google-ads-for-local-businesses/hvac-plumbing-electrical", lazy: lazy(() => import("./pages/case-studies/google-ads-for-local-businesses/HvacPlumbingElectrical")) },
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
