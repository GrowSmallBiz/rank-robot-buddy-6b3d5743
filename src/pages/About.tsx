import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CardCTA } from "@/components/services/CardCTA";
import { createContactCTA } from "@/config/contactCTA";
import { ArrowRight, Target, Users, Zap, Award, TrendingUp, Shield, MapPin, Bot, Eye, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

const aboutFaqs = [
  {
    question: "What types of businesses does GrowSmallBiz work with?",
    answer: "We specialize in helping local service-based businesses including HVAC companies, dental practices, med spas, chiropractors, auto repair shops, photographers, and similar industries. Our strategies are tailored to businesses that serve local customers and want to dominate their geographic market."
  },
  {
    question: "How is GrowSmallBiz different from other digital marketing agencies?",
    answer: "We combine traditional SEO expertise with cutting-edge AI optimization (AEO & GEO), ensuring your business is visible both on Google and AI platforms like ChatGPT. Plus, we focus exclusively on local businesses, so we understand the unique challenges and opportunities you face."
  },
  {
    question: "What results can I expect and how quickly?",
    answer: "Most clients see noticeable improvements within 3-4 months, with significant results by 6 months. Typical outcomes include 2-3x increase in organic traffic, substantial growth in leads and phone calls, and improved Google rankings. Results vary based on your starting point and competition."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We offer flexible engagement options. While SEO is a long-term strategy and we recommend a minimum 6-month commitment to see meaningful results, we don't lock you into rigid multi-year contracts. Our goal is to earn your business through results, not contracts."
  },
  {
    question: "How do you measure and report success?",
    answer: "We provide transparent monthly reports showing rankings, traffic, leads, and calls. We focus on metrics that matter to your business—not just vanity metrics. You'll always know exactly what we're doing and how it's impacting your bottom line."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is customized based on your business size, competition, and goals. We offer packages starting from comprehensive local SEO to full-service digital marketing. Schedule a free assessment to get a personalized quote for your specific situation."
  },
];

const aboutContactCTA = createContactCTA({
  title: "Have more questions about GrowSmallBiz?",
  description: "We're here to help!",
  tagline: "Let's discuss how we can help grow your business together."
});

const aboutTestimonials = [
  {
    quote: "GrowSmallBiz became an extension of our team. They understand our industry and deliver results month after month.",
    author: "Dr. Jennifer Park",
    role: "Practice Owner",
    company: "Park Family Dentistry",
  },
  {
    quote: "The transparency and communication is incredible. We always know exactly what's happening with our campaigns.",
    author: "Mike Thompson",
    role: "Owner",
    company: "Thompson HVAC Services",
  },
  {
    quote: "They don't just do SEO—they understand our business goals and help us achieve them. True partners.",
    author: "Amanda Foster",
    role: "Medical Director",
    company: "Radiance Aesthetics",
  },
];

const values = [
  {
    title: "Results-Driven",
    description: "We measure success by your growth, not vanity metrics. Every strategy is designed to drive real business outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Transparency First",
    description: "No black boxes or hidden tactics. We explain exactly what we do, why we do it, and how it impacts your business.",
    icon: Shield,
  },
  {
    title: "Local Expertise",
    description: "We specialize in helping small and medium local businesses compete with larger competitors in their markets.",
    icon: Target,
  },
  {
    title: "AI-Forward Approach",
    description: "We stay ahead of the curve, integrating AI tools and optimizing for AI platforms before they become mainstream.",
    icon: Zap,
  },
];

const stats = [
  { value: "150+", label: "Local Businesses Served" },
  { value: "3.2x", label: "Average Traffic Increase" },
  { value: "85%", label: "Client Retention Rate" },
  { value: "5+", label: "Years of Experience" },
];

const aboutCaseStudies = [
  {
    company: "Premier Dental Group",
    location: "San Jose, CA",
    industry: "Dental Practice",
    challenge: "New patient flow had plateaued despite years of experience. Needed to attract more high-value cosmetic cases.",
    timeframe: "6 months",
    metrics: [
      { label: "New Patients/Month", before: "28", after: "84", improvement: "+200%" },
      { label: "Cosmetic Case Value", before: "$2,100", after: "$5,800", improvement: "+176%" },
      { label: "Google Rankings", before: "Page 3", after: "#1", improvement: "Top Spot" },
    ],
    quote: "GrowSmallBiz transformed our practice. We're now the go-to dental office in our area.",
    quoteName: "Dr. Michael Chen",
    quoteRole: "Owner, Premier Dental Group"
  },
  {
    company: "Comfort Pro HVAC",
    location: "Oakland, CA",
    industry: "HVAC Services",
    challenge: "Losing emergency calls to larger competitors. Website wasn't generating enough service requests.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Service Calls", before: "45", after: "142", improvement: "+216%" },
      { label: "Emergency Calls", before: "8/mo", after: "38/mo", improvement: "+375%" },
      { label: "Average Ticket Value", before: "$380", after: "$620", improvement: "+63%" },
    ],
    quote: "We went from struggling to keep up with the big guys to becoming the #1 choice in our area.",
    quoteName: "Mike Thompson",
    quoteRole: "Owner, Comfort Pro HVAC"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageJsonLd
        pageType="AboutPage"
        name="About GrowSmallBiz Digital Marketing"
        description="AI-powered SEO and digital marketing for local service businesses."
        url="/about"
        breadcrumbs={[{ name: "About", url: "/about" }]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Users className="w-4 h-4" />
                About GrowSmallBiz
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Helping Local Service Businesses{" "}
              <span className="text-gradient">Dominate Online</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200">
              We're a team of SEO specialists, AI strategists, and digital marketers 
              dedicated to helping small and medium local businesses compete and win 
              in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <AnimatedStatsSection stats={stats} columns={4} />

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="text-primary font-medium">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Born from a Simple Belief
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GrowSmallBiz was founded on a simple belief: local businesses deserve 
                  the same caliber of digital marketing that enterprise companies enjoy, 
                  without the enterprise price tag.
                </p>
                <p>
                  We saw too many local businesses struggling to compete online—not because 
                  they lacked quality products or services, but because they couldn't 
                  navigate the complex world of SEO, AI optimization, and digital advertising.
                </p>
                <p>
                  Today, we've helped over 150 local businesses across industries like 
                  HVAC, dental, med spas, and more to establish dominant online presences. 
                  Our approach combines proven SEO strategies with cutting-edge AI optimization 
                  to ensure our clients stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-up delay-200">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Mission</p>
                      <p className="text-sm text-muted-foreground">What drives us every day</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "To democratize digital marketing excellence, ensuring every local 
                    business can achieve online visibility and growth regardless of size 
                    or budget."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every strategy we implement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Local Business Growth"
        subtitle="Built Different for Local Success"
        description="We combine local-first strategy, AI-ready optimization, and full-funnel integration to help your business dominate your market."
        items={[
          { title: "Local-First Strategy", description: "We understand the nuances of local search, Google Business Profile optimization, and geo-targeted campaigns that drive foot traffic and local leads.", icon: MapPin },
          { title: "AI-Ready Optimization", description: "We prepare your business for the AI era with AEO and GEO, ensuring you're visible on ChatGPT, Google AI, and other AI platforms.", icon: Bot },
          { title: "Full-Funnel Integration", description: "We don't just drive traffic—we combine SEO with retargeting and paid media strategies to maximize conversions.", icon: TrendingUp },
          { title: "Results-Driven Approach", description: "We measure success by your growth, not vanity metrics. Every strategy is designed to drive real business outcomes.", icon: Target },
          { title: "Full Transparency", description: "No black boxes or hidden tactics. We explain exactly what we do, why we do it, and how it impacts your business.", icon: Eye },
          { title: "Dedicated Support", description: "Get a dedicated Strategic Partner who champions your success, backed by a curated network of specialists.", icon: Users },
        ]}
      />

      <TestimonialsSection 
        testimonials={aboutTestimonials}
        title="What Our Clients Say"
        subtitle="Hear from the businesses we've helped grow"
      />

      <CaseStudySection 
        caseStudies={aboutCaseStudies}
        title="Client Success Stories"
        subtitle="Real results from real businesses we've helped grow"
        ctaLink="/free-assessment"
        ctaText="Get Results Like These"
      />

      <BlogSection 
        posts={generalBlogPosts.slice(0, 3)}
        title="Latest Insights"
        subtitle="Expert tips and strategies for growing your local business"
        showViewAll={true}
        viewAllLink="/blog"
      />

      <FAQSection 
        faqs={aboutFaqs}
        title="Frequently Asked Questions"
        subtitle="Common questions about working with GrowSmallBiz"
        contactCTA={aboutContactCTA}
      />

      <CardCTA
        title="Let's Talk About Your Business"
        description="Schedule a free strategy call to discuss how we can help your local business grow online."
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default About;
