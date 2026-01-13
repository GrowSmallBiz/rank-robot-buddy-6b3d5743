import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlowCard } from "@/components/ui/glow-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Camera,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Image,
  Heart,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  Gift,
  Repeat,
  Share2,
  Search,
  Globe,
  Zap,
  Database,
  BarChart3,
  Eye,
  FileSearch,
  FileText,
  MousePointerClick,
  Megaphone,
  RefreshCw,
  Linkedin,
  Instagram,
  Facebook,
  Video,
  Sparkles,
  Shield,
  DollarSign,
  UserPlus,
  Mic,
  X,
  CheckCircle
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, photographerBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA, PersonCTA, StickyCardCTA } from "@/components/services";
import { SectionHeader } from "@/components/services/SectionHeader";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import photographerHeroImage from "@/assets/industry-photographer-hero.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Ad Creative Images
import adCreativeFamilyPortrait from "@/assets/ad-creative-portrait-family.jpg";
import adCreativeMaternity from "@/assets/ad-creative-maternity-newborn.jpg";
import adCreativeSenior from "@/assets/ad-creative-senior-portrait-female.jpg";
import adCreativeWedding from "@/assets/ad-creative-wedding.jpg";
import adCreativeBranding from "@/assets/ad-creative-branding-headshot.jpg";

// Portfolio Website Image
import portfolioPhotographerWebsite from "@/assets/portfolio-photographer-website.jpg";

// Challenge Images
import challengeEmptyCalendar from "@/assets/challenge-empty-calendar.jpg";
import challengeReferralHandoff from "@/assets/challenge-referral-handoff.jpg";
import challengeGoogleRankings from "@/assets/challenge-google-ranking-female.jpg";
import challengePriceShopper from "@/assets/challenge-price-shopper.jpg";
import challengePriceWar from "@/assets/challenge-price-war-female.jpg";

// Growth Signal Images
import signalEmptyCalendar from "@/assets/signal-empty-calendar.jpg";
import signalPriceRace from "@/assets/signal-price-race.jpg";
import signalGoogleInvisible from "@/assets/signal-google-invisible.jpg";
import signalSocialBurnout from "@/assets/social-media-burnout-female.jpg";

// Content Strategy Images
import articleQualityMetrics from "@/assets/article-quality-metrics.png";
import topicalMapAuthority from "@/assets/topical-map-authority.png";
import articleScoreInsights from "@/assets/article-score-insights.png";
import articleStructure from "@/assets/article-structure.png";
import articleKeywords from "@/assets/article-keywords.png";
import articleCompetitors from "@/assets/article-competitors.png";
import contentAgents from "@/assets/content-agents.png";
import contentRefiners from "@/assets/content-refiners.png";

// Technical SEO Images
import technicalSeoImage from "@/assets/technical-seo.png";
import onPageSeoImage from "@/assets/on-page-seo.png";
import linkBuildingImage from "@/assets/link-building.png";
import localSeoImage from "@/assets/local-seo.png";
import seoDashboardImage from "@/assets/seo-dashboard-metrics.png";
import aeoServiceImage from "@/assets/aeo-service.png";
import geoServiceImage from "@/assets/geo-service.png";
import googlePpcScreenshot from "@/assets/ad-screenshot-google-ppc.png";
import idxGoogleMap from "@/assets/idx-google-map.png";
import localHeatmap from "@/assets/local-heatmap.png";
import localCitationAggregators from "@/assets/local-citation-aggregators.png";
import socialMediaHero from "@/assets/social-media-hero.jpg";
import llmVisibilitySentiment from "@/assets/llm-visibility-sentiment.png";
import llmVisibilityDashboard from "@/assets/llm-visibility-dashboard.png";
import pressReleaseDistribution from "@/assets/press-release-distribution.png";
import backlinkAnalyticsDashboard from "@/assets/backlink-analytics-dashboard.png";

// AI Growth System Funnel
import aiGrowthSystemFunnel from "@/assets/ai-growth-system-funnel.webp";

// Content Insights images
const contentInsightsImages = [
  { src: articleScoreInsights, alt: "Content scoring insights" },
  { src: articleCompetitors, alt: "Competitor analysis" }
];

// Content Agents & Refiners images
const contentAgentsRefinersImages = [
  { src: contentAgents, alt: "Content Agents - Create and improve content" },
  { src: contentRefiners, alt: "Content Refiners - Polish and optimize" }
];
const photographyAdCreatives = [
  {
    id: "family",
    genre: "Family Portraits",
    image: adCreativeFamilyPortrait,
    platforms: ["Facebook", "Instagram"],
    description: "Warm, emotional family moments that resonate with parents"
  },
  {
    id: "maternity",
    genre: "Maternity & Newborn",
    image: adCreativeMaternity,
    platforms: ["Instagram", "Pinterest"],
    description: "Tender, soft imagery targeting expecting mothers"
  },
  {
    id: "senior",
    genre: "High School Seniors",
    image: adCreativeSenior,
    platforms: ["Facebook", "Instagram", "TikTok"],
    description: "Modern, trendy vibes that appeal to teens and parents"
  },
  {
    id: "wedding",
    genre: "Wedding Photography",
    image: adCreativeWedding,
    platforms: ["Pinterest", "Instagram", "The Knot"],
    description: "Romantic, aspirational content for engaged couples"
  },
  {
    id: "branding",
    genre: "Headshots & Branding",
    image: adCreativeBranding,
    platforms: ["LinkedIn", "Facebook"],
    description: "Professional, polished imagery for business owners"
  }
];

// Import AI Platform Icons
import { GeminiIcon, ChatGPTIcon, PerplexityIcon, GrokIcon, CopilotIcon, GoogleAIIcon } from "@/components/icons/AIplatformIcons";
import subrataHeadshot from "@/assets/subrata-guha-headshot.jpg";

// AI Platforms Data
const aiPlatforms = [
  { name: "ChatGPT", icon: ChatGPTIcon },
  { name: "Gemini", icon: GeminiIcon },
  { name: "Perplexity", icon: PerplexityIcon },
  { name: "Grok", icon: GrokIcon },
  { name: "Copilot", icon: CopilotIcon },
  { name: "Google AI", icon: GoogleAIIcon },
];

// Merged Reality Section - 6 key challenges with mixed visual styles
const realityChallenges = [
  {
    icon: Calendar,
    title: "Empty Calendar Syndrome",
    description: "Feast-or-famine cycle where some months are packed while others have empty slots and zero inquiries.",
    image: challengeEmptyCalendar,
    hasImage: true,
    showAILogos: false
  },
  {
    icon: Users,
    title: "Referral Dependency",
    description: "Word-of-mouth is great—until it slows down. No control over your growth means unpredictable income.",
    image: challengeReferralHandoff,
    hasImage: true,
    showAILogos: false
  },
  {
    icon: Search,
    title: "Google Ranks Shoot & Burn Photographers Above You",
    description: "Your stunning portfolio sits unseen while photographers with inferior work dominate search results.",
    image: challengeGoogleRankings,
    hasImage: true,
    showAILogos: false
  },
  {
    icon: Bot,
    title: "AI Search Is Not Recommending Your Studio",
    description: "ChatGPT, Gemini, and Perplexity are answering 'best photographer near me'—but they're not mentioning you.",
    hasImage: false,
    showAILogos: true
  },
  {
    icon: Instagram,
    title: "Social Media Posts Not Paying The Bills",
    description: "Likes are coming, but not paying the bills. Hours spent posting with minimal bookings—exhausting effort for little return.",
    image: signalSocialBurnout,
    hasImage: true,
    showAILogos: false
  },
  {
    icon: DollarSign,
    title: "Your Studio Racing to the Bottom on Price",
    description: "Competing on price instead of artistry—attracting bargain hunters who undervalue your work and squeeze your margins.",
    image: challengePriceWar,
    hasImage: true,
    showAILogos: false
  }
];

// Strategy - Keywords & Competitors Research Examples
const keywordExamples = {
  portrait: {
    label: "Portrait Photography",
    icon: Users,
    image: adCreativeFamilyPortrait,
    keywords: [
      "family photographer [city]",
      "newborn photographer near me", 
      "maternity photography [city]",
      "senior portraits [city]"
    ],
    competitors: "Local portrait studios, mini-session photographers"
  },
  wedding: {
    label: "Wedding Photography",
    icon: Heart,
    image: adCreativeWedding,
    keywords: [
      "wedding photographer [city]",
      "elopement photographer [city]",
      "engagement photos [city]",
      "[venue name] wedding photographer"
    ],
    competitors: "Established wedding photographers, The Knot listings"
  },
  headshot: {
    label: "Headshot & Branding",
    icon: Sparkles,
    image: adCreativeBranding,
    keywords: [
      "professional headshot photographer [city]",
      "corporate headshots [city]",
      "personal branding photographer",
      "business portraits [city]"
    ],
    competitors: "Studio headshot services, LinkedIn photo specialists"
  }
};

// Technical SEO Services (consolidated)
const technicalSEOSections = [
  {
    title: "Core Technical SEO",
    icon: FileSearch,
    image: technicalSeoImage,
    items: [
      "Deep Technical Audit",
      "Speed Optimization Experts",
      "Mobile First Approach",
      "Schema & Structured Data",
      "Agentic AI SEO Workflow to deploy technical fixes"
    ]
  },
  {
    title: "On-Page Optimization",
    icon: FileText,
    image: onPageSeoImage,
    items: [
      "Title Tag & Meta Description Optimization",
      "Header Structure (H1-H6) Optimization",
      "Image Alt Text & Compression",
      "Internal Linking Strategy",
      "Content Optimization for Target Keywords"
    ]
  },
  {
    title: "Link Building",
    icon: Share2,
    image: linkBuildingImage,
    items: [
      "Internal Linking Opportunities",
      "Canonical Link Management",
      "Issues with Links Detection & Fix"
    ]
  },
  {
    title: "Cloud Stacks",
    icon: Globe,
    image: localSeoImage,
    items: [
      "AI-Generated Articles with Backlinks",
      "Published Across 14 Trusted Platforms",
      "AWS, Azure, GitHub & More",
      "Full Content Control & Publishing"
    ],
    note: "Build authority with high-quality backlinks from trusted cloud platforms like AWS, Azure, and GitHub—domains that search engines already trust."
  },
  {
    title: "WILDFIRE",
    icon: Zap,
    image: aeoServiceImage,
    items: [
      "Community Backlink Exchange Network",
      "2:1 Exchange System",
      "Links from Other Users' Sites",
      "Approval System for Quality Control"
    ],
    note: "Earn real backlinks from relevant websites through our community exchange—you control which links appear on your site while building domain authority."
  },
  {
    title: "Miscellaneous",
    icon: Database,
    image: geoServiceImage,
    items: [
      "Open Graph Optimization",
      "Twitter Card Setup",
      "Missing Lang Attribute Fix",
      "Custom HTML Content Validation"
    ]
  },
  {
    title: "Agentic AI Workflow",
    icon: Bot,
    image: seoDashboardImage,
    items: [
      "AI-Powered Issue Detection & Resolution",
      "Automated Technical Fix Deployment",
      "Real-Time SEO Health Monitoring",
      "Zero Manual Intervention Required"
    ],
    note: "Our AI agents continuously scan your site for technical issues and deploy fixes automatically—saving you hours of manual work while keeping your SEO in peak condition."
  },
  {
    title: "Instant Indexing",
    icon: Zap,
    image: googlePpcScreenshot,
    items: [
      { text: "Google - GSC Instant Indexing", logo: "google" },
      { text: "Bing - IndexNow Integration", logo: "bing" }
    ],
    hasLogos: true,
    note: "Skip the waiting game—get your new pages indexed in hours instead of weeks, accelerating your SEO rankings faster than competitors."
  }
];

