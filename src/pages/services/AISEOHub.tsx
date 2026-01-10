import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Helmet } from "react-helmet";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Search,
  Bot,
  Globe,
  BarChart3,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Code,
  MapPin,
  Link2,
  ArrowRight,
  XCircle,
  CheckCircle2,
  Brain,
  Sparkles,
  LineChart,
  Eye,
  UserPlus,
  Flame,
  Heart,
  Wrench,
  RefreshCw,
  DollarSign,
  Clock,
  Rocket,
  CalendarDays,
} from "lucide-react";

// Import service images
import technicalSeoImage from "@/assets/technical-seo.png";
import onPageSeoImage from "@/assets/on-page-seo.png";
import aeoServiceImage from "@/assets/aeo-service.png";
import geoServiceImage from "@/assets/geo-service.png";
import localSeoImage from "@/assets/local-seo.png";
import linkBuildingImage from "@/assets/link-building.png";
import heroSeoAnalytics from "@/assets/hero-seo-analytics.png";
import aiSeoHeroBg from "@/assets/ai-seo-hero-bg.jpg";
import caseStudyHvac from "@/assets/case-study-hvac.jpg";
import caseStudyMedspa from "@/assets/case-study-medspa.jpg";
import caseStudyDental from "@/assets/case-study-dental.jpg";
import caseStudyAutorepair from "@/assets/case-study-autorepair.jpg";
import caseStudyChiro from "@/assets/case-study-chiro.jpg";
import seoDashboardMetrics from "@/assets/seo-dashboard-metrics.png";

const aiSeoHubStats = [
  { value: "150%", label: "Avg. Traffic Growth", icon: TrendingUp },
  { value: "6", label: "SEO Services Combined", icon: Zap },
  { value: "24/7", label: "AI Monitoring", icon: Bot },
  { value: "90", label: "Days to Results", icon: Clock },
];

const services = [
  {
    title: "Technical SEO",
    description: "Comprehensive site audits, Core Web Vitals optimization, and infrastructure improvements for maximum crawlability.",
    icon: Code,
    image: technicalSeoImage,
    features: ["Site Speed Optimization", "Mobile-First Indexing", "Schema Markup", "Crawl Budget Management"],
    link: "/services/technical-seo"
  },
  {
    title: "On-Page SEO",
    description: "Strategic content optimization with AI-powered keyword research and semantic analysis.",
    icon: FileText,
    image: onPageSeoImage,
    features: ["Content Optimization", "Meta Tag Strategy", "Internal Linking", "E-E-A-T Signals"],
    link: "/services/on-page-seo"
  },
  {
    title: "Answer Engine Optimization",
    description: "Optimize for AI assistants like ChatGPT, Siri, and Alexa to become the trusted answer source.",
    icon: Bot,
    image: aeoServiceImage,
    features: ["Featured Snippets", "Voice Search Ready", "FAQ Schema", "Direct Answer Optimization"],
    link: "/services/aeo"
  },
  {
    title: "Generative Engine Optimization",
    description: "Future-proof your visibility in AI-generated search results and LLM citations.",
    icon: Brain,
    image: geoServiceImage,
    features: ["LLM Citation Building", "AI Content Strategy", "Knowledge Graph Presence", "Brand Authority"],
    link: "/services/geo"
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and Google Maps to capture nearby customers actively searching.",
    icon: MapPin,
    image: localSeoImage,
    features: ["Google Business Profile", "Local Citations", "Review Management", "Local Link Building"],
    link: "/services/local-seo"
  },
  {
    title: "Link Building",
    description: "Strategic authority building through high-quality backlinks and digital PR campaigns.",
    icon: Link2,
    image: linkBuildingImage,
    features: ["Digital PR", "Guest Posting", "HARO Responses", "Competitor Link Analysis"],
    link: "/services/link-building"
  },
];

