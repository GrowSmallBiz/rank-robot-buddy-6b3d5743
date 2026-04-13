import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Search, TrendingUp, Star, Target, Calendar,
  Bot, Clock, MessageSquare, Phone, Zap,
  Gift, RefreshCw, Mail, CalendarCheck,
  Eye, Megaphone, Shield, MapPin,
  Wrench, Flame, Thermometer, ThermometerSun,
  AlertTriangle, DollarSign, Globe,
  BarChart3, Linkedin, Facebook, Instagram,
  UserPlus, Home, Building2, Sun, Heart,
  ClipboardList, FileText, Lightbulb, Palette,
  PhoneCall, Youtube,
} from "lucide-react";

// ── Images ──
import hvacHeroImage from "@/assets/industry-hvac-hero.webp";
import hvacWebsiteScreenshot from "@/assets/hvac/hvac-website-screenshot.webp";
import residentialHvacSeo from "@/assets/hvac/residential-hvac-seo.webp";
import emergencyRepairSeo from "@/assets/hvac/emergency-repair-seo.webp";
import commercialHvacSeo from "@/assets/hvac/commercial-hvac-seo.webp";
import emergencyHvacAd from "@/assets/hvac/emergency-hvac-ad.webp";
import summerAcAd from "@/assets/hvac/summer-ac-ad.webp";
import winterHeatingAd from "@/assets/hvac/winter-heating-ad.webp";
import maintenancePlanAd from "@/assets/hvac/maintenance-plan-ad.webp";
import commercialHvacAd from "@/assets/hvac/commercial-hvac-ad.webp";
import aiReceptionistMulticall from "@/assets/hvac/hvac-ai-receptionist.webp";
import aiWebsiteLivechat from "@/assets/hvac/hvac-ai-website-chat.webp";

