import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";

const seoServices = [
  { name: "Technical SEO", href: "/services/technical-seo" },
  { name: "On-Page SEO", href: "/services/on-page-seo" },
  { name: "Answer Engine Optimization (AEO)", href: "/services/aeo" },
  { name: "Generative Engine Optimization (GEO)", href: "/services/geo" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Link Building", href: "/services/link-building" },
];

// Top-level industries (shown in main Industries dropdown)
const topLevelIndustries = [
  { name: "Home Services (HVAC, Plumbing, Electrical, Roofing)", href: "/industries/home-services" },
  { name: "Realtors & Real Estate Brokers", href: "/industries/realtors" },
  { name: "Photographers", href: "/industries/photographers" },
];

// SEO-specific industries (shown nested under SEO submenu)
const seoIndustries = [
  { name: "HVAC, Plumbing & Electrical", href: "/industries/hvac" },
  { name: "Dental Practices", href: "/industries/dental" },
  { name: "Med Spas & Aesthetics", href: "/industries/med-spa" },
  { name: "Chiropractors", href: "/industries/chiropractor" },
  { name: "Auto Repair Shops", href: "/industries/auto-repair" },
  { name: "Photographers", href: "/industries/photographers" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSEOServicesOpen, setIsSEOServicesOpen] = useState(false);
  const [isSEOIndustriesOpen, setIsSEOIndustriesOpen] = useState(false);
  const [isGrowthSystemOpen, setIsGrowthSystemOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSEOOpen, setMobileSEOOpen] = useState(false);
  const [mobileSEOIndustriesOpen, setMobileSEOIndustriesOpen] = useState(false);
  const [mobileGrowthSystemOpen, setMobileGrowthSystemOpen] = useState(false);
  const [mobileTopIndustriesOpen, setMobileTopIndustriesOpen] = useState(false);
  const location = useLocation();

  const isServiceActive = 
    location.pathname.startsWith("/services/website") ||
    location.pathname.startsWith("/services/social") ||
    location.pathname.startsWith("/services/paid-media") ||
    location.pathname.startsWith("/services/ai-seo") ||
    location.pathname.startsWith("/services/managed-ai-seo") ||
    location.pathname.startsWith("/services/technical") ||
    location.pathname.startsWith("/services/on-page") ||
    location.pathname.startsWith("/services/aeo") ||
    location.pathname.startsWith("/services/geo") ||
    location.pathname.startsWith("/services/local") ||
    location.pathname.startsWith("/services/link") ||
    location.pathname.startsWith("/services/linkedin-outreach");

  const isGrowthSystemActive = 
    location.pathname.startsWith("/services/reputation") ||
    location.pathname.startsWith("/services/ai-receptionist") ||
    location.pathname.startsWith("/services/crm") ||
    location.pathname.startsWith("/services/quad-bots");

  const isSEOActive = 
    location.pathname.startsWith("/services/ai-seo") ||
    location.pathname.startsWith("/services/managed-ai-seo") ||
    location.pathname.startsWith("/services/technical") ||
    location.pathname.startsWith("/services/on-page") ||
    location.pathname.startsWith("/services/aeo") ||
    location.pathname.startsWith("/services/geo") ||
    location.pathname.startsWith("/services/local") ||
    location.pathname.startsWith("/services/link");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={growsmallbizLogo} 
              alt="GrowSmallBiz Digital Marketing" 
              className="h-12 w-auto"
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
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setIsSEOServicesOpen(false);
              }}
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

                {/* Managed AI SEO Services - with nested submenu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsSEOServicesOpen(true)}
                  onMouseLeave={() => setIsSEOServicesOpen(false)}
                >
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors hover:bg-secondary ${
                      isSEOActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Managed AI SEO Services
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* SEO Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                      isSEOServicesOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"
                    }`}
                  >
                    {/* AI-Powered SEO Overview */}
                    <Link
                      to="/services/managed-ai-seo"
                      className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Managed AI SEO
                    </Link>
                    
                    {/* Managed SEO Pricing */}
                    <Link
                      to="/services/managed-seo-pricing"
                      className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors border-b border-border mb-2"
                    >
                      SEO Packages & Pricing
                    </Link>
                    
                    {/* SEO Sub-services */}
                    {seoServices.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}

                    {/* Industries - nested submenu */}
                    <div 
                      className="relative border-t border-border mt-2 pt-2"
                      onMouseEnter={() => setIsSEOIndustriesOpen(true)}
                      onMouseLeave={() => setIsSEOIndustriesOpen(false)}
                    >
                      <button
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-secondary ${
                          location.pathname.startsWith("/industries") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Industries We Serve
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Industries Submenu */}
                      <div
                        className={`absolute left-full top-0 ml-2 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 z-50 ${
                          isSEOIndustriesOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"
                        }`}
                      >
                        {seoIndustries.map((industry) => (
                          <Link
                            key={industry.href}
                            to={industry.href}
                            className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Management */}
                <Link
                  to="/services/social-media"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Social Media Management
                </Link>

                {/* Paid Media & Advertising */}
                <Link
                  to="/services/paid-media"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Paid Media & Advertising
                </Link>

                {/* LinkedIn Outreach Automation */}
                <Link
                  to="/services/linkedin-outreach"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  LinkedIn Outreach Automation
                </Link>

              </div>
            </div>

            {/* AI Client Growth System Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsGrowthSystemOpen(true)}
              onMouseLeave={() => setIsGrowthSystemOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  isGrowthSystemActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                AI Client Growth System
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isGrowthSystemOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/services/crm"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  AI-Powered CRM
                </Link>
                <Link
                  to="/services/ai-receptionist"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  AI Receptionist & Conversational AI
                </Link>
                <Link
                  to="/services/reputation-management"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Reputation Management
                </Link>
                <Link
                  to="/services/quad-bots"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Quad Bots AI Sales Team
                </Link>
              </div>
            </div>

            {/* Top-Level Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/industries/home-services") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Industries
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isIndustriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {topLevelIndustries.map((industry) => (
                  <Link
                    key={industry.href}
                    to={industry.href}
                    className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}
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
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/blog" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
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
              className="flex flex-col items-center justify-center px-5 py-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span className="text-sm text-primary-foreground font-semibold tracking-wide uppercase">Call Now & Schedule Today</span>
              <span className="text-primary-foreground text-lg font-bold">+1 (925) 886-3724</span>
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

                {/* Managed AI SEO Services - nested */}
                <div className="space-y-2">
                  <button
                    onClick={() => setMobileSEOOpen(!mobileSEOOpen)}
                    className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary"
                  >
                    Managed AI SEO Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSEOOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileSEOOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/services/managed-ai-seo"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-primary font-medium"
                      >
                        Managed AI SEO
                      </Link>
                      <Link
                        to="/services/managed-seo-pricing"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-muted-foreground hover:text-primary"
                      >
                        SEO Packages & Pricing
                      </Link>
                      {seoServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-muted-foreground hover:text-primary"
                        >
                          {service.name}
                        </Link>
                      ))}
                      {/* SEO Industries nested in mobile */}
                      <div className="border-t border-border pt-2 mt-2">
                        <button
                          onClick={() => setMobileSEOIndustriesOpen(!mobileSEOIndustriesOpen)}
                          className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary font-medium"
                        >
                          Industries We Serve
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSEOIndustriesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {mobileSEOIndustriesOpen && (
                          <div className="pl-4 space-y-2">
                            {seoIndustries.map((industry) => (
                              <Link
                                key={industry.href}
                                to={industry.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-muted-foreground hover:text-primary"
                              >
                                {industry.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Media Management */}
                <Link
                  to="/services/social-media"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Social Media Management
                </Link>

                {/* Paid Media & Advertising */}
                <Link
                  to="/services/paid-media"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Paid Media & Advertising
                </Link>

                {/* LinkedIn Outreach Automation */}
                <Link
                  to="/services/linkedin-outreach"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  LinkedIn Outreach Automation
                </Link>

              </div>
            )}
          </div>

          {/* Mobile: AI Client Growth System */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileGrowthSystemOpen(!mobileGrowthSystemOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              AI Client Growth System
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileGrowthSystemOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileGrowthSystemOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/crm"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  AI-Powered CRM
                </Link>
                <Link
                  to="/services/ai-receptionist"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  AI Receptionist & Conversational AI
                </Link>
                <Link
                  to="/services/reputation-management"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Reputation Management
                </Link>
                <Link
                  to="/services/quad-bots"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Quad Bots AI Sales Team
                </Link>
              </div>
            )}
          </div>

          {/* Mobile: Top-Level Industries */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileTopIndustriesOpen(!mobileTopIndustriesOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileTopIndustriesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileTopIndustriesOpen && (
              <div className="pl-4 space-y-2">
                {topLevelIndustries.map((industry) => (
                  <Link
                    key={industry.href}
                    to={industry.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-primary"
                  >
                    {industry.name}
                  </Link>
                ))}
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
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Contact
          </Link>

          <Button variant="hero" size="lg" className="w-full mt-4" asChild>
            <Link to="/free-assessment" onClick={() => setIsOpen(false)}>Get Free Audit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
