import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
 TreePine, Search, TrendingUp, Star, Users, Target, Calendar,
 Bot, Globe, Megaphone, Mail, Phone, MessageSquare, Shield, Clock,
 Heart, Eye, Repeat, DollarSign, RefreshCw, MapPin, BarChart3,
 Gift, CalendarCheck, Leaf, Sprout, Lightbulb, UserPlus,
 FileText, ClipboardList, Building2, Linkedin, Instagram, Facebook,
 Youtube, Zap, Layers, Palette, PhoneCall,
} from "lucide-react";

import heroImage from "@/assets/tree-lawn-landscaping/tree-service-landscape-remodeling-hero.webp";
import websiteScreenshot from "@/assets/tree-lawn-landscaping/tree-stump-removal-website-screenshot.webp";
import treeServiceSeo from "@/assets/tree-lawn-landscaping/tree-service-seo-keywords.webp";
import landscapeRemodelingSeo from "@/assets/tree-lawn-landscaping/landscape-remodeling-seo-keywords.webp";
import landscapingSeo from "@/assets/tree-lawn-landscaping/landscaping-seo-keywords.webp";
import emergencyTreeRemoval from "@/assets/tree-lawn-landscaping/emergency-tree-removal-ad.webp";
import springLandscapeRemodeling from "@/assets/tree-lawn-landscaping/spring-landscape-remodeling-ad.webp";
import fallTreeService from "@/assets/tree-lawn-landscaping/fall-tree-service-ad.webp";
import commercialLandscaping from "@/assets/tree-lawn-landscaping/commercial-landscaping-ad.webp";
import localMapPack from "@/assets/tree-lawn-landscaping/local-map-pack-ad.webp";
import aiReceptionistMulticall from "@/assets/tree-lawn-landscaping/ai-receptionist-multicall.webp";
import aiWebsiteLivechat from "@/assets/tree-lawn-landscaping/ai-website-livechat.webp";