export const hvacConfig: NicheConfig = {
  // ══════════════════════════════════════════════════════════════════════
  // PAGE META
  // ══════════════════════════════════════════════════════════════════════
  pageTitle: "Marketing Agency for HVAC Contractors | GrowSmallBiz Digital Marketing",
  metaDescription: "GrowSmallBiz helps HVAC contractors get more service calls with local SEO, Google Ads, AI lead capture, and reputation management. Book your free strategy call today.",
  canonicalUrl: "/home-service-contractors/marketing-for-hvac-contractors/",
  serviceName: "Marketing Agency for HVAC Contractors",
  serviceType: "Digital Marketing for Residential and Commercial HVAC Contractors",
  serviceDescription: "GrowSmallBiz Digital Marketing is a digital marketing agency headquartered in Danville, CA, specializing in Local SEO, Google Ads, and AI-powered marketing systems for residential and commercial HVAC contractors across the United States.",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Home Service Contractors", url: "/industries/digital-marketing-for-home-service-contractors/" },
    { name: "HVAC Contractor Marketing", url: "/home-service-contractors/marketing-for-hvac-contractors/" },
  ],
  offerCatalog: {
    name: "HVAC Contractor Marketing Services",
    items: [
      { name: "Local SEO & Google Business Profile" },
      { name: "Conversion-Focused Website Design" },
      { name: "Google Ads (LSA + PPC) & Meta Ads" },
      { name: "Reputation Management" },
      { name: "AI Receptionist & 24/7 Lead Capture" },
      { name: "Lead Nurture & Client Reactivation" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // HERO SECTION
  // ══════════════════════════════════════════════════════════════════════
  heroImage: hvacHeroImage,
  badgeIcon: Thermometer,
  badgeText: "HVAC Contractor Marketing",
  h1Line1: "The Marketing Agency That Fills Your HVAC Schedule",
  h1Highlight: "Year-Round",
  h1Line2: "",
  heroSubheadline: "GrowSmallBiz combines Local SEO, Google Ads, and AI-powered lead capture to put your HVAC company in front of homeowners and property managers the moment their system fails — and convert that visibility into booked service calls.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "See Our Services",
  secondaryCtaAnchor: "#solutions",
  statsBar: [
    { value: "24/7", label: "AI lead capture — every HVAC emergency call answered" },
    { value: "6", label: "AI platforms monitored for your visibility" },
    { value: "78%", label: "of HVAC customers hire the first contractor to respond" },
    { value: "5-7 Days", label: "from kickoff to campaigns going live" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // HERO EXTENDED
  // ══════════════════════════════════════════════════════════════════════
  heroExtendedHeadline: "From Missed Calls to",
  heroExtendedHighlight: "Fully Booked",
  heroExtended: [
    {
      icon: Eye,
      headline: "Get Found When the AC Breaks at 2 PM",
      body: "Google Maps, paid search, and AI platforms like ChatGPT and Perplexity are all being used by homeowners searching for emergency HVAC service. We make your company visible in all three — before the emergency, not after.",
    },
    {
      icon: Phone,
      headline: "Answer Every Call — Including the 11 PM Emergency",
      body: "62% of HVAC calls come in after 5 PM, on weekends, or during holidays — when most contractors are unavailable (ACHR News). A homeowner in an 85-degree house is calling whoever picks up first. Our AI Receptionist answers, qualifies, and books — even when your crew is on another job.",
    },
    {
      icon: Calendar,
      headline: "Market Before the Season — Not During It",
      body: "AC repair searches spike +266% from February to July, and heating system repair searches surge +594% in fall (WebFX). The companies dominating peak season started building Map Pack presence months earlier. We ramp your campaigns 4-6 weeks before peak demand so your schedule fills before competitors scramble.",
    },
    {
      icon: Star,
      headline: "Build the Review Count That Wins Before You Quote",
      body: "Before a homeowner calls you, they have read your reviews. A competitor with 200 reviews at 4.8 stars will always get the call over a better company with 40 reviews at 4.2. We automate review generation and turn every completed job into a reputation asset.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // PAIN POINTS — 6 items
  // ══════════════════════════════════════════════════════════════════════
  painPointsHeadline: "HVAC Contractor",
  painPointsHighlight: "Marketing Challenges",
  painPointsSubheadline: "The best HVAC companies in every market lose emergency calls and seasonal jobs every week to competitors who rank higher, respond faster, and have more reviews. Here is what we hear from contractors in their first call with us.",
  painPoints: [
    {
      icon: Search,
      title: "Invisible on Google When It Matters Most",
      description: "The U.S. HVAC contractor market has 118,433 businesses competing for local customers, with low market share concentration — no single company dominates any local market. In this environment, Map Pack position is the primary competitive differentiator. When a homeowner's AC fails at 2 PM on the hottest day of the year, they call whoever appears first in the Map Pack with strong reviews. Your competitors are in the top 3. You are not. Every emergency search that does not find you is a job your competitor just booked.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "Paying for Shared HVAC Leads That Go to Four Competitors Simultaneously",
      description: "Angi and HomeAdvisor sell the same HVAC lead to multiple contractors at the same time. With 118,433 HVAC businesses competing for the same homeowner, shared leads create a race to the bottom on price — not a path to profitable growth. The contractor who responds first wins the job; the others paid the same lead fee for nothing. Owned marketing through local SEO and Google Ads delivers exclusive, inbound leads that belong to you.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Calendar,
      title: "Missing the Summer and Winter Revenue Window Every Year",
      description: "AC repair searches spike +266% from February to July, and heating system repair searches surge +594% in fall — the sharpest seasonal swings of any home service category (WebFX Seasonal Search Analysis). The companies dominating peak season started building Map Pack presence and campaign infrastructure months earlier — not when the surge hit. Most HVAC contractors start marketing reactively — when the phone goes quiet — and spend peak season scrambling to catch up.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Phone,
      title: "After-Hours Emergency Calls Going to a Competitor Who Picked Up",
      description: "According to ACHR News research, 62% of HVAC customer calls occur after 5 PM, on weekends, or during holidays — the exact times when most contractors are unavailable. A homeowner in an 85-degree house at 10 PM will call whoever picks up or gets an immediate response. Every unanswered after-hours call is a job your competitor just booked.",
      hasImage: false, showAILogos: true,
    },
    {
      icon: Star,
      title: "Not Enough Reviews to Win the Job Before You Even Quote",
      description: "According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision — and 31% now ignore any HVAC company with a rating below 4.5 stars. Before a homeowner invites you into their home to diagnose a system, they have already read your reviews and compared your rating against competitors. If they have 200 reviews and you have 40, you are losing jobs before the first phone call.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Globe,
      title: "A Website That Sends Emergency Searchers to a Competitor",
      description: "A homeowner searching emergency AC repair at 2 PM has five seconds to decide whether to call you or go back to Google. If your site loads slowly on mobile, buries the phone number, or looks outdated — they go back to Google. Your competitor answers. That job is gone.",
      hasImage: false, showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of missing after-hours calls, losing bids to competitors with more reviews, and scrambling every peak season, GrowSmallBiz builds a complete marketing system that generates exclusive, inbound leads from homeowners and property managers in your service area — 24 hours a day, 7 days a week.",

  // ══════════════════════════════════════════════════════════════════════
  // INDUSTRY STATS
  // ══════════════════════════════════════════════════════════════════════
  industryStats: {
    headline: "The Market You're",
    headlineHighlight: "Competing In",
    subheadline: "Verified industry data — the scale of the HVAC contractor market and why local visibility determines who gets the call.",
    items: [
      {
        value: "$158.4B",
        label: "U.S. heating and air-conditioning contractor industry revenue in 2025",
        source: "IBISWorld 2025",
        sourceUrl: "https://www.ibisworld.com/united-states/market-size/heating-air-conditioning-contractors/1945/",
      },
      {
        value: "118,433",
        label: "HVAC contractor businesses competing for local market share in the U.S.",
        source: "IBISWorld 2025",
        sourceUrl: "https://www.ibisworld.com/united-states/number-of-businesses/heating-air-conditioning-contractors/1945/",
      },
      {
        value: "62%",
        label: "of HVAC customer calls occur after 5 PM, on weekends, or during holidays",
        source: "ACHR News Consumer Calling Behavior Study",
        sourceUrl: "https://agentzap.ai/blog/hvac-phone-statistics",
      },
      {
        value: "45%",
        label: "of consumers now use AI tools to find local services — up from 6% one year ago",
        source: "BrightLocal Local Consumer Review Survey 2026",
        sourceUrl: "https://www.brightlocal.com/research/lcrs-ai-trust/",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // SYSTEM DIAGRAM
  // ══════════════════════════════════════════════════════════════════════
  systemDiagramHeadline: "See How It All Works Together",
  systemDiagramBody: "GrowSmallBiz builds a predictable marketing system for residential and commercial HVAC contractors: Local SEO and Google Business Profile optimization captures homeowners in the research phase, Google Ads and Local Services Ads captures emergency and high-intent buyers immediately, reputation management drives the review velocity that wins the call, and AI-powered lead capture ensures no emergency call or inquiry is missed — including after-hours requests when homeowners need help most. Every channel works together, not in isolation.",

  // ══════════════════════════════════════════════════════════════════════
  // CTA BLOCKS
  // ══════════════════════════════════════════════════════════════════════
  ctaAfterPainPoints: {
    headline: "Ready to Stop Missing Emergency Calls?",
    subtext: "Let's build your exclusive, inbound lead pipeline for your HVAC business.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Call Us",
  },
  ctaAfterSeo: {
    headline: "See Where Your HVAC Business Ranks — Free Local SEO Audit",
    subtext: "Find out exactly where your company appears across Google Search, Google Maps, and AI search platforms — and where competitors are outranking you.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See the AI Client Growth System for HVAC Contractors in Action",
    subtext: "Watch how automated emergency lead capture, seasonal campaigns, and maintenance plan automation work together to fill your HVAC schedule year-round.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },

  // ══════════════════════════════════════════════════════════════════════
  // ON THIS PAGE NAV
  // ══════════════════════════════════════════════════════════════════════
  onThisPageItems: [
    { id: "website-design", label: "Website Design", icon: "🌐" },
    { id: "seo", label: "AI SEO", icon: "🔍" },
    { id: "paid-media", label: "Google Ads", icon: "🎯" },
    { id: "social-media", label: "Social Media", icon: "📱" },
    { id: "ai-growth", label: "AI Growth System", icon: "🤖" },
    { id: "reputation", label: "Reputation", icon: "⭐" },
    { id: "ai-voice", label: "AI Receptionist", icon: "📞" },
    { id: "results", label: "Results", icon: "📈" },
    { id: "faq", label: "FAQ", icon: "❓" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // CORE SERVICES GRID
  // ══════════════════════════════════════════════════════════════════════
  coreServicesHeadline: "Our Integrated Marketing System for",
  coreServicesHighlight: "Residential and Commercial HVAC Contractors",
  coreServicesSubheadline: "Every service works together. No gaps between channels. One team, one strategy, one dashboard.",
  coreServices: [
    { icon: Search, title: "Local SEO & Google Business Profile", whatWeDo: "Rank in the Map Pack for HVAC contractors near me, AC repair, and furnace repair searches — the high-intent queries that convert directly to booked service calls.", impact: "More inbound calls from homeowners and property managers actively searching for HVAC service right now." },
    { icon: Globe, title: "Conversion-Focused Website Design", whatWeDo: "A fast, mobile-first website built to convert emergency searchers — featuring click-to-call above the fold, trust signals, and service-specific pages for every HVAC query type.", impact: "Emergency searchers who find you on Google become callers instead of bouncing to a competitor." },
    { icon: Target, title: "Google Ads (LSA + PPC) & Meta Ads", whatWeDo: "Google Local Services Ads for emergency and high-intent HVAC searches; Google PPC and Meta Ads for seasonal campaigns ramped 4-6 weeks before summer and winter peaks.", impact: "Exclusive inbound leads at a predictable cost per service call — not shared leads from aggregator platforms." },
    { icon: Star, title: "Reputation Management", whatWeDo: "Systematic review generation across Google and Yelp that builds the review count and recency your Map Pack ranking and click-through rate depend on.", impact: "Higher Map Pack position, more homeowner trust, and more calls — before you ever pick up the phone." },
    { icon: Phone, title: "AI Receptionist & 24/7 Lead Capture", whatWeDo: "AI-powered voice and chat that answers, qualifies, and books every lead — midnight emergencies, weekend system failures, and commercial inquiries during your busiest week.", impact: "Zero missed service calls regardless of when or how a homeowner reaches out." },
    { icon: RefreshCw, title: "Lead Nurture & Client Reactivation", whatWeDo: "Automated email and SMS sequences that follow up with every unsold estimate, remind past customers when seasonal tune-ups are due, and re-engage homeowners before summer AC season and winter heating peaks hit.", impact: "More booked service calls and maintenance agreements from your existing customer list — without spending another dollar on new leads." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // STAGED APPROACH
  // ══════════════════════════════════════════════════════════════════════
  stagedApproachBadge: "WHERE TO START",
  stagedApproachHeadline: "You Don't Have to Do",
  stagedApproachHighlight: "Everything at Once",
  stagedApproachSubheadline: "Most HVAC companies try to launch SEO, Google Ads, a new website, and automation all at the same time — then wonder why nothing gets traction. GrowSmallBiz uses a staged approach that builds each layer on a solid foundation, so every dollar you invest compounds on the one before it.",
  stagedApproachStages: [
    {
      stage: "Stage 1", label: "Quick Wins", timeline: "30-90 Days", icon: Zap, color: "emerald",
      services: [
        "Conversion-focused website design with emergency call button above the fold",
        "Google Business Profile full optimization",
        "Google Local Services Ads (LSA) setup and Google Guarantee verification",
        "Reputation management + automated review requests (48-hour post-job)",
        "AI Receptionist — 24/7 call and chat capture for emergency and scheduled service",
        "Referral automation system setup",
      ],
      unlocks: "Immediate inbound calls, Map Pack presence, and zero missed emergency leads — before investing in longer-term channels.",
    },
    {
      stage: "Stage 2", label: "Growth", timeline: "3-6 Months", icon: TrendingUp, color: "blue",
      services: [
        "Managed AI SEO — local keyword rankings across your service area",
        "Google Ads (PPC) — seasonal campaigns timed 4-6 weeks before summer and winter peaks",
        "City and service area landing pages for local keyword coverage",
        "Review velocity building — Map Pack position consolidation",
        "Meta Ads — awareness and retargeting for homeowners in your market",
      ],
      unlocks: "Organic rankings that generate calls without ad spend, and paid campaigns that compound on your established Map Pack credibility.",
    },
    {
      stage: "Stage 3", label: "Scale", timeline: "6-12 Months", icon: BarChart3, color: "orange",
      services: [
        "Full funnel marketing automation — emergency call to maintenance plan customer",
        "Commercial HVAC and property manager contract acquisition campaigns",
        "Content cluster and topical authority building — own every HVAC search in your market",
        "AI search visibility tracking across 6 platforms",
        "Maintenance plan enrollment automation",
        "Retargeting across Google Display and Meta",
      ],
      unlocks: "Market dominance — appearing everywhere homeowners and property managers search, with a fully automated lead and retention system running 24/7.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEBSITE DESIGN SECTION
  // ══════════════════════════════════════════════════════════════════════
  websiteDesignBadge: "HVAC Contractor Website Design",
  websiteDesignHeadline: "Websites Built to Convert HVAC Emergency Searchers",
  websiteDesignHighlight: "Into Booked Service Calls",
  websiteDesignSubheadline: "Most HVAC websites load slowly on mobile, bury the phone number, and fail to convert the homeowner who found you at 2 PM in a hot house. We build fast, mobile-first websites that turn emergency search traffic into booked service calls.",
  websiteDesignImage: hvacWebsiteScreenshot,
  websiteDesignFeatureHeadline: "Websites That Convert Emergency Intent Into Booked Jobs",
  websiteDesignFeatureBody: "84% of consumers contact an HVAC company after first searching online (leads4build.com) — meaning your website is the destination for nearly every lead your Map Pack, Google Ads, and LSA campaigns generate. According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers also read reviews before hiring — and 31% ignore any HVAC company below 4.5 stars. An HVAC website that loads in under 3 seconds on mobile, features click-to-call above the fold on every page, and integrates Google reviews prominently converts emergency search intent into booked service calls. GrowSmallBiz builds sites that accomplish all three from day one.",
  websiteDesignBullets: [
    "Mobile-first design that loads in under 3 seconds — critical for homeowners searching during an emergency",
    "Click-to-call phone number above the fold on every page — no scrolling required to reach you",
    "Service-specific pages for AC repair, furnace repair, HVAC installation, maintenance plans, and commercial HVAC",
    "Google Business Profile integration and local schema markup for Map Pack signals",
    "Emergency service badge visible on every page — communicate 24/7 availability immediately",
    "Trust signals prominently displayed: licenses, insurance, Google review stars, years in business",
    "City and service area landing pages for local keyword coverage across your territory",
    "Quote request forms designed for mobile submission — not abandoned",
  ],
  aiSearchCalloutHeadline: "Google Still Drives Most HVAC Emergency Calls.",
  aiSearchCalloutHighlight: "But AI Search Is Changing How Homeowners Find You.",
  aiSearchCalloutBody: "According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools like ChatGPT, Gemini, and Perplexity to find local services — up from just 6% one year ago. AI is now the third most popular source of local business recommendations, behind only Google and Facebook. Yet SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. When a homeowner asks an AI assistant which HVAC company to call, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz optimizes your website and content for both Google and AI answer engines simultaneously, so your HVAC company is in the 1.2% that gets recommended — not the 98.8% that AI ignores.",
  aiSearchStats: [
    { value: "45%", label: "of consumers now use AI tools for local service recommendations (BrightLocal 2026)" },
    { value: "1.2%", label: "of local businesses are recommended by ChatGPT — the rest are invisible (SOCi 2026)" },
    { value: "24/7", label: "continuous AI search monitoring and optimization across 6 platforms" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // SEO SECTION
  // ══════════════════════════════════════════════════════════════════════
  seoBadge: "AI-Powered SEO for HVAC Contractors",
  seoHeadline: "Local SEO That Puts Your HVAC Company",
  seoHighlight: "at the Top of Google Maps",
  seoSubheadline: "Comprehensive local search optimization that drives emergency service calls, seasonal tune-up bookings, and commercial HVAC inquiries from homeowners and property managers across your service area.",
  seoEditorialHeadline: "Why HVAC Contractor SEO Works",
  seoEditorialHighlight: "Differently",
  seoEditorialBody: [
    "The U.S. heating and air-conditioning contractor industry generates $158.4 billion annually across 118,433 businesses, with low market share concentration — the largest company, Emcor Group, does not dominate any local market. 84% of consumers contact an HVAC company after first searching online (leads4build.com) — which means the company that appears first in the Map Pack with strong reviews consistently wins the emergency call, the seasonal tune-up, and the system replacement. Every homeowner who does not find you in that search is a job your competitor is booking.",
    "The Map Pack algorithm rewards three signals above all others: proximity to the searcher, review count and recency, and relevance of your Google Business Profile to the search query. GrowSmallBiz optimizes all three systematically — not just your website, but your GBP, your citations, your review velocity, and your local content.",
    "Seasonal demand creates a specific SEO challenge that general agencies miss. AC repair searches spike +266% from February to July, and heating system repair searches surge +594% in fall — the sharpest seasonal swings of any home service category (WebFX). If your Map Pack rankings and campaign infrastructure are not established before the surge, you miss the revenue window entirely. We build your local authority year-round so you own the Map Pack when it matters most.",
    "AEO and GEO optimization go a step further — structuring your website content so AI platforms like ChatGPT, Perplexity, and Google AI Overviews cite your HVAC company when homeowners ask for contractor recommendations. According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools to find local services — up from just 6% one year ago. Yet SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. The HVAC companies that structure their content for AI citation now will own these recommendations while competitors are still unaware the channel exists.",
  ],
  seoEditorialPullQuote: "The U.S. HVAC contractor industry generates $158.4 billion annually across 118,433 businesses with low market concentration — making local Map Pack position and AI search visibility the two most consequential competitive differentiators for residential and commercial HVAC contractors in any U.S. market.",
  seoKeywordCategories: {
    residentialHvac: {
      label: "Residential HVAC", icon: Home,
      image: residentialHvacSeo,
      keywords: ["hvac contractors near me", "ac repair near me", "furnace repair near me", "hvac tune up", "hvac installation"],
      competitors: "Local HVAC companies, national HVAC franchises, Angi and HomeAdvisor listings",
    },
    emergencyRepair: {
      label: "Emergency Repair", icon: Zap,
      image: emergencyRepairSeo,
      keywords: ["emergency ac repair", "emergency hvac service", "ac not working", "no heat emergency", "hvac repair same day"],
      competitors: "24/7 HVAC services, local emergency contractors, national brands with emergency lines",
    },
    commercialHvac: {
      label: "Commercial HVAC", icon: Building2,
      image: commercialHvacSeo,
      keywords: ["commercial hvac contractors", "commercial ac repair", "office hvac service", "restaurant hvac", "commercial hvac installation"],
      competitors: "Commercial HVAC firms, national contractors, property management preferred vendor lists",
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // FOUR-LANE SEARCH DOMINANCE
  // ══════════════════════════════════════════════════════════════════════
  fourLaneBadge: "SEARCH DOMINANCE",
  fourLaneHeadline: "One Search Market.",
  fourLaneHighlight: "Four Ways to Win It.",
  fourLaneSubheadline: "When a homeowner's AC fails or they need a seasonal tune-up, they search in four completely different ways — and each requires a different strategy. GrowSmallBiz builds your presence across all four simultaneously so you own your market regardless of how your next customer searches.",
  fourLaneLanes: [
    {
      lane: "Map Pack", icon: MapPin, color: "emerald",
      headline: "Win the Local 3-Pack",
      description: "The Map Pack appears above all organic results for local HVAC searches and is driven by Google Business Profile optimization, review velocity, citation consistency, and proximity signals. It is the highest-click position for HVAC contractors near me and emergency AC repair searches.",
      howWeDoIt: [
        "Full GBP optimization — categories, services, emergency availability, weekly posts",
        "Systematic review generation — automated 48-hour post-job SMS and email request",
        "Local citation building across 50+ directories for NAP consistency",
        "GBP heatmap tracking — visualize your Map Pack rank across your entire service area",
      ],
    },
    {
      lane: "LSA", icon: Shield, color: "blue",
      headline: "Appear Above All Ads",
      description: "Google Local Services Ads appear above standard Google Ads and organic results with the Google Guarantee badge. They charge per verified lead — not per click. Emergency HVAC buyers click here first.",
      howWeDoIt: [
        "LSA account setup and Google Guarantee verification",
        "Budget optimization — pay per verified call lead, not per click",
        "Review-gated eligibility — we build your review count to qualify and maintain Google Guaranteed status",
        "Emergency and high-intent HVAC keyword coverage — capture ready-to-hire homeowners instantly",
      ],
    },
    {
      lane: "Organic Search", icon: Search, color: "amber",
      headline: "Own the Research Queries",
      description: "Homeowners researching HVAC costs, comparing contractors, or planning system replacement find you through organic rankings. These buyers convert over days or weeks and represent the lowest long-term cost per acquisition.",
      howWeDoIt: [
        "Service pages optimized for residential HVAC, emergency repair, and commercial HVAC keywords",
        "City and neighborhood landing pages — rank for location-specific searches across your service area",
        "Blog content targeting research queries — cost guides, maintenance tips, repair vs. replace guides",
        "Topical authority building — own every relevant HVAC search cluster in your local market",
      ],
    },
    {
      lane: "AI Search", icon: Bot, color: "purple",
      headline: "Get Cited by AI Assistants",
      description: "When a homeowner asks ChatGPT, Perplexity, or Google AI Overview which HVAC contractor to call, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz structures your content to be cited by AI answer engines.",
      howWeDoIt: [
        "Entity optimization — ensure AI engines recognize your business as a verified local HVAC authority",
        "Structured content — FAQ sections, entity blocks, and standalone citable sentences throughout your site",
        "AI visibility tracking across 6 platforms — ChatGPT, Gemini, Perplexity, Grok, Copilot, Google AI",
        "Citation monitoring — track which queries your business appears in vs. competitors monthly",
      ],
    },
  ],
  searchComparisonTitle: "Two Ways Homeowners Find You Today",
  searchComparisonSubtitle: "Your business needs to show up in both — and most of your competitors are only optimized for one.",
  searchComparisonPanels: [
    {
      type: "traditional", label: "Traditional Google Search",
      query: "emergency ac repair near me",
      items: [
        "[LSA] Arctic Air HVAC — Google Guaranteed 247 reviews",
        "[LSA] Cool Breeze Services — Google Guaranteed",
        "Map Pack — Metro HVAC Co 312 reviews",
        "Map Pack — Comfort Zone HVAC 189 reviews",
        "Map Pack — Pro Air Systems 94 reviews",
        "Organic results — 10 blue links below the fold",
      ],
      caption: "LSA + Map Pack + Page 1 organic = full emergency search coverage. Miss any one and a competitor gets the call.",
    },
    {
      type: "ai", label: "AI Search — ChatGPT and Perplexity",
      query: "Which HVAC company should I call for emergency AC repair?",
      items: [
        "Based on local reviews, verified service history, and 24/7 availability, HVAC contractors with GEO-optimized content are consistently cited for emergency service in their target markets.",
        "Sources cited: Google Reviews, Yelp, company website, service area pages, emergency service pages",
        "AI engines build answers from structured content, entity signals, and citation footprint — not keyword density.",
      ],
      caption: "AI search skips the link list entirely. If your content is not structured for citation, your HVAC company does not exist in this channel.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // PAID MEDIA
  // ══════════════════════════════════════════════════════════════════════
  paidMediaHeadline: "We Run High-Converting Google Ads for",
  paidMediaHighlight: "Residential and Commercial HVAC Contractors",
  paidMediaSubheadline: "Strategic paid advertising by service type and buyer intent — emergency repair, seasonal tune-ups, system replacement, and commercial HVAC each require a different campaign approach and budget timing.",
  adCreatives: [
    { id: "emergency-repair", genre: "Emergency HVAC Repair", image: emergencyHvacAd, platforms: ["Google Ads (Search)", "Google LSA"], description: "Emergency and after-hours service campaigns. 24/7 call-only ad formats. Highest CPC and highest intent. Every missed emergency call is a lost job." },
    { id: "summer-ac", genre: "Summer AC Season", image: summerAcAd, platforms: ["Google Ads (Search)", "Google LSA", "Meta Ads"], description: "Pre-season AC tune-up and installation campaigns. Launch 4-6 weeks before summer. AC repair searches spike +266% from February to July." },
    { id: "winter-heating", genre: "Winter Heating Season", image: winterHeatingAd, platforms: ["Google Ads (Search)", "Google LSA"], description: "Fall furnace tune-up and emergency heating campaigns. Ramp in September before October-January peak. Heating system repair searches surge +594% in fall." },
    { id: "maintenance-plan", genre: "Maintenance Plan Enrollment", image: maintenancePlanAd, platforms: ["Google Ads (Search)", "Meta Ads", "Email"], description: "Annual maintenance agreement campaigns. Highest lifetime value conversion. Target existing customers and warm prospects." },
    { id: "commercial", genre: "Commercial HVAC", image: commercialHvacAd, platforms: ["Google Ads (Search)", "LinkedIn Ads"], description: "Property manager and facility manager targeting. Office buildings, restaurants, retail. High lifetime value commercial contracts." },
  ],
  paidMediaByGenre: [
    {
      genre: "Residential HVAC Contractors", icon: Home, color: "from-orange-500/20 to-orange-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Emergency repair and seasonal tune-up campaigns. HVAC contractors near me and AC repair near me targeting. Ramp 4-6 weeks before summer and winter peaks." },
        { name: "Google LSA", reason: "Pay per verified lead. Google Guarantee badge builds critical trust for a service entering the homeowner's home." },
      ],
      secondary: [
        { name: "Meta Ads", reason: "Homeowner targeting by geography. Seasonal awareness and maintenance plan enrollment campaigns." },
        { name: "Nextdoor Ads", reason: "Hyper-local neighborhood targeting. Strong trust signal for HVAC among neighbors." },
      ],
    },
    {
      genre: "Emergency HVAC Service", icon: Zap, color: "from-red-500/20 to-red-600/10",
      primary: [
        { name: "Google Ads (Call-Only)", reason: "Designed for immediate phone calls. Mobile-only. Highest CPC but highest intent — homeowner in emergency mode calls immediately." },
        { name: "Google LSA", reason: "Emergency badge. Pay per verified call lead. Top placement above standard ads for urgent searches." },
      ],
      secondary: [
        { name: "Google Display Retargeting", reason: "Re-engage homeowners who visited but did not call. 30-day retargeting window." },
        { name: "AI Receptionist", reason: "Not an ad channel — the operational layer that ensures every emergency call generated by ads is answered 24/7." },
      ],
    },
    {
      genre: "Commercial HVAC", icon: Building2, color: "from-blue-500/20 to-blue-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Commercial HVAC contractor and commercial AC repair targeting. Higher CPC, higher lifetime value contracts." },
        { name: "LinkedIn Ads", reason: "Property manager and facility manager targeting. Office buildings, restaurants, retail — annual maintenance contract acquisition." },
      ],
      secondary: [
        { name: "Google Display", reason: "Retargeting property managers who visited commercial HVAC service pages." },
        { name: "Email Outreach", reason: "Direct outreach to property management companies for annual HVAC maintenance contracts." },
      ],
    },
  ],
  metaAdSetupHeadline: "How We Ramp Your Ads Before the Season Hits",
  metaAdSetupSubheadline: "Seasonal ramp strategy and conversion-optimized landing pages built specifically for the HVAC demand cycle — campaigns live before competitors, Map Pack owned before the surge.",
  trackingRetargetingEssentials: [
    { icon: Target, title: "Google Conversion Tracking", description: "Every call, form submission, and service request tracked back to the keyword and campaign that generated it." },
    { icon: RefreshCw, title: "Seasonal Budget Automation", description: "Ad spend ramps automatically 4-6 weeks before summer and winter peaks. Pulls back in slow periods to protect budget." },
    { icon: BarChart3, title: "Monthly Performance Reporting", description: "Full campaign report every month — cost per lead, conversion rate, top-performing keywords, and seasonal trend analysis." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // RETARGETING
  // ══════════════════════════════════════════════════════════════════════
  retargetingHeadline: "Get Found Once.",
  retargetingHighlight: "Stay Top-of-Mind Until They Book.",
  retargetingSubheadline: "A homeowner researching system replacement or a maintenance plan visits your site and leaves without calling. Retargeting brings them back when they are ready to decide.",
  retargetingBody: [
    "HVAC decisions for non-emergency work — system replacement, maintenance plans, seasonal tune-ups — are rarely made on the first website visit. According to BrightLocal's 2026 research, the average consumer uses six different platforms when evaluating a local business before hiring. A homeowner researching furnace replacement will visit multiple websites, compare reviews, and consider options over days or weeks. Retargeting ensures your HVAC company remains visible throughout that entire decision window — not just during the first search.",
    "GrowSmallBiz sets up Google Display retargeting and Meta retargeting for every paid media client. Visitors who viewed your system replacement or maintenance plan pages see your ads across the web and social platforms for up to 30 days after their visit — keeping your brand in front of them until they are ready to book.",
  ],

  // ══════════════════════════════════════════════════════════════════════
  // SOCIAL MEDIA
  // ══════════════════════════════════════════════════════════════════════
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Presence and Strategy",
  socialMediaSubheadline: "Platform-specific social media strategies for HVAC contractors — built around what actually drives homeowner trust and commercial property manager inquiries.",
  socialMediaByGenre: [
    {
      genre: "Residential HVAC Contractors", color: "from-orange-500/20 to-orange-600/10",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Before-and-after system replacement photos, seasonal emergency tips, summer and winter preparedness posts. Homeowner demographic 35-65. Community engagement in neighborhood groups." },
        { name: "Instagram", icon: Instagram, strategy: "High-quality HVAC installation photos, technician professionalism showcases, seasonal content. Visual proof of quality workmanship." },
      ],
      secondary: [
        { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood HVAC recommendations. Seasonal availability announcements. Local trust signal — neighbor recommendations carry significant weight for home service contractors." },
        { name: "Google Posts", icon: Search, strategy: "Weekly GBP posts covering seasonal services, emergency availability, promotions, and team updates. Direct Map Pack ranking signal." },
      ],
    },
    {
      genre: "Commercial HVAC Contractors", color: "from-blue-500/20 to-blue-600/10",
      primary: [
        { name: "LinkedIn", icon: Linkedin, strategy: "Property manager and facility manager outreach. Commercial portfolio showcase. Annual maintenance contract acquisition for B2B buyers." },
        { name: "Facebook", icon: Facebook, strategy: "Commercial property before-and-after. Property management company targeting. HOA community advertising." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Commercial HVAC installation portfolio. Large-scale system replacement showcases. Visual credibility for B2B decision makers." },
        { name: "YouTube", icon: Youtube, strategy: "Commercial HVAC project walkthroughs. Maintenance program explainers. Searchable educational video content." },
      ],
    },
  ],
  linkedInOutreachEnabled: false,

  // ══════════════════════════════════════════════════════════════════════
  // AI GROWTH SYSTEM
  // ══════════════════════════════════════════════════════════════════════
  growthSystemHeadline: "for Residential and Commercial HVAC Contractors",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop chasing leads manually. GrowSmallBiz builds an automated marketing system that captures emergency calls, qualifies service requests, follows up on maintenance leads, and turns one-time service calls into recurring maintenance plan customers — automatically.",
  clientJourneyStages: [
    { stage: "Awareness", icon: Eye, color: "from-blue-500 to-blue-600", description: "A homeowner notices their system is underperforming, hears a noise, or receives a seasonal reminder. They are in your service area but do not know you yet.", goal: "Get discovered before the emergency happens" },
    { stage: "Research", icon: Search, color: "from-purple-500 to-purple-600", description: "They search Google or ask an AI assistant for HVAC contractors near them. They check reviews, emergency availability, and pricing.", goal: "Appear first in Map Pack, Google Ads, and AI search results" },
    { stage: "Consideration", icon: Star, color: "from-primary to-primary", description: "They compare your reviews, emergency availability signal, and website against two or three competitors. Trust and response speed determine who gets called.", goal: "Win the comparison with superior reviews, fast site, and 24/7 availability" },
    { stage: "Booking", icon: Phone, color: "from-emerald-500 to-emerald-600", description: "They call, fill out a form, or chat with your AI receptionist to book a service call. Speed of response determines whether you get the job.", goal: "Capture every lead 24/7 — no missed emergency calls, no delayed callbacks" },
    { stage: "Retention", icon: RefreshCw, color: "from-amber-500 to-amber-600", description: "They become a recurring maintenance plan customer, refer neighbors, and replace their system with you 8-12 years later.", goal: "Automate review requests, maintenance reminders, and referral follow-up" },
  ],
  emailNurturePoints: [
    { title: "Stay Top-of-Mind Through the Full Decision Window", icon: Eye, description: "Most HVAC system replacement and maintenance plan decisions take days or weeks. Automated email and SMS sequences keep your company visible from first inquiry to booked service call — so you are not forgotten while they compare estimates." },
    { title: "Turn One-Time Emergency Calls Into Recurring Revenue", icon: Heart, description: "A homeowner who calls for emergency AC repair is a candidate for an annual maintenance plan, a filter replacement follow-up, and eventually a full system replacement. Automated sequences turn emergency one-time jobs into multi-year customer relationships." },
    { title: "Turn Happy Clients Into Your Best Lead Source", icon: Gift, description: "69% of homeowners hired an HVAC company they had used before or that was recommended by friends and family (FIELDBOSS 2025). An automated referral program reaches satisfied clients with a discount offer for every new customer they refer. Tracked automatically, reward delivered via SMS." },
  ],
  emailSequenceTitle: "5-Day Inquiry-to-Booking Automation:",
  emailSequenceHighlight: "From Emergency Call to Loyal Maintenance Customer",
  noShowResearchCitations: [
    { stat: "15-30%", source: "Service Industry Research", publication: "Field Service Management Studies", year: "2024", label: "of service appointments are missed when contractors send no advance confirmation" },
    { stat: "38%", source: "Field Service Scheduling Research", publication: "HVAC Scheduling Benchmark", year: "2024", label: "reduction in missed service windows when technicians send a morning-of arrival confirmation" },
    { stat: "80%", source: "HomeAdvisor Pro Contractor Survey", publication: "HomeAdvisor", year: "2024", label: "of homeowners say a confirmed arrival window makes them more likely to be home and ready" },
    { stat: "9x", source: "ServiceTitan Field Service Benchmark Report", publication: "ServiceTitan", year: "2024", label: "more appointment-to-job conversion when a technician arrival window is sent the morning of the appointment" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "Service Appointment", icon: ClipboardList, color: "from-emerald-500 to-emerald-600",
      description: "Arrival window confirmation sequence for HVAC service and installation appointments",
      noShowImpact: "Missed service appointments waste technician time and delay booked revenue.",
      reminders: [
        { timing: "2 days before", channels: ["email"], content: "Service confirmation with job address, technician name, and what to expect during the visit" },
        { timing: "Morning of", channels: ["email", "sms"], content: "Arrival window SMS: Our technician will be there between 2-4 PM. Technician name will call 30 minutes before arrival." },
        { timing: "1 hour before", channels: ["sms"], content: "On-the-way confirmation with technician name, estimated arrival time, and direct contact number" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Follow-Up Estimate", icon: FileText, color: "from-violet-500 to-violet-600",
      description: "Automated follow-up for system replacement estimates to close the quote.",
      noShowImpact: "Most HVAC system replacement quotes are lost to silence — no follow-up, no closed job.",
      reminders: [
        { timing: "24 hours after estimate", channels: ["email"], content: "Estimate summary + easy accept button + FAQ about installation timeline and financing options" },
        { timing: "3 days after estimate", channels: ["email", "sms"], content: "Checking in — any questions about the estimate or equipment options?" },
        { timing: "7 days after estimate", channels: ["sms"], content: "Seasonal availability notice — installation schedule filling up, book early to secure your slot" },
      ],
      expectedReduction: "Up to 40% more estimates accepted",
    },
    {
      sessionType: "Seasonal Re-engagement", icon: Calendar, color: "from-amber-500 to-amber-600",
      description: "Automated seasonal outreach to past clients before each peak HVAC season.",
      noShowImpact: "Past clients who are not re-engaged before summer or winter search for a new HVAC provider.",
      reminders: [
        { timing: "6 weeks before summer", channels: ["email"], content: "Pre-summer AC tune-up offer — get your system checked before the heat hits and the schedule fills" },
        { timing: "3 weeks before summer", channels: ["sms"], content: "Limited summer slots remaining — easy online booking link" },
        { timing: "6 weeks before winter", channels: ["email"], content: "Fall furnace tune-up and safety inspection — book before the cold season schedule fills" },
      ],
      expectedReduction: "30-45% past client retention improvement",
    },
  ],
  marketingCampaigns: [
    {
      genre: "Summer AC Season", icon: Sun, color: "from-orange-500 to-orange-600",
      offer: {
        headline: "Pre-Season AC Tune-Up",
        tagline: "[Pre-Summer] — Get your AC checked before the heat hits and the schedule fills",
        price: "Contact for Pricing",
        originalPrice: "",
        savings: "",
        includes: ["Full AC system inspection", "Refrigerant level check", "Filter replacement", "Performance report"],
        urgency: "Summer slots filling fast",
        cta: "Book AC Tune-Up",
      },
      funnel: ["Google Ads / Meta Ad", "Landing page with offer", "Online booking", "SMS confirmation", "Day-of reminder", "Post-visit review request", "Maintenance plan upsell"],
      topPlatforms: ["Google Ads", "Google LSA", "Meta Ads"],
      seasonality: "Peak: Spring (Mar-May) ramp-up for summer",
    },
    {
      genre: "Winter Heating Season", icon: Flame, color: "from-blue-500 to-blue-600",
      offer: {
        headline: "Fall Furnace Tune-Up and Safety Inspection",
        tagline: "[Pre-Winter] — Get your heating system checked before the first cold snap",
        price: "Contact for Pricing",
        originalPrice: "",
        savings: "",
        includes: ["Full furnace inspection", "Heat exchanger check", "Safety systems test", "Filter replacement"],
        urgency: "Fall schedule filling fast",
        cta: "Book Furnace Inspection",
      },
      funnel: ["Google Ads / LSA", "Landing page", "Quote request", "Email confirmation", "Follow-up sequence", "Review request"],
      topPlatforms: ["Google Ads", "Google LSA", "Email"],
      seasonality: "Peak: Fall (Aug-Oct) for winter prep",
    },
    {
      genre: "Maintenance Plan Enrollment", icon: Shield, color: "from-teal-500 to-teal-600",
      offer: {
        headline: "Annual HVAC Maintenance Plan",
        tagline: "[Ongoing] — Priority service, annual tune-ups, and discounted repairs year-round",
        price: "Custom / Contact for Pricing",
        originalPrice: "",
        savings: "",
        includes: ["Spring AC tune-up", "Fall heating tune-up", "Priority emergency response", "Discounted repair rates"],
        urgency: "Limited enrollment",
        cta: "Enroll in Maintenance Plan",
      },
      funnel: ["Email to existing customers", "Landing page", "Online enrollment", "CRM automation", "Annual renewal"],
      topPlatforms: ["Email", "Google Ads", "Meta Ads"],
      seasonality: "Year-round — push after every completed job",
    },
  ],
  seasonalCampaigns: [
    { campaign: "Summer AC Season", timing: "Launch 4-6 weeks before June", offer: "Pre-season tune-up offers + emergency coverage messaging", channels: ["Google Ads", "Google LSA", "Meta Ads"] },
    { campaign: "Emergency Coverage", timing: "Active year-round — budget peaks in summer and winter", offer: "24/7 emergency service availability + AI Receptionist", channels: ["Google LSA", "Google Ads (Call-Only)"] },
    { campaign: "Fall Heating Season", timing: "Launch in August for September-November peak", offer: "Furnace tune-up + heating safety inspection", channels: ["Google Ads", "Google LSA", "Email"] },
    { campaign: "Maintenance Plan Push", timing: "Active after every completed job", offer: "Annual plan enrollment + repeat customer retention", channels: ["Email", "SMS", "Google Ads"] },
    { campaign: "Commercial Contract Season", timing: "Active September-November", offer: "Annual HVAC maintenance proposals for property managers", channels: ["LinkedIn Ads", "Google Ads", "Email"] },
  ],
  pastClientWorkflows: [
    { title: "Seasonal Tune-Up Reminder", icon: Calendar, description: "Automated email sent 10 months after last service — before they start searching for a new HVAC provider. Spring AC check-up reminder sent in February/March. Fall heating tune-up reminder sent in August/September. Most homeowners hire the company that reaches out first when the season changes." },
    { title: "Review Request (48hrs Post-Service)", icon: Star, description: "Automated SMS + email requesting a Google review 48 hours after job completion — when satisfaction is highest. 97% of consumers read reviews before hiring (BrightLocal 2026). Every review your technicians earn is a competitive asset in the Map Pack." },
    { title: "Referral Incentive Automation", icon: Gift, description: "69% of homeowners hired an HVAC company they had used before or that was recommended by friends and family (FIELDBOSS 2025). An automated referral program reaches satisfied clients 2 weeks after job completion with a discount offer for every new customer they refer. Tracked automatically, reward delivered via SMS. No manual follow-up required." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // REPUTATION
  // ══════════════════════════════════════════════════════════════════════
  reputationHeadline: "More 5-Star Reviews.",
  reputationHighlight: "Higher Map Pack. More Emergency Calls.",
  reputationSubheadline: "According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision, 31% ignore any HVAC company with a rating below 4.5 stars, and 74% only trust reviews from the last 90 days. For HVAC contractors, reviews are the trust signal that determines whether a homeowner calls you or the competitor listed above you in the Map Pack.",
  reputationBullets: [
    "97% of consumers read reviews before making a hiring decision — reviews determine whether a homeowner calls you or your competitor (BrightLocal 2026)",
    "31% of consumers now ignore any HVAC company with a rating below 4.5 stars — Map Pack visibility means nothing if your rating disqualifies you on sight (BrightLocal 2026)",
    "74% of consumers only trust reviews from the last 90 days — review recency matters as much as total count for Map Pack ranking and conversion (BrightLocal 2026)",
    "89% of consumers expect a business to respond to their reviews — unanswered reviews signal poor customer care to every future homeowner reading your profile (BrightLocal 2026)",
    "Systematic competitor review gap analysis — know exactly how many reviews you need to take the top Map Pack spot in your market",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Job Complete", description: "Technician completes HVAC repair, installation, or seasonal tune-up" },
    { step: "2", title: "Automated Trigger", description: "System sends SMS + email review request within 48 hours of job completion" },
    { step: "3", title: "One-Tap Review", description: "Homeowner taps link and lands directly on Google review form — zero friction" },
    { step: "4", title: "Review Posted", description: "5-star review added to Google profile, boosting Map Pack ranking" },
    { step: "5", title: "Response & Archive", description: "GrowSmallBiz responds to review within 24 hours and archives for testimonial use" },
  ],
  giftCardUseCases: "neighbor referrals, seasonal HVAC promotions, and commercial property manager appreciation",
  giftAndReferralPrograms: [
    { title: "Referral Reward Program", icon: UserPlus, description: "Automated referral program that rewards existing HVAC clients for sending new customers your way.", features: ["Automated referral tracking", "Reward delivery via SMS", "Discount on next service or maintenance plan", "Referral performance reporting"] },
    { title: "Seasonal Gift Cards", icon: Gift, description: "Sell HVAC service gift cards year-round — perfect for new homeowner gifts, neighbor referrals, and property manager appreciation.", features: ["Digital and physical gift cards", "Custom amounts", "Automated delivery", "Redemption tracking"] },
    { title: "Reputation Score Tracking", icon: BarChart3, description: "Monthly reputation report showing review count, average rating, recency trend, and competitor comparison — so you always know exactly where you stand in the Map Pack.", features: ["Monthly review velocity report", "Competitor review gap analysis", "Map Pack position tracking", "Response rate monitoring"] },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // AI VOICE & CHAT
  // ══════════════════════════════════════════════════════════════════════
  aiVoiceChatSectionHeadline: "Your 24/7 HVAC",
  aiVoiceChatHighlight: "AI Receptionist & Live Chat",
  aiVoiceChatSubheadline: "The best human receptionist clocks out at 5 PM, takes lunch breaks, calls in sick, and can only handle one call at a time. Your AI Receptionist works every hour of every day — and never lets an emergency call go to voicemail.",
  aiFeatures: [
    {
      title: "24/7 AI Voice Receptionist",
      description: "Answers every call including midnight emergencies and weekend system failures. Qualifies urgency, books service calls, and escalates genuine emergencies to your on-call technician.",
      icon: Phone,
      features: ["Answers calls in your brand voice 24/7", "Qualifies by service type and urgency level", "Books service calls into your dispatch calendar", "Transfers emergencies to on-call technician", "Sends confirmation SMS and lead summaries"],
      color: "violet",
    },
    {
      title: "AI Website Live Chat",
      description: "Intelligent website chat that answers service questions, qualifies visitors, captures leads, and books appointments — without staffing.",
      icon: MessageSquare,
      features: ["24/7 website chat coverage", "Qualifies visitors by service type", "Captures lead info from researchers", "Books appointments directly from chat", "Escalates urgent requests to callback"],
      color: "cyan",
    },
  ],

  // ── AI Receptionist Extended ──
  aiReceptionistComparisonH3: "Human Receptionist vs. AI Receptionist",
  aiReceptionistComparisonBody: "The best human receptionist clocks out at 5 PM, takes lunch breaks, calls in sick, and can only handle one call at a time. Your AI Receptionist works every hour of every day — and never lets an emergency call go to voicemail.",
  aiReceptionistComparison: [
    { human: "Works 9am-5pm Monday to Friday", ai: "Available 24/7/365 — midnight emergency calls, weekend breakdowns, holiday HVAC failures" },
    { human: "One call at a time — callers get voicemail during peak season", ai: "Handles unlimited simultaneous calls — every caller answered instantly" },
    { human: "$38,000-$52,000/year + benefits, PTO, sick leave, payroll tax", ai: "Fraction of the cost — no benefits, no PTO, no sick days, no turnover" },
    { human: "Takes lunch breaks, personal time", ai: "Zero downtime — no breaks, always at full capacity" },
    { human: "Calls in sick — no coverage during summer and winter peaks", ai: "Never sick, never on vacation — always available when demand spikes" },
    { human: "Weeks of training before productive", ai: "Live in 30 days — pre-trained on your services, pricing, and service area" },
    { human: "Cannot send booking confirmations, payment links, or SMS follow-ups", ai: "Books service calls, sends confirmations, and payment links automatically" },
    { human: "Covers phone calls only — no website chat coverage", ai: "Covers phone calls and website live chat from one unified AI system" },
    { human: "May misroute emergency vs. maintenance calls", ai: "Detects urgency level — escalates emergency system failures immediately to on-call technician" },
    { human: "Cannot transfer to a human outside business hours", ai: "Transfers to on-call technician for genuine emergencies — flags for immediate callback" },
  ],
  aiReceptionistHighlightText: "78% of HVAC customers hire the first contractor to respond — not the best technician, not the lowest price. When a homeowner's AC stops working at 2 PM and they call your number, your AI Receptionist answers within seconds, qualifies the urgency, books the service call, and sends a confirmation SMS. That job is yours before they dial the next company. Every call that goes to voicemail has an 85% chance of becoming a lost lead — a job your competitor is booking right now (ACHR News).",
  aiReceptionistImage: aiReceptionistMulticall,
  aiVoiceFeatureBullets: [
    "Answers every call 24/7 — midnight emergency calls, weekend system failures, peak season overflow",
    "Qualifies the lead by service type (emergency repair, tune-up, installation, commercial service) and urgency level",
    "Books service calls directly into your dispatch calendar — no back-and-forth, no missed scheduling windows",
    "Sends payment links for service deposits or completed jobs via SMS — collect faster without chasing invoices",
    "Confirms booked appointments automatically — arrival window SMS the day before and morning of, with technician name and contact",
    "Transfers to your on-call technician for genuine emergencies — flags after-hours system failures for immediate callback",
    "Integrates with your CRM — every lead logged automatically with full conversation summary and service type",
    "Sends lead summary to your team via SMS and email within 60 seconds of every inquiry",
  ],
  aiChatImage: aiWebsiteLivechat,
  aiChatFeatureBullets: [
    "Answers service questions, pricing queries, and availability requests instantly — 24/7, no staffing required",
    "Qualifies website visitors by service type (emergency, scheduled maintenance, installation, commercial) before routing",
    "Captures lead contact information from visitors researching system replacement or maintenance plans who are not ready to call",
    "Books service appointments directly from the chat widget — no phone call required",
    "Sends payment links for deposits via chat for clients who prefer not to call",
    "Escalates urgent emergency requests to immediate callback notification",
    "Hands off seamlessly to your AI Voice Receptionist — one unified system across phone and web",
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WHY CHOOSE US
  // ══════════════════════════════════════════════════════════════════════
  whyChooseUsHeadline: "Why HVAC Contractors",
  whyChooseUsHighlight: "Choose GrowSmallBiz",
  whyChooseUsSubtitle: "Your HVAC Marketing Partner — Not a Generalist Agency",
  whyChooseUsBody: "GrowSmallBiz Digital Marketing, founded by Subrata Guha and headquartered in Danville, CA, specializes in marketing for local service businesses including residential and commercial HVAC contractors across the United States. We bring 30+ years of enterprise marketing and digital transformation experience to the HVAC industry — combined with AI-powered tools that generalist agencies do not have.",
  whyChooseUsCards: [
    { icon: Zap, title: "Home Services Marketing Specialists", description: "GrowSmallBiz focuses exclusively on local service businesses including HVAC contractors. Specialization means we understand the emergency nature of HVAC calls, the AC repair searches that spike +266% in summer and heating repair searches that surge +594% in fall, and the specific Map Pack signals that drive bookings for HVAC contractors near me and emergency AC repair searches." },
    { icon: Shield, title: "Performance Guarantee", description: "If GrowSmallBiz does not generate leads within the pre-agreed timeframe and scope, we keep working at no additional management fee until we do. Your success is built into our contract." },
    { icon: MapPin, title: "Exclusive Territory", description: "We do not work with competing HVAC companies in the same service area. Your leads stay yours — no conflicts of interest, no shared client lists." },
    { icon: TrendingUp, title: "Proactive Seasonal Management", description: "Every HVAC client gets a 12-month seasonal marketing calendar. Google Ads campaigns ramp 4-6 weeks before summer and winter peaks — not during them, when ad costs spike and your schedule is already filling. You need Map Pack position and paid coverage established before the surge, not after it starts." },
    { icon: Bot, title: "AI-Powered Full Stack", description: "Local SEO, Google Ads, reputation management, AI receptionist, and website design — all managed under one roof. One strategy, one dashboard, one point of contact." },
    { icon: BarChart3, title: "Verified Results, Not Promises", description: "We publish verified case study data from real HVAC campaigns. The +91.47% impressions growth, the +30.23% click increase, the +83% Google Ads conversion lift, and the 41% CPA reduction — these are from actual GrowSmallBiz HVAC campaigns, not industry averages or fabricated claims." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // REAL RESULTS — 2 VERIFIED CASE STUDIES
  // ══════════════════════════════════════════════════════════════════════
  realResultsHeadline: "Real Results for HVAC,",
  realResultsHighlight: "Plumbing & Electrical Contractors",
  realResultsSubheadline: "Verified campaign data from GrowSmallBiz clients in the HVAC and home services contractor industry. Two independently verified campaigns — AI SEO and Google Ads.",
  realResults: [
    {
      campaignType: "AI SEO Campaign",
      headline: "HVAC Growth — Local SEO Campaign",
      period: "",
      metrics: [
        { value: "+91.47%", label: "Total Impressions" },
        { value: "+30.23%", label: "Organic Clicks" },
        { value: "+58.7%", label: "GBP Direction Requests" },
        { value: "Strong", label: "Local Finder Keyword Gains" },
      ],
      bodyCopy: "A GrowSmallBiz AI SEO campaign for an HVAC contractor delivered a 91.47% increase in total impressions and a 30.23% increase in clicks, with a 58.7% growth in Google Business Profile direction requests – a strong indicator of Map Pack prominence driving in-market homeowners to take action.",
      caseStudyUrl: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/",
    },
    {
      campaignType: "Google Ads PPC Campaign",
      headline: "HVAC Google PPC Growth — Google Ads Lead Generation Campaign",
      period: "",
      metrics: [
        { value: "+50.23%", label: "Click-Through Rate" },
        { value: "+83%", label: "Total Conversions" },
        { value: "+56.3%", label: "Conversion Rate" },
        { value: "-41%", label: "Cost Per Acquisition" },
      ],
      bodyCopy: "A GrowSmallBiz Google Ads campaign for an HVAC contractor delivered an 83% increase in conversions with a 56.3% improvement in conversion rate and a 41% reduction in cost per acquisition – generating significantly more qualified HVAC service calls at a lower cost per booked job.",
      caseStudyUrl: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // HOW IT WORKS — 5 STEPS
  // ══════════════════════════════════════════════════════════════════════
  howItWorksBadge: "HOW IT WORKS",
  howItWorksHeadline: "5 Steps From Invisible to Fully Booked",
  howItWorksHighlight: "Fully Booked",
  processSteps: [
    { step: "01", icon: ClipboardList, title: "Discovery & Competitive Audit", description: "We start with a full audit of your current online presence — Google Business Profile, website performance, review count, local rankings, competitor Map Pack positions, and emergency call coverage gaps — before recommending a single tactic. You cannot fix what you have not measured.", deliverable: "Deliverable: Custom marketing roadmap with seasonal campaign calendar and competitive gap analysis." },
    { step: "02", icon: Search, title: "Local SEO & GBP Foundation", description: "Local SEO for HVAC companies begins with your Google Business Profile — optimized from category selection to service areas, weekly posts, and emergency service signals. Citation building and on-site location signals follow. This is the foundation every other channel builds on.", deliverable: "Deliverable: Fully optimized GBP, citation audit and cleanup, on-site local SEO implementation." },
    { step: "03", icon: Target, title: "Paid Campaign Launch", description: "Google Local Services Ads launch first for immediate emergency and high-intent coverage. Standard Google Ads follow with seasonal campaigns timed 4 to 6 weeks ahead of each demand surge. Every campaign includes conversion tracking from click to call to booked service call.", deliverable: "Deliverable: Live LSA and Google Ads campaigns with conversion tracking and seasonal budget calendar." },
    { step: "04", icon: Star, title: "Review Velocity & Reputation", description: "Systematic review generation begins immediately — automated SMS and email requests 48 hours after every completed job. Review monitoring, response management, and competitor gap tracking run continuously throughout the engagement.", deliverable: "Deliverable: Automated review request system, monthly reputation report, Map Pack position tracking." },
    { step: "05", icon: TrendingUp, title: "Reporting & Optimization", description: "Every month you receive a full performance report: Map Pack rankings, call volume, cost per lead, conversion rate, and seasonal trend analysis. We optimize campaigns based on data, not assumptions — and you see exactly where every dollar goes.", deliverable: "Deliverable: Monthly performance report, optimization summary, and next-month campaign plan." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WHO THIS IS FOR
  // ══════════════════════════════════════════════════════════════════════
  whoThisIsForHeadline: "Is GrowSmallBiz Right for Your HVAC Company?",
  whoThisIsForHighlight: "Right for Your",
  whoThisIsForBadge: "WHO THIS IS FOR",
  strongFitLabel: "Strong Fit",
  notFitLabel: "Not the Right Fit",
  strongFitItems: [
    "Established HVAC company with at least one or two trucks running and consistent service call volume",
    "Currently paying Angi, HomeAdvisor, or Thumbtack for shared leads and want to eliminate that dependency",
    "Ready to invest in owned marketing for at least 6 months — SEO and reputation building are not overnight results",
    "Want a seasonal marketing calendar — summer AC ramp and winter heating ramp — not reactive ad spend",
    "Looking for an experienced specialist agency that understands HVAC emergency call behavior, seasonal demand patterns, and local search dynamics",
    "Commercial HVAC contracts, property manager relationships, or maintenance plan programs are part of your growth goal",
    "HVAC companies with active residential and commercial services looking to build a predictable inbound lead pipeline independent of aggregator platforms",
  ],
  notFitItems: [
    "Solo operators in their first year who are not yet generating consistent HVAC revenue",
    "Companies looking for a one-time website build with no ongoing marketing strategy",
    "Businesses not prepared to respond to leads quickly — our system generates calls, but your team needs to answer them",
    "Companies unwilling to request reviews from clients — reputation management requires participation from your technicians",
  ],
  midPageCta: {
    headline: "Sound Like Your Business?",
    subtext: "Let's talk about what owning your local HVAC market actually looks like. Free 30-minute strategy session, no commitment.",
    primaryLabel: "Schedule Your Free Strategy Call",
    position: "afterWhoThisIsFor",
  },

  // ══════════════════════════════════════════════════════════════════════
  // CASE STUDY LINKS
  // ══════════════════════════════════════════════════════════════════════
  caseStudyLinks: [
    { title: "AI SEO Case Study: HVAC Contractors", description: "How GrowSmallBiz delivered +91.47% impressions, +30.23% clicks, and +58.7% GBP direction requests for an HVAC contractor with a targeted AI SEO campaign.", url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/", icon: Search },
    { title: "Google Ads Case Study: HVAC Contractors", description: "How GrowSmallBiz delivered +83% conversions, +56.3% conversion rate, and -41% CPA for an HVAC contractor Google Ads campaign.", url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/", icon: Target },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // FAQ — 8 CATEGORIES
  // ══════════════════════════════════════════════════════════════════════
  faqHeadline: "HVAC Contractor",
  faqHighlight: "Marketing FAQs",
  faqSubheadline: "Common questions from residential and commercial HVAC contractors — organized by topic",
  faqCategories: [
    {
      id: "local-seo", label: "Local SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to get leads from SEO for an HVAC company?", answer: "Most HVAC companies see measurable movement in Google Map Pack rankings within 60 to 90 days of starting a managed SEO program. Top 3 Map Pack positions in competitive markets typically take 4 to 6 months of consistent optimization. Emergency and near me keywords tend to rank faster than broader service terms because intent is immediate and Google weights proximity heavily. For faster results in the first 90 days, GrowSmallBiz runs Google Local Services Ads in parallel so you are generating qualified service calls from day one while SEO builds." },
        { question: "Is local SEO worth it for a small HVAC company?", answer: "Yes — local SEO is the highest-ROI long-term marketing investment for an HVAC company because it builds organic Map Pack visibility that generates calls without a per-click cost. A well-optimized Google Business Profile with strong review velocity consistently generates inbound emergency calls and seasonal tune-up requests without ongoing ad spend. The tradeoff is time: local SEO takes 60 to 90 days to show measurable movement. Run local SEO in parallel with Google LSA for immediate emergency coverage while SEO builds." },
      ],
    },
    {
      id: "paid-media", label: "Google Ads", icon: Target, color: "blue",
      faqs: [
        { question: "What is the difference between Google Local Services Ads and Google Ads for HVAC contractors?", answer: "Google Local Services Ads appear above all other results, carry the Google Guarantee badge, and charge per verified lead — not per click. They are the best option for emergency and high-intent HVAC searches where homeowners need immediate service. Standard Google Ads charge per click and give more control over keywords, landing pages, and targeting — making them better for seasonal campaigns like pre-summer AC tune-up and fall furnace inspection. GrowSmallBiz recommends running both simultaneously: LSA for emergency queries, Google Ads for seasonal and service-specific campaigns." },
        { question: "What digital marketing works best for HVAC contractors?", answer: "The highest-impact channels for HVAC contractors are Google Local Services Ads for emergency and high-intent searches, Local SEO and Google Business Profile optimization for Map Pack visibility, and reputation management to build the review count that drives click-through rates. HVAC benefits from a combined approach because buyers operate across two intent modes: emergency, which is immediate and Map Pack-driven, and planned, which covers tune-ups, maintenance plans, and system replacement. GrowSmallBiz structures campaigns to capture both buyer types simultaneously." },
      ],
    },
    {
      id: "strategy", label: "Strategy", icon: Lightbulb, color: "amber",
      faqs: [
        { question: "How do I stop relying on Angi and HomeAdvisor for HVAC leads?", answer: "The fastest path away from lead aggregators is building Google Business Profile review velocity and activating Google Local Services Ads simultaneously — achievable within the first 8 to 12 weeks. After that, service-area landing pages targeting city-specific HVAC keywords provide organic lead flow over months 3 to 6. Most HVAC contractors who follow this sequence reduce cost-per-lead significantly within six months because they own the channel instead of renting access to shared leads sold to multiple competitors." },
        { question: "How does AI search affect my HVAC business?", answer: "According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools like ChatGPT, Perplexity, and Google AI Overviews to find local services — up from just 6% one year ago. Yet SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. HVAC companies that only have traditional SEO are invisible to the growing segment of homeowners who start their contractor search on AI platforms. AEO and GEO optimization ensures your HVAC company appears in AI-generated recommendations — a channel growing rapidly and almost entirely uncontested among local HVAC contractors right now." },
        { question: "Does GrowSmallBiz handle seasonal marketing for HVAC companies?", answer: "Yes — GrowSmallBiz builds a 12-month seasonal marketing calendar for every HVAC client, ramping Google Ads budgets 4 to 6 weeks before each peak season rather than during it. AC repair searches spike +266% from February to July and heating system repair searches surge +594% in fall (WebFX). You need your campaigns live before the surge, not after it starts. This includes activating seasonal landing pages for summer AC tune-up, fall furnace inspection, and emergency service coverage, and launching review push campaigns ahead of demand surges." },
      ],
    },
    {
      id: "investment", label: "Investment", icon: DollarSign, color: "violet",
      faqs: [
        { question: "What does HVAC digital marketing cost?", answer: "HVAC marketing costs vary by market, competitive density, and the services included — GrowSmallBiz does not display fixed pricing because a company competing in a major metro faces a different landscape than one serving a smaller suburban area. The investment depends on your current online presence, your growth goals, and which channels make sense for your market. GrowSmallBiz offers a free 30-minute strategy session to assess your situation and provide a clear picture of what investment is appropriate before any commitment." },
      ],
    },
    {
      id: "website-design", label: "Website Design", icon: Palette, color: "sky",
      faqs: [
        { question: "Do I need a new website before starting SEO or Google Ads for my HVAC company?", answer: "Not always, but your website must meet minimum conversion standards — mobile speed under 3 seconds, click-to-call above the fold on every page, emergency availability signal, and service-specific landing pages. If your current site fails those, we build a new one first because sending emergency search traffic to a weak site wastes your budget." },
        { question: "How long does it take to build an HVAC website?", answer: "Typically 3-4 weeks from kickoff to launch. We build conversion-focused sites specifically for HVAC contractors — not generic templates — so the development timeline is tight and the output is immediately SEO-ready, with emergency service signals, service area pages, and review integration in place from day one." },
      ],
    },
    {
      id: "social-media", label: "Social Media", icon: Megaphone, color: "rose",
      faqs: [
        { question: "Which social media platforms work best for HVAC companies?", answer: "Facebook is the primary platform for residential HVAC — seasonal tips, emergency preparedness posts, and before-and-after system replacement photos perform strongly with homeowners aged 35-65. LinkedIn is the right platform for commercial HVAC and property manager outreach. Nextdoor is effective for hyper-local neighborhood targeting where trust and neighbor recommendations carry significant weight. We allocate 80% of your social effort to your two highest-ROI platforms before expanding." },
      ],
    },
    {
      id: "ai-receptionist", label: "AI Receptionist", icon: PhoneCall, color: "emerald",
      faqs: [
        { question: "What happens when a homeowner calls after hours with an HVAC emergency?", answer: "Your AI Receptionist answers every call 24/7 — midnight system failures, weekend breakdowns, and holiday emergencies. It qualifies the urgency level, captures contact details, books a service call or callback, and sends you a lead summary via SMS within 60 seconds. For genuine emergencies, it transfers directly to your on-call technician. No call goes to voicemail." },
        { question: "Can the AI Receptionist handle commercial HVAC inquiries differently from residential calls?", answer: "Yes. The AI Receptionist is configured to route and qualify leads by service type – residential emergency repair, seasonal tune-up scheduling, commercial property inquiries, and maintenance plan requests are each handled with the appropriate qualification questions and escalation paths." },
      ],
    },
    {
      id: "ai-growth", label: "AI Growth System", icon: Zap, color: "violet",
      faqs: [
        { question: "What is the AI Client Growth System and how is it different from a regular CRM?", answer: "A standard CRM stores contacts. The AI Client Growth System captures every HVAC lead automatically, sends instant follow-up sequences, qualifies leads by service type and urgency, books service calls, triggers review requests 48 hours after job completion, sends seasonal tune-up reminders, and runs maintenance plan enrollment campaigns – without any manual input from your team. It replaces five or six disconnected tools with one integrated system." },
        { question: "How quickly can the AI Growth System be set up for an HVAC company?", answer: "The core system – AI Receptionist, inquiry automation, and review request sequences – is live within 30 days. The full marketing automation suite including seasonal campaigns and maintenance plan enrollment workflows is typically complete within 60 days of kickoff." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "More Questions About HVAC Contractor Marketing?",
    body: "Get a personalized walkthrough of our SEO, Google Ads, and AI systems for your specific market and service area.",
    signoff: "Let's build your exclusive lead pipeline.",
  },

  // ══════════════════════════════════════════════════════════════════════
  // STICKY CTA + CONTACT
  // ══════════════════════════════════════════════════════════════════════
  stickyCtaConfig: {
    title: "Ready for an HVAC Marketing System That Fills Your Schedule Year-Round?",
    description: "Let's discuss a custom marketing strategy for your service area, seasonal demand pattern, and growth goals.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Year-Round"],
    showAfterScroll: 800,
  },
  contactSectionHeadline: "Ready to Grow Your HVAC Business?",
  contactSectionBody: "Schedule a strategy call to discuss your marketing goals, service area, and what a seasonal campaign calendar looks like for your specific HVAC market.",
};
