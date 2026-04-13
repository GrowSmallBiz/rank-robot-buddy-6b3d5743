import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import livermoreHero from "@/assets/livermore-hero.webp";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Zap, Globe, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, Brain, TrendingUp, MessageSquare, Award } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { livermoreCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const LivermoreCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Agency in Livermore, CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps Livermore local service businesses generate more leads with AI-powered SEO, Google Ads, reputation management, and marketing automation. Serving the Tri-Valley and beyond." />
        <meta
          name="description"
          content="GrowSmallBiz serves Livermore's dual-identity market — Labs workforce and Wine Country businesses. Local SEO, Google Ads, AI automation, reputation management. Get your free strategy session."
        />
        <link rel="canonical" href="https://growsmallbiz.io/locations/livermore-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Livermore"
        stateCode="CA"
        description="GrowSmallBiz serves Livermore's dual-identity market — Labs workforce and Wine Country businesses. Local SEO, Google Ads, AI automation, reputation management."
        url="/locations/livermore-ca/"
        latitude={37.6819}
        longitude={-121.7680}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Livermore, CA", url: "/locations/livermore-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={livermoreHero} alt="GrowSmallBiz digital marketing agency serving Livermore CA Labs workforce and wine country local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Livermore, CA — Local Service Business Marketing | Labs Economy + Wine Country + I-580 Corridor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Stop Losing Livermore Leads to Competitors —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Full-Service Digital Marketing Built for Local Service Businesses</span>
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              Livermore runs three distinct economies simultaneously — federal labs workforce, wine country hospitality, and I-580 commuter households. GrowSmallBiz builds integrated marketing systems for all three from our Danville base, 20 minutes away.
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

      {/* ===== WHAT MAKES GROWSMALLBIZ DIFFERENT ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Makes GrowSmallBiz Different — And Why It Matters for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Livermore Bottom Line</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Livermore's SERP landscape is led by well-resourced agencies running high-volume pages built from Bay Area templates — none of which acknowledge that Livermore is two distinct markets operating simultaneously, or that the LLNL and Sandia demographic has a fundamentally different buyer psychology than the suburban household profiles these pages were built for. Subrata Guha, GrowSmallBiz founder, brings 30+ years of Fortune 500 sales, marketing, and growth strategy experience — including deep familiarity with the research-oriented, credentialing-sensitive decision patterns of scientific and technical professional audiences.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Tri-Valley proximity:", body: "Based in Danville, 20 minutes from Livermore on I-580. We know the Labs corridor, the wine country seasonal demand cycle, and the commuter household demographic that makes Livermore's service market structurally unlike any other Tri-Valley city." },
              { label: "Dual-track strategy:", body: "The agencies currently ranking for Livermore keywords treat it as one market and miss two thirds of the available opportunity. We build simultaneous residential and commercial tracks — different keywords, different landing pages, different ad schedules, different retention systems — running from one integrated CRM. Both audience profiles captured without two separate agencies." },
              { label: "Labs market intelligence:", body: "LLNL and Sandia employees are research-oriented buyers who read reviews in depth, verify licensing, and value the Google Guaranteed badge because it answers their trust question before they call. Most agencies don't know this. We build campaigns specifically around this behavior." },
              { label: "AI-powered execution:", body: "AI Receptionist captures Labs homeowner inquiries after government work hours. AI QuadBots handle wine country emergency calls during summer harvest heat events. SMART nurture sequences manage both tracks. No lead lost regardless of when it arrives." },
              { label: "Conversion-first reporting:", body: "We do not report on traffic or impressions unless those metrics connect directly to leads and revenue. Every metric we track has a line drawn to your bottom line." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable. We earn your business every single month." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 border-l-4 border-l-primary">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">{item.label}</span> {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THREE ECONOMIES — MARKET SECTION ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Competitors Are Winning in Livermore Search Results.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's Exactly Why — and How to Take It Back.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Most agencies that rank for Livermore keywords built pages that treat it as another I-580 corridor suburb — comparable to Dublin or Pleasanton with a slightly different demographic mix. That framing fundamentally misreads the market. Livermore is not one market. It is three distinct economies operating simultaneously within the same ZIP codes, and understanding that structure is what separates effective local marketing from expensive, underperforming campaigns.</p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">The Labs Economy — LLNL and Sandia Workforce</h3>
              <p className="text-foreground/90 leading-relaxed">Lawrence Livermore National Laboratory and Sandia National Laboratories collectively employ thousands of scientists, engineers, and support staff who live across Livermore's residential neighborhoods — Springtown, South Livermore, and the Tri-Valley-facing communities along Isabel Avenue. This is a high-income, highly educated, government-benefit-covered professional demographic with specific buyer behavior. They research before they buy. They read multiple reviews, verify licensing and insurance, and respond strongly to the Google Guaranteed badge because credentialing signals matter in their professional culture. They work government hours, meaning service searches spike evenings and weekends. They can afford premium — high-efficiency HVAC systems, premium dental care, top-tier real estate agents — and they expect quality to match.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">The Wine Country Economy — Livermore Valley's 50+ Wineries</h3>
              <p className="text-foreground/90 leading-relaxed">Livermore Valley is one of the Bay Area's most active wine tourism corridors, with over 50 wineries spanning South Livermore and the Arroyo Road wine trail. This economy creates a distinct B2B commercial service demand that is fundamentally different from any residential service market. Wineries need barrel room climate control — precise temperature and humidity management where a system failure during Livermore's July heat events (regularly exceeding 100°F inland) can damage an entire vintage. A barrel room HVAC failure is not an inconvenience — it is a six-figure catastrophe requiring immediate response. Tasting rooms and event venues need reliable climate control for visitor comfort during peak summer harvest season. Restaurants along First Street and the wine trail need review management calibrated for TripAdvisor and wine tourism platforms. These are B2B relationships, not homeowner transactions — built on demonstrated reliability, commercial expertise, and emergency availability.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">The I-580 Commuter Economy — Professional Households</h3>
              <p className="text-foreground/90 leading-relaxed">Beyond the Labs and wine country, Livermore's growing commuter population — professionals using Livermore as an affordable Tri-Valley base and commuting to Pleasanton, Dublin, and the South Bay — creates standard suburban service demand for home services, dental care, restaurants, and real estate. This is the audience most agencies target when they build a Livermore page. It is real, but it is only one third of the opportunity.</p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-semibold italic text-foreground/90">"Livermore carries three distinct economies simultaneously — Labs workforce, Wine Country, and I-580 commuter households. Most agencies treat it as one market and build campaigns that capture one third of the available opportunity. GrowSmallBiz builds all three tracks."</p>
          </div>

          {/* Dual-Track HVAC Problem */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              The Dual-Track HVAC Problem —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">and How GrowSmallBiz Solves It</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-8">Consider a Livermore HVAC contractor. In Springtown, they serve LLNL employees who research providers carefully, value the Google Guaranteed badge, call in the evening when they get home from work, and can afford a $15,000 heat pump installation. In South Livermore's wine country corridor, they may be servicing barrel rooms for Wente Vineyards or McGrail Vineyards — commercial refrigeration work where failure during harvest season costs the client tens of thousands of dollars and where a 24/7 emergency response capability is the primary criterion for vendor selection.</p>
            <p className="text-foreground/80 leading-relaxed mb-8">These are two completely different businesses requiring two different marketing approaches — different keywords, different ad schedules, different landing pages, different trust signals, different retention systems. Most HVAC contractors run one generic campaign and capture only a fraction of the available market. GrowSmallBiz builds both tracks simultaneously from one integrated CRM.</p>

            {/* Dual Track Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60"></th>
                    <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Labs-Residential Track — 94550/94551 Homeowners</th>
                    <th className="p-3 text-left font-bold text-primary bg-card/80 border border-border/60">Wine Country-Commercial Track — Wineries & Venues</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { row: "Primary Buyer", labs: "LLNL/Sandia employees and Springtown/South Livermore homeowners — research-oriented, high-income, benefits-covered", wine: "Winery operators, tasting room managers, event venue owners — B2B relationship, not homeowner transaction" },
                    { row: "Search Behavior", labs: "Evening and weekend — government worker hours; desktop research before mobile call", wine: "Business hours + emergency after-hours during summer harvest season heat events" },
                    { row: "Purchase Driver", labs: "Quality, Google Guaranteed badge, licensing credentials, review depth — trust before price", wine: "Proven commercial experience, 24/7 emergency availability, harvest-season reliability — relationship before ranking" },
                    { row: "HVAC Service Type", labs: "Residential installs, smart thermostats, energy-efficient replacements, tune-ups", wine: "Barrel room climate control, tasting room HVAC, event venue cooling, commercial refrigeration" },
                    { row: "GrowSmallBiz Channel Mix", labs: "Google LSA (Guaranteed badge) + Local SEO + evening ad scheduling + reputation management", wine: "Google Ads (commercial terms) + targeted B2B social + pre-harvest maintenance campaign + AI emergency capture" },
                    { row: "AI Receptionist Value", labs: "After-hours inquiry capture from homeowners while crew is off — returns leads by 8am Monday", wine: "Emergency call capture during heat events — barrel room failure at 10pm Sunday cannot wait until Monday" },
                    { row: "Retention System", labs: "Annual tune-up reminders, SMART seasonal maintenance sequences, VIP Club", wine: "Pre-harvest commercial maintenance contracts, annual winery service agreements via automated nurture" },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{item.row}</td>
                      <td className="p-3 border border-border/60 text-foreground/80">{item.labs}</td>
                      <td className="p-3 border border-border/60 text-primary/90 italic">{item.wine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCAL SEARCH GAP ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4" /> SEARCH GAP
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Get Found First When Livermore Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO & Google Maps Domination</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search visit or contact a business within 24 hours. In Livermore, where LLNL employees search on evenings and weekends and wine country business owners search during business hours, map pack visibility needs to perform across different peak windows. Yet <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal research shows 56% of businesses have not fully optimized their Google Business Profile</a> — meaning a significant share of Livermore's service businesses are invisible at the highest-intent moment regardless of which audience track is searching.</p>

            <p className="text-foreground/90 leading-relaxed">Local SEO in Livermore requires two distinct keyword clusters running simultaneously. The residential track targets homeowner-intent searches: 'HVAC repair Livermore,' 'dentist 94550,' 'plumber Springtown CA.' The wine country commercial track targets B2B searches: 'commercial HVAC livermore,' 'winery climate control,' 'restaurant marketing Livermore Valley.' The current SERP leaders' pages contain neither winery nor wine country keyword targeting. That gap is the opportunity.</p>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATED MARKETING SYSTEM — SERVICES ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Integrated Marketing System Built for Livermore Service Businesses —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Fills Your Calendar, Not Just Your Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Every component is engineered to work with every other component — and for Livermore, that means running dual-track campaigns across both audience profiles simultaneously from one coordinated system. That integration is what makes the difference between marketing that costs money and marketing that makes money across Livermore's uniquely complex market.</p>
          </div>

          {/* Services Overview Table — Desktop */}
          <div className="hidden md:block overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Service</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">What We Do for You</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Livermore Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, dual-ZIP citation building (94550/94551), review velocity management, wine country directory citations, local link building", impact: "Rank in Google Maps 3-pack for Labs-adjacent residential AND wine country commercial searches — two distinct keyword clusters, one coordinated strategy" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Residential and commercial campaign tracks, labs-worker ad scheduling, wine country seasonal campaigns, conversion tracking", impact: "Immediate top-of-page visibility for both homeowner and B2B winery searches — separate ad groups, separate landing pages, unified reporting" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "For LLNL/Sandia homeowners who research before calling, the Google Guaranteed badge answers the trust question before they read a single review" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted campaigns for ZIP codes 94550 and 94551; winery Instagram and Facebook community integration; retargeting sequences", impact: "Reach Labs-corridor households on evenings and weekends; reach wine country audience through harvest-season campaigns and event promotion content" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, dual-audience landing pages (residential + commercial), click-to-call, online booking, trust architecture", impact: "Separate conversion paths for homeowners searching 'HVAC repair Livermore' and winery operators searching 'commercial refrigeration Livermore' — one site, two distinct conversion journeys" },
                  { service: "Reputation Management", whatWeDo: "Review velocity campaigns, Google/Yelp/TripAdvisor monitoring for wine tourism businesses, professional response guidance", impact: "In Livermore's research-oriented Labs demographic, review depth matters as much as star rating — analytical buyers read multiple reviews before calling" },
                  { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, harvest-season emergency protocols, CRM integration", impact: "Captures Labs-adjacent homeowner inquiries after government work hours AND wine country emergency HVAC calls during summer harvest heat events — no lead lost regardless of when it arrives" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{row.service}</td>
                    <td className="p-3 border border-border/60 text-foreground/80">{row.whatWeDo}</td>
                    <td className="p-3 border border-border/60 text-primary/90 italic">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Services Overview — Mobile Cards */}
          <div className="md:hidden space-y-3 mb-16">
            {[
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, dual-ZIP citation building (94550/94551), review velocity management, wine country directory citations, local link building", impact: "Rank in Google Maps 3-pack for Labs-adjacent residential AND wine country commercial searches — two distinct keyword clusters, one coordinated strategy" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Residential and commercial campaign tracks, labs-worker ad scheduling, wine country seasonal campaigns, conversion tracking", impact: "Immediate top-of-page visibility for both homeowner and B2B winery searches — separate ad groups, separate landing pages, unified reporting" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "For LLNL/Sandia homeowners who research before calling, the Google Guaranteed badge answers the trust question before they read a single review" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted campaigns for ZIP codes 94550 and 94551; winery Instagram and Facebook community integration; retargeting sequences", impact: "Reach Labs-corridor households on evenings and weekends; reach wine country audience through harvest-season campaigns and event promotion content" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, dual-audience landing pages (residential + commercial), click-to-call, online booking, trust architecture", impact: "Separate conversion paths for homeowners searching 'HVAC repair Livermore' and winery operators searching 'commercial refrigeration Livermore' — one site, two distinct conversion journeys" },
              { service: "Reputation Management", whatWeDo: "Review velocity campaigns, Google/Yelp/TripAdvisor monitoring for wine tourism businesses, professional response guidance", impact: "In Livermore's research-oriented Labs demographic, review depth matters as much as star rating — analytical buyers read multiple reviews before calling" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, harvest-season emergency protocols, CRM integration", impact: "Captures Labs-adjacent homeowner inquiries after government work hours AND wine country emergency HVAC calls during summer harvest heat events — no lead lost regardless of when it arrives" },
            ].map((row, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-4 border-l-4 border-l-primary">
                <p className="font-bold text-foreground mb-1">{row.service}</p>
                <p className="text-sm text-foreground/80 mb-2">{row.whatWeDo}</p>
                <p className="text-sm text-primary italic">{row.impact}</p>
              </div>
            ))}
          </div>

          {/* ===== 7 INDIVIDUAL SERVICE BLOCKS ===== */}

          {/* 1. Local SEO */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Get Found First When Livermore Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local SEO & Google Maps Domination</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Local SEO in Livermore requires two distinct keyword clusters running simultaneously. The residential track targets homeowner-intent searches: 'HVAC repair Livermore,' 'dentist 94550,' 'plumber Springtown CA.' The wine country commercial track targets B2B searches: 'commercial HVAC livermore,' 'winery climate control,' 'restaurant marketing Livermore Valley.' The current SERP leaders' pages contain neither winery nor wine country keyword targeting. That gap is the opportunity.</p>
            <p className="text-foreground/80 mb-4">Our local SEO approach for Livermore businesses includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Google Business Profile optimization calibrated for Livermore's dual-ZIP market — service area covering 94550 and 94551, with category selections that address both residential and commercial service verticals",
                "Residential keyword targeting: 'HVAC repair Springtown,' 'dentist Livermore 94550,' 'plumber South Livermore,' 'real estate agent 94551' — Labs-adjacent homeowner searches that drive evening and weekend call volume",
                "Wine country commercial keyword targeting: 'barrel room climate control Livermore,' 'commercial refrigeration Livermore Valley,' 'winery HVAC Arroyo Road,' 'restaurant marketing Livermore wine country' — B2B searches that current SERP leaders completely miss",
                "Wine country directory and tourism platform citations — Livermore Valley Winegrowers Association, wine tourism directories, TripAdvisor optimization for restaurant and tasting room businesses alongside standard Alameda County business citations",
                "Review velocity management calibrated for Livermore's research-oriented Labs demographic — consistent new review acquisition that builds the review depth analytical buyers require before calling",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Optimize Your Local SEO for Livermore — Schedule Strategy Call
            </a>
          </div>

          {/* 2. Google Ads / PPC */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need Leads This Week, Not This Quarter?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Google Ads That Deliver Livermore Customers on Day One.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Google Ads in Livermore require audience-aware campaign architecture. A residential campaign running 9am to 5pm misses the Labs-worker demographic who searches evenings and weekends. A commercial campaign targeting only homeowner keywords misses every wine country and B2B inquiry. The dual-track approach — separate ad groups with separate scheduling, separate landing pages, and separate conversion tracking — is what turns Livermore's budget into Livermore's leads.</p>
            <p className="text-foreground/80 mb-4">Our Google Ads approach for Livermore includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Labs-residential track: call-only campaigns for emergency home services, evening and weekend scheduling emphasis, Labs-adjacent neighborhood geo-targeting, premium system keyword focus for high-income homeowner searches",
                "Wine country commercial track: B2B keyword targeting for barrel room climate control, commercial refrigeration, tasting room HVAC, and winery event venue services — business hours scheduling with 24/7 emergency overlay during summer harvest season",
                "Location-targeted campaigns covering ZIP codes 94550 and 94551 with separate bid adjustments for residential and commercial areas",
                "Seasonal campaign alignment: harvest season commercial HVAC campaigns (July–October), spring wine tourism promotion for hospitality businesses, year-round residential emergency services",
                "Complete conversion tracking: every dollar of ad spend accountable to phone calls, form submissions, and booked appointments across both audience tracks — unified reporting from one CRM",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Google Ads for Your Livermore Business — Start Generating Leads This Week
            </a>
          </div>

          {/* 3. Google LSA */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Show Up Above Every Competitor With a Google Trust Badge —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">More Livermore Leads, Pre-Qualified Before They Call</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">For LLNL and Sandia employees searching for a licensed home service contractor, the Google Guaranteed badge answers their trust question before they read a single review. This demographic specifically responds to verifiable credentialing signals — it is embedded in their professional culture. For a Livermore HVAC contractor or plumber targeting the Labs-adjacent residential market, LSA placement above all standard search results combined with the Guaranteed badge is the single highest-ROI paid channel available.</p>
            <p className="text-foreground/80 mb-4">Our LSA management for Livermore includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Full LSA setup and verification — background checks, license documentation, insurance confirmation managed on your behalf for all applicable Livermore home service categories",
                "Budget optimization focused on maximizing verified lead volume within ZIP codes 94550 and 94551",
                "Labs-corridor residential emphasis for maximum ROI on the research-oriented buyer demographic",
                "Dispute management for invalid leads — protecting your investment in Livermore's competitive HVAC, plumbing, and electrical market",
                "Compliance maintenance to preserve Google Guaranteed status as verification requirements evolve",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Set Up Google LSA for Your Livermore Business — Get Verified Leads
            </a>
          </div>

          {/* 4. Social Media & Meta Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Reach Livermore Homeowners and Wine Country Audiences Before They Need You —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Social Media That Builds Both Tracks</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Livermore's two primary audiences use social media very differently. Labs-corridor homeowners respond to neighborhood-specific Facebook campaigns on evenings and weekends — before-and-after home service transformations, seasonal maintenance reminders, and local professional community content. Wine country businesses respond to Instagram-driven harvest season promotion, event venue showcasing, and wine tourism audience engagement. Both tracks can run simultaneously from one coordinated social media system.</p>
            <p className="text-foreground/80 mb-4">Our social media approach for Livermore includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Geo-targeted residential campaigns covering ZIP codes 94550 and 94551 with demographic filters calibrated to the Labs-adjacent professional household profile — evening and weekend delivery emphasis aligned with government worker schedules",
                "Wine country Instagram and Facebook campaigns: harvest season promotion, winery event announcements, tasting room content, wine tourism audience targeting — reaching visitors searching Livermore Valley wine country before they arrive",
                "Restaurant and hospitality promotion campaigns for First Street Downtown Livermore and Arroyo Road wine trail establishments — event-driven campaigns timed to wine country seasonal demand peaks",
                "Retargeting sequences re-engaging website visitors who did not convert — particularly valuable for wine country businesses with longer decision cycles and for Labs-adjacent homeowners doing multi-provider research",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Social Media Advertising for Your Livermore Business — Get Started
            </a>
          </div>

          {/* 5. Reputation Management */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              A 3-Star Rating Is Silently Killing Your Livermore Business.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Here's How We Fix It in 90 Days.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">The LLNL and Sandia demographic is Livermore's most valuable residential audience — and its most demanding. These are analytical professionals who read multiple reviews before calling, not just the star average. A business with 50 reviews averaging 4.8 stars consistently outperforms one with 200 reviews averaging 4.6 when the 50-review business has more recent, more detailed reviews. Review depth and recency both matter in this market — and most reputation management systems optimize for volume, not quality.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz's reputation management system for Livermore includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Automated review request campaigns timed to the moment of highest satisfaction — immediately after a completed HVAC service call, dental appointment, or dining experience — calibrated for Livermore's busy Labs professional demographic who respond best to frictionless, timely requests",
                "Multi-platform monitoring: Google, Yelp, TripAdvisor, Houzz, Healthgrades, and wine tourism platforms — ensuring no review goes unnoticed across every platform Livermore's dual audiences use",
                "HIPAA-compliant reputation management for dental practices and wellness professionals serving the Labs community, where patient privacy standards align with the professional community's data sensitivity expectations",
                "Wine country reputation strategy for wineries, tasting rooms, and event venues — TripAdvisor optimization, harvest season review campaigns, and professional response guidance for tourism-facing hospitality businesses",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic mb-6"><a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 survey found that 88% of consumers would use a business that responds to all of its reviews</a>, compared to 47% for businesses that do not respond at all. For wine country businesses, TripAdvisor and wine tourism platforms carry equal or greater weight than Google in driving hospitality bookings.</p>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Build a 4.5+ Star Reputation in Livermore — Start Your Review Campaign
            </a>
          </div>

          {/* 6. Website Design */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Your Website Should Be Your Best Salesperson.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">If It's Not Converting Both Livermore Audiences, It's Leaving Money Behind.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">A Livermore service business website needs to serve two fundamentally different buyer profiles from the same domain. A Labs-corridor homeowner landing on your HVAC page at 7pm is looking for licensing credentials, Google Guaranteed verification, and review depth before calling. A winery operator landing on the same page during business hours wants to know if you have commercial refrigeration experience and whether you can respond to an emergency during harvest season. A generic website serves neither audience well. Separate landing pages built for each track convert both.</p>
            <p className="text-foreground/80 mb-4">Our website design approach for Livermore includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Mobile-first, fast-loading design — Labs employees search on mobile during evenings; wine country visitors search on mobile during tasting room tours and weekend visits",
                "Dual conversion paths: residential landing pages optimized for homeowner intent searches and commercial landing pages optimized for B2B winery and hospitality service searches — distinct CTAs, distinct trust signals, distinct content for each audience",
                "Wine country trust architecture: commercial service credentials, winery client references, barrel room and commercial refrigeration portfolio, harvest season availability statements that directly address the wine country buyer's primary concerns",
                "Labs-adjacent residential trust architecture: licensing credentials, Google Guaranteed badge display, review widgets with review depth visible, service area maps covering Springtown, South Livermore, and surrounding neighborhoods",
                "Online booking integrations for appointment-driven businesses — dental practices, wellness providers, and restaurant reservations for Livermore's professional demographic who expect scheduling convenience",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Get a Conversion-Focused Website Built for Livermore — See Our Work
            </a>
          </div>

          {/* 7. AI Receptionist & Lead Automation */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Every Missed Call Is a Lost Livermore Job —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Our AI Receptionist Captures Both Tracks — Labs Homeowners After Hours and Wine Country Emergencies at Harvest.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Research from <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT and InsideSales.com confirms that leads contacted within 5 minutes are 21 times more likely to convert</a> than those reached after 30 minutes. In Livermore, this stat applies differently across the two audience tracks. For Labs-adjacent homeowners, after-hours response capability captures inquiries that arrive during government work hours when your team is unavailable. For wine country commercial clients, emergency response during summer heat events — when a barrel room HVAC failure at 10pm on a Sunday during harvest threatens an entire vintage — is the capability that wins long-term commercial relationships.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz's AI-powered automation for Livermore includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "AI Receptionist: answers missed calls 24/7 across both audience tracks — captures LLNL employee home service inquiries at 8pm and wine country emergency calls at midnight during July heat events with equal capability",
                "AI QuadBots: conversational AI managing web chat, voice interactions, and lead qualification simultaneously — residential inquiries route to the residential CRM pipeline; commercial inquiries route to the commercial pipeline; both handled intelligently with no manual intervention",
                "SMART nurture sequences: automated CRM workflows built for both tracks — appointment reminders and seasonal tune-up campaigns for residential clients; pre-harvest commercial maintenance outreach and annual contract renewal sequences for wine country commercial clients",
                "VIP Club and reactivation campaigns: for restaurants, dental practices, and repeat-visit wine country businesses, structured loyalty systems that increase visit frequency and bring dormant clients back — built as infrastructure, not a one-time campaign",
                "CRM integration and lead tracking: every inquiry from every channel, across both audience tracks, captured and tracked from first contact to closed job in a single unified dashboard",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic">Retention is the fastest path to revenue growth for established Livermore service businesses. In the wine country commercial track, a single retained winery service contract is worth years of recurring revenue. In the Labs residential track, a loyal LLNL employee household refers neighbors within a community that shares service provider recommendations through tight professional networks. Both tracks compound over time — and our retention infrastructure is built to accelerate that compounding.</p>
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE — 4 VERTICALS ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> WHO WE SERVE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for Your Industry, Not Adapted From Someone Else's Playbook —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">See If We're the Right Fit for Livermore</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz works exclusively with local service businesses in Livermore and the Tri-Valley. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — with genuine understanding of Livermore's dual-identity market structure that generic agency pages never develop.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Capture Both Livermore Tracks Year-Round</h3>
              <p className="text-muted-foreground leading-relaxed">A Livermore home service contractor operates in two markets simultaneously. The residential track — Springtown, South Livermore, Isabel Avenue neighborhoods — serves Labs-adjacent homeowners who research providers carefully, value licensing credentials and the Google Guaranteed badge, and can afford premium system installations and upgrades. The commercial track — Livermore Valley wineries, tasting rooms, event venues, and First Street commercial properties — serves B2B clients where barrel room climate control, commercial refrigeration, and harvest-season emergency availability are the primary service requirements. We build both tracks simultaneously from one integrated marketing system, so your Monday morning pipeline includes both a winery pre-harvest maintenance inquiry and three residential quote requests from Springtown homeowners — all captured while you were off the clock.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness Professionals: Attract Livermore's Analytical, High-Value Patients Who Stay</h3>
              <p className="text-muted-foreground leading-relaxed">The Labs demographic is Livermore's most valuable patient population for dental care, wellness services, and specialty health practices. These are high-income, highly educated professionals with comprehensive benefits coverage — meaning they can access premium care and do. They also research their healthcare providers more thoroughly than almost any other demographic: reviewing credentials, reading patient reviews in depth, and evaluating online presence quality before making first contact. The competitive challenge for independent Livermore practices is the presence of larger East Bay and Pleasanton-area practices with stronger digital footprints. We build the complete digital presence — optimized Google Business Profile, review depth campaigns, HIPAA-compliant reputation management, and AI booking follow-up — that positions independent Livermore practices to compete on professional credibility and personalized care.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality: Own Livermore's Wine Country Dining Scene and Fill More Tables Year-Round</h3>
              <p className="text-muted-foreground leading-relaxed">Livermore's restaurant and hospitality market operates on two calendars simultaneously. The First Street Downtown corridor serves the year-round local professional and family dining market — Labs employees, commuter households, local families. The wine country corridor serves a tourism-driven seasonal market: summer harvest visitors, weekend wine trail travelers, corporate event groups, and the growing wine tourism audience discovering Livermore Valley as a Bay Area wine destination. Success in this market requires a Google Maps presence optimized for both local dining searches and wine country tourism searches — plus the retention infrastructure (VIP Club, reactivation campaigns, review velocity systems) that fills tables on Tuesday evenings, not just during harvest festival weekends.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers: Own the Tri-Valley Market, Multiply Your Listing Inquiries, Build a Referral Engine</h3>
              <p className="text-muted-foreground leading-relaxed">Livermore's real estate market offers an increasingly attractive value proposition compared to Pleasanton and San Ramon — comparable Tri-Valley quality of life at a more accessible price point, with strong appreciation driven by LLNL-area employment stability and growing wine country desirability. Agents competing here face both dominant online platforms and well-resourced regional brokerages. We build the local SEO, targeted paid campaigns for both the Labs-adjacent residential buyer profile and the wine country lifestyle buyer profile, and the personal branding systems that establish lasting Livermore market authority — generating qualified listing inquiries from the full spectrum of buyer profiles the city attracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS / CASE STUDIES ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" /> RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Real Client Results Across Our Service Areas
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">See what's possible when marketing runs as a complete, integrated system.</p>
          </div>

          <CampaignResultsCards cards={livermoreCards} />

          {/* Channel Compare */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">Single-Channel Marketing Doesn't Win in Livermore. Here's What Actually Moves Both Tracks.</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">The current SERP leader for Livermore dominates with a 95 content score — but targets only one audience profile. Outperforming it requires not just more content but an integrated dual-track system that captures Livermore's full market opportunity simultaneously.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left font-bold text-foreground bg-primary/20 border border-border/60">Channel</th>
                  <th className="p-3 text-left font-bold text-foreground bg-primary/20 border border-border/60">Best For</th>
                  <th className="p-3 text-left font-bold text-foreground bg-primary/20 border border-border/60">Time to Results</th>
                  <th className="p-3 text-left font-bold text-foreground bg-primary/20 border border-border/60">Long-Term Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { channel: "Local SEO", best: "Map pack rankings + wine country directory visibility", time: "3–6 months full impact", value: "High — Labs-demographic buyers research before calling; strong rankings build compounding trust" },
                  { channel: "Google Ads / PPC", best: "Dual-track: residential evenings + commercial business hours", time: "Day 1", value: "Medium — requires ongoing investment; essential for both audience tracks" },
                  { channel: "Google LSA", best: "LLNL/Sandia homeowners — trust badge answers pre-call research question", time: "2–4 weeks", value: "High — highest ROI for residential home service trades in a research-oriented demographic" },
                  { channel: "Meta / Social Ads", best: "Labs-corridor homeowners + wine country event promotion", time: "1–2 weeks", value: "Medium — strong for seasonal wine country campaigns and Labs-adjacent brand building" },
                  { channel: "Reputation Mgmt", best: "Review depth for analytical Labs buyers + TripAdvisor for wine tourism", time: "30–90 days", value: "High — LLNL/Sandia demographic reads multiple reviews before converting" },
                  { channel: "AI & Automation", best: "After-hours Labs homeowner capture + emergency harvest-season response", time: "Immediate", value: "High — multiplies both tracks simultaneously without adding headcount" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-card/30"}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground">{row.channel}</td>
                    <td className="p-3 border border-border/60 text-foreground/80">{row.best}</td>
                    <td className="p-3 border border-border/60 text-foreground/80">{row.time}</td>
                    <td className="p-3 border border-border/60 text-primary italic">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATORS — 4 CARDS ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> WHY WE WIN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Livermore Business Before.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Livermore's SERPs are led by agencies that treat Livermore as one market and miss two thirds of the available opportunity. Here is why the system GrowSmallBiz builds consistently outperforms them across both of Livermore's distinct audience tracks:</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { title: "Tri-Valley Proximity", description: "GrowSmallBiz is based in Danville — 20 minutes from Livermore on I-580. We know the Tri-Valley, the difference between Labs-corridor residential demand and wine country commercial demand, and what Livermore business owners face daily. Not a national agency or a generic Bay Area shop." },
              { title: "Dual-Track Strategy", description: "The agencies currently ranking for Livermore keywords treat it as one market and miss two thirds of the available opportunity. We build simultaneous residential and commercial tracks — different keywords, different landing pages, different ad schedules, different retention systems — running from one integrated CRM so you capture both audience profiles without managing two separate agencies." },
              { title: "Labs Market Intelligence", description: "The LLNL and Sandia demographic is unlike any other Tri-Valley buyer profile. These are analytical, research-oriented professionals who read reviews in depth, verify licensing, and value the Google Guaranteed badge specifically because it pre-answers their trust question. Most agencies don't know this. We build campaigns around it." },
              { title: "AI-Powered Execution", description: "AI Receptionist captures Labs-adjacent homeowner inquiries after government work hours. AI QuadBots handle wine country emergency inquiries during summer heat events. SMART nurture sequences manage both tracks simultaneously. VIP Club and harvest-season retention campaigns keep commercial wine country clients engaged year-round." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md">
                <div className="bg-primary py-4 px-4 text-center">
                  <p className="font-bold text-primary-foreground">{item.title}</p>
                </div>
                <div className="bg-card/50 border border-border/60 border-t-0 p-4 min-h-[140px]">
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl space-y-4">
            <p className="text-foreground/80 leading-relaxed">Jives Media's Livermore page (/digital-marketing-agency-in-livermore-ca/) was built from the same template as their Pleasanton page (/digital-marketing-agency-in-pleasanton-ca/) — different URL slug, identical 3,367-word structure, a content score of 95 earned on Pleasanton's market, not Livermore's. A Livermore business owner reading their page will find no mention of Lawrence Livermore National Laboratory, no wine country content, no barrel room climate control, no harvest season demand — because those specifics require genuine local knowledge that template agencies do not develop.</p>
            <p className="text-foreground/80 leading-relaxed">Boomcycle covers Livermore generically with the same 2,297-word page used across multiple Tri-Valley cities. Breakline ranks for the SEO keyword but has no dual-identity market framing. None of them have a dual-track strategy. GrowSmallBiz builds your Livermore strategy from the actual competitive landscape of the Labs corridor and the wine country commercial market — because that specificity is what converts Livermore's two distinct audiences into clients.</p>
          </div>
        </div>
      </section>

      {/* ===== MID-PAGE PERSON CTA ===== */}
      <PersonCTA
        title="Let's Build Your Growth Engine"
        description="If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
        sectionClassName="py-16"
      />

      {/* ===== FAQ SECTION ===== */}
      <FAQSection
        title={<>Your Questions Answered — No Jargon, No Sales Pitch, Just Straight Answers About <span className="text-transparent bg-clip-text bg-gradient-primary italic">Digital Marketing in Livermore</span></>}
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Livermore?", answer: "We work exclusively with local service businesses in Livermore and the Tri-Valley — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, restaurants, wineries, event venues, and real estate professionals. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for businesses that serve local Livermore and Tri-Valley clients directly — across both the residential Labs-corridor market and the commercial wine country market." },
          { question: "How does GrowSmallBiz approach Livermore's dual-identity market differently from other agencies?", answer: "Most agencies build one campaign for one audience profile. In Livermore, that means capturing only the I-580 commuter residential market and missing both the LLNL/Sandia professional demographic and the wine country commercial market. GrowSmallBiz builds simultaneous dual-track campaigns — separate keyword clusters, separate landing pages, separate ad schedules, and separate retention systems for each audience profile — all running from one integrated CRM with unified reporting. You capture the Labs-adjacent homeowner who searches on a Wednesday evening and the winery operator who needs commercial HVAC support during harvest season, without managing two separate agencies." },
          { question: "How long does SEO take in Livermore?", answer: "Google Business Profile optimizations show measurable movement — increased views, calls, and direction requests — within 30 to 60 days. Organic rankings shift within 60 to 90 days for less competitive terms and 3 to 6 months for primary category keywords. The current SERP leaders built domain authority over years — but their pages contain no wine country commercial content, no Labs-demographic specific framing, and no dual-track keyword architecture. A properly structured integrated system targeting both audience clusters will outperform their single-track approach within 6 to 12 months for the keyword clusters they are currently missing entirely." },
          { question: "Why does the LLNL and Sandia employee demographic respond differently to marketing?", answer: "Scientific and technical professionals are research-oriented buyers by training and professional habit. Before calling an HVAC contractor, dentist, or any service provider, they typically check Google ratings, read multiple reviews (not just the star average), verify licensing and insurance status, and look for credentialing signals. The Google Guaranteed badge carries particular weight with this demographic because it pre-answers their trust verification question before they even read reviews. Marketing to this audience requires review depth — not just volume — and clear credentialing display that signals the same rigor they apply professionally. Generic ads and thin review profiles underperform with LLNL and Sandia households in ways that are not visible in aggregate Livermore market data." },
          { question: "How does digital marketing work differently for a winery or wine country business?", answer: "Wine country businesses require a fundamentally different marketing approach from standard residential service businesses. The primary buyer is often a B2B client — winery operator, tasting room manager, event venue coordinator — not a homeowner. Discovery happens through wine tourism platforms, Instagram, TripAdvisor, and wine country directories alongside Google Maps. Seasonal demand patterns follow the harvest calendar: peak demand runs July through October, creating specific marketing windows for harvest-season campaigns, pre-harvest commercial service promotions, and tourism audience targeting. Review management needs to cover TripAdvisor and wine tourism platforms in addition to Google. And emergency response availability — particularly for commercial refrigeration and HVAC failures during summer heat events — is the primary trust signal for B2B wine country clients rather than the residential factors that drive homeowner decisions." },
          { question: "Can GrowSmallBiz help with both residential and commercial clients for the same Livermore business?", answer: "Yes — and for Livermore businesses with both residential and commercial client bases, running dual-track campaigns from one integrated system is specifically more efficient than managing separate marketing approaches. Separate keyword clusters, separate landing pages, and separate ad schedules run simultaneously from one CRM with one reporting dashboard. You see which channels are generating residential leads and which are generating wine country commercial inquiries — all attributed accurately without fragmented reporting across multiple agencies. The AI Receptionist handles both tracks simultaneously: capturing Labs homeowner calls after government work hours and wine country emergency calls during harvest season heat events without distinguishing between them." },
          { question: "How does AI automation specifically benefit Livermore service businesses?", answer: "AI automation closes the two most costly lead loss scenarios in Livermore's dual-identity market. For the Labs-adjacent residential track: LLNL and Sandia employees search for services after work hours — evenings and weekends — when many service businesses are closed. The AI Receptionist captures those inquiries instantly, responds intelligently, and schedules follow-up for the next business day, ensuring no evening inquiry is lost to a competitor who also was not answering. For the wine country commercial track: a barrel room HVAC failure during Livermore's July or August heat events — when outdoor temperatures exceed 100°F — is an emergency that cannot wait until Monday morning. The AI Receptionist answers that 10pm call, captures the situation, and triggers an emergency alert to the on-call technician, winning the job and the long-term commercial relationship." },
          { question: "What common mistakes are Livermore businesses making with digital marketing right now?", answer: "Based on our Tri-Valley market audits, the most common and costly mistakes are: treating Livermore as a single-audience market and missing either the Labs demographic or the wine country commercial opportunity entirely; using generic Bay Area campaign targeting that wastes budget on non-Livermore audiences; scheduling ads for business hours only and missing the Labs employee evening and weekend search window; not building review depth for the analytical LLNL and Sandia buyer demographic who reads multiple reviews before deciding; and ignoring wine country-specific platforms — TripAdvisor, wine tourism directories — that drive significant hospitality discovery for Livermore Valley businesses. A free strategy session is the fastest way to identify which of these apply to your specific situation." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about marketing in Livermore?",
          description: "We're here to help. Reach out to us for a personalized consultation.",
          tagline: "Let's grow your Livermore business together.",
        }}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
              Every Day You Wait, Your Competitors Book Another Livermore Customer That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Should Have Been Yours.</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Livermore's dual-identity market is underserved. The agencies currently ranking for Livermore keywords target only one third of the available market opportunity. The Labs-adjacent professional demographic and the wine country commercial market are both underserved by current SERP leaders — and both are available to the business that builds a properly structured dual-track local presence first.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">GrowSmallBiz gives Livermore service businesses the integrated marketing system that captures both audience tracks: one connected platform spanning awareness to retention, powered by AI, and managed by a team based 20 minutes away in Danville. Subrata Guha, our founder, brings 30+ years of Fortune 500 sales, marketing, and growth strategy experience — including deep familiarity with the research-oriented decision patterns of technical and scientific professional audiences — to the specific challenges of Livermore's uniquely complex local service market.</p>
            <p className="text-foreground/70 font-semibold mt-6">No long-term contracts. No templates. No excuses. Just one integrated dual-track system built specifically for your Livermore business.</p>
          </div>
        </div>
      </section>

      {/* ===== PRE-FORM PERSON CTA ===== */}
      <PersonCTA
        title="Schedule Strategy Call"
        description="Receive a personalized strategy session — dual-track competitive audit, Labs demographic analysis, wine country market assessment, and a clear growth roadmap built specifically for your Livermore service business."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
        sectionClassName="py-16"
      />

      {/* ===== CONSULTATION FORM ===== */}
      <ConsultationFormSection utmCampaign="livermore-consultation" utmMedium="livermore-ca" />

      {/* ===== CROSS-LINK PILLS ===== */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Martinez", to: "/locations/martinez-ca/" },
              { label: "Concord", to: "/locations/concord-ca/" },
              { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
              { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
              { label: "Danville", to: "/locations/danville-ca/" },
              { label: "San Ramon", to: "/locations/san-ramon-ca/" },
              { label: "Dublin", to: "/locations/dublin-ca/" },
              { label: "Pleasanton", to: "/locations/pleasanton-ca/" },
              { label: "Tracy", to: "/locations/tracy-ca/" },
            ].map((city) => (
              <Link
                key={city.to}
                to={city.to}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5" />
                {city.label}
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

export default LivermoreCA;
