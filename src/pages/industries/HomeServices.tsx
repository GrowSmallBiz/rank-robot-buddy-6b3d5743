import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CardCTA } from "@/components/services/CardCTA";
import { SectionHeader } from "@/components/services/SectionHeader";
import { createIndustryContactCTA } from "@/config/contactCTA";
import { GlowCard } from "@/components/ui/glow-card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Target,
  Users,
  TrendingUp,
  Heart,
  MapPin,
  Star,
  Bot,
  Search,
  Globe,
  BarChart3,
  Zap,
  Shield,
  Wrench,
  Flame,
  Droplets,
  Plug,
  Home,
  Hammer,
  Megaphone,
  MousePointerClick,
  RefreshCw,
  Eye,
  FileSearch,
  LineChart,
  BadgeDollarSign,
  MessageCircle,
  Smartphone,
  Monitor,
  Play,
  Share2,
  Instagram,
  Facebook,
  FolderOpen,
  Repeat,
  DollarSign,
  Database
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GeminiIcon, 
  ChatGPTIcon, 
  PerplexityIcon, 
  GrokIcon, 
  CopilotIcon, 
  GoogleAIIcon 
} from "@/components/icons/AIplatformIcons";

import heroImage from "@/assets/industry-hvac-hero.jpg";
import seoDashboardMetrics from "@/assets/seo-dashboard-metrics.png";

// Who We Help Images
import whoWeHelpGeneralContractor from "@/assets/who-we-help-general-contractor.jpg";
import whoWeHelpRemodeling from "@/assets/who-we-help-remodeling.jpg";
import whoWeHelpPlumber from "@/assets/who-we-help-plumber.jpg";
import whoWeHelpLandscaper from "@/assets/who-we-help-landscaper.jpg";
import whoWeHelpPressureWasher from "@/assets/who-we-help-pressure-washer.jpg";
import whoWeHelpMovingCompany from "@/assets/who-we-help-moving-company.jpg";
import whoWeHelpPestControl from "@/assets/who-we-help-pest-control.jpg";
import whoWeHelpFlooring from "@/assets/who-we-help-flooring.jpg";
import whoWeHelpDeckPatio from "@/assets/who-we-help-deck-patio.jpg";
import whoWeHelpHvac from "@/assets/who-we-help-hvac.jpg";
import whoWeHelpElectrician from "@/assets/who-we-help-electrician.jpg";
import whoWeHelpPainter from "@/assets/who-we-help-painter.jpg";
import whoWeHelpHomeBuilder from "@/assets/who-we-help-home-builder.jpg";
import whoWeHelpTreeService from "@/assets/who-we-help-tree-service.jpg";
import whoWeHelpRoofer from "@/assets/who-we-help-roofer.jpg";
import whoWeHelpPoolSpa from "@/assets/who-we-help-pool-spa.jpg";

// Who We Help Data - 16 trades matching reference
const serviceDescription = "Websites • Local SEO • PPC\nAI Receptionist • CRM";

const whoWeHelp = [
  { name: "General Contractors", image: whoWeHelpGeneralContractor, description: serviceDescription },
  { name: "Remodeling", image: whoWeHelpRemodeling, description: serviceDescription },
  { name: "Plumbing", image: whoWeHelpPlumber, description: serviceDescription },
  { name: "Landscapers", image: whoWeHelpLandscaper, description: serviceDescription },
  { name: "Pressure Washer", image: whoWeHelpPressureWasher, description: serviceDescription },
  { name: "Moving Companies", image: whoWeHelpMovingCompany, description: serviceDescription },
  { name: "Pest Control", image: whoWeHelpPestControl, description: serviceDescription },
  { name: "Flooring & Carpet Cleaning", image: whoWeHelpFlooring, description: serviceDescription },
  { name: "Decks & Patios", image: whoWeHelpDeckPatio, description: serviceDescription },
  { name: "HVAC", image: whoWeHelpHvac, description: serviceDescription },
  { name: "Electrician", image: whoWeHelpElectrician, description: serviceDescription },
  { name: "Painters", image: whoWeHelpPainter, description: serviceDescription },
  { name: "Roofers", image: whoWeHelpRoofer, description: serviceDescription },
  { name: "Pool & Spa", image: whoWeHelpPoolSpa, description: serviceDescription },
  { name: "Home Builders", image: whoWeHelpHomeBuilder, description: serviceDescription },
  { name: "Tree Service", image: whoWeHelpTreeService, description: serviceDescription },
];

// Marketing Funnel Stages
const marketingFunnel = [
  {
    stage: "Awareness",
    icon: Eye,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Get discovered by homeowners actively searching for your services",
    strategies: [
      { name: "Local SEO", description: "Rank #1 in Google Maps & organic search" },
      { name: "AI SEO (AEO/GEO)", description: "Get recommended by ChatGPT & AI assistants" },
      { name: "Google PPC", description: "Appear at the top for high-intent searches" },
      { name: "Meta Ads", description: "Reach homeowners in your service area" }
    ]
  },
  {
    stage: "Consideration",
    icon: FileSearch,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Build trust and credibility when prospects are comparing options",
    strategies: [
      { name: "Professional Website", description: "Convert visitors with compelling design" },
      { name: "Review Generation", description: "Showcase 5-star reputation" },
      { name: "Content Marketing", description: "Educate prospects & establish expertise" },
      { name: "Retargeting Ads", description: "Stay top-of-mind with website visitors" }
    ]
  },
  {
    stage: "Conversion",
    icon: MousePointerClick,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    description: "Turn qualified leads into booked appointments and paying customers",
    strategies: [
      { name: "AI Receptionist", description: "Never miss a call—book 24/7" },
      { name: "Lead Capture Forms", description: "Easy quote requests & scheduling" },
      { name: "Local Service Ads", description: "Pay-per-lead with Google Guarantee" },
      { name: "CRM Automation", description: "Instant follow-up on every inquiry" }
    ]
  },
  {
    stage: "Retention",
    icon: Heart,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description: "Keep customers coming back and referring friends & family",
    strategies: [
      { name: "Reputation Management", description: "Monitor & respond to reviews" },
      { name: "Email/SMS Campaigns", description: "Seasonal reminders & promotions" },
      { name: "Referral Programs", description: "Turn happy customers into advocates" },
      { name: "Maintenance Plans", description: "Recurring revenue & loyalty" }
    ]
  }
];

// Platform Recommendations by Trade - Funnel Style with unique colors
const platformRecommendations = [
  {
    trade: "HVAC",
    icon: Flame,
    topPlatforms: ["Google LSA", "Google PPC", "Meta (FB)", "Nextdoor"],
    funnel: ["Lead Capture", "Quote Request", "Scheduling", "Service", "Review"],
    strategy: "Emergency-focused keywords + seasonal campaigns. Google LSA is king for urgent AC/heating repairs.",
    seasonality: "Peak: Summer (AC) & Winter (Heating)",
    color: "blue" as const
  },
  {
    trade: "Plumbing",
    icon: Droplets,
    topPlatforms: ["Google LSA", "Google PPC", "YouTube", "Yelp"],
    funnel: ["Emergency Call", "Dispatch", "Diagnosis", "Repair", "Review"],
    strategy: "24/7 emergency visibility is critical. LSA for urgent leads, PPC for drain cleaning & water heaters.",
    seasonality: "Year-round with freeze & holiday spikes",
    color: "cyan" as const
  },
  {
    trade: "Electrical",
    icon: Plug,
    topPlatforms: ["Google PPC", "Google LSA", "Meta (FB/IG)", "HomeAdvisor"],
    funnel: ["Service Request", "Consultation", "Estimate", "Installation", "Follow-up"],
    strategy: "Focus on safety-related searches and home renovation keywords. EV charger installation is a growing opportunity.",
    seasonality: "Steady demand, storm season spikes",
    color: "amber" as const
  },
  {
    trade: "Roofing",
    icon: Home,
    topPlatforms: ["Google PPC", "Meta (FB/IG)", "Google LSA", "Houzz"],
    funnel: ["Storm Lead", "Inspection", "Estimate", "Contract", "Project Complete"],
    strategy: "Storm damage campaigns + visual before/after content on Meta/IG. Longer sales cycle requires strong retargeting.",
    seasonality: "Peak: Spring & Fall seasons",
    color: "emerald" as const
  },
  {
    trade: "Remodeling",
    icon: Hammer,
    topPlatforms: ["Meta (FB/IG)", "Houzz", "Pinterest", "Google PPC"],
    funnel: ["Inspiration", "Consultation", "Design", "Build", "Reveal"],
    strategy: "Visual-first approach. High-quality project photos on Instagram, Pinterest, and Houzz.",
    seasonality: "Peak: Spring & Fall, Q1 kitchen/bath",
    color: "pink" as const
  },
  {
    trade: "General Contractor",
    icon: Wrench,
    topPlatforms: ["Google PPC", "Meta (FB)", "Houzz", "Nextdoor"],
    funnel: ["Project Inquiry", "Site Visit", "Proposal", "Build Phase", "Handover"],
    strategy: "Showcase portfolio diversity. Target homeowners planning major projects. Reviews and referrals are critical.",
    seasonality: "Year-round with spring surge",
    color: "violet" as const
  }
];

