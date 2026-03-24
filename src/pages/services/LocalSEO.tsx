import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { useUtm } from "@/hooks/use-utm";
import { CTA_URLS } from "@/lib/utm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import localSeoHeroBg from "@/assets/local-seo-hero-bg.jpg";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  Search,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
  Shield,
  Users,
  BarChart3,
  Target,
  Star,
  Building2,
  Globe,
  MapPinned,
  ClipboardCheck,
  Navigation,
  Heart,
  Scale,
  Home,
  Sparkles,
  ChevronRight,
} from "lucide-react";


const localSeoServices = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description: "We optimize your GBP listing with accurate categories, service descriptions, attributes, and visual assets so your business shows up stronger in map pack and local results.",
  },
  {
    icon: Globe,
    title: "Citation Building",
    description: "We build consistent, authoritative citations across directories and data aggregators to reinforce your business identity and local relevance across the web.",
  },
  {
    icon: ClipboardCheck,
    title: "Citation Cleanup / NAP Consistency",
    description: "We audit and correct inconsistent name, address, and phone data across existing listings to eliminate trust-damaging discrepancies that confuse search engines.",
  },
  {
    icon: FileText,
    title: "Local Landing Pages",
    description: "We create location-specific and service-area pages that help search engines connect your services to the exact markets you serve.",
  },
  {
    icon: Search,
    title: "Local Relevance Optimization",
    description: "We strengthen the signals that tell search engines your business is genuinely relevant to the locations and service categories you target.",
  },
  {
    icon: Navigation,
    title: "Service Area Optimization",
    description: "We optimize your presence for multi-location and service-area targeting so your business is discoverable across every market you serve.",
  },
  {
    icon: Shield,
    title: "Local Trust Signals",
    description: "We build and reinforce trust markers — reviews, authority indicators, and credibility signals — that influence how search engines rank local businesses.",
  },
  {
    icon: Star,
    title: "Review Signal Support",
    description: "We support review acquisition strategy and optimize how review signals contribute to your local search visibility and credibility.",
  },
  {
    icon: MapPinned,
    title: "Map Pack Visibility Support",
    description: "We work to improve your positioning in the Google Map Pack — the most visible and highest-converting placement in local search results.",
  },
];

const industryCards = [
  {
    icon: Home,
    title: "Home Services & Contractors",
    description: "Plumbers, electricians, HVAC techs, roofers, and general contractors compete in hyper-local markets. When homeowners search for help, they call the businesses that appear first in the map pack and look credible. Local SEO determines who gets that call.",
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    description: "Chiropractors, dentists, physical therapists, and wellness providers need strong local visibility to attract patients searching for care nearby. Reviews, GBP optimization, and local landing pages drive trust and appointment bookings.",
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetic Practices",
    description: "Med spas and aesthetic clinics rely on high-intent local searches from clients comparing providers in their area. Visibility in the map pack, strong reviews, and service-specific local pages are critical to converting searchers into bookings.",
  },
  {
    icon: Scale,
    title: "Legal & Financial Professionals",
    description: "Attorneys, accountants, and financial advisors serve clients who search locally and evaluate credibility carefully. Strong GBP presence, citation consistency, and local authority signals help establish trust before the first conversation.",
  },
  {
    icon: Building2,
    title: "Real Estate Agents & Brokers",
    description: "Real estate professionals compete for visibility in markets defined by geography. Local landing pages, area-specific content, and strong map presence help agents become the first name buyers and sellers encounter in their market.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "Our Local SEO strategies are designed specifically for service-area businesses, local markets, and the search behaviors of local buyers.",
  },
  {
    icon: Users,
    title: "Managed Execution, Not DIY Guesswork",
    description: "We manage every element of your Local SEO for you — no templates, no self-service portals, no guesswork.",
  },
  {
    icon: Layers,
    title: "GBP, Citations, and Local Content Managed as One System",
    description: "We treat your Google Business Profile, citations, and local pages as interconnected — not disconnected tasks.",
  },
  {
    icon: BarChart3,
    title: "Part of a Broader Managed AI SEO Strategy",
    description: "Local SEO integrates with our broader Managed AI SEO system so every pillar of your digital presence reinforces the others.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting and Ongoing Optimization",
    description: "Clear reporting on what's being done, what's changing, and what the next priorities are — in plain language you can act on.",
  },
];

