import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, localSeoBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import { ArrowRight, MapPin, Search, Building, Star, FileText, Users } from "lucide-react";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const localSeoTestimonials = [
  {
    quote: "We went from page 3 to dominating the local map pack. Our phone rings constantly now with qualified local leads.",
    author: "Mike Thompson",
    role: "Owner",
    company: "Thompson HVAC Services",
  },
  {
    quote: "GrowSmallBiz helped us rank for 'dentist near me' in our city. New patient calls increased by 340% in just 4 months.",
    author: "Dr. Lisa Chen",
    role: "Practice Owner",
    company: "Bright Smile Dental",
  },
  {
    quote: "Our Google Business Profile now generates more leads than all our paid advertising combined. Best investment ever.",
    author: "Sarah Mitchell",
    role: "Operations Manager",
    company: "Premier Plumbing Co.",
  },
];
import localSeoImage from "@/assets/local-seo.png";

const faqs: FAQItem[] = [
  {
    question: "What is Local SEO?",
    answer: "Local SEO optimizes your business's online presence to attract customers in specific geographic areas. It focuses on Google Business Profiles, local citations, customer reviews, and on-page signals to improve visibility in local search results and map packs."
  },
  {
    question: "Why does my business need Local SEO?",
    answer: "Local SEO ensures your business appears prominently when nearby customers search for your products or services. It drives foot traffic, increases phone calls and leads, and helps you outrank local competitors in your area."
  },
  {
    question: "How is Local SEO different from general SEO?",
    answer: "General SEO targets national or global search visibility. Local SEO focuses on hyper-local audiences by emphasizing location-based ranking signals like map listings, local citations, reviews, and geo-targeted content."
  },
  {
    question: "What's included in your Local SEO services?",
    answer: "Our Local SEO packages include Google Business Profile optimization, local citation building and management, review acquisition and reputation management, location-based content creation, local link building, and comprehensive reporting dashboards."
  },
  {
    question: "How do you handle Local SEO for my business?",
    answer: "We follow a structured workflow: Audit → Google Business Profile Optimization → Local Listings & Citations → On-Page Optimization → Review Management → Continuous Monitoring & Reporting."
  },
  {
    question: "What metrics do you track for Local SEO success?",
    answer: "We monitor local search rankings, map pack visibility, customer actions (calls, direction requests, website clicks), website traffic from local searches, and conversions to provide clear insights into your local performance."
  },
  {
    question: "Is Local SEO suitable for businesses with multiple locations?",
    answer: "Absolutely. Our strategies scale seamlessly across multiple locations, ensuring consistent optimization, brand presence, and detailed reporting for each branch or service area you operate."
  },
  {
    question: "How does Local SEO help my business grow?",
    answer: "Local SEO drives more nearby customers to your business, increases qualified leads and sales, improves your reputation through reviews, and builds stronger brand visibility in your target geographic markets."
  },
];

const features = [
  {
    title: "Local Keyword Research",
    description: "Identify high-value local search terms that drive nearby customers to your business.",
    icon: Search,
  },
  {
    title: "Google Business Profile Optimization",
    description: "Maximize your GBP presence with complete optimization for local pack rankings.",
    icon: Building,
  },
  {
    title: "Local Citation & Listing Management",
    description: "Build and maintain consistent NAP citations across directories and platforms.",
    icon: FileText,
  },
  {
    title: "On-Page Local SEO Optimization",
    description: "Optimize website content with local signals, location pages, and geo-targeted keywords.",
    icon: MapPin,
  },
  {
    title: "Review & Reputation Management",
    description: "Build and manage your online reputation with strategic review acquisition and response.",
    icon: Star,
  },
  {
    title: "Local Content Creation",
    description: "Develop locally-focused content that resonates with your community and ranks for local searches.",
    icon: Users,
  },
];

const stats = [
  { value: "46%", label: "of Google searches have local intent" },
  { value: "76%", label: "of local searches visit a business within 24 hours" },
  { value: "28%", label: "of local searches result in a purchase" },
];

const LocalSEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Local SEO Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Dominate{" "}
                <span className="text-gradient">Local Search</span>{" "}
                Results
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Attract nearby customers and dominate local search rankings. Our local 
                SEO services optimize your Google Business Profile, listings, and on-page 
                signals to boost local visibility, traffic, and leads.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Get Started with Local SEO
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={localSeoImage}
                  alt="Local SEO map visualization with location pins"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Local SEO"
        subtitle="Your Local Search Partner"
        description="We specialize in helping service businesses dominate local search results, attract nearby customers, and outrank competitors in their geographic markets."
        items={[
          { title: "Local Search Experts", description: "We focus exclusively on local SEO strategies that drive foot traffic, phone calls, and leads from customers in your service area.", icon: MapPin },
          { title: "Google Business Mastery", description: "Our GBP optimization strategies help you dominate the local map pack and capture high-intent local searches.", icon: Building },
          { title: "Citation Management", description: "We build and maintain accurate business listings across 100+ directories to boost your local authority.", icon: FileText },
          { title: "Review Generation", description: "Our automated review request systems help you build social proof and improve local rankings organically.", icon: Star },
          { title: "Transparent Reporting", description: "See exactly how your local rankings are improving with our clear, actionable monthly reports.", icon: Users },
          { title: "Multi-Location Expertise", description: "We scale local SEO strategies seamlessly across multiple locations while maintaining consistency.", icon: Search },
        ]}
      />

      <AnimatedStatsSection stats={stats} columns={3} />

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Complete Local SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to rank in local search and attract customers in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="ghl-card rounded-xl p-8 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ghl-icon">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection 
        testimonials={localSeoTestimonials}
        title="Local SEO Success Stories"
        subtitle="See how we've helped businesses dominate their local markets"
      />

      <PlatformAdvantagesSection variant="compact" serviceType="local" />

      <FAQSection
        faqs={faqs}
        subtitle="Common questions about our local SEO services and strategies."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Local SEO?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's dominate local search together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={localSeoBlogPosts}
        title="Local SEO Insights"
        subtitle="Expert tips to dominate local search results"
        showViewAll={false}
      />

      <PersonCTA
        title="Ready to Dominate Local Search Results?"
        description="Attract nearby customers, boost your Google Business Profile, and outrank local competitors. Start getting more local leads today."
        sectionClassName="py-12 bg-section-dark"
      />
      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default LocalSEO;
