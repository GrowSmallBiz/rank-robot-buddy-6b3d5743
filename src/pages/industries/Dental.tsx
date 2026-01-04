import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smile,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Search,
  Shield
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, dentalBlogPosts } from "@/components/sections/BlogSection";
import dentalHeroImage from "@/assets/industry-dental-hero.jpg";

const benefits = [
  {
    icon: MapPin,
    title: "Local Patient Acquisition",
    description: "Rank #1 for 'dentist near me', 'emergency dentist', and cosmetic procedure searches in your area."
  },
  {
    icon: Calendar,
    title: "More Appointment Bookings",
    description: "Convert website visitors into booked appointments with optimized landing pages and clear calls-to-action."
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description: "Get recommended when patients ask AI assistants 'Who's the best dentist for veneers in [city]?'"
  },
  {
    icon: Star,
    title: "Reputation Excellence",
    description: "Build and showcase your 5-star reviews to become the most trusted practice in your community."
  }
];

const services = [
  {
    title: "New Patient SEO",
    description: "Attract high-value patients searching for cosmetic dentistry, implants, and specialty services.",
    features: ["High-intent keyword targeting", "Procedure-specific landing pages", "Before/after gallery optimization", "Insurance & financing page SEO"]
  },
  {
    title: "Local Map Pack Domination",
    description: "Own the Google Map Pack when patients search for dentists in your area.",
    features: ["Google Business Profile optimization", "Local citation consistency", "Review generation campaigns", "Competitor displacement strategies"]
  },
  {
    title: "AI & Voice Search Ready",
    description: "Be the recommended dentist when patients ask Alexa, Siri, or ChatGPT for help.",
    features: ["Answer Engine Optimization", "FAQ schema implementation", "Conversational content strategy", "Featured snippet targeting"]
  },
  {
    title: "Conversion Optimization",
    description: "Turn website visitors into booked appointments and consultations.",
    features: ["Online booking integration", "Mobile optimization", "Trust signal placement", "Patient journey optimization"]
  }
];

const painPoints = [
  "New patient flow has stagnated or declined",
  "Competitors are outranking you for key searches",
  "Your website isn't generating enough appointment requests",
  "Struggling to attract high-value cosmetic patients",
  "Paying too much for ineffective marketing"
];

const results = [
  { metric: "287%", label: "Increase in new patients" },
  { metric: "52", label: "First page keywords" },
  { metric: "$85K", label: "Average monthly production increase" },
  { metric: "4.8", label: "Average Google rating achieved" }
];

const testimonials = [
  {
    quote: "We've doubled our new patient flow and are finally attracting the cosmetic cases we want. The ROI has been incredible.",
    author: "Dr. Jennifer Park",
    role: "Owner",
    company: "Park Family Dentistry"
  },
  {
    quote: "GrowSmallBiz helped us rank #1 for 'dental implants' in our city. We're now booking implant consultations every week.",
    author: "Dr. Robert Martinez",
    role: "Lead Dentist",
    company: "Smile Design Studio"
  }
];

const faqs = [
  {
    question: "How long does it take to see more new patients from SEO?",
    answer: "Most dental practices see measurable increases in website traffic and appointment requests within 3-4 months. Significant new patient growth typically occurs within 6 months as we build your local authority and rankings."
  },
  {
    question: "Can you help us rank for high-value procedures like implants and cosmetic dentistry?",
    answer: "Absolutely! We specialize in targeting high-intent, high-value procedure keywords. We create dedicated landing pages for each service and optimize them for both patients and search engines."
  },
  {
    question: "Do you work with multi-location dental groups?",
    answer: "Yes! We have extensive experience with DSOs and multi-location practices. We create location-specific strategies while maintaining brand consistency across all locations."
  },
  {
    question: "How do you help us get more Google reviews?",
    answer: "We implement review generation systems that make it easy for happy patients to leave reviews. This includes automated follow-up sequences, review request templates, and response strategies for all reviews."
  },
  {
    question: "What makes dental SEO different from regular SEO?",
    answer: "Dental SEO requires understanding patient psychology, procedure-specific search intent, and healthcare compliance. We specialize in dental and healthcare marketing, so we understand these nuances."
  }
];

