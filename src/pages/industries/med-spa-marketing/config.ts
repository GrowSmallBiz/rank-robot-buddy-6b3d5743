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

import medSpaHeroImage from "@/assets/industry-medspa-hero.jpg";
import portfolioMedSpaWebsite from "@/assets/portfolio-medspa-website.jpg";

export const medSpaConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "Med Spa Marketing Agency | Digital Marketing for Medical Spas | GrowSmallBiz",
  metaDescription: "GrowSmallBiz helps med spas attract high-value aesthetic clients with AI-powered SEO, Google Ads, Instagram strategy, and 24/7 AI Receptionist. Full-service digital marketing built for medical spas.",
  canonicalUrl: "/health-and-wellness-practices/marketing-for-med-spas",
  serviceName: "Med Spa Marketing Services",
  serviceType: "Digital Marketing for Medical Spas",
  serviceDescription: "AI-powered SEO, Google Ads, Instagram strategy, reputation management, and marketing automation for medical spas.",
  breadcrumbs: [
    { name: "Health & Wellness Practices", url: "/health-and-wellness-practices" },
    { name: "Med Spa Marketing", url: "/health-and-wellness-practices/marketing-for-med-spas" },
  ],

  // ── Hero ──
  heroImage: medSpaHeroImage,
  badgeText: "Med Spa Marketing & Growth System",
  badgeIcon: Sparkles,
  h1Line1: "The Med Spa Marketing System",
  h1Line2: "That Attracts Premium Aesthetic",
  h1Highlight: "Clients Year-Round",
  heroSubheadline: "Stop relying on Instagram alone. AI-powered SEO, Google Ads, and automated client acquisition built for medical spas that want consistent, predictable growth.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaAnchor: "#on-this-page",
  statsBar: [
    { value: "3–6 mo", label: "To reach top Google rankings for aesthetic searches" },
    { value: "5 min", label: "AI response speed to every new client inquiry" },
    { value: "24/7", label: "AI Receptionist coverage for booking requests" },
    { value: "40%", label: "Time saved with marketing automation" },
  ],

  // ── Pain Points ──
  painPointsHeadline: "Med Spa Marketing Challenges",
  painPointsSubheadline: "Even the most talented aesthetic providers struggle to build a consistent, predictable client base. If any of these feel familiar, your marketing infrastructure needs attention.",
  painPoints: [
    {
      icon: Instagram,
      title: "Your Business Lives and Dies by Your Instagram Feed",
      description: "Likes and followers don't pay for treatments. Hours spent creating content with no predictable path to booked appointments — exhausting effort for inconsistent return.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Search,
      title: "Competitors Rank Above You When Clients Are Ready to Book",
      description: "Potential clients searching 'Botox near me' or 'med spa [city]' find your competitors first — even if your results are superior.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: TrendingUp,
      title: "Packed One Month, Quiet the Next",
      description: "Revenue swings wildly because there's no system generating consistent new client flow. You're always either too busy or too slow.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Phone,
      title: "Losing Leads After Hours",
      description: "Aesthetic clients research and decide outside business hours. If your website can't capture and respond to those inquiries immediately, they book with whoever answers.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "No High-Value Treatment Visibility",
      description: "Fillers, body contouring, and laser treatments drive your highest revenue — but most med spas have no targeted strategy to attract clients specifically seeking these services.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: RefreshCw,
      title: "One-Time Clients, Not Loyal Members",
      description: "Aesthetic treatments require repeat visits for maintenance. Without automated follow-up and membership programs, most clients come once and don't return — leaving significant recurring revenue on the table.",
      hasImage: false, showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of chasing followers and hoping for bookings, imagine a predictable system that attracts premium clients, converts inquiries automatically, and turns first-time visitors into loyal members.",

  // ── System Diagram ──
  systemDiagramHeadline: "GrowSmallBiz Predictable Marketing System",
  systemDiagramBody: "A complete client acquisition engine that attracts new aesthetic clients through search and social, converts inquiries into booked appointments automatically, and turns one-time treatment clients into loyal membership holders and referral sources — all working in perfect harmony.",

  // ── CTAs ──
  ctaAfterPainPoints: {
    headline: "Ready for Med Spa Marketing That Fills Your Treatment Rooms Consistently?",
    subtext: "Let's build a custom med spa growth strategy to attract premium aesthetic clients and build a loyal membership base.",
    primaryLabel: "Get Your Free Strategy Session",
    secondaryLabel: "Call +1 (925) 886-3724",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free Med Spa SEO Visibility Audit",
    subtext: "Find out exactly where your med spa appears in local search and AI recommendations when clients research aesthetic treatments.",
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

  // ── Website Design ──
  websiteDesignBadge: "Med Spa Websites",
  websiteDesignHeadline: "Med Spa Websites That Convert",
  websiteDesignHighlight: "Visitors Into Booked Consultations",
  websiteDesignSubheadline: "Luxurious, fast, conversion-optimized websites built to showcase your aesthetic services and turn traffic into booked appointments.",
  websiteDesignImage: portfolioMedSpaWebsite,
  websiteDesignFeatureHeadline: "Med Spa Websites Built to Convert the Considered Buyer",
  websiteDesignFeatureBody: "Aesthetic clients do their research before booking — browsing results, reading reviews, comparing providers, and assessing whether a med spa matches their expectations. We build med spa websites that win that consideration process: stunning visual design, treatment-specific landing pages, before/after galleries, and a frictionless path to consultation booking from any device.",
  websiteDesignBullets: [
    "Treatment-specific pages for every service: Botox, fillers, laser, body contouring, facials",
    "Before/after gallery optimized for visual impact and mobile viewing",
    "Online booking and consultation request integrated into every page",
    "Trust signals: provider credentials, certifications, Google reviews badge",
    "Membership and package information with online enrollment capability",
    "Mobile-first design — 75%+ of aesthetic searches happen on mobile",
    "Fast load times — luxury positioning requires a fast, polished experience",
    "Blog for SEO content and treatment education articles",
  ],
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search Is Now Influencing Aesthetic Decisions.",
  aiSearchCalloutBody: "Clients are asking ChatGPT and Gemini 'what's the best med spa near me for lip filler?' before they open Google. Your competitor may already be recommended by AI — even if you rank well organically. We track your AI visibility across 6 platforms and build the citations that get you recommended.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
  ],

  // ── SEO ──
  seoBadge: "Med Spa SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "Medical Spas",
  seoSubheadline: "Comprehensive search engine optimization designed for med spas — from local injectable services to high-value body contouring and laser treatments.",
  seoEditorialHeadline: "Why Med Spa SEO Works",
  seoEditorialHighlight: "Differently Than Other Aesthetic Marketing",
  seoEditorialBody: [
    "Med spa is a high-consideration, visually-driven purchase — with pockets of urgency.",
    "Most aesthetic treatment decisions unfold over weeks or months. A client researching lip filler for the first time browses Instagram, reads reviews, compares providers, asks friends, and waits for the right moment. There is no emergency. The decision is deliberate. Trust is the primary currency, and it accumulates across multiple touchpoints before a booking is made.",
    "But urgency does exist in isolated moments — a client who wants to look her best for a wedding in three weeks, a regular who needs her Botox refreshed before a business trip. These clients search with high intent and book quickly. Missing them because you don't rank means losing high-value repeat clients to competitors who show up at the right moment.",
    "Seasonality also matters in med spa more than most niches. Summer drives body contouring and laser hair removal. Pre-holiday season (October–November) spikes Botox and filler demand. Valentine's Day and Mother's Day create predictable gifting and self-care windows. An SEO content strategy that ignores seasonal intent leaves significant search volume uncaptured.",
    "Our approach builds topical authority across your full service menu, maps content to seasonal demand, and integrates reputation management — because your Google rating and review recency are direct ranking factors in the Map Pack, and aesthetic clients are among the most review-sensitive consumers in any local service category.",
  ],
  seoEditorialPullQuote: "Trust is the primary currency in med spa marketing, and it accumulates across multiple touchpoints before a booking is made.",
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

  // ── Paid Media ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "Medical Spas",
  paidMediaSubheadline: "Strategic ad platform recommendations by treatment category — injectables, body contouring, and skincare.",
  adCreatives: [
    {
      id: "injectables",
      genre: "Injectables & Neurotoxins",
      image: medSpaHeroImage,
      platforms: ["Meta/Instagram", "Google PPC"],
      description: "Before/after focused creative for Botox, lip filler, or dermal filler campaigns. Aspirational imagery, natural-looking results emphasis, promotion or consultation offer.",
    },
    {
      id: "body-contouring",
      genre: "Body Contouring & Laser",
      image: portfolioMedSpaWebsite,
      platforms: ["Meta/Instagram", "Google PPC", "Pinterest"],
      description: "Results-focused creative for CoolSculpting, Emsculpt, or laser treatments. Seasonal relevance (summer body, holiday confidence). Free consultation offer.",
    },
    {
      id: "facial-offer",
      genre: "Skincare & New Client Acquisition",
      image: medSpaHeroImage,
      platforms: ["Meta/Facebook", "Google PPC", "Instagram"],
      description: "Introductory offer for HydraFacial, chemical peel, or new client consultation. Lower barrier to entry — designed to introduce clients to the practice.",
    },
  ],
  paidMediaByGenre: [
    {
      genre: "Injectables & Neurotoxins", icon: Sparkles,
      primary: [
        { name: "Meta/Instagram", reason: "70-80% of budget — visual platform ideal for before/after results. Target women 25-55 in local radius with interest in beauty and aesthetics." },
        { name: "Google PPC", reason: "Capture high-intent 'Botox near me' and 'lip filler [city]' searches." },
      ],
      secondary: [
        { name: "TikTok", reason: "Treatment walkthrough videos and educational content for younger aesthetic audiences." },
      ],
      color: "blue",
    },
    {
      genre: "Body Contouring & Laser", icon: Target,
      primary: [
        { name: "Meta/Instagram", reason: "Body transformation results content performs strongly on visual platforms. Seasonal summer and pre-holiday campaigns." },
        { name: "Pinterest", reason: "Inspiration-driven searches for body goals and aesthetic treatments. High purchase intent audience." },
      ],
      secondary: [
        { name: "Google PPC", reason: "Capture active searches for CoolSculpting, laser hair removal, and body contouring." },
      ],
      color: "emerald",
    },
    {
      genre: "Skincare & New Clients", icon: Heart,
      primary: [
        { name: "Google PPC", reason: "Capture 'HydraFacial near me' and 'med spa near me' searches for high-intent new client acquisition." },
        { name: "Meta/Facebook", reason: "New client offer targeting + retargeting website visitors who didn't book." },
      ],
      secondary: [
        { name: "Instagram", reason: "Visual platform for skincare results and new client introductory offers." },
      ],
      color: "rose",
    },
  ],
  metaAdSetupHeadline: "How We Help Med Spas with Meta Ad Setup",
  metaAdSetupSubheadline: "Instagram and Facebook are the native platforms for aesthetic marketing — clients discover providers through visual content, build trust through results imagery, and book when the right offer appears at the right moment. We build scroll-stopping campaigns that drive consultation requests, promote seasonal offers, and retarget browsers who visited your website but didn't book.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to clients who visited your site but didn't book.", icon: Facebook },
    { title: "Google Analytics & GTM", description: "Track your full client journey, see which pages drive consultations, and manage all tracking codes centrally.", icon: BarChart3 },
    { title: "Call Tracking", description: "Know exactly which ad, keyword, or landing page generated each phone call and consultation booking.", icon: Phone },
  ],

  // ── Retargeting ──
  retargetingHeadline: "Be Found When They're Researching.",
  retargetingHighlight: "Stay Visible Until They're Ready to Book.",
  retargetingSubheadline: "SEO brings them in. Retargeting keeps your results in front of them until timing is right.",
  retargetingBody: [
    "Aesthetic decisions take time. A client who discovered your lip filler results on Instagram today may not book for six weeks — she's comparing providers, thinking about timing, and waiting for the right moment.",
    "Retargeting keeps your before/after imagery, your reviews, and your offers present across that entire consideration window. Your treatment results reappear in her Instagram feed. Your 5-star reviews show up alongside a targeted Facebook ad. When she finally decides to book — and she will — your med spa is the one that already feels familiar, trusted, and aspirational. That's not coincidence. That's a system.",
  ],

  // ── Social Media ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for med spas — by treatment category and client acquisition goal.",
  socialMediaByGenre: [
    {
      genre: "Injectables & Results Content",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Before/after reveals, treatment process Reels, provider spotlights, client testimonials in video format — highest organic reach for aesthetic results." },
        { name: "TikTok", icon: Globe, strategy: "Treatment walkthrough videos, 'day of Botox' content, educational aesthetic content — strong reach with younger audiences." },
      ],
      secondary: [
        { name: "Pinterest", icon: MapPin, strategy: "Aspirational beauty and aesthetic results boards." },
      ],
      color: "blue",
    },
    {
      genre: "Brand Awareness & Trust",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Local community presence, practice culture content, special offers to local homeowner audiences." },
        { name: "Instagram", icon: Instagram, strategy: "Practice behind-the-scenes, provider credentials, meet-the-team content — trust-building for considered buyers." },
      ],
      secondary: [
        { name: "YouTube", icon: Globe, strategy: "Longer treatment education content, provider expertise videos, client journey stories." },
      ],
      color: "emerald",
    },
    {
      genre: "Client Retention & Membership",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Existing client appreciation content, membership benefits showcases, VIP event announcements — retention and referral activation." },
        { name: "Email/SMS", icon: Mail, strategy: "Membership renewal prompts, seasonal treatment reminders, birthday offers — highest ROI retention channel." },
      ],
      secondary: [
        { name: "Facebook", icon: Facebook, strategy: "Loyalty program announcements, referral incentive campaigns." },
      ],
      color: "amber",
    },
  ],
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ── AI Growth System ──
  growthSystemHeadline: "for Medical Spas",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop losing bookings to slow follow-up and manual scheduling. Build an automated system that captures leads, books consultations, and turns first-time visitors into loyal membership clients.",
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
  marketingCampaigns: [
    {
      genre: "Spring Body Contouring Campaign", icon: Target, color: "from-blue-500 to-cyan-500",
      offer: {
        headline: "Free Body Contouring Consultation + 15% Off First Treatment",
        tagline: "Get summer-ready before peak season",
        price: "15% Off",
        originalPrice: "",
        savings: "15% off first treatment package",
        includes: ["Complimentary consultation", "Personalized treatment plan", "Package pricing overview"],
        urgency: "Limited spring slots before summer — book before peak season",
        cta: "Book Consultation",
      },
      funnel: ["Meta/Instagram ads → Body contouring landing page", "Consultation booking → Nurture sequence"],
      topPlatforms: ["Meta/Instagram", "Google PPC"],
      seasonality: "Peak: March–May (pre-summer body goals)",
    },
    {
      genre: "Pre-Holiday Injectable Special", icon: Sparkles, color: "from-rose-500 to-pink-500",
      offer: {
        headline: "'Holiday Ready' — Botox or Filler Treatment",
        tagline: "Look your best for the holiday season",
        price: "Special Rate",
        originalPrice: "",
        savings: "Complimentary consultation included",
        includes: ["Provider consultation", "Treatment", "Touch-up scheduling", "Aftercare kit"],
        urgency: "Book by deadline for results before the holidays",
        cta: "Book Now",
      },
      funnel: ["Instagram/Facebook ads + email to existing clients", "Injectable landing page → Booking"],
      topPlatforms: ["Instagram", "Facebook", "Email"],
      seasonality: "Peak: October–November (pre-holiday demand spike)",
    },
    {
      genre: "Membership Enrollment Campaign", icon: Heart, color: "from-emerald-500 to-teal-500",
      offer: {
        headline: "Founding Member Rate — Discounted Monthly Membership",
        tagline: "Exclusive benefits for early members",
        price: "Member Rate",
        originalPrice: "",
        savings: "Discounted first 3 months",
        includes: ["Monthly treatment credit", "Priority booking", "Exclusive member events", "Product discounts"],
        urgency: "Founding member pricing closes soon",
        cta: "Join Now",
      },
      funnel: ["Post-visit email sequence → Membership landing page", "Online enrollment + auto-billing"],
      topPlatforms: ["Email", "SMS", "Meta Retargeting"],
      seasonality: "Peak: January (New Year), September (fresh start post-summer)",
    },
  ],
  seasonalCampaigns: [
    { campaign: "Valentine's Day", timing: "Launch 3 weeks before", offer: "Couples packages, gift cards, lip + skin treatments", channels: ["Instagram", "Facebook", "Email to existing clients"] },
    { campaign: "Spring Body Contouring", timing: "Launch late February", offer: "Body contouring + laser hair removal promo", channels: ["Meta ads", "Google PPC", "Retargeting"] },
    { campaign: "Summer Skin Prep", timing: "Launch May", offer: "Sun protection, skin brightening, hydration treatments", channels: ["Instagram", "Email to existing clients"] },
    { campaign: "Back-to-Confidence", timing: "Launch late August", offer: "Post-summer refresh + Botox/filler refresh", channels: ["Instagram", "Google PPC", "Email"] },
    { campaign: "Pre-Holiday", timing: "Launch October", offer: "'Holiday Ready' injectable specials + gift cards", channels: ["Meta ads", "Email", "SMS to past clients"] },
    { campaign: "Membership Drive", timing: "Launch first week (Jan & Sep)", offer: "Founding/renewal membership offer", channels: ["Email + SMS to existing clients", "Meta retargeting"] },
  ],
  pastClientWorkflows: [
    { title: "Treatment Maintenance Reminder", description: "Automated reminder sent 8–12 weeks after Botox/filler appointments — prompting clients to schedule their maintenance visit before results fade, with direct booking link.", icon: Calendar },
    { title: "Re-engagement Campaign", description: "Clients inactive for 6+ months receive an automated 'We miss you' campaign with a return client offer and a one-click booking link. Lapsed members get a membership reactivation sequence.", icon: RefreshCw },
  ],

  // ── Reputation ──
  reputationHeadline: "We Build Your Reputation",
  reputationHighlight: "— Automatically After Every Treatment",
  reputationSubheadline: "Turn every satisfied client into a glowing review and a referral source.",
  reputationBullets: [
    "Aesthetic clients are among the most review-sensitive consumers — 90%+ check reviews before booking",
    "Google reviews directly impact your Map Pack ranking — recency, volume, and rating all matter",
    "Automated review requests sent after every completed treatment",
    "Monitor all platforms: Google, Yelp, RealSelf, Healthgrades",
    "Respond to every review professionally — public responses demonstrate care and build trust with future clients",
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

  // ── AI Voice & Chat ──
  aiVoiceChatSectionHeadline: "We Power Your Med Spa",
  aiVoiceChatHighlight: "Around the Clock — 24/7",
  aiVoiceChatSubheadline: "Never miss a new client inquiry — AI handles booking requests and treatment questions at any hour.",
  aiFeatures: [
    {
      title: "24/7 AI Receptionist",
      description: "Never miss a consultation request again. AI answers inquiries, checks your calendar, qualifies leads, and books appointments — even at 9pm when your front desk is closed.",
      icon: Phone,
      features: ["Answers calls in your brand voice", "Checks calendar availability in real-time", "Books consultation appointments", "Sends personalized follow-up with treatment info", "Sends confirmation texts/emails"],
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

  // ── Why Choose Us ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for Med Spa Marketing",
  whyChooseUsSubtitle: "Your Med Spa Marketing Partner",
  whyChooseUsBody: "We understand the aesthetic industry — the visual-first nature of client acquisition, the seasonal demand patterns, and the membership economics that separate thriving practices from struggling ones.",
  whyChooseUsCards: [
    { title: "Aesthetic Industry Specialists", description: "We focus on health and wellness practices — med spas, dental, chiropractic. We understand aesthetic client behavior, the visual trust signals that drive bookings, and the membership economics that build sustainable practices.", icon: Sparkles },
    { title: "Visual-First Marketing Strategy", description: "Aesthetic marketing lives or dies on visual quality. We build before/after content strategies, Instagram campaigns, and website design that showcase your results in the aspirational way that converts browsers into clients.", icon: Palette },
    { title: "24/7 Client Acquisition", description: "Your AI Receptionist captures consultation requests at 9pm, answers treatment questions, and books appointments before your front desk arrives. No more lost after-hours bookings.", icon: Phone },
    { title: "Membership Revenue Architecture", description: "We build the systems that convert one-time clients into loyal members — automated follow-up, membership enrollment campaigns, and retention sequences that transform your monthly revenue.", icon: Heart },
    { title: "Seasonal Campaign Expertise", description: "We map every campaign to the aesthetic demand calendar — spring body contouring, pre-holiday injectables, Valentine's gifting, and summer skin prep — so you capture seasonal demand before your competitors.", icon: Calendar },
    { title: "Verified Case Study Results", description: "Verified AI SEO and Google Ads case study results available for med spa clients. Schedule a call to review the actual campaign data and metrics.", icon: BarChart3 },
  ],

  // ── FAQ ──
  faqHeadline: "Med Spa Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to rank on Google for med spa searches?", answer: "Most med spas see meaningful ranking improvements within 3–6 months depending on market competition. We prioritize high-value treatment keywords and build topical authority across your full service menu." },
        { question: "Do I need separate pages for each treatment I offer?", answer: "Yes — treatment-specific pages (Botox, fillers, laser, body contouring, facials) are essential for ranking in treatment-based searches. Each page needs unique, clinically informed content." },
        { question: "How do Google reviews affect my med spa's local ranking?", answer: "Review quantity, recency, and velocity are top Map Pack ranking factors. Aesthetic clients are especially review-sensitive — our automated review system ensures every treatment generates a review opportunity." },
        { question: "What's the difference between local SEO and regular SEO for med spas?", answer: "Local SEO focuses on Google Maps and 'near me' searches where most aesthetic clients look first. Regular SEO targets broader organic rankings for treatment education content that builds long-term authority." },
        { question: "How do you optimize my Google Business Profile for aesthetic services?", answer: "We optimize every field — categories, services, treatment photos, Q&A, posts, and review response strategy. We also build citations on aesthetic-specific directories like RealSelf." },
        { question: "Can you help me rank for high-value searches like Botox or body contouring?", answer: "Absolutely. High-value treatment keywords require dedicated content strategy with topical depth. We build treatment cluster pages that establish your authority and outrank competitors." },
        { question: "How does AI search (ChatGPT, Gemini) affect how clients find my med spa?", answer: "AI assistants are increasingly recommending local providers. We build structured content and citations that help AI platforms recognize and recommend your med spa when clients ask for aesthetic treatment recommendations." },
        { question: "Will SEO work in a competitive aesthetic market?", answer: "Yes — we build compounding advantages through content velocity, treatment-specific authority, and review strategy. In competitive markets, systematic execution wins over time." },
        { question: "How do you build topical authority for a full-service med spa?", answer: "We create treatment cluster content — a main service page plus supporting content (FAQ, comparison, preparation, aftercare) for each treatment category. This signals deep expertise to both Google and AI platforms." },
        { question: "How do you track and report SEO results for med spas?", answer: "Monthly reports cover keyword rankings, Map Pack position, organic traffic, consultation requests, and phone calls. You also get access to a live dashboard for real-time progress monitoring." },
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