// Content Strategy Features
const contentStrategy = [
  { 
    title: "Build a Topical Map", 
    description: "Strategic content clusters around your photography specialties", 
    icon: Target,
    note: "AI-generated topical maps establish you as an authority by creating interconnected content clusters that signal expertise to search engines—boosting your entire site's rankings."
  },
  { 
    title: "Generate Articles", 
    description: "AI-assisted content creation optimized for search and client education", 
    icon: FileSearch,
    note: "Every article is measured for quality using readability scores, keyword optimization, and engagement metrics—ensuring your content ranks and converts."
  }
];

// Local & Google Business Profile Services
const localGBPServices = [
  { title: "Connect GBP to Get More Local Traffic", description: "Optimize your Google Business Profile for maximum visibility", icon: MapPin, image: idxGoogleMap },
  { title: "Run Heatmap for Local Business", description: "Visualize your local search presence and identify opportunities", icon: BarChart3, image: localHeatmap },
  { title: "Enable GBP + Social Post Automation", description: "Automated posting to keep your profile active and engaging", icon: RefreshCw, image: socialMediaHero },
  { title: "Local Citation Building", description: "Build consistent listings across 50+ directories", icon: Globe, image: localCitationAggregators }
];

// LLM Visibility & Rank Tracking
const llmVisibilityServices = [
  { title: "LLM Visibility & Rank Tracking", description: "Track how AI platforms like ChatGPT, Gemini, Perplexity, and Grok recommend your studio. Monitor your visibility score and sentiment across all major AI search engines.", icon: Bot, images: [llmVisibilitySentiment, llmVisibilityDashboard] }
];

// Online Authority Services
const onlineAuthorityServices = [
  { title: "Publish Press Release", description: "Get featured in news outlets to build credibility and backlinks", icon: Megaphone, image: pressReleaseDistribution },
  { title: "Cloud Stack - Quality Backlink Building", description: "Build high-authority backlinks to boost domain authority", icon: Globe, image: backlinkAnalyticsDashboard }
];

// Color configurations with funnel steps (7 steps)
const colorConfig = {
  pink: {
    bg: "bg-pink-500",
    bgLight: "bg-pink-500/10",
    text: "text-pink-500",
    border: "border-pink-500/30",
    gradient: "from-pink-500 to-pink-600",
    steps: ["bg-pink-500", "bg-pink-500/85", "bg-pink-500/70", "bg-pink-500/55", "bg-pink-500/45", "bg-pink-500/35", "bg-pink-500/25"]
  },
  rose: {
    bg: "bg-rose-500",
    bgLight: "bg-rose-500/10",
    text: "text-rose-500",
    border: "border-rose-500/30",
    gradient: "from-rose-500 to-rose-600",
    steps: ["bg-rose-500", "bg-rose-500/85", "bg-rose-500/70", "bg-rose-500/55", "bg-rose-500/45", "bg-rose-500/35", "bg-rose-500/25"]
  },
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/30",
    gradient: "from-blue-500 to-blue-600",
    steps: ["bg-blue-500", "bg-blue-500/85", "bg-blue-500/70", "bg-blue-500/55", "bg-blue-500/45", "bg-blue-500/35", "bg-blue-500/25"]
  },
  violet: {
    bg: "bg-violet-500",
    bgLight: "bg-violet-500/10",
    text: "text-violet-500",
    border: "border-violet-500/30",
    gradient: "from-violet-500 to-violet-600",
    steps: ["bg-violet-500", "bg-violet-500/85", "bg-violet-500/70", "bg-violet-500/55", "bg-violet-500/45", "bg-violet-500/35", "bg-violet-500/25"]
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/30",
    gradient: "from-amber-500 to-amber-600",
    steps: ["bg-amber-500", "bg-amber-500/85", "bg-amber-500/70", "bg-amber-500/55", "bg-amber-500/45", "bg-amber-500/35", "bg-amber-500/25"]
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    gradient: "from-emerald-500 to-emerald-600",
    steps: ["bg-emerald-500", "bg-emerald-500/85", "bg-emerald-500/70", "bg-emerald-500/55", "bg-emerald-500/45", "bg-emerald-500/35", "bg-emerald-500/25"]
  },
  cyan: {
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/30",
    gradient: "from-cyan-500 to-cyan-600",
    steps: ["bg-cyan-500", "bg-cyan-500/85", "bg-cyan-500/70", "bg-cyan-500/55", "bg-cyan-500/45", "bg-cyan-500/35", "bg-cyan-500/25"]
  },
  teal: {
    bg: "bg-teal-500",
    bgLight: "bg-teal-500/10",
    text: "text-teal-500",
    border: "border-teal-500/30",
    gradient: "from-teal-500 to-teal-600",
    steps: ["bg-teal-500", "bg-teal-500/85", "bg-teal-500/70", "bg-teal-500/55", "bg-teal-500/45", "bg-teal-500/35", "bg-teal-500/25"]
  }
};

// Website Design Features
const websiteFeatures = [
  "Mobile-responsive portfolio galleries",
  "Fast-loading image optimization",
  "Session booking integration",
  "Investment/pricing guide pages (optional)",
  "Client testimonial displays",
  "Blog for SEO content",
  "Contact forms with session type selection",
  "Social media integration"
];

// Managed AI SEO Features
const seoFeatures = [
  "Keyword research for your photography niche",
  "Google Business Profile optimization",
  "Local citation building (50+ directories)",
  "On-page SEO for all pages",
  "Image alt-tag optimization",
  "Schema markup for photographers",
  "Monthly ranking reports",
  "Competitor analysis & strategy"
];

// Paid Media Platform Recommendations by Genre (Primary/Secondary)
const paidMediaByGenre = [
  {
    genre: "Portrait Photographers",
    icon: Users,
    primary: [
      { name: "Meta (FB/IG)", reason: "Visual platform perfect for showcasing portrait work to local parents and families" },
      { name: "Google PPC", reason: "Capture high-intent 'photographer near me' searches—highest conversion intent" }
    ],
    secondary: [
      { name: "Pinterest Ads", reason: "Inspiration-driven; great for 'what to wear' guides and mini-session promos" },
      { name: "YouTube Ads", reason: "Behind-the-scenes content builds trust; good for session previews" }
    ],
    color: "pink"
  },
  {
    genre: "Wedding Photographers",
    icon: Heart,
    primary: [
      { name: "Pinterest Ads", reason: "Wedding planning platform—brides actively searching for inspiration (highest ROI)" },
      { name: "Meta (FB/IG)", reason: "Target engaged couples with visual wedding portfolio ads" }
    ],
    secondary: [
      { name: "Google PPC", reason: "Target 'wedding photographer [city]' and venue-specific searches" },
      { name: "The Knot/Zola", reason: "Wedding-specific platforms where couples actively browse photographers" }
    ],
    color: "rose"
  },
  {
    genre: "Branding Photographers",
    icon: Sparkles,
    primary: [
      { name: "LinkedIn Ads", reason: "Target entrepreneurs, coaches, and business owners directly—best B2B targeting" },
      { name: "Google PPC", reason: "Capture 'professional headshot' and 'branding photographer' searches" }
    ],
    secondary: [
      { name: "Meta (FB/IG)", reason: "Reach personal brand builders via interest-based targeting; lower CPM but less precise" },
      { name: "YouTube Ads", reason: "Showcase transformation stories and behind-the-scenes of branding sessions" }
    ],
    color: "blue"
  }
];

// Retargeting & Lookalike Strategy
const retargetingStrategy = [
  {
    title: "Website Visitor Retargeting",
    description: "Show ads to people who visited your portfolio but didn't inquire. Stay top-of-mind as they compare photographers.",
    icon: RefreshCw
  },
  {
    title: "Lookalike Audiences",
    description: "Upload your past client list. Let Facebook/Google find similar people in your area who match your ideal client profile.",
    icon: Users
  },
  {
    title: "Engagement Retargeting",
    description: "Retarget people who engaged with your social content—liked posts, watched videos, or saved your work.",
    icon: Eye
  }
];

// Tracking Setup
const trackingSetup = [
  {
    name: "Facebook Pixel",
    description: "Track website visitors, measure conversions, and build retargeting audiences from your Meta ads.",
    icon: Facebook
  },
  {
    name: "Google Tag Manager",
    description: "Centralized tag management for all your tracking codes—easy to update without touching website code.",
    icon: Database
  },
  {
    name: "Google Analytics 4",
    description: "Understand your website traffic, see which pages drive inquiries, and track the full customer journey.",
    icon: BarChart3
  }
];

