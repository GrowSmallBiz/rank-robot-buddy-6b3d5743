import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart,
  TrendingUp, 
  MapPin, 
  Star, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Activity
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, chiropractorBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import chiroHeroImage from "@/assets/industry-chiro-hero.jpg";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const benefits = [
  {
    icon: MapPin,
    title: "Local Patient Acquisition",
    description: "Rank #1 for 'chiropractor near me', 'back pain relief', and wellness searches in your service area."
  },
  {
    icon: Calendar,
    title: "New Patient Flow",
    description: "Convert searchers into scheduled appointments with optimized landing pages and booking systems."
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description: "Get recommended when patients ask AI assistants 'Who's the best chiropractor for lower back pain?'"
  },
  {
    icon: Star,
    title: "Trust & Authority",
    description: "Build credibility with patient reviews and educational content that positions you as the expert."
  }
];

const services = [
  {
    title: "Condition-Based SEO",
    description: "Rank for high-intent searches like back pain, neck pain, sports injuries, and sciatica relief.",
    features: ["Condition-specific landing pages", "Symptom-based keyword targeting", "Treatment explanation content", "Patient education resources"]
  },
  {
    title: "Local Practice Visibility",
    description: "Own the local search results when patients look for chiropractic care in your area.",
    features: ["Google Business Profile optimization", "Local citation consistency", "Review generation campaigns", "Community authority building"]
  },
  {
    title: "AI & Voice Search Ready",
    description: "Be the recommended chiropractor when patients ask smart devices about pain relief.",
    features: ["Answer Engine Optimization", "FAQ schema implementation", "Conversational content strategy", "Featured snippet targeting"]
  },
  {
    title: "Patient Journey Optimization",
    description: "Guide potential patients from first search to scheduled appointment seamlessly.",
    features: ["Online scheduling integration", "New patient specials pages", "Insurance information SEO", "First visit preparation content"]
  }
];

const painPoints = [
  "New patient numbers have plateaued or declined",
  "Competitors are ranking above you for key searches",
  "Your website isn't generating enough appointment requests",
  "Struggling to attract patients seeking specific treatments",
  "Dependent on referrals without a steady organic pipeline"
];

const results = [
  { metric: "256%", label: "Increase in new patients" },
  { metric: "43", label: "First page keywords" },
  { metric: "48%", label: "Reduction in cost per lead" },
  { metric: "4.9", label: "Average Google rating achieved" }
];

const chiroTestimonials = [
  {
    quote: "We went from struggling to find new patients to having a consistent flow of quality leads. Our schedule is now full weeks in advance.",
    author: "Dr. Michael Torres",
    role: "Clinic Director",
    company: "Align Chiropractic & Wellness",
  },
  {
    quote: "GrowSmallBiz helped us rank #1 for 'chiropractor' and 'back pain relief' in our city. The ROI has been phenomenal.",
    author: "Dr. Lisa Chang",
    role: "Owner",
    company: "Vitality Spine Center",
  },
  {
    quote: "New patient appointments increased 250% in 5 months. We now have a waitlist for new patients.",
    author: "Dr. James Park",
    role: "Practice Owner",
    company: "Peak Performance Chiropractic",
  },
];

const faqs = [
  {
    question: "How long does it take to see more new patients from SEO?",
    answer: "Most chiropractic practices see measurable increases in website traffic within 2-3 months and new patient growth within 4-6 months. Local map pack improvements often occur faster as we optimize your Google Business Profile."
  },
  {
    question: "Can you help us rank for specific conditions like sciatica or sports injuries?",
    answer: "Absolutely! We create dedicated landing pages for each condition and treatment you specialize in, targeting patients actively searching for relief from specific symptoms."
  },
  {
    question: "Do you work with multi-location chiropractic groups?",
    answer: "Yes! We have experience with both single-location practices and multi-location chiropractic groups. We create location-specific strategies while maintaining brand consistency."
  },
  {
    question: "How do you help us compete with larger chiropractic chains?",
    answer: "We focus on your unique strengths—personalized care, specific specialties, community presence—and build content and SEO strategies that highlight what makes your practice special."
  },
  {
    question: "What makes chiropractic SEO different from general healthcare SEO?",
    answer: "Chiropractic SEO requires understanding patient pain points, treatment-seeking behavior, and the wellness vs. medical positioning. We specialize in this niche and understand the patient journey from pain to relief."
  }
];

