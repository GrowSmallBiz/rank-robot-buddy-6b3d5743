import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Heart,
  Database,
  Phone,
  Search
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import realtorHeroImage from "@/assets/industry-realtor-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { useUtm } from "@/hooks/use-utm";

const benefits = [
  {
    icon: MapPin,
    title: "Dominate Local Search",
    description: "Rank #1 for 'homes for sale [city]', 'real estate agent near me', and neighborhood-specific searches."
  },
  {
    icon: Database,
    title: "IDX-Integrated Website",
    description: "Professional website with MLS property search that captures buyer and seller leads 24/7."
  },
  {
    icon: Bot,
    title: "AI-Powered Discovery",
    description: "Get recommended when potential clients ask AI 'Who's the best realtor in [city]?'"
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    description: "Build trust with glowing reviews and testimonials that convert prospects into clients."
  }
];

const services = [
  {
    title: "Real Estate SEO & Local Visibility",
    description: "Own the search results for your neighborhoods and service areas.",
    features: ["Neighborhood & community pages", "Google Business Profile optimization", "Local citation building", "Competitor analysis & strategy"]
  },
  {
    title: "IDX Website & Lead Generation",
    description: "Professional website with MLS integration that captures and nurtures leads.",
    features: ["IDX property search integration", "Home valuation landing pages", "Buyer/seller lead funnels", "Mobile-responsive design"]
  },
  {
    title: "AI & CRM Automation",
    description: "Never miss a lead with AI-powered follow-up and smart CRM workflows.",
    features: ["AI Receptionist for 24/7 call handling", "Automated drip campaigns", "Pipeline management", "Smart lead routing & scoring"]
  },
  {
    title: "Paid Advertising & Social Media",
    description: "Targeted campaigns that drive qualified buyer and seller leads.",
    features: ["Google PPC for high-intent searches", "Meta/Facebook listing ads", "Retargeting campaigns", "Social media content strategy"]
  }
];

const painPoints = [
  "Relying on referrals with no predictable lead pipeline",
  "Competitors outranking you for neighborhood-specific searches",
  "Leads slipping through the cracks due to slow follow-up",
  "Spending hours on social media with minimal bookings",
  "No system to nurture long-cycle buyer and seller prospects"
];

const results = [
  { metric: "285%", label: "Increase in qualified leads" },
  { metric: "52", label: "First page keywords" },
  { metric: "$95K", label: "Average monthly GCI increase" },
  { metric: "4.9", label: "Average Google rating achieved" }
];

const testimonials = [
  {
    quote: "My listing inquiries tripled within 3 months. The IDX website and AI follow-up system completely transformed my business.",
    author: "Michael Torres",
    role: "Broker/Owner",
    company: "Torres Real Estate Group",
  },
  {
    quote: "GrowSmallBiz built a lead generation machine for our team. We went from feast-or-famine to a predictable pipeline of qualified buyers and sellers.",
    author: "Sarah Chen",
    role: "Team Lead",
    company: "Premier Properties",
  },
  {
    quote: "The AI Receptionist alone paid for itself in the first month. I never miss a lead call, even during showings.",
    author: "David Kretchmar",
    role: "Realtor",
    company: "Keller Williams",
  },
];

const faqs = [
  {
    question: "Do you provide IDX website integration?",
    answer: "Yes! We build professional real estate websites with full IDX integration, allowing visitors to search MLS listings directly on your site. This keeps prospects engaged and captures their information for follow-up."
  },
  {
    question: "How is real estate marketing different from other industries?",
    answer: "Real estate has longer decision cycles (60-120+ days), requires neighborhood-level targeting, and demands both buyer and seller lead strategies. We build systems that nurture prospects through the entire journey from first search to closing."
  },
  {
    question: "Can you help with both buyer and seller lead generation?",
    answer: "Absolutely. We create separate funnels for buyers (property search, neighborhood guides) and sellers (home valuation tools, market reports) — each optimized for conversion and integrated into your CRM."
  },
  {
    question: "How does the AI Receptionist work for real estate?",
    answer: "The AI Receptionist answers calls 24/7, qualifies leads by asking about their timeline, budget, and preferences, and books showings or consultations directly into your calendar — even while you're at a showing or open house."
  },
  {
    question: "How long until I see more leads from SEO?",
    answer: "Most agents see increased website traffic within 2-3 months and measurable lead growth within 4-6 months. For immediate results, we pair SEO with Google Ads and Meta campaigns that generate leads from day one."
  }
];