// Social Media Platform Strategy by Genre - Primary & Secondary Tiers
const socialMediaByGenre = [
  {
    genre: "Portrait Photographers",
    primary: [
      { name: "Instagram", icon: Instagram, strategy: "Before/after reveals, behind-the-scenes stories, client testimonials in Reels" },
      { name: "Facebook", icon: Facebook, strategy: "Local community groups, parent groups, mini-session announcements" }
    ],
    secondary: [
      { name: "Pinterest", icon: Image, strategy: "What to wear guides, location inspiration, session type boards" },
      { name: "TikTok", icon: Video, strategy: "Day-in-the-life content, session reveals, trending sounds with family moments" }
    ],
    color: "pink"
  },
  {
    genre: "Wedding Photographers",
    primary: [
      { name: "Instagram", icon: Instagram, strategy: "Full wedding galleries in carousels, Reels of ceremony moments, vendor collaborations" },
      { name: "Pinterest", icon: Image, strategy: "Real wedding boards, venue-specific pins, wedding planning content" }
    ],
    secondary: [
      { name: "TikTok", icon: Video, strategy: "Wedding day clips, photographer POV content, trending audio with wedding footage" },
      { name: "Facebook", icon: Facebook, strategy: "Local wedding planning groups, venue community pages, vendor networking" }
    ],
    color: "rose"
  },
  {
    genre: "Branding Photographers",
    primary: [
      { name: "LinkedIn", icon: Linkedin, strategy: "Thought leadership content, client success stories, business tips for personal branding" },
      { name: "Instagram", icon: Instagram, strategy: "Professional transformation reveals, tips for looking good on camera, brand story content" }
    ],
    secondary: [
      { name: "Facebook", icon: Facebook, strategy: "Local business owner groups, entrepreneur communities, targeted ads to small business pages" },
      { name: "YouTube", icon: Video, strategy: "Behind-the-scenes of branding sessions, tips for looking good on camera, client interviews" }
    ],
    color: "blue"
  }
];

// LinkedIn Outreach for Headshot Photographers
const linkedInOutreach = {
  title: "LinkedIn Outreach Automation for Headshot Photographers",
  subtitle: "Marketing is a numbers game—here's how to scale your outreach",
  description: "For headshot and personal branding photographers, LinkedIn is a goldmine. But manually sending connection requests doesn't scale. You need a workflow-driven automated process.",
  benefits: [
    "Send 100+ personalized connection requests per week (within LinkedIn's limits)",
    "Auto-follow-up sequences after connections accept",
    "Target by job title, industry, company size, and location",
    "Track response rates and optimize messaging",
    "Warm up cold prospects before pitching services"
  ],
  stats: [
    { value: "100+", label: "Connections/week" },
    { value: "25%", label: "Avg acceptance rate" },
    { value: "8-12%", label: "Response rate" }
  ]
};

// AI Client Growth System - Funnels by Genre (Shrinking Funnel Style - 7 Steps)
const clientGrowthFunnels = [
  {
    genre: "Portrait Photography",
    icon: Users,
    color: "pink" as const,
    funnel: ["Awareness", "Interest", "Consideration", "Decision", "Booking", "Experience", "Retention"],
    topPlatforms: ["Meta (FB/IG)", "Pinterest", "Google PPC", "Email"],
    strategy: "Emotional family moments + 'what to wear' lead magnets. Seasonal mini-sessions drive urgency and quick decisions.",
    seasonality: "Peak: Fall & Spring, Mother's Day"
  },
  {
    genre: "Wedding Photography",
    icon: Heart,
    color: "rose" as const,
    funnel: ["Discovery", "Research", "Inquiry", "Consultation", "Proposal", "Booking", "Retention"],
    topPlatforms: ["Pinterest", "Instagram", "The Knot", "Google SEO"],
    strategy: "Visual-first approach. Venue partnerships + real wedding blog posts. Longer decision cycle requires strong nurturing.",
    seasonality: "Peak: Engagement season (Nov-Feb)"
  },
  {
    genre: "Branding Photography",
    icon: Sparkles,
    color: "blue" as const,
    funnel: ["Outreach", "Awareness", "Lead Magnet", "Nurture", "Consultation", "Booking", "Upsell"],
    topPlatforms: ["LinkedIn", "Google PPC", "Meta (FB)", "Email"],
    strategy: "Target entrepreneurs and small business owners. Showcase transformation stories and ROI of professional imagery.",
    seasonality: "Year-round with Q1 surge"
  }
];

// Email Nurture Importance
const emailNurturePoints = [
  {
    title: "Stay Top-of-Mind",
    description: "Most photography purchases aren't impulse decisions. Email keeps you visible during their consideration period.",
    icon: Eye
  },
  {
    title: "Build Trust Over Time",
    description: "Share your work, personality, and expertise. By the time they're ready to book, they already feel like they know you.",
    icon: Heart
  },
  {
    title: "Automate Follow-ups",
    description: "Set it once and let automated sequences nurture leads while you focus on shooting and editing.",
    icon: RefreshCw
  }
];

// Seasonal Campaign Examples
const seasonalCampaigns = [
  {
    campaign: "Mother's Day Special",
    timing: "Launch 4-6 weeks before",
    offer: "Gift cards for mom + mini-session packages",
    channels: ["Email to past clients", "Social media ads", "Website popup"]
  },
  {
    campaign: "Valentine's Couples Sessions",
    timing: "Launch 3-4 weeks before",
    offer: "Romantic couples mini-sessions",
    channels: ["Instagram Reels", "Email to engagement clients", "Google ads"]
  },
  {
    campaign: "Fall Family Sessions",
    timing: "Launch mid-August",
    offer: "Fall foliage family portraits for holiday cards",
    channels: ["Email blast", "Facebook local groups", "Pinterest ads"]
  },
  {
    campaign: "Back-to-School Senior Rush",
    timing: "July announcement",
    offer: "Senior portrait packages before school starts",
    channels: ["Instagram to parents", "High school partnerships", "TikTok"]
  },
  {
    campaign: "Holiday Mini-Sessions",
    timing: "October announcement",
    offer: "Quick holiday-themed sessions",
    channels: ["Email to client list", "Facebook events", "Referral incentive"]
  }
];

// Past Client Outreach
const pastClientWorkflows = [
  {
    title: "Annual Check-in",
    description: "Automated email 11 months after their session to offer an anniversary or updated session.",
    icon: Calendar
  },
  {
    title: "Milestone Triggers",
    description: "For newborn clients, auto-send 6-month and 1-year session reminders based on baby's birthday.",
    icon: Sparkles
  },
  {
    title: "Re-engagement Campaign",
    description: "Haven't heard from a client in 2+ years? Send a 'We miss you' offer with a special return discount.",
    icon: Heart
  }
];

// Reputation Management
const reputationBenefits = [
  "5-star reviews build instant trust with potential clients",
  "Google reviews directly impact your local search ranking",
  "Automated review requests sent after every session",
  "Monitor all platforms: Google, Facebook, Yelp, The Knot",
  "Respond to reviews quickly to show engagement"
];

// Gift Card & Referral Programs
const giftAndReferralPrograms = [
  {
    title: "Gift Card Sales",
    description: "Sell gift cards year-round, especially before holidays. Perfect for baby showers, graduations, and Mother's Day.",
    icon: Gift,
    features: ["Online gift card store", "Custom denominations", "Automated delivery", "Usage tracking"]
  },
  {
    title: "Referral Tracking",
    description: "Know exactly who referred each new client. Track referral sources automatically in your CRM.",
    icon: UserPlus,
    features: ["Unique referral links", "Referral source tagging", "Thank-you automation", "Reward tracking"]
  },
  {
    title: "Referral Rewards",
    description: "Incentivize referrals with credits, prints, or session discounts. Automate reward delivery.",
    icon: DollarSign,
    features: ["Automatic reward triggers", "Credit bank system", "Thank-you emails", "Referral leaderboard"]
  }
];

// Review Request Flow
const reviewRequestFlow = [
  { step: "1", title: "Session Complete", description: "Client receives gallery delivery" },
  { step: "2", title: "Happiness Check", description: "Automated email: 'How was your experience?'" },
  { step: "3", title: "If Positive", description: "Send Google review request link" },
  { step: "4", title: "Review Submitted", description: "Thank-you email + small gift/discount for next session" },
  { step: "5", title: "If Neutral/Negative", description: "Private feedback form to resolve before going public" }
];

// AI Voice & Chat Features
const aiFeatures = [
  {
    title: "24/7 Voice AI Receptionist",
    description: "Never miss a booking call again. AI answers inquiries, checks your calendar availability, and books appointments even at 2am.",
    icon: Phone,
    features: [
      "Answers calls in your brand voice",
      "Checks calendar availability in real-time",
      "Books consultations and sessions",
      "Sends confirmation texts/emails",
      "Transfers urgent calls to you"
    ],
    color: "violet"
  },
  {
    title: "Conversational AI Chat",
    description: "Intelligent chatbot that engages website visitors, answers FAQs about your services, and captures leads across all channels.",
    icon: MessageSquare,
    features: [
      "Website live chat widget",
      "SMS two-way conversations",
      "Facebook Messenger integration",
      "Instagram DM automation",
      "Lead qualification & capture"
    ],
    color: "cyan"
  }
];

