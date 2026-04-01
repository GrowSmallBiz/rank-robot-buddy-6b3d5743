import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BNvjIkYz.js";
import { u as useUtm, C as CTA_URLS, H as Header, B as Button, b as baseContactCTA, F as Footer } from "../main.mjs";
import { FAQSection } from "./FAQSection-BO0A5ebo.js";
import { C as ConsultationFormSection } from "./ConsultationFormSection-4DCBAAjl.js";
import { ShieldCheck, ArrowRight, Eye, DollarSign, FileCheck, TrendingUp, Settings, BarChart3, Target, Star, ClipboardCheck, MapPin, Home, Stethoscope, Wrench, Scale, Car, Users, Camera, CheckCircle2, Phone } from "lucide-react";
import { S as SectionHeader } from "./SectionHeader-DI_j2Gcg.js";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-slot";
import "@radix-ui/react-accordion";
const faqs = [
  {
    question: "What are Google Local Service Ads and how are they different from regular Google Ads?",
    answer: "Google Local Service Ads (LSA) are a distinct advertising product from Google's traditional PPC search ads. Regular Google Ads charge you every time someone clicks your ad — whether they become a customer or not. LSA charges you only when a verified customer contacts you directly through the ad, making it a pay-per-lead model. LSA ads also appear above traditional PPC ads and above organic search results. Additionally, LSA participants can earn the Google Guarantee or Google Screened badge — a verification mark that builds trust before customers ever click."
  },
  {
    question: "What is the Google Guarantee badge and how do I qualify for it?",
    answer: "The Google Guarantee badge is a green checkmark that appears next to your business name in your LSA listing. It tells customers that Google has verified your business — including a background check, license verification, and insurance confirmation. GrowSmallBiz manages this entire process for you, from application submission to document collection to monitoring approval status. Once active, the badge dramatically increases customer trust and click-through rate."
  },
  {
    question: "How much does it cost to run Google Local Service Ads?",
    answer: "LSA operates on a pay-per-lead basis — you pay only when a customer contacts you directly through the ad, not per click. Your weekly budget determines how many leads you can receive. Actual cost per lead varies by industry and geographic market. GrowSmallBiz sets and adjusts your budget based on competitive data, your service area, and your lead volume targets."
  },
  {
    question: "What happens if I receive spam calls or invalid leads through LSA?",
    answer: "Google's LSA platform has a built-in dispute process for invalid leads. GrowSmallBiz reviews every lead your campaign generates, identifies invalid contacts, and submits disputes on your behalf as standard practice. You should never be paying for leads that don't count."
  },
  {
    question: "How does GrowSmallBiz improve my LSA ranking over time?",
    answer: "Google ranks LSA profiles based on review count and recency, responsiveness to leads, profile completeness, service area relevance, and business hours. We actively optimize every one of these ranking factors ongoing — review generation campaigns, response metric monitoring, profile updates, and category/service area adjustments based on performance data."
  },
  {
    question: "Do Google Local Service Ads work for my type of business?",
    answer: "LSA is available for specific service categories — and GrowSmallBiz works exclusively within those categories: HVAC, dental, med spa, home services, chiropractic, auto repair, realtors, and photographers. In your free strategy call, we confirm your eligibility, review the competitive landscape, and give an honest assessment of what LSA can realistically deliver for your business."
  },
  {
    question: "Can I run Google Local Service Ads alongside my regular Google Ads (PPC)?",
    answer: "Yes — and in most cases, running both produces better results than either alone. LSA captures top-of-page placement with a trust badge, while Google Search Ads capture different query categories below. When coordinated together, your business appears multiple times on the first page of Google — compounding visibility and lead volume. GrowSmallBiz manages both channels aligned as a single local advertising strategy."
  }
];
const LSA = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Google Local Service Ads Management | LSA Agency for Local Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Stop paying for clicks that never convert. GrowSmallBiz manages your Google Local Service Ads so you pay only for real, verified leads. Google Guarantee badge included. Get started today." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/services/paid-advertising/google-local-services-ads/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Google Local Service Ads Management",
        serviceType: "LSA Management",
        description: "Complete Google Local Service Ads management for local businesses. Google Guarantee verification, profile optimization, lead review, dispute management, and performance reporting.",
        url: "/services/paid-advertising/google-local-services-ads/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Google Local Service Ads Management", url: "/services/paid-advertising/google-local-services-ads/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
          "Google Local Service Ads"
        ] }) }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up", children: [
          "Get More Calls. Pay Only for Real Leads.",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Not Clicks." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.1s" }, children: "Google Local Service Ads Put Your Business at the Very Top of Search — Above PPC and Above Organic. We Handle Every Detail So You Focus on the Jobs." }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.15s" }, children: "Most local business owners are burning money on Google Ads that charge per click — whether that click turns into a customer or not. Google Local Service Ads are different. You pay only when a real, verified customer contacts you directly through your ad. No wasted clicks. No guesswork." }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.2s" }, children: "GrowSmallBiz manages your entire LSA campaign — from Google Guarantee verification to profile optimization, budget control, lead review, and dispute management. You show up first. You pay for leads, not traffic. And you grow." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.25s" }, children: "We work exclusively with local service businesses: HVAC companies, dental practices, med spas, home service contractors, chiropractors, auto repair shops, realtors, and photographers. This is not a general marketing agency. We know your industry, your competition, and exactly how to position your business to win the Google Guarantee badge and dominate your local market." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
            "Get Your Free LSA Strategy Call",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#how-lsa-works", children: "See How LSA Management Works" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
      { value: "324%", label: "Increase in Consultations for Our Clients" },
      { value: "$127K", label: "Average Monthly Revenue Growth" },
      { value: "67", label: "First-Page Keywords Achieved" },
      { value: "4.9", label: "Average Google Rating Achieved" }
    ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
      /* @__PURE__ */ jsx("p", { className: "text-3xl md:text-4xl font-display font-bold text-primary", children: stat.value }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: stat.label })
    ] }, i)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "If Your Business Isn't Running Google Local Service Ads,",
          titleHighlight: "You're Invisible Where It Matters Most",
          description: "Google search results have changed. At the very top of the page — above every paid search ad, above every organic result — there is now a new section reserved exclusively for Google Local Service Ads. If you are not in that section, you are not just losing visibility. You are losing the most valuable real estate in digital advertising to competitors who are."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 mt-12", children: [
        { title: "You're Paying Per Click, Not Per Lead.", desc: "Traditional Google Ads charge you every time someone clicks your ad — regardless of whether they call you, book a job, or immediately leave your site. That means you are funding bounced traffic, accidental clicks, and tire-kickers. LSA flips this model entirely: you only pay when a qualified customer contacts you directly." },
        { title: "Your Competitors Have the Google Guarantee Badge — You Don't.", desc: "The green checkmark badge signals to every potential customer that Google has verified your business, your licenses, and your background. It is the most powerful trust signal in local search. Without it, your business looks unverified next to competitors who have it, and customers click theirs first." },
        { title: "Your LSA Profile Is Not Optimized — So Your Ranking Suffers.", desc: "Google's LSA algorithm ranks businesses based on review count, responsiveness, service area relevance, and profile completeness. Most businesses set up their LSA profile once and never touch it again. That means you are being ranked below competitors who are actively managing their profile every single week." },
        { title: "You're Getting Charged for Leads You Should Never Have Paid For.", desc: "Invalid leads happen — spam calls, wrong numbers, calls from outside your service area. If you do not know how to dispute these leads and claim credits through Google's system, you are simply paying for them. Effective LSA management means auditing every lead and recovering every dollar you should not have spent." },
        { title: "You Have No Idea What Your Cost Per Lead Actually Is.", desc: "Without proper LSA tracking and reporting, you cannot measure what is working, which service categories drive the most leads, or whether your budget is set correctly. You are flying blind — and that means you cannot grow with confidence." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
      ] }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mt-8 animate-fade-up", children: "These are exactly the problems GrowSmallBiz solves — so you stop wasting budget and start getting the leads your business deserves." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "What You Get When Your LSA Campaign Is",
          titleHighlight: "Managed the Right Way",
          description: "Google Local Service Ads are not difficult to run — they are difficult to run well. The difference between an underperforming LSA account and one that generates consistent, high-quality leads every week comes down to optimization, oversight, and expertise."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 mt-12", children: [
        { icon: Eye, title: "You Show Up First", desc: "LSA ads appear at the absolute top of Google search results, above sponsored PPC ads and above the local map pack. When a customer in your area searches for your service, they see your business first." },
        { icon: DollarSign, title: "You Pay Only for Verified, Real Customer Leads", desc: "Unlike traditional PPC where you pay per click, LSA charges you only when a customer directly calls, messages, or books through your ad. Every dollar is spent on genuine customer contact." },
        { icon: ShieldCheck, title: "The Google Guarantee Badge Builds Instant Trust", desc: "Businesses in the Google Guarantee program display a green checkmark badge verified by Google. Customers see that badge and know your business has been background-checked, licensed, and verified. This single trust signal dramatically increases click-through and call rates." },
        { icon: FileCheck, title: "Invalid Leads Get Disputed — You Get Your Money Back", desc: "We review every lead, dispute every invalid charge, and recover credits on your behalf. You only pay for the leads that actually count." },
        { icon: TrendingUp, title: "Your Profile Ranks Higher Over Time", desc: "We actively optimize every ranking factor week over week — reviews, response times, profile completeness, and service area accuracy — so your position improves continuously." },
        { icon: Settings, title: "Your Budget Is Managed to Maximize Lead Volume", desc: "We calibrate your budget based on search volume, competition, and your lead goals — and adjust it as the market changes. No overspending, no underdelivering." },
        { icon: BarChart3, title: "You Get Full Transparency on Every Lead and Every Dollar", desc: "Clear reporting on lead volume, cost per lead, dispute outcomes, and campaign performance. You always know exactly what your LSA campaign is delivering." },
        { icon: Target, title: "A Complete Local Advertising Presence", desc: "We integrate your LSA campaign with your Google Search Ads and organic SEO footprint so every channel reinforces the other and your business dominates local search end to end." }
      ].map((card, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(card.icon, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-display font-semibold text-foreground", children: card.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: card.desc })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "What Our Google Local Service Ads Management",
          titleHighlight: "Includes"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 mt-12", children: [
        { icon: ShieldCheck, title: "Google Guarantee Verification Management", desc: "We guide you through every step of the verification process — background check, license and insurance verification, compliance management — and keep your badge active. For professional services qualifying for Google Screened status, we manage that pathway instead." },
        { icon: Settings, title: "LSA Profile Setup and Optimization", desc: "We build or rebuild your profile with optimized service categories, accurate service area targeting, business hours, photos, and a compelling business description. A fully optimized profile ranks higher and converts more visitors into callers." },
        { icon: Star, title: "Review Generation and Management", desc: "We implement a systematic review generation strategy connecting with your existing customers to build your review count quickly. More reviews mean better rankings and more leads." },
        { icon: DollarSign, title: "Budget Strategy and Weekly Spend Management", desc: "We set your budget based on service area population, competitive density, and target lead volume — and adjust it weekly based on actual performance data." },
        { icon: ClipboardCheck, title: "Lead Review, Tracking, and Dispute Management", desc: "Every lead your LSA campaign generates gets reviewed. Spam calls, wrong numbers, duplicates, and out-of-area contacts get disputed with Google, and credits are recovered to your account." },
        { icon: MapPin, title: "Service Category and Targeting Optimization", desc: "We analyze which categories generate leads at the best cost per lead and allocate your presence accordingly. We refine your geographic targeting to the zip codes and neighborhoods where your most profitable customers are located." },
        { icon: BarChart3, title: "Performance Reporting and Monthly Strategy Reviews", desc: "Monthly plain-English reports covering lead volume, cost per lead, dispute outcomes, review growth, and ranking position. Plus a strategy review call each month." },
        { icon: Target, title: "Integration with Your Full Local Advertising Strategy", desc: "We align your LSA campaign with your Google Search Ads, local SEO, and website to create a complete local advertising ecosystem where every channel amplifies the others." }
      ].map((svc, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(svc.icon, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground", children: svc.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: svc.desc })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "how-lsa-works", className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "How We Launch and Manage Your",
          titleHighlight: "Google Local Service Ads Campaign"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 mt-12", children: [
        { title: "Free Strategy Call and LSA Readiness Assessment", desc: "We review your current online presence, check your Google Business Profile, assess your review count, verify licensing and insurance status, and evaluate your competitive landscape in your specific service area." },
        { title: "Google Guarantee Application and Verification", desc: "We manage your entire Google Guarantee application — documentation collection, background check submission, license and insurance verification — through to badge approval." },
        { title: "Profile Build and Category Optimization", desc: "We build out your LSA profile in full: service categories, service area zip codes, hours, photos, and business description. Categories are selected based on search volume data and competitive analysis." },
        { title: "Budget Setting and Campaign Launch", desc: "We set your initial weekly budget, configure lead preferences and notification settings, then launch and monitor daily through the first two weeks to catch any early adjustments needed." },
        { title: "Lead Monitoring, Dispute Filing, and Review Building", desc: "From launch, we monitor every lead, review calls, categorize contacts, dispute invalid leads immediately, and activate your review generation strategy to grow your ranking." },
        { title: "Ongoing Optimization and Monthly Reporting", desc: "Weekly campaign reviews — budget adjustments, category refinement, dispute monitoring, ranking tracking. Monthly plain-English report plus a strategy review call." }
      ].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-primary", children: i + 1 }) }),
          i < 5 && /* @__PURE__ */ jsx("div", { className: "w-px flex-1 bg-border mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "text-base font-display font-semibold text-foreground mb-2", children: [
            "Step ",
            i + 1,
            " — ",
            step.title
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.desc })
        ] })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "We Specialize in Google Local Service Ads for",
          titleHighlight: "These Industries"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 mt-12", children: [
        { icon: Home, title: "HVAC Companies", desc: "Seasonal demand, emergency calls, and maintenance agreements all require different campaign strategies. We optimize your LSA profile to capture both routine service calls and high-margin emergency requests." },
        { icon: Star, title: "Dental Practices", desc: "The Google Guarantee badge gives your dental practice a credibility signal that turns search traffic into new patient appointments. We manage your profile to showcase specialties and generate reviews that move you to the top." },
        { icon: Stethoscope, title: "Med Spas", desc: "An optimized LSA profile with strong reviews and clear service categories positions your med spa as the obvious choice before prospects visit your website. We manage your entire LSA presence to drive consultation bookings." },
        { icon: Wrench, title: "Home Services Contractors", desc: "Plumbers, electricians, roofers, general contractors, landscapers, pest control operators, and flooring professionals — we know what it takes to rank at the top in crowded markets and generate consistent, bookable leads." },
        { icon: Scale, title: "Chiropractic Practices", desc: "LSA positioning puts your practice front and center the moment patients search for relief. We optimize for the service categories and geographic areas that bring in new patients." },
        { icon: Car, title: "Auto Repair Shops", desc: "We position your shop at the top for your most profitable services, manage your service area accurately, and build the review count that drives trust and calls." },
        { icon: Users, title: "Realtors", desc: "We manage the Google Screened application process for qualifying real estate professionals and optimize your profile to generate direct buyer and seller leads from local search." },
        { icon: Camera, title: "Photographers", desc: "We build and manage your profile to reach clients actively searching for a photographer in your area — generating booking inquiries from people ready to hire, not just browse." }
      ].map((ind, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 space-y-3 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(ind.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground", children: ind.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ind.desc })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "Why Local Service Businesses Choose GrowSmallBiz to",
          titleHighlight: "Manage Their LSA Campaigns",
          className: "mb-12"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        { title: "We Work Exclusively with Local Service Businesses.", desc: "We don't serve e-commerce brands, SaaS companies, or national retailers. Our entire agency is built around local service businesses. That focus means deep, practical experience in the exact industries and competitive dynamics that determine whether your LSA campaign succeeds or fails." },
        { title: "Founded by a 30-Year Fortune 500 Executive.", desc: "GrowSmallBiz was founded by Subrata Guha — a digital transformation leader with over 30 years of Fortune 500 experience. You get enterprise-level marketing strategy applied to your local market." },
        { title: "We Manage the Entire Ecosystem — Not Just One Channel.", desc: "We coordinate your LSA with your Google Search Ads, local SEO, website, reputation management, and AI-powered lead follow-up systems. Every dollar works harder because every channel reinforces the others." },
        { title: "We Dispute Invalid Leads and Recover Your Budget.", desc: "Every invalid lead gets reviewed and disputed. Every recoverable credit gets claimed. That discipline alone can recover a meaningful percentage of your monthly ad spend." },
        { title: "We Guarantee Results — In Writing.", desc: "If we commit to a lead generation target and don't hit it within the agreed timeframe, we continue working at no additional management fee until we do." },
        { title: "You Always Know Exactly What Is Happening.", desc: "Plain-English monthly reports covering leads, cost per lead, dispute outcomes, review growth, and ranking position — plus a direct conversation with your account team. No black boxes." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-xl p-6 animate-fade-up", style: { animationDelay: `${i * 0.05}s` }, children: [
        /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "Ready to Pay for Leads",
          titleHighlight: "Instead of Clicks?"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed text-center mt-6 mb-8", children: "Most local businesses are leaving the most valuable advertising real estate in Google search completely unoccupied — or running LSA campaigns that cost more than they should because no one is actively managing them. A free strategy call takes 30 minutes. You will walk away knowing exactly what your LSA opportunity looks like, what it will cost, and what results you can realistically expect in your market." }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 mb-8", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-base font-display font-semibold text-foreground mb-4", children: "What you get on the call:" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          "A complete review of your current LSA presence (or a clean-slate plan if you have not started)",
          "A competitive analysis of who is ranking above you and why",
          "A Google Guarantee eligibility assessment for your business category",
          "A realistic cost-per-lead projection for your specific service area",
          "A custom campaign structure recommendation — service categories, budget, and targeting",
          "A clear explanation of what GrowSmallBiz will manage, optimize, and report every month",
          "No pressure, no sales tactics — just a straight conversation about what will work"
        ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
          item
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
        "Book My Free LSA Strategy Call",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "Real Results from",
          titleHighlight: "LSA Campaigns",
          description: "Case studies coming soon — showcasing measurable results from our Google Local Service Ads management."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8 mt-12", children: ["HVAC Company", "Dental Practice", "Home Services"].map((name, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-2xl p-8 text-center animate-fade-up", style: { animationDelay: `${i * 0.1}s` }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-foreground mb-2", children: name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Case study coming soon" })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      FAQSection,
      {
        faqs,
        title: "Frequently Asked Questions About Google Local Service Ads",
        subtitle: "Common questions about LSA management",
        contactCTA: {
          ...baseContactCTA,
          title: "Have more questions about Local Service Ads?",
          description: "We're here to help you get the most from your LSA campaign.",
          tagline: "Let's get your Google Guarantee badge and start generating leads."
        }
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
        "Your Competitors Are Already Running Google Local Service Ads.",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Are You?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Right now, in your service area, your competitors are capturing leads through Google Local Service Ads that you are not even competing for. The businesses with the Google Guarantee badge, the most reviews, and the most optimized profiles are collecting calls from customers who never scroll past the top three results. Every day without an active, well-managed LSA campaign is revenue that belongs to someone else." }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "GrowSmallBiz manages your complete LSA presence — verification, profile optimization, budget management, lead review, dispute filing, and performance reporting — so you capture your share of that demand starting now. Book your free strategy call today. No obligation, no contract pressure, no fluff. Just a direct conversation about what LSA can do for your business." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategyUrl, target: "_blank", rel: "noopener noreferrer", children: [
          "Get My Free Strategy Call",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
          "+1 (925) 886-3724"
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(ConsultationFormSection, { utmCampaign: "consultation-form", utmMedium: pageMedium }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  LSA as default
};
