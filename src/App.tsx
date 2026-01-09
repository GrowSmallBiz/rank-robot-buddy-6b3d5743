import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TechnicalSEO from "./pages/services/TechnicalSEO";
import OnPageSEO from "./pages/services/OnPageSEO";
import AEO from "./pages/services/AEO";
import GEO from "./pages/services/GEO";
import LocalSEO from "./pages/services/LocalSEO";
import LinkBuilding from "./pages/services/LinkBuilding";
import PaidMedia from "./pages/services/PaidMedia";
import SocialMedia from "./pages/services/SocialMedia";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import AISEOHub from "./pages/services/AISEOHub";
import ManagedSEOPricing from "./pages/services/ManagedSEOPricing";
import ReputationManagement from "./pages/services/ReputationManagement";
import AIReceptionist from "./pages/services/AIReceptionist";
import CRM from "./pages/services/CRM";
import LinkedInOutreach from "./pages/services/LinkedInOutreach";
import QuadBots from "./pages/services/QuadBots";
import FreeAssessment from "./pages/FreeAssessment";
import HVAC from "./pages/industries/HVAC";
import HomeServices from "./pages/industries/HomeServices";
import Dental from "./pages/industries/Dental";
import MedSpa from "./pages/industries/MedSpa";
import Chiropractor from "./pages/industries/Chiropractor";
import AutoRepair from "./pages/industries/AutoRepair";
import Photographers from "./pages/industries/Photographers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/technical-seo" element={<TechnicalSEO />} />
          <Route path="/services/on-page-seo" element={<OnPageSEO />} />
          <Route path="/services/aeo" element={<AEO />} />
          <Route path="/services/geo" element={<GEO />} />
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route path="/services/link-building" element={<LinkBuilding />} />
          <Route path="/services/paid-media" element={<PaidMedia />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/ai-seo-hub" element={<AISEOHub />} />
          <Route path="/services/managed-seo-pricing" element={<ManagedSEOPricing />} />
          <Route path="/services/reputation-management" element={<ReputationManagement />} />
          <Route path="/services/ai-receptionist" element={<AIReceptionist />} />
          <Route path="/services/crm" element={<CRM />} />
          <Route path="/services/linkedin-outreach" element={<LinkedInOutreach />} />
          <Route path="/services/quad-bots" element={<QuadBots />} />
          <Route path="/free-assessment" element={<FreeAssessment />} />
          <Route path="/industries/hvac" element={<HVAC />} />
          <Route path="/industries/home-services" element={<HomeServices />} />
          <Route path="/industries/dental" element={<Dental />} />
          <Route path="/industries/med-spa" element={<MedSpa />} />
          <Route path="/industries/chiropractor" element={<Chiropractor />} />
          <Route path="/industries/auto-repair" element={<AutoRepair />} />
          <Route path="/industries/photographers" element={<Photographers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
