import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { BlogSection, hvacBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import hvacHeroImage from "@/assets/industry-hvac-hero.jpg";
import { useUtm } from "@/hooks/use-utm";

const painPoints = [
  "Your competitors are in the top 3 on Google Maps — and you're not",
  "You're paying Angi $3,000/month for leads shared with four other companies",
  "Your website is slow, looks outdated, and nobody calls from it",
  "Summer hits and you're scrambling to ramp up — but campaigns take weeks to build",
  "You miss after-hours emergency calls because nobody's available at 10pm"
];

const services = [
  {
    title: "AI SEO + Website Design",
    description: "Rank in the Google Map Pack for every service and city you cover.",
    features: ["Click-to-call above the fold", "Trust signals & certifications", "Service-area pages for every city", "Fast mobile load times"]
  },
  {
    title: "Google Ads / LSA",
    description: "Immediate leads from high-intent searches.",
    features: ["Google Guaranteed badge via LSA", "Seasonal ramp-ups timed to demand", "Emergency keyword campaigns", "Pay-per-lead model available"]
  },
  {
    title: "Reputation Management",
    description: "Automate review requests after every job close.",
    features: ["Post-job review automation", "Review response management", "Competitor review gap analysis", "Google & Yelp monitoring"]
  },
  {
    title: "Social Media",
    description: "Before/after project content, seasonal promotions, community presence.",
    features: ["Before/after project showcases", "Seasonal promotion campaigns", "Community engagement", "Brand awareness building"]
  },
  {
    title: "AI Receptionist",
    description: "Never lose an emergency call because no one answered.",
    features: ["24/7 lead capture", "Lead qualification", "Calendar booking", "Fastest-ROI service for lean crews"]
  }
];

const seasonalData = [
  { season: "Spring (March–May)", description: "AC tune-up season. Run Google Ads at 60–70% of peak budget — lowest cost-per-lead window of the year. Build review velocity now so your 4.7+ rating is locked in before emergency season begins." },
  { season: "Summer (June–August)", description: "Ramp Google Ads to full budget. Emergency keywords convert at 3–5× the rate of informational keywords. AI Receptionist captures 10pm emergency calls competitors miss. If you're not in the Map Pack top 3 when temperatures spike, you're handing calls to your competitors." },
  { season: "Fall (September–November)", description: "Shift messaging to heating maintenance and furnace inspections. Retargeting past customers drives the highest close rates of the year. Email and SMS campaigns to your existing list outperform cold acquisition 3:1." },
  { season: "Winter (December–February)", description: "Emergency heating repair and frozen pipe calls spike during cold snaps. Response speed wins: contractors who respond within 5 minutes close 80% more leads than those who follow up in an hour. AI Receptionist is not optional during this window." }
];

const faqs = [
  { question: "How long does it take to generate leads with HVAC SEO?", answer: "Most HVAC clients see measurable movement in Google Map Pack rankings within 60 to 90 days. Reaching top 3 positions in competitive Bay Area markets usually takes 3 to 5 months of consistent optimization. Emergency and 'near me' keywords generate leads faster than broader service terms." },
  { question: "What is the difference between Google Ads and Google Local Services Ads for HVAC?", answer: "Local Services Ads appear above standard Google Ads, carry Google's Guarantee badge, and charge per lead rather than per click. LSAs are most effective for emergency searches. Traditional Google Ads offer more control over keywords and targeting for service-specific and seasonal campaigns. For HVAC, running both maximizes coverage." },
  { question: "Does GrowSmallBiz handle seasonal HVAC marketing?", answer: "Yes. We run a detailed seasonal marketing calendar for every HVAC client — ramping Google Ads 3 to 4 weeks before peak seasons, activating seasonal landing pages, launching review campaigns ahead of demand surges, and verifying website speed before high-traffic months." },
  { question: "How do I stop relying on HomeAdvisor and Angi for HVAC leads?", answer: "The shift follows a proven sequence: optimize your Google Business Profile and build review velocity over 8 to 12 weeks; launch Google Local Services Ads in weeks 2 to 4; build organic SEO authority over 3 to 6 months. As owned channels ramp, you scale back paid lead services." },
  { question: "What does HVAC marketing cost?", answer: "We don't display pricing here because every HVAC market and competitive landscape is different. Schedule a strategy call and we'll assess your specific situation, map your local competition, and recommend a realistic investment level for your goals." }
];

const HVAC = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>HVAC Marketing Agency | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="GrowSmallBiz is an HVAC marketing agency delivering Local SEO, Google Ads, and website design that puts your HVAC company in front of homeowners when they need you most." />
        <link rel="canonical" href="https://growsmallbiz.io/home-service-contractors/hvac-marketing/" />
      </Head>
      <ServiceJsonLd
        serviceName="HVAC Marketing"
        serviceType="Digital Marketing for HVAC"
        description="Local SEO, Google Ads, and digital marketing for HVAC companies."
        url="/home-service-contractors/hvac-marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Home Service Contractors", url: "/home-service-contractors" },
          { name: "HVAC Marketing", url: "/home-service-contractors/hvac-marketing" },
        ]}
      />
      
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-0 relative z-10">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/home-service-contractors/" className="hover:text-primary">Home Service Contractors</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">HVAC Marketing</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hvacHeroImage} alt="HVAC technician working on air conditioning unit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Wrench className="w-4 h-4" />
              HVAC Contractor Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              The HVAC Marketing Agency That Gets You to the{" "}
              <span className="text-gradient">Top of Google Maps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              GrowSmallBiz combines Local SEO, Website Design, and Google Ads to put your HVAC company in front of Bay Area homeowners the moment they need you — and convert that visibility into booked service calls.
            </p>
            <p className="text-sm text-muted-foreground mb-8 animate-fade-up delay-200">Based in Danville, CA. Serving HVAC contractors across Contra Costa County, the Tri-Valley, and the Bay Area.</p>
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
            <p className="text-sm text-primary mt-4 animate-fade-up delay-300">No commitment. Free 30-minute HVAC marketing strategy session.</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
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
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6">None of that is a business problem. It's a marketing infrastructure problem. We fix it.</p>
            <Button variant="hero" asChild>
              <a href={strategySessionUrl}>Schedule Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is HVAC Digital Marketing? */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">What Is HVAC Digital Marketing?</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              HVAC digital marketing is a specialized approach to online lead generation for heating, ventilation, and air conditioning companies. It includes Local SEO to rank in Google's Map Pack for emergency 'near me' searches, Google Ads and Local Services Ads (LSA) for immediate paid lead generation, website design optimized for mobile call conversions, reputation management to build and protect online reviews, and AI automation to capture leads 24/7 and nurture maintenance plan customers.
            </p>
            <p className="text-muted-foreground mb-8 text-lg">
              Unlike general digital marketing, HVAC-specific marketing accounts for seasonal demand spikes, emergency call behavior, and the trust requirements of a service that enters the customer's home. A homeowner with a broken AC at 2pm doesn't browse and compare — they open Google, scan the top 3 results, and call. That 90-second window is where your marketing either works or doesn't.
            </p>
            <div className="p-6 bg-card border border-border rounded-2xl">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground italic">When a homeowner's AC breaks on the hottest day of the year, they call whoever appears first in the Map Pack. That's it. Your marketing's job is to make sure that's you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Seasonal Surge Problem */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">The Seasonal Surge Problem — And How We Solve It</h2>
            <p className="text-muted-foreground mb-8 text-lg text-center">
              HVAC search volume spikes 300–400% in summer. The companies dominating June, July, and August started building their Map Pack presence in March — not June. We run a seasonal marketing calendar for every HVAC client:
            </p>
            <div className="space-y-4">
              {seasonalData.map((item, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-2xl">
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">{item.season}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 text-center italic">If you're calling us in July, we can still help. But the HVAC companies already winning started in Q1.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">HVAC Marketing Services from GrowSmallBiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to own your local market — not rent it.</p>
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
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href={strategySessionUrl}>
                Schedule Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Real Results for HVAC Contractors */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Real Results for HVAC Contractors</h2>
              <p className="text-muted-foreground">The following results are drawn from verified client engagements. Full campaign detail and metrics are on the dedicated case study pages.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">AI SEO Case Studies — HVAC</h3>
                <p className="text-muted-foreground mb-4">Two documented AI SEO campaigns covering HVAC contractors across California and Alaska. Results include Google Business Profile visibility growth, organic traffic increases, keyword ranking improvements, and call volume data.</p>
                <Button variant="outline" asChild>
                  <Link to="/home-service-contractors/hvac-marketing/seo-case-study/">View AI SEO Case Studies →</Link>
                </Button>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Google Ads Case Studies — HVAC</h3>
                <p className="text-muted-foreground mb-4">Documented Google Ads campaigns showing cost-per-lead, conversion volume, and ROI for HVAC contractors. All conversions tracked to inbound calls and booked appointments.</p>
                <Button variant="outline" asChild>
                  <Link to="/home-service-contractors/hvac-marketing/google-ads-case-study/">View Google Ads Case Studies →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HVAC Contractors Choose GrowSmallBiz */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">Why HVAC Contractors Choose GrowSmallBiz</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Local</h3>
                <p className="text-muted-foreground">We're based in Danville, CA, in the heart of Contra Costa County. We serve Bay Area contractors competing in some of the most expensive digital markets in the country. We understand the competitive density, the seasonal patterns unique to Northern California, and the licensing and permit signals that affect local search rankings. We also run campaigns for HVAC contractors across the United States.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Exclusive Leads</h3>
                <p className="text-muted-foreground">We don't sell shared leads. Everything we build generates exclusive leads that come directly to you — not to you and five competitors simultaneously. This is the fundamental difference between owning your pipeline and renting it from HomeAdvisor or Angi.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Whole System</h3>
                <p className="text-muted-foreground">Local SEO, website design, Google Ads, reputation management, AI Receptionist, and CRM automation — fully integrated into one lead generation engine. No juggling three vendors who've never spoken to each other. No gaps between your ad spend and your lead follow-up.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">GrowSmallBiz is led by a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation — applied directly to your HVAC lead generation strategy. Not delegated to a junior account manager reading from a playbook.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Placeholder */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">What HVAC Contractors Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <Quote className="w-6 h-6 text-primary mb-4" />
                <p className="text-foreground italic mb-4">"We went from the third page on Google to the Map Pack top 3 in under 90 days. The phone hasn't stopped ringing since May."</p>
                <p className="text-sm text-muted-foreground">— Owner, HVAC Company | Contra Costa County, CA</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <Quote className="w-6 h-6 text-primary mb-4" />
                <p className="text-foreground italic mb-4">"The AI Receptionist paid for itself the first weekend. We booked two emergency AC jobs at 11pm that we would have completely missed."</p>
                <p className="text-sm text-muted-foreground">— Owner, HVAC Company | East Bay, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={faqs}
        title="HVAC Marketing FAQs"
        subtitle="Common questions from HVAC contractors"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about HVAC Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your HVAC business together.",
        }}
      />

      <BlogSection 
        posts={hvacBlogPosts}
        title="HVAC Marketing Insights"
        subtitle="Expert tips to help your HVAC business grow online"
        showViewAll={false}
      />

      <CardCTA
        title="Ready to Own Your Local HVAC Market?"
        description="The Map Pack positions your competitors hold right now weren't built in July. They were built in February and March — while you were busy running service calls. Let's build yours before the next peak season hits."
        buttonHref={strategySessionUrl}
        buttonText="Schedule Strategy Call"
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default HVAC;