import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { AnimatedStatsSection, AnimatedStatCard } from "@/components/sections/AnimatedStatsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { BlogSection, reputationManagementBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { PersonCTA } from "@/components/services";
import { 
  ArrowRight, 
  Star,
  Shield,
  MessageSquare,
  TrendingUp,
  Zap,
  Eye,
  Users,
  BarChart3,
  CheckCircle2,
  Clock,
  Bot,
  Bell,
  ThumbsUp,
  Search,
  Quote,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import reputationHeroBg from "@/assets/reputation-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

// FAQs from source content
const faqs: FAQItem[] = [
  {
    question: "How does AI-powered reputation management work for small businesses?",
    answer: "AI-powered reputation management automatically monitors your online reviews across Google, Facebook, Yelp, and 50+ platforms. When customers leave reviews, our AI instantly crafts personalized responses that maintain your professional image. The system also automatically requests reviews from happy customers, helping you build a stronger online presence without any manual effort."
  },
  {
    question: "How quickly will I see more Google reviews for my business?",
    answer: "Most businesses start seeing increased review volume within the first 2-4 weeks as the automated review request system begins reaching out to customers. The steady growth continues as more satisfied customers receive timely review requests, typically resulting in 2-5x more reviews within the first 90 days."
  },
  {
    question: "What makes AI review responses better than manual responses?",
    answer: "AI responses are faster, consistent, and never miss a review. Our AI responds within minutes 24/7, uses your brand voice, and handles both positive and negative reviews professionally. Unlike manual responses that can be delayed or inconsistent, AI ensures every customer feels heard while protecting your reputation around the clock."
  },
  {
    question: "Can this help my business rank higher in local Google searches?",
    answer: "Yes, absolutely. More positive Google reviews directly improve your local search rankings. Google's algorithm heavily weights review quantity, quality, and recency when determining local search results. Businesses using our system typically see improved local rankings within 30-60 days as their review count and rating increase."
  },
  {
    question: "What happens when I get a negative review?",
    answer: "Our AI immediately alerts you to negative reviews and suggests professional response strategies. The AI can craft diplomatic responses that show you care about customer concerns while protecting your reputation. For serious issues, you'll get instant notifications so you can personally address problems before they escalate."
  },
  {
    question: "Do I need technical skills to use this reputation management system?",
    answer: "No technical skills required. The entire system runs automatically after a simple 15-minute setup. You'll get a dashboard to monitor everything, but the AI handles review requests, responses, and monitoring without any ongoing work from you. It's designed specifically for busy small business owners."
  },
  {
    question: "Which review sites does your system monitor and manage?",
    answer: "We monitor Google My Business, Facebook, Yelp, Better Business Bureau, industry-specific sites, and over 50 major review platforms. The system prioritizes Google reviews since they have the biggest impact on local search, but ensures you never miss feedback from any important source."
  },
  {
    question: "How much does AI-powered reputation management cost?",
    answer: "Pricing varies based on your business size and needs. Most small businesses invest between $297-497 per month, which typically pays for itself through just 1-2 additional customers per month. Book a free consultation to get exact pricing for your specific situation and see ROI projections."
  },
  {
    question: "Can I see examples of the AI responses before they go live?",
    answer: "Yes, you have full control. You can review and approve AI responses before they're posted, or set the system to auto-respond for routine positive reviews while flagging complex situations for your approval. The AI learns your preferences and brand voice over time."
  },
  {
    question: "How long does it take to set up automated reputation management?",
    answer: "Initial setup takes about 15 minutes to connect your Google Business Profile and other review accounts. The AI starts monitoring immediately, and you'll see your first automated review requests go out within 24 hours. Full optimization typically happens within the first week as the system learns your customer patterns."
  },
];

const highlights = [
  "Send Review Requests on Auto Pilot To Your Customers Without Lifting a Finger",
  "Workflow Automation Sends Reminder via Email & SMS For Pending Reviews",
  "Let AI Automation Handle Review Replies",
  "Control Your Online Reputation",
  "Build Trust Signals",
  "Increase Local SEO Rankings",
  "Get Found By More Prospects",
  "Generate More Leads",
  "Drive More Sales",
  "Dominate Your Local Market",
];

const features = [
  {
    title: "Direct Google Reviews",
    description: "Skip the hassle of review sites that don't matter. Our direct Google integration ensures every review lands exactly where local customers look first – your Google Business Profile.",
    icon: Star,
  },
  {
    title: "Complete Autopilot Collection",
    description: "Your system automatically reaches out to happy customers and guides them to leave reviews on Google. No manual work, no awkward conversations, just steady review growth every month.",
    icon: Zap,
  },
  {
    title: "AI-Powered Review Response",
    description: "Your AI assistant crafts professional, personalized responses to every review within minutes. Happy customers feel appreciated, upset customers get addressed before problems escalate.",
    icon: Bot,
  },
  {
    title: "Review Monitoring Dashboard",
    description: "Track every mention of your business. Monitor Google, Facebook, Yelp and 50+ review sites from one dashboard. Catch negative reviews early and never miss an opportunity to engage.",
    icon: Eye,
  },
];

const benefits = [
  {
    title: "Own Your Local Market",
    description: "When locals search for your services, make sure you're the obvious choice with hundreds of authentic customer reviews.",
    icon: TrendingUp,
  },
  {
    title: "Turn Customers Into Marketing",
    description: "Automatically collect reviews, respond instantly with AI, and watch your local rankings soar while you focus on your business.",
    icon: Users,
  },
  {
    title: "Protect Your Reputation 24/7",
    description: "AI monitors and responds to reviews around the clock, ensuring your business maintains a professional image at all times.",
    icon: Shield,
  },
  {
    title: "Increase Local SEO Rankings",
    description: "More positive reviews directly improve your local search rankings, bringing in more organic traffic and leads.",
    icon: Search,
  },
  {
    title: "Build Trust & Credibility",
    description: "A strong review profile builds instant trust with potential customers, making them more likely to choose you over competitors.",
    icon: ThumbsUp,
  },
  {
    title: "Real-Time Alerts",
    description: "Get instant notifications for new reviews so you can celebrate wins and address concerns before they become problems.",
    icon: Bell,
  },
];

const stats = [
  { value: "50+", label: "Review Platforms Monitored" },
  { value: "24/7", label: "AI Response Coverage" },
  { value: "15min", label: "Setup Time" },
  { value: "2-5x", label: "More Reviews in 90 Days" },
];

const reputationCaseStudies = [
  {
    company: "Mitchell Family Dental",
    location: "Denver, CO",
    industry: "Dental Practice",
    challenge: "Stuck at 47 Google reviews while competitors had 200+. No time to respond to reviews or request new ones.",
    timeframe: "3 months",
    metrics: [
      { label: "Google Reviews", before: "47", after: "186", improvement: "+296%" },
      { label: "Average Rating", before: "4.1", after: "4.9", improvement: "+20%" },
      { label: "New Patient Calls", before: "35/mo", after: "78/mo", improvement: "+123%" },
    ],
    quote: "Within 3 months, we went from 47 Google reviews to over 180. Our new patient calls have doubled.",
    quoteName: "Dr. Sarah Mitchell",
    quoteRole: "Owner, Mitchell Family Dental"
  },
  {
    company: "Thompson HVAC Services",
    location: "Charlotte, NC",
    industry: "HVAC Services",
    challenge: "Bad reviews hurting business. No system to collect positive reviews or respond professionally.",
    timeframe: "4 months",
    metrics: [
      { label: "Google Ranking", before: "Page 2", after: "Top 3", improvement: "Top Spot" },
      { label: "Star Rating", before: "3.6", after: "4.8", improvement: "+33%" },
      { label: "Service Calls/Month", before: "45", after: "98", improvement: "+118%" },
    ],
    quote: "We've climbed from page 2 to the top 3 in local search results. The AI handles everything automatically.",
    quoteName: "Mike Thompson",
    quoteRole: "Owner, Thompson HVAC Services"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Owner, Mitchell Family Dental",
    quote: "Within 3 months, we went from 47 Google reviews to over 180. The AI responses are so professional that patients often compliment us on how quickly we respond. Our new patient calls have doubled.",
    rating: 5,
    result: "283% increase in reviews"
  },
  {
    name: "Mike Thompson",
    role: "Owner, Thompson HVAC Services",
    quote: "I used to dread checking reviews because I never had time to respond. Now the AI handles everything automatically. We've climbed from page 2 to the top 3 in local search results.",
    rating: 5,
    result: "Top 3 local ranking"
  },
  {
    name: "Jennifer Chen",
    role: "Director, Restore Med Spa",
    quote: "The automated review requests are a game-changer. Happy clients get a gentle nudge to leave feedback, and our 4.2 rating jumped to 4.9. The ROI paid for itself in the first month.",
    rating: 5,
    result: "4.2 to 4.9 star rating"
  },
  {
    name: "Robert Garcia",
    role: "Owner, Garcia Auto Repair",
    quote: "We had a few negative reviews hurting our business. The AI helped us respond professionally and request more reviews from satisfied customers. Now we're the highest-rated shop in town.",
    rating: 5,
    result: "Highest-rated in area"
  }
];

const ReputationManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI-Powered Reputation Management | Automated Review Collection & Response | GrowSmallBiz</title>
        <meta name="description" content="Automate your online reputation with AI-powered review collection, instant responses, and monitoring across 50+ platforms. Build trust, increase local SEO rankings, and dominate your local market." />
        <meta name="keywords" content="reputation management, online reviews, Google reviews, AI review response, review automation, local SEO, review monitoring, customer feedback" />
        <link rel="canonical" href="https://growsmallbiz.io/services/reputation-management" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${reputationHeroBg})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Star className="w-4 h-4" />
                AI-Powered Reputation Management
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Reputation Management{" "}
              <span className="text-gradient">Automation Powered by AI</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200">
              Turn every happy customer into your best marketing tool. Automatically collect reviews, 
              respond instantly with AI, and watch your local rankings soar—all on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get My Reputation System
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-up delay-400">
              {stats.map((stat, index) => (
                <AnimatedStatCard key={index} stat={stat} index={index} variant="minimal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Trust Badges */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          {/* Primary Platforms */}
          <div className="text-center mb-8 animate-fade-up">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
              Primary Integrations
            </p>
            <p className="text-muted-foreground text-sm">
              Direct integration to fetch and respond to reviews
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-2xl mx-auto mb-12 animate-fade-up">
            {/* Google Business Profile */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:scale-105">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-foreground">Google Business Profile</span>
            </div>

            {/* Facebook Reviews */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:scale-105">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-foreground">Facebook Reviews</span>
            </div>
          </div>

          {/* Other Platforms */}
          <div className="text-center mb-8 animate-fade-up">
            <p className="text-muted-foreground uppercase tracking-wider text-xs font-medium mb-2">
              Additional Platforms We Monitor
            </p>
            <p className="text-muted-foreground text-sm">
              Monitor, fetch, and manage reviews from more sources — all in one place
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-up">
            {/* DoorDash */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF3008] flex items-center justify-center">
                  <span className="text-white font-bold text-[10px]">DD</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">DoorDash</span>
            </div>

            {/* UberEats */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#06C167] flex items-center justify-center">
                  <span className="text-white font-bold text-[10px]">UE</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">UberEats</span>
            </div>

            {/* BBB */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="text-center">
                  <span className="text-xs font-bold text-[#005A8C] leading-none block">BBB</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">BBB</span>
            </div>

            {/* WeddingWire */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#00B2A9] flex items-center justify-center">
                  <span className="text-white font-bold text-[8px]">WW</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">WeddingWire</span>
            </div>

            {/* The Knot */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#E85D75] flex items-center justify-center">
                  <span className="text-white font-bold text-[8px]">TK</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">The Knot</span>
            </div>

            {/* Thumbtack */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-full bg-[#009FD9] flex items-center justify-center">
                  <ThumbsUp className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">Thumbtack</span>
            </div>

            {/* TrustRadius */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#5B3FBF] flex items-center justify-center">
                  <span className="text-white font-bold text-[8px]">TR</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">TrustRadius</span>
            </div>

            {/* Yell */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#FFCC00] flex items-center justify-center">
                  <span className="text-black font-bold text-[10px]">Yell</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">Yell</span>
            </div>

            {/* GoodReads */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#553B08] flex items-center justify-center">
                  <span className="text-white font-bold text-[8px]">GR</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">GoodReads</span>
            </div>

            {/* Caring.com */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-8 h-8 rounded-lg bg-[#0066CC] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">Caring.com</span>
            </div>
          </div>

          {/* Platform Capabilities */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-up">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-display font-semibold text-foreground text-center mb-6">
                What You Can Do Across All Platforms
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">View and manage reviews from all supported platforms</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Centralize your reputation insights across industries</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Showcase reviews in the Review Widget</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Improve client visibility with cross-platform reporting</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50 lg:col-span-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Collect reviews via Email, SMS, or WhatsApp for all platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Results Table */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Real Client Results</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              See What's Possible in 90 Days
            </h2>
            <p className="text-lg text-muted-foreground">
              Average improvements across our reputation management clients
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-fade-up">
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-muted/50">
                <div className="p-4 md:p-6 text-center border-r border-border">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Metric</span>
                </div>
                <div className="p-4 md:p-6 text-center border-r border-border">
                  <span className="text-sm font-semibold text-destructive uppercase tracking-wider">Before</span>
                </div>
                <div className="p-4 md:p-6 text-center">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">After 90 Days</span>
                </div>
              </div>

              {/* Average Star Rating */}
              <div className="grid grid-cols-3 border-t border-border">
                <div className="p-4 md:p-6 border-r border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">Average Star Rating</span>
                </div>
                <div className="p-4 md:p-6 border-r border-border flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">3.2</span>
                    <div className="flex items-center justify-center gap-0.5 mt-1">
                      {[1, 2, 3].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <Star className="w-4 h-4 text-muted-foreground/30" />
                      <Star className="w-4 h-4 text-muted-foreground/30" />
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary/5">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-display font-bold text-primary">4.8</span>
                    <div className="flex items-center justify-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Review Count */}
              <div className="grid grid-cols-3 border-t border-border">
                <div className="p-4 md:p-6 border-r border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">Total Review Count</span>
                </div>
                <div className="p-4 md:p-6 border-r border-border flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">23</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary/5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-primary">127</span>
                    <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">+452%</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="grid grid-cols-3 border-t border-border">
                <div className="p-4 md:p-6 border-r border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">Avg. Response Time</span>
                </div>
                <div className="p-4 md:p-6 border-r border-border flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">3+ days</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary/5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-primary">&lt;2 hrs</span>
                  </div>
                </div>
              </div>

              {/* Response Rate */}
              <div className="grid grid-cols-3 border-t border-border">
                <div className="p-4 md:p-6 border-r border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">Review Response Rate</span>
                </div>
                <div className="p-4 md:p-6 border-r border-border flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">12%</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary/5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-primary">100%</span>
                  </div>
                </div>
              </div>

              {/* Local Search Visibility */}
              <div className="grid grid-cols-3 border-t border-border">
                <div className="p-4 md:p-6 border-r border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">Local Pack Ranking</span>
                </div>
                <div className="p-4 md:p-6 border-r border-border flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">Not Ranking</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary/5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-primary">Top 3</span>
                  </div>
                </div>
              </div>

              {/* Monthly New Reviews */}
              <div className="grid grid-cols-3 border-t border-border">
                <div className="p-4 md:p-6 border-r border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">New Reviews/Month</span>
                </div>
                <div className="p-4 md:p-6 border-r border-border flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">1-2</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary/5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-primary">15-25</span>
                    <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">10x</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              *Results based on average client data after 90 days of active reputation management
            </p>
          </div>
        </div>
      </section>

      {/* System Highlights */}
      <section className="relative py-24 ghl-section">
        <div className="absolute inset-0 section-glow opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">System Automation Highlights</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Everything Runs on Autopilot
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 backdrop-blur-sm rounded-xl transition-all duration-300 animate-fade-up hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
                style={{ animationDelay: `${index * 0.05}s`, border: '2px solid #17a2b8ff', backgroundColor: '#2d465cff' }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step Process */}
      <section className="relative py-24 bg-card/80 border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Your Path to 5-Star Reputation in 4 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              From setup to results, here's exactly how our AI-powered system transforms your online reputation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative group animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg z-10">
                  1
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 pt-10 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,127,80,0.5)] hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    15-Minute Setup
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connect your Google Business Profile and review platforms. Our team handles the technical setup so you can focus on your business.
                  </p>
                </div>
                {/* Connector line - hidden on mobile */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              {/* Step 2 */}
              <div className="relative group animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg z-10">
                  2
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 pt-10 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,127,80,0.5)] hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    AI Learns Your Voice
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our AI studies your brand tone and past responses to craft replies that sound authentically you—professional and consistent.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              {/* Step 3 */}
              <div className="relative group animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg z-10">
                  3
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 pt-10 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,127,80,0.5)] hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    Automation Activates
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Review requests go out automatically to happy customers. AI responds to incoming reviews within minutes, 24/7.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              {/* Step 4 */}
              <div className="relative group animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg z-10">
                  4
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 pt-10 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,127,80,0.5)] hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    Watch Rankings Climb
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    More reviews mean higher local rankings. Track your progress in real-time as your reputation and visibility grow.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA after steps */}
            <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Start My 15-Minute Setup
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Win More Local Business */}
      <section className="relative py-24 ghl-section">
        <div className="absolute inset-0 section-glow opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Win More Local Business</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Own Your Local Market with Reviews
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When locals search for your services, make sure you're the obvious choice. 
              Get hundreds of authentic customer reviews that put you ahead of every competitor in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm rounded-xl p-6 space-y-4 transition-all duration-500 hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8] hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, border: '2px solid #17a2b8ff', backgroundColor: '#2d465cff' }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <benefit.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-24 bg-card/80 border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Core Features</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Your Complete Review Automation System
            </h2>
            <p className="text-lg text-muted-foreground">
              From collection to response to monitoring—everything is handled automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-background/80 border border-ghl-icon rounded-2xl p-8 space-y-6 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <p className="text-primary font-medium">Customer Experience That Drives Revenue</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              A Complete Local Marketing Solution Built for Small Business Success
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              This isn't just review software – it's your unfair advantage in the local market. 
              AI-powered responses keep customers happy, automatic collection builds your reputation, 
              and higher rankings bring more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get My Reputation System
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 ghl-section border-y border-ghl-border/20">
        <div className="absolute inset-0 bg-gradient-to-br from-ghl-border/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Client Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              See how local businesses transformed their online reputation with our AI-powered system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group ghl-card rounded-2xl p-8 space-y-6 transition-all duration-500 hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8] hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, border: '2px solid #17a2b8ff' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/30" />
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-sm font-medium text-primary">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection 
        title="Your Reputation Management Partner"
        description="We automate review collection, AI-powered responses, and reputation monitoring—so you build trust, rank higher, and attract more customers."
        items={[
          { title: "Automated Review Requests", description: "Happy customers automatically receive review requests at the perfect moment—no manual effort required.", icon: Zap },
          { title: "AI-Powered Responses", description: "Every review gets a professional, personalized response within minutes—24/7, 365 days a year.", icon: Bot },
          { title: "Multi-Platform Monitoring", description: "Track reviews across Google, Facebook, Yelp, and 50+ platforms from one dashboard.", icon: Eye },
          { title: "Negative Review Alerts", description: "Instant notifications for negative reviews so you can address issues before they escalate.", icon: Bell },
          { title: "Local SEO Boost", description: "More positive reviews directly improve your local search rankings and visibility.", icon: TrendingUp },
          { title: "Full Brand Control", description: "You maintain oversight of all responses with approval workflows for sensitive situations.", icon: Shield },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="See how businesses are transforming their online reputation"
        testimonials={[
          {
            quote: "Our Google rating went from 3.8 to 4.9 stars in just 3 months. The automated review requests made all the difference. We now get 5-10 new reviews every week.",
            author: "Lisa M.",
            role: "Owner",
            company: "Serenity MedSpa",
            rating: 5,
          },
          {
            quote: "The AI responses are incredible. Every review gets a professional reply within minutes. Our customers love the personal touch, and we don't lift a finger.",
            author: "Robert H.",
            role: "Practice Manager",
            company: "Family Dental Care",
            rating: 5,
          },
          {
            quote: "We went from page 3 to the top 3 in local search results. The review growth directly impacted our rankings. Best investment for our reputation.",
            author: "Amanda S.",
            role: "Marketing Director",
            company: "Elite Chiropractic",
            rating: 5,
          },
        ]}
      />

      {/* Case Studies Section */}
      <CaseStudySection
        caseStudies={reputationCaseStudies}
        title="Reputation Management Success Stories"
        subtitle="See how businesses transformed their online reputation with AI automation"
        ctaLink="/free-assessment"
        ctaText="Get Results Like These"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Reputation Management FAQs"
        subtitle="Everything you need to know about our AI-powered reputation management system"
        faqs={faqs}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Reputation Management?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's protect your online reputation together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection
        posts={reputationManagementBlogPosts.slice(0, 3)}
        title="Latest Reputation Management Insights"
        subtitle="Expert tips and strategies to build and protect your online reputation"
        showViewAll={true}
        viewAllLink="/blog"
      />

      {/* CTA Section */}
      <PersonCTA
        title="Ready to Dominate Your Online Reputation?"
        description="Get AI-powered review collection, instant responses, and 24/7 monitoring. Turn your customers into your best marketing tool."
        sectionClassName="py-12 bg-section-dark"
      />
      <ConsultationFormSection />

      <Footer />
    </div>
  );
};

export default ReputationManagement;