// Color configurations for funnel cards
const colorConfig = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-500",
    bgLight: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/30",
    steps: ["bg-blue-500", "bg-blue-500/80", "bg-blue-500/60", "bg-blue-500/40", "bg-blue-500/25"]
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/30",
    steps: ["bg-cyan-500", "bg-cyan-500/80", "bg-cyan-500/60", "bg-cyan-500/40", "bg-cyan-500/25"]
  },
  amber: {
    gradient: "from-amber-500 to-amber-600",
    bg: "bg-amber-500",
    bgLight: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/30",
    steps: ["bg-amber-500", "bg-amber-500/80", "bg-amber-500/60", "bg-amber-500/40", "bg-amber-500/25"]
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    steps: ["bg-emerald-500", "bg-emerald-500/80", "bg-emerald-500/60", "bg-emerald-500/40", "bg-emerald-500/25"]
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    bg: "bg-pink-500",
    bgLight: "bg-pink-500/10",
    text: "text-pink-500",
    border: "border-pink-500/30",
    steps: ["bg-pink-500", "bg-pink-500/80", "bg-pink-500/60", "bg-pink-500/40", "bg-pink-500/25"]
  },
  violet: {
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-500",
    bgLight: "bg-violet-500/10",
    text: "text-violet-500",
    border: "border-violet-500/30",
    steps: ["bg-violet-500", "bg-violet-500/80", "bg-violet-500/60", "bg-violet-500/40", "bg-violet-500/25"]
  }
};

// Essential Stack Tabs Data with unique colors
const essentialStackTabs = [
  {
    id: "website-seo",
    label: "Website & SEO",
    icon: Monitor,
    color: "blue",
    colorClasses: {
      bg: "bg-blue-500",
      bgLight: "bg-blue-500/10",
      bgGradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/5",
      text: "text-blue-500",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      statText: "text-blue-500"
    },
    title: "Responsive Website & AI-Powered SEO",
    subtitle: "Your Digital Foundation",
    description: "A fast, mobile-first website paired with comprehensive SEO strategy covering traditional search, local pack, and AI-powered search assistants.",
    features: [
      "Mobile-optimized website (<3 second load time)",
      "Service area pages for local SEO",
      "Keyword research & competitor analysis",
      "Technical SEO & schema markup",
      "AEO/GEO for ChatGPT visibility",
      "Google Business Profile optimization"
    ],
    stats: [
      { value: "312%", label: "Avg organic traffic increase" },
      { value: "40%", label: "AI search visibility" }
    ],
    href: "/services/managed-ai-seo",
    visualIcons: [Globe, Search, BarChart3, Target]
  },
  {
    id: "paid-search",
    label: "Paid Search",
    icon: Search,
    color: "green",
    colorClasses: {
      bg: "bg-green-500",
      bgLight: "bg-green-500/10",
      bgGradient: "from-green-500/20 via-green-500/10 to-emerald-500/5",
      text: "text-green-500",
      border: "border-green-500/30",
      hover: "hover:border-green-500",
      statText: "text-green-500"
    },
    title: "Google PPC, LSA & Meta Ads",
    subtitle: "Immediate Visibility",
    description: "Strategic paid advertising across Google, Meta, and local platforms to generate qualified leads from day one.",
    features: [
      "Google Search & Display campaigns",
      "Google Local Service Ads (LSA) with Google Guarantee",
      "Microsoft Bing Ads for 35+ demographics",
      "Meta Ads (Facebook & Instagram)",
      "TikTok for brand awareness",
      "Conversion tracking & optimization"
    ],
    stats: [
      { value: "4.2x", label: "Average ROAS" },
      { value: "$23", label: "Avg cost per lead" }
    ],
    href: "/services/paid-media",
    visualIcons: [Megaphone, Shield, MousePointerClick, TrendingUp]
  },
  {
    id: "retargeting",
    label: "Retargeting",
    icon: RefreshCw,
    color: "purple",
    colorClasses: {
      bg: "bg-purple-500",
      bgLight: "bg-purple-500/10",
      bgGradient: "from-purple-500/20 via-purple-500/10 to-violet-500/5",
      text: "text-purple-500",
      border: "border-purple-500/30",
      hover: "hover:border-purple-500",
      statText: "text-purple-500"
    },
    title: "Retargeting & Remarketing",
    subtitle: "Stay Top-of-Mind",
    description: "Re-engage website visitors who didn't convert with strategic follow-up ads across all platforms. Perfect for high-ticket services with longer decision cycles.",
    features: [
      "Website visitor retargeting pixels",
      "Cross-platform remarketing (Google, Meta, YouTube)",
      "Dynamic product/service ads",
      "Email list retargeting",
      "Lookalike audience creation",
      "Abandoned form follow-up"
    ],
    stats: [
      { value: "70%", label: "Higher conversion rate" },
      { value: "50%", label: "Lower acquisition cost" }
    ],
    href: "/services/paid-media",
    visualIcons: [Eye, Users, Target, RefreshCw]
  },
  {
    id: "directories",
    label: "Online Directories",
    icon: FolderOpen,
    color: "amber",
    colorClasses: {
      bg: "bg-amber-500",
      bgLight: "bg-amber-500/10",
      bgGradient: "from-amber-500/20 via-amber-500/10 to-orange-500/5",
      text: "text-amber-500",
      border: "border-amber-500/30",
      hover: "hover:border-amber-500",
      statText: "text-amber-500"
    },
    title: "Citation Building & Directory Management",
    subtitle: "Be Found Everywhere",
    description: "Comprehensive directory submissions and citation building to boost local search rankings and ensure consistent NAP (Name, Address, Phone) across 100+ platforms.",
    features: [
      "100+ directory submissions",
      "NAP consistency audit & cleanup",
      "Industry-specific directories (Angi, HomeAdvisor, Houzz)",
      "Apple Maps & Bing Places optimization",
      "Review platform setup (Yelp, BBB, Thumbtack)",
      "Monthly citation monitoring"
    ],
    stats: [
      { value: "100+", label: "Directories managed" },
      { value: "95%", label: "NAP consistency" }
    ],
    href: "/services/local-seo",
    visualIcons: [MapPin, Globe, FileSearch, CheckCircle2]
  },
  {
    id: "repeat-referral",
    label: "Repeat & Referral",
    icon: Repeat,
    color: "pink",
    colorClasses: {
      bg: "bg-pink-500",
      bgLight: "bg-pink-500/10",
      bgGradient: "from-pink-500/20 via-pink-500/10 to-rose-500/5",
      text: "text-pink-500",
      border: "border-pink-500/30",
      hover: "hover:border-pink-500",
      statText: "text-pink-500"
    },
    title: "Repeat Business & Referral Programs",
    subtitle: "Keep Customers Coming Back",
    description: "Automated systems to turn one-time customers into loyal repeat clients and brand advocates who refer friends and family.",
    features: [
      "Automated review request sequences",
      "Seasonal service reminders (HVAC tune-ups, etc.)",
      "Referral program setup & tracking",
      "Customer loyalty rewards",
      "Maintenance plan marketing",
      "Win-back campaigns for dormant customers"
    ],
    stats: [
      { value: "47", label: "New reviews/month avg" },
      { value: "35%", label: "Referral rate increase" }
    ],
    href: "/services/reputation-management",
    visualIcons: [Heart, Star, Users, MessageCircle]
  },
  {
    id: "pay-per-lead",
    label: "Pay Per Lead",
    icon: DollarSign,
    color: "emerald",
    colorClasses: {
      bg: "bg-emerald-500",
      bgLight: "bg-emerald-500/10",
      bgGradient: "from-emerald-500/20 via-emerald-500/10 to-green-500/5",
      text: "text-emerald-500",
      border: "border-emerald-500/30",
      hover: "hover:border-emerald-500",
      statText: "text-emerald-500"
    },
    title: "Pay-Per-Lead Platforms",
    subtitle: "Only Pay for Results",
    description: "Strategic management of pay-per-lead platforms like Google LSA, Thumbtack, and HomeAdvisor to maximize ROI while minimizing wasted spend.",
    features: [
      "Google LSA setup & optimization",
      "Thumbtack profile & response management",
      "HomeAdvisor/Angi lead management",
      "Lead quality filtering & disputes",
      "Response time optimization",
      "ROI tracking & reporting"
    ],
    stats: [
      { value: "$45", label: "Avg cost per qualified lead" },
      { value: "67", label: "LSA leads/month avg" }
    ],
    href: "/services/paid-media",
    visualIcons: [BadgeDollarSign, Shield, Zap, TrendingUp]
  },
  {
    id: "social-media",
    label: "Social Media",
    icon: Share2,
    color: "cyan",
    colorClasses: {
      bg: "bg-cyan-500",
      bgLight: "bg-cyan-500/10",
      bgGradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/5",
      text: "text-cyan-500",
      border: "border-cyan-500/30",
      hover: "hover:border-cyan-500",
      statText: "text-cyan-500"
    },
    title: "Social Media Management",
    subtitle: "Build Your Brand",
    description: "Professional social media presence across Facebook, Instagram, and YouTube to showcase your work, build trust, and stay connected with your community.",
    features: [
      "Content calendar & scheduling",
      "Before/after project showcases",
      "Customer testimonial videos",
      "Community engagement & responses",
      "Local event & promotion posts",
      "YouTube channel management"
    ],
    stats: [
      { value: "3x", label: "Engagement increase" },
      { value: "25%", label: "Lead attribution" }
    ],
    href: "/services/social-media",
    visualIcons: [Instagram, Facebook, Play, Share2]
  },
  {
    id: "crm",
    label: "CRM",
    icon: Database,
    color: "violet",
    colorClasses: {
      bg: "bg-violet-500",
      bgLight: "bg-violet-500/10",
      bgGradient: "from-violet-500/20 via-violet-500/10 to-purple-500/5",
      text: "text-violet-500",
      border: "border-violet-500/30",
      hover: "hover:border-violet-500",
      statText: "text-violet-500"
    },
    title: "CRM & Marketing Automation",
    subtitle: "Never Lose a Lead",
    description: "Centralized customer relationship management with automated follow-ups, pipeline tracking, and seamless integration with all your marketing channels.",
    features: [
      "All leads in one dashboard",
      "Automated email/SMS sequences",
      "Pipeline & job tracking",
      "Appointment scheduling integration",
      "AI-powered lead scoring",
      "Revenue & ROI reporting"
    ],
    stats: [
      { value: "98%", label: "Lead follow-up rate" },
      { value: "2x", label: "Conversion improvement" }
    ],
    href: "/services/crm",
    visualIcons: [BarChart3, Smartphone, MessageCircle, Bot]
  }
];

