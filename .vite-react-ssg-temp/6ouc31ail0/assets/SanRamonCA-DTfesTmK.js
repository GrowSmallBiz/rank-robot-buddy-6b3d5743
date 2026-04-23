import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, CheckCircle, Star, TrendingUp, Search, Briefcase, Target, Shield, Users, Globe, Brain, Home, Heart, UtensilsCrossed, Building2, BarChart3, Award } from "lucide-react";
import { L as LocationJsonLd, C as CampaignResultsCards, s as sanRamonCards } from "./LocationJsonLd-Dlwu2N1P.js";
import "react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const sanRamonHero = "/assets/san-ramon-hero-DkGZXDeg.webp";
const SanRamonCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Digital Marketing Agency in San Ramon, CA | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz is San Ramon's local digital marketing agency for service businesses. One integrated system: Local SEO, Google Ads, AI automation, reputation management. Get your free strategy session." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/locations/san-ramon-ca/" })
    ] }),
    /* @__PURE__ */ jsx(
      LocationJsonLd,
      {
        cityName: "San Ramon",
        stateCode: "CA",
        description: "GrowSmallBiz is San Ramon's local digital marketing agency for service businesses. One integrated system: Local SEO, Google Ads, AI automation, reputation management.",
        url: "/locations/san-ramon-ca/",
        latitude: 37.7799,
        longitude: -121.978,
        breadcrumbs: [
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "San Ramon, CA", url: "/locations/san-ramon-ca/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "hero-section", children: [
        /* @__PURE__ */ jsx("img", { src: sanRamonHero, alt: "Bishop Ranch business park in San Ramon California at golden hour", width: 1920, height: 768, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { backgroundColor: `hsl(var(--background) / 0.82)` } }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4 animate-fade-up", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "San Ramon, CA — Local Service Business Marketing | Tri-Valley's Integrated Growth Partner" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight", children: [
            "Stop Losing San Ramon Leads to Competitors —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Full-Service Digital Marketing Built for Local Service Businesses" })
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed",
              style: { animationDelay: "0.1s" },
              children: "You are running a local service business in San Ramon. You have probably tried SEO, experimented with Google Ads, maybe hired someone to manage your social media. But your pipeline is still inconsistent, leads go cold before anyone follows up, and you are not sure which marketing effort is actually moving the needle. The problem is not effort. It is fragmentation."
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed",
              style: { animationDelay: "0.15s" },
              children: "GrowSmallBiz is a local digital marketing agency based in Danville — five minutes away, San Ramon Chamber member, built exclusively for local service businesses. Contractors, dentists, restaurants, real estate professionals — if you serve San Ramon clients, we're built for you."
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up",
              style: { animationDelay: "0.2s" },
              children: [
                /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
                  "Schedule Strategy Call ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
                ] }) }),
                /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
                  " (925) 886-3724"
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 animate-fade-up text-sm text-foreground/60", style: { animationDelay: "0.25s" }, children: [
            /* @__PURE__ */ jsx("a", { href: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "✓ San Ramon Chamber" }),
            /* @__PURE__ */ jsx("span", { children: "|" }),
            /* @__PURE__ */ jsx("a", { href: "https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "✓ Danville Chamber" }),
            /* @__PURE__ */ jsx("span", { children: "|" }),
            /* @__PURE__ */ jsx("a", { href: "https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "✓ Walnut Creek Chamber" }),
            /* @__PURE__ */ jsx("span", { children: "|" }),
            /* @__PURE__ */ jsx("span", { children: "Certified Strategists" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-4", style: { backgroundColor: "hsl(var(--accent))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-xs font-medium text-accent-foreground/80 mb-2 uppercase tracking-wider", children: "Proud Members Of" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-accent-foreground", children: [
          /* @__PURE__ */ jsxs("a", { href: "https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068", target: "_blank", rel: "noopener", className: "hover:underline flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5" }),
            " Walnut Creek Chamber of Commerce"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-accent-foreground/40", children: "|" }),
          /* @__PURE__ */ jsxs("a", { href: "https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687", target: "_blank", rel: "noopener", className: "hover:underline flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5" }),
            " Danville Area Chamber of Commerce"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-accent-foreground/40", children: "|" }),
          /* @__PURE__ */ jsxs("a", { href: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986", target: "_blank", rel: "noopener", className: "hover:underline flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5" }),
            " San Ramon Chamber of Commerce"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-accent-foreground/40", children: "|" }),
          /* @__PURE__ */ jsxs("a", { href: "https://www.concordchamber.com/list/member/growsmallbiz-digital-marketing-12991", target: "_blank", rel: "noopener", className: "hover:underline flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5" }),
            " Greater Concord Chamber of Commerce"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
            " WHY DIFFERENT"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "What Makes GrowSmallBiz Different — And Why It Matters for Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "San Ramon Bottom Line" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "Every agency says they are different. Here is what it actually means for GrowSmallBiz — and why it matters specifically for San Ramon service businesses competing in one of the East Bay's most active local markets." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5", children: [
          { label: "We are local:", body: "GrowSmallBiz is headquartered in Danville — five minutes from San Ramon. We know the Tri-Valley competitive landscape, the Bishop Ranch business corridor, and what local service business owners face daily. We are not a national agency managing accounts they have never seen." },
          { label: "One integrated system:", body: "When you hire separate vendors, each one optimizes for their own deliverable — not your revenue. Our integrated system connects every stage: traffic, conversion, CRM capture, AI follow-up, and automated nurture. One team, one outcome." },
          { label: "Conversion-first reporting:", body: "We do not report on traffic, impressions, or follower growth unless those metrics connect directly to leads and revenue. Every metric we track has a line drawn to your bottom line." },
          { label: "AI-powered execution:", body: "AI is built into how our systems operate — from the AI Receptionist answering missed calls to AI QuadBots qualifying website leads to SMART nurture sequences keeping prospects warm. Faster, smarter, more consistent than any manually managed approach." },
          { label: "Specialized verticals:", body: "We work exclusively with local service businesses, licensed healthcare and wellness professionals, realtors, and brick-and-mortar restaurants. Our systems are purpose-built for businesses that serve local customers directly." },
          { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to your results. We earn your business every single month." }
        ].map((item, i) => /* @__PURE__ */ jsx("div", { className: "bg-card/50 border border-border/60 rounded-xl p-5 border-l-4 border-l-primary", children: /* @__PURE__ */ jsxs("p", { className: "text-base text-foreground/90 leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-foreground", children: item.label }),
          " ",
          item.body
        ] }) }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4" }),
            " LOCAL MARKET"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Your Competitors Are Winning in San Ramon Search Results.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Here's Exactly Why — and How to Take It Back." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "Market Position" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed", children: "San Ramon sits at the center of one of the most economically active corridors in the entire East Bay — bordered by Danville to the south, Dublin to the north, and Pleasanton to the west. Household incomes are high, the population is growing, and local residents have real choices when selecting a service provider. That competitive environment makes local search visibility a business-critical asset — not a nice-to-have." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "Why San Ramon Is a High-Value — and High-Competition — Market" }),
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Bishop Ranch Business Park:" }),
              " San Ramon is home to Bishop Ranch, one of the largest suburban office parks in the United States. Corporate tenants including Chevron and AT&T bring tens of thousands of professionals to San Ramon daily — creating a unique dual market: business-to-business service demand from the corporate corridor, and residential service demand from the dual-income households those professionals return to in Dougherty Valley, Gale Ranch, and surrounding neighborhoods."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "B2C Residential Market" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-foreground/90 leading-relaxed", children: "San Ramon's residential neighborhoods — particularly Dougherty Valley, Gale Ranch, and the communities lining Bollinger Canyon Road — are among the highest-income, highest-growth planned developments in Contra Costa County. These are dual-income professional households, newer homeowners building their service provider relationships for the first time, and tech-savvy residents who research and decide entirely online. High homeownership rates drive consistent demand for home services year-round. Affluent demographics create a strong market for premium dental care, med spa treatments, and wellness services. A growing population of young families generates sustained demand across every service category GrowSmallBiz serves." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "B2B Commercial Market" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-foreground/90 leading-relaxed", children: "Bishop Ranch and San Ramon's broader commercial corridors create service demand that goes beyond individual homeowners. HVAC contractors maintain climate systems for office buildings and retail spaces. Cleaning and maintenance services hold commercial contracts across the business park. Restaurants and caterers serve corporate events. Real estate professionals handle commercial leasing alongside residential transactions. For GrowSmallBiz clients that serve both residential and commercial accounts, San Ramon's dual-market structure means campaigns need to capture both homeowner intent searches and commercial property searches simultaneously — and our integrated system is built to do exactly that." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "Tri-Valley Market Position" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-foreground/90 leading-relaxed", children: "San Ramon businesses do not just compete with each other — they compete with Danville, Dublin, Pleasanton, and Livermore providers for the same high-intent local searches. Visibility in the Google local pack for 'HVAC repair San Ramon,' 'dentist near Bishop Ranch,' or 'restaurant Bollinger Canyon Road' means capturing demand from across the entire Tri-Valley corridor." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-3", children: "The Fragmentation Cost" }),
              /* @__PURE__ */ jsxs("p", { className: "text-base text-foreground/90 leading-relaxed", children: [
                "According to ",
                /* @__PURE__ */ jsx("a", { href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-local-business/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "Think with Google" }),
                ", 76% of people who search for a local service on their smartphone visit or contact a business within 24 hours — and 28% of those searches result in a purchase. In San Ramon's competitive market, most businesses are losing those leads within minutes due to slow or absent follow-up. Every unconverted lead is revenue your competitors are collecting."
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            " SEARCH GAP"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "The Local Search Gap Costing Most San Ramon Service Businesses",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "10–15 Leads Every Month" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
              "According to BrightLocal's Local Consumer Review Survey, ",
              /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "81% of consumers use Google to evaluate local businesses" }),
              " and ",
              /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/resources/local-seo-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "80% of US consumers search for local businesses on a weekly basis" }),
              ". Yet BrightLocal research shows that ",
              /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/resources/local-seo-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "56% of businesses have not fully optimized their Google Business Profile" }),
              ". In San Ramon's active market, that optimization gap translates directly to missed calls, missed bookings, and missed revenue — month after month."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed", children: "San Ramon's SERP landscape reinforces this opportunity. The top-ranking competitor for 'digital marketing san ramon ca' has a content score of 89 with 1,781 words. Most other visible competitors are thin pages under 1,200 words with minimal local specificity. A properly integrated, content-rich presence built specifically for San Ramon's market beats generic agency pages in both relevance and trust signals." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 border-l-4 border-l-primary", children: /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed italic", children: '"The San Ramon Chamber of Commerce ranks organically for local marketing keywords — being a verified chamber member is a direct local authority signal that generic agencies cannot replicate."' }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4" }),
            " SERVICES"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "The Integrated Marketing System Built for San Ramon Service Businesses —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Fills Your Calendar, Not Just Your Dashboard" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "This is not a menu of services you mix and match. It is a system. Every component is engineered to work with every other component. That integration is what makes the difference between marketing that costs money and marketing that makes money." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14", children: [
          { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; capture high-intent searches from Bishop Ranch corridor, Dougherty Valley, and Gale Ranch neighborhoods" },
          { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
          { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a Google trust badge that turns clicks into verified phone leads" },
          { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for ZIP codes 94582 and 94583; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects from San Ramon's corporate and residential communities" },
          { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve Google rankings" },
          { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars; build the trust signals San Ramon's discerning residents require" },
          { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, appointment scheduling automation, SMART nurture sequences, CRM integration", impact: "Never lose a lead to a competitor who responds faster; capture and convert every inquiry automatically" }
        ].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-display font-bold text-primary mb-2", children: s.service }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 leading-relaxed mb-2", children: s.whatWeDo }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed italic", children: s.impact })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            " LOCAL SEO"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Get Found First When San Ramon Customers Search for Your Services —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Local SEO & Google Maps Domination" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
              "Local SEO is the foundation of every other marketing investment a San Ramon service business makes. According to ",
              /* @__PURE__ */ jsx("a", { href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-local-business/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "Think with Google" }),
              ", 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In San Ramon, where residents routinely choose between multiple competing providers for the same service, top-three local pack placement is the difference between capturing demand and being invisible at the most critical moment."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-3", children: [
              "Our ",
              /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", className: "text-primary hover:underline", children: "local SEO" }),
              " approach for San Ramon businesses includes:"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: "Complete Google Business Profile audit, optimization, and ongoing management — accurate NAP consistency, category selection, and service listings calibrated for San Ramon ZIP codes 94582 and 94583" }),
              /* @__PURE__ */ jsx("li", { children: "Neighborhood-level keyword targeting: 'HVAC repair Bishop Ranch,' 'dentist Dougherty Valley,' 'plumber Gale Ranch,' 'restaurant Bollinger Canyon Road' — capturing hyper-local search intent that generic pages never address" }),
              /* @__PURE__ */ jsxs("li", { children: [
                "Local citation building including the ",
                /* @__PURE__ */ jsx("a", { href: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "San Ramon Chamber of Commerce" }),
                " directory — a high-authority local citation that also ranks organically for San Ramon marketing keywords, amplifying your visibility directly"
              ] }),
              /* @__PURE__ */ jsx("li", { children: "Structured review generation campaigns calibrated to turn San Ramon's active, review-savvy consumer base into a compounding reputation asset" }),
              /* @__PURE__ */ jsx("li", { children: "Monthly performance reporting: rankings, impressions, calls, direction requests, and website clicks from Google Business Profile — clear attribution from optimization to revenue" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Optimize Your Local SEO for San Ramon ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
            " GOOGLE ADS"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Need Leads This Week, Not This Quarter?",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Google Ads That Deliver San Ramon Customers on Day One" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
              "San Ramon's competitive service market rewards the businesses that show up first and respond fastest. For service businesses that need to fill their calendars now, a properly managed ",
              /* @__PURE__ */ jsx(Link, { to: "/services/google-ads/", className: "text-primary hover:underline", children: "Google Ads" }),
              " campaign is the fastest path from invisible to fully booked. In a market where several well-resourced agencies are actively running ads for San Ramon service keywords, the quality of your campaign management determines whether your ad spend wins or wastes."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-3", children: "Our San Ramon Google Ads management includes:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: "Call-only campaigns for home service contractors — capturing emergency HVAC calls, urgent plumbing service requests, and electrical work inquiries from San Ramon homeowners at the exact moment of highest intent" }),
              /* @__PURE__ */ jsx("li", { children: "Location-targeted campaigns covering ZIP codes 94582 and 94583 plus adjacent Tri-Valley service areas including Danville, Dublin, and Pleasanton — ensuring your budget captures the full demand corridor" }),
              /* @__PURE__ */ jsx("li", { children: "Seasonal campaign alignment: 'AC tune-up San Ramon' in spring, 'heating repair Dougherty Valley' in fall, 'emergency plumber near me' year-round — campaigns that match San Ramon's inland valley seasonal demand cycles" }),
              /* @__PURE__ */ jsx("li", { children: "Comprehensive conversion tracking for phone calls, form submissions, and appointment bookings — every dollar of ad spend accountable to a measurable business outcome" }),
              /* @__PURE__ */ jsx("li", { children: "Continuous campaign optimization: bid strategy refinement, ad copy testing, negative keyword management, and landing page conversion improvements — performance that compounds over time" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Launch Google Ads for Your San Ramon Business ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
            " GOOGLE LSA"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Show Up Above Every Competitor With a Google Trust Badge —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "More San Ramon Leads, Pre-Qualified Before They Call" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: "Google Local Service Ads give licensed San Ramon home service contractors a placement above all standard search ads, combined with the Google Guaranteed badge — the most powerful trust signal available in local search. In a market where Dougherty Valley and Gale Ranch homeowners are actively selecting service providers based on visible credibility signals, appearing at the very top with a Google-verified endorsement converts browsers into verified phone leads at a higher rate than any other channel." }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: "Background check coordination and professional license verification for all applicable San Ramon trade categories" }),
              /* @__PURE__ */ jsx("li", { children: "Budget optimization focused on maximizing verified, high-intent lead volume in your specific San Ramon service area" }),
              /* @__PURE__ */ jsx("li", { children: "Dispute management for invalid leads to protect your advertising investment" }),
              /* @__PURE__ */ jsx("li", { children: "Compliance maintenance to preserve your Google Guaranteed status" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Set Up Google LSA for Your San Ramon Business ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
            " SOCIAL & META ADS"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Reach San Ramon Homeowners Before They Need You —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "And Be the First Call When They Do" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
              "Facebook and Instagram give San Ramon service businesses a direct channel to reach homeowners in Dougherty Valley, Gale Ranch, and the Bishop Ranch residential corridors — before a need becomes an emergency, before a decision is made. Our geo-targeted ",
              /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/facebook-ads/", className: "text-primary hover:underline", children: "Meta Ads" }),
              " campaigns are built around the specific ZIP codes and demographics where San Ramon's highest-value clients live and spend."
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: "Geo-targeted campaigns covering ZIP codes 94582 and 94583 — ensuring your budget reaches San Ramon's professional households, not the broader Bay Area market" }),
              /* @__PURE__ */ jsx("li", { children: "Before-and-after visual campaigns for home service contractors showcasing real work completed in San Ramon neighborhoods — the social proof that resonates with homeowners in planned communities where neighbor referrals carry significant weight" }),
              /* @__PURE__ */ jsx("li", { children: "Restaurant promotion campaigns for Bollinger Canyon Road and Crow Canyon corridor establishments — driving reservation and walk-in traffic with event promotions, seasonal features, and loyalty campaigns" }),
              /* @__PURE__ */ jsx("li", { children: "Retargeting sequences that re-engage website visitors who did not convert — keeping your business top of mind through the multi-touchpoint decision cycle common among San Ramon's research-oriented professional demographic" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Launch Social Media Advertising ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
            " REPUTATION"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "A 3-Star Rating Is Silently Killing Your San Ramon Business.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Here's How We Fix It in 90 Days." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: "In San Ramon's market — where dual-income professional households research every significant purchasing decision online — your Google review rating is not a supporting factor in their choice. For most service categories, it is the primary filter. A 3.7-star rating in a market where your competitor is at 4.6 stars means a significant portion of high-intent prospects never contact you. That is not a perception problem. It is a revenue problem." }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: "Automated review request campaigns sent to satisfied clients immediately after service completion — capturing feedback while the experience is fresh and the motivation to share is highest" }),
              /* @__PURE__ */ jsx("li", { children: "Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, Zocdoc, OpenTable, and Yelp — ensuring no review goes unnoticed across any platform San Ramon residents use" }),
              /* @__PURE__ */ jsx("li", { children: "Professional response guidance for negative reviews — in San Ramon's tight-knit neighborhood communities, a well-crafted professional response to a negative review is visible to every prospect who reads it afterward" }),
              /* @__PURE__ */ jsx("li", { children: "Healthcare-compliant reputation strategies for dental practices, med spas, and wellness professionals — HIPAA-aware review management that builds credibility without compromising compliance" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mt-4 italic", children: [
              "BrightLocal's 2024 Local Consumer Review Survey found that ",
              /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "88% of consumers say they would use a business that responds to all of its reviews" }),
              " — compared to just 47% who would consider a business that does not respond at all."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Build a 4.5+ Star Reputation in San Ramon ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" }),
            " WEBSITE DESIGN"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Your Website Should Be Your Best Salesperson.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "If It's Not Generating San Ramon Leads Daily, It's Costing You Money." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
              "Most San Ramon service business websites are doing passive damage — loading slowly, burying contact information, failing to convert mobile visitors, and signaling the wrong quality level to a professional demographic that judges credibility by first impressions. Your ",
              /* @__PURE__ */ jsx(Link, { to: "/services/website-design/", className: "text-primary hover:underline", children: "website" }),
              " works for you or against you around the clock. If it is not generating daily inquiries, it is not neutral — it is actively costing you clients."
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: "Fast-loading, mobile-first design — the majority of San Ramon's tech-savvy professional households search for local services on smartphones, and Google penalizes slow sites with lower rankings" }),
              /* @__PURE__ */ jsx("li", { children: "Click-to-call and tap-to-text functionality prominently above the fold — for San Ramon's busy dual-income households, frictionless immediate contact is the difference between a booked call and a closed tab" }),
              /* @__PURE__ */ jsx("li", { children: "Online booking integrations for dentists, med spas, chiropractors, and restaurants — Dougherty Valley and Gale Ranch residents expect the same booking convenience from local service providers that they get from the enterprise tools they use at Bishop Ranch offices" }),
              /* @__PURE__ */ jsx("li", { children: "San Ramon-specific landing pages for each service and neighborhood — capturing hyper-local search intent for Bishop Ranch, Dougherty Valley, Gale Ranch, and the Crow Canyon and Bollinger Canyon commercial corridors" }),
              /* @__PURE__ */ jsx("li", { children: "Trust architecture: licensing credentials, Google review widgets, before-and-after galleries, and service area maps that speak directly to the research habits of San Ramon's professional demographic" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Get a Conversion-Focused Website for San Ramon ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4" }),
            " AI AUTOMATION"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Every Missed Call Is a Lost Job.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Our AI Receptionist Follows Up in Seconds — So You Never Lose Another San Ramon Lead to a Faster Competitor." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
            "According to research by MIT and InsideSales.com, ",
            /* @__PURE__ */ jsx("a", { href: "https://www.insidesales.com/response-time-matters/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "leads contacted within 5 minutes are 21 times more likely to convert" }),
            " than those reached after just 30 minutes. In San Ramon's competitive Tri-Valley market, where multiple businesses receive the same emergency HVAC inquiry or dental appointment request simultaneously, the first business to respond wins — consistently. Manual teams cannot achieve five-minute response times around the clock. AI systems can."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-3", children: [
            "Our San Ramon ",
            /* @__PURE__ */ jsx(Link, { to: "/services/marketing-automation-for-small-business/", className: "text-primary hover:underline", children: "AI automation" }),
            " platform includes:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-foreground/90 space-y-2", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "AI Receptionist:" }),
              " answers missed calls 24 hours a day, captures caller information, responds to common questions, and books appointments automatically — even at 2am on a Sunday when a Gale Ranch homeowner's furnace fails"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "AI QuadBots:" }),
              " conversational AI managing web chat, voice interactions, and lead qualification simultaneously — when a visitor lands on your website after hours and starts a chat, they receive an intelligent response, not an auto-reply, and qualified leads route directly to your CRM"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Instant lead follow-up:" }),
              " every new lead receives an automated response within seconds via SMS, email, or call — based on what converts best for your business type — keeping you first in the prospect's mind at the moment of highest intent"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "SMART nurture sequences:" }),
              " automated CRM workflows send the right message at the right time — appointment reminders, follow-up sequences, seasonal promotions, renewal notices, review requests — without anyone on your team needing to remember to act"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "VIP Club and reactivation campaigns:" }),
              " for restaurants, dental practices, med spas, and other repeat-visit businesses, structured loyalty and reactivation systems bring dormant clients back at a fraction of the cost of acquiring new ones — turning your existing customer list into a compounding revenue asset"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mt-4", children: "Retention is the fastest path to meaningful revenue growth for established San Ramon service businesses. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure — VIP Club systems, SMART nurture campaigns, and automated review programs — keeps your best clients engaged and your pipeline warm without adding headcount." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Schedule Strategy Call",
          description: "See how GrowSmallBiz can help your San Ramon business connect visibility, lead capture, follow-up, and conversion into one practical system.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategyCallUrl
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
            " WHO WE SERVE"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Built for Your Industry, Not Adapted From Someone Else's Playbook —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "See If We're the Right Fit for San Ramon" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "GrowSmallBiz works exclusively with local service businesses that serve San Ramon and the Tri-Valley community directly. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for the verticals below — which means faster results, deeper playbooks, and strategies built on real market knowledge rather than generic agency frameworks." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Home, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Fill Your San Ramon Calendar Year-Round" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "When a Dougherty Valley homeowner's AC fails in August or a Gale Ranch pipe bursts at midnight, they search Google and call the first credible result they find. If you are not in the top three on Google Maps for your service area, you do not exist at the highest-intent moment in the entire buying journey. We build the systems that put San Ramon home service contractors at the top of local search, capture leads the instant they arrive, and respond faster than any manual team can — including the AI Receptionist that handles calls around the clock while your crew is on the job." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Dentists, Med Spas & Wellness Professionals: Attract High-Value San Ramon Patients Who Book and Stay" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "San Ramon's professional demographic represents one of the Bay Area's strongest markets for premium dental care, cosmetic procedures, and wellness services. Patients in Dougherty Valley and Gale Ranch do not choose their dentist or med spa on price. They choose based on visible trust signals — star ratings, professional website quality, review volume, and response speed. We build the complete digital presence that earns that trust: a fast, professional website, a strong and fully optimized Google Business Profile, automated review generation, and the AI booking follow-up that keeps your schedule full without administrative overhead." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(UtensilsCrossed, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Restaurants & Hospitality: Fill More Tables, Build Loyal Regulars, Own San Ramon's Dining Scene" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "San Ramon's Bollinger Canyon Road and Crow Canyon commercial corridors host a competitive restaurant scene serving the Tri-Valley's high-income professional households and the corporate dining demand from Bishop Ranch. Success requires more than great food: it requires a Google rating above 4.5, visibility on search and maps, a consistent review flow, and the retention systems that turn a first-time visitor into a regular. Our VIP Club membership systems reward loyalty and increase visit frequency. Reactivation campaigns bring dormant customers back. Automated review requests build your reputation while the dining experience is still fresh." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Building2, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Real Estate Agents & Brokers: Own the Tri-Valley Market, Multiply Your Listing Inquiries, and Build a Referral Engine" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "In the East Bay real estate market, a lead who does not hear back within minutes moves to the next agent. San Ramon's active Tri-Valley market — where corporate relocations from Bishop Ranch and Dougherty Valley new construction create consistent buyer and seller demand — rewards agents who are visible, responsive, and systematically follow up. We build lead generation systems combining targeted paid campaigns, high-converting listing pages, and CRM pipelines that automate follow-up across SMS, email, and phone — keeping your database warm and your pipeline moving without manual intervention." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4" }),
            " RESULTS"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Real Client Results Across Our Service Areas" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 max-w-3xl mx-auto italic", children: "See what's possible when marketing runs as a complete, integrated system." })
        ] }),
        /* @__PURE__ */ jsx(CampaignResultsCards, { cards: sanRamonCards }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-4", children: [
            "Single-Channel Marketing Doesn't Win in San Ramon Anymore.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Here's What Actually Moves the Needle." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mb-8 max-w-3xl mx-auto", children: "San Ramon's professional consumer base researches before deciding. They check your Google ranking, read your reviews, visit your website, and may encounter you on social media — all before making contact. A single-channel approach captures only one touchpoint. An integrated system captures all of them." }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/60", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm font-semibold text-primary", children: "Channel" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm font-semibold text-muted-foreground", children: "Best For" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm font-semibold text-muted-foreground", children: "Time to Results" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm font-semibold text-muted-foreground", children: "Long-Term Value" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: [
              { channel: "Local SEO", bestFor: "Sustainable organic rankings & trust signals", time: "3–6 months for full impact", value: "High — compounds over time" },
              { channel: "Google Ads / PPC", bestFor: "Immediate lead flow & seasonal peaks", time: "Day 1", value: "Medium — requires ongoing investment" },
              { channel: "Google LSA", bestFor: "Pay-per-verified-lead with Google trust badge", time: "2–4 weeks setup", value: "High — top search placement" },
              { channel: "Meta / Social Ads", bestFor: "Retargeting & brand awareness", time: "1–2 weeks", value: "Medium — audience building" },
              { channel: "Reputation Mgmt", bestFor: "Conversion lift & local ranking signals", time: "30–90 days for rating lift", value: "High — trust drives decisions" },
              { channel: "AI & Automation", bestFor: "Lead capture speed, nurture & retention", time: "Immediate after setup", value: "High — multiplies every channel" }
            ].map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 text-sm font-medium text-foreground", children: row.channel }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-foreground/80", children: row.bestFor }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-muted-foreground", children: row.time }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-muted-foreground", children: row.value })
            ] }, i)) })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
            " WHY US"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "No Templates. No Generalists. No Excuses.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Why GrowSmallBiz Outperforms Every Agency That's Failed Your San Ramon Business Before." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "San Ramon is served by several active digital marketing agencies — all visible in local search results. Here is what makes the system GrowSmallBiz builds consistently outperform the competition in our own backyard:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
          { title: "We're Local", desc: "GrowSmallBiz is based in Danville — five minutes from San Ramon. We know the East Bay market, the Tri-Valley competitive landscape, and what local business owners face daily. We are not a national agency managing accounts they have never seen." },
          { title: "Integrated System", desc: "One system, one strategy, one team accountable for your outcomes. When something is not performing, you do not have three vendors pointing fingers at each other. You have one partner who owns the full picture and fixes it." },
          { title: "Conversion-First", desc: "We do not report on traffic, impressions, or follower growth unless those metrics connect directly to leads and revenue. Every metric we track has a direct line to your bottom line." },
          { title: "AI-Powered", desc: "AI is built into how our systems operate — from lead response and AI QuadBots to SMART nurture sequences and campaign optimization. It makes our execution faster, smarter, and more consistent than any manually managed approach." }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-3", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.desc })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed", children: "We do not use templates. We do not assign a junior account manager to your campaign and move on to the next client. Every strategy is built from your specific competitive landscape, your San Ramon service area, your vertical, and your revenue goals. Our certified marketing strategists carry your account from day one through sustained growth — and because we are based five minutes away in Danville, our reputation in this community is on the line alongside yours." }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            " COMMUNITY"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Serving San Ramon and the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Wider Tri-Valley" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed mb-4", children: [
            "GrowSmallBiz is a ",
            /* @__PURE__ */ jsx("a", { href: "https://sanramon.org/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "San Ramon Chamber" }),
            " member, and that local connection helps us stay close to the business community while serving San Ramon and the wider Tri-Valley."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed", children: "GrowSmallBiz supports businesses in San Ramon as well as nearby communities including Danville, Dublin, Pleasanton, Livermore, and surrounding East Bay service areas. That overlap matters because buyers often compare across city lines even when local trust still drives the final choice." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "If your business also serves nearby communities, explore our pages for:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: [
            { label: "Martinez", to: "/locations/martinez-ca/" },
            { label: "Concord", to: "/locations/concord-ca/" },
            { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
            { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
            { label: "Danville", to: "/locations/danville-ca/" },
            { label: "Dublin", to: "/locations/dublin-ca/" },
            { label: "Pleasanton", to: "/locations/pleasanton-ca/" },
            { label: "Livermore", to: "/locations/livermore-ca/" },
            { label: "Tracy", to: "/locations/tracy-ca/" }
          ].map((city) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: city.to,
              className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all text-sm font-medium",
              children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5" }),
                city.label
              ]
            },
            city.to
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Your Questions Answered — ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in San Ramon" })
          ] }),
          subtitle: "The questions below reflect what San Ramon service business owners ask most commonly before starting a marketing engagement.",
          faqs: [
            { question: "What types of businesses does GrowSmallBiz work with?", answer: "We work exclusively with local service businesses and brick-and-mortar establishments — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, real estate professionals, and restaurants. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for businesses that serve local San Ramon and Tri-Valley customers directly." },
            { question: "How is working with GrowSmallBiz different from hiring separate vendors for SEO, ads, and a website?", answer: "When you hire separate vendors, each one optimizes for their own deliverable — not your revenue. An SEO agency drives traffic. A web designer builds a site. An ads manager runs campaigns. But no one is accountable for what happens when the lead arrives. Our integrated system connects every stage: the traffic that brings the lead, the website that converts it, the CRM that captures it, the AI that follows up instantly, and the automation that nurtures it until it closes. One strategy, one team, one outcome." },
            { question: "How long before I start seeing results from digital marketing in San Ramon?", answer: "Paid advertising and AI lead-handling systems typically show measurable impact within the first 30 to 60 days. SEO and reputation building are longer-term investments — most clients see significant organic traction within 3 to 6 months. Google Business Profile optimizations frequently show movement within 4 to 8 weeks. We provide transparent reporting from day one so you always know where things stand and what each channel is contributing." },
            { question: "What does AI actually do for my San Ramon business on a day-to-day basis?", answer: "AI handles the work that typically falls through the cracks: answering missed calls around the clock, responding to website visitors immediately through AI QuadBots, qualifying incoming leads, sending follow-up messages on schedule via SMART nurture sequences, requesting reviews after completed jobs, and continuously optimizing your campaigns. Your team focuses on delivering your service and closing deals. AI handles the gaps — which in San Ramon's fast-moving Tri-Valley market, are where most of the revenue gets lost." },
            { question: "Do I need to rebuild my website or switch my current tools to work with GrowSmallBiz?", answer: "Not necessarily. We start by assessing what you already have and build around it wherever practical. In some cases, we will recommend a website upgrade or platform migration — but we will always explain the reason and show you the expected return before suggesting any major change. Our goal is to maximize what is working and fix what is not — not to sell you a rebuild you do not need." },
            { question: "How much does digital marketing cost for a San Ramon local service business?", answer: "Investment levels vary based on your business size, growth goals, competitive landscape, and the combination of services your business needs. We build custom packages aligned to your specific objectives and service area — the right investment is the one that delivers a clear, measurable return. Contact us for a no-obligation strategy session and we will recommend exactly what makes sense for your business." },
            { question: "Why does the San Ramon Chamber of Commerce rank in Google for marketing keywords?", answer: "The San Ramon Chamber of Commerce maintains a high-authority local domain that ranks organically for several San Ramon marketing and advertising keywords. Being a verified member — with an active, linked directory listing — provides a direct local citation signal that generic agencies cannot replicate. GrowSmallBiz is a verified San Ramon Chamber member, which means our clients benefit from the chamber's local authority as part of their overall citation profile. It is one of the most undervalued E-E-A-T signals available to San Ramon service businesses." },
            { question: "Can GrowSmallBiz help my San Ramon business with both lead generation and customer retention?", answer: "Yes — and for established San Ramon service businesses, retention is often the faster, cheaper path to meaningful revenue growth. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure includes VIP Club membership systems for restaurants and repeat-visit businesses, SMART nurture sequences that keep past clients engaged, reactivation campaigns that bring dormant customers back, and automated review programs that compound your reputation over time. Retention and acquisition work together in the integrated system — one does not replace the other." }
          ],
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about marketing in San Ramon?",
            description: "We're here to help you find the right strategy.",
            tagline: "Let's grow your San Ramon business together."
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "final-cta", className: "py-16", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
            "Every Day You Wait, Your Competitors Book Another San Ramon Customer",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "That Should Have Been Yours." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "section-description mt-4 mb-4", children: "San Ramon's most competitive local businesses are not winning because they have bigger budgets. They are winning because they have better systems — faster follow-up, stronger visibility, smarter retention, and one integrated strategy that works across every channel simultaneously." }),
          /* @__PURE__ */ jsx("p", { className: "section-description mb-4", children: "GrowSmallBiz gives your San Ramon service business that same infrastructure: one connected system spanning awareness to retention, powered by AI, and managed by a team based five minutes away in Danville. We bring 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of Tri-Valley local service business marketing — and as San Ramon Chamber, Danville Chamber, and Walnut Creek Chamber members, our commitment to this community is verifiable, not just claimed." }),
          /* @__PURE__ */ jsx("p", { className: "section-description mb-8 font-semibold", children: "No long-term contracts. No templates. No excuses. Just one integrated system built specifically for your San Ramon business." })
        ] }),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Schedule Strategy Call",
            description: "Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your San Ramon service business.",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategyCallUrl,
            sectionClassName: "pt-0 pb-0"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  SanRamonCA as default
};