// FAQs organized by service category - 10 questions each
const faqCategories = [
  {
    id: "ai-seo",
    label: "AI SEO",
    icon: Search,
    color: "emerald", // Rich green
    faqs: [
      {
        question: "How long does it take to see more photography bookings from SEO?",
        answer: "Most photographers see increased website traffic within 2-3 months and booking inquiries within 3-4 months. Wedding photography keywords often take longer due to competition but deliver high-value clients once ranking."
      },
      {
        question: "Can you help me rank for specific photography niches like newborn or boudoir?",
        answer: "Absolutely! We create dedicated landing pages for each specialty you offer and target clients actively searching for those specific services in your area."
      },
      {
        question: "How does AI improve my SEO strategy?",
        answer: "Our AI analyzes competitor rankings, identifies content gaps, and optimizes your pages for both Google and AI search platforms like ChatGPT and Perplexity—ensuring you're visible wherever clients search."
      },
      {
        question: "What's the difference between local SEO and regular SEO for photographers?",
        answer: "Local SEO focuses on ranking in Google Maps and 'near me' searches—critical for photographers since clients search locally. We optimize your Google Business Profile, build local citations, and target geo-specific keywords."
      },
      {
        question: "How do you optimize my photography website for AI search engines?",
        answer: "We structure your content to be easily understood by AI platforms like ChatGPT, Perplexity, and Google SGE. This includes schema markup, conversational content, and ensuring your expertise is clearly communicated."
      },
      {
        question: "Will SEO work if I'm in a competitive photography market?",
        answer: "Yes, but strategy matters. We identify less competitive long-tail keywords first (like 'intimate elopement photographer Colorado mountains') while building authority to compete for broader terms."
      },
      {
        question: "How important are blog posts for photography SEO?",
        answer: "Very important! Blog content targeting questions like 'what to wear for engagement photos' attracts clients early in their journey and builds topical authority that boosts all your pages."
      },
      {
        question: "Do you help with image SEO and alt tags?",
        answer: "Absolutely. We optimize all images with descriptive file names, alt text, and proper compression—helping your portfolio images rank in Google Image search where many clients discover photographers."
      },
      {
        question: "Can you help me rank for wedding venue-specific searches?",
        answer: "Yes! We create dedicated pages for venues you've shot at (e.g., 'Wedding Photographer at The Grand Ballroom'). These rank well and attract couples already booked at those venues."
      },
      {
        question: "How do you track and report on SEO progress?",
        answer: "You'll receive monthly reports showing keyword rankings, organic traffic, inquiry sources, and booking conversions. We also provide a live dashboard so you can check progress anytime."
      }
    ]
  },
  {
    id: "paid-media",
    label: "Paid Media",
    icon: Megaphone,
    color: "rose", // Soft pink-red
    faqs: [
      {
        question: "What's the minimum budget needed for photography ads?",
        answer: "We recommend starting with $500-1,000/month for local targeting. This allows enough data collection to optimize campaigns while generating immediate inquiries for sessions."
      },
      {
        question: "Which platforms work best for photographers?",
        answer: "Meta (Facebook/Instagram) excels for visual portfolios and lifestyle photography. Google Ads captures high-intent searches like 'wedding photographer near me.' We often recommend both for maximum reach."
      },
      {
        question: "How quickly will I see results from paid ads?",
        answer: "Unlike SEO, paid ads generate immediate visibility. Most photographers see their first inquiries within the first week, with campaigns fully optimized within 30-60 days."
      },
      {
        question: "What types of photography ads convert best?",
        answer: "Carousel ads showcasing your best work, video testimonials from happy clients, and 'behind the scenes' content perform exceptionally well. We also use retargeting to reach visitors who didn't book."
      },
      {
        question: "How do you target the right clients with Facebook/Instagram ads?",
        answer: "We use interest targeting (recently engaged, new parents, business owners), lookalike audiences from your past clients, and geographic targeting to reach your ideal clients in your service area."
      },
      {
        question: "Should I run ads during my slow season?",
        answer: "Absolutely! Slow season ads often have lower competition and costs. Plus, many clients book months ahead—so winter ads can fill your spring/summer calendar at a discount."
      },
      {
        question: "Do you create the ad images and copy for me?",
        answer: "Yes! Our team creates scroll-stopping ad creatives using your portfolio, writes compelling copy, and designs landing pages optimized for conversions—you just approve and we launch."
      },
      {
        question: "How do Google Ads work for photographers?",
        answer: "We target high-intent keywords like 'wedding photographer [your city]' so your ad appears when someone is actively searching. These leads are often ready to book, making them highly valuable."
      },
      {
        question: "Can you help with Pinterest advertising for photographers?",
        answer: "Yes! Pinterest is excellent for wedding and lifestyle photographers. Pins have long lifespans and target users actively planning events and saving inspiration."
      },
      {
        question: "How do you measure the ROI of my ad spend?",
        answer: "We track every inquiry back to its source, so you'll know exactly how many bookings came from ads. Most photographers see 3-5x return on their ad investment within the first few months."
      }
    ]
  },
  {
    id: "marketing-automation",
    label: "Marketing Automation",
    icon: RefreshCw,
    color: "amber", // Warm gold
    faqs: [
      {
        question: "How does the CRM integrate with my booking workflow?",
        answer: "Our CRM connects with your booking calendar to automatically capture inquiries, send follow-up sequences, and track where each client is in your pipeline—from initial inquiry to final gallery delivery."
      },
      {
        question: "How do seasonal campaigns work with email automation?",
        answer: "We pre-build campaign sequences for major opportunities (Mother's Day, fall minis, etc.) that automatically deploy at the right time. Past clients get priority access; warm leads get compelling offers."
      },
      {
        question: "Can I automate my client follow-ups without sounding robotic?",
        answer: "Yes! We craft personalized email sequences that match your brand voice. Dynamic fields insert client names, session types, and dates—making each message feel personally written."
      },
      {
        question: "What happens when a new inquiry comes in?",
        answer: "They instantly receive a personalized welcome email with your pricing guide or booking info. Simultaneously, you get notified and the lead enters a nurture sequence until they book or you mark them closed."
      },
      {
        question: "Can automation help me get more repeat clients?",
        answer: "Absolutely! We set up anniversary reminders, milestone sequences (baby's first year, annual headshot updates), and re-engagement campaigns that bring past clients back automatically."
      },
      {
        question: "How do you automate review collection?",
        answer: "After gallery delivery, clients receive a timed sequence requesting reviews on Google, Facebook, or The Knot—with direct links and gentle reminders that maximize response rates."
      },
      {
        question: "Can I see what's happening in my pipeline at a glance?",
        answer: "Yes! The CRM dashboard shows all leads by stage: new inquiry, responded, proposal sent, booked, completed. You'll never lose track of a potential client again."
      },
      {
        question: "How does text message automation work?",
        answer: "We integrate SMS for time-sensitive messages: session reminders, weather updates, and quick follow-ups. Texts have 98% open rates—perfect for reducing no-shows and speeding up responses."
      },
      {
        question: "Can I automate my mini session booking process?",
        answer: "Yes! We create dedicated landing pages with time slot selection, automated confirmations, reminder sequences, and post-session gallery delivery—handling hundreds of bookings without manual work."
      },
      {
        question: "What integrations does the CRM support?",
        answer: "We integrate with popular tools like Calendly, HoneyBook, Dubsado, Mailchimp, QuickBooks, and most photography gallery platforms—creating a seamless workflow across all your tools."
      }
    ]
  },
  {
    id: "ai-receptionist",
    label: "AI Receptionist",
    icon: Bot,
    color: "sky", // Soft blue
    faqs: [
      {
        question: "Can the AI really book appointments on its own?",
        answer: "Yes! The Voice AI checks your real-time calendar availability and can book sessions directly. You'll get notifications of new bookings, and clients receive instant confirmations—no back-and-forth scheduling emails needed."
      },
      {
        question: "What happens if the AI can't answer a question?",
        answer: "The AI gracefully hands off to you via text or email with full context of the conversation. It never leaves potential clients hanging or provides incorrect information."
      },
      {
        question: "Does the AI work outside business hours?",
        answer: "Absolutely—that's one of its biggest advantages! The AI answers calls and books sessions 24/7, capturing inquiries from busy professionals who browse late at night or on weekends."
      },
      {
        question: "Can the AI answer questions about my pricing and packages?",
        answer: "Yes! We train the AI on your specific packages, pricing tiers, and policies. It can explain what's included, compare options, and even qualify leads by budget before booking consultations."
      },
      {
        question: "Does the AI sound natural or robotic?",
        answer: "Our AI uses advanced voice synthesis that sounds remarkably human—with natural pauses, tone variations, and conversational flow. Most callers don't realize they're speaking with AI."
      },
      {
        question: "Can I customize what the AI says about my business?",
        answer: "Completely! We work with you to capture your brand voice, key selling points, and common objections. The AI represents your studio exactly as you would."
      },
      {
        question: "How does the AI handle multiple inquiries at once?",
        answer: "Unlike you, the AI can handle unlimited simultaneous calls and chats—ensuring no potential client ever gets a busy signal or waits for a response."
      },
      {
        question: "Can the AI qualify leads before they reach me?",
        answer: "Yes! We program qualification questions (budget, date, event type) so you only spend time on serious inquiries. Tire-kickers get helpful info; hot leads get fast-tracked to you."
      },
      {
        question: "Does the AI integrate with my existing calendar?",
        answer: "Yes! We connect with Google Calendar, Calendly, HoneyBook, Dubsado, and most scheduling tools—so bookings automatically appear and double-booking is impossible."
      },
      {
        question: "What's the setup process for the AI receptionist?",
        answer: "We handle everything: scripting responses, training on your services, integrating with your calendar, and testing thoroughly. You're up and running within 1-2 weeks with minimal effort on your part."
      }
    ]
  },
  {
    id: "linkedin-outreach",
    label: "LinkedIn Outreach",
    icon: Linkedin,
    color: "violet", // Rich purple
    faqs: [
      {
        question: "What's included in the LinkedIn outreach automation for headshot photographers?",
        answer: "We set up automated connection sequences targeting your ideal clients by job title and industry, personalized messaging templates, and follow-up drips—all within LinkedIn's terms of service to protect your account."
      },
      {
        question: "How do you target the right people for my headshot business?",
        answer: "We build custom filters based on job titles (CEOs, realtors, executives), industries, company sizes, and locations—ensuring your outreach reaches decision-makers who need professional headshots."
      },
      {
        question: "What response rates can I expect from LinkedIn outreach?",
        answer: "Most headshot photographers see 15-25% connection acceptance rates and 5-10% positive response rates. With our optimized messaging, many close 3-8 new clients per month from LinkedIn alone."
      },
      {
        question: "Is LinkedIn outreach only for headshot photographers?",
        answer: "While headshot photographers see the best results, commercial photographers, brand photographers, and those targeting businesses (corporate events, team photos) also benefit significantly."
      },
      {
        question: "Will my LinkedIn account get flagged or banned?",
        answer: "No—we stay well within LinkedIn's daily limits and use behavior patterns that mimic natural usage. We've never had a client's account restricted using our methods."
      },
      {
        question: "How personalized are the outreach messages?",
        answer: "Very! We use dynamic fields for name, company, job title, and even recent activity. Messages feel personally written, not mass-blasted—which is why response rates are high."
      },
      {
        question: "Can you help me create a LinkedIn profile that converts?",
        answer: "Absolutely! We optimize your headline, about section, featured content, and portfolio to position you as the go-to photographer for your target market."
      },
      {
        question: "How do you track which connections become clients?",
        answer: "We tag and track every connection through the sales process. You'll see exactly how many connections converted to conversations, consultations, and booked sessions."
      },
      {
        question: "Can I target specific companies I want to work with?",
        answer: "Yes! We can create campaigns targeting employees at specific companies you'd love as clients—perfect for landing corporate contracts or breaking into new industries."
      },
      {
        question: "How long until I see results from LinkedIn outreach?",
        answer: "Most photographers see their first qualified responses within 1-2 weeks. Consistent campaigns typically yield 3-8 booked sessions per month within the first 60 days."
      }
    ]
  }
];

