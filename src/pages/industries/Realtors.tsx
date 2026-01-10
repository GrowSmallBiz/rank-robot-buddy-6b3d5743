import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  ArrowRight, 
  CheckCircle2, 
  Home,
  Building,
  MapPin,
  Search,
  Users,
  TrendingUp,
  Bot,
  MessageSquare,
  Calendar,
  Star,
  Phone,
  Mail,
  Clock,
  Target,
  Zap,
  BarChart3,
  Database,
  RefreshCw,
  Heart,
  Shield,
  Calculator,
  Map,
  Bell,
  Share2,
  FileText,
  QrCode,
  Megaphone,
  Globe,
  ExternalLink,
  ChevronRight
} from "lucide-react";

// Import images for service cards
import realtorWebsiteImg from "@/assets/realtor-website.jpg";
import realtorCrmImg from "@/assets/realtor-crm.jpg";
import realtorIdxIntegrationImg from "@/assets/realtor-idx-integration.jpg";
import realtorLeadGenImg from "@/assets/realtor-lead-gen.jpg";
import realtorIdxAddonsImg from "@/assets/realtor-idx-addons.jpg";
import realtorMarketingImg from "@/assets/realtor-marketing.jpg";
import realtorReputationImg from "@/assets/realtor-reputation.jpg";
import realtorSeoImg from "@/assets/realtor-seo.jpg";
import realtorPaidAdsImg from "@/assets/realtor-paid-ads.jpg";
import realtorSocialMediaImg from "@/assets/realtor-social-media.jpg";
import realtorAiReceptionistImg from "@/assets/realtor-ai-receptionist.jpg";
import realtorConversationalAiImg from "@/assets/realtor-conversational-ai.jpg";

// Pain Points for Realtors
const painPoints = [
  {
    icon: Clock,
    title: "Missed Leads & Slow Response",
    description: "Potential buyers and sellers slip away when you can't respond instantly to inquiries."
  },
  {
    icon: Database,
    title: "Scattered Lead Information",
    description: "Contact info, property preferences, and follow-up notes spread across multiple systems."
  },
  {
    icon: Search,
    title: "Poor Online Visibility",
    description: "Struggling to rank for local real estate searches while competitors dominate."
  },
  {
    icon: RefreshCw,
    title: "Manual Follow-up Fatigue",
    description: "Spending hours on repetitive tasks instead of closing deals and showing properties."
  }
];

// Service Sections Data - Organized by category
const websiteServices = [
  {
    id: "website",
    icon: Home,
    title: "Real Estate Website",
    description: "Professional IDX-integrated website that showcases listings and captures leads 24/7.",
    features: [
      "IDX Property Search Integration",
      "MLS Listing Sync",
      "Lead Capture Forms",
      "Mobile-Responsive Design",
      "Agent/Team Profiles",
      "Neighborhood Pages"
    ],
    color: "blue",
    image: realtorWebsiteImg
  },
  {
    id: "lead-gen",
    icon: Target,
    title: "Lead Generation Tools",
    description: "Capture buyer and seller leads with high-converting funnels and landing pages.",
    features: [
      "Property Valuation Pages",
      "Buyer/Seller Lead Funnels",
      "Social Media Ad Integration",
      "Landing Page Builder",
      "QR Code Property Flyers",
      "Open House Sign-in Forms"
    ],
    color: "green",
    image: realtorLeadGenImg
  },
  {
    id: "idx-addons",
    icon: Calculator,
    title: "IDX Add-ons & Enhancements",
    description: "Powerful tools to enhance your property search and keep visitors engaged.",
    features: [
      "Mortgage Calculator Widget",
      "School District Maps",
      "Sold Data Display",
      "Market Statistics",
      "Saved Search Alerts",
      "Zestimate Lookup"
    ],
    color: "amber",
    image: realtorIdxAddonsImg
  }
];

