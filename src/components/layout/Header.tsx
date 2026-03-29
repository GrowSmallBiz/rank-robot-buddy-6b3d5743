import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isSeoSubOpen, setIsSeoSubOpen] = useState(false);
  const [isAdsSubOpen, setIsAdsSubOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const [mobileSeoSubOpen, setMobileSeoSubOpen] = useState(false);
  const [mobileAdsSubOpen, setMobileAdsSubOpen] = useState(false);
  
  const location = useLocation();

  const isServiceActive = 
    location.pathname.startsWith("/services") ||
    location.pathname === "/website-design" ||
    location.pathname === "/local-seo-services";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={growsmallbizLogo} 
              alt="GrowSmallBiz Digital Marketing" 
              className="h-16 w-auto"
              width={64}
              height={64}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
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
                  to="/services"
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2"
                >
                  Service Overview
                </Link>

                {/* Website That Converts */}
                <Link
                  to="/services/website-design"
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
                    <Link to="/local-seo-services" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Overview
                    </Link>
                    <Link to="/local-seo-services/aeo" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Answer Engine Optimization (AEO)
                    </Link>
                    <Link to="/local-seo-services/geo" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Generative Engine Optimization (GEO)
                    </Link>
                    <Link to="/local-seo-services/local-seo" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Local SEO
                    </Link>
                    <Link to="/local-seo-services/authority-building" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Authority Building
                    </Link>
                    <Link to="/local-seo-services/link-building" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Link Building
                    </Link>
                    <Link to="/local-seo-services/technical-seo" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Technical SEO
                    </Link>
                    <Link to="/local-seo-services/on-page-seo" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
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
                    <Link to="/services/paid-advertising-services" className="block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors">
                      Paid Advertising Overview
                    </Link>
                    <Link to="/services/google-ads-for-local-businesses" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Google PPC Ads
                    </Link>
                    <Link to="/services/google-local-services-ads-management" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Google Local Service Ads
                    </Link>
                    <Link to="/services/facebook-ads-management-services" className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      Meta & Facebook Ads
                    </Link>
                  </div>
                </div>

                {/* Marketing Automation */}
                <Link
                  to="/services/marketing-automation-for-small-business"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Marketing Automation
                </Link>

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
                  location.pathname.startsWith("/case-studies") ? "text-primary" : "text-muted-foreground"
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
                <Link
                  to="/case-studies/local-seo-service/hvac-plumbing-electrical"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  HVAC, Plumbing & Electrical — Local SEO
                </Link>
                <Link
                  to="/case-studies/google-ads-for-local-businesses/hvac-plumbing-electrical"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  HVAC, Plumbing & Electrical — Google Ads
                </Link>
                <Link
                  to="/case-studies/roofers"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Roofers
                </Link>
                <Link
                  to="/case-studies/tree-lawn-landscaping"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Tree Care, Lawn Care & Landscaping
                </Link>
                <Link
                  to="/case-studies/home-remodeling"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Home Remodeling
                </Link>
                <Link
                  to="/case-studies/cleaning-services"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Cleaning Services
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
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
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-primary font-medium"
                >
                  Service Overview
                </Link>

                {/* Website That Converts */}
                <Link
                  to="/services/website-design"
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
                    <Link to="/local-seo-services" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-primary hover:text-primary">
                      Overview
                    </Link>
                    <Link to="/local-seo-services/aeo" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Answer Engine Optimization (AEO)
                    </Link>
                    <Link to="/local-seo-services/geo" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Generative Engine Optimization (GEO)
                    </Link>
                    <Link to="/local-seo-services/local-seo" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Local SEO
                    </Link>
                    <Link to="/local-seo-services/authority-building" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Authority Building
                    </Link>
                    <Link to="/local-seo-services/link-building" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Link Building
                    </Link>
                    <Link to="/local-seo-services/technical-seo" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Technical SEO
                    </Link>
                    <Link to="/local-seo-services/on-page-seo" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
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
                    <Link to="/services/paid-advertising-services" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-primary hover:text-primary">
                      Paid Advertising Overview
                    </Link>
                    <Link to="/services/google-ads-for-local-businesses" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Google PPC Ads
                    </Link>
                    <Link to="/services/google-local-services-ads-management" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Google Local Service Ads
                    </Link>
                    <Link to="/services/facebook-ads-management-services" onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                      Meta & Facebook Ads
                    </Link>
                  </div>
                </div>

                {/* Marketing Automation */}
                <Link
                  to="/services/marketing-automation-for-small-business"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Marketing Automation
                </Link>

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
              <div className="pl-4 space-y-2">
                <Link
                  to="/case-studies/local-seo-service/hvac-plumbing-electrical"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  HVAC, Plumbing & Electrical — Local SEO
                </Link>
                <Link
                  to="/case-studies/google-ads-for-local-businesses/hvac-plumbing-electrical"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  HVAC, Plumbing & Electrical — Google Ads
                </Link>
                <Link
                  to="/case-studies/roofers"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Roofers
                </Link>
                <Link
                  to="/case-studies/tree-lawn-landscaping"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Tree Care, Lawn Care & Landscaping
                </Link>
                <Link
                  to="/case-studies/home-remodeling"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Home Remodeling
                </Link>
                <Link
                  to="/case-studies/cleaning-services"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Cleaning Services
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Contact
          </Link>

          <Button variant="hero" size="lg" className="w-full mt-4" asChild>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Get Free Audit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
