import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Layers, Search, TrendingUp, Star, Users, Target, Calendar,
  Bot, Globe, Megaphone, Mail, Phone, MessageSquare, Shield, Clock,
  Heart, Eye, Repeat, DollarSign, RefreshCw, MapPin, BarChart3,
  Gift, CalendarCheck, Leaf, Sprout, Lightbulb, UserPlus,
  FileText, ClipboardList, Building2, Linkedin, Instagram, Facebook,
  Youtube, Zap, Hammer, Palette, PhoneCall, Flame, TreePine, Home as HomeIcon,
} from "lucide-react";

import heroImage from "@/assets/industries/landscape-construction-hardscaping/hero.webp";
import croWebsiteDesign from "@/assets/industries/landscape-construction-hardscaping/cro-website-design.webp";
import remodelingSeo from "@/assets/industries/landscape-construction-hardscaping/full-remodel.webp";
import hardscapeSeo from "@/assets/industries/landscape-construction-hardscaping/hardscape.webp";
import outdoorLivingSeo from "@/assets/industries/landscape-construction-hardscaping/outdoor-living.webp";
import retainingWallSeo from "@/assets/industries/landscape-construction-hardscaping/hillside.webp";
import deckPergolaSeo from "@/assets/industries/landscape-construction-hardscaping/decks.webp";
import foundationSeo from "@/assets/industries/landscape-construction-hardscaping/foundation.webp";
import fullRemodelAd from "@/assets/industries/landscape-construction-hardscaping/full-remodel-ad.webp";
import hardscapeAd from "@/assets/industries/landscape-construction-hardscaping/hardscape-ad.webp";
import outdoorKitchenAd from "@/assets/industries/landscape-construction-hardscaping/outdoor-kitchen-ad.webp";
import commercialAd from "@/assets/industries/landscape-construction-hardscaping/commercial-ad.webp";
import localMapPack from "@/assets/industries/landscape-construction-hardscaping/local-map-pack-ad.webp";
import aiReceptionistImage from "@/assets/industries/landscape-construction-hardscaping/ai-receptionist.webp";
import aiWebsiteLivechatImage from "@/assets/industries/landscape-construction-hardscaping/ai-website-livechat.webp";

