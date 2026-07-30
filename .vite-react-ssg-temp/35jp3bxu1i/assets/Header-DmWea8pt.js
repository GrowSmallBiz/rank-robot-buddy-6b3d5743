import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { useLocation, Link } from "react-router-dom";
import { B as Button } from "./button-Co-CyCVS.js";
import { Sparkles, ChevronDown, ChevronRight, X, Menu } from "lucide-react";
import { useState } from "react";
import { g as growsmallbizLogo } from "./growsmallbiz-logo-bLUzBkSC.js";
const Header = () => {
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
  const isServiceActive = location.pathname.startsWith("/services") || location.pathname === "/website-design";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:ring-2 focus:ring-primary",
        children: "Skip to main content"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 41,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border", children: [
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/specials/current-offers/",
          className: "block bg-primary/15 border-b border-primary/30 hover:bg-primary/25 transition-colors",
          children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 py-2 text-xs md:text-sm text-foreground", children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-primary shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-bold", children: "Current Specials:" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 57,
                columnNumber: 15
              }, void 0),
              " ",
              "Limited-time offers for local service businesses"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:inline underline text-primary font-semibold ml-2", children: "View Offers" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 49,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: growsmallbizLogo,
            alt: "GrowSmallBiz logo featuring digital marketing services for painting contractors, emphasizing AI SEO, PPC, web, social media, and automation.",
            className: "h-16 w-auto",
            width: 64,
            height: 64
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 70,
            columnNumber: 13
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center gap-6", "aria-label": "Main navigation", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`,
              children: "Home"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 80,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsServicesOpen(true),
              onMouseLeave: () => setIsServicesOpen(false),
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isServiceActive ? "text-primary" : "text-muted-foreground"}`,
                    "aria-expanded": isServicesOpen,
                    "aria-haspopup": "true",
                    children: [
                      "Services",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 95,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        Link,
                        {
                          to: "/services/",
                          className: "block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2",
                          children: "Service Overview"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 112,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        Link,
                        {
                          to: "/services/website-design/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Website That Converts"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 120,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/seo",
                          onMouseEnter: () => setIsSeoSubOpen(true),
                          onMouseLeave: () => setIsSeoSubOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                children: [
                                  "Managed AI SEO Services",
                                  /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 137,
                                    columnNumber: 21
                                  }, void 0)
                                ]
                              },
                              void 0,
                              true,
                              {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 133,
                                columnNumber: 19
                              },
                              void 0
                            ),
                            /* @__PURE__ */ jsxDEV(
                              "div",
                              {
                                className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isSeoSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`,
                                children: [
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 144,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/ai-search-optimization/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "AI Search Optimization" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 147,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/aeo/", className: "block pl-8 pr-4 py-2 rounded-lg text-xs text-muted-foreground/80 hover:text-foreground hover:bg-secondary transition-colors", children: "↳ Answer Engine Optimization (AEO)" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 150,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/geo/", className: "block pl-8 pr-4 py-2 rounded-lg text-xs text-muted-foreground/80 hover:text-foreground hover:bg-secondary transition-colors", children: "↳ Generative Engine Optimization (GEO)" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 153,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/local-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Local SEO" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 156,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/authority-building/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Authority Building" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 159,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/link-building/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Link Building" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 162,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/technical-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Technical SEO" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 165,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/on-page-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "On-Page SEO" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 168,
                                    columnNumber: 21
                                  }, void 0)
                                ]
                              },
                              void 0,
                              true,
                              {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 139,
                                columnNumber: 19
                              },
                              void 0
                            )
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 128,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/ads",
                          onMouseEnter: () => setIsAdsSubOpen(true),
                          onMouseLeave: () => setIsAdsSubOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                children: [
                                  "Paid Advertising",
                                  /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 184,
                                    columnNumber: 21
                                  }, void 0)
                                ]
                              },
                              void 0,
                              true,
                              {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 180,
                                columnNumber: 19
                              },
                              void 0
                            ),
                            /* @__PURE__ */ jsxDEV(
                              "div",
                              {
                                className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isAdsSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`,
                                children: [
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Paid Advertising Overview" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 191,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/google-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Google PPC Ads" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 194,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/google-local-services-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Google Local Service Ads" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 197,
                                    columnNumber: 21
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/facebook-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Meta & Facebook Ads" }, void 0, false, {
                                    fileName: "/dev-server/src/components/layout/Header.tsx",
                                    lineNumber: 200,
                                    columnNumber: 21
                                  }, void 0)
                                ]
                              },
                              void 0,
                              true,
                              {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 186,
                                columnNumber: 19
                              },
                              void 0
                            )
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 175,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        Link,
                        {
                          to: "/services/marketing-automation-for-small-business/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Marketing Automation"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 207,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        Link,
                        {
                          to: "/services/ai-receptionist-and-conversational-ai/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "AI Receptionist & Conversational AI"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 215,
                          columnNumber: 17
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 90,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsIndustriesOpen(true),
              onMouseLeave: () => setIsIndustriesOpen(false),
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/home-service-contractors") && !location.pathname.includes("case-study") || location.pathname.startsWith("/health-and-wellness-practices") || location.pathname.startsWith("/professional-services") ? "text-primary" : "text-muted-foreground"}`,
                    "aria-expanded": isIndustriesOpen,
                    "aria-haspopup": "true",
                    children: [
                      "Industries",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 231,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isIndustriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/ind-home",
                          onMouseEnter: () => setIsIndHomeOpen(true),
                          onMouseLeave: () => setIsIndHomeOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Home Service Contractors",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 252,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndHomeOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "HVAC Contractors" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 260,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Tree Removal Service and Landscaping Remodeling" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 263,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/landscape-construction-hardscaping-marketing/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Landscape Construction & Hardscaping" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 266,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/painting-companies-marketing/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Painting" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 269,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 256,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 247,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/ind-health",
                          onMouseEnter: () => setIsIndHealthOpen(true),
                          onMouseLeave: () => setIsIndHealthOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Health & Wellness Practices",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 283,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 281,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndHealthOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Med Spas" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 289,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Chiropractors" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Dentists" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 285,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 276,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/ind-prof",
                          onMouseEnter: () => setIsIndProfOpen(true),
                          onMouseLeave: () => setIsIndProfOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Professional Services",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 309,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 307,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isIndProfOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/professional-services/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 312,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/professional-services/marketing-for-realtors/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Real Estate Agents & Brokers" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 315,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/professional-services/marketing-for-photographers/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Professional Photographers" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 318,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 311,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 302,
                          columnNumber: 17
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 226,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsLocationsOpen(true),
              onMouseLeave: () => setIsLocationsOpen(false),
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/locations") ? "text-primary" : "text-muted-foreground"}`,
                    children: [
                      "Locations",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 332,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isLocationsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        Link,
                        {
                          to: "/locations/locations-we-serve/",
                          className: "block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2",
                          children: "Locations We Serve"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 345,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/loc-diablo",
                          onMouseEnter: () => setIsLocDiabloOpen(true),
                          onMouseLeave: () => setIsLocDiabloOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Diablo Valley Region",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 360,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 358,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-56 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isLocDiabloOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/walnut-creek-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Walnut Creek" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 363,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/pleasant-hill-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Pleasant Hill" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/concord-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Concord" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 365,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/martinez-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Martinez" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 366,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 362,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 353,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/loc-tri",
                          onMouseEnter: () => setIsLocTriOpen(true),
                          onMouseLeave: () => setIsLocTriOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Tri Valley Extended",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 378,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 376,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-56 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isLocTriOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/danville-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Danville" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 381,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/san-ramon-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "San Ramon" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 382,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/dublin-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Dublin" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 383,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/pleasanton-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Pleasanton" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 384,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/livermore-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Livermore" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 385,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/locations/tracy-ca/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Tracy" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 386,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 380,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 371,
                          columnNumber: 17
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 340,
                    columnNumber: 15
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 327,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsCaseStudiesOpen(true),
              onMouseLeave: () => setIsCaseStudiesOpen(false),
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.includes("case-study") ? "text-primary" : "text-muted-foreground"}`,
                    children: [
                      "Case Studies",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 404,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 398,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isCaseStudiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/cs-home",
                          onMouseEnter: () => setIsCsHomeOpen(true),
                          onMouseLeave: () => setIsCsHomeOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Home Service Contractors",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 419,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 417,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isCsHomeOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "HVAC, Plumbing & Electrical — Local SEO" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 422,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "HVAC, Plumbing & Electrical — Google Ads" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 425,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Roofers" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 428,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Tree Removal Service and Landscaping Remodeling" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 431,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Home Remodeling" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 434,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Cleaning Services" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 437,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 421,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 412,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "relative group/cs-health",
                          onMouseEnter: () => setIsCsHealthOpen(true),
                          onMouseLeave: () => setIsCsHealthOpen(false),
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
                              "Health & Wellness Practices",
                              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 451,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 449,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isCsHealthOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`, children: [
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Med Spa" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 454,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Dental Practices" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 457,
                                columnNumber: 21
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Chiropractic" }, void 0, false, {
                                fileName: "/dev-server/src/components/layout/Header.tsx",
                                lineNumber: 460,
                                columnNumber: 21
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/layout/Header.tsx",
                              lineNumber: 453,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 444,
                          columnNumber: 17
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 406,
                    columnNumber: 15
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 393,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/about/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"}`,
              children: "About"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 468,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/contact/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/contact/" || location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"}`,
              children: "Contact"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 477,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "tel:+19258863724",
            className: "flex flex-col items-center justify-center px-5 py-2 border-2 border-foreground/80 rounded-lg hover:bg-foreground/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground font-semibold tracking-wide uppercase", children: [
                "Call Now ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs", children: "24x7" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 493,
                  columnNumber: 104
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 493,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-foreground text-lg font-bold", children: "+1 (925) 886-3724" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 494,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 489,
            columnNumber: 13
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 488,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "lg:hidden p-2 text-foreground",
            "aria-label": isOpen ? "Close menu" : "Open menu",
            "aria-expanded": isOpen,
            children: isOpen ? /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 505,
              columnNumber: 23
            }, void 0) : /* @__PURE__ */ jsxDEV(Menu, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 505,
              columnNumber: 51
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 499,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
          role: "navigation",
          "aria-label": "Mobile navigation",
          children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6 space-y-4", children: [
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "Home"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 519,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setMobileServicesOpen(!mobileServicesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Services",
                    /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}` }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 534,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 529,
                  columnNumber: 13
                },
                void 0
              ),
              mobileServicesOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-4 space-y-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/services/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-primary font-medium",
                    children: "Service Overview"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 539,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/services/website-design/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Website That Converts"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 548,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setMobileSeoSubOpen(!mobileSeoSubOpen),
                      className: "flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary",
                      children: [
                        "Managed AI SEO Services",
                        /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileSeoSubOpen ? "rotate-180" : ""}` }, void 0, false, {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 563,
                          columnNumber: 21
                        }, void 0)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 558,
                      columnNumber: 19
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { className: `overflow-hidden transition-all duration-200 ${mobileSeoSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: [
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-primary hover:text-primary", children: "Overview" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 566,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/ai-search-optimization/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "AI Search Optimization" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 569,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/aeo/", onClick: () => setIsOpen(false), className: "block py-1.5 pl-8 text-xs text-muted-foreground/80 hover:text-primary", children: "↳ Answer Engine Optimization (AEO)" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 572,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/geo/", onClick: () => setIsOpen(false), className: "block py-1.5 pl-8 text-xs text-muted-foreground/80 hover:text-primary", children: "↳ Generative Engine Optimization (GEO)" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 575,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/local-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Local SEO" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 578,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/authority-building/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Authority Building" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 581,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/link-building/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Link Building" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 584,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/technical-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Technical SEO" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 587,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/on-page-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "On-Page SEO" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 590,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 565,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 557,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setMobileAdsSubOpen(!mobileAdsSubOpen),
                      className: "flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary",
                      children: [
                        "Paid Advertising",
                        /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileAdsSubOpen ? "rotate-180" : ""}` }, void 0, false, {
                          fileName: "/dev-server/src/components/layout/Header.tsx",
                          lineNumber: 603,
                          columnNumber: 21
                        }, void 0)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 598,
                      columnNumber: 19
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { className: `overflow-hidden transition-all duration-200 ${mobileAdsSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: [
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-primary hover:text-primary", children: "Paid Advertising Overview" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 606,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/google-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Google PPC Ads" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 609,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/google-local-services-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Google Local Service Ads" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 612,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(Link, { to: "/services/paid-advertising/facebook-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Meta & Facebook Ads" }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 615,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 605,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 597,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/services/marketing-automation-for-small-business/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Marketing Automation"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 622,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/services/ai-receptionist-and-conversational-ai/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "AI Receptionist & Conversational AI"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 631,
                    columnNumber: 17
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 537,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 528,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setMobileIndustriesOpen(!mobileIndustriesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Industries",
                    /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}` }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 650,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 645,
                  columnNumber: 13
                },
                void 0
              ),
              mobileIndustriesOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-4 space-y-1", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-1 pb-1", children: "Home Services" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 654,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/", onClick: () => setIsOpen(false), className: "block py-2 text-primary hover:text-primary", children: "Home Service Contractors" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 655,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "HVAC Contractors" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 658,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Tree Removal Service and Landscaping Remodeling" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 661,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/landscape-construction-hardscaping-marketing/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Landscape Construction & Hardscaping" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 664,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/painting-companies-marketing/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Painting" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 667,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-3 pb-1", children: "Health & Wellness" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 670,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/", onClick: () => setIsOpen(false), className: "block py-2 text-primary hover:text-primary", children: "All Health & Wellness" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 671,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Med Spas" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 674,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Chiropractors" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 677,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Dentists" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 680,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-3 pb-1", children: "Professional Services" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 683,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/professional-services/", onClick: () => setIsOpen(false), className: "block py-2 text-primary hover:text-primary", children: "All Professional Services" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 684,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/professional-services/marketing-for-realtors/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Real Estate Agents & Brokers" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 687,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Link, { to: "/professional-services/marketing-for-photographers/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary", children: "Professional Photographers" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 690,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 653,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 644,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setMobileLocationsOpen(!mobileLocationsOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Locations",
                    /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}` }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 704,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 699,
                  columnNumber: 13
                },
                void 0
              ),
              mobileLocationsOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-4 space-y-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/locations/locations-we-serve/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-primary font-medium",
                    children: "Locations We Serve"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 708,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setMobileLocDiabloOpen(!mobileLocDiabloOpen),
                    className: "flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1",
                    children: [
                      "Diablo Valley Region",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-3 h-3 transition-transform ${mobileLocDiabloOpen ? "rotate-180" : ""}` }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 721,
                        columnNumber: 19
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 716,
                    columnNumber: 17
                  },
                  void 0
                ),
                mobileLocDiabloOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-3 space-y-1", children: [
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/walnut-creek-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Walnut Creek" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 725,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/pleasant-hill-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Pleasant Hill" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 726,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/concord-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Concord" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 727,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/martinez-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Martinez" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 728,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 724,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setMobileLocTriOpen(!mobileLocTriOpen),
                    className: "flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1",
                    children: [
                      "Tri Valley Extended",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-3 h-3 transition-transform ${mobileLocTriOpen ? "rotate-180" : ""}` }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 737,
                        columnNumber: 19
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 732,
                    columnNumber: 17
                  },
                  void 0
                ),
                mobileLocTriOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-3 space-y-1", children: [
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/danville-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Danville" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 741,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/san-ramon-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "San Ramon" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 742,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/dublin-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Dublin" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 743,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/pleasanton-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Pleasanton" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 744,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/livermore-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Livermore" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 745,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/locations/tracy-ca/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Tracy" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 746,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 740,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 707,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 698,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Case Studies",
                    /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileCaseStudiesOpen ? "rotate-180" : ""}` }, void 0, false, {
                      fileName: "/dev-server/src/components/layout/Header.tsx",
                      lineNumber: 760,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 755,
                  columnNumber: 13
                },
                void 0
              ),
              mobileCaseStudiesOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-4 space-y-1", children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setMobileCsHomeOpen(!mobileCsHomeOpen),
                    className: "flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1",
                    children: [
                      "Home Service Contractors",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-3 h-3 transition-transform ${mobileCsHomeOpen ? "rotate-180" : ""}` }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 769,
                        columnNumber: 19
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 764,
                    columnNumber: 17
                  },
                  void 0
                ),
                mobileCsHomeOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-3 space-y-1", children: [
                  /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "HVAC, Plumbing & Electrical — Local SEO" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 773,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "HVAC, Plumbing & Electrical — Google Ads" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 776,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Roofers" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 779,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Tree Removal Service and Landscaping Remodeling" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 782,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Home Remodeling" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 785,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Cleaning Services" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 788,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 772,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setMobileCsHealthOpen(!mobileCsHealthOpen),
                    className: "flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2 pb-1",
                    children: [
                      "Health & Wellness Practices",
                      /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-3 h-3 transition-transform ${mobileCsHealthOpen ? "rotate-180" : ""}` }, void 0, false, {
                        fileName: "/dev-server/src/components/layout/Header.tsx",
                        lineNumber: 799,
                        columnNumber: 19
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 794,
                    columnNumber: 17
                  },
                  void 0
                ),
                mobileCsHealthOpen && /* @__PURE__ */ jsxDEV("div", { className: "pl-3 space-y-1", children: [
                  /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Med Spa" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 803,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Dental Practices" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 806,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(Link, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/", onClick: () => setIsOpen(false), className: "block py-2 text-muted-foreground hover:text-primary text-sm", children: "Chiropractic" }, void 0, false, {
                    fileName: "/dev-server/src/components/layout/Header.tsx",
                    lineNumber: 809,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/layout/Header.tsx",
                  lineNumber: 802,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 763,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 754,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/about/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "About"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 818,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/contact/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "Contact"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/layout/Header.tsx",
                lineNumber: 826,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", className: "w-full mt-4", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "https://lp.growsmallbiz.io/digital-growth-strategy-session", target: "_blank", rel: "noopener noreferrer", onClick: () => setIsOpen(false), children: "Schedule Strategy Call" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 835,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 834,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 518,
            columnNumber: 9
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 511,
          columnNumber: 7
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/layout/Header.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/layout/Header.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, void 0);
};
export {
  Header as H
};
