import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Activity,
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { BlogSection, chiropractorBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import chiroHeroImage from "@/assets/industry-chiro-hero.webp";
import { useUtm } from "@/hooks/use-utm";

const services = [
  { title: "Condition-Based SEO", description: "Rank for high-intent searches like back pain, neck pain, sports injuries, and sciatica relief.", features: ["Condition-specific landing pages", "Symptom-based keyword targeting", "Treatment explanation content", "Patient education resources"] },
  { title: "Local Practice Visibility", description: "Own the local search results when patients look for chiropractic care in your area.", features: ["Google Business Profile optimization", "Local citation consistency", "Review generation campaigns", "Community authority building"] },
  { title: "AI & Voice Search Ready", description: "Be the recommended chiropractor when patients ask smart devices about pain relief.", features: ["Answer Engine Optimization", "FAQ schema implementation", "Conversational content strategy", "Featured snippet targeting"] },
  { title: "Patient Journey Optimization", description: "Guide potential patients from first search to scheduled appointment seamlessly.", features: ["Online scheduling integration", "New patient specials pages", "Insurance information SEO", "First visit preparation content"] },
  { title: "Google Local Services Ads (LSA)", description: "Google Guaranteed badge placement above standard Google Ads for high-intent chiropractic searches.", features: ["Trust-dependent decision support", "Google Guaranteed badge", "Pay-per-lead model", "Increased call rates for new patients"] },
  { title: "Meta & Facebook Ads", description: "Reach wellness-minded patients before they're in acute pain.", features: ["Gym-goer & athlete targeting", "Health-conscious family outreach", "Wellness habit formation campaigns", "Community event promotion"] },
  { title: "CRM & Wellness Plan Automation", description: "Close the recurring revenue gap with automated patient retention.", features: ["Wellness plan onboarding sequences", "Lapsed patient reactivation (30/60/90 day)", "Post-discharge follow-up", "Referral request automation"] }
];

const painPoints = [
  "New patient numbers have plateaued or declined",
  "Competitors are ranking above you for key searches",
  "Your website isn't generating enough appointment requests",
  "Struggling to attract patients seeking specific treatments",
  "Dependent on referrals without a steady organic pipeline"
];

const faqs = [
  { question: "How long does it take to see more new patients from SEO?", answer: "Most chiropractic clients see measurable Map Pack ranking improvement within 60 to 90 days. Significant new patient volume develops over 3 to 5 months in competitive markets. Condition-specific landing pages accelerate this by targeting lower-competition, higher-intent searches like 'sciatica chiropractor [city]' that rank faster than broad 'chiropractor near me' terms." },
  { question: "Can you help us rank for specific conditions like sciatica or sports injuries?", answer: "Yes. Every condition your practice addresses deserves its own optimized page with its own local keyword target. We build condition-specific pages for back pain, neck pain, sciatica, sports injuries, prenatal chiropractic, headaches, and auto accident injury — each targeting the exact search intent of that patient type." },
  { question: "Do you work with multi-location chiropractic groups?", answer: "Yes. Multi-location chiropractic practices require separate Google Business Profile management per location, location-specific landing pages, and a citation strategy that builds authority for each location independently while supporting the overall brand." },
  { question: "How do you help us compete with larger chiropractic chains?", answer: "Larger chains have volume but lack the local community trust and personalization that independent practices can own. We build your local Map Pack authority, review velocity, and condition-specific content depth to outrank chain practices for the high-intent searches that drive the most new patient bookings." },
  { question: "What makes chiropractic SEO different from general healthcare SEO?", answer: "Chiropractic SEO requires condition-specific page architecture that matches each patient's search intent — acute pain, sports injury, wellness care, prenatal. It also requires a dual-funnel approach: converting the patient searching for immediate pain relief while also building authority for wellness and maintenance care searches that attract longer-term, higher-value patients." }
];

const Chiropractor = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Chiropractic Marketing Agency | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="GrowSmallBiz is a chiropractic marketing agency delivering local SEO, condition-specific Google Ads, and CRM automation that fills your schedule and builds recurring wellness revenue. Schedule a free strategy call." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/marketing-for-chiropractors/" />
      </Head>
      <ServiceJsonLd
        serviceName="Chiropractor Marketing"
        serviceType="Digital Marketing for Chiropractors"
        description="SEO and digital marketing to grow your chiropractic practice and attract new patients."
        url="/health-and-wellness-practices/marketing-for-chiropractors/"
        breadcrumbs={[
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Chiropractic Marketing", url: "/health-and-wellness-practices/marketing-for-chiropractors/" },
        ]}
      />
      
      <Header />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={chiroHeroImage} alt="Professional chiropractor treating patient" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Activity className="w-4 h-4" />
              Chiropractic Practice Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100 bg-gradient-heading bg-clip-text text-transparent">
              Full-Service Chiropractic Marketing Built to Fill Your Schedule With New and Returning Patients
            </h1>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              GrowSmallBiz gives chiropractic practices every digital marketing tool they need — to attract new patients through condition-specific local search, convert them to wellness plans, and build the recurring revenue model that makes your practice resilient.
            </p>
            <p className="text-sm text-muted-foreground mb-8 animate-fade-up delay-200">Serving chiropractic practices across the United States.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href={strategySessionUrl}>
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/seo-agency/local-seo/">Learn About Local SEO</Link>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  Sound Familiar?
</h2>
            <p className="text-muted-foreground">These are the challenges we hear from chiropractors every day.</p>
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
            <p className="text-xl font-display font-semibold text-primary mb-4">We can help you grow.</p>
            <Button variant="hero" asChild>
              <a href={strategySessionUrl}>Schedule Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Chiropractic Practices Need a Specialized Marketing Partner */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center bg-gradient-heading bg-clip-text text-transparent">
  Why Chiropractic Practices Need a Specialized Marketing Partner
</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Most marketing agencies treat chiropractors like restaurants or retail shops. They don't understand the difference between a new acute pain patient and a wellness plan conversion. They don't know that 'sciatica relief [city]' and 'chiropractor near me' require completely different landing pages.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Two Distinct Patient Types — Two Distinct Strategies</h3>
                <p className="text-muted-foreground">The acute pain patient is in pain now, needs help today, and makes a fast decision based on availability, location, and reviews. The wellness patient evaluates providers carefully and commits to ongoing care based on trust and demonstrated outcomes. A single-strategy approach serves neither well.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Condition-Specific Search Requires Condition-Specific Pages</h3>
                <p className="text-muted-foreground">A patient searching 'back pain chiropractor near me' is different from 'sports injury chiropractor' or 'prenatal chiropractic.' Each search represents a distinct patient need and requires a distinct landing page. Practices with condition-specific pages consistently outrank those relying on a single homepage.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">The Recurring Revenue Gap Is the Biggest Missed Opportunity</h3>
                <p className="text-muted-foreground">The 'I feel better, I'll stop coming' drop-off costs the average chiropractic practice tens of thousands of dollars in lost recurring revenue every year. Marketing that focuses only on new patient acquisition misses the retention revenue that makes a practice financially resilient.</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground italic">Most chiropractic practices grow on referrals — until something changes. The practices that survive and thrive are the ones that built an independent digital presence before they needed it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Chiropractic Marketing Agency Do? */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center bg-gradient-heading bg-clip-text text-transparent">
  What Does a Chiropractic Marketing Agency Do?
</h2>
            <p className="text-muted-foreground mb-6 text-lg text-center max-w-3xl mx-auto">
              A chiropractic marketing agency manages the full spectrum of digital marketing for chiropractic practices — from local SEO and Google Map Pack visibility to condition-specific paid advertising, patient retention automation, and reputation management.
            </p>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto">
              For chiropractic practices specifically, this means building strategies that address both emergency-intent searches and long-term patient retention — because the recurring wellness patient is where sustainable practice revenue is built.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  Chiropractic Marketing Services from GrowSmallBiz
</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to attract more patients seeking relief.</p>
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

      {/* Chiropractic Practice Results */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  Chiropractic Practice Results
</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">The following results are drawn from verified client engagements.</p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/">
                View AI SEO Case Study →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Chiropractic Practices Choose GrowSmallBiz */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center bg-gradient-heading bg-clip-text text-transparent">
  Why Chiropractic Practices Choose GrowSmallBiz
</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">We Understand Both Patient Types</h3>
                <p className="text-muted-foreground">We build chiropractic marketing systems designed around how patients actually find, evaluate, and commit to a chiropractor — and how to keep them coming back. Acute pain campaigns and wellness plan conversion are built as separate strategies that work together.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Exclusive Leads</h3>
                <p className="text-muted-foreground">We don't sell shared leads. Everything we build generates exclusive patient inquiries that come directly to you — not to you and three competing practices simultaneously.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Complete System</h3>
                <p className="text-muted-foreground">Local SEO, website design, Google Ads, LSA, reputation management, AI Receptionist, and CRM automation — fully integrated. No gaps between your ad spend and your patient follow-up system.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">GrowSmallBiz is led by a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation — applied directly to your patient acquisition and retention strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={faqs}
        title="Chiropractic Marketing FAQs"
        subtitle="Common questions from chiropractors"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Chiropractic Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your chiropractic practice together.",
        }}
      />

      <BlogSection 
        posts={chiropractorBlogPosts}
        title="Chiropractic Marketing Insights"
        subtitle="Expert tips to help your practice grow online"
        showViewAll={false}
      />

      <CardCTA
        title="Ready to Fill Your Schedule?"
        description="Get a free strategy session and discover how to attract more patients seeking relief to your chiropractic practice."
        buttonHref={strategySessionUrl}
        buttonText="Schedule Strategy Call"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default Chiropractor;