// Flat FAQs for schema (combine all categories)
const faqs = faqCategories.flatMap(cat => cat.faqs);

// Testimonials
const photographerTestimonials = [
  {
    quote: "I went from struggling to book weddings to having a waitlist. GrowSmallBiz helped me rank #1 for 'wedding photographer' in my city.",
    author: "Sarah Williams",
    role: "Owner",
    company: "Sarah Williams Photography",
  },
  {
    quote: "The LinkedIn automation for my headshot business was a game-changer. I'm now booked out 3 weeks in advance consistently.",
    author: "Marcus Chen",
    role: "Lead Photographer",
    company: "Chen Creative Studios",
  },
  {
    quote: "Bookings increased 400% with the AI receptionist. Clients love that they can book a session at any time of day.",
    author: "Emily Foster",
    role: "Owner",
    company: "Foster Portrait Studio",
  },
];

// Case Studies
const caseStudies = [
  {
    company: "Sarah Williams Photography",
    location: "San Diego, CA",
    industry: "Wedding Photography",
    challenge: "Beautiful portfolio but invisible on Google. Less talented photographers were ranking higher and booking the weddings she wanted.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Inquiries", before: "8", after: "42", improvement: "+425%" },
      { label: "Wedding Bookings/Year", before: "18", after: "48", improvement: "+167%" },
      { label: "'Wedding Photographer' Rank", before: "Page 3", after: "#1", improvement: "Top Spot" },
      { label: "Average Package Price", before: "$3,200", after: "$5,800", improvement: "+81%" }
    ],
    quote: "I went from struggling to book weddings to having a waitlist.",
    quoteName: "Sarah Williams",
    quoteRole: "Owner, Sarah Williams Photography"
  },
  {
    company: "Chen Creative Studios",
    location: "Chicago, IL",
    industry: "Headshot & Branding Photography",
    challenge: "Relying too heavily on referrals and social media. Wanted to build a steady stream of organic leads for corporate headshots.",
    timeframe: "6 months",
    metrics: [
      { label: "Monthly Inquiries", before: "12", after: "56", improvement: "+367%" },
      { label: "Corporate Clients/Month", before: "3", after: "22", improvement: "+633%" },
      { label: "Calendar Booked in Advance", before: "35%", after: "85%", improvement: "+143%" },
      { label: "Revenue Per Month", before: "$8K", after: "$28K", improvement: "+250%" }
    ],
    quote: "LinkedIn automation filled my calendar with my ideal corporate clients.",
    quoteName: "Marcus Chen",
    quoteRole: "Lead Photographer, Chen Creative Studios"
  }
];

// Results Stats - Realistic expectations based on SEO + Paid Media + Marketing Automation
const results = [
  { metric: "3-6mo", label: "To see SEO results" },
  { metric: "15-25%", label: "Improved booking rate" },
  { metric: "2-4x", label: "Inquiry increase with paid ads" },
  { metric: "40%", label: "Time saved with automation" }
];

