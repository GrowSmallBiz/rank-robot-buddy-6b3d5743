/**
 * NicheConfigTemplate — Blank starter config for a new niche page.
 *
 * USAGE:
 *   1. Copy this file to `src/pages/industries/<your-niche>/config.ts`
 *   2. Fill in every field with niche-specific content
 *   3. Create an `index.tsx` that imports your config + NichePage:
 *
 *      import NichePage from "@/components/niche-page/NichePage";
 *      import { config } from "./config";
 *      const MyNichePage = () => <NichePage config={config} />;
 *      export default MyNichePage;
 *
 *   4. Add a route in App.tsx
 *   5. Add a menu link in Header.tsx
 */

import type { NicheConfig } from "./NicheConfig";
import {
  Camera, // Replace with your niche icon
  Search,
  TrendingUp,
  Star,
  Users,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  Shield,
  Clock,
  Heart,
  Globe,
  Megaphone,
  Mail,
  Phone,
  Bot,
  Mic,
  Gift,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  DollarSign,
  Eye,
  Repeat,
  Share2,
  ThumbsUp,
  Award,
  Rocket,
  Lightbulb,
  MapPin,
  Layers,
  RefreshCw,
  MousePointerClick,
  BrainCircuit,
  Headphones,
} from "lucide-react";

/**
 * Replace all placeholder values below with your niche-specific content.
 * Search for "TODO" to find fields that need attention.
 */
