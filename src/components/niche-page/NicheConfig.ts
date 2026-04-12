/**
 * NicheConfig — TypeScript interface for niche page configuration.
 *
 * Every PARAM field must be supplied per-niche.
 * FIXED fields (identical across niches) live inside the section components.
 */

import type { LucideIcon } from "lucide-react";

// ───────────────────────────── Sub-types ─────────────────────────────

export interface StatItem {
  value: string;
  label: string;
}

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  hasImage: boolean;
  showAILogos: boolean;
}

export interface OnThisPageItem {
  id: string;
  label: string;
  icon: string; // emoji
}

export interface KeywordCategory {
  label: string;
  icon: LucideIcon;
  image: string;
  keywords: string[];
  competitors: string;
}

export interface PlatformRecommendation {
  name: string;
  reason: string;
}

export interface PaidMediaGenre {
  genre: string;
  icon: LucideIcon;
  primary: PlatformRecommendation[];
  secondary: PlatformRecommendation[];
  color: string;
}

export interface AdCreative {
  id: string;
  genre: string;
  image: string;
  platforms: string[];
  description: string;
}

export interface SocialPlatform {
  name: string;
  icon: LucideIcon;
  strategy: string;
}

export interface SocialMediaGenre {
  genre: string;
  primary: SocialPlatform[];
  secondary: SocialPlatform[];
  color: string;
}

export interface LinkedInOutreach {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  stats: StatItem[];
}

export interface ClientJourneyStage {
  stage: string;
  icon: LucideIcon;
  description: string;
  goal: string;
  color: string;
}

export interface EmailSequenceStep {
  day: string;
  label: string;
  channels: string;
  description: string;
}

export interface NoShowResearchCitation {
  stat: string;
  source: string;
  publication: string;
  year: string;
  label: string;
}

export interface SessionReminderWorkflow {
  sessionType: string;
  icon: LucideIcon;
  color: string;
  description: string;
  noShowImpact: string;
  reminders: {
    timing: string;
    channels: string[];
    content: string;
  }[];
  expectedReduction: string;
}

export interface CampaignOffer {
  headline: string;
  tagline: string;
  price: string;
  originalPrice: string;
  savings: string;
  includes: string[];
  urgency: string;
  cta: string;
}

export interface MarketingCampaign {
  genre: string;
  icon: LucideIcon;
  color: string;
  offer: CampaignOffer;
  funnel: string[];
  topPlatforms: string[];
  seasonality: string;
}

export interface SeasonalCampaign {
  campaign: string;
  timing: string;
  offer: string;
  channels: string[];
}

export interface PastClientWorkflow {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EmailNurturePoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ReviewFlowStep {
  step: string;
  title: string;
  description: string;
}

export interface GiftAndReferralProgram {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface AiFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  faqs: { question: string; answer: string }[];
}

export interface WhyChooseUsCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudyLink {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
}

export interface TrackingRetargetingItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

// ───────────────────────────── New Extension Types ─────────────────────

export interface HeroExtendedItem {
  icon: LucideIcon;
  headline: string;
  body: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
  icon: LucideIcon;
}

export interface RealResultsCard {
  campaignType: string;
  headline: string;
  period: string;
  metrics: StatItem[];
  bodyCopy: string;
  caseStudyUrl?: string;
}

export interface CampaignCard {
  title: string;
  channel: string;
  metrics: string[];
  highlight?: string;
}

export interface CoreService {
  title: string;
  whatWeDo: string;
  impact: string;
  icon: LucideIcon;
  url?: string;
}

export interface MidPageCta {
  headline: string;
  subtext: string;
  primaryLabel: string;
  position: "afterHowItWorks" | "afterWhoThisIsFor" | "afterServices";
}

// ───────────────────────────── CTA Config ─────────────────────────────

export interface CtaBlockConfig {
  headline: string;
  subtext: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface StickyCtaConfig {
  title: string;
  description: string;
  buttonText: string;
  accentWords: string[];
  showAfterScroll: number;
}

// ───────────────────────────── Main Config ─────────────────────────────

export interface NicheConfig {
  // ── 4.1 Page Meta ──
  pageTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  serviceName: string;
  serviceType: string;
  serviceDescription: string;
  breadcrumbs: { name: string; url: string }[];

  // ── 4.2 Hero Section ──
  heroImage: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  h1Line1: string;
  h1Line2: string;
  h1Highlight: string;
  heroSubheadline: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaAnchor: string;
  statsBar: StatItem[];

  // ── 4.3 Pain Points ──
  painPointsHeadline: string;
  painPointsSubheadline: string;
  painPoints: PainPoint[];
  transitionText: string;
  transitionSubtext: string;

  // ── 4.4 System Diagram ──
  systemDiagramHeadline: string;
  systemDiagramBody: string;

  // ── 4.5 Mid-Page CTA Blocks ──
  ctaAfterPainPoints: CtaBlockConfig;
  ctaAfterSeo: CtaBlockConfig;
  ctaAfterGrowthSystem: CtaBlockConfig;

  // ── 4.6 On This Page ──
  onThisPageItems: OnThisPageItem[];

