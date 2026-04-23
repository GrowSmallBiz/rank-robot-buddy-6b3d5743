import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, CheckCircle, Target, TrendingUp, Brain, Search, Shield, Users, Star, Globe, Home, Heart, UtensilsCrossed, Building2 } from "lucide-react";
import { L as LocationJsonLd, C as CampaignResultsCards, a as dublinCards } from "./LocationJsonLd-Dlwu2N1P.js";
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
const dublinHero = "/assets/dublin-hero-CbDGRZmR.webp";
const DublinCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Digital Marketing Agency in Dublin, CA | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz is Dublin's Tri-Valley digital marketing agency for local service businesses. Local SEO, Google Ads, AI automation, reputation management. Get your free strategy session." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/locations/dublin-ca/" })
    ] }),
    /* @__PURE__ */ jsx(
      LocationJsonLd,
      {
        cityName: "Dublin",
        stateCode: "CA",
        description: "GrowSmallBiz is Dublin's Tri-Valley digital marketing agency for local service businesses. Local SEO, Google Ads, AI automation, reputation management.",
        url: "/locations/dublin-ca/",
        latitude: 37.7022,
        longitude: -121.9358,
        breadcrumbs: [
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Dublin, CA", url: "/locations/dublin-ca/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "hero-section", children: [
        /* @__PURE__ */ jsx("img", { src: dublinHero, alt: "GrowSmallBiz digital marketing agency serving Dublin CA Tri-Valley local service businesses", width: 1920, height: 768, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { backgroundColor: `hsl(var(--background) / 0.82)` } }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "service-badge mb-4 animate-fade-up", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Dublin, CA — Local Service Business Marketing | Tri-Valley's Fastest-Growing Market" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight", children: [
            "Stop Losing Dublin Leads to Competitors —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Full-Service Digital Marketing Built for Local Service Businesses" })
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed",
              style: { animationDelay: "0.1s" },
              children: "Dublin is the fastest-growing city in Alameda County — and that growth means thousands of new homeowners in Jordan Ranch, Fallon Gateway, and Heritage Park are forming their service provider relationships right now. The HVAC contractor, dentist, and real estate agent they find first in local search becomes their provider for years to come. If you are not ranking, you are not in that conversation."
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed",
              style: { animationDelay: "0.15s" },
              children: "GrowSmallBiz is a Tri-Valley digital marketing agency based in Danville — 15 minutes from Dublin. We build integrated marketing systems for local service businesses across the I-580/I-680 corridor. Contractors, dentists, restaurants, real estate professionals — if you serve Dublin clients, we are built for you."
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
            /* @__PURE__ */ jsx("a", { href: "https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "✓ Walnut Creek Chamber of Commerce" }),
            /* @__PURE__ */ jsx("span", { children: "|" }),
            /* @__PURE__ */ jsx("a", { href: "https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "✓ Danville Area Chamber of Commerce" }),
            /* @__PURE__ */ jsx("span", { children: "|" }),
            /* @__PURE__ */ jsx("a", { href: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "✓ San Ramon Chamber of Commerce" })
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
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "WHY US" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "What Makes GrowSmallBiz Different — And Why It Matters for Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Dublin Bottom Line" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-up", children: "Dublin's SERP landscape is dominated by national and out-of-area agencies — companies operating from out of state, from across the Bay, and from neighboring cities running generic Tri-Valley pages. GrowSmallBiz is different in ways that matter for local service businesses competing in Alameda County." }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
          { icon: MapPin, title: "Local Proximity", text: "Based in Danville, 15 minutes away. We know the I-580/I-680 corridor, Dublin's neighborhood growth patterns, and what local service business owners face daily. Not a national agency running Dublin campaigns remotely." },
          { icon: Target, title: "Integrated, Not Fragmented", text: "One system covering awareness, lead capture, AI follow-up, nurture, and retention. No separate vendors pointing fingers. One team accountable for your results." },
          { icon: TrendingUp, title: "First-Mover Positioning", text: "Dublin's growth means first-time homeowners are forming service relationships now. Our integrated system is built to put you first — in search rankings, in response speed, and in reputation." },
          { icon: Brain, title: "AI-Powered Execution", text: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems operate 24/7. In a market where the first business to respond wins the new relationship, AI removes the response gap entirely." }
        ].map((item, i) => /* @__PURE__ */ jsx("div", { className: "feature-card-teal p-6 rounded-2xl animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.text })
          ] })
        ] }) }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "MARKET INSIGHTS" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Your Competitors Are Winning in Dublin Search Results.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Here's Exactly Why — and How to Take It Back." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg prose-invert max-w-none space-y-6 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Dublin presents a market opportunity that is fundamentally different from every other city in the Tri-Valley. It is not about established affluence or corporate corridors — it is about velocity. The fastest-growing city in Alameda County is adding households at a pace that outstrips most Bay Area markets, and those new residents are actively choosing their service providers for the first time." }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground mt-10", children: "Why Dublin Is the Tri-Valley's Most Dynamic — and Most Competitive — Market for Local Service Businesses" }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mt-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "feature-card-teal p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-foreground mb-3", children: "B2C Residential Market" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-relaxed", children: "A B2C residential market defined by growth: Jordan Ranch, Fallon Gateway, Heritage Park, and the communities surrounding Emerald Glen Park represent some of the most concentrated new residential development in Alameda County. These are primarily Millennial and Gen X dual-income households — tech workers, remote professionals, and Bay Area commuters using BART — who are digitally native, mobile-first, and choosing their HVAC contractor, dentist, and real estate agent based primarily on Google search results and review ratings. The demographic is younger than Danville or Pleasanton, more price-aware, and highly responsive to social proof. For local service businesses, this is a new market being built in real time." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "feature-card-teal p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-foreground mb-3", children: "B2B Commercial Market" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-relaxed", children: "A growing B2B commercial market: Dublin's I-580/I-680 corridor creates meaningful commercial service demand alongside the residential market. The Hacienda Business Park (spanning Dublin and Pleasanton) houses hundreds of businesses requiring commercial HVAC maintenance, cleaning services, catering, and property management. The Dublin Boulevard commercial corridor and growing retail footprint generate restaurant, retail, and professional services demand. For GrowSmallBiz clients who serve both residential and commercial accounts — HVAC contractors, cleaning services, electricians, plumbers — Dublin's dual-market structure requires campaigns built to capture both homeowner intent searches and commercial property manager searches." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card-teal p-6 rounded-2xl mt-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-foreground mb-3", children: "Alameda County vs Contra Costa — A Different Competitive Landscape" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-relaxed", children: "Dublin is the only Alameda County city in GrowSmallBiz's core service area. This matters because the Dublin Chamber of Commerce directory ranks organically for Dublin marketing keywords — the same pattern we see with the San Ramon Chamber. Being a Tri-Valley Chamber member provides cross-county citation authority that generic Bay Area agencies cannot replicate." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "THE SEARCH GAP" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "The Local Search Gap Costing Most Dublin Service Businesses",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "10–15 Leads Every Month" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg prose-invert max-w-none space-y-6 animate-fade-up", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            "According to BrightLocal's Local Consumer Review Survey, ",
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "81% of consumers use Google to evaluate local businesses" }),
            " and ",
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/resources/local-seo-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "80% of US consumers search for local businesses on a weekly basis" }),
            ". Yet ",
            /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/resources/local-seo-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "56% of businesses have not fully optimized their Google Business Profile" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "There is no Dublin-rooted, integrated-system agency currently dominating these search results. That position is open." }),
          /* @__PURE__ */ jsx("div", { className: "feature-card-teal p-6 rounded-2xl mt-6", children: /* @__PURE__ */ jsx("p", { className: "text-foreground/90 italic text-lg leading-relaxed", children: '"Dublin is the fastest-growing city in Alameda County — new homeowners in Jordan Ranch and Fallon Gateway are forming service provider relationships right now. The business that shows up first wins those relationships for years."' }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "OUR SERVICES" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "The Integrated Marketing System Built for",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Dublin Service Businesses" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 max-w-3xl mx-auto", children: "Fills Your Calendar, Not Just Your Dashboard — Every component is engineered to work with every other component. That integration is what makes the difference between marketing that costs money and marketing that makes money." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block overflow-x-auto mb-16 animate-fade-up", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { backgroundColor: "hsla(174, 100%, 24%, 0.2)" }, children: [
            /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "Service" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "What We Do for You" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "Dublin Business Impact" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: [
            { service: "Local SEO & Google Business Profile", whatWeDo: "GBP service area optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps 3-pack; capture searches from Jordan Ranch, Fallon Gateway, Heritage Park, and Dublin Blvd corridor" },
            { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility in Dublin 94568; outperform national agency pages that dominate current SERPs" },
            { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above national template agencies with a verified Google trust badge" },
            { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Dublin 94568; retargeting sequences; creative development", impact: "Reach Dublin's young dual-income households across the I-580/I-680 corridor before they search for your competitors" },
            { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Convert Dublin's mobile-first search behavior into booked appointments; fast load times critical for BART-commuter audience" },
            { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Build the 4+ star rating Dublin's health-conscious, research-oriented residents require before selecting any service provider" },
            { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Capture every lead the moment it arrives — critical in Dublin's fast-growing market where first responders win first-time homeowner relationships" }
          ].map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-foreground/10 hover:bg-foreground/5 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-semibold align-top", children: row.service }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground align-top", children: row.whatWeDo }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground align-top", children: row.impact })
          ] }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden space-y-4 mb-16", children: [
          { service: "Local SEO & Google Business Profile", whatWeDo: "GBP service area optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps 3-pack; capture searches from Jordan Ranch, Fallon Gateway, Heritage Park, and Dublin Blvd corridor" },
          { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility in Dublin 94568; outperform national agency pages that dominate current SERPs" },
          { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above national template agencies with a verified Google trust badge" },
          { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Dublin 94568; retargeting sequences; creative development", impact: "Reach Dublin's young dual-income households across the I-580/I-680 corridor before they search for your competitors" },
          { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Convert Dublin's mobile-first search behavior into booked appointments; fast load times critical for BART-commuter audience" },
          { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Build the 4+ star rating Dublin's health-conscious, research-oriented residents require before selecting any service provider" },
          { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Capture every lead the moment it arrives — critical in Dublin's fast-growing market where first responders win first-time homeowner relationships" }
        ].map((row, i) => /* @__PURE__ */ jsxs("div", { className: "feature-card-teal p-5 rounded-2xl", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-foreground font-bold mb-2", children: row.service }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm mb-2", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground/80", children: "What We Do:" }),
            " ",
            row.whatWeDo
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground/80", children: "Dublin Impact:" }),
            " ",
            row.impact
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Get Found First When Dublin Customers Search for Your Services — Local SEO & Google Maps Domination" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              "According to ",
              /* @__PURE__ */ jsx("a", { href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "Think with Google" }),
              ", 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Dublin's mobile-first, tech-savvy demographic — where most searches happen on BART commutes, during lunch breaks, or from a smartphone in a new home — that statistic translates directly to inbound calls and booked appointments for businesses that rank."
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Google Business Profile service area optimization — calibrated specifically for Dublin's ZIP code 94568 and the distinct neighborhoods of Jordan Ranch, Fallon Gateway, Heritage Park, and Emerald Glen"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Neighborhood-level keyword targeting: 'HVAC repair Jordan Ranch,' 'dentist Fallon Gateway,' 'plumber Dublin CA 94568,' 'restaurant Dublin Blvd' — hyper-local search terms that national agency pages never build"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Local citation building including Dublin Chamber of Commerce directory — a high-authority local citation that ranks organically for Dublin marketing keywords, directly amplifying your local search authority"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "AI SEO implementation with most clients seeing measurable organic traction within 90 days — content, schema, and technical optimization that compounds over time as Dublin's market grows"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Structured review generation campaigns calibrated for Dublin's health-conscious, review-savvy demographic — building the 4+ star rating that converts first-time searchers into first-time clients"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Optimize Your Local SEO for Dublin ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Need Leads This Week, Not This Quarter? Google Ads That Deliver Dublin Customers on Day One." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Dublin's competitive SERP landscape — where national agencies and regional players are actively bidding — means that showing up in paid results requires more than budget. It requires campaign architecture specifically built for Dublin's search behavior, neighborhoods, and seasonal demand cycles. A poorly managed campaign in this environment wastes spend competing against national agency budgets. A well-managed one captures demand those agencies cannot serve locally." }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Call-only campaigns for home service contractors — capturing emergency HVAC calls, urgent plumbing requests, and electrical service inquiries from Jordan Ranch and Fallon Gateway homeowners at the exact moment of highest intent"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Location-targeted campaigns covering Dublin ZIP code 94568 and adjacent I-580/I-680 corridor communities including Pleasanton, San Ramon, and Livermore"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Seasonal campaign alignment: 'AC tune-up Dublin CA' in spring, 'heating repair near me 94568' in fall, 'emergency plumber Dublin' year-round — timed to Dublin's inland valley seasonal demand cycles"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Continuous optimization: bid strategy refinement, A/B ad copy testing, negative keyword management, and landing page conversion improvements"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Launch Google Ads for Your Dublin Business ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Show Up Above Every Competitor With a Google Trust Badge — More Dublin Leads, Pre-Qualified Before They Call" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Google Local Service Ads place verified contractors above all standard search ads — including above national agency paid campaigns and every organic listing. For Dublin's licensed home service contractors, the Google Guaranteed badge is the most visible trust signal available in local search, and it appears at a position no standard ad can occupy." }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Background check coordination and license verification for all applicable Dublin trade categories"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Budget optimization focused on maximizing verified lead volume within ZIP code 94568 and the surrounding Tri-Valley service area"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Dispute management for invalid leads — protecting your advertising investment in Dublin's competitive HVAC, plumbing, and electrical market"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Compliance maintenance to preserve your Google Guaranteed status"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Set Up Google LSA for Your Dublin Business ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Reach Dublin Homeowners Before They Need You — And Be the First Call When They Do" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Social media carries unusually high keyword relevance in Dublin's SERP landscape — 'social media marketing' appears as the top recommended usage keyword in Search Atlas's Dublin analysis, with an RU score of 48. Dublin's young, digitally-engaged demographic actively uses social platforms to discover local businesses, evaluate service providers, and make referrals within tight-knit neighborhood communities like Jordan Ranch and Fallon Gateway HOA groups." }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Geo-targeted Facebook and Instagram campaigns covering Dublin ZIP code 94568 — reaching the dual-income Millennial and Gen X households that make up Dublin's primary residential demographic"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Before-and-after campaigns for home service contractors showcasing real work done in Dublin's newer planned communities — the visual social proof that resonates with new homeowners who want to see quality examples before calling"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Restaurant and dining promotion campaigns for Dublin Boulevard corridor establishments — event announcements, seasonal features, and loyalty campaigns that drive repeat visits in a neighborhood where word-of-mouth travels fast through HOA networks"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Retargeting sequences re-engaging website visitors who did not convert — particularly valuable in Dublin's market where new homeowners may be comparing multiple providers before making a first-time selection"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Launch Social Media Advertising for Your Dublin Business ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "A 3-Star Rating Is Silently Killing Your Dublin Business. Here's How We Fix It in 90 Days." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Dublin's tech-savvy, research-oriented demographic reads reviews before making any significant purchasing decision. For home services, a new Jordan Ranch homeowner will check your Google rating before calling. For health and wellness, a Dublin patient will filter by star rating before visiting your website. A 3.7-star rating in a category where competitors are at 4.5+ stars means a significant portion of your ideal prospects never contact you — not because of your service quality, but because of your visible online reputation." }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Automated review request campaigns sent immediately after service completion — capturing authentic feedback while the experience is fresh, particularly important for Dublin's busy dual-income households who respond best to timely, frictionless requests"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, and Zocdoc — ensuring no review goes unnoticed across any platform Dublin residents use to evaluate service providers"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "HIPAA-compliant reputation management for dental practices and med spas — protecting compliance while building the authentic review profile that attracts Dublin's health-conscious residents"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Professional response guidance for negative reviews — in Dublin's close-knit neighborhood communities, a professional response is visible to every prospect who reads it afterward"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsx("a", { href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "BrightLocal's 2024 survey" }),
              " found that 88% of consumers would use a business that responds to all reviews, versus just 47% for businesses that do not respond at all."
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Build a 4.5+ Star Reputation in Dublin ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Your Website Should Be Your Best Salesperson. If It's Not Generating Dublin Leads Daily, It's Costing You Money." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Dublin's mobile-first demographic does not give slow or confusing websites a second chance. BART commuters searching for services during their ride, parents looking up a dentist from their phone at Emerald Glen Park, homeowners Googling 'emergency plumber near me' at midnight — all of them decide within seconds whether your website earns a call or a back-button. Your website is working for you or against you every hour of every day." }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Mobile-first, fast-loading design — critical for Dublin's BART-commuter demographic who search primarily on smartphones and will not wait for slow pages"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Click-to-call and tap-to-text above the fold — immediate contact for Dublin's busy professional households who expect friction-free access"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Online booking integrations for appointment-driven businesses — dental practices, med spas, and restaurants benefit immediately from the scheduling convenience Dublin's millennial demographic expects as standard"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Dublin-specific landing pages for Jordan Ranch, Fallon Gateway, and ZIP code 94568 — capturing hyper-local search intent that national agency pages never address"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "Trust architecture calibrated for first-time homeowners — licensing credentials, service area maps, before-and-after galleries, and review widgets that address the specific decision factors of new residents choosing providers for the first time"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyCallUrl, target: "_blank", rel: "noopener noreferrer", children: [
              "Get a Conversion-Focused Website Built for Dublin ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Brain, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Every Missed Call Is a Lost Job. Our AI Receptionist Follows Up in Seconds — So You Never Lose Another Dublin Lead to a Faster Competitor." })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              "Research from MIT and InsideSales.com confirms that ",
              /* @__PURE__ */ jsx("a", { href: "https://www.insidesales.com/response-time-matters/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "leads contacted within 5 minutes are 21 times more likely to convert" }),
              " than those reached after 30 minutes. In Dublin's fast-moving market — where new homeowners in Jordan Ranch and Fallon Gateway may be contacting two or three service providers simultaneously — the first business to respond sets the tone and wins the relationship. For busy contractors and professionals who cannot answer every call, AI automation closes that gap completely."
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground mb-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — even at 11pm when a Fallon Gateway homeowner discovers a leak"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "AI QuadBots: conversational AI managing web chat, voice interactions, and lead qualification simultaneously — when a visitor lands on your website after hours, they receive an intelligent response that qualifies their need and routes them directly to your CRM"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "SMART nurture sequences: automated CRM workflows sending the right message at the right time — appointment reminders, follow-up sequences, seasonal promotions, renewal notices, and review requests running continuously in the background"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "VIP Club and reactivation campaigns: for restaurants, dental practices, med spas, and repeat-visit businesses, structured loyalty systems that increase visit frequency and bring dormant clients back — retention built as infrastructure, not an afterthought"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
                "CRM integration and lead tracking — every inquiry from every channel captured, tagged, and tracked from first contact to closed job, giving you complete visibility into your marketing ROI"
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Retention is the fastest path to revenue growth for established Dublin service businesses. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure — VIP Club systems, SMART nurture, and automated review programs — keeps your best clients engaged without adding headcount." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "WHO WE SERVE" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "Built for Your Industry, Not Adapted From Someone Else's Playbook —",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "See If We're the Right Fit for Dublin" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8 max-w-4xl mx-auto animate-fade-up", children: "GrowSmallBiz works exclusively with local service businesses in Dublin and the Tri-Valley. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — which means faster results, deeper playbooks, and strategies built on real Tri-Valley market knowledge." }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
          { icon: Home, title: "Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Fill Your Dublin Calendar Year-Round", text: "Dublin's dense new construction — Jordan Ranch, Fallon Gateway, Heritage Park — means consistent demand for home services year-round, not just seasonal peaks. New homes need first-time HVAC tune-ups, new homeowners establish plumbing relationships, growing families invest in electrical upgrades and solar. The challenge is not demand — it is visibility and response speed. We build the systems that put Dublin home service contractors at the top of local search and ensure every inquiry is captured and followed up within seconds, whether your crew is on a job, in the truck, or off the clock." },
          { icon: Heart, title: "Dentists, Med Spas & Wellness Professionals: Attract Dublin's Health-Conscious Patients Who Book and Stay", text: "Dublin's growing population of young families and health-conscious dual-income households represents strong demand for dental care, cosmetic procedures, chiropractic, and wellness services. Patients in Jordan Ranch and Fallon Gateway do not choose based on proximity alone — they choose based on Google review ratings, visible professionalism, and online booking convenience. We build the complete digital presence that earns that trust: optimized Google Business Profile, automated review generation, HIPAA-aware reputation management, and AI booking follow-up that keeps your schedule full without administrative overhead." },
          { icon: UtensilsCrossed, title: "Restaurants & Hospitality: Fill More Tables, Build Loyal Regulars, Own Dublin's Dining Scene", text: "Dublin's restaurant scene along Dublin Boulevard and the surrounding commercial corridors is growing alongside the city's population. New residents actively seek dining options in their neighborhood — and they discover them through Google searches, Instagram, and Google Maps reviews before they walk through the door. We build the full digital reputation and visibility system: Local SEO, Google Maps optimization, social media presence, and the retention systems — VIP Club, reactivation campaigns, automated review programs — that turn first-time diners into regulars." },
          { icon: Building2, title: "Real Estate Agents & Brokers: Own the Tri-Valley Market, Multiply Your Listing Inquiries, and Build a Referral Engine", text: "Dublin's real estate market reflects its growth story — consistent buyer demand driven by population expansion, Millennial household formation, and Tri-Valley corporate relocations. Agents competing here face both dominant platforms like Zillow and well-resourced local brokerages. We build the hyper-local SEO, targeted paid campaigns, and personal branding systems that establish lasting local authority — putting your name in front of qualified buyers and sellers before they sign with anyone else." }
        ].map((item, i) => /* @__PURE__ */ jsx("div", { className: "feature-card-teal p-6 rounded-2xl animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-3", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.text })
          ] })
        ] }) }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "PROVEN RESULTS" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Real Client Results Across Our Service Areas" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 max-w-3xl mx-auto", children: "See what's possible when marketing runs as a complete, integrated system." })
        ] }),
        /* @__PURE__ */ jsx(CampaignResultsCards, { cards: dublinCards }),
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-up mt-12", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground mb-4 text-center", children: "Single-Channel Marketing Doesn't Win in Dublin Anymore. Here's What Actually Moves the Needle." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mb-6 max-w-3xl mx-auto", children: "National agency pages dominate Dublin's current SERPs because most local competitors are running single-channel strategies — SEO only, or ads only. An integrated system captures every touchpoint in Dublin's research-oriented buyer journey and converts more of them." }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { backgroundColor: "hsla(174, 100%, 24%, 0.2)" }, children: [
              /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "Channel" }),
              /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "Best For" }),
              /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "Time to Results" }),
              /* @__PURE__ */ jsx("th", { className: "p-4 text-foreground font-display font-bold border-b border-primary/20", children: "Long-Term Value" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: [
              { channel: "Local SEO", bestFor: "Organic rankings & first-mover positioning in new market", time: "3–6 months", value: "High — compounds as Dublin grows" },
              { channel: "Google Ads / PPC", bestFor: "Immediate lead flow while SEO builds", time: "Day 1", value: "Medium — requires ongoing spend" },
              { channel: "Google LSA", bestFor: "Pay-per-verified-lead, Google trust badge", time: "2–4 weeks", value: "High — beats national agencies on trust" },
              { channel: "Meta / Social Ads", bestFor: "Reaching young households before they need you", time: "1–2 weeks", value: "Medium — audience building" },
              { channel: "Reputation Mgmt", bestFor: "4+ star threshold for health & wellness", time: "30–90 days", value: "High — review ratings drive decisions" },
              { channel: "AI & Automation", bestFor: "First-responder advantage in fast-moving market", time: "Immediate", value: "High — multiplies every channel" }
            ].map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-foreground/10", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-semibold", children: row.channel }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: row.bestFor }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: row.time }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: row.value })
            ] }, i)) })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "WHY GROWSMALLBIZ" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
            "No Templates. No Generalists. No Excuses.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Why GrowSmallBiz Outperforms Every Agency That's Failed Your Dublin Business Before." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mb-8 max-w-4xl mx-auto animate-fade-up", children: "Dublin's current SERPs are dominated by national agencies with no local presence and regional competitors based in adjacent cities. Here is why the system GrowSmallBiz builds consistently outperforms them:" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          { icon: MapPin, title: "Local Proximity", text: "GrowSmallBiz is based in Danville — 15 minutes from Dublin across the I-680. We know the Tri-Valley and Alameda County markets. We are not a national agency running Dublin pages from Texas." },
          { icon: Target, title: "Integrated System", text: "One system, one strategy, one team accountable for your outcomes. No finger-pointing between vendors. Every channel from SEO to AI automation is connected and feeding one goal." },
          { icon: TrendingUp, title: "First-Mover Focus", text: "Dublin's growth means most of your ideal clients are forming service provider relationships right now. Our integrated system is designed to put you first — in search, in speed of response, and in reputation." },
          { icon: Brain, title: "AI-Powered", text: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems run 24/7. In Dublin's fast-moving market, the business that responds fastest wins the relationship — and keeps it." }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "feature-card-teal p-6 rounded-2xl text-center animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-3", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.text })
        ] }, i)) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-8 max-w-4xl mx-auto animate-fade-up", children: "We do not use templates. The national agencies currently ranking for Dublin keywords built their pages from the same templates used across Austin, Phoenix, Chicago and dozens of other cities — no knowledge of Jordan Ranch's new homeowner profile, the I-580/I-680 interchange, or Dublin's first-mover opportunity. GrowSmallBiz builds your Dublin strategy from the specific competitive landscape of this exact market — because that specificity is what wins in local search." })
      ] }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Ready to Dominate Dublin's Local Search Results?",
          description: "Schedule your free strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Dublin service business.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategyCallUrl
        }
      ),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Your Questions Answered — ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in Dublin" })
          ] }),
          subtitle: "The questions below reflect what Dublin service business owners ask most commonly before starting a marketing engagement.",
          faqs: [
            { question: "What types of businesses does GrowSmallBiz work with in Dublin?", answer: "We work exclusively with local service businesses and brick-and-mortar establishments in Dublin and the Tri-Valley — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, real estate professionals, and restaurants. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for businesses that serve local Dublin clients directly." },
            { question: "How quickly can Dublin businesses expect to see results?", answer: "Google Ads and AI lead-handling systems typically show measurable impact within the first 30 to 60 days. Google Business Profile optimizations show movement within 4 to 8 weeks. For AI SEO — our AI-powered content and technical SEO system — most clients see meaningful organic traction within 90 days, though full local 3-pack positioning for competitive terms typically takes 3 to 6 months. We provide transparent reporting from day one so you always know exactly what each channel is contributing." },
            { question: "How is GrowSmallBiz different from the national agencies that dominate Dublin's search results?", answer: "National agencies build templated location pages from cities where they have never done business. Their Dublin page was built from the same template as their Dallas, Atlanta, and Phoenix pages — with no knowledge of Jordan Ranch, Fallon Gateway, the I-580/I-680 competitive corridor, or the specific buyer behavior of Dublin's tech-worker demographic. GrowSmallBiz is based in Danville, 15 minutes away. Every strategy we build reflects the actual competitive landscape and neighborhood-level search behavior of Dublin's market." },
            { question: "Does my Dublin business need to be on social media?", answer: "For Dublin businesses, social media is more important than in most other Tri-Valley markets. Dublin's young, tech-savvy demographic actively discovers local businesses through Instagram and Facebook. Social media keywords carry unusually high search relevance for Dublin — ranking in the top recommended terms across multiple keyword analyses. Home service contractors benefit from before-and-after visual campaigns targeting new homeowners in Jordan Ranch and Fallon Gateway HOA communities. Restaurants benefit strongly from Instagram visibility and Google Maps photo optimization. We build social strategies calibrated to your specific vertical and Dublin's demographic, not generic social media management." },
            { question: "How do Google Local Service Ads work for Dublin contractors?", answer: "LSA places your business above all standard Google Ads — and above any other contractor without the Google Guaranteed badge. Dublin's homeowners, particularly in newer communities where they are choosing service providers for the first time, respond strongly to the visual trust signal the badge provides. The pay-per-verified-lead model also protects budget efficiency. For licensed contractors in HVAC, plumbing, electrical, and roofing, we strongly recommend running LSA alongside standard Google Ads for maximum search result page coverage." },
            { question: "What makes Dublin a different market than San Ramon or Pleasanton for digital marketing?", answer: "Three primary differences. First, Dublin is in Alameda County — a distinct geographic and administrative market from Contra Costa County cities like Walnut Creek, Danville, and San Ramon. Second, Dublin's demographic is meaningfully younger — more Millennial homeowners, more first-time buyers, more dual-income tech households — which creates different search behavior, stronger social media engagement, and higher mobile search rates. Third, Dublin's rapid growth means a larger proportion of your ideal clients are forming service provider relationships for the first time, making first-mover positioning in local search more valuable here than in any other city in this market." },
            { question: "Can GrowSmallBiz help with both getting new leads and keeping existing clients coming back?", answer: "Yes — and for businesses that have been operating in Dublin for more than a year, retention is often the fastest path to meaningful revenue growth. Our retention infrastructure includes VIP Club membership systems, SMART nurture sequences that keep past clients engaged, reactivation campaigns that bring dormant customers back, and automated review programs that build your reputation over time. Retention and acquisition work together in the integrated system — one does not replace the other." },
            { question: "What does AI actually do for a Dublin service business on a daily basis?", answer: "AI handles the work that falls through the cracks: answering missed calls around the clock via the AI Receptionist, responding to website visitors immediately through AI QuadBots so that after-hours inquiries get intelligent responses rather than auto-replies, qualifying incoming leads and routing them to your CRM, sending follow-up messages on schedule via SMART nurture sequences, requesting reviews after completed jobs, and continuously optimizing your campaigns. Your team focuses on delivering your service. AI handles the gaps — which in Dublin's fast-moving market of new homeowners forming first-time provider relationships, is where the most revenue is won and lost." }
          ],
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about marketing in Dublin?",
            description: "We're here to help you find the right strategy.",
            tagline: "Let's grow your Dublin business together."
          }
        }
      ),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Every Day You Wait, Your Competitors Book Another Dublin Customer That Should Have Been Yours.",
          description: "Dublin's growth means the window for establishing first-mover positioning in local search is open right now — but it will not stay open indefinitely. GrowSmallBiz gives Dublin service businesses the integrated marketing system that wins in a fast-growing market.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategyCallUrl
        }
      ),
      /* @__PURE__ */ jsx(ConsultationFormSection, {}),
      /* @__PURE__ */ jsx("section", { className: "py-12", style: { background: "hsl(210 50% 8%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: [
        { name: "Martinez", path: "/locations/martinez-ca/" },
        { name: "Concord", path: "/locations/concord-ca/" },
        { name: "Pleasant Hill", path: "/locations/pleasant-hill-ca/" },
        { name: "Walnut Creek", path: "/locations/walnut-creek-ca/" },
        { name: "Danville", path: "/locations/danville-ca/" },
        { name: "San Ramon", path: "/locations/san-ramon-ca/" },
        { name: "Pleasanton", path: "/locations/pleasanton-ca/" },
        { name: "Livermore", path: "/locations/livermore-ca/" },
        { name: "Tracy", path: "/locations/tracy-ca/" }
      ].map((city) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: city.path,
          className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors",
          children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5" }),
            city.name
          ]
        },
        city.path
      )) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DublinCA as default
};
