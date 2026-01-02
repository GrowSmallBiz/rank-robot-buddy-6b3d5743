import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  TrendingUp, 
  MapPin, 
  Star, 
  Phone, 
  Users, 
  Target, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Bot,
  Search,
  BarChart3
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";

const benefits = [
  {
    icon: MapPin,
    title: "Dominate Local Search",
    description: "Rank #1 for 'HVAC near me', 'plumber in [city]', and 'emergency electrician' searches in your service area."
  },
  {
    icon: Phone,
    title: "More Emergency Calls",
    description: "Capture urgent service calls when homeowners need immediate help with broken AC, burst pipes, or electrical issues."
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description: "Get recommended by ChatGPT, Google AI, and voice assistants when homeowners ask 'Who's the best HVAC company?'"
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    description: "Build and showcase your reviews to become the trusted choice for home service needs in your community."
  }
];

const services = [
  {
    title: "Local SEO Domination",
    description: "Own the Google Map Pack for every service you offer in every city you serve.",
    features: ["Google Business Profile optimization", "Local citation building", "Service area targeting", "Multi-location management"]
  },
  {
    title: "Emergency Service Visibility",
    description: "Be the first call when someone's AC breaks at midnight or pipes burst on a holiday.",
    features: ["24/7 emergency keywords", "Mobile-first optimization", "Click-to-call integration", "Fast-loading pages"]
  },
  {
    title: "AI & Voice Search Ready",
    description: "Get recommended when homeowners ask Alexa, Siri, or ChatGPT for HVAC help.",
    features: ["Answer Engine Optimization", "FAQ schema markup", "Conversational content", "Featured snippet targeting"]
  },
  {
    title: "Review & Reputation Building",
    description: "Turn happy customers into 5-star reviews that drive more business.",
    features: ["Review generation system", "Review response templates", "Reputation monitoring", "Social proof optimization"]
  }
];

const painPoints = [
  "Losing jobs to competitors who rank higher on Google",
  "Paying too much for leads from HomeAdvisor or Angi",
  "Emergency calls going to competitors because they show up first",
  "Struggling to compete with franchise operations",
  "Website not generating enough phone calls"
];

const results = [
  { metric: "312%", label: "Increase in organic leads" },
  { metric: "47", label: "First page keywords" },
  { metric: "4.2x", label: "ROI on marketing spend" },
  { metric: "$0", label: "Per-lead cost from organic" }
];

const testimonials = [
  {
    quote: "We went from 5 calls a day to 25+ calls. GrowSmallBiz transformed our business. Best investment we ever made.",
    author: "Mike Thompson",
    role: "Owner",
    company: "Thompson HVAC Services"
  },
  {
    quote: "Finally stopped paying $80 per lead to HomeAdvisor. Now we get better quality leads for free from Google.",
    author: "Sarah Chen",
    role: "Operations Manager",
    company: "AllStar Plumbing"
  }
];

const faqs = [
  {
    question: "How long does it take to see results for HVAC SEO?",
    answer: "Most of our HVAC clients see significant improvements within 3-4 months, with emergency service keywords often ranking faster. Local map pack results typically improve within 6-8 weeks as we optimize your Google Business Profile and build local citations."
  },
  {
    question: "Can you help us rank in multiple service areas?",
    answer: "Absolutely! We specialize in multi-location and multi-service-area SEO for home service businesses. We create location-specific landing pages and optimize your Google Business Profile for each area you serve."
  },
  {
    question: "Do you work with franchises or just independent contractors?",
    answer: "We work with both! We have experience helping independent HVAC companies compete with franchises, and we also work with franchise locations looking to dominate their local markets."
  },
  {
    question: "How do you help us get more emergency service calls?",
    answer: "We target high-intent emergency keywords like 'emergency AC repair', 'furnace repair near me now', and '24 hour plumber'. We also optimize for mobile and ensure your click-to-call buttons are prominent for urgent searches."
  },
  {
    question: "What makes your approach different from other SEO agencies?",
    answer: "We specialize exclusively in high-ticket local services and understand the unique needs of HVAC, plumbing, and electrical businesses. Plus, we optimize for AI search and voice assistants—not just traditional Google rankings."
  }
];

const HVAC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HVAC, Plumbing & Electrical SEO Services | GrowSmallBiz</title>
        <meta name="description" content="Dominate local search for HVAC, plumbing, and electrical services. Get more emergency calls, rank #1 on Google Maps, and stop paying for leads." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Wrench className="w-4 h-4" />
              HVAC, Plumbing & Electrical SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Stop Losing Jobs to Competitors Who{" "}
              <span className="text-gradient">Rank Higher on Google</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Get more emergency calls, dominate the local map pack, and build a lead generation machine that doesn't charge you per call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=hvac">
                  Get Your Free SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/local-seo">
                  Learn About Local SEO
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Sound Familiar?
            </h2>
            <p className="text-muted-foreground">
              These are the challenges we hear from HVAC, plumbing, and electrical business owners every day.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-sm font-bold">✗</span>
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-display font-semibold text-primary mb-4">
              There's a better way.
            </p>
            <Button variant="hero" asChild>
              <Link to="/free-assessment?industry=hvac">
                Get Your Custom SEO Strategy
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Home Service Companies Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in helping HVAC, plumbing, and electrical businesses dominate their local markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our HVAC & Home Service SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to dominate search and generate leads on autopilot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 card-hover"
              >
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
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

      {/* Results Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Real Results for Real Contractors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Average results from our HVAC, plumbing, and electrical clients after 6 months.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <p className="text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Contractors Say About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="HVAC SEO FAQs"
        subtitle="Common questions from home service business owners"
        schemaType="FAQPage"
      />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free SEO audit and see exactly how we'll help you outrank the competition and generate more leads.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-assessment?industry=hvac">
                Get Your Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HVAC;