const Photographers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Photography Marketing & SEO Services | Book More Clients | GrowSmallBiz</title>
        <meta name="description" content="Complete marketing system for photographers. Website design, AI SEO, CRM, paid ads, and automation to fill your session calendar with dream clients." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={photographerHeroImage} 
            alt="Professional photographer in studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Camera className="w-4 h-4" />
              Photography Marketing & Growth System
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Photography Marketing That Fills Your Calendar with{" "}
              <span className="text-gradient">Dream Clients</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Stop relying solely on referrals. Build a predictable booking pipeline with AI-powered marketing designed for photographers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=photographer">
                  Get Your Free Portfolio Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#solutions">
                  Explore Solutions
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up delay-400">
              {results.map((result, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">{result.metric}</div>
                  <div className="text-sm text-muted-foreground mt-1">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Reality - Merged Section - LIGHT */}
      <section className="py-24 relative overflow-hidden bg-slate-900/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle="The Reality"
            title="Photographer's Marketing"
            titleHighlight="Challenges"
            description="Even the most talented photographers struggle to fill their calendars. If any of these resonate, it's time for a digital growth strategy."
          >
            <h3 className="text-xl md:text-2xl font-display italic mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Why Photography Marketing Matters More Than Talent Alone
            </h3>
          </SectionHeader>

          {/* All 6 Cards - 3 per row */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {realityChallenges.map((challenge, i) => (
              <div 
                key={i} 
                className="group relative bg-card rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
              >
                {challenge.hasImage ? (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={challenge.image} 
                      alt={challenge.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-amber-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <challenge.icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center animate-pulse">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                ) : (
                  // AI Platform Logos Card
                  <div className="relative h-48 bg-gradient-to-br from-card via-card to-muted/50 flex flex-col items-center justify-center p-4">
                    {/* Search query bubble */}
                    <div className="mb-3 px-3 py-1.5 bg-muted/80 rounded-full border border-amber-500/20">
                      <p className="text-xs text-muted-foreground italic">"Best wedding photographer in Austin, TX?"</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {aiPlatforms.map((platform, idx) => {
                        const IconComponent = platform.icon;
                        return (
                          <div 
                            key={idx}
                            className="w-10 h-10 rounded-xl bg-background/80 border border-amber-500/30 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 hover:border-amber-500/60"
                            title={platform.name}
                          >
                            <IconComponent size={20} />
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-amber-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <challenge.icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center animate-pulse">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Human CTA Card - matching Realtors page styling */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Photo */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300">
                    <img 
                      src={subrataHeadshot} 
                      alt="Subrata Guha" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="mt-4 text-lg font-display font-semibold text-foreground">Subrata Guha</h4>
                  <p className="text-sm text-muted-foreground">Founder, GrowSmallBiz</p>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                    Ready for Photography Marketing That{" "}
                    <span className="text-gradient">Fills Your Calendar</span>?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Let's discuss a custom photography marketing strategy to attract dream clients and book more sessions consistently.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/free-assessment?industry=photographer">
                        Get Your Custom Growth Strategy
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      asChild 
                      className="border-muted-foreground/30 hover:bg-muted/50 transition-all duration-300"
                    >
                      <a href="tel:+19258863724" className="inline-flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call +1 (925) 886-3724
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Index / Navigation Section */}
      <section id="page-index" className="py-16 bg-gradient-to-b from-stone-50 to-stone-100/80 border-y border-stone-200/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Quick Navigation</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800">
              On This <span className="text-gradient">Page</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { id: "website-design", label: "Website Design", icon: "🌐" },
              { id: "seo", label: "AI SEO", icon: "🔍" },
              { id: "paid-media", label: "Paid Media", icon: "📣" },
              { id: "social-media", label: "Social Media", icon: "📱" },
              { id: "client-growth", label: "Growth Funnels", icon: "📈" },
              { id: "reputation", label: "Reputation", icon: "⭐" },
              { id: "ai-communication", label: "AI Voice & Chat", icon: "🤖" },
              { id: "why-choose", label: "Why Choose Us", icon: "✅" },
              { id: "faq", label: "FAQs", icon: "❓" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-stone-200/70 shadow-sm hover:border-primary/50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Website Design Section - DARK */}
      <section id="website-design" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Professional Photography Websites</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Photography Website Design <span className="text-transparent bg-clip-text bg-gradient-primary italic">That Books Clients</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Custom portfolio websites built to showcase your work beautifully and convert visitors into paying clients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src={portfolioPhotographerWebsite} 
                alt="Photography website design example showing portfolio layout" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-foreground mb-4">
                Portfolio Websites That Convert Visitors Into Booked Clients
              </h4>
              <p className="text-muted-foreground mb-6">
                We build fast, beautiful portfolio sites designed specifically for photographers. 
                Every element is optimized to showcase your work and guide potential clients toward booking.
              </p>
              <ul className="space-y-3">
                {websiteFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section - LIGHT */}
      <section id="seo" className="py-24 relative bg-slate-800/40 scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Why AI Search Ranking Matters - Hero Banner */}
          <div className="mb-16 p-8 md:p-12 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/10 rounded-3xl border border-primary/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                ⚡ The Search Landscape is Changing
              </span>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Ranking on Google Still Matters.<br />
                <span className="text-transparent bg-clip-text bg-gradient-primary">But AI Search is Becoming the New Decision-Maker.</span>
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Couples planning weddings and families searching for photographers are asking AI who to hire first—and it's not always the photographer ranking #1 on Google. 
                Your competitor may already be showing up in AI search, even if you aren't.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">40%+</div>
                  <div className="text-sm text-muted-foreground">of consumers now use AI for local service recommendations</div>
                </div>
                <div className="p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">6 Platforms</div>
                  <div className="text-sm text-muted-foreground">AI platforms we track for your visibility</div>
                </div>
                <div className="p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">continuous monitoring & sentiment tracking</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/free-assessment?industry=photographers" className="inline-flex items-center gap-2">
                    Free AI + Google SEO Audit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <span className="text-sm text-muted-foreground">
                  If you want more booked sessions, you need to rank on Google <strong className="text-foreground">and</strong> show up in AI search.
                </span>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="mb-8 text-center">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Photography SEO Services</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              AI-Powered SEO for <span className="text-transparent bg-clip-text bg-gradient-primary italic">Photographers</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Comprehensive search engine optimization strategy designed for photography businesses—from local portrait studios to destination wedding photographers
            </p>
          </div>

          {/* SEO Sub-Navigation */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/10 via-emerald-500/5 to-teal-500/10 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/5">
            <div className="text-center mb-5">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">📚 Quick Navigation</span>
              <h4 className="text-lg font-display font-bold text-foreground">Jump to SEO Topic</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: "seo-keywords", label: "Keyword Research", icon: "🔑" },
                { id: "seo-competitors", label: "Competitor Analysis", icon: "🎯" },
                { id: "seo-technical", label: "Technical SEO", icon: "⚙️" },
                { id: "seo-content", label: "Content Strategy", icon: "📝" },
                { id: "seo-local", label: "Local SEO & GBP", icon: "📍" },
                { id: "seo-ai-visibility", label: "AI Visibility", icon: "🤖" },
                { id: "seo-authority", label: "Backlinks", icon: "🔗" },
                { id: "seo-crm", label: "CRM & Automation", icon: "💼" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/80 border border-border hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 text-sm font-medium group"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Keyword Research */}
          <div id="seo-keywords" className="mb-12 scroll-mt-24">
            <h4 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Keyword Research: Find What Photography Clients Search
            </h4>
            <div className="bg-muted/30 rounded-xl p-4 mb-6 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Keywords photographers need:</span>{" "}
                <span className="text-primary font-medium">Long-tail keywords</span> (e.g., "outdoor family photographer in Austin") for targeted traffic,{" "}
                <span className="text-primary font-medium">high-intent keywords</span> (e.g., "book wedding photographer near me") for ready-to-buy clients,{" "}
                <span className="text-primary font-medium">location-based keywords</span> for local SEO, and{" "}
                <span className="text-primary font-medium">niche-specific terms</span> that match your photography specialty.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(keywordExamples).map(([key, genre]) => {
                const IconComponent = genre.icon;
                return (
                  <GlowCard key={key} className="overflow-hidden">
                    <div className="relative h-44 overflow-hidden">
                      <img 
                        src={genre.image} 
                        alt={genre.label}
                        className="w-full h-full object-contain bg-muted/30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h5 className="font-bold text-foreground drop-shadow-md">{genre.label}</h5>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Sample Keywords</p>
                      <ul className="space-y-1">
                        {genre.keywords.map((kw, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2">
                            <Search className="w-3 h-3 text-primary shrink-0 mt-1" />
                            {kw}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>

          {/* Competitor Analysis */}
          <div id="seo-competitors" className="mb-12 scroll-mt-24">
            <h4 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Competitor Analysis: Outrank Other Photographers
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlowCard className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-foreground">Identify Competitors</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover who's ranking for your target keywords in your local market
                </p>
              </GlowCard>
              <GlowCard className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-foreground">Competitor Rankings</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Analyze which keywords your competitors rank for and their positions
                </p>
              </GlowCard>
              <GlowCard className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-foreground">Keyword Gap Analysis</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Find keyword opportunities your competitors rank for but you don't
                </p>
              </GlowCard>
              <GlowCard className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-foreground">Monthly Tracking</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Track competitor ranking changes on a monthly basis to spot trends
                </p>
              </GlowCard>
            </div>
          </div>

          {/* Technical SEO */}
          <div id="seo-technical" className="mb-12 scroll-mt-24">
            <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-primary" />
              Technical SEO for Photography Websites
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSEOSections.map((section, idx) => (
                <GlowCard key={idx} className="p-0 overflow-hidden border-emerald-500/30">
                  {/* Image */}
                  <div className="relative h-36 bg-muted">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-full object-contain bg-gradient-to-b from-emerald-500/10 to-transparent p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-6 pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <h5 className="font-bold text-foreground">{section.title}</h5>
                    </div>
                    <div className="space-y-3">
                      {section.hasLogos ? (
                        (section.items as Array<{ text: string; logo: string }>).map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            {item.logo === "google" && (
                              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                            )}
                            {item.logo === "bing" && (
                              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                                <path fill="#008373" d="M5 3v16.5l4.5 2.5 8-4.5v-5L10 9V3.5L5 3z"/>
                                <path fill="#00A68E" d="M10 9l7.5 3.5-8 4.5-4.5-2.5V9l5-2.5V9z"/>
                              </svg>
                            )}
                            <p className="text-sm text-muted-foreground">{item.text}</p>
                          </div>
                        ))
                      ) : (
                        (section.items as string[]).map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))
                      )}
                    </div>
                    {section.note && (
                      <div className="mt-4 pt-3 border-t border-border">
                        <p className="text-xs text-primary italic">{section.note}</p>
                      </div>
                    )}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* 4. Content Strategy */}
          <div id="seo-content" className="mb-12 scroll-mt-24">
            <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-primary" />
              Content Strategy That Ranks on Google & AI Recommendations
            </h4>
            
            {/* Build a Topical Map - Full Width */}
            <GlowCard className="p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber-500" />
                </div>
                <h5 className="font-bold text-foreground">{contentStrategy[0].title}</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{contentStrategy[0].description}</p>
              <p className="text-xs text-primary/80 italic border-l-2 border-primary/30 pl-3 mb-4">
                {contentStrategy[0].note}
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-border/50">
                <img 
                  src={topicalMapAuthority} 
                  alt="Topical map authority illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </GlowCard>

            {/* Generate Articles - Full Width with 3 Categories */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-amber-500" />
                </div>
                <h5 className="font-bold text-foreground">{contentStrategy[1].title}</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{contentStrategy[1].description}</p>
              <p className="text-xs text-primary/80 italic border-l-2 border-primary/30 pl-3 mb-6">
                {contentStrategy[1].note}
              </p>
              
              {/* Content Insights */}
              <div className="mb-6">
                <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-amber-500" />
                  Content Insights
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {contentInsightsImages.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-border/50">
                      <img 
                        src={img.src} 
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Agents & Content Refiners */}
              <div>
                <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Content Agents & Content Refiners
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {contentAgentsRefinersImages.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-border/50">
                      <img 
                        src={img.src} 
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>

          {/* 5. Local & Google Business Profile */}
          <div id="seo-local" className="mb-12 scroll-mt-24">
            <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Local SEO & Google Business Profile for Photographers
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {localGBPServices.map((service, i) => (
                <GlowCard key={i} className="p-0 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-32 bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5 pt-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* 6. LLM Visibility & Rank Tracking */}
          <div id="seo-ai-visibility" className="mb-12 scroll-mt-24">
            <h4 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Bot className="w-6 h-6 text-primary" />
              AI & LLM Visibility: Get Recommended by AI Search
            </h4>
            <div className="grid md:grid-cols-1 gap-6">
              {llmVisibilityServices.map((service, i) => (
                <GlowCard key={i} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-violet-500" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.images.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden bg-muted/30">
                        <img 
                          src={img} 
                          alt={`${service.title} - ${idx + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* 7. Online Authority */}
          <div id="seo-authority" className="mb-12 scroll-mt-24">
            <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Build Online Authority & Photography Backlinks
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {onlineAuthorityServices.map((service, i) => (
                <GlowCard key={i} className="overflow-hidden border-cyan-500/30">
                  <div className="h-40 bg-muted/30">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5 pt-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* CRM Integration */}
          <div id="seo-crm" className="mb-8 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-violet-500" />
              </div>
              <h4 className="text-2xl font-display font-bold text-foreground">CRM & Marketing Automation</h4>
            </div>

            <p className="text-muted-foreground mb-8 max-w-3xl">
              The importance of real-time integration cannot be overstated. When a lead inquires, 
              every second counts. Our CRM connects all your marketing channels and automates follow-up 
              so no opportunity slips through the cracks.
            </p>

            <GlowCard className="p-8 border-violet-500/30">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-violet-500" />
                    Instant Lead Capture
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Website inquiries, social DMs, and calls all flow into one unified inbox. 
                    Automated responses go out in seconds—not hours.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-violet-500" />
                    Automated Nurturing
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Pre-built email and SMS sequences keep leads warm while you're shooting. 
                    Personalized follow-ups based on their inquiry type.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-violet-500" />
                    Pipeline Visibility
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    See exactly where every lead is—from inquiry to booked to gallery delivered. 
                    Never wonder about your upcoming revenue again.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Back to SEO Top */}
          <div className="text-center pt-8 border-t border-border/50">
            <a 
              href="#seo"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-sm group"
            >
              <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
              Back to SEO Navigation
            </a>
          </div>
        </div>
      </section>

      {/* Paid Media Section - DARK */}
      <section id="paid-media" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Paid Media"
            title="Advertising for"
            titleHighlight="Photographers"
            description="Strategic ad platform recommendations by photography genre"
          />

          {/* Ad Creatives Carousel */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Sample Ad Creatives by Photography Genre
            </h3>
            <div className="relative px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {photographyAdCreatives.map((creative) => (
                    <CarouselItem key={creative.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <GlowCard className="overflow-hidden">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img 
                            src={creative.image} 
                            alt={`${creative.genre} ad creative example`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {creative.platforms.map((platform, i) => (
                                <span 
                                  key={i} 
                                  className="px-2 py-0.5 bg-primary/80 text-primary-foreground text-xs rounded-full"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                            <h4 className="font-bold text-white text-lg">{creative.genre}</h4>
                            <p className="text-white/80 text-sm">{creative.description}</p>
                          </div>
                        </div>
                      </GlowCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </div>

          {/* Educational Note */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl border border-amber-500/20 p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Why Primary & Secondary Ad Platforms?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Budget allocation matters.</strong> Primary platforms have the highest ROI for your genre—allocate 70-80% of your ad spend here. 
                  Secondary platforms are for testing, seasonal campaigns, or retargeting. Starting with $500-1,000/month? Focus exclusively on primary platforms until you've optimized those results.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Recommendations by Genre */}
          <div className="space-y-8 mb-16">
            {paidMediaByGenre.map((genre, i) => {
              const colors = colorConfig[genre.color];
              return (
                <GlowCard key={i} className={`p-6 ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <genre.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground">{genre.genre}</h4>
                  </div>

                  {/* Primary Platforms */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>Primary Platforms</span>
                      <span className="text-xs text-muted-foreground">— Allocate 70-80% of ad budget</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {genre.primary.map((platform, j) => (
                        <div key={j} className={`p-4 rounded-xl ${colors.bgLight} border ${colors.border}`}>
                          <div className={`font-medium ${colors.text} text-sm mb-1`}>{platform.name}</div>
                          <div className="text-xs text-muted-foreground">{platform.reason}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Platforms */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Secondary Platforms</span>
                      <span className="text-xs text-muted-foreground">— Testing & retargeting</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {genre.secondary.map((platform, j) => (
                        <div key={j} className="p-4 rounded-xl bg-muted/30 border border-border">
                          <div className="font-medium text-foreground text-sm mb-1">{platform.name}</div>
                          <div className="text-xs text-muted-foreground">{platform.reason}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* Retargeting & Lookalike */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Lookalike Audiences & Retargeting Strategy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {retargetingStrategy.map((strategy, i) => (
                <GlowCard key={i} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <strategy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{strategy.title}</h4>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* Tracking Setup */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Essential Tracking Setup
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {trackingSetup.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section - LIGHT */}
      <section id="social-media" className="py-24 relative bg-slate-800/40 scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle="Organic Social"
            title="Social Media Strategy for"
            titleHighlight="Photographers"
            description="Platform-specific strategies for each photography genre"
          />

          {/* Educational Note */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Why Primary & Secondary Platforms?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Focus beats scatter.</strong> Primary platforms are where your ideal clients actively search for your genre—invest 80% of your time here. 
                  Secondary platforms offer supplemental reach or work well for specific campaigns, but spreading too thin dilutes your impact. 
                  Master 2 platforms before expanding.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 mb-16">
            {socialMediaByGenre.map((genre, i) => {
              const colors = colorConfig[genre.color];
              return (
                <GlowCard key={i} className={`p-6 ${colors.border}`}>
                  <h4 className={`font-bold ${colors.text} mb-6`}>{genre.genre}</h4>
                  
                  {/* Primary Platforms */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>Primary Platforms</span>
                      <span className="text-xs text-muted-foreground">— Focus 80% of effort here</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {genre.primary.map((platform, j) => (
                        <div key={j} className={`p-4 rounded-xl border-2 ${colors.border} ${colors.bgLight}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <platform.icon className={`w-5 h-5 ${colors.text}`} />
                            <span className="font-semibold text-foreground">{platform.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} text-white`}>Priority</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{platform.strategy}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Platforms */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Secondary Platforms</span>
                      <span className="text-xs text-muted-foreground">— Test or use for campaigns</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {genre.secondary.map((platform, j) => (
                        <div key={j} className="p-4 bg-muted/30 rounded-xl border border-border/50">
                          <div className="flex items-center gap-2 mb-2">
                            <platform.icon className="w-5 h-5 text-muted-foreground" />
                            <span className="font-medium text-foreground">{platform.name}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{platform.strategy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* LinkedIn Outreach for Headshot Photographers */}
          <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-2xl border-2 border-blue-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{linkedInOutreach.title}</h3>
                <p className="text-sm text-muted-foreground">{linkedInOutreach.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">{linkedInOutreach.description}</p>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">How It Works</h4>
                <ul className="space-y-2">
                  {linkedInOutreach.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {linkedInOutreach.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-card rounded-xl border border-blue-500/30">
                      <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-500/30">
              <p className="text-sm text-muted-foreground italic">
                <strong className="text-foreground">Marketing is a numbers game:</strong> You need workflow-driven 
                automated processes to send connection requests at scale without violating LinkedIn's policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Client Growth System - DARK */}
      <section id="client-growth" className="py-24 bg-gradient-to-b from-[#0a1628] to-background scroll-mt-24">
        <div className="container mx-auto px-4">
          {/* H2 Title */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Photographer's <span className="text-transparent bg-clip-text bg-gradient-primary italic">AI Client Growth System</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stop chasing leads manually. Build an automated system that attracts, nurtures, converts, and retains clients—while you focus on your craft.
            </p>
          </div>

          {/* Funnel Visual - Standalone Tools to Unified System */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Funnel Image with Stage Labels */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Stage Labels - positioned along the funnel */}
                  <div className="absolute -left-4 md:-left-16 top-0 flex flex-col justify-between h-full py-4 z-10">
                    {/* Awareness - Top */}
                    <div className="flex items-center gap-2 -translate-y-2">
                      <span className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-wider whitespace-nowrap">Awareness</span>
                      <div className="hidden md:block w-8 h-px bg-blue-400/50" />
                    </div>
                    {/* Capture - Upper Middle */}
                    <div className="flex items-center gap-2 -translate-y-4">
                      <span className="text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-wider whitespace-nowrap">Capture</span>
                      <div className="hidden md:block w-8 h-px bg-cyan-400/50" />
                    </div>
                    {/* Nurture - Lower Middle */}
                    <div className="flex items-center gap-2 translate-y-2">
                      <span className="text-xs md:text-sm font-bold text-purple-400 uppercase tracking-wider whitespace-nowrap">Nurture</span>
                      <div className="hidden md:block w-8 h-px bg-purple-400/50" />
                    </div>
                    {/* Close - Bottom */}
                    <div className="flex items-center gap-2 translate-y-4">
                      <span className="text-xs md:text-sm font-bold text-emerald-400 uppercase tracking-wider whitespace-nowrap">Close</span>
                      <div className="hidden md:block w-8 h-px bg-emerald-400/50" />
                    </div>
                  </div>
                  
                  <img 
                    src={aiGrowthSystemFunnel} 
                    alt="Marketing funnel stages: Awareness, Capture, Nurture, Close with standalone tools at each stage" 
                    className="w-full rounded-2xl shadow-2xl shadow-primary/20"
                  />
                </div>
              </div>

              {/* Right: Description & Stages */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    Stop Juggling <span className="text-transparent bg-clip-text bg-gradient-primary">5+ Disconnected Tools</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most photographers use separate tools for email, booking, CRM, social media, reviews, and more. These tools don't talk to each other—leads fall through the cracks, follow-ups get missed, and you waste hours switching between platforms.
                  </p>
                </div>

                <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                  <p className="text-foreground font-semibold mb-3">The All-in-One Difference:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Without a system:</strong> Leads get lost, responses are delayed, follow-ups forgotten, clients never rebook
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">With AI Growth System:</strong> Every lead captured instantly, automated nurturing, seamless booking, lifecycle revenue
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Stage Labels with Descriptions */}
                <div className="space-y-4">
                  {/* Attract */}
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Attract</h4>
                      <p className="text-sm text-muted-foreground">
                        Draw in ideal clients through SEO, paid ads, AI search visibility, social media, and reputation management.
                      </p>
                    </div>
                  </div>

                  {/* Nurture */}
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Nurture</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatically follow up with leads via email sequences, SMS, AI receptionist, and chat—while you're shooting.
                      </p>
                    </div>
                  </div>

                  {/* Convert & Retain */}
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Convert & Retain</h4>
                      <p className="text-sm text-muted-foreground">
                        Book sessions seamlessly, collect payments, deliver galleries, gather reviews, and trigger re-engagement campaigns for repeat business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Stage Client Journey Visual */}
          <div className="mb-20">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              The 5 Stages of Your <span className="text-primary">Client Journey</span>
            </h3>
            <div className="relative">
              {/* Connection Line (Desktop) */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-primary via-emerald-500 to-amber-500 rounded-full" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
                {/* Stage 1: Awareness */}
                <div className="relative bg-card border-2 border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 text-center lg:text-left">Awareness</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strangers discover your brand through <span className="text-blue-400 font-medium">Google searches</span>, <span className="text-blue-400 font-medium">social media</span>, <span className="text-blue-400 font-medium">AI recommendations</span>, and <span className="text-blue-400 font-medium">paid ads</span>. They don't know you yet—but they're searching for what you offer.
                  </p>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-blue-400 italic">Goal: Get discovered by your ideal clients</p>
                  </div>
                </div>

                {/* Stage 2: Prospect */}
                <div className="relative bg-card border-2 border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 text-center lg:text-left">Prospect</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Interested visitors land on your website. They're browsing your <span className="text-purple-400 font-medium">portfolio</span>, checking <span className="text-purple-400 font-medium">pricing</span>, reading <span className="text-purple-400 font-medium">reviews</span>. They're evaluating if you're the right fit—often comparing you to competitors.
                  </p>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-purple-400 italic">Goal: Build trust and stand out</p>
                  </div>
                </div>

                {/* Stage 3: Lead */}
                <div className="relative bg-card border-2 border-primary/30 rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 text-center lg:text-left">Lead</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    They've submitted an <span className="text-primary font-medium">inquiry form</span> or <span className="text-primary font-medium">called your studio</span>. You have their contact info. This is the critical moment—<span className="text-primary font-medium">speed and nurturing</span> determine if they book or ghost.
                  </p>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-primary italic">Goal: Respond fast & nurture to booking</p>
                  </div>
                </div>

                {/* Stage 4: Customer */}
                <div className="relative bg-card border-2 border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/60 transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                    <Camera className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 text-center lg:text-left">Customer</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    They <span className="text-emerald-400 font-medium">booked and paid</span>. Session complete. Happy client. But most photographers stop here—leaving massive revenue on the table by not <span className="text-emerald-400 font-medium">maximizing the relationship</span>.
                  </p>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-emerald-400 italic">Goal: Deliver & collect reviews</p>
                  </div>
                </div>

                {/* Stage 5: Retain/Growth */}
                <div className="relative bg-card border-2 border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/60 transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                    <Repeat className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 text-center lg:text-left">Retain & Grow</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The gold mine. <span className="text-amber-400 font-medium">Repeat bookings</span>, <span className="text-amber-400 font-medium">referrals</span>, <span className="text-amber-400 font-medium">upsells</span>. Anniversary sessions, family growth milestones, referral bonuses. Your past clients are your <span className="text-amber-400 font-medium">lowest-cost, highest-value</span> source of revenue.
                  </p>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-amber-400 italic">Goal: Turn one client into lifetime value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Autopilot is Critical - Educational Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                📚 Why This Matters
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Why Your Photography Business Needs <span className="text-primary">Autopilot</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The difference between a struggling photographer and a thriving one isn't talent—it's systems. Here's what the research shows:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Block A: Speed-to-Lead */}
              <GlowCard className="p-8 border-red-500/30 bg-gradient-to-b from-red-500/5 to-transparent">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Speed-to-Lead</h4>
                    <p className="text-sm text-red-400">The 5-Minute Rule</p>
                  </div>
                </div>
                
                {/* Research Stat */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-red-400">"Responding within 5 minutes makes you 100x more likely to connect compared to 30 minutes."</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">— InsideSales.com Lead Response Study</p>
                </div>

                {/* Pain Point */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-red-500">⚠️</span> The Problem:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You're in a 2-hour family session when an inquiry hits. By the time you check your phone, that bride has already messaged 3 other photographers—and booked the one who responded first.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-emerald-500">✅</span> The Solution:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-emerald-400 font-medium">AI Receptionist</span> auto-responds to every inquiry within seconds—24/7. Answers FAQs, shares pricing, and books consultations while you shoot.
                  </p>
                </div>
              </GlowCard>

              {/* Block B: Nurturing */}
              <GlowCard className="p-8 border-purple-500/30 bg-gradient-to-b from-purple-500/5 to-transparent">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Lead Nurturing</h4>
                    <p className="text-sm text-purple-400">Why One Email Isn't Enough</p>
                  </div>
                </div>
                
                {/* Research Stat */}
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-purple-400">"80% of sales require 5+ follow-ups, yet 44% of salespeople give up after just one contact."</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">— HubSpot Sales Research</p>
                </div>

                {/* Pain Point */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-purple-500">⚠️</span> The Problem:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most photographers send one email with pricing and hope the lead books. When they don't hear back, they assume the lead wasn't interested. Meanwhile, that lead just needed more time and touchpoints.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-emerald-500">✅</span> The Solution:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-emerald-400 font-medium">Automated email sequences</span> that send 5-7 strategic touchpoints over 2-3 weeks—testimonials, portfolio highlights, FAQs, and urgency triggers—converting cold leads into booked sessions.
                  </p>
                </div>
              </GlowCard>

              {/* Block C: Past Clients */}
              <GlowCard className="p-8 border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0">
                    <UserPlus className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Past Client Gold</h4>
                    <p className="text-sm text-amber-400">Your Hidden Revenue Source</p>
                  </div>
                </div>
                
                {/* Research Stat */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-amber-400">"Acquiring a new customer costs 5-25x more than retaining an existing one."</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">— Harvard Business Review</p>
                </div>

                {/* Pain Point */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-amber-500">⚠️</span> The Problem:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Photographers spend thousands on ads chasing new leads while ignoring their database of past happy clients—people who already trust them, love their work, and have families that keep growing.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-emerald-500">✅</span> The Solution:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-emerald-400 font-medium">Automated re-engagement campaigns</span>—session anniversary reminders, "your baby is turning 1" triggers, seasonal mini-session offers, and referral incentives that turn one booking into lifetime value.
                  </p>
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Divider before existing funnels */}
          <div className="border-t border-border/50 pt-16 mb-8">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-2">See It In Action</p>
            <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
              Sample Funnels by <span className="text-transparent bg-clip-text bg-gradient-primary italic">Photography Genre</span>
            </h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              From first impression to repeat customer—automated workflows tailored to your specialty
            </p>
          </div>

          {/* Funnel Visualizations - Shrinking Style */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {clientGrowthFunnels.map((funnel, i) => {
              const colors = colorConfig[funnel.color];
              const widthClasses = [
                "w-full",
                "w-[94%]",
                "w-[88%]",
                "w-[82%]",
                "w-[76%]",
                "w-[70%]",
                "w-[64%]"
              ];
              return (
                <GlowCard 
                  key={i} 
                  className={`group relative overflow-hidden bg-gradient-to-b from-card to-background animate-fade-up ${colors.border}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="p-6">
                    {/* Genre Header with Icon */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className={`w-12 h-12 rounded-full ${colors.bgLight} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <funnel.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{funnel.genre}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Marketing Funnel</p>
                    </div>

                    {/* Funnel Visualization - Shrinking Steps */}
                    <div className="space-y-2 mb-6">
                      {funnel.funnel.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex flex-col items-center">
                          <div 
                            className={`${widthClasses[stepIndex]} ${colors.steps[stepIndex]} py-2.5 px-4 rounded-lg text-center text-sm font-medium text-white transition-all duration-300 group-hover:scale-[1.02]`}
                          >
                            {step}
                          </div>
                          {stepIndex < funnel.funnel.length - 1 && (
                            <div className="text-muted-foreground text-xs my-1">↓</div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Optimized Badge */}
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                      <Zap className={`w-3 h-3 ${colors.text}`} />
                      <span>Optimized for high conversion</span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border pt-4">
                      {/* Top Platforms */}
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Top Platforms</p>
                        <div className="flex flex-wrap justify-center gap-1.5">
                          {funnel.topPlatforms.map((platform, pIndex) => (
                            <span key={pIndex} className={`text-xs px-2 py-1 ${colors.bgLight} ${colors.text} rounded-full`}>
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Strategy */}
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        {funnel.strategy}
                      </p>
                      
                      {/* Seasonality */}
                      <p className={`text-xs ${colors.text} text-center mt-2 italic`}>
                        {funnel.seasonality}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* Email Nurture Importance */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Why Email Nurture is <span className="text-primary">Critical</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {emailNurturePoints.map((point, i) => (
                <GlowCard key={i} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* Seasonal Campaigns */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Automated <span className="text-primary">Seasonal Campaigns</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Campaign</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Timing</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Offer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Channels</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalCampaigns.map((campaign, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 font-medium text-foreground">{campaign.campaign}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{campaign.timing}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{campaign.offer}</td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1">
                          {campaign.channels.map((channel, j) => (
                            <span key={j} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {channel}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Past Client Workflows */}
          <div className="grid md:grid-cols-3 gap-6">
            {pastClientWorkflows.map((workflow, i) => (
              <GlowCard key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <workflow.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{workflow.title}</h4>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation, Gift Cards, Referrals - LIGHT */}
      <section id="reputation" className="py-24 relative bg-slate-800/40 scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle="Growth Tools"
            title="Reputation, Referrals &"
            titleHighlight="Gift Cards"
            description="Turn happy clients into your best marketing channel"
          />

          {/* Reputation Management */}
          <div className="mb-16">
            <GlowCard className="p-8 border-emerald-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Reputation Management Advantage</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    {reputationBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">Smart Review Request Flow</h4>
                  <div className="space-y-3">
                    {reviewRequestFlow.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{step.title}</div>
                          <div className="text-xs text-muted-foreground">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Gift Cards & Referrals */}
          <div className="grid md:grid-cols-3 gap-8">
            {giftAndReferralPrograms.map((program, i) => (
              <GlowCard key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{program.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* AI Voice & Chat Section - DARK */}
      <section id="ai-communication" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="AI-Powered"
            title="24/7 Booking &"
            titleHighlight="Client Communication"
            description="Never miss a booking opportunity—AI handles inquiries around the clock"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, i) => {
              const colors = colorConfig[feature.color];
              return (
                <GlowCard key={i} className={`p-8 ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${colors.text} shrink-0`} />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <div id="why-choose" className="scroll-mt-24">
        <WhyChooseSection 
          title="Why Choose GrowSmallBiz for Photography Marketing"
          subtitle="Your Photography Marketing Partner"
          description="We specialize in helping photographers get found by ideal clients, showcase their work effectively, and build a sustainable booking pipeline."
          variant="light"
          items={[
            { title: "Photography Experts", description: "We focus on photographers—weddings, portraits, commercial, and events. We know your industry.", icon: Camera },
            { title: "Portfolio Optimization", description: "Showcase your best work in a way that both clients and search engines love.", icon: Image },
            { title: "Visual-First Marketing", description: "Leverage Instagram, Pinterest, and visual platforms to attract your ideal clients.", icon: Star },
            { title: "Local SEO for Creatives", description: "Rank for photography searches in your city and surrounding areas.", icon: MapPin },
            { title: "AI Search Ready", description: "Get recommended when couples ask AI for the best wedding photographer in your city.", icon: Bot },
            { title: "Booking Growth", description: "Our photography clients typically see 2-3x more inquiries within the first season.", icon: TrendingUp },
          ]}
        />
      </div>

      {/* Case Studies Section */}
      <CaseStudySection 
        caseStudies={caseStudies}
        title="Photographer Success Stories"
        subtitle="See how we've helped photographers like you get found and booked"
        ctaLink="/free-assessment?industry=photographer"
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={photographerTestimonials}
        title="What Photographers Say"
        subtitle="See how photographers grow their bookings and brand"
        variant="light"
      />

      {/* Tabbed FAQ Section with Sidebar CTA */}
      <section id="faq" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        {/* Subtle glow effects */}
        <div className="absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Centered Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Photographer Marketing FAQs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions organized by service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* FAQ Column with Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="ai-seo" className="w-full">
                {/* Horizontal Tab List */}
                <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto mb-8 p-0">
                  {faqCategories.map((category) => {
                    const IconComponent = category.icon;
                    // Color styles for each tab - tasteful, non-neon
                    const colorStyles: Record<string, { bg: string; border: string; text: string; activeBg: string }> = {
                      emerald: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.4)', text: 'rgb(52, 211, 153)', activeBg: 'rgb(16, 185, 129)' },
                      rose: { bg: 'rgba(244, 63, 94, 0.1)', border: 'rgba(244, 63, 94, 0.4)', text: 'rgb(251, 113, 133)', activeBg: 'rgb(244, 63, 94)' },
                      amber: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.4)', text: 'rgb(251, 191, 36)', activeBg: 'rgb(245, 158, 11)' },
                      sky: { bg: 'rgba(14, 165, 233, 0.1)', border: 'rgba(14, 165, 233, 0.4)', text: 'rgb(56, 189, 248)', activeBg: 'rgb(14, 165, 233)' },
                      violet: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.4)', text: 'rgb(167, 139, 250)', activeBg: 'rgb(139, 92, 246)' },
                    };
                    const colors = colorStyles[category.color] || colorStyles.emerald;
                    return (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className={`faq-tab-${category.color} flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300`}
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: colors.border,
                          color: colors.text,
                        }}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{category.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {/* Tab Content */}
                {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="bg-black border rounded-xl px-6 transition-all animate-fade-up hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                          style={{ animationDelay: `${index * 0.05}s`, borderColor: '#ff7f50ff' }}
                        >
                          <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium py-5 hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Contact CTA Card */}
            <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]">
                {/* Avatar with gradient border */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary">
                  <img 
                    src={subrataHeadshot} 
                    alt="Subrata Guha"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Have more questions about our Photography Marketing Solution?
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Get a personalized demo of our SEO, website, and marketing automation platform.
                </p>
                
                <p className="text-foreground font-medium mb-6">
                  Let's build your booking machine.
                </p>

                {/* Signature */}
                <div className="mb-6">
                  <p className="font-cursive text-2xl text-foreground italic">Subrata Guha</p>
                  <p className="text-sm text-muted-foreground">Founder, GrowSmallBiz</p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }) }}
        />
      </section>

      <BlogSection 
        posts={photographerBlogPosts}
        title="Photography Marketing Insights"
        subtitle="Tips and strategies to grow your photography business"
        viewAllLink="/blog"
      />

      <ConsultationFormSection />

      {/* Back to Top Link */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          >
            <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
            <span className="font-medium">Back to Top</span>
          </a>
        </div>
      </section>

      <Footer />

      {/* Sticky CTA - appears after scrolling */}
      <StickyCardCTA
        title="Ready for Photography Marketing That Fills Your Calendar?"
        description="Let's discuss a custom photography marketing strategy to attract dream clients and book more sessions consistently."
        buttonText="Get Your Custom Growth Strategy"
        buttonHref="/free-assessment?industry=photographer"
        accentWords={["Fills", "Your", "Calendar"]}
        showAfterScroll={800}
      />
    </div>
  );
};

export default Photographers;
