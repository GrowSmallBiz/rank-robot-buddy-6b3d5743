import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
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
              width={48}
              height={48}
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

                {/* Managed AI SEO */}
                <Link
                  to="/services/managed-ai-seo"
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Managed AI SEO Services
                </Link>

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
              className="flex flex-col items-center justify-center px-5 py-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span className="text-sm text-primary-foreground font-semibold tracking-wide uppercase">Call Now</span>
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

                {/* Managed AI SEO */}
                <Link
                  to="/services/managed-ai-seo"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  Managed AI SEO Services
                </Link>

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
            <Link to="/free-assessment" onClick={() => setIsOpen(false)}>Get Free Audit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
