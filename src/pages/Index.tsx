import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
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
  MessageCircle,
  Linkedin,
  Camera,
  Layers,
  LineChart,
  Handshake,
  Puzzle
} from "lucide-react";
import { Helmet } from "react-helmet";

// Services data
const services = [
  {
    title: "Website That Converts",
    description: "Designed to convert websites with on-brand messaging and clear calls-to-action.",
    features: [
      "Designed to Convert Websites",
      "On-brand messaging",
      "Clear Calls-to-Actions",
      "Mobile Responsive",
      "Fast Loading Speed",
      "Call Tracking",
    ],
    href: "/services/website-design",
    icon: Globe,
  },
  {
    title: "AI Optimized SEO",
    description: "Comprehensive SEO with competitors analysis, GBP optimization, and AI-powered strategies.",
    features: [
      "Competitors Analysis & Keywords Strategy",
      "GBP & Map Pack Optimization",
      "Citations & Authority Building",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
    ],
    href: "/services/technical-seo",
    icon: Search,
  },
  {
    title: "Google + Facebook/Instagram Ads",
    description: "Strategic paid campaigns with full-funnel tracking and lead nurturing.",
    features: [
      "Facebook/Instagram Ads",
      "Google Local Service Ads",
      "Google & Bing PPC Ads",
      "Proactive Retargeting Campaigns",
      "Email & SMS Lead Nurturing",
      "Transparent Dashboard",
    ],
    href: "/services/paid-media",
    icon: Megaphone,
  },
  {
    title: "Reputation Management",
    description: "Build trust and control your online reputation with automated review management.",
    features: [
      "Build Trust Signal",
      "Control Your Online Reputation",
      "Review Requests & Reminders on Auto Pilot",
      "Auto Review Reply Powered by AI",
      "Automated Email & SMS Followups",
    ],
    href: "/services/reputation",
    icon: Star,
  },
  {
    title: "Social Media Management",
    description: "Stay consistent with scheduled organic posts and platform-specific strategies.",
    features: [
      "Scheduled Organic Posts",
      "Professional Content Tailored to Each Platform",
      "Platform-Specific Strategies",
      "Boost Engagement and Build Trust",
      "Improve Visibility and Local SEO",
    ],
    href: "/services/social-media",
    icon: MessageCircle,
  },
  {
    title: "24x7 AI Employee",
    description: "Never miss a lead with 24/7 instant responses and AI-powered automation.",
    features: [
      "Never Miss a Lead With 24/7 Instant Responses",
      "Handle Calls, Chats, and DMs Automatically",
      "Deliver Consistent, Professional Answers",
      "Qualify Prospects & Book Appointments 24×7",
      "Free Up Your Team's Time",
    ],
    href: "/services/ai-employee",
    icon: Bot,
  },
  {
    title: "AI Powered CRM 24x7",
    description: "Convert more leads into paying customers with intelligent automation.",
    features: [
      "Convert More Leads Into Paying Customers",
      "Email & SMS Templates",
      "Automated Email & SMS followups 24×7",
      "AI Receptionist & Chatbots",
    ],
    href: "/services/crm",
    icon: Users,
  },
  {
    title: "LinkedIn LeadGen",
    description: "Connect with decision-makers and automate outreach with a personal touch.",
    features: [
      "Connect With The Right Decision-Makers",
      "Build Highly Targeted Lead Lists",
      "Automate Outreach With A Personal Touch",
      "Nurture Leads With Consistent Follow-Ups",
      "Stay Visible And Drive More Booked Calls",
    ],
    href: "/services/linkedin",
    icon: Linkedin,
    comingSoon: true,
  },
  {
    title: "Branding Photo+Video",
    description: "Professional headshots and branding photography that builds trust.",
    features: [
      "Professional Headshots",
      "Personal Branding Portraits",
      "Team Photography",
      "High-Quality Images For Trust & Credibility",
    ],
    href: "https://www.680headshots.com/",
    icon: Camera,
    external: true,
  },
];

