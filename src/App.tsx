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

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Index },
      { path: "about", lazy: () => import("./pages/About") },
      { path: "services", lazy: () => import("./pages/Services") },
      { path: "service", lazy: () => import("./pages/Services") },
      { path: "blog", lazy: () => import("./pages/Blog") },
      { path: "contact", lazy: () => import("./pages/Contact") },
      { path: "services/technical-seo", lazy: () => import("./pages/services/TechnicalSEO") },
      { path: "services/on-page-seo", lazy: () => import("./pages/services/OnPageSEO") },
      { path: "services/aeo", lazy: () => import("./pages/services/AEO") },
      { path: "services/geo", lazy: () => import("./pages/services/GEO") },
      { path: "services/local-seo", lazy: () => import("./pages/services/LocalSEO") },
      { path: "services/link-building", lazy: () => import("./pages/services/LinkBuilding") },
      { path: "services/paid-media", lazy: () => import("./pages/services/PaidMedia") },
      { path: "services/social-media", lazy: () => import("./pages/services/SocialMedia") },
      { path: "services/website-design", lazy: () => import("./pages/services/WebsiteDesign") },
      { path: "services/managed-ai-seo", lazy: () => import("./pages/services/ManagedAISEO") },
      { path: "services/managed-seo-pricing", lazy: () => import("./pages/services/ManagedSEOPricing") },
      { path: "services/reputation-management", lazy: () => import("./pages/services/ReputationManagement") },
      { path: "services/ai-receptionist", lazy: () => import("./pages/services/AIReceptionist") },
      { path: "services/crm", lazy: () => import("./pages/services/CRM") },
      { path: "services/linkedin-outreach", lazy: () => import("./pages/services/LinkedInOutreach") },
      { path: "services/quad-bots", lazy: () => import("./pages/services/QuadBots") },
      { path: "free-assessment", lazy: () => import("./pages/FreeAssessment") },
      { path: "industries/hvac", lazy: () => import("./pages/industries/HVAC") },
      { path: "industries/home-services", lazy: () => import("./pages/industries/HomeServices") },
      { path: "industries/dental", lazy: () => import("./pages/industries/Dental") },
      { path: "industries/med-spa", lazy: () => import("./pages/industries/MedSpa") },
      { path: "industries/chiropractor", lazy: () => import("./pages/industries/Chiropractor") },
      { path: "industries/auto-repair", lazy: () => import("./pages/industries/AutoRepair") },
      { path: "industries/photographers", lazy: () => import("./pages/industries/Photographers") },
      { path: "industries/realtors", lazy: () => import("./pages/industries/Realtors") },
      { path: "branding-guidelines", lazy: () => import("./pages/BrandingGuidelines") },
      { path: "download-branding-docx", lazy: () => import("./pages/DownloadBrandingDocx") },
      { path: "homepage-backup", lazy: () => import("./pages/IndexBackup") },
      { path: "privacy-policy", lazy: () => import("./pages/PrivacyPolicy") },
      { path: "terms-of-service", lazy: () => import("./pages/TermsOfService") },
      { path: "services/ai-seo-hub", lazy: () => import("./pages/services/AISEOHub") },
      { path: "404", lazy: () => import("./pages/NotFound") },
      { path: "*", lazy: () => import("./pages/NotFound") },
    ],
  },
];

export default AppLayout;
