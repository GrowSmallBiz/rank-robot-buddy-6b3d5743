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
  MapPin, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Shield, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  UserPlus, 
  RefreshCw, 
  DollarSign,
  Users,
  Target,
  PhoneCall,
  Zap,
  Megaphone,
  Star,
  Puzzle,
  Layers,
  LineChart,
  Handshake,
  Wrench,
  HeartPulse,
  Scale,
  Calculator,
  Briefcase
} from "lucide-react";
import { Helmet } from "react-helmet";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

// Stats data for homepage
const homepageStats = [
  { value: "2-4x", label: "Customer Growth", icon: TrendingUp },
  { value: "24/7", label: "AI Automation", icon: Bot },
  { value: "100%", label: "Transparency", icon: Eye },
  { value: "15+", label: "Hours Saved/Week", icon: Clock },
];

// Homepage-priority services only (per blueprint)
const services = [
  {
    title: "Website Design",
    description: "Conversion-focused websites with clear messaging and calls-to-action built for local service businesses.",
    features: [
      "Designed to Convert Visitors Into Leads",
      "On-Brand Messaging & Clear CTAs",
      "Mobile Responsive & Fast Loading",
      "Built-In Call Tracking",
    ],
    href: "/services/website-design",
    icon: Globe,
  },
  {
    title: "Local SEO",
    description: "AI-powered SEO with Google Business Profile optimization, citations, and local search strategies.",
    features: [
      "Google Business Profile Optimization",
      "Local Citation Building",
      "AI-Powered Keyword Strategy",
      "Answer & Generative Engine Optimization",
    ],
    href: "/services/local-seo",
    icon: MapPin,
  },
  {
    title: "Google & Meta Ads",
    description: "Strategic paid campaigns with full-funnel tracking to generate qualified leads consistently.",
    features: [
      "Google & Bing PPC Campaigns",
      "Facebook & Instagram Ads",
      "Retargeting & Lead Nurturing",
      "Transparent Performance Dashboard",
    ],
    href: "/services/paid-media",
    icon: Megaphone,
  },
  {
    title: "Reputation Management",
    description: "Build trust and grow your online reputation with automated review collection and AI-powered responses.",
    features: [
      "Automated Review Requests",
      "AI-Powered Review Responses",
      "Monitor & Manage Online Reputation",
      "Build Trust Signals for Search",
    ],
    href: "/services/reputation",
    icon: Star,
  },
  {
    title: "CRM & Automation",
    description: "Convert more leads into paying customers with intelligent follow-up and pipeline management.",
    features: [
      "Automated Email & SMS Follow-Ups",
      "Lead Nurturing & Pipeline Management",
      "Smart Templates & Sequences",
      "Never Lose a Lead Again",
    ],
    href: "/services/crm",
    icon: Users,
  },
  {
    title: "AI Receptionist",
    description: "Never miss a lead with 24/7 AI-powered responses across calls, chat, SMS, and social media.",
    features: [
      "AI Voice Receptionist for Inbound Calls",
      "Website Chat, SMS & Social Messaging",
      "Qualify & Book Appointments 24/7",
      "Free Up Your Team's Time",
    ],
    href: "/services/ai-employee",
    icon: Bot,
  },
];

// Industries (focused, per blueprint)
const industries = [
  {
    title: "Home Services",
    description: "HVAC, plumbing, roofing, remodeling, and more — get found and booked by homeowners in your area.",
    icon: Wrench,
    href: "/industries/home-services",
  },
  {
    title: "Healthcare & Wellness",
    description: "Dental, chiropractic, med spa, and wellness practices — attract and retain more patients.",
    icon: HeartPulse,
    href: "/industries/dental",
  },
  {
    title: "Legal",
    description: "Law firms and attorneys — build authority, generate consultations, and grow your practice.",
    icon: Scale,
    href: "/industries/realtors",
  },
  {
    title: "Accounting & Financial Services",
    description: "CPAs, bookkeepers, and financial advisors — become the trusted local choice.",
    icon: Calculator,
    href: "/industries/realtors",
  },
  {
    title: "Professional Services",
    description: "Consultants, agencies, and B2B service providers — stand out and win more clients.",
    icon: Briefcase,
    href: "/industries/realtors",
  },
];

