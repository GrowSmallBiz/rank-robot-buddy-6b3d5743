import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Phone,
  CheckCircle2,
  ArrowRight,
  Bot,
  Heart,
  Search,
  Zap,
  Shield,
  Hammer,
  Flame,
  Droplets,
  Plug,
  Home
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, hvacBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import homeServicesHeroImage from "@/assets/industry-homeservices-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const trades = [
  { icon: Flame, name: "HVAC" },
  { icon: Droplets, name: "Plumbing" },
  { icon: Plug, name: "Electrical" },
  { icon: Home, name: "Roofing" },
  { icon: Hammer, name: "Remodeling" },
  { icon: Wrench, name: "General Contractors" },
];

const benefits = [
  {
    icon: MapPin,
    title: "Dominate Local Search",
    description: "Rank #1 for '[service] near me', 'emergency [trade] [city]', and service-area-specific searches."
  },
  {
    icon: Phone,
    title: "More Emergency Calls",
    description: "Capture urgent service calls when homeowners need immediate help — broken AC, burst pipes, electrical issues."
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description: "Get recommended by ChatGPT, Google AI, and voice assistants when homeowners ask for help."
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    description: "Build and showcase reviews to become the trusted choice for home services in your community."
  }
];

const services = [
  {
    title: "Local SEO & Map Pack Domination",
    description: "Own the Google Map Pack for every service you offer in every city you serve.",
    features: ["Google Business Profile optimization", "Service area page creation", "Local citation building", "Multi-location management"]
  },
  {
    title: "Emergency & Urgent Service Visibility",
    description: "Be the first call when something breaks — any time of day or night.",
    features: ["24/7 emergency keyword targeting", "Mobile-first optimization", "Click-to-call integration", "Google Local Service Ads (LSA)"]
  },
  {
    title: "AI & Voice Search Optimization",
    description: "Get recommended when homeowners ask Alexa, Siri, or ChatGPT for help.",
    features: ["Answer Engine Optimization", "FAQ schema markup", "Conversational content", "Featured snippet targeting"]
  },
  {
    title: "AI Lead Capture & CRM Automation",
    description: "Never miss a lead — capture, qualify, and book every inquiry automatically.",
    features: ["AI Receptionist for 24/7 call handling", "Automated follow-up sequences", "CRM pipeline management", "Review request automation"]
  }
];

const painPoints = [
  "Losing jobs to competitors who rank higher on Google",
  "Paying too much for leads from HomeAdvisor, Angi, or Thumbtack",
  "Emergency calls going to competitors because they show up first",
  "No system to follow up with leads — they call someone else",
  "Wasting money on ads without tracking which ones actually work"
];

const results = [
  { metric: "312%", label: "Average organic traffic increase" },
  { metric: "47", label: "New reviews per month avg" },
  { metric: "$23", label: "Average cost per lead" },
  { metric: "4.2x", label: "Average ROAS" }
];

const testimonials = [
  {
    quote: "We went from page 3 on Google to the top of the Map Pack. Our phone rings constantly now — and the AI Receptionist handles after-hours calls perfectly.",
    author: "Mike Johnson",
    role: "Owner",
    company: "Johnson HVAC & Plumbing",
  },
  {
    quote: "GrowSmallBiz replaced our HomeAdvisor leads with organic leads that close at 3x the rate. Best decision we made for the business.",
    author: "Carlos Ramirez",
    role: "Owner",
    company: "Ramirez Roofing",
  },
  {
    quote: "The marketing automation saves us 20+ hours a week on follow-ups. Every lead gets contacted within minutes, even on weekends.",
    author: "Tom & Lisa Bradley",
    role: "Co-Owners",
    company: "Bradley Electrical Services",
  },
];

const faqs = [
  {
    question: "Which home service trades do you work with?",
    answer: "We work with all home service trades including HVAC, plumbing, electrical, roofing, remodeling, general contracting, painting, landscaping, pest control, flooring, pressure washing, pool & spa, tree service, moving companies, and more. Our systems are built specifically for the home services industry."
  },
  {
    question: "Can you help me stop relying on HomeAdvisor and Angi leads?",
    answer: "Absolutely. We build your own lead generation engine through SEO, Google Ads, and Google Local Service Ads so you own your leads instead of renting them. Most clients significantly reduce or eliminate their dependence on third-party lead platforms within 4-6 months."
  },
  {
    question: "How does the AI Receptionist work for home service businesses?",
    answer: "The AI Receptionist answers calls 24/7, qualifies leads by asking about their service need and urgency, and books appointments directly into your calendar. For emergency services, it can prioritize urgent calls and immediately notify your on-call technician."
  },
  {
    question: "Do you manage Google Local Service Ads (LSA)?",
    answer: "Yes! LSA is one of the most effective channels for home service businesses. We help you get the Google Guarantee badge, optimize your profile, manage your budget, and monitor lead quality to maximize your ROI from this channel."
  },
  {
    question: "How long until I see results?",
    answer: "Google Ads and LSA can generate leads within the first week. Local SEO improvements typically show within 60-90 days, with significant organic lead growth within 4-6 months. We set honest expectations during the strategy call based on your specific market and competition."
  }
];

