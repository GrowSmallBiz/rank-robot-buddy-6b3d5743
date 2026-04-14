import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Search, TrendingUp, Users, Target, Calendar,
  Bot, Clock, MessageSquare, Phone, Zap,
  Gift, RefreshCw, Mail, CalendarCheck,
  Eye, Megaphone, Shield, MapPin,
  AlertTriangle, DollarSign, Globe,
  Star, BarChart3, Facebook, Instagram,
  Sparkles, UserPlus, Heart, Palette,
} from "lucide-react";

import medSpaHeroImage from "@/assets/industry-medspa-hero-v2.jpg";
import portfolioMedSpaWebsite from "@/assets/portfolio-medspa-website.webp";

export const medSpaConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "Med Spa Marketing Agency | AI SEO, Google Ads & Client Acquisition | GrowSmallBiz",
  metaDescription: "GrowSmallBiz helps med spas attract high-value aesthetic clients with AI-powered SEO, Google Ads, Instagram strategy, and 24/7 AI Receptionist. Full-service digital marketing built for medical spas.",
  canonicalUrl: "/health-and-wellness-practices/marketing-for-med-spas/",
  serviceName: "Med Spa Marketing Services",
  serviceType: "Digital Marketing for Medical Spas",
  serviceDescription: "AI-powered SEO, Google Ads, Instagram strategy, reputation management, and marketing automation for medical spas.",
  breadcrumbs: [
    { name: "Health & Wellness Practices", url: "/health-and-wellness-practices/" },
    { name: "Med Spa Marketing", url: "/health-and-wellness-practices/marketing-for-med-spas/" },
  ],

  // ── Hero (Prompt 2) ──
  heroImage: medSpaHeroImage,
  badgeText: "Medical Spa Marketing & Growth System",
  badgeIcon: Sparkles,
  h1Line1: "Med Spa Marketing That Attracts",
  h1Line2: "High-Value Clients and Fills Your",
  h1Highlight: "Treatment Calendar",
  heroSubheadline: "Stop competing on price and discounts. AI-powered SEO, Google Ads, and automated client acquisition built for medical spas that want a full treatment calendar and a loyal membership base.",
  // heroReassurance: "No commitment. No pressure. Just a clear path forward for your practice.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaAnchor: "#on-this-page",
  statsBar: [
    { value: "3–6 mo", label: "To reach top Google rankings for med spa searches" },
    { value: "5 min", label: "AI response speed to every new client inquiry" },
    { value: "24/7", label: "AI Receptionist coverage for after-hours booking requests" },
    { value: "2–4×", label: "New client inquiry increase with Google Ads" },
  ],

  // ── Pain Points (Prompt 3) ──
  painPointsHeadline: "Med Spa Marketing Challenges",
  painPointsSubheadline: "Even the most skilled aesthetic practitioners struggle to attract a consistent flow of high-value clients. If any of these resonate, your marketing infrastructure needs attention.",
  painPoints: [
    {
      icon: Search,
      title: "Invisible in Treatment-Specific Search",
      description: "Clients searching 'Botox near me' or 'lip filler [city]' find your competitors first — even if your injector credentials and clinical outcomes are superior.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Users,
      title: "Relying on Existing Clients",
      description: "Your current clients love you, but word-of-mouth can't scale a med spa. Without a predictable digital acquisition channel, growth stops the moment referrals slow down.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Instagram,
      title: "Social Media Presence That Doesn't Convert",
      description: "You have Instagram followers, but they're not booking. Organic social builds awareness — without a system to capture and convert that attention into appointments, it's brand spend with no ROI.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Star,
      title: "Low Review Volume",
      description: "84% of clients check online reviews before choosing a med spa. Without a consistent review generation system, your before/after results and injector expertise stay invisible to new clients. — rater8, 2025",
      hasImage: false, showAILogos: false,
    },
    {
      icon: RefreshCw,
      title: "No Membership & Retention System",
      description: "Recurring membership revenue is the biggest underutilized lever in med spas. Without an automated enrollment and retention system, you're constantly acquiring new clients instead of monetizing the ones you already have.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "No High-Value Treatment Visibility",
      description: "General skincare keeps the schedule filled, but body contouring, laser treatments, and injectables drive your highest revenue per visit. Most med spas have no strategy to attract these high-value cases at scale.",
      hasImage: false, showAILogos: false,
    },
  ],

  // ── Bridge (Prompt 4) ──
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of hoping clients find you and hoping they return, imagine a predictable system that attracts new clients through search, converts inquiries into booked appointments automatically, and builds the recurring membership revenue that stabilizes your practice.",

  // ── System Diagram (Prompt 4) ──
  systemDiagramHeadline: "GrowSmallBiz Predictable Marketing System",
  systemDiagramBody: "A complete client acquisition engine that attracts new clients through search, converts inquiries into booked appointments automatically, and turns first-time visitors into loyal, recurring membership relationships.",

  // ── CTAs (Prompt 4 / 12) ──
  ctaAfterPainPoints: {
    headline: "Ready for Med Spa Marketing That Fills Your Treatment Calendar With the Right Clients?",
    subtext: "Let's build a custom med spa growth strategy to attract high-value clients and build a recurring membership base.",
    primaryLabel: "Get Your Free Strategy Session",
    secondaryLabel: "Call +1 (925) 886-3724",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free Med Spa SEO Visibility Audit",
    subtext: "Find out exactly where your med spa appears in local search results and how clients are finding you.",
    primaryLabel: "Get SEO Visibility Report",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See Your Med Spa Running on Autopilot",
    subtext: "Watch how automated follow-ups, AI booking, and smart client nurturing can transform your aesthetic practice.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },

  // ── On This Page ──
  onThisPageItems: [
    { id: "website-design", label: "Website Design", icon: "🌐" },
    { id: "seo", label: "AI SEO", icon: "🔍" },
    { id: "paid-media", label: "Paid Media", icon: "📢" },
    { id: "retargeting", label: "Retargeting", icon: "🎯" },
    { id: "social-media", label: "Social Media", icon: "📱" },
    { id: "client-growth", label: "Growth System", icon: "🤖" },
    { id: "reputation", label: "Reputation", icon: "⭐" },
    { id: "ai-communication", label: "AI Voice & Chat", icon: "🎙️" },
    { id: "why-choose", label: "Why Choose Us", icon: "🏆" },
    { id: "faq", label: "FAQs", icon: "❓" },
  ],

  // ── Website Design (Prompt 5) ──
  websiteDesignBadge: "Medical Spa Websites",
  websiteDesignHeadline: "Med Spa Websites That Convert",
  websiteDesignHighlight: "Visitors Into Booked Appointments",
  websiteDesignSubheadline: "Fast, visually stunning med spa websites built to generate new client inquiries and showcase your full treatment menu with the trust signals aesthetic clients demand.",
  websiteDesignImage: portfolioMedSpaWebsite,
  websiteDesignFeatureHeadline: "Med Spa Websites Built to Win the New Client Decision",
  websiteDesignFeatureBody: "A prospective client researching a med spa visits your website with a simple question: can I trust this practice with my appearance? We build med spa websites that answer that question immediately — with professional before/after galleries, treatment-specific pages, injector credentials front and center, and a seamless path to book from any device.",
  websiteDesignBullets: [
    "Online booking integration — 24/7 new client appointment capability",
    "Treatment pages for every service: Botox, fillers, CoolSculpting, laser, facials, microneedling",
    "Before/after gallery with consent-compliant imagery",
    "Injector and provider credentials and bio pages",
    "Client reviews and testimonials integration",
    "Membership and financing information page",
    "Mobile-first design — majority of aesthetic searches on mobile",
    "Blog and content hub for treatment education and SEO",
  ],

  // ── AI Search Callout (Prompt 6) ──
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search Is Now Influencing Aesthetic Decisions.",
  aiSearchCalloutBody: "Clients are asking ChatGPT and Gemini 'who's the best med spa near me for Botox?' before they open Google. If you want more booked appointments, you need to rank on Google and show up in AI search.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
    { value: "73%", label: "of clients adopted new healthcare research behaviors in the past year — rater8, 2025" },
  ],

  // ── Conversational AI Queries (Prompt 7) ──
  conversationalAiQueries: [
    "Best med spa near me for Botox — reviews 2025",
    "Which med spa offers CoolSculpting in [city]?",
    "How much does lip filler cost at a med spa near me?",
    "Best med spa for laser hair removal in [city]",
    "What's the difference between Botox and Dysport?",
    "Med spa with before and after photos near me",
    "Med spa membership worth it — [city] options",
  ],

  // ── SEO (Prompt 8) ──
  seoBadge: "Med Spa SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "Medical Spas",
  seoSubheadline: "Comprehensive SEO designed for medical spas — from high-frequency injectable appointments to high-value body contouring and laser treatments.",
  seoEditorialHeadline: "Why Med Spa SEO Works",
  seoEditorialHighlight: "Differently Than Other Healthcare Marketing",
  seoEditorialBody: [
    "Med spa is a visual-first, consideration-driven search category — and both dimensions require different strategies.",
    "The first search type is treatment-specific: a client ready to book Botox, researching lip filler options, or looking for a CoolSculpting provider. These are high-intent commercial searches — 'Botox near me' or 'lip filler [city]' — where the decision is close and goes to whoever appears first with strong reviews and compelling before/after imagery.",
    "The second search type is aspirational and educational: clients exploring available treatments, comparing providers, researching how procedures work, and building trust before they commit. These clients have high lifetime value but require a trust-building content strategy — educational treatment pages, provider spotlights, and before/after storytelling that converts consideration into consultation.",
    "This dual-intent dynamic means your SEO strategy must work on two tracks simultaneously. Local SEO and Google Business Profile optimization wins the ready-to-book treatment search. Service-specific content authority and topical depth wins the consideration-phase client who is comparing multiple providers over weeks.",
    "Our approach integrates all of it: treatment-specific local visibility, educational content authority, AI search citation building, and reputation management — all working together as a single client acquisition system.",
  ],
  seoEditorialPullQuote: "A med spa with strong reviews, a consistent before/after content presence, and high AI citation share builds the kind of social proof that aesthetic clients trust before they ever walk through the door.",

  // ── AEO Entity Block (Prompt 9) ──
  aeoEntityBlock: [
    {
      badge: "WHAT IS IT",
      title: "What is med spa marketing?",
      body: "Med spa marketing encompasses the digital strategies and systems a medical spa uses to attract new clients, rank in local search results, build online reputation, and convert inquiries into booked appointments and membership relationships. It includes SEO, paid advertising, social media management, influencer strategy, and automated client communication — with FDA/FTC-compliant messaging across all treatment categories.",
    },
    {
      badge: "WHO IT SERVES",
      title: "Who does med spa marketing serve?",
      body: "Med spa marketing serves solo medical spa practices, multi-location aesthetic clinics, botox and filler specialists, medical weight loss practices, laser and body contouring centers, and integrative wellness and aesthetics practices seeking to grow their high-value client base and build recurring membership revenue.",
    },
    {
      badge: "WHAT WE DO",
      title: "What does GrowSmallBiz do for medical spas?",
      body: "GrowSmallBiz builds complete med spa client acquisition systems — combining conversion-focused websites, AI-powered SEO for Google and AI search platforms, Google and Meta paid advertising, Instagram and TikTok social media strategy, and an AI Client Growth System that automates follow-up, membership enrollment, recall, and reputation generation.",
    },
  ],

  // ── Keyword Categories (Prompt 10) ──
  seoKeywordCategories: {
    injectables: {
      label: "Injectables & Neurotoxins", icon: Sparkles,
      image: medSpaHeroImage,
      keywords: [
        "Botox near me",
        "lip filler [city]",
        "dermal fillers [city]",
        "Dysport injections near me",
        "cheek filler [city]",
        "under eye filler near me",
      ],
      competitors: "Plastic surgery practices offering injectables, dermatology offices, other med spas, RealSelf listings",
    },
    bodyContouring: {
      label: "Body Contouring & Laser", icon: Target,
      image: portfolioMedSpaWebsite,
      keywords: [
        "CoolSculpting near me",
        "laser hair removal [city]",
        "body contouring [city]",
        "Emsculpt [city]",
        "skin resurfacing near me",
        "laser treatment [city]",
      ],
      competitors: "Plastic surgery centers, dedicated laser clinics, medical weight loss centers, franchise aesthetics chains",
    },
    skincare: {
      label: "Skin Care & Facial Treatments", icon: Heart,
      image: medSpaHeroImage,
      keywords: [
        "HydraFacial near me",
        "chemical peel [city]",
        "microneedling [city]",
        "med spa facials [city]",
        "PRP facial near me",
        "RF microneedling [city]",
      ],
      competitors: "Day spas offering medical-grade facials, dermatology-adjacent skincare clinics, boutique aesthetics studios",
    },
  },

  // ── Competitor Analysis + Topical Map + Content Score overrides (Prompt 11) ──
  seoCompetitorBullets: [
    { bold: "Competitor keyword gap analysis", desc: "we identify which injectable, body contouring, and laser terms your top competitors rank for that you don't" },
    { bold: "Backlink profile comparison", desc: "we find authoritative beauty, wellness, and aesthetics publications linking to competitors and target the same sources" },
    { bold: "Content gap identification", desc: "we find the treatment and location pages driving competitor traffic that you're missing" },
    { bold: "Local pack positioning tactics", desc: "we analyze competitor GBP profiles, review velocity, and citation consistency to build a plan to outrank them in the Map Pack" },
  ],
  seoContentAuthorityStatement: "We Don't Publish Bulk AI Blogs. We Build Med Spa Authority.",
  seoTopicalMapBody: "A topical map ensures Google sees your site as a complete authority on aesthetic treatments and medical spa services — not just a collection of random pages.",
  topicMapCenterLine1: "Med Spa",
  topicMapCenterLine2: "Authority",
  topicMapSpokes: [
    "Injectable Treatments",
    "Body Contouring",
    "Laser Services",
    "Skin Rejuvenation",
    "Wellness Memberships",
    "Client Education",
    "Treatment Comparisons",
  ],
  contentScoreLabel: "Med Spa Content Quality Score",
  contentScoreCaption: "Sample score for a GrowSmallBiz-managed med spa content article. All content must pass minimum thresholds across all six dimensions before publication.",
  seoContentThirdCardBody: "Content is structured for Google rankings and AI citation — so when a client asks ChatGPT, Perplexity, or Google AI which med spa to visit, your practice is the answer.",

  // ── AI Visibility overrides (Prompt 12) ──
  seoAiVisibilityHeading: "We Get Your Med Spa Recommended by AI Search Engines",
  seoAiVisibilityBody1: "GrowSmallBiz tracks how AI platforms recommend your med spa across 6 major AI search engines — including ChatGPT, Gemini, Perplexity, Grok, Copilot, and Google AI Mode.",
  seoAiVisibilityBody2: "When a client asks an AI assistant 'what's the best med spa for Botox near me?' or 'which med spa has the best before and after results in [city]?' — we make sure your practice is the answer.",

  // ── Paid Media (Prompt 13) ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "Medical Spas",
  paidMediaSubheadline: "Strategic ad platform recommendations by treatment category — injectables, body contouring, and new client acquisition.",
  adCreatives: [
    {
      id: "injectables",
      genre: "Injectable Promotion",
      image: medSpaHeroImage,
      platforms: ["Google PPC", "Meta/Instagram"],
      description: "Before/after focused creative for Botox, lip filler, or dermal filler. FDA/FTC compliant claims: 'minimize lines,' 'enhance volume,' 'refresh your appearance.' Trust-forward with financing options.",
    },
    {
      id: "body-contouring",
      genre: "Body Contouring & Laser",
      image: portfolioMedSpaWebsite,
      platforms: ["Google PPC", "Instagram/TikTok"],
      description: "Treatment walkthrough creative for CoolSculpting, Emsculpt, or laser hair removal. Before/after imagery. 'Reduce stubborn fat' language — not 'eliminate.'",
    },
    {
      id: "new-client",
      genre: "New Client Acquisition",
      image: medSpaHeroImage,
      platforms: ["Meta/Facebook", "Google Display"],
      description: "First-time client consultation or introductory treatment offer. Targeted to adults who haven't visited a med spa in 12+ months.",
    },
  ],
  paidMediaByGenre: [
    {
      genre: "Injectables & Neurotoxins", icon: Sparkles,
      primary: [
        { name: "Google PPC", reason: "70-80% of budget — highest-intent 'near me' searches" },
        { name: "Meta/Instagram", reason: "Before/after visual, retargeting" },
      ],
      secondary: [
        { name: "Pinterest", reason: "Aspiration boards" },
        { name: "TikTok", reason: "'Day of Botox' walkthrough content" },
      ],
      color: "blue",
    },
    {
      genre: "Body Contouring & Laser", icon: Target,
      primary: [
        { name: "Instagram + Google PPC", reason: "Visual results + search intent" },
      ],
      secondary: [
        { name: "YouTube", reason: "'What to expect from CoolSculpting' explainers" },
        { name: "Pinterest", reason: "Body transformation inspiration" },
      ],
      color: "emerald",
    },
    {
      genre: "Skin Care & Facials", icon: Heart,
      primary: [
        { name: "Instagram + TikTok", reason: "Facial walkthroughs, skin transformation, provider spotlights" },
      ],
      secondary: [
        { name: "Facebook", reason: "Educational content, community building" },
      ],
      color: "rose",
    },
  ],
  paidMediaSetupBullets: [
    "Google Ads account setup and campaign structure",
    "Keyword research for med spa search terms — injectables, body contouring, laser, and facial treatment segments",
    "Google Local Services Ads (LSA) setup where eligible",
    "Conversion tracking from click to call to booked appointment",
    "Seasonal campaign calendar — Valentine's, spring refresh, pre-holiday, membership drive",
    "Treatment-specific landing page optimization",
    "Ad creative copywriting — FDA/FTC compliant throughout",
    "Monthly performance reporting and optimization",
  ],
  metaAdSetupHeadline: "How We Help Med Spas with Meta Ad Setup",
  metaAdSetupSubheadline: "Facebook and Instagram ads reach clients before they need their next Botox appointment — building brand familiarity so when they're ready to book, your med spa feels like the obvious choice. We build cosmetic awareness campaigns, new client offer funnels, and retargeting sequences that keep your practice top-of-mind.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to clients who visited your site but didn't book.", icon: Facebook },
    { title: "Google Analytics & GTM", description: "Track your full client journey, see which pages drive consultations, and manage all tracking codes centrally.", icon: BarChart3 },
    { title: "Call Tracking", description: "Know exactly which ad, keyword, or landing page generated each phone call and consultation booking.", icon: Phone },
  ],

  // ── Retargeting (Prompt 14) ──
  retargetingHeadline: "Be Found When They're Researching.",
  retargetingHighlight: "Stay Visible Until They're Ready to Book.",
  retargetingSubheadline: "SEO captures the ready-to-book treatment search. Retargeting closes the consideration-phase client.",
  retargetingStep1Desc: "Client searches for a med spa or aesthetic treatment online",
  retargetingDisplayLine: "SEO helps your med spa show up",
  retargetingDisplaySubline: "when someone is actively searching for a treatment.",
  retargetingBody: [
    "Aesthetic decisions take time. A client researching CoolSculpting today may not book for months — they're comparing results, checking financing, looking at your before/after photos. Retargeting keeps your med spa visible across that entire consideration period. Your before/after imagery reappears on their Instagram. Your client reviews show up in their Facebook feed. When they finally decide, your name is the one they trust.",
    "For clients who searched, visited your website, and didn't book, retargeting follows up with a gentle prompt when their consideration window reopens.",
  ],

  // ── Social Media (Prompt 15) ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for medical spas — by treatment category and client lifecycle stage.",
  socialMediaByGenre: [
    {
      genre: "Injectables & Cosmetic",
      primary: [
        { name: "Instagram [Priority]", icon: Instagram, strategy: "Before/after transformations, treatment process Reels, provider spotlights, client testimonial stories" },
        { name: "TikTok [Priority]", icon: Globe, strategy: "'Day of Botox' walkthrough, 'I got lip filler' content, provider education" },
      ],
      secondary: [
        { name: "Pinterest", icon: MapPin, strategy: "Aspiration boards" },
        { name: "YouTube", icon: Globe, strategy: "Treatment explanation videos" },
      ],
      color: "blue",
    },
    {
      genre: "Body Contouring & Laser",
      primary: [
        { name: "Instagram [Priority]", icon: Instagram, strategy: "Before/after body transformation, results" },
        { name: "TikTok [Priority]", icon: Globe, strategy: "Treatment process, 'what to expect' content" },
      ],
      secondary: [
        { name: "YouTube", icon: Globe, strategy: "Longer-form treatment education" },
        { name: "Facebook", icon: Facebook, strategy: "Awareness campaigns" },
      ],
      color: "emerald",
    },
    {
      genre: "Skin Care & Wellness",
      primary: [
        { name: "Instagram [Priority]", icon: Instagram, strategy: "Facial treatment process, skin transformation, team content" },
        { name: "Facebook [Priority]", icon: Facebook, strategy: "Community groups, local awareness, client appreciation" },
      ],
      secondary: [
        { name: "Pinterest", icon: MapPin, strategy: "Skincare routine inspiration" },
      ],
      color: "amber",
    },
    {
      genre: "Membership & Retention",
      primary: [
        { name: "Email/SMS [Priority]", icon: Mail, strategy: "Membership enrollment, renewal reminders, treatment upgrades — highest ROI retention channel" },
        { name: "Facebook [Priority]", icon: Facebook, strategy: "Client appreciation, updates, seasonal offers" },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Member spotlights, loyalty content" },
      ],
      color: "rose",
    },
  ],
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ── AI Growth System (Prompt 16 — Section A) ──
  growthSystemHeadline: "for Medical Spas",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop losing bookings to slow follow-up and manual scheduling. Build an automated system that captures leads, books consultations, and turns first-time visitors into loyal, recurring membership clients.",
  growthSystemDisconnectedToolsBody: "Most medical spas use separate tools for new client capture, appointment booking, membership management, and follow-up. These tools don't talk to each other — leads fall through the cracks.",
  marketingCampaignsHighlight: "We Build for Your Medical Spa",
  seasonalCampaignsHeading: "We Automate for Your Medical Spa",
  clientJourneyStages: [
    {
      stage: "Awareness", icon: Eye,
      description: "Potential clients discover your med spa through Instagram, Google search, AI recommendations, or word of mouth. They're browsing aesthetics content and building their consideration set.",
      goal: "Be found and be aspirational — quality of first impression determines whether they continue",
      color: "blue",
    },
    {
      stage: "Prospect", icon: Target,
      description: "They visit your website. They're reviewing your treatment menu, browsing before/after galleries, reading reviews, and evaluating your providers. This is the trust-building window.",
      goal: "Build trust with visual proof, credentials, and social proof",
      color: "purple",
    },
    {
      stage: "Lead", icon: Mail,
      description: "They've submitted a consultation request, called, or messaged your AI chat. Speed and quality of response determines whether they book with you or the next provider they're considering.",
      goal: "Respond within 5 minutes, personalize to their specific treatment interest, and book the consultation",
      color: "primary",
    },
    {
      stage: "Client", icon: Sparkles,
      description: "First treatment complete. The client experience determines whether they return, refer, and review. Most med spas stop here — missing the membership enrollment and referral activation that multiplies lifetime value.",
      goal: "Collect reviews, enroll in membership or package, and activate referral program",
      color: "emerald",
    },
    {
      stage: "Loyal Member", icon: RefreshCw,
      description: "The gold mine. Membership holders visit 3-4x more frequently than non-members, spend more per visit, and refer more actively. Your existing client base is your highest-ROI marketing asset.",
      goal: "Turn every client into a loyal member and active referral source",
      color: "amber",
    },
  ],
  emailNurturePoints: [
    { title: "Speed-to-Lead", description: "AI Receptionist auto-responds to every inquiry within seconds — 24/7. Answers questions about treatments, pricing, and availability; books consultation appointments directly into your schedule.", icon: Zap },
    { title: "Automated Lead Nurturing", description: "5–7 touchpoints over 2–3 weeks with treatment education, social proof, and urgency triggers that convert curious visitors into booked consultations.", icon: Mail },
    { title: "Past Client Re-engagement", description: "Treatment maintenance reminders, membership renewal prompts, seasonal campaign notifications, and birthday offers keep your existing client base engaged and returning.", icon: RefreshCw },
  ],
  emailSequenceTitle: "Med Spa Consultation Inquiry",
  emailSequenceHighlight: "Follow-Up Sequence",
  emailSequenceSteps: [
    { day: "Day 0", label: "Immediate Welcome", channels: "SMS + Email", description: "Confirm their inquiry, introduce the practice, ask about their treatment interest and when they'd like to come in" },
    { day: "Day 1", label: "Treatment Overview", channels: "Email", description: "Educational content about their treatment of interest, before/after examples, and provider credentials" },
    { day: "Day 2", label: "SMS Check-in", channels: "SMS", description: "Quick check-in with direct booking link and availability highlights" },
    { day: "Day 3", label: "FAQ & Expectations", channels: "Email", description: "Common questions answered, what to expect during treatment, aftercare preview" },
    { day: "Day 5", label: "Seasonal Availability", channels: "Email + SMS", description: "Limited availability notice with seasonal treatment relevance and direct booking CTA" },
  ],
  noShowResearchCitations: [
    { stat: "15–30% of aesthetic consultations are no-shows — costing practices $200–$500+ per lost appointment slot", source: "Healthcare Research", publication: "PMC", year: "2016", label: "The Problem" },
    { stat: "98% of text messages are opened", source: "Industry Research", publication: "Mobile Marketing Association", year: "2023", label: "Why SMS Works" },
    { stat: "SMS reminders reduce no-shows by 38%", source: "Imperial College London", publication: "BMC Ophthalmology", year: "2008", label: "The Result" },
    { stat: "Reminder systems reduce lost-to-follow-up by 60%", source: "Cochrane Reviews", publication: "Systematic Review Meta-Analysis", year: "2016", label: "Long-Term Impact" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "Initial Consultation", icon: CalendarCheck, color: "blue",
      description: "Pre-appointment reminders for first-time aesthetic consultations",
      noShowImpact: "Missed consultations waste provider time and delay client acquisition",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Confirmation + what to bring (no makeup for facial consult, photos of desired results if applicable)" },
        { timing: "1 day before", channels: ["Email"], content: "Reminder + location, parking, and what to expect at the consultation" },
        { timing: "2 hours before", channels: ["SMS"], content: "'Your consultation is today at [time] — we look forward to meeting you'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Treatment Appointment", icon: Sparkles, color: "emerald",
      description: "Pre-treatment reminders with pre-care instructions",
      noShowImpact: "No-shows waste booked treatment slots and product preparation",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Pre-care instructions (avoid blood thinners before filler, no sun exposure before laser, etc.)" },
        { timing: "1 day before", channels: ["Email"], content: "Reminder + pre-care checklist + aftercare preview" },
        { timing: "Morning of", channels: ["SMS"], content: "'Your [treatment] appointment is today at [time] — see you soon at [location]'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Follow-Up / Touch-Up Visit", icon: Calendar, color: "amber",
      description: "Reminders for post-treatment follow-ups and touch-up appointments",
      noShowImpact: "Missed follow-ups reduce client satisfaction and treatment completion rates",
      reminders: [
        { timing: "1 week before", channels: ["Email"], content: "Touch-up reminder + what to expect at the follow-up" },
        { timing: "2 days before", channels: ["SMS", "Email"], content: "Confirmation + any post-care questions welcome" },
        { timing: "Day of", channels: ["SMS"], content: "'Your follow-up is today at [time] — we look forward to seeing your results'" },
      ],
      expectedReduction: "Up to 60%",
    },
  ],

  // ── Marketing Campaign Cards (Prompt 16 — Section B/C) ──
  marketingCampaigns: [
    {
      genre: "New Client Special — General", icon: UserPlus, color: "from-blue-500 to-cyan-500",
      offer: {
        headline: "New Client Consultation + Treatment Bundle",
        tagline: "Introductory pricing for first-time clients",
        price: "Intro Rate",
        originalPrice: "",
        savings: "First-time client pricing",
        includes: ["30-min consultation", "Provider assessment", "Introductory treatment session", "Treatment plan overview"],
        urgency: "Limited introductory slots available — book now",
        cta: "Book Consultation",
      },
      funnel: ["Google PPC / Meta → Landing Page", "Booking Form → Nurture Sequence", "Recall Enrollment"],
      topPlatforms: ["Google PPC", "Meta", "Landing Page"],
      seasonality: "Peak: January, May (pre-summer)",
    },
    {
      genre: "Membership — Recurring Revenue", icon: Heart, color: "from-emerald-500 to-teal-500",
      offer: {
        headline: "Monthly Treatment Membership",
        tagline: "Monthly subscription pricing",
        price: "Member Rate",
        originalPrice: "",
        savings: "Discounted first 3 months",
        includes: ["Monthly injectable or facial allowance", "Priority scheduling", "Member-only pricing on additional treatments", "Complimentary consultation upgrades"],
        urgency: "Founding member pricing closes soon",
        cta: "Join Now",
      },
      funnel: ["Email / Instagram / Facebook → Membership landing page", "Sign-up → Onboarding sequence"],
      topPlatforms: ["Email", "Instagram", "Facebook"],
      seasonality: "Peak: January and September",
    },
    {
      genre: "Client Recall & Reactivation", icon: RefreshCw, color: "from-rose-500 to-pink-500",
      offer: {
        headline: "We Miss You — Overdue Treatment Visit",
        tagline: "Priority Scheduling for returning clients",
        price: "Priority Access",
        originalPrice: "",
        savings: "Returning client offer included",
        includes: ["Personalized treatment recommendation based on prior visit", "Easy one-click booking", "Returning client offer"],
        urgency: "Automated year-round — we never stop re-engaging",
        cta: "Book Your Return Visit",
      },
      funnel: ["Email/SMS to clients 90+ days inactive", "Recall booking page → Confirmation", "Re-engagement"],
      topPlatforms: ["Email", "SMS", "Retargeting"],
      seasonality: "Automated year-round",
    },
  ],

  // ── Seasonal Campaigns (Prompt 16 — Section C) ──
  seasonalCampaigns: [
    { campaign: "Valentine's Day", timing: "Launch 3 weeks before (Feb)", offer: "Gift cards + couples packages", channels: ["Google PPC", "Facebook", "Email to existing clients"] },
    { campaign: "Spring Refresh", timing: "Launch Mar–Apr", offer: "Pre-summer skin + body prep", channels: ["Google PPC", "Instagram", "Retargeting"] },
    { campaign: "Summer Glow", timing: "Launch Jun–Jul", offer: "Laser, facials, summer skin", channels: ["TikTok", "Instagram", "Google PPC"] },
    { campaign: "Back to Confidence", timing: "Launch Sep", offer: "Post-summer treatment refresh", channels: ["Instagram", "Facebook", "Google PPC"] },
    { campaign: "Pre-Holiday", timing: "Launch Oct–Nov", offer: "Botox, fillers, skin renewal", channels: ["Google PPC", "Instagram cosmetic ads", "Retargeting"] },
    { campaign: "Membership Drive", timing: "Launch Nov–Dec + Jan", offer: "Holiday gifting + New Year memberships", channels: ["Email to lapsed clients", "Facebook"] },
  ],
  pastClientWorkflows: [
    { title: "Treatment Maintenance Reminder", description: "Automated reminder sent 8–12 weeks after Botox/filler appointments — prompting clients to schedule their maintenance visit before results fade, with direct booking link.", icon: Calendar },
    { title: "Re-engagement Campaign", description: "Clients inactive for 6+ months receive an automated 'We miss you' campaign with a return client offer and a one-click booking link. Lapsed members get a membership reactivation sequence.", icon: RefreshCw },
  ],

  // ── Reputation (Prompt 16 — Section D) ──
  reputationHeadline: "We Build Your Reputation",
  reputationHighlight: "— Automatically After Every Treatment",
  reputationSubheadline: "Turn every satisfied client into a glowing review and a referral source.",
  reputationInnerH3: "We Handle Your Med Spa Reputation",
  reputationBullets: [
    "84% of clients check online reviews before choosing a med spa — your rating is your first impression — rater8, 2025",
    "40% of clients have abandoned a booking due to negative reviews — rater8, 2025. Every unaddressed review is a lost appointment.",
    "Google reviews directly impact your Map Pack ranking — recency and volume both matter",
    "Automated review requests sent after every completed appointment",
    "Monitor all platforms: Google, Yelp, RealSelf, Healthgrades, Zocdoc",
    "Respond to every review with professional templates that demonstrate client-first care",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Treatment Complete", description: "Client marked as seen in system" },
    { step: "2", title: "Happiness Check", description: "Automated SMS 24–48 hours post-treatment: 'Loving your results? We'd love to hear about it!'" },
    { step: "3", title: "If Positive", description: "Direct link to Google review page sent immediately" },
    { step: "4", title: "If Neutral/Negative", description: "Private feedback form to address concerns before they go public" },
    { step: "5", title: "Positive Review Submitted", description: "Auto thank-you + referral incentive (credit toward next treatment)" },
  ],
  giftCardUseCases: "Bridal party gifts, corporate wellness programs, holiday gifting, Mother's Day packages, and client referral reward programs.",
  giftAndReferralPrograms: [
    { title: "Gift Cards", description: "Bridal party gifts, corporate wellness, holiday gifting, and Mother's Day packages — a significant revenue driver for med spas.", icon: Gift, features: ["Online gift card store", "Custom denominations", "Automated delivery", "Seasonal promotion integration"] },
    { title: "Referral Tracking", description: "Know exactly who referred each new client. Track referral sources automatically in your CRM.", icon: UserPlus, features: ["Unique referral links", "Referral source tagging", "Thank-you automation", "Reward tracking"] },
    { title: "Referral Rewards", description: "Incentivize referrals with treatment credits, product discounts, or VIP event invitations. Automate reward delivery.", icon: DollarSign, features: ["Automatic reward triggers", "Treatment credit system", "Thank-you emails", "Referral leaderboard"] },
  ],

  // ── AI Voice & Chat (Prompt 18) ──
  aiVoiceChatSectionHeadline: "We Power Your Med Spa",
  aiVoiceChatHighlight: "Around the Clock — 24/7",
  aiVoiceChatSubheadline: "Never miss a new client inquiry again. AI answers calls, checks your calendar, qualifies leads, and books appointments — even after hours when clients are researching treatments on their phones.",
  aiFeatures: [
    {
      title: "24/7 AI Receptionist",
      description: "Never miss a new client inquiry again. AI answers calls, checks your calendar, qualifies leads, and books appointments — even after hours when clients are researching treatments on their phones.",
      icon: Phone,
      features: ["Answers calls in your brand voice", "Checks calendar availability in real-time", "Books consultation appointments", "Flags high-intent client inquiries for immediate follow-up", "Sends confirmation texts/emails"],
      color: "violet",
    },
    {
      title: "Conversational AI Chat",
      description: "Intelligent chatbot that engages website visitors, answers FAQs about treatments, pricing, and availability, and captures leads across all channels.",
      icon: MessageSquare,
      features: ["Website live chat widget", "SMS two-way conversations", "Facebook Messenger integration", "Lead qualification & capture", "After-hours lead collection"],
      color: "cyan",
    },
  ],

  // ── Why Choose Us (Prompt 17) ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for Med Spa Marketing",
  whyChooseUsSubtitle: "Your Med Spa Marketing Partner",
  whyChooseUsBody: "We understand med spa business dynamics — the visual-first nature of aesthetic client acquisition, the membership economics, and the FDA/FTC compliance requirements that most marketing agencies ignore.",
  whyChooseUsCards: [
    { title: "Med Spa & Aesthetics Specialists", description: "We focus on health and wellness practices: med spa, dental, chiropractic. We understand aesthetic client acquisition dynamics, treatment upsell conversions, and the trust signals that move clients from social media follower to booked appointment.", icon: Sparkles },
    { title: "Visual-First Content Strategy", description: "Our campaigns are built around the before/after imagery and treatment walkthrough content that aesthetic clients require before booking. We build the content infrastructure that Instagram and TikTok demand.", icon: Palette },
    { title: "24/7 New Client Capture", description: "Your AI Receptionist captures new client inquiries at 9pm, qualifies them, and books appointments before your front desk arrives in the morning.", icon: Phone },
    { title: "Membership Revenue Architecture", description: "Membership enrollment is built into every client touchpoint — not an afterthought. We systematically convert one-time visitors into recurring members that stabilize your monthly revenue.", icon: Heart },
    { title: "FDA/FTC Compliant Marketing", description: "Every ad, landing page, and piece of content we produce uses compliant treatment result language. We protect your practice from regulatory risk while still converting effectively.", icon: Shield },
    { title: "Verified Case Study Results", description: "Verified case study results available for med spa practices. Schedule a call to review the actual campaign data and metrics.", icon: BarChart3 },
  ],

  // ── FAQ (Prompt 19) ──
  faqHeadline: "Med Spa Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to rank on Google for med spa searches in my area?", answer: "Most med spas see measurable ranking improvements within 3–6 months for local and long-tail treatment terms, with competitive terms like 'Botox near me' typically taking 6–12 months in established aesthetic markets.\n\nTreatment-specific long-tail terms ('lip filler [city],' 'HydraFacial near me') often rank faster than broad 'med spa near me' because most competitors haven't built dedicated treatment pages with genuine content depth.\n\nSeasonal search volume spikes for med spa keywords create accelerated ranking opportunities when targeted with content published 8–12 weeks before peak windows." },
        { question: "Do I need separate pages for each treatment I offer?", answer: "Yes — each high-value treatment needs its own dedicated page. A single 'Services' page cannot rank simultaneously for 'Botox near me,' 'CoolSculpting [city],' 'lip filler [city],' and 'HydraFacial near me.'\n\nMed spas with dedicated pages for each treatment consistently outrank those consolidating services. Each treatment page builds independent keyword relevance, backlink targets, and trust content specific to that treatment's consideration journey.\n\nTreatment page depth matters as much as count — each page needs content covering the procedure, candidacy, what to expect, recovery, FDA/FTC-compliant result language, and before/after imagery." },
        { question: "How do online reviews affect my med spa's local ranking?", answer: "Google reviews are a direct ranking factor for local pack and Maps results — a med spa with consistent recent 4.8+ star reviews consistently outranks competitors with fewer or older reviews.\n\n— rater8, 2025: 84% of clients check reviews before choosing a healthcare or aesthetic provider.\n\nReview content matters in med spa — clients mentioning 'Botox' or 'CoolSculpting' in reviews help your spa surface for those exact treatment searches. 40% of clients have abandoned a booking due to negative reviews — rater8, 2025.\n\nAesthetic clients are among the most review-sensitive consumers — the personal nature of treatments and cost elevates the importance of social proof." },
        { question: "What's the difference between local SEO and regular SEO for med spas?", answer: "Local SEO targets clients with geographic intent — 'Botox near me,' 'med spa [city]' — through Google Business Profile, Map Pack, and local citations. Regular SEO targets treatment and educational intent — 'how long does Botox last,' 'CoolSculpting vs Emsculpt.'\n\nBoth are essential. Local SEO captures the ready-to-book client. Regular SEO captures the consideration-phase client researching treatments over weeks before booking.\n\nAesthetic treatments have longer consideration cycles. A client researching lip filler for the first time may spend 2–4 weeks comparing providers and building trust before booking." },
        { question: "How do you optimize my Google Business Profile for my med spa?", answer: "We audit and optimize every GBP element: primary and secondary category selection, service listings for every treatment, business description with treatment keywords, photo volume (before/after where appropriate), Q&A population, and weekly posting cadence.\n\nAdding 'Medical Spa,' 'Laser Hair Removal Service,' or 'Skin Care Clinic' as categories unlocks Map Pack visibility for specific treatment searches. We install GBP heatmap tracking so you see where your med spa surfaces by neighborhood and treatment term.\n\nGBP before/after photos require compliance with Google healthcare imagery policies and client consent documentation." },
        { question: "Can you help me rank for high-value terms like Botox or CoolSculpting?", answer: "Yes — and these terms are a specific focus because they carry the highest per-visit revenue and the longest client lifetime value when combined with a membership system.\n\nRanking requires a dedicated treatment page with genuine content depth — 1,500–2,500 words covering the treatment, candidacy, expected outcomes using FDA/FTC-compliant language, and client results.\n\nOur topical map builds the full supporting content cluster — treatment comparison guides, 'Botox vs Dysport,' pre/post care articles — that Google uses to assign sustained authority to your core treatment pages." },
        { question: "How does AI search (ChatGPT, Gemini) affect med spa client discovery?", answer: "31% of patients now use generative AI to research healthcare and aesthetic providers before booking — rater8, 2025. When clients ask ChatGPT 'best med spa for Botox near me?' AI pulls from your indexed content, GBP data, and review platforms.\n\nMed spas with strong review volume, structured treatment content, and consistent before/after imagery are most likely to appear in AI answers. We track your citation share across 6 platforms.\n\n73% of patients adopted new healthcare research behaviors in the past year — rater8, 2025. Aesthetic clients in the 30–50 demographic are among the fastest adopters of AI-assisted provider discovery." },
        { question: "Will SEO work for my med spa in a highly competitive market?", answer: "Yes — and competitive aesthetic markets are where systematic SEO creates the largest advantage, because most med spas rely on Instagram or paid ads and leave organic search unclaimed.\n\nThe primary med spa keyword cluster has KD 33. Thrive Agency dominates at 94 content score with 3,153 words — but a properly structured med spa website with genuine treatment depth and strong GBP signals competes effectively in most markets.\n\nWe sequence keyword targets by revenue impact — starting with high-value treatment terms your domain authority can reach fastest, then expanding into more competitive 'med spa near me' positions." },
        { question: "Do you create educational content about treatments for my med spa?", answer: "Yes — treatment education content is core to our med spa SEO strategy. We build content that answers the specific questions clients search during the consideration phase.\n\nEducation content ranks for informational searches — 'how many Botox units for forehead,' 'what to expect from first CoolSculpting,' 'is RF microneedling painful.' All content is FDA/FTC compliant — result claims use 'reduce,' 'minimize,' 'improve' language.\n\nTreatment comparison content is particularly high-value — 'Botox vs Dysport,' 'CoolSculpting vs Emsculpt,' 'HydraFacial vs chemical peel.' Clients in the consideration phase actively seek this content." },
        { question: "How do you track and report SEO results for med spas?", answer: "Monthly reporting covers keyword ranking movement, Google Business Profile performance, organic traffic by treatment landing page, and new client inquiry source attribution — which keywords and pages generate actual form submissions and calls.\n\nWe tie SEO to business outcomes — which treatment pages drive bookings, which GBP categories generate Map Pack clicks, and how review velocity affects local rank. AI citation share is reported monthly across 6 platforms.\n\nSeasonal reporting is critical for med spas — we flag which seasonal windows are approaching and ensure content is timed to peak search volume 8–12 weeks in advance." },
      ],
    },
    {
      id: "paid-media", label: "Paid Media", icon: Megaphone, color: "rose",
      faqs: [
        { question: "Should med spas use Google Ads, Facebook Ads, or Instagram Ads?", answer: "Each platform serves a different purpose. Instagram excels for visual before/after content. Google captures high-intent 'near me' searches. Facebook is ideal for retargeting and new client offers. Most med spas benefit from all three." },
        { question: "How much should a med spa spend on paid advertising?", answer: "Most med spas see strong results starting at $2,000–5,000/month across Google and Meta. Budget allocation shifts seasonally — heavier Meta spend for injectable promotions, heavier Google for high-intent treatment searches." },
        { question: "What types of creative perform best for aesthetic ads?", answer: "Before/after results, treatment process videos, provider spotlights, and seasonal promotion graphics perform best. Visual quality is critical — luxury positioning demands premium creative." },
        { question: "Can I advertise Botox and fillers on Facebook and Instagram?", answer: "Yes, with compliance considerations. We follow FDA and FTC guidelines — using 'reduce,' 'minimize,' and 'improve' language rather than absolute claims. All ad copy is reviewed for regulatory compliance." },
        { question: "How do you target the right audience for aesthetic treatments?", answer: "We layer geographic, demographic (women 25-55), interest (beauty, skincare, wellness), and behavioral targeting. Lookalike audiences based on your best clients expand reach to similar prospects." },
        { question: "How do you build landing pages for med spa ad campaigns?", answer: "Every campaign gets a dedicated, treatment-specific landing page with before/after galleries, provider credentials, consultation booking, and financing information — optimized for mobile conversion." },
        { question: "What's a realistic cost-per-consultation for med spa Google Ads?", answer: "In most markets, med spa Google Ads generate consultation leads at $30–80 depending on treatment type and competition. Injectable leads tend to have higher conversion rates." },
      ],
    },
    {
      id: "marketing-automation", label: "Marketing Automation", icon: RefreshCw, color: "amber",
      faqs: [
        { question: "How does automated follow-up work for consultation inquiries?", answer: "When a client inquires, they enter a 5-day email and SMS sequence with treatment education, provider credentials, before/after examples, and booking prompts — converting interested visitors into scheduled consultations." },
        { question: "Can you automate treatment maintenance reminders for existing clients?", answer: "Yes — automated reminders are sent 8–12 weeks after Botox/filler appointments (typical treatment cycles), prompting clients to schedule before results fade." },
        { question: "How do you set up post-treatment review request automation?", answer: "24–48 hours after treatment, the system sends a happiness check via SMS. Positive responses get a direct Google review link. Neutral or negative responses are routed to private feedback first." },
        { question: "What's a typical booking rate from automated med spa follow-up sequences?", answer: "Our med spa clients typically see 28–35% booking rates from automated follow-up sequences — significantly higher than industry average where most inquiries receive no systematic follow-up." },
        { question: "How do you automate membership enrollment and renewal reminders?", answer: "Post-visit sequences automatically introduce membership benefits. Renewal reminders are sent before expiration with retention offers. Lapsed members receive reactivation campaigns." },
        { question: "Can automation send seasonal campaign promotions to my existing client list?", answer: "Absolutely. We segment your client list by treatment history and send targeted seasonal campaigns — injectable clients get pre-holiday specials, body contouring clients get spring offers." },
        { question: "How do you reactivate lapsed clients automatically?", answer: "Clients inactive for 6+ months receive an automated 'We miss you' campaign with a return client offer and one-click booking. Lapsed members get a separate membership reactivation sequence." },
        { question: "Does your CRM integrate with med spa management software like Vagaro or Meevo?", answer: "We integrate with most popular med spa management platforms through API connections and Zapier. This ensures client data flows seamlessly between your practice software and marketing platform." },
      ],
    },
    {
      id: "ai-receptionist", label: "AI Receptionist", icon: Bot, color: "sky",
      faqs: [
        { question: "How does the AI Receptionist handle after-hours consultation requests?", answer: "The AI answers every call and chat message 24/7 — answering questions about treatments, pricing, and availability, then booking consultation appointments directly into your schedule." },
        { question: "Can the AI Receptionist book aesthetic appointments directly?", answer: "Yes — it integrates with your scheduling system to check real-time availability and book consultations without any manual intervention from your team." },
        { question: "How does the AI handle questions about treatment pricing?", answer: "The AI is trained on your treatment menu, pricing structure, membership options, and financing availability. It provides accurate information and can qualify clients by treatment interest." },
        { question: "Can the AI answer questions about specific treatments like Botox or laser?", answer: "Absolutely. We train the AI on your full treatment menu — it can explain procedures, expected results, preparation requirements, and aftercare in a way that builds confidence." },
        { question: "Can I customize the AI Receptionist for my med spa's voice and brand?", answer: "Yes — we train the AI on your brand voice, treatment philosophy, and communication style. Every interaction feels authentic to your med spa's premium positioning." },
        { question: "How does the AI qualify leads before routing to my team?", answer: "The AI asks qualification questions about treatment interest, timeline, and budget to ensure your team focuses on high-intent, ready-to-book prospects." },
        { question: "What's the setup time for the med spa AI Receptionist?", answer: "We handle all scripting, training, and integration. Most med spas are fully live within 1–2 weeks, including calendar integration and treatment menu training." },
        { question: "Will clients know they're talking to an AI?", answer: "Modern AI sounds remarkably natural. We customize tone, pacing, and personality to match your brand. Most clients don't realize they're speaking with AI — they just know their inquiry was answered immediately." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "Have more questions about Med Spa Marketing?",
    body: "Get a personalized demo of our SEO, Instagram strategy, and client automation platform. Let's fill your treatment rooms with the right clients.",
    signoff: "— The GrowSmallBiz Team",
  },

  // ── Contact ──
  contactSectionHeadline: "Get Your Custom Med Spa Growth Strategy",
  contactSectionBody: "Tell us about your med spa and the clients you want to attract. We'll review your inquiry and follow up with a clear next step — including a demo of the system if that would be helpful.",

  // ── Sticky CTA ──
  stickyCtaConfig: {
    title: "Ready for Med Spa Marketing That Fills Your Treatment Rooms?",
    description: "Let's build a custom growth strategy to attract premium aesthetic clients, automate follow-up, and build a loyal membership base.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Fills", "Your", "Treatment", "Rooms"],
    showAfterScroll: 60,
  },

  // ── Case Study Links ──
  caseStudyLinks: [
    {
      title: "Med Spa SEO Case Study",
      description: "How we helped med spas in Pleasanton, San Gabriel, and San Ramon grow organic traffic and treatment bookings.",
      url: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/",
      icon: Search,
    },
  ],
};