// Marketing Automation Network
const automationNodes = [
  { id: "landing", label: "Landing Page", icon: Monitor, x: 10, y: 30 },
  { id: "forms", label: "Lead Forms", icon: FileSearch, x: 10, y: 60 },
  { id: "ads", label: "Ad Campaign", icon: Megaphone, x: 40, y: 50 },
  { id: "pipeline", label: "Pipeline Management", icon: TrendingUp, x: 40, y: 10 },
  { id: "sms", label: "SMS Marketing", icon: Smartphone, x: 55, y: 25 },
  { id: "reputation", label: "Reputation Management", icon: Star, x: 70, y: 10 },
  { id: "social", label: "Social Media", icon: Share2, x: 80, y: 30 },
  { id: "emails", label: "Nurturing Emails", icon: MessageCircle, x: 70, y: 60 },
  { id: "newlead", label: "New Lead", icon: Users, x: 25, y: 45 },
  { id: "purchase", label: "Purchase", icon: BadgeDollarSign, x: 40, y: 80 }
];

// LLM Visibility Tracking Platforms
const llmPlatforms = [
  { name: "Gemini", visibility: "2 topics", visibilityPct: 33, sentiment: 82, IconComponent: GeminiIcon },
  { name: "ChatGPT", visibility: "2 topics", visibilityPct: 33, sentiment: 71, IconComponent: ChatGPTIcon },
  { name: "Perplexity", visibility: "2 topics", visibilityPct: 33, sentiment: 73, IconComponent: PerplexityIcon },
  { name: "Grok", visibility: "0 topics", visibilityPct: 0, sentiment: 82, IconComponent: GrokIcon },
  { name: "Copilot", visibility: "1 topics", visibilityPct: 17, sentiment: 77, IconComponent: CopilotIcon },
  { name: "Google AI Mode", visibility: "2 topics", visibilityPct: 33, sentiment: 78, IconComponent: GoogleAIIcon }
];

// AI SEO Details
const aiSeoStrategy = {
  title: "AI SEO Strategy",
  description: "Our comprehensive AI SEO approach ensures you're visible across all search platforms—traditional and AI-powered.",
  phases: [
    {
      phase: "Research & Analysis",
      icon: FileSearch,
      items: [
        "Deep keyword research (500+ terms per trade)",
        "Competitor gap analysis & local SEO heatmap",
        "Current ranking & citation audit",
        "Technical SEO assessment",
        "Backlink profile analysis"
      ]
    },
    {
      phase: "Optimization & Authority",
      icon: Target,
      items: [
        "On-page optimization & schema markup",
        "Local directory submissions (100+ directories)",
        "Google Business Profile optimization",
        "AEO/GEO content strategy",
        "Press release distribution & syndication"
      ]
    },
    {
      phase: "Link Building & Growth",
      icon: LineChart,
      items: [
        "Strategic backlink acquisition",
        "Guest posting & industry publications",
        "Local citation building & cleanup",
        "Weekly ranking & heatmap reports",
        "Continuous content optimization"
      ]
    }
  ]
};

// SEO Components Visual
const seoComponents = [
  { 
    id: "directories", 
    label: "Local Directories", 
    icon: MapPin, 
    color: "blue",
    description: "100+ directory submissions for NAP consistency",
    examples: ["Yelp", "Yellow Pages", "Angi", "BBB", "Industry-specific"]
  },
  { 
    id: "backlinks", 
    label: "Backlink Acquisition", 
    icon: Globe, 
    color: "purple",
    description: "Quality backlinks from authoritative sources",
    examples: ["Guest posts", "Industry blogs", "Local news", "Partnerships"]
  },
  { 
    id: "press", 
    label: "Press Releases", 
    icon: Megaphone, 
    color: "amber",
    description: "Syndicated across 400+ news outlets",
    examples: ["Company news", "Awards", "Community events", "Milestones"]
  },
  { 
    id: "heatmap", 
    label: "Local SEO Heatmap", 
    icon: BarChart3, 
    color: "green",
    description: "Visual ranking data across your service area",
    examples: ["Grid-based ranking", "Competitor positions", "Opportunity zones"]
  }
];

// Citation Directories Data
const citationDirectories = [
  { name: "Google Business Profile", category: "Essential", status: "submitted", da: 100 },
  { name: "Yelp", category: "Essential", status: "submitted", da: 94 },
  { name: "Facebook Business", category: "Essential", status: "submitted", da: 96 },
  { name: "Apple Maps", category: "Essential", status: "submitted", da: 100 },
  { name: "Bing Places", category: "Essential", status: "submitted", da: 93 },
  { name: "Yellow Pages", category: "General", status: "submitted", da: 87 },
  { name: "BBB", category: "Trust", status: "submitted", da: 91 },
  { name: "Angi (Angie's List)", category: "Home Services", status: "submitted", da: 89 },
  { name: "HomeAdvisor", category: "Home Services", status: "submitted", da: 88 },
  { name: "Thumbtack", category: "Home Services", status: "submitted", da: 86 },
  { name: "Houzz", category: "Home Services", status: "pending", da: 91 },
  { name: "Nextdoor", category: "Local", status: "submitted", da: 92 },
  { name: "Manta", category: "General", status: "submitted", da: 72 },
  { name: "MapQuest", category: "Maps", status: "submitted", da: 81 },
  { name: "Foursquare", category: "Local", status: "pending", da: 84 },
  { name: "Superpages", category: "General", status: "submitted", da: 68 },
  { name: "Citysearch", category: "Local", status: "submitted", da: 71 },
  { name: "Local.com", category: "Local", status: "pending", da: 64 },
  { name: "Hotfrog", category: "General", status: "submitted", da: 58 },
  { name: "Brownbook", category: "General", status: "submitted", da: 61 },
  { name: "Cylex", category: "General", status: "pending", da: 55 },
  { name: "eLocal", category: "Local", status: "submitted", da: 52 },
  { name: "ShowMeLocal", category: "Local", status: "submitted", da: 48 },
  { name: "Chamber of Commerce", category: "Trust", status: "pending", da: 76 },
  { name: "Alignable", category: "B2B", status: "submitted", da: 67 },
  { name: "Merchantcircle", category: "General", status: "submitted", da: 54 },
  { name: "2FindLocal", category: "Local", status: "pending", da: 41 },
  { name: "US City", category: "Local", status: "submitted", da: 45 },
  { name: "Tupalo", category: "General", status: "submitted", da: 52 },
  { name: "Spoke", category: "B2B", status: "pending", da: 49 }
];

