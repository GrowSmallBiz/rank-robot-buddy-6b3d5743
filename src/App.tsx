import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { RouteRecord } from "vite-react-ssg";
import Index from "./pages/Index";

const AppLayout = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  </HelmetProvider>
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
      { path: "blog", lazy: lazy(() => import("./pages/Blog")) },
      { path: "contact", lazy: lazy(() => import("./pages/Contact")) },
      { path: "services/technical-seo", lazy: lazy(() => import("./pages/services/TechnicalSEO")) },
      { path: "services/on-page-seo", lazy: lazy(() => import("./pages/services/OnPageSEO")) },
      { path: "services/aeo", lazy: lazy(() => import("./pages/services/AEO")) },
      { path: "services/geo", lazy: lazy(() => import("./pages/services/GEO")) },
      { path: "services/local-seo", lazy: lazy(() => import("./pages/services/LocalSEO")) },
      { path: "services/link-building", lazy: lazy(() => import("./pages/services/LinkBuilding")) },
      { path: "services/paid-media", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "services/social-media", lazy: lazy(() => import("./pages/services/SocialMedia")) },
      { path: "services/website-design", lazy: lazy(() => import("./pages/services/WebsiteDesign")) },
      { path: "services/managed-ai-seo", lazy: lazy(() => import("./pages/services/ManagedAISEO")) },
      { path: "services/managed-seo-pricing", lazy: lazy(() => import("./pages/services/ManagedSEOPricing")) },
      { path: "services/reputation-management", lazy: lazy(() => import("./pages/services/ReputationManagement")) },
      { path: "services/ai-receptionist", lazy: lazy(() => import("./pages/services/AIReceptionist")) },
      { path: "services/crm", lazy: lazy(() => import("./pages/services/CRM")) },
      { path: "services/linkedin-outreach", lazy: lazy(() => import("./pages/services/LinkedInOutreach")) },
      { path: "services/quad-bots", lazy: lazy(() => import("./pages/services/QuadBots")) },
      { path: "free-assessment", lazy: lazy(() => import("./pages/FreeAssessment")) },
      { path: "industries/hvac", lazy: lazy(() => import("./pages/industries/HVAC")) },
      { path: "industries/home-services", lazy: lazy(() => import("./pages/industries/HomeServices")) },
      { path: "industries/dental", lazy: lazy(() => import("./pages/industries/Dental")) },
      { path: "industries/med-spa", lazy: lazy(() => import("./pages/industries/MedSpa")) },
      { path: "industries/chiropractor", lazy: lazy(() => import("./pages/industries/Chiropractor")) },
      { path: "industries/auto-repair", lazy: lazy(() => import("./pages/industries/AutoRepair")) },
      { path: "industries/photographers", lazy: lazy(() => import("./pages/industries/Photographers")) },
      { path: "industries/realtors", lazy: lazy(() => import("./pages/industries/Realtors")) },
      { path: "branding-guidelines", lazy: lazy(() => import("./pages/BrandingGuidelines")) },
      { path: "download-branding-docx", lazy: lazy(() => import("./pages/DownloadBrandingDocx")) },
      { path: "homepage-backup", lazy: lazy(() => import("./pages/IndexBackup")) },
      { path: "privacy-policy", lazy: lazy(() => import("./pages/PrivacyPolicy")) },
      { path: "terms-of-service", lazy: lazy(() => import("./pages/TermsOfService")) },
      { path: "services/ai-seo-hub", lazy: lazy(() => import("./pages/services/AISEOHub")) },
      { path: "404", lazy: lazy(() => import("./pages/NotFound")) },
      { path: "*", lazy: lazy(() => import("./pages/NotFound")) },
    ],
  },
];

export default AppLayout;
