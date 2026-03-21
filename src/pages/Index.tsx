import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { baseContactCTA } from "@/config/contactCTA";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HomeCaseStudySection } from "@/components/sections/HomeCaseStudySection";
import heroImage from "@/assets/homepage-hero-bg.jpg";
import { 
  ArrowRight, 
  Bot, 
  Search, 
  Globe, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Star,
  MessageCircle,
  Layers,
  Handshake,
  Puzzle,
  Zap,
  Megaphone,
  Users,
  PhoneCall,
  ClipboardCheck,
  Rocket,
  Settings,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

// Stats data for homepage — supportable values
const homepageStats = [
  { value: "1", label: "Connected System", icon: Layers },
  { value: "6", label: "Core Services", icon: Puzzle },
  { value: "24/7", label: "AI Lead Response", icon: Bot },
  { value: "100%", label: "Transparent Reporting", icon: Eye },
];

// Services data — reduced to 6 core services per document
const services = [
  {
    title: "Website Design",
    description: "Build trust quickly and turn more visitors into calls, form submissions, and booked appointments.",
    features: [
      "Conversion-focused design",
      "On-brand messaging",
      "Clear calls-to-action",
      "Mobile responsive",
    ],
    href: "/services/website-design",
    icon: Globe,
  },
  {
    title: "Managed AI SEO",
    description: "Improve your visibility when nearby customers are searching for your services.",
    features: [
      "Local search optimization",
      "GBP & Map Pack optimization",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
    ],
    href: "/services/technical-seo",
    icon: Search,
  },
  {
    title: "Google & Meta Ads",
    description: "Generate qualified inquiries with campaigns aligned to the right landing experience and follow-up.",
    features: [
      "Google & Meta ad campaigns",
      "Landing page alignment",
      "Full-funnel tracking",
      "Retargeting campaigns",
    ],
    href: "/services/paid-media",
    icon: Megaphone,
  },
  {
    title: "Reputation Management",
    description: "Strengthen trust with systems that help you earn and showcase reviews consistently.",
    features: [
      "Automated review requests",
      "AI-powered review replies",
      "Reputation monitoring",
      "Trust signal building",
    ],
    href: "/services/reputation-management",
    icon: Star,
  },
  {
    title: "CRM & Marketing Automation",
    description: "Organize leads, automate follow-up, and reduce missed opportunities.",
    features: [
      "Lead pipeline management",
      "Automated email & SMS follow-up",
      "Appointment scheduling",
      "Performance dashboards",
    ],
    href: "/services/crm",
    icon: Users,
  },
  {
    title: "AI Receptionist & Lead Handling",
    description: "Stay responsive even when you are busy with AI-powered voice and chat support.",
    features: [
      "AI voice receptionist",
      "Website, SMS & social chat",
      "24/7 lead qualification",
      "Automated appointment booking",
    ],
    href: "/services/ai-receptionist",
    icon: Bot,
  },
];

// Homepage FAQs — high-intent questions per document
const homepageFAQs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We primarily work with local service businesses, including home services, healthcare, legal, accounting, and other professional service businesses."
  },
  {
    question: "Do I need every service at once?",
    answer: "No. We focus on the priorities most likely to create meaningful impact first, then expand as needed."
  },
  {
    question: "How soon can we get started?",
    answer: "That depends on the scope, but the first step is a strategy call so we can understand your goals and identify the best next steps."
  },
  {
    question: "How long does it take to see results?",
    answer: "Some improvements, such as lead-response workflows or landing-page fixes, can help quickly. SEO and broader growth systems typically take longer and improve over time."
  },
  {
    question: "Do you only help with SEO?",
    answer: "No. GrowSmallBiz helps with websites, SEO, paid ads, reviews, CRM automation, and AI-powered lead handling."
  },
  {
    question: "Can you help us follow up with leads faster?",
    answer: "Yes. That is one of the biggest opportunities for many local businesses. CRM automation and AI-powered lead handling can dramatically improve response times and reduce missed opportunities."
  },
];