// Interactive Heatmap Data
const heatmapData = [
  { position: 1, rank: 1, keyword: "HVAC repair", you: 1, competitor: 3, location: "Downtown" },
  { position: 2, rank: 2, keyword: "AC installation", you: 2, competitor: 1, location: "Midtown" },
  { position: 3, rank: 1, keyword: "Furnace repair", you: 1, competitor: 4, location: "West Side" },
  { position: 4, rank: 7, keyword: "HVAC maintenance", you: 7, competitor: 2, location: "North End" },
  { position: 5, rank: 12, keyword: "Emergency AC", you: 12, competitor: 5, location: "East District" },
  { position: 6, rank: 3, keyword: "Heating repair", you: 3, competitor: 6, location: "Suburbs North" },
  { position: 7, rank: 1, keyword: "AC tune-up", you: 1, competitor: 8, location: "Business District" },
  { position: 8, rank: 2, keyword: "Ductwork", you: 2, competitor: 4, location: "Industrial Zone" },
  { position: 9, rank: 4, keyword: "Heat pump", you: 4, competitor: 1, location: "Residential East" },
  { position: 10, rank: 6, keyword: "HVAC contractor", you: 6, competitor: 3, location: "South Side" },
  { position: 11, rank: 1, keyword: "Furnace install", you: 1, competitor: 7, location: "Central" },
  { position: 12, rank: 1, keyword: "AC repair near me", you: 1, competitor: 2, location: "Core Area" },
  { position: 13, rank: 1, keyword: "24/7 HVAC", you: 1, competitor: 9, location: "Metro Center" },
  { position: 14, rank: 2, keyword: "Cooling service", you: 2, competitor: 3, location: "Uptown" },
  { position: 15, rank: 3, keyword: "Heating install", you: 3, competitor: 1, location: "Heights" },
  { position: 16, rank: 8, keyword: "Commercial HVAC", you: 8, competitor: 2, location: "Warehouse Dist" },
  { position: 17, rank: 4, keyword: "Residential AC", you: 4, competitor: 5, location: "Suburbs South" },
  { position: 18, rank: 2, keyword: "Air quality", you: 2, competitor: 4, location: "Green Zone" },
  { position: 19, rank: 1, keyword: "HVAC service", you: 1, competitor: 6, location: "Town Center" },
  { position: 20, rank: 5, keyword: "Thermostat", you: 5, competitor: 2, location: "Tech Park" },
  { position: 21, rank: 14, keyword: "Mini split", you: 14, competitor: 3, location: "Outer Ring" },
  { position: 22, rank: 9, keyword: "Vent cleaning", you: 9, competitor: 1, location: "Airport Area" },
  { position: 23, rank: 3, keyword: "Heating company", you: 3, competitor: 4, location: "Lakeside" },
  { position: 24, rank: 6, keyword: "AC company", you: 6, competitor: 2, location: "Riverside" },
  { position: 25, rank: 11, keyword: "HVAC emergency", you: 11, competitor: 4, location: "Far East" }
];

// Paid Media Details
const paidMediaStrategy = {
  title: "Paid Media Strategy",
  description: "Multi-platform advertising strategy designed to capture leads at every stage of the customer journey.",
  platforms: [
    {
      name: "Google Search (PPC)",
      icon: Search,
      description: "High-intent keyword targeting for people actively searching for your services.",
      bestFor: "Emergency services, specific repairs, 'near me' searches"
    },
    {
      name: "Google Local Service Ads",
      icon: Shield,
      description: "Pay-per-lead ads with Google Guarantee badge. Top of search results.",
      bestFor: "All trades—especially emergency services"
    },
    {
      name: "Microsoft Bing Ads",
      icon: Globe,
      description: "Lower competition and CPCs than Google. Reaches older, higher-income homeowners.",
      bestFor: "Budget-conscious campaigns, targeting 35+ demographics"
    },
    {
      name: "Meta (Facebook & Instagram)",
      icon: Share2,
      description: "Visual ads targeting homeowners in your service area by demographics and interests.",
      bestFor: "Remodeling, HVAC maintenance plans, brand awareness"
    },
    {
      name: "TikTok Ads",
      icon: Play,
      description: "Short-form video ads for brand awareness and reaching younger homeowners.",
      bestFor: "First-time homebuyers, brand building, viral before/after content"
    },
    {
      name: "Retargeting",
      icon: RefreshCw,
      description: "Re-engage website visitors who didn't convert with follow-up ads across platforms.",
      bestFor: "High-ticket services with longer decision cycles"
    }
  ]
};

const results = [
  { value: "312%", label: "Average increase in organic leads" },
  { value: "4.2x", label: "Return on ad spend (ROAS)" },
  { value: "47", label: "Average new reviews per month" },
  { value: "<$45", label: "Average cost per qualified lead" }
];

const homeServicesTestimonials = [
  {
    quote: "GrowSmallBiz built us a complete marketing system—website, SEO, and Google Ads. We went from 50 calls a month to over 200. The strategy actually makes sense.",
    author: "Mike Rodriguez",
    role: "Owner",
    company: "Rodriguez Roofing & Gutters",
    rating: 5
  },
  {
    quote: "They helped us understand which platforms work best for HVAC. We stopped wasting money on ads that didn't convert and doubled our ROI.",
    author: "Jennifer Walsh",
    role: "Marketing Director",
    company: "ComfortFirst HVAC",
    rating: 5
  },
  {
    quote: "The reputation management system got us 89 new 5-star reviews in 3 months. We're now the top-rated remodeler in our county.",
    author: "David Chen",
    role: "Owner",
    company: "Chen Home Renovations",
    rating: 5
  }
];

const faqs = [
  {
    question: "What types of home service businesses do you work with?",
    answer: "We specialize in HVAC, plumbing, electrical, roofing, and remodeling businesses. Our strategies are tailored to the unique challenges of each trade—from emergency service calls to seasonal demand fluctuations and long sales cycles."
  },
  {
    question: "How do you determine which advertising platforms are best for my business?",
    answer: "We analyze your specific trade, service area, average job value, and competition to recommend the optimal platform mix. For example, HVAC and plumbing benefit heavily from Google LSA for emergencies, while remodelers see better ROI from visual platforms like Meta and Houzz."
  },
  {
    question: "What's included in your AI SEO service?",
    answer: "Our AI SEO includes comprehensive keyword research (500+ terms), competitor analysis, technical SEO audit, on-page optimization, local SEO with Google Business Profile management, and AEO/GEO optimization to ensure visibility in AI search assistants like ChatGPT. You receive monthly reports tracking rankings, traffic, and leads."
  },
  {
    question: "How long until we see results from SEO?",
    answer: "Paid media generates leads immediately. SEO typically shows meaningful ranking improvements within 3-6 months, with significant traffic and lead growth by month 6-12. We focus on quick wins (local SEO, Google Business Profile) while building long-term organic authority."
  },
  {
    question: "Do you handle both B2B and B2C marketing?",
    answer: "Yes! Many contractors serve both homeowners (B2C) and commercial clients or property managers (B2B). We create targeted campaigns for each audience—residential emergency services on one side, commercial maintenance contracts on the other."
  },
  {
    question: "What makes your approach different from other marketing agencies?",
    answer: "We're specialists in home services marketing, not generalists. We understand seasonal demand, emergency call patterns, and the unique buyer journey for each trade. Our strategies combine traditional marketing with AI-powered tools for SEO, reputation management, and lead qualification."
  }
];

const caseStudies = [
  {
    company: "ComfortFirst HVAC",
    location: "Denver Metro Area",
    industry: "HVAC Services",
    challenge: "A 3-location HVAC company was invisible in local search and wasting ad budget on low-quality leads.",
    timeframe: "6 months",
    metrics: [
      { label: "Organic Traffic", before: "1,200/mo", after: "4,600/mo", improvement: "+287%" },
      { label: "Cost Per Lead", before: "$120", after: "$38", improvement: "-68%" },
      { label: "Monthly Leads", before: "45", after: "156", improvement: "+247%" }
    ],
    quote: "They restructured our entire marketing—website, SEO, and ads. We finally understand what's working and why.",
    quoteName: "Jennifer Walsh",
    quoteRole: "Marketing Director"
  },
  {
    company: "Elite Plumbing Solutions",
    location: "Austin, TX",
    industry: "Emergency Plumbing",
    challenge: "After-hours emergency calls were going to voicemail, and Google Ads budget was being wasted on irrelevant searches.",
    timeframe: "3 months",
    metrics: [
      { label: "Google Ads ROAS", before: "1.8x", after: "5.2x", improvement: "+189%" },
      { label: "LSA Leads/Month", before: "0", after: "67", improvement: "New Channel" },
      { label: "5-Star Reviews", before: "42", after: "134", improvement: "+219%" }
    ],
    quote: "The platform-specific strategy changed everything. LSA alone brings in 30% of our new business now.",
    quoteName: "Marcus Thompson",
    quoteRole: "Owner"
  }
];

const homeServicesContactCTA = createIndustryContactCTA("Home Services", "Get your free marketing strategy assessment");

const homeServicesBlogPosts = [
  {
    title: "The Complete Marketing Funnel for Home Service Contractors",
    excerpt: "From awareness to retention: how to build a marketing system that generates leads consistently.",
    date: "Jan 15, 2025",
    author: "Mike Thompson",
    readTime: "10 min read",
    category: "Strategy"
  },
  {
    title: "Google LSA vs PPC: Which Is Better for Your Trade?",
    excerpt: "A data-driven comparison to help you allocate your advertising budget effectively.",
    date: "Jan 10, 2025",
    author: "Sarah Chen",
    readTime: "7 min read",
    category: "Paid Media"
  },
  {
    title: "AI SEO for Contractors: Getting Found by ChatGPT & Google",
    excerpt: "How AI search is changing the game and what you need to do to stay visible.",
    date: "Jan 5, 2025",
    author: "David Martinez",
    readTime: "8 min read",
    category: "AI & SEO"
  }
];

