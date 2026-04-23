import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { MapPinned, Phone, Mail, MapPin, Facebook, Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import { g as growsmallbizLogo } from "./Header-Dct2bBAe.js";
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-card border-t border-border", role: "contentinfo", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: growsmallbizLogo,
              alt: "GrowSmallBiz Digital Marketing",
              className: "h-12 w-auto",
              width: 48,
              height: 48
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold font-display text-foreground", children: "GrowSmallBiz Digital Marketing" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "GrowSmallBiz helps local service businesses attract more qualified leads, improve conversions, and streamline follow-up through websites, SEO, paid ads, CRM systems, automation, and AI-powered customer communication." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPinned, { size: 16, className: "mt-0.5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: "52 Antelope CT, Danville, CA 94506" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+19258863724", className: "hover:text-primary transition-colors", children: "+1 (925) 886-3724" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:contact@growsmallbiz.io", className: "hover:text-primary transition-colors", children: "contact@growsmallbiz.io" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "https://maps.app.goo.gl/oSLNhYTJwXn4ixuX8", target: "_blank", rel: "noopener noreferrer", "aria-label": "Google Business Profile", className: "transition-colors", style: { color: "#4285F4" }, children: /* @__PURE__ */ jsx(MapPin, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/growsmallbizDM/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "transition-colors", style: { color: "#1877F2" }, children: /* @__PURE__ */ jsx(Facebook, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@GrowSmallBizDM", target: "_blank", rel: "noopener noreferrer", "aria-label": "YouTube", className: "transition-colors", style: { color: "#FF0000" }, children: /* @__PURE__ */ jsx(Youtube, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/growsmallbiz.io/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "transition-colors", style: { color: "#E4405F" }, children: /* @__PURE__ */ jsx(Instagram, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/growsmallbiz-dm/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "transition-colors", style: { color: "#0A66C2" }, children: /* @__PURE__ */ jsx(Linkedin, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://x.com/GrowSmallBizDM", target: "_blank", rel: "noopener noreferrer", "aria-label": "Twitter / X", className: "transition-colors", style: { color: "#000000" }, children: /* @__PURE__ */ jsx(Twitter, { size: 20 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/website-design/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Website Design" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "AI SEO" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Local SEO" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/aeo/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "AEO" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/geo/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "GEO" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-ads/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Google Ads" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/facebook-ads/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Facebook & Instagram Ads" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/marketing-automation-for-small-business/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Marketing Automation" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "All Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/locations/locations-we-serve/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Locations We Serve" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Contact" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy-policy/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms-of-service/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Terms of Service" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 pt-8 border-t border-border text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "© 2026 GrowSmallBiz Digital Marketing. All rights reserved." }) })
  ] }) });
};
export {
  Footer as F
};
