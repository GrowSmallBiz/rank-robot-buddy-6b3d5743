import { Header } from "@/components/layout/Header";
import concordHero from "@/assets/concord-hero.webp";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Zap, Globe, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, Brain, TrendingUp, MessageSquare } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { concordCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";
import { ChamberTrustBar } from "@/components/locations/ChamberTrustBar";

const ConcordCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Services in Concord, CA | GrowSmallBiz</title>
        <meta name="description" content="Concord, CA digital marketing services by GrowSmallBiz: Grow your business with AI SEO, AI optimized paid ads, and AI marketing automation." />
        <meta name="keywords" content="digital marketing Concord, local SEO Concord, reputation management Concord, paid advertising Concord, AI marketing agency, small business marketing, digital marketing services, lead generation Concord" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/concord-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Concord"
        stateCode="CA"
        description="GrowSmallBiz helps Concord, CA local service businesses grow with website design, local SEO, paid ads, marketing automation, and AI-assisted lead conversion systems."
        url="/locations/concord-ca/"
        latitude={37.9780}
        longitude={-122.0311}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Concord, CA", url: "/locations/concord-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={concordHero} alt="Aerial view of downtown Concord, CA, featuring shops, trees, and Mount Diablo in the background, highlighting the local business environment and community spaces." width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Concord, CA — Local Service Business Marketing | GrowSmallBiz</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent">
              Concord Digital Marketing for Small Service Businesses
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              Concord is one of the largest cities in Contra Costa County — and that creates a different kind of pressure. More households, more commercial activity, and more surrounding-city competition all raise the bar. A business can be doing solid work and still lose opportunities because it is not visible enough, clear enough, or responsive enough online.
            </p>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-4" style={{ animationDelay: "0.15s" }}>
              GrowSmallBiz is a digital marketing agency serving Concord and the wider Contra Costa / East Bay area with one connected system built exclusively for local service businesses — contractors, dentists, med spas, restaurants, and real estate professionals.
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
          </div>
        </div>
      </section>

      <ChamberTrustBar />

      {/* ===== WHAT MAKES GROWSMALLBIZ DIFFERENT ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              GrowSmallBiz's Digital Marketing Edge in Concord — Boost Your Revenue
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">In a city this large, good-enough marketing often underperforms. Here is what sets GrowSmallBiz apart from every general-purpose agency competing for your attention:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Connected system, not scattered vendors:", body: "Every channel — SEO, Ads, Reputation, AI — feeds one coordinated goal: your revenue growth. No more patching together five different tools from five different providers." },
              { label: "Exclusive vertical focus:", body: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros — not one of dozens of industries on a rotating client roster." },
              { label: "Proven local results:", body: "Dental practices see +175% conversion growth; med spas gain +552% users year over year; HVAC clients rank in the Google local 3-pack. See our case studies below." },
              { label: "AI-powered response speed:", body: "Our AI Receptionist follows up with missed leads within minutes — because in Concord's competitive market, the first business to respond wins the client." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to results. We earn your business every single month." },
              { label: "Built for larger local markets:", body: "Concord is big enough that weak marketing gets exposed faster. Stronger systems matter more here, and that is exactly what we build." },
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

      {/* ===== WHY CONCORD IS A MARKET WORTH WINNING ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Why Concord Is a Market Worth Winning — and Why It Creates a Different Kind of Marketing Challenge
            </h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {[
              { title: "Largest city in Contra Costa County", body: "The City of Concord describes itself as the largest city in Contra Costa County. That population base creates steady demand for home services, healthcare, dining, and professional services — but it also means more competition for every buyer's attention." },
              { title: "Broad competitive overlap", body: "Concord buyers compare businesses from Concord, Walnut Creek, Pleasant Hill, Martinez, Pittsburg, Brentwood, Antioch, and beyond. Your business is not only competing against the company closest to the searcher — it is competing against the business that looks most credible and easiest to choose." },
              { title: "Todos Santos Plaza and the downtown core", body: "Todos Santos Plaza remains one of Concord's most visible community anchors and a hub for dining, events, and local commerce. Restaurants and retail businesses near downtown compete intensely for foot traffic and digital attention." },
              { title: "Strong residential base across diverse neighborhoods", body: "From established neighborhoods to newer developments, Concord's residential diversity creates demand across HVAC, plumbing, roofing, landscaping, dental, and wellness categories — with different expectations in different parts of the city." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-display font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/90 leading-relaxed">{item.body}</p>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              The Local Search Gap Costing Most Concord Service Businesses 10–15 Leads Every Month
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">According to BrightLocal's Local Consumer Review Survey, <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">81% of consumers use Google to evaluate local businesses</a> — and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">80% of US consumers search for local businesses on a weekly basis</a>. Yet BrightLocal research shows that <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% of businesses still haven't fully optimized their Google Business Profile</a>. In a large, competitive market like Concord, that optimization gap translates directly to measurable monthly revenue loss.</p>

            <p className="text-foreground/90 leading-relaxed">Generic marketing agencies fail Concord service businesses because they cannot differentiate between competing in a larger East Bay market and serving a smaller suburban corridor. Concord's competitive dynamics — broader search radius, more competitor overlap, diverse neighborhood expectations — require a focused, coordinated approach rather than templates copied from different markets.</p>
          </div>

          {/* Pull Quote */}
          <div className="mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold italic text-foreground/90">"81% of consumers use Google to evaluate local businesses — but 56% of businesses haven't fully optimized their Google Business Profile. In Concord's competitive market, that gap represents thousands in lost monthly revenue."</p>
            <p className="text-sm text-muted-foreground mt-2">— BrightLocal, 2024</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              The Integrated Marketing System Built for Concord Service Businesses — Fills Your Calendar, Not Just Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Our services are not sold as isolated tactics. They are delivered as an integrated system, designed so that each channel amplifies the others. Here is what is included and what it means for your Concord business:</p>
          </div>

          {/* Services Overview Table — Desktop */}
          <div className="hidden md:block overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Service</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">What We Do for You</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Concord Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching across Concord, Pleasant Hill, Martinez, and surrounding cities" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Concord ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
                  { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
                  { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, appointment scheduling automation, lead routing, CRM integration", impact: "Never lose a lead to a competitor who answers faster; capture and nurture every inquiry automatically" },
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
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching across Concord, Pleasant Hill, Martinez, and surrounding cities" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Concord ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
              { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, appointment scheduling automation, lead routing, CRM integration", impact: "Never lose a lead to a competitor who answers faster; capture and nurture every inquiry automatically" },
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
              Get Found First When Concord Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local SEO & Google Maps Domination</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Local SEO is the highest long-term return on investment available to any Concord service business. According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Concord's large, competitive market, those leads go to the business that is most visible and most credible — not the one that is simply closest.</p>
            <p className="text-foreground/80 mb-4">Our local SEO approach for Concord businesses includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Complete Google Business Profile (GBP) audit, optimization, and ongoing management — accurate NAP consistency across all citations, with neighborhood-level targeting across Concord's diverse service areas",
                "Category and service area selection calibrated for Concord ZIP codes and adjacent communities including Pleasant Hill, Martinez, Pittsburg, Walnut Creek, and the wider East Bay corridor",
                "Geo-targeted landing pages built for how Concord clients actually search — 'HVAC repair Concord CA,' 'dentist near Todos Santos Plaza,' 'roofer Concord CA,' and neighborhood-specific service terms",
                "Local citation building across authoritative directories to strengthen domain authority and local ranking signals",
                "Structured review generation and management campaigns calibrated for Concord's competitive environment — where strong ratings directly influence which business gets the inquiry",
                "Monthly performance reporting: rankings, impressions, calls, direction requests, and website clicks — with clear attribution so you always know what your investment is producing",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Optimize Your Local SEO for Concord — Schedule Strategy Call
            </a>
          </div>

          {/* 2. Google Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need Leads This Week, Not This Quarter?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Google Ads That Deliver Concord Customers on Day One</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Organic rankings take months to build. For Concord service businesses that need to fill their calendars now — not next quarter — a well-managed Google Ads campaign is the fastest path to qualified inbound calls and booked appointments. In a market with broad competitor overlap from Pleasant Hill to Pittsburg, precise geo-targeting and strong landing pages are what separate profitable campaigns from wasted spend.</p>
            <p className="text-foreground/80 mb-4">Our Concord Google Ads management includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Call-only campaigns built for home service contractors — critical for emergency HVAC repairs, plumbing calls, and urgent electrical service requests where immediate phone contact determines who gets the job",
                "Location-targeted campaigns covering Concord ZIP codes and adjacent service areas — ensuring your budget is not wasted on out-of-area traffic from Antioch, Brentwood, or further East Bay cities",
                "Seasonal keyword campaigns aligned to Concord's demand cycles — 'AC repair Concord' in summer, 'furnace repair Concord CA' in fall, 'emergency plumber Concord' year-round",
                "Comprehensive conversion tracking for phone calls, form submissions, and online bookings — every dollar of ad spend accountable to a measurable business outcome",
                "Continuous campaign optimization through bid strategy refinement, ad copy testing, negative keyword management, and landing page conversion improvements",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Google Ads for Your Concord Business — Start Generating Leads This Week
            </a>
          </div>

          {/* 3. Google LSA */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Show Up Above Every Competitor With a Google Trust Badge —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">More Concord Leads, Pre-Qualified Before They Call</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Google Local Service Ads with the Google Guaranteed badge appear above all standard search results with a government-verified trust credential. In Concord's competitive contractor market, that trust signal can be the deciding factor for homeowners choosing between multiple service providers across a wider geographic footprint.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz manages the entire LSA process for Concord contractors:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Background check coordination and professional license verification for all applicable trade categories",
                "Budget optimization focused on maximizing verified, high-intent lead volume — not raw click count",
                "Dispute management for invalid leads to protect your advertising investment",
                "Compliance maintenance with Google's ongoing requirements to preserve your Google Guaranteed status and badge visibility",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Set Up Google LSA for Your Concord Business — Get Verified Leads
            </a>
          </div>

          {/* 4. Social Media & Meta Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Reach Concord Homeowners Before They Need You —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">And Be the First Call When They Do</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Facebook and Instagram give Concord service businesses a direct channel to reach their target audience — homeowners across diverse neighborhoods, families near the BART corridor, professionals commuting along the 680/242 interchange, and diners exploring Todos Santos Plaza and the Veranda shopping center.</p>
            <p className="text-foreground/80 mb-4">Our Concord social media marketing approach includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Geo-targeted Facebook and Instagram campaigns covering Concord ZIP codes — ensuring your budget reaches the right demographic, not the broader Bay Area market",
                "Before-and-after visual campaigns for roofers, HVAC companies, and home improvement contractors showcasing work done in Concord neighborhoods",
                "Restaurant and retail promotion campaigns for businesses near Todos Santos Plaza and the Veranda — weekend dining features, event announcements, and seasonal promotions that drive foot traffic",
                "Patient transformation stories and testimonial campaigns for dentists, med spa owners, and wellness professionals that build credibility in Concord's health-conscious market",
                "Retargeting sequences that re-engage website visitors who did not convert on their first visit — keeping your business top of mind through the decision cycle",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Social Media Advertising for Your Concord Business — Get Started
            </a>
          </div>

          {/* 5. Reputation Management */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              A Weak Rating Is Silently Killing Your Concord Business.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Here's How We Fix It in 90 Days.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">In Concord's competitive market, your online reputation is often the deciding factor. When buyers compare across multiple cities and multiple providers, the business with stronger reviews and a faster, more professional response pattern has the edge. A 3.6-star rating in a market where competitors are at 4.7 stars is not just a credibility gap — it is an active revenue drain.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz's reputation management system is built to systematically improve your rating:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Automated review request campaigns sent to satisfied clients immediately after service completion — capturing authentic feedback while the experience is fresh",
                "Multi-platform monitoring across Google, Yelp, Healthgrades, and other relevant platforms — ensuring no review goes unnoticed",
                "Professional response guidance for negative reviews — because how you respond often matters more to prospective clients than the negative review itself",
                "Healthcare-compliant reputation strategies for dentists, med spas, and wellness professionals — protecting HIPAA compliance while building a trustworthy review profile",
                "Reputation reporting showing your rating trajectory, review velocity, and competitive position relative to other Concord service providers",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic mb-6"><a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 Local Consumer Review Survey</a> found that 88% of consumers say they would use a business that responds to all of its reviews — compared to just 47% who would consider a business that does not respond at all.</p>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Build a 4.5+ Star Reputation in Concord — Start Your Review Campaign
            </a>
          </div>

          {/* 6. Website Design */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Your Website Should Be Your Best Salesperson —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">If It's Not Generating Concord Leads Daily, It's Costing You Money</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">A website should do more than explain what a business does. It should make the business feel trustworthy, clear, and easy to contact. In Concord's larger market — where buyers compare across more options — the business with the clearest, fastest, most decision-ready website has the advantage.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz builds mobile-first, conversion-optimized websites for Concord service businesses:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Fast-loading, mobile-first design — the majority of local searches happen on smartphones, and Google penalizes slow sites with lower rankings",
                "Click-to-call and tap-to-text functionality prominently placed above the fold — because Concord clients making a service decision want immediate, friction-free access to your team",
                "Online booking integrations for appointment-driven businesses — dentists, med spas, chiropractors, and restaurants all benefit from reduced scheduling friction",
                "Trust architecture: professional photography, licensing credentials, Google review widgets, before-and-after galleries, and transparent service descriptions",
                "Concord-specific landing pages for each service — capturing local search intent with geo-targeted content for Concord and surrounding communities",
                "Ongoing conversion rate optimization — testing headlines, CTAs, form design, and page layout to continuously improve the percentage of visitors who become appointments",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Get a Conversion-Optimized Website Built for Concord — See Our Work
            </a>
          </div>

          {/* 7. AI Receptionist & Lead Automation */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Every Missed Call Is a Lost Job —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Our AI Receptionist Follows Up in Seconds</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">According to research by <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT and InsideSales.com published in the Harvard Business Review</a>, leads contacted within 5 minutes are 21 times more likely to convert than those reached after just 30 minutes. In Concord's competitive service market — where multiple providers compete for every inquiry — every missed lead has a measurable cost.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz's AI Receptionist and marketing automation platform gives your Concord business a 24/7 lead capture and follow-up system:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Missed-call text-back: When a lead calls and you cannot answer, an automated SMS is sent within seconds — acknowledging the inquiry before the prospect considers calling your competitor",
                "Conversational AI for lead qualification: Your AI Receptionist can answer FAQs, collect service details, qualify leads, and schedule appointments without human intervention — including evenings, weekends, and holidays",
                "Automated appointment reminders and confirmation sequences that reduce no-shows — particularly valuable for dental practices, med spas, and wellness professionals",
                "CRM integration and lead tracking — every inquiry captured, tagged, and tracked from first contact through closed job, giving you complete visibility into which marketing channels generate your highest-value clients",
                "Emergency lead escalation — high-priority service requests (emergency HVAC, urgent plumbing, immediate electrical) are flagged and escalated immediately",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic mb-6">Industry research shows that businesses implementing AI marketing tools reported an average 11% increase in sales and a 28% reduction in marketing costs within six months of adoption. For Concord service businesses, AI automation is the operational foundation that makes every other marketing channel more effective.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Built for Your Industry, Not Adapted From Someone Else's Playbook — See If We're the Right Fit for Concord
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz serves a focused set of local service business verticals in Concord and the wider East Bay. Our specialization means deeper industry expertise, faster results, and strategies built on real market knowledge.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors — HVAC, Roofing, Plumbing & Electrical</h3>
              <p className="text-muted-foreground leading-relaxed">Concord's large residential base creates year-round demand for quality home service contractors. From established neighborhoods to newer developments, the combination of aging housing stock, seasonal extremes, and growing competition means the business that looks credible and responds quickly usually wins. We build marketing systems around Concord's seasonal demand cycles — delivering booked jobs, not just website traffic.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">Dentists, med spas, chiropractors, and related providers depend heavily on reviews, credibility, and a smoother inquiry experience. Concord's buyers compare carefully before booking — the digital experience influences the business before the first conversation even happens. We specialize in appointment-driven conversion funnels and HIPAA-aware reputation management.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed">Concord's dining scene — from Todos Santos Plaza to the Veranda shopping center — is competitive and active. Success requires more than great food: it requires a strong Google rating, visible social media presence, and active management of review profiles. We build the full digital reputation and visibility system that puts your restaurant top of mind when Concord residents decide where to eat.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers</h3>
              <p className="text-muted-foreground leading-relaxed">Concord's size and regional overlap make visibility especially important for real estate professionals. Buyers and sellers compare across city lines, and lead handling matters as much as lead generation. We build SEO, paid advertising, and content strategies that establish lasting local authority — turning your digital presence into a referral engine.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Real Client Results Across Our Service Areas
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">See what's possible when marketing runs as a complete, integrated system.</p>
          </div>

          <CampaignResultsCards cards={concordCards} />

          {/* Channel Compare */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 mt-12">Single-Channel Marketing Doesn't Win in Concord Anymore. Here's What Actually Moves the Needle.</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">Concord's buyers research before they commit. They check your Google ranking, read your reviews, visit your website, and may encounter you on social media — all before making contact. A single-channel approach captures only one of those touchpoints. An integrated system captures all of them, which is why our clients consistently outperform competitors who rely on SEO alone or ads alone.</p>
        </div>
      </section>

      {/* ===== DIFFERENTIATORS — 4 CARDS ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> WHY WE WIN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed Your Concord Business Before
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">There is no shortage of digital marketing agencies claiming to serve Concord businesses. Here is why what GrowSmallBiz builds consistently outperforms what general-purpose agencies deliver:</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { title: "Vertical Specialist", description: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros. We know your buyer psychology, your seasonal cycles, and your Concord competitive landscape." },
              { title: "Integrated System", description: "Every channel — SEO, Ads, Reputation, AI Automation — connects and feeds one goal: more booked appointments and service calls. Nothing runs in a silo." },
              { title: "AI-Powered Speed", description: "Our AI Receptionist follows up with missed leads within minutes via SMS and email. In Concord's competitive market, the first business to respond wins the client." },
              { title: "Built for Scale", description: "Concord is big enough that weak marketing gets exposed faster. We build systems designed for larger local markets where stronger execution matters more." },
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

          <p className="text-foreground/80 leading-relaxed mt-10 max-w-3xl">We do not use templates. We do not run your campaign from a checklist designed for a different market. Every strategy is built from your specific competitive landscape, your Concord service area, your vertical, and your revenue goals.</p>
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
        title="Your Questions Answered — No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in Concord"
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Concord, CA?", answer: "GrowSmallBiz primarily works with local service businesses and repeat-visit local businesses, including home services, dentists, med spas, chiropractors, real estate professionals, restaurants, and other businesses that rely on local visibility, qualified inquiries, and consistent follow-up." },
          { question: "How much does digital marketing cost for a Concord local service business?", answer: "Investment levels vary based on your business size, revenue goals, competitive landscape, and the combination of services you need. Most Concord service businesses in our portfolio invest between $1,000 and $5,000 per month across SEO, Google Ads, reputation management, and AI automation — with our core AI Client Growth System starting at $797 per month plus a one-time setup fee. We build custom packages aligned to your specific goals and service area." },
          { question: "How long does it take to see results from local SEO in Concord?", answer: "Google Business Profile optimizations show measurable movement within 4 to 8 weeks. Full local 3-pack rankings for competitive Concord search terms are typically achieved within 3 to 6 months, depending on your industry and starting position. Google Ads campaigns generate qualified leads from day one." },
          { question: "Does my Concord business need to be on social media?", answer: "For most Concord service businesses, yes — but the strategy differs by vertical. Restaurants benefit enormously from Instagram and Facebook visibility. Home service contractors benefit most from retargeting campaigns and lookalike audience campaigns targeting homeowners. Health and wellness professionals benefit from reputation-building content and before-and-after campaigns." },
          { question: "How important are online reviews for Concord businesses?", answer: "Very important. Concord buyers compare across multiple cities and multiple providers. A business with fewer than 4.5 stars is frequently filtered out before a homeowner ever visits the website. Our reputation management system proactively builds your review volume, protects your rating, and ensures your Google profile reflects the quality of service you actually deliver." },
          { question: "Do I need Google Local Service Ads if I'm already running Google Ads?", answer: "For licensed home service contractors in Concord — HVAC, plumbing, electrical, roofing — LSA is a meaningful complement to traditional Google Ads, not a replacement. LSA ads appear above standard search ads and carry the Google Guaranteed badge. For trades where LSA is available, running both simultaneously typically maximizes your total share of the local search results page." },
          { question: "How does AI improve local marketing for small businesses?", answer: "AI improves local marketing when it is used for practical business functions such as faster lead response, smarter follow-up, better workflow consistency, and more efficient optimization. Our AI Receptionist ensures that every inquiry is acknowledged and followed up within seconds, regardless of when it arrives. Research from MIT confirms that leads contacted within 5 minutes are 21 times more likely to convert." },
          { question: "Why does local SEO still matter if search is becoming more AI-driven?", answer: "Because Google says the same foundational SEO best practices still apply to AI features, and local search visibility still depends on factors such as relevance, distance, and popularity. Strong local SEO and strong AI visibility increasingly reinforce each other instead of competing." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about marketing in Concord?",
          description: "We're here to help. Reach out to us for a personalized consultation.",
          tagline: "Let's grow your Concord business together.",
        }}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Every Day You Wait, Your Competitors Book Another Concord Customer That Should Have Been Yours
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Concord's size and competitive overlap reward the businesses with the strongest digital presence — and move quickly past those without one. While you are reading this, Concord homeowners are searching Google for services you offer. If you are not in the top three local results, you are invisible to them. If your reviews are weak, they are filtering you out. If your phone goes to voicemail and you do not follow up within minutes, they have already called your competitor.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">GrowSmallBiz is the digital marketing agency that Concord local service businesses trust to dominate local search, generate qualified leads, and build the integrated marketing systems that produce sustainable revenue growth. We bring 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of local service business marketing in one of Contra Costa County's most competitive markets.</p>
            <p className="text-foreground/70 font-semibold mt-6">No long-term contracts. No cookie-cutter templates. No excuses. Just a team that builds the marketing system your Concord business deserves.</p>
          </div>
        </div>
      </section>

      {/* ===== PRE-FORM PERSON CTA ===== */}
      <PersonCTA
        title="Schedule Strategy Call"
        description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Concord service business."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
        sectionClassName="py-16"
      />

      {/* ===== CONSULTATION FORM ===== */}
      <ConsultationFormSection utmCampaign="concord-consultation" utmMedium="concord-ca" />

      {/* ===== CROSS-LINK PILLS ===== */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Martinez", to: "/locations/martinez-ca/" },
              { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
              { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
              { label: "Danville", to: "/locations/danville-ca/" },
              { label: "San Ramon", to: "/locations/san-ramon-ca/" },
              { label: "Dublin", to: "/locations/dublin-ca/" },
              { label: "Pleasanton", to: "/locations/pleasanton-ca/" },
              { label: "Livermore", to: "/locations/livermore-ca/" },
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

export default ConcordCA;