// How It Works steps per document
const howItWorksSteps = [
  {
    title: "Strategy Call",
    description: "We learn about your goals, marketing gaps, and where better systems can create the biggest impact.",
    icon: PhoneCall,
  },
  {
    title: "Review & Analysis",
    description: "We evaluate your website, local visibility, reviews, follow-up systems, and competitive landscape.",
    icon: ClipboardCheck,
  },
  {
    title: "Build & Launch",
    description: "We implement the right mix of website improvements, SEO, ads, automation, and AI lead handling.",
    icon: Rocket,
  },
  {
    title: "Optimize & Grow",
    description: "As data comes in, we improve what is working and refine what is not.",
    icon: Settings,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses</title>
        <meta name="description" content="Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up working together for local service businesses." />
      </Helmet>
      <PageJsonLd
        pageType="WebPage"
        name="GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses"
        description="Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up for local service businesses."
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
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        
        {/* Background Effects */}
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                AI-Powered Digital Marketing for Local Service Businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Get More Qualified Local Leads With a{" "}
              <span className="text-gradient">Smarter Marketing System</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up delay-200">
              Websites, SEO, paid ads, CRM automation, and AI-powered follow-up — working together to help your business get found, respond faster, and convert more opportunities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-300">
              You started your business to serve clients — not to spend nights chasing leads, fixing disconnected tools, or guessing which marketing channel is actually working. GrowSmallBiz helps local service businesses build a connected growth system so your website, visibility, follow-up, and reputation all support the same goal: steady, measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
              <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=home&utm_campaign=strategy-session" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="#services">
                <Button variant="heroOutline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.5s" }}>
              Built for home services, healthcare, legal, accounting, and other local service businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Problem → Solution Comparison Section */}
      <section className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">From Fragmented to Focused</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Most Local Businesses Are Losing Leads They Never Knew They Had
            </h2>
            <p className="text-lg text-muted-foreground">
              The problem is usually not effort. It is the gap between the tools and tactics you are already using.
            </p>
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
              <ul className="space-y-4">
                {[
                  "Separate tools and platforms that do not work together.",
                  "Leads slipping through the cracks because follow-up is delayed or inconsistent.",
                  "Weak local visibility when nearby customers are actively searching.",
                  "Unclear tracking that makes it hard to know what is driving revenue.",
                  "Feast-or-famine lead flow instead of steady growth.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
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
                <h3 className="text-xl font-display font-bold text-foreground">A Connected Growth System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Website, SEO, ads, reviews, and follow-up all support one conversion path.",
                  "Faster response times with automation and AI-powered lead handling.",
                  "Stronger local visibility and trust before the first conversation happens.",
                  "Clearer attribution so you can see what is working.",
                  "More predictable growth because the system is working together.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 4-Card Method Section */}
      <section className="section-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A Clear Path from Strategy to{" "}
              <span className="text-gradient">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              You do not need everything at once. We focus on the priorities most likely to create meaningful impact first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="bg-background/80 border border-ghl-icon rounded-xl p-6 text-center space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=home&utm_campaign=strategy-session" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="animate-fade-up">
                Schedule Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section — 6 Core Services */}
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
              GrowSmallBiz brings together the core services local businesses need to attract leads, improve conversions, and stay organized as they grow.
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
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-ghl-icon shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.href}>
                  <Button variant="outline" size="sm" className="w-full mt-4 border-ghl-icon/50 hover:bg-ghl-icon/10 hover:border-ghl-icon">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Link to="/services/technical-seo">
              <Button variant="heroOutline" size="lg">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder CTA Banner */}
      <CardCTA 
        title="Ready to Build a Smarter Growth System?"
        description="Book a free strategy call to review your current marketing, identify missed opportunities, and see what the next best steps could look like for your business."
        buttonText="Schedule My Digital Growth Strategy Session"
        buttonHref="https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=home&utm_campaign=strategy-session"
      />

      {/* Why Choose GrowSmallBiz */}
      <WhyChooseSection 
        title="Why Local Service Businesses Choose GrowSmallBiz"
        subtitle="Why GrowSmallBiz"
        description="GrowSmallBiz is built around one idea: your marketing should work as a system, not a collection of disconnected tactics."
        items={[
          {
            title: "Strategy + Execution Together",
            description: "You get practical planning and real implementation support, not just recommendations.",
            icon: Handshake,
          },
          {
            title: "Built for Local Growth",
            description: "The messaging, channels, and conversion flow are designed for local business growth.",
            icon: TrendingUp,
          },
          {
            title: "One Connected System",
            description: "Your website, SEO, ads, reviews, and follow-up should support the same goal.",
            icon: Layers,
          },
          {
            title: "Faster Lead Response",
            description: "Automation and AI help you respond while interest is still high.",
            icon: Zap,
          },
          {
            title: "Clear Reporting & Attribution",
            description: "Know where inquiries are coming from and what is producing results.",
            icon: BarChart3,
          },
          {
            title: "Bay Area-Based, Relationship-Driven",
            description: "A more practical, collaborative approach built around real business needs.",
            icon: Shield,
          },
        ]}
      />

      {/* Stats */}
      <AnimatedStatsSection stats={homepageStats} columns={4} />

      {/* Testimonials */}
      <TestimonialsSection 
        subtitle="Real feedback from business owners who wanted better visibility, better systems, and better follow-up."
      />

      {/* Real Results Across Home Service Campaigns */}
      <HomeCaseStudySection />

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Answers to common questions local service business owners ask before getting started."
        faqs={homepageFAQs}
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your business together.",
        }}
      />

      {/* Final CTA Strip */}
      <CardCTA 
        title="Let's Build Your Growth Engine"
        description="If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call."
        buttonText="Schedule My Digital Growth Strategy Session"
        buttonHref="https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=home&utm_campaign=strategy-session"
      />

      {/* Consultation Form Section */}
      <ConsultationFormSection />

      <Footer />
    </div>
  );
};

export default Index;
