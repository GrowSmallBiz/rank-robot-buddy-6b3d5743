import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useLocation, Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { c as cn } from "../main.mjs";
import { ChevronDown, ChevronRight, X, Menu } from "lucide-react";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary to-[hsl(199_89%_48%)] text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5",
        heroOutline: "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary",
        glow: "bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 animate-glow-pulse"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const growsmallbizLogo = "/assets/growsmallbiz-logo-DT_m5ddw.webp";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
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
  const isServiceActive = location.pathname.startsWith("/services") || location.pathname === "/website-design";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:ring-2 focus:ring-primary",
        children: "Skip to main content"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border", children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: growsmallbizLogo,
            alt: "GrowSmallBiz Digital Marketing",
            className: "h-16 w-auto",
            width: 64,
            height: 64
          }
        ) }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-6", "aria-label": "Main navigation", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`,
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsServicesOpen(true),
              onMouseLeave: () => setIsServicesOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isServiceActive ? "text-primary" : "text-muted-foreground"}`,
                    "aria-expanded": isServicesOpen,
                    "aria-haspopup": "true",
                    children: [
                      "Services",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services/",
                          className: "block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2",
                          children: "Service Overview"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services/website-design/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Website That Converts"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/seo",
                          onMouseEnter: () => setIsSeoSubOpen(true),
                          onMouseLeave: () => setIsSeoSubOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs(
                              "button",
                              {
                                className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                children: [
                                  "Managed AI SEO Services",
                                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isSeoSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`,
                                children: [
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/aeo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Answer Engine Optimization (AEO)" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/geo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Generative Engine Optimization (GEO)" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Local SEO" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/authority-building/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Authority Building" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/link-building/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Link Building" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/technical-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Technical SEO" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/on-page-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "On-Page SEO" })
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/ads",
                          onMouseEnter: () => setIsAdsSubOpen(true),
                          onMouseLeave: () => setIsAdsSubOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs(
                              "button",
                              {
                                className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                children: [
                                  "Paid Advertising",
                                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isAdsSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`,
                                children: [
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Paid Advertising Overview" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Google PPC Ads" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-local-services-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Google Local Service Ads" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/facebook-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Meta & Facebook Ads" })
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services/marketing-automation-for-small-business/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Marketing Automation"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsIndustriesOpen(true),
              onMouseLeave: () => setIsIndustriesOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/home-service-contractors") && !location.pathname.includes("case-study") || location.pathname.startsWith("/health-and-wellness-practices") || location.pathname.startsWith("/professional-services") ? "text-primary" : "text-muted-foreground"}`,
                    "aria-expanded": isIndustriesOpen,
                    "aria-haspopup": "true",
                    children: [
                      "Industries",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isIndustriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/ind-home",
                          onMouseEnter: () => setIsIndHomeOpen(true),
                          onMouseLeave: () => setIsIndHomeOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Home Service Contractors",
                              /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndHomeOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "HVAC Contractors" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Tree, Lawn & Landscaping" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/painting-companies-marketing/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Painting" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/ind-health",
                          onMouseEnter: () => setIsIndHealthOpen(true),
                          onMouseLeave: () => setIsIndHealthOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Health & Wellness Practices",
                              /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndHealthOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }),
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Med Spas" }),
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Chiropractors" }),
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Dentists" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/ind-prof",
                          onMouseEnter: () => setIsIndProfOpen(true),
                          onMouseLeave: () => setIsIndProfOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Professional Services",
                              /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndProfOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsx(Link, { to: "/professional-services/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }),
                              /* @__PURE__ */ jsx(Link, { to: "/professional-services/marketing-for-realtors/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Real Estate Agents & Brokers" }),
                              /* @__PURE__ */ jsx(Link, { to: "/professional-services/marketing-for-photographers/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Professional Photographers" })
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsLocationsOpen(true),
              onMouseLeave: () => setIsLocationsOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/locations") ? "text-primary" : "text-muted-foreground"}`,
                    children: [
                      "Locations",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isLocationsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: "/locations/locations-we-serve/",
                        className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                        children: "Locations We Serve"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsCaseStudiesOpen(true),
              onMouseLeave: () => setIsCaseStudiesOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.includes("case-study") ? "text-primary" : "text-muted-foreground"}`,
                    children: [
                      "Case Studies",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isCaseStudiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/cs-home",
                          onMouseEnter: () => setIsCsHomeOpen(true),
                          onMouseLeave: () => setIsCsHomeOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Home Service Contractors",
                              /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: `absolute left-full top-0 ml-1 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isCsHomeOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "HVAC, Plumbing & Electrical — Local SEO" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "HVAC, Plumbing & Electrical — Google Ads" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Roofers" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Tree Care, Lawn Care & Landscaping" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Home Remodeling" }),
                              /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Cleaning Services" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/cs-health",
                          onMouseEnter: () => setIsCsHealthOpen(true),
                          onMouseLeave: () => setIsCsHealthOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Health & Wellness Practices",
                              /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isCsHealthOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Med Spa" }),
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Dental Practices" }),
                              /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Chiropractic" })
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/about/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"}`,
              children: "About"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/contact/" || location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"}`,
              children: "Contact"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+19258863724",
            className: "flex flex-col items-center justify-center px-5 py-2 border-2 border-foreground/80 rounded-lg hover:bg-foreground/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-foreground font-semibold tracking-wide uppercase", children: [
                "Call Now ",
                /* @__PURE__ */ jsx("span", { className: "text-xs", children: "24x7" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground text-lg font-bold", children: "+1 (925) 886-3724" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "lg:hidden p-2 text-foreground",
            "aria-label": isOpen ? "Close menu" : "Open menu",
            "aria-expanded": isOpen,
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
          role: "navigation",
          "aria-label": "Mobile navigation",
          children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-6 space-y-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileServicesOpen(!mobileServicesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Services",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileServicesOpen && /* @__PURE__ */ jsxs("div", { className: "pl-4 space-y-2", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-primary font-medium",
                    children: "Service Overview"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services/website-design/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Website That Converts"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setMobileSeoSubOpen(!mobileSeoSubOpen),
                      className: "flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary",
                      children: [
                        "Managed AI SEO Services",
                        /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileSeoSubOpen ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: `overflow-hidden transition-all duration-200 ${mobileSeoSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: [
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-primary hover:text-primary", children: "Overview" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/aeo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Answer Engine Optimization (AEO)" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/geo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Generative Engine Optimization (GEO)" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Local SEO" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/authority-building/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Authority Building" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/link-building/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Link Building" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/technical-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Technical SEO" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/on-page-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "On-Page SEO" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setMobileAdsSubOpen(!mobileAdsSubOpen),
                      className: "flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary",
                      children: [
                        "Paid Advertising",
                        /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileAdsSubOpen ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: `overflow-hidden transition-all duration-200 ${mobileAdsSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: [
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-primary hover:text-primary", children: "Paid Advertising Overview" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Google PPC Ads" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-local-services-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Google Local Service Ads" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/facebook-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Meta & Facebook Ads" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services/marketing-automation-for-small-business/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Marketing Automation"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileIndustriesOpen(!mobileIndustriesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Industries",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileIndustriesOpen && /* @__PURE__ */ jsxs("div", { className: "pl-4 space-y-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-1 pb-1", children: "Home Services" }),
                /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/", onClick: () => setIsOpen(false), className: "block py-2 text-primary hover:text-primary", children: "Home Service Contractors" }),
                /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "HVAC Contractors" }),
                /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Tree, Lawn & Landscaping" }),
                /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/painting-companies-marketing/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Painting" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-3 pb-1", children: "Health & Wellness" }),
                /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/", onClick: () => setIsOpen(false), className: "block py-2 text-primary hover:text-primary", children: "All Health & Wellness" }),
                /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Med Spas" }),
                /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Chiropractors" }),
                /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Dentists" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-3 pb-1", children: "Professional Services" }),
                /* @__PURE__ */ jsx(Link, { to: "/professional-services/", onClick: () => setIsOpen(false), className: "block py-2 text-primary hover:text-primary", children: "All Professional Services" }),
                /* @__PURE__ */ jsx(Link, { to: "/professional-services/marketing-for-realtors/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Real Estate Agents & Brokers" }),
                /* @__PURE__ */ jsx(Link, { to: "/professional-services/marketing-for-photographers/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Professional Photographers" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileLocationsOpen(!mobileLocationsOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Locations",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileLocationsOpen && /* @__PURE__ */ jsx("div", { className: "pl-4 space-y-2", children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/locations/locations-we-serve/",
                  onClick: () => setIsOpen(false),
                  className: "block py-2 text-muted-foreground hover:text-primary",
                  children: "Locations We Serve"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Case Studies",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileCaseStudiesOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileCaseStudiesOpen && /* @__PURE__ */ jsxs("div", { className: "pl-4 space-y-1", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setMobileCsHomeOpen(!mobileCsHomeOpen),
                    className: "flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1",
                    children: [
                      "Home Service Contractors",
                      /* @__PURE__ */ jsx(ChevronDown, { className: `w-3 h-3 transition-transform ${mobileCsHomeOpen ? "rotate-180" : ""}` })
                    ]
                  }
                ),
                mobileCsHomeOpen && /* @__PURE__ */ jsxs("div", { className: "pl-3 space-y-1", children: [
                  /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "HVAC, Plumbing & Electrical — Local SEO" }),
                  /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "HVAC, Plumbing & Electrical — Google Ads" }),
                  /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Roofers" }),
                  /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Tree Care, Lawn Care & Landscaping" }),
                  /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Home Remodeling" }),
                  /* @__PURE__ */ jsx(Link, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Cleaning Services" })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setMobileCsHealthOpen(!mobileCsHealthOpen),
                    className: "flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1",
                    children: [
                      "Health & Wellness Practices",
                      /* @__PURE__ */ jsx(ChevronDown, { className: `w-3 h-3 transition-transform ${mobileCsHealthOpen ? "rotate-180" : ""}` })
                    ]
                  }
                ),
                mobileCsHealthOpen && /* @__PURE__ */ jsxs("div", { className: "pl-3 space-y-1", children: [
                  /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Med Spa" }),
                  /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Dental Practices" }),
                  /* @__PURE__ */ jsx(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Chiropractic" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/about/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "About"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", className: "w-full mt-4", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "https://lp.growsmallbiz.io/digital-growth-strategy-session", target: "_blank", rel: "noopener noreferrer", onClick: () => setIsOpen(false), children: "Schedule Strategy Call" }) })
          ] })
        }
      )
    ] })
  ] });
};
export {
  Button as B,
  Header as H,
  growsmallbizLogo as g
};
