import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { S as ServiceHero } from "./ServiceHero-Z03OcfAP.js";
import { MapPin, Building2, ArrowRight, Brain, TrendingUp, BarChart3, Zap, Search, Globe, CheckCircle, Users, Target, Star, MessageSquare, Smartphone, Shield } from "lucide-react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import "react";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { P as PageJsonLd } from "./PageJsonLd-DPKTdsi3.js";
import { Head } from "vite-react-ssg";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Digital Marketing Agency Bay Area — Local Marketing Services by City" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz serves local service businesses across the Bay Area — Walnut Creek, Danville, San Ramon, Dublin, Pleasanton, Concord, and more. Find your city for localized digital marketing services." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/locations/locations-we-serve/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Digital Marketing Agency Bay Area — Local Marketing Services by City",
        description: "GrowSmallBiz serves local service businesses across the Bay Area — Walnut Creek, Danville, San Ramon, Dublin, Pleasanton, Concord, and more.",
        url: "/locations/locations-we-serve/",
        breadcrumbs: [
          { name: "Locations", url: "/locations/locations-we-serve/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
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
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "pt-8 pb-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "East Bay Coverage" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Digital Marketing Services Across the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "East Bay" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "GrowSmallBiz Digital Marketing proudly serves all East Bay communities, covering both the Diablo Valley and Tri-Valley regions. Our tailored digital marketing services address the unique business landscapes and growth opportunities in each city, ensuring local businesses thrive in their specific markets." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-8 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Diablo Valley" }),
            " Region"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
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
          ].map((item) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.slug,
              className: "group block p-6 feature-card-teal rounded-2xl transition-all duration-300 hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors", children: [
                    "Digital Marketing in ",
                    item.city,
                    ", CA"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.desc }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all", children: [
                  "Learn More",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ]
            },
            item.city
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-8 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Tri-Valley" }),
            " & Extended Service Area"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
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
          ].map((item) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.slug,
              className: "group block p-6 feature-card-teal rounded-2xl transition-all duration-300 hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors", children: [
                    "Digital Marketing in ",
                    item.city,
                    ", CA"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.desc }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all", children: [
                  "Learn More",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ]
            },
            item.city
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "AI-Powered Marketing" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Understanding AI-Powered Marketing Systems in the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Bay Area" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "AI-powered marketing systems utilize advanced algorithms to analyze consumer behavior and optimize marketing strategies, a critical advantage in the data-driven Bay Area market. These systems process vast datasets to identify patterns and trends, enabling businesses to deliver personalized content and targeted advertising that resonates with local audiences. According to Google research, 76% of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Key Benefits" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Enhanced visibility, improved engagement, and efficient lead generation." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(BarChart3, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Bay Area Impact" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "According to a 2024 report by BrightLocal, AI marketing adoption has increased by 35% among local businesses since 2023, with tech startups leading the way." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Performance Benchmarks" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Businesses using AI-driven marketing report an average 25% increase in customer retention and a 30% boost in conversion rates, as documented in HubSpot's 2024 Marketing Statistics." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center italic", children: "Research highlights AI's transformative role in personalization and predictive analytics, essential for Bay Area businesses competing in saturated markets." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "AI-Powered Digital Marketing Automation" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "How AI-Powered Marketing Systems Help Small and Mid-Sized Bay Area Businesses",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Grow" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mt-4", children: "Get More Calls, More Booked Jobs, and Grow Revenue" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-foreground/90 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.thinkwithgoogle.com/_qs/documents/645/consumer-search-i-want-to-go-micro-moments-b.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "According to Google research" }),
          ", ",
          /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-2xl", children: "76%" }),
          " of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts."
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]", children: /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed text-lg", children: "AI-powered marketing works best when it is not treated as a standalone tool. GrowSmallBiz connects website performance, local SEO, paid ads, CRM automation, AI Receptionist, and Conversational AI into one coordinated system designed to help small and mid-sized businesses respond faster, follow up more consistently, and convert more opportunities into revenue. The goal is not more technology for its own sake. The goal is fewer missed leads, stronger lead handling, and better business outcomes from the marketing you are already investing in." }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "AI Powered Local SEO" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Local SEO Strategies for Bay Area Cities:",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "San Francisco, San Jose, Oakland, and Fremont" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Local SEO is vital for businesses targeting customers within specific Bay Area cities. Effective local SEO enhances online visibility, making it easier for potential customers to find services nearby. BrightLocal research shows that 87% of consumers read online reviews for local businesses, highlighting the importance of reputation alongside SEO. Below are city-specific strategies and insights for optimizing local SEO in 2025-2026." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-primary" }),
            "San Francisco: Tech and Professional Services Hub"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Optimize Google My Business:" }),
                " Ensure complete profiles with updated hours and service details, especially for tech startups and professional services. Google data confirms that businesses with fully optimized Google Business Profiles are twice as likely to be considered reputable by consumers."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }),
                ' Use neighborhood-specific terms like "SoMa tech consulting" or "Financial District legal services."'
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }),
                " Encourage reviews on platforms like Yelp and Google, as San Francisco consumers heavily rely on peer feedback. BrightLocal's Local Consumer Review Survey indicates that 79% of consumers trust online reviews as much as personal recommendations."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }),
                " According to Statista, average local SEO campaigns in San Francisco yield a 35% increase in organic traffic within six months, supported by BrightEdge research showing that organic search drives over 53% of website traffic on average."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Building2, { className: "w-6 h-6 text-primary" }),
            "San Jose: Focus on Healthcare and Tech Startups"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Google My Business Optimization:" }),
                " Highlight specialties and certifications for healthcare providers and tech firms. Google reports that 46% of all searches have local intent, making this optimization critical."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }),
                ' Incorporate terms like "Silicon Valley healthcare" or "San Jose SaaS solutions."'
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }),
                " Prioritize patient testimonials and case studies to build trust. BrightLocal data shows that 73% of consumers say positive reviews make them trust a local business more."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }),
                " Local SEO efforts typically result in a 28% increase in appointment bookings, as reported by BrightLocal."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-primary" }),
            "Oakland: Diverse Market with Growing Restaurant Scene"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Google My Business:" }),
                " Feature menus, hours, and reservation options prominently. Google research finds that 76% of people who search for something nearby on their smartphone visit a business within a day, making accurate GMB info vital."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }),
                ' Use neighborhood-specific phrases such as "Jack London Square dining" or "Oakland vegan restaurants."'
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }),
                " Actively respond to reviews to foster community engagement. BrightLocal's survey highlights that 89% of consumers read businesses' responses to reviews."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }),
                " Restaurants see an average 30% boost in foot traffic from local SEO improvements, according to HubSpot data."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-12 p-8 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-primary" }),
            "Fremont: Residential and Professional Services Focus"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Google My Business:" }),
                " Emphasize family-friendly services and local community involvement."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Local Keywords:" }),
                ' Target terms like "Fremont home services" or "Bay Area family dentistry."'
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Customer Reviews:" }),
                " Leverage positive feedback to build credibility in a suburban market. BrightLocal research shows that 82% of consumers read online reviews for local businesses in suburban areas."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Performance Benchmark:" }),
                " Local SEO campaigns often increase lead inquiries by 25%, as verified by BrightLocal."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center italic", children: "Academic studies underscore the strategic importance of local SEO for small and medium-sized businesses seeking to enhance their online presence." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center mt-2 italic", children: "SEO Strategy and Implementation for a local Company — A Aliu, 2020" })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Strategic Framework" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "A Unique Framework for Choosing the Right Digital Marketing Mix for",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Bay Area Businesses" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Given the Bay Area's diverse economy and competitive landscape, selecting the right digital marketing mix is critical. Our proprietary framework helps businesses evaluate and prioritize marketing channels based on:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
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
        ].map((item) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: item.num }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-foreground mb-2", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.desc })
              ] })
            ] })
          },
          item.num
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mt-8", children: "This framework ensures a tailored, data-driven approach that maximizes marketing effectiveness and budget efficiency." })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Ready to Dominate Your Local Market?",
          description: "Get a personalized marketing assessment and discover growth opportunities specific to your Bay Area business.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL,
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Reputation Management" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Reputation Management and Social Proof in the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Bay Area Market" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Online reputation management is critical in the Bay Area, where consumers heavily rely on reviews and ratings. BrightLocal's Local Consumer Review Survey reveals that 91% of consumers regularly or occasionally read online reviews, making reputation management a key competitive factor. Effective strategies include:" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Monitoring Online Mentions" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Use tools like Google Alerts and ReviewTrackers to stay informed." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Engaging with Customers" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Respond promptly to both positive and negative feedback. SEJ research emphasizes that businesses responding to reviews see higher customer loyalty and improved local rankings." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Promoting Positive Testimonials" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Share success stories on websites and social media." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center italic", children: "Studies confirm that a strong online reputation attracts more customers and builds corporate trust." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Developments in communication and information technologies have obliged corporations to be aware of the importance of their reputation in the virtual world as well as the real world. Corporations with a robust reputation are more attractive to investors and customers. At the same time, corporations having a robust corporate reputation manage crises more successfully. Reputation management is among the primary functions of public relations practices. One of the essential purposes of public relations practices is to manage the relations between corporations and their audiences, develop and maintain a strong reputation both in the real and virtual worlds." }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "A review on online reputation management and online reputation components, N Şirzad, 2022" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Smartphone, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Website Optimization" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Website Optimization for Lead Conversion in",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Bay Area Businesses" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Optimizing your website is essential for converting visitors into leads, especially in the Bay Area's competitive market. BrightEdge research shows that organic search is the largest driver of website traffic, making SEO and site performance critical. Key elements include:" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Clear Call-to-Action (CTA)" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Prominent and compelling CTAs encourage user engagement." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Smartphone, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Mobile Responsiveness" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "With over 60% of local searches on mobile devices, responsive design is critical, as reported by Statista and supported by Google's findings on mobile search behavior." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: "Fast Loading Speed" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Optimized images and server response times improve user experience and SEO rankings." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground", children: "Additional conversion-focused elements include:" }),
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
          ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-sm", children: item.num }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", children: [
                item.title,
                ":"
              ] }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item.desc })
            ] })
          ] }, item.num))
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
          "Comparison Table: Digital Marketing Services by",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "City and Business Size" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-primary/10", children: [
            /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "City" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "Small Businesses" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "Medium Businesses" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-bold text-foreground", children: "Large Businesses" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: [
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
          ].map((row, i) => /* @__PURE__ */ jsxs("tr", { className: i % 2 === 0 ? "bg-card" : "bg-card/50", children: [
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-semibold text-foreground", children: row.city }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-muted-foreground text-sm", children: row.small }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-muted-foreground text-sm", children: row.medium }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-muted-foreground text-sm", children: row.large })
          ] }, row.city)) })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Proof Points" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Case Studies and Proof Points Demonstrating Success in the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Bay Area" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: "Real-world examples illustrate the impact of targeted digital marketing strategies executed by GrowSmallBiz Digital Marketing:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
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
        ].map((cs) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: cs.title }),
              /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold mb-2", children: cs.result }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: cs.detail })
            ]
          },
          cs.title
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Why Trust Us" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Why Businesses Trust",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "GrowSmallBiz" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed text-lg mb-6", children: "GrowSmallBiz is founder-led by Subrata Guha, whose background includes enterprise business system solutions across Sales, Marketing, and Supply Chain operations. That experience shapes a practical, systems-driven approach to marketing — helping small and mid-sized businesses connect visibility, lead capture, follow-up, and conversion instead of relying on disconnected tactics. Supported by platform-certified virtual assistants and grounded in Bay Area business understanding, GrowSmallBiz focuses on clear execution, stronger follow-through, and measurable business outcomes." }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/90 leading-relaxed text-lg", children: [
            "GrowSmallBiz is also connected to the local business community through membership in the",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://danvilleareachamber.com/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "Danville Area Chamber" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://sanramon.org/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "San Ramon Chamber of Commerce" }),
            ", and",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://www.walnut-creek.com/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-medium", children: "Walnut Creek Chamber of Commerce" }),
            ", reinforcing our commitment to the Bay Area markets and service businesses we support."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Frequently Asked Questions About ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Bay Area Digital Marketing" })
          ] }),
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
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "final-cta", className: "py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Unlock Your Bay Area Business's",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Digital Potential" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4 mb-6", children: "GrowSmallBiz Digital Marketing offers a Free Marketing Assessment tailored to Bay Area businesses. This assessment provides personalized insights into your current marketing strategies and identifies opportunities for growth." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto", children: [
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
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: item.num }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: item.desc })
        ] }, item.num)) }),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Ready to Grow Your Bay Area Business?",
            description: "Take the first step toward optimizing your digital marketing strategy and achieving your business goals in 2025 and beyond.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }),
          /* @__PURE__ */ jsx("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  LocationsWeServe as default
};
