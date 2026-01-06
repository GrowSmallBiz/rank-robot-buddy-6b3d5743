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
  PhoneOff, 
  Clock, 
  Users, 
  TrendingDown,
  MapPin,
  Star,
  Bot,
  Search,
  Globe,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Wrench,
  Flame,
  Droplets,
  Plug,
  Home,
  Hammer
} from "lucide-react";

// Hero image - we'll use an existing asset or placeholder
import heroImage from "@/assets/industry-hvac-hero.jpg";

const painPoints = [
  {
    icon: PhoneOff,
    title: "Missed Calls = Lost Jobs",
    description: "When you're on a ladder or under a sink, every missed call is $500-$5,000 walking to your competitor."
  },
  {
    icon: Clock,
    title: "Seasonal Feast or Famine",
    description: "Summer AC rush, winter heating boom—but what about the slow months? Inconsistent lead flow kills cash flow."
  },
  {
    icon: Users,
    title: "Competing Against Giants",
    description: "National franchises outspend you 10:1 on marketing. Without smart strategy, you're invisible online."
  },
  {
    icon: TrendingDown,
    title: "Reviews Make or Break You",
    description: "One bad review on Google can cost you dozens of jobs. Most happy customers never leave reviews."
  },
  {
    icon: MapPin,
    title: "Local Visibility Struggles",
    description: "You serve 15 cities but only rank in 2. Your service area is full of customers who can't find you."
  },
  {
    icon: Clock,
    title: "No Time for Marketing",
    description: "You're running crews, managing inventory, and handling emergencies. Who has time for SEO and ads?"
  }
];

const services = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Never miss another call. Our AI answers 24/7, books appointments, and qualifies leads—even at 2 AM emergencies.",
    href: "/services/ai-receptionist",
    highlight: true
  },
  {
    icon: Search,
    title: "Local SEO Domination",
    description: "Rank #1 in every city you serve. We optimize your Google Business Profile and build local authority.",
    href: "/services/local-seo",
    highlight: true
  },
  {
    icon: Globe,
    title: "AI SEO Hub",
    description: "Get found on Google AND AI assistants like ChatGPT. Future-proof your online presence.",
    href: "/services/ai-seo-hub",
    highlight: false
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Automatically request reviews from happy customers and respond to feedback professionally.",
    href: "/services/reputation-management",
    highlight: true
  },
  {
    icon: MessageSquare,
    title: "Quad Bots AI Team",
    description: "AI-powered lead nurturing that follows up with every inquiry until they book or buy.",
    href: "/services/quad-bots",
    highlight: false
  },
  {
    icon: BarChart3,
    title: "AI-Powered CRM",
    description: "Track every lead, job, and customer interaction in one place. Never lose a lead again.",
    href: "/services/crm",
    highlight: false
  }
];

const results = [
  { value: "312%", label: "Average increase in organic leads" },
  { value: "24/7", label: "AI receptionist availability" },
  { value: "47", label: "Average new reviews per month" },
  { value: "4.2x", label: "Return on marketing investment" }
];

const homeServicesTestimonials = [
  {
    quote: "We went from 50 calls a month to over 200. The AI receptionist alone paid for itself in the first week—it booked 3 emergency jobs while I was on a roof.",
    author: "Mike Rodriguez",
    role: "Owner",
    company: "Rodriguez Roofing & Gutters",
    rating: 5
  },
  {
    quote: "GrowSmallBiz helped us dominate all 12 cities we serve. We're now the #1 HVAC company in our county on Google.",
    author: "Jennifer Walsh",
    role: "Marketing Director",
    company: "ComfortFirst HVAC",
    rating: 5
  },
  {
    quote: "Our remodeling business went from 2-3 leads a week to 2-3 per DAY. The reputation management system got us 89 new 5-star reviews in 3 months.",
    author: "David Chen",
    role: "Owner",
    company: "Chen Home Renovations",
    rating: 5
  }
];

