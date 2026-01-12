import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlowCard } from "@/components/ui/glow-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Mic
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, photographerBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA, PersonCTA } from "@/components/services";
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
import adCreativeSenior from "@/assets/ad-creative-senior-portrait.jpg";
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
    items: [
      "Internal Linking Opportunities",
      "Canonical Link Management",
      "Issues with Links Detection & Fix"
    ]
  },
  {
    title: "Cloud Stacks",
    icon: Globe,
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
    items: [
      "Open Graph Optimization",
      "Twitter Card Setup",
      "Missing Lang Attribute Fix",
      "Custom HTML Content Validation"
    ]
  },
  {
    title: "Instant Indexing",
    icon: Zap,
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
  { title: "Connect GBP to Get More Local Traffic", description: "Optimize your Google Business Profile for maximum visibility", icon: MapPin },
  { title: "Run Heatmap for Local Business", description: "Visualize your local search presence and identify opportunities", icon: BarChart3 },
  { title: "Enable GBP + Social Post Automation", description: "Automated posting to keep your profile active and engaging", icon: RefreshCw },
  { title: "Local Citation Building", description: "Build consistent listings across 50+ directories", icon: Globe }
];

// LLM Visibility & Rank Tracking
const llmVisibilityServices = [
  { title: "Connect GSC to Improve Rankings", description: "Google Search Console integration for data-driven optimization", icon: BarChart3 },
  { title: "Setup Keyword Rank Tracker", description: "Monitor your position for high-value photography keywords", icon: TrendingUp },
  { title: "Enable LLM Visibility Tracking", description: "Track how AI platforms like ChatGPT and Gemini recommend your studio", icon: Bot }
];

// Online Authority Services
const onlineAuthorityServices = [
  { title: "Publish Press Release", description: "Get featured in news outlets to build credibility and backlinks", icon: Megaphone },
  { title: "Cloud Stack - Quality Backlink Building", description: "Build high-authority backlinks to boost domain authority", icon: Globe }
];