const caseStudies = [
  {
    company: "Torres Real Estate Group",
    location: "Bay Area, CA",
    industry: "Real Estate Brokerage",
    challenge: "Heavy reliance on referrals with no digital lead generation system. Competitors dominated local search results.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Leads", before: "12", after: "47", improvement: "+292%" },
      { label: "Listing Appointments", before: "3/mo", after: "11/mo", improvement: "+267%" },
      { label: "Website Traffic", before: "800/mo", after: "4,200/mo", improvement: "+425%" },
      { label: "Google Reviews", before: "28", after: "94", improvement: "+236%" }
    ],
    quote: "My listing inquiries tripled. The digital pipeline completely transformed my business.",
    quoteName: "Michael Torres",
    quoteRole: "Broker/Owner, Torres Real Estate Group"
  },
  {
    company: "Premier Properties Team",
    location: "Contra Costa County, CA",
    industry: "Real Estate Team",
    challenge: "Inconsistent lead flow and no CRM automation. Agents spending too much time on manual follow-up instead of selling.",
    timeframe: "4 months",
    metrics: [
      { label: "Qualified Buyer Leads", before: "8/mo", after: "34/mo", improvement: "+325%" },
      { label: "Seller Leads", before: "2/mo", after: "9/mo", improvement: "+350%" },
      { label: "Response Time", before: "4 hours", after: "< 2 min", improvement: "-97%" },
      { label: "Closed Transactions", before: "4/mo", after: "9/mo", improvement: "+125%" }
    ],
    quote: "We went from feast-or-famine to a predictable pipeline of qualified buyers and sellers.",
    quoteName: "Sarah Chen",
    quoteRole: "Team Lead, Premier Properties"
  }
];

const Realtors = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing for Realtors | GrowSmallBiz</title>
        <meta name="description" content="Grow your real estate business with IDX-integrated websites, AI-powered lead generation, local SEO, and CRM automation. Attract qualified buyers and sellers." />
        <link rel="canonical" href="https://growsmallbiz.io/professional-services/marketing-for-real-estate-agents-brokers/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing for Realtors"
        serviceType="Digital Marketing for Real Estate Professionals"
        description="IDX websites, local SEO, AI lead generation, and CRM automation for realtors and real estate teams."
        url="/professional-services/marketing-for-real-estate-agents-brokers"
        breadcrumbs={[
          { name: "Professional Services", url: "/professional-services" },
          { name: "Real Estate Marketing", url: "/professional-services/marketing-for-real-estate-agents-brokers" },
        ]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={realtorHeroImage} alt="Modern real estate office with digital marketing tools" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Home className="w-4 h-4" />
              Real Estate Digital Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Fill Your Pipeline with <span className="text-gradient">Qualified Buyers & Sellers</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              IDX-integrated websites, AI-powered lead capture, local SEO, and CRM automation — built specifically for realtors and real estate teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href={strategySessionUrl}>
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
            <p className="text-muted-foreground">These are the challenges we hear from realtors every day.</p>
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
              <a href={strategySessionUrl}>Get Your Growth Strategy</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Realtors Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We specialize in building predictable lead pipelines for real estate professionals.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Real Estate Marketing Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to attract, capture, and convert buyers and sellers.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Real Results for Real Estate Professionals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Average results from our realtor clients after 6 months.</p>
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
        title="Why Choose GrowSmallBiz for Real Estate Marketing"
        subtitle="Your Real Estate Growth Partner"
        description="We understand the unique challenges realtors face — long decision cycles, neighborhood-level competition, and the need for both buyer and seller lead generation."
        items={[
          { title: "Real Estate Specialists", description: "We focus on real estate professionals — we know IDX, MLS, and the buyer/seller journey inside out.", icon: Home },
          { title: "Lead Pipeline Builder", description: "Build a predictable pipeline of qualified buyers and sellers with multi-channel lead generation.", icon: Target },
          { title: "CRM & Automation", description: "Nurture prospects through 60-120 day decision cycles without lifting a finger.", icon: Database },
          { title: "Neighborhood Authority", description: "Become the go-to agent for every neighborhood in your service area through local SEO.", icon: MapPin },
          { title: "AI Search Visibility", description: "Get recommended when potential clients ask AI for the best realtor in your area.", icon: Bot },
          { title: "Proven ROI", description: "Our realtor clients typically see 3-5x return on marketing investment within 6 months.", icon: TrendingUp },
        ]}
      />

      <CaseStudySection 
        caseStudies={caseStudies}
        title="Real Estate Success Stories"
        subtitle="See how we've helped realtors build predictable lead pipelines"
        ctaLink={strategySessionUrl}
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={testimonials}
        title="What Realtors Say"
        subtitle="See how real estate professionals are growing with GrowSmallBiz"
      />

      <FAQSection 
        faqs={faqs}
        title="Real Estate Marketing FAQs"
        subtitle="Common questions from realtors and real estate teams"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Real Estate Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your real estate business together.",
        }}
      />

      <BlogSection 
        posts={generalBlogPosts}
        title="Real Estate Marketing Insights"
        subtitle="Tips and strategies to grow your real estate business"
      />

      <CardCTA
        title="Ready to Fill Your Pipeline with Qualified Buyers & Sellers?"
        description="Get a free strategy session and discover how to build a predictable lead generation engine for your real estate business."
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default Realtors;
