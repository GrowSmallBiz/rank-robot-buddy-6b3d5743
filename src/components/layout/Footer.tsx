import { Link } from "react-router-dom";
import { MapPin, Facebook, Youtube, Instagram, Linkedin, Twitter, Mail, Phone, MapPinned } from "lucide-react";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={growsmallbizLogo}
                alt="GrowSmallBiz logo featuring digital marketing services for painting contractors, emphasizing AI SEO, PPC, web, social media, and automation."
                className="h-12 w-auto"
                width={48}
                height={48} />
              <span className="text-xl font-bold font-display text-foreground">
                GrowSmallBiz Digital Marketing
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GrowSmallBiz helps local service businesses attract more qualified leads, improve conversions, and streamline follow-up through websites, SEO, paid ads, CRM systems, automation, and AI-powered customer communication.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPinned size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>52 Antelope CT, Danville, CA 94506</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+19258863724" className="hover:text-primary transition-colors">+1 (925) 886-3724</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href="mailto:contact@growsmallbiz.io" className="hover:text-primary transition-colors">contact@growsmallbiz.io</a>
              </li>
            </ul>
            <div className="flex gap-3 pt-2">
              <a href="https://maps.app.goo.gl/oSLNhYTJwXn4ixuX8" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="transition-colors" style={{ color: '#4285F4' }}>
                <MapPin size={20} />
              </a>
              <a href="https://www.facebook.com/growsmallbizDM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors" style={{ color: '#1877F2' }}>
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@GrowSmallBizDM" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors" style={{ color: '#FF0000' }}>
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/growsmallbiz.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors" style={{ color: '#E4405F' }}>
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/growsmallbiz-dm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors" style={{ color: '#0A66C2' }}>
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/GrowSmallBizDM" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="transition-colors" style={{ color: '#000000' }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/website-design/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Website Design</Link></li>
              <li><Link to="/services/seo-agency/" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI SEO</Link></li>
              <li><Link to="/services/seo-agency/local-seo/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Local SEO</Link></li>
              <li>
                <Link to="/services/seo-agency/ai-search-optimization/" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Search Optimization</Link>
                <ul className="mt-2 ml-4 space-y-2 border-l border-border/40 pl-3">
                  <li><Link to="/services/seo-agency/aeo/" className="text-xs text-muted-foreground/80 hover:text-primary transition-colors">↳ AEO</Link></li>
                  <li><Link to="/services/seo-agency/geo/" className="text-xs text-muted-foreground/80 hover:text-primary transition-colors">↳ GEO</Link></li>
                </ul>
              </li>
              <li><Link to="/services/paid-advertising/google-ads/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Google Ads</Link></li>
              <li><Link to="/services/paid-advertising/facebook-ads/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook & Instagram Ads</Link></li>
              <li><Link to="/services/marketing-automation-for-small-business/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Marketing Automation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about/" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services/" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Services</Link></li>
              <li><Link to="/locations/locations-we-serve/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Locations We Serve</Link></li>
              <li><Link to="/contact/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 GrowSmallBiz Digital Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