const faqs = [
  {
    question: "What types of home service businesses do you work with?",
    answer: "We specialize in HVAC, plumbing, electrical, roofing, remodeling, and general contracting businesses. Our strategies are tailored to the unique challenges of each trade—from emergency service calls to seasonal demand fluctuations."
  },
  {
    question: "How does the AI Receptionist handle emergency calls?",
    answer: "Our AI Receptionist is trained to recognize emergency situations (no heat in winter, flooding, electrical hazards) and can immediately escalate to your on-call technician while gathering critical information. It never tells an emergency caller to 'leave a message.'"
  },
  {
    question: "Can you help us rank in multiple service areas?",
    answer: "Absolutely. We specialize in multi-location local SEO. We'll optimize your Google Business Profile, create location-specific landing pages, and build local citations to help you rank in every city and neighborhood you serve."
  },
  {
    question: "How long until we see results?",
    answer: "Most clients see significant increases in calls within 60-90 days. AI Receptionist and reputation management show results immediately. SEO typically takes 3-6 months to show substantial ranking improvements, but we focus on quick wins first."
  },
  {
    question: "Do you work with franchises or just independent contractors?",
    answer: "Both! We work with single-truck operators all the way up to multi-location franchises. Our strategies scale to fit your business size and growth goals."
  },
  {
    question: "What makes you different from other marketing agencies?",
    answer: "We focus exclusively on local service businesses and combine traditional SEO with AI-powered tools. Our AI Receptionist, reputation management, and CRM are built specifically for contractors—not generic solutions adapted for your industry."
  }
];

const caseStudies = [
  {
    company: "ComfortFirst HVAC",
    location: "Denver Metro Area",
    industry: "HVAC Services",
    challenge: "A 3-location HVAC company was invisible in local search, losing emergency calls to competitors with better online presence.",
    timeframe: "6 months",
    metrics: [
      { label: "Organic Traffic", before: "1,200/mo", after: "4,600/mo", improvement: "+287%" },
      { label: "Monthly Leads", before: "45", after: "156", improvement: "+247%" },
      { label: "Map Pack Ranking", before: "#8", after: "#1", improvement: "Top Spot" }
    ],
    quote: "We went from barely showing up to dominating all 12 cities we serve. The ROI has been incredible.",
    quoteName: "Jennifer Walsh",
    quoteRole: "Marketing Director"
  },
  {
    company: "Elite Plumbing Solutions",
    location: "Austin, TX",
    industry: "Emergency Plumbing",
    challenge: "After-hours emergency calls were going to voicemail, losing thousands in potential revenue to competitors who answered 24/7.",
    timeframe: "3 months",
    metrics: [
      { label: "After-Hours Capture", before: "12%", after: "94%", improvement: "+683%" },
      { label: "AI-Booked Revenue", before: "$0", after: "$47,000", improvement: "New Revenue" },
      { label: "Response Time", before: "Next day", after: "<3 sec", improvement: "Instant" }
    ],
    quote: "The AI receptionist booked 3 emergency jobs in its first week while I was on other calls. It paid for itself immediately.",
    quoteName: "Marcus Thompson",
    quoteRole: "Owner"
  }
];

const homeServicesContactCTA = createIndustryContactCTA("Home Services", "Free marketing audit for contractors");

const homeServicesBlogPosts = [
  {
    title: "Why HVAC Companies Are Losing Customers to AI Search",
    excerpt: "ChatGPT and Google AI are changing how homeowners find contractors. Here's how to stay visible.",
    date: "Jan 15, 2025",
    author: "Mike Thompson",
    readTime: "7 min read",
    category: "AI & SEO"
  },
  {
    title: "The $500 Phone Call: What Missed Calls Really Cost Contractors",
    excerpt: "A deep dive into the true cost of every unanswered call and how AI receptionists are changing the game.",
    date: "Jan 10, 2025",
    author: "Sarah Chen",
    readTime: "6 min read",
    category: "Business Growth"
  },
  {
    title: "Local SEO for Multi-Location Service Businesses: A Complete Guide",
    excerpt: "How to rank in every city you serve without creating duplicate content penalties.",
    date: "Jan 5, 2025",
    author: "David Martinez",
    readTime: "8 min read",
    category: "Local SEO"
  }
];

