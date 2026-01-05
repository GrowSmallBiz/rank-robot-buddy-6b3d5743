import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Phone,
  CheckCircle2,
  ArrowRight,
  Bot,
  Wrench
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, autoRepairBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import autoRepairHeroImage from "@/assets/industry-autorepair-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const benefits = [
  {
    icon: MapPin,
    title: "Local Search Domination",
    description: "Rank #1 for 'auto repair near me', 'oil change', 'brake service', and all service searches in your area."
  },
  {
    icon: Phone,
    title: "More Service Calls",
    description: "Capture urgent repair calls when car owners need immediate help with breakdowns or unexpected issues."
  },
  {
    icon: Bot,
    title: "AI Search Ready",
    description: "Get recommended when car owners ask AI 'What's the best mechanic for transmission repair near me?'"
  },
  {
    icon: Star,
    title: "Trust & Reviews",
    description: "Build a 5-star reputation that makes you the obvious choice over competitors and chains."
  }
];

const services = [
  {
    title: "Service-Based SEO",
    description: "Rank for every service you offer—from oil changes to engine rebuilds and everything in between.",
    features: ["Service-specific landing pages", "Make/model keyword targeting", "Repair vs. maintenance content", "Emergency service visibility"]
  },
  {
    title: "Local Shop Visibility",
    description: "Own the map pack when car owners search for mechanics and auto services nearby.",
    features: ["Google Business Profile optimization", "Local citation building", "Review generation system", "Competitor analysis & tracking"]
  },
  {
    title: "AI & Voice Search Ready",
    description: "Be the recommended shop when drivers ask smart assistants about car problems.",
    features: ["Answer Engine Optimization", "Common car problem FAQs", "Diagnostic content strategy", "Featured snippet targeting"]
  },
  {
    title: "Customer Conversion",
    description: "Turn website visitors into scheduled appointments and walk-in customers.",
    features: ["Online scheduling integration", "Click-to-call optimization", "Service menu & pricing SEO", "Trust signal placement"]
  }
];

const painPoints = [
  "Losing customers to dealership service centers",
  "National chains outranking you on Google",
  "Emergency repair calls going to competitors",
  "Website not generating enough phone calls or appointments",
  "Spending money on ads without seeing sustainable results"
];

const results = [
  { metric: "267%", label: "Increase in service calls" },
  { metric: "38", label: "First page keywords" },
  { metric: "3.8x", label: "ROI on marketing spend" },
  { metric: "4.8", label: "Average Google rating achieved" }
];

const autoRepairTestimonials = [
  {
    quote: "We went from 8-10 repair jobs a day to consistently 20+. GrowSmallBiz made us the go-to shop in our area.",
    author: "Tony Rodriguez",
    role: "Owner",
    company: "Rodriguez Auto Care",
  },
  {
    quote: "Finally competing with the big chains. We now rank #1 for 'brake repair' and 'transmission service' in our city.",
    author: "Steve Mitchell",
    role: "General Manager",
    company: "Mitchell's Auto Service",
  },
  {
    quote: "Our service bays are now fully booked. Online leads went from 5 per week to 25+ per week.",
    author: "Maria Garcia",
    role: "Owner",
    company: "Garcia's Complete Auto Care",
  },
];

const faqs = [
  {
    question: "How long does it take to see more customers from SEO?",
    answer: "Most auto repair shops see increased website traffic and phone calls within 2-3 months. Significant customer growth typically occurs within 4-6 months as we build your local authority and rankings for key service terms."
  },
  {
    question: "Can you help us rank for specific services like transmission or brake repair?",
    answer: "Absolutely! We create dedicated landing pages for each service you offer—from basic maintenance to complex repairs. We target both general terms and specific make/model combinations."
  },
  {
    question: "How do you help us compete with dealerships and chains?",
    answer: "We highlight what makes independent shops special—personalized service, honest pricing, expertise—and build content that positions you as the trusted local expert versus corporate alternatives."
  },
  {
    question: "Do you work with specialty shops like body shops or performance tuners?",
    answer: "Yes! We work with all types of automotive businesses—general repair, collision/body shops, performance shops, tire centers, and specialty service providers. Each gets a customized strategy."
  },
  {
    question: "How do you help us get more emergency repair calls?",
    answer: "We target high-intent emergency keywords, optimize for mobile searchers, ensure your click-to-call is prominent, and make sure your hours and emergency availability are clearly communicated across all platforms."
  }
];

