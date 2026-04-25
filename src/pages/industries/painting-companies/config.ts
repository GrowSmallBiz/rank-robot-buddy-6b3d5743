import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Search, TrendingUp, Star, Target, Calendar,
  Bot, Globe, Megaphone, Mail, Phone, MessageSquare, Shield, Clock,
  Heart, Eye, Repeat, DollarSign, RefreshCw, MapPin, BarChart3,
  Gift, CalendarCheck, Lightbulb, UserPlus,
  FileText, ClipboardList, Building2, Linkedin, Instagram, Facebook,
  Youtube, Zap, Layers, Palette, PhoneCall, Paintbrush, Home,
} from "lucide-react";

// Painting-specific images
import heroImage from "@/assets/painting-companies/painting-hero.webp";
import websiteScreenshot from "@/assets/painting-companies/painting-website-screenshot.webp";
import residentialInteriorSeo from "@/assets/painting-companies/residential-interior-seo.webp";
import residentialExteriorSeo from "@/assets/painting-companies/residential-exterior-seo.webp";
import commercialPaintingSeo from "@/assets/painting-companies/commercial-painting-seo.webp";
import springExteriorPainting from "@/assets/painting-companies/spring-exterior-painting.webp";
import fallInteriorPainting from "@/assets/painting-companies/fall-interior-painting.webp";
import commercialPainting from "@/assets/painting-companies/commercial-painting-ad.webp";
import residentialPainting from "@/assets/painting-companies/residential-painting.webp";
import newConstructionPainting from "@/assets/painting-companies/new-construction-painting.webp";
import aiReceptionistMulticall from "@/assets/painting-companies/ai-receptionist-painting.webp";
import aiWebsiteLivechat from "@/assets/painting-companies/ai-website-chat-painting.webp";

