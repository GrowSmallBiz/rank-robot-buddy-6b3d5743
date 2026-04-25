import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Search, TrendingUp, Users, Target, Calendar,
  Bot, Clock, MessageSquare, Phone, Zap,
  Gift, RefreshCw, Mail, CalendarCheck,
  Eye, Megaphone, Shield, MapPin,
  AlertTriangle, DollarSign, Globe,
  Star, BarChart3, Facebook, Instagram,
  Sparkles, UserPlus, Heart, Activity,
} from "lucide-react";

import chiroHeroImage from "@/assets/chiropractic/chiro-hero.webp";
import portfolioChiroWebsite from "@/assets/chiropractic/portfolio-chiro-website.webp";

export const chiropracticConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "Chiropractor Marketing: AI SEO, Ads & Growth | GrowSmallBiz",
  metaDescription: "Attract new patients with AI-powered marketing for chiropractors. Get AI powered Website, Local SEO, Google Ads, and AI receptionist. Contact us.",
  canonicalUrl: "/health-and-wellness-practices/marketing-for-chiropractors/",
  serviceName: "Chiropractic Marketing Services",
  serviceType: "Digital Marketing for Chiropractors",
  serviceDescription: "AI-powered SEO, Google Ads, reputation management, and marketing automation for chiropractic practices.",
  breadcrumbs: [
    { name: "Health & Wellness Practices", url: "/health-and-wellness-practices/" },
    { name: "Chiropractic Marketing", url: "/health-and-wellness-practices/chiropractic-marketing/" },
  ],
  offerCatalog: {
    name: "Chiropractic Marketing Services",
    items: [
      { name: "Local SEO & Google Business Profile" },
      { name: "Conversion-Focused Website Design" },
      { name: "Google Ads (LSA + PPC) & Meta Ads" },
      { name: "Reputation Management" },
      { name: "AI Receptionist & 24/7 Patient Capture" },
      { name: "Patient Nurture & Recall Automation" },
    ],
  },

  // ── Hero (Prompt 2) ──
  heroImage: chiroHeroImage,
  badgeText: "Chiropractic Practice Marketing & Growth System",
  badgeIcon: Activity,
  h1Line1: "Chiropractic Marketing That Builds a Practice Full of",
  h1Line2: "",
  h1Highlight: "Loyal, Long-Term Patients",
  heroSubheadline: "Stop relying on word-of-mouth alone. AI-powered SEO, Google Ads, and automated patient acquisition built for chiropractic practices that want predictable, sustainable growth.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaAnchor: "#on-this-page",
  statsBar: [
    { value: "3–6 mo", label: "To reach top Google rankings for chiropractic searches" },
    { value: "5 min", label: "AI response speed to every new patient inquiry" },
    { value: "24/7", label: "AI Receptionist coverage for after-hours appointment requests" },
    { value: "2–4×", label: "New patient inquiry increase with Google Ads" },
  ],

  // ── Pain Points (Prompt 3) ──
  painPointsHeadline: "Chiropractic Practice Marketing Challenges",
  painPointsSubheadline: "Even the most skilled chiropractors struggle to build consistent new patient flow. If any of these resonate, your marketing infrastructure needs attention.",
  painPoints: [
    {
      icon: Search,
      title: "Invisible in Local Search",
      description: "Patients searching 'chiropractor near me' or 'back pain doctor [city]' find your competitors first — regardless of your clinical outcomes or years of experience.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Users,
      title: "Referral Dependency",
      description: "Word-of-mouth built your practice, but it can't scale it. Without a digital acquisition channel you own, new patient flow stops the moment referrals dry up.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Phone,
      title: "Missed After-Hours Inquiries",
      description: "Acute pain searches happen at 10pm. If your practice can't capture and respond immediately, the patient books with whoever answers first — and that's rarely you.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Star,
      title: "Low Review Volume",
      description: "84% of patients check online reviews before choosing a chiropractor. Without a consistent review generation system, even the best clinical outcomes stay invisible. — rater8, 2025",
      hasImage: false, showAILogos: false,
    },
    {
      icon: RefreshCw,
      title: "The 'I Feel Better' Drop-Off",
      description: "Patients come in for acute pain, get relief, and disappear — never converting to the wellness care that generates recurring revenue. Most practices have no system to prevent this churn.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Target,
      title: "No High-Value Condition Visibility",
      description: "General chiropractic keeps the schedule filled, but auto accident cases, sports injury rehabilitation, and prenatal care are your highest-value segments. Most practices have no strategy to attract them.",
      hasImage: false, showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of hoping patients find you and hoping they stay, imagine a predictable system that attracts new patients through search, converts inquiries automatically, and keeps your schedule full with both acute and long-term wellness patients.",

  // ── System Diagram (Prompt 4) ──
  systemDiagramHeadline: "GrowSmallBiz Predictable Marketing System",
  systemDiagramBody: "A complete patient acquisition engine that attracts new patients through search, converts inquiries into booked appointments automatically, and turns one-time acute care patients into loyal, recurring wellness relationships.",

  // ── CTAs (Prompt 5 + 14) ──
  ctaAfterPainPoints: {
    headline: "Ready for Chiropractic Marketing That Fills Your Schedule With the Right Patients?",
    subtext: "Let's build a custom chiropractic growth strategy to attract new patients and convert them into long-term wellness relationships.",
    primaryLabel: "Get Your Free Strategy Session",
    secondaryLabel: "Call +1 (925) 886-3724",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free Chiropractic SEO Visibility Audit",
    subtext: "Find out exactly where your chiropractic practice appears in local search results and how patients are finding you.",
    primaryLabel: "Get SEO Visibility Report",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See Your Chiropractic Practice Running on Autopilot",
    subtext: "Watch how automated follow-ups, AI scheduling, and smart patient nurturing can transform your practice growth.",
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

  // ── Website Design (Prompt 6) ──
  websiteDesignBadge: "Chiropractic Practice Websites",
  websiteDesignHeadline: "Chiropractic Websites That Convert",
  websiteDesignHighlight: "Visitors Into Booked Appointments",
  websiteDesignSubheadline: "Fast, patient-friendly chiropractic websites built to generate new patient inquiries and showcase your full range of conditions and care plans.",
  websiteDesignImage: portfolioChiroWebsite,
  websiteDesignFeatureHeadline: "Chiropractic Websites Built to Win the New Patient Decision",
  websiteDesignFeatureBody: "A patient researching a chiropractor visits your website with a simple question: can I trust this practice with my pain? We build chiropractic websites that answer that question immediately — with professional imagery, condition-specific pages for every patient type, patient reviews front and center, and an easy path to book an appointment from any device.",
  websiteDesignBullets: [
    "Online appointment request forms — 24/7 new patient booking capability",
    "Condition pages for every patient type: back pain, neck pain, sciatica, sports injuries, auto accident, prenatal, headaches",
    "Trust signals: credentials, care plan overviews, Google reviews integration",
    "Mobile-first design — majority of chiropractic searches happen on mobile",
    "Patient intake forms and new patient paperwork available online",
    "Insurance and financing information page",
    "Fast load times — under 2 seconds for mobile visitors",
    "Blog and content hub for condition-specific SEO and patient education",
  ],

  // ── AI Search Callout (Prompt 7) ──
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search Is Now Influencing Patient Decisions.",
  aiSearchCalloutBody: "Patients are asking ChatGPT and Gemini 'who's the best chiropractor near me for sciatica?' before they open Google. Your competitor may already be showing up in those AI recommendations — even if you rank well on traditional search.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
    { value: "73%", label: "of patients adopted new healthcare research behaviors in the past year — rater8, 2025" },
  ],

  // ── Conversational AI Queries (Prompt 8 — GEO) ──
  conversationalAiQueries: [
    "Which chiropractor near me is accepting new patients?",
    "Best chiropractor for sciatica in [city] — reviews 2025",
    "Can a chiropractor help with my herniated disc?",
    "Chiropractor for auto accident injury near me",
    "How many chiropractic sessions does back pain take?",
    "Is chiropractic care covered by my insurance in [city]?",
    "Prenatal chiropractor near me — safe during pregnancy?",
  ],

  // ── AEO Entity Block (Prompt 10) ──
  aeoEntityBlock: [
    {
      badge: "WHAT IS IT",
      title: "What is chiropractic marketing?",
      body: "Chiropractic marketing encompasses the digital strategies and systems a chiropractic practice uses to attract new patients, rank in local search results, build online reputation, and convert inquiries into booked appointments. It includes SEO, paid advertising, social media management, and patient communication automation — with specific strategies for acute pain patients, wellness care patients, and personal injury cases.",
    },
    {
      badge: "WHO IT SERVES",
      title: "Who does chiropractic marketing serve?",
      body: "Chiropractic marketing serves solo chiropractic practices, multi-practitioner clinics, sports chiropractic specialists, family wellness practices, prenatal chiropractic providers, and practices seeking to reduce referral dependency and build a predictable digital patient acquisition system.",
    },
    {
      badge: "WHAT WE DO",
      title: "What does GrowSmallBiz do for chiropractic practices?",
      body: "GrowSmallBiz builds complete chiropractic patient acquisition systems — combining conversion-focused practice websites, AI-powered SEO optimized for Google and AI search platforms, Google and Meta paid advertising, social media strategy, and an AI Client Growth System that automates new patient follow-up, wellness care enrollment, recall management, and reputation generation.",
    },
  ],

  // ── SEO (Prompts 9, 11, 12, 13) ──
  seoBadge: "Chiropractic SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "Chiropractic Practices",
  seoSubheadline: "Comprehensive search engine optimization designed for chiropractic practices — from acute pain relief and general wellness to high-value personal injury cases.",
  seoEditorialHeadline: "Why Chiropractic SEO Works",
  seoEditorialHighlight: "Differently Than Other Healthcare Marketing",
  seoEditorialBody: [
    "Chiropractic is a dual-intent search category with three distinct patient types — and each requires a different strategy.",
    "The first patient type is in acute pain: a thrown-out back, a stiff neck that won't turn, a sports injury from the weekend. These are high-urgency searches — 'chiropractor near me' or 'back pain doctor [city]' — where the decision happens in minutes and goes to whoever appears first with strong reviews and an open appointment.",
    "The second patient type is in planning mode: researching wellness care options, exploring chiropractic for ongoing headaches or posture concerns, or looking for a long-term maintenance provider. These patients have higher lifetime value but require more trust-building — patient education content, condition-specific pages, and a clear explanation of care plan philosophy.",
    "The third patient type is the personal injury or auto accident patient — a high-value, legally-complex segment that most chiropractic marketing completely ignores. PI patients are searching for documentation, expertise, and a practice experienced with insurance billing and legal referrals. This segment has its own keyword cluster and requires dedicated landing pages.",
    "This three-type dynamic means your SEO strategy must run on three tracks simultaneously. Local SEO and Google Business Profile wins acute cases. Service-specific content authority wins wellness patients. PI-specific pages win auto accident referrals.",
  ],
  seoEditorialPullQuote: "A practice with strong reviews across all three patient types — acute pain, wellness, and PI — builds a referral network that other chiropractors cannot replicate, because it is trusted by patients, physicians, and attorneys simultaneously.",
  seoKeywordCategories: {
    painRelief: {
      label: "Pain Relief & Injury", icon: AlertTriangle,
      image: chiroHeroImage,
      keywords: [
        "chiropractor near me",
        "back pain chiropractor [city]",
        "neck pain doctor [city]",
        "sciatica chiropractor [city]",
        "herniated disc treatment [city]",
        "headache chiropractor near me",
      ],
      competitors: "Multi-location chiropractic chains, urgent care facilities offering chiropractic, hospital spine departments, physical therapy clinics",
    },
    wellness: {
      label: "Wellness & Preventive Care", icon: Heart,
      image: portfolioChiroWebsite,
      keywords: [
        "wellness chiropractor [city]",
        "prenatal chiropractic near me",
        "sports chiropractor [city]",
        "chiropractic adjustment near me",
        "family chiropractor [city]",
        "pediatric chiropractor near me",
      ],
      competitors: "Wellness-focused chiropractic chains, integrative health clinics, physical therapy and chiropractic combined practices",
    },
    personalInjury: {
      label: "Auto Accident & Personal Injury", icon: Shield,
      image: chiroHeroImage,
      keywords: [
        "chiropractor for car accident [city]",
        "auto accident injury chiropractor near me",
        "personal injury chiropractor [city]",
        "whiplash treatment near me",
        "accident injury doctor [city]",
      ],
      competitors: "PI-focused chiropractic practices, personal injury medical clinics, attorney-referred medical providers, urgent care with PI billing",
    },
  },

  // ── Paid Media (Prompt 15) ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "Chiropractic Practices",
  paidMediaSubheadline: "Strategic ad platform recommendations by patient type — acute pain cases, wellness patients, and personal injury acquisition.",
  adCreatives: [
    {
      id: "acute-pain",
      genre: "Acute Pain Cases",
      image: chiroHeroImage,
      platforms: ["Google PPC", "Google LSA"],
      description: "High-urgency creative for back pain, neck pain, and sciatica. Same-day availability, prominent phone number, conditions treated.",
    },
    {
      id: "wellness",
      genre: "Wellness & Ongoing Care",
      image: portfolioChiroWebsite,
      platforms: ["Meta/Facebook", "Google PPC"],
      description: "Awareness creative targeting patients exploring long-term chiropractic care or sports performance improvements.",
    },
    {
      id: "personal-injury",
      genre: "Auto Accident & PI",
      image: chiroHeroImage,
      platforms: ["Google PPC", "Google LSA"],
      description: "'Injured in an accident?' messaging. Documentation support, insurance billing expertise, attorney referral positioning.",
    },
  ],
  paidMediaByGenre: [
    {
      genre: "Pain Relief & Acute Care", icon: AlertTriangle,
      primary: [
        { name: "Google PPC + Google LSA (70–80% of budget)", reason: "Google PPC: highest urgency search intent. Google LSA: Google Guaranteed badge builds instant trust." },
      ],
      secondary: [
        { name: "Nextdoor", reason: "Hyperlocal trust building." },
      ],
      color: "blue",
    },
    {
      genre: "Wellness & Preventive", icon: Heart,
      primary: [
        { name: "Meta/Facebook + Google PPC", reason: "Meta/Facebook: awareness campaigns, wellness education, retargeting. Google PPC: capture active wellness search intent." },
      ],
      secondary: [
        { name: "YouTube", reason: "Treatment education and wellness explainer videos." },
      ],
      color: "emerald",
    },
    {
      genre: "Auto Accident & PI", icon: Shield,
      primary: [
        { name: "Google PPC call-only ads + Google LSA", reason: "Google PPC: immediate contact for PI patients — call-only format. Google LSA: Google Guaranteed badge builds legal trust." },
      ],
      secondary: [
        { name: "Google Posts", reason: "Real-time availability during peak windows." },
      ],
      color: "red",
    },
  ],
  metaAdSetupHeadline: "How We Help Chiropractic Practices with Meta Ad Setup",
  metaAdSetupSubheadline: "Facebook and Instagram ads reach patients before they need urgent chiropractic care — building brand familiarity so when back pain or a sports injury arises, your practice feels like the obvious choice. We build wellness awareness campaigns, new patient offer funnels, and retargeting sequences that keep your practice top-of-mind.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to patients who visited your site but didn't book.", icon: Facebook },
    { title: "Google Analytics & GTM", description: "Track your full patient journey, see which pages drive appointments, and manage all tracking codes centrally.", icon: BarChart3 },
    { title: "Call Tracking", description: "Know exactly which ad, keyword, or landing page generated each phone call and appointment booking.", icon: Phone },
  ],

  // ── Retargeting (Prompt 16) ──
  retargetingHeadline: "Be Found When They Search.",
  retargetingHighlight: "Be Remembered When They're Ready.",
  retargetingSubheadline: "SEO captures the acute pain patient. Retargeting closes the wellness case.",
  retargetingBody: [
    "SEO helps your chiropractic practice show up when someone is actively searching for relief.",
    "Wellness care decisions take time. A patient exploring chiropractic for posture or headaches today may not book for weeks — they're researching, comparing, asking their physician. Retargeting keeps your practice visible across that entire consideration period. Your patient education content reappears on their Instagram. Your reviews show up in their Facebook feed. When they finally decide, your name is the one they trust.",
    "For emergency cases, retargeting catches patients who searched, visited your website, and didn't book — following up with a gentle prompt when their urgency resurfaces.",
  ],

  // ── Social Media (Prompt 17) ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for chiropractic practices — by patient type and care category.",
  socialMediaByGenre: [
    {
      genre: "Pain Relief & Acute Care",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Community groups, neighborhood associations, local parent groups — highest organic reach for new patient acquisition." },
        { name: "Instagram", icon: Instagram, strategy: "Team content, before/after mobility content, patient education posts." },
      ],
      secondary: [
        { name: "Nextdoor", icon: MapPin, strategy: "Hyperlocal trust for neighborhood acquisition." },
      ],
      color: "blue",
    },
    {
      genre: "Wellness & Sports",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Before/after posture transformation, treatment walkthrough Reels, provider spotlights." },
        { name: "Facebook", icon: Facebook, strategy: "Wellness awareness campaigns, care plan education, patient testimonials." },
      ],
      secondary: [
        { name: "YouTube", icon: Globe, strategy: "Treatment education videos, wellness care explainers, sports performance content." },
      ],
      color: "emerald",
    },
    {
      genre: "Patient Retention & Recall",
      primary: [
        { name: "Email/SMS", icon: Mail, strategy: "Recall reminders at 30/60/90 days post-discharge, wellness plan enrollment — highest ROI retention channel." },
        { name: "Facebook", icon: Facebook, strategy: "Existing patient appreciation, practice updates, seasonal spine health tips." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Spine health tips, team celebrations, practice milestone content." },
      ],
      color: "amber",
    },
  ],
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ── AI Growth System (Prompt 18 — Section A) ──
  growthSystemHeadline: "for Chiropractic Practices",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop losing new patient inquiries to slow follow-up. Build an automated system that captures leads, books appointments, and turns one-time patients into long-term wellness relationships.",
  clientJourneyStages: [
    {
      stage: "Awareness", icon: Eye,
      description: "Patients discover your practice through Google search, paid ads, AI recommendations, or a referral. They're often in pain or researching options — first impression quality determines whether they continue.",
      goal: "Be found at the moment of need, with enough credibility to earn a click",
      color: "blue",
    },
    {
      stage: "Prospect", icon: Target,
      description: "They visit your website. They're evaluating your credentials, reading patient reviews, looking at your condition specialty pages, and deciding if they trust you enough to book.",
      goal: "Build trust quickly and make booking feel effortless",
      color: "purple",
    },
    {
      stage: "Lead", icon: Mail,
      description: "They've submitted a new patient form, called, or messaged your AI chat. Speed of response is critical — a patient in pain who doesn't get a response within minutes will call the next chiropractor on their list.",
      goal: "Respond within 5 minutes, personalize to their condition, and confirm the appointment",
      color: "primary",
    },
    {
      stage: "Patient", icon: Activity,
      description: "First visit complete. Acute care plan initiated. This is where most practices stop systematically — but it's where the highest-value revenue window begins. Wellness plan enrollment, review collection, and referral activation all start here.",
      goal: "Deliver outstanding care, collect a review, and introduce wellness care options",
      color: "emerald",
    },
    {
      stage: "Loyal Patient", icon: RefreshCw,
      description: "Long-term wellness care relationship. Patients on maintenance plans visit regularly, refer actively, and are far more resilient to competitive poaching. This segment is the foundation of a sustainable practice.",
      goal: "Keep patients engaged through recall automation, wellness content, and referral program activation",
      color: "amber",
    },
  ],
  emailNurturePoints: [
    { title: "Speed-to-Lead", description: "AI Receptionist auto-responds to every inquiry within seconds — 24/7. Answers questions about conditions treated, insurance, and availability; books new patient appointments directly.", icon: Zap },
    { title: "Automated Lead Nurturing", description: "5–7 touchpoints over 2–3 weeks with condition education, patient testimonials, and booking prompts that convert researching patients into scheduled appointments.", icon: Mail },
    { title: "Past Client Re-engagement", description: "Recall reminders at 30, 60, and 90 days post-discharge, wellness care enrollment campaigns, and seasonal content keep your existing patient base engaged.", icon: RefreshCw },
  ],
  emailSequenceTitle: "New Patient Inquiry",
  emailSequenceHighlight: "Follow-Up Sequence",
  noShowResearchCitations: [
    { stat: "15–30% of chiropractic appointments are no-shows — each missed slot costs $75–$200+ in lost treatment revenue", source: "Healthcare Research", publication: "PMC", year: "2016", label: "The Problem" },
    { stat: "98% of text messages are opened", source: "Industry Research", publication: "Mobile Marketing Association", year: "2023", label: "Why SMS Works" },
    { stat: "SMS reminders reduce no-shows by 38%", source: "Imperial College London", publication: "BMC Ophthalmology", year: "2008", label: "The Result" },
    { stat: "Reminder systems reduce lost-to-follow-up by 60%", source: "Cochrane Reviews", publication: "Systematic Review Meta-Analysis", year: "2016", label: "Long-Term Impact" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "New Patient First Visit", icon: CalendarCheck, color: "blue",
      description: "Pre-appointment reminders for first-time chiropractic patients",
      noShowImpact: "Missed first visits waste consultation slots and delay patient acquisition",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Confirmation + what to bring (insurance card, ID, any imaging you have, comfortable clothing)" },
        { timing: "1 day before", channels: ["Email"], content: "Reminder + directions, parking, and what to expect at the first visit" },
        { timing: "2 hours before", channels: ["SMS"], content: "'Your first appointment is today at [time] — we look forward to helping you'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Ongoing Treatment Visit", icon: Activity, color: "emerald",
      description: "Reminders for patients on active treatment plans",
      noShowImpact: "Missed treatment visits delay recovery and reduce plan completion rates",
      reminders: [
        { timing: "2 days before", channels: ["SMS"], content: "Treatment visit reminder + any preparation notes" },
        { timing: "Morning of", channels: ["SMS"], content: "'Your adjustment is today at [time] — see you soon'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Wellness / Maintenance Visit", icon: Calendar, color: "amber",
      description: "Reminders for patients on wellness maintenance plans",
      noShowImpact: "Missed maintenance visits reduce plan renewal rates and patient retention",
      reminders: [
        { timing: "1 week before", channels: ["Email"], content: "Wellness visit reminder + brief note on the benefits of consistent maintenance care" },
        { timing: "1 day before", channels: ["SMS", "Email"], content: "Appointment confirmation + location and contact info" },
        { timing: "Morning of", channels: ["SMS"], content: "'Your maintenance visit is today at [time] — keeping your spine healthy'" },
      ],
      expectedReduction: "Up to 60%",
    },
  ],

  // ── Marketing Campaigns (Prompt 18 — Section C) ──
  marketingCampaigns: [
    {
      genre: "New Patient Special — General", icon: Activity, color: "from-blue-500 to-cyan-500",
      offer: {
        headline: "New Patient Exam + Consultation",
        tagline: "Start your pain relief journey today",
        price: "$49–$99",
        originalPrice: "$200+",
        savings: "Vary by market",
        includes: ["Comprehensive exam", "Postural assessment", "X-rays if clinically indicated", "Treatment plan overview"],
        urgency: "Limited new patient slots per week",
        cta: "Book Now",
      },
      funnel: ["Google PPC / Meta → Landing Page", "Booking Form → Nurture Sequence", "Recall Enrollment"],
      topPlatforms: ["Google PPC", "Meta/Facebook"],
      seasonality: "Peak: January (New Year), September (back-to-school/work)",
    },
    {
      genre: "Wellness Consultation — New Patients", icon: Heart, color: "from-emerald-500 to-teal-500",
      offer: {
        headline: "Free Spinal Health Screening",
        tagline: "See what's possible for your spine health",
        price: "Free",
        originalPrice: "$75+",
        savings: "Complimentary screening",
        includes: ["20-min consultation", "Postural analysis", "Spinal health overview", "Treatment recommendations"],
        urgency: "Limited complimentary screenings per month",
        cta: "Book Screening",
      },
      funnel: ["Google PPC / Instagram → Cosmetic Landing Page", "Form → AI follow-up sequence"],
      topPlatforms: ["Google PPC", "Instagram"],
      seasonality: "Year-round, peaks January and May",
    },
    {
      genre: "Patient Recall & Reactivation", icon: RefreshCw, color: "from-rose-500 to-pink-500",
      offer: {
        headline: "Your Spine Doesn't Take a Break — Overdue Wellness Visit",
        tagline: "Priority scheduling for returning patients",
        price: "Priority Scheduling",
        originalPrice: "",
        savings: "Priority scheduling",
        includes: ["Adjustment + reassessment", "Updated posture analysis", "Updated care plan review"],
        urgency: "Limited recall availability for returning patients",
        cta: "Schedule Now",
      },
      funnel: ["Email/SMS to dormant patients → Recall booking page", "Confirmation → Re-engagement"],
      topPlatforms: ["Email", "SMS"],
      seasonality: "Peak: September–October (post-summer), January",
    },
  ],

  // ── Seasonal Campaigns (Prompt 18 — Section C) ──
  seasonalCampaigns: [
    { campaign: "January New Year Campaign", timing: "Launch first week Jan", offer: "New patient exam special", channels: ["Google PPC", "Facebook", "Email to lapsed patients"] },
    { campaign: "Spring Wellness Push", timing: "Launch mid-March", offer: "Free spinal screening", channels: ["Google PPC", "Instagram", "Retargeting"] },
    { campaign: "Pre-Summer Sports Prep", timing: "Launch late April", offer: "Sports performance + injury prevention", channels: ["Instagram", "Facebook sports groups", "Google PPC"] },
    { campaign: "Back-to-School", timing: "Launch late July", offer: "Backpack posture + pediatric chiropractic", channels: ["Facebook parent groups", "Google PPC"] },
    { campaign: "Winter Injury Season", timing: "Always-on (Dec–Feb)", offer: "Slip-and-fall + shoveling injuries", channels: ["Google PPC emergency", "Google LSA"] },
    { campaign: "Patient Recall", timing: "Automated (Year-round)", offer: "Post-discharge wellness enrollment", channels: ["SMS + email at 30/60/90 days post-discharge"] },
  ],
  pastClientWorkflows: [
    { title: "Annual Check-In", description: "Automated annual wellness check-in sent 11 months after last visit — prompting patients who haven't been in for maintenance care to schedule a reassessment, with direct booking link.", icon: Calendar },
    { title: "Re-engagement Campaign", description: "Patients inactive for 12+ months receive an automated 'Your spine doesn't take a year off' reactivation campaign with a returning patient offer and a one-click booking link.", icon: RefreshCw },
  ],

  // ── Reputation (Prompt 18 — Section D) ──
  reputationHeadline: "We Handle Your Chiropractic Practice",
  reputationHighlight: "Reputation",
  reputationSubheadline: "Turn every satisfied patient into a 5-star review and a referral source.",
  reputationBullets: [
    "84% of patients check online reviews before choosing a chiropractor — your rating is your first impression — rater8, 2025",
    "40% of patients have abandoned a booking due to negative reviews — rater8, 2025. Every unaddressed review is a lost appointment.",
    "Google reviews directly impact your Map Pack ranking — recency and volume both matter",
    "Automated review requests sent after every completed appointment",
    "Monitor all platforms: Google, Yelp, Healthgrades, Zocdoc",
    "Respond to every review with professional templates that demonstrate patient-first care",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Treatment Episode Complete", description: "Patient marked as discharged or milestone reached in CRM" },
    { step: "2", title: "Happiness Check", description: "Automated SMS: 'How are you feeling after your treatment with us?'" },
    { step: "3", title: "If Positive", description: "Direct link to Google review page sent immediately" },
    { step: "4", title: "If Neutral/Negative", description: "Private feedback form to address concerns before they go public" },
    { step: "5", title: "Positive Review Submitted", description: "Auto thank-you + referral program invitation" },
  ],
  giftCardUseCases: "Patient referral reward programs, corporate wellness partnerships, employee health benefits packages, and holiday gifting for loyal long-term patients.",
  giftAndReferralPrograms: [
    { title: "Gift Cards", description: "Corporate wellness partnerships, employee health benefits, and holiday gifting for loyal patients.", icon: Gift, features: ["Online gift card store", "Custom denominations", "Automated delivery", "Usage tracking"] },
    { title: "Referral Tracking", description: "Know exactly who referred each new patient. Track referral sources automatically in your CRM.", icon: UserPlus, features: ["Unique referral links", "Referral source tagging", "Thank-you automation", "Reward tracking"] },
    { title: "Referral Rewards", description: "Incentivize referrals with service credits, discounts, or priority scheduling. Automate reward delivery.", icon: DollarSign, features: ["Automatic reward triggers", "Credit bank system", "Thank-you emails", "Referral leaderboard"] },
  ],

  // ── AI Voice & Chat ──
  aiVoiceChatSectionHeadline: "We Power Your Chiropractic Practice",
  aiVoiceChatHighlight: "Around the Clock — 24/7",
  aiVoiceChatSubheadline: "Never miss a new patient inquiry — AI captures and books appointments at any hour, including after-hours pain emergencies.",
  aiFeatures: [
    {
      title: "24/7 AI Receptionist",
      description: "Never miss a new patient inquiry again. AI answers calls in your brand voice, checks your calendar, qualifies leads, and routes urgent pain cases directly to your emergency line — even at 10pm.",
      icon: Phone,
      features: ["Answers calls in your brand voice", "Checks calendar availability in real-time", "Books new patient appointments", "Routes urgent pain cases to emergency line", "Sends confirmation texts/emails"],
      color: "violet",
    },
    {
      title: "Conversational AI Chat",
      description: "Intelligent chatbot that engages website visitors, answers FAQs about conditions treated, insurance, and availability, and captures leads across all channels.",
      icon: MessageSquare,
      features: ["Website live chat widget", "SMS two-way conversations", "Facebook Messenger integration", "Lead qualification & capture", "After-hours lead collection"],
      color: "cyan",
    },
  ],

  // ── Why Choose Us (Prompt 19 — Part 1) ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for Chiropractic Marketing",
  whyChooseUsSubtitle: "Your Chiropractic Marketing Partner",
  whyChooseUsBody: "We understand chiropractic practice dynamics — the mix of acute and wellness patients, the referral dependency risk, and the retention economics that make or break a practice.",
  whyChooseUsCards: [
    { title: "Chiropractic Practice Specialists", description: "We focus on health and wellness practices: chiropractic, med spa, dental. We understand acute vs. wellness patient acquisition dynamics, care plan conversions, and the trust signals that move patients from inquiry to table.", icon: Activity },
    { title: "All Three Patient Types", description: "Our campaigns are built for acute pain patients, long-term wellness patients, and personal injury cases. Most chiropractic marketing agencies build for one. We build for all three simultaneously.", icon: Target },
    { title: "24/7 New Patient Capture", description: "Your AI Receptionist captures new patient inquiries at 10pm, qualifies them, and books appointments before your front desk arrives in the morning.", icon: Phone },
    { title: "Retention-First Strategy", description: "Wellness plan enrollment is built into every patient touchpoint — not an afterthought. We systematically convert acute care patients into long-term wellness relationships that multiply your lifetime patient value.", icon: RefreshCw },
    { title: "Referral Independence", description: "We help practices reduce dependency on physician and attorney referrals by building a direct digital acquisition channel that generates exclusive patient inquiries you own.", icon: Shield },
    { title: "Verified Case Study Results", description: "Verified case study results available for chiropractic practices. Schedule a call to review the actual campaign data and metrics.", icon: BarChart3 },
  ],

  // ── FAQ (Prompt 19 — Part 2) ──
  faqHeadline: "Chiropractic Practice Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to rank on Google for chiropractic searches in my area?", answer: "Most chiropractic practices see measurable ranking improvements within 3–6 months for local and long-tail terms, with competitive terms like \"chiropractor near me\" typically taking 6–9 months in contested markets.\n\nTimeline depends on your starting domain authority, local competition, and how consistently new condition-specific content and citations are built. Acute pain searches like \"back pain doctor [city]\" often rank faster because competitor pages are thinner on the long-tail variants.\n\nPersonal injury and auto accident keywords often have the fastest ranking path — most chiropractic practices ignore this segment entirely, creating genuine low-competition opportunity with high per-patient value." },
        { question: "Do I need separate pages for each condition I treat?", answer: "Yes — each high-value condition needs its own dedicated page. A single \"Services\" page cannot rank simultaneously for \"sciatica chiropractor [city],\" \"auto accident chiropractor near me,\" \"prenatal chiropractic [city],\" and \"back pain doctor [city].\"\n\nPractices with dedicated pages for back pain, sciatica, sports injuries, headaches, prenatal care, and PI cases consistently outrank those consolidating conditions, because each page builds independent relevance signals and backlink targets.\n\nCondition page depth matters more than count — each page needs 1,000–2,000 words covering the condition, how chiropractic addresses it, care plan expectations, and patient outcome signals." },
        { question: "How do Google reviews affect my chiropractic practice's local ranking?", answer: "Google reviews are a direct ranking factor for local pack and Maps results — a practice with consistent recent reviews at 4.8+ stars outranks practices with older or fewer reviews in competitive markets.\n\n— rater8, 2025: 84% of patients check reviews before choosing a healthcare provider.\n\nReview velocity signals active practice status to Google. Review content also matters — patients mentioning \"sciatica\" or \"auto accident\" help your practice surface for those exact searches. Chiropractic patients are particularly review-sensitive because they're trusting you with physical pain management." },
        { question: "What's the difference between local SEO and regular SEO for chiropractors?", answer: "Local SEO targets patients with geographic intent — \"chiropractor near me,\" \"back pain doctor [city]\" — through Google Business Profile, Map Pack rankings, and local citations. Regular SEO targets informational and condition intent — \"how many chiropractic sessions for sciatica,\" \"is chiropractic safe during pregnancy.\"\n\nBoth are necessary. Local SEO captures the acute pain patient who has already decided to book. Regular SEO captures the research-phase patient comparing care options before they're ready.\n\nPI and auto accident cases have a hybrid profile — they use both local and informational search. A comprehensive strategy addresses all three tracks simultaneously." },
        { question: "How do you optimize my Google Business Profile for my chiropractic practice?", answer: "We audit and optimize every GBP element: primary and secondary category selection, service area configuration, condition-specific service listings, photo volume and quality, Q&A population, and weekly posting cadence for Map Pack freshness signals.\n\nAdding \"Sports Chiropractor\" or \"Prenatal Chiropractor\" as secondary categories unlocks Map Pack visibility for those specific searches immediately. We install GBP heatmap tracking so you see exactly where your practice surfaces across your service area.\n\nGBP optimization is not a one-time setup. Weekly posts, responding to every review, and updating service information seasonally all contribute to sustained Map Pack positioning." },
        { question: "Can you help me rank for personal injury and auto accident chiropractic searches?", answer: "Yes — and PI/auto accident searches represent one of the highest-value, most underserved keyword clusters in chiropractic. Most practices ignore this segment entirely.\n\nRanking requires dedicated landing pages covering the PI patient journey — documentation requirements, billing with PI attorneys, lien-based treatment, and what to expect from the process.\n\nPI SEO is a relationship-building exercise as much as a search exercise. Practices that become the trusted provider cited by local PI attorneys see compounding referral growth that paid ads cannot replicate." },
        { question: "How does AI search (ChatGPT, Gemini) affect chiropractic patient discovery?", answer: "31% of patients now use generative AI tools to research healthcare providers before booking — rater8, 2025. When patients ask ChatGPT \"best chiropractor for sciatica near me?\" AI platforms pull from your indexed content, GBP data, and review platforms.\n\nPractices with strong review volume and recency, and structured condition-specific content are most likely to appear in AI answers. We track your AI citation share across 6 platforms.\n\n73% of patients adopted new healthcare research behaviors in the past year — rater8, 2025. Chiropractic patients who ask AI tools for provider recommendations are often in the early research phase — a practice that appears in AI answers gets the first-impression advantage before the patient ever visits Google." },
        { question: "Will SEO work for my chiropractic practice in a highly competitive market?", answer: "Yes — and competitive markets are exactly where a systematic SEO strategy creates the largest advantage, because most practices rely on referrals or paid ads and leave organic search share unclaimed.\n\nThe chiropractic marketing keyword cluster has a KD of 21–32 — the lowest difficulty in the Health & Wellness set. Most SERP competitors are thin pages under 1,500 words. A properly built 2,500-word page with genuine condition depth is the most competitive page in this SERP the moment it goes live.\n\nWe start with PI and long-tail condition terms where your domain authority gives you the fastest path to page one, then expand into more competitive \"chiropractor near me\" positions." },
        { question: "Do you create condition-specific content for my chiropractic practice?", answer: "Yes — condition-specific content is the core of our chiropractic SEO strategy. We build content that answers the specific questions patients search at every stage of their care decision.\n\nCondition content ranks for informational searches — \"how many adjustments for sciatica,\" \"chiropractic for herniated disc vs surgery,\" \"is it safe to see a chiropractor during pregnancy.\" Every article passes a six-dimension quality scoring process before publication.\n\nWe don't publish generic spine health articles. Every piece is built around your specific conditions, service area, and competitive positioning." },
        { question: "How do you track and report SEO results for chiropractic practices?", answer: "Monthly reporting covers keyword ranking movement across your full condition and local term set, Google Business Profile performance, organic traffic trends by landing page, and new patient inquiry source attribution — which keywords and pages are generating actual form submissions and calls.\n\nWe tie SEO activity directly to practice outcomes. You see which condition pages drive new patient inquiries, which GBP categories generate Map Pack clicks, and how your review velocity affects your local rank.\n\nFor PI practices, we additionally track which PI-specific pages and keywords generate attorney-referred patient inquiries — a separate value profile from direct patient searches." },
      ],
    },
    {
      id: "paid-media", label: "Paid Media", icon: Megaphone, color: "rose",
      faqs: [
        { question: "Should chiropractic practices use Google Ads or Google LSA?", answer: "Both work well for different purposes. LSA with Google Guaranteed badge excels for emergency pain searches. PPC allows more targeting flexibility for wellness, new patient, and PI campaigns. Most practices benefit from running both." },
        { question: "How much should a chiropractic practice spend on Google Ads?", answer: "Most chiropractic practices see strong results starting at $1,500–3,000/month for Google PPC + LSA combined. Budget scales with market size and patient type targeting." },
        { question: "Do Facebook ads work for chiropractic new patient acquisition?", answer: "Facebook excels at wellness care campaigns, new patient offers to local audiences, and retargeting website visitors. It's less effective for acute pain (those patients go to Google first) but great for brand building and prevention content." },
        { question: "How do you advertise personal injury chiropractic services?", answer: "We build dedicated PI campaigns with Google PPC targeting auto accident and injury keywords, PI-specific landing pages, and retargeting sequences. These campaigns have higher CPL but significantly higher case value." },
        { question: "What landing pages do you build for chiropractic ad campaigns?", answer: "Every campaign gets a dedicated landing page optimized for conversion — condition-specific content, trust signals, clear CTA, and mobile-optimized design. PI campaigns get separate landing pages emphasizing lien acceptance and same-day evaluation." },
        { question: "How do you track which ads generate actual booked appointments?", answer: "We use call tracking with unique numbers per campaign, form submission tracking, and CRM integration to attribute every new patient back to the specific ad, keyword, and landing page that drove them." },
        { question: "What's a realistic cost-per-new-patient for chiropractic Google Ads?", answer: "In most markets, chiropractic Google Ads generate leads at $25–75 per new patient inquiry. PI leads tend to cost more but have significantly higher lifetime value." },
        { question: "Can you run seasonal campaigns for chiropractic practices?", answer: "Yes — we pre-build seasonal campaigns for New Year health goals, spring sports injuries, back-to-school posture, and winter slip-and-fall season. Budgets ramp before each seasonal demand spike." },
      ],
    },
    {
      id: "marketing-automation", label: "Marketing Automation", icon: RefreshCw, color: "amber",
      faqs: [
        { question: "How does automated follow-up work for new chiropractic patient inquiries?", answer: "When a patient submits a form or calls, they automatically enter a 5-day email and SMS sequence with condition education, doctor credentials, testimonials, and booking prompts — converting researchers into scheduled patients." },
        { question: "Can you automate recall reminders for patients who've finished their care plan?", answer: "Yes — patients who complete their acute care plan receive automated recall reminders at 30, 60, and 90 days, plus wellness care enrollment campaigns encouraging maintenance visits." },
        { question: "How do you set up post-treatment review request automation?", answer: "After every completed treatment episode, the system sends a happiness check via SMS. Positive responses get a direct Google review link. Neutral or negative responses are routed to a private feedback form." },
        { question: "What's a typical booking rate from automated chiropractic follow-up sequences?", answer: "Our chiropractic clients typically see 25–35% booking rates from automated follow-up sequences — significantly higher than industry average where most inquiries receive no systematic follow-up." },
        { question: "Can automation send wellness care enrollment campaigns to discharged patients?", answer: "Absolutely. Patients who complete acute care automatically enter a wellness enrollment sequence within 30 days of discharge — the highest conversion window for maintenance plan sign-ups." },
        { question: "How do you reactivate patients who haven't visited in 12+ months?", answer: "Dormant patients receive an automated 'Your spine doesn't take a year off' reactivation campaign with a returning patient offer and one-click booking link — recovering patients at zero acquisition cost." },
        { question: "Can the system send condition-specific content based on patient diagnosis?", answer: "Yes — our CRM tags patients by primary condition (back pain, neck pain, sciatica, PI) and sends relevant educational content, wellness tips, and condition-specific follow-up throughout their care journey." },
        { question: "Does your CRM integrate with ChiroTouch, Jane App, or other chiropractic software?", answer: "We integrate with most popular chiropractic practice management systems through API connections and Zapier. This ensures patient data flows seamlessly between your clinical software and marketing platform." },
      ],
    },
    {
      id: "ai-receptionist", label: "AI Receptionist", icon: Bot, color: "sky",
      faqs: [
        { question: "How does the AI Receptionist handle after-hours new patient inquiries?", answer: "The AI answers every call and chat message 24/7 — answering questions about conditions treated, insurance acceptance, and availability, then booking appointments directly into your schedule." },
        { question: "Can the AI Receptionist book new patient appointments directly?", answer: "Yes — it integrates with your scheduling system to check real-time availability and book new patient appointments without any manual intervention from your team." },
        { question: "How does the AI handle questions about insurance and billing?", answer: "The AI is trained on your accepted insurance plans, cash-pay options, and PI billing processes. It provides accurate information and can qualify patients by insurance type before booking." },
        { question: "What happens when a patient has an urgent pain emergency after hours?", answer: "The AI identifies emergency keywords (severe pain, unable to move, auto accident) and can route urgent cases to your on-call line while collecting key details for immediate follow-up." },
        { question: "Can I customize the AI Receptionist's responses for my practice?", answer: "Absolutely. We train the AI on your specific conditions treated, treatment philosophy, insurance policies, and brand voice to ensure every interaction feels authentic to your practice." },
        { question: "How does the AI qualify new patients before routing to my team?", answer: "The AI asks qualification questions about primary complaint, injury type, insurance, and preferred appointment time — ensuring your front desk only handles pre-qualified, ready-to-book patients." },
        { question: "What's the setup time for the chiropractic AI Receptionist?", answer: "We handle all scripting, training, and integration. Most chiropractic practices are fully live within 1–2 weeks, including calendar integration and emergency routing setup." },
        { question: "Will patients know they're talking to an AI?", answer: "Modern voice AI sounds remarkably natural. We customize tone, pacing, and personality to match your practice. Most callers don't realize they're speaking with AI — they just know their call was answered immediately." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "Have more questions about Chiropractic Marketing?",
    body: "Get a personalized demo of our SEO, patient acquisition, and practice automation platform. Let's build a practice full of patients who return and refer.",
    signoff: "— The GrowSmallBiz Team",
  },

  // ── Contact ──
  contactSectionHeadline: "Get Your Custom Chiropractic Growth Strategy",
  contactSectionBody: "Tell us about your chiropractic practice and the patients you want to attract. We'll review your inquiry and follow up with a clear next step — including a demo of the system if that would be helpful.",

  // ── Sticky CTA ──
  stickyCtaConfig: {
    title: "Ready for Chiropractic Marketing That Fills Your Schedule?",
    description: "Let's build a custom growth strategy to attract new patients, automate follow-up, and turn acute-care visits into long-term wellness relationships.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Fills", "Your", "Schedule"],
    showAfterScroll: 60,
  },

  // ── Case Study Links ──
  caseStudyLinks: [
    {
      title: "Chiropractic SEO Case Study",
      description: "How we helped a chiropractic clinic grow organic visibility and patient appointments with AI-powered SEO.",
      url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/",
      icon: Search,
    },
  ],

  // ── Config-driven text overrides (Fix A: 7 instances) ──
  seoCompetitorBullets: [
    { bold: "Competitor keyword gap analysis", desc: "we identify which back pain, sciatica, sports injury, and PI terms your top competitors rank for that you don't" },
    { bold: "Backlink profile comparison", desc: "we find authoritative health and chiropractic publications linking to competitors and target the same sources" },
    { bold: "Content gap identification", desc: "we find the service and location pages driving competitor traffic that you're missing" },
    { bold: "Local pack positioning tactics", desc: "we analyze competitor GBP profiles, review velocity, and citation consistency to build a plan to outrank them in the Map Pack" },
  ],
  seoContentAuthorityStatement: "We Don't Publish Bulk AI Blogs. We Build Chiropractic Authority.",
  seoTopicalMapBody: "A topical map ensures Google sees your site as a complete authority on chiropractic care — not just a collection of random pages. We identify every topic cluster your ideal patients search across all treatment categories, then systematically build the content that covers it.",
  topicMapCenterLine1: "Chiropractic Practice",
  topicMapCenterLine2: "Authority",
  topicMapSpokes: [
    "Back Pain & Spine",
    "Sports Injury & Rehabilitation",
    "Auto Accident & Personal Injury",
    "Prenatal & Pediatric",
    "Wellness & Preventive Care",
    "Headaches & Migraines",
    "Neck Pain & Posture",
  ],

  // ── Config-driven text overrides (Fix B: 6 instances) ──
  contentScoreLabel: "Chiropractic Content Quality Score",
  contentScoreCaption: "Sample score for a GrowSmallBiz-managed chiropractic content article. All content must pass minimum thresholds across all six dimensions before publication.",
  seoContentThirdCardBody: "Content is structured for Google rankings and AI citation — so when a patient asks ChatGPT, Perplexity, or Google AI which chiropractic practice to call, your practice is the answer.",
  seoAiVisibilityHeading: "We Get Your Chiropractic Practice Recommended by AI Search Engines",
  seoAiVisibilityBody1: "GrowSmallBiz tracks how AI platforms recommend your chiropractic practice across 6 major AI search engines — including ChatGPT, Gemini, Perplexity, Grok, Copilot, and Google AI Mode.",
  seoAiVisibilityBody2: "When a patient asks an AI assistant 'what's the best chiropractor for back pain near me?' or 'which chiropractor handles auto accident cases in [city]?' — we make sure your practice is the answer.",

  // ── Config-driven text overrides (Fix C: 2 instances) ──
  paidMediaSetupBullets: [
    "Google Ads account setup and campaign structure",
    "Keyword research for chiropractic search terms — acute pain, wellness, sports injury, and PI segments",
    "Google Local Services Ads (LSA) setup and Google Guarantee verification",
    "Conversion tracking from click to call to booked appointment",
    "Seasonal campaign calendar with pre-peak budget ramps",
    "Service-specific landing page optimization",
    "Ad creative copywriting for emergency and seasonal intent",
    "Monthly performance reporting and optimization",
  ],
  retargetingDisplayLine: "SEO helps your chiropractic practice show up",
  retargetingDisplaySubline: "when someone is actively searching for relief.",
  retargetingStep1Desc: "Search for a chiropractor, like what they see",

  // ── Additional overrides ──
  reputationInnerH3: "We Handle Your Chiropractic Practice Reputation",
  growthSystemDisconnectedToolsBody: "Most chiropractic practices use separate tools for new patient capture, appointment booking, recall management, and follow-up. These tools don't talk to each other — leads fall through the cracks.",
  marketingCampaignsHighlight: "We Build for Your Chiropractic Practice",
  seasonalCampaignsHeading: "We Automate for Your Chiropractic Practice",
};
