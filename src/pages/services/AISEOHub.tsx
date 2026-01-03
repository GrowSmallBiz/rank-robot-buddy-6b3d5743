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
