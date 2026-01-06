import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sparkles,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Heart
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, medSpaBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import medSpaHeroImage from "@/assets/industry-medspa-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const benefits = [
  {
    icon: MapPin,
    title: "Luxury Local Presence",
    description: "Rank #1 for 'Botox near me', 'lip fillers [city]', and high-value aesthetic procedure searches."
  },
  {
    icon: Calendar,
    title: "Premium Consultations",
    description: "Attract qualified clients ready to invest in themselves with optimized conversion funnels."
  },
  {
    icon: Bot,
    title: "AI-Powered Discovery",
    description: "Get recommended when potential clients ask AI 'What's the best med spa for laser treatments?'"
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    description: "Showcase transformative results and glowing reviews to build trust and authority."
  }
];

const services = [
  {
    title: "Aesthetic Procedure SEO",
    description: "Dominate searches for Botox, fillers, laser treatments, body contouring, and more.",
    features: ["Procedure-specific landing pages", "Before/after gallery SEO", "Treatment comparison content", "Pricing page optimization"]
  },
  {
    title: "Local Luxury Positioning",
    description: "Position your med spa as the premier aesthetic destination in your market.",
    features: ["Google Business Profile luxury positioning", "High-end local citations", "Upscale review strategy", "Competitor differentiation"]
  },
  {
    title: "AI & Voice Search Optimization",
    description: "Be the recommended med spa when clients research treatments on AI platforms.",
    features: ["Answer Engine Optimization", "Treatment FAQ schema", "Conversational content", "Expert positioning content"]
  },
  {
    title: "Consultation Conversion",
    description: "Turn website visitors into booked consultations and treatment packages.",
    features: ["Online booking optimization", "Lead magnet creation", "Trust signal integration", "Patient journey mapping"]
  }
];

const painPoints = [
  "Competitors with less experience are outranking you",
  "Struggling to attract high-value injectable and laser clients",
  "Social media isn't generating enough new consultations",
  "Website traffic isn't converting into booked appointments",
  "Wasting money on ads without sustainable growth"
];

const results = [
  { metric: "324%", label: "Increase in consultations" },
  { metric: "67", label: "First page keywords" },
  { metric: "$127K", label: "Average monthly revenue increase" },
  { metric: "4.9", label: "Average Google rating achieved" }
];

const medSpaTestimonials = [
  {
    quote: "Our consultation bookings tripled within 4 months. We're now fully booked for injectables and have a waitlist for laser treatments.",
    author: "Dr. Amanda Foster",
    role: "Medical Director",
    company: "Radiance Aesthetics",
  },
  {
    quote: "GrowSmallBiz positioned us as THE luxury med spa in our area. We're attracting exactly the high-value clients we wanted.",
    author: "Nicole Richards",
    role: "Owner",
    company: "Glow Med Spa & Wellness",
  },
  {
    quote: "Premium treatment bookings increased 280%. Our average client value doubled in just 6 months.",
    author: "Dr. Lisa Park",
    role: "Aesthetic Director",
    company: "Elegance Med Spa",
  },
];

const faqs = [
  {
    question: "How is med spa SEO different from regular healthcare SEO?",
    answer: "Med spa SEO requires balancing medical credibility with luxury lifestyle marketing. We understand the aesthetic industry's unique needs—from treatment-specific keywords to before/after content optimization while maintaining compliance with advertising regulations."
  },
  {
    question: "Can you help us rank for competitive terms like 'Botox' and 'lip fillers'?",
    answer: "Absolutely! We develop comprehensive strategies for high-value procedure keywords, including location-specific targeting, long-tail variations, and content that positions you as the expert choice for each treatment."
  },
  {
    question: "How do you handle before/after image SEO?",
    answer: "We optimize your before/after galleries with proper alt tags, schema markup, and page structure to help them rank in image search and drive qualified traffic to your treatment pages."
  },
  {
    question: "Do you work with multi-location med spa brands?",
    answer: "Yes! We work with both single-location boutique med spas and multi-location brands. Our strategies scale to maintain consistent branding while optimizing for each location's unique market."
  },
  {
    question: "How long until we see more consultations from SEO?",
    answer: "Most med spa clients see increased website traffic within 2-3 months and measurable consultation growth within 4-6 months. High-value procedure keywords often take longer but deliver excellent ROI once ranking."
  }
];