const aiSeoFAQs = [
  {
    question: "What makes AI SEO different from traditional SEO?",
    answer: "AI SEO leverages machine learning and advanced algorithms to analyze search patterns, predict ranking opportunities, and optimize content at scale. Unlike traditional SEO which relies on manual research and guesswork, AI SEO uses real-time data analysis, automated technical audits, and predictive modeling to deliver faster, more accurate results with continuous optimization."
  },
  {
    question: "How does Answer Engine Optimization (AEO) work?",
    answer: "AEO optimizes your content to be featured as direct answers in AI assistants like ChatGPT, Siri, Google Assistant, and Alexa. This involves structuring content with clear Q&A formats, implementing FAQ schema, creating concise authoritative answers, and building topical authority signals that AI systems recognize and trust."
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "GEO is the next evolution of SEO, focusing on visibility in AI-generated search results and LLM citations. As search engines increasingly use AI to generate answers, GEO ensures your brand is cited as a source. This includes building knowledge graph presence, establishing entity authority, and creating content that LLMs recognize as authoritative."
  },
  {
    question: "How long does it take to see results from AI SEO?",
    answer: "Initial improvements typically appear within 30-60 days, with significant ranking gains in 90-120 days. AI-powered optimization accelerates traditional SEO timelines by identifying and prioritizing high-impact opportunities. Technical fixes often show immediate improvements, while content and authority building compound over time."
  },
  {
    question: "Do you work with local businesses?",
    answer: "Absolutely! Our Local SEO services are specifically designed for service-based businesses and local companies. We optimize Google Business Profiles, build local citations, manage reviews, and implement location-specific strategies that help you dominate the local 3-pack and Maps results."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in high-value service industries including HVAC & Home Services, Dental Practices, Med Spas & Aesthetics, Chiropractors, Auto Repair Shops, and Professional Services. Our industry-specific strategies account for unique search patterns, competitive landscapes, and customer behavior in each vertical."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track comprehensive KPIs including organic traffic growth, keyword rankings, featured snippet acquisitions, local pack visibility, conversion rates, and revenue attribution. Our AI monitoring provides real-time dashboards showing ranking changes, competitor movements, and opportunity alerts so you always know your ROI."
  },
  {
    question: "What's included in your managed AI SEO service?",
    answer: "Our fully managed service includes: Technical SEO audits and ongoing optimization, On-page content strategy and optimization, Answer Engine Optimization, Generative Engine Optimization, Local SEO management, Strategic link building, Monthly reporting and strategy calls, and AI-powered monitoring with proactive recommendations."
  },
];

const whyAISEO = [
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description: "Machine learning algorithms analyze thousands of ranking factors to identify your highest-impact opportunities."
  },
  {
    icon: Zap,
    title: "Faster Results",
    description: "Automated optimization and predictive modeling accelerate your path to page one rankings."
  },
  {
    icon: Shield,
    title: "Future-Proof Strategy",
    description: "Stay ahead of algorithm updates with proactive AEO and GEO strategies for AI-first search."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Real-time analytics and AI insights guide every optimization decision for maximum ROI."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify and capture high-intent keywords that drive qualified leads and conversions."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "AI monitoring and automated alerts ensure your rankings improve month over month."
  },
];

// Growth steps data
const growthSteps = [
  {
    title: "Increase Visibility",
    description: "Get found across search, maps, and AI platforms",
    icon: Eye,
  },
  {
    title: "Drive Leads",
    description: "Attract new prospects through targeted traffic generation",
    icon: UserPlus,
  },
  {
    title: "Convert Leads",
    description: "Turn more leads into paying customers with nurturing and automation",
    icon: RefreshCw,
  },
  {
    title: "Grow Revenue",
    description: "Boost lifetime value through upsells, reviews, and retention",
    icon: DollarSign,
  },
];

