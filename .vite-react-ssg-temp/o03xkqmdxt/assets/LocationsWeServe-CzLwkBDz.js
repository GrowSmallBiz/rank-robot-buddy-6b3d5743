import { j as jsxDEV } from "../main.mjs";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { MapPin, Building2, ArrowRight, Brain, TrendingUp, BarChart3, Zap, Search, Globe, CheckCircle, Users, Target, Star, MessageSquare, Smartphone, Shield } from "lucide-react";
import "./button-Co-CyCVS.js";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import "react";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { P as PageJsonLd } from "./PageJsonLd-D6BEuSgJ.js";
import { Head } from "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const eastBayHero = "/assets/east-bay-tri-valley-hero-CrVY4SO0.webp";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const faqs = [
  {
    question: "What is the average ROI for Google Ads campaigns in the Bay Area?",
    answer: "Google Ads campaigns in competitive Bay Area markets typically achieve an average ROI of 400%, depending on industry and campaign optimization. Businesses focusing on tech startups and professional services often see higher returns due to targeted audience segments, as reported by Google Ads Resources."
  },
  {
    question: "How important is local SEO for small businesses in cities like Oakland and Fremont?",
    answer: "Local SEO is crucial for small businesses in Oakland and Fremont, as it significantly improves visibility in local search results. Effective local SEO can increase website traffic by up to 30% and lead inquiries by 25%, directly impacting revenue, according to BrightLocal."
  },
  {
    question: "How can AI marketing systems benefit healthcare providers in San Jose?",
    answer: "AI marketing systems help healthcare providers personalize patient outreach, predict appointment needs, and optimize advertising spend. This leads to improved patient engagement, higher appointment rates, and better resource allocation, as demonstrated in our work with multiple San Jose healthcare clients."
  },
  {
    question: "What digital marketing channels are most effective for Bay Area restaurants?",
    answer: "Bay Area restaurants benefit most from a combination of local SEO, reputation management, and social media advertising. These channels drive foot traffic, enhance online reviews, and increase brand awareness in a competitive dining scene, supported by data from HubSpot and Search Engine Journal's insights on local search ranking factors."
  },
  {
    question: "How do I choose the right digital marketing mix for my Bay Area business?",
    answer: "Choosing the right digital marketing mix involves assessing your business size, industry vertical, target audience behavior, and budget. Using a data-driven framework that considers these factors ensures your marketing efforts are efficient and effective. Our proprietary framework, refined through years of Bay Area client engagements, guides this process with proven success."
  }
];
const LocationsWeServe = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Digital Marketing & SEO Services in Bay Area and Nationwide" }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz serves local service businesses across Greater San Francisco Bay Area (Sacramento to San Jose) and the entire United States. Contact us." }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "local digital marketing, Bay Area marketing services, SEO for local businesses, paid advertising Bay Area, reputation management services, GrowSmallBiz Digital Marketing, localized marketing strategies, small business marketing solutions" }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/locations/locations-we-serve/" }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI-Driven Small Businesses Growth System | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Digital Marketing Agency Bay Area — Local Marketing Services by City",
        description: "GrowSmallBiz serves local service businesses across the Bay Area — Walnut Creek, Danville, San Ramon, Dublin, Pleasanton, Concord, and more.",
        url: "/locations/locations-we-serve/",
        breadcrumbs: [
          { name: "Locations", url: "/locations/locations-we-serve/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 72,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: MapPin, text: "Bay Area Coverage" },
          title: "Digital Marketing Agency Serving the Bay Area —",
          titleHighlight: "Find Your City",
          subtitle: "In the highly competitive and diverse Bay Area market, local businesses face unique challenges in effectively reaching their target audiences. With over 7.5 million residents across cities like San Francisco, San Jose, Oakland, and Fremont, the region demands tailored digital marketing strategies that reflect its dynamic economy and varied industry sectors.",
          description: "Per the U.S. Census Bureau, the Bay Area continues to see robust population growth and a thriving small business ecosystem, making localized marketing essential.",
          primaryCTA: { label: "Schedule Strategy Call", href: PRIMARY_CTA_URL, external: true },
          secondaryCTA: { label: "View Our Services", href: "/services/" },
          stats: [
            { value: "7.5M+", label: "Bay Area Residents" },
            { value: "150+", label: "Local Clients Served" },
            { value: "40%", label: "Avg Lead Increase" },
            { value: "12+", label: "Years Experience" }
          ],
          backgroundImage: eastBayHero,
          overlayOpacity: 80
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 86,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "pt-8 pb-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center mb-16", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Building2, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "East Bay Coverage" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Digital Marketing Services Across the East Bay" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "GrowSmallBiz Digital Marketing proudly serves all East Bay communities, covering both the Diablo Valley and Tri-Valley regions. Our tailored digital marketing services address the unique business landscapes and growth opportunities in each city, ensuring local businesses thrive in their specific markets." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground mb-8 text-center", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Diablo Valley" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, void 0),
            " Region"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
            {
              city: "Walnut Creek",
              slug: "/locations/walnut-creek-ca/",
              desc: "Walnut Creek's vibrant retail and professional services sectors require comprehensive local SEO and reputation management to capture both foot traffic and online leads."
            },
            {
              city: "Pleasant Hill",
              slug: "/locations/pleasant-hill-ca/",
              desc: "Sitting at the heart of the 680 corridor between Walnut Creek and Concord, Pleasant Hill's affluent homeowner base, Diablo Valley College population, and BART-connected professional community create high-intent demand for local service businesses — with surprisingly thin digital competition."
            },
            {
              city: "Concord",
              slug: "/locations/concord-ca/",
              desc: "Concord's diverse small and medium business market thrives with localized SEO, social media engagement, and targeted advertising campaigns tailored to varied industries."
            },
            {
              city: "Martinez",
              slug: "/locations/martinez-ca/",
              desc: "As the seat of Contra Costa County, Martinez businesses operate in a distinct market with a historic downtown, waterfront district, and a community-oriented customer base that rewards local credibility and reputation above all else."
            }
          ].map((item) => /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: item.slug,
              className: "group block p-6 feature-card-teal rounded-2xl transition-all duration-300 hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 155,
                    columnNumber: 25
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 154,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors", children: [
                    "Digital Marketing in ",
                    item.city,
                    ", CA"
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 157,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 153,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 161,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all", children: [
                  "Learn More",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 164,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 162,
                  columnNumber: 21
                }, void 0)
              ]
            },
            item.city,
            true,
            {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 148,
              columnNumber: 19
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-bold text-foreground mb-8 text-center", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Tri-Valley" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, void 0),
            " & Extended Service Area"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
            {
              city: "Danville",
              slug: "/locations/danville-ca/",
              desc: "Danville's affluent market supports high-value service businesses, making targeted digital marketing strategies focused on premium branding and lead generation essential for success."
            },
            {
              city: "San Ramon",
              slug: "/locations/san-ramon-ca/",
              desc: "With a strong corporate and B2B presence, San Ramon businesses benefit from AI-driven marketing systems and professional content marketing to engage decision-makers effectively."
            },
            {
              city: "Dublin",
              slug: "/locations/dublin-ca/",
              desc: "Dublin's fast-growing residential and retail markets demand dynamic digital marketing strategies that combine local SEO with social media advertising to attract new residents and shoppers."
            },
            {
              city: "Pleasanton",
              slug: "/locations/pleasanton-ca/",
              desc: "Known as a small business hub, Pleasanton businesses benefit from integrated marketing approaches including PPC, content marketing, and reputation management to drive growth."
            },
            {
              city: "Livermore",
              slug: "/locations/livermore-ca/",
              desc: "Livermore's unique blend of wine country tourism and industrial sectors requires specialized marketing strategies that highlight local attractions and B2B services."
            },
            {
              city: "Tracy",
              slug: "/locations/tracy-ca/",
              desc: "Tracy's fast-growing commuter market and Bay Area affordability migration wave create consistent demand across home services, healthcare, restaurants, and real estate — with digital competition well behind the Bay Area cities to the west."
            }
          ].map((item) => /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: item.slug,
              className: "group block p-6 feature-card-teal rounded-2xl transition-all duration-300 hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 216,
                    columnNumber: 25
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 215,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors", children: [
                    "Digital Marketing in ",
                    item.city,
                    ", CA"
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 218,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 214,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 222,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all", children: [
                  "Learn More",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                    lineNumber: 225,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 223,
                  columnNumber: 21
                }, void 0)
              ]
            },
            item.city,
            true,
            {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 209,
              columnNumber: 19
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Brain, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 240,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "AI-Powered Marketing" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 241,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Understanding AI-Powered Marketing Systems in the Bay Area" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 243,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "AI-powered marketing systems utilize advanced algorithms to analyze consumer behavior and optimize marketing strategies, a critical advantage in the data-driven Bay Area market. These systems process vast datasets to identify patterns and trends, enabling businesses to deliver personalized content and targeted advertising that resonates with local audiences. According to Google research, 76% of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 238,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 254,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 253,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Key Benefits" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Enhanced visibility, improved engagement, and efficient lead generation." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 257,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 252,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(BarChart3, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 261,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 260,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Bay Area Impact" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 263,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "According to a 2024 report by BrightLocal, AI marketing adoption has increased by 35% among local businesses since 2023, with tech startups leading the way." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 264,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 259,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Zap, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 268,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 267,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Performance Benchmarks" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 270,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Businesses using AI-driven marketing report an average 25% increase in customer retention and a 30% boost in conversion rates, as documented in HubSpot's 2024 Marketing Statistics." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 271,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 266,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 251,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-center italic", children: "Research highlights AI's transformative role in personalization and predictive analytics, essential for Bay Area businesses competing in saturated markets." }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 237,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Brain, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 288,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "AI-Powered Digital Marketing Automation" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 289,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 287,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Boost Greater Bay Area SMB Growth with Agentic AI Marketing Playbooks" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 291,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mt-4", children: "Get More Calls, More Booked Jobs, and Grow Revenue" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 294,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/90 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "https://www.thinkwithgoogle.com/_qs/documents/645/consumer-search-i-want-to-go-micro-moments-b.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "According to Google research" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 302,
            columnNumber: 19
          }, void 0),
          ", ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-bold text-2xl", children: "76%" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 302,
            columnNumber: 257
          }, void 0),
          " of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 301,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]", children: /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/90 leading-relaxed text-lg", children: "AI-powered marketing works best when it is not treated as a standalone tool. GrowSmallBiz connects website performance, local SEO, paid ads, CRM automation, AI Receptionist, and Conversational AI into one coordinated system designed to help small and mid-sized businesses respond faster, follow up more consistently, and convert more opportunities into revenue. The goal is not more technology for its own sake. The goal is fewer missed leads, stronger lead handling, and better business outcomes from the marketing you are already investing in." }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 308,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 307,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 283,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 322,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "AI Powered Local SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 323,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 321,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Local SEO Strategies for Bay Area Cities: San Francisco, San Jose, Oakland, and Fremont" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Local SEO is vital for businesses targeting customers within specific Bay Area cities. Effective local SEO enhances online visibility, making it easier for potential customers to find services nearby. BrightLocal research shows that 87% of consumers read online reviews for local businesses, highlighting the importance of reputation alongside SEO. Below are city-specific strategies and insights for optimizing local SEO in 2025-2026." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 328,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 320,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Globe, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 336,
              columnNumber: 19
            }, void 0),
            "San Francisco: Tech and Professional Services Hub"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 335,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 341,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Optimize Google My Business:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 343,
                  columnNumber: 23
                }, void 0),
                " Ensure complete profiles with updated hours and service details, especially for tech startups and professional services. Google data confirms that businesses with fully optimized Google Business Profiles are twice as likely to be considered reputable by consumers."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 342,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 340,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 347,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 349,
                  columnNumber: 23
                }, void 0),
                ' Use neighborhood-specific terms like "SoMa tech consulting" or "Financial District legal services."'
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 348,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 346,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 353,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 355,
                  columnNumber: 23
                }, void 0),
                " Encourage reviews on platforms like Yelp and Google, as San Francisco consumers heavily rely on peer feedback. BrightLocal's Local Consumer Review Survey indicates that 79% of consumers trust online reviews as much as personal recommendations."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 354,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 352,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 359,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 361,
                  columnNumber: 23
                }, void 0),
                " According to Statista, average local SEO campaigns in San Francisco yield a 35% increase in organic traffic within six months, supported by BrightEdge research showing that organic search drives over 53% of website traffic on average."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 360,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 358,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 339,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 334,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Building2, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 370,
              columnNumber: 19
            }, void 0),
            "San Jose: Focus on Healthcare and Tech Startups"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 369,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 375,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Google My Business Optimization:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 377,
                  columnNumber: 23
                }, void 0),
                " Highlight specialties and certifications for healthcare providers and tech firms. Google reports that 46% of all searches have local intent, making this optimization critical."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 376,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 374,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 381,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 383,
                  columnNumber: 23
                }, void 0),
                ' Incorporate terms like "Silicon Valley healthcare" or "San Jose SaaS solutions."'
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 382,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 380,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 387,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 389,
                  columnNumber: 23
                }, void 0),
                " Prioritize patient testimonials and case studies to build trust. BrightLocal data shows that 73% of consumers say positive reviews make them trust a local business more."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 388,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 386,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 393,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 395,
                  columnNumber: 23
                }, void 0),
                " Local SEO efforts typically result in a 28% increase in appointment bookings, as reported by BrightLocal."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 394,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 392,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 373,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 368,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Users, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 404,
              columnNumber: 19
            }, void 0),
            "Oakland: Diverse Market with Growing Restaurant Scene"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 403,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 409,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Google My Business:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 411,
                  columnNumber: 23
                }, void 0),
                " Feature menus, hours, and reservation options prominently. Google research finds that 76% of people who search for something nearby on their smartphone visit a business within a day, making accurate GMB info vital."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 410,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 408,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 415,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 417,
                  columnNumber: 23
                }, void 0),
                ' Use neighborhood-specific phrases such as "Jack London Square dining" or "Oakland vegan restaurants."'
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 416,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 414,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 421,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 423,
                  columnNumber: 23
                }, void 0),
                " Actively respond to reviews to foster community engagement. BrightLocal's survey highlights that 89% of consumers read businesses' responses to reviews."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 422,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 420,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 427,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 429,
                  columnNumber: 23
                }, void 0),
                " Restaurants see an average 30% boost in foot traffic from local SEO improvements, according to HubSpot data."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 428,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 426,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 407,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 402,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 438,
              columnNumber: 19
            }, void 0),
            "Fremont: Residential and Professional Services Focus"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 437,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 443,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Google My Business:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 445,
                  columnNumber: 23
                }, void 0),
                " Emphasize family-friendly services and local community involvement."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 444,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 442,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 449,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 451,
                  columnNumber: 23
                }, void 0),
                ' Target terms like "Fremont home services" or "Bay Area family dentistry."'
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 450,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 448,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 455,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 457,
                  columnNumber: 23
                }, void 0),
                " Leverage positive feedback to build credibility in a suburban market. BrightLocal research shows that 82% of consumers read online reviews for local businesses in suburban areas."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 456,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 454,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 461,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 463,
                  columnNumber: 23
                }, void 0),
                " Local SEO campaigns often increase lead inquiries by 25%, as verified by BrightLocal."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 462,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 460,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 441,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 436,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-center italic", children: "Academic studies underscore the strategic importance of local SEO for small and medium-sized businesses seeking to enhance their online presence." }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 469,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground text-center mt-2 italic", children: "SEO Strategy and Implementation for a local Company — A Aliu, 2020" }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 472,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 319,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 318,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Target, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 485,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Strategic Framework" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 486,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 484,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "A Unique Framework for Choosing the Right Digital Marketing Mix for Bay Area Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 488,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Given the Bay Area's diverse economy and competitive landscape, selecting the right digital marketing mix is critical. Our proprietary framework helps businesses evaluate and prioritize marketing channels based on:" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 491,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 483,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
          {
            num: "1",
            title: "Business Size and Stage",
            desc: "Startups may prioritize brand awareness and social media, while established businesses focus on lead generation and retention. SBA data confirms that small businesses make up over 99% of Bay Area enterprises, highlighting the need for scalable marketing solutions."
          },
          {
            num: "2",
            title: "Industry Vertical",
            desc: "Tech startups benefit from AI-driven content and PPC, healthcare relies on reputation management and local SEO, restaurants emphasize social media and review management, and professional services focus on SEO and content marketing."
          },
          {
            num: "3",
            title: "Target Audience Behavior",
            desc: "Understanding where customers spend time online guides channel selection. Google's research shows that mobile searches with local intent have grown over 50% in recent years, emphasizing mobile-first strategies."
          },
          {
            num: "4",
            title: "Budget and ROI Expectations",
            desc: "Allocating resources to channels with proven ROI in the Bay Area, such as Google Ads with an average ROI of 400% in competitive markets, as reported by Google Ads Resources."
          }
        ].map((item) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300",
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-bold", children: item.num }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 525,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 524,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-foreground mb-2", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 528,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: item.desc }, void 0, false, {
                  fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                  lineNumber: 529,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 527,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 523,
              columnNumber: 21
            }, void 0)
          },
          item.num,
          false,
          {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 519,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 496,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-center mt-8", children: "This framework ensures a tailored, data-driven approach that maximizes marketing effectiveness and budget efficiency." }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 536,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 482,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 481,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 480,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Ready to Dominate Your Local Market?",
          description: "Get a personalized marketing assessment and discover growth opportunities specific to your Bay Area business.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 544,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 558,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Reputation Management" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 559,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 557,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Reputation Management and Social Proof in the Bay Area Market" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 561,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Online reputation management is critical in the Bay Area, where consumers heavily rely on reviews and ratings. BrightLocal's Local Consumer Review Survey reveals that 91% of consumers regularly or occasionally read online reviews, making reputation management a key competitive factor. Effective strategies include:" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 564,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 556,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 572,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 571,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Monitoring Online Mentions" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 574,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Use tools like Google Alerts and ReviewTrackers to stay informed." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 575,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 570,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Users, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 579,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 578,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Engaging with Customers" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 581,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Respond promptly to both positive and negative feedback. SEJ research emphasizes that businesses responding to reviews see higher customer loyalty and improved local rankings." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 582,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 577,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Star, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 586,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 585,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Promoting Positive Testimonials" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 588,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Share success stories on websites and social media." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 589,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 584,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 569,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-center italic", children: "Studies confirm that a strong online reputation attracts more customers and builds corporate trust." }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 593,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8 p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Developments in communication and information technologies have obliged corporations to be aware of the importance of their reputation in the virtual world as well as the real world. Corporations with a robust reputation are more attractive to investors and customers. At the same time, corporations having a robust corporate reputation manage crises more successfully. Reputation management is among the primary functions of public relations practices. One of the essential purposes of public relations practices is to manage the relations between corporations and their audiences, develop and maintain a strong reputation both in the real and virtual worlds." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 598,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "A review on online reputation management and online reputation components, N Şirzad, 2022" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 601,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 597,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 555,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 554,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 553,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 615,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Website Optimization" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 616,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 614,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Website Optimization for Lead Conversion in Bay Area Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 618,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Optimizing your website is essential for converting visitors into leads, especially in the Bay Area's competitive market. BrightEdge research shows that organic search is the largest driver of website traffic, making SEO and site performance critical. Key elements include:" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 621,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 613,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Target, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 629,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 628,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Clear Call-to-Action (CTA)" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 631,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Prominent and compelling CTAs encourage user engagement." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 632,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 627,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 636,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 635,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Mobile Responsiveness" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 638,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "With over 60% of local searches on mobile devices, responsive design is critical, as reported by Statista and supported by Google's findings on mobile search behavior." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 639,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 634,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Zap, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 643,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 642,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: "Fast Loading Speed" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 645,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "Optimized images and server response times improve user experience and SEO rankings." }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 646,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 641,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 626,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground", children: "Additional conversion-focused elements include:" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 651,
            columnNumber: 17
          }, void 0),
          [
            {
              num: "1",
              title: "User-Friendly Navigation",
              desc: "Simplify site structure to help users find information quickly."
            },
            {
              num: "2",
              title: "Compelling Content",
              desc: "Address customer pain points with engaging, solution-oriented content. HubSpot's State of Marketing report highlights content marketing as a top driver of lead generation."
            },
            {
              num: "3",
              title: "Trust Signals",
              desc: "Incorporate testimonials, case studies, and security badges to build credibility."
            }
          ].map((item) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-bold text-sm", children: item.num }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 671,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 670,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: [
                item.title,
                ":"
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 674,
                columnNumber: 23
              }, void 0),
              " ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: item.desc }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 675,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 673,
              columnNumber: 21
            }, void 0)
          ] }, item.num, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 669,
            columnNumber: 19
          }, void 0))
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 650,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 612,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 611,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 610,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Comparison Table: Digital Marketing Services by City and Business Size" }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 689,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 688,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-primary/10", children: [
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "City" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 698,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "Small Businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 699,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "Medium Businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 700,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "Large Businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 701,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 697,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 696,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("tbody", { children: [
            {
              city: "San Francisco",
              small: "Local SEO, Reputation Management, Social Media Ads",
              medium: "AI Marketing Systems, PPC, Content Marketing",
              large: "Comprehensive AI Integration, Advanced Analytics, Multi-Channel Campaigns"
            },
            {
              city: "San Jose",
              small: "Google My Business Optimization, Local SEO, Review Management",
              medium: "AI-Powered Email Marketing, PPC, SEO",
              large: "Full-Scale Digital Transformation, Predictive Analytics, Programmatic Advertising"
            },
            {
              city: "Oakland",
              small: "Local SEO, Social Media Engagement, Reputation Management",
              medium: "AI Content Creation, PPC, Localized Campaigns",
              large: "Integrated AI Systems, Omnichannel Marketing, Data-Driven Strategies"
            },
            {
              city: "Fremont",
              small: "Local SEO, Review Solicitation, Community Outreach",
              medium: "AI Marketing Tools, PPC, Content Marketing",
              large: "Advanced AI Analytics, Cross-Platform Campaigns, Custom Solutions"
            }
          ].map((row, i) => /* @__PURE__ */ jsxDEV("tr", { className: i % 2 === 0 ? "bg-card" : "bg-card/50", children: [
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 font-semibold text-foreground", children: row.city }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 732,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-muted-foreground text-sm", children: row.small }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 733,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-muted-foreground text-sm", children: row.medium }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 734,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-muted-foreground text-sm", children: row.large }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 735,
              columnNumber: 25
            }, void 0)
          ] }, row.city, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 731,
            columnNumber: 23
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 704,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 695,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 694,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 687,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 686,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 685,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 751,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Proof Points" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 752,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 750,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Case Studies and Proof Points Demonstrating Success in the Bay Area" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 754,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Real-world examples illustrate the impact of targeted digital marketing strategies executed by GrowSmallBiz Digital Marketing:" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 757,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 749,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            title: "HVAC & Plumbing Company (Concord)",
            result: "40% increase in lead generation and 30% increase in lead conversions within three months",
            detail: "Implemented AI SEO & Local SEO, Google LSA & PPC ads, Speed 2 Lead with AI Receptionist"
          },
          {
            title: "Dental Practice (Dublin)",
            result: "30% increase in new patient appointments",
            detail: "Enhanced local SEO over six months, Facebook Retargeting ads confirmed by appointment tracking software."
          },
          {
            title: "Restaurant (San Ramon)",
            result: "25% increase in return customers during off-peak hours",
            detail: "Used Restaurant Loyalty Booster System as measured by POS"
          },
          {
            title: "Real Estate Agency (Pleasanton)",
            result: "30% boost in appointment booking with buyers & sellers",
            detail: "Implemented Speed 2 Lead AI Receptionist & Website AI Live Chat for appointment booking and Referral Tracking System in CRM"
          },
          {
            title: "Photography Studio (Walnut Creek)",
            result: "35% increase in bookings in 90 days",
            detail: "Applied local SEO strategies, and Marketing Automation System to Capture, Nurture and Close validated by Google GSC, Google Analytics and client booking systems"
          },
          {
            title: "San Jose Restaurant Client (Danville)",
            result: "43% increase in organic traffic in 90 days",
            detail: "Targeted local SEO, AI-Powered Reputation Management, and Facebook & Instagram ads content marketing, as reported in Google Analytics."
          },
          {
            title: "Cleaning Service Company (Livermore)",
            result: "50% increase in lead generation within six months",
            detail: "Implemented AI SEO & Local SEO, Google PPC, Speed 2 Lead with AI Receptionist & Review Management"
          }
        ].map((cs) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: cs.title }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 804,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-semibold mb-2", children: cs.result }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 805,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: cs.detail }, void 0, false, {
                fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
                lineNumber: 806,
                columnNumber: 21
              }, void 0)
            ]
          },
          cs.title,
          true,
          {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 800,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 762,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 748,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 747,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 746,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsxDEV(Shield, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 820,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Why Trust Us" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 821,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 819,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Businesses Trust GrowSmallBiz" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 823,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 818,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/90 leading-relaxed text-lg mb-6", children: "GrowSmallBiz is founder-led by Subrata Guha, whose background includes enterprise business system solutions across Sales, Marketing, and Supply Chain operations. That experience shapes a practical, systems-driven approach to marketing — helping small and mid-sized businesses connect visibility, lead capture, follow-up, and conversion instead of relying on disconnected tactics. Supported by platform-certified virtual assistants and grounded in Bay Area business understanding, GrowSmallBiz focuses on clear execution, stronger follow-through, and measurable business outcomes." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 828,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/90 leading-relaxed text-lg", children: [
            "GrowSmallBiz is also connected to the local business community through membership in the",
            " ",
            /* @__PURE__ */ jsxDEV("a", { href: "https://danvilleareachamber.com/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "Danville Area Chamber" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 833,
              columnNumber: 19
            }, void 0),
            ",",
            " ",
            /* @__PURE__ */ jsxDEV("a", { href: "https://sanramon.org/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "San Ramon Chamber of Commerce" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 834,
              columnNumber: 19
            }, void 0),
            ", and",
            " ",
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.walnut-creek.com/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "Walnut Creek Chamber of Commerce" }, void 0, false, {
              fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
              lineNumber: 835,
              columnNumber: 19
            }, void 0),
            ", reinforcing our commitment to the Bay Area markets and service businesses we support."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 831,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 827,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 817,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 816,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 815,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions About Bay Area Digital Marketing",
          faqs: faqs.map((f) => ({
            question: f.question,
            answer: f.answer
          })),
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about Bay Area marketing?",
            description: "We're here to help you find the right strategy for your local market.",
            tagline: "Let's grow your business together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 843,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "final-cta", className: "py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 862,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Unlock Your Bay Area Business's Digital Potential" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 863,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4 mb-6", children: "GrowSmallBiz Digital Marketing offers a Free Marketing Assessment tailored to Bay Area businesses. This assessment provides personalized insights into your current marketing strategies and identifies opportunities for growth." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 866,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 861,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto", children: [
          {
            num: "1",
            title: "Personalized Insights",
            desc: "Receive recommendations based on your unique business needs and local market conditions."
          },
          {
            num: "2",
            title: "Expert Guidance",
            desc: "Collaborate with marketing professionals experienced in Bay Area industries and trends."
          },
          {
            num: "3",
            title: "Actionable Strategies",
            desc: "Implement practical steps to enhance your online presence and customer engagement immediately."
          }
        ].map((item) => /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-bold", children: item.num }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 891,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 890,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2 text-center", children: item.title }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 893,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm text-center", children: item.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 894,
            columnNumber: 19
          }, void 0)
        ] }, item.num, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 889,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 871,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Ready to Grow Your Bay Area Business?",
            description: "Take the first step toward optimizing your digital marketing strategy and achieving your business goals in 2025 and beyond.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 899,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 908,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
            lineNumber: 909,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
          lineNumber: 907,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 860,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 859,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
        lineNumber: 915,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
      lineNumber: 918,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/locations/LocationsWeServe.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, void 0);
};
export {
  LocationsWeServe as default
};
