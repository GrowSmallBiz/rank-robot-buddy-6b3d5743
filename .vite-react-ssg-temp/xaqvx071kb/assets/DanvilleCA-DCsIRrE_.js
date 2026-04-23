import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, CheckCircle, Star, TrendingUp, Search, Target, Users, Home, Heart, UtensilsCrossed, Building2, BarChart3, Shield } from "lucide-react";
import { L as LocationJsonLd, C as CampaignResultsCards, d as danvilleCards } from "./LocationJsonLd-Dlwu2N1P.js";
import "react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { P as PersonCTA } from "./PersonCTA-CEFUSvtj.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
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
const danvilleHero = "/assets/danville-hero-DqmfLdYW.webp";
const DanvilleCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Digital Marketing Agency in Danville, CA | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz is Danville's hometown digital marketing agency. Local SEO, Google Ads, website design, and AI automation for contractors, dentists, med spas, and realtors in Danville, Blackhawk, and Alamo." }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "GrowSmallBiz is Danville's hometown digital marketing agency for local service businesses. Local SEO, Google Ads, reputation management & AI automation. Get your free strategy session."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/locations/danville-ca/" })
    ] }),
    /* @__PURE__ */ jsx(
      LocationJsonLd,
      {
        cityName: "Danville",
        stateCode: "CA",
        description: "GrowSmallBiz is Danville's hometown digital marketing agency for local service businesses. Local SEO, Google Ads, reputation management & AI automation.",
        url: "/locations/danville-ca/",
        latitude: 37.8216,
        longitude: -121.9999,
        breadcrumbs: [
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Danville, CA", url: "/locations/danville-ca/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "hero-section", children: [
        /* @__PURE__ */ jsx("img", { src: danvilleHero, alt: "GrowSmallBiz digital marketing agency serving Danville CA local service businesses", width: 1920, height: 768, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { backgroundColor: `hsl(var(--background) / 0.82)` } }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4 animate-fade-up", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Danville, CA — Local Service Business Marketing | GrowSmallBiz Hometown Market" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight", children: [
            "Stop Losing Danville Leads to Competitors —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Full-Service Digital Marketing Built for Local Service Businesses" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6", style: { animationDelay: "0.1s" }, children: "Every day your competitors are capturing the clients that should belong to your Danville business. In San Ramon Valley's most affluent market, the difference between a fully booked calendar and a quiet phone isn't the quality of your work — it's whether high-value clients can find you online before they find your competition." }),
          /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-4", style: { animationDelay: "0.15s" }, children: "GrowSmallBiz is Danville's hometown digital marketing agency — headquartered here, Danville Area Chamber member, built exclusively for local service businesses. Contractors, dentists, med spas, restaurants, real estate professionals — if you serve Danville clients, we're built for you." }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up",
              style: { animationDelay: "0.2s" },
              children: [
                /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
                  "Schedule Strategy Call ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
                ] }) }),
                /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
                  " Call +1 (925) 886-3724"
                ] }) })
              ]
            }
          )
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
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
            " WHY US"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "What Makes GrowSmallBiz Different — And Why It Matters for Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Danville Bottom Line" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "Choosing the right digital marketing partner is one of the most consequential decisions you will make for your Danville business. Here is what sets GrowSmallBiz apart from every general-purpose agency competing for your attention:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
          { label: "Hometown market authority:", body: "We are headquartered in Danville and are Danville Area Chamber members. We understand Blackhawk, Alamo, Downtown Hartz Avenue, and the premium client expectations unique to San Ramon Valley." },
          { label: "Exclusive vertical focus:", body: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros — not one of dozens of industries on a rotating client roster." },
          { label: "Proven local results:", body: "HVAC clients rank in the Google local 3-pack within 90 days; dental practices average 30+ new patient inquiries per month; restaurants see measurable reservation growth within 60 days." },
          { label: "Integrated, not siloed:", body: "Every channel — SEO, Ads, Reputation, AI — feeds one coordinated goal: your revenue growth." },
          { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to results. We earn your business every single month." },
          { label: "AI-powered response speed:", body: "Our AI Receptionist follows up with missed leads within minutes — because in Danville's premium market, the first business to respond sets the quality expectation and wins the client." }
        ].map((item, i) => /* @__PURE__ */ jsx("div", { className: "bg-card/50 border border-border/60 rounded-xl p-5 border-l-4 border-l-primary", children: /* @__PURE__ */ jsxs("p", { className: "text-foreground/90 leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-foreground", children: item.label }),
          " ",
          item.body
        ] }) }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4" }),
            " LOCAL MARKET"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Why Danville Is the San Ramon Valley's Most Valuable — and Most Competitive — Market for",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Local Service Businesses" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-5 max-w-4xl mx-auto", children: [
          { title: "Highest income demographics in Contra Costa County", body: "Danville consistently ranks among the most affluent communities in California. Neighborhoods like Blackhawk — a prestigious gated community with median home values well above $1.5M — and the Diablo Country Club corridor represent clients who choose service providers based on reputation and credibility, not lowest price. This is your market. Premium positioning and a strong online reputation are not nice-to-haves here — they are the table stakes." },
          { title: "Large-lot and luxury property demand", body: "Danville's prevalence of large residential lots, equestrian properties, and high-end homes creates specific service demand that differs significantly from denser suburban markets. HVAC systems are larger and more complex. Landscaping and exterior maintenance commands premium pricing. Roofing and remodeling projects are higher average ticket. For home service contractors, Danville clients are worth more per job — which makes winning them in local search even more valuable." },
          { title: "Downtown Hartz Avenue restaurant and retail corridor", body: "Danville's charming Downtown — centered on Hartz Avenue — is one of San Ramon Valley's most active dining and retail destinations. Restaurants compete intensely for weekend diners, event bookings, and weekday lunch traffic from the surrounding professional community. Social media presence, Google review ratings, and online reservation visibility are mission-critical for any food and beverage business operating in this corridor." },
          { title: "Active San Ramon Valley real estate market", body: "Danville's real estate market drives consistent demand for agents, brokers, and mortgage professionals serving one of the Bay Area's most desirable communities. Listing visibility, lead generation, and personal brand authority are decisive competitive factors for professionals competing in this market." }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-6 md:p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-primary mb-3", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed", children: item.body })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            " SEARCH GAP"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "The Local Search Gap Costing Most Danville Service Businesses",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "10–15 Leads Every Month" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg prose-invert max-w-none space-y-6", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/90 leading-relaxed", children: [
            "Here is the number that should concern every Danville service business owner: according to BrightLocal's Local Consumer Review Survey, ",
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "81% of consumers use Google to evaluate local businesses" }),
            " — and ",
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/resources/local-seo-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "80% of US consumers search for local businesses on a weekly basis" }),
            ". Yet BrightLocal research shows that ",
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/resources/local-seo-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "56% of businesses still haven't fully optimized their Google Business Profile" }),
            ". In a premium market like Danville, where a single new client relationship can be worth thousands of dollars over a lifetime, that optimization gap translates directly to measurable monthly revenue loss."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed", children: "Generic marketing agencies fail Danville service businesses because they cannot differentiate between Blackhawk's luxury client expectations and the broader Bay Area market. Neighborhood-level keyword targeting, premium service positioning, and reputation management calibrated for a discerning clientele require a focused approach. GrowSmallBiz builds strategies that reflect Danville's specific competitive dynamics — not templates copied from markets with different demographics, different price points, and different buyer psychology." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl font-semibold italic text-foreground/90", children: `"81% of consumers use Google to evaluate local businesses — but 56% of businesses haven't fully optimized their Google Business Profile. In Danville's premium market, that gap represents thousands in lost monthly revenue."` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "— BrightLocal, 2024" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
            " SERVICES"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "The Integrated Marketing System Built for Danville Service Businesses —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Fills Your Calendar, Not Just Your Dashboard" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "Our services are not sold as isolated tactics. They are delivered as an integrated system, designed so that each channel amplifies the others. Here is what is included and what it means for your Danville business:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block overflow-x-auto mb-16", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 text-left font-bold text-foreground bg-card/80 border border-border/60", children: "Service" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 text-left font-bold text-foreground bg-card/80 border border-border/60", children: "What We Do for You" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 text-left font-bold text-foreground bg-card/80 border border-border/60", children: "Danville Business Impact" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: [
            { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching in Blackhawk, Alamo, Diablo, Downtown Danville, and Green Valley" },
            { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
            { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
            { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for 94506 and 94526 ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
            { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
            { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
            { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, appointment scheduling automation, lead routing, CRM integration", impact: "Never lose a lead to a competitor who answers faster; capture and nurture every inquiry automatically" }
          ].map((row, i) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border border-border/60 font-semibold text-foreground bg-card/30", children: row.service }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border border-border/60 text-foreground/80", children: row.whatWeDo }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border border-border/60 text-primary/90 italic", children: row.impact })
          ] }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden space-y-3 mb-16", children: [
          { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching in Blackhawk, Alamo, Diablo, Downtown Danville, and Green Valley" },
          { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
          { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
          { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for 94506 and 94526 ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
          { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
          { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
          { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, appointment scheduling automation, lead routing, CRM integration", impact: "Never lose a lead to a competitor who answers faster; capture and nurture every inquiry automatically" }
        ].map((row, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border/60 rounded-xl p-4 border-l-4 border-l-primary", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-foreground mb-1", children: row.service }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 mb-2", children: row.whatWeDo }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-primary italic", children: row.impact })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "Get Found First When Danville Customers Search for Your Services —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Local SEO & Google Maps Domination" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/90 leading-relaxed mb-6", children: [
            "Local SEO is the highest long-term return on investment available to any Danville service business. According to ",
            /* @__PURE__ */ jsx("a", { href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "Think with Google" }),
            ", 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Danville's premium market, those aren't just any leads — they are high-intent, high-value clients actively choosing between you and your competitors right now."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "Our local SEO approach for Danville businesses includes:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Complete Google Business Profile (GBP) audit, optimization, and ongoing management — accurate NAP consistency across all citations, with particular attention to Blackhawk, Alamo, and Diablo neighborhood targeting",
            "Category and service area selection calibrated for Danville ZIP codes 94506 and 94526, plus adjacent San Ramon Valley communities including Alamo, Diablo, and the San Ramon border corridor",
            "Geo-targeted landing pages built for how Danville clients actually search — 'HVAC repair Blackhawk,' 'dentist Danville CA,' 'best restaurant downtown Danville,' and 'roofer San Ramon Valley'",
            "Local citation building across authoritative directories to strengthen domain authority and local ranking signals — including Danville Area Chamber of Commerce, which provides a verified, high-authority backlink",
            "Structured review generation and management campaigns calibrated for Danville's discerning clientele — where a 4.7-star rating is table stakes and anything below 4.5 actively costs you clients",
            "Monthly performance reporting: rankings, impressions, calls, direction requests, and website clicks — with clear attribution so you always know what your investment is producing"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsx("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors", children: "→ Optimize Your Local SEO for Danville — Schedule Strategy Call" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "Need Leads This Week, Not This Quarter?",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Google Ads That Deliver Danville Customers on Day One" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed mb-6", children: "Organic rankings take months to build. For Danville service businesses that need to fill their calendars now — not next quarter — a well-managed Google Ads campaign is the fastest path to qualified inbound calls and booked appointments. In a high-value market like Danville, where the average job ticket is significantly above typical Bay Area averages, the ROI on a properly managed PPC campaign is compelling from month one." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "Our Danville Google Ads management includes:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Call-only campaigns built for home service contractors — critical for emergency HVAC repairs, plumbing calls, and urgent electrical service requests where immediate phone contact determines who gets the job",
            "Location-targeted campaigns covering Danville ZIP codes 94506 and 94526 and adjacent service areas including Alamo, Diablo, San Ramon, and Blackhawk — ensuring your budget is not wasted on out-of-area traffic",
            "Seasonal keyword campaigns aligned to Danville's demand cycles — 'AC tune-up Danville' in spring, 'heating repair Blackhawk' in fall, 'emergency plumber Danville CA' year-round, 'restaurant delivery near me' for food and beverage",
            "Comprehensive conversion tracking for phone calls, form submissions, and online bookings — every dollar of ad spend accountable to a measurable business outcome",
            "Continuous campaign optimization through bid strategy refinement, ad copy testing, negative keyword management, and landing page conversion improvements"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsx("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors", children: "→ Launch Google Ads for Your Danville Business — Start Generating Leads This Week" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "Show Up Above Every Competitor With a Google Trust Badge —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "More Danville Leads, Pre-Qualified Before They Call" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed mb-6", children: "In Danville's high-expectation market, trust signals matter more than in almost any other Bay Area community. Clients in Blackhawk and Alamo are not selecting a service provider based on the lowest ad. They are selecting based on credibility, accountability, and visible endorsement. Google Local Service Ads with the Google Guaranteed badge deliver exactly that — appearing above all standard search results with a government-verified trust credential." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "GrowSmallBiz manages the entire LSA process for Danville contractors:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Background check coordination and professional license verification for all applicable trade categories",
            "Budget optimization focused on maximizing verified, high-intent lead volume — not raw click count",
            "Dispute management for invalid leads to protect your advertising investment",
            "Compliance maintenance with Google's ongoing requirements to preserve your Google Guaranteed status and badge visibility"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsx("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors", children: "→ Set Up Google LSA for Your Danville Business — Get Verified Leads" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "Reach Danville Homeowners Before They Need You —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "And Be the First Call When They Do" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed mb-6", children: "Facebook and Instagram give Danville service businesses a direct channel to reach their exact target audience — homeowners in Blackhawk, families on the Iron Horse Trail corridor, professionals commuting from the 680 corridor, and diners who frequent the Hartz Avenue restaurant scene. Our geo-targeted Meta Ads campaigns are built around the neighborhoods and ZIP codes where Danville's highest-value clients live." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "Our Danville social media marketing approach includes:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Geo-targeted Facebook and Instagram campaigns covering ZIP codes 94506 and 94526 — ensuring your budget reaches Danville's premium demographic, not the broader Bay Area market",
            "Before-and-after visual campaigns for roofers, HVAC companies, and home improvement contractors showcasing work done at Blackhawk, Alamo, and Green Valley properties — the visual context that resonates with luxury homeowners",
            "Restaurant promotion campaigns for Downtown Hartz Avenue businesses — weekend dining features, special event announcements, and seasonal menu promotions that drive reservation and walk-in traffic",
            "Patient transformation stories and testimonial campaigns for dentists, med spa owners, and wellness professionals that build the credibility required to attract Danville's discerning health and wellness clients",
            "Retargeting sequences that re-engage website visitors who did not convert on their first visit — keeping your business top of mind through Danville's longer premium service decision cycle"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsx("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors", children: "→ Launch Social Media Advertising for Your Danville Business — Get Started" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "A 3-Star Rating Is Silently Killing Your Danville Business.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Here's How We Fix It in 90 Days." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed mb-6", children: "In Danville's premium market, your online reputation is not a supporting factor in a client's decision — it is often the deciding factor. Blackhawk homeowners researching a roofing contractor will read eight to twelve reviews before making contact. A Danville family choosing a dentist will filter by minimum star rating before considering anyone. A 3.6-star rating in a community where competitors are at 4.7 stars is not just a credibility gap — it is an active revenue drain." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "GrowSmallBiz's reputation management system is built to systematically improve your rating and protect your brand in Danville's high-expectation environment:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Automated review request campaigns sent to satisfied clients immediately after service completion — capturing authentic feedback while the experience is fresh and the client is most motivated to share it",
            "Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, Zocdoc, OpenTable, and TripAdvisor — ensuring no review goes unnoticed across any platform Danville clients use",
            "Professional response guidance for negative reviews — Danville's community is small and tight-knit; a well-crafted, professional response to a negative review often matters more to prospective clients than the negative review itself",
            "Healthcare-compliant reputation strategies for dentists, med spas, and wellness professionals — protecting HIPAA compliance while still building a compelling, trustworthy review profile",
            "Reputation reporting showing your rating trajectory, review velocity, and competitive position relative to other Danville service providers in your category"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/80 italic mb-6", children: [
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "BrightLocal's 2024 Local Consumer Review Survey" }),
            " found that 88% of consumers say they would use a business that responds to all of its reviews — compared to just 47% who would consider a business that does not respond at all. In Danville's word-of-mouth community, how you respond to every review shapes your reputation as much as the review itself."
          ] }),
          /* @__PURE__ */ jsx("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors", children: "→ Build a 4.5+ Star Reputation in Danville — Start Your Review Campaign" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "Your Website Should Be Your Best Salesperson —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "If It's Not Generating Danville Leads Daily, It's Costing You Money" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed mb-6", children: "In Danville's premium market, your website does more than generate leads — it sets the quality expectation before a client ever contacts you. A slow, outdated, or generic website signals the wrong things to Blackhawk homeowners and Hartz Avenue diners who expect the level of quality their investment reflects. Your website is working for you or against you, every hour of every day." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "GrowSmallBiz builds mobile-first, conversion-optimized websites for Danville service businesses:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Fast-loading, mobile-first design — the majority of local searches happen on smartphones, and Google penalizes slow sites with lower rankings that cost you visibility in the premium local market you are competing for",
            "Click-to-call and tap-to-text functionality prominently placed above the fold — because Danville clients making a premium purchasing decision want immediate, friction-free access to your team",
            "Online booking integrations for appointment-driven businesses — dentists, med spas, chiropractors, physical therapists, and restaurants all benefit immediately from reduced scheduling friction, leading to more completed bookings",
            "Premium trust architecture: professional photography of your team and work, licensing credentials, Google review widgets, before-and-after galleries, and transparent service descriptions that meet the quality expectations of Danville's discerning clientele",
            "Danville-specific landing pages for each service and neighborhood — capturing hyper-local search intent with geo-targeted content for Blackhawk, Alamo, Diablo, Downtown Danville, and surrounding communities",
            "Ongoing conversion rate optimization — testing headlines, CTAs, form design, and page layout to continuously improve the percentage of visitors who become booked appointments"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsx("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors", children: "→ Get a Premium Website Built for Danville's Market — See Our Work" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-border/30", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
            "Every Missed Call Is a Lost Job —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Our AI Receptionist Follows Up in Seconds" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/90 leading-relaxed mb-6", children: [
            "According to research by ",
            /* @__PURE__ */ jsx("a", { href: "https://www.insidesales.com/response-time-matters/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "MIT and InsideSales.com published in the Harvard Business Review" }),
            ", leads contacted within 5 minutes are 21 times more likely to convert than those reached after just 30 minutes. In Danville's competitive service market — where a single HVAC emergency call or new dental patient relationship can represent thousands of dollars in lifetime value — every missed lead has a measurable cost. And in a premium market, a missed call does not just lose the job. It loses the relationship, the referral, and every future engagement that relationship would have generated."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "GrowSmallBiz's AI Receptionist and marketing automation platform gives your Danville business a 24/7 lead capture and follow-up system:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: [
            "Missed-call text-back: When a lead calls and you cannot answer, an automated SMS is sent within seconds — acknowledging the inquiry and opening the conversation before the prospect considers calling your competitor",
            "Conversational AI for lead qualification: Your AI Receptionist can answer FAQs, collect service details, qualify leads, and schedule appointments without human intervention — including evenings, weekends, and holidays when Danville's busy professional households are most likely to search for services",
            "Automated appointment reminders and confirmation sequences that reduce no-shows — particularly valuable for dental practices, med spas, and wellness professionals where no-shows represent direct revenue loss",
            "CRM integration and lead tracking — every inquiry captured, tagged, and tracked from first contact through closed job, giving you complete visibility into which marketing channels are generating your highest-value Danville clients",
            "Emergency lead escalation — high-priority service requests (emergency HVAC, urgent plumbing, immediate electrical) are flagged and escalated immediately to ensure your fastest response for your highest-converting inquiry types"
          ].map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary mt-1 flex-shrink-0", children: "●" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: bullet })
          ] }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 italic mb-6", children: "Industry research shows that businesses implementing AI marketing tools reported an average 11% increase in sales and a 28% reduction in marketing costs within six months of adoption. For Danville service businesses investing in growth, AI automation is not a future consideration — it is the operational foundation that makes every other marketing channel more effective." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
            " WHO WE SERVE"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Built for Your Industry, Not Adapted From Someone Else's Playbook —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "See If We're the Right Fit for Danville" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "GrowSmallBiz serves a focused set of local service business verticals in Danville and the San Ramon Valley. Our specialization means deeper industry expertise, faster results, and strategies built on real market knowledge — not frameworks adapted from markets with different demographics and different buyer expectations." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Home, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Home Service Contractors — HVAC, Roofing, Plumbing & Electrical" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Danville's combination of large residential lots, luxury homes, aging housing stock in established neighborhoods, and new construction in Blackhawk creates year-round demand for quality home service contractors. We build marketing systems around Danville's seasonal demand cycles — hot inland valley summers driving HVAC emergency calls, winter heating system tune-ups, and spring exterior maintenance — delivering booked jobs at premium Danville price points, not just website traffic." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Dentists, Med Spas & Wellness Professionals" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Danville's affluent, health-conscious demographic represents one of the Bay Area's strongest markets for premium dental care, cosmetic procedures, wellness treatments, and chiropractic care. We specialize in appointment-driven conversion funnels, HIPAA-aware reputation management, and attracting the high-value patients that Danville's income demographics represent. The focus is not just acquisition — it is building the long-term patient relationships that generate referrals in a tight-knit community." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(UtensilsCrossed, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Restaurants & Hospitality" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Downtown Danville's Hartz Avenue restaurant corridor is one of San Ramon Valley's most active dining destinations — and one of its most competitive. Success requires more than great food: it requires a Google rating above 4.5, a visible social media presence, active management of OpenTable and Yelp profiles, and a consistent flow of reviews that reflect the dining experience you deliver. We build the full digital reputation and visibility system that puts your restaurant top of mind when Danville residents and San Ramon Valley visitors decide where to go." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Building2, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: "Real Estate Agents & Brokers" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "San Ramon Valley real estate professionals compete in one of the Bay Area's most desirable and highest-value markets. Listing visibility, lead generation, and personal brand authority are the decisive competitive factors between agents who dominate their market and those who remain invisible. We build SEO, paid advertising, and content strategies that establish lasting local authority — turning your digital presence into a referral engine that generates qualified buyer and seller leads consistently." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4" }),
            " RESULTS"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Real Client Results Across Our Service Areas" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "See what's possible when marketing runs as a complete, integrated system." })
        ] }),
        /* @__PURE__ */ jsx(CampaignResultsCards, { cards: danvilleCards }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4", children: "Single-Channel Marketing Doesn't Win in Danville Anymore. Here's What Actually Moves the Needle." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 leading-relaxed mb-6", children: "Danville's premium clients research before they commit. They check your Google ranking, read your reviews, visit your website, and may encounter you on social media — all before making contact. A single-channel approach captures only one of those touchpoints. An integrated system captures all of them, which is why our clients consistently outperform competitors who rely on SEO alone or ads alone." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
            " WHY WE WIN"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Danville Business Before" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-3xl mx-auto", children: "There is no shortage of digital marketing agencies claiming to serve Danville businesses. Most will promise similar results with similar services. Here is why what GrowSmallBiz builds consistently outperforms what general-purpose agencies deliver in our hometown market:" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-4 gap-4", children: [
          { title: "Vertical Specialist", description: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros. We know your buyer psychology, your seasonal cycles, and your Danville competitive landscape inside and out." },
          { title: "Integrated System", description: "Every channel — SEO, Ads, Reputation, AI Automation — connects and feeds one goal: more booked appointments and service calls. Nothing runs in a silo." },
          { title: "AI-Powered Speed", description: "Our AI Receptionist follows up with missed leads within minutes via SMS and email. In Danville's premium market, the first business to respond wins the client — every time." },
          { title: "Hometown Advantage", description: "GrowSmallBiz is headquartered in Danville. We are Danville Area Chamber members. We know the neighborhoods, the client expectations, and the local competitive dynamics — because this is our market too." }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden shadow-md", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary py-4 px-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "font-bold text-primary-foreground", children: item.title }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-card/50 border border-border/60 border-t-0 p-4 min-h-[140px]", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: item.description }) })
        ] }, i)) }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 leading-relaxed mt-10 max-w-3xl", children: "We do not use templates. We do not run your campaign from a checklist designed for a plumber in Phoenix. Every strategy is built from your specific competitive landscape, your Danville service area, your vertical, and your revenue goals. Our certified marketing strategists carry your account from day one through sustained growth — and because we live and work in this community, our reputation is on the line alongside yours." })
      ] }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Let's Build Your Growth Engine",
          description: "If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategyCallUrl,
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Your Questions Answered — No Jargon, No Sales Pitch, Just Straight Answers About ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Digital Marketing in Danville" })
          ] }),
          faqs: [
            { question: "What types of businesses does GrowSmallBiz work with in Danville, CA?", answer: "GrowSmallBiz primarily works with local service businesses and repeat-visit local businesses, including home services, dentists, med spas, realtors, restaurants, and other Danville-area companies that depend on visibility, lead flow, follow-up, and retention." },
            { question: "How much does digital marketing cost for a Danville local service business?", answer: "Investment levels vary based on your business size, revenue goals, competitive landscape, and the combination of services you need. Most Danville service businesses in our portfolio invest between $1,000 and $5,000 per month across SEO, Google Ads, reputation management, and AI automation — with our core AI Client Growth System starting at $797 per month plus a one-time setup fee. Given Danville's premium market dynamics — where a single new client relationship can represent several thousand dollars in lifetime value — the ROI threshold is typically reached faster here than in lower-value markets. We build custom packages aligned to your specific goals and service area." },
            { question: "How long does it take to see results from local SEO in Danville?", answer: "Google Business Profile optimizations show measurable movement within 4 to 8 weeks. Full local 3-pack rankings for competitive Danville search terms are typically achieved within 3 to 6 months, depending on your industry and starting position. Google Ads campaigns generate qualified leads from day one. In Danville's market, the combination of immediate paid visibility with compounding organic SEO growth is the most effective approach — ads capture high-intent clients now while SEO builds the long-term authority that reduces your cost-per-lead over time." },
            { question: "Does my Danville business need to be on social media?", answer: "For most Danville service businesses, yes — but the strategy differs significantly by vertical. Restaurants benefit enormously from Instagram and Facebook visibility given how Danville residents discover and choose dining experiences. Home service contractors benefit most from retargeting campaigns that re-engage website visitors and lookalike audience campaigns targeting homeowners in Blackhawk, Alamo, and Green Valley ZIP codes. Health and wellness professionals benefit from reputation-building content and before-and-after campaigns. We build social strategies calibrated to your specific vertical and Danville's audience, not generic social media management." },
            { question: "How important are online reviews for Danville businesses specifically?", answer: "More important than in most other markets. Danville's affluent, research-oriented clientele reads reviews more thoroughly and weighs them more heavily in their decision-making than the average Bay Area consumer. A business with fewer than 4.5 stars is frequently filtered out before a Blackhawk homeowner ever visits the website. Our reputation management system is specifically designed for Danville's high-expectation environment — proactively building your review volume, protecting your rating during difficult situations, and ensuring your Google profile reflects the quality of service you actually deliver." },
            { question: "Do I need Google Local Service Ads if I'm already running Google Ads?", answer: "For licensed home service contractors in Danville — HVAC, plumbing, electrical, roofing — LSA is a meaningful complement to traditional Google Ads, not a replacement. LSA ads appear above standard search ads and carry the Google Guaranteed badge, which sends a distinct trust signal to Danville's premium homeowners. The pay-per-verified-lead model also protects budget efficiency. For trades where LSA is available, running both simultaneously typically maximizes your total share of the Danville local search results page." },
            { question: "Can digital marketing help my seasonal business in Danville?", answer: "Seasonal demand management is one of GrowSmallBiz's core specializations for Danville. We build campaigns that anticipate and capitalize on Danville's predictable seasonal patterns — HVAC marketing that ramps before summer heat waves and fall heating season, restaurant promotional campaigns for Danville's active holiday event calendar, and real estate lead generation aligned to the spring and fall transaction peaks that drive San Ramon Valley's market. Data-driven campaign timing and seasonal keyword targeting ensure your marketing investment works hardest exactly when demand is highest." },
            { question: "How does AI automation specifically benefit Danville service businesses?", answer: "In Danville's premium market, the cost of a missed lead is higher than in most Bay Area markets — because each lead represents a higher average job value and a higher-value client relationship. Our AI Receptionist ensures that every inquiry is acknowledged and followed up within seconds, regardless of when it arrives. For a Blackhawk homeowner calling about emergency AC repair at 10 PM, an instant SMS follow-up from your business versus a voicemail from everyone else is frequently the difference between winning and losing a job that could represent $5,000 to $15,000 or more. Research from MIT and InsideSales.com confirms that leads contacted within 5 minutes are 21 times more likely to convert — AI automation makes that response window achievable for every single lead, around the clock." }
          ],
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have more questions about marketing in Danville?",
            description: "We're here to help. Reach out to us for a personalized consultation.",
            tagline: "Let's grow your Danville business together."
          }
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-10", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6", children: [
          "Every Day You Wait, Your Competitors Book Another Danville Customer That",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Should Have Been Yours" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 leading-relaxed mb-4", children: "Danville's premium market rewards the businesses with the strongest digital presence — and moves quickly past those without one. While you are reading this, Danville homeowners are searching Google for services you offer. If you are not in the top three local results, you are invisible to them. If your reviews are below 4.5 stars, they are filtering you out before they see your website. If your phone goes to voicemail and you do not follow up within minutes, they have already called your competitor." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 leading-relaxed mb-4", children: "GrowSmallBiz is the digital marketing agency that Danville local service businesses trust to dominate local search, generate qualified leads, and build the integrated marketing systems that produce sustainable revenue growth. We bring 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of premium local service business marketing — and as a Danville-headquartered business and Danville Area Chamber member, our commitment to this community's businesses is personal, not transactional." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 font-semibold mt-6", children: "No long-term contracts. No cookie-cutter templates. No excuses. Just a hometown team that builds the marketing system your Danville business deserves." })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Schedule Strategy Call",
          description: "Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Danville service business.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategyCallUrl,
          sectionClassName: "py-16"
        }
      ),
      /* @__PURE__ */ jsx(ConsultationFormSection, { utmCampaign: "danville-consultation", utmMedium: "danville-ca" }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mb-6", children: "If your business also serves nearby communities, explore our pages for:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: [
          { label: "Martinez", to: "/locations/martinez-ca/" },
          { label: "Concord", to: "/locations/concord-ca/" },
          { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
          { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
          { label: "San Ramon", to: "/locations/san-ramon-ca/" },
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DanvilleCA as default
};