const crmServices = [
  {
    id: "crm",
    icon: Database,
    title: "Realtor AI Growth System",
    description: "All-in-one CRM with automated follow-ups, pipeline management, and AI conversations.",
    features: [
      "Smart Lead Routing",
      "Automated Follow-ups (SMS, Email, Voicemail)",
      "Pipeline Management",
      "Appointment Scheduling",
      "AI-Powered Conversations",
      "Missed Call Text-Back"
    ],
    color: "violet",
    image: realtorCrmImg
  },
  {
    id: "idx-integration",
    icon: RefreshCw,
    title: "IDX + CRM Integration",
    description: "Seamless data flow from property searches directly into your CRM for intelligent follow-up.",
    features: [
      "Real-time Lead Sync",
      "Saved Search Tracking",
      "Property Activity Alerts",
      "Custom Field Mapping",
      "Unified Dashboard",
      "Automated Workflow Triggers"
    ],
    color: "cyan",
    image: realtorIdxIntegrationImg
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Set-and-forget campaigns that nurture leads and keep you top-of-mind.",
    features: [
      "Drip Email Campaigns",
      "Birthday/Anniversary Reminders",
      "Market Update Newsletters",
      "Listing Alert Notifications",
      "Review Request Automation",
      "Social Media Scheduling"
    ],
    color: "pink",
    image: realtorMarketingImg
  },
  {
    id: "reputation",
    icon: Star,
    title: "Reputation & Reviews",
    description: "Build a 5-star online reputation that attracts referrals and builds trust.",
    features: [
      "Google Review Management",
      "Testimonial Collection",
      "Review Response Automation",
      "Rating Widgets for Website"
    ],
    color: "emerald",
    image: realtorReputationImg
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call again. AI answers, qualifies leads, and books appointments 24/7.",
    features: [
      "24/7 Call Answering",
      "Lead Qualification",
      "Appointment Scheduling",
      "Call Transcription & Summaries",
      "CRM Integration",
      "Missed Call Text-Back"
    ],
    color: "violet",
    image: realtorAiReceptionistImg
  },
  {
    id: "conversational-ai",
    icon: Bot,
    title: "Conversational AI",
    description: "Intelligent chatbots that engage visitors, answer property questions, and capture leads.",
    features: [
      "Website Chat Widget",
      "Property Q&A Automation",
      "Lead Capture & Routing",
      "Multi-language Support",
      "SMS & Messenger Integration",
      "Handoff to Human Agent"
    ],
    color: "cyan",
    image: realtorConversationalAiImg
  }
];

const visibilityServices = [
  {
    id: "seo",
    icon: Search,
    title: "AI SEO Optimization",
    description: "Dominate local search results with AI-powered SEO strategies tailored for real estate.",
    features: [
      "Local Keyword Optimization",
      "Google Business Profile Management",
      "Content Strategy & Blog Posts",
      "Backlink Building",
      "Technical SEO Audits",
      "Competitor Analysis"
    ],
    color: "teal",
    image: realtorSeoImg
  },
  {
    id: "paid-ads",
    icon: BarChart3,
    title: "Paid Ads Management",
    description: "Targeted Google and Meta ads that drive qualified buyer and seller leads to your listings.",
    features: [
      "Google PPC Campaigns",
      "Meta (Facebook/Instagram) Ads",
      "Retargeting Campaigns",
      "Landing Page A/B Testing",
      "ROI Tracking & Reporting",
      "Budget Optimization"
    ],
    color: "orange",
    image: realtorPaidAdsImg
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Organic Social Media Posts",
    description: "Consistent, engaging content that builds your brand and attracts clients organically.",
    features: [
      "Content Calendar Management",
      "Property Showcase Posts",
      "Market Update Graphics",
      "Community Engagement",
      "Story & Reel Creation",
      "Brand Voice Development"
    ],
    color: "indigo",
    image: realtorSocialMediaImg
  }
];