const faqs = [
  {
    question: "What is Local SEO?",
    answer: "Local SEO is the process of improving how visible your business is in location-based search results, including Google Business Profile, the map pack, and local organic listings. It helps local customers find and trust your business when they are actively searching for services in your area.",
  },
  {
    question: "Is Google Business Profile part of Local SEO?",
    answer: "Yes. Google Business Profile optimization is one of the most important parts of Local SEO, but it works best when supported by citation consistency, local landing pages, service-area relevance, and strong trust signals.",
  },
  {
    question: "Are citations still important?",
    answer: "Yes. Citation consistency helps search engines confirm your business identity and location details across the web. Strong citation hygiene supports credibility, trust, and local relevance.",
  },
  {
    question: "How long does Local SEO take to work?",
    answer: "Local SEO timelines depend on your market, competition, current Google Business Profile strength, citation consistency, website quality, and starting visibility. Many businesses begin seeing early movement within the first few months, with stronger gains building over time as local trust signals, content relevance, and location authority improve.",
  },
  {
    question: "Do I need local landing pages if I already have a Google Business Profile?",
    answer: "Usually, yes. Your Google Business Profile helps with map-driven visibility, but local landing pages help connect your services to the locations you serve and give search engines more context to rank your business for local-intent searches.",
  },
  {
    question: "Does Local SEO only help Google Maps?",
    answer: "No. Local SEO supports visibility across Google Business Profile, the map pack, local organic results, and the broader local discovery process. It helps reinforce your local relevance across the search journey.",
  },
  {
    question: "How do I get started?",
    answer: "The first step is a strategy session with GrowSmallBiz. We review your local visibility, identify your biggest Local SEO gaps, and outline a clear plan for improving how your business appears in the markets that matter most.",
  },
];

const LocalSEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Local SEO for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps local service businesses improve visibility in Google Business Profile, map pack, and local search results through managed Local SEO." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/local-seo" />
      </Head>

      <ServiceJsonLd
        serviceName="Local SEO for Local Service Businesses"
        serviceType="Local Search Engine Optimization"
        description="Managed Local SEO services for local service businesses. Improve visibility in Google Business Profile, map pack, citations, and local organic results."
        url="/services/managed-ai-seo/local-seo"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "Local SEO", url: "/services/managed-ai-seo/local-seo" },
        ]}
      />

      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: MapPin, text: "Local SEO for Local Service Businesses" }}
          title={<>Local SEO That Makes Your Business the First Call,{" "}<br className="hidden md:inline" />Not the </>}
          titleHighlight="Second Choice"
          subtitle="When local customers search for a service provider, they usually do not compare every option. They call the businesses that appear first, look credible, and clearly serve their area. GrowSmallBiz helps local service businesses strengthen their visibility across Google Business Profile, citations, local landing pages, and map-driven search results — so your business gets seen, trusted, and contacted sooner."
          primaryCTA={{
            label: "Schedule Strategy Session",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true,
          }}
          secondaryCTA={{
            label: "Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true,
          }}
          backgroundImage={localSeoHeroBg}
          overlayOpacity={50}
        />

        {/* SECTION 2 — WHY LOCAL SEO MATTERS */}
        {/* Improvement #8: Break wall of text with icon lead-in and two-column layout */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
                <h2 className="section-title">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO</span>
                  {" "}Matters for Local Service Businesses
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-up">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Local search is one of the highest-intent traffic sources a service business can access. When someone searches for a plumber, HVAC company, med spa, chiropractor, attorney, or roofer near them, they are usually not browsing casually. They are evaluating who looks credible, who serves their area, and who appears easiest to trust.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    That is why Local SEO matters so much. Visibility in Google Business Profile, the map pack, and local organic results directly influences who gets considered first. Businesses that show up clearly, consistently, and credibly in those environments are more likely to earn the call, the form fill, or the booking.
                  </p>
                </div>
              </div>

              <div className="mt-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary bg-secondary">
                  <p className="text-foreground leading-relaxed">
                    GrowSmallBiz helps local service businesses improve that visibility through a <strong>managed Local SEO system</strong> built to strengthen local relevance, trust signals, and discoverability where buying intent is already high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT GROWSMALLBIZ INCLUDES IN LOCAL SEO */}
        {/* Improvement #7: Larger icon containers (w-12 h-12 / w-6 h-6) */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">OUR LOCAL SEO SYSTEM</p>
              <h2 className="section-title">
                What GrowSmallBiz Includes in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO</span>
              </h2>
              <p className="section-description mt-4">Local SEO is not a single setup task. It is a coordinated system that helps search engines and real customers understand where you operate, what services you offer, and why your business is a trustworthy local option.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {localSeoServices.map((service, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY GBP, CITATIONS, AND LOCAL LANDING PAGES WORK BETTER TOGETHER */}
        {/* Improvement #3: Upgrade summary cards to GlowCards with connecting arrows */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE STRATEGY</p>
                <h2 className="section-title">
                  Why GBP, Citations, and Local Landing Pages{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Work Better Together</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Strong local visibility rarely comes from one isolated tactic. A well-optimized Google Business Profile helps your business appear in local map-driven results. Citation consistency reinforces trust and confirms your business identity across the web. Local landing pages help search engines connect your services to the exact locations you serve.
                </p>
                <p>
                  When these elements work together, the result is stronger local relevance and a more credible local presence. When one of them is weak, the others are limited.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary bg-secondary">
                  <p className="text-foreground leading-relaxed">
                    GrowSmallBiz manages these components as a <strong>connected system</strong> — so your local search presence becomes clearer, more consistent, and more competitive over time.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {[
                  { icon: MapPin, label: "Google Business Profile", desc: "Map pack & local discovery" },
                  { icon: Globe, label: "Citation Network", desc: "Trust & identity consistency" },
                  { icon: FileText, label: "Local Landing Pages", desc: "Service-area relevance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <GlowCard className="text-center p-6 min-w-[200px]">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </GlowCard>
                    {i < 2 && (
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI-POWERED WORKFLOWS */}
        {/* Improvement #6: Add numbered badges to workflow pills for process flow */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR APPROACH</p>
                <h2 className="section-title">
                  How GrowSmallBiz Uses{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI Playbooks</span>
                  {" "}for Local SEO
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Local SEO is not static. Listings change, competitors move, opportunities appear, and gaps in your local presence can cost visibility quickly. GrowSmallBiz uses AI-powered workflows with strategic human oversight to identify those gaps faster, prioritize improvements more intelligently, and maintain stronger local visibility over time.
                </p>
                <p>
                  This allows us to move faster on profile improvements, citation issues, service-area content opportunities, and ongoing optimization tasks — while still applying <strong className="text-foreground">real business judgment</strong> to the decisions that matter most.
                </p>
                <p>
                  The result is a Local SEO system that is more consistent, more responsive, and more capable of compounding over time than a slow manual process.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {[
                  "GBP Monitoring",
                  "Citation Auditing",
                  "Content Optimization",
                  "Review Tracking",
                  "Gap Identification",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <span className="text-sm font-medium text-foreground">{step}</span>
                    {i < 4 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-1 hidden sm:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <CardCTA
          title="Ready to Strengthen Your Local Search Visibility?"
          description="Schedule a strategy session to learn how Local SEO fits into your growth plan."
          buttonText="Schedule Strategy Session"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — INDUSTRY USE CASES */}
        {/* Improvement #1: Fix orphan row — use flex wrap with centered items */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">INDUSTRY RELEVANCE</p>
              <h2 className="section-title">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO</span>
                {" "}Matters Across Local Service Industries
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {industryCards.map((card, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHY GROWSMALLBIZ */}
        {/* Improvement #1 (orphan), #4 (text-sm), #5 (GlowCard upgrade) */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="OUR DIFFERENCE"
              title="Why GrowSmallBiz for"
              titleHighlight="Local SEO"
            />

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {whyGSBItems.map((item, i) => (
                <GlowCard
                  key={i}
                  className="flex items-start gap-4 p-5 animate-fade-up w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary bg-secondary">
                <p className="text-muted-foreground leading-relaxed">
                  GrowSmallBiz brings local-service specialization, managed execution, and a systems-based approach to Local SEO. We do not treat your Google Business Profile, citations, service-area pages, and local trust signals as disconnected tasks. We manage them together so your business is easier to find, easier to trust, and easier to choose.
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth.
            </p>

            {/* Internal link back to parent */}
            <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Link to="/services/managed-ai-seo" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                ← Back to Managed AI SEO Overview
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about Local SEO?",
            description: "We're here to help you understand how Local SEO fits your business.",
            tagline: "Let's build your local search visibility together.",
          }}
        />

        {/* SECTION 9 — FINAL CTA */}
        {/* Improvement #2: Remove double-boxed CTA, place buttons directly */}
        <section id="final-cta" className="py-20 lg:py-28 bg-gradient-to-b from-background via-card to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Local Customers Are Already Searching.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Make Sure They Find You First.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                If your business depends on calls, bookings, and inquiries from people in your service area, Local SEO is not optional. It is how you become more visible in the places where local buyers are already deciding who looks credible enough to contact.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                GrowSmallBiz helps local service businesses strengthen map visibility, local trust signals, and search relevance through a managed Local SEO system built for real growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Session <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Free SEO Audit
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
              <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
            </div>
          </div>
        </section>

        {/* SECTION 10 — CONSULTATION FORM */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default LocalSEO;