export const landscapeConstructionHardscapingConfig: NicheConfig = {
  // Flatten the heading outline for this page (single H1, 5-6 topical H2s).
  flattenHeadings: true,
  deepNesting: true,
  sectionGroupHeadings: {
    seo: "SEO & AI Search Visibility for Landscape Construction Contractors",
    social: "Marketing Channels That Win Six-Figure Projects",
    aiAutomation: "AI Automation & Client Retention for Hardscaping Contractors",
    howItWorks: "How We Work With Outdoor Living Contractors — And Who It's For",
  },
  // ── PAGE META ──
  pageTitle: "Landscape Construction & Hardscaping Contractor Marketing | GrowSmallBiz",
  ogTitle: "AI-Powered Growth for Landscape Construction & Hardscaping Contractors",
  metaDescription: "High-ticket outdoor living, hardscape, retaining wall, and backyard remodel leads via Local SEO, Google Ads, and AI lead capture. Schedule a strategy call.",
  metaKeywords: "landscape construction marketing, hardscaping contractor advertising, outdoor living marketing, retaining wall leads, deck and pergola marketing, backyard remodel digital marketing, hardscape SEO",
  canonicalUrl: "/home-service-contractors/landscape-construction-hardscaping-marketing/",
  serviceName: "Landscape Construction & Hardscaping Contractor Marketing Agency",
  serviceType: "Digital Marketing for Landscape Construction and Hardscaping Contractors",
  serviceDescription: "GrowSmallBiz Digital Marketing is a Bay Area digital marketing agency headquartered in Danville, CA, specializing in Local SEO, Google Ads, and AI-powered marketing systems for landscape construction and hardscaping contractors — from full backyard remodels and outdoor kitchens to retaining walls, decks, and drainage systems.",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Home Service Contractors", url: "/home-service-contractors/" },
    { name: "Landscape Construction & Hardscaping Marketing", url: "/home-service-contractors/landscape-construction-hardscaping-marketing/" },
  ],
  offerCatalog: {
    name: "Landscape Construction & Hardscaping Marketing Services",
    items: [
      { name: "Local SEO & Google Business Profile" },
      { name: "Conversion-Focused Website Design" },
      { name: "Google Ads (LSA + PPC)" },
      { name: "Reputation Management" },
      { name: "AI Receptionist & 24/7 Lead Capture" },
      { name: "Lead Nurture & Client Reactivation" },
    ],
  },

  // ── HERO ──
  heroImage: heroImage,
  heroImageAlt: "Landscape construction crew installing a paver patio and retaining wall for a full backyard remodel, showcasing high-ticket hardscape and outdoor living work.",
  badgeIcon: Layers,
  badgeText: "Landscape Construction & Hardscaping Marketing",
  h1Line1: "We Generate High-Ticket, Pre-Qualified Leads for Landscape Construction, Hardscaping & Outdoor Living, Retaining Wall, and Backyard Remodel Contractors Across the Bay Area",
  h1Highlight: "",
  h1Line2: "",
  heroSubheadline: "GrowSmallBiz combines Local SEO, Google Ads, and AI-powered lead capture to put your landscape construction or hardscaping company in front of homeowners planning full backyard remodels, outdoor kitchens, retaining walls, and luxury outdoor living projects — and convert that visibility into signed contracts.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "See Our Services",
  secondaryCtaAnchor: "#solutions",
  statsBar: [
    { value: "553", label: "Google Ads conversions delivered" },
    { value: "1.1", label: "Average Map Pack rank achieved" },
    { value: "+211.5%", label: "90-day conversion lift (PPC)" },
    { value: "+138.54%", label: "Search impressions growth (SEO)" },
  ],

  // ── HERO EXTENDED ──
  heroExtendedHeadline: "From Word-of-Mouth Only to a Predictable Pipeline of Six-Figure Projects",
  heroExtendedHighlight: "Predictable Pipeline",
  heroExtended: [
    {
      icon: Calendar,
      headline: "Seasonal Campaigns That Run Ahead of Design Season",
      body: "Most landscape construction and hardscaping companies start marketing when the design pipeline goes quiet. We build your campaign calendar 4 to 6 weeks before each planning surge — winter design consultations, spring build season, fall backyard finishing — so you own the Map Pack before competitors ramp up.",
    },
    {
      icon: MapPin,
      headline: "Local Market Intelligence",
      body: "We understand the design trends, permit realities, and conversion factors that drive full backyard remodels, hardscape installs, and outdoor kitchen builds in your service area — so every strategy is built on market reality, not assumptions.",
    },
    {
      icon: Shield,
      headline: "Exclusive Territory — Your Leads Stay Yours",
      body: "We do not work with competing landscape construction or hardscaping contractors in the same service area. When you partner with GrowSmallBiz, we work exclusively for you in your market. No shared leads, no conflicts of interest.",
    },
    {
      icon: TrendingUp,
      headline: "Full-Service Stack, One Roof",
      body: "Local SEO, Google Ads, website design, reputation management, and AI-powered lead capture — all managed by one team. No agency handoffs. No gaps between your marketing channels. One dashboard, full visibility.",
    },
  ],

  // ── PAIN POINTS ──
  painPointsHeadline: "Landscape Construction & Hardscaping",
  painPointsHighlight: "Marketing Challenges",
  painPointsSubheadline: "Even the best design-build crews lose six-figure projects every month to competitors who rank higher, respond faster, and have better portfolios online. Here is what we hear from landscape construction and hardscaping owners in their first call with us.",
  painPoints: [
    {
      icon: Search,
      title: "Invisible on Google When Homeowners Are Planning",
      description: "Your competitors rank in the Map Pack for hardscape contractors near me, backyard remodel near me, and paver patio installers. You do not. Every search that does not find you is a $40K–$150K project going to someone else — often a company with a weaker portfolio.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "Paying for Shared Leads That Go to Five Contractors",
      description: "Lead aggregators like Angi and Thumbtack sell the same backyard remodel lead to five contractors simultaneously. You are paying per lead for a race to the bottom on price. Owned marketing eliminates that dynamic entirely.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Calendar,
      title: "Missing the Design-Season Window Every Year",
      description: "Homeowners plan outdoor living projects in winter for spring builds. Fall design consultations fill the following year's calendar. Most landscape construction companies start marketing reactively — when the build schedule goes quiet — and spend design season scrambling. A proactive seasonal calendar changes that.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Bot,
      title: "Design Inquiries Going Unanswered After Hours",
      description: "A homeowner submits a $75K backyard remodel inquiry at 9pm. You do not see it until Monday. They have already booked two other consultations. AI-powered lead capture ensures every call, form, and chat is captured and qualified — regardless of when it comes in.",
      hasImage: false,
      showAILogos: true,
    },
    {
      icon: Star,
      title: "Not Enough Google Reviews to Win High-Trust Projects",
      description: "Homeowners investing $50K–$200K in outdoor living projects read reviews obsessively before scheduling a first consultation. If your competitors have 180 reviews and you have 35, you lose the shortlist before anyone visits your website. Systematic review generation closes that gap.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Globe,
      title: "A Website That Does Not Showcase Your Design Work",
      description: "Most landscape construction and hardscaping websites look outdated, load slowly on mobile, and bury the portfolio behind menus. A homeowner planning a $100K project has 30 seconds to decide whether you look like the right contractor. A conversion-focused website with a strong portfolio is your best salesperson.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Layers,
      title: "Commercial & HOA Contracts Lost to Better-Ranked Competitors",
      description: "Property managers, HOA boards, and commercial developers looking for a reliable hardscape and site work partner compare three or four contractors before awarding a project. If your Google Business Profile is thin, your website loads slowly on mobile, and you have fewer reviews than a nearby competitor — you lose the bid before the first phone call.",
      hasImage: false,
      showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of juggling disconnected tools and chasing leads from aggregators, GrowSmallBiz builds a complete marketing system that generates exclusive, inbound leads from homeowners and commercial clients planning high-ticket landscape construction projects in your service area.",

  // ── INDUSTRY STATS ──
  industryStats: {
    headline: "The Market You're",
    headlineHighlight: "Competing In",
    subheadline: "Verified industry data — the scale of the market your landscape construction and hardscaping business operates in and why local visibility determines who wins the six-figure projects.",
    items: [
      {
        value: "$188.8B",
        label: "U.S. landscaping services industry revenue in 2025",
        source: "IBISWorld via NALP 2025",
        sourceUrl: "https://www.landscapeprofessionals.org/LP/LP/Media/landscape-industry-statistics.aspx",
      },
      {
        value: "692,777",
        label: "landscaping and hardscape businesses competing for local market share",
        source: "IBISWorld via NALP 2025",
        sourceUrl: "https://www.landscapeprofessionals.org/LP/LP/Media/landscape-industry-statistics.aspx",
      },
      {
        value: "<5%",
        label: "market share held by any single firm — local Map Pack position is the primary differentiator",
        source: "IBISWorld via LawnStarter 2025",
        sourceUrl: "https://www.lawnstarter.com/blog/statistics/lawn-care-and-landscaping-industry-statistics/",
      },
      {
        value: "45%",
        label: "of consumers now use AI tools to find local services — up from 6% one year ago",
        source: "BrightLocal Local Consumer Review Survey 2026",
        sourceUrl: "https://www.brightlocal.com/research/lcrs-ai-trust/",
      },
    ],
  },

  // ── SYSTEM DIAGRAM ──
  systemDiagramHeadline: "See How It All Works Together",
  systemDiagramBody: "GrowSmallBiz builds a predictable marketing system for landscape construction and hardscaping contractors: Local SEO and Google Business Profile optimization captures homeowners in the planning phase, Google Ads and Local Services Ads captures high-intent buyers immediately, reputation management drives the review velocity that wins high-trust projects, and AI-powered lead capture ensures no design inquiry is missed — day or night, design season or off-season. Every channel works together, not in isolation.",

  // ── MID-PAGE CTAs ──
  ctaAfterPainPoints: {
    headline: "Ready to Stop Competing for Shared Leads?",
    subtext: "Let's build your exclusive, inbound lead pipeline for high-ticket landscape construction and hardscaping projects.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Call Us",
  },
  ctaAfterSeo: {
    headline: "See Where Your Landscape Construction & Hardscaping Company Ranks – Free Local SEO Audit",
    subtext: "Find out exactly where your business appears across Google Search, Google Maps, and AI search platforms – and where your competitors are outranking you.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See the AI Client Growth System for Landscape Construction in Action",
    subtext: "Watch how automated lead capture, seasonal campaigns, and referral automation work together to fill your build calendar — without you chasing every design inquiry.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },

  // ── ON THIS PAGE NAV ──
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

  // ── CORE SERVICES ──
  coreServicesHeadline: "AI-Powered Marketing System for Landscape Construction & Hardscaping",
  coreServicesHighlight: "",
  coreServicesSubheadline: "Every service works together. No gaps between channels. One team, one strategy, one dashboard — built for the six-figure outdoor project pipeline.",
  coreServices: [
    {
      icon: HomeIcon,
      title: "Full Front & Backyard Remodeling",
      whatWeDo: "Lead generation for complete front-to-back yard transformations — grading, planting, hardscape, lighting, and drainage delivered as one integrated project.",
      impact: "A steady pipeline of $40K–$150K design-build inquiries from homeowners planning full outdoor transformations.",
    },
    {
      icon: Layers,
      title: "Architectural Hardscape & Concrete",
      whatWeDo: "Campaigns for paver patios, stamped concrete, natural stone, driveways, and walkways — targeting homeowners who search hardscape contractor near me and paver patio installation.",
      impact: "High-margin hardscape projects that anchor your build calendar and drive add-on scope.",
    },
    {
      icon: Flame,
      title: "Luxury Outdoor Living & Kitchens",
      whatWeDo: "Targeted campaigns for outdoor kitchens, pizza ovens, fire features, pergolas with amenities, and full outdoor entertainment areas — capturing homeowners searching outdoor kitchen builder and luxury patio contractor.",
      impact: "Signature high-ticket projects that build portfolio credibility and win future referrals.",
    },
    {
      icon: Shield,
      title: "Hillside Stabilization & Retaining Walls",
      whatWeDo: "Local SEO and Google Ads for engineered retaining walls, segmental block walls, and hillside stabilization — a category with high urgency and limited qualified competition.",
      impact: "Qualified retaining wall and hillside repair leads at a predictable cost per acquisition.",
    },
    {
      icon: Hammer,
      title: "Decks, Pergolas & Carpentry",
      whatWeDo: "Dedicated landing pages and paid campaigns for composite decks, cedar and redwood pergolas, arbors, and custom outdoor carpentry — timed to spring and fall design demand.",
      impact: "Steady deck and pergola bookings that fill crew calendars between larger hardscape builds.",
    },
    {
      icon: Zap,
      title: "Foundation Systems: Drainage & Lighting",
      whatWeDo: "Marketing for the invisible layer — French drains, dry wells, low-voltage landscape lighting, and irrigation infrastructure that protects and elevates every finished landscape.",
      impact: "Foundation-service revenue that attaches to nearly every remodel and generates standalone leads for problem-solving homeowners.",
    },
  ],

  // ── STAGED APPROACH ──
  stagedApproachBadge: "WHERE TO START",
  stagedApproachHeadline: "You Don't Have to Do",
  stagedApproachHighlight: "Everything at Once",
  stagedApproachSubheadline: "Most landscape construction and hardscaping companies try to launch SEO, Google Ads, a new website, and automation all at the same time — then wonder why nothing gets traction. GrowSmallBiz uses a staged approach that builds each layer on a solid foundation, so every dollar you invest compounds on the one before it.",
  stagedApproachStages: [
    {
      stage: "Stage 1",
      label: "Quick Wins",
      timeline: "30–90 Days",
      icon: Zap,
      color: "emerald",
      services: [
        "Conversion-focused website design with strong portfolio module",
        "Google Business Profile full optimization",
        "Google Local Services Ads (LSA) setup and Google Guarantee verification",
        "Reputation management + automated review requests (post-project)",
        "AI Receptionist — 24/7 call and chat capture",
        "Referral automation system setup",
      ],
      unlocks: "Immediate inbound design inquiries, Map Pack presence, and zero missed leads — before investing in longer-term channels.",
    },
    {
      stage: "Stage 2",
      label: "Growth",
      timeline: "3–6 Months",
      icon: TrendingUp,
      color: "blue",
      services: [
        "Managed AI SEO — local keyword rankings across your service area",
        "Google Ads (PPC) — seasonal design-consultation campaigns",
        "City and service area landing pages for local keyword coverage",
        "Review velocity building — Map Pack position consolidation",
        "Seasonal campaign calendar — winter design consults, spring build, fall finishing",
      ],
      unlocks: "Organic rankings that generate leads without ad spend, and paid campaigns that compound on your established credibility.",
    },
    {
      stage: "Stage 3",
      label: "Scale",
      timeline: "6–12 Months",
      icon: BarChart3,
      color: "orange",
      services: [
        "Full funnel marketing automation — inquiry to signed contract to referral",
        "Commercial, HOA, and developer contract acquisition campaigns",
        "Content cluster and topical authority building — own every outdoor-living search in your market",
        "AI search visibility tracking across 6 platforms",
        "Social media organic campaign management with portfolio-first content",
        "Retargeting across Google Display and Meta",
      ],
      unlocks: "Market dominance — appearing everywhere your customers search, across every channel, with a fully automated lead and retention system.",
    },
  ],

  // ── WEBSITE DESIGN ──
  websiteDesignBadge: "Landscape Construction & Hardscaping Website Design",
  websiteDesignHeadline: "Websites Built to Convert Landscape Construction Visitors",
  websiteDesignHighlight: "Into Consultations and Signed Contracts",
  websiteDesignSubheadline: "Most landscape construction and hardscaping websites look outdated, load slowly on mobile, and bury the portfolio. We build fast, mobile-first websites with portfolio-forward design that turn search traffic into booked consultations.",
  websiteDesignImage: croWebsiteDesign,
  websiteDesignImageAlt: "Conversion-focused website design mockup for a fictitious landscape construction and hardscaping contractor, featuring a hero section, services grid, featured project portfolio, trust badges, and a consultation booking form.",
  websiteDesignFeatureHeadline: "Websites That Work as Hard as Your Design-Build Crew",
  websiteDesignFeatureBody: "A conversion-focused website for a landscape construction or hardscaping company does three things: it loads in under 3 seconds on mobile, it makes it effortless for a homeowner to request a consultation, and it signals enough credibility — through portfolio photos, reviews, and service pages — that a first-time visitor trusts you with a six-figure project before they pick up the phone. GrowSmallBiz builds websites that accomplish all three from day one.",
  websiteDesignBullets: [
    "Mobile-first design that loads in under 3 seconds on any device",
    "Service-specific pages for hardscape, outdoor kitchens, retaining walls, decks, and full remodels",
    "Portfolio-forward layout with before-and-after galleries on every service page",
    "Consultation booking form and click-to-call visible on every page",
    "Google Business Profile integration and local schema markup",
    "City and neighborhood-specific landing pages for local SEO",
    "Review integration displaying your Google and Yelp ratings prominently",
    "Design-process explainer that pre-sells the consultation before the call",
  ],
  aiSearchCalloutHeadline: "Google Still Drives Most Landscape Construction Leads.",
  aiSearchCalloutHighlight: "But AI Search Is Changing How Homeowners Find You.",
  aiSearchCalloutBody: "According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools like ChatGPT, Gemini, and Perplexity to find local services — up from just 6% one year ago. AI is now the third most popular source homeowners use when searching for a local business. SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. When a homeowner asks an AI assistant which hardscape or landscape construction contractor to call, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz optimizes your website and content for both Google and AI answer engines simultaneously, so your business is in the 1.2% that gets recommended — not the 98.8% that AI ignores.",
  aiSearchStats: [
    { value: "45%", label: "of consumers now use AI to find local services — up from 6% one year ago (BrightLocal 2026)" },
    { value: "6", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous AI search monitoring and optimization" },
  ],

  // ── SEO ──
  seoBadge: "AI-Powered SEO for Landscape Construction & Hardscaping",
  seoHeadline: "Local SEO That Puts Your Landscape Construction & Hardscaping Company",
  seoHighlight: "at the Top of Google Maps",
  seoSubheadline: "Comprehensive local search optimization that drives high-ticket design consultations, hardscape inquiries, and commercial bids from homeowners and property managers across your service area.",
  seoContentAuthorityStatement: "We Don't Publish Bulk AI Blogs. We Build Landscape Construction Authority.",
  seoAiVisibilityHeading: "We Get Your Landscape Construction & Hardscaping Company Recommended by AI Search Engines",
  topicMapCenterLine1: "Hardscape &",
  topicMapCenterLine2: "Outdoor Living",
  topicMapSpokes: [
    "Full Backyard Remodels",
    "Paver Patios & Concrete",
    "Outdoor Kitchens & Fire",
    "Retaining Walls",
    "Decks & Pergolas",
    "Drainage & Lighting",
    "Commercial Site Work",
  ],
  seoEditorialHeadline: "Why Landscape Construction & Hardscaping SEO Works",
  seoEditorialHighlight: "Differently",
  seoEditorialBody: [
    "Local SEO for landscape construction and hardscaping contractors works because the search intent is high-value and geographically specific. A homeowner searching 'hardscape contractor near me' or 'backyard remodel [city]' is planning a $40K–$150K project and is comparing three to five contractors within a week. The U.S. landscaping services industry generates $188.8 billion annually across 692,777 businesses, with no single firm controlling more than 5% of the market. In this highly fragmented industry, the contractor that appears first in the Map Pack with strong reviews and a portfolio-forward website wins the consultation. The contractor on page two does not.",
    "The Map Pack algorithm rewards three signals above all others: proximity to the searcher, review count and recency, and relevance of your Google Business Profile to the search query. GrowSmallBiz optimizes all three systematically — not just your website, but your GBP, your citations, your review velocity, and your local content.",
    "Design-season demand creates a specific SEO challenge that general agencies miss. Landscape construction and hardscaping searches spike in winter for spring builds, and again in late summer for fall finishing. If your rankings aren't established before each planning window, you miss the pipeline. We build your local authority year-round so you own the Map Pack when it matters most.",
    "In the Chicagoland outdoor-living campaign we managed, the client reached a 1.1 average Map Pack rank across 123 grid points — meaning they ranked first for hardscape and landscape construction searches across their entire service area. Total impressions increased 138.54 percent and phone number clicks increased 770 percent in the first two months of the campaign.",
  ],
  seoEditorialPullQuote: "A Chicagoland outdoor-living company managed by GrowSmallBiz achieved a 1.1 average Map Pack rank across all 123 local search grid points within six months — with 123 of 123 grid points ranking in position 1 or 2.",
  seoKeywordCategories: {
    fullRemodel: {
      label: "Full Front & Backyard Remodeling",
      icon: HomeIcon,
      image: remodelingSeo,
      keywords: [
        "backyard remodel near me",
        "full backyard renovation",
        "landscape design build near me",
        "front yard remodel contractor",
      ],
      competitors: "Design-build landscape firms, national landscape franchises, Houzz/Thumbtack listings",
    },
    hardscape: {
      label: "Architectural Hardscape & Concrete",
      icon: Layers,
      image: hardscapeSeo,
      keywords: [
        "hardscape contractor near me",
        "paver patio installation",
        "stamped concrete contractor",
        "natural stone patio installer",
      ],
      competitors: "Local hardscape specialists, concrete contractors, national paver-authorized dealers",
    },
    outdoorLiving: {
      label: "Luxury Outdoor Living & Kitchens",
      icon: Flame,
      image: outdoorLivingSeo,
      keywords: [
        "outdoor kitchen builder",
        "outdoor kitchen contractor near me",
        "fire pit installation",
        "luxury patio contractor",
      ],
      competitors: "Outdoor kitchen specialists, design-build firms, custom pergola companies",
    },
    retainingWalls: {
      label: "Hillside Stabilization & Retaining Walls",
      icon: Shield,
      image: retainingWallSeo,
      keywords: [
        "retaining wall contractor near me",
        "segmental block wall installer",
        "hillside stabilization contractor",
        "engineered retaining wall",
      ],
      competitors: "Structural wall specialists, general landscape firms bundling walls, engineering-adjacent contractors",
    },
    decksPergolas: {
      label: "Decks, Pergolas, & Carpentry",
      icon: Hammer,
      image: deckPergolaSeo,
      keywords: [
        "deck builder near me",
        "pergola installation contractor",
        "composite deck contractor",
        "custom outdoor carpentry",
      ],
      competitors: "Deck-only builders, general contractors, TimberTech/Trex dealer networks",
    },
    foundationSystems: {
      label: "Foundation Systems (Drainage & Lighting)",
      icon: Zap,
      image: foundationSeo,
      keywords: [
        "french drain installation near me",
        "landscape drainage contractor",
        "low voltage landscape lighting installer",
        "yard drainage solutions",
      ],
      competitors: "Drainage specialists, landscape lighting companies, irrigation contractors",
    },
  },

  // ── FOUR-LANE SEARCH ──
  fourLaneBadge: "SEARCH DOMINANCE",
  fourLaneHeadline: "One Search Market.",
  fourLaneHighlight: "Four Ways to Win It.",
  fourLaneSubheadline: "When a homeowner is planning a backyard remodel, a paver patio, an outdoor kitchen, or a retaining wall, they search in four completely different ways — and each one requires a different strategy. GrowSmallBiz builds your presence across all four simultaneously so you own your market regardless of how your next customer searches.",
  fourLaneLanes: [
    {
      lane: "Map Pack",
      icon: MapPin,
      color: "emerald",
      headline: "Win the Local 3-Pack",
      description: "The Map Pack appears above all organic results for local searches and is driven by Google Business Profile optimization, review velocity, citation consistency, and proximity signals — not your website alone. It is the highest-click position for hardscape and landscape construction near me searches.",
      howWeDoIt: [
        "Full GBP optimization — categories, services, portfolio photos, weekly posts",
        "Systematic review generation — automated post-project SMS and email request",
        "Local citation building across 50+ directories for NAP consistency",
        "GBP heatmap tracking — visualize your Map Pack rank across your entire service area",
      ],
    },
    {
      lane: "LSA",
      icon: Shield,
      color: "blue",
      headline: "Appear Above All Ads",
      description: "Google Local Services Ads appear above standard Google Ads and organic results with the Google Guarantee badge. They charge per verified lead, not per click. The highest-intent buyers click here first.",
      howWeDoIt: [
        "LSA account setup and Google Guarantee verification",
        "Budget optimization — pay per verified call lead, not per click",
        "Review-gated eligibility — we build your review count to qualify and maintain status",
        "Category coverage for hardscape, landscape construction, and outdoor living search terms",
      ],
    },
    {
      lane: "Organic Search",
      icon: Search,
      color: "amber",
      headline: "Own the Research Queries",
      description: "Homeowners researching backyard remodel costs, hardscape material options, or outdoor kitchen project ideas find you through organic rankings. These buyers convert over weeks or months and represent the largest search volume and lowest long-term cost per acquisition.",
      howWeDoIt: [
        "Service pages optimized for hardscape and landscape construction keywords",
        "City and neighborhood landing pages — rank for location-specific searches across your service area",
        "Blog content targeting research queries — cost guides, material comparisons, project timelines",
        "Topical authority building — own every relevant search cluster in your local market",
      ],
    },
    {
      lane: "AI Search",
      icon: Bot,
      color: "purple",
      headline: "Get Cited by AI Assistants",
      description: "When a homeowner asks ChatGPT, Perplexity, or Google AI Overview which hardscape or landscape construction contractor to call in Danville or Walnut Creek, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz structures your content to be cited by AI answer engines.",
      howWeDoIt: [
        "Entity optimization — ensure AI engines recognize your business as a verified local authority",
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
      type: "traditional",
      label: "Traditional Google Search",
      query: "hardscape contractor near me",
      items: [
        "[LSA] Bay Area Outdoor Living — Google Guaranteed ★★★★★ 412 reviews",
        "[LSA] Peninsula Hardscape Co — Google Guaranteed ★★★★☆",
        "Map Pack — Tri-Valley Paver & Stone 89 reviews",
        "Map Pack — East Bay Landscape Construction 167 reviews",
        "Map Pack — Diablo Backyard Builders 203 reviews",
        "Organic results — 10 blue links below the fold",
      ],
      caption: "LSA + Map Pack + Page 1 organic = full search coverage. Miss any one and a competitor takes that consultation.",
    },
    {
      type: "ai",
      label: "AI Search — ChatGPT and Perplexity",
      query: "Which hardscape contractor should I hire for a full backyard remodel in Danville CA?",
      items: [
        "Based on local reviews, verified project history, and online presence, GrowSmallBiz clients are consistently cited for backyard remodels and hardscape in Danville and the Tri-Valley area.",
        "Sources cited: Google Reviews, Yelp, GrowSmallBiz.io, local city pages, case studies",
        "AI engines build answers from structured content, entity signals, and citation footprint — not keyword density.",
      ],
      caption: "AI search skips the link list entirely. If your content is not structured for citation, your business does not exist in this channel.",
    },
  ],

  // ── PAID MEDIA ──
  paidMediaHeadline: "We Run High-Converting Google Ads for",
  paidMediaHighlight: "Landscape Construction & Hardscaping Contractors",
  paidMediaSubheadline: "Strategic paid advertising recommendations by service type and buyer intent – full remodels, hardscape installs, outdoor kitchens, and commercial site work each require a different campaign approach.",
  adCreatives: [
    { id: "full-remodel", genre: "Full Backyard Remodel", image: fullRemodelAd, platforms: ["Google Ads (Search)", "Facebook Ads"], description: "High-ticket design-build inquiries. Consultation-first funnel. Longest sales cycle, highest project value." },
    { id: "hardscape", genre: "Paver Patio & Hardscape", image: hardscapeAd, platforms: ["Google Ads (Search)", "Google LSA"], description: "High-intent hardscape searches. Portfolio-forward landing pages. 24/7 AI receptionist backup." },
    { id: "outdoor-kitchen", genre: "Outdoor Kitchen & Living", image: outdoorKitchenAd, platforms: ["Google Ads (Search)", "Facebook Ads"], description: "Luxury outdoor living campaigns. Pinterest-style visual creative. Winter design-season ramp." },
    { id: "commercial", genre: "Commercial & HOA Site Work", image: commercialAd, platforms: ["Google Ads (Search)", "LinkedIn"], description: "HOA and property management targeting. Longer sales cycle but highest lifetime value." },
    { id: "local-seo", genre: "Local Map Pack", image: localMapPack, platforms: ["Google LSA", "Google Ads"], description: "Year-round Map Pack presence. Review-gated click-through. High-intent local searches." },
  ],
  paidMediaByGenre: [
    {
      genre: "Residential Design-Build",
      icon: HomeIcon,
      color: "from-emerald-500/20 to-emerald-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Full keyword and budget control. Design-consultation campaigns. Service-specific landing pages by scope and material." },
        { name: "Google LSA", reason: "Appears above all other results with Google Guarantee badge. Best for high-intent hardscape and outdoor living searches." },
      ],
      secondary: [
        { name: "Facebook & Instagram Ads", reason: "Portfolio-first visual creative. Homeowner targeting by geography, home value, and life event." },
        { name: "Pinterest Ads", reason: "Outdoor living inspiration searches. Homeowners in the earliest planning phase." },
      ],
    },
    {
      genre: "Hardscape & Concrete Specialists",
      icon: Layers,
      color: "from-blue-500/20 to-blue-600/10",
      primary: [
        { name: "Google LSA", reason: "Appears above all other results. Best for high-intent paver patio and stamped concrete searches." },
        { name: "Google Ads (Search)", reason: "Material-specific campaigns — paver, stamped concrete, natural stone. Keyword-level budget control." },
      ],
      secondary: [
        { name: "Facebook Ads", reason: "Before-and-after creative that showcases finished hardscape work. Homeowner targeting by home value." },
        { name: "Nextdoor Ads", reason: "Hyper-local neighborhood targeting. Word-of-mouth amplifier for hardscape recommendations." },
      ],
    },
    {
      genre: "Commercial, HOA & Developer Site Work",
      icon: Building2,
      color: "from-violet-500/20 to-violet-600/10",
      primary: [
        { name: "Google Ads (Search)", reason: "Commercial hardscape and HOA site work targeting. Higher CPC but highest lifetime value." },
        { name: "LinkedIn Ads", reason: "Property manager, HOA board member, and developer targeting. B2B commercial project acquisition." },
      ],
      secondary: [
        { name: "Google Display", reason: "Retargeting property managers who visited your site. Visual display for commercial portfolio." },
        { name: "Email Outreach", reason: "Direct outreach to HOA management companies and commercial property managers." },
      ],
    },
  ],
  metaAdSetupHeadline: "How We Ramp Your Ads 6 Weeks Before Design Season",
  metaAdSetupSubheadline: "Seasonal campaign calendars, consultation-first funnels, and conversion-optimized landing pages — built specifically for the landscape construction industry demand cycle.",
  trackingRetargetingEssentials: [
    { icon: Target, title: "Google Conversion Tracking", description: "Every call, form submission, and consultation request tracked back to the keyword and campaign that generated it." },
    { icon: RefreshCw, title: "Seasonal Budget Automation", description: "Ad spend ramps automatically 4–6 weeks before winter design season and spring build ramp. Pulls back in slow periods to protect budget." },
    { icon: BarChart3, title: "Monthly Performance Reporting", description: "Full campaign report every month: cost per lead, consultation booking rate, top-performing keywords, and seasonal trend analysis." },
  ],

  // ── RETARGETING ──
  retargetingHeadline: "Get Found Once.",
  retargetingHighlight: "Stay Top-of-Mind Until They Sign the Contract.",
  retargetingSubheadline: "A homeowner researching a backyard remodel or outdoor kitchen visits your site and leaves without booking. Retargeting brings them back when they're ready to schedule a consultation.",
  retargetingBody: [
    "Landscape construction and hardscape decisions are rarely made on the first website visit. According to BrightLocal's 2026 research, the average consumer uses six different platforms when evaluating a local business before hiring. A homeowner planning a $75K backyard remodel will visit multiple websites, save inspiration on Pinterest and Houzz, check reviews across platforms, and compare contractors over weeks before booking any consultation. Retargeting ensures your company is visible throughout that entire decision window — not just during the first search.",
    "GrowSmallBiz sets up Google Display retargeting and Meta retargeting for every paid media client. Visitors who viewed your hardscape or outdoor living service pages see your ads across the web and social platforms for up to 30 days after their visit – keeping your portfolio in front of them until they are ready to book.",
  ],

  // ── SOCIAL MEDIA ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Presence and Strategy",
  socialMediaSubheadline: "Platform-specific social media strategies for landscape construction and hardscaping contractors – built around portfolio-forward visual content that drives homeowner trust and commercial inquiries.",
  socialMediaByGenre: [
    {
      genre: "Residential Design-Build",
      color: "from-emerald-500/20 to-emerald-600/10",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "High-quality project photography, drone shots, time-lapse builds, and before-and-after reels. Visual proof of design quality." },
        { name: "Facebook", icon: Facebook, strategy: "Portfolio showcases, homeowner testimonial videos, project process content. Homeowner demographic 35–65." },
      ],
      secondary: [
        { name: "Pinterest", icon: Search, strategy: "Outdoor living inspiration boards. Homeowners in earliest planning phase save your work for later reference." },
        { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood-specific portfolio posts. Community trust building for high-ticket residential projects." },
      ],
    },
    {
      genre: "Hardscape & Concrete Specialists",
      color: "from-blue-500/20 to-blue-600/10",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Material close-ups, install time-lapses, drone finish shots. Craft-forward visual brand building." },
        { name: "Facebook", icon: Facebook, strategy: "Before-and-after hardscape reveals, patio party lifestyle content, seasonal promotions." },
      ],
      secondary: [
        { name: "YouTube", icon: Youtube, strategy: "Install process videos, material comparison content, project walkthroughs. Searchable long-form content." },
        { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood home improvement recommendations. Local trust signal for hardscape referrals." },
      ],
    },
    {
      genre: "Commercial, HOA & Developer Site Work",
      color: "from-violet-500/20 to-violet-600/10",
      primary: [
        { name: "LinkedIn", icon: Linkedin, strategy: "Property manager and HOA board outreach. Commercial portfolio showcase. B2B contract acquisition." },
        { name: "Facebook", icon: Facebook, strategy: "Commercial property before-and-after. Site work portfolio. Property management company targeting." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Commercial hardscape and site work portfolio. Visual credibility for B2B buyers." },
        { name: "YouTube", icon: Youtube, strategy: "Commercial project walkthroughs. Multi-phase build explainers. Searchable video content." },
      ],
    },
  ],
  linkedInOutreachEnabled: false,

  // ── AI GROWTH SYSTEM ──
  growthSystemHeadline: "for Landscape Construction & Hardscaping",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop chasing design inquiries manually. GrowSmallBiz builds an automated marketing system that captures, qualifies, and follows up with every landscape construction and hardscape prospect — so your team focuses on the design and the build, not the phone.",
  clientJourneyStages: [
    { stage: "Awareness", icon: Eye, color: "from-blue-500 to-blue-600", description: "A homeowner starts imagining a new patio, outdoor kitchen, or full backyard remodel — often after seeing a friend's project or a Pinterest board.", goal: "Get discovered by homeowners at the moment they start planning" },
    { stage: "Research", icon: Search, color: "from-purple-500 to-purple-600", description: "They search Google or ask an AI assistant for hardscape and landscape construction contractors near them, and save inspiration.", goal: "Appear first in Map Pack, Google Ads, and AI search results" },
    { stage: "Consideration", icon: Star, color: "from-primary to-primary", description: "They compare your portfolio, reviews, and process against two or three competitors over several weeks.", goal: "Convert the comparison with superior portfolio, reviews, and a fast, credible site" },
    { stage: "Consultation", icon: Phone, color: "from-emerald-500 to-emerald-600", description: "They call, fill out a form, or chat with your AI receptionist to book a design consultation.", goal: "Capture every lead 24/7 with AI voice and chat — no missed consultations" },
    { stage: "Retention", icon: RefreshCw, color: "from-amber-500 to-amber-600", description: "They come back for phase-two projects, or refer friends and neighbors after a five-star experience.", goal: "Automate review requests, seasonal check-ins, and referral follow-up" },
  ],
  emailNurturePoints: [
    { title: "Stay Top-of-Mind Through the Full Planning Window", icon: Eye, description: "Most landscape construction and hardscape decisions take weeks or months. Automated email and SMS sequences keep your portfolio visible from first inquiry to signed contract." },
    { title: "Convert First Projects Into Phase-Two Revenue", icon: Heart, description: "A homeowner who invested $50K in a hardscape phase is a strong candidate for outdoor kitchen add-ons, lighting phases, or pool-adjacent work. Automated sequences turn one-project clients into multi-phase revenue." },
    { title: "Turn Happy Clients Into Your Best Lead Source", icon: Gift, description: "An automated referral system reaches satisfied landscape construction clients with a referral offer. Most clients refer one to three neighbors when asked at the right moment with the right incentive. Zero ad spend required." },
  ],
  emailSequenceTitle: "5-Day Inquiry-to-Consultation Automation:",
  emailSequenceHighlight: "From First Contact to Booked Design Meeting",
  noShowResearchCitations: [
    { stat: "15–30%", source: "Service Industry Research — Field Service Management Studies", publication: "", year: "", label: "of consultation appointments are missed when contractors send no advance confirmation" },
    { stat: "38%", source: "Field Service Scheduling Research", publication: "", year: "", label: "reduction in missed consultation windows when designers send a morning-of arrival confirmation with a time window" },
    { stat: "80%", source: "HomeAdvisor Pro Contractor Survey", publication: "", year: "", label: "of homeowners say a confirmed arrival window makes them more likely to be home and ready for the design consultation" },
    { stat: "9x", source: "ServiceTitan Field Service Benchmark Report", publication: "", year: "", label: "more consultation-to-contract conversion when a designer arrival window is sent the morning of the appointment versus no confirmation" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "Design Consultation", icon: ClipboardList, color: "from-emerald-500 to-emerald-600",
      description: "Arrival window confirmation sequence for on-site design consultations",
      noShowImpact: "Missed design consultations waste designer time and delay the entire project pipeline.",
      reminders: [
        { timing: "2 days before", channels: ["email"], content: "Consultation confirmation with address, designer name, and what to prepare (Pinterest boards, budget range, priority list)" },
        { timing: "Morning of", channels: ["email", "sms"], content: "Arrival window SMS: 'Your designer [Name] will be there between 10am–11am. They'll call 15 minutes before arrival.'" },
        { timing: "1 hour before", channels: ["sms"], content: "On-the-way confirmation with designer name, estimated arrival time, and direct contact number" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Follow-Up Proposal", icon: FileText, color: "from-violet-500 to-violet-600",
      description: "Automated follow-up sequence after design proposal delivery to close the contract.",
      noShowImpact: "Most landscape construction proposals are lost to silence — no follow-up, no signed contract.",
      reminders: [
        { timing: "48 hours after proposal", channels: ["email"], content: "Proposal summary + easy schedule call button + FAQ about the design and build process" },
        { timing: "5 days after proposal", channels: ["email", "sms"], content: "Checking in — any questions about the design or the scope?" },
        { timing: "10 days after proposal", channels: ["sms"], content: "Build season availability notice — schedule filling for spring/fall installs" },
      ],
      expectedReduction: "Up to 40% more proposals signed",
    },
    {
      sessionType: "Phase-Two Re-engagement", icon: Layers, color: "from-amber-500 to-amber-600",
      description: "Automated outreach to past clients to activate phase-two projects.",
      noShowImpact: "Past clients who aren't re-engaged for phase-two hire a different contractor for their next phase.",
      reminders: [
        { timing: "6 months after install", channels: ["email"], content: "Phase-two check-in — how has the space been? Ideas for the next phase (lighting, outdoor kitchen, pool-adjacent)." },
        { timing: "12 months after install", channels: ["email"], content: "One-year anniversary photo request + referral incentive + phase-two consultation offer" },
        { timing: "Design-season reactivation", channels: ["sms"], content: "Winter design consultations booking now — priority slots for past clients" },
      ],
      expectedReduction: "30–45% past-client phase-two attach rate",
    },
  ],
  marketingCampaignsHighlight: "High-Ticket Campaigns We Build for Landscape Construction & Hardscape",
  marketingCampaignsSubheadline: "Real high-ticket offers paired with automated funnels — designed to attract full backyard remodels, hardscape and paver patio inquiries, luxury outdoor living projects, and commercial site work bids.",
  marketingCampaigns: [
    {
      genre: "Full Backyard Remodel", icon: HomeIcon, color: "from-emerald-500 to-emerald-700",
      offer: {
        headline: "Complimentary Full Backyard Design Consultation",
        tagline: "[High-Ticket Lead] — On-site design consultation for full front and backyard remodels",
        price: "Free", originalPrice: "$495", savings: "Complimentary",
        includes: ["On-site design walk-through with a lead designer", "Preliminary scope and budget conversation", "Portfolio review of comparable projects", "Design and build timeline outline"],
        urgency: "Limited design-season slots per week", cta: "Book My Design Consultation",
      },
      funnel: ["Google Ads / Facebook", "Landing page", "Consultation request form", "AI qualification call", "On-site design consultation", "Proposal delivered", "Contract signed"],
      topPlatforms: ["Google Ads", "Facebook", "Instagram"],
      seasonality: "Peak design consult: Winter–Early Spring (Jan–Apr) and Late Summer (Aug–Sep)",
    },
    {
      genre: "Paver Patio & Hardscape", icon: Layers, color: "from-blue-500 to-blue-700",
      offer: {
        headline: "Free Paver Patio & Hardscape Quote",
        tagline: "[High-Intent Lead] — On-site measure and full material and labor quote",
        price: "Free", originalPrice: "$195", savings: "Complimentary",
        includes: ["On-site measure and site assessment", "Material options walk-through (paver, stamped, natural stone)", "Full itemized quote", "Portfolio of comparable installs"],
        urgency: "Install slots book 6–10 weeks out", cta: "Get Free Quote",
      },
      funnel: ["Google LSA / Google Ads", "Landing page", "Quote request form", "AI follow-up", "On-site measure", "Proposal signed", "Job scheduled"],
      topPlatforms: ["Google Ads", "Google LSA", "Facebook"],
      seasonality: "Year-round, peak Spring (Mar–May) and Fall (Sep–Oct)",
    },
    {
      genre: "Outdoor Kitchen & Living", icon: Flame, color: "from-orange-500 to-red-500",
      offer: {
        headline: "Free Outdoor Kitchen & Living Design Session",
        tagline: "[Luxury Lead] — Design session for outdoor kitchens, fire features, and full outdoor living builds",
        price: "Free", originalPrice: "$395", savings: "Complimentary",
        includes: ["On-site design session with an outdoor-living specialist", "Appliance and material selection guidance", "Preliminary layout and budget range", "Portfolio of comparable outdoor kitchen builds"],
        urgency: "Design pipeline books out for full season", cta: "Book My Design Session",
      },
      funnel: ["Google Ads / Facebook / Pinterest", "Landing page", "Design session form", "AI follow-up", "On-site design", "Proposal delivered", "Contract signed"],
      topPlatforms: ["Google Ads", "Facebook", "Pinterest"],
      seasonality: "Peak: Winter design (Nov–Feb) for spring build",
    },
    {
      genre: "Retaining Walls & Hillside", icon: Shield, color: "from-slate-500 to-slate-700",
      offer: {
        headline: "Free Retaining Wall & Hillside Site Assessment",
        tagline: "[Urgent High-Value Lead] — On-site assessment for retaining walls, hillside stabilization, and drainage-related wall repair",
        price: "Free", originalPrice: "$250", savings: "Complimentary",
        includes: ["On-site site and slope assessment", "Engineering referral if required", "Wall system options and material walk-through", "Full itemized quote"],
        urgency: "Wall failures are time-sensitive — priority scheduling", cta: "Request Site Assessment",
      },
      funnel: ["Google LSA / Google Ads", "Emergency landing page", "AI call qualification", "On-site assessment", "Proposal signed", "Job scheduled", "Review request"],
      topPlatforms: ["Google LSA", "Google Ads", "Nextdoor"],
      seasonality: "Peak: Rainy Season (Nov–Mar) and after-storm windows",
    },
    {
      genre: "Commercial & HOA Site Work", icon: Building2, color: "from-violet-500 to-violet-700",
      offer: {
        headline: "Free Commercial Hardscape & Site Work Proposal",
        tagline: "[High-Value Contract] — Site walk and full proposal for HOA, property manager, and developer projects",
        price: "Free", originalPrice: "", savings: "",
        includes: ["Full site walk-through", "Scope and phasing recommendations", "Full itemized proposal", "Portfolio of comparable commercial projects"],
        urgency: "Commercial project pipeline books quarters in advance", cta: "Request Proposal",
      },
      funnel: ["LinkedIn Ads", "Landing page", "Proposal request form", "Email nurture", "Sales call", "Contract signed", "Multi-phase build"],
      topPlatforms: ["LinkedIn", "Google Ads", "Email"],
      seasonality: "Peak: Q4 (budget cycles) and Q1 (new-year builds)",
    },
  ],
  seasonalCampaignsHeading: "We Automate for Landscape Construction & Hardscape",
  seasonalCampaigns: [
    { campaign: "Winter Design Consultation Push", timing: "Launch November for December–February design bookings", offer: "Free full backyard design consultations + priority spring build scheduling", channels: ["Google Ads", "Facebook", "Pinterest", "Email"] },
    { campaign: "Spring Hardscape Build Ramp", timing: "Launch in February for March–May install peak", offer: "Free paver patio, hardscape, and full remodel quotes with locked-in spring material pricing", channels: ["Google LSA", "Google Ads", "Facebook"] },
    { campaign: "Outdoor Living Season", timing: "Launch April for May–July outdoor kitchen and pergola builds", offer: "Outdoor kitchen and pergola design sessions with material upgrade incentives", channels: ["Google Ads", "Instagram", "Pinterest"] },
    { campaign: "Fall Finishing & Lighting Push", timing: "Launch August for September–November builds", offer: "Fall install slots for hardscape, landscape lighting, and drainage finishing", channels: ["Google Ads", "Facebook", "Email"] },
    { campaign: "Commercial Contract Season", timing: "Active September–January", offer: "Commercial hardscape and HOA site work proposals aligned to Q4 budget cycles", channels: ["LinkedIn", "Google Ads", "Email"] },
  ],
  pastClientWorkflows: [
    { title: "Phase-Two Check-In", icon: Calendar, description: "Automated email sent 6 months after project completion — a natural moment to introduce phase-two scope (lighting, outdoor kitchen, drainage add-ons)." },
    { title: "Review Request (Post-Project)", icon: Star, description: "Automated SMS + email requesting a Google review within one week of project completion — when the transformation is freshest." },
    { title: "Referral Incentive Automation", icon: Gift, description: "Automated referral offer sent 30 days after project completion — a project credit for every neighbor who signs a contract. Tracked automatically, reward delivered via SMS. No manual follow-up required from your team." },
  ],

  // ── REPUTATION ──
  reputationHeadline: "More 5-Star Reviews.",
  reputationHighlight: "Higher Map Pack. More High-Ticket Consultations.",
  reputationSubheadline: "According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision, 31% ignore any business with a rating below 4.5 stars, and 74% only trust reviews from the last 90 days. For landscape construction and hardscaping contractors, reviews determine whether a homeowner books a consultation or hires a competitor — before you've ever spoken.",
  reputationInnerH3: "We Handle Your Landscape Construction & Hardscaping Reputation",
  reputationBullets: [
    "97% of consumers read reviews before making a hiring decision — reviews determine whether a homeowner calls you or your competitor (BrightLocal 2026)",
    "31% of consumers now ignore any business with a rating below 4.5 stars — Map Pack visibility means nothing if your rating disqualifies you on sight (BrightLocal 2026)",
    "74% of consumers only trust reviews from the last 90 days — review recency matters as much as total count for Map Pack ranking and conversion (BrightLocal 2026)",
    "89% of consumers expect a response to their reviews — unanswered reviews signal poor customer care to every future client searching your name (BrightLocal 2026)",
    "Systematic competitor review gap analysis — know exactly how many reviews you need to take the top Map Pack spot",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Project Complete", description: "Crew completes hardscape, outdoor living, or full remodel project" },
    { step: "2", title: "Automated Trigger", description: "System sends SMS + email review request within one week of completion" },
    { step: "3", title: "One-Tap Review", description: "Client taps link and lands directly on Google review form – zero friction" },
    { step: "4", title: "Review Posted", description: "5-star review added to Google profile, boosting Map Pack ranking" },
    { step: "5", title: "Response & Archive", description: "GrowSmallBiz responds to review and archives for testimonial use" },
  ],
  giftCardUseCases: "neighbor referrals, past-client anniversary gifts, and commercial prospect outreach",
  giftAndReferralPrograms: [
    {
      title: "Referral Reward Program", icon: UserPlus,
      description: "Automated referral program that rewards existing clients for sending new landscape construction and hardscape customers your way.",
      features: ["Automated referral tracking", "Reward delivery via SMS", "Project credit on next phase", "Referral performance reporting"],
    },
    {
      title: "Client Gift Cards & Add-On Credits", icon: Gift,
      description: "Sell landscape construction gift cards and phase-two credits for neighbor gifts, HOA welcome packages, and past-client anniversaries.",
      features: ["Digital and physical gift cards", "Custom amounts", "Automated delivery", "Redemption tracking"],
    },
    {
      title: "Reputation Score Tracking", icon: BarChart3,
      description: "Monthly reputation report showing review count, average rating, recency trend, and competitor comparison – so you always know exactly where you stand in the Map Pack.",
      features: ["Monthly review velocity report", "Competitor review gap analysis", "Map Pack position tracking", "Response rate monitoring"],
    },
  ],

  // ── AI VOICE & CHAT ──
  aiVoiceChatSectionHeadline: "Never Miss a Six-Figure Design Inquiry",
  aiVoiceChatHighlight: "Again.",
  aiVoiceChatSubheadline: "Never miss a $75K backyard remodel inquiry submitted at 9pm, a commercial site-work call on a Sunday, or an urgent retaining wall call after a storm. Your AI Receptionist and Website Live Chat work together — answering, qualifying, booking, and following up with every lead automatically, around the clock.",
  aiFeatures: [
    { title: "24/7 AI Voice Receptionist", icon: Phone, color: "violet", description: "", features: [] },
    { title: "Conversational AI Chat", icon: MessageSquare, color: "cyan", description: "", features: [] },
  ],
  aiReceptionistComparisonH3: "One AI Receptionist. Zero Sick Days. A Fraction of the Cost.",
  aiReceptionistComparisonBody: "A full-time receptionist costs $38,000–$52,000 per year in salary alone — before benefits, payroll taxes, PTO, training, and turnover. And even the best human receptionist clocks out at 5pm, takes lunch breaks, calls in sick, and can only handle one call at a time. Your AI Receptionist works every hour of every day — and never puts a $100K design inquiry on hold.",
  aiReceptionistComparison: [
    { human: "Works 9am–5pm Monday to Friday", ai: "Available 24/7/365 — evening design inquiries, weekend commercial calls, urgent wall failures" },
    { human: "One call at a time — callers get voicemail during peak volume", ai: "Handles unlimited simultaneous calls — every caller answered instantly" },
    { human: "$38,000–$52,000/year salary + benefits, PTO, sick leave, payroll tax", ai: "Fraction of the cost — no benefits, no PTO, no sick days, no turnover" },
    { human: "Takes lunch breaks, coffee breaks, personal time", ai: "Zero downtime — no breaks, no distractions, always at full capacity" },
    { human: "Calls in sick — no coverage during design-season spikes", ai: "Never sick, never on vacation — always available when you need it most" },
    { human: "Weeks of training before productive", ai: "Live in 30 days — pre-trained on your services, project scope ranges, and service area" },
    { human: "Cannot send consultation confirmations or SMS follow-ups", ai: "Books consultations, sends confirmations and arrival windows — automatically" },
    { human: "Covers phone calls only — no website chat coverage", ai: "Covers phone calls and website live chat from one unified AI system" },
    { human: "May misroute urgent after-hours requests", ai: "Detects urgency by service type — escalates wall failures and drainage emergencies instantly" },
    { human: "Cannot transfer to a human outside business hours", ai: "Transfers to a live human when needed — flags after-hours emergencies for immediate callback" },
  ],
  aiReceptionistHighlightText: "When a homeowner submits a $100K outdoor kitchen inquiry at 10pm — your competitor's voicemail gets that call. Your AI Receptionist answers, qualifies the project scope, books the design consultation, and sends a confirmation SMS. That project is yours before sunrise.",
  aiReceptionistImage: aiReceptionistImage,
  aiReceptionistImageAlt: "AI-driven multi-call interface for landscape construction and hardscaping businesses, featuring full backyard remodel, outdoor kitchen, retaining wall, and commercial site work inquiries.",
  aiVoiceFeatureBullets: [
    "Answers every call 24/7 — evening design inquiries, weekend commercial calls, urgent wall or drainage failures",
    "Qualifies the lead by service type (full remodel, hardscape, outdoor kitchen, wall, commercial) and project scope",
    "Books design consultation appointments directly into your calendar — no back-and-forth, no missed scheduling windows",
    "Sends deposit and payment links for design retainers via SMS — collect faster without chasing invoices",
    "Confirms booked appointments automatically — arrival window SMS the day before and morning of, with designer name",
    "Transfers to a live human team member when needed — and flags after-hours emergencies for immediate callback",
    "Integrates with your CRM — every lead logged automatically with full conversation summary",
    "Sends lead summary to your team via SMS and email within 60 seconds of every inquiry",
  ],
  aiChatImage: aiWebsiteLivechatImage,
  aiChatImageAlt: "Landscape construction website showcasing hardscape and outdoor living portfolio, with a live chat feature on a smartphone for design consultation inquiries.",
  aiChatFeatureBullets: [
    "Answers service questions, project scope questions, and availability requests instantly — 24/7, no staffing required",
    "Qualifies website visitors by project type, location, and scope range before routing to your team",
    "Captures lead contact information from visitors who are not ready to call but are actively researching",
    "Books design consultations directly from the chat widget — no phone call required",
    "Sends deposit and design retainer links for clients who prefer not to call",
    "Escalates urgent requests (wall failure, storm damage, drainage) to immediate callback notification",
    "Hands off seamlessly to your AI Voice Receptionist — one unified system across phone and web",
  ],

  // ── WHY CHOOSE US ──
  whyChooseUsHeadline: "Why Landscape Construction & Hardscaping Contractors",
  whyChooseUsHighlight: "Choose GrowSmallBiz",
  whyChooseUsSubtitle: "Your High-Ticket Home Service Marketing Partner — Not a Generalist Agency",
  whyChooseUsBody: "GrowSmallBiz Digital Marketing, founded by Subrata Guha and headquartered in Danville, CA, specializes in marketing for landscape construction and hardscaping contractors across the San Francisco Bay Area and the United States. We bring 30+ years of enterprise marketing and digital transformation experience to the home service industry – combined with the local market knowledge that national agencies cannot replicate.",
  whyChooseUsCards: [
    { icon: Layers, title: "Landscape Construction & Hardscape Specialists", description: "GrowSmallBiz focuses exclusively on high-ticket home service verticals — not plumbers one week and restaurants the next. We understand the consultation-first sales cycle, the design-season demand pattern, and the specific Map Pack signals that drive bookings for hardscape contractor near me and backyard remodel near me searches." },
    { icon: MapPin, title: "Bay Area Local", description: "We are based in Danville. We know the design trends, the permit realities, and the neighborhoods across Contra Costa County, the Tri-Valley, and the greater Bay Area. Your campaigns use real local intelligence." },
    { icon: Shield, title: "Exclusive Territory", description: "We do not work with competing landscape construction or hardscaping contractors in the same service area. Your leads stay yours – no conflicts of interest, no shared client lists." },
    { icon: TrendingUp, title: "Proactive Seasonal Management", description: "Every client gets a 12-month seasonal marketing calendar built around the design-and-build demand cycle. We ramp Google Ads budgets and seasonal landing pages 4–6 weeks before each planning window — winter design consultations, spring build ramp, fall finishing — because landscape construction searches spike during these windows. By the time competitors scramble to catch up, you already own the Map Pack." },
    { icon: Bot, title: "AI-Powered Full Stack", description: "Local SEO, Google Ads, reputation management, AI receptionist, and website design – all managed under one roof. One strategy, one dashboard, one point of contact." },
    { icon: BarChart3, title: "Verified Results, Not Promises", description: "We publish verified case study data from real campaigns. The 1.1 Map Pack rank, the +770% phone click increase, the 553 Google Ads conversions – these are from actual GrowSmallBiz campaigns, not industry averages." },
  ],

  // ── REAL RESULTS ──
  realResultsHeadline: "Real Results for Landscape Construction",
  realResultsHighlight: "& Hardscaping Contractors",
  realResultsSubheadline: "Verified campaign data from GrowSmallBiz clients in the landscape and outdoor-living industry. Two independently verified campaigns – AI SEO and Google Ads.",
  realResults: [
    {
      campaignType: "AI SEO Campaign",
      headline: "Chicagoland Outdoor-Living & Landscape Company",
      period: "Oct-Nov 2023 vs. Aug-Sep 2023",
      metrics: [
        { value: "+138.54%", label: "Total Impressions (Google Search Console)" },
        { value: "+25.77%", label: "Organic Clicks" },
        { value: "1.1", label: "Average Map Pack Rank" },
        { value: "+770%", label: "Phone Number Clicks" },
        { value: "+16.67%", label: "Contact Form Conversions" },
        { value: "123/123", label: "High-Ranking Map Pack Grid Points" },
      ],
      bodyCopy: "A Chicagoland outdoor-living and landscape company managed by GrowSmallBiz achieved a 1.1 average Map Pack rank across all 123 local search grid points within six months of starting an AI SEO campaign – with total impressions increasing 138.54 percent and phone number clicks increasing 770 percent in the first two months.",
      caseStudyUrl: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
    },
    {
      campaignType: "Google Ads PPC Campaign",
      headline: "Landscape & Hardscape Company",
      period: "All Time + Last 90 Days (Apr-Jul 2024 vs. Jan-Apr 2024)",
      metrics: [
        { value: "553", label: "Total Conversions (All Time)" },
        { value: "394", label: "Call Leads (All Time)" },
        { value: "$53.70", label: "Cost Per Acquisition (All Time)" },
        { value: "299", label: "Conversions Last 90 Days" },
        { value: "+211.5%", label: "90-Day Conversion Lift" },
        { value: "+169.5%", label: "90-Day Click Growth" },
      ],
      bodyCopy: "A GrowSmallBiz Google Ads campaign for a landscape and hardscape company generated 553 total conversions at a $53.70 cost per acquisition – with 394 of those conversions from call leads. In the 90 days following campaign scaling, conversions increased 211.5 percent compared to the prior 90-day period.",
      caseStudyUrl: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
    },
  ],

  // ── CASE STUDY LINKS ──
  caseStudyLinks: [],

  // ── FAQ ──
  faqHeadline: "Landscape Construction & Hardscaping",
  faqHighlight: "Marketing FAQs",
  faqSubheadline: "Common questions from landscape construction and hardscaping business owners — organized by topic",
  faqCategories: [
    {
      id: "local-seo",
      label: "Local SEO",
      icon: Search,
      color: "emerald",
      faqs: [
        {
          question: "How long does it take to see results from SEO for a landscape construction or hardscaping company?",
          answer: "Most landscape construction and hardscaping contractors see measurable movement in Google Map Pack rankings within 60 to 90 days of starting a managed SEO program. Top 3 Map Pack positions in competitive Bay Area markets typically take 4 to 6 months of consistent optimization. Hardscape and near me keywords tend to rank faster than broad service terms because intent is immediate and Google weights proximity heavily. In a Chicagoland outdoor-living campaign managed by GrowSmallBiz, the client reached a 1.1 average Map Pack rank across 123 grid points within six months.",
        },
        {
          question: "Is local SEO worth it for a small landscape construction or hardscape business?",
          answer: "Yes — local SEO is the highest-ROI long-term marketing investment for a small landscape construction or hardscape business because it builds organic visibility that compounds over time without a per-click cost. A well-optimized Google Business Profile with strong review velocity consistently generates inbound consultations without ongoing ad spend. The tradeoff is time: local SEO takes 60 to 90 days to show measurable movement. For faster results in the first 90 days, run local SEO in parallel with Google Local Services Ads.",
        },
      ],
    },
    {
      id: "paid-media",
      label: "Google Ads",
      icon: Target,
      color: "blue",
      faqs: [
        {
          question: "What is the difference between Google Local Services Ads and Google Ads for landscape construction and hardscape contractors?",
          answer: "Google Local Services Ads appear above all other results, carry the Google Guarantee badge, and charge per verified lead rather than per click — making them the best option for high-intent hardscape and retaining wall searches. Standard Google Ads charge per click and give more control over keywords, budget, and landing pages — making them better for design-consultation and outdoor kitchen campaigns that require a portfolio-forward landing page. GrowSmallBiz recommends running both simultaneously.",
        },
        {
          question: "What digital marketing works best for landscape construction and hardscape contractors?",
          answer: "The highest-impact channels for landscape construction and hardscaping contractors are Google Local Services Ads for high-intent hardscape and wall searches, Local SEO and Google Business Profile optimization for Map Pack visibility, portfolio-forward website design, and reputation management to build the review count that drives click-through rates. These contractors benefit from a combined approach because buyers operate across two intent modes: high-intent (hardscape, walls, drainage) which is Map Pack-driven, and design-driven (remodels, outdoor kitchens) which is portfolio and review-dependent.",
        },
      ],
    },
    {
      id: "strategy",
      label: "Strategy",
      icon: Lightbulb,
      color: "amber",
      faqs: [
        {
          question: "How do I stop relying on Angi and Thumbtack for backyard remodel leads?",
          answer: "The fastest path away from lead aggregators is building Google Business Profile review velocity and activating Google Local Services Ads simultaneously — achievable within the first 8 to 12 weeks. After that, service-area landing pages targeting city-specific hardscape and outdoor living keywords provide organic lead flow over months 3 to 6. Most landscape construction contractors who follow this sequence reduce cost-per-lead by 40 to 55 percent within six months. The key difference: you own the channel instead of renting access to shared leads.",
        },
        {
          question: "Does GrowSmallBiz handle seasonal marketing for landscape construction and hardscape contractors?",
          answer: "Yes — GrowSmallBiz builds a 12-month seasonal marketing calendar for every landscape construction and hardscape client, ramping Google Ads budgets 4 to 6 weeks before each planning window rather than during it. This includes activating winter design consultation campaigns, spring hardscape build ramp, outdoor living season promotions, and fall finishing pushes. Proactive seasonal management consistently outperforms reactive budgeting for design-build contractors.",
        },
        {
          question: "Does GrowSmallBiz work with commercial and HOA hardscape contractors?",
          answer: "Yes — GrowSmallBiz works with landscape construction and hardscape companies whose growth includes HOA contracts, property management accounts, and commercial developer projects. The buyer journey for commercial site work is different from residential design-build: property managers and HOA boards compare portfolios, references, and multi-phase capability before awarding a bid. Our approach combines a conversion-focused website with a commercial portfolio module, LinkedIn outreach, Google Ads campaigns for commercial hardscape and site work keywords, and automated proposal follow-up sequences.",
        },
      ],
    },
    {
      id: "investment",
      label: "Investment",
      icon: DollarSign,
      color: "violet",
      faqs: [
        {
          question: "What does landscape construction and hardscape digital marketing cost?",
          answer: "Landscape construction and hardscape marketing costs vary by market, competitive density, and the services included — GrowSmallBiz does not display fixed pricing because a company competing in San Francisco faces a different landscape than one serving Danville or Tracy. The investment depends on your current online presence, your growth goals, and which channels make sense for your market. GrowSmallBiz offers a free 30-minute strategy session to assess your situation and provide a clear picture of what investment is appropriate before any commitment.",
        },
      ],
    },
    {
      id: "website-design",
      label: "Website Design",
      icon: Palette,
      color: "sky",
      faqs: [
        {
          question: "Do I need a new website before starting SEO or Google Ads?",
          answer: "Not always, but your website must meet minimum conversion standards — mobile speed under 3 seconds, click-to-call on every page, and a portfolio-forward layout with strong before-and-after imagery. If your current site fails those, we build a new one first because sending paid traffic to a weak site wastes your budget — especially at the high-ticket price points landscape construction leads convert at.",
        },
        {
          question: "How long does it take to build a landscape construction or hardscape website?",
          answer: "Typically 3–4 weeks from kickoff to launch, plus 1–2 additional weeks if we're building out a large portfolio module with 20+ projects. We build conversion-focused sites specifically for high-ticket home service contractors — not generic templates — so the development timeline is tight and the output is immediately SEO-ready.",
        },
      ],
    },
    {
      id: "social-media",
      label: "Social Media",
      icon: Megaphone,
      color: "rose",
      faqs: [
        {
          question: "Which social media platforms work best for landscape construction and hardscape contractors?",
          answer: "Instagram and Facebook are the primary platforms for residential design-build and hardscape — portfolio photos, drone footage, and before-and-after reels drive the most engagement with homeowners aged 35–65. Pinterest is powerful for capturing homeowners in the earliest planning phase. LinkedIn is the right platform for commercial and HOA site work acquisition. We allocate 80% of your social effort to your two highest-ROI platforms before expanding.",
        },
        {
          question: "How often should a landscape construction or hardscape company post on social media?",
          answer: "Three to four times per week on primary platforms is the effective range for most design-build contractors. Consistency matters more than volume — a company that posts three quality portfolio photos or project walkthroughs per week outperforms one that posts daily generic content and then goes silent during busy season.",
        },
      ],
    },
    {
      id: "reputation",
      label: "Reputation",
      icon: Star,
      color: "amber",
      faqs: [
        {
          question: "How many Google reviews does a landscape construction or hardscape company need to rank in the Map Pack?",
          answer: "It depends on your specific market and competitor review counts. We run a competitor review gap analysis for every client — if the top Map Pack position in your area has 180 reviews and you have 40, we build a systematic review velocity plan to close that gap within 6–9 months using automated post-project SMS and email requests.",
        },
        {
          question: "What do we do about a negative Google review?",
          answer: "We respond to every negative review within 24 hours using protocols that demonstrate professionalism to future clients reading your profile — because how you respond matters as much as the review itself. We also analyze the pattern of negative reviews to identify service, design-process, or communication gaps before they compound.",
        },
      ],
    },
    {
      id: "ai-receptionist",
      label: "AI Receptionist",
      icon: PhoneCall,
      color: "emerald",
      faqs: [
        {
          question: "What happens when a homeowner submits a $75K project inquiry after hours?",
          answer: "Your AI Receptionist answers every call and captures every form 24/7 — evening design inquiries, weekend commercial calls, urgent wall or drainage failures. It qualifies the lead by project type and scope range, captures contact details, books a design consultation, and sends you a lead summary via SMS within 60 seconds.",
        },
        {
          question: "Can the AI Receptionist handle commercial and HOA inquiries differently from residential design consultations?",
          answer: "Yes. The AI Receptionist is configured to route and qualify leads by project type — residential hardscape, full backyard remodels, outdoor kitchen builds, commercial site work, and HOA inquiries are each handled with the appropriate qualification questions and escalation paths.",
        },
      ],
    },
    {
      id: "ai-growth",
      label: "AI Growth System",
      icon: Zap,
      color: "violet",
      faqs: [
        {
          question: "What is the AI Client Growth System and how is it different from a regular CRM?",
          answer: "A standard CRM stores contacts. The AI Client Growth System captures every lead automatically, sends instant follow-up sequences, qualifies leads by project type and scope, books design consultations, triggers review requests after project completion, and runs phase-two re-engagement campaigns — without any manual input from your team. It replaces five or six disconnected tools with one integrated system.",
        },
        {
          question: "How quickly can the AI Growth System be set up for a landscape construction or hardscape contractor?",
          answer: "The core system — AI Receptionist, inquiry automation, and review request sequences — is live within 30 days. The full marketing automation suite including seasonal campaigns, phase-two re-engagement, and referral incentive workflows is typically complete within 60 days of kickoff.",
        },
      ],
    },
  ],
  faqCtaCard: {
    headline: "More Questions About Landscape Construction Marketing?",
    body: "Get a personalized walkthrough of our SEO, Google Ads, and AI systems for your specific market and project mix.",
    signoff: "Let's build your exclusive high-ticket pipeline.",
  },

  // ── STICKY CTA ──
  stickyCtaConfig: {
    title: "Ready for a Landscape Construction & Hardscape Marketing System That Fills Your Build Calendar Year-Round?",
    description: "Let's discuss a custom marketing strategy for your specific market, service area, and growth goals.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Year-Round"],
    showAfterScroll: 800,
  },

  // ── CONTACT ──
  contactSectionHeadline: "Ready to Grow Your Landscape Construction or Hardscape Business?",
  contactSectionBody: "Schedule a strategy call to discuss your marketing goals, service area, and what a seasonal campaign calendar looks like for your specific market.",

  // ── HOW IT WORKS ──
  howItWorksHeadline: "5 Steps From Invisible to Fully Booked",
  howItWorksHighlight: "",
  howItWorksBadge: "HOW IT WORKS",
  processSteps: [
    {
      step: "01", icon: ClipboardList,
      title: "Discovery & Competitive Audit",
      description: "We start with a full audit of your current online presence — Google Business Profile, website performance, portfolio depth, review count, local rankings, and competitor Map Pack positions — before recommending a single tactic. You cannot fix what you have not measured.",
      deliverable: "Deliverable: Custom marketing roadmap with seasonal campaign calendar and competitive gap analysis.",
    },
    {
      step: "02", icon: Search,
      title: "Local SEO & GBP Foundation",
      description: "Local SEO for landscape construction and hardscaping begins with your Google Business Profile — optimized from category selection to service areas, weekly posts, and portfolio photo cadence. Citation building and on-site location signals follow. This is the foundation every other channel builds on.",
      deliverable: "Deliverable: Fully optimized GBP, citation audit and cleanup, on-site local SEO implementation.",
    },
    {
      step: "03", icon: Target,
      title: "Paid Campaign Launch",
      description: "Google Local Services Ads launch first for immediate high-intent coverage. Standard Google Ads follow with design-consultation and hardscape campaigns timed 4 to 6 weeks ahead of each planning window. Every campaign includes conversion tracking from click to consultation to signed contract.",
      deliverable: "Deliverable: Live LSA and Google Ads campaigns with conversion tracking and seasonal budget calendar.",
    },
    {
      step: "04", icon: Star,
      title: "Review Velocity & Reputation",
      description: "Systematic review generation begins immediately — automated SMS and email requests within one week of every completed project. Review monitoring, response management, and competitor gap tracking run continuously throughout the engagement.",
      deliverable: "Deliverable: Automated review request system, monthly reputation report, Map Pack position tracking.",
    },
    {
      step: "05", icon: TrendingUp,
      title: "Reporting & Optimization",
      description: "Every month you receive a full performance report: Map Pack rankings, call volume, cost per lead, consultation booking rate, and seasonal trend analysis. We optimize campaigns based on data, not assumptions — and you see exactly where every dollar goes.",
      deliverable: "Deliverable: Monthly performance report, optimization summary, and next-month campaign plan.",
    },
  ],

  // ── WHO THIS IS FOR ──
  whoThisIsForHeadline: "Is GrowSmallBiz Right for Your Landscape Construction or Hardscaping Company?",
  whoThisIsForHighlight: "",
  whoThisIsForBadge: "WHO THIS IS FOR",
  strongFitLabel: "Strong Fit",
  notFitLabel: "Not the Right Fit",
  strongFitItems: [
    "Established landscape construction or hardscaping company with at least one full design-build crew and consistent project volume",
    "Currently paying Angi, Thumbtack, or HomeAdvisor for shared leads and want to eliminate that dependency",
    "Ready to invest in owned marketing for at least 6 months — SEO and reputation building are not overnight results",
    "Want a seasonal marketing calendar and proactive campaign management, not reactive ad spend",
    "Looking for an experienced specialist agency that understands the design-and-build demand cycle — not a generalist who serves restaurants one month and contractors the next",
    "Commercial contracts, HOA accounts, or developer relationships are part of your growth goal",
    "Contractors focused on high-ticket residential projects ($40K+) who want to attract more design-consultation-ready homeowners",
  ],
  notFitItems: [
    "Solo operators in their first year who are not yet generating consistent revenue",
    "Companies looking for a one-time website build with no ongoing marketing strategy",
    "Businesses not prepared to respond to leads quickly — our system generates consultations, but your team needs to book them",
    "Companies unwilling to request reviews from clients — reputation management requires participation",
  ],

  // ── MID-PAGE CTA ──
  midPageCta: {
    headline: "Sound Like Your Business?",
    subtext: "Let's talk about what owning your local landscape construction and hardscape market actually looks like. Free 30-minute strategy session, no commitment.",
    primaryLabel: "Schedule Your Free Strategy Call",
    position: "afterWhoThisIsFor",
  },
};