// Color configurations
const colorConfig: Record<string, { bg: string; bgLight: string; text: string; border: string }> = {
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/30"
  },
  violet: {
    bg: "bg-violet-500",
    bgLight: "bg-violet-500/10",
    text: "text-violet-500",
    border: "border-violet-500/30"
  },
  cyan: {
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/30"
  },
  green: {
    bg: "bg-green-500",
    bgLight: "bg-green-500/10",
    text: "text-green-500",
    border: "border-green-500/30"
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/30"
  },
  pink: {
    bg: "bg-pink-500",
    bgLight: "bg-pink-500/10",
    text: "text-pink-500",
    border: "border-pink-500/30"
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/30"
  },
  teal: {
    bg: "bg-teal-500",
    bgLight: "bg-teal-500/10",
    text: "text-teal-500",
    border: "border-teal-500/30"
  },
  orange: {
    bg: "bg-orange-500",
    bgLight: "bg-orange-500/10",
    text: "text-orange-500",
    border: "border-orange-500/30"
  },
  indigo: {
    bg: "bg-indigo-500",
    bgLight: "bg-indigo-500/10",
    text: "text-indigo-500",
    border: "border-indigo-500/30"
  }
};

// How It Works - Funnel Stages
const funnelStages = [
  {
    stage: "Attract",
    icon: Globe,
    description: "Drive qualified traffic with IDX-powered website and local SEO",
    tactics: ["Property Search Website", "Local SEO & Google Business", "Social Media Ads", "Open House Marketing"]
  },
  {
    stage: "Capture",
    icon: Target,
    description: "Convert visitors into leads with high-value offers",
    tactics: ["Home Valuation Tool", "Buyer/Seller Funnels", "Lead Capture Forms", "QR Code Flyers"]
  },
  {
    stage: "Nurture",
    icon: MessageSquare,
    description: "Automated follow-up keeps you top-of-mind",
    tactics: ["Drip Email Campaigns", "SMS Follow-ups", "Saved Search Alerts", "Market Updates"]
  },
  {
    stage: "Convert",
    icon: Calendar,
    description: "Book appointments and close deals faster",
    tactics: ["AI Appointment Booking", "Pipeline Management", "Contract Automation", "Transaction Coordination"]
  }
];

// Success Stories
const successStories = [
  {
    name: "Conde Real Estate & Mortgage",
    url: "https://conde-realestate.com/",
    type: "Office",
    description: "Full-service real estate and mortgage company"
  },
  {
    name: "Elvin Rivera",
    url: "https://elvinrivera360.com/",
    type: "Agent",
    description: "360° real estate services"
  },
  {
    name: "Tania Gardère MacLeod",
    url: "https://itstheperfectspot.com/",
    type: "Agent",
    description: "Find your perfect spot"
  },
  {
    name: "Salvador Salinas",
    url: "https://salsalinashomes.com/",
    type: "Agent",
    description: "Your trusted home expert"
  },
  {
    name: "Allen Grealish",
    url: "https://allensellsamity.com/",
    type: "Agent",
    description: "Local market specialist"
  },
  {
    name: "Kroetch Property Group",
    url: "https://kroetchpropertygroup.com/",
    type: "Team",
    description: "Professional real estate team"
  }
];