const caseStudies = [
  {
    company: "Park Family Dentistry",
    location: "Seattle, WA",
    industry: "General & Cosmetic Dentistry",
    challenge: "New patient flow had plateaued at 25/month. Wanted to attract more high-value cosmetic cases like veneers and implants instead of just cleanings.",
    timeframe: "6 months",
    metrics: [
      { label: "New Patients/Month", before: "25", after: "72", improvement: "+188%" },
      { label: "Cosmetic Case Inquiries", before: "3/mo", after: "18/mo", improvement: "+500%" },
      { label: "Average Case Value", before: "$450", after: "$2,800", improvement: "+522%" },
      { label: "Monthly Production", before: "$85K", after: "$178K", improvement: "+109%" }
    ],
    quote: "We've doubled our new patient flow and are finally attracting the cosmetic cases we want.",
    quoteName: "Dr. Jennifer Park",
    quoteRole: "Owner, Park Family Dentistry"
  },
  {
    company: "Smile Design Studio",
    location: "Phoenix, AZ",
    industry: "Implant & Cosmetic Dentistry",
    challenge: "Competitors were outranking them for 'dental implants' despite having more experience. Website wasn't generating implant consultations.",
    timeframe: "7 months",
    metrics: [
      { label: "Implant Consultations", before: "4/mo", after: "28/mo", improvement: "+600%" },
      { label: "'Dental Implants' Ranking", before: "Page 3", after: "#1", improvement: "Top Spot" },
      { label: "Implant Case Starts", before: "2/mo", after: "12/mo", improvement: "+500%" },
      { label: "Implant Revenue", before: "$18K/mo", after: "$96K/mo", improvement: "+433%" }
    ],
    quote: "GrowSmallBiz helped us rank #1 for 'dental implants' in our city. We're now booking implant consultations every week.",
    quoteName: "Dr. Robert Martinez",
    quoteRole: "Lead Dentist, Smile Design Studio"
  }
];

const Dental = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dental Practice SEO Services | Attract More Patients | GrowSmallBiz</title>
        <meta name="description" content="Grow your dental practice with specialized SEO. Rank #1 for cosmetic dentistry, dental implants, and 'dentist near me' searches. Get more new patients." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={dentalHeroImage} 
            alt="Modern dental clinic with dentist and patient" 
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
              <Smile className="w-4 h-4" />
              Dental Practice SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Attract More <span className="text-gradient">High-Value Patients</span> to Your Practice
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Rank #1 for cosmetic procedures, implants, and new patient searches. Build a sustainable patient acquisition machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=dental">
                  Get Your Free Practice Audit
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
              These are the challenges we hear from dental practice owners every day.
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
              We can help you grow.
            </p>
            <Button variant="hero" asChild>
              <Link to="/free-assessment?industry=dental">
                Get Your Custom Growth Strategy
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
              Why Dental Practices Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in helping dental practices attract more high-value patients.
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
              Our Dental Practice SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to attract, convert, and retain high-value patients.
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
              Real Results for Real Practices
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Average results from our dental clients after 6 months.
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

      {/* Case Studies Section */}
      <CaseStudySection 
        caseStudies={caseStudies}
        title="Dental Practice Success Stories"
        subtitle="See how we've helped practices like yours attract more high-value patients"
        ctaLink="/free-assessment?industry=dental"
        ctaText="Get Results Like These"
      />

      {/* Testimonials Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Dentists Say About Us
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
        title="Dental SEO FAQs"
        subtitle="Common questions from dental practice owners"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Dental Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your dental practice together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={dentalBlogPosts}
        title="Dental Marketing Insights"
        subtitle="Expert tips to help your dental practice grow online"
        showViewAll={false}
      />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free SEO audit and see exactly how we'll help you attract more high-value patients.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-assessment?industry=dental">
                Get Your Free Practice Audit
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

export default Dental;