const caseStudies = [
  {
    company: "Align Chiropractic & Wellness",
    location: "Portland, OR",
    industry: "Chiropractic Care",
    challenge: "New patient numbers had plateaued. Practice was too dependent on referrals without a steady organic pipeline of patients seeking pain relief.",
    timeframe: "5 months",
    metrics: [
      { label: "New Patients/Month", before: "18", after: "64", improvement: "+256%" },
      { label: "Organic Website Traffic", before: "450/mo", after: "2,800/mo", improvement: "+522%" },
      { label: "Back Pain Keywords Ranking", before: "Page 4", after: "#2", improvement: "Top 3" },
      { label: "Monthly Revenue", before: "$32K", after: "$89K", improvement: "+178%" }
    ],
    quote: "We went from struggling to find new patients to having a consistent flow of quality leads.",
    quoteName: "Dr. Michael Torres",
    quoteRole: "Clinic Director, Align Chiropractic"
  },
  {
    company: "Vitality Spine Center",
    location: "Charlotte, NC",
    industry: "Sports & Spine Chiropractic",
    challenge: "Wanted to specialize in sports injuries but couldn't rank for athletic-related keywords. Losing potential patients to physical therapy clinics.",
    timeframe: "7 months",
    metrics: [
      { label: "Sports Injury Inquiries", before: "6/mo", after: "38/mo", improvement: "+533%" },
      { label: "Chiropractor Near Me Rank", before: "#12", after: "#1", improvement: "Top Spot" },
      { label: "Cost Per New Patient", before: "$120", after: "$18", improvement: "-85%" },
      { label: "Patient Retention Rate", before: "45%", after: "78%", improvement: "+73%" }
    ],
    quote: "GrowSmallBiz helped us rank #1 for 'chiropractor' and 'back pain relief' in our city. The ROI has been phenomenal.",
    quoteName: "Dr. Lisa Chang",
    quoteRole: "Owner, Vitality Spine Center"
  }
];

const Chiropractor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Chiropractor SEO Services | Grow Your Practice | GrowSmallBiz</title>
        <meta name="description" content="Grow your chiropractic practice with specialized SEO. Rank #1 for back pain, neck pain, and 'chiropractor near me' searches. Get more new patients." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={chiroHeroImage} 
            alt="Professional chiropractor treating patient" 
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
              <Activity className="w-4 h-4" />
              Chiropractic Practice SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Help More Patients Find <span className="text-gradient">Relief Through You</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
              Rank #1 for back pain, neck pain, and chiropractic searches. Build a steady stream of new patients seeking your care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment?industry=chiropractic">
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
              These are the challenges we hear from chiropractors every day.
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
              <Link to="/free-assessment?industry=chiropractic">
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
              Why Chiropractors Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in helping chiropractic practices attract more patients seeking relief.
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
              Our Chiropractic SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to attract more patients seeking relief.
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
              Average results from our chiropractic clients after 6 months.
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
        title="Why Choose GrowSmallBiz for Chiropractic Marketing"
        subtitle="Your Chiropractic Marketing Partner"
        description="We specialize in helping chiropractic practices attract new patients, build trust through education, and become the go-to wellness provider in your community."
        items={[
          { title: "Chiropractic Experts", description: "We focus exclusively on chiropractic practices—we know what works for wellness and pain relief marketing.", icon: Heart },
          { title: "New Patient Flow", description: "Attract patients seeking back pain relief, sports injuries, wellness care, and family chiropractic.", icon: Users },
          { title: "Educational Authority", description: "Build trust through content that positions you as the expert in spinal health and wellness.", icon: Activity },
          { title: "Local SEO Domination", description: "Rank #1 for 'chiropractor near me' and condition-specific searches in your area.", icon: MapPin },
          { title: "AI Search Ready", description: "Get recommended when patients ask AI assistants about back pain and chiropractic care.", icon: Bot },
          { title: "Proven Growth", description: "Our chiropractic clients typically see 2-3x more new patient inquiries within 90 days.", icon: TrendingUp },
        ]}
      />

      {/* Case Studies Section */}
      <CaseStudySection 
        caseStudies={caseStudies}
        title="Chiropractic Success Stories"
        subtitle="See how we've helped practices like yours attract more patients"
        ctaLink="/free-assessment?industry=chiropractic"
        ctaText="Get Results Like These"
      />

      <TestimonialsSection 
        testimonials={chiroTestimonials}
        title="What Chiropractors Say About Us"
        subtitle="See how chiropractic practices transform their patient acquisition"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Chiropractic SEO FAQs"
        subtitle="Common questions from chiropractors"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Chiropractic Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your chiropractic practice together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={chiropractorBlogPosts}
        title="Chiropractic Marketing Insights"
        subtitle="Expert tips to help your practice grow online"
        showViewAll={false}
      />

      {/* CardCTA Section */}
      <CardCTA
        title="Ready to Help More Patients?"
        description="Get a free SEO audit and discover how to attract more patients seeking relief to your chiropractic practice."
        buttonHref="/free-assessment?industry=chiropractic"
        buttonText="Get Your Free Practice Audit"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default Chiropractor;
