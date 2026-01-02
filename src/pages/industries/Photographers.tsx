import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Camera,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Image
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, photographerBlogPosts } from "@/components/sections/BlogSection";
import photographerHeroImage from "@/assets/industry-photographer-hero.jpg";

const benefits = [
  {
    icon: MapPin,
    title: "Local Client Acquisition",
    description: "Rank #1 for 'wedding photographer near me', 'portrait photographer', and event photography searches."
  },
  {
    icon: Calendar,
    title: "More Bookings",
    description: "Convert website visitors into booked sessions with portfolio-optimized pages and clear calls-to-action."
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description: "Get recommended when clients ask AI 'Who's the best wedding photographer in [city]?'"
  },
  {
    icon: Star,
    title: "Portfolio Authority",
    description: "Showcase your best work in a way that both clients and search engines love."
  }
];

const services = [
  {
    title: "Photography Niche SEO",
    description: "Dominate searches for weddings, portraits, events, commercial, and your specialty niches.",
    features: ["Specialty-specific landing pages", "Location + niche keyword targeting", "Style-based content strategy", "Seasonal campaign optimization"]
  },
  {
    title: "Local Market Visibility",
    description: "Own the search results when clients look for photographers in your area.",
    features: ["Google Business Profile optimization", "Local citation building", "Review generation campaigns", "Venue & vendor partnerships SEO"]
  },
  {
    title: "AI & Voice Search Ready",
    description: "Be the recommended photographer when clients research via AI assistants.",
    features: ["Answer Engine Optimization", "Photography FAQ schema", "Pricing & package content", "Expert positioning strategy"]
  },
  {
    title: "Portfolio & Gallery SEO",
    description: "Make your stunning work visible in image search and drive qualified traffic.",
    features: ["Image SEO optimization", "Alt tag strategy", "Gallery page structure", "Fast-loading portfolio pages"]
  }
];

const painPoints = [
  "Talented photographers with fewer skills ranking above you",
  "Struggling to book your calendar during slow seasons",
  "Relying too heavily on referrals without steady organic leads",
  "Beautiful portfolio that no one can find on Google",
  "Wasting time on social media without seeing real bookings"
];

const results = [
  { metric: "289%", label: "Increase in inquiries" },
  { metric: "41", label: "First page keywords" },
  { metric: "67%", label: "Calendar booked in advance" },
  { metric: "4.9", label: "Average Google rating" }
];

const testimonials = [
  {
    quote: "I went from struggling to book weddings to having a waitlist. GrowSmallBiz helped me rank #1 for 'wedding photographer' in my city.",
    author: "Sarah Williams",
    role: "Owner",
    company: "Sarah Williams Photography"
  },
  {
    quote: "My inquiry rate tripled. Now I can be selective about the clients I take on instead of chasing every lead.",
    author: "Marcus Chen",
    role: "Lead Photographer",
    company: "Chen Creative Studios"
  }
];

const faqs = [
  {
    question: "How long does it take to see more photography bookings from SEO?",
    answer: "Most photographers see increased website traffic within 2-3 months and booking inquiries within 3-4 months. Wedding photography keywords often take longer due to competition but deliver high-value clients once ranking."
  },
  {
    question: "Can you help me rank for specific photography niches like newborn or boudoir?",
    answer: "Absolutely! We create dedicated landing pages for each specialty you offer and target clients actively searching for those specific services in your area."
  },
  {
    question: "How do you optimize my portfolio for search engines?",
    answer: "We implement image SEO best practices—proper file naming, alt tags, schema markup, and page structure—so your stunning work appears in image search and drives qualified traffic."
  },
  {
    question: "Do you work with photographers in competitive markets?",
    answer: "Yes! We've helped photographers rank in highly competitive markets like Los Angeles, New York, and Chicago. We find strategic angles and niches to break through the competition."
  },
  {
    question: "What makes photography SEO different from regular local SEO?",
    answer: "Photography SEO requires balancing visual portfolio presentation with search optimization, targeting style-based and event-based searches, and managing seasonal demand fluctuations. We specialize in this niche."
  }
];

const caseStudies = [
  {
    company: "Sarah Williams Photography",
    location: "San Diego, CA",
    industry: "Wedding Photography",
    challenge: "Beautiful portfolio but invisible on Google. Less talented photographers were ranking higher and booking the weddings she wanted.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Inquiries", before: "8", after: "42", improvement: "+425%" },
      { label: "Wedding Bookings/Year", before: "18", after: "48", improvement: "+167%" },
      { label: "'Wedding Photographer' Rank", before: "Page 3", after: "#1", improvement: "Top Spot" },
      { label: "Average Package Price", before: "$3,200", after: "$5,800", improvement: "+81%" }
    ],
    quote: "I went from struggling to book weddings to having a waitlist. GrowSmallBiz helped me rank #1 for 'wedding photographer' in my city.",
    quoteName: "Sarah Williams",
    quoteRole: "Owner, Sarah Williams Photography"
  },
  {
    company: "Chen Creative Studios",
    location: "Chicago, IL",
    industry: "Portrait & Commercial Photography",
    challenge: "Relying too heavily on referrals and social media. Wanted to build a steady stream of organic leads for portrait and headshot sessions.",
    timeframe: "6 months",
    metrics: [
      { label: "Portrait Session Inquiries", before: "12/mo", after: "56/mo", improvement: "+367%" },
      { label: "Corporate Headshot Clients", before: "3/mo", after: "22/mo", improvement: "+633%" },
      { label: "Calendar Booked in Advance", before: "35%", after: "85%", improvement: "+143%" },
      { label: "Revenue Per Month", before: "$8K", after: "$28K", improvement: "+250%" }
    ],
    quote: "My inquiry rate tripled. Now I can be selective about the clients I take on instead of chasing every lead.",
    quoteName: "Marcus Chen",
    quoteRole: "Lead Photographer, Chen Creative Studios"
  }
];

const Photographers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Photographer SEO Services | Book More Clients | GrowSmallBiz</title>
        <meta name="description" content="Grow your photography business with specialized SEO. Rank #1 for wedding, portrait, and event photographer searches. Book more clients." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={photographerHeroImage} 
            alt="Professional photographer shooting wedding couple" 
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
              <Camera className="w-4 h-4" />
              Photographer SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Get Found. <span className="text-gradient">Get Booked.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Rank #1 for photography searches in your area. Turn your stunning portfolio into a client-generating machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=photographer">
                  Get Your Free Portfolio Audit
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
              These are the challenges we hear from photographers every day.
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
              Your work deserves to be seen.
            </p>
            <Button variant="hero" asChild>
              <Link to="/free-assessment?industry=photographer">
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
              Why Photographers Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in helping photographers get discovered and book more clients.
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
              Our Photographer SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to fill your calendar with dream clients.
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
              Real Results for Real Photographers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Average results from our photography clients after 6 months.
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
        title="Photographer Success Stories"
        subtitle="See how we've helped photographers like you get found and booked"
        ctaLink="/free-assessment?industry=photographer"
        ctaText="Get Results Like These"
      />

      {/* Testimonials Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Photographers Say
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
        title="Photographer SEO FAQs"
        subtitle="Common questions from photographers"
        schemaType="FAQPage"
      />

      {/* Blog Section */}
      <BlogSection 
        posts={photographerBlogPosts}
        title="Photography SEO Insights"
        subtitle="Expert tips to help photographers grow their business online"
        showViewAll={false}
      />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Book More Dream Clients?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free SEO audit and discover how to turn your portfolio into a booking machine.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-assessment?industry=photographer">
                Get Your Free Portfolio Audit
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

export default Photographers;
