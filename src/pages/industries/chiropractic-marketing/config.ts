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

import chiroHeroImage from "@/assets/industry-chiro-hero.jpg";
import portfolioChiroWebsite from "@/assets/portfolio-chiro-website.jpg";

export const chiropracticConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "Chiropractic Marketing Agency | GrowSmallBiz",
  metaDescription: "GrowSmallBiz helps chiropractors attract new patients with AI-powered SEO, Google Ads, reputation management, and 24/7 AI Receptionist. Full-service digital marketing built for chiropractic practices.",
  canonicalUrl: "/health-and-wellness-practices/marketing-for-chiropractors",
  serviceName: "Chiropractic Marketing Services",
  serviceType: "Digital Marketing for Chiropractors",
  serviceDescription: "AI-powered SEO, Google Ads, reputation management, and marketing automation for chiropractic practices.",
  breadcrumbs: [
    { name: "Health & Wellness Practices", url: "/health-and-wellness-practices" },
    { name: "Chiropractic Marketing", url: "/health-and-wellness-practices/marketing-for-chiropractors" },
  ],

  // ── Hero ──
  heroImage: chiroHeroImage,
  badgeText: "Chiropractic Practice Marketing & Growth System",
  badgeIcon: Activity,
  h1Line1: "The Chiropractic Marketing System",
  h1Line2: "That Builds a Practice Full of",
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

  // ── Pain Points ──
  painPointsHeadline: "Chiropractic Practice Marketing Challenges",
  painPointsSubheadline: "Even the most skilled chiropractors struggle to build a consistent flow of new patients. If any of these resonate, your marketing infrastructure needs attention.",
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
      description: "Word-of-mouth built your practice, but it can't scale it. Without a predictable digital acquisition system, new patient volume is entirely outside your control.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: DollarSign,
      title: "Insurance Reimbursement Pressure",
      description: "Declining insurance reimbursements make every new patient critical. Without a steady flow of new patients — including cash-pay and PI cases — margin pressure compounds.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Phone,
      title: "Missing After-Hours Inquiries",
      description: "A patient in pain at 8pm doesn't wait until morning. If your practice can't capture and respond to inquiries immediately, they book with whoever answers first.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: Star,
      title: "Low Review Volume",
      description: "80%+ of patients check reviews before choosing a chiropractor. Without a systematic review generation process, your best clinical outcomes stay invisible to new patients searching online.",
      hasImage: false, showAILogos: false,
    },
    {
      icon: RefreshCw,
      title: "Poor Patient Retention",
      description: "Most chiropractic revenue is lost not at acquisition — but at retention. Without automated recall and wellness care campaigns, patients complete their acute plan and never return for maintenance.",
      hasImage: false, showAILogos: false,
    },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of depending on referrals and hoping patients return, imagine a predictable system that attracts new patients, books them automatically, and keeps them returning for wellness care.",

  // ── System Diagram ──
  systemDiagramHeadline: "GrowSmallBiz Predictable Marketing System",
  systemDiagramBody: "A complete patient acquisition engine that attracts new patients through search and paid ads, converts inquiries into booked appointments automatically, and turns acute-care patients into loyal wellness care patients — including automated recall systems and referral program activation.",

  // ── CTAs ──
  ctaAfterPainPoints: {
    headline: "Ready for Chiropractic Marketing That Fills Your Schedule With the Right Patients?",
    subtext: "Let's build a custom chiropractic growth strategy to attract new patients and convert them into long-term wellness care relationships.",
    primaryLabel: "Get Your Free Strategy Session",
    secondaryLabel: "Call +1 (925) 886-3724",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free Chiropractic SEO Visibility Audit",
    subtext: "Find out exactly where your chiropractic practice appears in local search results and what it would take to reach the top 3.",
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

  // ── Website Design ──
  websiteDesignBadge: "Chiropractic Practice Websites",
  websiteDesignHeadline: "Chiropractic Websites That Convert",
  websiteDesignHighlight: "Visitors Into Booked Appointments",
  websiteDesignSubheadline: "Fast, patient-friendly websites built to generate new patient inquiries and clearly communicate your approach to pain relief and wellness care.",
  websiteDesignImage: portfolioChiroWebsite,
  websiteDesignFeatureHeadline: "Chiropractic Websites Built to Win the New Patient Decision",
  websiteDesignFeatureBody: "A patient searching for back pain relief is often in real discomfort and looking for someone they can trust quickly. We build chiropractic websites that establish that trust immediately — with clear condition and treatment pages, patient education content, strong reviews, and a frictionless path to booking an appointment from any device.",
  websiteDesignBullets: [
    "Condition-specific pages: back pain, neck pain, sciatica, headaches, auto injury",
    "Online appointment request — 24/7 new patient booking capability",
    "Trust signals: credentials, years in practice, patient outcome descriptions, reviews",
    "Mobile-first design — 70%+ of chiropractic searches happen on mobile",
    "Personal injury and auto accident landing pages for PI referral traffic",
    "Patient education blog for condition-based search content",
    "Wellness care and maintenance plan information pages",
    "Fast load times and technical SEO foundation built in from day one",
  ],
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search Is Now Influencing How Patients Find Pain Relief.",
  aiSearchCalloutBody: "Patients in pain are asking ChatGPT 'what's the best chiropractor near me for sciatica?' before they open Google. Your competitor may already be recommended by AI — even if you rank well organically. We track and build your AI visibility across 6 platforms.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
  ],

  // ── SEO ──
  seoBadge: "Chiropractic SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "Chiropractic Practices",
  seoSubheadline: "Comprehensive search engine optimization designed for chiropractic practices — from general pain relief and wellness care to personal injury and auto accident cases.",
  seoEditorialHeadline: "Why Chiropractic SEO Works",
  seoEditorialHighlight: "Differently Than Other Healthcare Marketing",
  seoEditorialBody: [
    "Chiropractic sits at the intersection of pain urgency and considered trust.",
    "Some patients find a chiropractor in genuine crisis — acute back pain after a weekend project gone wrong, neck pain following a car accident, sciatica that's made the workday unbearable. These are high-urgency searches that mirror emergency HVAC behavior: the patient opens Google, scans the Map Pack, reads a handful of reviews, and calls whoever appears most trustworthy in the top 3 results. Speed of visibility and review quality win these cases.",
    "Other patients are in a longer consideration phase — researching chronic pain management options, exploring chiropractic for the first time, or evaluating providers for ongoing wellness care. These patients visit multiple websites, read extensively, and take days or weeks to decide. Educational content, condition-specific pages, and visible clinical expertise win these cases.",
    "There's also a third patient type that most chiropractic marketing ignores: the personal injury and auto accident patient. This segment is distinctly high-value — treatment duration is longer, insurance billing is often third-party, and attorney referral relationships can create consistent case volume. PI-focused content and landing pages capture a segment your competitors likely aren't targeting specifically.",
    "Our approach covers all three patient types simultaneously — Map Pack optimization for urgent local searchers, condition and wellness content authority for considered buyers, and PI-specific landing pages for the high-value injury segment — while building the review velocity that makes all three channels convert at their highest rate.",
  ],
  seoEditorialPullQuote: "Chiropractic is one of the most referral-driven healthcare niches — which creates both an opportunity and a risk. Digital acquisition supplements referrals with a predictable channel you own.",
  seoKeywordCategories: {
    painRelief: {
      label: "Pain Relief & Injury Treatment", icon: AlertTriangle,
      image: chiroHeroImage,
      keywords: [
        "chiropractor near me",
        "back pain chiropractor [city]",
        "neck pain treatment [city]",
        "sciatica chiropractor [city]",
        "headache relief chiropractor near me",
        "sports injury chiropractor [city]",
      ],
      competitors: "Other local chiropractors, physical therapy practices, orthopedic urgent care, pain management clinics",
    },
    wellness: {
      label: "Wellness & Preventive Care", icon: Heart,
      image: portfolioChiroWebsite,
      keywords: [
        "chiropractic wellness care [city]",
        "maintenance chiropractic adjustments near me",
        "family chiropractor [city]",
        "prenatal chiropractor [city]",
        "pediatric chiropractor near me",
        "chiropractic care for posture [city]",
      ],
      competitors: "Wellness-focused chiropractic chains, functional medicine practices, massage therapy + chiro combos",
    },
    personalInjury: {
      label: "Auto Accident & Personal Injury", icon: Shield,
      image: chiroHeroImage,
      keywords: [
        "auto accident chiropractor [city]",
        "car accident injury treatment near me",
        "whiplash chiropractor [city]",
        "personal injury chiropractic [city]",
        "chiropractor that accepts liens near me",
        "slip and fall injury chiropractor",
      ],
      competitors: "PI-focused chiropractic chains, multi-disciplinary injury clinics, attorney referral networks, MRI + chiro combo clinics",
    },
  },

  // ── Paid Media ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "Chiropractic Practices",
  paidMediaSubheadline: "Strategic ad platform recommendations by patient type — acute pain cases, wellness care, and personal injury.",
  adCreatives: [
    {
      id: "acute-pain",
      genre: "Pain Relief & Injury",
      image: chiroHeroImage,
      platforms: ["Google PPC", "Google LSA"],
      description: "High-urgency creative for back pain, neck pain, and sciatica sufferers. Same-day availability, new patient offer, credibility signals front and center.",
    },
    {
      id: "new-patient",
      genre: "New Patient Acquisition",
      image: portfolioChiroWebsite,
      platforms: ["Google PPC", "Meta/Facebook"],
      description: "New patient special — exam, consultation, and first adjustment offer. Targeted to adults in local radius who have searched for pain relief or chiropractic recently.",
    },
    {
      id: "personal-injury",
      genre: "Personal Injury",
      image: chiroHeroImage,
      platforms: ["Google PPC", "Meta/Facebook"],
      description: "Targeted creative for auto accident and personal injury patients. Emphasize lien acceptance, no out-of-pocket cost, same-day evaluation availability.",
    },
  ],
  paidMediaByGenre: [
    {
      genre: "Pain Relief & Acute Care", icon: AlertTriangle,
      primary: [
        { name: "Google PPC", reason: "70-80% of budget — highest-intent searches like 'chiropractor near me,' 'back pain doctor,' 'sciatica treatment.' Patients in pain convert quickly." },
        { name: "Google LSA", reason: "Google Guaranteed badge adds trust signal for patients choosing between local providers." },
      ],
      secondary: [
        { name: "Meta/Facebook", reason: "Retarget website visitors + pain relief content for brand awareness." },
      ],
      color: "blue",
    },
    {
      genre: "Wellness & Preventive Care", icon: Heart,
      primary: [
        { name: "Meta/Facebook", reason: "Re-engage past patients with wellness care messaging. Target local homeowners and families with preventive chiropractic content." },
        { name: "Google PPC", reason: "Wellness keyword campaigns ('maintenance chiropractic,' 'family chiropractor') for planned-care searches." },
      ],
      secondary: [
        { name: "Instagram", reason: "Practice culture and wellness tips content for community building." },
      ],
      color: "emerald",
    },
    {
      genre: "Auto Accident / Personal Injury", icon: Shield,
      primary: [
        { name: "Google PPC", reason: "'Auto accident chiropractor [city]' and 'whiplash treatment near me' searches have very high case value — dedicated campaign with PI-specific landing page." },
        { name: "Meta/Facebook", reason: "Retarget auto accident searches and build PI attorney referral awareness." },
      ],
      secondary: [
        { name: "Google LSA", reason: "Additional trust signal for PI-related searches." },
      ],
      color: "red",
    },
  ],
  metaAdSetupHeadline: "How We Help Chiropractic Practices with Meta Ad Setup",
  metaAdSetupSubheadline: "Facebook and Instagram reach patients before they're in acute pain — building brand familiarity so when a pain episode strikes, your practice is already top of mind. We build wellness care campaigns targeting past patients, new patient offer funnels for local homeowners, and retargeting sequences that re-engage website visitors who didn't book.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to patients who visited your site but didn't book.", icon: Facebook },
    { title: "Google Analytics & GTM", description: "Track your full patient journey, see which pages drive appointments, and manage all tracking codes centrally.", icon: BarChart3 },
    { title: "Call Tracking", description: "Know exactly which ad, keyword, or landing page generated each phone call and appointment booking.", icon: Phone },
  ],

  // ── Retargeting ──
  retargetingHeadline: "Be Found When They're in Pain.",
  retargetingHighlight: "Stay Present Until They Book.",
  retargetingSubheadline: "SEO captures the urgent search. Retargeting closes the considered decision.",
  retargetingBody: [
    "Chiropractic decisions often follow a cycle: a pain episode triggers research, the patient visits a few websites, feels better temporarily, and puts the decision off. Retargeting interrupts that cycle.",
    "Your practice reappears in their Facebook feed with a patient testimonial about back pain relief. Your Google Display ad shows up while they're reading about sciatica. When the pain episode returns — and it always does — your practice is already the most familiar name in their consideration set. For wellness care patients who've completed their acute plan, retargeting serves a different function: the gentle, timely reminder that maintenance care prevents the next episode before it starts.",
  ],

  // ── Social Media ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for chiropractic practices — by patient type and content goal.",
  socialMediaByGenre: [
    {
      genre: "Patient Education & Trust",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Condition explainers, pain relief tips, posture content, and patient Q&A — highest reach for educational content with local homeowner audiences." },
        { name: "YouTube", icon: Globe, strategy: "Condition education videos, adjustment demonstrations, patient testimonials — builds authority for considered buyers doing deep research." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Practice culture, team content, and patient success stories in Reels format." },
      ],
      color: "blue",
    },
    {
      genre: "New Patient Acquisition",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "New patient offers, referral campaigns, community presence — broad local reach with targeting by age, location, and health interest." },
        { name: "Instagram", icon: Instagram, strategy: "Practice culture and patient outcome content targeting younger demographics." },
      ],
      secondary: [
        { name: "Nextdoor", icon: MapPin, strategy: "Hyperlocal community trust building for neighborhood-level patient acquisition." },
      ],
      color: "emerald",
    },
    {
      genre: "Wellness & Retention",
      primary: [
        { name: "Facebook", icon: Facebook, strategy: "Wellness care reminders, seasonal pain prevention content (ergonomics for winter shoveling, summer sports prep), maintenance plan promotion." },
        { name: "Email/SMS", icon: Mail, strategy: "Recall reminders, wellness content newsletters, appointment follow-ups — highest ROI retention channel." },
      ],
      secondary: [
        { name: "Instagram", icon: Instagram, strategy: "Ongoing wellness tips and practice community content." },
      ],
      color: "amber",
    },
  ],
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ── AI Growth System ──
  growthSystemHeadline: "for Chiropractic Practices",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop losing new patients to slow follow-up and missed calls. Build an automated system that captures inquiries, books appointments, and turns acute-care patients into loyal wellness care relationships.",
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
      description: "Long-term wellness care relationship. Patients on maintenance plans visit 6–12 times per year, refer actively, and are far more resilient to competitive poaching. This segment is the foundation of a sustainable practice.",
      goal: "Keep patients engaged through recall automation, wellness content, and referral program activation",
      color: "amber",
    },
  ],
  emailNurturePoints: [
    { title: "Speed-to-Lead", description: "AI Receptionist auto-responds to every inquiry within seconds — 24/7. Answers questions about conditions treated, insurance, and availability; books new patient appointments directly; and routes urgent pain cases to your emergency line.", icon: Zap },
    { title: "Automated Lead Nurturing", description: "5–7 touchpoints over 2–3 weeks with condition education, patient testimonials, and booking prompts that convert researching patients into scheduled appointments.", icon: Mail },
    { title: "Past Client Re-engagement", description: "Recall reminders at 30, 60, and 90 days post-treatment, wellness care enrollment campaigns, seasonal pain prevention content, and birthday outreach keep your existing patient base engaged.", icon: RefreshCw },
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
  marketingCampaigns: [
    {
      genre: "New Patient Special — Acute Care", icon: AlertTriangle, color: "from-blue-500 to-cyan-500",
      offer: {
        headline: "New Patient Exam + Consultation + First Adjustment",
        tagline: "Start your pain relief journey today",
        price: "$79",
        originalPrice: "$200+",
        savings: "Save $120+",
        includes: ["Health history review", "Orthopedic/neurological exam", "Posture assessment", "First adjustment", "Care plan discussion"],
        urgency: "Limited new patient slots per week",
        cta: "Book Now",
      },
      funnel: ["Google PPC → New Patient Landing Page", "Booking Form → Confirmation", "Nurture Sequence → Wellness Plan Upsell"],
      topPlatforms: ["Google PPC", "Google LSA"],
      seasonality: "Peak: January (New Year), September (back-to-school)",
    },
    {
      genre: "Auto Accident Free Evaluation", icon: Shield, color: "from-red-500 to-orange-500",
      offer: {
        headline: "Free Same-Day Auto Accident Evaluation",
        tagline: "Injury documentation within 72 hours is critical",
        price: "Free",
        originalPrice: "$200+",
        savings: "No out-of-pocket cost",
        includes: ["Injury assessment", "Documentation for insurance/attorney", "Same-day treatment if indicated", "Lien-based billing available"],
        urgency: "Time-sensitive — injury documentation best within 72 hours of accident",
        cta: "Get Evaluated Today",
      },
      funnel: ["Google PPC (PI keywords) → Auto Accident Landing Page", "AI Receptionist booking → Same-day confirmation"],
      topPlatforms: ["Google PPC", "Meta/Facebook"],
      seasonality: "Year-round, increases with winter weather conditions",
    },
    {
      genre: "Wellness Care Enrollment", icon: Heart, color: "from-emerald-500 to-teal-500",
      offer: {
        headline: "Wellness Care Package — 12 Monthly Maintenance Visits",
        tagline: "Keep your spine healthy year-round",
        price: "Reduced Rate",
        originalPrice: "",
        savings: "Reduced per-visit rate",
        includes: ["Monthly adjustment", "Postural reassessment every 3 months", "Priority scheduling"],
        urgency: "Package rate only available to current or recently discharged patients",
        cta: "Enroll Now",
      },
      funnel: ["Post-discharge Email → Wellness Care Landing Page", "Package Enrollment → Auto-billing"],
      topPlatforms: ["Email", "SMS", "Retargeting"],
      seasonality: "After acute care discharge — highest conversion within 30 days of final acute visit",
    },
  ],
  seasonalCampaigns: [
    { campaign: "New Year Health Campaign", timing: "Launch first week Jan", offer: "New patient exam special + wellness care intro", channels: ["Google PPC", "Facebook", "Email to lapsed patients"] },
    { campaign: "Spring Sports & Activity", timing: "Launch early March", offer: "Sports injury prevention + new patient offer", channels: ["Google PPC", "Facebook local targeting"] },
    { campaign: "Back-to-School", timing: "Launch late July", offer: "Backpack posture + student athlete sports injuries", channels: ["Facebook parent groups", "Google PPC"] },
    { campaign: "Fall Maintenance Campaign", timing: "Launch September", offer: "Wellness care enrollment for existing patients", channels: ["Email + SMS to recently discharged patients"] },
    { campaign: "Winter Slip & Fall / Shoveling", timing: "Always-on (Dec–Feb)", offer: "Acute injury and prevention content", channels: ["Google PPC", "Facebook", "Google Posts"] },
    { campaign: "Wellness Recall", timing: "Automated (Year-round)", offer: "30/60/90-day post-discharge reminders", channels: ["SMS + email sequence to all discharged patients"] },
  ],
  pastClientWorkflows: [
    { title: "Annual Check-In", description: "Automated annual wellness check-in sent 11 months after last visit — prompting patients who haven't been in for maintenance care to schedule a reassessment, with direct booking link.", icon: Calendar },
    { title: "Re-engagement Campaign", description: "Patients inactive for 12+ months receive an automated 'Your spine doesn't take a year off' reactivation campaign with a returning patient offer and a one-click booking link.", icon: RefreshCw },
  ],

  // ── Reputation ──
  reputationHeadline: "We Build Your Online Reputation",
  reputationHighlight: "— Automatically After Every Visit",
  reputationSubheadline: "Turn every satisfied patient into a 5-star review and a referral source.",
  reputationBullets: [
    "80%+ of patients read reviews before choosing a chiropractor — your rating is your most visible trust signal",
    "Google reviews directly impact your Map Pack ranking — more recent reviews = higher placement",
    "Automated review requests sent after every completed treatment episode",
    "Monitor all platforms: Google, Yelp, Healthgrades, Zocdoc, Facebook",
    "Respond to every review professionally — responses demonstrate care and build trust with prospective patients",
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
      description: "Never miss a new patient inquiry again. AI answers calls in your brand voice, checks your calendar, qualifies leads, and routes urgent pain cases directly to your emergency line — even at 8pm.",
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

  // ── Why Choose Us ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for Chiropractic Marketing",
  whyChooseUsSubtitle: "Your Chiropractic Marketing Partner",
  whyChooseUsBody: "We understand chiropractic practice dynamics — the mix of acute, PI, and wellness patients, the referral dependency that limits growth, and the retention economics that determine whether a practice thrives or plateaus.",
  whyChooseUsCards: [
    { title: "Chiropractic Practice Specialists", description: "We focus on health and wellness practices — chiropractic, dental, med spa. We understand patient acquisition across acute, PI, and wellness care segments, and the trust signals that convert pain sufferers into long-term patients.", icon: Activity },
    { title: "Multi-Segment Patient Strategy", description: "We build separate campaigns for acute pain, wellness care, and personal injury — because each patient type searches differently, converts differently, and has a different lifetime value.", icon: Target },
    { title: "24/7 After-Hours Capture", description: "Pain doesn't follow office hours. Your AI Receptionist captures new patient inquiries at 7pm, answers questions about conditions and insurance, and books appointments — so you never lose an after-hours patient.", icon: Phone },
    { title: "Patient Retention Architecture", description: "We build the systems that convert acute-care patients into long-term wellness care relationships — automated recall, wellness enrollment campaigns, and retention sequences.", icon: RefreshCw },
    { title: "Review Velocity System", description: "We systematically generate reviews at the right moment in the patient journey — building the review volume and recency that directly improves your Map Pack ranking.", icon: Star },
    { title: "Verified Case Study Results", description: "Verified AI SEO case study results available for chiropractic practices. Schedule a call to review the actual campaign data and patient acquisition metrics.", icon: BarChart3 },
  ],

  // ── FAQ ──
  faqHeadline: "Chiropractic Practice Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to rank on Google for chiropractic searches in my area?", answer: "Most chiropractic practices see meaningful ranking improvements within 3–6 months depending on market competition, current review velocity, and baseline authority. We front-load citation building, review strategy, and GBP optimization to accelerate results." },
        { question: "Do I need separate pages for each condition I treat?", answer: "Yes — condition-specific pages (back pain, neck pain, sciatica, headaches, auto injury) are critical for ranking in condition-based searches. Each page is uniquely written with clinical depth and local signals." },
        { question: "How do Google reviews affect my chiropractic practice's local ranking?", answer: "Review quantity, recency, and velocity are top Map Pack ranking factors. Our automated review request system ensures every completed treatment episode has an opportunity to generate a 5-star review." },
        { question: "What's the difference between local SEO and regular SEO for chiropractors?", answer: "Local SEO focuses on Google Maps, the Map Pack, and 'near me' searches — where the majority of chiropractic patients search. Regular SEO targets broader organic rankings for condition-based content." },
        { question: "How do you optimize my Google Business Profile for chiropractic?", answer: "We optimize every field — categories, services, service areas, photos, Q&A, posts, and review response strategy. We also build local citations and ensure NAP consistency across all directories." },
        { question: "Can you help me rank for personal injury and auto accident keywords?", answer: "Absolutely. PI keywords like 'auto accident chiropractor' and 'whiplash treatment' are high-value terms. We build dedicated PI landing pages and optimize your GBP for accident-related services." },
        { question: "How does AI search (ChatGPT, Gemini) affect how patients find chiropractors?", answer: "AI assistants are increasingly recommending local providers. We build structured content and citations that help AI platforms recognize and recommend your practice when patients ask for chiropractic recommendations." },
        { question: "Will SEO work in a competitive chiropractic market?", answer: "Yes, but strategy matters. We start with less competitive long-tail keywords and build authority systematically. In competitive markets, the combination of content velocity, review strategy, and technical SEO creates compounding advantages." },
        { question: "How do you build condition-specific content for my practice?", answer: "We create clinically informed content for each condition you treat — using search intent data, competitive analysis, and your clinical expertise to build pages that rank and convert." },
        { question: "How do you track and report SEO results for chiropractic practices?", answer: "Monthly reports cover keyword rankings, Map Pack position, organic traffic, phone calls, and form submissions. You also get access to a live dashboard to check progress anytime." },
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
      description: "How we helped a chiropractic clinic in Tracy, CA increase organic visibility and patient appointments.",
      url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/",
      icon: Search,
    },
  ],
};
