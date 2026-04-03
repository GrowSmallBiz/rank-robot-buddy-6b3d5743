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
    title: "Built for local service businesses",
    description: "GrowSmallBiz is designed around the way local service businesses actually compete: defined service areas, high-intent local demand, reputation-sensitive buying decisions, and the need to turn visibility into calls, leads, and booked work.",
  },
  {
    icon: Users,
    title: "Managed execution, not software access",
    description: "You are not paying for another dashboard to manage yourself. We handle the research, optimization, content coordination, monitoring, and reporting so your team can stay focused on the business.",
  },
  {
    icon: Layers,
    title: "Local SEO inside a broader Managed AI SEO system",
    description: "Local SEO performs better when it is supported by strong technical foundations, better service pages, authority signals, trust content, and conversion-focused website improvements. We manage Local SEO as one important part of that larger system.",
  },
  {
    icon: Zap,
    title: "Agentic AI playbooks plus human strategy",
    description: "Our playbooks help us move faster and work more efficiently, but strategy is still directed by experienced humans who understand local search, local competition, and commercial intent.",
  },
  {
    icon: BarChart3,
    title: "Reporting tied to local opportunity",
    description: "We focus on metrics that matter to local businesses: visibility in priority areas, map performance, local traffic quality, and the signals that help drive inquiries and booked jobs.",
  },
  {
    icon: Shield,
    title: "No long-term lock-in",
    description: "We believe this relationship should be earned through execution quality, communication, and measurable progress — not forced through a long contract.",
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
  const { strategySessionUrl: PRIMARY_CTA_URL, freeAuditUrl: SECONDARY_CTA_URL } = useUtm();
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Local SEO for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps local service businesses improve visibility in Google Business Profile, map pack, and local search results through managed Local SEO." />
        <link rel="canonical" href="https://growsmallbiz.io/services/seo-agency/local-seo/" />
      </Head>

      <ServiceJsonLd
        serviceName="Local SEO for Local Service Businesses"
        serviceType="Local Search Engine Optimization"
        description="Managed Local SEO services for local service businesses. Improve visibility in Google Business Profile, map pack, citations, and local organic results."
        url="/services/seo-agency/local-seo/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Local SEO", url: "/services/seo-agency/local-seo/" },
        ]}
      />

      <Header />

      <main id="main-content">
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: MapPin, text: "Local SEO for Local Service Businesses" }}
          title={<>Local SEO That Makes Your Local Service Business the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">First Call</span>
          </>}
          subtitle="Show up where local buying decisions happen — and turn more visibility into calls, inquiries, and booked jobs."
          preCtaContent={
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-2 mb-2">
              <span className="flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> Get Found</span>
              <span className="flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> Get Trusted</span>
              <span className="flex items-center gap-2 text-lg md:text-xl font-semibold text-foreground/90"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> Get Chosen</span>
            </div>
          }
          primaryCTA={{
            label: "Schedule Strategy Call",
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

        {/* SUPPORTING SECTION — WHY LOCAL VISIBILITY MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="section-title">
                  Why Local Visibility Matters Before a Prospect Ever Calls
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>When people search for a provider in their area, they are often close to taking action. They may search by service and city, compare businesses in map results, or validate who looks most credible before they call.</p>
                <p>If your business is not visible in those moments, you do not just lose rankings. You lose calls, quote requests, appointments, and booked jobs to competitors who are easier to find and easier to trust.</p>
                <p>GrowSmallBiz manages Local SEO for local service businesses as part of a broader Managed AI SEO system. We strengthen your Google Business Profile, service area signals, citation consistency, local landing pages, reviews, and on-site relevance so your business can compete more effectively across local search, map results, and modern discovery journeys.</p>
                <p>This is not a one-time setup or a disconnected checklist. It is an ongoing local visibility system guided by human SEO strategy and accelerated by agentic AI playbooks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — WHY LOCAL SEO MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
                <h2 className="section-title">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO</span>
                  {" "}Still Drives Some of the Highest-Intent Opportunities for Local Service Businesses
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  When someone needs a plumber, a landscaper, a dentist, or a cleaning service, they are not browsing social media. They are searching — with intent to hire, often within hours.
                </p>
                <p>
                  That is why Local SEO matters. It helps your business appear when demand already exists. It gives you a better chance to show up when prospects are actively comparing providers, validating service areas, checking reviews, and deciding who to call now.
                </p>
                <p className="font-semibold text-foreground">Here is what the data consistently shows:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span>The Google Map Pack captures the majority of clicks for local service queries — more than the organic results below it</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span>"Near me" searches now dominate how people discover local service providers</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span>Appearing in the top three local positions signals authority before anyone clicks through to your website</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span>Local search drives high-intent actions: phone calls, direction requests, appointment bookings, and form fills</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span>Voice/text search on AI platforms like ChatGPT, Claude, Google Gemini, etc.</span></li>
                </ul>
                <p>
                  For local service businesses, this is not just about rankings. It is about turning local visibility into real business outcomes: calls, quote requests, consultations, appointments, and booked jobs.
                </p>
                <p>
                  Ranking well in local results does not happen by accident. It requires consistent relevance, trust, accuracy, and visibility across your profile, website, citations, reviews, and supporting local pages. Businesses that win locally usually do not treat this as a one-time task. They treat it as an ongoing growth channel.
                </p>
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
              <p className="section-description mt-4">Local SEO is one of the core pillars inside GrowSmallBiz's Managed AI SEO system. On its own, it improves local visibility. Connected with technical SEO, authority building, service-page strategy, and conversion-focused website improvements, it becomes stronger, more durable, and more commercially useful.</p>
              <p className="section-description mt-3">Within the Local SEO pillar, we manage the assets and signals that help local service businesses become easier to find, easier to trust, and easier to choose in their service area.</p>
              <p className="section-description mt-3 font-semibold">Here is what we manage on your behalf:</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {localSeoServices.map((service, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY GBP, CITATIONS, AND LOCAL LANDING PAGES WORK BETTER TOGETHER */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE STRATEGY</p>
                <h2 className="section-title">
                  Why GBP, Citations, and Local Landing Pages{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic whitespace-nowrap">Work Better Together</span>
                  {" "}as a Connected System
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  One of the biggest reasons Local SEO underperforms is fragmentation. A business may have a partly optimized Google Business Profile, inconsistent citations, a few city pages, and scattered reviews — but the signals do not fully support one another.
                </p>
                <p>
                  GrowSmallBiz treats Local SEO as a connected visibility system. Your GBP, citations, local landing pages, schema markup, reviews, and on-site trust signals should reinforce the same locations, services, and credibility story across the web.
                </p>
                <p className="font-semibold text-foreground">Here is why the integration matters:</p>
                <div className="space-y-4">
                  <p>
                    <strong className="text-foreground">GBP without a supporting website</strong> limits your ability to rank for service-plus-location queries beyond your primary category. A strong profile needs equally strong web presence behind it.
                  </p>
                  <p>
                    <strong className="text-foreground">Citations without NAP consistency</strong> send conflicting signals that undermine the authority you are building. Every inconsistency reduces Google's confidence in your business data — and that reduced confidence shows up in your rankings.
                  </p>
                  <p>
                    <strong className="text-foreground">Local landing pages without GBP alignment</strong> miss the opportunity to reinforce your location signals across both platforms. Your website and your profile should tell the same story, in the same terms, to the same geographic audience.
                  </p>
                  <p>
                    <strong className="text-foreground">Reviews without a response strategy</strong> leave trust signals on the table and signal to Google that your business is not actively engaged with its customers.
                  </p>
                </div>
                <p>
                  When these elements work in concert — when your GBP, citations, local pages, schema markup, and review profile all reinforce the same location and service signals — the effect on local ranking is multiplicative, not additive.
                </p>
                <div className="rounded-2xl p-6 border-l-4 border-primary bg-secondary">
                  <p className="text-foreground leading-relaxed">
                    That is the advantage GrowSmallBiz is building: not isolated tasks, but a <strong>local visibility system that compounds</strong>.
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

        {/* SECTION 5 — AGENTIC AI PLAYBOOKS */}
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
                  Local SEO is not static. Listings change, competitors move, opportunities appear, and gaps in your local presence can cost visibility quickly. GrowSmallBiz uses agentic AI playbooks with strategic human oversight to identify those gaps faster, prioritize improvements more intelligently, and maintain stronger local visibility over time.
                </p>
                <p>
                  This allows us to move faster on profile improvements, citation issues, service-area content opportunities, and ongoing optimization tasks — while still applying <strong className="text-foreground">real business judgment</strong> to the decisions that matter most.
                </p>
                <p>
                  Our playbooks allow us to research, draft, and optimize location-specific content at a pace traditional agencies cannot match — while maintaining the quality and specificity search engines and visitors expect.
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
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{step}</span>
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
          buttonText="Schedule Strategy Call"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — INDUSTRY USE CASES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">INDUSTRY RELEVANCE</p>
              <h2 className="section-title">
                How{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO</span>
                {" "}Impacts
              </h2>
              <h2 className="section-title -mt-2">
                Different Types of Service Businesses
              </h2>
              <p className="section-description mt-4">The mechanics of Local SEO are similar across industries, but buyer behavior is not. The way someone chooses an HVAC company, med spa, dentist, attorney, or real estate professional can vary significantly based on urgency, trust, price sensitivity, and how much comparison happens before contact.</p>
              <p className="section-description mt-3">That is why GrowSmallBiz approaches Local SEO with a repeatable system, but not a one-size-fits-all message. The goal is always the same: stronger visibility, stronger trust, and stronger conversion in the markets you serve.</p>
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
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="OUR DIFFERENCE"
              title="Why Local Service Businesses Choose GrowSmallBiz for"
              titleHighlight="Local SEO"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyGSBItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth.
            </p>

            {/* Internal link back to parent */}
            <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Link to="/services/seo-agency/" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
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
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Ready to Strengthen Your Local Visibility Where{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Buying Decisions Happen?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
                If your business is not consistently showing up for your priority local searches, the problem is usually not one isolated issue. It is the combined effect of profile gaps, weak local pages, inconsistent citations, limited review momentum, or missing trust signals.
              </p>
              <p className="text-base text-muted-foreground mb-4 max-w-3xl mx-auto">
                GrowSmallBiz's Local SEO service is built to fix that — with a managed, ongoing system that handles your Google Business Profile, citations, local landing pages, trust signals, and map pack performance as part of the broader Managed AI SEO system.
              </p>
              <p className="text-base text-muted-foreground mb-4 max-w-3xl mx-auto">
                GrowSmallBiz addresses those issues as part of a managed Local SEO system within your broader Managed AI SEO strategy. We help local service businesses improve visibility, strengthen trust, and compete more effectively in the areas that matter most.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                You focus on running the business and serving customers. We focus on helping the right prospects find you and feel confident contacting you.
              </p>
            </div>

            <CardCTA
              title="Let's Build Your Local Search Visibility"
              description="Schedule your free strategy session or get a no-obligation SEO audit to see where you stand."
              buttonText="Schedule Strategy Call"
              buttonHref={PRIMARY_CTA_URL}
              sectionClassName="pt-0 pb-0"
            />

            <div className="flex justify-center mt-6 animate-fade-up">
              <Button variant="heroOutline" size="lg" asChild>
                <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                  Start with a Free SEO Audit
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto text-center">
              and we'll show you where your local visibility is strong, where opportunity is being lost, and what should be fixed first.
            </p>

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