const HomeServices = () => {
  return (
    <>
      <Head>
        <title>Home Services Marketing & SEO Guide | GrowSmallBiz</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta 
          name="description" 
          content="Complete marketing guide for home service contractors. SEO, paid media, reputation management strategies for HVAC, plumbers, electricians, roofers & remodelers." 
        />
        <meta name="keywords" content="HVAC marketing, plumber SEO, electrician marketing, roofing SEO, contractor marketing, home services digital marketing, paid media contractors" />
        <link rel="canonical" href="https://growsmallbiz.com/industries/home-services" />
      </Head>

      <ServiceJsonLd
        serviceName="Home Services Marketing"
        serviceType="Digital Marketing for Home Service Contractors"
        description="Complete marketing strategy for HVAC, plumbing, electrical, roofing, and remodeling contractors."
        url="/industries/home-services"
        breadcrumbs={[
          { name: "Industries", url: "/industries/home-services" },
        ]}
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Home service contractor at work" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              {/* Industry Icons */}
              <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up">
                {[
                  { icon: Flame, label: "HVAC" },
                  { icon: Droplets, label: "Plumbing" },
                  { icon: Plug, label: "Electrical" },
                  { icon: Home, label: "Roofing" },
                  { icon: Hammer, label: "Remodeling" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 animate-fade-up">
                The Complete Marketing Guide for Contractors
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
                From <span className="text-transparent bg-clip-text bg-gradient-primary">Awareness</span> to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">Retention</span>:
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">Strategy + Execution for Home Services</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                A comprehensive marketing playbook covering SEO, paid media, reputation management, and automation. 
                Built specifically for HVAC, plumbing, electrical, roofing, and remodeling businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/free-assessment" className="inline-flex items-center gap-2">
                    Get Your Free Strategy Assessment
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#marketing-funnel">
                    Explore the Framework
                  </a>
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="mt-12 flex flex-wrap items-center gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center border-2 border-background">
                        <Wrench className="w-5 h-5 text-primary-foreground" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">500+ Contractors Trust Us</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-muted-foreground">4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">$2.4M+ Client Revenue Generated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Home Service Contractors"
              title="Industries We"
              titleHighlight="Serve"
              description="GrowSmallBiz has been passionately collaborating with home service contractors and independent tradespeople. We understand the complexities of running your business and deliver tailored marketing solutions for every trade."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {whoWeHelp.map((business, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border card-hover animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={business.image}
                      alt={`${business.name} marketing services`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {business.name}
                    </h3>
                    <p className="text-sm text-primary whitespace-pre-line">
                      {business.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  View All Trades We Partner With
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Marketing Funnel Section */}
        <section id="marketing-funnel" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Complete Framework"
              title="Marketing Funnel for"
              titleHighlight="Home Service Contractors"
              description="From first discovery to loyal customer—every stage of the journey requires different strategies and platforms."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingFunnel.map((item, index) => (
                <GlowCard 
                  key={index}
                  className={`p-6 relative overflow-hidden animate-fade-up ${item.borderColor}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Stage Number */}
                  <div className="absolute top-4 right-4 text-6xl font-display font-bold text-muted/10">
                    {index + 1}
                  </div>
                  
                  <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold ${item.color} mb-2`}>{item.stage}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  
                  <div className="space-y-3">
                    {item.strategies.map((strategy, sIndex) => (
                      <div key={sIndex} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${item.color} mt-0.5 flex-shrink-0`} />
                        <div>
                          <span className="font-medium text-foreground text-sm">{strategy.name}</span>
                          <p className="text-xs text-muted-foreground">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Recommendations by Trade - Funnel Style Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Platform Strategy by Trade"
              title="Marketing Funnels for"
              titleHighlight="Your Trade"
              description="Every trade has different customer behavior. Here's a tailored marketing funnel and platform strategy for each."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformRecommendations.map((trade, index) => {
                const colors = colorConfig[trade.color];
                return (
                  <GlowCard 
                    key={index}
                    className={`group relative overflow-hidden bg-gradient-to-b from-card to-background animate-fade-up ${colors.border}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Card Content */}
                    <div className="p-6">
                      {/* Trade Header with Icon */}
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className={`w-12 h-12 rounded-full ${colors.bgLight} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                          <trade.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{trade.trade}</h3>
                        <p className="text-xs text-muted-foreground mt-1">Marketing Funnel</p>
                      </div>

                      {/* Funnel Visualization */}
                      <div className="space-y-2 mb-6">
                        {trade.funnel.map((step, stepIndex) => {
                          const widthClasses = [
                            "w-full",
                            "w-[92%]",
                            "w-[84%]",
                            "w-[76%]",
                            "w-[68%]"
                          ];
                          return (
                            <div key={stepIndex} className="flex flex-col items-center">
                              <div 
                                className={`${widthClasses[stepIndex]} ${colors.steps[stepIndex]} py-2.5 px-4 rounded-lg text-center text-sm font-medium text-white transition-all duration-300 group-hover:scale-[1.02]`}
                              >
                                {step}
                              </div>
                              {stepIndex < trade.funnel.length - 1 && (
                                <div className="text-muted-foreground text-xs my-1">↓</div>
                              )}
                            </div>
                          );
                        })}
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
                            {trade.topPlatforms.map((platform, pIndex) => (
                              <span key={pIndex} className={`text-xs px-2 py-1 ${colors.bgLight} ${colors.text} rounded-full`}>
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Strategy */}
                        <p className="text-xs text-muted-foreground text-center leading-relaxed">
                          {trade.strategy}
                        </p>
                        
                        {/* Seasonality */}
                        <p className={`text-xs ${colors.text} text-center mt-2 italic`}>
                          {trade.seasonality}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Essential Stack - Tabbed Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Essential Stack"
              title="Complete Marketing Toolkit for"
              titleHighlight="Home Service Contractors"
              description="Everything you need to attract, convert, and retain customers—all working together as one integrated system."
            />

            <Tabs defaultValue="website-seo" className="w-full">
              {/* Tab List - Scrollable on mobile with colorful icons */}
              <div className="relative mb-8">
                <TabsList className="w-full h-auto flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 bg-card/80 backdrop-blur-sm p-3 rounded-2xl border border-border justify-start lg:justify-center">
                  {essentialStackTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap border
                        ${tab.colorClasses.border} ${tab.colorClasses.text}
                        hover:${tab.colorClasses.bgLight}
                        data-[state=active]:${tab.colorClasses.bg} data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-transparent`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${tab.colorClasses.bgLight}`}>
                        <tab.icon className={`w-4 h-4 ${tab.colorClasses.text}`} />
                      </div>
                      <span className={`hidden sm:inline`}>{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                {/* Scroll hint gradients */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none lg:hidden" />
              </div>

              {/* Tab Content */}
              {essentialStackTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0 animate-fade-up">
                  <div className={`bg-card rounded-2xl border-2 ${tab.colorClasses.border} overflow-hidden hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300`}>
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 lg:p-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-xl ${tab.colorClasses.bg} flex items-center justify-center shadow-lg`}>
                            <tab.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <p className={`text-xs font-semibold ${tab.colorClasses.text} uppercase tracking-wider`}>{tab.subtitle}</p>
                            <h3 className="text-xl lg:text-2xl font-bold text-foreground">{tab.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">{tab.description}</p>
                        
                        <ul className="space-y-3 mb-8">
                          {tab.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-3 text-sm text-foreground">
                              <CheckCircle2 className={`w-5 h-5 ${tab.colorClasses.text} flex-shrink-0 mt-0.5`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link 
                          to={tab.href}
                          className={`inline-flex items-center gap-2 px-6 py-3 ${tab.colorClasses.bg} text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Stats/Visual Side with Icons Grid */}
                      <div className={`bg-gradient-to-br ${tab.colorClasses.bgGradient} p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l ${tab.colorClasses.border}`}>
                        {/* Visual Icons Grid */}
                        <div className="grid grid-cols-4 gap-3 mb-8">
                          {tab.visualIcons.map((VisualIcon, vIndex) => (
                            <div 
                              key={vIndex} 
                              className={`aspect-square rounded-xl ${tab.colorClasses.bgLight} border ${tab.colorClasses.border} flex items-center justify-center transition-all hover:scale-105`}
                            >
                              <VisualIcon className={`w-6 h-6 ${tab.colorClasses.text}`} />
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {tab.stats.map((stat, sIndex) => (
                            <div key={sIndex} className={`text-center p-5 bg-card/90 backdrop-blur-sm rounded-xl border ${tab.colorClasses.border}`}>
                              <div className={`text-3xl lg:text-4xl font-display font-bold ${tab.colorClasses.statText} mb-1`}>{stat.value}</div>
                              <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Pro Tip */}
                        <div className="relative">
                          <div className={`absolute inset-0 ${tab.colorClasses.bg} opacity-10 rounded-2xl blur-xl`} />
                          <div className={`relative p-5 bg-card/95 backdrop-blur-sm rounded-xl border ${tab.colorClasses.border}`}>
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-8 h-8 rounded-lg ${tab.colorClasses.bg} flex items-center justify-center`}>
                                <Zap className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-foreground">Pro Tip</div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {tab.id === "website-seo" && "60%+ of home service searches happen on mobile. Your website must load in under 3 seconds to keep those leads."}
                              {tab.id === "paid-search" && "Google LSA leads cost 40% less than traditional PPC and come with the Google Guarantee badge for trust."}
                              {tab.id === "retargeting" && "Website visitors who see retargeting ads are 70% more likely to convert than first-time visitors."}
                              {tab.id === "directories" && "Consistent NAP (Name, Address, Phone) across all directories is the #1 factor for local pack rankings."}
                              {tab.id === "repeat-referral" && "It costs 5x more to acquire a new customer than to retain an existing one. Invest in loyalty."}
                              {tab.id === "pay-per-lead" && "Respond to LSA leads within 5 minutes and your booking rate increases by 400%."}
                              {tab.id === "social-media" && "Before/after project photos get 3x more engagement than any other content type for contractors."}
                              {tab.id === "crm" && "Businesses that follow up within 5 minutes are 100x more likely to connect with leads."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* AI SEO Strategy Deep Dive */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="AI SEO Deep Dive"
              title="Our 3-Phase SEO"
              titleHighlight="Process"
              description="Comprehensive SEO strategy covering keyword research, competitor analysis, technical optimization, and AI search visibility."
            />

            {/* SEO Dashboard Metrics Image */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Your Holistic AI SEO Command Center
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Monitor your complete digital presence in real-time—track domain authority growth, measure visibility across AI platforms like ChatGPT & Gemini, and optimize all six SEO pillars from one powerful dashboard.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer">
                    {/* Gradient glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <img 
                      src={seoDashboardMetrics} 
                      alt="SEO Dashboard showing domain metrics, LLM visibility across AI platforms, and holistic SEO pillars" 
                      className="relative w-full rounded-2xl border border-primary/30 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2">
                        <Search className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Click to expand</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-background/95 backdrop-blur-xl border-primary/30">
                  <img 
                    src={seoDashboardMetrics} 
                    alt="SEO Dashboard showing domain metrics, LLM visibility across AI platforms, and holistic SEO pillars" 
                    className="w-full h-auto rounded-xl"
                  />
                </DialogContent>
              </Dialog>
            </div>

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
                  Homeowners are asking AI who to call first—and it's not always the business ranking #1 on Google. 
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
                    <Link to="/free-assessment" className="inline-flex items-center gap-2">
                      Free AI + Google SEO Audit
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    If you want more booked calls, you need to rank on Google <strong className="text-foreground">and</strong> show up in AI search.
                  </span>
                </div>
              </div>
            </div>

            {/* LLM Visibility Tracking Section */}
            <div className="mb-16 p-8 bg-card rounded-2xl border-2 border-border hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">LLM Visibility & Sentiment Tracking</h4>
                  <p className="text-sm text-muted-foreground">We monitor your brand across all major AI platforms</p>
                </div>
              </div>
              
              {/* LLM Platforms Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Platform</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Visibility
                        <span className="ml-1 inline-block w-4 h-4 rounded-full bg-muted text-muted-foreground text-[10px] leading-4 text-center cursor-help" title="How often your brand appears in AI responses">ⓘ</span>
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Sentiment
                        <span className="ml-1 inline-block w-4 h-4 rounded-full bg-muted text-muted-foreground text-[10px] leading-4 text-center cursor-help" title="How positively AI platforms describe your brand">ⓘ</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {llmPlatforms.map((platform, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                              <platform.IconComponent size={20} />
                            </div>
                            <span className="font-medium text-foreground">{platform.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-primary font-medium underline cursor-pointer">{platform.visibility}</span>
                            <span className="text-muted-foreground">{platform.visibilityPct}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${platform.sentiment >= 75 ? 'text-green-500' : platform.sentiment >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                              {platform.sentiment}%
                            </span>
                            <span className="text-green-500 text-xl">😊</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Key Insight */}
              <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Why This Matters for Your Business</p>
                    <p className="text-sm text-muted-foreground">
                      The next homeowner may never scroll Google. AI may decide who gets the call first. 
                      We track how each AI platform perceives your brand and ensure you're mentioned when customers ask "Who's the best HVAC company near me?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Flow Diagram */}
            <div className="relative max-w-6xl mx-auto">
              {/* Connecting Flow Line - Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0 rounded-full" style={{ top: '120px' }} />
              
              {/* Phase Cards */}
              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {aiSeoStrategy.phases.map((phase, index) => {
                  const phaseColors = [
                    { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30", gradient: "from-blue-500/20 to-blue-600/5" },
                    { bg: "bg-purple-500", bgLight: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30", gradient: "from-purple-500/20 to-purple-600/5" },
                    { bg: "bg-green-500", bgLight: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30", gradient: "from-green-500/20 to-green-600/5" }
                  ];
                  const colors = phaseColors[index];
                  
                  return (
                    <div 
                      key={index}
                      className="group relative animate-fade-up"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Connector Node */}
                      <div className={`hidden lg:flex absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 ${colors.bg} rounded-full items-center justify-center shadow-lg z-20`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Arrow Between Phases - Desktop */}
                      {index < 2 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-30" style={{ top: '120px' }}>
                          <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center shadow-md`}>
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}
                      
                      {/* Card */}
                      <div className={`mt-16 lg:mt-20 p-6 bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]`}>
                        {/* Mobile Icon */}
                        <div className={`lg:hidden w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                          <phase.icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Phase Label */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 text-xs font-bold ${colors.bg} text-white rounded-full`}>
                            Phase {index + 1}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className={`text-xl font-bold ${colors.text} mb-4`}>{phase.phase}</h3>
                        
                        {/* Items with flow styling */}
                        <div className="space-y-3">
                          {phase.items.map((item, iIndex) => (
                            <div 
                              key={iIndex}
                              className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/50 hover:border-border transition-colors"
                            >
                              <div className={`w-6 h-6 rounded-full ${colors.bgLight} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <CheckCircle2 className={`w-4 h-4 ${colors.text}`} />
                              </div>
                              <span className="text-sm text-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Phase Output */}
                        <div className={`mt-4 pt-4 border-t ${colors.border}`}>
                          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                            <Zap className={`w-4 h-4 ${colors.text}`} />
                            <span>
                              {index === 0 && "Delivers: Strategic SEO Roadmap"}
                              {index === 1 && "Delivers: Optimized Digital Presence"}
                              {index === 2 && "Delivers: Measurable Growth Results"}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Arrow */}
                      {index < 2 && (
                        <div className="lg:hidden flex justify-center my-4">
                          <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center animate-bounce`}>
                            <ArrowRight className="w-5 h-5 text-white rotate-90" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Summary Flow - Compact Visual */}
              <div className="mt-16 p-6 bg-card rounded-2xl border border-border">
                <h4 className="text-lg font-bold text-center mb-6 text-foreground">The Continuous SEO Cycle</h4>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
                    <FileSearch className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">Research</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30">
                    <Target className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-purple-500">Optimize</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30">
                    <LineChart className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-500">Measure</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Refine & Repeat</span>
                  </div>
                </div>
              </div>

              {/* SEO Components Grid */}
              <div className="mt-12">
                <h4 className="text-xl font-bold text-center mb-8 text-foreground">Key SEO Components</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {seoComponents.map((component, index) => {
                    const colorStyles = {
                      blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
                      purple: { bg: "bg-purple-500", bgLight: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30" },
                      amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
                      green: { bg: "bg-green-500", bgLight: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30" }
                    };
                    const colors = colorStyles[component.color as keyof typeof colorStyles];
                    
                    return (
                      <div 
                        key={component.id}
                        className={`group p-5 bg-gradient-to-br from-card to-${component.color}-500/5 rounded-xl border ${colors.border} hover:shadow-lg transition-all duration-300 animate-fade-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                          <component.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <h5 className={`text-lg font-bold ${colors.text} mb-2`}>{component.label}</h5>
                        <p className="text-sm text-muted-foreground mb-4">{component.description}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {component.examples.slice(0, 3).map((example, eIndex) => (
                            <span 
                              key={eIndex}
                              className={`px-2 py-1 text-xs ${colors.bgLight} ${colors.text} rounded-md`}
                            >
                              {example}
                            </span>
                          ))}
                          {component.examples.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                              +{component.examples.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Local SEO Heatmap */}
              <div className="mt-12 p-8 bg-gradient-to-br from-green-500/10 via-card to-blue-500/10 rounded-2xl border border-border">
                <h4 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                  Interactive Local SEO Heatmap
                </h4>
                <p className="text-sm text-muted-foreground mb-6">Hover over any grid cell to see ranking data and competitor positions</p>
                
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Interactive Heatmap Grid */}
                  <div className="relative">
                    <div className="grid grid-cols-5 gap-2">
                      {heatmapData.map((cell) => {
                        const getRankColor = (rank: number) => {
                          if (rank <= 3) return "bg-green-500 hover:bg-green-400";
                          if (rank <= 10) return "bg-yellow-400 hover:bg-yellow-300";
                          return "bg-red-400 hover:bg-red-300";
                        };
                        
                        return (
                          <div
                            key={cell.position}
                            className={`group relative aspect-square ${getRankColor(cell.rank)} rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:z-10 hover:shadow-lg flex items-center justify-center`}
                          >
                            <span className="text-xs font-bold text-white/90">#{cell.rank}</span>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                              <div className="bg-card border border-border rounded-lg shadow-xl p-3 min-w-[200px]">
                                <div className="text-xs font-semibold text-foreground mb-2">{cell.location}</div>
                                <div className="space-y-1.5">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Keyword:</span>
                                    <span className="text-foreground font-medium">{cell.keyword}</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Your Rank:</span>
                                    <span className={`font-bold ${cell.you <= 3 ? 'text-green-500' : cell.you <= 10 ? 'text-yellow-500' : 'text-red-500'}`}>
                                      #{cell.you}
                                    </span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Top Competitor:</span>
                                    <span className="text-foreground">#{cell.competitor}</span>
                                  </div>
                                  <div className="pt-1 border-t border-border mt-1">
                                    <span className={`text-xs font-medium ${cell.you < cell.competitor ? 'text-green-500' : 'text-amber-500'}`}>
                                      {cell.you < cell.competitor ? '✓ Outranking competitor' : '↑ Opportunity to improve'}
                                    </span>
                                  </div>
                                </div>
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-card" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Legend */}
                    <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded" />
                        <span className="text-muted-foreground">Top 3</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded" />
                        <span className="text-muted-foreground">Rank 4-10</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded" />
                        <span className="text-muted-foreground">Rank 11+</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Heatmap Stats & Benefits */}
                  <div className="space-y-6">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30 text-center">
                        <div className="text-2xl font-bold text-green-500">13</div>
                        <div className="text-xs text-muted-foreground">Top 3 Rankings</div>
                      </div>
                      <div className="p-3 bg-yellow-400/10 rounded-lg border border-yellow-400/30 text-center">
                        <div className="text-2xl font-bold text-yellow-500">8</div>
                        <div className="text-xs text-muted-foreground">Page 1 (4-10)</div>
                      </div>
                      <div className="p-3 bg-red-400/10 rounded-lg border border-red-400/30 text-center">
                        <div className="text-2xl font-bold text-red-400">4</div>
                        <div className="text-xs text-muted-foreground">Needs Work</div>
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div>
                      <h5 className="text-sm font-bold text-foreground mb-3">What You Get With Heatmap Tracking</h5>
                      <ul className="space-y-2">
                        {[
                          "Real-time ranking visibility across your entire service area",
                          "Competitor position tracking on every keyword",
                          "Identify high-opportunity zones for quick wins",
                          "Monthly progress reports with visual comparisons",
                          "Strategic recommendations based on data patterns"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Citation Management Section */}
              <div className="mt-12 p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-blue-500" />
                      Citation Management Dashboard
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">100+ directory submissions for consistent NAP (Name, Address, Phone)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
                      {citationDirectories.filter(d => d.status === 'submitted').length} Submitted
                    </div>
                    <div className="px-3 py-1.5 bg-yellow-400/10 text-yellow-500 rounded-full text-sm font-medium">
                      {citationDirectories.filter(d => d.status === 'pending').length} Pending
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Citation Completion Progress</span>
                    <span>{Math.round((citationDirectories.filter(d => d.status === 'submitted').length / citationDirectories.length) * 100)}% Complete</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${(citationDirectories.filter(d => d.status === 'submitted').length / citationDirectories.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Directory Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {['Essential', 'Home Services', 'General', 'Local', 'Trust', 'B2B'].map((category) => {
                    const categoryDirs = citationDirectories.filter(d => d.category === category);
                    const submittedCount = categoryDirs.filter(d => d.status === 'submitted').length;
                    return (
                      <div key={category} className="p-4 bg-secondary/50 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{category}</span>
                          <span className="text-xs text-muted-foreground">{submittedCount}/{categoryDirs.length}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${(submittedCount / categoryDirs.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Directory List */}
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="bg-muted/50 px-4 py-3 border-b border-border">
                    <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <div className="col-span-5">Directory</div>
                      <div className="col-span-3">Category</div>
                      <div className="col-span-2 text-center">DA</div>
                      <div className="col-span-2 text-center">Status</div>
                    </div>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {citationDirectories.map((dir, index) => (
                      <div 
                        key={dir.name}
                        className={`grid grid-cols-12 gap-4 px-4 py-3 items-center text-sm ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'} hover:bg-primary/5 transition-colors`}
                      >
                        <div className="col-span-5 font-medium text-foreground">{dir.name}</div>
                        <div className="col-span-3">
                          <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">{dir.category}</span>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className={`font-semibold ${dir.da >= 80 ? 'text-green-500' : dir.da >= 60 ? 'text-yellow-500' : 'text-muted-foreground'}`}>
                            {dir.da}
                          </span>
                        </div>
                        <div className="col-span-2 text-center">
                          {dir.status === 'submitted' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">
                              <CheckCircle2 className="w-3 h-3" />
                              Live
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400/10 text-yellow-500 rounded-full text-xs">
                              <RefreshCw className="w-3 h-3" />
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Citation Benefits */}
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                    <Globe className="w-8 h-8 text-blue-500 mb-2" />
                    <h5 className="font-semibold text-foreground mb-1">NAP Consistency</h5>
                    <p className="text-xs text-muted-foreground">Identical business info across all directories boosts local rankings</p>
                  </div>
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                    <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
                    <h5 className="font-semibold text-foreground mb-1">Domain Authority</h5>
                    <p className="text-xs text-muted-foreground">High-DA directories pass link equity to boost your rankings</p>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                    <MapPin className="w-8 h-8 text-green-500 mb-2" />
                    <h5 className="font-semibold text-foreground mb-1">Local Visibility</h5>
                    <p className="text-xs text-muted-foreground">More citation sources = more places customers can find you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paid Media Strategy */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Paid Media Strategy"
              title="Advertising Platforms for"
              titleHighlight="Immediate Results"
              description="Strategic paid advertising across Google, Meta, and local platforms to generate leads from day one."
            />

            <div className="grid md:grid-cols-2 gap-6">
              {paidMediaStrategy.platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <platform.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{platform.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{platform.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary uppercase">Best For:</span>
                        <span className="text-xs text-muted-foreground">{platform.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ad Creative Showcase */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Real Ad Creatives & <span className="text-primary">Campaign Examples</span>
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Social Media Ads */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Social Media Ads</h4>
                    <span className="text-xs text-muted-foreground ml-2">Facebook • Instagram • TikTok</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                      <img 
                        src="/src/assets/ad-creative-meta.png" 
                        alt="Facebook and Instagram HVAC ad creative" 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                            <Facebook className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-white font-medium">Meta Ads</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                      <img 
                        src="/src/assets/ad-creative-tiktok.png" 
                        alt="TikTok HVAC ad creative" 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-black flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                          </div>
                          <span className="text-xs text-white font-medium">TikTok Ads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Search Ads */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Search & Local Ads</h4>
                    <span className="text-xs text-muted-foreground ml-2">Google • Bing • LSA</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                      <img 
                        src="/src/assets/ad-screenshot-google-ppc.png" 
                        alt="Google PPC search ads screenshot" 
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          <span className="text-xs font-semibold text-gray-800">Google PPC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row - LSA and Bing */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <img 
                    src="/src/assets/ad-screenshot-google-lsa.png" 
                    alt="Google Local Services Ads screenshot" 
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">Google LSA</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <img 
                    src="/src/assets/ad-screenshot-bing.png" 
                    alt="Microsoft Bing Ads screenshot" 
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3v18l4-2.5v-6l6 3.5 4-2v-5l-10-6v8l-4-2z" fill="#00BCF2"/>
                      </svg>
                      <span className="text-xs font-semibold text-gray-800">Microsoft Bing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Benefits Callout */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-2">Multi-Platform Advertising Done Right</h4>
                    <p className="text-sm text-muted-foreground">
                      We create platform-specific ad creatives optimized for each channel — from scroll-stopping social ads to high-converting search campaigns. Every dollar works harder.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-xs text-muted-foreground">Platforms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">4.2x</div>
                      <div className="text-xs text-muted-foreground">Avg ROAS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$23</div>
                      <div className="text-xs text-muted-foreground">Avg CPL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services/paid-media" className="inline-flex items-center gap-2">
                  Learn More About Our Paid Media Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Marketing Automation Network Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="How It All Connects"
              title="Marketing Automation"
              titleHighlight="Network"
              description="See how all your marketing channels work together as an integrated system to capture, nurture, and convert leads."
            />

            {/* Network Diagram */}
            <div className="relative max-w-5xl mx-auto">
              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Landing to New Lead */}
                <line x1="18" y1="35" x2="28" y2="47" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Forms to New Lead */}
                <line x1="18" y1="63" x2="28" y2="50" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* New Lead to Ads */}
                <line x1="32" y1="48" x2="38" y2="52" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Ads to Pipeline */}
                <line x1="45" y1="45" x2="45" y2="18" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Ads to SMS */}
                <line x1="48" y1="48" x2="55" y2="32" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Pipeline to Reputation */}
                <line x1="52" y1="15" x2="68" y2="15" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* SMS to Reputation */}
                <line x1="62" y1="28" x2="68" y2="18" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* SMS to Social */}
                <line x1="62" y1="28" x2="75" y2="32" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Social to Reputation */}
                <line x1="78" y1="28" x2="75" y2="18" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Social to Emails */}
                <line x1="80" y1="38" x2="75" y2="55" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Ads to Emails */}
                <line x1="48" y1="55" x2="65" y2="60" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Emails to Purchase */}
                <line x1="68" y1="65" x2="48" y2="78" stroke="url(#lineGradient)" strokeWidth="0.3" />
                {/* Ads to Purchase */}
                <line x1="42" y1="58" x2="42" y2="75" stroke="url(#lineGradient)" strokeWidth="0.3" />
              </svg>

              {/* Network Grid */}
              <div className="relative aspect-[16/10] min-h-[500px]">
                {automationNodes.map((node, index) => (
                  <div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-up"
                    style={{ 
                      left: `${node.x}%`, 
                      top: `${node.y}%`,
                      animationDelay: `${index * 0.08}s`
                    }}
                  >
                    {/* Connection Node Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/50 rounded-full" />
                    
                    {/* Card */}
                    <div className={`
                      group relative px-4 py-3 bg-card/95 backdrop-blur-sm rounded-xl border border-border
                      hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 
                      transition-all duration-300 hover:scale-105 cursor-pointer
                      ${node.id === 'ads' ? 'border-primary/50 shadow-lg shadow-primary/20 scale-105' : ''}
                      ${node.id === 'purchase' ? 'border-green-500/50 bg-green-500/5' : ''}
                    `}>
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className={`
                          w-8 h-8 rounded-lg flex items-center justify-center
                          ${node.id === 'ads' ? 'bg-primary text-primary-foreground' : ''}
                          ${node.id === 'purchase' ? 'bg-green-500/20 text-green-500' : ''}
                          ${node.id !== 'ads' && node.id !== 'purchase' ? 'bg-primary/10 text-primary group-hover:bg-primary/20' : ''}
                        `}>
                          <node.icon className="w-4 h-4" />
                        </div>
                        <span className={`
                          text-sm font-semibold
                          ${node.id === 'ads' ? 'text-primary' : ''}
                          ${node.id === 'purchase' ? 'text-green-500' : ''}
                          ${node.id !== 'ads' && node.id !== 'purchase' ? 'text-foreground' : ''}
                        `}>
                          {node.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary" />
                  <span className="text-muted-foreground">Central Hub (Ad Campaign)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500/50" />
                  <span className="text-muted-foreground">Conversion (Purchase)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />
                  <span className="text-muted-foreground">Data Flow</span>
                </div>
              </div>
            </div>

            {/* Automation Benefits */}
            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-2xl border border-border text-center animate-fade-up">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Instant Response</h3>
                <p className="text-sm text-muted-foreground">Every lead gets immediate follow-up via SMS, email, or AI call—24/7.</p>
              </div>
              
              <div className="p-6 bg-card rounded-2xl border border-border text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <RefreshCw className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Continuous Nurturing</h3>
                <p className="text-sm text-muted-foreground">Automated sequences keep prospects engaged until they're ready to buy.</p>
              </div>
              
              <div className="p-6 bg-card rounded-2xl border border-border text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Higher Conversion</h3>
                <p className="text-sm text-muted-foreground">Connected systems mean no leads fall through the cracks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Integration Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Command Center"
              title="Central CRM"
              titleHighlight="Dashboard"
              description="All your marketing channels feed into one unified dashboard. Track every lead, every touchpoint, every conversion in real-time."
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* CRM Dashboard Mockup */}
              <div className="relative animate-fade-up">
                <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Lead Command Center</h4>
                          <p className="text-xs text-muted-foreground">Real-time pipeline view</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-500 font-medium">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { label: "Today's Leads", value: "24", color: "text-blue-500", bg: "bg-blue-500/10" },
                        { label: "In Pipeline", value: "156", color: "text-purple-500", bg: "bg-purple-500/10" },
                        { label: "Booked", value: "12", color: "text-green-500", bg: "bg-green-500/10" },
                        { label: "Revenue", value: "$8.2K", color: "text-primary", bg: "bg-primary/10" }
                      ].map((stat, i) => (
                        <div key={i} className={`p-3 rounded-lg ${stat.bg} text-center`}>
                          <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Live Feed */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Live Activity Feed
                      </div>
                      
                      {[
                        { source: "Google Ads", action: "New lead captured", name: "John M.", time: "Just now", icon: Search, color: "bg-blue-500" },
                        { source: "AI Receptionist", action: "Call answered", name: "Sarah K.", time: "2 min ago", icon: Bot, color: "bg-purple-500" },
                        { source: "Web Form", action: "Quote requested", name: "Mike T.", time: "5 min ago", icon: Monitor, color: "bg-cyan-500" },
                        { source: "SMS", action: "Appointment confirmed", name: "Lisa R.", time: "8 min ago", icon: Smartphone, color: "bg-green-500" }
                      ].map((activity, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
                            <activity.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-foreground truncate">{activity.name}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{activity.source}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{activity.action}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              </div>

              {/* Features List */}
              <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold text-foreground">Everything Connected. Nothing Missed.</h3>
                <p className="text-muted-foreground">
                  Your CRM becomes the central nervous system of your business. Every lead, every call, 
                  every appointment flows through one dashboard.
                </p>

                {/* Connection Sources */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Search, label: "Google Ads", desc: "Lead capture" },
                    { icon: Share2, label: "Meta Ads", desc: "Social leads" },
                    { icon: Monitor, label: "Website", desc: "Form submissions" },
                    { icon: Bot, label: "AI Receptionist", desc: "Phone leads" },
                    { icon: MessageCircle, label: "Chat Widget", desc: "Live inquiries" },
                    { icon: Smartphone, label: "SMS", desc: "Text leads" },
                    { icon: Star, label: "Reviews", desc: "Reputation data" },
                    { icon: TrendingUp, label: "Analytics", desc: "Performance" }
                  ].map((source, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <source.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{source.label}</div>
                        <div className="text-xs text-muted-foreground">{source.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/services/crm" className="inline-flex items-center gap-2">
                      Explore CRM Features
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Integration Flow Visual */}
            <div className="mt-16 p-8 bg-card rounded-2xl border border-border max-w-4xl mx-auto">
              <h4 className="text-lg font-bold text-center text-foreground mb-8">How Data Flows Into Your CRM</h4>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Sources */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    {[Search, Share2, Monitor, Bot].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Lead Sources</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-primary" />
                  <ArrowRight className="w-5 h-5 text-primary -mt-2.5" />
                </div>

                {/* CRM */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <BarChart3 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-primary">Central CRM</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-green-500" />
                  <ArrowRight className="w-5 h-5 text-green-500 -mt-2.5" />
                </div>

                {/* Outputs */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    {[MessageCircle, Smartphone, Star, TrendingUp].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-500" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Automated Actions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Real Results for Real Contractors
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                These aren't vanity metrics. These are the numbers that matter to your bottom line.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                    {result.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B vs B2C Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <p className="section-subtitle">B2B + B2C Marketing</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Reach <span className="text-transparent bg-clip-text bg-gradient-primary">Homeowners & Commercial Clients</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Many contractors serve both residential homeowners and commercial clients like property managers, 
                  GCs, and facility managers. We create targeted campaigns for each audience.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">B2C (Homeowners)</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Emergency service campaigns</li>
                      <li>• Local SEO & Google Maps</li>
                      <li>• Review generation</li>
                      <li>• Meta ads targeting homeowners</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                    <BarChart3 className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">B2B (Commercial)</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• LinkedIn outreach campaigns</li>
                      <li>• Email nurture sequences</li>
                      <li>• Case study content</li>
                      <li>• Maintenance contract marketing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 border border-primary/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">New Homeowner Lead</div>
                        <div className="text-sm text-muted-foreground">Google Ads - "AC repair near me"</div>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">Just now</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">LinkedIn Connection</div>
                        <div className="text-sm text-muted-foreground">Property Manager - 42 units</div>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">5 min ago</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Star className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">New 5-Star Review</div>
                        <div className="text-sm text-muted-foreground">"Best plumber in Austin!"</div>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <CaseStudySection 
          caseStudies={caseStudies}
          title="Strategy in Action"
          subtitle="Real results from our contractor clients"
        />

        {/* Testimonials */}
        <TestimonialsSection 
          testimonials={homeServicesTestimonials}
          title="What Contractors Say"
          subtitle="Real feedback from home service professionals"
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about marketing strategy for home service businesses"
          contactCTA={homeServicesContactCTA}
        />

        {/* Blog Section */}
        <BlogSection 
          posts={homeServicesBlogPosts}
          title="Marketing Insights for Contractors"
          subtitle="Strategy guides and tips for home service businesses"
          viewAllLink="/blog"
        />

        {/* CardCTA Section */}
        <CardCTA
          title="Ready to Build Your Marketing System?"
          description="Get a free marketing strategy assessment. We'll analyze your current efforts and show you exactly where to invest for maximum ROI."
        />

        {/* Consultation Form */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </>
  );
};

export default HomeServices;
