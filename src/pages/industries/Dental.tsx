import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smile,
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { BlogSection, dentalBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import dentalHeroImage from "@/assets/industry-dental-hero.jpg";

const services = [
  { title: "New Patient SEO", description: "Attract high-value patients searching for cosmetic dentistry, implants, and specialty services.", features: ["High-intent keyword targeting", "Procedure-specific landing pages", "Before/after gallery optimization", "Insurance & financing page SEO"] },
  { title: "Local Map Pack Domination", description: "Own the Google Map Pack when patients search for dentists in your area.", features: ["Google Business Profile optimization", "Local citation consistency", "Review generation campaigns", "Competitor displacement strategies"] },
  { title: "AI & Voice Search Ready", description: "Be the recommended dentist when patients ask Alexa, Siri, or ChatGPT for help.", features: ["Answer Engine Optimization", "FAQ schema implementation", "Conversational content strategy", "Featured snippet targeting"] },
  { title: "Conversion Optimization", description: "Turn website visitors into booked appointments and consultations.", features: ["Online booking integration", "Mobile optimization", "Trust signal placement", "Patient journey optimization"] },
  { title: "Google Local Services Ads (LSA)", description: "Google Guaranteed badge placement above organic results for high-intent dental searches.", features: ["Highest-trust ad format for healthcare", "Pay per lead, not per click", "Google Guaranteed badge", "Emergency search prominence"] },
  { title: "CRM & Recall Automation", description: "Automated patient follow-ups, recall reminders, reactivation campaigns, and referral request sequences.", features: ["Patient retention improvement", "Lifetime patient value increase", "Recall reminder automation", "Referral request sequences"] },
  { title: "Answer Engine Optimization (AEO)", description: "Optimizes your content and schema markup for AI-powered search responses from Siri, ChatGPT, and Google AI.", features: ["AI search response optimization", "Voice search capture", "Schema markup implementation", "Growing AI patient discovery"] }
];

const painPoints = [
  "New patient flow has stagnated or declined",
  "Competitors are outranking you for key searches",
  "Your website isn't generating enough appointment requests",
  "Struggling to attract high-value cosmetic patients",
  "Paying too much for ineffective marketing"
];

const faqs = [
  { question: "How long does it take to see more new patients from SEO?", answer: "Most dental practices see meaningful Map Pack ranking improvements within 60 to 90 days. Google Ads and Local Services Ads deliver new patient inquiries within 2 to 4 weeks of campaign launch — making the combination of paid and organic the fastest path to sustained patient growth." },
  { question: "Can you help us rank for high-value procedures like implants and cosmetic dentistry?", answer: "Yes. Each high-value procedure requires its own dedicated landing page optimized for procedure-specific searches — 'dental implants [city],' 'veneers near me,' 'Invisalign [city].' We build and optimize procedure-specific pages for every service you offer, each targeting the right patient intent at the right stage of their decision." },
  { question: "Do you work with multi-location dental groups?", answer: "Yes. Multi-location SEO requires separate Google Business Profile management per location, location-specific landing pages, and citation consistency across all locations. We build multi-location patient acquisition systems for growing dental groups." },
  { question: "How do you help us get more Google reviews?", answer: "We automate review requests after every completed appointment through your CRM system. Patients receive a personalized request at the moment of highest satisfaction — immediately after a positive visit. We also monitor your reputation across Google and Healthgrades and manage your response strategy to build the review profile that converts Map Pack impressions into booked appointments." },
  { question: "What makes dental SEO different from regular SEO?", answer: "Dental SEO operates under Google's YMYL (Your Money or Your Life) content standards, which apply stricter quality requirements to health-related websites. Strong E-E-A-T signals — Experience, Expertise, Authoritativeness, Trustworthiness — are required to rank well. Dental SEO also requires HIPAA-compliant content practices, procedure-specific page architecture, and local citation strategies that account for healthcare-specific directories like Healthgrades." }
];

const Dental = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Dental Marketing Agency | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="GrowSmallBiz is a dental marketing agency that helps independent dental practices attract new patients, build five-star reputations, and implement systems that increase revenue. Schedule a free strategy call." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/dental-marketing/" />
      </Head>
      <ServiceJsonLd
        serviceName="Dental Practice Marketing"
        serviceType="Digital Marketing for Dentists"
        description="SEO, reputation management, and digital marketing to attract more dental patients."
        url="/health-and-wellness-practices/dental-marketing"
        breadcrumbs={[
          { name: "Health & Wellness", url: "/health-and-wellness-practices" },
          { name: "Dental Marketing", url: "/health-and-wellness-practices/dental-marketing" },
        ]}
      />
      
      <Header />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={dentalHeroImage} alt="Modern dental clinic with dentist and patient" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Smile className="w-4 h-4" />
              Dental Practice Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Full-Service Dental Marketing Agency Built to{" "}
              <span className="text-gradient">Grow Your Practice</span> With Proven Patient Acquisition
            </h1>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              GrowSmallBiz is a dental marketing agency that helps independent dental practices attract new patients, build five-star reputations, and implement systems that increase revenue — all managed through a single integrated vendor.
            </p>
            <p className="text-sm text-muted-foreground mb-8 animate-fade-up delay-200">Serving dental practices across the United States.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground">These are the challenges we hear from dental practice owners every day.</p>
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
              <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">Schedule Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dental Practices Need a Specialized Marketing Agency */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">Why Dental Practices Need a Specialized Marketing Agency</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Dental marketing requires specialized knowledge of patient psychology, local search behavior, and healthcare compliance. Generic marketing agencies apply one-size-fits-all tactics that don't account for how dental patients actually make decisions.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">77% of Patients Search Online Before Choosing a Dentist</h3>
                <p className="text-muted-foreground">According to the American Dental Association, the overwhelming majority of prospective patients research online before booking. Your Google Business Profile, reviews, and website are doing the selling before you ever speak to a patient.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">HIPAA Compliance Is Non-Negotiable</h3>
                <p className="text-muted-foreground">Dental advertising operates under HIPAA restrictions that limit what patient information can be used in marketing. Patient photos, testimonials, and identifiable information require explicit written consent. An agency without healthcare marketing experience creates legal exposure for your practice.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Procedure-Specific Marketing Requires Deep Niche Knowledge</h3>
                <p className="text-muted-foreground">A patient searching 'dental implants' is at a completely different stage than one searching 'teeth cleaning near me.' Each requires a different landing page, different messaging, and different conversion strategy.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Trust Signals Determine Who Gets the Call</h3>
                <p className="text-muted-foreground">Verified reviews, professional credentials, HIPAA compliance signals, and before/after imagery (with consent) are the trust indicators that convert a Google impression into a booked appointment.</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground italic">A dental patient checks your Google ranking, reads your reviews, and evaluates your website — all before they dial. Your marketing wins or loses the patient before you ever speak to them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Dental Marketing Agency Do? */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">What Does a Dental Marketing Agency Do?</h2>
            <p className="text-muted-foreground mb-6 text-lg text-center max-w-3xl mx-auto">
              A dental marketing agency manages the full spectrum of digital patient acquisition for dental practices — from local SEO and Google Map Pack visibility to Google Ads management, website design, reputation management, and patient retention automation.
            </p>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto">
              For dental practices specifically, this means building strategies that address multiple patient types simultaneously: the emergency patient who needs care today, the cosmetic patient evaluating options over weeks, the family looking for a long-term practice, and the existing patient who needs recall and reactivation. Each requires a distinct approach.
            </p>
          </div>
        </div>
      </section>


            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">77% of Patients Search Online Before Choosing a Dentist</h3>
                <p className="text-muted-foreground">According to the American Dental Association, the overwhelming majority of prospective patients research online before booking. Your Google Business Profile, reviews, and website are doing the selling before you ever speak to a patient.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">HIPAA Compliance Is Non-Negotiable</h3>
                <p className="text-muted-foreground">Dental advertising operates under HIPAA restrictions that limit what patient information can be used in marketing. Patient photos, testimonials, and identifiable information require explicit written consent. An agency without healthcare marketing experience creates legal exposure for your practice.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Procedure-Specific Marketing Requires Deep Niche Knowledge</h3>
                <p className="text-muted-foreground">A patient searching 'dental implants' is at a completely different stage than one searching 'teeth cleaning near me.' Each requires a different landing page, different messaging, and different conversion strategy.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Trust Signals Determine Who Gets the Call</h3>
                <p className="text-muted-foreground">Verified reviews, professional credentials, HIPAA compliance signals, and before/after imagery (with consent) are the trust indicators that convert a Google impression into a booked appointment.</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground italic">A dental patient checks your Google ranking, reads your reviews, and evaluates your website — all before they dial. Your marketing wins or loses the patient before you ever speak to them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Dental Marketing Agency Do? */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">What Does a Dental Marketing Agency Do?</h2>
            <p className="text-muted-foreground mb-6 text-lg text-center max-w-3xl mx-auto">
              A dental marketing agency manages the full spectrum of digital patient acquisition for dental practices — from local SEO and Google Map Pack visibility to Google Ads management, website design, reputation management, and patient retention automation.
            </p>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto">
              For dental practices specifically, this means building strategies that address multiple patient types simultaneously: the emergency patient who needs care today, the cosmetic patient evaluating options over weeks, the family looking for a long-term practice, and the existing patient who needs recall and reactivation. Each requires a distinct approach.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground">These are the challenges we hear from dental practice owners every day.</p>
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
              <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">Schedule Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Dental Marketing Services from GrowSmallBiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to attract, convert, and retain high-value patients.</p>
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

      {/* Dental Patient Acquisition Results */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Dental Patient Acquisition Results</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">The following results are drawn from verified client engagements.</p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/health-and-wellness-practices/dental-marketing/case-study/">
                View Dental Google Ads Case Study →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dental Practices Choose GrowSmallBiz */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">Why Dental Practices Choose GrowSmallBiz</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">One Agency, Every Channel</h3>
                <p className="text-muted-foreground">Local SEO, Google Ads, LSA, website design, reputation management, CRM automation, and AI tools — all integrated with unified reporting. No juggling four vendors who don't talk to each other.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Built for Independent Practices</h3>
                <p className="text-muted-foreground">We don't take large group practice or DSO accounts. Our focus is independent dental practices that want enterprise-quality marketing at pricing designed for their scale.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">HIPAA-Aware Campaigns</h3>
                <p className="text-muted-foreground">Every campaign we build for dental clients is constructed with HIPAA compliance in mind. Ad copy, landing pages, and patient communications are reviewed before launch. Patient privacy is protected throughout every campaign.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">GrowSmallBiz is led by a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation — applied directly to your patient acquisition strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={faqs}
        title="Dental Marketing FAQs"
        subtitle="Common questions from dental practice owners"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Dental Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your dental practice together.",
        }}
      />

      <BlogSection 
        posts={dentalBlogPosts}
        title="Dental Marketing Insights"
        subtitle="Expert tips to help your dental practice grow online"
        showViewAll={false}
      />

      <CardCTA
        title="Ready to Grow Your Dental Practice?"
        description="Get a free strategy session and see exactly how we'll help you attract more high-value patients to your dental practice."
        buttonHref="https://lp.growsmallbiz.io/digital-growth-strategy-session"
        buttonText="Schedule Strategy Call"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default Dental;