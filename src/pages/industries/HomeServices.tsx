import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { SectionHeader } from "@/components/services/SectionHeader";
import { createIndustryContactCTA } from "@/config/contactCTA";
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
  Share2
} from "lucide-react";

import heroImage from "@/assets/industry-hvac-hero.jpg";

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

// Foundation Services
const foundationServices = [
  {
    icon: Monitor,
    title: "Responsive Website",
    subtitle: "Your Digital Foundation",
    isFoundation: true,
    description: "A fast, mobile-first website that converts visitors into leads. This is the hub for all your marketing efforts.",
    features: [
      "Mobile-optimized (60%+ of traffic is mobile)",
      "Fast loading (<3 seconds)",
      "Clear calls-to-action",
      "Service area pages for local SEO",
      "Online booking integration"
    ],
    href: "/services/website-design"
  },
  {
    icon: Search,
    title: "AI-Powered SEO",
    subtitle: "Be Found Everywhere",
    isFoundation: true,
    description: "Comprehensive SEO strategy covering traditional search, local pack, and AI-powered search assistants.",
    features: [
      "Keyword research & competitor analysis",
      "Technical SEO optimization",
      "Local SEO & Google Business Profile",
      "AEO/GEO for ChatGPT visibility",
      "Monthly ranking & traffic reports"
    ],
    href: "/services/ai-seo-hub"
  },
  {
    icon: Megaphone,
    title: "Paid Media",
    subtitle: "Immediate Visibility",
    isFoundation: true,
    description: "Strategic paid advertising across Google, Meta, and local platforms to generate leads immediately.",
    features: [
      "Google PPC (Search & Display)",
      "Google Local Service Ads (LSA)",
      "Meta Ads (Facebook & Instagram)",
      "TikTok for brand awareness",
      "Retargeting campaigns"
    ],
    href: "/services/paid-media"
  },
  {
    icon: Star,
    title: "Reputation Management",
    subtitle: "Build Trust at Scale",
    isFoundation: true,
    description: "Automated review generation and response management to build a 5-star reputation.",
    features: [
      "Automated review requests",
      "Multi-platform monitoring",
      "AI-assisted review responses",
      "Negative review alerts",
      "Competitor review tracking"
    ],
    href: "/services/reputation-management"
  }
];

// Optional Enhancement
const enhancementService = {
  icon: Bot,
  title: "AI Receptionist",
  subtitle: "Never Miss a Lead",
  description: "24/7 AI-powered call answering that books appointments, qualifies leads, and handles emergencies—even when you're on a job.",
  benefits: [
    "Answer calls 24/7/365",
    "Book appointments automatically",
    "Handle emergency call escalation",
    "Qualify leads before handoff",
    "Integrate with your CRM"
  ],
  href: "/services/ai-receptionist"
};

// AI SEO Details
const aiSeoStrategy = {
  title: "AI SEO Strategy",
  description: "Our comprehensive AI SEO approach ensures you're visible across all search platforms—traditional and AI-powered.",
  phases: [
    {
      phase: "Discovery & Analysis",
      icon: FileSearch,
      items: [
        "Deep keyword research (500+ terms per trade)",
        "Competitor gap analysis",
        "Current ranking audit",
        "Technical SEO assessment",
        "Local citation audit"
      ]
    },
    {
      phase: "Strategy & Implementation",
      icon: Target,
      items: [
        "On-page optimization",
        "Schema markup for rich snippets",
        "Google Business Profile optimization",
        "AEO/GEO content strategy",
        "Local landing pages by service area"
      ]
    },
    {
      phase: "Tracking & Optimization",
      icon: LineChart,
      items: [
        "Weekly ranking reports",
        "Organic traffic monitoring",
        "Lead attribution tracking",
        "Monthly strategy calls",
        "Quarterly content updates"
      ]
    }
  ]
};

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
      name: "Meta (Facebook & Instagram)",
      icon: Share2,
      description: "Visual ads targeting homeowners in your service area by demographics and interests.",
      bestFor: "Remodeling, HVAC maintenance plans, brand awareness"
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
      <Helmet>
        <title>Home Services Marketing Guide | HVAC, Plumbing, Electrical, Roofing Marketing Strategy</title>
        <meta 
          name="description" 
          content="Complete marketing guide for home service contractors. SEO, paid media, reputation management strategies for HVAC, plumbers, electricians, roofers & remodelers." 
        />
        <meta name="keywords" content="HVAC marketing, plumber SEO, electrician marketing, roofing SEO, contractor marketing, home services digital marketing, paid media contractors" />
        <link rel="canonical" href="https://growsmallbiz.com/industries/home-services" />
      </Helmet>

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

        {/* Marketing Funnel Section */}
        <section id="marketing-funnel" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Complete Framework"
              title="Marketing Funnel for"
              titleHighlight="Home Service Contractors"
              description="From first discovery to loyal customer—every stage of the journey requires different strategies and platforms."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingFunnel.map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 bg-card rounded-2xl border ${item.borderColor} hover:shadow-xl transition-all duration-300 animate-fade-up relative overflow-hidden`}
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
                </div>
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
                  <div 
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-b from-card to-background hover:border-opacity-60 transition-all duration-500 animate-fade-up`}
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Foundation Services */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Essential Stack"
              title="Core Services Every Contractor"
              titleHighlight="Needs"
              description="These four pillars form the foundation of any successful home service marketing strategy."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {foundationServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href}
                  className="group p-6 bg-card rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{service.subtitle}</p>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Optional Enhancement - AI Receptionist */}
            <div className="p-8 bg-gradient-to-br from-card to-secondary/50 rounded-2xl border border-border animate-fade-up">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold bg-secondary text-muted-foreground rounded-full">
                  Optional Enhancement
                </span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Bot className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{enhancementService.subtitle}</p>
                      <h3 className="text-2xl font-bold text-foreground">{enhancementService.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{enhancementService.description}</p>
                  
                  <Button variant="outline" asChild>
                    <Link to={enhancementService.href} className="inline-flex items-center gap-2">
                      See AI Receptionist in Action
                      <Play className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {enhancementService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI SEO Strategy Deep Dive */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="AI SEO Deep Dive"
              title="How We Approach"
              titleHighlight="Search Optimization"
              description="Comprehensive SEO strategy covering keyword research, competitor analysis, technical optimization, and AI search visibility."
            />

            <div className="grid lg:grid-cols-3 gap-6">
              {aiSeoStrategy.phases.map((phase, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {phase.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

        {/* Person CTA */}
        <PersonCTA
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
