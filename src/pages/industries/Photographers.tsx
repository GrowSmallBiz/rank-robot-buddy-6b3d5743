import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
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
  Heart,
  Image,
  Search,
  Share2
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, photographerBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import photographerHeroImage from "@/assets/industry-photographer-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const benefits = [
  {
    icon: Search,
    title: "Rank Above Shoot & Burn Competitors",
    description: "Dominate local search for 'wedding photographer [city]', 'family portraits near me', and genre-specific queries."
  },
  {
    icon: Calendar,
    title: "Fill Your Calendar Year-Round",
    description: "Break the feast-or-famine cycle with a predictable pipeline of qualified photography clients."
  },
  {
    icon: Bot,
    title: "AI Search Discovery",
    description: "Get recommended when potential clients ask AI 'Who's the best photographer near me?'"
  },
  {
    icon: Star,
    title: "Premium Positioning",
    description: "Attract clients who value artistry over price — stop racing to the bottom."
  }
];

const services = [
  {
    title: "Photography SEO & Portfolio Optimization",
    description: "Rank for the searches your ideal clients are making — by genre, style, and location.",
    features: ["Genre-specific landing pages (wedding, portrait, headshot)", "Image SEO with alt tags & schema", "Google Business Profile optimization", "Portfolio website optimization"]
  },
  {
    title: "Paid Advertising for Photographers",
    description: "Targeted Google and Meta ads that drive qualified inquiries for your specific photography genres.",
    features: ["Google PPC for high-intent searches", "Instagram & Facebook portfolio ads", "Pinterest advertising for wedding & lifestyle", "Retargeting website visitors"]
  },
  {
    title: "AI & Voice Search Optimization",
    description: "Be the photographer AI assistants recommend when clients research options.",
    features: ["Answer Engine Optimization", "Featured snippet targeting", "Conversational content strategy", "ChatGPT & Gemini citation building"]
  },
  {
    title: "Lead Capture & CRM Automation",
    description: "Never miss an inquiry — capture, qualify, and nurture every lead automatically.",
    features: ["AI Receptionist for 24/7 inquiry handling", "Automated booking workflows", "Client nurture sequences", "Review request automation"]
  }
];

const painPoints = [
  "Empty calendar syndrome — packed some months, crickets the next",
  "Relying solely on referrals with no control over your growth",
  "Google ranking shoot-and-burn photographers above your stunning portfolio",
  "Spending hours posting on Instagram with minimal bookings",
  "Competing on price instead of artistry — attracting bargain hunters"
];

const results = [
  { metric: "340%", label: "Increase in booking inquiries" },
  { metric: "45", label: "First page keywords" },
  { metric: "$8.2K", label: "Average monthly revenue increase" },
  { metric: "4.9", label: "Average Google rating achieved" }
];

const testimonials = [
  {
    quote: "I went from 2-3 inquiries a month to 15+. My calendar is consistently booked 3 months out now. GrowSmallBiz changed everything.",
    author: "Jessica Morales",
    role: "Owner",
    company: "Jessica Morales Photography",
  },
  {
    quote: "I was invisible on Google despite having an incredible portfolio. Now I rank #1 for wedding photographer in my city and I'm booking premium packages.",
    author: "Ryan Mitchell",
    role: "Wedding Photographer",
    company: "Mitchell Visual",
  },
  {
    quote: "The AI follow-up system is a game changer. I never miss an inquiry, even when I'm in the middle of a shoot.",
    author: "Alicia Park",
    role: "Portrait Photographer",
    company: "Park Studios",
  },
];

const faqs = [
  {
    question: "How is photography SEO different from general SEO?",
    answer: "Photography SEO requires genre-specific keyword targeting (wedding, portrait, headshot, etc.), heavy image optimization with alt tags and schema markup, portfolio page SEO, and location + style targeting. We understand how potential clients search for photographers — by genre, location, and style."
  },
  {
    question: "Can you help me rank for multiple photography genres?",
    answer: "Yes! We create dedicated, SEO-optimized landing pages for each genre you shoot — wedding, family, senior, headshot, maternity, etc. Each page targets genre-specific keywords in your market, allowing you to rank for multiple services simultaneously."
  },
  {
    question: "How do you help photographers stop competing on price?",
    answer: "We position your brand as premium through luxury-focused content, before/after showcases, and strategic review generation. Clients who find you through organic search are already searching for quality — they convert at higher rates and higher price points than social media leads."
  },
  {
    question: "How does the AI Receptionist work for photography businesses?",
    answer: "The AI Receptionist answers inquiries 24/7, qualifies leads by asking about their event date, genre, and budget range, and books consultations directly into your calendar — even while you're shooting or editing."
  },
  {
    question: "How long until I see more bookings from SEO?",
    answer: "Most photographers see increased website traffic within 2-3 months and measurable inquiry growth within 4-6 months. For immediate results, we pair SEO with Google Ads and Meta campaigns that generate leads from day one."
  }
];