// How It Works steps (per blueprint)
const processSteps = [
  {
    step: "01",
    title: "Free Strategy Call",
    description: "We learn about your business, goals, and current marketing. No pressure, just clarity.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Review & Analysis",
    description: "We audit your online presence, competitors, and opportunities to find quick wins and long-term growth paths.",
    icon: Search,
  },
  {
    step: "03",
    title: "Custom Growth Plan",
    description: "You receive a tailored marketing plan with clear priorities, timelines, and expected outcomes.",
    icon: Target,
  },
  {
    step: "04",
    title: "Implementation & Optimization",
    description: "We execute, monitor, and continuously optimize your campaigns to maximize results.",
    icon: TrendingUp,
  },
];

// Homepage FAQs (high-intent, concise per blueprint)
const homepageFAQs = [
  {
    question: "What services does GrowSmallBiz offer?",
    answer: "We provide an integrated digital marketing system for local service businesses: website design, local SEO, Google and Meta ads, reputation management, CRM and automation, and AI-powered lead handling — all working together as one connected platform."
  },
  {
    question: "Who do you work with?",
    answer: "We specialize in local service businesses — home services, healthcare and wellness practices, legal firms, accounting and financial services, and professional service providers. If you serve customers in a local area, we can help you grow."
  },
  {
    question: "How long does it take to see results?",
    answer: "Paid advertising campaigns typically show improvements within 2–4 weeks. SEO results build over 60–90 days. Most clients see meaningful, measurable growth within the first 3 months across all channels."
  },
  {
    question: "Do I need to use all your services together?",
    answer: "No — we tailor your plan to your needs and budget. That said, our clients see the best results when their marketing channels work together as a connected system rather than in isolation."
  },
  {
    question: "What happens on the free strategy call?",
    answer: "We review your current online presence, discuss your goals, and identify the biggest opportunities for growth. You'll leave the call with clear next steps — whether or not you decide to work with us."
  },
  {
    question: "How is GrowSmallBiz different from other agencies?",
    answer: "We focus exclusively on local service businesses. Our connected system replaces fragmented tools with one integrated platform — so nothing falls through the cracks. You get full transparency, real reporting, and a dedicated team that understands your market."
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses</title>
        <meta name="description" content="Get more leads, stronger visibility, and better conversion with AI-powered digital marketing built for local service businesses. Website design, SEO, ads, CRM, and AI automation — all in one connected system." />
      </Helmet>
      <PageJsonLd
        pageType="WebPage"
        name="GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses"
        description="Get more leads, stronger visibility, and better conversion with AI-powered digital marketing built for local service businesses."
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
            "description": "AI-powered digital marketing agency specializing in local service businesses.",
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

      {/* ========== 1. HERO SECTION ========== */}
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
                AI-Powered Marketing for Local Businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              More Leads. Stronger Visibility.{" "}
              <span className="text-gradient">Faster Growth.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up delay-200">
              The Connected Digital Marketing System Built for Local Service Businesses
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-300">
              AI-powered SEO, strategic paid ads, reputation management, 24/7 AI receptionist, 
              and automated CRM — all working together so you get found, get chosen, and grow.
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
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. PROBLEM → SOLUTION COMPARISON ========== */}
      <section className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">From Fragmented to Focused</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Stop Juggling Tools. Start Growing.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fragmented Marketing */}
            <div className="bg-background/80 border border-ghl-icon rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Fragmented Marketing</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Too Many Tools:", desc: "Juggling 5–8 platforms that don't talk to each other" },
                  { title: "Leads Slip Through:", desc: "Prospects enter one channel and get lost before anyone follows up" },
                  { title: "Wasted Ad Budget:", desc: "Running campaigns without knowing what's actually driving revenue" },
                  { title: "Time Drain:", desc: "Spending 15+ hours a week managing marketing instead of serving clients" },
                  { title: "Inconsistent Results:", desc: "Feast-or-famine lead flow with no predictable pipeline" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    <span className="text-sm"><strong className="text-foreground">{item.title}</strong> {item.desc}</span>
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
                <h3 className="text-xl font-display font-bold text-foreground">Connected Growth System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "One Connected Platform:", desc: "Every channel feeds the same pipeline — no gaps, no handoffs" },
                  { title: "Automated Follow-Up:", desc: "Leads get instant responses 24/7, even when your team is off the clock" },
                  { title: "Full Attribution:", desc: "See exactly which campaigns bring real customers so you invest in what works" },
                  { title: "Hands-Off Operation:", desc: "Your marketing runs automatically while you focus on your business" },
                  { title: "Predictable Growth:", desc: "Consistent lead flow that builds a reliable, growing pipeline" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>{item.title}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. CORE SERVICES OVERVIEW ========== */}
      <section id="services" className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Everything You Need to{" "}
              <span className="text-gradient">Grow Locally</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Six core services that work together as one connected system — so nothing falls through the cracks.
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
                  {service.features.map((feature, featureIndex) => (
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
        </div>
      </section>

      {/* ========== 4. INDUSTRIES WE SERVE ========== */}
      <section className="section-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Built for{" "}
              <span className="text-gradient">Local Service Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand your market, your customers, and what it takes to win locally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.href}
                className="bg-background/80 border border-ghl-icon rounded-xl p-6 text-center space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base">{industry.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. WHY GROWSMALLBIZ / DIFFERENTIATORS + STATS ========== */}
      <WhyChooseSection 
        title="Why Local Businesses Choose GrowSmallBiz"
        subtitle="Your Connected Growth Partner"
        description="We replace fragmented marketing with one integrated system — built for local service businesses that want real results, real transparency, and real growth."
        items={[
          {
            title: "One Connected System",
            description: "Your website, SEO, ads, CRM, and AI tools all work together in one platform — no gaps, no data silos.",
            icon: Layers,
          },
          {
            title: "Speed to Lead",
            description: "AI-powered follow-up ensures every lead gets an instant response — 24/7, even after hours.",
            icon: Zap,
          },
          {
            title: "Full Transparency",
            description: "You see exactly where every dollar goes and how it performs. No black box reporting.",
            icon: Eye,
          },
          {
            title: "Local Business Experts",
            description: "We focus exclusively on local service businesses. We know your market, your customers, and what works.",
            icon: Target,
          },
          {
            title: "Measurable Results",
            description: "Advanced call tracking and attribution show which campaigns bring real customers — so we double down on what works.",
            icon: LineChart,
          },
          {
            title: "Automation That Saves Time",
            description: "From review requests to lead follow-up to appointment booking — we automate the tasks that drain your time.",
            icon: RefreshCw,
          },
        ]}
      />

      <AnimatedStatsSection stats={homepageStats} columns={4} />

      {/* ========== 6. SOCIAL PROOF: TESTIMONIALS + CASE STUDIES ========== */}
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle="Real Results, Real Businesses"
      />

      {/* Real Results Across Home Service Campaigns — PRESERVED */}
      <HomeCaseStudySection />

      {/* ========== 7. HOW IT WORKS ========== */}
      <section className="section-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              From Strategy Call to{" "}
              <span className="text-gradient">Measurable Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A simple, proven process to get your marketing working — without the guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-background/80 border border-ghl-icon rounded-xl p-6 text-center space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary/30 font-display font-bold text-4xl">{step.step}</div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <Link to="/free-assessment">
              <Button variant="hero" size="lg" className="animate-fade-up">
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 8. FOUNDER CREDIBILITY + MID-PAGE CTA ========== */}
      <CardCTA 
        title="Let's Build Your Growth Engine"
        description="Get a free strategy call and discover how our connected marketing system can help your local business get more leads, better visibility, and stronger conversion."
        buttonText="Get Free Strategy Call"
        buttonHref="/free-assessment"
      />

      {/* ========== 9. FAQ ACCORDION ========== */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions from local business owners"
        faqs={homepageFAQs}
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions?",
          description: "We're here to help. Let's talk about what's possible for your business.",
          tagline: "Let's grow your business together.",
        }}
      />

      {/* ========== 10. FINAL CTA + CONSULTATION FORM ========== */}
      <CardCTA 
        title="Ready to Grow Your Local Business?"
        description="Stop losing leads to competitors with faster responses. Get AI-powered marketing that works 24/7 to grow your business."
        buttonText="Get Free Strategy Call"
        buttonHref="/free-assessment"
      />

      <ConsultationFormSection />

      <Footer />
    </div>
  );
};

export default Index;
