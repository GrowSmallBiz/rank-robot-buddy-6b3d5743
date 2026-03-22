import { Link } from "react-router-dom";

const services = [
  { name: "Technical SEO", href: "/services/technical-seo" },
  { name: "On-Page SEO", href: "/services/on-page-seo" },
  { name: "Answer Engine Optimization", href: "/services/aeo" },
  { name: "Generative Engine Optimization", href: "/services/geo" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Link Building", href: "/services/link-building" },
];


export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-display">G</span>
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                GrowSmallBiz Digital Marketing
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GrowSmallBiz helps local service businesses attract more qualified leads, improve conversions, and streamline follow-up through websites, SEO, paid ads, CRM systems, automation, and AI-powered customer communication.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/free-assessment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Free Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@growsmallbiz.io</li>
              <li>1-800-SEO-GROW</li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@growsmallbiz.io</li>
              <li>1-800-SEO-GROW</li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 GrowSmallBiz Digital Marketing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