// Homepage FAQs based on growsmallbiz.io
const homepageFAQs = [
  {
    question: "What makes GrowSmallBiz different from other digital marketing agencies?",
    answer: "As a specialized agency focused exclusively on local small businesses, we understand the unique challenges you face. Our integrated marketing ecosystem replaces fragmented tools with a cohesive system that tracks every lead from first click to final sale. Unlike general agencies, we specialize in helping local professional service businesses dominate their markets with strategy, people and process that actually work for your type of business."
  },
  {
    question: "Do I really need an integrated digital marketing approach?",
    answer: "Absolutely. Most businesses struggle with scattered tools that don't communicate, lost leads in manual handoffs, and wasted ad spend without proper tracking. Our integrated ecosystem eliminates these problems by creating a seamless customer journey from first ad click through landing page, nurturing, and final sale - all automated and trackable."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We specialize in local professional service businesses including accounting firms, law offices, consulting practices, healthcare providers, contractors, and other service-based businesses. Our clients consistently see 2x, 3x, and even 4x growth in their customer base through our proven Digital Dominance Method."
  },
  {
    question: "How do you help businesses achieve 'digital dominance' in their local market?",
    answer: "Our Digital Dominance Method combines strategic web design, aggressive SEO targeting, precision-focused local ads, community-building social media, and reputation management. When every piece of your digital presence works together with laser focus on your local market, you don't just grow – you become the obvious choice for customers in your area."
  },
  {
    question: "What's included in your complete growth package?",
    answer: "Our comprehensive package includes: conversion-optimized website design, SEO optimization with local focus, paid traffic management (Google, Facebook, Instagram, LinkedIn), AI-powered CRM with 24/7 automation, smart dashboard analytics, and professional branding photography/videography. Everything works together as one integrated system."
  },
  {
    question: "How quickly can you start working on my business?",
    answer: "After our initial consultation and agreement, we begin with a 2-3 week strategic onboarding phase. Website development and SEO optimization typically launch by week 3-4, with paid advertising campaigns going live once we have proper tracking and conversion systems in place."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our clients consistently see 2x, 3x, and even 4x growth in their customer base. While specific results vary by industry and market conditions, our integrated approach typically produces measurable improvements in visibility, lead generation, conversion rates, and revenue growth within the first 6-12 months."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results timeline varies by marketing channel. Paid advertising campaigns typically show performance improvements within 3-60 days. SEO results follow a longer trajectory, with incremental improvements beginning around 60 days onwards. Most clients see meaningful, measurable results within 3 months across all channels."
  },
];

// Why choose us data
const whyChooseUs = [
  {
    title: "A Whole Team In Your Corner",
    description: "Get a dedicated Strategic Partner who champions your success, backed by a curated network of SEO experts, PPC specialists, web developers, and copywriters working exclusively on your growth.",
    icon: Users,
  },
  {
    title: "Full Transparency",
    description: "No black box marketing here. You'll see exactly where every dollar goes and how it's performing – because it's your money and your business.",
    icon: Eye,
  },
  {
    title: "Local SMB Marketing Experts",
    description: "We don't chase every industry trend – we focus exclusively on helping local professional service businesses dominate their markets.",
    icon: Target,
  },
  {
    title: "Call Tracking + Reporting",
    description: "Our advanced call tracking shows exactly which campaigns are bringing you real customers on the phone – so we can invest more in what works.",
    icon: PhoneCall,
  },
  {
    title: "Real Results for Real Businesses",
    description: "Our clients consistently see 2x, 3x, and even 4x growth in their customer base. From accounting firms to law offices to consulting practices.",
    icon: TrendingUp,
  },
  {
    title: "Every Piece of the Puzzle",
    description: "Your website, Google presence, reviews, and social media all work as one cohesive system to dominate your local market.",
    icon: Puzzle,
  },
];