const HomeServices = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing for Home Service Contractors | HVAC, Plumbing, Electrical, Roofing SEO</title>
        <meta 
          name="description" 
          content="Grow your home service business with AI-powered marketing. SEO, AI receptionist, and reputation management for HVAC, plumbers, electricians, roofers & remodelers." 
        />
        <meta name="keywords" content="HVAC marketing, plumber SEO, electrician marketing, roofing SEO, contractor marketing, home services digital marketing" />
        <link rel="canonical" href="https://growsmallbiz.com/industries/home-services" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with Overlay */}
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
            <div className="max-w-3xl">
              {/* Industry Icons */}
              <div className="flex items-center gap-3 mb-6 animate-fade-up">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Flame className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">HVAC</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Droplets className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Plumbing</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Plug className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Electrical</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Home className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Roofing</span>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Hammer className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Remodeling</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Stop Losing Jobs to
                <span className="text-transparent bg-clip-text bg-gradient-primary"> Missed Calls</span> and
                <span className="text-transparent bg-clip-text bg-gradient-primary"> Invisible Rankings</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                AI-powered marketing built for home service contractors. Get found online, never miss a call, and turn every lead into a booked job—while you focus on the work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/free-assessment" className="inline-flex items-center gap-2">
                    Get Your Free Marketing Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services/ai-receptionist">
                    See AI Receptionist Demo
                  </Link>
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
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Sound Familiar?"
              title="The Challenges Every"
              titleHighlight="Contractor Faces"
              description="You're great at your trade. But marketing? That's a different beast. Here's what's holding your business back."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Our Solutions"
              title="Marketing Built for"
              titleHighlight="Contractors"
              description="Every service we offer is designed specifically for home service businesses. No generic marketing—just what works for your industry."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href}
                  className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl animate-fade-up ${
                    service.highlight 
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary" 
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service.highlight && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    service.highlight ? "bg-primary/20" : "bg-secondary"
                  } group-hover:bg-primary/30`}>
                    <service.icon className={`w-6 h-6 ${service.highlight ? "text-primary" : "text-foreground"}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
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

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <p className="section-subtitle">Why GrowSmallBiz?</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  We Only Work With <span className="text-transparent bg-clip-text bg-gradient-primary">Home Service Pros</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Generic agencies don't understand emergency calls at 2 AM, seasonal demand swings, or why a 4.3-star rating is killing your business. We do.
                </p>

                <div className="space-y-4">
                  {[
                    "AI tools built specifically for contractors and tradespeople",
                    "We understand seasonal marketing and cash flow challenges",
                    "Multi-location SEO expertise for service area businesses",
                    "24/7 AI receptionist trained for home service emergencies",
                    "Reputation management that actually gets reviews",
                    "Transparent reporting focused on leads and revenue, not vanity metrics"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/free-assessment" className="inline-flex items-center gap-2">
                      Get Your Free Audit
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
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
                        <div className="font-semibold text-foreground">New Lead Captured</div>
                        <div className="text-sm text-muted-foreground">AI Receptionist booked AC repair</div>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">Just now</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Star className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">New 5-Star Review</div>
                        <div className="text-sm text-muted-foreground">"Best plumber in town!"</div>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">2 min ago</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <TrendingDown className="w-6 h-6 text-primary rotate-180" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Ranking Improved</div>
                        <div className="text-sm text-muted-foreground">Now #2 for "electrician near me"</div>
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
          title="Success Stories"
          subtitle="From our contractor clients"
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
          subtitle="Common questions about marketing for home service businesses"
          contactCTA={homeServicesContactCTA}
        />

        {/* Blog Section */}
        <BlogSection 
          posts={homeServicesBlogPosts}
          title="Insights for Contractors"
          subtitle="Tips and strategies for home service businesses"
          viewAllLink="/blog"
        />

        {/* Person CTA */}
        <PersonCTA
          title="Ready to Grow Your Contracting Business?"
          description="Get a free marketing audit and discover exactly how we can help you get more calls, more jobs, and more 5-star reviews."
        />

        {/* Consultation Form */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </>
  );
};

export default HomeServices;
