import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { BlogSection, medSpaBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import medSpaHeroImage from "@/assets/industry-medspa-hero.jpg";

const services = [
  {
    title: "Aesthetic Procedure SEO",
    description: "Dominate searches for Botox, fillers, laser treatments, body contouring, and more.",
    features: ["Procedure-specific landing pages", "Before/after gallery SEO", "Treatment comparison content", "Pricing page optimization"]
  },
  {
    title: "Local Luxury Positioning",
    description: "Position your med spa as the premier aesthetic destination in your market.",
    features: ["Google Business Profile luxury positioning", "High-end local citations", "Upscale review strategy", "Competitor differentiation"]
  },
  {
    title: "AI & Voice Search Optimization",
    description: "Be the recommended med spa when clients research treatments on AI platforms.",
    features: ["Answer Engine Optimization", "Treatment FAQ schema", "Conversational content strategy", "Expert positioning content"]
  },
  {
    title: "Consultation Conversion",
    description: "Turn website visitors into booked consultations and treatment packages.",
    features: ["Online booking optimization", "Lead magnet creation", "Trust signal integration", "Patient journey mapping"]
  },
  {
    title: "Meta & Instagram Ads",
    description: "Reach aesthetic clients before they search Google.",
    features: ["Before/after content campaigns", "Seasonal promotions", "Membership offers", "Retargeting for treatment page visitors"]
  },
  {
    title: "AI Receptionist",
    description: "Capture every inquiry 24/7. Clients browse and decide outside business hours.",
    features: ["Automated question answering", "Lead qualification", "Consultation booking", "After-hours capture"]
  }
];

const painPoints = [
  "Competitors with less experience are outranking you",
  "Struggling to attract high-value injectable and laser clients",
  "Social media isn't generating enough new consultations",
  "Website traffic isn't converting into booked appointments",
  "Wasting money on ads without sustainable growth"
];

const faqs = [
  {
    question: "How is med spa SEO different from regular healthcare SEO?",
    answer: "Med spa marketing is visual-first and desire-driven rather than pain-driven. Clients seek aesthetic enhancement, not urgent medical care. Instagram and Facebook are primary acquisition channels alongside Google, and the buying decision often happens outside business hours. Before/after imagery, social proof, and visual brand building carry more conversion weight than clinical credentials alone."
  },
  {
    question: "Can you help us rank for competitive terms like Botox and lip fillers?",
    answer: "Yes. Treatment-specific SEO targets the exact searches your ideal clients are making — 'Botox near me', 'lip fillers [city]', 'laser hair removal [city]'. We build dedicated procedure pages optimized for each treatment, structured with the content depth and schema markup that Google requires to rank competitive aesthetic keywords."
  },
  {
    question: "How do you handle before/after image SEO?",
    answer: "Before/after images are optimized with descriptive alt text, proper file naming, and treatment-specific schema markup so they appear in image search results. All before/after content is published only with explicit patient consent in compliance with HIPAA requirements."
  },
  {
    question: "Do you work with multi-location med spa brands?",
    answer: "Yes. Multi-location SEO requires a distinct strategy — separate Google Business Profiles per location, location-specific landing pages, and citation consistency across all locations. We build and manage multi-location systems for med spa groups expanding across markets."
  },
  {
    question: "How long until we see more consultations from SEO?",
    answer: "Most med spa clients see measurable improvement in Google Business Profile visibility within 60 to 90 days. Significant organic traffic growth typically develops over 4 to 6 months. Based on our documented case studies, med spa AI SEO campaigns have achieved 252% impression growth and 78% organic user increases within a 9-month campaign period."
  }
];

const results = [
  { metric: "$16.39", label: "Cost Per Inbound Call Lead", subtext: "Google Ads" },
  { metric: "+252%", label: "Search Impressions", subtext: "AI SEO, 9-Month Campaign" },
  { metric: "+552%", label: "Website Traffic", subtext: "AI SEO, Southern California" }
];

const MedSpa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Med Spa Marketing Agency | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="GrowSmallBiz is a med spa marketing agency delivering local SEO, Google Ads, Meta ads, and reputation management that fills your treatment rooms. Schedule a free strategy call." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/med-spa-marketing/" />
      </Head>
      <ServiceJsonLd
        serviceName="Med Spa Marketing"
        serviceType="Digital Marketing for Med Spas"
        description="SEO and digital marketing for Botox, fillers, laser treatments, and aesthetic services."
        url="/health-and-wellness-practices/med-spa-marketing"
        breadcrumbs={[
          { name: "Health & Wellness", url: "/health-and-wellness-practices" },
          { name: "Med Spa Marketing", url: "/health-and-wellness-practices/med-spa-marketing" },
        ]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={medSpaHeroImage} alt="Luxurious med spa treatment room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              Med Spa Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Full-Service Med Spa Marketing Built to{" "}
              <span className="text-gradient">Fill Your Treatment Rooms</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              GrowSmallBiz provides med spas with a complete digital marketing system designed to attract high-value clients, showcase compelling results, and build the recurring membership model that generates predictable revenue month over month.
            </p>
            <p className="text-sm text-muted-foreground mb-8 animate-fade-up delay-200">Serving med spas across the United States.</p>
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
            <p className="text-muted-foreground">These are the challenges we hear from med spa owners every day.</p>
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
              <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">Schedule Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Med Spa Marketing Requires a Specialist */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">Why Med Spa Marketing Requires a Specialist</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Med spa clients seek aesthetic enhancement and wellness — not pain relief. That distinction changes everything about how marketing works. Unlike dental or chiropractic patients driven by necessity, med spa clients are driven by desire, aspiration, and social validation.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Visual Proof Drives Decisions</h3>
                <p className="text-muted-foreground">Before/after photos and video results outperform every other content type for med spas. A before/after of a successful Botox or filler treatment does more conversion work than three pages of written content. Your marketing system must be built around generating, showcasing, and amplifying visual proof — on Instagram, on your website, and in your Google Business Profile.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Multi-Channel Is Non-Negotiable</h3>
                <p className="text-muted-foreground">Instagram and Facebook are primary acquisition channels for med spas alongside Google Search. A prospect might discover you on Instagram, validate your credibility on Google, and book through your website — all within the same session. Single-channel strategies miss clients at every stage of that journey.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Membership Revenue Changes the Economics</h3>
                <p className="text-muted-foreground">A client who books a single Botox treatment is worth $500. A client on a monthly membership plan is worth $6,000 a year. Marketing strategies that focus only on new client acquisition miss the retention and membership revenue that makes a med spa business resilient.</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground italic">Med spa clients don't call because they're in pain. They call because they saw a result they want. Your marketing's job is to show them that result — repeatedly, across every channel they use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Med Spa Marketing Agency Do? */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">What Does a Med Spa Marketing Agency Do?</h2>
            <p className="text-muted-foreground mb-8 text-lg text-center max-w-3xl mx-auto">
              A med spa marketing agency manages the full digital marketing ecosystem for medical aesthetic practices — social media content and Meta advertising, local SEO and Google Ads, reputation management and client retention automation, and website design optimized for consultation booking.
            </p>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">The full med spa client lifecycle:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <div>
                    <span className="font-semibold text-foreground">Awareness</span>
                    <span className="text-muted-foreground"> — Instagram and Meta ads spark initial interest in a treatment</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <div>
                    <span className="font-semibold text-foreground">Trust Confirmation</span>
                    <span className="text-muted-foreground"> — Google search validates your credentials, reviews, and results</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <div>
                    <span className="font-semibold text-foreground">Conversion</span>
                    <span className="text-muted-foreground"> — Your website turns curiosity into a booked consultation</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">4.</span>
                  <div>
                    <span className="font-semibold text-foreground">Retention</span>
                    <span className="text-muted-foreground"> — CRM automation transforms first appointments into long-term memberships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            <p className="text-muted-foreground mb-8 text-lg">
              Med spa clients seek aesthetic enhancement and wellness — not pain relief. That distinction changes everything about how marketing works. Unlike dental or chiropractic patients driven by necessity, med spa clients are driven by desire, aspiration, and social validation.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Visual Proof Drives Decisions</h3>
                <p className="text-muted-foreground">Before/after photos and video results outperform every other content type for med spas. A before/after of a successful Botox or filler treatment does more conversion work than three pages of written content. Your marketing system must be built around generating, showcasing, and amplifying visual proof — on Instagram, on your website, and in your Google Business Profile.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Multi-Channel Is Non-Negotiable</h3>
                <p className="text-muted-foreground">Instagram and Facebook are primary acquisition channels for med spas alongside Google Search. A prospect might discover you on Instagram, validate your credibility on Google, and book through your website — all within the same session. Single-channel strategies miss clients at every stage of that journey.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Membership Revenue Changes the Economics</h3>
                <p className="text-muted-foreground">A client who books a single Botox treatment is worth $500. A client on a monthly membership plan is worth $6,000 a year. Marketing strategies that focus only on new client acquisition miss the retention and membership revenue that makes a med spa business resilient.</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground italic">Med spa clients don't call because they're in pain. They call because they saw a result they want. Your marketing's job is to show them that result — repeatedly, across every channel they use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Med Spa Marketing Agency Do? */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">What Does a Med Spa Marketing Agency Do?</h2>
            <p className="text-muted-foreground mb-8 text-lg text-center max-w-3xl mx-auto">
              A med spa marketing agency manages the full digital marketing ecosystem for medical aesthetic practices — social media content and Meta advertising, local SEO and Google Ads, reputation management and client retention automation, and website design optimized for consultation booking.
            </p>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">The full med spa client lifecycle:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <div>
                    <span className="font-semibold text-foreground">Awareness</span>
                    <span className="text-muted-foreground"> — Instagram and Meta ads spark initial interest in a treatment</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <div>
                    <span className="font-semibold text-foreground">Trust Confirmation</span>
                    <span className="text-muted-foreground"> — Google search validates your credentials, reviews, and results</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <div>
                    <span className="font-semibold text-foreground">Conversion</span>
                    <span className="text-muted-foreground"> — Your website turns curiosity into a booked consultation</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <span className="text-primary font-bold text-lg">4.</span>
                  <div>
                    <span className="font-semibold text-foreground">Retention</span>
                    <span className="text-muted-foreground"> — CRM automation transforms first appointments into long-term memberships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground">These are the challenges we hear from med spa owners every day.</p>
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
              <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session">Schedule Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Med Spa Marketing Services from GrowSmallBiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to attract premium aesthetic clients.</p>
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

      {/* Med Spa Marketing Results */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Med Spa Marketing Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-foreground font-medium mb-1">{result.label}</p>
                <p className="text-sm text-muted-foreground">({result.subtext})</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/health-and-wellness-practices/med-spa-marketing/seo-case-study/">View AI SEO Case Studies →</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/health-and-wellness-practices/med-spa-marketing/google-ads-case-study/">View Google Ads Case Studies →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Med Spas Choose GrowSmallBiz */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">Why Med Spas Choose GrowSmallBiz</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Specialist, Not Generalist</h3>
                <p className="text-muted-foreground">We don't work with e-commerce brands, restaurants, or retail shops. Med spas, dental practices, and aesthetic clinics are our focus. Every strategy, campaign structure, and automation workflow is built for how aesthetic clients actually discover, evaluate, and book — not adapted from a different industry.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Exclusive Leads</h3>
                <p className="text-muted-foreground">We don't sell shared leads. Everything we build generates exclusive client inquiries that come directly to you — not to you and five competitors simultaneously.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Complete System</h3>
                <p className="text-muted-foreground">Local SEO, website design, Google Ads, Meta ads, reputation management, and AI Receptionist — fully integrated into one client acquisition system. No juggling multiple vendors who have never spoken to each other.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">GrowSmallBiz is led by a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation — applied directly to your med spa marketing strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={faqs}
        title="Med Spa Marketing FAQs"
        subtitle="Common questions from aesthetic practice owners"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Med Spa Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your aesthetic practice together.",
        }}
      />

      <BlogSection 
        posts={medSpaBlogPosts}
        title="Med Spa Marketing Insights"
        subtitle="Expert tips to help your aesthetic practice grow online"
        showViewAll={false}
      />

      <CardCTA
        title="Ready to Fill Your Treatment Rooms?"
        description="Get a free strategy session and discover how to attract more high-value aesthetic clients to your med spa."
        buttonHref="https://lp.growsmallbiz.io/digital-growth-strategy-session"
        buttonText="Schedule Strategy Call"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default MedSpa;