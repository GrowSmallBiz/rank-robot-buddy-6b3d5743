import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import pleasantonHero from "@/assets/pleasanton-hero.webp";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, Search, Target, Zap, Home, Heart, Building2, UtensilsCrossed, Brain, TrendingUp, Star, Users, MessageSquare, Eye, BarChart3, CheckCircle } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { pleasantonCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const PleasantonCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Services in Pleasanton, CA | GrowSmallBiz</title>
        <meta name="description" content="Pleasanton, CA digital marketing services by GrowSmallBiz: Grow your business with AI SEO, AI optimized paid ads, and AI marketing automation." />
        <meta name="keywords" content="local SEO, digital marketing Pleasanton, Google Ads management, reputation management services, local business growth, AI-powered marketing, lead generation strategies, Pleasanton marketing agency" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/pleasanton-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Pleasanton"
        stateCode="CA"
        description="GrowSmallBiz serves Pleasanton's two ZIP codes with integrated digital marketing for local service businesses. Local SEO, Google Ads, AI automation, reputation management."
        url="/locations/pleasanton-ca/"
        latitude={37.6624}
        longitude={-121.8747}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Pleasanton, CA", url: "/locations/pleasanton-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={pleasantonHero} alt="GrowSmallBiz digital marketing agency serving Pleasanton CA dual-ZIP local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Pleasanton, CA — Local Service Business Marketing | Dual-ZIP Tri-Valley Market</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Stop Losing Pleasanton Leads to Competitors —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Full-Service Digital Marketing Built for Local Service Businesses</span>
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              Pleasanton is one of the highest-income markets in Alameda County — with a median household income of approximately $151,000 according to the US Census Bureau's 2023 American Community Survey. High-income clients have high expectations, more choices, and less patience for businesses that are hard to find or slow to respond. If you are not in the top three on Google Maps in Pleasanton, you are largely invisible at the moment your ideal client is actively choosing.
            </p>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-4" style={{ animationDelay: "0.15s" }}>
              GrowSmallBiz is a Tri-Valley digital marketing agency based in Danville — minutes from Pleasanton. We build integrated marketing systems for local service businesses across both Pleasanton ZIP codes, the Hacienda Business Park corridor, and Downtown Main Street. Contractors, dentists, restaurants, real estate professionals — if you serve Pleasanton clients, we are built for you.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" /> Call +1 (925) 886-3724
                </a>
              </Button>
            </div>
            <p className="mt-3 text-sm text-primary font-medium animate-fade-up" style={{ animationDelay: "0.25s" }}>
              No commitment. No pressure. Just a clear path forward for your business.
            </p>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 animate-fade-up text-sm text-foreground/60" style={{ animationDelay: "0.3s" }}>
              <a href="https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ Walnut Creek Chamber of Commerce</a>
              <span>|</span>
              <a href="https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ Danville Area Chamber of Commerce</a>
              <span>|</span>
              <a href="https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ San Ramon Chamber of Commerce</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-4" style={{ backgroundColor: 'hsl(var(--accent))' }}>
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-medium text-accent-foreground/80 mb-2 uppercase tracking-wider">Proud Members Of</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-accent-foreground">
            <a href="https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" target="_blank" rel="noopener" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Walnut Creek Chamber of Commerce
            </a>
            <span className="text-accent-foreground/40">|</span>
            <a href="https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" target="_blank" rel="noopener" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Danville Area Chamber of Commerce
            </a>
            <span className="text-accent-foreground/40">|</span>
            <a href="https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" target="_blank" rel="noopener" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> San Ramon Chamber of Commerce
            </a>
            <span className="text-accent-foreground/40">|</span>
            <a href="https://www.concordchamber.com/list/member/growsmallbiz-digital-marketing-12991" target="_blank" rel="noopener" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Greater Concord Chamber of Commerce
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY DIFFERENT ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">WHY US</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Makes GrowSmallBiz Different — And Why It Matters for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Pleasanton Bottom Line</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-up">
            Pleasanton's SERPs are led by well-resourced agencies — one holding a 3,369-word page scoring 89–91 across primary keywords, another Pleasanton-based and explicitly covering the market. Neither addresses the structural difference between Pleasanton's two ZIP codes or the review velocity dynamics that govern local map pack rankings here. Subrata Guha, GrowSmallBiz founder, brings 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of Pleasanton's premium local service market.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MapPin, title: "Tri-Valley Proximity", text: "Based in Danville, minutes from Pleasanton. We know the difference between 94566 and 94588, the Hacienda Business Park daytime market, and the Downtown Main Street competitive dynamics that shape rankings here." },
              { icon: Target, title: "Dual-ZIP Strategy", text: "Most agencies treat Pleasanton as one market. We build separate optimization tracks for each ZIP code — because the Downtown 94566 residential audience and the Hacienda 94588 corporate population are different buyers with different search behavior." },
              { icon: Star, title: "Review Velocity Expertise", text: "Pleasanton's top map pack positions are held by businesses with 150+ reviews accumulated over years. The hidden lever is recency — consistent new review activity outperforms stalled high volume. We build review velocity systems, not one-time campaigns." },
              { icon: Brain, title: "AI-Powered Execution", text: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems close the missed-call gap. Invoca research shows businesses miss up to 35% of inbound calls during peak hours. In Pleasanton, where a single HVAC replacement averages $3,000–$12,500, each missed call is a missed paycheck." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal p-6 rounded-2xl animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 max-w-4xl mx-auto animate-fade-up">
            No long-term contracts: Month-to-month agreements keep us accountable. We earn your business every single month.
          </p>
        </div>
      </section>

      {/* ===== MARKET SECTION ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">MARKET INSIGHTS</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Competitors Are Winning in Pleasanton Search Results.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's Exactly Why — and How to Take It Back.</span>
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-6 animate-fade-up">
            <p className="text-muted-foreground leading-relaxed">Pleasanton presents a market opportunity unlike any other city in the Tri-Valley — and one that most digital marketing agencies, including its current SERP leaders, consistently misread. The reason is structural: Pleasanton is not one market. It is two meaningfully different markets sharing a city boundary.</p>

            <h3 className="text-2xl font-display font-bold text-foreground mt-10">Why Pleasanton Is the Tri-Valley's Most Structurally Complex — and Most Rewarding — Market</h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="feature-card-teal p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">A Tale of Two ZIP Codes</h4>
                <p className="text-muted-foreground text-base leading-relaxed">The 94566 ZIP covers historic Downtown Main Street — one of the most charming and commercially active small-town downtowns in the East Bay — along with established residential neighborhoods, the Alameda County Fairgrounds, and a rooted community of long-time Pleasanton homeowners. The 94588 ZIP covers Hacienda Business Park and newer I-580 corridor developments. These two populations have different schedules, different search behaviors, different peak hours, and different decision drivers. Businesses serving both need local SEO strategies that reflect these behavioral differences rather than treating Pleasanton as a single unified market.</p>
              </div>
              <div className="feature-card-teal p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">The Hacienda Business Park B2B Opportunity</h4>
                <p className="text-muted-foreground text-base leading-relaxed">Hacienda Business Park hosts headquarters or major offices of Workday, Oracle, Ross Stores, and others — creating a daytime population of tens of thousands in the 94588 ZIP code. This workforce generates consistent local search behavior during business hours: lunch restaurants, auto service, healthcare, and professional services. Businesses optimized for 'near Hacienda Business Park' queries capture a consistent daytime audience that standard residential SEO strategies entirely miss. For GrowSmallBiz clients serving both residential and commercial accounts — HVAC contractors, cleaning services, electricians, plumbers — Pleasanton's dual-market structure requires campaigns built to capture both homeowner intent searches and business-hour commercial searches.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="feature-card-teal p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">BART Commuter Mobile Search Behavior</h4>
                <p className="text-muted-foreground text-base leading-relaxed">The Dublin/Pleasanton BART station — physically located in Dublin — is the primary transit gateway for Pleasanton commuters. Many service searches originate on mobile devices during BART commutes, making Google Maps visibility and click-to-call optimization critical for businesses targeting Pleasanton's professional commuter population. Desktop-first website design is a conversion disadvantage for this segment.</p>
              </div>
              <div className="feature-card-teal p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">The SAB Opportunity — Ranking Without a Pleasanton Address</h4>
                <p className="text-muted-foreground text-base leading-relaxed">Service area businesses without a physical Pleasanton location regularly rank in Pleasanton's map pack by configuring their Google Business Profile service area correctly, building geo-targeted landing pages for Pleasanton-specific queries, and developing citations in Alameda County directories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEARCH GAP ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">THE SEARCH GAP</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Local Search Gap Costing Most Pleasanton Service Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">10–15 Leads Every Month</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6 animate-fade-up">
            <p className="text-muted-foreground leading-relaxed">
              According to <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2023 Local Consumer Review Survey</a>, 98% of consumers read online reviews for local businesses and 76% regularly check Google reviews before choosing a service provider. Yet 56% of businesses have still not fully optimized their Google Business Profile. In Pleasanton's high-income, high-expectation market — where clients have real choices between multiple well-reviewed providers — being on page 2 of Google Maps is functionally invisible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pleasanton's competitive pattern is distinctive: established businesses hold top 3 map positions with 150+ reviews accumulated over years, while newer or relocated businesses rank 4–10 with strong services but thin digital presence. The critical insight from Pleasanton market audits is that review recency matters as much as volume. A business with 200 reviews and 20 recent ones outperforms one with 300 but stalled activity. Review velocity is the hidden ranking lever — and it is the one most agencies do not actively manage.
            </p>

            <div className="feature-card-teal p-6 rounded-2xl mt-6">
              <p className="text-foreground/90 italic text-lg leading-relaxed">
                "Review velocity — the consistent rate of new reviews — is as important as total review count. A business with 200 reviews and 20 recent ones outperforms one with 300 but stalled activity. This is Pleasanton's hidden ranking lever."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Integrated Marketing System Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Pleasanton Service Businesses</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">Fills Your Calendar, Not Just Your Dashboard — If you are running marketing through a mix of disconnected vendors, freelancers, and DIY tools, you already know the problem — no one owns the full picture. GrowSmallBiz manages every growth channel under one strategy, so your SEO, ads, website, and automation are pulling in the same direction across both Pleasanton ZIP codes.</p>
          </div>

          {/* Services Overview Table (desktop) */}
          <div className="hidden md:block overflow-x-auto mb-16 animate-fade-up">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'hsla(174, 100%, 24%, 0.2)' }}>
                  <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Service</th>
                  <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">What We Do for You</th>
                  <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Pleasanton Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP service area optimization, dual-ZIP citation building, review velocity management, local link building", impact: "Rank in Google Maps 3-pack for both 94566 Downtown and 94588 Hacienda audiences; outperform current SERP leaders with hyper-local dual-ZIP content" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, ZIP-targeted campaigns, quality score management, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility in Pleasanton; geo-targeted to 94566 and 94588 with device and scheduling adjustments for each audience" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Google reports up to 25% increase in consumer trust with Google Guaranteed badge — critical for home service contractors in Pleasanton's competitive market" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted campaigns for ZIP codes 94566 and 94588; Hacienda employee targeting; homeowner demographic filters; retargeting sequences", impact: "Reach Pleasanton's high-income households and Hacienda business park population — Meta reaches 70%+ of US adults monthly" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Convert Pleasanton's BART-commuter mobile traffic and Hacienda daytime searches; desktop-first design is a conversion disadvantage for this market" },
                  { service: "Reputation Management", whatWeDo: "Review velocity campaigns, Google/Yelp monitoring, professional response guidance", impact: "Review velocity — consistent rate of new reviews — is as important as total count in Pleasanton's competitive local search environment" },
                  { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Businesses miss up to 35% of inbound calls during peak hours (Invoca) — in Pleasanton where a single HVAC replacement averages $3,000–$12,500, each missed call is a missed paycheck" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-foreground/10 hover:bg-foreground/5 transition-colors">
                    <td className="p-4 text-foreground font-semibold align-top">{row.service}</td>
                    <td className="p-4 text-muted-foreground align-top">{row.whatWeDo}</td>
                    <td className="p-4 text-muted-foreground align-top">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-16">
            {[
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP service area optimization, dual-ZIP citation building, review velocity management, local link building", impact: "Rank in Google Maps 3-pack for both 94566 Downtown and 94588 Hacienda audiences" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, ZIP-targeted campaigns, quality score management, conversion tracking", impact: "Immediate top-of-page visibility in Pleasanton; geo-targeted to 94566 and 94588" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Up to 25% increase in consumer trust with Google Guaranteed badge" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted campaigns for ZIP codes 94566 and 94588; Hacienda employee targeting; retargeting sequences", impact: "Reach Pleasanton's high-income households and Hacienda business park population" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements", impact: "Convert Pleasanton's BART-commuter mobile traffic and Hacienda daytime searches" },
              { service: "Reputation Management", whatWeDo: "Review velocity campaigns, Google/Yelp monitoring, professional response guidance", impact: "Review velocity is as important as total count in Pleasanton's competitive market" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, CRM integration", impact: "Capture every lead the moment it arrives — each missed call is a missed paycheck" },
            ].map((row, i) => (
              <div key={i} className="feature-card-teal p-5 rounded-2xl">
                <h4 className="text-foreground font-bold mb-2">{row.service}</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong className="text-foreground/80">What We Do:</strong> {row.whatWeDo}</p>
                <p className="text-muted-foreground text-sm"><strong className="text-foreground/80">Pleasanton Impact:</strong> {row.impact}</p>
              </div>
            ))}
          </div>

          {/* ===== TWO-ZIP STRATEGY ===== */}
          <div className="animate-fade-up mb-16">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">The Two-ZIP Strategy — Why Pleasanton Requires a Different Approach for 94566 and 94588</h3>
            <p className="text-muted-foreground text-center mb-8 max-w-4xl mx-auto">Most agencies and most local service businesses treat Pleasanton as one market with one strategy. This is the single most consistent gap in Pleasanton's current SERP leaders — and it is directly exploitable with a properly structured dual-ZIP approach.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'hsla(174, 100%, 24%, 0.2)' }}>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20"></th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">ZIP 94566 — Downtown & Established</th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">ZIP 94588 — Hacienda & I-580</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Primary Audience", zip1: "Long-time Pleasanton homeowners, Downtown Main Street shoppers, Fairgrounds-area residents", zip2: "Hacienda Business Park employees (Workday, Oracle, Ross Stores HQ), I-580 corridor new developments" },
                    { label: "Top Service Demand", zip1: "Home services, dental/wellness, restaurants, retail, professional services", zip2: "Commercial HVAC/maintenance, lunch dining, auto service, healthcare, professional services" },
                    { label: "Search Behavior", zip1: "Evening and weekend — homeowner research on desktop and mobile", zip2: "Daytime — mobile searches during business hours and BART commutes" },
                    { label: "Review Profile Needed", zip1: "High volume, strong recency, Downtown community trust signals", zip2: "Fast response, commercial credibility, business-hour availability signals" },
                    { label: "GrowSmallBiz Strategy", zip1: "Local SEO targeting Downtown Main Street and residential keywords; reputation management for community trust", zip2: "Hacienda Business Park proximity keywords; B2B service landing pages; business-hour campaign scheduling" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-foreground/10">
                      <td className="p-4 text-foreground font-semibold align-top">{row.label}</td>
                      <td className="p-4 text-muted-foreground align-top">{row.zip1}</td>
                      <td className="p-4 text-muted-foreground align-top">{row.zip2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-6 max-w-4xl mx-auto">A roofing contractor serving both 94566 and 94588 needs separate GBP service area configurations, separate landing pages targeting neighborhood-level keywords, and separate paid campaign ad schedules — evening and weekend for residential 94566 homeowners, business-hour targeting for 94588 Hacienda commercial properties. This is not complexity for its own sake. It is the structural reason GrowSmallBiz pages consistently outperform the single-strategy approaches of agencies currently ranking in Pleasanton's local search results.</p>
          </div>

          {/* Service Deep Dives */}
          <div className="space-y-16">
            {/* Local SEO */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Search className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Get Found First When Pleasanton Customers Search for Your Services — Local SEO & Google Maps Domination</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of people who search for a nearby business on their smartphone visit one within a day. In Pleasanton, where that smartphone search may happen during a BART commute to the Dublin/Pleasanton station or a lunch break at Hacienda Business Park, that 24-hour window is your conversion opportunity — or your competitor's.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Google Business Profile optimization calibrated to Pleasanton's dual-ZIP market — service area configuration, category selection, photo cadence, Q&A, and post frequency aligned with Google's local ranking factors</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Neighborhood-level keyword targeting: 'HVAC repair Downtown Pleasanton,' 'dentist Hacienda Business Park,' 'plumber 94566,' 'restaurant Main Street Pleasanton' — hyper-local terms that current SERP leaders' templated pages never build</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Review velocity management — systematic review request campaigns that generate consistent new review activity rather than occasional spikes, building the recency signal that Pleasanton's top map pack positions require</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Alameda County citation building — structured citations across local directories, aggregators, and business associations that establish geo-relevance for both ZIP codes</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>SAB (Service Area Business) track for contractors based outside Pleasanton — GBP service area configuration, geo-targeted landing pages, and Alameda County citations that establish Pleasanton map pack presence without a local address</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Optimize Your Local SEO for Pleasanton <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Google Ads */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Target className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Need Leads This Week, Not This Quarter? Google Ads That Deliver Pleasanton Customers on Day One.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Google Ads in Pleasanton require careful audience and schedule management to reflect the dual-ZIP market reality. A campaign running flat across all hours and both ZIP codes wastes budget on the wrong audience at the wrong time. Our campaigns are architected around each audience's actual search behavior.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Campaigns geo-targeted to ZIP codes 94566 and 94588 with separate ad scheduling — evening and weekend emphasis for residential 94566 homeowners; business-hour emphasis for 94588 Hacienda commercial searchers</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Quality Score management to keep cost-per-click competitive against well-funded Pleasanton advertisers</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Ad extensions — call extensions, location extensions, sitelinks, and structured snippets — increasing click-through rate without increasing bids</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Call-only campaigns for emergency home service categories where immediate phone contact drives the booking decision</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Complete conversion tracking: every dollar of ad spend accountable to phone calls, form fills, and booked appointments — not just clicks and impressions</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Launch Google Ads for Your Pleasanton Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* LSA */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Shield className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Show Up Above Every Competitor With a Google Trust Badge — More Pleasanton Leads, Pre-Qualified Before They Call</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">When a Pleasanton homeowner searches for an HVAC company during a July heat wave at 7pm, the first results are Local Services Ads with the green Google Guaranteed checkmark. Google reports that businesses displaying the badge see up to a 25% increase in consumer trust. For trade contractors in Pleasanton competing in categories where trust and credibility determine the call, LSA frequently delivers the highest ROI of any paid channel.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>The Google Guaranteed badge signals Google has verified your license, insurance, and background check — differentiated visibility that competitors without the badge cannot match regardless of ad spend</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Pay-per-verified-lead model — you pay only when a potential customer contacts you directly through the ad, not for clicks that go nowhere</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Full LSA setup and verification management — license documentation, insurance confirmation, background checks, and ongoing bid management</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Dispute resolution for invalid leads — protecting your investment in Pleasanton's competitive home services market</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Set Up Google LSA for Your Pleasanton Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Social Media */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Users className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Reach Pleasanton Homeowners Before They Need You — And Be the First Call When They Do</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Meta's platforms reach more than 70% of US adults every month. For Pleasanton businesses, that reach is only valuable when precisely targeted to the right audience — Hacienda Business Park employees, Downtown homeowners, or residents in a specific ZIP code at a specific stage of their purchase in your service category. Broad Bay Area campaigns are expensive and inefficient. Pleasanton-specific campaigns deliver meaningful audience control.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Campaigns targeting ZIP codes 94566 and 94588 layered with demographic and interest filters reflecting Pleasanton's market — high-income homeowner segments, Hacienda employee populations, and relevant age brackets</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Retargeting sequences for website visitors who did not convert — particularly effective in Pleasanton's 2 to 4 week decision window for premium home services and healthcare decisions</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Seasonal campaigns for HVAC maintenance, roofing inspections, or storm damage response generating inbound volume that organic search and LSA alone do not capture</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Downtown Main Street restaurant and retail campaigns — event promotions, seasonal features, and loyalty campaigns that reach Pleasanton's dining community</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Launch Social Media Advertising for Your Pleasanton Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Reputation Management */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Star className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">A 3-Star Rating Is Silently Killing Your Pleasanton Business. Here's How We Fix It in 90 Days.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">BrightLocal's 2023 survey found that 98% of consumers read online reviews before choosing a local business. In Pleasanton's high-income, high-expectation market, that statistic is felt acutely: clients at this income level research more thoroughly, read more reviews, and are more likely to filter by minimum star rating before ever visiting a website. A 3.7-star rating in a category where competitors average 4.6 stars costs you significant lead volume — not because of your service quality, but because of your visible reputation gap.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">The Pleasanton-specific insight is review velocity. Our market audits consistently show that Pleasanton map pack leaders have 150+ reviews accumulated over years — but the businesses outperforming them in year-over-year ranking trends have fewer total reviews with more recent activity. We build active review velocity systems, not one-time request campaigns.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Review request automation timed to the moment of highest satisfaction — right after a completed HVAC service call, dental appointment, or dining experience — calibrated for Pleasanton's busy professional demographic who respond best to frictionless, timely requests</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, Zocdoc, and OpenTable — ensuring no review goes unnoticed across any platform Pleasanton residents use</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Professional negative review response guidance — in Pleasanton's tight-knit community, a well-crafted professional response is visible to every prospect who reads the review thread afterward</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>HIPAA-compliant reputation management for dental practices and med spas competing against large DSOs and national wellness franchises with significant marketing budgets</li>
              </ul>
              <p className="text-muted-foreground mb-6">BrightLocal's 2024 survey found that 88% of consumers say they would use a business that responds to all reviews, compared to just 47% for businesses that do not respond at all.</p>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Build a 4.5+ Star Reputation in Pleasanton <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Website Design */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Eye className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Your Website Should Be Your Best Salesperson. If It's Not Generating Pleasanton Leads Daily, It's Costing You Money.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">A website that looks good but does not convert is an expensive brochure. In Pleasanton's high-expectation market, your website also sets the quality expectation before a client ever makes contact — a slow, generic, or outdated site signals the wrong things to a clientele that is accustomed to choosing premium providers. Desktop-first website design is a conversion disadvantage for Pleasanton's BART-commuter and Hacienda mobile-search audience.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Mobile-first, fast-loading design — critical for Pleasanton's BART-commuter demographic and Hacienda business park lunchtime searchers who are primarily on mobile</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Above-the-fold calls to action before the scroll — click-to-call and tap-to-text immediately available</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Trust signals — reviews, credentials, service guarantees — positioned where hesitation happens in Pleasanton's research-oriented buyer journey</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>SEO baked into the architecture — page structure, internal linking, schema markup, and metadata optimized for dual-ZIP Pleasanton queries from the start</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Geo-targeted landing pages for 94566 Downtown and 94588 Hacienda audiences — capturing ZIP-specific search intent that generic agency pages never address</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Get a Conversion-Focused Website Built for Pleasanton <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* AI Receptionist */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Every Missed Call Is a Lost Job. Our AI Receptionist Follows Up in Seconds — So You Never Lose Another Pleasanton Lead to a Faster Competitor.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Research from MIT and InsideSales.com, published in the Harvard Business Review, found that responding within 5 minutes makes contact 100 times more likely than waiting 30 minutes. Invoca research shows businesses miss up to 35% of inbound calls during peak hours. In Pleasanton, where a single HVAC replacement averages $3,000 to $12,500 and a single new dental patient relationship can represent years of revenue, each missed call is a missed paycheck — and a relationship that goes to whoever answers next.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Here is a common Pleasanton scenario: a homeowner near Downtown searches for an electrician at 8pm — breaker tripped, no power, cannot wait until morning. They call the first result. No answer. The second. Voicemail. The third — the AI Receptionist answers immediately, confirms availability, asks qualifying questions, and books a next-morning appointment directly into the calendar. The first two businesses had the same opportunity and lost it.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — every lead handled at the moment of highest intent</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>AI QuadBots: conversational AI managing web chat, voice interactions, and lead qualification simultaneously — after-hours website visitors receive intelligent responses, not auto-replies, and qualified leads route directly to your CRM</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>SMART nurture sequences: automated CRM workflows sending the right message at the right time — appointment reminders, follow-up sequences, seasonal promotions, renewal notices, and review requests running continuously</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>CRM integration and lead tracking — every inquiry captured and tracked from first contact to closed job, giving you complete visibility across both Pleasanton ZIP codes</li>
              </ul>
              <p className="text-muted-foreground mb-6">Retention is the fastest path to revenue growth for established Pleasanton service businesses. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure keeps your best clients engaged without adding headcount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">WHO WE SERVE</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for Your Industry, Not Adapted From Someone Else's Playbook —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">See If We're the Right Fit for Pleasanton</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-4xl mx-auto animate-fade-up">
            GrowSmallBiz works exclusively with local service businesses in Pleasanton and the Tri-Valley. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — with separate strategic tracks for 94566 and 94588 audiences where the market demands it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: "Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Fill Your Pleasanton Calendar Year-Round", text: "Pleasanton's housing stock creates predictable, high-volume demand across all home service categories. HVAC companies serve established neighborhoods east of Downtown and newer I-580 corridor developments, where aging systems and higher-end installs create year-round call volume. Plumbers and electricians work steadily across Bernal Avenue and Santa Rita Road corridors. Roofers handle older tile and composition roofs in 94566 and newer builds in 94588 entering their first major maintenance cycle. The challenge is not demand — it is visibility and response speed. We build the dual-ZIP systems that ensure Pleasanton contractors appear in both audiences and capture every lead the moment it arrives." },
              { icon: Heart, title: "Dentists, Med Spas & Wellness Professionals: Attract Pleasanton's High-Value Patients Who Book and Stay", text: "Pleasanton's $151K median household income creates a strong market for premium dental care, med spa treatments, chiropractic, and wellness services. Patients here research more thoroughly than in most Bay Area markets — reading more reviews, checking credentials, and evaluating online presence quality before making contact. The competitive challenge for smaller practices is the presence of large dental service organizations (DSOs) and national med spa franchises with significant marketing budgets. We build the complete digital presence — optimized Google Business Profile, review velocity campaigns, HIPAA-compliant reputation management, and AI booking follow-up — that positions independent practices to compete on quality and personalization rather than budget alone." },
              { icon: UtensilsCrossed, title: "Restaurants & Hospitality: Fill More Tables, Build Loyal Regulars, Own Pleasanton's Dining Scene", text: "Downtown Main Street is one of the East Bay's most active and competitive dining corridors — and it is highly visible on Google Maps. Restaurants here compete for the same local pack positions where consumer expectations are high and review volume is a key trust signal. Review velocity matters here more than anywhere in Pleasanton's market: a restaurant with 200 reviews and 20 recent ones outperforms one with 300 reviews and stalled activity in map pack rankings. We build the full digital visibility and retention system — Local SEO, Google Maps optimization, social media, VIP Club, and reactivation campaigns — that fills tables on Tuesday nights, not just Saturdays." },
              { icon: Building2, title: "Real Estate Agents & Brokers: Own the Tri-Valley Market, Multiply Your Listing Inquiries, and Build a Referral Engine", text: "Pleasanton's real estate market combines stable residential demand in 94566's established neighborhoods with active new construction activity in the 94588 I-580 corridor. Agents competing here face dominant platforms like Zillow alongside well-resourced local brokerages. We build hyper-local SEO, targeted paid campaigns for both buyer and seller segments, and personal branding systems that establish lasting local authority — generating qualified listing inquiries from both ZIP codes rather than relying on platform traffic alone." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal p-6 rounded-2xl animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS / PROOF ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">PROVEN RESULTS</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Real Client Results Across Our Service Areas
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">See what's possible when marketing runs as a complete, integrated system.</p>
          </div>

          <CampaignResultsCards cards={pleasantonCards} />

          {/* Channel Comparison Table */}
          <div className="animate-fade-up mt-12">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4 text-center">Single-Channel Marketing Doesn't Win in Pleasanton Anymore. Here's What Actually Moves the Needle.</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-3xl mx-auto">The current SERP leaders for Pleasanton keywords built durable rankings through single-channel SEO investments made years ago. Outperforming those rankings requires not just better content — it requires a fully integrated system that compounds across every channel simultaneously.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'hsla(174, 100%, 24%, 0.2)' }}>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Channel</th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Best For</th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Time to Results</th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Long-Term Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { channel: "Local SEO", bestFor: "Map pack rankings in both 94566 and 94588", time: "3–6 months full impact", value: "High — compounds; Pleasanton leaders have 150+ reviews accumulated over years" },
                    { channel: "Google Ads / PPC", bestFor: "Immediate lead flow while SEO builds", time: "Day 1", value: "Medium — requires ongoing spend" },
                    { channel: "Google LSA", bestFor: "Pay-per-verified-lead, Google Guaranteed badge", time: "2–4 weeks setup", value: "High — highest ROI paid channel for trades" },
                    { channel: "Meta / Social Ads", bestFor: "Hacienda employee targeting + homeowner retargeting", time: "1–2 weeks", value: "Medium — audience building and seasonal campaigns" },
                    { channel: "Reputation Mgmt", bestFor: "Review velocity — recency as important as volume", time: "30–90 days", value: "High — hidden ranking lever in Pleasanton's competitive market" },
                    { channel: "AI & Automation", bestFor: "Closing the missed-call gap — 35% of calls missed at peak", time: "Immediate", value: "High — multiplies every channel" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-foreground/10">
                      <td className="p-4 text-foreground font-semibold">{row.channel}</td>
                      <td className="p-4 text-muted-foreground">{row.bestFor}</td>
                      <td className="p-4 text-muted-foreground">{row.time}</td>
                      <td className="p-4 text-muted-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATOR GRID ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">WHY GROWSMALLBIZ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              No Templates. No Generalists. No Excuses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Why GrowSmallBiz Outperforms Every Agency That's Failed Your Pleasanton Business Before.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-8 max-w-4xl mx-auto animate-fade-up">Pleasanton's SERPs are led by well-resourced agencies and national players. None of them build separate strategies for 94566 and 94588. None address review velocity as a distinct ranking lever. None are based in the Tri-Valley with the market-specific knowledge that comes from proximity.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Tri-Valley Proximity", text: "GrowSmallBiz is based in Danville — minutes from Pleasanton. We know the I-580 corridor, the difference between 94566 and 94588, and what Pleasanton service business owners face daily. Not a national agency or a generic Bay Area shop." },
              { icon: Target, title: "Dual-ZIP Strategy", text: "Most agencies treat Pleasanton as one market. We build separate strategies for 94566 (Downtown, established residential) and 94588 (Hacienda, I-580 corridor) — because these are meaningfully different audiences with different search behavior and different buying triggers." },
              { icon: TrendingUp, title: "Review Velocity", text: "Pleasanton's top map pack positions are held by businesses with 150+ reviews accumulated over years. The hidden lever is review recency — businesses with newer review activity outperform those with stalled volume. We build active review velocity systems, not one-time campaigns." },
              { icon: Brain, title: "AI-Powered Focus", text: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems close the missed-call gap that costs Pleasanton service businesses 35% of peak-hour leads — revenue that goes straight to whoever answers first." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal p-6 rounded-2xl text-center animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 max-w-4xl mx-auto animate-fade-up">The agencies currently ranking for Pleasanton keywords were built from Bay Area templates that treat both ZIP codes identically. GrowSmallBiz builds your Pleasanton strategy from the actual competitive landscape of your specific ZIP code, your specific vertical, and your specific competitive position — because that specificity is what wins in Pleasanton's high-scrutiny local search environment.</p>
        </div>
      </section>

      {/* ===== WHAT WORKING WITH US LOOKS LIKE ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Working With GrowSmallBiz Actually Looks Like —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Three Steps from Assessment to Growth</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "Step 1", title: "Free Strategy Session (Week 1)", text: "The engagement starts with a full audit of your current digital presence: your Google Business Profile, website, existing rankings, and ad accounts if any are active. We map your Pleasanton competitors — who is in the map pack for your category in both ZIP codes, what they are doing, and where the gaps are. From there, we identify the fastest path to meaningful traction for your specific business type and location. In Pleasanton, our competitive audits reveal a consistent pattern: the top map positions in most categories are held by businesses that invested in local SEO three to five years ago. Many have not updated their strategies since. A well-executed current approach — particularly one that addresses the dual-ZIP structure and review velocity — consistently outperforms an outdated one, even against longer-established competitors. The session ends with a clear picture of where you stand and a specific plan for what changes will move the needle fastest." },
              { step: "Step 2", title: "Build Your Growth System (Weeks 2–4)", text: "With the strategy confirmed, we move into build. Your Google Business Profile is fully optimized and configured for both relevant Pleasanton ZIP codes. Any campaigns — Google PPC, LSA, or Meta Ads — are structured, targeted, and launched. If a new website is part of the plan, development begins with a conversion-first architecture calibrated for Pleasanton's mobile-first, dual-audience market. The AI Receptionist is configured to your intake workflow, connected to your scheduling system, and tested across channels. SMART nurture sequences are built and activated. Everything is set up to work together as a system — not as separate tools pointing in different directions." },
              { step: "Step 3", title: "Monitor, Optimize, and Scale (Month 2+)", text: "Once the system is live, we shift to ongoing management and optimization. You receive monthly reporting that covers every active channel: local rankings across both Pleasanton ZIP codes, Google Business Profile call volume, form submissions, ad performance, and AI Receptionist lead capture data. Nothing is tracked in isolation — the goal is a complete picture of where leads are coming from and what it costs to acquire them across your Pleasanton market." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal p-6 rounded-2xl animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-primary font-semibold text-sm mb-2">{item.step}</p>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page PersonCTA */}
      <PersonCTA
        title="Ready to Dominate Pleasanton's Local Search Results?"
        description="Schedule your free strategy session — dual-ZIP competitive audit, local SEO analysis, and a clear growth roadmap built specifically for your Pleasanton service business."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
      />

      {/* FAQ Section */}
      <FAQSection
        title={<>Your Questions Answered — <span className="text-transparent bg-clip-text bg-gradient-primary italic">No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in Pleasanton</span></>}
        subtitle="The questions below reflect what Pleasanton service business owners ask most commonly before starting a marketing engagement."
        faqs={[
          { question: "Can I rank in Pleasanton without a Pleasanton address?", answer: "Yes. Service area businesses without a physical Pleasanton location rank in Pleasanton's map pack by configuring their Google Business Profile service area to include Pleasanton, building geo-targeted landing pages for Pleasanton-specific queries, and developing citations in Alameda County directories. Proximity matters but can be offset by relevance and prominence. Contractors in Dublin, San Ramon, and Danville are already ranking competitively for HVAC, plumbing, electrical, and roofing searches in Pleasanton without a local address — the time to start is now." },
          { question: "I have a Pleasanton address but I'm not showing up in the Maps 3-pack. Why?", answer: "Google's local ranking algorithm uses three factors: proximity, relevance, and prominence. Having a Pleasanton address covers proximity, but relevance depends on how well your Google Business Profile, website, and content match searcher intent. Common gaps include incorrect GBP categories, incomplete service listings, and untargeted on-page content. Prominence is driven by review volume, review recency, citation consistency, and local inbound links. Many businesses with a local address but poor map pack performance claimed their GBP years ago and have not actively managed it since. Active, ongoing management of review velocity and GBP signals is what separates top-3 positions from positions 4–10 in Pleasanton." },
          { question: "How long does SEO take in Pleasanton?", answer: "Local SEO results are faster than many suggest. Google Business Profile optimization shows measurable movement — increased views, calls, and direction requests — within 30 to 60 days. Organic rankings shift within 60 to 90 days for less competitive terms and 3 to 6 months for primary category keywords. Pleasanton is competitive but not exceptional: outdated leaders can be outperformed within 6 to 12 months. Fastest results come from treating SEO as a system — consistent GBP activity, regular content, and steady review velocity." },
          { question: "Do Google Local Services Ads work for trade contractors in Pleasanton?", answer: "LSA is a top-performing paid channel for trade contractors in Pleasanton when set up correctly. The pay-per-lead model means you pay only when a consumer contacts you through the ad. The Google Guaranteed badge is the most visible trust signal for service categories. Google reports up to a 25% increase in consumer trust for businesses displaying it. The verification process requires license, insurance, and background checks, which we manage on your behalf. We handle bid management to keep cost-per-lead profitable in Pleasanton's competitive home services categories." },
          { question: "Should I run Google Ads or Google Local Services Ads — or both?", answer: "Google Ads and Local Services Ads serve different functions and can run together effectively. Google Ads charges per click and gives precise control over keywords, ad copy, landing pages, and bidding — but you pay regardless of whether the visitor contacts you. LSA charges per verified lead and appears above standard ads with the Google Guaranteed badge. For Pleasanton service contractors, LSA typically offers higher ROI because you pay only for actual inquiries. LSA availability varies by category and may not cover all queries — which is where Google Ads fills the gap for longer-tail and specific searches. Running both maximizes your total coverage of Pleasanton's search results page." },
          { question: "Can Meta ads work for a contractor targeting homeowners in Pleasanton?", answer: "Facebook and Instagram ads work well for Pleasanton contractors when used for awareness, retargeting, and seasonal demand campaigns. The platform is not search-intent based, but it allows precise targeting of homeowners in ZIP codes 94566 and 94588 with age, income, and homeownership filters. Retargeting keeps your brand visible during the 2 to 4 week decision window common for premium home services in Pleasanton's market. Seasonal campaigns timed around HVAC maintenance, roofing inspections, or storm damage generate inbound volume that organic search and LSA alone do not capture." },
          { question: "What does the AI Receptionist actually do?", answer: "The AI Receptionist is a 24/7 automated system handling leads across channels — after-hours calls, web forms, chat, and texts. It responds instantly, qualifies leads with structured intake, answers common questions, and books appointments directly into your scheduling system without manual intervention. For leads not booked initially, automated follow-ups re-engage prospects within a defined window. Speed of response is the largest factor in lead conversion: research from MIT and InsideSales.com found responding within 5 minutes makes contact 100 times more likely than waiting 30 minutes. The AI Receptionist eliminates the delays that cause lead loss in Pleasanton's competitive service categories. Every interaction is logged and reportable." },
          { question: "Do you manage all channels, or do I have to coordinate between separate vendors?", answer: "We manage every active channel under one strategy and one point of contact. Local SEO, Google Ads, LSA, Meta Ads, website, and AI Receptionist are components of a single system we run together across both Pleasanton ZIP codes. This alignment compounds channel effectiveness: a prospect who finds you via search, sees your Meta retargeting ad, and gets an instant AI Receptionist response converts at a significantly higher rate than one touched by disconnected vendors. You receive unified monthly reporting covering all channels in one view — no piecing together data from separate sources. One strategy, one report, one contact." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about marketing in Pleasanton?",
          description: "We're here to help you find the right strategy.",
          tagline: "Let's grow your Pleasanton business together.",
        }}
      />

      {/* Pre-Form PersonCTA */}
      <PersonCTA
        title="Every Day You Wait, Your Competitors Book Another Pleasanton Customer That Should Have Been Yours."
        description="Pleasanton's top map pack positions are held by businesses that invested in local SEO years ago. The good news: many have not updated their strategies since — and a well-executed current approach, built around the dual-ZIP structure and review velocity, consistently outperforms an outdated one. GrowSmallBiz gives Pleasanton service businesses the integrated marketing system that wins in a premium, dual-audience market: one connected platform spanning awareness to retention, powered by AI, and managed by a team based minutes away in Danville."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
      />

      <ConsultationFormSection />

      {/* Cross-City Navigation */}
      <section className="py-12" style={{ background: 'hsl(210 50% 8%)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Martinez", path: "/locations/martinez-ca/" },
              { name: "Concord", path: "/locations/concord-ca/" },
              { name: "Pleasant Hill", path: "/locations/pleasant-hill-ca/" },
              { name: "Walnut Creek", path: "/locations/walnut-creek-ca/" },
              { name: "Danville", path: "/locations/danville-ca/" },
              { name: "San Ramon", path: "/locations/san-ramon-ca/" },
              { name: "Dublin", path: "/locations/dublin-ca/" },
              { name: "Livermore", path: "/locations/livermore-ca/" },
              { name: "Tracy", path: "/locations/tracy-ca/" },
            ].map((city) => (
              <Link
                key={city.path}
                to={city.path}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default PleasantonCA;