import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { baseContactCTA } from "@/config/contactCTA";
import { HomeCaseStudySection } from "@/components/sections/HomeCaseStudySection";
import heroImage from "@/assets/homepage-hero-bg.jpg";
import { 
  ArrowRight, 
  Bot, 
  Search, 
  Globe, 
  Star, 
  Users,
  Zap,
  XCircle, 
  CheckCircle2, 
  Megaphone,
  Home,
  HeartPulse,
  Scale,
  Calculator,
  Briefcase,
  Lightbulb,
  Target,
  Gauge,
  ClipboardList,
  Wrench,
  BarChart3,
  PhoneCall,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

// Services data — 6 homepage-priority services only
const services = [
  {
    title: "Website Design",
    description: "Modern, conversion-focused websites that build trust quickly and turn more visitors into calls, form fills, and booked consultations.",
    href: "/services/website-design",
    icon: Globe,
  },
  {
    title: "Local SEO",
    description: "Improve your visibility in local search with stronger site structure, on-page optimization, local relevance, and Google Business Profile support.",
    href: "/services/local-seo",
    icon: Search,
  },
  {
    title: "Google & Meta Ads",
    description: "Generate qualified traffic with paid campaigns built around the right offer, landing experience, and follow-up system.",
    href: "/services/paid-media",
    icon: Megaphone,
  },
  {
    title: "Reputation Management",
    description: "Build trust and improve click-through behavior with consistent review generation and better presentation across local channels.",
    href: "/services/reputation",
    icon: Star,
  },
  {
    title: "CRM & Automation",
    description: "Organize leads, automate follow-up, and reduce missed opportunities with systems that keep your pipeline moving.",
    href: "/services/crm",
    icon: Users,
  },
  {
    title: "AI Receptionist & Lead Handling",
    description: "Stay responsive even when you are busy with AI-powered voice and chat tools that answer questions, capture details, and move leads to the next step.",
    href: "/services/ai-employee",
    icon: Bot,
  },
];

// Industries data
const industries = [
  {
    title: "Home Services",
    description: "For HVAC companies, plumbers, electricians, remodelers, and other service businesses that need consistent lead flow and stronger local visibility.",
    href: "/industries/home-services",
    icon: Home,
  },
  {
    title: "Healthcare & Wellness",
    description: "For practices and providers that need a polished digital presence, stronger reviews, and better systems for generating appointments.",
    href: "/industries/med-spa",
    icon: HeartPulse,
  },
  {
    title: "Legal",
    description: "For law firms that need trust-building messaging, local visibility, and conversion-focused lead capture in competitive markets.",
    href: "#",
    icon: Scale,
  },
  {
    title: "Accounting & Financial Services",
    description: "For CPAs, bookkeepers, and advisors who depend on credibility, local trust, and a professional online presence.",
    href: "#",
    icon: Calculator,
  },
  {
    title: "Professional Services",
    description: "For consultants and service-based businesses that want steadier lead generation and better follow-up than referrals alone can provide.",
    href: "#",
    icon: Briefcase,
  },
];

// Why GrowSmallBiz differentiators
const differentiators = [
  {
    title: "Strategy Before Tactics",
    description: "We start with the customer journey, business goals, and conversion path before adding more marketing activity.",
    icon: Lightbulb,
  },
  {
    title: "Conversion-Focused Execution",
    description: "Your website, landing pages, forms, and follow-up systems are built around turning visitors into real inquiries.",
    icon: Target,
  },
  {
    title: "Speed-to-Lead Systems",
    description: "CRM workflows, automation, and AI lead handling help you respond faster and reduce missed opportunities.",
    icon: Gauge,
  },
  {
    title: "Clear Reporting & Optimization",
    description: "See what is happening, what is improving, and what should be adjusted next — without vague marketing noise.",
    icon: BarChart3,
  },
];

// How it works steps
const howItWorksSteps = [
  {
    step: "Step 1",
    title: "Free Strategy Call",
    description: "We learn about your business, your goals, and where your current digital presence is underperforming.",
    icon: PhoneCall,
  },
  {
    step: "Step 2",
    title: "Review & Analysis",
    description: "We review your website, visibility, reviews, follow-up systems, and competitive landscape to identify the biggest opportunities.",
    icon: ClipboardList,
  },
  {
    step: "Step 3",
    title: "Custom Growth Plan",
    description: "We recommend the right priorities based on your business model, current gaps, and growth goals.",
    icon: Lightbulb,
  },
  {
    step: "Step 4",
    title: "Implementation & Optimization",
    description: "We build, configure, and improve the right pieces so your marketing becomes more connected, measurable, and effective over time.",
    icon: Wrench,
  },
];

// Homepage FAQs — cleaned up copy
const homepageFAQs = [
  {
    question: "What makes GrowSmallBiz different from other digital marketing agencies?",
    answer: "We focus exclusively on local service businesses. Our integrated marketing system replaces fragmented tools with a connected approach that tracks every lead from first click to inquiry. Unlike general agencies, we specialize in helping local businesses build smarter visibility, lead generation, and follow-up systems that actually work."
  },
  {
    question: "Do I really need an integrated digital marketing approach?",
    answer: "Most businesses struggle with scattered tools that don't communicate, lost leads from slow follow-up, and wasted ad spend without proper tracking. An integrated system eliminates these problems by creating a seamless customer journey from first ad click through landing page, nurturing, and conversion — all connected and trackable."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We specialize in local service businesses including HVAC, plumbing, electrical, remodeling, healthcare providers, law firms, accounting firms, and other professional service businesses. Our clients see measurable improvements in visibility, lead flow, and conversion through our connected growth approach."
  },
  {
    question: "What's included in your growth system?",
    answer: "Our system brings together conversion-focused website design, local SEO optimization, paid ad management (Google and Meta), reputation management, CRM automation, and AI-powered lead handling. Everything works together as one connected system so nothing falls through the cracks."
  },
  {
    question: "How quickly can you start working on my business?",
    answer: "After our initial strategy call and agreement, we begin with a 2–3 week strategic onboarding phase. Website development and SEO optimization typically launch by week 3–4, with paid campaigns going live once we have proper tracking and conversion systems in place."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Results vary by industry and market, but our integrated approach typically produces measurable improvements in visibility, lead generation, and conversion rates within the first 3–6 months. Our case studies show real campaign outcomes including increased calls, lower cost per lead, and stronger local search presence."
  },
  {
    question: "How long does it take to see results?",
    answer: "Paid advertising campaigns typically show performance improvements within 3–60 days. SEO results follow a longer trajectory, with incremental improvements beginning around 60 days. Most clients see meaningful, measurable results within 3 months across all channels."
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses</title>
        <meta name="description" content="Get more qualified leads, stronger local visibility, and faster follow-up with a connected marketing system built for local service businesses." />
      </Helmet>
      <PageJsonLd
        pageType="WebPage"
        name="GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses"
        description="Get more qualified leads, stronger local visibility, and faster follow-up with a connected marketing system built for local service businesses."
        url="/"
        breadcrumbs={[]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GrowSmallBiz Digital Marketing",
            "url": "https://grow-small-biz.org",
            "telephone": "+1-925-886-3724",
            "description": "AI-powered SEO and digital marketing agency specializing in local service businesses.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                AI-Powered Digital Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              AI-Powered Digital Marketing for{" "}
              <span className="text-gradient">Local Service Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up delay-200">
              Get more qualified leads, stronger local visibility, and faster follow-up with a connected marketing system built for growth.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-300">
              GrowSmallBiz helps local service businesses build a smarter digital growth system — combining websites, SEO, paid ads, reputation management, CRM automation, and AI-powered lead handling so your marketing works together instead of in pieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="#services">
                <Button variant="heroOutline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Comparison Section */}
      <section className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Why Businesses Get Stuck</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Most Local Businesses Are Losing Leads They Never Knew They Had
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fragmented Approach */}
            <div className="bg-background/80 border border-ghl-icon rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">The Fragmented Approach</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You may have a website, run some ads, and ask happy clients for reviews. But when those pieces are disconnected, opportunities slip away. A visitor lands on your site, no one follows up fast enough, and your business loses momentum without realizing why.
              </p>
            </div>

            {/* Connected Growth System */}
            <div className="bg-background/80 border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                Our Solution
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">A More Connected Growth System</h3>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                GrowSmallBiz helps close those gaps by bringing visibility, lead generation, follow-up, and conversion into one connected system. The result is better clarity, stronger response speed, and a cleaner path from traffic to inquiry.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/free-assessment">
              <Button variant="hero" size="lg" className="animate-fade-up">
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Core Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Everything Your Business Needs to Grow —{" "}
              <span className="text-gradient">In One Place</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              GrowSmallBiz brings together the services local businesses need to improve visibility, capture more leads, and follow up more effectively — without forcing you to piece everything together across disconnected vendors and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 space-y-4 animate-fade-up relative transition-all hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
                style={{ animationDelay: `${index * 0.05}s`, border: '2px solid #17a2b8ff', backgroundColor: '#2d465cff' }}
              >
                <div className="w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-ghl-icon" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-xl">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Link to={service.href}>
                  <Button variant="outline" size="sm" className="w-full mt-4 border-ghl-icon/50 hover:bg-ghl-icon/10 hover:border-ghl-icon">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="#services">
              <Button variant="heroOutline" size="lg" className="animate-fade-up">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Who We Help</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Built for Local Service Businesses That Need Visibility, Trust, and Fast Follow-Up
            </h2>
            <p className="text-lg text-muted-foreground">
              We work best with businesses where local visibility, reputation, and speed-to-lead directly affect revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-background/80 border border-ghl-icon rounded-xl p-6 space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries/home-services">
              <Button variant="heroOutline" size="lg" className="animate-fade-up">
                See Industries We Serve
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why GrowSmallBiz */}
      <section className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Why GrowSmallBiz</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A More Connected Growth System — Not a Collection of Random Marketing Tactics
            </h2>
            <p className="text-lg text-muted-foreground">
              Many businesses end up with a website from one place, ads from another, a CRM nobody fully uses, and follow-up that depends on someone remembering to do it. GrowSmallBiz takes a more integrated approach so your marketing assets support the same business goal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-background/80 border border-ghl-icon rounded-xl p-6 space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Proof Strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "24/7 AI Lead Handling",
              "1 Connected Growth System",
              "6 Core Services Working Together",
              "5 Priority Industry Groups",
            ].map((item, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-sm font-medium text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results — Case Studies */}
      <HomeCaseStudySection />

      {/* How It Works */}
      <section className="section-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A Clear Process From{" "}
              <span className="text-gradient">Strategy to Execution</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You do not need to have every detail figured out before getting started. The process begins with clarity — where you are now, what is missing, and what the next best steps should be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="bg-background/80 border border-ghl-icon rounded-xl p-6 text-center space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  {step.step}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/free-assessment">
              <Button variant="hero" size="lg" className="animate-fade-up">
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Credibility + Mid-Page CTA */}
      <CardCTA 
        title="Let's Talk About What's Next for Your Business"
        description="Not sure where to start? That's exactly what the strategy call is for. We'll look at your current digital presence, identify your biggest opportunities, and help you understand what the next best steps could be."
        buttonText="Get Free Strategy Call"
        buttonHref="/free-assessment"
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with GrowSmallBiz"
        faqs={homepageFAQs}
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions?",
          description: "We're here to help. Reach out for a no-pressure strategy conversation.",
          tagline: "Let's grow your business together.",
        }}
      />

      {/* Final CTA */}
      <CardCTA 
        title="Let's Build Your Growth Engine"
        description="Start with a free strategy call. We'll look at your current digital presence, identify your biggest opportunities, and help you understand what the next best steps could be."
        buttonText="Get Free Strategy Call"
        buttonHref="/free-assessment"
      />

      {/* Consultation Form */}
      <ConsultationFormSection />

      <Footer />
    </div>
  );
};

export default Index;