const caseStudies = [
  {
    company: "Radiance Aesthetics",
    location: "Miami, FL",
    industry: "Medical Spa & Injectables",
    challenge: "Heavy reliance on Instagram wasn't generating consistent consultations. Competitors with less experience were ranking higher on Google.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Consultations", before: "28", after: "112", improvement: "+300%" },
      { label: "Injectable Appointments", before: "45/mo", after: "156/mo", improvement: "+247%" },
      { label: "Avg. Treatment Package", before: "$800", after: "$2,400", improvement: "+200%" },
      { label: "Monthly Revenue", before: "$68K", after: "$215K", improvement: "+216%" }
    ],
    quote: "Our consultation bookings tripled within 4 months. We're now fully booked for injectables.",
    quoteName: "Dr. Amanda Foster",
    quoteRole: "Medical Director, Radiance Aesthetics"
  },
  {
    company: "Glow Med Spa & Wellness",
    location: "Scottsdale, AZ",
    industry: "Luxury Med Spa",
    challenge: "Wanted to position as a premium destination but was attracting price-shoppers. Needed to rank for high-end treatment searches.",
    timeframe: "6 months",
    metrics: [
      { label: "High-Value Inquiries", before: "12/mo", after: "67/mo", improvement: "+458%" },
      { label: "Laser Treatment Bookings", before: "8/mo", after: "42/mo", improvement: "+425%" },
      { label: "Avg. Client Lifetime Value", before: "$1,200", after: "$4,800", improvement: "+300%" },
      { label: "Google Reviews", before: "48", after: "187", improvement: "+290%" }
    ],
    quote: "GrowSmallBiz positioned us as THE luxury med spa in our area. We're attracting exactly the high-value clients we wanted.",
    quoteName: "Nicole Richards",
    quoteRole: "Owner, Glow Med Spa & Wellness"
  }
];

const MedSpa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Med Spa SEO Services | Attract Aesthetic Clients | GrowSmallBiz</title>
        <meta name="description" content="Grow your med spa with specialized SEO. Rank #1 for Botox, fillers, laser treatments, and aesthetic services. Attract high-value clients." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={medSpaHeroImage} 
            alt="Luxurious med spa treatment room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              Med Spa & Aesthetics SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Become the <span className="text-gradient">Premier Med Spa</span> in Your Market
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Attract high-value clients seeking injectables, laser treatments, and aesthetic services. Build a luxury brand that dominates search.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=medspa">
                  Get Your Free Audit
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
              These are the challenges we hear from med spa owners every day.
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
              Let's change that.
            </p>
            <Button variant="hero" asChild>
              <Link to="/free-assessment?industry=medspa">
                Get Your Growth Strategy
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
              Why Med Spas Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in positioning aesthetic practices for premium client acquisition.
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
              Our Med Spa SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to attract premium aesthetic clients.
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
              Real Results for Real Med Spas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Average results from our med spa clients after 6 months.
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

      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Med Spa Marketing"
        subtitle="Your Med Spa Marketing Partner"
        description="We specialize in helping aesthetic practices attract premium clients who invest in themselves—building your reputation as the luxury choice in your market."
        items={[
          { title: "Aesthetics Experts", description: "We focus exclusively on med spas and aesthetic practices—we know what works for premium services.", icon: Sparkles },
          { title: "Premium Client Attraction", description: "Attract clients ready to invest in Botox, fillers, laser treatments, and body contouring.", icon: Heart },
          { title: "Luxury Brand Positioning", description: "Position your practice as the premier aesthetic destination in your community.", icon: Star },
          { title: "Visual-First Marketing", description: "Showcase transformative results through Instagram, before/after galleries, and video content.", icon: Target },
          { title: "AI Search Visibility", description: "Get recommended when potential clients ask AI for the best med spa in your city.", icon: Bot },
          { title: "Proven ROI", description: "Our med spa clients typically see 3-5x return on marketing investment within 6 months.", icon: TrendingUp },
        ]}
      />

      {/* Case Studies Section */}
      <CaseStudySection 
        caseStudies={caseStudies}
        title="Med Spa Success Stories"
        subtitle="See how we've helped aesthetic practices attract premium clients"
        ctaLink="/free-assessment?industry=medspa"
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={medSpaTestimonials}
        title="What Med Spa Owners Say"
        subtitle="See how aesthetic practices attract premium clients"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Med Spa SEO FAQs"
        subtitle="Common questions from aesthetic practice owners"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Med Spa Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your aesthetic practice together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={medSpaBlogPosts}
        title="Med Spa Marketing Insights"
        subtitle="Expert tips to help your aesthetic practice grow online"
        showViewAll={false}
      />

      {/* PersonCTA Section */}
      <PersonCTA
        title="Ready to Become the Premier Med Spa?"
        description="Get a free SEO audit and discover how to attract more high-value aesthetic clients to your med spa."
        buttonHref="/free-assessment?industry=medspa"
        buttonText="Get Your Free Audit"
        sectionClassName="py-12 bg-section-dark"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default MedSpa;