export const treeLawnLandscapingConfig: NicheConfig = {
 // ══════════════════════════════════════════════════════════════════════
 // 4.1 PAGE META
 // ══════════════════════════════════════════════════════════════════════
 pageTitle: "Tree Service & Removal and Landscape Maintenance Marketing | GrowSmallBiz",
 ogTitle: "AI-Powered Growth for Tree Service & Removal and Landscape Maintenance",
 metaDescription: "Get more tree service, emergency tree removal, and landscape maintenance calls with Local SEO, Google Ads, and AI-powered lead capture. Schedule strategy call.",
 metaKeywords: "tree service marketing, tree removal advertising, landscape maintenance digital marketing, local SEO for tree companies, Google Ads for landscapers, emergency tree removal leads, AI lead generation",
 canonicalUrl: "/home-service-contractors/tree-lawn-landscaping-marketing/",
 serviceName: "Tree Service & Removal and Landscape Maintenance Marketing Agency",
 serviceType: "Digital Marketing for Tree Service & Removal and Landscape Maintenance Companies",
 serviceDescription: "GrowSmallBiz Digital Marketing is a Bay Area digital marketing agency headquartered in Danville, CA, specializing in Local SEO, Google Ads, and AI-powered marketing systems for tree service, emergency tree removal, and landscape maintenance companies across the United States.",
 breadcrumbs: [
 { name: "Home", url: "/" },
 { name: "Home Service Contractors", url: "/home-service-contractors/" },
 { name: "Tree Service & Removal and Landscape Maintenance Marketing", url: "/home-service-contractors/tree-lawn-landscaping-marketing/" },
 ],
 offerCatalog: {
 name: "Tree Service & Removal and Landscape Maintenance Marketing Services",
 items: [
 { name: "Local SEO & Google Business Profile" },
 { name: "Conversion-Focused Website Design" },
 { name: "Google Ads (LSA + PPC)" },
 { name: "Reputation Management" },
 { name: "AI Receptionist & 24/7 Lead Capture" },
 { name: "Lead Nurture & Client Reactivation" },
 ],
 },

 // ══════════════════════════════════════════════════════════════════════
 // 4.2 HERO SECTION
 // ══════════════════════════════════════════════════════════════════════
 heroImage: heroImage,
 heroImageAlt: "Tree service crew removing a damaged tree and a landscape maintenance project in a residential neighborhood, showcasing high-ticket tree and landscape work.",
 badgeIcon: TreePine,
 badgeText: "Tree Service & Removal and Landscape Maintenance Marketing",
 h1Line1: "High-Ticket Marketing Leads for Tree Removal, Stump Grinding, Pruning & Landscape Maintenance Contractors",
 h1Highlight: "",
 h1Line2: "",
 heroSubheadline: "GrowSmallBiz combines Local SEO, Google Ads, and AI-powered lead capture to put your tree service & removal or landscape maintenance company in front of homeowners the moment they need high-ticket work — and convert that visibility into booked jobs.",
 primaryCtaLabel: "Schedule Strategy Call",
 secondaryCtaLabel: "See Our Services",
 secondaryCtaAnchor: "#solutions",
 statsBar: [
 { value: "553", label: "Google Ads conversions delivered" },
 { value: "1.1", label: "Average Map Pack rank achieved" },
 { value: "+211.5%", label: "90-day conversion lift (PPC)" },
 { value: "+138.54%", label: "Search impressions growth (SEO)" },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // HERO EXTENDED
 // ══════════════════════════════════════════════════════════════════════
 heroExtendedHeadline: "From Reactive Marketing to a Predictable Lead Calendar",
 heroExtendedHighlight: "Predictable Lead Calendar",
 heroExtended: [
 {
 icon: Calendar,
 headline: "Seasonal Campaigns That Run Ahead of Demand",
 body: "Most tree service and landscape maintenance companies start marketing when the phone goes quiet. We build your campaign calendar 4 to 6 weeks before each demand surge — spring prep, fall cleanup, storm season — so you own the Map Pack before competitors ramp up.",
 },
 {
 icon: MapPin,
 headline: "Local Market Intelligence",
 body: "We know the seasonal demand patterns, competitive landscape, and local conversion factors that drive tree service, emergency tree removal, and landscape maintenance bookings — so every strategy is built on market reality, not assumptions.",
 },
 {
 icon: Shield,
 headline: "Exclusive Territory — Your Leads Stay Yours",
 body: "We do not work with competing tree service or landscape maintenance companies in the same service area. When you partner with GrowSmallBiz, we work exclusively for you in your market. No shared leads, no conflicts of interest.",
 },
 {
 icon: TrendingUp,
 headline: "Full-Service Stack, One Roof",
 body: "Local SEO, Google Ads, website design, reputation management, and AI-powered lead capture — all managed by one team. No agency handoffs. No gaps between your marketing channels. One dashboard, full visibility.",
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.3 PAIN POINTS
 // ══════════════════════════════════════════════════════════════════════
 painPointsHeadline: "Tree Service & Removal and Landscape Maintenance",
 painPointsHighlight: "Marketing Challenges",
 painPointsSubheadline: "Even the best crews in the Bay Area lose high-ticket jobs every week to competitors who rank higher, respond faster, and have more reviews. Here is what we hear from tree service and landscape maintenance owners in their first call with us.",
 painPoints: [
 {
 icon: Search,
 title: "Invisible on Google When It Matters Most",
 description: "Your competitors rank in the Map Pack for tree service near me and emergency tree removal. You do not. Every search that does not find you is a job that goes to someone else — often a company doing inferior work.",
 hasImage: false,
 showAILogos: false,
 },
 {
 icon: DollarSign,
 title: "Paying for Shared Leads That Go to Five Companies",
 description: "Lead aggregators like Angi and Thumbtack sell the same lead to multiple contractors simultaneously. You are paying per lead for a race to the bottom on price. Owned marketing eliminates that dynamic entirely.",
 hasImage: false,
 showAILogos: false,
 },
 {
 icon: Calendar,
 title: "Missing the Seasonal Window Every Year",
 description: "Spring fills up fast. Storm season creates emergency demand overnight. Most tree service and landscape maintenance companies start marketing reactively – when the phone goes quiet – and spend the peak season scrambling. A proactive seasonal calendar changes that.",
 hasImage: false,
 showAILogos: false,
 },
 {
 icon: Bot,
 title: "Emergency Calls Going Unanswered After Hours",
 description: "A homeowner calls at 10pm about a storm-damaged tree. You miss it. They call the next company on Google. AI-powered lead capture ensures every call, form, and chat is captured and qualified – regardless of when it comes in.",
 hasImage: false,
 showAILogos: true,
 },
 {
 icon: Star,
 title: "Not Enough Google Reviews to Win the Map Pack",
 description: "The Map Pack algorithm weights review count and recency heavily. If your competitors have 200 reviews and you have 40, you are losing clicks before anyone visits your website. Systematic review generation closes that gap.",
 hasImage: false,
 showAILogos: false,
 },
 {
 icon: Globe,
 title: "A Website That Does Not Convert Visitors Into Calls",
 description: "Most tree service and landscape maintenance websites look outdated and load slowly on mobile. A homeowner who finds your site has five seconds to decide whether to call you or go back to Google. A conversion-focused website is your best salesperson.",
 hasImage: false,
 showAILogos: false,
 },
 {
 icon: Layers,
 title: "Recurring Maintenance Contracts Lost to Better-Ranked Competitors",
 description: "Homeowners and property managers looking for a reliable landscape maintenance company compare three or four providers before signing a recurring contract. If your Google Business Profile is thin, your website loads slowly on mobile, and you have fewer reviews than a nearby competitor — you lose the account before the first phone call.",
 hasImage: false,
 showAILogos: false,
 },
 ],
 transitionText: "Sound familiar? There's a better way.",
 transitionSubtext: "Instead of juggling disconnected tools and chasing leads from aggregators, GrowSmallBiz builds a complete marketing system that generates exclusive, inbound leads from homeowners and commercial clients in your service area.",

 // ══════════════════════════════════════════════════════════════════════
 // INDUSTRY STATS
 // ══════════════════════════════════════════════════════════════════════
 industryStats: {
 headline: "The Market You're",
 headlineHighlight: "Competing In",
 subheadline: "Verified industry data — the scale of the market your tree service and landscape maintenance business operates in and why local visibility determines who wins.",
 items: [
 {
 value: "$188.8B",
 label: "U.S. landscaping services industry revenue in 2025",
 source: "IBISWorld via NALP 2025",
 sourceUrl: "https://www.landscapeprofessionals.org/LP/LP/Media/landscape-industry-statistics.aspx",
 },
 {
 value: "692,777",
 label: "landscaping and tree service businesses competing for local market share",
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

 // ══════════════════════════════════════════════════════════════════════
 // 4.4 SYSTEM DIAGRAM
 // ══════════════════════════════════════════════════════════════════════
 systemDiagramHeadline: "See How It All Works Together",
 systemDiagramBody: "GrowSmallBiz builds a predictable marketing system for tree service and landscape maintenance companies: Local SEO and Google Business Profile optimization captures homeowners in the research phase, Google Ads and Local Services Ads captures emergency and high-intent buyers immediately, reputation management drives the review velocity that wins the Map Pack, and AI-powered lead capture ensures no call or inquiry is missed — day or night, storm season or off-season. Every channel works together, not in isolation.",

 // ══════════════════════════════════════════════════════════════════════
 // 4.5 MID-PAGE CTA BLOCKS
 // ══════════════════════════════════════════════════════════════════════
 ctaAfterPainPoints: {
 headline: "Ready to Stop Competing for Shared Leads?",
 subtext: "Let's build your exclusive, inbound lead pipeline for tree service and landscape maintenance.",
 primaryLabel: "Schedule Strategy Call",
 secondaryLabel: "Call Us",
 },
 ctaAfterSeo: {
 headline: "See Where Your Tree Service & Removal and Landscape Maintenance Company Ranks – Free Local SEO Audit",
 subtext: "Find out exactly where your business appears across Google Search, Google Maps, and AI search platforms – and where your competitors are outranking you.",
 primaryLabel: "Schedule Strategy Call",
 secondaryLabel: "",
 },
 ctaAfterGrowthSystem: {
 headline: "See the AI Client Growth System for Tree Service & Removal and Landscape Maintenance in Action",
 subtext: "Watch how automated lead capture, seasonal campaigns, and referral automation work together to fill your schedule — without you chasing every call.",
 primaryLabel: "Schedule Strategy Call",
 secondaryLabel: "",
 },

 // ══════════════════════════════════════════════════════════════════════
 // 4.6 ON THIS PAGE NAV
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
 coreServicesHeadline: "AI-Powered Marketing System for Tree Service & Removal and Landscape Maintenance",
 coreServicesHighlight: "",
 coreServicesSubheadline: "Every service works together. No gaps between channels. One team, one strategy, one dashboard.",
 coreServices: [
 {
 icon: Search,
 title: "Local SEO & Google Business Profile",
 whatWeDo: "Rank in the Map Pack for tree service near me and landscape maintenance near me searches – the queries that convert directly to booked jobs.",
 impact: "More inbound calls from homeowners actively searching for your services right now.",
 },
 {
 icon: Globe,
 title: "Conversion-Focused Website Design",
 whatWeDo: "A fast, mobile-first website built to convert emergency calls and commercial inquiries – not just to look professional.",
 impact: "Visitors who find you on Google become callers and quote requests instead of bouncing.",
 },
 {
 icon: Target,
 title: "Google Ads (LSA + PPC)",
 whatWeDo: "Google Local Services Ads for emergency tree service and landscape maintenance searches; Google Ads for seasonal campaigns ramped 4 to 6 weeks before peak demand.",
 impact: "Exclusive inbound leads at a predictable cost per acquisition – not shared leads from aggregators.",
 },
 {
 icon: Star,
 title: "Reputation Management",
 whatWeDo: "Systematic review generation across Google and Yelp that builds the review count and recency your Map Pack ranking depends on.",
 impact: "Higher Map Pack position, stronger click-through rate, and more homeowner trust before the first call.",
 },
 {
 icon: Phone,
 title: "AI Receptionist & 24/7 Lead Capture",
 whatWeDo: "AI-powered voice and chat that answers, qualifies, and logs every lead – storm-damage calls at midnight, commercial inquiries on weekends.",
 impact: "Zero missed leads regardless of time of day, season, or call volume.",
 },
 {
 icon: RefreshCw,
 title: "Lead Nurture & Client Reactivation",
 whatWeDo: "Automated email and SMS sequences that convert unsold estimates into booked jobs, re-engage past clients before spring cleanup and storm season ramp-up, and maintain year-round contact with your recurring maintenance base.",
 impact: "More recurring contracts and seasonal bookings from the leads and customers already in your database — not just the ones who called back unprompted.",
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // STAGED APPROACH — NEW
 // ══════════════════════════════════════════════════════════════════════
 stagedApproachBadge: "WHERE TO START",
 stagedApproachHeadline: "You Don't Have to Do",
 stagedApproachHighlight: "Everything at Once",
 stagedApproachSubheadline: "Most tree service and landscape maintenance companies try to launch SEO, Google Ads, a new website, and automation all at the same time — then wonder why nothing gets traction. GrowSmallBiz uses a staged approach that builds each layer on a solid foundation, so every dollar you invest compounds on the one before it.",
 stagedApproachStages: [
 {
 stage: "Stage 1",
 label: "Quick Wins",
 timeline: "30–90 Days",
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
 timeline: "3–6 Months",
 icon: TrendingUp,
 color: "blue",
 services: [
 "Managed AI SEO — local keyword rankings across your service area",
 "Google Ads (PPC) — seasonal campaigns timed 4–6 weeks before each peak",
 "City and service area landing pages for local keyword coverage",
 "Review velocity building — Map Pack position consolidation",
 "Seasonal campaign calendar — spring prep, storm season, fall cleanup",
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
 "Full funnel marketing automation — inquiry to repeat client",
 "Commercial and HOA contract acquisition campaigns",
 "Content cluster and topical authority building — own every search in your market",
 "AI search visibility tracking across 6 platforms",
 "Social media organic campaign management",
 "Retargeting across Google Display and Meta",
 ],
 unlocks: "Market dominance — appearing everywhere your customers search, across every channel, with a fully automated lead and retention system.",
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.7 WEBSITE DESIGN
 // ══════════════════════════════════════════════════════════════════════
 websiteDesignBadge: "Tree Service & Landscape Maintenance Website Design",
 websiteDesignHeadline: "Websites Built to Convert Tree Service & Removal and Landscape Maintenance Visitors",
 websiteDesignHighlight: "Into Calls and Quote Requests",
 websiteDesignSubheadline: "Most tree service and landscape maintenance websites look outdated, load slowly on mobile, and fail to convert the homeowner who found you on Google. We build fast, mobile-first websites that turn search traffic into booked jobs.",
  websiteDesignImage: websiteScreenshot,
  websiteDesignImageAlt: "Responsive website preview for a tree service and stump removal company, showing desktop and mobile versions with emergency tree removal, stump grinding, tree trimming, and storm damage cleanup services.",
 websiteDesignFeatureHeadline: "Websites That Work as Hard as Your Crew",
 websiteDesignFeatureBody: "A conversion-focused website for a tree service or landscape maintenance company does three things: it loads in under 3 seconds on mobile, it makes it effortless for a homeowner to call or request a quote, and it signals enough credibility – through reviews, photos, and service pages – that a first-time visitor trusts you before they pick up the phone. GrowSmallBiz builds websites that accomplish all three from day one.",
 websiteDesignBullets: [
 "Mobile-first design that loads in under 3 seconds on any device",
 "Service-specific pages for tree removal, stump grinding, emergency removal, and landscape maintenance",
 "Emergency call button visible on every page – critical for storm-damage traffic",
 "Google Business Profile integration and local schema markup",
 "Before-and-after photo galleries that build visual credibility",
 "Online quote request forms optimized for conversion",
 "City and neighborhood-specific landing pages for local SEO",
 "Review integration displaying your Google and Yelp ratings prominently",
 ],
 aiSearchCalloutHeadline: "Google Still Drives Most Tree Service Leads.",
 aiSearchCalloutHighlight: "But AI Search Is Changing How Homeowners Find You.",
 aiSearchCalloutBody: "According to BrightLocal's 2026 Local Consumer Review Survey, 45% of consumers now use AI tools like ChatGPT, Gemini, and Perplexity to find local services — up from just 6% one year ago. AI is now the third most popular source homeowners use when searching for a local business. SOCi's 2026 Local Visibility Index found that ChatGPT currently recommends just 1.2% of all local business locations. When a homeowner asks an AI assistant which tree service or landscape maintenance company to call, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz optimizes your website and content for both Google and AI answer engines simultaneously, so your business is in the 1.2% that gets recommended — not the 98.8% that AI ignores.",
 aiSearchStats: [
 { value: "45%", label: "of consumers now use AI to find local services — up from 6% one year ago (BrightLocal 2026)" },
 { value: "6", label: "AI platforms we track for your visibility" },
 { value: "24/7", label: "continuous AI search monitoring and optimization" },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.8 SEO SECTION
 // ══════════════════════════════════════════════════════════════════════
 seoBadge: "AI-Powered SEO for Tree Service & Landscape Maintenance",
 seoHeadline: "Local SEO That Puts Your Tree Service & Removal and Landscape Maintenance Company",
 seoHighlight: "at the Top of Google Maps",
  seoSubheadline: "Comprehensive local search optimization that drives emergency calls, seasonal bookings, and commercial inquiries from homeowners and property managers across your service area.",
  topicMapCenterLine1: "Tree & Landscape",
  topicMapCenterLine2: "Authority",
  topicMapSpokes: [
    "Emergency Tree Removal",
    "Tree Trimming & Pruning",
    "Storm Damage Cleanup",
    "Stump Grinding & Removal",
    "Seasonal Landscape Maintenance",
    "Lawn Care & Cleanups",
    "Commercial Grounds",
  ],
 seoEditorialHeadline: "Why Tree Service & Removal and Landscape Maintenance SEO Works",
 seoEditorialHighlight: "Differently",
 seoEditorialBody: [
 "Local SEO for tree service and landscape maintenance companies works because the search intent is urgent and geographically specific. A homeowner searching 'emergency tree removal near me' at 7am after a storm is ready to hire within minutes — not hours. The U.S. landscaping services industry generates $188.8 billion annually across 692,777 businesses, with no single firm controlling more than 5% of the market. In this highly fragmented industry, the company that appears first in the Map Pack with strong reviews gets that emergency call. The company on page two does not.",
 "The Map Pack algorithm rewards three signals above all others: proximity to the searcher, review count and recency, and relevance of your Google Business Profile to the search query. GrowSmallBiz optimizes all three systematically — not just your website, but your GBP, your citations, your review velocity, and your local content.",
 "Seasonal demand creates a specific SEO challenge that general agencies miss. Tree service and landscape maintenance searches spike 300 to 400 percent in spring and fall. If your rankings aren't established before the surge, you miss the window. We build your local authority year-round so you own the Map Pack when it matters most.",
 "In the Chicagoland tree and landscape campaign we managed, the client reached a 1.1 average Map Pack rank across 123 grid points — meaning they ranked first for tree and landscape searches across their entire service area. Total impressions increased 138.54 percent and phone number clicks increased 770 percent in the first two months of the campaign.",
 ],
 seoEditorialPullQuote: "A Chicagoland tree and landscape company managed by GrowSmallBiz achieved a 1.1 average Map Pack rank across all 123 local search grid points within six months — with 123 of 123 grid points ranking in position 1 or 2.",
 seoKeywordCategories: {
 treeService: {
 label: "Tree Service",
 icon: TreePine,
 image: treeServiceSeo,
 keywords: [
 "tree service near me",
 "emergency tree removal",
 "tree removal cost",
 "arborist near me",
 ],
 competitors: "National tree service franchises, local arborists, Thumbtack/Angi contractor listings",
 },
  landscapeRemodeling: {
    label: "Landscape Maintenance",
    icon: Leaf,
    image: landscapeRemodelingSeo,
    keywords: [
 "landscape maintenance near me",
 "landscape maintenance service",
 "landscape maintenance company",
 "landscape maintenance company near me",
 ],
 competitors: "Local landscape maintenance firms, hardscape specialists, Houzz and Yelp listings",
 },
  landscaping: {
    label: "Landscape Design-Build",
 icon: Sprout,
 image: landscapingSeo,
 keywords: [
 "landscape maintenance company near me",
 "landscape design near me",
 "landscape maintenance services",
 "local landscape design-build company",
 ],
 competitors: "Landscape design-build firms, hardscape specialists, Yelp listings, Houzz profiles",
 },
 },

 // ══════════════════════════════════════════════════════════════════════
 // FOUR-LANE SEARCH DOMINANCE — NEW
 // ══════════════════════════════════════════════════════════════════════
 fourLaneBadge: "SEARCH DOMINANCE",
 fourLaneHeadline: "One Search Market.",
 fourLaneHighlight: "Four Ways to Win It.",
 fourLaneSubheadline: "When a homeowner needs a tree removed, their landscape maintained, or a landscape maintenance project designed, they search in four completely different ways — and each one requires a different strategy. GrowSmallBiz builds your presence across all four simultaneously so you own your market regardless of how your next customer searches.",
 fourLaneLanes: [
 {
 lane: "Map Pack",
 icon: MapPin,
 color: "emerald",
 headline: "Win the Local 3-Pack",
 description: "The Map Pack appears above all organic results for local searches and is driven by Google Business Profile optimization, review velocity, citation consistency, and proximity signals — not your website alone. It is the highest-click position for tree service and landscape maintenance near me searches.",
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
 description: "Google Local Services Ads appear above standard Google Ads and organic results with the Google Guarantee badge. They charge per verified lead, not per click. The highest-intent emergency buyers click here first.",
 howWeDoIt: [
 "LSA account setup and Google Guarantee verification",
 "Budget optimization — pay per verified call lead, not per click",
 "Review-gated eligibility — we build your review count to qualify and maintain status",
 "Emergency and storm-damage keyword coverage — capture urgent searches instantly",
 ],
 },
 {
 lane: "Organic Search",
 icon: Search,
 color: "amber",
 headline: "Own the Research Queries",
 description: "Homeowners researching tree service costs, landscape maintenance options, or landscape maintenance project ideas find you through organic rankings. These buyers convert over days or weeks and represent the largest search volume and lowest long-term cost per acquisition.",
 howWeDoIt: [
 "Service pages optimized for tree service and landscape maintenance keywords",
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
 description: "When a homeowner asks ChatGPT, Perplexity, or Google AI Overview which tree service company to call in Danville or Walnut Creek, the answer comes from AI-indexed content — not traditional search results. GrowSmallBiz structures your content to be cited by AI answer engines.",
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
 query: "tree service near me",
 items: [
 "[LSA] Bay Area Tree Co — Google Guaranteed ★★★★★ 412 reviews",
 "[LSA] Peninsula Arborists — Google Guaranteed ★★★★☆",
 "Map Pack — Green Valley Tree Service 89 reviews",
 "Map Pack — Tri-Valley Tree and Landscape 167 reviews",
 "Map Pack — East Bay Arborists 203 reviews",
 "Organic results — 10 blue links below the fold",
 ],
 caption: "LSA + Map Pack + Page 1 organic = full search coverage. Miss any one and a competitor takes that click.",
 },
 {
 type: "ai",
 label: "AI Search — ChatGPT and Perplexity",
 query: "Which tree service company should I call in Danville CA?",
 items: [
 "Based on local reviews, verified service history, and online presence, GrowSmallBiz clients are consistently cited for tree service in Danville and the Tri-Valley area.",
 "Sources cited: Google Reviews, Yelp, GrowSmallBiz.io, local city pages, case studies",
 "AI engines build answers from structured content, entity signals, and citation footprint — not keyword density.",
 ],
 caption: "AI search skips the link list entirely. If your content is not structured for citation, your business does not exist in this channel.",
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 paidMediaHeadline: "We Run High-Converting Google Ads for",
 paidMediaHighlight: "Tree Service & Removal and Landscape Maintenance Companies",
 paidMediaSubheadline: "Strategic paid advertising recommendations by service type and buyer intent – emergency tree removal, seasonal landscape projects, and commercial contract acquisition each require a different campaign approach.",
 adCreatives: [
 { id: "emergency", genre: "Emergency Tree Removal", image: emergencyTreeRemoval, platforms: ["Google Ads (Search)", "Google LSA"], description: "High-intent storm and emergency searches. Call-only campaigns. 24/7 AI receptionist backup." },
  { id: "seasonal-landscape", genre: "Spring Landscape Maintenance", image: springLandscapeRemodeling, platforms: ["Google Ads (Search)", "Facebook Ads"], description: "Pre-season landscape prep campaigns. Launch 4–6 weeks before spring. Highest volume period of year." },
 { id: "seasonal-tree", genre: "Fall Tree Service", image: fallTreeService, platforms: ["Google Ads (Search)", "Google LSA"], description: "Fall cleanup and leaf removal. Ramp in August before October peak. Tree removal before winter." },
 { id: "commercial", genre: "Commercial Landscape Maintenance", image: commercialLandscaping, platforms: ["Google Ads (Search)", "LinkedIn"], description: "HOA and property management targeting. Longer sales cycle but highest lifetime value." },
 { id: "local-seo", genre: "Local Map Pack", image: localMapPack, platforms: ["Google LSA", "Google Ads"], description: "Year-round Map Pack presence. Review-gated click-through. Emergency and planned searches." },
 ],
 paidMediaByGenre: [
 {
 genre: "Tree Service Companies",
 icon: TreePine,
 color: "from-emerald-500/20 to-emerald-600/10",
 primary: [
 { name: "Google LSA", reason: "Appears above all other results with Google Guarantee badge. Charges per verified lead. Best for emergency tree removal and storm damage searches." },
 { name: "Google Ads (Search)", reason: "Full keyword and budget control. Seasonal ramp campaigns. Service-specific landing pages." },
 ],
 secondary: [
 { name: "Facebook Ads", reason: "Homeowner targeting by geography and property type. Storm season awareness campaigns." },
 { name: "Nextdoor Ads", reason: "Hyper-local neighborhood targeting. High trust for home service recommendations." },
 ],
 },
 {
 genre: "Landscape Maintenance Companies",
 icon: Leaf,
 color: "from-green-500/20 to-green-600/10",
 primary: [
 { name: "Google Ads (Search)", reason: "Seasonal keyword campaigns ramped before spring and fall. Landscape remodeling near me and landscape maintenance company targeting." },
 { name: "Google LSA", reason: "Pay per verified lead. Strong for seasonal project and maintenance searches. Google Guarantee builds trust." },
 ],
 secondary: [
 { name: "Facebook Ads", reason: "Spring landscape maintenance and seasonal refresh campaigns. Homeowner demographic targeting." },
 { name: "Nextdoor Ads", reason: "Neighborhood-level reach. Homeowner recommendations travel through neighbor networks." },
 ],
 },
 {
 genre: "Commercial & HOA Landscape Maintenance",
 icon: Building2,
 color: "from-blue-500/20 to-blue-600/10",
 primary: [
 { name: "Google Ads (Search)", reason: "Commercial landscape maintenance and HOA maintenance contract targeting. Higher CPC but highest lifetime value." },
 { name: "LinkedIn Ads", reason: "Property manager and HOA board member targeting. B2B commercial landscape acquisition." },
 ],
 secondary: [
 { name: "Google Display", reason: "Retargeting property managers who visited your site. Visual display for commercial landscape portfolio." },
 { name: "Email Outreach", reason: "Direct outreach to HOA management companies and commercial property managers." },
 ],
 },
 ],
 metaAdSetupHeadline: "How We Ramp Your Ads 6 Weeks Before the Rush",
 metaAdSetupSubheadline: "Seasonal campaign calendars, emergency keyword coverage, and conversion-optimized landing pages — built specifically for the home service industry demand cycle.",
 trackingRetargetingEssentials: [
 { icon: Target, title: "Google Conversion Tracking", description: "Every call, form submission, and quote request tracked back to the keyword and campaign that generated it." },
 { icon: RefreshCw, title: "Seasonal Budget Automation", description: "Ad spend ramps automatically 4–6 weeks before spring and fall peak seasons. Pulls back in slow periods to protect budget." },
 { icon: BarChart3, title: "Monthly Performance Reporting", description: "Full campaign report every month: cost per lead, conversion rate, top-performing keywords, and seasonal trend analysis." },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.10 RETARGETING
 // ══════════════════════════════════════════════════════════════════════
 retargetingHeadline: "Get Found Once.",
 retargetingHighlight: "Stay Top-of-Mind Until They're Ready to Hire.",
 retargetingSubheadline: "A homeowner researching tree removal or spring landscape maintenance visits your site and leaves without calling. Retargeting brings them back when they're ready to make a decision.",
 retargetingBody: [
 "Tree removal and landscape maintenance decisions are rarely made on the first website visit. According to BrightLocal's 2026 research, the average consumer uses six different platforms when evaluating a local business before hiring. A homeowner getting estimates for tree removal or landscape maintenance will visit multiple websites, check reviews across platforms, and compare contractors over days before calling anyone. Retargeting ensures your company is visible throughout that entire decision window — not just during the first search.",
 "GrowSmallBiz sets up Google Display retargeting and Meta retargeting for every paid media client. Visitors who viewed your tree removal or landscape maintenance service pages see your ads across the web and social platforms for up to 30 days after their visit – keeping your brand in front of them until they are ready to book.",
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.11 SOCIAL MEDIA
 // ══════════════════════════════════════════════════════════════════════
 socialMediaHeadline: "We Build Your Social Media",
 socialMediaHighlight: "Presence and Strategy",
 socialMediaSubheadline: "Platform-specific social media strategies for tree service and landscape maintenance companies – built around what actually drives homeowner trust and commercial inquiries in the home service industry.",
 socialMediaByGenre: [
 {
 genre: "Tree Service Companies",
 color: "from-emerald-500/20 to-emerald-600/10",
 primary: [
 { name: "Facebook", icon: Facebook, strategy: "Before-and-after tree removal photos, storm damage response posts, crew introduction videos. Homeowner demographic 35-65." },
 { name: "Instagram", icon: Instagram, strategy: "High-quality tree work photography, time-lapse removal videos, seasonal content. Visual proof of quality." },
 ],
 secondary: [
 { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood-specific posts. Emergency storm response announcements. Community trust building." },
 { name: "YouTube", icon: Youtube, strategy: "Tree removal process videos. Educational content on tree health. GEO-indexed video content." },
 ],
 },
 {
 genre: "Landscape Maintenance Companies",
 color: "from-green-500/20 to-green-600/10",
 primary: [
 { name: "Facebook", icon: Facebook, strategy: "Before-and-after landscape maintenance photos, seasonal tips, spring prep announcements. Homeowner community engagement." },
 { name: "Instagram", icon: Instagram, strategy: "Before-and-after landscape maintenance photos, hardscape project showcases, seasonal transformation content. Visual brand building." },
 ],
 secondary: [
 { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood home improvement recommendations. Seasonal availability announcements. Local trust signal." },
 { name: "Google Posts", icon: Search, strategy: "Weekly GBP posts covering seasonal services, promotions, and crew updates. Direct Map Pack signal." },
 ],
 },
 {
 genre: "Commercial & HOA Landscape Maintenance",
 color: "from-blue-500/20 to-blue-600/10",
 primary: [
 { name: "LinkedIn", icon: Linkedin, strategy: "Property manager and HOA board outreach. Commercial portfolio showcase. B2B landscape maintenance contract acquisition." },
 { name: "Facebook", icon: Facebook, strategy: "Commercial property before-and-after. Seasonal maintenance contracts. Property management company targeting." },
 ],
 secondary: [
 { name: "Instagram", icon: Instagram, strategy: "Commercial landscape portfolio. Design-build project showcase. Visual credibility for B2B buyers." },
 { name: "YouTube", icon: Youtube, strategy: "Commercial project walkthroughs. Maintenance program explainers. Searchable video content." },
 ],
 },
 ],
 linkedInOutreachEnabled: false,

 // ══════════════════════════════════════════════════════════════════════
 // 4.12 AI GROWTH SYSTEM
 // ══════════════════════════════════════════════════════════════════════
 growthSystemHeadline: "for Tree Service & Removal and Landscape Maintenance",
 growthSystemHighlight: "AI Client Growth System",
 growthSystemSubheadline: "Stop chasing leads manually. GrowSmallBiz builds an automated marketing system that captures, qualifies, and follows up with every tree service and landscape maintenance prospect — so your crew focuses on the work, not the phone.",
 clientJourneyStages: [
 { stage: "Awareness", icon: Eye, color: "from-blue-500 to-blue-600", description: "A homeowner notices a damaged tree or overgrown yard after a storm or season change.", goal: "Get discovered by homeowners at the exact moment they need your services" },
 { stage: "Research", icon: Search, color: "from-purple-500 to-purple-600", description: "They search Google or ask an AI assistant for tree service or landscape maintenance companies near them.", goal: "Appear first in Map Pack, Google Ads, and AI search results" },
 { stage: "Consideration", icon: Star, color: "from-primary to-primary", description: "They compare your reviews, website, and photos against two or three competitors.", goal: "Convert the comparison with superior reviews, fast site, and professional photos" },
 { stage: "Booking", icon: Phone, color: "from-emerald-500 to-emerald-600", description: "They call, fill out a form, or chat with your AI receptionist to get a quote.", goal: "Capture every lead 24/7 with AI voice and chat — no missed calls" },
 { stage: "Retention", icon: RefreshCw, color: "from-amber-500 to-amber-600", description: "They become a repeat landscape maintenance client or refer friends after a positive tree removal experience.", goal: "Automate review requests, seasonal reminders, and referral follow-up" },
 ],
 emailNurturePoints: [
 { title: "Stay Top-of-Mind Through the Full Season", icon: Eye, description: "Most tree service and landscape maintenance decisions take days or weeks. Automated email and SMS sequences keep your company visible from first inquiry to booked job." },
 { title: "Convert Seasonal Planners Into Recurring Clients", icon: Heart, description: "A homeowner who books a spring landscape refresh is a candidate for fall cleanup, hardscape installation, and seasonal maintenance. Automated sequences turn one-time jobs into recurring revenue." },
 { title: "Turn Happy Clients Into Your Best Lead Source", icon: Gift, description: "An automated referral system reaches satisfied tree service and landscape maintenance clients with a referral offer — a discount on their next service for every new customer they send your way. Most clients refer one to three people when asked at the right moment with the right incentive. Zero ad spend required." },
 ],
 emailSequenceTitle: "5-Day Inquiry-to-Quote Automation:",
 emailSequenceHighlight: "From First Contact to Booked Job",
 noShowResearchCitations: [
 { stat: "15–30%", source: "Service Industry Research — Field Service Management Studies", publication: "", year: "", label: "of estimate appointments are missed when contractors send no advance confirmation" },
 { stat: "38%", source: "Field Service Scheduling Research", publication: "", year: "", label: "reduction in missed estimate windows when crews send a morning-of arrival confirmation with a time window" },
 { stat: "80%", source: "HomeAdvisor Pro Contractor Survey", publication: "", year: "", label: "of homeowners say a confirmed arrival window makes them more likely to be home and ready for the estimate" },
 { stat: "9x", source: "ServiceTitan Field Service Benchmark Report", publication: "", year: "", label: "more estimate-to-job conversion when a crew arrival window is sent the morning of the appointment versus no confirmation" },
 ],
 sessionReminderWorkflows: [
 {
 sessionType: "Estimate Appointment", icon: ClipboardList, color: "from-emerald-500 to-emerald-600",
 description: "Arrival window confirmation sequence for tree service and landscape maintenance estimate visits",
 noShowImpact: "Missed estimate appointments waste crew time and delay booked revenue.",
 reminders: [
 { timing: "2 days before", channels: ["email"], content: "Estimate confirmation with job address, crew name, and what to expect during the visit" },
 { timing: "Morning of", channels: ["email", "sms"], content: "Arrival window SMS: 'Our crew will be there between 9am–11am. [Crew lead name] will call 30 minutes before arrival.'" },
 { timing: "1 hour before", channels: ["sms"], content: "On-the-way confirmation with crew name, estimated arrival time, and direct crew contact number" },
 ],
 expectedReduction: "Up to 38%",
 },
 {
 sessionType: "Follow-Up Quote", icon: FileText, color: "from-violet-500 to-violet-600",
 description: "Automated follow-up sequence after estimate delivery to close the quote.",
 noShowImpact: "Most tree service and landscape maintenance quotes are lost to silence — no follow-up, no closed job.",
 reminders: [
 { timing: "24 hours after quote", channels: ["email"], content: "Quote summary + easy accept button + FAQ about the process" },
 { timing: "3 days after quote", channels: ["email", "sms"], content: "Checking in — any questions about the estimate?" },
 { timing: "7 days after quote", channels: ["sms"], content: "Seasonal availability notice — schedule filling up for spring/fall" },
 ],
 expectedReduction: "Up to 40% more quotes accepted",
 },
 {
 sessionType: "Seasonal Re-engagement", icon: Leaf, color: "from-amber-500 to-amber-600",
 description: "Automated seasonal outreach to past clients before each peak season.",
 noShowImpact: "Past clients who aren't re-engaged before spring search for a new provider.",
 reminders: [
 { timing: "6 weeks before spring", channels: ["email"], content: "Spring tree and landscape maintenance offer — book early, schedule filling fast" },
 { timing: "3 weeks before spring", channels: ["sms"], content: "Limited spring slots remaining — easy online booking link" },
 { timing: "6 weeks before fall", channels: ["email"], content: "Fall cleanup and tree pruning — book before peak season fills up" },
 ],
 expectedReduction: "30–45% past client retention improvement",
 },
 ],
  marketingCampaignsHighlight: "High-Ticket Campaigns We Build for Tree Service & Landscape Maintenance",
  marketingCampaignsSubheadline: "Real high-ticket offers paired with automated funnels—designed to attract emergency tree removal, tree removal + stump grinding, landscape design-build, and commercial grounds contracts.",
  marketingCampaigns: [
    {
      genre: "Emergency Tree Removal", icon: Zap, color: "from-red-500 to-rose-500",
      offer: {
        headline: "Free Storm-Damage Tree Removal Assessment",
        tagline: "[Urgent Response] — 24/7 assessment for fallen, damaged, or hazardous trees",
        price: "Free", originalPrice: "$250", savings: "Complimentary",
        includes: ["24/7 emergency response assessment", "Insurance documentation support", "Crane-access recommendation", "Same-day removal estimate"],
        urgency: "Storm slots fill within hours", cta: "Request Emergency Assessment",
      },
      funnel: ["Google LSA / Google Ads", "Emergency landing page", "AI call qualification", "On-site estimate", "Same-day booking", "Job completion", "Review request"],
      topPlatforms: ["Google LSA", "Google Ads", "Facebook"],
      seasonality: "Peak: Storm Season (Dec–Feb)",
    },
    {
      genre: "Tree Removal & Stump Grinding", icon: TreePine, color: "from-emerald-500 to-emerald-700",
      offer: {
        headline: "Complimentary Tree Removal & Stump Grinding Quote",
        tagline: "[High-Ticket Lead] — Full removal quote including cleanup and debris haul-away",
        price: "Free", originalPrice: "$195", savings: "Complimentary",
        includes: ["On-site tree risk evaluation", "Full removal + stump grinding estimate", "Permit guidance if required", "Cleanup and debris removal included"],
        urgency: "Limited assessment slots per week", cta: "Get Free Quote",
      },
      funnel: ["Google Ads / Google LSA", "Landing page", "Quote request form", "AI follow-up", "On-site estimate", "Proposal signed", "Job scheduled"],
      topPlatforms: ["Google Ads", "Google LSA", "Nextdoor"],
      seasonality: "Year-round, peak Spring (Mar–May) and Fall (Sep–Nov)",
    },
    {
      genre: "Landscape Design-Build", icon: Sprout, color: "from-teal-500 to-teal-600",
      offer: {
        headline: "Free Landscape Design-Build Consultation",
        tagline: "[High-Ticket Project] — Custom outdoor living design before install season fills",
        price: "Free", originalPrice: "$350", savings: "Complimentary",
        includes: ["Full property design assessment", "Concept plan and material recommendations", "Project scope and timeline", "Fixed-price design-build proposal"],
        urgency: "Design slots limited before install season", cta: "Book Design Consultation",
      },
      funnel: ["Google Ads / Houzz", "Portfolio landing page", "Consultation booking", "Design presentation", "Proposal delivery", "Contract signed", "Project kickoff"],
      topPlatforms: ["Google Ads", "Houzz", "Pinterest"],
      seasonality: "Peak: Spring (Feb–Apr) and Fall (Sep–Oct)",
    },
    {
      genre: "Commercial Grounds", icon: Building2, color: "from-blue-500 to-blue-600",
      offer: {
        headline: "Free Commercial Grounds Maintenance Proposal",
        tagline: "[Annual Contract] — Maintenance and capital improvement plan for HOAs and property managers",
        price: "Free", originalPrice: "", savings: "",
        includes: ["Full property walk-through", "12-month maintenance + renovation proposal", "Seasonal service calendar", "HOA compliance assessment"],
        urgency: "Annual contracts booked Q4–Q1", cta: "Request Proposal",
      },
      funnel: ["LinkedIn Ads", "Landing page", "Proposal request form", "Email nurture", "Sales call", "Contract signed", "Annual renewal"],
      topPlatforms: ["LinkedIn", "Google Ads", "Email"],
      seasonality: "Peak: Q4 (renewals) and Q1 (new contracts)",
    },
  ],
  seasonalCampaignsHeading: "We Automate for Tree Service & Landscape Maintenance",
  seasonalCampaigns: [
    { campaign: "Spring Design-Build Push", timing: "Launch 4-6 weeks before February", offer: "Free landscape design-build consultations + early-bird install pricing", channels: ["Google Ads", "Houzz", "Email"] },
    { campaign: "Storm Season Emergency Response", timing: "Active December-February", offer: "24/7 emergency tree removal assessment + insurance documentation support", channels: ["Google LSA", "Google Ads", "SMS"] },
    { campaign: "Fall Tree Pruning & Removal", timing: "Launch in August for October peak", offer: "Complimentary tree removal + stump grinding quotes before winter", channels: ["Google Ads", "Facebook", "Email"] },
    { campaign: "Commercial Contract Season", timing: "Active September-November", offer: "Annual maintenance and renovation proposals for HOAs and property managers", channels: ["LinkedIn", "Google Ads", "Email"] },
    { campaign: "Capital Improvement Push", timing: "Active May-June", offer: "HOA and property manager capital improvement proposals — hardscape, irrigation, renovation", channels: ["LinkedIn", "Google Ads", "Email"] },
  ],
  pastClientWorkflows: [
 { title: "Annual Seasonal Check-In", icon: Calendar, description: "Automated email sent 10 months after last service - before they start searching for a new provider." },
 { title: "Review Request (48hrs Post-Service)", icon: Star, description: "Automated SMS + email requesting a Google review 48 hours after job completion - when the experience is freshest." },
 { title: "Referral Incentive Automation", icon: Gift, description: "Automated referral offer sent to satisfied clients 2 weeks after job completion — a discount on their next tree service or landscape maintenance job for every new customer they refer. Tracked automatically, reward delivered via SMS. No manual follow-up required from your team." },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.13 REPUTATION
 // ══════════════════════════════════════════════════════════════════════
 reputationHeadline: "More 5-Star Reviews.",
 reputationHighlight: "Higher Map Pack. More Calls.",
 reputationSubheadline: "According to BrightLocal's 2026 Local Consumer Review Survey, 97% of consumers read reviews before making a hiring decision, 31% ignore any business with a rating below 4.5 stars, and 74% only trust reviews from the last 90 days. For tree service and landscape maintenance companies, reviews determine whether a homeowner calls you or a competitor — before you've ever spoken.",
 reputationBullets: [
 "97% of consumers read reviews before making a hiring decision — reviews determine whether a homeowner calls you or your competitor (BrightLocal 2026)",
 "31% of consumers now ignore any business with a rating below 4.5 stars — Map Pack visibility means nothing if your rating disqualifies you on sight (BrightLocal 2026)",
 "74% of consumers only trust reviews from the last 90 days — review recency matters as much as total count for Map Pack ranking and conversion (BrightLocal 2026)",
 "89% of consumers expect a response to their reviews — unanswered reviews signal poor customer care to every future client searching your name (BrightLocal 2026)",
 "Systematic competitor review gap analysis — know exactly how many reviews you need to take the top Map Pack spot",
 ],
 reviewFlowSteps: [
 { step: "1", title: "Job Complete", description: "Crew completes tree removal or landscape maintenance project" },
 { step: "2", title: "Automated Trigger", description: "System sends SMS + email review request 48 hours after completion" },
 { step: "3", title: "One-Tap Review", description: "Client taps link and lands directly on Google review form – zero friction" },
 { step: "4", title: "Review Posted", description: "5-star review added to Google profile, boosting Map Pack ranking" },
 { step: "5", title: "Response & Archive", description: "GrowSmallBiz responds to review and archives for testimonial use" },
 ],
 giftCardUseCases: "neighbor referrals, seasonal promotions, and commercial prospect outreach",
 giftAndReferralPrograms: [
 {
 title: "Referral Reward Program", icon: UserPlus,
 description: "Automated referral program that rewards existing clients for sending new tree service or landscape maintenance customers your way.",
 features: ["Automated referral tracking", "Reward delivery via SMS", "Discount on next service", "Referral performance reporting"],
 },
 {
 title: "Seasonal Gift Cards", icon: Gift,
 description: "Sell tree service and landscape maintenance gift cards year-round for neighbor gifts, holiday presents, and HOA move-in welcome packages.",
 features: ["Digital and physical gift cards", "Custom amounts", "Automated delivery", "Redemption tracking"],
 },
 {
 title: "Reputation Score Tracking", icon: BarChart3,
 description: "Monthly reputation report showing review count, average rating, recency trend, and competitor comparison – so you always know exactly where you stand in the Map Pack.",
 features: ["Monthly review velocity report", "Competitor review gap analysis", "Map Pack position tracking", "Response rate monitoring"],
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.14 AI VOICE & CHAT
 // ══════════════════════════════════════════════════════════════════════
 aiVoiceChatSectionHeadline: "Never Miss a Storm-Damage Call",
 aiVoiceChatHighlight: "Again.",
 aiVoiceChatSubheadline: "Never miss a storm-damage call at midnight, a commercial inquiry on Sunday, or an emergency tree removal request during your busiest week. Your AI Receptionist and Website Live Chat work together — answering, qualifying, booking, and following up with every lead automatically, around the clock.",
 aiFeatures: [
 { title: "24/7 AI Voice Receptionist", icon: Phone, color: "violet", description: "", features: [] },
 { title: "Conversational AI Chat", icon: MessageSquare, color: "cyan", description: "", features: [] },
 ],

 // ── Extended AI Receptionist Section ──
 aiReceptionistComparisonH3: "One AI Receptionist. Zero Sick Days. A Fraction of the Cost.",
 aiReceptionistComparisonBody: "A full-time receptionist costs $38,000–$52,000 per year in salary alone — before benefits, payroll taxes, PTO, training, and turnover. And even the best human receptionist clocks out at 5pm, takes lunch breaks, calls in sick, and can only handle one call at a time. Your AI Receptionist works every hour of every day — and never puts a storm-damage caller on hold.",
 aiReceptionistComparison: [
 { human: "Works 9am–5pm Monday to Friday", ai: "Available 24/7/365 — midnight storm calls, Sunday commercial inquiries, holiday emergencies" },
 { human: "One call at a time — callers get voicemail during peak volume", ai: "Handles unlimited simultaneous calls — every caller answered instantly" },
 { human: "$38,000–$52,000/year salary + benefits, PTO, sick leave, payroll tax", ai: "Fraction of the cost — no benefits, no PTO, no sick days, no turnover" },
 { human: "Takes lunch breaks, coffee breaks, personal time", ai: "Zero downtime — no breaks, no distractions, always at full capacity" },
 { human: "Calls in sick — no coverage during storm season spikes", ai: "Never sick, never on vacation — always available when you need it most" },
 { human: "Weeks of training before productive", ai: "Live in 30 days — pre-trained on your services, pricing, and service area" },
 { human: "Cannot send payment links, booking confirmations, or SMS follow-ups", ai: "Books appointments, sends payment links, confirms arrival windows — automatically" },
 { human: "Covers phone calls only — no website chat coverage", ai: "Covers phone calls and website live chat from one unified AI system" },
 { human: "May misroute urgent after-hours requests", ai: "Detects urgency by service type — escalates emergencies to your on-call team instantly" },
 { human: "Cannot transfer to a human outside business hours", ai: "Transfers to a live human when needed — flags after-hours emergencies for immediate callback" },
 ],
 aiReceptionistHighlightText: "When a homeowner calls at 11pm about a tree that fell on their fence during a storm — your competitor's voicemail gets the call. Your AI Receptionist answers, qualifies the job, books the estimate, and sends a confirmation SMS. That job is yours before sunrise.",
 aiReceptionistImage: aiReceptionistMulticall,
 aiReceptionistImageAlt: "AI-driven multi-call interface for tree service and landscape maintenance businesses, featuring emergency tree removal, landscape maintenance estimates, property management, and design-build consultations.",
 aiVoiceFeatureBullets: [
 "Answers every call 24/7 — storm damage at midnight, commercial inquiries on Sunday, emergency removals during your busiest week",
 "Qualifies the lead by service type (tree removal, landscape maintenance, commercial) and urgency level",
 "Books estimate appointments directly into your calendar — no back-and-forth, no missed scheduling windows",
 "Sends payment links for deposits or completed jobs via SMS — collect faster without chasing invoices",
 "Confirms booked appointments automatically — arrival window SMS the day before and morning of, with crew name and contact number",
 "Transfers to a live human team member when needed — and flags after-hours emergencies for immediate callback",
 "Integrates with your CRM — every lead logged automatically with full conversation summary",
 "Sends lead summary to your team via SMS and email within 60 seconds of every inquiry",
 ],
 aiChatImage: aiWebsiteLivechat,
 aiChatImageAlt: "Tree service website showcasing before-and-after images of tree removal, with a live chat feature on a smartphone for customer inquiries, emphasizing local landscape maintenance solutions.",
 aiChatFeatureBullets: [
 "Answers service questions, pricing queries, and availability requests instantly — 24/7, no staffing required",
 "Qualifies website visitors by service interest, location, and urgency before routing to your team",
 "Captures lead contact information from visitors who are not ready to call but are actively researching",
 "Books estimate appointments directly from the chat widget — no phone call required",
 "Sends payment links for deposits via chat for clients who prefer not to call",
 "Escalates emergency requests (storm damage, hazardous tree) to immediate callback notification",
 "Hands off seamlessly to your AI Voice Receptionist — one unified system across phone and web",
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.15 WHY CHOOSE US
 // ══════════════════════════════════════════════════════════════════════
 whyChooseUsHeadline: "Why Tree Service & Removal and Landscape Maintenance Companies",
 whyChooseUsHighlight: "Choose GrowSmallBiz",
 whyChooseUsSubtitle: "Your High-Ticket Home Service Marketing Partner — Not a Generalist Agency",
 whyChooseUsBody: "GrowSmallBiz Digital Marketing, founded by Subrata Guha and headquartered in Danville, CA, specializes in marketing for tree service and landscape maintenance companies across the San Francisco Bay Area and the United States. We bring 30+ years of enterprise marketing and digital transformation experience to the home service industry – combined with the local market knowledge that national agencies cannot replicate.",
 whyChooseUsCards: [
 { icon: TreePine, title: "Tree & Landscape Maintenance Specialists", description: "GrowSmallBiz focuses exclusively on tree service and landscape maintenance companies — not plumbers one week and restaurants the next. Specialization means we understand the emergency nature of storm-damage tree calls, the 300–400% seasonal demand spikes in spring and fall, and the specific Map Pack signals that drive bookings for tree service near me and landscape maintenance near me searches." },
 { icon: MapPin, title: "Bay Area Local", description: "We are based in Danville. We know the seasonal patterns, the competitive landscape, and the neighborhoods across Contra Costa County, the Tri-Valley, and the greater Bay Area. Your campaigns use real local intelligence." },
 { icon: Shield, title: "Exclusive Territory", description: "We do not work with competing tree service or landscape maintenance companies in the same service area. Your leads stay yours – no conflicts of interest, no shared client lists." },
 { icon: TrendingUp, title: "Proactive Seasonal Management", description: "Every client gets a 12-month seasonal marketing calendar built around the home service industry's specific demand cycles. We ramp Google Ads budgets and seasonal landing pages 4–6 weeks before each peak — spring prep, storm season, fall cleanup — because tree service and landscape maintenance searches spike 300–400% during these windows. By the time competitors scramble to catch up, you already own the Map Pack." },
 { icon: Bot, title: "AI-Powered Full Stack", description: "Local SEO, Google Ads, reputation management, AI receptionist, and website design – all managed under one roof. One strategy, one dashboard, one point of contact." },
 { icon: BarChart3, title: "Verified Results, Not Promises", description: "We publish verified case study data from real campaigns. The 1.1 Map Pack rank, the +770% phone click increase, the 553 Google Ads conversions – these are from actual GrowSmallBiz campaigns, not industry averages." },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // REAL RESULTS
 // ══════════════════════════════════════════════════════════════════════
 realResultsHeadline: "Real Results for Tree Service",
 realResultsHighlight: "& Removal and Landscape Maintenance Companies",
 realResultsSubheadline: "Verified campaign data from GrowSmallBiz clients in the tree service and landscape maintenance industry. Two independently verified campaigns – AI SEO and Google Ads.",
 realResults: [
 {
 campaignType: "AI SEO Campaign",
 headline: "Chicagoland Tree Service & Landscape Maintenance Company",
 period: "Oct-Nov 2023 vs. Aug-Sep 2023",
 metrics: [
 { value: "+138.54%", label: "Total Impressions (Google Search Console)" },
 { value: "+25.77%", label: "Organic Clicks" },
 { value: "1.1", label: "Average Map Pack Rank" },
 { value: "+770%", label: "Phone Number Clicks" },
 { value: "+16.67%", label: "Contact Form Conversions" },
 { value: "123/123", label: "High-Ranking Map Pack Grid Points" },
 ],
 bodyCopy: "A Chicagoland tree and landscape company managed by GrowSmallBiz achieved a 1.1 average Map Pack rank across all 123 local search grid points within six months of starting an AI SEO campaign – with total impressions increasing 138.54 percent and phone number clicks increasing 770 percent in the first two months.",
 caseStudyUrl: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
 },
 {
 campaignType: "Google Ads PPC Campaign",
 headline: "Tree Service & Landscape Maintenance Company",
 period: "All Time + Last 90 Days (Apr-Jul 2024 vs. Jan-Apr 2024)",
 metrics: [
 { value: "553", label: "Total Conversions (All Time)" },
 { value: "394", label: "Call Leads (All Time)" },
 { value: "$53.70", label: "Cost Per Acquisition (All Time)" },
 { value: "299", label: "Conversions Last 90 Days" },
 { value: "+211.5%", label: "90-Day Conversion Lift" },
 { value: "+169.5%", label: "90-Day Click Growth" },
 ],
 bodyCopy: "A GrowSmallBiz Google Ads campaign for a tree service and landscape maintenance company generated 553 total conversions at a $53.70 cost per acquisition – with 394 of those conversions from call leads. In the 90 days following campaign scaling, conversions increased 211.5 percent compared to the prior 90-day period.",
 caseStudyUrl: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // CASE STUDY LINKS
 // ══════════════════════════════════════════════════════════════════════
 caseStudyLinks: [
 {
 title: "Marketing Case Study: Tree Service & Landscape Maintenance",
 description: "How a Chicagoland tree service and landscape maintenance company achieved a 1.1 average Map Pack rank, +138.54% impressions, and +770% phone clicks with AI SEO.",
 url: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
 icon: Search,
 },
 {
 title: "Google Ads Case Study: Tree Service & Landscape Maintenance",
 description: "How GrowSmallBiz generated 553 conversions at $53.70 CPA for a tree service and landscape maintenance company — with a 211.5% lift in 90-day conversions after campaign scaling.",
 url: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
 icon: Target,
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // 4.16 FAQ
 // ══════════════════════════════════════════════════════════════════════
 faqHeadline: "Tree Service & Removal and Landscape Maintenance",
 faqHighlight: "Marketing FAQs",
 faqSubheadline: "Common questions from tree service and landscape maintenance business owners — organized by topic",
 faqCategories: [
 {
 id: "local-seo",
 label: "Local SEO",
 icon: Search,
 color: "emerald",
 faqs: [
 {
 question: "How long does it take to see results from SEO for a tree service or landscape maintenance company?",
 answer: "Most tree service and landscape maintenance companies see measurable movement in Google Map Pack rankings within 60 to 90 days of starting a managed SEO program. Top 3 Map Pack positions in competitive Bay Area markets typically take 4 to 6 months of consistent optimization. Emergency and near me keywords tend to rank faster than broad service terms because intent is immediate and Google weights proximity heavily. In a Chicagoland tree service and landscape maintenance campaign managed by GrowSmallBiz, the client reached a 1.1 average Map Pack rank across 123 grid points within six months.",
 },
 {
 question: "Is local SEO worth it for a small landscape maintenance or design-build business?",
 answer: "Yes — local SEO is the highest-ROI long-term marketing investment for a small landscape maintenance or design-build business because it builds organic visibility that compounds over time without a per-click cost. A well-optimized Google Business Profile with strong review velocity consistently generates inbound calls without ongoing ad spend. The tradeoff is time: local SEO takes 60 to 90 days to show measurable movement. For faster results in the first 90 days, run local SEO in parallel with Google Local Services Ads.",
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
 question: "What is the difference between Google Local Services Ads and Google Ads for tree service and landscape maintenance companies?",
 answer: "Google Local Services Ads appear above all other results, carry the Google Guarantee badge, and charge per verified lead rather than per click — making them the best option for emergency tree service and landscape maintenance searches. Standard Google Ads charge per click and give more control over keywords, budget, and landing pages — making them better for seasonal campaigns and non-emergency targeting. GrowSmallBiz recommends running both simultaneously: LSA for emergency and high-intent queries, Google Ads for seasonal and service-specific campaigns.",
 },
 {
 question: "What digital marketing works best for tree service and landscape maintenance companies?",
 answer: "The highest-impact marketing channels for tree service and landscape maintenance companies are Google Local Services Ads for emergency removal searches, Local SEO and Google Business Profile optimization for Map Pack visibility, and reputation management to build the review count that drives click-through rates. Tree service and landscape maintenance companies benefit from a combined approach because buyers operate across two intent modes: emergency, which is immediate and Map Pack-driven, and planned, which is research-driven and portfolio and review-dependent. GrowSmallBiz structures campaigns to capture both buyer types simultaneously.",
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
 question: "How do I stop relying on Angi and Thumbtack for landscape maintenance leads?",
 answer: "The fastest path away from lead aggregators is building Google Business Profile review velocity and activating Google Local Services Ads simultaneously — achievable within the first 8 to 12 weeks. After that, service-area landing pages targeting city-specific keywords provide organic lead flow over months 3 to 6. Most tree service and landscape maintenance contractors who follow this sequence reduce cost-per-lead by 40 to 55 percent within six months. The key difference: you own the channel instead of renting access to shared leads.",
 },
 {
 question: "Does GrowSmallBiz handle seasonal marketing for tree service and landscape maintenance companies?",
 answer: "Yes — GrowSmallBiz builds a 12-month seasonal marketing calendar for every tree service and landscape maintenance client, ramping Google Ads budgets 4 to 6 weeks before each peak season rather than during it. This includes activating seasonal landing pages for spring landscape refresh, fall cleanup, and storm damage removal, launching review push campaigns ahead of demand surges, and monitoring website performance before high-traffic months. Proactive seasonal management consistently outperforms reactive budgeting in the home service industry.",
 },
 {
 question: "Does GrowSmallBiz work with landscape maintenance design-build companies?",
 answer: "Yes — GrowSmallBiz works with landscape maintenance design-build companies whose primary challenge is converting long-cycle project research into booked consultations. The buyer journey for design-build is fundamentally different from emergency tree service: homeowners research over weeks, compare portfolios, and make decisions based on visual credibility, review count, and the quality of your website. Our approach combines portfolio-optimized website design, local SEO targeting design-intent queries like landscape maintenance company near me and landscape maintenance design Danville CA, Google Ads campaigns targeting homeowners actively planning a project, and automated follow-up sequences for consultation requests — because most design-build leads go cold without a consistent follow-up system.",
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
 question: "What does tree service and landscape maintenance digital marketing cost?",
 answer: "Tree service and landscape maintenance marketing costs vary by market, competitive density, and the services included — GrowSmallBiz does not display fixed pricing because a company competing in San Francisco faces a different landscape than one serving Danville or Tracy. The investment depends on your current online presence, your growth goals, and which channels make sense for your market. GrowSmallBiz offers a free 30-minute strategy session to assess your situation and provide a clear picture of what investment is appropriate before any commitment.",
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
 answer: "Not always, but your website must meet minimum conversion standards — mobile speed under 3 seconds, click-to-call on every page, and service-specific landing pages. If your current site fails those, we build a new one first because sending paid traffic to a weak site wastes your budget.",
 },
 {
 question: "How long does it take to build a tree service or landscape maintenance website?",
 answer: "Typically 3–4 weeks from kickoff to launch. We build conversion-focused sites specifically for home service industry contractors — not generic templates — so the development timeline is tight and the output is immediately SEO-ready.",
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
 question: "Which social media platforms work best for tree service and landscape maintenance companies?",
 answer: "Facebook and Instagram are the primary platforms for residential tree service and landscape maintenance — before-and-after photos and storm response posts drive the most engagement with homeowners aged 35–65. LinkedIn is the right platform for commercial landscape maintenance and HOA contract acquisition. We allocate 80% of your social effort to your two highest-ROI platforms before expanding.",
 },
 {
 question: "How often should a tree service or landscape maintenance company post on social media?",
 answer: "Three to four times per week on primary platforms is the effective range for most home service industry contractors. Consistency matters more than volume — a company that posts three quality before-and-after photos or project walkthroughs per week outperforms one that posts daily generic content and then goes silent during busy season.",
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
 question: "How many Google reviews does a tree service or landscape maintenance company need to rank in the Map Pack?",
 answer: "It depends on your specific market and competitor review counts. We run a competitor review gap analysis for every client — if the top Map Pack position in your area has 180 reviews and you have 40, we build a systematic review velocity plan to close that gap within 6–9 months using automated post-job SMS and email requests.",
 },
 {
 question: "What do we do about a negative Google review?",
 answer: "We respond to every negative review within 24 hours using protocols that demonstrate professionalism to future clients reading your profile — because how you respond matters as much as the review itself. We also analyze the pattern of negative reviews to identify service or communication gaps before they compound.",
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
 question: "What happens when a homeowner calls after hours during storm season?",
 answer: "Your AI Receptionist answers every call 24/7 — storm damage calls at midnight, commercial inquiries on Sunday, emergency tree removal requests during your busiest week. It qualifies the lead by service type and urgency, captures contact details, books a callback, and sends you a lead summary via SMS within 60 seconds.",
 },
 {
 question: "Can the AI Receptionist handle commercial landscape maintenance inquiries differently from residential calls?",
 answer: "Yes. The AI Receptionist is configured to route and qualify leads by service type — residential tree removal, landscape maintenance inquiries, commercial property inquiries, and HOA requests are each handled with the appropriate qualification questions and escalation paths.",
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
 answer: "A standard CRM stores contacts. The AI Client Growth System captures every lead automatically, sends instant follow-up sequences, qualifies leads by service type, books appointments, triggers review requests 48 hours after job completion, and runs seasonal re-engagement campaigns — without any manual input from your team. It replaces five or six disconnected tools with one integrated system.",
 },
 {
 question: "How quickly can the AI Growth System be set up for a tree service or landscape maintenance company?",
 answer: "The core system — AI Receptionist, inquiry automation, and review request sequences — is live within 30 days. The full marketing automation suite including seasonal campaigns and referral incentive workflows is typically complete within 60 days of kickoff.",
 },
 ],
 },
 ],
 faqCtaCard: {
 headline: "More Questions About Green Industry Marketing?",
 body: "Get a personalized walkthrough of our SEO, Google Ads, and AI systems for your specific market and service mix.",
 signoff: "Let's build your exclusive lead pipeline.",
 },

 // ══════════════════════════════════════════════════════════════════════
 // STICKY CTA
 // ══════════════════════════════════════════════════════════════════════
 stickyCtaConfig: {
 title: "Ready for a Tree Service & Landscape Maintenance Marketing System That Fills Your Schedule Year-Round?",
 description: "Let's discuss a custom marketing strategy for your specific market, service area, and growth goals.",
 buttonText: "Get Your Custom Growth Strategy",
 accentWords: ["Year-Round"],
 showAfterScroll: 800,
 },

 // ══════════════════════════════════════════════════════════════════════
 // CONTACT SECTION
 // ══════════════════════════════════════════════════════════════════════
 contactSectionHeadline: "Ready to Grow Your Tree Service or Landscape Maintenance Business?",
 contactSectionBody: "Schedule a strategy call to discuss your marketing goals, service area, and what a seasonal campaign calendar looks like for your specific market.",

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
 description: "We start with a full audit of your current online presence — Google Business Profile, website performance, review count, local rankings, and competitor Map Pack positions — before recommending a single tactic. You cannot fix what you have not measured.",
 deliverable: "Deliverable: Custom marketing roadmap with seasonal campaign calendar and competitive gap analysis.",
 },
 {
 step: "02", icon: Search,
 title: "Local SEO & GBP Foundation",
 description: "Local SEO for tree service and landscape maintenance begins with your Google Business Profile — optimized from category selection to service areas, weekly posts, and photo cadence. Citation building and on-site location signals follow. This is the foundation every other channel builds on.",
 deliverable: "Deliverable: Fully optimized GBP, citation audit and cleanup, on-site local SEO implementation.",
 },
 {
 step: "03", icon: Target,
 title: "Paid Campaign Launch",
 description: "Google Local Services Ads launch first for immediate emergency and high-intent coverage. Standard Google Ads follow with seasonal campaigns timed 4 to 6 weeks ahead of each demand surge. Every campaign includes conversion tracking from click to call to booked job.",
 deliverable: "Deliverable: Live LSA and Google Ads campaigns with conversion tracking and seasonal budget calendar.",
 },
 {
 step: "04", icon: Star,
 title: "Review Velocity & Reputation",
 description: "Systematic review generation begins immediately — automated SMS and email requests 48 hours after every completed job. Review monitoring, response management, and competitor gap tracking run continuously throughout the engagement.",
 deliverable: "Deliverable: Automated review request system, monthly reputation report, Map Pack position tracking.",
 },
 {
 step: "05", icon: TrendingUp,
 title: "Reporting & Optimization",
 description: "Every month you receive a full performance report: Map Pack rankings, call volume, cost per lead, conversion rate, and seasonal trend analysis. We optimize campaigns based on data, not assumptions — and you see exactly where every dollar goes.",
 deliverable: "Deliverable: Monthly performance report, optimization summary, and next-month campaign plan.",
 },
 ],

 // ══════════════════════════════════════════════════════════════════════
 // WHO THIS IS FOR
 // ══════════════════════════════════════════════════════════════════════
 whoThisIsForHeadline: "Is GrowSmallBiz Right for Your Tree Service & Removal and Landscape Maintenance Company?",
 whoThisIsForHighlight: "Right for Your",
 whoThisIsForBadge: "WHO THIS IS FOR",
 strongFitLabel: "Strong Fit",
 notFitLabel: "Not the Right Fit",
 strongFitItems: [
 "Established tree service or landscape maintenance company with at least one full crew and consistent job volume",
 "Currently paying Angi, Thumbtack, or HomeAdvisor for shared leads and want to eliminate that dependency",
 "Ready to invest in owned marketing for at least 6 months — SEO and reputation building are not overnight results",
 "Want a seasonal marketing calendar and proactive campaign management, not reactive ad spend",
 "Looking for an experienced specialist agency that understands the home service industry demand cycle — not a generalist who serves restaurants one month and contractors the next",
 "Commercial contracts, HOA accounts, or property management relationships are part of your growth goal",
 "Landscape remodeling companies with active design-build, hardscape, or commercial portfolio projects looking to convert long-cycle project research into booked consultations",
 ],
 notFitItems: [
 "Solo operators in their first year who are not yet generating consistent revenue",
 "Companies looking for a one-time website build with no ongoing marketing strategy",
 "Businesses not prepared to respond to leads quickly — our system generates calls, but your team needs to answer them",
 "Companies unwilling to request reviews from clients — reputation management requires participation",
 ],

 // ══════════════════════════════════════════════════════════════════════
 // MID-PAGE CTA
 // ══════════════════════════════════════════════════════════════════════
 midPageCta: {
 headline: "Sound Like Your Business?",
 subtext: "Let's talk about what owning your local tree service and landscape maintenance market actually looks like. Free 30-minute strategy session, no commitment.",
 primaryLabel: "Schedule Your Free Strategy Call",
 position: "afterWhoThisIsFor",
 },
};