const AISEOHub = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered SEO Services for Full-Funnel Visibility | GrowSmallBiz</title>
        <meta name="description" content="Rank higher, get cited, and be surfaced across AI platforms. Enterprise AI SEO that unites technical SEO, AEO, and GEO to make your brand the authoritative answer." />
        <meta name="keywords" content="AI SEO, managed SEO services, technical SEO, AEO, GEO, local SEO, link building, answer engine optimization, generative engine optimization, full-funnel visibility" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aiSeoHeroBg})` }}
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                  <Bot className="w-4 h-4" />
                  <span className="text-sm font-medium">AI-Powered SEO Services</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-foreground leading-tight">
                  Managed AI SEO Services for{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Full-Funnel Visibility
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                  Rank higher, get cited, and be surfaced across AI platforms. 
                  Enterprise AI SEO that unites technical SEO, AEO, and GEO to make 
                  your brand the authoritative answer.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/free-assessment">
                      Start Your AI SEO Strategy
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="#services">View Our Services</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <img 
                    src={heroSeoAnalytics} 
                    alt="SEO Analytics Dashboard showing AI-powered insights and traffic growth"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  {/* Stats Badge */}
                  <div className="absolute -bottom-4 right-8 bg-card border border-border rounded-xl px-6 py-4 shadow-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      +247%
                    </div>
                    <div className="text-sm text-muted-foreground">Avg. Traffic Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is AI SEO Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">What is AI SEO?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
                The Future of Search Visibility
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                AI SEO combines traditional SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization 
                (GEO) to ensure your content ranks and is cited across AI platforms like ChatGPT, Gemini, and Claude. We 
                prepare your content, entities, and structured data so AI systems interpret and trust your brand as an 
                authoritative source.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Unified Visibility */}
              <div className="bg-secondary/50 border-2 border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">Unified Visibility</h3>
                <p className="text-sm text-muted-foreground">
                  Rank in search engines and appear in AI-generated answers
                </p>
              </div>

              {/* Entity Optimization */}
              <div className="bg-secondary/50 border-2 border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">Entity Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Get your brand clearly recognized and cited by LLMs
                </p>
              </div>

              {/* Content Structuring */}
              <div className="bg-secondary/50 border-2 border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">Content Structuring</h3>
                <p className="text-sm text-muted-foreground">
                  Transform content into AI-friendly formats and snippets
                </p>
              </div>

              {/* AI Monitoring */}
              <div className="bg-secondary/50 border-2 border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">AI Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Track citations and generative model performance
                </p>
              </div>
            </div>

            {/* SEO Command Center Section */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-foreground">
                  Your Holistic AI SEO Command Center
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Monitor your complete digital presence in real-time—track domain authority growth, measure your visibility across AI platforms like ChatGPT, Gemini, Perplexity & Claude, and optimize all six SEO pillars from one powerful dashboard. Make data-driven decisions that drive measurable ROI.
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
          </div>
        </section>

        {/* Growth Steps Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">Our AI SEO Method</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Full-Funnel AI SEO Strategy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthSteps.map((step, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Our AI-powered SEO methodology takes your brand from invisible to indispensable. 
                We combine cutting-edge AI analysis with proven SEO fundamentals to dominate 
                search engines, AI assistants, and generative platforms.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment">
                  Get Your Free AI SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why To Invest in AI SEO Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">Why Invest in AI SEO?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Your Competitors Are Already Being Found.{" "}
                <span className="text-primary">Are You?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                For HVAC contractors, med spas, dental practices, chiropractors, and auto repair shops, visibility is everything. 
                When homeowners need emergency repairs or patients search for treatments, they turn to Google—and 
                increasingly, to AI assistants. If your business isn't appearing in both, you're losing high-value customers to 
                competitors who are.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* 24/7 Lead Generation */}
              <div className="ghl-card rounded-2xl p-6">
                <div className="ghl-icon mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">24/7 Lead Generation</h3>
                <div className="text-2xl font-bold text-primary mb-2 animate-fade-in">Always On</div>
                <p className="text-sm text-muted-foreground">
                  Unlike ads that stop when your budget runs out, SEO works around the clock. Your website attracts qualified leads while you focus on running your business.
                </p>
              </div>

              {/* Higher Trust, Higher Tickets */}
              <div className="ghl-card rounded-2xl p-6">
                <div className="ghl-icon mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">Higher Trust, Higher Tickets</h3>
                <div className="text-2xl font-bold text-primary mb-2 animate-fade-in">70% More Trust</div>
                <p className="text-sm text-muted-foreground">
                  Organic search results command 70% more trust than paid ads. For high-ticket services like HVAC systems or cosmetic procedures, trust directly translates to revenue.
                </p>
              </div>

              {/* Compounding Returns */}
              <div className="ghl-card rounded-2xl p-6">
                <div className="ghl-icon mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">Compounding Returns</h3>
                <div className="text-2xl font-bold text-primary mb-2 animate-fade-in">Years of ROI</div>
                <p className="text-sm text-muted-foreground">
                  Every dollar invested in SEO builds lasting authority. Unlike paid ads that disappear instantly, your rankings compound over time—delivering returns for years.
                </p>
              </div>

              {/* AI-Ready Visibility */}
              <div className="ghl-card rounded-2xl p-6">
                <div className="ghl-icon mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">AI-Ready Visibility</h3>
                <div className="text-2xl font-bold text-primary mb-2 animate-fade-in">Future-Proof</div>
                <p className="text-sm text-muted-foreground">
                  Patients and homeowners increasingly ask AI for recommendations. Position your practice as the answer AI platforms cite when they search for services like yours.
                </p>
              </div>
            </div>

            {/* Subheader for Comparison */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                The Limitations of Other Channels
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See why paid ads, referral platforms, and social media fall short compared to AI-optimized SEO
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Other Channels - Limitations */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Other Marketing Channels</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Paid Ads */}
                  <div className="border-b border-border pb-4">
                    <h4 className="font-semibold text-foreground mb-2">Paid Ads (PPC, Retargeting)</h4>
                    <ul className="space-y-2">
                      {[
                        "Traffic stops the moment you stop paying",
                        "Costs increasing 15-20% year over year",
                        "Click fraud can drain 20%+ of budget",
                        "Declining trust—70% of users skip ads",
                        "No lasting equity or asset building",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Referral Services */}
                  <div className="border-b border-border pb-4">
                    <h4 className="font-semibold text-foreground mb-2">Referral Services (Angi, Thumbtack, etc.)</h4>
                    <ul className="space-y-2">
                      {[
                        "You're competing with 5+ businesses per lead",
                        "Pay-per-lead costs are rising rapidly",
                        "No control over lead quality or volume",
                        "Builds their brand, not yours",
                        "You're renting leads, not owning customers",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Organic Social Media */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Organic Social Media</h4>
                    <ul className="space-y-2">
                      {[
                        "Algorithm changes tank reach overnight",
                        "Only 2-5% of followers see your posts",
                        "Requires constant content creation",
                        "Users aren't in buying mode—they're scrolling",
                        "Hard to track direct revenue attribution",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI SEO - Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">AI-Optimized SEO</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Compounding Asset */}
                  <div className="border-b border-primary/10 pb-4">
                    <h4 className="font-semibold text-foreground mb-2">A Compounding Business Asset</h4>
                    <ul className="space-y-2">
                      {[
                        "Rankings persist even when you scale back",
                        "Cost per lead decreases over time",
                        "Content works for you 24/7/365",
                        "Builds lasting brand authority and trust",
                        "You own the traffic—no rent to pay",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* High-Intent Traffic */}
                  <div className="border-b border-primary/10 pb-4">
                    <h4 className="font-semibold text-foreground mb-2">Capture High-Intent Buyers</h4>
                    <ul className="space-y-2">
                      {[
                        "Reach people actively searching for your services",
                        "53% of all website traffic comes from organic search",
                        "Organic visitors convert 5x higher than social",
                        "Local searches drive in-store visits and calls",
                        "Position yourself at the moment of decision",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Future-Proof */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Future-Proof Visibility</h4>
                    <ul className="space-y-2">
                      {[
                        "Be cited by ChatGPT, Perplexity, and AI assistants",
                        "Dominate voice search and smart devices",
                        "Build knowledge graph authority",
                        "Prepare for zero-click and AI-generated answers",
                        "Stay visible as search evolves",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                <strong className="text-foreground">The Bottom Line:</strong> Paid ads, referrals, and social media 
                are tactics. AI SEO is the foundation. Smart businesses use all channels—but they build 
                on organic search because it's the only one that compounds into a true business asset.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment">
                  Get Your Free SEO Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Comparison Chart Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">The Numbers Don't Lie</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                ROI Comparison Over 24 Months
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See how different marketing channels perform over time. While paid channels 
                deliver quick wins, only SEO builds lasting value.
              </p>
            </div>

            {/* Visual Chart */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="relative h-80">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-sm text-muted-foreground">
                    <span>400%</span>
                    <span>300%</span>
                    <span>200%</span>
                    <span>100%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="ml-16 h-full relative">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-b border-border/50 w-full" />
                      ))}
                    </div>
                    
                    {/* Bars Container */}
                    <div className="absolute inset-x-0 bottom-8 top-0 flex items-end justify-around gap-4 px-4">
                      {/* Paid Ads */}
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full max-w-20 bg-destructive/60 rounded-t-lg transition-all duration-500" style={{ height: '25%' }}>
                          <div className="text-center pt-2 text-sm font-bold text-destructive-foreground">50%</div>
                        </div>
                        <span className="text-xs text-muted-foreground text-center">Paid Ads</span>
                      </div>
                      
                      {/* Referrals */}
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full max-w-20 bg-orange-500/60 rounded-t-lg transition-all duration-500" style={{ height: '35%' }}>
                          <div className="text-center pt-2 text-sm font-bold text-white">80%</div>
                        </div>
                        <span className="text-xs text-muted-foreground text-center">Referral Sites</span>
                      </div>
                      
                      {/* Social Media */}
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full max-w-20 bg-yellow-500/60 rounded-t-lg transition-all duration-500" style={{ height: '20%' }}>
                          <div className="text-center pt-2 text-sm font-bold text-white">40%</div>
                        </div>
                        <span className="text-xs text-muted-foreground text-center">Social Media</span>
                      </div>
                      
                      {/* AI SEO */}
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full max-w-20 bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-500" style={{ height: '85%' }}>
                          <div className="text-center pt-2 text-sm font-bold text-primary-foreground">340%</div>
                        </div>
                        <span className="text-xs text-muted-foreground text-center font-semibold">AI SEO</span>
                      </div>
                    </div>
                    
                    {/* X-Axis Label */}
                    <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-muted-foreground">
                      Average ROI at 24 Months
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-5 bg-secondary/50 border-b border-border text-sm font-medium">
                  <div className="p-4 text-foreground">Channel</div>
                  <div className="p-4 text-center text-muted-foreground">Month 1-3</div>
                  <div className="p-4 text-center text-muted-foreground">Month 6</div>
                  <div className="p-4 text-center text-muted-foreground">Month 12</div>
                  <div className="p-4 text-center text-muted-foreground">Month 24</div>
                </div>
                
                {/* Rows */}
                {[
                  { channel: "Paid Ads", m3: "Fast leads", m6: "Costs rising", m12: "ROI declining", m24: "50% ROI", highlight: false },
                  { channel: "Referral Sites", m3: "Shared leads", m6: "High competition", m12: "Price increases", m24: "80% ROI", highlight: false },
                  { channel: "Social Media", m3: "Low reach", m6: "Inconsistent", m12: "Algorithm changes", m24: "40% ROI", highlight: false },
                  { channel: "AI SEO", m3: "Building foundation", m6: "Rankings climbing", m12: "Leads compounding", m24: "340% ROI", highlight: true },
                ].map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-5 border-b border-border last:border-b-0 ${row.highlight ? 'bg-primary/5' : 'hover:bg-secondary/30'} transition-colors`}
                  >
                    <div className={`p-4 ${row.highlight ? 'font-semibold text-primary' : 'text-foreground'}`}>
                      {row.channel}
                    </div>
                    <div className="p-4 text-center text-sm text-muted-foreground">{row.m3}</div>
                    <div className="p-4 text-center text-sm text-muted-foreground">{row.m6}</div>
                    <div className="p-4 text-center text-sm text-muted-foreground">{row.m12}</div>
                    <div className={`p-4 text-center text-sm font-semibold ${row.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                      {row.m24}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground italic">
                *Based on industry averages for local service businesses. Individual results may vary.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">Real Results</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Client Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how local service businesses transformed their online presence with our AI SEO strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* HVAC Contractor */}
              <div className="relative border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] group min-h-[420px]">
                <img 
                  src={caseStudyHvac} 
                  alt="HVAC technician servicing air conditioning" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
                      <Flame className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">HVAC Contractor</p>
                      <p className="font-semibold text-foreground">Comfort Pro Services</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-orange-500">+312%</p>
                      <p className="text-xs text-muted-foreground">Organic Traffic</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-orange-400">+187%</p>
                      <p className="text-xs text-muted-foreground">Service Calls</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">#1</p>
                      <p className="text-xs text-muted-foreground">Local Rankings</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">$47K</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    "We went from invisible online to dominating 'AC repair near me' searches."
                  </p>
                  <p className="text-sm text-orange-500 font-medium">— Mike T., Owner</p>
                </div>
              </div>

              {/* Med Spa */}
              <div className="relative border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] group min-h-[420px]">
                <img 
                  src={caseStudyMedspa} 
                  alt="Luxury medical spa treatment room" 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center backdrop-blur-sm border border-pink-500/30">
                      <Sparkles className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Medical Spa</p>
                      <p className="font-semibold text-foreground">Radiance Aesthetics</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-pink-500">+428%</p>
                      <p className="text-xs text-muted-foreground">Website Visitors</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-pink-400">+245%</p>
                      <p className="text-xs text-muted-foreground">Bookings</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">23</p>
                      <p className="text-xs text-muted-foreground">AI Citations/Mo</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">$89K</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Our Botox pages now rank #1 locally. We're recommended by AI assistants too."
                  </p>
                  <p className="text-sm text-pink-500 font-medium">— Dr. Sarah L., Medical Director</p>
                </div>
              </div>

              {/* Dental Practice */}
              <div className="relative border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] group min-h-[420px]">
                <img 
                  src={caseStudyDental} 
                  alt="Modern dental office treatment room" 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                      <Heart className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Dental Practice</p>
                      <p className="font-semibold text-foreground">Bright Smile Dental</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-cyan-500">+267%</p>
                      <p className="text-xs text-muted-foreground">Organic Traffic</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-cyan-400">+156%</p>
                      <p className="text-xs text-muted-foreground">New Patients</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">15</p>
                      <p className="text-xs text-muted-foreground">Featured Snippets</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">$63K</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    "We own the top spots for implants, veneers, and emergency dental searches."
                  </p>
                  <p className="text-sm text-cyan-500 font-medium">— Dr. James R., DDS</p>
                </div>
              </div>

              {/* Auto Repair */}
              <div className="relative border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl group min-h-[420px]">
                <img 
                  src={caseStudyAutorepair} 
                  alt="Auto repair shop with mechanic" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
                      <Wrench className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Auto Repair Shop</p>
                      <p className="font-semibold text-foreground">Precision Auto Care</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-orange-500">+289%</p>
                      <p className="text-xs text-muted-foreground">Website Traffic</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-amber-400">+198%</p>
                      <p className="text-xs text-muted-foreground">Appointments</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">#1</p>
                      <p className="text-xs text-muted-foreground">Brake Repair</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">$38K</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Now we rank for every major auto repair search in our city."
                  </p>
                  <p className="text-sm text-orange-500 font-medium">— Carlos M., Shop Owner</p>
                </div>
              </div>

              {/* Chiropractic */}
              <div className="relative border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl group min-h-[420px]">
                <img 
                  src={caseStudyChiro} 
                  alt="Chiropractor treating patient" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center backdrop-blur-sm border border-teal-500/30">
                      <Shield className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Chiropractic Clinic</p>
                      <p className="font-semibold text-foreground">Align Wellness Center</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-teal-500">+341%</p>
                      <p className="text-xs text-muted-foreground">Organic Visibility</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-emerald-400">+178%</p>
                      <p className="text-xs text-muted-foreground">New Patients</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">18</p>
                      <p className="text-xs text-muted-foreground">AI Citations/Mo</p>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg py-2">
                      <p className="text-xl font-bold text-foreground">$52K</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    "We rank for 'back pain treatment' and 'chiropractor near me.'"
                  </p>
                  <p className="text-sm text-teal-500 font-medium">— Dr. Emily K., DC</p>
                </div>
              </div>

              {/* Average Results Card */}
              <div className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)]">
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-6">Average Client Results</h3>
                  
                  <div className="space-y-5 flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Organic Traffic Increase</span>
                        <span className="text-sm font-bold text-primary">+287%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Lead Generation Increase</span>
                        <span className="text-sm font-bold text-primary">+193%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" style={{ width: '70%' }} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">AI Platform Citations</span>
                        <span className="text-sm font-bold text-primary">+17/mo</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full mt-6" asChild>
                    <Link to="/free-assessment">
                      Get Similar Results
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-First Advantage Section */}
        <section className="py-20 bg-[hsl(217,33%,12%)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">Our AI-First Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
                Why GrowSmallBiz Delivers SEO Results{" "}
                <span className="text-primary">10x Faster</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Traditional SEO agencies rely on manual processes that take months to show results. Our AI-powered platform 
                automates the tedious work while you maintain full control over every decision. The result? Faster rankings, 
                more leads, and a competitive advantage your competitors can't match.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Zap,
                  title: "AI-Powered Automation",
                  description: "Our intelligent platform handles repetitive SEO tasks automatically—fixing technical issues, optimizing content, and building links—while you focus on running your business. You stay in control with approval workflows for every major change."
                },
                {
                  icon: Brain,
                  title: "Smart Business Intelligence",
                  description: "Our AI learns everything about your industry, competitors, and customers. It builds a comprehensive understanding of your business to create content and optimizations that resonate with your specific audience."
                },
                {
                  icon: Rocket,
                  title: "Faster Search Engine Discovery",
                  description: "Get found by Google faster with our proprietary technology that accelerates how quickly search engines discover and index your new content—often reducing wait times from weeks to days."
                },
                {
                  icon: RefreshCw,
                  title: "Rapid Content Distribution",
                  description: "Your optimized content spreads across the web through our network of authority sites, building backlinks and brand mentions that traditional agencies take months to achieve."
                },
                {
                  icon: Eye,
                  title: "AI Visibility Tracking",
                  description: "Monitor how your business appears in AI-powered search tools like ChatGPT, Gemini, and Perplexity. We track when and how AI platforms recommend your services to potential customers."
                },
                {
                  icon: MapPin,
                  title: "Local Business Profile Mastery",
                  description: "Dominate Google Maps and local search with automated profile optimization, review management, and local citation building across hundreds of directories—all managed from one platform."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="ghl-card p-6 rounded-xl animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="ghl-icon mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom Highlights Bar */}
            <div className="bg-card/30 border border-border rounded-2xl p-8 mb-10">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Clock,
                    title: "You Stay in Control",
                    description: "AI handles the work, but you approve every major change before it goes live"
                  },
                  {
                    icon: Zap,
                    title: "Results in Weeks, Not Months",
                    description: "Automation accelerates every step of the SEO process"
                  },
                  {
                    icon: Brain,
                    title: "Continuous Optimization",
                    description: "AI monitors and improves your SEO 24/7, not just during business hours"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/free-assessment">
                  Start Your AI-Powered SEO Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why AI SEO Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Why AI-Powered SEO?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Traditional SEO is no longer enough. AI is transforming how people search and find information. 
                Stay ahead with strategies built for the future.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyAISEO.map((item, index) => (
                <div
                  key={index}
                  className="ghl-card p-6 rounded-2xl"
                >
                  <div className="ghl-icon mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Our AI SEO Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete suite of AI-powered SEO solutions designed to dominate both traditional 
                search engines and emerging AI-driven platforms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group block bg-card rounded-2xl border-2 border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI Monitoring Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                  <LineChart className="w-4 h-4" />
                  <span className="text-sm font-medium">AI Monitoring & Reporting</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
                  Real-Time AI Insights That Drive Results
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Our AI monitoring system tracks your rankings 24/7, identifies opportunities before your competitors, 
                  and provides actionable insights that keep you ahead of algorithm changes.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Real-time ranking alerts and competitor tracking",
                    "Automated technical health monitoring",
                    "AI-powered content opportunity detection",
                    "Predictive analytics for search trends",
                    "Monthly strategy reports with clear action items"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="hero" size="lg" asChild>
                  <Link to="/free-assessment">
                    Start Your AI SEO Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative bg-card border border-border rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Keywords Tracked", value: "500+", icon: Search },
                      { label: "Real-Time Alerts", value: "24/7", icon: Zap },
                      { label: "Competitor Sites", value: "10+", icon: Users },
                      { label: "Monthly Reports", value: "Detailed", icon: BarChart3 },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-secondary/50">
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhyChooseSection
          title="Why Choose GrowSmallBiz for AI SEO"
          subtitle="Your AI SEO Partner"
          description="We combine cutting-edge AI technology with proven SEO expertise to deliver results that traditional agencies can't match. Our full-funnel approach ensures visibility across all platforms."
          items={[
            {
              title: "AI-Powered Analysis",
              description: "Machine learning algorithms analyze thousands of ranking factors to identify your highest-impact opportunities.",
              icon: Bot,
            },
            {
              title: "Faster Results",
              description: "Automated optimization and predictive modeling accelerate your path to page one rankings.",
              icon: Zap,
            },
            {
              title: "Future-Proof Strategy",
              description: "Stay ahead of algorithm updates with proactive AEO and GEO strategies for AI-first search.",
              icon: Shield,
            },
            {
              title: "Data-Driven Decisions",
              description: "Real-time analytics and AI insights guide every optimization decision for maximum ROI.",
              icon: BarChart3,
            },
            {
              title: "Precision Targeting",
              description: "Identify and capture high-intent keywords that drive qualified leads and conversions.",
              icon: Target,
            },
            {
              title: "Continuous Growth",
              description: "AI monitoring and automated alerts ensure your rankings improve month over month.",
              icon: TrendingUp,
            },
          ]}
        />

        <AnimatedStatsSection stats={aiSeoHubStats} columns={4} />

        {/* Testimonials */}
        <TestimonialsSection />

        <CaseStudySection
          caseStudies={[
            {
              company: "Premier Dental Group",
              location: "San Jose, CA",
              industry: "Dental Practice",
              challenge: "Not appearing in AI search results despite strong traditional SEO.",
              timeframe: "5 months",
              metrics: [
                { label: "AI Platform Citations", before: "0", after: "42", improvement: "+42" },
                { label: "Organic Traffic", before: "1,800/mo", after: "6,200/mo", improvement: "+244%" },
                { label: "New Patient Leads", before: "25/mo", after: "89/mo", improvement: "+256%" },
              ],
            },
            {
              company: "Elite Home Services",
              location: "Phoenix, AZ",
              industry: "HVAC & Plumbing",
              challenge: "Competitors dominating local search while AI assistants ignored their brand.",
              timeframe: "6 months",
              metrics: [
                { label: "Local Pack Rankings", before: "Not Ranked", after: "Top 3", improvement: "Top 3" },
                { label: "ChatGPT Mentions", before: "Never", after: "Consistent", improvement: "Cited" },
                { label: "Monthly Revenue", before: "$85K", after: "$245K", improvement: "+188%" },
              ],
            },
          ]}
          title="AI SEO Success Stories"
          subtitle="How businesses dominate both traditional and AI-powered search"
        />

        {/* FAQ Section */}
        <FAQSection 
          title="AI SEO FAQs"
          subtitle="Common questions about our AI-powered SEO services"
          faqs={aiSeoFAQs}
          contactCTA={{
            ...baseContactCTA,
            title: "Have more questions about AI SEO?",
            description: "We're here to help! Reach out to us for a personalized consultation.",
            tagline: "Let's dominate search with AI together.",
          }}
        />

        {/* Latest SEO Blog Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">Latest Insights</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                SEO Blog & Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay ahead with the latest AI SEO strategies, tips, and industry insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "How AI is Transforming Local SEO for Small Businesses",
                  excerpt: "Discover how artificial intelligence is revolutionizing local search optimization and helping small businesses compete with larger competitors.",
                  category: "AI & SEO",
                  date: "Dec 28, 2024",
                  readTime: "5 min read"
                },
                {
                  title: "The Complete Guide to Answer Engine Optimization (AEO)",
                  excerpt: "Learn how to optimize your content for AI-powered search engines like ChatGPT, Gemini, and Perplexity to capture the next generation of searchers.",
                  category: "AEO",
                  date: "Dec 22, 2024",
                  readTime: "8 min read"
                },
                {
                  title: "2025 SEO Trends: What Small Businesses Need to Know",
                  excerpt: "Explore the emerging trends that will shape search engine optimization in 2025 and how to prepare your business for success.",
                  category: "Trends",
                  date: "Dec 15, 2024",
                  readTime: "6 min read"
                }
              ].map((post, index) => (
                <Link
                  key={index}
                  to="/blog"
                  className="group block bg-card rounded-2xl border-2 border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-primary/50" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold font-display mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/blog">
                  View All Articles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CardCTA
          title="Ready for Full-Funnel AI SEO Visibility?"
          description="Rank higher, get cited by AI, and dominate search across all platforms. Let's build your AI-powered SEO strategy today."
        />
        <ConsultationFormSection />
      </main>

      <Footer />
    </>
  );
};

export default AISEOHub;
