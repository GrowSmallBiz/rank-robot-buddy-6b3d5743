import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Search, TrendingUp, Users, Target, Calendar,
  Bot, Clock, MessageSquare, Phone, Zap,
  Gift, RefreshCw, Mail, CalendarCheck,
  Eye, Megaphone, Shield, MapPin,
  AlertTriangle, DollarSign, Globe,
  Star, BarChart3, Facebook, Instagram,
  Sparkles, UserPlus, Heart, Stethoscope,
} from "lucide-react";

import dentalHeroImage from "@/assets/industry-dental-hero.webp";
import portfolioDentalWebsite from "@/assets/portfolio-dental-website.webp";

export const dentalConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "Dental Marketing for Dental Practices | GrowSmallBiz",
  metaDescription: "Attract new patients: AI-powered marketing for US dentists. Get AI SEO, AI Optimized Google Ads, and 24/7 AI Marketing Automation. Contact us.",
  canonicalUrl: "/health-and-wellness-practices/marketing-for-dentists/",
  serviceName: "Dental Marketing Services",
  serviceType: "Digital Marketing for Dental Practices",
  serviceDescription: "AI-powered SEO, Google Ads, reputation management, and marketing automation for dental practices.",
  breadcrumbs: [
    { name: "Health & Wellness Practices", url: "/health-and-wellness-practices/" },
    { name: "Dental Marketing", url: "/health-and-wellness-practices/marketing-for-dentists/" },
  ],
  offerCatalog: {
    name: "Dental Marketing Services",
    items: [
      { name: "Local SEO & Google Business Profile" },
      { name: "Conversion-Focused Website Design" },
      { name: "Google Ads (LSA + PPC) & Meta Ads" },
      { name: "Reputation Management" },
      { name: "AI Receptionist & 24/7 Patient Capture" },
      { name: "Patient Nurture & Recall Automation" },
    ],
  },

  // ── Hero ──
  heroImage: dentalHeroImage,
  badgeText: "Dental Practice Marketing & Growth System",
  badgeIcon: Stethoscope,
  h1Line1: "Dental Marketing",
  h1Line2: "That Fills Your Chair with",
  h1Highlight: "High-Value Patients",
  heroSubheadline: "Stop competing on price and insurance networks. AI-powered SEO, Google Ads, and automated patient acquisition built for dental practices.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaAnchor: "#on-this-page",
  statsBar: [
    { value: "3–6 mo", label: "To reach Google top rankings for dental searches" },
    { value: "5 min", label: "AI response speed to every new patient inquiry" },
    { value: "24/7", label: "AI Receptionist coverage for after-hours appointment requests" },
    { value: "15–25%", label: "Improved patient booking rate with paid ads" },
  ],

  // ── Pain Points ──
  painPointsHeadline: "Dental Practice Marketing Challenges",
  painPointsSubheadline: "Even the most skilled dentists struggle to consistently attract the right patients. If any of these sound familiar, your marketing infrastructure needs attention.",
  painPoints: [
    {
      icon: Search,
      title: "Invisible in Local Search",
      description: "Patients searching 'dentist near me' or 'cosmetic dentist [city]' find your competitors first — even if your clinical quality is superior.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "Insurance Network Dependency",
      description: "Relying on insurance networks and discount directories limits your patient mix and reduces your per-patient revenue — attracting price-shoppers instead of value-seekers.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Phone,
      title: "Missed After-Hours Inquiries",
      description: "Most dental searches happen outside office hours. If your website can't capture and respond to those inquiries immediately, patients book with whoever responds first.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Star,
      title: "Low Review Volume",
      description: "84% of patients check online reviews before choosing a dentist — rater8, 2025. Without a consistent review generation system, even your best work stays invisible.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Target,
      title: "No High-Value Service Visibility",
      description: "General dentistry keeps the chair filled, but implants, veneers, and cosmetic work drive your highest revenue per patient. Most practices have no strategy to attract these cases.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Users,
      title: "Referral Dependency",
      description: "Word-of-mouth is great — until it isn't. Without a predictable digital acquisition system, your new patient flow is unpredictable and outside your control.",
      hasImage: false, showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of hoping patients find you, imagine a predictable system that attracts, nurtures, and books new patients automatically — while you focus on clinical care.",

  // ── System Diagram ──
  systemDiagramHeadline: "GrowSmallBiz Predictable Marketing System",
  systemDiagramBody: "A complete patient acquisition engine that attracts new patients through search, converts inquiries into booked appointments automatically, and turns one-time patients into loyal, high-value relationships — including cosmetic treatment plan referrals and recall system automation.",

  // ── CTAs ──
  ctaAfterPainPoints: {
    headline: "Ready for Dental Marketing That Fills Your Schedule With the Right Patients?",
    subtext: "Let's build a custom dental growth strategy to attract high-value patients and reduce insurance dependency.",
    primaryLabel: "Get Your Free Strategy Session",
    secondaryLabel: "Call +1 (925) 886-3724",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free Dental SEO Visibility Audit",
    subtext: "Find out exactly where your dental practice appears in local search results and how patients are finding you.",
    primaryLabel: "Get SEO Visibility Report",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See Your Dental Practice Running on Autopilot",
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

  // ── Website Design ──
  websiteDesignBadge: "Dental Practice Websites",
  websiteDesignHeadline: "Dental Websites That Convert",
  websiteDesignHighlight: "Visitors Into Booked Appointments",
  websiteDesignSubheadline: "Fast, patient-friendly dental websites built to generate new patient inquiries and showcase your full range of services.",
  websiteDesignImage: portfolioDentalWebsite,
  websiteDesignFeatureHeadline: "Dental Websites Built to Win the New Patient Decision",
  websiteDesignFeatureBody: "A patient researching a new dentist visits your website with a simple question: can I trust this practice? We build dental websites that answer that question immediately — with professional imagery, clear service pages for every treatment, patient reviews front and center, and an easy path to book an appointment from any device.",
  websiteDesignBullets: [
    "Online appointment request forms — 24/7 new patient booking capability",
    "Service pages for every treatment: general, cosmetic, implants, ortho, emergency",
    "Trust signals: credentials, before/after galleries, Google reviews integration",
    "Mobile-first design — 70%+ of dental searches happen on mobile",
    "Patient forms and intake paperwork available online",
    "Insurance and financing information page",
    "Fast load times — under 2 seconds for mobile visitors",
    "Blog and content hub for local SEO and patient education",
  ],
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search Is Now Influencing Patient Decisions.",
  aiSearchCalloutBody: "Patients are asking ChatGPT and Gemini 'who's the best dentist near me for implants?' before they open Google. Your competitor may already be showing up in those AI recommendations — even if you rank well on traditional search.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
    { value: "73%", label: "of patients adopted new healthcare research behaviors in the past year — rater8, 2025" },
  ],

  // ── Conversational AI Queries (GEO) ──
  conversationalAiQueries: [
    "Which dentist near me is accepting new patients?",
    "Best dentist for dental implants in [city] — reviews 2025",
    "Is Invisalign better than braces for adults?",
    "How much do veneers cost at a dentist near me?",
    "Emergency dentist open on weekends in [city]",
    "Which cosmetic dentist has the best before and after results?",
    "What's the difference between a dental crown and a veneer?",
  ],

  // ── AEO Entity Block ──
  aeoEntityBlock: [
    {
      badge: "WHAT IS IT",
      title: "What is dental marketing?",
      body: "Dental marketing encompasses the digital strategies and systems a dental practice uses to attract new patients, rank in local search results, build online reputation, and convert inquiries into booked appointments. It includes SEO, paid advertising, social media management, and patient communication automation.",
    },
    {
      badge: "WHO IT SERVES",
      title: "Who does dental marketing serve?",
      body: "Dental marketing serves general dentistry practices, cosmetic dental specialists, dental implant providers, Invisalign and orthodontic practices, pediatric dentists, and multi-location dental groups seeking to reduce insurance dependency and grow their private-pay patient base.",
    },
    {
      badge: "WHAT WE DO",
      title: "What does GrowSmallBiz do for dental practices?",
      body: "GrowSmallBiz builds complete dental patient acquisition systems — combining conversion-focused practice websites, AI-powered SEO optimized for Google and AI search platforms, Google and Meta paid advertising, social media strategy, and an AI Client Growth System that automates patient follow-up, recall management, and reputation generation.",
    },
  ],

  // ── SEO ──
  seoBadge: "Dental SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "Dental Practices",
  seoSubheadline: "Comprehensive search engine optimization designed for dental practices — from general family dentistry to high-value cosmetic and implant services.",
  seoEditorialHeadline: "Why Dental SEO Works",
  seoEditorialHighlight: "Differently Than Other Healthcare Marketing",
  seoEditorialBody: [
    "Dental is a mixed-intent search category — and that mix matters.",
    "Some patients are in genuine distress: a broken tooth, a toothache that kept them up all night, a lost crown before a wedding. These are high-urgency searches — 'emergency dentist near me' or 'same-day dental appointment [city]' — where the decision happens in under two minutes and goes to whoever appears first with strong reviews.",
    "Other patients are in planning mode: researching implant options, comparing Invisalign providers, or finally deciding to address that cosmetic concern they've been putting off. These searches have higher lifetime patient value but require more trust-building — longer content, before/after galleries, and patient education content.",
    "This dual-intent dynamic means your SEO strategy must work on two tracks simultaneously. Local SEO and Google Business Profile optimization wins emergency cases. Service-specific content authority and topical depth wins high-value cosmetic and specialty cases.",
    "Our approach integrates all of it: emergency local visibility, high-value service page authority, AI search citation building, and reputation management — all working together as a single patient acquisition system.",
  ],
  seoEditorialPullQuote: "A practice with 40 reviews at 4.9 stars consistently outranks a practice with 200 reviews at 4.6 stars in competitive markets. Reputation management is not separate from SEO — it's part of it.",
  seoKeywordCategories: {
    general: {
      label: "General & Family Dentistry", icon: Stethoscope,
      image: dentalHeroImage,
      keywords: [
        "dentist near me",
        "family dentist [city]",
        "dental checkup [city]",
        "teeth cleaning near me",
        "dentist accepting new patients [city]",
        "kids dentist [city]",
      ],
      competitors: "Multi-location DSOs, insurance-network dental directories, individual family practices",
    },
    cosmetic: {
      label: "Cosmetic Dentistry", icon: Sparkles,
      image: portfolioDentalWebsite,
      keywords: [
        "cosmetic dentist [city]",
        "dental implants [city]",
        "teeth whitening near me",
        "veneers dentist [city]",
        "Invisalign provider [city]",
        "smile makeover [city]",
      ],
      competitors: "Cosmetic dental specialists, Invisalign Premier Providers, DSO cosmetic centers, Yelp cosmetic dental listings",
    },
    emergency: {
      label: "Emergency & Specialty", icon: AlertTriangle,
      image: dentalHeroImage,
      keywords: [
        "emergency dentist near me",
        "same day dental appointment [city]",
        "toothache dentist [city]",
        "broken tooth repair near me",
        "wisdom tooth removal [city]",
        "root canal dentist [city]",
      ],
      competitors: "24-hour emergency dental chains, urgent care dental, hospital dental departments",
    },
  },

  // ── Paid Media ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "Dental Practices",
  paidMediaSubheadline: "Strategic ad platform recommendations by patient type — emergency cases, cosmetic inquiries, and new patient acquisition.",
  adCreatives: [
    {
      id: "emergency",
      genre: "Emergency Cases",
      image: dentalHeroImage,
      platforms: ["Google PPC", "Google LSA"],
      description: "High-urgency creative for toothache, broken tooth, lost crown emergencies. Same-day availability, prominent phone number.",
    },
    {
      id: "cosmetic",
      genre: "High-Value Cosmetic",
      image: portfolioDentalWebsite,
      platforms: ["Google PPC", "Meta/Instagram"],
      description: "Before/after focused creative targeting patients researching implants, veneers, or smile makeovers. Trust-forward with financing options.",
    },
    {
      id: "new-patient",
      genre: "New Patient Acquisition",
      image: dentalHeroImage,
      platforms: ["Meta/Facebook", "Google Display"],
      description: "New patient special offer — cleaning, exam, and X-rays. Targeted to adults who haven't seen a dentist in 12+ months.",
    },
  ],
  paidMediaByGenre: [
    {
      genre: "General & Family Dentistry", icon: Stethoscope,
      primary: [
        { name: "Google PPC + Google LSA", reason: "70-80% of budget — highest-intent 'dentist near me' and new patient searches." },
        { name: "Meta/Facebook", reason: "New patient offers to local homeowners, retargeting past website visitors." },
      ],
      secondary: [
        { name: "Nextdoor", reason: "Hyperlocal trust building for neighborhood patient acquisition." },
      ],
      color: "blue",
    },
    {
      genre: "Cosmetic Dentistry", icon: Sparkles,
      primary: [
        { name: "Google PPC", reason: "Capture active cosmetic research searches — implants, veneers, whitening, Invisalign." },
        { name: "Meta/Instagram", reason: "Visual platform ideal for before/after content and cosmetic awareness campaigns." },
      ],
      secondary: [
        { name: "Pinterest", reason: "Smile inspiration boards reaching aspirational cosmetic audiences." },
      ],
      color: "emerald",
    },
    {
      genre: "Emergency Dental", icon: AlertTriangle,
      primary: [
        { name: "Google PPC (call-only ads)", reason: "Emergency keyword campaigns with location extensions — highest urgency conversion intent." },
        { name: "Google LSA", reason: "Google Guaranteed badge builds instant trust for emergency searchers." },
      ],
      secondary: [
        { name: "Google Posts", reason: "Real-time availability updates during peak emergency windows." },
      ],
      color: "red",
    },
  ],
  metaAdSetupHeadline: "How We Help Dental Practices with Meta Ad Setup",
  metaAdSetupSubheadline: "Facebook and Instagram ads reach patients before they need urgent dental care — building brand familiarity so when a dental need arises, your practice feels like the obvious choice. We build cosmetic awareness campaigns, new patient offer funnels, and retargeting sequences that keep your practice top-of-mind.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to patients who visited your site but didn't book.", icon: Facebook },
    { title: "Google Analytics & GTM", description: "Track your full patient journey, see which pages drive appointments, and manage all tracking codes centrally.", icon: BarChart3 },
    { title: "Call Tracking", description: "Know exactly which ad, keyword, or landing page generated each phone call and appointment booking.", icon: Phone },
  ],

  // ── Retargeting ──
  retargetingHeadline: "Be Found When They Search.",
  retargetingHighlight: "Be Remembered When They're Ready.",
  retargetingSubheadline: "SEO captures the emergency. Retargeting closes the cosmetic case.",
  retargetingBody: [
    "Cosmetic dental decisions take time. A patient researching implants today may not book for six months — they're comparing options, checking financing, asking their spouse.",
    "Retargeting keeps your practice visible across that entire consideration period. Your before/after imagery reappears on their Instagram. Your patient reviews show up on their Facebook feed. When they finally decide, your name is the one they trust. For emergency cases, retargeting catches patients who searched, visited your website, and didn't book — following up with a gentle prompt when their urgency resurfaces.",
  ],

  // ── Social Media ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for dental practices — by patient type and treatment category.",
  socialMediaByGenre: [
    {
      genre: "General & Family Dentistry",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Local community groups, neighborhood associations, parent groups — highest organic reach for family patient acquisition." },
        { name: "Instagram", icon: Instagram, strategy: "Team content, practice culture, patient education posts." },
      ],
      secondary: [
        { name: "Nextdoor", icon: MapPin, strategy: "Hyperlocal trust building for neighborhood patient acquisition." },
      ],
      color: "blue",
    },
    {
      genre: "Cosmetic Dentistry",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Before/after smile transformations, treatment process Reels, provider spotlights — visual platform for cosmetic results." },
        { name: "Facebook", icon: Facebook, strategy: "Cosmetic awareness campaigns, financing information, patient testimonials." },
      ],
      secondary: [
        { name: "YouTube", icon: Globe, strategy: "Treatment education videos, smile makeover journeys, patient stories." },
      ],
      color: "emerald",
    },
    {
      genre: "Patient Retention & Recall",
      primary: [
        { name: "Email/SMS", icon: Mail, strategy: "Recall reminders, insurance deadline notifications, treatment plan follow-ups — highest ROI retention channel." },
        { name: "Facebook", icon: Facebook, strategy: "Existing patient appreciation, practice updates, seasonal dental health tips." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Oral health tips, team celebrations, practice milestone content." },
      ],
      color: "amber",
    },
  ],
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ── AI Growth System ──
  growthSystemHeadline: "for Dental Practices",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop losing new patient inquiries to slow follow-up. Build an automated system that captures leads, books appointments, and turns one-time patients into long-term practice relationships.",
  clientJourneyStages: [
    {
      stage: "Awareness", icon: Eye,
      description: "Patients discover your practice through Google search, paid ads, AI recommendations, or social media. They're searching for a dentist, a specific treatment, or an emergency solution.",
      goal: "Be found at the moment of need — and before it",
      color: "blue",
    },
    {
      stage: "Prospect", icon: Target,
      description: "Visitors land on your website. They're checking your services, reading reviews, looking at your team, and evaluating whether to trust you with their dental care.",
      goal: "Build trust and make booking feel easy",
      color: "purple",
    },
    {
      stage: "Lead", icon: Mail,
      description: "They've submitted a new patient form, called, or messaged your AI chat. Speed of response determines whether they book with you or call the next practice on the list.",
      goal: "Respond within 5 minutes and nurture to confirmed appointment",
      color: "primary",
    },
    {
      stage: "Patient", icon: Stethoscope,
      description: "First appointment complete. This is where most practices stop — but where the real lifetime value begins. Recall systems, treatment plan follow-up, and cosmetic case nurture all start here.",
      goal: "Collect reviews, complete treatment plans, and enroll in recall",
      color: "emerald",
    },
    {
      stage: "Retain & Grow", icon: RefreshCw,
      description: "Loyal patients with active recall, referral programs, and cosmetic upsells. Your existing patient base is your highest-ROI marketing asset — and most practices systematically underinvest in it.",
      goal: "Turn every patient into a loyal relationship and referral source",
      color: "amber",
    },
  ],
  emailNurturePoints: [
    { title: "Speed-to-Lead", description: "AI Receptionist auto-responds to every inquiry within seconds — 24/7. Answers questions about insurance, availability, and services; books new patient appointments directly into your schedule.", icon: Zap },
    { title: "Automated Lead Nurturing", description: "5–7 touchpoints over 2–3 weeks with trust content, before/after examples, and financing information that moves patients from inquiry to booked appointment.", icon: Mail },
    { title: "Past Client Re-engagement", description: "Recall reminders, treatment plan re-engagement for unscheduled cases, and cosmetic upgrade prompts keep your existing patient base active and growing.", icon: RefreshCw },
  ],
  emailSequenceTitle: "New Patient Inquiry",
  emailSequenceHighlight: "Follow-Up Sequence",
  noShowResearchCitations: [
    { stat: "15–30% of dental appointments are missed — costing practices $150–$500+ per no-show", source: "Healthcare Research", publication: "PMC", year: "2016", label: "The Problem" },
    { stat: "98% of text messages are opened", source: "Industry Research", publication: "Mobile Marketing Association", year: "2023", label: "Why SMS Works" },
    { stat: "SMS reminders reduce no-shows by 38%", source: "Imperial College London", publication: "BMC Ophthalmology", year: "2008", label: "The Result" },
    { stat: "Reminder systems reduce lost-to-follow-up by 60%", source: "Cochrane Reviews", publication: "Systematic Review Meta-Analysis", year: "2016", label: "Long-Term Impact" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "New Patient First Appointment", icon: CalendarCheck, color: "blue",
      description: "Pre-appointment reminders for first-time dental patients",
      noShowImpact: "Missed first appointments waste chair time and delay patient acquisition",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Confirmation + what to bring (insurance card, ID, completed new patient forms)" },
        { timing: "1 day before", channels: ["Email"], content: "Reminder + directions, parking, practice contact number" },
        { timing: "2 hours before", channels: ["SMS"], content: "'Your first appointment is today at [time] — we look forward to seeing you'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Treatment Plan Appointment", icon: Stethoscope, color: "emerald",
      description: "Reminders for scheduled procedures and treatment plan visits",
      noShowImpact: "Missed treatment visits delay care completion and reduce plan acceptance",
      reminders: [
        { timing: "3 days before", channels: ["SMS", "Email"], content: "Procedure reminder + what to expect, any pre-appointment instructions (fasting, medication)" },
        { timing: "1 day before", channels: ["Email"], content: "Confirmation + emergency contact number if questions arise" },
        { timing: "Morning of", channels: ["SMS"], content: "'Your [procedure] appointment is today — see you at [time]'" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Recall / Hygiene Visit", icon: Calendar, color: "amber",
      description: "Reminders for routine cleaning and recall appointments",
      noShowImpact: "Missed recalls disrupt hygiene schedules and reduce patient retention",
      reminders: [
        { timing: "1 week before", channels: ["Email"], content: "Recall appointment reminder + link to update insurance if changed" },
        { timing: "2 days before", channels: ["SMS", "Email"], content: "Confirmation + reminder to complete any outstanding forms" },
        { timing: "Morning of", channels: ["SMS"], content: "'Your cleaning and exam is today at [time] — see you soon'" },
      ],
      expectedReduction: "Up to 60%",
    },
  ],
  marketingCampaigns: [
    {
      genre: "New Patient Special — General", icon: Stethoscope, color: "from-blue-500 to-cyan-500",
      offer: {
        headline: "New Patient Exam + Cleaning + X-rays",
        tagline: "Start your dental health journey",
        price: "$149",
        originalPrice: "$350+",
        savings: "Save $200+",
        includes: ["Comprehensive exam", "Full X-ray series", "Professional cleaning", "Treatment plan"],
        urgency: "Limited new patient slots per month",
        cta: "Book Now",
      },
      funnel: ["Google PPC / Meta → Landing Page", "Booking Form → Confirmation", "Nurture Sequence → Recall Enrollment"],
      topPlatforms: ["Google PPC", "Meta/Facebook"],
      seasonality: "Peak: January (New Year), September (back to school)",
    },
    {
      genre: "Cosmetic Consultation — Implants/Veneers", icon: Sparkles, color: "from-rose-500 to-pink-500",
      offer: {
        headline: "Free Smile Assessment Consultation",
        tagline: "See what's possible for your smile",
        price: "Free",
        originalPrice: "$150",
        savings: "Complimentary consultation",
        includes: ["30-minute consultation", "Digital smile preview", "Treatment options and pricing overview"],
        urgency: "Limited complimentary consultations per month",
        cta: "Book Consultation",
      },
      funnel: ["Google PPC / Instagram → Cosmetic Landing Page", "Form → AI follow-up sequence"],
      topPlatforms: ["Google PPC", "Instagram"],
      seasonality: "Year-round, peaks January and May (pre-summer)",
    },
    {
      genre: "Patient Recall & Reactivation", icon: RefreshCw, color: "from-emerald-500 to-teal-500",
      offer: {
        headline: "'We Miss You' — Overdue Recall Appointment",
        tagline: "Priority scheduling for returning patients",
        price: "Priority Rate",
        originalPrice: "",
        savings: "Priority scheduling",
        includes: ["Cleaning + exam", "Updated X-rays if due", "Updated treatment plan review"],
        urgency: "Limited recall availability for returning patients",
        cta: "Schedule Now",
      },
      funnel: ["Email/SMS to dormant patients → Recall booking page", "Confirmation → Re-engagement"],
      topPlatforms: ["Email", "SMS"],
      seasonality: "Peak: September–October (post-summer), January",
    },
  ],
  seasonalCampaigns: [
    { campaign: "January New Year Campaign", timing: "Launch first week Jan", offer: "New patient special", channels: ["Google PPC", "Facebook", "Email to lapsed patients"] },
    { campaign: "Spring Cosmetic Push", timing: "Launch mid-February", offer: "Free smile consultation", channels: ["Google PPC", "Instagram cosmetic ads", "Retargeting"] },
    { campaign: "Back-to-School", timing: "Launch late July", offer: "Kids checkups + new family patients", channels: ["Facebook parent groups", "Google PPC"] },
    { campaign: "Insurance Deadline", timing: "Launch October", offer: "'Use your benefits before they expire'", channels: ["Email to existing patients", "Google PPC"] },
    { campaign: "Patient Recall", timing: "Automated (Year-round)", offer: "Overdue recall reminder", channels: ["SMS + email sequence to patients 6+ months past due"] },
  ],
  pastClientWorkflows: [
    { title: "Recall Reminder", description: "Automated recall reminder 5.5 months after last cleaning — prompting patients to schedule before their 6-month window closes, with direct booking link.", icon: Calendar },
    { title: "Re-engagement Campaign", description: "Patients inactive for 18+ months receive an automated 'We miss you' campaign with a returning patient offer and a simple one-click booking link.", icon: RefreshCw },
  ],

  // ── Reputation ──
  reputationHeadline: "We Build Your Reputation",
  reputationHighlight: "— Automatically After Every Appointment",
  reputationSubheadline: "Turn every satisfied patient into a 5-star review and a referral source.",
  reputationBullets: [
    "84% of patients check online reviews before choosing a dentist — rater8, 2025. Your rating is your first impression",
    "40% of patients who left a negative review had cancelled a future booking — rater8, 2025",
    "Google reviews directly impact your Map Pack ranking — recency and volume both matter",
    "Automated review requests sent after every completed appointment",
    "Monitor all platforms: Google, Yelp, Healthgrades, Zocdoc",
    "Respond to every review with professional templates that demonstrate patient-first care",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Appointment Complete", description: "Patient marked as seen in system" },
    { step: "2", title: "Happiness Check", description: "Automated SMS: 'How was your visit today?'" },
    { step: "3", title: "If Positive", description: "Direct link to Google review page sent immediately" },
    { step: "4", title: "If Neutral/Negative", description: "Private feedback form to address concerns before they go public" },
    { step: "5", title: "Positive Review Submitted", description: "Auto thank-you + patient referral invitation" },
  ],
  giftCardUseCases: "New patient welcome gifts, cosmetic treatment gifting, holiday dental gift cards, and patient referral reward programs.",
  giftAndReferralPrograms: [
    { title: "Gift Cards", description: "Cosmetic treatment gifting, holiday packages, and new patient welcome gifts.", icon: Gift, features: ["Online gift card store", "Custom denominations", "Automated delivery", "Usage tracking"] },
    { title: "Referral Tracking", description: "Know exactly who referred each new patient. Track referral sources automatically in your CRM.", icon: UserPlus, features: ["Unique referral links", "Referral source tagging", "Thank-you automation", "Reward tracking"] },
    { title: "Referral Rewards", description: "Incentivize referrals with treatment credits, whitening discounts, or priority scheduling. Automate reward delivery.", icon: DollarSign, features: ["Automatic reward triggers", "Credit bank system", "Thank-you emails", "Referral leaderboard"] },
  ],

  // ── AI Voice & Chat ──
  aiVoiceChatSectionHeadline: "We Power Your Dental Practice",
  aiVoiceChatHighlight: "Around the Clock — 24/7",
  aiVoiceChatSubheadline: "Never miss a new patient inquiry — AI handles appointment requests and questions at any hour.",
  aiFeatures: [
    {
      title: "24/7 AI Receptionist",
      description: "Never miss a new patient inquiry again. AI answers calls, checks your calendar, qualifies leads, and books appointments — even after hours when patients are searching for emergency dental care.",
      icon: Phone,
      features: ["Answers calls in your brand voice", "Checks calendar availability in real-time", "Books new patient appointments", "Flags urgent dental emergencies for follow-up", "Sends confirmation texts/emails"],
      color: "violet",
    },
    {
      title: "Conversational AI Chat",
      description: "Intelligent chatbot that engages website visitors, answers FAQs about services, insurance, and pricing, and captures leads across all channels.",
      icon: MessageSquare,
      features: ["Website live chat widget", "SMS two-way conversations", "Facebook Messenger integration", "Lead qualification & capture", "After-hours lead collection"],
      color: "cyan",
    },
  ],

  // ── Why Choose Us ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for Dental Marketing",
  whyChooseUsSubtitle: "Your Dental Marketing Partner",
  whyChooseUsBody: "We understand dental practice dynamics — the mix of insurance and private-pay patients, the seasonal demand patterns, and the trust patients need before they choose a new dentist.",
  whyChooseUsCards: [
    { title: "Dental Practice Specialists", description: "We focus on health and wellness practices — dental, med spa, chiropractic. We understand patient acquisition dynamics, treatment plan conversions, and the trust signals that move patients from inquiry to chair.", icon: Stethoscope },
    { title: "High-Value Patient Attraction", description: "Our campaigns are built to attract patients who value quality over price — implant candidates, cosmetic cases, and families seeking a long-term practice relationship.", icon: Star },
    { title: "24/7 New Patient Capture", description: "Your AI Receptionist captures new patient inquiries at 9pm, qualifies them, and books appointments before your front desk arrives in the morning.", icon: Phone },
    { title: "Reputation-First Strategy", description: "Review generation is built into every patient touchpoint — not an afterthought. We systematically build your review volume and rating to directly improve your Map Pack rankings.", icon: Star },
    { title: "Insurance Independence", description: "We help practices reduce dependency on insurance networks by attracting private-pay cosmetic and specialty patients through targeted content, paid ads, and high-value service page SEO.", icon: Shield },
    { title: "Verified Case Study Results", description: "Verified Google Ads case study results available for dental practices. Schedule a call to review the actual campaign data and metrics.", icon: BarChart3 },
  ],

  // ── FAQ ──
  faqHeadline: "Dental Practice Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to rank on Google for dental searches in my area?", answer: "Most dental practices see measurable ranking improvements within 3-6 months for local and long-tail terms, with competitive terms like \"dentist near me\" or \"dental implants [city]\" typically taking 6-12 months in contested markets. Timeline depends on your starting domain authority, market competitiveness, and how consistently new content and citations are built. Emergency and hyper-local searches often move faster than high-value cosmetic terms because competitor sophistication varies significantly across intent categories.\n\nCosmetic and specialty terms carry 3-10x higher per-patient lifetime value than general terms, which is why we sequence keyword targets by revenue impact — not just ranking speed." },
        { question: "Do I need separate pages for each dental service I offer?", answer: "Yes — absolutely. A single \"Services\" page cannot rank simultaneously for \"dental implants [city],\" \"Invisalign provider [city],\" \"cosmetic dentist [city],\" and \"emergency dentist near me\" because Google assigns topical authority at the page level. Practices with separate pages for implants, veneers, Invisalign, cosmetic dentistry, emergency dental, and general family care consistently outrank those consolidating services, because each page builds independent relevance signals and backlink targets.\n\nPage count alone is not enough — each page needs genuine content depth (1,000-2,500 words covering the procedure, candidacy, costs, and local context). Thin service pages perform no better than a consolidated page." },
        { question: "How do Google reviews affect my dental practice's local ranking?", answer: "Google reviews are a direct ranking factor for local pack and Maps results — a practice with 40 reviews at 4.9 stars consistently outranks a practice with 200 reviews at 4.6 stars in competitive markets. Review velocity signals active practice status. Review content matters too — patients mentioning specific treatments like \"implants\" or \"Invisalign\" help your practice rank for those exact procedure terms.\n\nrater8, 2025: 84% of patients check reviews before choosing a provider. This is why we build automated review generation into every patient touchpoint rather than relying on manual requests. Consistent velocity compounds ranking improvements over time and is significantly harder for competitors to replicate quickly." },
        { question: "What's the difference between local SEO and regular SEO for dentists?", answer: "Local SEO targets patients with geographic intent — \"dentist near me,\" \"family dentist [city]\" — through Google Business Profile, Map Pack rankings, and local citations. Regular SEO targets informational and procedure intent — \"how much do dental implants cost,\" \"is Invisalign worth it for adults.\"\n\nBoth are necessary. Local SEO captures emergency and routine appointment searches where the patient has already decided to book. Regular SEO captures the research-phase patient comparing treatment options across multiple practices before committing.\n\nCosmetic and specialty procedures require more regular SEO than local SEO — patients researching implants or veneers spend weeks comparing options. Emergency searches are almost entirely local. A comprehensive dental SEO strategy runs both tracks simultaneously." },
        { question: "How do you optimize my Google Business Profile for my dental practice?", answer: "We audit and optimize every GBP element: primary and secondary category selection, service area configuration, business description keywords, photo volume and quality, Q&A population, and weekly posting cadence for Map Pack freshness signals.\n\nCategory selection is often the single highest-impact change — adding \"Cosmetic Dentist\" or \"Dental Implants Provider\" as secondary categories can unlock Map Pack visibility for those specific searches immediately. We also install rank tracking by neighborhood and search term.\n\nGBP optimization is not a one-time setup. Google's algorithm rewards active profiles — weekly posts, responding to every review, and updating service information seasonally all contribute to sustained Map Pack positioning." },
        { question: "Can you help me rank for high-value terms like dental implants or veneers?", answer: "Yes — and high-value terms are a specific focus of our dental SEO strategy because they carry 3-10x higher per-patient lifetime value than general dentistry searches. These terms require dedicated service pages with clinical content depth, supporting blog content clusters, and authoritative backlinks.\n\nMost practices competing for these terms rely on thin service pages. Our topical map approach builds the full supporting content cluster that Google uses to assign sustained authority to your core service page, making your ranking significantly more durable." },
        { question: "How does AI search (ChatGPT, Gemini) affect dental patient discovery?", answer: "31% of patients now use generative AI tools to research dental providers before booking — rater8, 2025. When patients ask ChatGPT \"what's the best dentist for implants near me?\" or ask Gemini to compare cosmetic dentists, AI engines pull from structured content, reviews, and entity data to generate recommendations.\n\nA practice visible in both has a compounding advantage — patients see you in Google search, then see you again when they ask ChatGPT for a second opinion. This is why we build GEO (Generative Engine Optimization) into every content piece from the start." },
        { question: "Will SEO work for my dental practice in a highly competitive market?", answer: "Yes — and competitive markets are exactly where a systematic SEO strategy creates the largest advantage, because most competing practices rely on paid ads or insurance directory listings and leave organic search share largely unclaimed.\n\nOur approach targets the full keyword funnel — emergency searches, cosmetic research queries, and neighborhood-specific family dentistry terms — with separate content and authority-building strategies for each intent cluster. In competitive markets, the practices that win are those with the deepest content authority, strongest review velocity, and fastest inquiry response systems — not the largest ad budgets.\n\nDense markets have higher local pack competition but also higher search volume, meaning the revenue impact of ranking gain is larger. We start each with terms where your current domain authority gives you the fastest path to page one, then systematically expand into more competitive positions." },
        { question: "Do you create content for dental patient education?", answer: "Yes — patient education content is a core component of our dental SEO strategy, not an add-on. We build content that answers the specific questions patients are actively searching at every stage of their decision process.\n\nEducation content ranks for informational searches that put your practice in front of patients before they're ready to book — \"how long do dental implants last,\" \"what to expect from Invisalign treatment,\" \"is teeth whitening safe for sensitive teeth.\" It also builds the topical authority Google requires to rank your high-intent service pages.\n\nEvery article passes a six-dimension quality scoring process — factuality, authority, content hierarchy, information gain, accuracy, and format — before publication. We don't publish generic dental health articles. Every piece is built around your specific services, service area, and competitive positioning." },
        { question: "How do you track and report SEO results for dental practices?", answer: "Monthly reporting covers keyword ranking movement across your full target term set, Google Business Profile performance (views, calls, direction requests, website clicks), organic traffic trends by landing page, and new patient inquiry source attribution — which keywords and pages are generating actual form submissions and calls.\n\nWe tie SEO activity directly to business outcomes, not just rankings. You see which content is driving new patient conversions, which GBP categories are generating Map Pack clicks, and how your review velocity is affecting your local rank over time.\n\nAI citation share is reported monthly across 6 platforms — the percentage of relevant patient queries where your practice appears in AI-generated recommendations. This is increasingly the leading indicator of future organic performance as AI-influenced searches grow." },
      ],
    },
    {
      id: "paid-media", label: "Paid Media", icon: Megaphone, color: "rose",
      faqs: [
        { question: "Should dental practices use Google Ads or Google LSA?", answer: "Both serve different purposes. LSA with Google Guaranteed badge is ideal for emergency and general dentistry searches. PPC provides more targeting flexibility for cosmetic and specialty campaigns. Most practices run both." },
        { question: "How much should a dental practice spend on Google Ads?", answer: "Most dental practices see strong results starting at $2,000–4,000/month for Google PPC + LSA combined. Budget allocation depends on patient type focus and market competition." },
        { question: "Do Facebook and Instagram ads work for dental patient acquisition?", answer: "Facebook excels at new patient offers, cosmetic awareness campaigns, and retargeting website visitors. Instagram works well for cosmetic before/after content. Both are strong for brand building." },
        { question: "How do you advertise cosmetic dental services like implants or veneers?", answer: "We build dedicated cosmetic campaigns with before/after imagery, financing information, and trust signals. Google captures active searches while Instagram builds visual aspiration." },
        { question: "What landing pages do you build for dental ad campaigns?", answer: "Every campaign gets a dedicated landing page — emergency pages with prominent phone numbers, cosmetic pages with before/after galleries, and new patient pages with offer details." },
        { question: "How do you track which ads are generating actual booked appointments?", answer: "We use call tracking with unique numbers per campaign, form submission tracking, and CRM integration to attribute every new patient to the specific ad and keyword that drove them." },
        { question: "What's a realistic cost-per-new-patient for dental Google Ads?", answer: "In most markets, dental Google Ads generate new patient leads at $35–80 per inquiry. Emergency leads convert faster, while cosmetic leads have higher lifetime value." },
        { question: "How do you handle seasonal campaigns like insurance deadline promotions?", answer: "We pre-build insurance deadline campaigns (October–December) targeting existing patients with remaining benefits. These campaigns consistently drive recall appointments and treatment plan acceptance." },
      ],
    },
    {
      id: "marketing-automation", label: "Marketing Automation", icon: RefreshCw, color: "amber",
      faqs: [
        { question: "How does automated follow-up work for new patient inquiries?", answer: "When a patient submits a form or calls, they enter a 5-day email and SMS sequence with trust content, team introductions, and booking prompts — converting researchers into scheduled patients." },
        { question: "Can you automate recall reminders for existing patients?", answer: "Yes — patients receive automated recall reminders at 5.5 months after their last cleaning, with follow-up prompts at 6 and 7 months for those who haven't rebooked." },
        { question: "How do you handle unscheduled treatment plan follow-up automatically?", answer: "Patients with unscheduled treatment plans enter a nurture sequence with condition education, financing information, and booking prompts — recovering revenue from unscheduled cases." },
        { question: "What's a typical booking rate from automated dental follow-up sequences?", answer: "Our dental clients typically see 25–35% booking rates from automated follow-up sequences — significantly higher than practices relying on manual front desk follow-up." },
        { question: "How do you set up post-appointment review request automation?", answer: "After every completed appointment, the system sends a happiness check via SMS. Positive responses get a direct Google review link. Neutral or negative responses are routed to private feedback." },
        { question: "Can automation send insurance deadline reminders to existing patients?", answer: "Absolutely. We segment patients by insurance type and send 'use your benefits before they expire' campaigns starting October, driving recall appointments and treatment plan acceptance." },
        { question: "How do you reactivate lapsed patients automatically?", answer: "Patients inactive for 18+ months receive an automated 'We miss you' campaign with a returning patient offer and one-click booking — recovering dormant patients at zero acquisition cost." },
        { question: "Does your CRM integrate with Dentrix, Eaglesoft, or other dental software?", answer: "We integrate with most popular dental practice management systems through API connections and Zapier. This ensures patient data flows seamlessly between your clinical software and marketing platform." },
      ],
    },
    {
      id: "ai-receptionist", label: "AI Receptionist", icon: Bot, color: "sky",
      faqs: [
        { question: "How does the AI Receptionist handle after-hours new patient inquiries?", answer: "The AI answers every call and chat message 24/7 — answering questions about insurance, services, and availability, then booking new patient appointments directly into your schedule." },
        { question: "Can the AI Receptionist book new patient appointments directly?", answer: "Yes — it integrates with your scheduling system to check real-time availability and book appointments without any manual intervention from your front desk." },
        { question: "How does the AI handle questions about insurance and fees?", answer: "The AI is trained on your accepted insurance plans, fee schedule, and financing options. It provides accurate information and can qualify patients by insurance type before booking." },
        { question: "What happens when a patient has an urgent dental emergency after hours?", answer: "The AI identifies emergency keywords (severe pain, swelling, broken tooth) and flags these for next-morning follow-up while collecting key details and providing pain management guidance." },
        { question: "Can I customize the AI Receptionist's script for my practice?", answer: "Absolutely. We train the AI on your specific services, insurance policies, team bios, and brand voice to ensure every interaction feels authentic to your practice." },
        { question: "How does the AI qualify new patients before routing to my team?", answer: "The AI asks qualification questions about dental needs, insurance, preferred appointment time, and whether they're a new or existing patient — ensuring your front desk handles pre-qualified leads." },
        { question: "What's the setup time for the dental AI Receptionist?", answer: "We handle all scripting, training, and integration. Most dental practices are fully live within 1–2 weeks, including calendar integration and insurance information setup." },
        { question: "Will patients know they're talking to an AI?", answer: "Modern voice AI sounds remarkably natural. We customize tone, pacing, and personality to match your practice. Most callers don't realize they're speaking with AI — they just know their call was answered immediately." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "Have more questions about Dental Marketing?",
    body: "Get a personalized demo of our SEO, website, and patient acquisition platform. Let's fill your schedule with the right patients.",
    signoff: "— The GrowSmallBiz Team",
  },

  // ── Contact ──
  contactSectionHeadline: "Get Your Custom Dental Growth Strategy",
  contactSectionBody: "Tell us about your dental practice and the patients you want to attract. We'll review your inquiry and follow up with a clear next step — including a demo of the system if that would be helpful.",

  // ── Sticky CTA ──
  stickyCtaConfig: {
    title: "Ready for Dental Marketing That Fills Your Chair?",
    description: "Let's build a custom growth strategy to attract high-value patients, automate follow-up, and reduce insurance dependency.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Fills", "Your", "Chair"],
    showAfterScroll: 60,
  },

  // ── Case Study Links ──
  caseStudyLinks: [
    {
      title: "Dental SEO Case Study",
      description: "How we helped a dental practice in Concord, CA grow organic traffic and new patient bookings with local SEO.",
      url: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/",
      icon: Search,
    },
  ],
};