  // ── 4.7 Website Design ──
  websiteDesignBadge: string;
  websiteDesignHeadline: string;
  websiteDesignHighlight: string;
  websiteDesignSubheadline: string;
  websiteDesignImage: string;
  websiteDesignFeatureHeadline: string;
  websiteDesignFeatureBody: string;
  websiteDesignBullets: string[];
  aiSearchCalloutHeadline: string;
  aiSearchCalloutHighlight: string;
  aiSearchCalloutBody: string;
  aiSearchStats: StatItem[];

  // ── 4.8 SEO Section ──
  seoBadge: string;
  seoHeadline: string;
  seoHighlight: string;
  seoSubheadline: string;
  seoEditorialHeadline: string;
  seoEditorialHighlight: string;
  seoEditorialBody: string[];
  seoEditorialPullQuote: string;
  seoKeywordCategories: Record<string, KeywordCategory>;

  // ── 4.9 Paid Media ──
  paidMediaHeadline: string;
  paidMediaHighlight: string;
  paidMediaSubheadline: string;
  adCreatives: AdCreative[];
  paidMediaByGenre: PaidMediaGenre[];
  metaAdSetupHeadline: string;
  metaAdSetupSubheadline: string;
  trackingRetargetingEssentials: TrackingRetargetingItem[];

  // ── 4.10 Retargeting ──
  retargetingHeadline: string;
  retargetingHighlight: string;
  retargetingSubheadline: string;
  retargetingBody: string[];

  // ── 4.11 Social Media ──
  socialMediaHeadline: string;
  socialMediaHighlight: string;
  socialMediaSubheadline: string;
  socialMediaByGenre: SocialMediaGenre[];
  linkedInOutreachEnabled: boolean;
  linkedInOutreach?: LinkedInOutreach;

  // ── 4.12 AI Growth System ──
  growthSystemHeadline: string;
  growthSystemHighlight: string;
  growthSystemSubheadline: string;
  clientJourneyStages: ClientJourneyStage[];
  emailNurturePoints: EmailNurturePoint[];
  emailSequenceTitle: string;
  emailSequenceHighlight: string;
  noShowResearchCitations: NoShowResearchCitation[];
  sessionReminderWorkflows: SessionReminderWorkflow[];
  marketingCampaigns: MarketingCampaign[];
  seasonalCampaigns: SeasonalCampaign[];
  pastClientWorkflows: PastClientWorkflow[];

  // ── 4.13 Reputation ──
  reputationHeadline: string;
  reputationHighlight: string;
  reputationSubheadline: string;
  reputationBullets: string[];
  reviewFlowSteps: ReviewFlowStep[];
  giftCardUseCases: string;
  giftAndReferralPrograms: GiftAndReferralProgram[];

  // ── 4.14 AI Voice & Chat ──
  aiVoiceChatSectionHeadline: string;
  aiVoiceChatHighlight: string;
  aiVoiceChatSubheadline: string;
  aiFeatures: AiFeature[];

  // ── 4.15 Why Choose Us ──
  whyChooseUsHeadline: string;
  whyChooseUsSubtitle: string;
  whyChooseUsBody: string;
  whyChooseUsCards: WhyChooseUsCard[];

  // ── 4.16 FAQ ──
  faqHeadline: string;
  faqSubheadline: string;
  faqCategories: FaqCategory[];
  faqCtaCard: { headline: string; body: string; signoff: string };

  // ── 4.17 Contact Section ──
  contactSectionHeadline: string;
  contactSectionBody: string;

  // ── Sticky CTA ──
  stickyCtaConfig: StickyCtaConfig;

  // ── Case Study Links (optional) ──
  caseStudyLinks?: CaseStudyLink[];

  // ── NEW EXTENSION FIELDS (all optional) ──

  // ── Hero Extended ──
  heroExtendedHeadline?: string;
  heroExtendedHighlight?: string;
  heroExtended?: HeroExtendedItem[];

  // ── How It Works ──
  howItWorksHeadline?: string;
  howItWorksHighlight?: string;
  howItWorksBadge?: string;
  processSteps?: ProcessStep[];

  // ── Who This Is For ──
  whoThisIsForHeadline?: string;
  whoThisIsForHighlight?: string;
  whoThisIsForBadge?: string;
  strongFitItems?: string[];
  notFitItems?: string[];
  strongFitLabel?: string;
  notFitLabel?: string;

  // ── Mid-Page CTA (injectable) ──
  midPageCta?: MidPageCta;

  // ── Real Results (embedded case study metrics) ──
  realResultsHeadline?: string;
  realResultsSubheadline?: string;
  realResults?: RealResultsCard[];

  // ── Campaign Results Cards (visual proof) ──
  campaignResultsCardsHeadline?: string;
  campaignResultsCards?: CampaignCard[];

  // ── Core Services Overview ──
  coreServicesHeadline?: string;
  coreServicesSubheadline?: string;
  coreServices?: CoreService[];

  // ── Staged Approach ──
  stagedApproachHeadline?: string;
  stagedApproachSubheadline?: string;
  stagedApproachBadge?: string;
  stagedApproachStages?: StageItem[];

  // ── Four-Lane Search Dominance ──
  fourLaneHeadline?: string;
  fourLaneHighlight?: string;
  fourLaneBadge?: string;
  fourLaneSubheadline?: string;
  fourLaneLanes?: SearchLane[];
  searchComparisonTitle?: string;
  searchComparisonSubtitle?: string;
  searchComparisonPanels?: SearchComparisonPanel[];
}