// Growth steps data
const growthSteps = [
  {
    title: "Increase Visibility",
    description: "Get found across search, maps, and social media platforms",
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GrowSmallBiz | Digital Marketing & AI Automation for Local Service Businesses</title>
        <meta name="description" content="Done-for-You marketing and AI automation for local service businesses. Achieve digital dominance with AI-powered SEO, paid ads, reputation management, and 24/7 AI assistants." />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Done-for-You Digital Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Your Partner for Digital Growth{" "}
              <span className="text-gradient">And Dominance</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up delay-200">
              "Done-for-You" Marketing And AI Automation for Local Service Businesses
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-300">
              We help home service professionals, health and wellness practitioners, finance professionals, 
              attorneys, automobile repairs and other local service businesses achieve digital dominance — 
              becoming the #1 choice in their market.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-300">
              Through AI-powered SEO Optimization, AI-Optimized Facebook and Google Paid Ads, LinkedIn Outreach, 
              Reputation Management, and a 24/7 AI Voice Receptionist & AI Conversational Assistant, we bring you 
              more client leads and keep more customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Schedule FREE Strategy Session
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

      {/* Fragmented vs Integrated Comparison Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">From Fragmented to Focused</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Marketing That Attracts and Retains
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fragmented Approach */}
            <div className="bg-secondary/30 border border-border rounded-2xl p-8 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">The Fragmented Approach</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Scattered Tools:", desc: "Using 8+ different platforms that don't communicate" },
                  { title: "Lost Opportunities:", desc: "Leads entering through one channel but getting lost in manual handoffs" },
                  { title: "Wasted Ad Spend:", desc: "Running campaigns without proper tracking from click to client" },
                  { title: "Time Drain:", desc: "Spending 15+ hours/week managing marketing instead of serving clients" },
                  { title: "Inconsistent Results:", desc: "Feast or famine cycles with unpredictable lead flow" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    <span className="text-sm"><strong className="text-foreground">{item.title}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrated Ecosystem */}
            <div className="bg-background border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                Our Solution
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Our Integrated Ecosystem</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Complete Customer Journey:", desc: "From first ad click → landing page → nurturing → sale → client" },
                  { title: "No Manual Handoffs:", desc: "Everything flows automatically through your integrated pipeline" },
                  { title: "Full Attribution:", desc: "Track every lead from source to revenue, optimizing what works" },
                  { title: "Hands-Off Operation:", desc: "Your marketing runs 24/7 while you focus on client delivery" },
                  { title: "Predictable Growth:", desc: "Systematic lead generation creates consistent pipeline flow" },
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

      {/* Growth Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Digital Dominance Method</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              We Help Local Businesses Grow Using Our{" "}
              <span className="text-gradient">Proven Method</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {growthSteps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-4 card-hover animate-fade-up"
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
            <p className="text-lg text-muted-foreground mb-8 italic animate-fade-up">
              Why settle for competing when you can dominate? Our all-in-one digital package is specifically 
              designed to make you the undisputed leader in your local area. We combine strategic web design, 
              aggressive SEO targeting, precision-focused local ads, community-building social media, and 
              reputation management that makes competitors irrelevant.
            </p>
            <Link to="/free-assessment">
              <Button variant="hero" size="lg" className="animate-fade-up">
                Schedule FREE Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 section-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Strategic Digital Marketing Solutions</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              We Deliver as Your{" "}
              <span className="text-gradient">Growth Partner</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {service.comingSoon && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                    Coming Soon
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.external ? (
                  <a href={service.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                ) : !service.comingSoon && (
                  <Link to={service.href}>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Why Choose GrowSmallBiz</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Your Growth Marketing Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              Our integrated marketing ecosystem systematically increases your visibility, generates qualified leads, 
              converts prospects into loyal clients, and maximizes customer lifetime value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2-4x", label: "Customer Growth", icon: TrendingUp },
              { value: "24/7", label: "AI Automation", icon: Bot },
              { value: "100%", label: "Transparency", icon: Eye },
              { value: "15+", label: "Hours Saved/Week", icon: Clock },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Transform Your Online Presence Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Be Found Where Your Customers Are Searching
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto italic">
              Why settle for competing when you can dominate? Our all-in-one digital package is specifically 
              designed to make you the undisputed leader in your local area. When every piece of your digital 
              presence works together with laser focus on your local market, you don't just grow – you become 
              the obvious choice for customers in your area.
            </p>
            <Link to="/free-assessment">
              <Button variant="hero" size="xl">
                Schedule My FREE Digital Growth Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our Digital Marketing Services"
        faqs={homepageFAQs}
      />

      {/* Final CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