// FAQ Categories with colors
const faqCategories = [
  {
    id: "idx",
    label: "IDX & Website",
    icon: Home,
    color: "blue",
    colorClasses: {
      bg: "bg-blue-500",
      bgLight: "bg-blue-500/10",
      text: "text-blue-500",
      border: "border-blue-500/30",
      activeBg: "data-[state=active]:bg-blue-500",
      activeBorder: "data-[state=active]:border-blue-500"
    },
    faqs: [
      {
        question: "What is IDX and why do I need it?",
        answer: "IDX (Internet Data Exchange) allows you to display MLS listings directly on your website. This keeps visitors on your site longer, captures leads when they search for properties, and establishes you as a local market expert."
      },
      {
        question: "Can I use IDX with my existing website?",
        answer: "Yes! Our IDX integration service connects to any existing website platform. We ensure your IDX pages match your website's branding with the same colors, fonts, header, and footer."
      },
      {
        question: "How long does website setup take?",
        answer: "A new real estate website with full IDX integration is typically ready in 1-2 business days. This includes property search, MLS sync, lead capture forms, and mobile optimization."
      },
      {
        question: "What MLS boards are supported?",
        answer: "We support all major MLS boards across the United States through IDX Broker integration. During setup, we'll connect your specific MLS for seamless listing display."
      }
    ]
  },
  {
    id: "crm",
    label: "CRM & Automation",
    icon: Database,
    color: "violet",
    colorClasses: {
      bg: "bg-violet-500",
      bgLight: "bg-violet-500/10",
      text: "text-violet-500",
      border: "border-violet-500/30",
      activeBg: "data-[state=active]:bg-violet-500",
      activeBorder: "data-[state=active]:border-violet-500"
    },
    faqs: [
      {
        question: "How does the CRM integrate with IDX?",
        answer: "When a visitor saves a search, favorites a property, or submits an inquiry on your IDX website, their information automatically flows into your CRM. You can see their search preferences, viewed properties, and activity history—all in one dashboard."
      },
      {
        question: "What automations are included?",
        answer: "Pre-built workflows include: new lead welcome sequences, saved search notifications, property viewing follow-ups, anniversary/birthday reminders, review requests, and dormant lead re-engagement campaigns."
      },
      {
        question: "Can I customize the automated messages?",
        answer: "Absolutely! All email, SMS, and voicemail templates are fully customizable. You can adjust timing, messaging, and triggers to match your personal brand and communication style."
      },
      {
        question: "Does it work for teams and offices?",
        answer: "Yes! The system supports lead routing to multiple agents, team pipelines, office-wide reporting, and individual agent performance tracking. Each agent can have their own sub-account."
      }
    ]
  },
  {
    id: "leads",
    label: "Lead Generation",
    icon: Target,
    color: "emerald",
    colorClasses: {
      bg: "bg-emerald-500",
      bgLight: "bg-emerald-500/10",
      text: "text-emerald-500",
      border: "border-emerald-500/30",
      activeBg: "data-[state=active]:bg-emerald-500",
      activeBorder: "data-[state=active]:border-emerald-500"
    },
    faqs: [
      {
        question: "How do home valuation pages work?",
        answer: "Visitors enter their property address to get an instant estimate. This captures seller leads who are curious about their home's value. Their info goes directly to your CRM for follow-up."
      },
      {
        question: "What's included in buyer/seller funnels?",
        answer: "High-converting landing pages with lead magnets like 'First-Time Buyer Guide' or 'Home Selling Checklist.' These pages are optimized for Facebook and Google ads to maximize lead capture."
      },
      {
        question: "How do QR code flyers help?",
        answer: "Generate QR codes for each listing that link to detailed property pages. Use them on yard signs, open house materials, and print marketing. Scan tracking shows which properties generate the most interest."
      },
      {
        question: "Can I run Facebook and Google ads?",
        answer: "Yes! The system includes landing page builders optimized for paid advertising. We can also manage your ad campaigns as part of our marketing services."
      }
    ]
  },
  {
    id: "support",
    label: "Support & Setup",
    icon: Shield,
    color: "amber",
    colorClasses: {
      bg: "bg-amber-500",
      bgLight: "bg-amber-500/10",
      text: "text-amber-500",
      border: "border-amber-500/30",
      activeBg: "data-[state=active]:bg-amber-500",
      activeBorder: "data-[state=active]:border-amber-500"
    },
    faqs: [
      {
        question: "What support is included?",
        answer: "Live support for all platform tools, step-by-step setup guides for agents and offices, video tutorials, and access to our knowledge base. Premium plans include priority support and dedicated onboarding."
      },
      {
        question: "Do I need technical skills?",
        answer: "No! The system is designed for busy realtors, not tech experts. We handle the technical setup, and the day-to-day interface is user-friendly with drag-and-drop builders and one-click actions."
      },
      {
        question: "What if I already have a CRM?",
        answer: "We can often integrate with your existing tools or help you migrate data. Most clients find our all-in-one system simplifies their workflow by replacing multiple separate subscriptions."
      },
      {
        question: "Is there a contract or commitment?",
        answer: "We offer flexible monthly plans with no long-term contracts required. You can scale up or down based on your needs, and we're confident you'll see value quickly."
      }
    ]
  }
];

