import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Header, B as Button, F as Footer } from "../main.mjs";
import { S as ServiceHero } from "./ServiceHero-DkZ5LbCF.js";
import { S as StickyCardCTA } from "./StickyCardCTA-BDQDb7-a.js";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { MapPin, Building2, Brain, TrendingUp, BarChart3, Zap, Search, Globe, CheckCircle, Users, Target, Star, MessageSquare, Smartphone, Shield, ArrowRight } from "lucide-react";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
const LocationsWeServe = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Digital Marketing Agency Bay Area — Local Marketing Services by City" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "GrowSmallBiz Digital Marketing serves Bay Area cities including San Francisco, San Jose, Oakland, Fremont, Danville, San Ramon, Walnut Creek, and more. Tailored local marketing strategies for your city."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/locations/locations-we-serve/" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      ServiceHero,
      {
        badge: { icon: MapPin, text: "Bay Area Coverage" },
        title: "Digital Marketing Agency Bay Area —",
        titleHighlight: "Local Marketing Services by City",
        subtitle: "In the highly competitive and diverse Bay Area market, local businesses face unique challenges in effectively reaching their target audiences. With over 7.5 million residents across cities like San Francisco, San Jose, Oakland, and Fremont, the region demands tailored digital marketing strategies that reflect its dynamic economy and varied industry sectors.",
        description: "Per the U.S. Census Bureau, the Bay Area continues to see robust population growth and a thriving small business ecosystem, making localized marketing essential.",
        primaryCTA: { label: "Book Free Assessment", href: "/contact/" },
        secondaryCTA: { label: "View Our Services", href: "/services/" },
        stats: [
          { value: "7.5M+", label: "Bay Area Residents" },
          { value: "150+", label: "Local Clients Served" },
          { value: "40%", label: "Avg Lead Increase" },
          { value: "12+", label: "Years Experience" }
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "East Bay Coverage" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Digital Marketing Services Across the",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "East Bay" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "GrowSmallBiz Digital Marketing proudly serves all East Bay communities, covering both the Diablo Valley and Tri-Valley regions. Our tailored digital marketing services address the unique business landscapes and growth opportunities in each city, ensuring local businesses thrive in their specific markets." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-8 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Diablo Valley" }),
          " Region"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            city: "Danville",
            desc: "Danville's affluent market supports high-value service businesses, making targeted digital marketing strategies focused on premium branding and lead generation essential for success."
          },
          {
            city: "San Ramon",
            desc: "With a strong corporate and B2B presence, San Ramon businesses benefit from AI-driven marketing systems and professional content marketing to engage decision-makers effectively."
          },
          {
            city: "Walnut Creek",
            desc: "Walnut Creek's vibrant retail and professional services sectors require comprehensive local SEO and reputation management to capture both foot traffic and online leads."
          },
          {
            city: "Concord",
            desc: "Concord's diverse small and medium business market thrives with localized SEO, social media engagement, and targeted advertising campaigns tailored to varied industries."
          },
          {
            city: "Martinez",
            desc: "As a hub for government and healthcare services, Martinez businesses gain from reputation management and specialized content marketing to build trust and community presence."
          }
        ].map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.1)]",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-foreground", children: [
                  "Digital Marketing in ",
                  item.city,
                  ", CA"
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.desc })
            ]
          },
          item.city
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-8 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Tri-Valley" }),
          " Region"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
          {
            city: "Dublin",
            desc: "Dublin's fast-growing residential and retail markets demand dynamic digital marketing strategies that combine local SEO with social media advertising to attract new residents and shoppers."
          },
          {
            city: "Pleasanton",
            desc: "Known as a small business hub, Pleasanton businesses benefit from integrated marketing approaches including PPC, content marketing, and reputation management to drive growth."
          },
          {
            city: "Livermore",
            desc: "Livermore's unique blend of wine country tourism and industrial sectors requires specialized marketing strategies that highlight local attractions and B2B services."
          },
          {
            city: "Tracy",
            desc: "Tracy's logistics industry and expanding residential communities thrive with targeted local SEO and digital advertising campaigns designed to capture both commercial and consumer markets."
          }
        ].map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.1)]",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-foreground", children: [
                  "Digital Marketing in ",
                  item.city,
                  ", CA"
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.desc })
            ]
          },
          item.city
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "AI-Powered Marketing" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Understanding AI-Powered Marketing Systems in the",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Bay Area" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "AI-powered marketing systems utilize advanced algorithms to analyze consumer behavior and optimize marketing strategies, a critical advantage in the data-driven Bay Area market. These systems process vast datasets to identify patterns and trends, enabling businesses to deliver personalized content and targeted advertising that resonates with local audiences. According to Google research, 76% of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts." })
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "AI-Integrated Digital Marketing",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Strategies" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "With the arrival of AI in digital marketing, numerous tools and technologies have been developed to assess the effectiveness of AI-integrated strategies on three critical dimensions: AI-driven personalization, predictive analytics, and automated content creation." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-4 italic", children: "Evaluating the effectiveness of AI-integrated digital marketing on consumer behavior, brand perception, and sales performance, A Vij, 2024" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]", children: /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed text-lg", children: "GrowSmallBiz Digital Marketing brings over 12 years of direct experience serving Bay Area clients across healthcare, technology, and professional services sectors. Our team has successfully implemented AI marketing systems for over 150 local businesses, delivering measurable outcomes such as a 40% increase in qualified leads within 90 days for a San Jose-based SaaS provider and a 35% boost in patient engagement for a Fremont healthcare clinic." }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Local SEO" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Local SEO Strategies for Bay Area Cities:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "San Francisco, San Jose, Oakland, and Fremont" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Local SEO is vital for businesses targeting customers within specific Bay Area cities. Effective local SEO enhances online visibility, making it easier for potential customers to find services nearby. BrightLocal research shows that 87% of consumers read online reviews for local businesses, highlighting the importance of reputation alongside SEO. Below are city-specific strategies and insights for optimizing local SEO in 2025-2026." })
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Strategic Framework" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "A Unique Framework for Choosing the Right Digital Marketing Mix for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Bay Area Businesses" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Given the Bay Area's diverse economy and competitive landscape, selecting the right digital marketing mix is critical. Our proprietary framework helps businesses evaluate and prioritize marketing channels based on:" })
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Reputation Management" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Reputation Management and Social Proof in the",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Bay Area Market" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Online reputation management is critical in the Bay Area, where consumers heavily rely on reviews and ratings. BrightLocal's Local Consumer Review Survey reveals that 91% of consumers regularly or occasionally read online reviews, making reputation management a key competitive factor. Effective strategies include:" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: "Monitoring Online Mentions" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: "Use tools like Google Alerts and ReviewTrackers to stay informed." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: "Engaging with Customers" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: "Respond promptly to both positive and negative feedback. SEJ research emphasizes that businesses responding to reviews see higher customer loyalty and improved local rankings." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: "Promoting Positive Testimonials" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: "Share success stories on websites and social media." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center italic", children: "Studies confirm that a strong online reputation attracts more customers and builds corporate trust." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 rounded-2xl bg-card border border-border", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Developments in communication and information technologies have obliged corporations to be aware of the importance of their reputation in the virtual world as well as the real world. Corporations with a robust reputation are more attractive to investors and customers. At the same time, corporations having a robust corporate reputation manage crises more successfully. Reputation management is among the primary functions of public relations practices. One of the essential purposes of public relations practices is to manage the relations between corporations and their audiences, develop and maintain a strong reputation both in the real and virtual worlds." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "A review on online reputation management and online reputation components, N Şirzad, 2022" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Smartphone, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Website Optimization" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Website Optimization for Lead Conversion in",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Bay Area Businesses" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Optimizing your website is essential for converting visitors into leads, especially in the Bay Area's competitive market. BrightEdge research shows that organic search is the largest driver of website traffic, making SEO and site performance critical. Key elements include:" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: "Clear Call-to-Action (CTA)" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: "Prominent and compelling CTAs encourage user engagement." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Smartphone, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: "Mobile Responsiveness" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: "With over 60% of local searches on mobile devices, responsive design is critical, as reported by Statista and supported by Google's findings on mobile search behavior." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2 text-center", children: "Fast Loading Speed" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center", children: "Optimized images and server response times improve user experience and SEO rankings." })
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
        "Comparison Table: Digital Marketing Services by",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "City and Business Size" })
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Proof Points" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Case Studies and Proof Points Demonstrating Success in the",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Bay Area" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Real-world examples illustrate the impact of targeted digital marketing strategies executed by GrowSmallBiz Digital Marketing:" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        {
          title: "HVAC Company (San Jose)",
          result: "40% increase in lead generation within three months",
          detail: "Implemented AI marketing systems, verified through client analytics dashboards."
        },
        {
          title: "Dental Practice (Fremont)",
          result: "30% increase in new patient appointments",
          detail: "Enhanced local SEO over six months, confirmed by appointment tracking software."
        },
        {
          title: "Restaurant (Oakland)",
          result: "25% increase in foot traffic",
          detail: "Used reputation management to improve online ratings, as measured by POS data."
        },
        {
          title: "Real Estate Agency (San Francisco)",
          result: "50% boost in property inquiries within 90 days",
          detail: "Leveraged social media advertising, tracked via CRM reports."
        },
        {
          title: "Photography Studio (San Jose)",
          result: "35% increase in bookings in 90 days",
          detail: "Applied local SEO strategies, validated by client booking systems."
        },
        {
          title: "San Jose Restaurant Client",
          result: "43% increase in organic traffic in 90 days",
          detail: "Targeted local SEO and content marketing, as reported in Google Analytics."
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Why Trust Us" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
          "Why Trust Us:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "GrowSmallBiz Digital Marketing's Bay Area Expertise" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]", children: /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed text-lg", children: "GrowSmallBiz Digital Marketing is a certified Google Partner agency with over 12 years of specialized experience in the Bay Area market. Our team holds certifications in Google Ads, HubSpot Inbound Marketing, and AI-driven marketing technologies. We have successfully served over 150 Bay Area clients across healthcare, technology, professional services, and more." }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
        "Frequently Asked Questions (FAQs) About",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Bay Area Digital Marketing" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        {
          q: "What is the average ROI for Google Ads campaigns in the Bay Area?",
          a: "Google Ads campaigns in competitive Bay Area markets typically achieve an average ROI of 400%, depending on industry and campaign optimization. Businesses focusing on tech startups and professional services often see higher returns due to targeted audience segments, as reported by Google Ads Resources."
        },
        {
          q: "How important is local SEO for small businesses in cities like Oakland and Fremont?",
          a: "Local SEO is crucial for small businesses in Oakland and Fremont, as it significantly improves visibility in local search results. Effective local SEO can increase website traffic by up to 30% and lead inquiries by 25%, directly impacting revenue, according to BrightLocal."
        },
        {
          q: "How can AI marketing systems benefit healthcare providers in San Jose?",
          a: "AI marketing systems help healthcare providers personalize patient outreach, predict appointment needs, and optimize advertising spend. This leads to improved patient engagement, higher appointment rates, and better resource allocation, as demonstrated in our work with multiple San Jose healthcare clients."
        },
        {
          q: "What digital marketing channels are most effective for Bay Area restaurants?",
          a: "Bay Area restaurants benefit most from a combination of local SEO, reputation management, and social media advertising. These channels drive foot traffic, enhance online reviews, and increase brand awareness in a competitive dining scene, supported by data from HubSpot and Search Engine Journal's insights on local search ranking factors."
        },
        {
          q: "How do I choose the right digital marketing mix for my Bay Area business?",
          a: "Choosing the right digital marketing mix involves assessing your business size, industry vertical, target audience behavior, and budget. Using a data-driven framework that considers these factors ensures your marketing efforts are efficient and effective. Our proprietary framework, refined through years of Bay Area client engagements, guides this process with proven success."
        }
      ].map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-foreground mb-3", children: faq.q }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: faq.a })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
        "Unlock Your Bay Area Business's",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Digital Potential" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto mb-8", children: "GrowSmallBiz Digital Marketing offers a Free Marketing Assessment tailored to Bay Area businesses. This assessment provides personalized insights into your current marketing strategies and identifies opportunities for growth." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
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
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: item.desc })
      ] }, item.num)) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Take the first step toward optimizing your digital marketing strategy and achieving your business goals in 2025 and beyond." }),
      /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/contact/", children: [
        "Book Your Free Marketing Assessment",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      StickyCardCTA,
      {
        title: "Ready to Grow Your Bay Area Business?",
        description: "Get a free marketing assessment tailored to your local market. Our Bay Area experts will identify growth opportunities for your business.",
        accentWords: ["Bay Area"]
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  LocationsWeServe as default
};