const caseStudies = [
  {
    company: "Rodriguez Auto Care",
    location: "Houston, TX",
    industry: "Full-Service Auto Repair",
    challenge: "Losing customers to dealership service centers and national chains. Website wasn't generating enough phone calls despite 20 years of experience.",
    timeframe: "6 months",
    metrics: [
      { label: "Daily Repair Jobs", before: "8-10", after: "22-25", improvement: "+150%" },
      { label: "Monthly Phone Calls", before: "85", after: "312", improvement: "+267%" },
      { label: "Emergency Repair Calls", before: "12/mo", after: "48/mo", improvement: "+300%" },
      { label: "Average Ticket Value", before: "$380", after: "$520", improvement: "+37%" }
    ],
    quote: "We went from 8-10 repair jobs a day to consistently 20+. GrowSmallBiz made us the go-to shop in our area.",
    quoteName: "Tony Rodriguez",
    quoteRole: "Owner, Rodriguez Auto Care"
  },
  {
    company: "Mitchell's Auto Service",
    location: "Nashville, TN",
    industry: "Brake & Transmission Specialists",
    challenge: "Couldn't compete with big chains for 'brake repair' and 'transmission service' searches. Spending too much on ineffective local ads.",
    timeframe: "7 months",
    metrics: [
      { label: "Brake Service Inquiries", before: "15/mo", after: "68/mo", improvement: "+353%" },
      { label: "'Brake Repair' Ranking", before: "Page 2", after: "#1", improvement: "Top Spot" },
      { label: "Transmission Jobs/Month", before: "4", after: "18", improvement: "+350%" },
      { label: "Ad Spend Eliminated", before: "$2,500/mo", after: "$0/mo", improvement: "-100%" }
    ],
    quote: "Finally competing with the big chains. We now rank #1 for 'brake repair' and 'transmission service' in our city.",
    quoteName: "Steve Mitchell",
    quoteRole: "General Manager, Mitchell's Auto Service"
  }
];

const AutoRepair = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Auto Repair Shop SEO Services | Get More Customers | GrowSmallBiz</title>
        <meta name="description" content="Grow your auto repair shop with specialized SEO. Rank #1 for auto repair, brake service, and oil change searches. Beat the dealerships and chains." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={autoRepairHeroImage} 
            alt="Professional auto mechanic working on car" 
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
              <Car className="w-4 h-4" />
              Auto Repair Shop SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Beat the Chains & <span className="text-gradient">Fill Your Bays</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Rank #1 for auto repair, brake service, and oil change searches. Become the trusted local shop that customers choose over dealerships and chains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=auto">
                  Get Your Free Shop Audit
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
              These are the challenges we hear from auto shop owners every day.
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
              <Link to="/free-assessment?industry=auto">
                Get Your Custom Growth Plan
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
              Why Auto Shops Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in helping independent auto repair shops outrank chains and fill their bays.
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
              Our Auto Repair SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your bays full and customers coming back.
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
              Real Results for Real Shops
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Average results from our auto repair clients after 6 months.
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
        title="Your Auto Repair Marketing Partner"
        description="We specialize in helping independent auto repair shops dominate local search, capture more service calls, and outrank the national chains."
        items={[
          { title: "Auto Industry Experts", description: "We focus exclusively on auto repair shops—we know what works for independent mechanics.", icon: Car },
          { title: "Compete with Chains", description: "Level the playing field against national chains with superior local visibility and reputation.", icon: Wrench },
          { title: "Emergency Visibility", description: "Capture urgent repair calls when car owners need immediate help with breakdowns.", icon: Phone },
          { title: "Local SEO Domination", description: "Rank #1 for 'auto repair near me' and service-specific searches in your area.", icon: MapPin },
          { title: "AI Search Ready", description: "Get recommended when car owners ask AI for the best mechanic in your city.", icon: Bot },
          { title: "Proven Growth", description: "Our auto repair clients typically see 2-4x more service inquiries within 90 days.", icon: TrendingUp },
        ]}
      />

      {/* Case Studies Section */}
      <CaseStudySection 
        caseStudies={caseStudies}
        title="Auto Repair Success Stories"
        subtitle="See how we've helped shops like yours outrank the chains"
        ctaLink="/free-assessment?industry=auto"
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={autoRepairTestimonials}
        title="What Shop Owners Say"
        subtitle="See how auto repair shops dominate their local markets"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Auto Repair SEO FAQs"
        subtitle="Common questions from shop owners"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Auto Repair Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your auto shop together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={autoRepairBlogPosts}
        title="Auto Repair SEO Insights"
        subtitle="Expert tips to help your shop grow online"
        showViewAll={false}
      />

      {/* PersonCTA Section */}
      <PersonCTA
        title="Ready to Fill Your Bays?"
        description="Get a free SEO audit and see how to outrank chains and attract more customers to your auto repair shop."
        buttonHref="/free-assessment?industry=auto"
        buttonText="Get Your Free Shop Audit"
        sectionClassName="py-12 bg-section-dark"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default AutoRepair;