// Color configurations
const colorConfig: Record<string, { bg: string; bgLight: string; text: string; border: string; gradient: string }> = {
  pink: {
    bg: "bg-pink-500",
    bgLight: "bg-pink-500/10",
    text: "text-pink-500",
    border: "border-pink-500/30",
    gradient: "from-pink-500 to-pink-600"
  },
  rose: {
    bg: "bg-rose-500",
    bgLight: "bg-rose-500/10",
    text: "text-rose-500",
    border: "border-rose-500/30",
    gradient: "from-rose-500 to-rose-600"
  },
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/30",
    gradient: "from-blue-500 to-blue-600"
  },
  violet: {
    bg: "bg-violet-500",
    bgLight: "bg-violet-500/10",
    text: "text-violet-500",
    border: "border-violet-500/30",
    gradient: "from-violet-500 to-violet-600"
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/30",
    gradient: "from-amber-500 to-amber-600"
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    gradient: "from-emerald-500 to-emerald-600"
  },
  cyan: {
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/30",
    gradient: "from-cyan-500 to-cyan-600"
  },
  teal: {
    bg: "bg-teal-500",
    bgLight: "bg-teal-500/10",
    text: "text-teal-500",
    border: "border-teal-500/30",
    gradient: "from-teal-500 to-teal-600"
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

// Paid Media Platform Recommendations by Genre
const paidMediaByGenre = [
  {
    genre: "Portrait Photographers",
    icon: Users,
    platforms: [
      { name: "Meta (FB/IG)", reason: "Visual platform perfect for showcasing portrait work to local parents and families" },
      { name: "Pinterest", reason: "Inspiration-driven; ideal for family photo ideas and senior session inspiration" },
      { name: "Google PPC", reason: "Capture high-intent 'photographer near me' searches" }
    ],
    color: "pink"
  },
  {
    genre: "Wedding Photographers",
    icon: Heart,
    platforms: [
      { name: "Meta (FB/IG)", reason: "Target engaged couples with visual wedding portfolio ads" },
      { name: "Pinterest", reason: "Wedding planning platform—brides actively searching for inspiration" },
      { name: "Google PPC", reason: "Target 'wedding photographer [city]' and venue-specific searches" },
      { name: "The Knot/Zola", reason: "Wedding-specific platforms where couples actively browse photographers" }
    ],
    color: "rose"
  },
  {
    genre: "Branding Photographers",
    icon: Sparkles,
    platforms: [
      { name: "LinkedIn Ads", reason: "Target entrepreneurs, coaches, and business owners directly" },
      { name: "Meta (FB/IG)", reason: "Reach personal brand builders and small business owners" },
      { name: "Google PPC", reason: "Capture 'professional headshot' and 'branding photographer' searches" }
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

// Social Media Platform Strategy by Genre
const socialMediaByGenre = [
  {
    genre: "Portrait Photographers",
    platforms: [
      { name: "Instagram", icon: Instagram, strategy: "Before/after reveals, behind-the-scenes stories, client testimonials in Reels" },
      { name: "Facebook", icon: Facebook, strategy: "Local community groups, parent groups, mini-session announcements" },
      { name: "Pinterest", icon: Image, strategy: "What to wear guides, location inspiration, session type boards" }
    ],
    color: "pink"
  },
  {
    genre: "Wedding Photographers",
    platforms: [
      { name: "Instagram", icon: Instagram, strategy: "Full wedding galleries in carousels, Reels of ceremony moments, vendor collaborations" },
      { name: "Pinterest", icon: Image, strategy: "Real wedding boards, venue-specific pins, wedding planning content" },
      { name: "TikTok", icon: Video, strategy: "Wedding day clips, photographer POV content, trending audio with wedding footage" }
    ],
    color: "rose"
  },
  {
    genre: "Branding Photographers",
    platforms: [
      { name: "LinkedIn", icon: Linkedin, strategy: "Thought leadership content, client success stories, business tips for personal branding" },
      { name: "Instagram", icon: Instagram, strategy: "Professional transformation reveals, tips for looking good on camera, brand story content" }
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

// AI Client Growth System - Funnels by Genre
const clientGrowthFunnels = [
  {
    genre: "Portrait Photography",
    icon: Users,
    color: "pink",
    funnel: [
      { stage: "Awareness", description: "Social media ads showcasing family sessions", icon: Megaphone },
      { stage: "Interest", description: "Free 'what to wear' guide download", icon: FileSearch },
      { stage: "Consideration", description: "Email nurture with portfolio + testimonials", icon: Mail },
      { stage: "Decision", description: "Limited-time mini-session offer", icon: Calendar },
      { stage: "Booking", description: "Online booking + deposit collection", icon: CheckCircle2 },
      { stage: "Experience", description: "Pre-session prep + day-of excellence", icon: Camera },
      { stage: "Retention", description: "Milestone reminders, referral program", icon: Repeat }
    ]
  },
  {
    genre: "Wedding Photography",
    icon: Heart,
    color: "rose",
    funnel: [
      { stage: "Discovery", description: "Pinterest ads, venue partnerships, SEO", icon: Search },
      { stage: "Research", description: "Portfolio review, blog posts from real weddings", icon: Eye },
      { stage: "Inquiry", description: "Contact form with date + venue details", icon: MessageSquare },
      { stage: "Consultation", description: "Video call or in-person meeting", icon: Video },
      { stage: "Proposal", description: "Custom collection presentation", icon: FileSearch },
      { stage: "Booking", description: "Contract signing + retainer", icon: CheckCircle2 },
      { stage: "Retention", description: "Anniversary session offers, referrals", icon: Heart }
    ]
  },
  {
    genre: "Branding Photography",
    icon: Sparkles,
    color: "blue",
    funnel: [
      { stage: "Outreach", description: "LinkedIn connection + nurture", icon: Linkedin },
      { stage: "Awareness", description: "Content marketing, case studies", icon: FileSearch },
      { stage: "Lead Magnet", description: "'Personal brand photoshoot checklist' download", icon: Gift },
      { stage: "Nurture", description: "Email sequence with transformation stories", icon: Mail },
      { stage: "Consultation", description: "Discovery call about brand goals", icon: Phone },
      { stage: "Booking", description: "Session booking + brand questionnaire", icon: Calendar },
      { stage: "Upsell", description: "Quarterly refresh sessions, team headshots", icon: TrendingUp }
    ]
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

// FAQs
const faqs = [
  {
    question: "How long does it take to see more photography bookings from SEO?",
    answer: "Most photographers see increased website traffic within 2-3 months and booking inquiries within 3-4 months. Wedding photography keywords often take longer due to competition but deliver high-value clients once ranking."
  },
  {
    question: "Can you help me rank for specific photography niches like newborn or boudoir?",
    answer: "Absolutely! We create dedicated landing pages for each specialty you offer and target clients actively searching for those specific services in your area."
  },
  {
    question: "How does the CRM integrate with my booking workflow?",
    answer: "Our CRM connects with your booking calendar to automatically capture inquiries, send follow-up sequences, and track where each client is in your pipeline—from initial inquiry to final gallery delivery."
  },
  {
    question: "What's included in the LinkedIn outreach automation for headshot photographers?",
    answer: "We set up automated connection sequences targeting your ideal clients by job title and industry, personalized messaging templates, and follow-up drips—all within LinkedIn's terms of service to protect your account."
  },
  {
    question: "How do seasonal campaigns work with email automation?",
    answer: "We pre-build campaign sequences for major opportunities (Mother's Day, fall minis, etc.) that automatically deploy at the right time. Past clients get priority access; warm leads get compelling offers."
  },
  {
    question: "Can the AI really book appointments on its own?",
    answer: "Yes! The Voice AI checks your real-time calendar availability and can book sessions directly. You'll get notifications of new bookings, and clients receive instant confirmations—no back-and-forth scheduling emails needed."
  }
];

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

      {/* The Reality - Merged Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-500/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle="The Reality"
            title="Photography Marketing"
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

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Complete Solution"
            title="Photography Business"
            titleHighlight="Growth System"
            description="Everything you need to attract, book, and retain dream clients"
          />

          {/* Subsection 1: Conversion-Focused Website Design for Photographers */}
          <div className="mb-16">
            <div className="mb-8">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Professional Photography Websites</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Photography Website Design <span className="text-transparent bg-clip-text bg-gradient-primary italic">That Books Clients</span>
              </h3>
              <p className="text-muted-foreground mt-3 max-w-3xl">
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
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Portfolio Websites That Convert Visitors Into Booked Clients
                </h3>
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

          {/* Subsection 2: AI-Powered SEO for Photographers */}
          <div className="mb-16">
            <div className="mb-8">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Photography SEO Services</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                AI-Powered SEO for <span className="text-transparent bg-clip-text bg-gradient-primary italic">Photographers</span>
              </h3>
              <p className="text-muted-foreground mt-3 max-w-3xl">
                Comprehensive search engine optimization strategy designed for photography businesses—from local portrait studios to destination wedding photographers
              </p>
            </div>

            {/* Keyword Research */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Keyword Research
              </h3>
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
                    <GlowCard key={key} className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h5 className="font-bold text-foreground">{genre.label}</h5>
                      </div>
                      <div>
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
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Competitor Analysis
              </h3>
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
            <div className="mb-12">
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-primary" />
                Technical SEO
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSEOSections.map((section, idx) => (
                  <GlowCard key={idx} className="p-6 border-emerald-500/30">
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
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* 4. Content Strategy */}
            <div className="mb-12">
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-primary" />
                Content Strategy
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
            <div className="mb-12">
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Local & Google Business Profile
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {localGBPServices.map((service, i) => (
                  <GlowCard key={i} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* 6. LLM Visibility & Rank Tracking */}
            <div className="mb-12">
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                LLM Visibility & Rank Tracking
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {llmVisibilityServices.map((service, i) => (
                  <GlowCard key={i} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-violet-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* 7. Online Authority */}
            <div className="mb-8">
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Online Authority
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {onlineAuthorityServices.map((service, i) => (
                  <GlowCard key={i} className="p-5 border-cyan-500/30">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>

          {/* CRM Integration */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-violet-500" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">CRM & Marketing Automation</h3>
            </div>

            <p className="text-muted-foreground mb-8 max-w-3xl">
              The importance of real-time integration cannot be overstated. When a lead inquires, 
              every second counts. Our CRM connects all your marketing channels and automates follow-up 
              so no opportunity slips through the cracks.
            </p>

            <GlowCard className="p-8 border-violet-500/30">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-violet-500" />
                    Instant Lead Capture
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Website inquiries, social DMs, and calls all flow into one unified inbox. 
                    Automated responses go out in seconds—not hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-violet-500" />
                    Automated Nurturing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Pre-built email and SMS sequences keep leads warm while you're shooting. 
                    Personalized follow-ups based on their inquiry type.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-violet-500" />
                    Pipeline Visibility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    See exactly where every lead is—from inquiry to booked to gallery delivered. 
                    Never wonder about your upcoming revenue again.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Paid Media Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
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

          {/* Platform Recommendations by Genre */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {paidMediaByGenre.map((genre, i) => {
              const colors = colorConfig[genre.color];
              return (
                <GlowCard key={i} className={`p-6 ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <genre.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground">{genre.genre}</h4>
                  </div>
                  <ul className="space-y-3">
                    {genre.platforms.map((platform, j) => (
                      <li key={j} className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-foreground text-sm">{platform.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{platform.reason}</div>
                      </li>
                    ))}
                  </ul>
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

      {/* Social Media Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Organic Social"
            title="Social Media Strategy for"
            titleHighlight="Photographers"
            description="Platform-specific strategies for each photography genre"
          />

          <div className="space-y-8 mb-16">
            {socialMediaByGenre.map((genre, i) => {
              const colors = colorConfig[genre.color];
              return (
                <GlowCard key={i} className={`p-6 ${colors.border}`}>
                  <h4 className={`font-bold ${colors.text} mb-4`}>{genre.genre}</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {genre.platforms.map((platform, j) => (
                      <div key={j} className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <platform.icon className={`w-5 h-5 ${colors.text}`} />
                          <span className="font-medium text-foreground">{platform.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{platform.strategy}</p>
                      </div>
                    ))}
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

      {/* AI Client Growth System */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle="AI Client Growth System"
            title="Sample Funnels by"
            titleHighlight="Photography Genre"
            description="From first impression to repeat customer—automated workflows for every stage"
          />

          {/* Funnel Visualizations */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {clientGrowthFunnels.map((funnel, i) => {
              const colors = colorConfig[funnel.color];
              return (
                <GlowCard key={i} className={`p-6 ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <funnel.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground">{funnel.genre}</h4>
                  </div>
                  <div className="space-y-3">
                    {funnel.funnel.map((step, j) => (
                      <div 
                        key={j} 
                        className={`flex items-center gap-3 p-3 rounded-lg ${colors.bgLight} border ${colors.border}`}
                        style={{ opacity: 1 - (j * 0.08) }}
                      >
                        <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`} style={{ opacity: 1 - (j * 0.1) }}>
                          <step.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className={`text-xs font-semibold ${colors.text}`}>{step.stage}</div>
                          <div className="text-xs text-muted-foreground">{step.description}</div>
                        </div>
                      </div>
                    ))}
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

      {/* Reputation, Gift Cards, Referrals */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
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

      {/* AI Voice & Chat Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
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
      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Photography Marketing"
        subtitle="Your Photography Marketing Partner"
        description="We specialize in helping photographers get found by ideal clients, showcase their work effectively, and build a sustainable booking pipeline."
        items={[
          { title: "Photography Experts", description: "We focus on photographers—weddings, portraits, commercial, and events. We know your industry.", icon: Camera },
          { title: "Portfolio Optimization", description: "Showcase your best work in a way that both clients and search engines love.", icon: Image },
          { title: "Visual-First Marketing", description: "Leverage Instagram, Pinterest, and visual platforms to attract your ideal clients.", icon: Star },
          { title: "Local SEO for Creatives", description: "Rank for photography searches in your city and surrounding areas.", icon: MapPin },
          { title: "AI Search Ready", description: "Get recommended when couples ask AI for the best wedding photographer in your city.", icon: Bot },
          { title: "Booking Growth", description: "Our photography clients typically see 2-3x more inquiries within the first season.", icon: TrendingUp },
        ]}
      />

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
      />

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Photographer Marketing FAQs"
        subtitle="Common questions from photographers"
        schemaType="FAQPage"
      />

      <BlogSection 
        posts={photographerBlogPosts}
        title="Photography Marketing Insights"
        subtitle="Tips and strategies to grow your photography business"
        viewAllLink="/blog"
      />

      <CardCTA 
        title="Ready to Fill Your Calendar?"
        description="Let's build a marketing system that brings you dream clients on autopilot."
        buttonText="Get Your Free Assessment"
        buttonHref="/free-assessment?industry=photographer"
      />

      <ConsultationFormSection />

      <Footer />
    </div>
  );
};

export default Photographers;
