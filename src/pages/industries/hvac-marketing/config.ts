import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Search, TrendingUp, Users, Target, Calendar,
  Bot, Clock, MessageSquare, Phone, Zap,
  Gift, RefreshCw, Mail, CalendarCheck,
  Eye, Megaphone, Shield, MapPin,
  Wrench, Flame, Snowflake, ThermometerSun,
  AlertTriangle, DollarSign, Globe,
  Star, BarChart3, Linkedin, Facebook, Instagram,
  Sparkles, UserPlus,
} from "lucide-react";

import hvacHeroImage from "@/assets/industry-hvac-hero.jpg";
import portfolioHvacWebsite from "@/assets/portfolio-hvac-website.jpg";

export const hvacConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "HVAC Marketing Agency | Digital Marketing for HVAC Contractors | GrowSmallBiz",
  metaDescription: "GrowSmallBiz helps HVAC contractors dominate Google Maps, generate exclusive leads, and automate follow-up. AI-powered SEO, Google Ads & LSA, and 24/7 AI Receptionist — built for HVAC.",
  canonicalUrl: "/home-service-contractors/hvac-marketing",
  serviceName: "HVAC Marketing Services",
  serviceType: "Digital Marketing for HVAC Contractors",
  serviceDescription: "AI-powered SEO, Google Ads, LSA management, and marketing automation for HVAC contractors.",
  breadcrumbs: [
    { name: "Home Service Contractors", url: "/home-service-contractors" },
    { name: "HVAC Marketing", url: "/home-service-contractors/hvac-marketing" },
  ],

  // ── Hero ──
  heroImage: hvacHeroImage,
  badgeText: "HVAC Contractor Marketing & Growth System",
  badgeIcon: Wrench,
  h1Line1: "The HVAC Marketing System",
  h1Line2: "That Fills Your Service Calendar",
  h1Highlight: "Year-Round",
  heroSubheadline: "Stop losing emergency calls to competitors. AI-powered SEO, Google Ads, and automated lead capture built for HVAC contractors.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaAnchor: "#solutions",
  statsBar: [
    { value: "3–6 mo", label: "To reach Google Map Pack Top 3" },
    { value: "$15–35", label: "Avg cost per exclusive HVAC lead" },
    { value: "24/7", label: "AI Receptionist answers every call" },
    { value: "38%", label: "Fewer no-shows with SMS reminders" },
  ],

  // ── Pain Points ──
  painPointsHeadline: "HVAC Contractor Marketing Challenges",
  painPointsSubheadline: "Even the most skilled HVAC contractors struggle to fill their service calendar. If any of these sound familiar, it's time for a different approach.",
  painPoints: [
    {
      icon: MapPin,
      title: "Not in the Google Map Pack Top 3",
      description: "Your competitors show up first when homeowners search 'AC repair near me' — and they get all the emergency calls.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "Paying for Shared Angi/HomeAdvisor Leads",
      description: "$2,000–$4,000/month to Angi means your phone rings alongside four other contractors bidding for the same job.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Globe,
      title: "Slow or Outdated Website",
      description: "A slow mobile site without click-to-call above the fold is invisible to homeowners making a 90-second decision.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Calendar,
      title: "Seasonal Scramble",
      description: "Starting campaigns in June when you needed March. By the time ads are running, peak season is already half over.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Phone,
      title: "Missing After-Hours Emergency Calls",
      description: "A homeowner with no AC at 10pm calls whoever picks up first — not whoever has the best reviews from last month.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: TrendingUp,
      title: "Competing on Price Instead of Trust",
      description: "Without strong reviews, Map Pack visibility, and a credible website, price becomes the only differentiator — and you'll always lose that race.",
      hasImage: false, showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of juggling disconnected tools and chasing shared leads, imagine one integrated system handling it all.",

  // ── System Diagram ──
  systemDiagramHeadline: "GrowSmallBiz Predictable Marketing System",
  systemDiagramBody: "A complete lead generation engine that attracts new service calls, nurtures leads automatically, and turns one-time customers into maintenance plan subscribers and loyal referral sources — all working in perfect harmony.",

  // ── CTAs ──
  ctaAfterPainPoints: {
    headline: "Ready for HVAC Marketing That Fills Your Service Calendar?",
    subtext: "Let's build a custom HVAC growth strategy to dominate local search and convert more calls.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Call Us",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free HVAC SEO Visibility Audit",
    subtext: "Find out exactly where your HVAC company appears in local search results and Google Maps.",
    primaryLabel: "Get SEO Visibility Report",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See Your HVAC Business Running on Autopilot",
    subtext: "Watch how automated follow-ups, AI dispatch, and smart scheduling can transform your service business.",
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
  websiteDesignBadge: "HVAC Contractor Websites",
  websiteDesignHeadline: "HVAC Websites That Convert",
  websiteDesignHighlight: "Visitors to Service Calls",
  websiteDesignSubheadline: "Fast, mobile-first contractor websites built to capture emergency leads and turn traffic into booked jobs.",
  websiteDesignImage: portfolioHvacWebsite,
  websiteDesignFeatureHeadline: "Contractor Websites Built to Win the 90-Second Decision",
  websiteDesignFeatureBody: "When a homeowner's AC fails at 2pm, they open Google, scan the top 3 results, and call. We build HVAC websites that win that 90-second window — with click-to-call above the fold, trust signals front and center, and page speed that won't lose mobile visitors before they dial.",
  websiteDesignBullets: [
    "Click-to-call button above the fold on every page",
    "Mobile-first design optimized for emergency search behavior",
    "Service area pages for every city and county you cover",
    "Trust signals: licenses, certifications, Google reviews badge",
    "Fast load times — under 2 seconds on mobile",
    "Service pages for every trade: AC, heating, maintenance, emergency",
    "Online booking and appointment scheduling integration",
    "Blog for local SEO content and seasonal campaign landing pages",
  ],
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search Is Becoming the New Dispatcher.",
  aiSearchCalloutBody: "Homeowners are asking ChatGPT and Gemini 'who's the best HVAC company near me?' before they even open Google. Your competitor may already be showing up in AI recommendations — even if you aren't.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
  ],

  // ── SEO ──
  seoBadge: "HVAC SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "HVAC Contractors",
  seoSubheadline: "Comprehensive search engine optimization designed for HVAC companies — from local residential contractors to commercial HVAC specialists.",
  seoEditorialHeadline: "Why HVAC SEO Works",
  seoEditorialHighlight: "Differently Than Other Local Businesses",
  seoEditorialBody: [
    "HVAC is a high-urgency, low-consideration purchase.",
    "Unlike services where someone researches options for days, HVAC emergencies compress the entire buying cycle into 90 seconds. When an AC fails on the hottest day of the year or a furnace goes out in January, the homeowner opens Google, scans the Map Pack, and calls whoever appears first with strong reviews. There is no comparison shopping. There is no scrolling to page two.",
    "This behavior has a direct implication for SEO: Map Pack visibility is not a nice-to-have — it is the entire game. A contractor ranked #4 on Google organically but absent from the Map Pack top 3 will lose the majority of emergency calls to less experienced competitors who simply showed up in the right place.",
    "HVAC search volume is also intensely seasonal — spiking 300–400% in summer and again during winter cold snaps. The contractors dominating these seasonal surges did not start their campaigns when demand spiked. They built their Map Pack presence, review velocity, and content authority in the off-season. Our approach maps every SEO action to the seasonal calendar, so when demand spikes, your rankings are already cemented.",
    "That's why our approach combines Map Pack optimization, service-area page authority, seasonal content strategy, and AI search visibility — so your business captures every form of local search intent, from planned maintenance to 2am emergency calls.",
  ],
  seoEditorialPullQuote: "Map Pack visibility is not a nice-to-have — it is the entire game. A contractor ranked #4 on Google will lose the majority of emergency calls to competitors who simply showed up in the right place.",
  seoKeywordCategories: {
    residential: {
      label: "Residential HVAC", icon: ThermometerSun,
      image: hvacHeroImage,
      keywords: [
        "AC repair [city]",
        "air conditioning installation near me",
        "HVAC contractor [city]",
        "furnace repair [city]",
        "AC tune-up [city]",
        "heating and cooling company near me",
      ],
      competitors: "Local HVAC companies, HomeAdvisor/Angi listings, Carrier/Trane dealer pages",
    },
    emergency: {
      label: "Emergency Repair", icon: AlertTriangle,
      image: hvacHeroImage,
      keywords: [
        "emergency AC repair near me",
        "AC not working [city]",
        "HVAC emergency service 24/7",
        "broken furnace repair near me",
        "no heat emergency [city]",
        "same day AC repair",
      ],
      competitors: "24/7 emergency HVAC services, plumbing & HVAC combo companies, Yelp emergency listings",
    },
    commercial: {
      label: "Commercial HVAC", icon: Wrench,
      image: hvacHeroImage,
      keywords: [
        "commercial HVAC contractor [city]",
        "commercial air conditioning repair",
        "commercial HVAC maintenance",
      ],
      competitors: "Large commercial HVAC firms, national facility maintenance companies",
    },
  },

  // ── Paid Media ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "HVAC Contractors",
  paidMediaSubheadline: "Strategic ad platform recommendations by service type — emergency, residential maintenance, and commercial.",
  adCreatives: [
    {
      id: "emergency",
      genre: "Emergency Service",
      image: hvacHeroImage,
      platforms: ["Google LSA", "Google PPC"],
      description: "High-urgency creative for broken AC / no heat emergencies. Same-day availability, Google Guaranteed badge.",
    },
    {
      id: "seasonal",
      genre: "Residential Maintenance",
      image: portfolioHvacWebsite,
      platforms: ["Google PPC", "Meta/Facebook"],
      description: "Pre-season AC tune-up promotion targeting homeowners before peak demand. Urgency-driven limited availability.",
    },
    {
      id: "maintenance",
      genre: "Recurring Revenue",
      image: hvacHeroImage,
      platforms: ["Meta/Facebook", "Email Retargeting"],
      description: "Annual maintenance agreement targeting existing customers and residential homeowners. Recurring revenue focus.",
    },
  ],
  paidMediaByGenre: [
    {
      genre: "Residential HVAC", icon: ThermometerSun,
      primary: [
        { name: "Google LSA + PPC", reason: "70-80% of budget — highest-intent emergency and maintenance searches" },
        { name: "Meta/Facebook", reason: "Retarget website visitors + seasonal promotions to homeowner audiences" },
      ],
      secondary: [
        { name: "YouTube Ads", reason: "Seasonal tips and maintenance education content" },
        { name: "Nextdoor", reason: "Neighborhood-level trust building for local service areas" },
      ],
      color: "blue",
    },
    {
      genre: "Emergency Repair", icon: AlertTriangle,
      primary: [
        { name: "Google LSA", reason: "Highest ROI for emergency intent — Google Guaranteed badge drives call conversions" },
        { name: "Google PPC", reason: "Emergency keyword campaigns with location extensions and call-only ads" },
      ],
      secondary: [
        { name: "Google Posts", reason: "Real-time availability updates during peak emergency windows" },
      ],
      color: "red",
    },
    {
      genre: "Commercial HVAC", icon: Wrench,
      primary: [
        { name: "Google PPC", reason: "Target commercial property + facility manager searches" },
        { name: "LinkedIn Ads", reason: "Target facility managers, property managers, restaurant owners by industry" },
      ],
      secondary: [
        { name: "Facebook", reason: "Local business groups and commercial property owner communities" },
      ],
      color: "emerald",
    },
  ],
  metaAdSetupHeadline: "How We Help HVAC Contractors with Meta Ad Setup",
  metaAdSetupSubheadline: "Facebook and Instagram ads reach homeowners before they have an emergency — building brand familiarity so when their AC fails, your name is already familiar. We build seasonal campaigns that drive tune-up bookings and maintenance plan enrollment at the lowest cost-per-lead window of the year.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to homeowners who visited your site but didn't call.", icon: Facebook },
    { title: "Google Analytics & GTM", description: "Track your full customer journey, see which pages drive service calls, and manage all tracking codes centrally.", icon: BarChart3 },
    { title: "Call Tracking", description: "Know exactly which ad, keyword, or landing page generated each phone call and service booking.", icon: Phone },
  ],

  // ── Retargeting ──
  retargetingHeadline: "Show Up Before the Emergency.",
  retargetingHighlight: "Stay Top of Mind Until It Happens.",
  retargetingSubheadline: "SEO captures the emergency. Retargeting captures everything else.",
  retargetingBody: [
    "Most HVAC searches happen in a crisis — and you can't predict when a homeowner's system will fail. But you can make sure that when it does, your company is the first name they think of.",
    "Retargeting keeps your brand in front of website visitors who didn't call, past customers who are due for a tune-up, and homeowners who researched maintenance plans but didn't book. Your ads reappear naturally across their feeds — not as pushy promotions, but as timely reminders from the company they already checked out. When their system fails at 10pm, your name feels familiar. That familiarity converts.",
  ],

  // ── Social Media ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for HVAC contractors — by service type and season.",
  socialMediaByGenre: [
    {
      genre: "Residential HVAC",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Local community groups, neighborhood associations, homeowner groups — highest organic reach for residential contractors." },
        { name: "Instagram", icon: Instagram, strategy: "Before/after equipment installs, seasonal tips, team content." },
      ],
      secondary: [
        { name: "Nextdoor", icon: MapPin, strategy: "Neighborhood-level trust building for local service areas." },
      ],
      color: "blue",
    },
    {
      genre: "Emergency / 24-7 Service",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Local emergency preparedness groups, community alerts during heat waves or cold snaps." },
      ],
      secondary: [
        { name: "Google Posts", icon: Globe, strategy: "Real-time availability updates during peak emergency windows." },
      ],
      color: "red",
    },
    {
      genre: "Commercial HVAC",
      primary: [
        { name: "LinkedIn", icon: Linkedin, strategy: "Thought leadership for facility managers, property management companies, restaurant owners." },
      ],
      secondary: [
        { name: "Facebook", icon: Facebook, strategy: "Local business groups and commercial property owner communities." },
      ],
      color: "emerald",
    },
  ],
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ── AI Growth System ──
  growthSystemHeadline: "for HVAC Contractors",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop chasing leads manually. Build an automated system that captures emergency calls, nurtures maintenance leads, and turns one-time service calls into recurring maintenance plan customers.",
  clientJourneyStages: [
    {
      stage: "Awareness", icon: Eye,
      description: "Homeowners discover your company through Google Maps, paid ads, AI search, or social media. They don't know you yet — but they're in your service area and they have HVAC systems.",
      goal: "Get found before the emergency happens",
      color: "blue",
    },
    {
      stage: "Prospect", icon: Target,
      description: "Visitors land on your website. They're checking your reviews, service area, pricing page, and whether you offer emergency service. Trust and speed of response determine if they call.",
      goal: "Build trust and be easy to reach",
      color: "purple",
    },
    {
      stage: "Lead", icon: Mail,
      description: "They've submitted a form, called your number, or messaged your AI chat. Speed-to-response determines whether you get the job or your competitor does.",
      goal: "Respond within 5 minutes and nurture to booking",
      color: "primary",
    },
    {
      stage: "Customer", icon: Wrench,
      description: "Job complete. System repaired or installed. Most contractors stop here — leaving passive recurring revenue on the table from maintenance plans and seasonal tune-ups.",
      goal: "Collect reviews and enroll in maintenance plan",
      color: "emerald",
    },
    {
      stage: "Retain & Grow", icon: RefreshCw,
      description: "The gold mine. Annual maintenance agreements, seasonal tune-up reminders, referral programs, and equipment replacement upsells. Your existing customer list is your highest-ROI marketing asset.",
      goal: "Turn one service call into a lifetime customer relationship",
      color: "amber",
    },
  ],
  emailNurturePoints: [
    { title: "Speed-to-Lead", description: "AI Receptionist auto-responds to every inquiry within seconds — 24/7. Answers questions about availability, books appointments, qualifies leads, and routes urgent emergency calls directly to your team.", icon: Zap },
    { title: "Automated Lead Nurturing", description: "5–7 touchpoints over 2–3 weeks with seasonal reminders, trust content, and urgency triggers that convert cold leads into booked jobs.", icon: Mail },
    { title: "Past Client Re-engagement", description: "Annual maintenance reminders, seasonal tune-up promotions, and 'your system is X years old — time to plan for replacement' campaigns keep past customers coming back.", icon: RefreshCw },
  ],
  emailSequenceTitle: "HVAC Service Inquiry",
  emailSequenceHighlight: "Follow-Up Sequence",
  noShowResearchCitations: [
    { stat: "15–30% of service appointments are missed industry-wide", source: "Service Industry Research", publication: "Healthcare & appointment-based businesses (PMC)", year: "2016", label: "The Problem" },
    { stat: "98% of text messages are opened", source: "Industry Research", publication: "Mobile Marketing Association", year: "2023", label: "Why SMS Works" },
    { stat: "SMS reminders reduce no-shows by 38%", source: "Imperial College London", publication: "BMC Ophthalmology", year: "2008", label: "The Result" },
    { stat: "Reminder systems reduce lost-to-follow-up by 60%", source: "Cochrane Reviews", publication: "Systematic Review Meta-Analysis", year: "2016", label: "Long-Term Impact" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "Service Estimate Appointment", icon: CalendarCheck, color: "blue",
      description: "Pre-appointment reminders for HVAC service estimates and quotes",
      noShowImpact: "Missed estimates waste technician drive time and delay revenue",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Confirmation + what to have ready (system model/serial number, known issues)" },
        { timing: "1 day before", channels: ["Email"], content: "Directions, technician name, arrival window" },
        { timing: "2 hours before", channels: ["SMS"], content: "Technician en route ETA + emergency contact number" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Scheduled Service Call", icon: Wrench, color: "emerald",
      description: "Pre-service reminders for confirmed repair and installation jobs",
      noShowImpact: "No-shows waste a full technician slot and delay other customers",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Reminder + what to do to prepare (clear access to unit, pets secured)" },
        { timing: "1 day before", channels: ["Email"], content: "Technician assignment + arrival window confirmation" },
        { timing: "2 hours before", channels: ["SMS"], content: "'Your technician [Name] is on their way'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Maintenance Plan Visit", icon: Calendar, color: "amber",
      description: "Seasonal maintenance visit reminders for plan subscribers",
      noShowImpact: "Missed visits delay seasonal prep and reduce plan renewal rates",
      reminders: [
        { timing: "1 week before", channels: ["Email"], content: "Seasonal maintenance reminder + what's included in visit" },
        { timing: "2 days before", channels: ["SMS", "Email"], content: "Appointment confirmation + technician details" },
        { timing: "Morning of", channels: ["SMS"], content: "'Your HVAC maintenance visit is today — arrival window [time]'" },
      ],
      expectedReduction: "Up to 60%",
    },
  ],
  marketingCampaigns: [
    {
      genre: "Spring AC Tune-Up", icon: ThermometerSun, color: "from-blue-500 to-cyan-500",
      offer: {
        headline: "Spring AC Tune-Up Special",
        tagline: "Get your system ready before the heat hits",
        price: "$89",
        originalPrice: "$149",
        savings: "Save $60",
        includes: ["21-point inspection", "Refrigerant check", "Filter replacement", "Performance report"],
        urgency: "Limited spring slots — book before peak season",
        cta: "Book Now",
      },
      funnel: ["Google PPC → Landing Page", "Booking Form → Confirmation", "Nurture Sequence → Maintenance Plan Upsell"],
      topPlatforms: ["Google PPC", "Email", "Facebook"],
      seasonality: "Peak: March–May",
    },
    {
      genre: "Emergency Priority Service", icon: AlertTriangle, color: "from-red-500 to-orange-500",
      offer: {
        headline: "Priority Service Enrollment",
        tagline: "Guaranteed 2-hour response window",
        price: "Enrollment",
        originalPrice: "",
        savings: "Waived diagnostic fee",
        includes: ["Priority dispatch queue", "Dedicated emergency line", "Waived diagnostic fee"],
        urgency: "Limited enrollment spots per service area",
        cta: "Enroll Now",
      },
      funnel: ["Google LSA → Emergency Landing Page", "AI Receptionist → Booking", "Follow-up → Priority Plan Enrollment"],
      topPlatforms: ["Google LSA", "Google PPC"],
      seasonality: "June–Aug (heat), Dec–Feb (cold snaps)",
    },
    {
      genre: "Annual Maintenance Agreement", icon: Calendar, color: "from-emerald-500 to-teal-500",
      offer: {
        headline: "Annual HVAC Maintenance Plan",
        tagline: "2 visits/year — spring AC + fall heating",
        price: "Annual Plan",
        originalPrice: "",
        savings: "Priority scheduling + parts discount",
        includes: ["Priority scheduling", "Parts discount", "Free emergency diagnostic", "2 visits/year"],
        urgency: "Sign up before summer — spring slots filling fast",
        cta: "Join Plan",
      },
      funnel: ["Post-service Email → Maintenance Plan Page", "Contract + Auto-billing"],
      topPlatforms: ["Email", "SMS", "Retargeting"],
      seasonality: "Year-round (peaks March & September)",
    },
  ],
  seasonalCampaigns: [
    { campaign: "Spring AC Tune-Up", timing: "Launch 6 weeks before peak (March–May)", offer: "$89 tune-up special", channels: ["Google PPC", "Email to past clients", "Facebook ads to homeowners"] },
    { campaign: "Summer Emergency Campaign", timing: "Always-on during peak (June–Aug)", offer: "Same-day emergency service", channels: ["Google LSA", "PPC emergency keywords", "Google Posts"] },
    { campaign: "Fall Heating Tune-Up", timing: "Launch mid-August (Sep–Nov)", offer: "Furnace inspection + safety check", channels: ["Email to spring customers", "Facebook", "Google PPC"] },
    { campaign: "Winter Emergency Heating", timing: "Always-on during cold snaps (Dec–Feb)", offer: "Emergency furnace repair", channels: ["Google LSA", "PPC", "Nextdoor emergency posts"] },
    { campaign: "Maintenance Plan Enrollment", timing: "Post-service automation (Year-round)", offer: "Annual agreement offer", channels: ["Post-job email sequence", "SMS", "Retargeting"] },
  ],
  pastClientWorkflows: [
    { title: "Annual Check-In", description: "Automated email 11 months after installation or last service — checking in on system performance, offering a tune-up, and surfacing upgrade options for aging equipment.", icon: Calendar },
    { title: "Re-engagement Campaign", description: "Haven't heard from a customer in 18+ months? Automated 'We miss you' campaign with a seasonal offer and a link to rebook — recovering dormant customers at zero acquisition cost.", icon: RefreshCw },
  ],

  // ── Reputation ──
  reputationHeadline: "We Protect and Build Your",
  reputationHighlight: "Reputation — Automatically",
  reputationSubheadline: "Turn every completed service call into a 5-star review and a referral source.",
  reputationBullets: [
    "5-star reviews build instant trust with homeowners making a 90-second call decision",
    "Google reviews directly impact your Map Pack ranking — more reviews = higher placement",
    "Automated review requests sent after every completed job",
    "Monitor all platforms: Google, Yelp, HomeAdvisor, Nextdoor",
    "Respond to reviews quickly with professional templates that show engagement",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Job Complete", description: "Technician marks job done in CRM" },
    { step: "2", title: "Happiness Check", description: "Automated SMS: 'Happy with your service today?'" },
    { step: "3", title: "If Positive", description: "Direct link to Google review page sent immediately" },
    { step: "4", title: "If Neutral/Negative", description: "Private feedback form to resolve before going public" },
    { step: "5", title: "Review Submitted", description: "Auto thank-you + referral invitation" },
  ],
  giftCardUseCases: "New homeowner welcome gifts, home warranty partners, real estate agent referral programs, and seasonal promotions.",
  giftAndReferralPrograms: [
    { title: "Gift Cards", description: "Welcome gifts for new homeowners, home warranty partner incentives, and seasonal promotions.", icon: Gift, features: ["Online gift card store", "Custom denominations", "Automated delivery", "Usage tracking"] },
    { title: "Referral Tracking", description: "Know exactly who referred each new customer. Track referral sources automatically in your CRM.", icon: UserPlus, features: ["Unique referral links", "Referral source tagging", "Thank-you automation", "Reward tracking"] },
    { title: "Referral Rewards", description: "Incentivize referrals with service credits, discounts, or priority scheduling. Automate reward delivery.", icon: DollarSign, features: ["Automatic reward triggers", "Credit bank system", "Thank-you emails", "Referral leaderboard"] },
  ],

  // ── AI Voice & Chat ──
  aiVoiceChatSectionHeadline: "We Power Your 24/7 HVAC",
  aiVoiceChatHighlight: "Business Around the Clock",
  aiVoiceChatSubheadline: "Never miss an emergency call — AI handles inquiries around the clock.",
  aiFeatures: [
    {
      title: "24/7 AI Receptionist",
      description: "Never miss an emergency call again. AI answers inquiries, checks your calendar, qualifies leads, and routes urgent emergency calls directly to your on-call team — even at 10pm.",
      icon: Phone,
      features: ["Answers calls in your brand voice", "Checks calendar availability in real-time", "Books appointments and service calls", "Routes urgent emergencies to on-call team", "Sends confirmation texts/emails"],
      color: "violet",
    },
    {
      title: "Conversational AI Chat",
      description: "Intelligent chatbot that engages website visitors, answers FAQs about your services, and captures leads across all channels.",
      icon: MessageSquare,
      features: ["Website live chat widget", "SMS two-way conversations", "Facebook Messenger integration", "Lead qualification & capture", "After-hours lead collection"],
      color: "cyan",
    },
  ],

  // ── Why Choose Us ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for HVAC Marketing",
  whyChooseUsSubtitle: "Your HVAC Marketing Partner",
  whyChooseUsBody: "We understand the HVAC business — seasonal demand spikes, emergency call behavior, and the trust signals homeowners need before they let a technician into their home.",
  whyChooseUsCards: [
    { title: "HVAC Industry Specialists", description: "We focus on home service contractors — HVAC, plumbing, electrical. We know the seasonal patterns, the emergency search behavior, and the trust signals that convert browsers into callers.", icon: Wrench },
    { title: "Emergency Call Coverage", description: "Your AI Receptionist captures emergency calls at 10pm, qualifies the lead, and routes urgent jobs to your on-call team — so you never lose a high-value emergency job again.", icon: Phone },
    { title: "Seasonal Strategy Built In", description: "We map every campaign to your seasonal demand cycle. Spring tune-up promotions, summer emergency ramp-up, fall heating transition — the right message at the right time.", icon: Calendar },
    { title: "Exclusive Leads — Not Shared", description: "Everything we build generates leads that come directly to you — not to you and four competitors simultaneously. You own your pipeline, not rent it.", icon: Shield },
    { title: "One Integrated System", description: "Local SEO, Google Ads, LSA, reputation management, AI Receptionist, and CRM automation — fully integrated. No gaps between your ad spend and your follow-up.", icon: Zap },
    { title: "Proven Local Results", description: "Verified case studies for HVAC contractors across California and the United States. SEO campaigns and Google Ads results available on dedicated case study pages.", icon: Star },
  ],

  // ── FAQ ──
  faqHeadline: "HVAC Contractor Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to rank in the Google Map Pack for HVAC searches?", answer: "Most HVAC contractors see Map Pack movement within 3–6 months depending on market competition, current review velocity, and baseline authority. We front-load citation building, review strategy, and GBP optimization to accelerate results." },
        { question: "Do I need separate SEO pages for each city I serve?", answer: "Yes — service area pages targeting each city you cover are critical for local SEO. Each page is uniquely written with local signals, nearby landmarks, and geo-specific keywords to rank in that city's search results." },
        { question: "How does AI SEO differ from traditional HVAC SEO?", answer: "AI SEO optimizes your content for both Google and AI platforms like ChatGPT, Perplexity, and Gemini. We structure your site so AI assistants reference your company when homeowners ask 'who's the best HVAC company near me?'" },
        { question: "What's the difference between local SEO and regular SEO for HVAC?", answer: "Local SEO focuses on Google Maps, the Map Pack, and 'near me' searches — which is where 90%+ of HVAC leads originate. Regular SEO targets broader organic rankings. Both are important, but for HVAC contractors, local SEO drives the majority of revenue." },
        { question: "How do you optimize my Google Business Profile for HVAC?", answer: "We optimize every field — categories, services, service areas, photos, Q&A, posts, and review response strategy. We also build local citations and ensure NAP consistency across all directories." },
        { question: "Will SEO work if I'm in a competitive HVAC market like the Bay Area?", answer: "Yes, but strategy matters. We start with less competitive long-tail keywords and build authority systematically. In competitive markets, the combination of content velocity, review strategy, and technical SEO creates compounding advantages over time." },
        { question: "How important are Google reviews for HVAC SEO rankings?", answer: "Extremely important. Review quantity, recency, and velocity are top Map Pack ranking factors. Our automated review request system ensures every completed job has an opportunity to generate a 5-star review." },
        { question: "Do you help with image SEO for HVAC equipment and job photos?", answer: "Yes — we optimize all images with descriptive file names, alt text, and proper compression. Before/after job photos and equipment images rank in Google Image search and build visual credibility." },
        { question: "Can you help me rank for emergency HVAC search terms?", answer: "Absolutely. Emergency keywords like 'AC repair near me' and 'emergency furnace repair' are high-value, high-intent terms. We build dedicated emergency service pages and optimize your GBP for 24/7 availability signals." },
        { question: "How do you track and report SEO progress for HVAC?", answer: "Monthly reports cover keyword rankings, Map Pack position, organic traffic, phone calls, and form submissions. You also get access to a live dashboard to check progress anytime." },
      ],
    },
    {
      id: "paid-media", label: "Paid Media", icon: Megaphone, color: "rose",
      faqs: [
        { question: "What's the difference between Google LSA and Google PPC for HVAC?", answer: "LSA (Local Services Ads) charges per lead and shows the Google Guaranteed badge — ideal for emergency calls. PPC charges per click and targets broader keyword campaigns. Most HVAC contractors benefit from running both." },
        { question: "Is Google Guaranteed worth it for HVAC contractors?", answer: "Yes — the Google Guaranteed badge builds instant trust and LSA leads tend to have higher close rates because homeowners see the badge as a quality signal. We help with the application, background check, and ongoing optimization." },
        { question: "How much should an HVAC contractor spend on Google Ads?", answer: "Most HVAC contractors see strong results starting at $2,000–5,000/month for Google PPC + LSA combined. Budget should scale with market size and seasonal demand — higher in summer and winter, lower in spring and fall." },
        { question: "Do Facebook ads work for HVAC companies?", answer: "Facebook ads excel at seasonal promotions (spring tune-ups, maintenance plans) and retargeting website visitors. They're less effective for emergency services but great for building brand awareness and driving pre-season bookings." },
        { question: "How do I run seasonal ad campaigns for HVAC peak season?", answer: "We pre-build seasonal campaigns and ramp budgets 6 weeks before demand spikes. This means your ads are fully optimized and your quality scores are established before competitors flood the auction." },
        { question: "What keywords should I target for emergency HVAC ads?", answer: "High-priority keywords include 'AC repair near me,' 'emergency HVAC [city],' 'no heat,' and 'AC not working.' We also target system-specific terms and use negative keywords to eliminate irrelevant traffic." },
        { question: "How do you track calls from HVAC ad campaigns?", answer: "We use call tracking with unique phone numbers per campaign, keyword-level attribution, and call recording so you know exactly which ad, keyword, and landing page drove each service call." },
        { question: "What's a good cost-per-lead for HVAC Google Ads?", answer: "In most markets, HVAC Google Ads generate leads at $15–50 per lead depending on service type and competition. Emergency leads tend to be cheaper due to high close rates, while maintenance leads cost less but have lower urgency." },
      ],
    },
    {
      id: "marketing-automation", label: "Marketing Automation", icon: RefreshCw, color: "amber",
      faqs: [
        { question: "How does lead nurture automation work for HVAC contractors?", answer: "When a lead submits a form or calls, they automatically enter a multi-step email and SMS sequence that follows up over 5 days — sharing credentials, answering FAQs, and creating urgency with limited availability." },
        { question: "Can I automate follow-up for HVAC estimates that didn't close?", answer: "Yes — unclosed estimates enter a nurture sequence with trust-building content, seasonal urgency triggers, and rebooking incentives. Many contractors recover 15–25% of lost estimates through automation." },
        { question: "How do I enroll customers in a maintenance plan automatically?", answer: "After every completed service call, customers receive an automated email offering maintenance plan enrollment with benefits highlighted. The sequence includes 3–5 touchpoints over 2 weeks." },
        { question: "What's a typical booking rate from automated HVAC follow-up sequences?", answer: "Our HVAC clients typically see 20–30% booking rates from automated follow-up sequences — significantly higher than industry average where most leads receive no follow-up at all." },
        { question: "How do you handle no-shows for HVAC service appointments?", answer: "We deploy a 3-step SMS + email reminder sequence: 3 days before (confirmation), 1 day before (details), and 2 hours before (ETA). This reduces no-shows by up to 38%." },
        { question: "Can automation send seasonal tune-up reminders to past customers?", answer: "Absolutely. We set up automated campaigns triggered by season and last-service date — so customers who had AC work in spring get a heating checkup reminder in fall, and vice versa." },
        { question: "How do I set up review request automation for HVAC?", answer: "After every completed job, the system sends a happiness check via SMS. Positive responses get a direct Google review link. Neutral or negative responses are routed to a private feedback form first." },
        { question: "Does the CRM integrate with my existing HVAC dispatch software?", answer: "We integrate with most popular HVAC dispatch and field service platforms through API connections and Zapier. This ensures leads flow seamlessly from marketing into your existing workflow." },
      ],
    },
    {
      id: "ai-receptionist", label: "AI Receptionist", icon: Bot, color: "sky",
      faqs: [
        { question: "How does the AI Receptionist handle emergency HVAC calls at night?", answer: "The AI identifies emergency keywords (no heat, AC broken, gas smell) and immediately routes these to your on-call team while collecting key details. Non-emergency inquiries are handled by booking next-day appointments." },
        { question: "Can the AI Receptionist book service appointments directly?", answer: "Yes — it integrates with your scheduling system to check availability and book service calls, estimates, and maintenance visits in real-time without any manual intervention." },
        { question: "What happens if the AI can't answer a customer's question?", answer: "The AI collects the question and customer contact information, then sends you a notification. For urgent matters, it can transfer the call directly to your team or on-call technician." },
        { question: "Does the AI Receptionist qualify leads before routing to my team?", answer: "Yes — it asks qualification questions about service type, system details, timeline, and location to ensure your team only spends time on leads within your service area and scope." },
        { question: "Can I customize the AI Receptionist's responses for my HVAC company?", answer: "Absolutely. We train the AI on your specific services, service areas, pricing tiers, and brand voice. It can answer questions about your certifications, warranties, and service guarantees." },
        { question: "How does the AI handle multiple calls simultaneously during peak season?", answer: "Unlike a human receptionist, the AI handles unlimited simultaneous calls. During summer heat waves or winter cold snaps, every call is answered instantly — no hold times, no missed calls." },
        { question: "What's the setup time for the HVAC AI Receptionist?", answer: "We handle all scripting, training, and integration. Most HVAC companies are fully live within 1–2 weeks, including calendar integration and emergency routing setup." },
        { question: "Will customers know they're talking to an AI?", answer: "Modern voice AI sounds remarkably natural. We customize tone, pacing, and personality to match your brand. Most callers don't realize they're speaking with AI — they just know their call was answered immediately." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "Have more questions about HVAC Marketing?",
    body: "Get a personalized demo of our SEO, Google Ads, and marketing automation platform built for HVAC contractors.",
    signoff: "— The GrowSmallBiz Team",
  },

  // ── Contact ──
  contactSectionHeadline: "Get Your Custom HVAC Growth Strategy",
  contactSectionBody: "Tell us a little about your HVAC business and the markets you serve. We'll review your inquiry and follow up with the next best step — including a demo of the system if that's helpful.",

  // ── Sticky CTA ──
  stickyCtaConfig: {
    title: "Ready for HVAC Marketing That Fills Your Calendar?",
    description: "Let's build a custom growth strategy to dominate local search, capture emergency calls 24/7, and turn one-time jobs into recurring revenue.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Fills", "Your", "Calendar"],
    showAfterScroll: 60,
  },
};
