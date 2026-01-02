import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TechnicalSEO from "./pages/services/TechnicalSEO";
import OnPageSEO from "./pages/services/OnPageSEO";
import AEO from "./pages/services/AEO";
import GEO from "./pages/services/GEO";
import LocalSEO from "./pages/services/LocalSEO";
import LinkBuilding from "./pages/services/LinkBuilding";
import FreeAssessment from "./pages/FreeAssessment";
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
          <Route path="/services/technical-seo" element={<TechnicalSEO />} />
          <Route path="/services/on-page-seo" element={<OnPageSEO />} />
          <Route path="/services/aeo" element={<AEO />} />
          <Route path="/services/geo" element={<GEO />} />
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route path="/services/link-building" element={<LinkBuilding />} />
          <Route path="/free-assessment" element={<FreeAssessment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
