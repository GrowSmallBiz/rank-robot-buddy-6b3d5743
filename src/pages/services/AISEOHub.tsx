import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Helmet } from "react-helmet";
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
  RefreshCw,
  DollarSign,
} from "lucide-react";

// Import service images
import technicalSeoImage from "@/assets/technical-seo.png";
import onPageSeoImage from "@/assets/on-page-seo.png";
import aeoServiceImage from "@/assets/aeo-service.png";
import geoServiceImage from "@/assets/geo-service.png";
import localSeoImage from "@/assets/local-seo.png";
import linkBuildingImage from "@/assets/link-building.png";
import heroSeoAnalytics from "@/assets/hero-seo-analytics.png";

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
        <title>Managed AI SEO Services for Full-Funnel Visibility | GrowSmallBiz</title>
        <meta name="description" content="Rank higher, get cited, and be surfaced across AI platforms. Enterprise AI SEO that unites technical SEO, AEO, and GEO to make your brand the authoritative answer." />
        <meta name="keywords" content="AI SEO, managed SEO services, technical SEO, AEO, GEO, local SEO, link building, answer engine optimization, generative engine optimization, full-funnel visibility" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">The Foundational Strategy</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Why To Invest in AI SEO
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While paid ads, referrals, and social media have their place, AI-optimized SEO delivers 
                compounding returns that make it the foundation every serious business needs.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "HVAC Contractor",
                  location: "Denver, CO",
                  challenge: "Invisible online, relying 100% on paid ads and Angi leads",
                  results: [
                    { metric: "Organic Traffic", before: "120/mo", after: "2,400/mo", change: "+1,900%" },
                    { metric: "Cost Per Lead", before: "$180", after: "$32", change: "-82%" },
                    { metric: "Monthly Revenue", before: "$45K", after: "$128K", change: "+184%" },
                  ],
                  quote: "We went from paying $3,000/month for shared leads to owning page one. Now leads come to us.",
                  timeline: "12 months",
                },
                {
                  industry: "Dental Practice",
                  location: "Austin, TX",
                  challenge: "New practice struggling to compete with established competitors",
                  results: [
                    { metric: "Google Map Pack", before: "Not ranked", after: "#1", change: "Top 3" },
                    { metric: "New Patients", before: "8/mo", after: "47/mo", change: "+488%" },
                    { metric: "Practice Revenue", before: "$52K", after: "$189K", change: "+264%" },
                  ],
                  quote: "Within 6 months we were outranking practices that had been here for 20 years.",
                  timeline: "9 months",
                },
                {
                  industry: "Med Spa",
                  location: "Scottsdale, AZ",
                  challenge: "High ad spend with diminishing returns, no organic presence",
                  results: [
                    { metric: "Organic Keywords", before: "23", after: "340+", change: "+1,378%" },
                    { metric: "Consultation Bookings", before: "15/mo", after: "78/mo", change: "+420%" },
                    { metric: "Ad Spend Reduction", before: "$8,500/mo", after: "$2,000/mo", change: "-76%" },
                  ],
                  quote: "We cut our ad budget by 76% and tripled our leads. AI SEO changed everything.",
                  timeline: "14 months",
                },
              ].map((study, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary">{study.industry}</span>
                      <span className="text-xs text-muted-foreground">{study.timeline}</span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {study.location}
                    </p>
                  </div>
                  
                  {/* Challenge */}
                  <div className="p-6 border-b border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Challenge:</span> {study.challenge}
                    </p>
                  </div>
                  
                  {/* Results */}
                  <div className="p-6 space-y-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{result.metric}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground/60 line-through">{result.before}</span>
                          <ArrowRight className="w-3 h-3 text-primary" />
                          <span className="font-semibold text-foreground">{result.after}</span>
                          <span className="text-xs text-primary font-medium">({result.change})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="p-6 bg-secondary/30 border-t border-border">
                    <p className="text-sm italic text-muted-foreground">"{study.quote}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment">
                  Get Results Like These
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
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
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
                  className="group block bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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

        {/* CTA Section */}
        <CTASection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection 
          title="AI SEO FAQs"
          subtitle="Common questions about our AI-powered SEO services"
          faqs={aiSeoFAQs}
        />
      </main>

      <Footer />
    </>
  );
};

export default AISEOHub;
