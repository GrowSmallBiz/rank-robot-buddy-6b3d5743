import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const seoServices = [
  { name: "Technical SEO", href: "/services/technical-seo" },
  { name: "On-Page SEO", href: "/services/on-page-seo" },
  { name: "Answer Engine Optimization", href: "/services/aeo" },
  { name: "Generative Engine Optimization", href: "/services/geo" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Link Building", href: "/services/link-building" },
];

const industries = [
  { name: "HVAC, Plumbing & Electrical", href: "/industries/hvac" },
  { name: "Dental Practices", href: "/industries/dental" },
  { name: "Med Spas & Aesthetics", href: "/industries/med-spa" },
  { name: "Chiropractors", href: "/industries/chiropractor" },
  { name: "Auto Repair Shops", href: "/industries/auto-repair" },
  { name: "Photographers", href: "/industries/photographers" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSEOServicesOpen, setIsSEOServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [mobileSEOOpen, setMobileSEOOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-display">G</span>
            </div>
            <span className="text-xl font-bold font-display text-foreground">
              GrowSmallBiz
            </span>
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

            {/* Managed AI SEO Service Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/services/ai-seo") || 
                  location.pathname.startsWith("/services/technical") ||
                  location.pathname.startsWith("/services/on-page") ||
                  location.pathname.startsWith("/services/aeo") ||
                  location.pathname.startsWith("/services/geo") ||
                  location.pathname.startsWith("/services/local") ||
                  location.pathname.startsWith("/services/link")
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
                onMouseEnter={() => setIsSEOServicesOpen(true)}
                onMouseLeave={() => setIsSEOServicesOpen(false)}
              >
                Managed AI SEO Service
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isSEOServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsSEOServicesOpen(true)}
                onMouseLeave={() => setIsSEOServicesOpen(false)}
              >
                {/* Main AI SEO Hub Link */}
                <Link
                  to="/services/ai-seo-hub"
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2"
                >
                  AI SEO Hub Overview
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
              </div>
            </div>

            {/* Paid Media & Advertising */}
            <Link
              to="/services/paid-media"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/services/paid-media" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Paid Media & Advertising
            </Link>

            {/* Social Media Marketing */}
            <Link
              to="/services/social-media"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/services/social-media" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Social Media
            </Link>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/industries") ? "text-primary" : "text-muted-foreground"
                }`}
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${
                  isIndustriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                {industries.map((industry) => (
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-assessment">Get Free Audit</Link>
            </Button>
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
          
          {/* Mobile: Managed AI SEO Service */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileSEOOpen(!mobileSEOOpen)}
              className="flex items-center justify-between w-full text-foreground font-medium"
            >
              Managed AI SEO Service
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSEOOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSEOOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/ai-seo-hub"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-primary font-medium"
                >
                  AI SEO Hub Overview
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
              </div>
            )}
          </div>

          {/* Mobile: Paid Media */}
          <Link
            to="/services/paid-media"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Paid Media & Advertising
          </Link>

          {/* Mobile: Social Media */}
          <Link
            to="/services/social-media"
            onClick={() => setIsOpen(false)}
            className="block text-foreground font-medium"
          >
            Social Media
          </Link>

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
              <div className="pl-4 space-y-2">
                {industries.map((industry) => (
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