export const paintingCompaniesConfig: NicheConfig = {
  // ══════════════════════════════════════════════════════════════════════
  // 4.1  PAGE META
  // ══════════════════════════════════════════════════════════════════════
  pageTitle: "Marketing Agency for Painting Companies | GrowSmallBiz",
  metaDescription: "GrowSmallBiz: Digital marketing for painting companies: Get more leads with AI SEO, Google Ads, and AI marketing solution. Book your strategy call!",
  canonicalUrl: "/home-service-contractors/painting-companies-marketing/",
  serviceName: "Marketing Agency for Painting Companies",
  serviceType: "Digital Marketing for Residential and Commercial Painting Contractors",
  serviceDescription: "GrowSmallBiz Digital Marketing is a digital marketing agency headquartered in Danville, CA, specializing in Local SEO, Google Ads, and AI-powered marketing systems for residential and commercial painting contractors across the United States.",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Home Service Contractors", url: "/home-service-contractors/" },
    { name: "Painting Companies Marketing", url: "/home-service-contractors/painting-companies-marketing/" },
  ],
  offerCatalog: {
    name: "Painting Company Marketing Services",
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
  // 4.2  HERO SECTION
  // ══════════════════════════════════════════════════════════════════════
  heroImage: heroImage,
  badgeIcon: Paintbrush,
  badgeText: "Painting Companies Marketing",
  h1Line1: "The Marketing Agency That Fills Your Painting Schedule",
  h1Highlight: "Year-Round",
  h1Line2: "",
  heroSubheadline: "GrowSmallBiz combines Local SEO, Google Ads, and AI-powered lead capture to put your residential or commercial painting company in front of property owners the moment they need you — and convert that visibility into booked jobs.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "See Our Services",
  secondaryCtaAnchor: "#solutions",
  statsBar: [
    { value: "24/7", label: "AI lead capture — every painting inquiry answered" },
    { value: "6", label: "AI platforms monitored for your visibility" },
    { value: "40%+", label: "of property owners use AI for contractor research" },
    { value: "5-7 Days", label: "from kickoff to campaigns going live" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // HERO EXTENDED
  // ══════════════════════════════════════════════════════════════════════
  heroExtendedHeadline: "From Scattered to Systematic",
  heroExtendedHighlight: "Systematic",
  heroExtended: [
    {
      icon: Eye,
      headline: "Get Found Everywhere Your Buyers Search",
      body: "Google Maps, organic search, and AI platforms like ChatGPT and Perplexity are all being used by homeowners and property managers looking for painters. We make your painting business visible in all three.",
    },
    {
      icon: Phone,
      headline: "Capture Every Lead — Including the After-Hours Ones",
      body: "A homeowner deciding on a painter at 9 PM on a Sunday will call whoever responds first. Our AI Receptionist answers, qualifies, and logs every inquiry — so you wake up to a pipeline, not missed calls.",
    },
    {
      icon: Calendar,
      headline: "Market Ahead of Seasonal Demand — Not Behind It",
      body: "Spring exterior season and fall interior refresh are your biggest revenue windows. We ramp campaigns 4-6 weeks before peak demand so your schedule fills before competitors have even turned their ads on.",
    },
    {
      icon: Star,
      headline: "Build the Reputation That Wins the Bid",
      body: "Before a homeowner calls you, they have read your reviews. We automate review generation, manage your reputation across Google and Yelp, and turn satisfied customers into your most powerful marketing channel.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.3  PAIN POINTS
  // ══════════════════════════════════════════════════════════════════════
  painPointsHeadline: "Painting Companies",
  painPointsHighlight: "Marketing Challenges",
  painPointsSubheadline: "The best painters in every market lose bids every week to competitors who rank higher, respond faster, and have more reviews. Here is what we hear from painting contractors in their first call with us.",
  painPoints: [
    {
      icon: Search,
      title: "Invisible on Google When It Matters Most",
      description: "The U.S. painting contractor market has 223,000 businesses competing for local customers, with no single company controlling more than 5% of market share. In this fragmented landscape, Map Pack position is the primary competitive differentiator — the top three results capture the majority of clicks on any local painting search. Your competitors rank for painters near me and exterior painting contractors. You do not. Every search that does not find you is a bid that goes to someone else.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "Paying for Shared Leads That Go to Multiple Contractors",
      description: "Lead aggregators like Angi and Thumbtack sell the same painting inquiry to up to four contractors simultaneously. With 223,000 painting businesses competing nationally, shared leads create a race to the bottom on price — not a path to sustainable growth. The contractor who responds first wins the conversation; the others paid the same lead fee for nothing. Owned marketing through local SEO and Google Ads delivers exclusive, inbound leads that belong to you.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Calendar,
      title: "Missing the Seasonal Window Every Year",
      description: "Spring exterior season and fall interior refresh fill up fast. Most painting companies start marketing reactively — when the phone goes quiet — and spend the peak season scrambling. A proactive seasonal calendar changes that.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Bot,
      title: "After-Hours Calls Going to a Competitor Who Picked Up",
      description: "A homeowner deciding on a painter at 9 PM will call whoever picks up — or gets an immediate response. AI-powered lead capture ensures every call, form, and chat is captured and qualified — regardless of when it comes in.",
      hasImage: false,
      showAILogos: true,
    },
    {
      icon: Star,
      title: "Not Enough Reviews to Win the Bid Before You Even Quote",
      description: "According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision — and 31% now ignore any painting business with a rating below 4.5 stars. Before a homeowner invites you to bid, they have already read your reviews and compared your rating against three competitors. If they have 200 reviews and you have 30, you are losing bids before the first phone call. Systematic review generation closes that gap with automated post-job requests that capture reviews when satisfaction is highest.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Globe,
      title: "A Website That Doesn't Convert Visitors Into Quote Requests",
      description: "Most painting company websites look outdated, load slowly on mobile, and fail to turn visitors into calls. A homeowner who finds you on Google has five seconds to decide whether to call or go back to search results.",
      hasImage: false,
      showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of juggling disconnected tools and chasing bids from aggregators, GrowSmallBiz builds a complete marketing system that generates exclusive, inbound leads from homeowners and property managers in your service area.",

  // ══════════════════════════════════════════════════════════════════════
  // INDUSTRY STATS
  // ══════════════════════════════════════════════════════════════════════
  industryStats: {
    headline: "The Market You're",
    headlineHighlight: "Competing In",
    subheadline: "Verified industry data — the scale of the market your painting business operates in and why local visibility determines who wins.",
    items: [
      {
        value: "$28.2B",
        label: "U.S. house painting and decorating contractor industry revenue in 2025",
        source: "IBISWorld 2025",
        sourceUrl: "https://www.ibisworld.com/united-states/industry/house-painting-decorating-contractors/5738/",
      },
      {
        value: "223,000",
        label: "painting businesses competing for local market share across the U.S.",
        source: "IBISWorld 2025",
        sourceUrl: "https://www.ibisworld.com/united-states/industry/house-painting-decorating-contractors/5738/",
      },
      {
        value: "<5%",
        label: "market share held by any single painting company — local Google visibility is the primary differentiator",
        source: "IBISWorld 2025",
        sourceUrl: "https://www.ibisworld.com/united-states/industry/house-painting-decorating-contractors/5738/",
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
  // 4.4  SYSTEM DIAGRAM
  // ══════════════════════════════════════════════════════════════════════
  systemDiagramHeadline: "See How It All Works Together",
  systemDiagramBody: "GrowSmallBiz builds a predictable marketing system for residential and commercial painting contractors: Local SEO and Google Business Profile optimization captures property owners in the research phase, Google Ads and Local Services Ads captures high-intent buyers immediately, reputation management drives the review velocity that wins bids, and AI-powered lead capture ensures no call or inquiry is missed — including after-hours requests when homeowners are making their final decision. Every channel works together, not in isolation.",

  // ══════════════════════════════════════════════════════════════════════
  // 4.5  MID-PAGE CTA BLOCKS
  // ══════════════════════════════════════════════════════════════════════
  ctaAfterPainPoints: {
    headline: "Ready to Stop Competing for Shared Leads?",
    subtext: "Let's build your exclusive, inbound lead pipeline for your painting business.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Call Us",
  },
  ctaAfterSeo: {
    headline: "See Where Your Painting Business Ranks — Free Local SEO Audit",
    subtext: "Find out exactly where your business appears across Google Search, Google Maps, and AI search platforms — and where your competitors are outranking you.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See the AI Client Growth System for Painting Companies in Action",
    subtext: "Watch how automated lead capture, seasonal campaigns, and referral automation work together to fill your painting schedule — without you chasing every call.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4.6  ON THIS PAGE NAV
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
  // CORE SERVICES OVERVIEW
  // ══════════════════════════════════════════════════════════════════════
  coreServicesHeadline: "Our Integrated Marketing System for",
  coreServicesHighlight: "Residential and Commercial Painting Companies",
  coreServicesSubheadline: "Every service works together. No gaps between channels. One team, one strategy, one dashboard.",
  coreServices: [
    {
      icon: Search,
      title: "Local SEO & Google Business Profile",
      whatWeDo: "Rank in the Map Pack for painters near me and painting contractor searches — the queries that convert directly to booked bids.",
      impact: "More inbound calls from homeowners and property managers actively searching for painters right now.",
    },
    {
      icon: Globe,
      title: "Conversion-Focused Website Design",
      whatWeDo: "A fast, mobile-first website built to convert quote requests — featuring before/after galleries, trust signals, and forms designed to get submitted.",
      impact: "Visitors who find you on Google become callers and quote requests instead of bouncing to a competitor.",
    },
    {
      icon: Target,
      title: "Google Ads (LSA + PPC) & Meta Ads",
      whatWeDo: "Google Local Services Ads for high-intent painting searches; Google PPC and Meta Ads for seasonal campaigns ramped 4-6 weeks before peak demand.",
      impact: "Exclusive inbound leads at a predictable cost per acquisition — not shared leads from aggregator platforms.",
    },
    {
      icon: Star,
      title: "Reputation Management",
      whatWeDo: "Systematic review generation across Google and Yelp that builds the review count and recency your Map Pack ranking depends on.",
      impact: "Higher Map Pack position, stronger click-through rate, and more trust from homeowners comparing painters.",
    },
    {
      icon: Phone,
      title: "AI Receptionist & 24/7 Lead Capture",
      whatWeDo: "AI-powered voice and chat that answers, qualifies, and logs every lead — after-hours calls, weekend inquiries, and commercial bid requests.",
      impact: "Zero missed leads regardless of when or how a homeowner or property manager reaches out.",
    },
    {
      icon: RefreshCw,
      title: "Lead Nurture & Client Reactivation",
      whatWeDo: "Automated email and SMS sequences that follow up with every open quote, re-engage past clients ahead of exterior repainting season, and keep your company top-of-mind for repeat projects and referrals between jobs.",
      impact: "More booked projects from estimates already in your pipeline — and repeat revenue from homeowners and property managers who used you before.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // STAGED APPROACH
  // ══════════════════════════════════════════════════════════════════════
  stagedApproachBadge: "WHERE TO START",
  stagedApproachHeadline: "You Don't Have to Do",
  stagedApproachHighlight: "Everything at Once",
  stagedApproachSubheadline: "Most painting companies try to launch SEO, Google Ads, a new website, and automation all at the same time — then wonder why nothing gets traction. GrowSmallBiz uses a staged approach that builds each layer on a solid foundation, so every dollar you invest compounds on the one before it.",
  stagedApproachStages: [
    {
      stage: "Stage 1",
      label: "Quick Wins",
      timeline: "30-90 Days",
      icon: Zap,
      color: "emerald",
      services: [
        "Conversion-focused website design",
        "Google Business Profile full optimization",
        "Google Local Services Ads (LSA) setup and Google Guarantee verification",
        "Reputation management + automated review requests (48-hour post-job)",
        "AI Receptionist — 24/7 call and chat capture",
        "Referral automation system setup",
      ],
      unlocks: "Immediate inbound calls, Map Pack presence, and zero missed leads — before investing in longer-term channels.",
    },
    {
      stage: "Stage 2",
      label: "Growth",
      timeline: "3-6 Months",
      icon: TrendingUp,
      color: "blue",
      services: [
        "Managed AI SEO — local keyword rankings across your service area",
        "Google Ads (PPC) — seasonal campaigns timed 4-6 weeks before spring exterior and fall interior peaks",
        "City and service area landing pages for local keyword coverage",
        "Review velocity building — Map Pack position consolidation",
        "Meta Ads — awareness and retargeting for homeowners in your market",
      ],
      unlocks: "Organic rankings that generate leads without ad spend, and paid campaigns that compound on your established credibility.",
    },
    {
      stage: "Stage 3",
      label: "Scale",
      timeline: "6-12 Months",
      icon: BarChart3,
      color: "orange",
      services: [
        "Full funnel marketing automation — inquiry to repeat client",
        "Commercial and property manager contract acquisition campaigns",
        "Content cluster and topical authority building — own every painting search in your market",
        "AI search visibility tracking across 6 platforms",
        "Social media organic campaign management",
        "Retargeting across Google Display and Meta",
      ],
      unlocks: "Market dominance — appearing everywhere property owners search, across every channel, with a fully automated lead and retention system.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.7  WEBSITE DESIGN
  // ══════════════════════════════════════════════════════════════════════
  websiteDesignBadge: "Painting Company Website Design",
  websiteDesignHeadline: "Websites Built to Convert Painting Company Visitors",
  websiteDesignHighlight: "Into Calls and Quote Requests",
  websiteDesignSubheadline: "Most painting company websites look outdated, load slowly on mobile, and fail to convert the homeowner who found you on Google. We build fast, mobile-first websites that turn search traffic into booked bids.",
  websiteDesignImage: websiteScreenshot,
  websiteDesignFeatureHeadline: "Websites That Work as Hard as Your Crew",
  websiteDesignFeatureBody: "A conversion-focused website for a painting contractor must accomplish three specific things: load in under 3 seconds on mobile, make it effortless for a homeowner to call or request a quote, and signal enough credibility that a first-time visitor trusts you before picking up the phone. According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision — and 31% now ignore any business with a rating below 4.5 stars. A painting company website that integrates Google and Yelp reviews prominently, displays before-and-after project photos, and loads fast on mobile converts research intent into quote requests. GrowSmallBiz builds sites that accomplish all three from day one.",
  websiteDesignBullets: [
    "Mobile-first design that loads in under 3 seconds on any device",
    "Service-specific pages for interior painting, exterior painting, commercial painting, and specialty finishes",
    "Before-and-after photo galleries that build visual credibility and showcase your quality",
    "Google Business Profile integration and local schema markup",
    "Quote request forms designed to get submitted — not abandoned",
    "City and neighborhood-specific landing pages for local SEO",
    "Review integration displaying your Google and Yelp ratings prominently",
    "Emergency contact button visible on every page for quick estimates",
  ],
  aiSearchCalloutHeadline: "Google Still Drives Most Painting Leads.",
  aiSearchCalloutHighlight: "But AI Search Is Changing How Property Owners Find You.",
  aiSearchCalloutBody: "According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools like ChatGPT, Gemini, and Perplexity to find local services — up from just 6% one year ago. AI is now the third most popular source of local business recommendations, behind only Google and Facebook. Yet SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. When a homeowner asks an AI assistant which painting contractor to hire, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz optimizes your website and content for both Google and AI answer engines simultaneously, so your painting business is in the 1.2% that gets recommended — not the 98.8% that AI ignores.",
  aiSearchStats: [
    { value: "45%", label: "of consumers now use AI tools for local service recommendations (BrightLocal 2026)" },
    { value: "1.2%", label: "of local businesses are recommended by ChatGPT — the rest are invisible (SOCi 2026)" },
    { value: "24/7", label: "continuous AI search monitoring and optimization across 6 platforms" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.8  SEO SECTION
  // ══════════════════════════════════════════════════════════════════════
  seoBadge: "AI-Powered SEO for Painting Companies",
  seoHeadline: "Local SEO That Puts Your Painting Company",
  seoHighlight: "at the Top of Google Maps",
  seoSubheadline: "Comprehensive local search optimization that drives quote requests, seasonal bookings, and commercial inquiries from homeowners and property managers across your service area.",
  seoEditorialHeadline: "Why Painting Contractor SEO Works",
  seoEditorialHighlight: "Differently",
  seoEditorialBody: [
    "The U.S. house painting and decorating contractor industry generates $28.2 billion annually across 223,000 businesses, with no single company controlling more than 5% of market share. In this highly fragmented market, local Google visibility is the primary competitive differentiator. The painting company that appears first in the Map Pack with strong reviews consistently wins more bids than competitors doing equal or better work — because most homeowners never scroll past the first three results.",
    "The Map Pack algorithm rewards three signals above all others: proximity to the searcher, review count and recency, and relevance of your Google Business Profile to the search query. GrowSmallBiz optimizes all three systematically — not just your website, but your GBP, your citations, your review velocity, and your local content.",
    "Seasonal demand creates a specific SEO challenge that general agencies miss. Exterior painting searches spike in spring and fall. If your rankings are not established before the season starts, you miss the window entirely. We build your local authority year-round so you own the Map Pack when it matters most.",
    "AEO and GEO optimization go a step further — structuring your website content so AI platforms like ChatGPT, Perplexity, and Google AI Overviews cite your painting business when property owners ask for contractor recommendations. According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools to find local services — up from just 6% one year ago, making AI the third most popular source of local business recommendations behind only Google and Facebook. Yet SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. The painting companies that structure their content for AI citation now will own these recommendations while competitors are still unaware the channel exists.",
  ],
  seoEditorialPullQuote: "The U.S. painting contractor industry generates $28.2 billion annually across 223,000 businesses with no single company holding more than 5% market share — making local Map Pack position and AI search visibility the two most consequential competitive differentiators for residential and commercial painters in any U.S. market.",
  seoKeywordCategories: {
    residentialInterior: {
      label: "Residential Interior",
      icon: Paintbrush,
      image: residentialInteriorSeo,
      keywords: [
        "interior painters near me",
        "interior painting contractors",
        "house painter near me",
        "interior painting cost",
      ],
      competitors: "Local painting companies, national franchise painters, Angi and Thumbtack contractor listings",
    },
    residentialExterior: {
      label: "Residential Exterior",
      icon: Home,
      image: residentialExteriorSeo,
      keywords: [
        "exterior painters near me",
        "exterior house painting",
        "house painting contractor",
        "exterior painting cost",
      ],
      competitors: "Local painting contractors, national franchise painters, HomeAdvisor and Angi listings",
    },
    commercial: {
      label: "Commercial Painting",
      icon: Building2,
      image: commercialPaintingSeo,
      keywords: [
        "commercial painting contractors",
        "commercial painters near me",
        "painting contractor for apartments",
        "commercial building painters",
      ],
      competitors: "Commercial painting firms, national contractors, property management vendor lists",
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // FOUR-LANE SEARCH DOMINANCE
  // ══════════════════════════════════════════════════════════════════════
  fourLaneBadge: "SEARCH DOMINANCE",
  fourLaneHeadline: "One Search Market.",
  fourLaneHighlight: "Four Ways to Win It.",
  fourLaneSubheadline: "When a homeowner needs interior or exterior painting, or a property manager needs a commercial repaint, they search in four completely different ways — and each one requires a different strategy. GrowSmallBiz builds your presence across all four simultaneously so you own your market regardless of how your next customer searches.",
  fourLaneLanes: [
    {
      lane: "Map Pack",
      icon: MapPin,
      color: "emerald",
      headline: "Win the Local 3-Pack",
      description: "The Map Pack appears above all organic results for local painting searches and is driven by Google Business Profile optimization, review velocity, citation consistency, and proximity signals. It is the highest-click position for painters near me and painting contractor searches.",
      howWeDoIt: [
        "Full GBP optimization — categories, services, photos, weekly posts",
        "Systematic review generation — automated 48-hour post-job SMS and email request",
        "Local citation building across 50+ directories for NAP consistency",
        "GBP heatmap tracking — visualize your Map Pack rank across your entire service area",
      ],
    },
    {
      lane: "LSA",
      icon: Shield,
      color: "blue",
      headline: "Appear Above All Ads",
      description: "Google Local Services Ads appear above standard Google Ads and organic results with the Google Guarantee badge. They charge per verified lead, not per click. The highest-intent painting buyers click here first.",
      howWeDoIt: [
        "LSA account setup and Google Guarantee verification",
        "Budget optimization — pay per verified call lead, not per click",
        "Review-gated eligibility — we build your review count to qualify and maintain status",
        "High-intent painting keyword coverage — capture ready-to-hire searchers instantly",
      ],
    },
    {
      lane: "Organic Search",
      icon: Search,
      color: "amber",
      headline: "Own the Research Queries",
      description: "Homeowners researching painting costs, comparing contractors, or planning exterior repaints find you through organic rankings. These buyers convert over days or weeks and represent the largest search volume and lowest long-term cost per acquisition.",
      howWeDoIt: [
        "Service pages optimized for interior, exterior, and commercial painting keywords",
        "City and neighborhood landing pages — rank for location-specific searches across your service area",
        "Blog content targeting research queries — cost guides, seasonal tips, how-to content",
        "Topical authority building — own every relevant search cluster in your local market",
      ],
    },
    {
      lane: "AI Search",
      icon: Bot,
      color: "purple",
      headline: "Get Cited by AI Assistants",
      description: "When a homeowner asks ChatGPT, Perplexity, or Google AI Overview which painting contractor to hire, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz structures your content to be cited by AI answer engines.",
      howWeDoIt: [
        "Entity optimization — ensure AI engines recognize your business as a verified local painting authority",
        "Structured content — FAQ sections, entity blocks, and standalone citable sentences throughout your site",
        "AI visibility tracking across 6 platforms — ChatGPT, Gemini, Perplexity, Grok, Copilot, Google AI",
        "Citation monitoring — track which queries your business appears in vs. competitors monthly",
      ],
    },
  ],
  searchComparisonTitle: "Two Ways Property Owners Find You Today",
  searchComparisonSubtitle: "Your business needs to show up in both — and most of your competitors are only optimized for one.",
  searchComparisonPanels: [
    {
      type: "traditional",
      label: "Traditional Google Search",
      query: "painters near me",
      items: [
        "[LSA] Top Coat Painting – Google Guaranteed 312 reviews",
        "[LSA] Premier Painters – Google Guaranteed",
        "Map Pack – Valley Painting Co 156 reviews",
        "Map Pack – Precision Paint 203 reviews",
        "Map Pack – Bay Painters 89 reviews",
        "Organic results – 10 blue links below the fold",
      ],
      caption: "LSA + Map Pack + Page 1 organic = full search coverage. Miss any one and a competitor gets the call.",
    },
    {
      type: "ai",
      label: "AI Search – ChatGPT and Perplexity",
      query: "Which painting contractor should I hire for my exterior repaint?",
      items: [
        "Based on local reviews, verified service history, and online presence, painting companies with GEO-optimized content are consistently cited for painting services in their target markets.",
        "Sources cited: Google Reviews, Yelp, company website, local city pages, service pages",
        "AI engines build answers from structured content, entity signals, and citation footprint – not keyword density.",
      ],
      caption: "AI search skips the link list entirely. If your content is not structured for citation, your business does not exist in this channel.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.9  PAID MEDIA
  // ══════════════════════════════════════════════════════════════════════
  paidMediaHeadline: "We Run High-Converting Google Ads for",
  paidMediaHighlight: "Residential and Commercial Painting Companies",
  paidMediaSubheadline: "Strategic paid advertising by service type and buyer intent – interior repaints, exterior season campaigns, and commercial property manager targeting each require a different campaign approach.",
  adCreatives: [
    { id: "spring-exterior", genre: "Spring Exterior Painting", image: springExteriorPainting, platforms: ["Google Ads (Search)", "Google LSA"], description: "Pre-season exterior repaint campaigns. Launch 4-6 weeks before spring. Highest volume period for exterior painters." },
    { id: "fall-interior", genre: "Fall Interior Refresh", image: fallInteriorPainting, platforms: ["Google Ads (Search)", "Meta Ads"], description: "Fall interior repaint campaigns targeting homeowners refreshing interiors before the holidays." },
    { id: "commercial", genre: "Commercial Painting", image: commercialPainting, platforms: ["Google Ads (Search)", "LinkedIn"], description: "HOA and property manager targeting. Apartment complex repaints and commercial building campaigns." },
    { id: "residential-general", genre: "Residential General", image: residentialPainting, platforms: ["Google LSA", "Google Ads"], description: "Year-round residential painting coverage. Interior and exterior services. Quote request campaigns." },
    { id: "new-construction", genre: "New Construction Painting", image: newConstructionPainting, platforms: ["Google Ads (Search)", "LinkedIn"], description: "Builder and developer targeting. High-volume, recurring painting contracts for new homes." },
  ],
  paidMediaByGenre: [
    {
      genre: "Residential Interior Painters",
      icon: Paintbrush,
      color: "from-orange-500/20 to-orange-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Interior painting keywords with seasonal timing – fall interior refresh, holiday home prep." },
        { name: "Google LSA", reason: "Pay per verified lead. Google Guarantee badge builds trust for high-consideration interior painting jobs." },
      ],
      secondary: [
        { name: "Meta Ads", reason: "Homeowner targeting by geography and property type. Before-and-after transformation creative performs strongly." },
        { name: "Nextdoor Ads", reason: "Hyper-local neighborhood targeting. High trust for home service recommendations." },
      ],
    },
    {
      genre: "Residential Exterior Painters",
      icon: Home,
      color: "from-teal-500/20 to-teal-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Exterior painting seasonal ramp – launch 4-6 weeks before spring. Exterior painters near me targeting." },
        { name: "Google LSA", reason: "Google Guarantee verification builds trust for high-ticket exterior repaint jobs." },
      ],
      secondary: [
        { name: "Meta Ads", reason: "Spring exterior awareness campaigns with before-and-after imagery." },
        { name: "Nextdoor Ads", reason: "Neighborhood-level exterior painting promotion." },
      ],
    },
    {
      genre: "Commercial Painting Contractors",
      icon: Building2,
      color: "from-blue-500/20 to-blue-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Commercial painting contractor targeting. Higher CPC but highest lifetime value contracts." },
        { name: "LinkedIn Ads", reason: "Property manager and HOA board member targeting. B2B commercial painting acquisition." },
      ],
      secondary: [
        { name: "Google Display", reason: "Retargeting property managers who visited your site." },
        { name: "Email Outreach", reason: "Direct outreach to property management companies for annual painting contracts." },
      ],
    },
  ],
  metaAdSetupHeadline: "How We Ramp Your Ads 6 Weeks Before the Rush",
  metaAdSetupSubheadline: "Seasonal campaign calendars, spring exterior ramp strategy, and conversion-optimized landing pages — built specifically for the painting industry demand cycle.",
  trackingRetargetingEssentials: [
    { icon: Target, title: "Google Conversion Tracking", description: "Every call, form submission, and quote request tracked back to the keyword and campaign that generated it." },
    { icon: RefreshCw, title: "Seasonal Budget Automation", description: "Ad spend ramps automatically 4-6 weeks before spring exterior and fall interior peak seasons. Pulls back in slow periods to protect budget." },
    { icon: BarChart3, title: "Monthly Performance Reporting", description: "Full campaign report every month: cost per lead, conversion rate, top-performing keywords, and seasonal trend analysis." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.10  RETARGETING
  // ══════════════════════════════════════════════════════════════════════
  retargetingHeadline: "Get Found Once.",
  retargetingHighlight: "Stay Top-of-Mind Until They're Ready to Book.",
  retargetingSubheadline: "A homeowner researching painters visits your site and leaves without calling. Retargeting brings them back when they're ready to make a decision.",
  retargetingBody: [
    "Painting decisions are rarely made on the first website visit. According to BrightLocal's 2026 research, the average consumer uses six different platforms when evaluating a local business before hiring. A homeowner comparing painters typically requests quotes from three to five contractors before making a decision — a process that takes days or weeks. Retargeting ensures your painting company remains visible throughout that entire decision window — not just during the first search.",
    "GrowSmallBiz sets up Google Display retargeting and Meta retargeting for every paid media client. Visitors who viewed your interior or exterior painting service pages see your ads across the web and social platforms for up to 30 days after their visit — keeping your brand in front of them until they are ready to book.",
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.11  SOCIAL MEDIA
  // ══════════════════════════════════════════════════════════════════════
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Presence and Strategy",
  socialMediaSubheadline: "Platform-specific social media strategies for residential and commercial painting companies — built around what actually drives homeowner trust and commercial property manager inquiries.",
  socialMediaByGenre: [
    {
      genre: "Residential Painting Companies",
      color: "from-orange-500/20 to-orange-600/10",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Before-and-after transformation photos, color consultation content, neighborhood project showcases. Visual proof of quality for homeowners comparing painters." },
        { name: "Facebook", icon: Facebook, strategy: "Residential before-and-after posts, seasonal painting tips, and neighborhood-targeted campaigns. Homeowner demographic 35-65." },
      ],
      secondary: [
        { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood-specific painting showcases. Local trust building." },
        { name: "Pinterest", icon: Palette, strategy: "Color inspiration boards, exterior color combinations, interior design palettes. Research-phase homeowner content." },
      ],
    },
    {
      genre: "Commercial Painting Contractors",
      color: "from-blue-500/20 to-blue-600/10",
      primary: [
        { name: "LinkedIn", icon: Linkedin, strategy: "Property manager and HOA board outreach. Commercial portfolio showcase. Before-and-after of apartment complexes and commercial buildings." },
        { name: "Facebook", icon: Facebook, strategy: "Commercial property before-and-after projects. Property management company targeting." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Commercial painting portfolio. Large-scale project showcases." },
        { name: "YouTube", icon: Youtube, strategy: "Commercial painting project walkthroughs. Process videos." },
      ],
    },
  ],
  linkedInOutreachEnabled: false,

  // ══════════════════════════════════════════════════════════════════════
  // 4.12  AI GROWTH SYSTEM
  // ══════════════════════════════════════════════════════════════════════
  growthSystemHeadline: "for Residential and Commercial Painting Companies",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop chasing bids manually. GrowSmallBiz builds an automated marketing system that captures, qualifies, and follows up with every painting lead – so your crew focuses on the work, not the phone.",
  clientJourneyStages: [
    { stage: "Awareness", icon: Eye, color: "from-blue-500 to-blue-600", description: "A homeowner notices their exterior paint is peeling or wants to refresh their interior before the holidays.", goal: "Get discovered by property owners at the exact moment they need a painter" },
    { stage: "Research", icon: Search, color: "from-purple-500 to-purple-600", description: "They search Google or ask an AI assistant for painting contractors near them and start comparing options.", goal: "Appear first in Map Pack, Google Ads, and AI search results" },
    { stage: "Consideration", icon: Star, color: "from-primary to-primary", description: "They compare your reviews, website portfolio, and before-and-after photos against two or three competitors.", goal: "Win the comparison with superior reviews, a fast site, and professional portfolio photos" },
    { stage: "Booking", icon: Phone, color: "from-emerald-500 to-emerald-600", description: "They call, fill out a form, or chat with your AI receptionist to request a quote.", goal: "Capture every lead 24/7 with AI voice and chat – no missed calls, no missed bids" },
    { stage: "Retention", icon: RefreshCw, color: "from-amber-500 to-amber-600", description: "They become a repeat client or refer friends and neighbors after a great painting experience.", goal: "Automate review requests, seasonal reminders, and referral follow-up" },
  ],
  emailNurturePoints: [
    { title: "Stay Top-of-Mind Through the Full Decision Window", icon: Eye, description: "Most painting decisions take days or weeks. Automated email and SMS sequences keep your company visible from first inquiry to booked estimate – so you are not forgotten while they compare three bids." },
    { title: "Turn One-Time Jobs Into Repeat Clients", icon: Heart, description: "A homeowner who books exterior painting this spring is a candidate for interior refresh in the fall. Automated sequences turn one-time jobs into recurring revenue." },
    { title: "Turn Happy Clients Into Your Best Lead Source", icon: Gift, description: "An automated referral system reaches satisfied painting clients with a referral offer – a discount on their next project for every new customer they send your way. Most clients refer one to three neighbors when asked at the right moment." },
  ],
  emailSequenceTitle: "5-Day Inquiry-to-Quote Automation:",
  emailSequenceHighlight: "From First Contact to Booked Estimate",
  noShowResearchCitations: [
    { stat: "15-30%", source: "Service Industry Research — Field Service Management Studies", label: "of estimate appointments are missed when contractors send no advance confirmation", publication: "", year: "" },
    { stat: "38%", source: "Field Service Scheduling Research", label: "reduction in missed estimate windows when crews send a morning-of arrival confirmation", publication: "", year: "" },
    { stat: "80%", source: "HomeAdvisor Pro Contractor Survey", label: "of homeowners say a confirmed arrival window makes them more likely to be home and ready", publication: "", year: "" },
    { stat: "9x", source: "ServiceTitan Field Service Benchmark Report", label: "more estimate-to-job conversion when a crew arrival window is sent the morning of the appointment", publication: "", year: "" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "Estimate Appointment",
      icon: ClipboardList,
      color: "from-emerald-500 to-emerald-600",
      description: "Arrival window confirmation sequence for painting estimate visits",
      noShowImpact: "Missed estimate appointments waste crew time and delay booked revenue.",
      reminders: [
        { timing: "2 days before", channels: ["email"], content: "Estimate confirmation with property address, estimator name, and what to expect during the color consultation" },
        { timing: "Morning of", channels: ["email", "sms"], content: "Arrival window SMS: Our estimator will be there between 10am-12pm. Estimator name will call 30 minutes before arrival." },
        { timing: "1 hour before", channels: ["sms"], content: "On-the-way confirmation with estimator name, estimated arrival time, and direct contact number" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Follow-Up Quote",
      icon: FileText,
      color: "from-violet-500 to-violet-600",
      description: "Automated follow-up sequence after quote delivery to close the bid.",
      noShowImpact: "Most painting quotes are lost to silence – no follow-up, no closed job.",
      reminders: [
        { timing: "24 hours after quote", channels: ["email"], content: "Quote summary + easy accept button + FAQ about the painting process and timeline" },
        { timing: "3 days after quote", channels: ["email", "sms"], content: "Checking in – any questions about the estimate or color selections?" },
        { timing: "7 days after quote", channels: ["sms"], content: "Seasonal availability notice – spring and fall schedule filling up, book early to secure your slot" },
      ],
      expectedReduction: "Up to 40% more quotes accepted",
    },
    {
      sessionType: "Seasonal Re-engagement",
      icon: Calendar,
      color: "from-amber-500 to-amber-600",
      description: "Automated seasonal outreach to past clients before each peak painting season.",
      noShowImpact: "Past clients who are not re-engaged before spring search for a new painting contractor.",
      reminders: [
        { timing: "6 weeks before spring", channels: ["email"], content: "Spring exterior painting season is coming – book early, spring schedule filling fast" },
        { timing: "3 weeks before spring", channels: ["sms"], content: "Limited spring exterior slots remaining – easy online booking link" },
        { timing: "6 weeks before fall", channels: ["email"], content: "Fall interior refresh season – book your interior repaint before the holiday schedule fills" },
      ],
      expectedReduction: "30-45% past client retention improvement",
    },
  ],
  marketingCampaigns: [
    {
      genre: "Residential Exterior Painting",
      icon: Home,
      color: "from-orange-500 to-orange-600",
      offer: {
        headline: "Spring Exterior Painting Consultation",
        tagline: "[Season Launch] – Get your free exterior color consultation before the season fills up",
        price: "Free Consultation",
        originalPrice: "",
        savings: "",
        includes: ["Full exterior paint condition assessment", "Color consultation with digital preview", "Detailed scope and timeline estimate", "Spring season pricing"],
        urgency: "Spring slots filling fast",
        cta: "Book Consultation",
      },
      funnel: ["Google Ads / Meta Ad", "Landing page with offer", "Online booking", "SMS confirmation", "Day-of reminder", "Post-job review request", "Referral follow-up"],
      topPlatforms: ["Google Ads", "Google LSA", "Meta Ads"],
      seasonality: "Peak: Spring (Mar-May) and Early Fall (Sep-Oct)",
    },
    {
      genre: "Residential Interior Painting",
      icon: Paintbrush,
      color: "from-teal-500 to-teal-600",
      offer: {
        headline: "Fall Interior Refresh Package",
        tagline: "[Season Launch] – Refresh your home interior before the holidays",
        price: "Free Quote",
        originalPrice: "",
        savings: "",
        includes: ["In-home color consultation", "Detailed room-by-room estimate", "Timeline and crew schedule", "Holiday completion guarantee"],
        urgency: "Holiday schedule filling fast",
        cta: "Get Free Quote",
      },
      funnel: ["Google Ads", "Landing page", "Quote request form", "Email confirmation", "Follow-up sequence", "Review request", "Repeat client upsell"],
      topPlatforms: ["Google Ads", "Meta Ads", "Nextdoor"],
      seasonality: "Peak: Fall (Sep-Nov) and pre-holiday (Oct-Dec)",
    },
    {
      genre: "Commercial Painting",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      offer: {
        headline: "Commercial Property Painting Audit",
        tagline: "[Ongoing] — Annual maintenance contract review for HOAs and property managers",
        price: "Custom Quote",
        originalPrice: "",
        savings: "",
        includes: ["Full property exterior assessment", "Scope and multi-year maintenance plan", "HOA compliance color consultation", "Volume pricing for multiple units"],
        urgency: "Annual contracts booked Q4-Q1",
        cta: "Request Proposal",
      },
      funnel: ["LinkedIn Ads", "Landing page", "Proposal request form", "Email nurture", "Sales call", "Contract signed", "Annual renewal"],
      topPlatforms: ["LinkedIn", "Google Ads", "Email"],
      seasonality: "Peak: Q4 (contract renewals) and Q1 (new contract season)",
    },
  ],
  seasonalCampaigns: [
    { campaign: "Spring Exterior Season", timing: "Launch 4-6 weeks before March", offer: "Early-bird spring exterior painting + free color consultation", channels: ["Google Ads", "Meta Ads", "Email"] },
    { campaign: "Fall Interior Refresh", timing: "Launch in August for September-November peak", offer: "Pre-holiday interior refresh packages + color consultation", channels: ["Google Ads", "Meta Ads", "Email"] },
    { campaign: "Commercial Contract Season", timing: "Active September-November", offer: "Annual commercial repaint proposals for HOAs and property managers", channels: ["LinkedIn", "Google Ads", "Email"] },
    { campaign: "Winter Interior Work", timing: "Active November-February", offer: "Indoor projects during slower exterior season – interior repaints, cabinet painting", channels: ["Google Ads", "Meta Ads", "Email"] },
    { campaign: "New Construction Season", timing: "Active March-October", offer: "Builder partnerships and new construction painting contracts", channels: ["Google Ads", "LinkedIn", "Email"] },
  ],
  pastClientWorkflows: [
    { title: "Annual Repaint Reminder", icon: Calendar, description: "Exterior house paint lasts 5-10 years on average depending on siding material, climate, and paint quality. Interior paint in high-traffic areas like kitchens and bathrooms requires repainting every 3-5 years; bedrooms and living rooms every 5-8 years. GrowSmallBiz automates repaint cycle reminders – a personalized email reaches past clients 10 months before their estimated repaint window opens, before they start searching for a new painter." },
    { title: "Review Request (48hrs Post-Job)", icon: Star, description: "Automated SMS + email requesting a Google review 48 hours after job completion – when the color transformation and experience are freshest." },
    { title: "Referral Incentive Automation", icon: Gift, description: "Automated referral offer sent to satisfied clients 2 weeks after job completion – a discount on their next painting project for every new customer they refer. Tracked automatically, reward delivered via SMS. No manual follow-up required." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.13  REPUTATION
  // ══════════════════════════════════════════════════════════════════════
  reputationHeadline: "More 5-Star Reviews.",
  reputationHighlight: "Higher Map Pack. More Bids.",
  reputationSubheadline: "According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision, 31% ignore any business with a rating below 4.5 stars, and 74% only trust reviews posted in the last 90 days. For painting contractors, reviews are not a nice-to-have — they determine whether homeowners call you at all.",
  reputationBullets: [
    "97% of consumers read reviews before making a hiring decision — reviews determine whether a homeowner calls you or your competitor (BrightLocal 2026)",
    "31% of consumers now ignore any business with a rating below 4.5 stars — Map Pack visibility means nothing if your rating disqualifies you on sight (BrightLocal 2026)",
    "74% of consumers only trust reviews from the last 90 days — review recency matters as much as total review count for Map Pack ranking and conversion (BrightLocal 2026)",
    "89% of consumers expect a response to their reviews — unanswered reviews signal poor customer care to every future client reading your profile (BrightLocal 2026)",
    "Systematic competitor review gap analysis — know exactly how many reviews you need to take the top Map Pack spot in your market",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Job Complete", description: "Crew completes interior or exterior painting project" },
    { step: "2", title: "Automated Trigger", description: "System sends SMS + email review request 48 hours after completion" },
    { step: "3", title: "One-Tap Review", description: "Client taps link and lands directly on Google review form — zero friction" },
    { step: "4", title: "Review Posted", description: "5-star review added to Google profile, boosting Map Pack ranking" },
    { step: "5", title: "Response & Archive", description: "GrowSmallBiz responds to review and archives for testimonial use" },
  ],
  giftCardUseCases: "neighbor referrals, housewarming gifts, and commercial property manager appreciation",
  giftAndReferralPrograms: [
    { title: "Referral Reward Program", icon: UserPlus, description: "Automated referral program that rewards existing painting clients for sending new customers your way.", features: ["Automated referral tracking", "Reward delivery via SMS", "Discount on next painting project", "Referral performance reporting"] },
    { title: "Seasonal Gift Cards", icon: Gift, description: "Sell painting gift cards year-round — perfect for housewarming presents, holiday gifts, and neighbor referrals.", features: ["Digital and physical gift cards", "Custom amounts", "Automated delivery", "Redemption tracking"] },
    { title: "Reputation Score Tracking", icon: BarChart3, description: "Monthly reputation report showing review count, average rating, recency trend, and competitor comparison — so you always know exactly where you stand in the Map Pack.", features: ["Monthly review velocity report", "Competitor review gap analysis", "Map Pack position tracking", "Response rate monitoring"] },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.14  AI VOICE & CHAT
  // ══════════════════════════════════════════════════════════════════════
  aiVoiceChatSectionHeadline: "Never Miss a Painting Lead",
  aiVoiceChatHighlight: "Again.",
  aiVoiceChatSubheadline: "Never miss an after-hours call, a weekend quote request, or a commercial inquiry during your busiest week. Your AI Receptionist and Website Live Chat work together — answering, qualifying, booking, and following up with every lead automatically, around the clock.",
  aiFeatures: [
    { title: "24/7 AI Voice Receptionist", icon: Phone, color: "violet", description: "", features: [] },
    { title: "Conversational AI Chat", icon: MessageSquare, color: "cyan", description: "", features: [] },
  ],

  // ── Extended AI Receptionist Section ──
  aiReceptionistComparisonH3: "One AI Receptionist. Zero Sick Days. A Fraction of the Cost.",
  aiReceptionistComparisonBody: "A full-time receptionist costs $38,000-$52,000 per year in salary alone — before benefits, payroll taxes, PTO, training, and turnover. And even the best human receptionist clocks out at 5pm, takes lunch breaks, calls in sick, and can only handle one call at a time. Your AI Receptionist works every hour of every day — and never lets a painting lead go to voicemail.",
  aiReceptionistComparison: [
    { human: "Works 9am-5pm Monday to Friday", ai: "Available 24/7/365 — evening quote requests, weekend commercial inquiries, holiday painting emergencies" },
    { human: "One call at a time — callers get voicemail during peak season", ai: "Handles unlimited simultaneous calls — every caller answered instantly" },
    { human: "$38,000-$52,000/year salary + benefits, PTO, sick leave, payroll tax", ai: "Fraction of the cost — no benefits, no PTO, no sick days, no turnover" },
    { human: "Takes lunch breaks, coffee breaks, personal time", ai: "Zero downtime — no breaks, no distractions, always at full capacity" },
    { human: "Calls in sick — no coverage during spring and fall peak seasons", ai: "Never sick, never on vacation — always available when you need it most" },
    { human: "Weeks of training before productive", ai: "Live in 30 days — pre-trained on your services, pricing, and service area" },
    { human: "Cannot send payment links, booking confirmations, or SMS follow-ups", ai: "Books appointments, sends payment links, confirms estimate windows — automatically" },
    { human: "Covers phone calls only — no website chat coverage", ai: "Covers phone calls and website live chat from one unified AI system" },
    { human: "May misroute commercial inquiries or after-hours requests", ai: "Detects service type — routes residential, commercial, and emergency inquiries correctly" },
    { human: "Cannot transfer to a human outside business hours", ai: "Transfers to a live human when needed — flags urgent commercial quotes for immediate callback" },
  ],
  aiReceptionistHighlightText: "Painting leads convert to the first or second contractor who responds — not necessarily the best painter or the lowest price. When a homeowner calls at 9 PM to get a quote on their exterior repaint, your competitor's voicemail gets the call. Your AI Receptionist answers within seconds, qualifies the job, captures the contact details, and sends a confirmation SMS. That bid is yours before they call anyone else.",
  aiReceptionistImage: aiReceptionistMulticall,
  aiVoiceFeatureBullets: [
    "Answers every call 24/7 — evening quote requests, weekend commercial inquiries, and busy-season overflow calls",
    "Qualifies the lead by service type (interior painting, exterior painting, commercial, cabinet painting) and project timeline",
    "Books estimate appointments directly into your calendar — no back-and-forth, no missed scheduling windows",
    "Sends payment links for deposits or completed jobs via SMS — collect faster without chasing invoices",
    "Confirms booked appointments automatically — reminder SMS the day before and morning of, with estimator name and contact",
    "Transfers to a live human team member when needed — and flags urgent commercial quotes for immediate callback",
    "Integrates with your CRM — every lead logged automatically with full conversation summary",
    "Sends lead summary to your team via SMS and email within 60 seconds of every inquiry",
  ],
  aiChatImage: aiWebsiteLivechat,
  aiChatFeatureBullets: [
    "Answers service questions, pricing queries, and availability requests instantly — 24/7, no staffing required",
    "Qualifies website visitors by service interest, location, and project timeline before routing to your team",
    "Captures lead contact information from visitors who are not ready to call but are actively comparing painters",
    "Books estimate appointments directly from the chat widget — no phone call required",
    "Sends payment links for deposits via chat for clients who prefer not to call",
    "Escalates urgent commercial requests or tight-deadline projects to immediate callback notification",
    "Hands off seamlessly to your AI Voice Receptionist — one unified system across phone and web",
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.15  WHY CHOOSE US
  // ══════════════════════════════════════════════════════════════════════
  whyChooseUsHeadline: "Why Painting Contractors",
  whyChooseUsHighlight: "Choose GrowSmallBiz",
  whyChooseUsSubtitle: "Your Painting Industry Marketing Partner — Not a Generalist Agency",
  whyChooseUsBody: "GrowSmallBiz Digital Marketing, founded by Subrata Guha and headquartered in Danville, CA, specializes in marketing for local service businesses including residential and commercial painting contractors across the United States. We bring 30+ years of enterprise marketing and digital transformation experience to the painting industry – combined with AI-powered tools that generalist agencies do not have.",
  whyChooseUsCards: [
    { icon: Paintbrush, title: "Home Services Marketing Specialists", description: "GrowSmallBiz focuses exclusively on local service businesses including residential and commercial painting contractors. Specialization in a single category means we understand painter seasonality, buyer psychology, and local search dynamics – and do not spend your budget on a learning curve. Exterior painting searches spike 300-400% in spring and fall; we build your campaigns to be live before that window opens, not after the phone stops ringing." },
    { icon: Shield, title: "Performance Guarantee", description: "If GrowSmallBiz does not generate leads within the pre-agreed timeframe and scope, we keep working at no additional management fee until we do. Your success is built into our contract." },
    { icon: MapPin, title: "Exclusive Territory", description: "We do not work with competing painting companies in the same service area. Your leads stay yours – no conflicts of interest, no shared client lists." },
    { icon: TrendingUp, title: "Proactive Seasonal Management", description: "Every painting company client gets a 12-month seasonal marketing campaign calendar. Google Ads campaigns ramp 4-6 weeks before spring exterior season and fall interior refresh peaks – not during them, when ad costs spike and schedule slots are already filling. You own the Map Pack before competitors have turned their ads on." },
    { icon: Bot, title: "AI-Powered Full Stack", description: "Local SEO, Google Ads, reputation management, AI receptionist, and website design – all managed under one roof. One strategy, one dashboard, one point of contact." },
    { icon: BarChart3, title: "Transparent Monthly Reporting", description: "Every month you see exactly where your marketing dollars went – Map Pack rankings, lead sources, campaign performance, and reputation metrics in plain language. No vanity metrics, no guesswork." },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // REAL RESULTS — EMPTY
  // ══════════════════════════════════════════════════════════════════════
  realResults: [],
  caseStudyLinks: [],

  // ══════════════════════════════════════════════════════════════════════
  // HOW IT WORKS
  // ══════════════════════════════════════════════════════════════════════
  howItWorksHeadline: "5 Steps From Invisible to Fully Booked",
  howItWorksHighlight: "Fully Booked",
  howItWorksBadge: "HOW IT WORKS",
  processSteps: [
    {
      step: "01", icon: ClipboardList,
      title: "Discovery & Competitive Audit",
      description: "We start with a full audit of your current online presence - Google Business Profile, website performance, review count, local rankings, and competitor Map Pack positions - before recommending a single tactic. You cannot fix what you have not measured.",
      deliverable: "Deliverable: Custom marketing roadmap with seasonal campaign calendar and competitive gap analysis.",
    },
    {
      step: "02", icon: Search,
      title: "Local SEO & GBP Foundation",
      description: "Local SEO for painting companies begins with your Google Business Profile - optimized from category selection to service areas, weekly posts, and photo cadence. Citation building and on-site location signals follow. This is the foundation every other channel builds on.",
      deliverable: "Deliverable: Fully optimized GBP, citation audit and cleanup, on-site local SEO implementation.",
    },
    {
      step: "03", icon: Target,
      title: "Paid Campaign Launch",
      description: "Google Local Services Ads launch first for immediate high-intent coverage. Standard Google Ads follow with seasonal campaigns timed 4 to 6 weeks ahead of each demand surge. Every campaign includes conversion tracking from click to call to booked estimate.",
      deliverable: "Deliverable: Live LSA and Google Ads campaigns with conversion tracking and seasonal budget calendar.",
    },
    {
      step: "04", icon: Star,
      title: "Review Velocity & Reputation",
      description: "Systematic review generation begins immediately - automated SMS and email requests 48 hours after every completed job. Review monitoring, response management, and competitor gap tracking run continuously throughout the engagement.",
      deliverable: "Deliverable: Automated review request system, monthly reputation report, Map Pack position tracking.",
    },
    {
      step: "05", icon: TrendingUp,
      title: "Reporting & Optimization",
      description: "Every month you receive a full performance report: Map Pack rankings, call volume, cost per lead, conversion rate, and seasonal trend analysis. We optimize campaigns based on data, not assumptions - and you see exactly where every dollar goes.",
      deliverable: "Deliverable: Monthly performance report, optimization summary, and next-month campaign plan.",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WHO THIS IS FOR
  // ══════════════════════════════════════════════════════════════════════
  whoThisIsForHeadline: "Is GrowSmallBiz Right for Your Painting Company?",
  whoThisIsForHighlight: "Right for Your",
  whoThisIsForBadge: "WHO THIS IS FOR",
  strongFitLabel: "Strong Fit",
  notFitLabel: "Not the Right Fit",
  strongFitItems: [
    "Residential painters with active interior and exterior services looking to build a predictable inbound lead pipeline",
    "Currently paying Angi, Thumbtack, or HomeAdvisor for shared leads and want to eliminate that dependency",
    "Ready to invest in owned marketing for at least 6 months — SEO and reputation building are not overnight results",
    "Want a seasonal marketing calendar and proactive campaign management - spring exterior and fall interior - not reactive ad spend",
    "Looking for an experienced specialist agency that understands painter seasonality, buyer psychology, and local search dynamics",
    "Commercial painting contractors pursuing HOA, property management, and multi-unit contracts",
  ],
  notFitItems: [
    "Solo operators in their first year who are not yet generating consistent revenue from painting work",
    "Companies looking for a one-time website build with no ongoing marketing strategy",
    "Businesses not prepared to respond to leads quickly — our system generates calls, but your team needs to answer them",
    "Companies unwilling to request reviews from clients — reputation management requires participation",
  ],

  // ══════════════════════════════════════════════════════════════════════
  // MID-PAGE CTA
  // ══════════════════════════════════════════════════════════════════════
  midPageCta: {
    headline: "Sound Like Your Business?",
    subtext: "Let's talk about what owning your local painting market actually looks like. Free 30-minute strategy session, no commitment.",
    primaryLabel: "Schedule Your Free Strategy Call",
    position: "afterWhoThisIsFor",
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4.16  FAQ
  // ══════════════════════════════════════════════════════════════════════
  faqHeadline: "Painting Company",
  faqHighlight: "Marketing FAQs",
  faqSubheadline: "Common questions from residential and commercial painting contractors — organized by topic",
  faqCategories: [
    {
      id: "local-seo",
      label: "Local SEO",
      icon: Search,
      color: "emerald",
      faqs: [
        { question: "How long does it take to get leads from SEO for a painting business?", answer: "SEO results for painting companies typically begin within 60-90 days for local search rankings, with meaningful lead volume building over 4-6 months. Google Business Profile optimizations often show results faster — within 30-60 days as improved GBP signals increase calls and direction requests. For immediate leads while SEO builds, GrowSmallBiz runs Google Ads and Meta Ads in parallel so you are generating qualified bid requests from day one." },
        { question: "Is local SEO worth it for a small painting business?", answer: "Yes — local SEO is the highest-ROI long-term marketing investment for a small painting business because it builds organic visibility that compounds over time without a per-click cost. A well-optimized Google Business Profile with strong review velocity consistently generates inbound calls without ongoing ad spend. The tradeoff is time: local SEO takes 60 to 90 days to show measurable movement. For faster results in the first 90 days, run local SEO in parallel with Google Local Services Ads." },
      ],
    },
    {
      id: "paid-media",
      label: "Google Ads",
      icon: Target,
      color: "blue",
      faqs: [
        { question: "What is the difference between Google Local Services Ads and Google Ads for painting companies?", answer: "Google Local Services Ads appear above all other results, carry the Google Guarantee badge, and charge per verified lead rather than per click — making them the best option for high-intent painting searches. Standard Google Ads charge per click and give more control over keywords, budget, and landing pages — making them better for seasonal campaigns like spring exterior and fall interior. GrowSmallBiz recommends running both simultaneously: LSA for high-intent queries, Google Ads for seasonal and service-specific campaigns." },
        { question: "What digital marketing works best for painting contractors?", answer: "The highest-impact marketing channels for painting contractors are Google Local Services Ads for ready-to-hire searchers, Local SEO and Google Business Profile optimization for Map Pack visibility, and reputation management to build the review count that drives click-through rates. GrowSmallBiz structures campaigns to capture both immediate intent and planned research buyers simultaneously." },
      ],
    },
    {
      id: "strategy",
      label: "Strategy",
      icon: Lightbulb,
      color: "amber",
      faqs: [
        { question: "How do I stop relying on Angi and Thumbtack for painting leads?", answer: "The fastest path away from lead aggregators is building Google Business Profile review velocity and activating Google Local Services Ads simultaneously — achievable within the first 8 to 12 weeks. After that, service-area landing pages targeting city-specific painting keywords provide organic lead flow over months 3 to 6. Most painting contractors who follow this sequence reduce cost-per-lead by 40 to 55 percent within six months because they own the channel instead of renting access to shared leads." },
        { question: "How does AI search affect my painting business and why does it matter?", answer: "According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools like ChatGPT, Perplexity, and Google AI Overviews to find local services – up from just 6% one year ago. Yet SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. Painting businesses that only have traditional SEO are invisible to the growing segment of buyers who start their research on AI platforms. AEO and GEO optimization ensures your painting company appears in AI-generated recommendations – a channel growing rapidly and almost entirely uncontested among local painting companies right now." },
        { question: "Does GrowSmallBiz handle seasonal marketing for painting companies?", answer: "Yes – GrowSmallBiz builds a 12-month seasonal marketing calendar for every painting company client, ramping campaigns 4 to 6 weeks before each peak season rather than during it. This includes activating seasonal landing pages for spring exterior painting, fall interior refresh, and commercial contract season, launching review push campaigns ahead of demand surges, and monitoring website performance before high-traffic months." },
      ],
    },
    {
      id: "investment",
      label: "Investment",
      icon: DollarSign,
      color: "violet",
      faqs: [
        { question: "What does painting company digital marketing cost?", answer: "Painting company marketing costs vary by market, competitive density, and the services included – GrowSmallBiz does not display fixed pricing because a company competing in a major metro market faces a different landscape than one serving a smaller suburban area. The investment depends on your current online presence, your growth goals, and which channels make sense for your market. GrowSmallBiz offers a free 30-minute strategy session to assess your situation and provide a clear picture of what investment is appropriate before any commitment." },
      ],
    },
    {
      id: "website-design",
      label: "Website Design",
      icon: Palette,
      color: "sky",
      faqs: [
        { question: "Do I need a new website before starting SEO or Google Ads for my painting business?", answer: "Not always, but your website must meet minimum conversion standards – mobile speed under 3 seconds, click-to-call on every page, before-and-after photo galleries, and service-specific landing pages. If your current site fails those, we build a new one first because sending paid traffic to a weak site wastes your budget." },
        { question: "How long does it take to build a painting company website?", answer: "Typically 3-4 weeks from kickoff to launch. We build conversion-focused sites specifically for painting contractors – not generic templates – so the development timeline is tight and the output is immediately SEO-ready, with service pages, city pages, and gallery structure in place from day one." },
      ],
    },
    {
      id: "social-media",
      label: "Social Media",
      icon: Megaphone,
      color: "rose",
      faqs: [
        { question: "Which social media platforms work best for painting companies?", answer: "Instagram and Facebook are the primary platforms for residential painters – before-and-after transformation photos and color inspiration content perform strongest with homeowners aged 35-65. LinkedIn is the right platform for commercial painting and HOA contract acquisition. We allocate 80 percent of your social effort to your two highest-ROI platforms before expanding." },
        { question: "How often should a painting company post on social media?", answer: "Three to four times per week on primary platforms is the effective range for most painting contractors. Consistency matters more than volume – a company that posts three quality before-and-after transformation photos per week outperforms one that posts daily generic content and then goes silent during busy season." },
      ],
    },
    {
      id: "reputation",
      label: "Reputation",
      icon: Star,
      color: "amber",
      faqs: [
        { question: "How many Google reviews does a painting company need to rank in the Map Pack?", answer: "It depends on your specific market and competitor review counts. We run a competitor review gap analysis for every client – if the top Map Pack position in your area has 150 reviews and you have 25, we build a systematic review velocity plan to close that gap within 6-9 months using automated post-job SMS and email requests sent 48 hours after every completed painting project." },
        { question: "What do we do about a negative Google review?", answer: "We respond to every negative review within 24 hours using protocols that demonstrate professionalism to future clients reading your profile – because how you respond matters as much as the review itself. We also analyze the pattern of negative reviews to identify service or communication gaps before they compound." },
      ],
    },
    {
      id: "ai-receptionist",
      label: "AI Receptionist",
      icon: PhoneCall,
      color: "emerald",
      faqs: [
        { question: "What happens when a homeowner calls after hours requesting a painting quote?", answer: "Your AI Receptionist answers every call 24/7 – evening quote requests, weekend callbacks, and busy-season overflow calls. It qualifies the lead by service type and project timeline, captures contact details, books a callback or estimate appointment, and sends you a lead summary via SMS within 60 seconds." },
        { question: "Can the AI Receptionist handle commercial painting inquiries differently from residential calls?", answer: "Yes. The AI Receptionist is configured to route and qualify leads by service type – residential interior, residential exterior, commercial property, and HOA projects are each handled with the appropriate qualification questions and escalation paths." },
      ],
    },
    {
      id: "ai-growth",
      label: "AI Growth System",
      icon: Zap,
      color: "violet",
      faqs: [
        { question: "What is the AI Client Growth System and how is it different from a regular CRM?", answer: "A standard CRM stores contacts. The AI Client Growth System captures every painting lead automatically, sends instant follow-up sequences, qualifies leads by service type, books estimate appointments, triggers review requests 48 hours after job completion, and runs seasonal re-engagement campaigns – without any manual input from your team. It replaces five or six disconnected tools with one integrated system." },
        { question: "How quickly can the AI Growth System be set up for a painting company?", answer: "The core system – AI Receptionist, inquiry automation, and review request sequences – is live within 30 days. The full marketing automation suite including seasonal campaigns and referral incentive workflows is typically complete within 60 days of kickoff." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "More Questions About Painting Company Marketing?",
    body: "Get a personalized walkthrough of our SEO, Google Ads, and AI systems for your specific market and service mix.",
    signoff: "Let's build your exclusive lead pipeline.",
  },

  // ══════════════════════════════════════════════════════════════════════
  // STICKY CTA
  // ══════════════════════════════════════════════════════════════════════
  stickyCtaConfig: {
    title: "Ready for a Painting Company Marketing System That Fills Your Schedule Year-Round?",
    description: "Let's discuss a custom marketing strategy for your specific market, service area, and growth goals.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Year-Round"],
    showAfterScroll: 800,
  },

  // ══════════════════════════════════════════════════════════════════════
  // CONTACT SECTION
  // ══════════════════════════════════════════════════════════════════════
  contactSectionHeadline: "Ready to Grow Your Painting Business?",
  contactSectionBody: "Schedule a strategy call to discuss your marketing goals, service area, and what a seasonal campaign calendar looks like for your specific market.",
};