const caseStudies = [
  {
    company: "Johnson HVAC & Plumbing",
    location: "Contra Costa County, CA",
    industry: "HVAC & Plumbing",
    challenge: "Page 3 on Google, heavy reliance on HomeAdvisor leads that were expensive and low quality. Missing after-hours emergency calls.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Leads", before: "22", after: "78", improvement: "+255%" },
      { label: "Cost Per Lead", before: "$85", after: "$23", improvement: "-73%" },
      { label: "Google Map Pack", before: "Not ranking", after: "Top 3", improvement: "Top 3" },
      { label: "Monthly Revenue", before: "$45K", after: "$128K", improvement: "+184%" }
    ],
    quote: "Our phone rings constantly now — the AI Receptionist handles after-hours calls perfectly.",
    quoteName: "Mike Johnson",
    quoteRole: "Owner, Johnson HVAC & Plumbing"
  },
  {
    company: "Ramirez Roofing",
    location: "Bay Area, CA",
    industry: "Roofing",
    challenge: "Spending $3,000/month on Angi and HomeAdvisor with a 12% close rate. No Google visibility for organic or map pack searches.",
    timeframe: "6 months",
    metrics: [
      { label: "Organic Leads", before: "5/mo", after: "34/mo", improvement: "+580%" },
      { label: "Close Rate", before: "12%", after: "38%", improvement: "+217%" },
      { label: "Avg Job Value", before: "$4,200", after: "$7,800", improvement: "+86%" },
      { label: "Google Reviews", before: "23", after: "89", improvement: "+287%" }
    ],
    quote: "GrowSmallBiz replaced our HomeAdvisor leads with organic leads that close at 3x the rate.",
    quoteName: "Carlos Ramirez",
    quoteRole: "Owner, Ramirez Roofing"
  }
];

const HomeServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing for Home Service Contractors | SEO & Lead Generation | GrowSmallBiz</title>
        <meta name="description" content="Grow your home service business with local SEO, Google Ads, AI lead capture, and reputation management. HVAC, plumbing, electrical, roofing, and more." />
        <link rel="canonical" href="https://growsmallbiz.io/industries/digital-marketing-for-home-service-contractors/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing for Home Service Contractors"
        serviceType="Digital Marketing for Home Services"
        description="Local SEO, Google Ads, AI lead capture, and CRM automation for HVAC, plumbing, electrical, roofing, and home service contractors."
        url="/industries/digital-marketing-for-home-service-contractors"
        breadcrumbs={[
          { name: "Industries", url: "/industries/digital-marketing-for-home-service-contractors" },
          { name: "Home Services", url: "/industries/digital-marketing-for-home-service-contractors" },
        ]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={homeServicesHeroImage} alt="Home service contractor at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Wrench className="w-4 h-4" />
              Home Service Contractor Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Stop Renting Leads. Start <span className="text-gradient">Owning Your Pipeline</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Replace expensive HomeAdvisor and Angi leads with your own lead generation engine. Local SEO, Google Ads, AI automation, and reputation management built for home service contractors.
            </p>

            {/* Trades we serve */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200">
              {trades.map((trade, index) => (
                <span key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground">
                  <trade.icon className="w-4 h-4 text-primary" />
                  {trade.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/seo-agency/local-seo/">
                  Learn About Local SEO
                </Link>
              </Button>
            </div>
            <p className="text-sm text-primary mt-4 animate-fade-up delay-300">No commitment. No pressure. Just a clear path forward for your business.</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground">These are the challenges we hear from home service contractors every day.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-sm font-bold">✗</span>
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-display font-semibold text-primary mb-4">Let's change that.</p>
            <Button variant="hero" asChild>
              <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">Get Your Growth Strategy</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Home Service Contractors Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We specialize in building lead generation engines for home service businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Home Service Marketing Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to own your leads instead of renting them.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 card-hover">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Real Results for Real Contractors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Average results from our home service clients.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Home Service Marketing"
        subtitle="Your Home Service Growth Partner"
        description="We work exclusively with local service businesses. We know the trades, the seasons, the competition, and the customers."
        items={[
          { title: "Trade Specialists", description: "We focus on home service contractors — HVAC, plumbing, electrical, roofing, remodeling, and more.", icon: Wrench },
          { title: "Own Your Leads", description: "Stop paying per lead to third parties. Build your own lead engine that you control.", icon: Target },
          { title: "Emergency Visibility", description: "Be the first call when something breaks — any time of day, any day of the week.", icon: Zap },
          { title: "AI-Powered Follow-Up", description: "Never miss a lead with 24/7 AI Receptionist and automated CRM workflows.", icon: Bot },
          { title: "Reputation Builder", description: "Generate 5-star reviews systematically and become the trusted choice in your community.", icon: Star },
          { title: "Proven ROI", description: "Average 4.2x ROAS across home service clients with $23 average cost per lead.", icon: TrendingUp },
        ]}
      />

      <CaseStudySection 
        caseStudies={caseStudies}
        title="Home Service Success Stories"
        subtitle="See how we've helped contractors build predictable lead pipelines"
        ctaLink="https://lp.growsmallbiz.io/digital-growth-strategy-session"
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={testimonials}
        title="What Contractors Say"
        subtitle="See how home service businesses are growing with GrowSmallBiz"
      />

      <FAQSection 
        faqs={faqs}
        title="Home Service Marketing FAQs"
        subtitle="Common questions from home service contractors"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Home Service Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your home service business together.",
        }}
      />

      <BlogSection 
        posts={hvacBlogPosts}
        title="Home Service Marketing Insights"
        subtitle="Tips and strategies to grow your contracting business"
      />

      <CardCTA />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default HomeServices;