const caseStudies = [
  {
    company: "Jessica Morales Photography",
    location: "Austin, TX",
    industry: "Wedding & Portrait Photography",
    challenge: "Beautiful portfolio but invisible on Google. Relied entirely on Instagram and word-of-mouth, creating unpredictable income.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Inquiries", before: "3", after: "18", improvement: "+500%" },
      { label: "Average Package Value", before: "$1,800", after: "$3,200", improvement: "+78%" },
      { label: "Website Traffic", before: "400/mo", after: "2,800/mo", improvement: "+600%" },
      { label: "Google Reviews", before: "12", after: "47", improvement: "+292%" }
    ],
    quote: "My calendar is consistently booked 3 months out now. GrowSmallBiz changed everything.",
    quoteName: "Jessica Morales",
    quoteRole: "Owner, Jessica Morales Photography"
  },
  {
    company: "Mitchell Visual",
    location: "Denver, CO",
    industry: "Wedding Photography",
    challenge: "Experienced wedding photographer losing bookings to cheaper competitors who ranked higher on Google. Needed to attract premium clients.",
    timeframe: "6 months",
    metrics: [
      { label: "Wedding Bookings", before: "14/year", after: "32/year", improvement: "+129%" },
      { label: "Average Wedding Package", before: "$3,500", after: "$5,800", improvement: "+66%" },
      { label: "Organic Traffic", before: "600/mo", after: "3,400/mo", improvement: "+467%" },
      { label: "First Page Rankings", before: "3", after: "28", improvement: "+833%" }
    ],
    quote: "I rank #1 for wedding photographer in my city and I'm booking premium packages consistently.",
    quoteName: "Ryan Mitchell",
    quoteRole: "Wedding Photographer, Mitchell Visual"
  }
];

const Photographers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing for Photographers | SEO & Lead Generation | GrowSmallBiz</title>
        <meta name="description" content="Fill your photography calendar year-round with AI-powered SEO, portfolio optimization, and automated lead capture. Wedding, portrait, and headshot photographers." />
        <link rel="canonical" href="https://growsmallbiz.io/industries/digital-marketing-for-photographers/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing for Photographers"
        serviceType="Digital Marketing for Photography Businesses"
        description="SEO, paid advertising, portfolio optimization, and AI lead capture for professional photographers."
        url="/industries/digital-marketing-for-photographers"
        breadcrumbs={[
          { name: "Industries", url: "/industries/digital-marketing-for-photographers" },
          { name: "Photographers", url: "/industries/digital-marketing-for-photographers" },
        ]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={photographerHeroImage} alt="Professional photographer at work in studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Camera className="w-4 h-4" />
              Photography Business Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Stop Competing on Price. Start <span className="text-gradient">Booking Premium Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Fill your calendar year-round with qualified clients who value your artistry. AI-powered SEO, portfolio optimization, and automated lead capture built for photographers.
            </p>
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
            <p className="text-muted-foreground">These are the challenges we hear from photographers every day.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Photographers Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We specialize in helping photographers break the feast-or-famine cycle.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Photography Marketing Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to attract premium clients and fill your calendar.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Real Results for Real Photographers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Average results from our photography clients after 6 months.</p>
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
        title="Why Choose GrowSmallBiz for Photography Marketing"
        subtitle="Your Photography Growth Partner"
        description="We understand the photography business — seasonal demand, genre competition, and the need to attract clients who value artistry over price."
        items={[
          { title: "Photography Specialists", description: "We know the photography industry — wedding, portrait, headshot, and commercial. Your marketing speaks your clients' language.", icon: Camera },
          { title: "Portfolio-First Strategy", description: "Your stunning work deserves to be seen. We optimize your portfolio for search engines and human conversion.", icon: Image },
          { title: "Genre-Specific SEO", description: "Dedicated landing pages for every genre you shoot — each targeting the right keywords in your market.", icon: Target },
          { title: "Premium Client Attraction", description: "Attract clients who value artistry and are willing to invest — not bargain hunters comparing prices.", icon: Heart },
          { title: "AI Search Visibility", description: "Get recommended when potential clients ask AI for the best photographer in your area.", icon: Bot },
          { title: "Proven ROI", description: "Our photography clients typically see 3-5x return on marketing investment within 6 months.", icon: TrendingUp },
        ]}
      />

      <CaseStudySection 
        caseStudies={caseStudies}
        title="Photography Success Stories"
        subtitle="See how we've helped photographers fill their calendars with premium clients"
        ctaLink="https://lp.growsmallbiz.io/digital-growth-strategy-session"
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={testimonials}
        title="What Photographers Say"
        subtitle="See how photography businesses are growing with GrowSmallBiz"
      />

      <FAQSection 
        faqs={faqs}
        title="Photography Marketing FAQs"
        subtitle="Common questions from professional photographers"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Photography Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your photography business together.",
        }}
      />

      <BlogSection 
        posts={photographerBlogPosts}
        title="Photography Marketing Insights"
        subtitle="Tips and strategies to grow your photography business"
      />

      <CardCTA />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default Photographers;