export const blankConfig: NicheConfig = {
  // ══════════════════════════════════════════════════════════════════════
  // 4.1  PAGE META
  // ══════════════════════════════════════════════════════════════════════

  /** Browser tab title — keep under 60 chars for SEO */
  pageTitle: "TODO: [Niche] Marketing | Rank Robot Buddy",

  /** Meta description — keep under 160 chars */
  metaDescription: "TODO: Describe your niche marketing page in one sentence.",

  /** Full canonical URL */
  canonicalUrl: "https://rank-robot-buddy.lovable.app/professional-services/TODO-slug/",

  /** Used in ServiceJsonLd structured data */
  serviceName: "TODO: Niche Marketing Services",
  serviceType: "TODO: Marketing Agency",
  serviceDescription: "TODO: One-line service description for structured data.",

  /** Breadcrumb trail for SEO */
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "TODO: Niche Marketing", url: "/professional-services/TODO-slug/" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.2  HERO SECTION
  // ══════════════════════════════════════════════════════════════════════

  /** Hero background image URL */
  heroImage: "TODO: /path/to/hero-image.jpg",

  /** Small badge above headline */
  badgeText: "TODO: #1 Niche Marketing Platform",
  badgeIcon: Camera, // TODO: pick relevant icon

  /** H1 is composed of three parts: line1 + line2 + highlight (italic gradient) */
  h1Line1: "TODO: Grow Your",
  h1Line2: "TODO: Niche Business With",
  h1Highlight: "TODO: AI-Powered Marketing",

  /** Subheadline below H1 */
  heroSubheadline: "TODO: Describe your value proposition in 1–2 sentences.",

  /** Primary CTA button label */
  primaryCtaLabel: "Schedule Strategy Call",

  /** Secondary CTA (anchor link) */
  secondaryCtaLabel: "See What's Included",
  secondaryCtaAnchor: "#page-index",

  /** Stats bar below hero (3–4 items) */
  statsBar: [
    { value: "TODO", label: "TODO: Stat 1" },
    { value: "TODO", label: "TODO: Stat 2" },
    { value: "TODO", label: "TODO: Stat 3" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.3  PAIN POINTS
  // ══════════════════════════════════════════════════════════════════════

  painPointsHeadline: "TODO: Common Challenges for [Niche] Businesses",
  painPointsSubheadline: "TODO: Describe the frustrations your target audience faces.",

  /** 3–6 pain point cards */
  painPoints: [
    {
      icon: Search,
      title: "TODO: Pain Point 1",
      description: "TODO: Describe this pain point.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: TrendingUp,
      title: "TODO: Pain Point 2",
      description: "TODO: Describe this pain point.",
      hasImage: false,
      showAILogos: false,
    },
    {
      icon: Users,
      title: "TODO: Pain Point 3",
      description: "TODO: Describe this pain point.",
      hasImage: false,
      showAILogos: false,
    },
  ],

  /** Transition text after pain points grid */
  transitionText: "TODO: Ready for a better way?",
  transitionSubtext: "TODO: Here's the system that fixes everything above.",

  // ══════════════════════════════════════════════════════════════════════
  // 4.4  SYSTEM DIAGRAM
  // ══════════════════════════════════════════════════════════════════════

  systemDiagramHeadline: "TODO: The Complete System",
  systemDiagramBody: "TODO: Explain how all marketing channels work together.",

  // ══════════════════════════════════════════════════════════════════════
  // 4.5  MID-PAGE CTA BLOCKS
  // ══════════════════════════════════════════════════════════════════════

  ctaAfterPainPoints: {
    headline: "TODO: Ready to Fix These Problems?",
    subtext: "TODO: Book a free call to learn how.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Learn More",
  },

  ctaAfterSeo: {
    headline: "TODO: Want a Free SEO Audit?",
    subtext: "TODO: See where you stand vs competitors.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Learn More",
  },

  ctaAfterGrowthSystem: {
    headline: "TODO: Ready to Automate Your Growth?",
    subtext: "TODO: Let AI handle the follow-ups.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Learn More",
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4.6  ON THIS PAGE NAV
  // ══════════════════════════════════════════════════════════════════════

  onThisPageItems: [
    { id: "website-design", label: "Website Design", icon: "🌐" },
    { id: "seo", label: "SEO", icon: "🔍" },
    { id: "paid-media", label: "Paid Media", icon: "📢" },
    { id: "retargeting", label: "Retargeting", icon: "🎯" },
    { id: "social-media", label: "Social Media", icon: "📱" },
    { id: "ai-growth", label: "AI Growth System", icon: "🤖" },
    { id: "reputation", label: "Reputation", icon: "⭐" },
    { id: "ai-voice-chat", label: "AI Voice & Chat", icon: "🎙️" },
    { id: "why-choose", label: "Why Choose Us", icon: "🏆" },
    { id: "faq", label: "FAQ", icon: "❓" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.7  WEBSITE DESIGN
  // ══════════════════════════════════════════════════════════════════════

  websiteDesignBadge: "TODO: Website Design for [Niche]",
  websiteDesignHeadline: "TODO: A Website That",
  websiteDesignHighlight: "Converts Visitors Into Clients",
  websiteDesignSubheadline: "TODO: Explain why a great website matters for this niche.",
  websiteDesignImage: "TODO: /path/to/website-screenshot.jpg",
  websiteDesignFeatureHeadline: "TODO: Built for [Niche] Success",
  websiteDesignFeatureBody: "TODO: Describe the website features.",
  websiteDesignBullets: [
    "TODO: Feature 1",
    "TODO: Feature 2",
    "TODO: Feature 3",
    "TODO: Feature 4",
    "TODO: Feature 5",
  ],

  /** AI Search callout within website section */
  aiSearchCalloutHeadline: "TODO: Optimized for",
  aiSearchCalloutHighlight: "AI Search Engines",
  aiSearchCalloutBody: "TODO: Explain AEO/GEO relevance for this niche.",
  aiSearchStats: [
    { value: "TODO", label: "TODO: AI stat 1" },
    { value: "TODO", label: "TODO: AI stat 2" },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.8  SEO SECTION
  // ══════════════════════════════════════════════════════════════════════

  seoBadge: "TODO: SEO for [Niche]",
  seoHeadline: "TODO: Dominate Local Search With",
  seoHighlight: "AI-Powered SEO",
  seoSubheadline: "TODO: Explain SEO value for this niche.",
  seoEditorialHeadline: "TODO: Content That Ranks",
  seoEditorialHighlight: "& Converts",
  seoEditorialBody: [
    "TODO: Paragraph 1 about editorial SEO strategy.",
    "TODO: Paragraph 2 about content approach.",
  ],
  seoEditorialPullQuote: "TODO: A compelling pull-quote about SEO results.",

  /** Keyword categories for the keyword research showcase */
  seoKeywordCategories: {
    category1: {
      label: "TODO: Category 1",
      icon: Search,
      image: "TODO: /path/to/image.jpg",
      keywords: ["TODO: keyword 1", "TODO: keyword 2", "TODO: keyword 3"],
      competitors: "TODO: Competitor landscape description",
    },
    category2: {
      label: "TODO: Category 2",
      icon: Camera,
      image: "TODO: /path/to/image.jpg",
      keywords: ["TODO: keyword 1", "TODO: keyword 2", "TODO: keyword 3"],
      competitors: "TODO: Competitor landscape description",
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4.9  PAID MEDIA
  // ══════════════════════════════════════════════════════════════════════

  paidMediaHeadline: "TODO: Strategic Paid Advertising for",
  paidMediaHighlight: "[Niche] Businesses",
  paidMediaSubheadline: "TODO: Explain multi-platform ad strategy.",

  /** Ad creative examples */
  adCreatives: [
    {
      id: "ad1",
      genre: "TODO: Genre",
      image: "TODO: /path/to/ad-creative.jpg",
      platforms: ["Google Ads", "Meta"],
      description: "TODO: Describe this ad creative approach.",
    },
  ],

  /** Platform recommendations by genre */
  paidMediaByGenre: [
    {
      genre: "TODO: Genre 1",
      icon: Target,
      primary: [
        { name: "Google Ads", reason: "TODO: Why this platform" },
        { name: "Meta Ads", reason: "TODO: Why this platform" },
      ],
      secondary: [
        { name: "YouTube", reason: "TODO: Why this platform" },
      ],
      color: "from-blue-500/20 to-blue-600/10",
    },
  ],

  /** Meta ad setup details */
  metaAdSetupHeadline: "TODO: Professional Ad Setup",
  metaAdSetupSubheadline: "TODO: Describe tracking & retargeting infrastructure.",
  trackingRetargetingEssentials: [
    {
      title: "TODO: Tracking Item 1",
      description: "TODO: Description",
      icon: Eye,
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.10  RETARGETING
  // ══════════════════════════════════════════════════════════════════════

  retargetingHeadline: "TODO: Smart Retargeting for",
  retargetingHighlight: "[Niche]",
  retargetingSubheadline: "TODO: Explain retargeting value.",
  retargetingBody: [
    "TODO: Paragraph about retargeting strategy.",
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.11  SOCIAL MEDIA
  // ══════════════════════════════════════════════════════════════════════

  socialMediaHeadline: "TODO: Social Media Strategy for",
  socialMediaHighlight: "[Niche]",
  socialMediaSubheadline: "TODO: Explain social media approach.",

  socialMediaByGenre: [
    {
      genre: "TODO: Genre 1",
      primary: [
        { name: "Instagram", icon: Camera, strategy: "TODO: Platform strategy" },
      ],
      secondary: [
        { name: "Facebook", icon: Users, strategy: "TODO: Platform strategy" },
      ],
      color: "from-pink-500/20 to-purple-600/10",
    },
  ],

  /** Set to true if LinkedIn outreach is relevant for this niche */
  linkedInOutreachEnabled: false,
  linkedInOutreach: undefined,

  // ══════════════════════════════════════════════════════════════════════
  // 4.12  AI GROWTH SYSTEM
  // ══════════════════════════════════════════════════════════════════════

  growthSystemHeadline: "TODO: AI-Powered Growth System for",
  growthSystemHighlight: "[Niche]",
  growthSystemSubheadline: "TODO: Explain the automated growth system.",

  /** Client journey stages */
  clientJourneyStages: [
    {
      stage: "TODO: Stage 1",
      icon: Search,
      description: "TODO: What happens at this stage",
      goal: "TODO: The goal of this stage",
      color: "from-blue-500 to-blue-600",
    },
  ],

  /** Email nurture sequence highlights */
  emailNurturePoints: [
    {
      title: "TODO: Nurture Point 1",
      description: "TODO: Description",
      icon: Mail,
    },
  ],

  emailSequenceTitle: "TODO: Automated Follow-Up",
  emailSequenceHighlight: "Sequence",

  /** No-show prevention research */
  noShowResearchCitations: [
    {
      stat: "TODO: 23% average no-show rate",
      source: "TODO: Source name",
      publication: "TODO: Publication",
      year: "2024",
      label: "TODO: Label",
    },
  ],

  /** Session reminder workflows */
  sessionReminderWorkflows: [
    {
      sessionType: "TODO: Session Type",
      icon: CalendarCheck,
      color: "from-blue-500 to-blue-600",
      description: "TODO: Describe this reminder workflow.",
      noShowImpact: "TODO: Impact of no-shows",
      reminders: [
        {
          timing: "TODO: 48 hours before",
          channels: ["SMS", "Email"],
          content: "TODO: Reminder message content",
        },
      ],
      expectedReduction: "TODO: 60% reduction",
    },
  ],

  /** Marketing campaigns by genre */
  marketingCampaigns: [
    {
      genre: "TODO: Campaign Genre",
      icon: Megaphone,
      color: "from-orange-500 to-red-500",
      offer: {
        headline: "TODO: Campaign Headline",
        tagline: "TODO: Tagline",
        price: "$TODO",
        originalPrice: "$TODO",
        savings: "TODO: Save $XX",
        includes: ["TODO: Item 1", "TODO: Item 2"],
        urgency: "TODO: Limited time offer",
        cta: "Book Now",
      },
      funnel: ["TODO: Step 1", "TODO: Step 2", "TODO: Step 3"],
      topPlatforms: ["Google Ads", "Meta"],
      seasonality: "TODO: Year-round / Seasonal",
    },
  ],

  /** Seasonal campaign calendar */
  seasonalCampaigns: [
    {
      campaign: "TODO: Campaign Name",
      timing: "TODO: Jan–Mar",
      offer: "TODO: Special offer description",
      channels: ["Email", "Social", "Ads"],
    },
  ],

  /** Past client re-engagement workflows */
  pastClientWorkflows: [
    {
      title: "TODO: Re-engagement Workflow",
      description: "TODO: Description",
      icon: RefreshCw,
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.13  REPUTATION
  // ══════════════════════════════════════════════════════════════════════

  reputationHeadline: "TODO: Build a 5-Star Reputation for",
  reputationHighlight: "[Niche]",
  reputationSubheadline: "TODO: Explain reputation management value.",
  reputationBullets: [
    "TODO: Reputation benefit 1",
    "TODO: Reputation benefit 2",
    "TODO: Reputation benefit 3",
  ],

  /** Automated review collection flow */
  reviewFlowSteps: [
    { step: "1", title: "TODO: Step 1", description: "TODO: Description" },
    { step: "2", title: "TODO: Step 2", description: "TODO: Description" },
    { step: "3", title: "TODO: Step 3", description: "TODO: Description" },
  ],

  giftCardUseCases: "TODO: Describe gift card and referral use cases.",

  giftAndReferralPrograms: [
    {
      title: "TODO: Program 1",
      description: "TODO: Description",
      icon: Gift,
      features: ["TODO: Feature 1", "TODO: Feature 2"],
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.14  AI VOICE & CHAT
  // ══════════════════════════════════════════════════════════════════════

  aiVoiceChatSectionHeadline: "TODO: AI Voice & Chat for",
  aiVoiceChatHighlight: "[Niche]",
  aiVoiceChatSubheadline: "TODO: Explain AI communication features.",

  aiFeatures: [
    {
      title: "TODO: AI Feature 1",
      description: "TODO: Description",
      icon: Bot,
      features: ["TODO: Capability 1", "TODO: Capability 2"],
      color: "from-blue-500/20 to-blue-600/10",
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.15  WHY CHOOSE US
  // ══════════════════════════════════════════════════════════════════════

  whyChooseUsHeadline: "TODO: Why Choose Rank Robot Buddy for [Niche]",
  whyChooseUsSubtitle: "TODO: Short subtitle",
  whyChooseUsBody: "TODO: 1–2 sentences about differentiation.",

  whyChooseUsCards: [
    { title: "TODO: Differentiator 1", description: "TODO: Description", icon: Award },
    { title: "TODO: Differentiator 2", description: "TODO: Description", icon: Rocket },
    { title: "TODO: Differentiator 3", description: "TODO: Description", icon: Shield },
    { title: "TODO: Differentiator 4", description: "TODO: Description", icon: Zap },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // 4.16  FAQ
  // ══════════════════════════════════════════════════════════════════════

  faqHeadline: "TODO: Frequently Asked Questions",
  faqSubheadline: "TODO: Common questions about [niche] marketing.",

  faqCategories: [
    {
      id: "general",
      label: "General",
      icon: MessageSquare,
      color: "from-blue-500/20 to-blue-600/10",
      faqs: [
        {
          question: "TODO: Question 1?",
          answer: "TODO: Answer 1.",
        },
        {
          question: "TODO: Question 2?",
          answer: "TODO: Answer 2.",
        },
      ],
    },
  ],

  faqCtaCard: {
    headline: "TODO: Still Have Questions?",
    body: "TODO: We'd love to chat about your [niche] marketing goals.",
    signoff: "— The Rank Robot Buddy Team",
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4.17  CONTACT SECTION
  // ══════════════════════════════════════════════════════════════════════

  contactSectionHeadline: "TODO: Let's Grow Your [Niche] Business",
  contactSectionBody: "TODO: Invitation to schedule a strategy session.",

  // ══════════════════════════════════════════════════════════════════════
  // STICKY CTA
  // ══════════════════════════════════════════════════════════════════════

  stickyCtaConfig: {
    title: "TODO: Ready to Grow Your [Niche]?",
    description: "TODO: Short value prop for the sticky popup.",
    buttonText: "Schedule Strategy Call",
    accentWords: ["Strategy Call"],
    showAfterScroll: 60,
  },
};
