import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isLocDiabloOpen, setIsLocDiabloOpen] = useState(false);
  const [isLocTriOpen, setIsLocTriOpen] = useState(false);
  const [mobileLocDiabloOpen, setMobileLocDiabloOpen] = useState(false);
  const [mobileLocTriOpen, setMobileLocTriOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSeoSubOpen, setIsSeoSubOpen] = useState(false);
  const [isAdsSubOpen, setIsAdsSubOpen] = useState(false);
  const [isIndHomeOpen, setIsIndHomeOpen] = useState(false);
  const [isIndHealthOpen, setIsIndHealthOpen] = useState(false);
  const [isIndProfOpen, setIsIndProfOpen] = useState(false);
  const [isCsHomeOpen, setIsCsHomeOpen] = useState(false);
  const [isCsHealthOpen, setIsCsHealthOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCsHomeOpen, setMobileCsHomeOpen] = useState(false);
  const [mobileCsHealthOpen, setMobileCsHealthOpen] = useState(false);
  const [mobileSeoSubOpen, setMobileSeoSubOpen] = useState(false);
  const [mobileAdsSubOpen, setMobileAdsSubOpen] = useState(false);
  
  const location = useLocation();

  const isServiceActive = 
    location.pathname.startsWith("/services") ||
    location.pathname === "/website-design";

  return (
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:ring-2 focus:ring-primary"
    >
      Skip to main content
    </a>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      {/* Top promo bar */}
      <Link
        to="/specials/current-offers/"
        className="block bg-primary/15 border-b border-primary/30 hover:bg-primary/25 transition-colors"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 py-2 text-xs md:text-sm text-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-medium">
              <span className="text-primary font-bold">Current Specials:</span>{" "}
              Limited-time offers for local service businesses
            </span>
            <span className="hidden sm:inline underline text-primary font-semibold ml-2">
              View Offers
            </span>
          </div>
        </div>
      </Link>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={growsmallbizLogo} 
              alt="GrowSmallBiz logo featuring digital marketing services for painting contractors, emphasizing AI SEO, PPC, web, social media, and automation." 
              className="h-16 w-auto"
              width={64}
              height={64} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  isServiceActive ? "text-primary" : "text-muted-foreground"
                }`}
               aria-expanded={isServicesOpen}
               aria-haspopup="true"
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Service Overview */}
                <Link
                  to="/services/"
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2"
                >
                  Service Overview
                </Link>

                {/* Website That Converts */}
                <Link
                  to="/services/website-design/"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Website That Converts
                </Link>

                {/* Managed AI SEO - Flyout Right */}
                <div
                  className="relative group/seo"
                  onMouseEnter={() => setIsSeoSubOpen(true)}
                  onMouseLeave={() => setIsSeoSubOpen(false)}
                >
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    Managed AI SEO Services
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div
                    className={`absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${
                      isSeoSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"
                    }`}
                  >
                    <Link to="/services/seo-agency/" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Overview
                    </Link>
                    <Link to="/services/seo-agency/ai-search-optimization/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      AI Search Optimization
                    </Link>
                    <Link to="/services/seo-agency/aeo/" className="block pl-8 pr-4 py-2 rounded-lg text-xs text-muted-foreground/80 hover:text-foreground hover:bg-secondary transition-colors">
                      ↳ Answer Engine Optimization (AEO)
                    </Link>
                    <Link to="/services/seo-agency/geo/" className="block pl-8 pr-4 py-2 rounded-lg text-xs text-muted-foreground/80 hover:text-foreground hover:bg-secondary transition-colors">
                      ↳ Generative Engine Optimization (GEO)
                    </Link>
                    <Link to="/services/seo-agency/local-seo/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Local SEO
                    </Link>
                    <Link to="/services/seo-agency/authority-building/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Authority Building
                    </Link>
                    <Link to="/services/seo-agency/link-building/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Link Building
                    </Link>
                    <Link to="/services/seo-agency/technical-seo/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Technical SEO
                    </Link>
                    <Link to="/services/seo-agency/on-page-seo/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      On-Page SEO
                    </Link>
                  </div>
                </div>

                {/* Paid Advertising - Flyout Right */}
                <div
                  className="relative group/ads"
                  onMouseEnter={() => setIsAdsSubOpen(true)}
                  onMouseLeave={() => setIsAdsSubOpen(false)}
                >
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    Paid Advertising
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div
                    className={`absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${
                      isAdsSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"
                    }`}
                  >
                    <Link to="/services/paid-advertising/" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Paid Advertising Overview
                    </Link>
                    <Link to="/services/paid-advertising/google-ads/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Google PPC Ads
                    </Link>
                    <Link to="/services/paid-advertising/google-local-services-ads/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Google Local Service Ads
                    </Link>
                    <Link to="/services/paid-advertising/facebook-ads/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Meta & Facebook Ads
                    </Link>
                  </div>
                </div>

                {/* Marketing Automation */}
                <Link
                  to="/services/marketing-automation-for-small-business/"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Marketing Automation
                </Link>

                {/* AI Receptionist & Conversational AI */}
                <Link
                  to="/services/ai-receptionist-and-conversational-ai/"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  AI Receptionist & Conversational AI
                </Link>

              </div>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/home-service-contractors") && !location.pathname.includes("case-study") || location.pathname.startsWith("/health-and-wellness-practices") || location.pathname.startsWith("/professional-services") ? "text-primary" : "text-muted-foreground"
                }`}
                aria-expanded={isIndustriesOpen}
                aria-haspopup="true"
              >
                Industries
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isIndustriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Home Services - Flyout */}
                <div
                  className="relative group/ind-home"
                  onMouseEnter={() => setIsIndHomeOpen(true)}
                  onMouseLeave={() => setIsIndHomeOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Home Service Contractors
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndHomeOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/home-service-contractors/" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Overview
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-hvac-contractors/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      HVAC Contractors
                    </Link>
                    <Link to="/home-service-contractors/tree-lawn-landscaping-marketing/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Tree Removal Service and Landscaping Remodeling
                    </Link>
                    <Link to="/home-service-contractors/landscape-construction-hardscaping-marketing/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Landscape Construction & Hardscaping
                    </Link>
                    <Link to="/home-service-contractors/painting-companies-marketing/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Painting
                    </Link>
                  </div>
                </div>

                {/* Health & Wellness - Flyout */}
                <div
                  className="relative group/ind-health"
                  onMouseEnter={() => setIsIndHealthOpen(true)}
                  onMouseLeave={() => setIsIndHealthOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Health & Wellness Practices
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndHealthOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/health-and-wellness-practices/" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Overview
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-med-spas/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Med Spas
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-chiropractors/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Chiropractors
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-dentists/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Dentists
                    </Link>
                  </div>
                </div>

                {/* Professional Services - Flyout */}
                <div
                  className="relative group/ind-prof"
                  onMouseEnter={() => setIsIndProfOpen(true)}
                  onMouseLeave={() => setIsIndProfOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Professional Services
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndProfOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/professional-services/" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Overview
                    </Link>
                    <Link to="/professional-services/marketing-for-realtors/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Real Estate Agents & Brokers
                    </Link>
                    <Link to="/professional-services/marketing-for-photographers/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Professional Photographers
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/locations") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Locations
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isLocationsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/locations/locations-we-serve/"
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2"
                >
                  Locations We Serve
                </Link>

                {/* Diablo Valley Region - Flyout */}
                <div
                  className="relative group/loc-diablo"
                  onMouseEnter={() => setIsLocDiabloOpen(true)}
                  onMouseLeave={() => setIsLocDiabloOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Diablo Valley Region
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-56 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isLocDiabloOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/locations/walnut-creek-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Walnut Creek</Link>
                    <Link to="/locations/pleasant-hill-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Pleasant Hill</Link>
                    <Link to="/locations/concord-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Concord</Link>
                    <Link to="/locations/martinez-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Martinez</Link>
                  </div>
                </div>

                {/* Tri Valley Extended - Flyout */}
                <div
                  className="relative group/loc-tri"
                  onMouseEnter={() => setIsLocTriOpen(true)}
                  onMouseLeave={() => setIsLocTriOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Tri Valley Extended
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-56 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isLocTriOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/locations/danville-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Danville</Link>
                    <Link to="/locations/san-ramon-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">San Ramon</Link>
                    <Link to="/locations/dublin-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Dublin</Link>
                    <Link to="/locations/pleasanton-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Pleasanton</Link>
                    <Link to="/locations/livermore-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Livermore</Link>
                    <Link to="/locations/tracy-ca/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">Tracy</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCaseStudiesOpen(true)}
              onMouseLeave={() => setIsCaseStudiesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.includes("case-study") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Case Studies
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isCaseStudiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Home Service Contractors - Flyout */}
                <div
                  className="relative group/cs-home"
                  onMouseEnter={() => setIsCsHomeOpen(true)}
                  onMouseLeave={() => setIsCsHomeOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Home Service Contractors
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isCsHomeOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      HVAC, Plumbing & Electrical — Local SEO
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      HVAC, Plumbing & Electrical — Google Ads
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Roofers
                    </Link>
                    <Link to="/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Tree Removal Service and Landscaping Remodeling
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Home Remodeling
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Cleaning Services
                    </Link>
                  </div>
                </div>

                {/* Health & Wellness Practices - Flyout */}
                <div
                  className="relative group/cs-health"
                  onMouseEnter={() => setIsCsHealthOpen(true)}
                  onMouseLeave={() => setIsCsHealthOpen(false)}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    Health & Wellness Practices
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isCsHealthOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}>
                    <Link to="/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Med Spa
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Dental Practices
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Chiropractic
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact/" || location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:block">
            <a 
              href="tel:+19258863724" 
              className="flex flex-col items-center justify-center px-5 py-2 border-2 border-foreground/80 rounded-lg hover:bg-foreground/10 transition-colors"
            >
              <span className="text-sm text-foreground font-semibold tracking-wide uppercase">Call Now <span className="text-xs">24x7</span></span>
              <span className="text-foreground text-lg font-bold">+1 (925) 886-3724</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
           aria-label={isOpen ? "Close menu" : "Open menu"}
           aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
       role="navigation"
       aria-label="Mobile navigation"
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Home
          </Link>
          
          {/* Mobile: Services */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-2">
                {/* Service Overview */}
                <Link
                  to="/services/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-primary font-medium"
                >
                  Service Overview
                </Link>

                {/* Website That Converts */}
                <Link
                  to="/services/website-design/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Website That Converts
                </Link>

                {/* Managed AI SEO - Collapsible */}
                <div>
                  <button
                    onClick={() => setMobileSeoSubOpen(!mobileSeoSubOpen)}
                    className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary"
                  >
                    Managed AI SEO Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSeoSubOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileSeoSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <Link to="/services/seo-agency/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-primary hover:text-primary">
                      Overview
                    </Link>
                    <Link to="/services/seo-agency/ai-search-optimization/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      AI Search Optimization
                    </Link>
                    <Link to="/services/seo-agency/aeo/" onClick={() => setIsOpen(false)} className="block py-1.5 pl-8 text-xs text-muted-foreground/80 hover:text-primary">
                      ↳ Answer Engine Optimization (AEO)
                    </Link>
                    <Link to="/services/seo-agency/geo/" onClick={() => setIsOpen(false)} className="block py-1.5 pl-8 text-xs text-muted-foreground/80 hover:text-primary">
                      ↳ Generative Engine Optimization (GEO)
                    </Link>
                    <Link to="/services/seo-agency/local-seo/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Local SEO
                    </Link>
                    <Link to="/services/seo-agency/authority-building/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Authority Building
                    </Link>
                    <Link to="/services/seo-agency/link-building/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Link Building
                    </Link>
                    <Link to="/services/seo-agency/technical-seo/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Technical SEO
                    </Link>
                    <Link to="/services/seo-agency/on-page-seo/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      On-Page SEO
                    </Link>
                  </div>
                </div>

                {/* Paid Advertising - Collapsible */}
                <div>
                  <button
                    onClick={() => setMobileAdsSubOpen(!mobileAdsSubOpen)}
                    className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary"
                  >
                    Paid Advertising
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileAdsSubOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileAdsSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <Link to="/services/paid-advertising/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-primary hover:text-primary">
                      Paid Advertising Overview
                    </Link>
                    <Link to="/services/paid-advertising/google-ads/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Google PPC Ads
                    </Link>
                    <Link to="/services/paid-advertising/google-local-services-ads/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Google Local Service Ads
                    </Link>
                    <Link to="/services/paid-advertising/facebook-ads/" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Meta & Facebook Ads
                    </Link>
                  </div>
                </div>

                {/* Marketing Automation */}
                <Link
                  to="/services/marketing-automation-for-small-business/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Marketing Automation
                </Link>

                {/* AI Receptionist & Conversational AI */}
                <Link
                  to="/services/ai-receptionist-and-conversational-ai/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  AI Receptionist & Conversational AI
                </Link>

              </div>
            )}
          </div>

          {/* Mobile: Industries */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileIndustriesOpen && (
              <div className="pl-4 space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-1 pb-1">Home Services</p>
                <Link to="/home-service-contractors/" onClick={() => setIsOpen(false)} className="block py-2 text-primary hover:text-primary">
                  Home Service Contractors
                </Link>
                <Link to="/home-service-contractors/marketing-for-hvac-contractors/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  HVAC Contractors
                </Link>
                <Link to="/home-service-contractors/tree-lawn-landscaping-marketing/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Tree Removal Service and Landscaping Remodeling
                </Link>
                <Link to="/home-service-contractors/landscape-construction-hardscaping-marketing/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Landscape Construction & Hardscaping
                </Link>
                <Link to="/home-service-contractors/painting-companies-marketing/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Painting
                </Link>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-3 pb-1">Health & Wellness</p>
                <Link to="/health-and-wellness-practices/" onClick={() => setIsOpen(false)} className="block py-2 text-primary hover:text-primary">
                  All Health & Wellness
                </Link>
                <Link to="/health-and-wellness-practices/marketing-for-med-spas/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Med Spas
                </Link>
                <Link to="/health-and-wellness-practices/marketing-for-chiropractors/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Chiropractors
                </Link>
                <Link to="/health-and-wellness-practices/marketing-for-dentists/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Dentists
                </Link>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-3 pb-1">Professional Services</p>
                <Link to="/professional-services/" onClick={() => setIsOpen(false)} className="block py-2 text-primary hover:text-primary">
                  All Professional Services
                </Link>
                <Link to="/professional-services/marketing-for-realtors/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Real Estate Agents & Brokers
                </Link>
                <Link to="/professional-services/marketing-for-photographers/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
                  Professional Photographers
                </Link>
              </div>
            )}
          </div>

          {/* Mobile: Locations */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              Locations
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileLocationsOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/locations/locations-we-serve/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-primary font-medium"
                >
                  Locations We Serve
                </Link>

                <button
                  onClick={() => setMobileLocDiabloOpen(!mobileLocDiabloOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1"
                >
                  Diablo Valley Region
                  <ChevronDown className={`w-3 h-3 transition-transform ${mobileLocDiabloOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocDiabloOpen && (
                  <div className="pl-3 space-y-1">
                    <Link to="/locations/walnut-creek-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Walnut Creek</Link>
                    <Link to="/locations/pleasant-hill-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Pleasant Hill</Link>
                    <Link to="/locations/concord-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Concord</Link>
                    <Link to="/locations/martinez-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Martinez</Link>
                  </div>
                )}

                <button
                  onClick={() => setMobileLocTriOpen(!mobileLocTriOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1"
                >
                  Tri Valley Extended
                  <ChevronDown className={`w-3 h-3 transition-transform ${mobileLocTriOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocTriOpen && (
                  <div className="pl-3 space-y-1">
                    <Link to="/locations/danville-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Danville</Link>
                    <Link to="/locations/san-ramon-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">San Ramon</Link>
                    <Link to="/locations/dublin-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Dublin</Link>
                    <Link to="/locations/pleasanton-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Pleasanton</Link>
                    <Link to="/locations/livermore-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Livermore</Link>
                    <Link to="/locations/tracy-ca/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">Tracy</Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile: Case Studies */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              Case Studies
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCaseStudiesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCaseStudiesOpen && (
              <div className="pl-4 space-y-1">
                <button
                  onClick={() => setMobileCsHomeOpen(!mobileCsHomeOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1"
                >
                  Home Service Contractors
                  <ChevronDown className={`w-3 h-3 transition-transform ${mobileCsHomeOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCsHomeOpen && (
                  <div className="pl-3 space-y-1">
                    <Link to="/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      HVAC, Plumbing & Electrical — Local SEO
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      HVAC, Plumbing & Electrical — Google Ads
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Roofers
                    </Link>
                    <Link to="/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Tree Removal Service and Landscaping Remodeling
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Home Remodeling
                    </Link>
                    <Link to="/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Cleaning Services
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => setMobileCsHealthOpen(!mobileCsHealthOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1"
                >
                  Health & Wellness Practices
                  <ChevronDown className={`w-3 h-3 transition-transform ${mobileCsHealthOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCsHealthOpen && (
                  <div className="pl-3 space-y-1">
                    <Link to="/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Med Spa
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Dental Practices
                    </Link>
                    <Link to="/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary text-sm">
                      Chiropractic
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link
            to="/about/"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            About
          </Link>

          <Link
            to="/contact/"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Contact
          </Link>

          <Button variant="hero" size="lg" className="w-full mt-4" asChild>
            <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Schedule Strategy Call</a>
          </Button>
        </div>
      </div>
    </header>
    </>
  );
};