// Testimonials
const testimonials = [
  {
    quote: "The IDX integration with my CRM changed everything. I can see exactly what properties my leads are interested in and follow up at the perfect time.",
    author: "Jennifer M.",
    role: "Broker/Owner",
    company: "Coastal Realty Group",
    rating: 5
  },
  {
    quote: "I used to spend hours on follow-up emails. Now the automation handles it while I focus on showings and closings. My response time went from hours to seconds.",
    author: "Marcus T.",
    role: "Realtor",
    company: "RE/MAX Elite",
    rating: 5
  },
  {
    quote: "The home valuation landing page generates 15-20 seller leads per month. Best investment I've made for my business.",
    author: "Sarah K.",
    role: "Team Lead",
    company: "Premier Properties",
    rating: 5
  }
];

const Realtors = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate Marketing Solutions | GrowSmallBiz</title>
        <meta 
          name="description" 
          content="Grow your real estate business with IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation tools. Built for realtors and brokers." 
        />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-violet-900/20" />
          <div className="hero-glow absolute inset-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">For Real Estate Professionals</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Grow Your Real Estate Business with{" "}
                <span className="text-gradient">AI-Powered Marketing</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
                IDX-integrated websites, automated follow-ups, and intelligent lead nurturing—all in one platform designed for realtors and brokers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Schedule Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#services">
                    Explore Solutions
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { value: "500+", label: "Realtors Served" },
                  { value: "3x", label: "Lead Response Speed" },
                  { value: "47%", label: "More Closings" },
                  { value: "24/7", label: "Lead Capture" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Sound Familiar?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These challenges hold back even the most talented real estate professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((point, i) => (
                <div 
                  key={i} 
                  className="bg-background border border-destructive/30 rounded-2xl p-6 hover:border-destructive/50 transition-all animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Complete Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Everything You Need to{" "}
                <span className="text-gradient">Dominate Your Real Estate Market</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From property search websites to automated nurturing—we've got every stage of your client journey covered
              </p>
            </div>

            {/* Website Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Website</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {websiteServices.map((service, i) => {
                  const colors = colorConfig[service.color];
                  return (
                    <div 
                      key={service.id}
                      className={`bg-card border ${colors.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all animate-fade-up group`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-display font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-5">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-muted-foreground/70 pl-6">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CRM & Marketing Automation Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-violet-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">CRM & Marketing Automation</h3>
              </div>
              <p className="text-muted-foreground mb-8 pl-[52px]">
                <span className="text-violet-500 font-semibold">Buyers & Sellers Funnels</span> — Automated lead nurturing paths designed specifically for buyer and seller journeys, 
                from first inquiry to closing and beyond.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {crmServices.map((service, i) => {
                  const colors = colorConfig[service.color];
                  return (
                    <div 
                      key={service.id}
                      className={`bg-card border ${colors.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all animate-fade-up group`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-display font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-5">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-muted-foreground/70 pl-6">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Online Visibility Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Online Visibility</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibilityServices.map((service, i) => {
                  const colors = colorConfig[service.color];
                  return (
                    <div 
                      key={service.id}
                      className={`bg-card border ${colors.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all animate-fade-up group`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-display font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-5">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-muted-foreground/70 pl-6">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* IDX + CRM Integration Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-card/80 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                  <RefreshCw className="w-4 h-4 text-cyan-500" />
                  <span className="text-cyan-500 text-sm font-medium">Seamless Integration</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  IDX Property Data Flows Directly to Your{" "}
                  <span className="text-cyan-500">CRM</span>
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  When buyers search properties, save favorites, or request showings on your website, 
                  their activity syncs instantly to your CRM. Know exactly what your leads want before you even call them.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Lead info auto-populates in CRM contacts" },
                    { icon: Search, text: "See saved searches and property preferences" },
                    { icon: Bell, text: "Get alerts when leads view or save listings" },
                    { icon: Bot, text: "Trigger automated follow-ups based on activity" },
                    { icon: BarChart3, text: "Track engagement and lead scoring" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-500" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Flow Diagram */}
              <div className="relative">
                <div className="bg-card border border-cyan-500/30 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Data Flow Architecture</h3>
                  </div>
                  
                  {/* Flow Steps */}
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Visitor Searches Properties", desc: "On your IDX website" },
                      { step: "2", title: "Lead Captured", desc: "Registration or inquiry form" },
                      { step: "3", title: "Data Synced to CRM", desc: "Contact + preferences + activity" },
                      { step: "4", title: "Automation Triggered", desc: "Personalized follow-up begins" },
                      { step: "5", title: "Agent Notified", desc: "Hot lead alert with context" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1 bg-background/50 rounded-lg p-3 border border-border">
                          <div className="font-medium text-foreground text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                        {i < 4 && (
                          <ChevronRight className="w-5 h-5 text-cyan-500 hidden lg:block absolute right-4" style={{ transform: 'rotate(90deg)', marginLeft: '-60px' }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Funnel Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Client Journey, <span className="text-gradient">Automated</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From first click to closing day, every touchpoint is optimized for conversion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funnelStages.map((stage, i) => (
                <div 
                  key={i}
                  className="relative bg-card border border-primary/30 rounded-2xl p-6 animate-fade-up hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Connector Line */}
                  {i < funnelStages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}
                  
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <stage.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="text-sm text-primary font-medium mb-2">Stage {i + 1}</div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{stage.stage}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                  
                  <ul className="space-y-2">
                    {stage.tactics.map((tactic, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {tactic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Carousel */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
                <Star className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 text-sm font-medium">Success Stories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Real Estate Professionals{" "}
                <span className="text-emerald-500">Thriving</span> with Our Platform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See live examples of agents and offices using IDX + CRM integration to grow their business
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {successStories.map((story, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <a 
                      href={story.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-card border border-emerald-500/30 rounded-2xl p-6 h-full hover:border-emerald-500/50 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                          {story.type}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                      </div>
                      
                      <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {story.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-emerald-500">
                        <Globe className="w-4 h-4" />
                        <span className="truncate">{story.url.replace('https://', '')}</span>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                What Realtors Are Saying
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i}
                  className="bg-card border border-primary/30 rounded-2xl p-6 animate-fade-up hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Tabs */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our real estate marketing solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="idx" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto gap-2 bg-transparent">
                  {faqCategories.map((category) => {
                    const colorStyles = {
                      blue: { bg: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)', bgLight: 'rgba(59, 130, 246, 0.1)' },
                      violet: { bg: '#8b5cf6', border: 'rgba(139, 92, 246, 0.3)', bgLight: 'rgba(139, 92, 246, 0.1)' },
                      emerald: { bg: '#10b981', border: 'rgba(16, 185, 129, 0.3)', bgLight: 'rgba(16, 185, 129, 0.1)' },
                      amber: { bg: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)', bgLight: 'rgba(245, 158, 11, 0.1)' }
                    };
                    const colors = colorStyles[category.color as keyof typeof colorStyles];
                    return (
                      <TabsTrigger 
                        key={category.id}
                        value={category.id}
                        className="group flex items-center gap-2 px-4 py-3 rounded-xl border transition-all data-[state=active]:text-white hover:bg-opacity-10"
                        style={{
                          borderColor: colors.border,
                          ['--tab-active-bg' as string]: colors.bg,
                        }}
                      >
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all group-data-[state=active]:bg-white/20"
                          style={{ backgroundColor: colors.bgLight }}
                        >
                          <category.icon 
                            className="w-4 h-4 transition-all group-data-[state=active]:text-white" 
                            style={{ color: colors.bg }}
                          />
                        </div>
                        <span 
                          className="hidden sm:inline font-medium transition-all group-data-[state=active]:text-white"
                          style={{ color: colors.bg }}
                        >
                          {category.label}
                        </span>
                        <style>{`
                          [data-state="active"][value="${category.id}"] {
                            background-color: ${colors.bg} !important;
                            border-color: ${colors.bg} !important;
                          }
                          [data-state="active"][value="${category.id}"] span,
                          [data-state="active"][value="${category.id}"] svg {
                            color: white !important;
                          }
                        `}</style>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="space-y-4">
                    {category.faqs.map((faq, i) => (
                      <div 
                        key={i}
                        className="bg-background border rounded-xl p-6 hover:shadow-[0_0_60px_rgba(255,127,80,0.3)] transition-all"
                        style={{ borderColor: '#ff7f50ff' }}
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Ready to Transform Your{" "}
                <span className="text-gradient">Real Estate Business</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a free strategy session and discover how our platform can help you generate more leads, close more deals, and grow your business.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </>
  );
};

export default Realtors;
